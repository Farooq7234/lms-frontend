import PublicHeader from "@/components/PublicHeader";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <PublicHeader />
      <main className="flex-1">
        <section className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold">Lead Management System</h1>
          <p className="mt-2 text-muted-foreground">Welcome. Please sign in to continue.</p>
        </section>
      </main>
      <Footer />
    </div>
  );
}


