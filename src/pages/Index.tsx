import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useScrollProgress } from "@/hooks/use-scroll-progress";
import profileImage from "@/assets/profile-image.jpg";

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

const Index = () => {
  const scrollProgress = useScrollProgress();
  
  const explosionScale = 1 + scrollProgress * 2;
  const explosionRotate = scrollProgress * 360;
  const explosionOpacity = Math.max(0, 1 - scrollProgress * 2);
  const explosionZ = scrollProgress * 500;

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
  <section
  className="min-h-screen flex flex-col md:flex-row items-center justify-center px-10 grid-background relative"
  style={{ perspective: "0px" }}
>
  {/* Left: Text + Profile */}
  <div className="flex-1 max-w-4xl w-full text-center md:text-left space-y-6 relative z-10 order-2 md:order-1 centered">
    <div className="flex items-center justify-center md:justify-start gap-10 mb-8">
      
    </div>
    

    <h1
      className="text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-[0.05em]"
      style={{
        transform: 'translateY(-170px) translateX(10px) scale(1)', 
        opacity: explosionOpacity,
        transformStyle: "preserve-3d",
      }}
    >
      SHAS - LAB
    </h1>
    
    
    

    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed tracking-wide [word-spacing:5px] mx-auto md:mx-0"
       style={{
        transform: 'translateY(-110px) translateX(10px) scale(1)', 
     }} >
      
    </p>
  </div>

  {/* Right: Spline Scene */}
  <div className="flex-1 flex justify-center items-center mt-12 md:mt-0 order-1 md:order-2">
    <div
      className="relative"
      style={{
        width: "1000px",
        height: "1100px",
        transform: 'translateY(-10px) translateX(120px) scale(1.2)',
      }}
    >
      <spline-viewer url="https://prod.spline.design/63YoIKsEXJygpvju/scene.splinecode"></spline-viewer>
    </div>
  </div>
</section>


      {/* Work Section */}
      <section className="min-h-screen py-32 px-6 section-divider">
        <div className="container mx-auto">
          <div className="mb-16">
            <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-4">
              WORK
            </h2>
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
        </div>
      </section>

      {/* Lab Section */}
      <section className="min-h-screen py-32 px-6 section-divider">
        <div className="container mx-auto">
          <div className="mb-16">
            <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-4">
              LAB
            </h2>
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
        </div>
      </section>

      {/* About Section */}
      <section className="min-h-screen py-32 px-6 section-divider">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-16">
            <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-4">
              ABOUT
            </h2>
          </div>

          <div className="space-y-8 text-lg leading-relaxed">
            <p className="text-foreground">
              SHAS LAB IS A DIGITAL LABORATORY WHERE DESIGN MEETS LOGIC.
            </p>
            
            <p className="text-muted-foreground">
              I create interfaces that balance aesthetic minimalism with functional precision.
            </p>
            
            <p className="text-muted-foreground">
              Every project is an experiment in clarity, structure, and intent.
            </p>
            
            <div className="pt-12 space-y-4">
              <p className="text-sm font-mono uppercase tracking-wider text-foreground">
                GET IN TOUCH
              </p>
              <a 
                href="mailto:hello@shaslab.com" 
                className="lab-link text-xl font-bold block"
              >
                HELLO@SHASLAB.COM
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
