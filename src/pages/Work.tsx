import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const projects = [
  {
    id: 1,
    title: "CORPORATE IDENTITY",
    category: "BRANDING",
    year: "2024",
  },
  {
    id: 2,
    title: "E-COMMERCE PLATFORM",
    category: "UI/UX DESIGN",
    year: "2024",
  },
  {
    id: 3,
    title: "MOBILE APPLICATION",
    category: "PRODUCT DESIGN",
    year: "2023",
  },
  {
    id: 4,
    title: "DASHBOARD REDESIGN",
    category: "INTERFACE",
    year: "2023",
  },
  {
    id: 5,
    title: "BRAND GUIDELINES",
    category: "SYSTEMS",
    year: "2023",
  },
  {
    id: 6,
    title: "WEB PLATFORM",
    category: "DEVELOPMENT",
    year: "2022",
  },
];

const Work = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-6 pt-32 pb-16">
        <div className="mb-16">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-4">
            WORK
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Selected corporate projects and client collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {projects.map((project) => (
            <div
              key={project.id}
              className="lab-card bg-background p-8 group cursor-pointer relative overflow-hidden"
            >
              <div className="aspect-[4/3] bg-muted mb-6 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-foreground opacity-0 group-hover:opacity-5 transition-opacity duration-fast" />
                <span className="text-6xl font-bold text-muted-foreground/20">
                  {project.id.toString().padStart(2, '0')}
                </span>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between items-start gap-4">
                  <h3 className="text-lg font-bold tracking-tight group-hover:text-accent transition-colors duration-fast">
                    {project.title}
                  </h3>
                  <span className="text-xs font-mono text-muted-foreground whitespace-nowrap">
                    {project.year}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground font-mono">
                  {project.category}
                </p>
              </div>
              
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-accent group-hover:w-full transition-all duration-fast" />
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Work;
