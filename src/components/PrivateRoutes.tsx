import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Header from "@/components/Header";
import { getCurrentUser } from "@/api/auth";

const PrivateRoutes = () => {
  const [loading, setLoading] = useState(true);
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await getCurrentUser();
        console.log(response);
        setIsAuth(true);
      } catch (err) {
        setIsAuth(false);
      } finally {
        setLoading(false);
      }
    };
    checkAuth();
  }, []);
  console.log(isAuth);
  if (loading) return <div>Loading...</div>; 

  return isAuth ? (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  ) : (
    <Navigate to="/signin" />
  );
};

export default PrivateRoutes;
