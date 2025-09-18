import PublicHeader from "@/components/PublicHeader";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="min-h-screen flex flex-col">
      <PublicHeader />
      <main className="flex-1">
        <section className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-bold">Grow Faster with Better Leads</h1>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            Capture, qualify, and convert leads with a streamlined workflow.
          </p>
          <div className="mt-6 flex gap-3 justify-center">
            <Button asChild>
              <Link to="/signup">Get Started</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/signin">Sign In</Link>
            </Button>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12 grid md:grid-cols-3 gap-6">
          {["Pipeline", "Scoring", "Automation"].map((title) => (
            <div key={title} className="border rounded-lg p-6 text-left">
              <h3 className="font-semibold mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground">
                Powerful tools to manage leads efficiently and close more deals.
              </p>
            </div>
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}


