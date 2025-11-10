import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const experiments = [
  {
    id: 1,
    title: "GEOMETRIC STUDIES",
    type: "CONCEPT",
    span: "col-span-1 row-span-2",
  },
  {
    id: 2,
    title: "UI EXPLORATIONS",
    type: "INTERFACE",
    span: "col-span-1 row-span-1",
  },
  {
    id: 3,
    title: "PHOTOGRAPHY",
    type: "VISUAL",
    span: "col-span-1 row-span-1",
  },
  {
    id: 4,
    title: "TYPE EXPERIMENTS",
    type: "TYPOGRAPHY",
    span: "col-span-1 row-span-1",
  },
  {
    id: 5,
    title: "MOTION DESIGN",
    type: "ANIMATION",
    span: "col-span-1 row-span-1",
  },
  {
    id: 6,
    title: "3D RENDERS",
    type: "DIMENSION",
    span: "col-span-1 row-span-2",
  },
];

const Lab = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-6 pt-32 pb-16">
        <div className="mb-16">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-4">
            LAB
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Personal experiments, creative concepts, and visual explorations.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 auto-rows-[300px] gap-px bg-border">
          {experiments.map((experiment) => (
            <div
              key={experiment.id}
              className={`lab-card bg-background p-6 group cursor-pointer relative overflow-hidden ${experiment.span}`}
            >
              <div className="absolute inset-0 bg-muted" />
              <div className="absolute inset-0 bg-foreground opacity-0 group-hover:opacity-10 transition-opacity duration-fast" />
              
              <div className="relative h-full flex flex-col justify-between">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-fast">
                  <span className="inline-block px-3 py-1 bg-accent text-accent-foreground text-xs font-mono uppercase tracking-wider">
                    {experiment.type}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold tracking-tight text-foreground/80 group-hover:text-foreground transition-colors duration-fast">
                  {experiment.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Lab;
