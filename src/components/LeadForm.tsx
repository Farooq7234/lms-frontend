import { useEffect } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// 🔹 enums from backend schema
const SOURCE_OPTIONS = [
  "website",
  "facebook_ads",
  "google_ads",
  "referral",
  "events",
  "other",
] as const;

const STATUS_OPTIONS = [
  "new",
  "contacted",
  "qualified",
  "lost",
  "won",
] as const;

// 🔹 Zod schema with enum
const leadSchema = z.object({
  first_name: z.string().min(1, "First name is required"),
  last_name: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(5, "Phone is required"),
  company: z.string().min(1, "Company is required"),
  city: z.string().min(1, "City is required"),
  state: z.string().min(1, "State is required"),
  source: z.enum(SOURCE_OPTIONS).refine((val) => !!val, {
    message: "Source is required",
  }),
  status: z.enum(STATUS_OPTIONS).refine((val) => !!val, {
    message: "Status is required",
  }),
  score: z.coerce.number().min(0),
  lead_value: z.coerce.number().min(0),
  is_qualified: z.coerce.boolean().optional().default(false),
});

export type LeadFormValues = z.infer<typeof leadSchema>;

type LeadFormProps = {
  defaultValues?: Partial<LeadFormValues>;
  onSubmit: (values: LeadFormValues) => void | Promise<void>;
  submitLabel?: string;
};

export default function LeadForm({
  defaultValues,
  onSubmit,
  submitLabel = "Save",
}: LeadFormProps) {
  const form = useForm<LeadFormValues>({
    resolver: zodResolver(leadSchema) as any,
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      company: "",
      city: "",
      state: "",
      source: "website",
      status: "new",
      score: 0,
      lead_value: 0,
      is_qualified: false,
      ...(defaultValues as Partial<LeadFormValues>),
    },
  });

  const submitHandler: SubmitHandler<LeadFormValues> = (data) => onSubmit(data);

  useEffect(() => {
    if (defaultValues) {
      form.reset({ ...form.getValues(), ...defaultValues });
    }
  }, [defaultValues]);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(submitHandler)}
        className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-3xl"
      >
        {(
          [
            { name: "first_name", label: "First Name" },
            { name: "last_name", label: "Last Name" },
            { name: "email", label: "Email", type: "email" },
            { name: "phone", label: "Phone" },
            { name: "company", label: "Company" },
            { name: "city", label: "City" },
            { name: "state", label: "State" },
            { name: "score", label: "Score", type: "number" },
            { name: "lead_value", label: "Lead Value", type: "number" },
          ] as Array<{ name: keyof LeadFormValues; label: string; type?: string }>
        ).map((field) => (
          <FormField
            key={field.name}
            control={form.control}
            name={field.name as any}
            render={({ field: f }) => (
              <FormItem>
                <FormLabel>{field.label}</FormLabel>
                <FormControl>
                  <Input type={field.type || "text"} {...f} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}

        {/* 🔹 Source dropdown */}
        <FormField
          control={form.control}
          name="source"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Source</FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select source" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {SOURCE_OPTIONS.map((opt) => (
                    <SelectItem key={opt} value={opt}>
                      {opt}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* 🔹 Status dropdown */}
        <FormField
          control={form.control}
          name="status"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Status</FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {STATUS_OPTIONS.map((opt) => (
                    <SelectItem key={opt} value={opt}>
                      {opt}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="md:col-span-2 mt-4">
          <Button type="submit" className="w-full md:w-auto">
            {submitLabel}
          </Button>
        </div>
      </form>
    </Form>
  );
}
