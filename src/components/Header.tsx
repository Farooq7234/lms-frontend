import { Link, useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    try {
      localStorage.removeItem("token");
    } catch {}
    navigate("/signin", { replace: true });
  };

  const isActive = (path: string) => (location.pathname === path ? "text-primary" : "text-foreground");

  return (
    <header className="w-full border-b bg-background">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/leads" className="font-semibold text-lg">
          LMS
        </Link>
        <nav className="flex items-center gap-4">
          <Link to="/leads" className={`text-sm bg-primary text-primary-foreground px-4 py-2 rounded-md ${isActive("/leads")}`}>Leads</Link>
          {/* <Link to="/leads/new" className={`text-sm bg-green-500 text-primary-foreground px-4 py-2 rounded-md ${isActive("/leads/new")}`}>Add Lead</Link> */}
        </nav>
        <div className="flex items-center gap-2">
          <Button variant="destructive" onClick={handleLogout}>Logout</Button>
        </div>
      </div>
    </header>
  );
}


