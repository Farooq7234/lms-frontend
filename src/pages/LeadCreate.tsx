import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import LeadForm, { type LeadFormValues } from "@/components/LeadForm";

export default function LeadCreate() {
  const navigate = useNavigate();

  const handleSubmit = async (values: LeadFormValues) => {
    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/v1/leads/create`, values);
      toast.success("Lead created successfully");
      navigate("/leads");
      console.log(res);
    } catch (err) {
      console.error(err);
      toast.error("Failed to create lead");
    }
  };

  return (
    <div className="container mx-auto p-6 flex justify-center">
      <LeadForm defaultValues={{}} onSubmit={handleSubmit} submitLabel="Create Lead" />
    </div>
  );
}


