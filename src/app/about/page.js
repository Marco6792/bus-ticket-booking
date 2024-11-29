import Navbar from "@/components/ui/navbar";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 pt-24">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl font-roboto">
          About <span className="text-primary">Us</span>
        </h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground font-roboto">
          Learn more about our team and mission.
        </p>
      </main>
    </div>
  );
}
