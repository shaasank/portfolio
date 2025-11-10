import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-6 pt-32 pb-16">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-16">
            ABOUT
          </h1>

          <div className="grid md:grid-cols-2 gap-16 mb-16">
            <div className="space-y-8">
              <div className="aspect-square bg-muted border border-border" />
            </div>

            <div className="space-y-8 text-lg leading-relaxed">
              <p className="text-foreground">
                Designer and developer focused on minimalist systems.
              </p>
              
              <p className="text-foreground">
                Every project is an experiment in clarity and precision.
              </p>
              
              <p className="text-foreground">
                Based somewhere between structure and creativity.
              </p>
              
              <p className="text-foreground">
                Currently available for select collaborations.
              </p>
            </div>
          </div>

          <div className="section-divider pt-16">
            <h2 className="text-2xl font-bold tracking-tight mb-8">
              CONTACT
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-sm font-mono text-muted-foreground mb-2">EMAIL</p>
                <a 
                  href="mailto:hello@shaslab.com"
                  className="lab-link text-lg font-semibold hover:text-accent transition-colors duration-fast"
                >
                  hello@shaslab.com
                </a>
              </div>
              <div>
                <p className="text-sm font-mono text-muted-foreground mb-2">SOCIAL</p>
                <div className="flex gap-4">
                  <a
                    href="https://github.com"
                    className="lab-link text-lg font-semibold hover:text-accent transition-colors duration-fast"
                  >
                    GH
                  </a>
                  <span className="text-muted-foreground">/</span>
                  <a
                    href="https://linkedin.com"
                    className="lab-link text-lg font-semibold hover:text-accent transition-colors duration-fast"
                  >
                    LI
                  </a>
                  <span className="text-muted-foreground">/</span>
                  <a
                    href="https://twitter.com"
                    className="lab-link text-lg font-semibold hover:text-accent transition-colors duration-fast"
                  >
                    TW
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
