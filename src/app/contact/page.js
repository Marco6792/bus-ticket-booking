import Navbar from "@/components/ui/navbar";

export default function Contact() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 pt-24">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl font-roboto">
          Contact <span className="text-primary">Us</span>
        </h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground font-roboto">
          Get in touch with our team.
        </p>
      </main>
    </div>
  );
}
