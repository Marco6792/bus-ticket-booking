import Navbar from "@/components/ui/navbar";
import { Background } from "@/components/ui/background";

export default function SignUp() {
  return (
    <div className="min-h-screen">
      <Background />
      <Navbar />
      <main className="container relative mx-auto px-4 pt-24">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-6xl font-roboto">
            Sign <span className="text-red-500">Up</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground font-roboto">
            Create your account to get started.
          </p>
        </div>
      </main>
    </div>
  );
}
