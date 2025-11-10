import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col" data-page="Home">
      <Navbar />
      
      {/* Hero Section */}
      <main className="flex-1 flex items-center justify-center px-10 grid-background">
        <div className="max-w-4xl w-full text-center space-y-8">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter [word-spacing:8px]">
            SHAS-LAB
          </h1>
          <div className="h-[2px] w-24 bg-accent mx-auto" />
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Experimenting with ideas at the intersection of design and logic.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Home;