"use client"
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";
import LeadForm, { type LeadFormValues } from "@/components/LeadForm";

export default function LeadEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [lead, setLead] = useState<Partial<LeadFormValues> | null>(null);

  useEffect(() => {
    const fetchLead = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/v1/leads/${id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setLead(res.data?.data);
      } catch (err) {
        console.error(err);
        toast.error("Failed to load lead");
      } finally {
        setLoading(false);
      }
    };
    fetchLead();
  }, [id]);

  const handleSubmit = async (values: LeadFormValues) => {
    try {
      const res = await axios.patch(`${import.meta.env.VITE_API_URL}/api/v1/leads/${id}`, values);
      toast.success("Lead updated successfully");
      navigate("/leads");
      console.log(res);
    } catch (err) {
      console.error(err);
      toast.error("Failed to update lead");
    }
  };

  if (loading) return <div className="p-6">Loading...</div>;

  return (
    <div className="container mx-auto p-6 flex justify-center">
      <LeadForm defaultValues={lead ?? {}} onSubmit={handleSubmit} submitLabel="Update Lead" />
    </div>
  );
}


