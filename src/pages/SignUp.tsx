import { registerUser } from "@/api/auth";
import { SignUpForm } from "@/components/SignUpForm";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export default function SignUp() {
    const navigate = useNavigate();
  const handleSubmit = async (values: {
    fullName: string;
    email: string;
    password: string;
    confirmPassword: string;
  }) => {
    try {
        const response = await registerUser(values);
        toast.success(response.data.message || "Sign up successful");
        navigate("/signin");
        console.log(response);
    } catch (error) {
        toast.error((error as any).data.message || "Sign up failed");
        console.log(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <SignUpForm onSubmit={handleSubmit} />
    </div>
  );
}


