import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const leadSchema = z.object({
  first_name: z.string().min(1, "First name is required"),
  last_name: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(5, "Phone is required"),
  company: z.string().min(1, "Company is required"),
  city: z.string().min(1, "City is required"),
  state: z.string().min(1, "State is required"),
  source: z.string().min(1, "Source is required"),
  status: z.string().min(1, "Status is required"),
  score: z.coerce.number().min(0),
  lead_value: z.coerce.number().min(0),
  is_qualified: z.coerce.boolean().optional().default(false),
});

export default function LeadForm({
  defaultValues,
  onSubmit,
  submitLabel = "Save",
}) {
  const form = useForm({
    resolver: zodResolver(leadSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      company: "",
      city: "",
      state: "",
      source: "",
      status: "",
      score: 0,
      lead_value: 0,
      is_qualified: false,
      ...defaultValues,
    },
  });

  useEffect(() => {
    if (defaultValues) {
      form.reset({ ...form.getValues(), ...defaultValues });
    }
  }, [defaultValues]);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-3xl">
        {[
          { name: "first_name", label: "First Name" },
          { name: "last_name", label: "Last Name" },
          { name: "email", label: "Email", type: "email" },
          { name: "phone", label: "Phone" },
          { name: "company", label: "Company" },
          { name: "city", label: "City" },
          { name: "state", label: "State" },
          { name: "source", label: "Source" },
          { name: "status", label: "Status" },
          { name: "score", label: "Score", type: "number" },
          { name: "lead_value", label: "Lead Value", type: "number" },
        ].map((field) => (
          <FormField
            key={field.name}
            control={form.control}
            name={field.name}
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

        <div className="md:col-span-2 mt-4">
          <Button type="submit" className="w-full md:w-auto">{submitLabel}</Button>
        </div>
      </form>
    </Form>
  );
}


