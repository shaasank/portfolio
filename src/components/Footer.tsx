export const Footer = () => {
  return (
    <footer className="border-t border-border mt-24">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
            MADE IN SHAS LAB
          </p>
          <div className="flex gap-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="lab-link text-xs font-mono uppercase tracking-wider text-muted-foreground hover:text-accent transition-colors duration-fast"
            >
              GITHUB
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="lab-link text-xs font-mono uppercase tracking-wider text-muted-foreground hover:text-accent transition-colors duration-fast"
            >
              LINKEDIN
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="lab-link text-xs font-mono uppercase tracking-wider text-muted-foreground hover:text-accent transition-colors duration-fast"
            >
              TWITTER
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
