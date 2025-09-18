import { loginUser } from "@/api/auth";
import { SignInForm } from "@/components/SignInForm";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export default function SignIn() {
  const navigate = useNavigate()
  const handleSubmit = async (values: { email: string; password: string }) => {
   try {
    const response = await loginUser(values);
    toast.success(response.data.message || "Login successful");
    navigate('/leads')

    console.log(response);  
   } catch (error) {
    console.log(error);
    toast.error((error as any).data.message || "Login failed");
   }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <SignInForm onSubmit={handleSubmit} />
    </div>
  );
}

