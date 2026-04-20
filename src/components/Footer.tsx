import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const goToContact = () => {
    navigate("/", { state: { scrollTo: "contact" } });
  };

  return (
    <footer className="relative z-[1] bg-card border-t border-border py-10 px-4 sm:px-8 md:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center gap-8 md:flex-row md:items-start md:justify-between md:gap-6">
          <div className="flex items-center gap-3 md:flex-shrink-0">
            <img src="/btlogonew.png" alt="Batara Techno Solutions" className="h-16 w-auto" />
          </div>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 md:pt-1">
            <Link to="/industries" className="text-silver text-xs uppercase tracking-wider hover:text-foreground transition-colors">Industries</Link>
            <Link to="/solutions" className="text-silver text-xs uppercase tracking-wider hover:text-foreground transition-colors">Solutions</Link>
            <Link to="/technical-gallery" className="text-silver text-xs uppercase tracking-wider hover:text-foreground transition-colors">Technical Gallery</Link>
            <Link to="/about" className="text-silver text-xs uppercase tracking-wider hover:text-foreground transition-colors">About Us</Link>
            <Link to="/careers" className="text-silver text-xs uppercase tracking-wider hover:text-foreground transition-colors">Careers</Link>
            <button onClick={goToContact} className="text-silver text-xs uppercase tracking-wider hover:text-foreground transition-colors">Contact</button>
          </div>

          <address className="not-italic font-mono text-[10px] text-silver tracking-wider text-center md:text-right leading-relaxed md:flex-shrink-0">
            <p className="font-semibold text-foreground/80 text-[11px] uppercase tracking-widest mb-1">
              Batara Technosolutions Pvt Ltd
            </p>
            <p>No.1443/1444, 4th Floor</p>
            <p>80 Feet Road, Chandra Layout</p>
            <p>Bengaluru North, Karnataka</p>
            <p>India – 560025</p>
          </address>
        </div>

        <div className="mt-8 pt-6 border-t border-border/50 flex items-center justify-center">
          <p className="font-mono text-[10px] text-silver tracking-wider text-center">
            © 2026 Batara Techno Solutions. All rights reserved.&nbsp;&nbsp;|&nbsp;&nbsp;Designed by{" "}
            <a
              href="https://www.cybaemtech.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              CybaemTech
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
