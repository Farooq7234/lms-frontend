import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function PublicHeader() {
  return (
    <header className="w-full border-b bg-background">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/home" className="font-semibold text-lg">LMS</Link>
        <nav className="flex items-center gap-4">
          <Link to="/landing" className="text-sm">Landing</Link>
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild>
            <Link to="/signin">Login</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}


