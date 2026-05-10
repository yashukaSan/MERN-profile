import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X, Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface HeaderProps {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

export function Header({ theme, toggleTheme }: HeaderProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "/projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: 0 }}
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 py-4"
      >
        {/* Glassmorphism nav bar for desktop */}
        <nav className="hidden md:block max-w-7xl mx-auto">
          <div className="backdrop-blur-lg bg-card/70 border border-border/50 rounded-2xl px-8 py-4 shadow-lg">
            <div className="flex items-center justify-between">
              <Link to="/" className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-teal-500 bg-clip-text text-transparent">
                Portfolio
              </Link>
              
              <div className="flex items-center gap-8">
                {navLinks.map((link) => (
                  link.href.startsWith("#") ? (
                    <button
                      key={link.name}
                      onClick={() => scrollToSection(link.href)}
                      className="text-sm text-foreground/80 hover:text-cyan-400 transition-colors"
                    >
                      {link.name}
                    </button>
                  ) : (
                    <Link
                      key={link.name}
                      to={link.href}
                      className="text-sm text-foreground/80 hover:text-cyan-400 transition-colors"
                    >
                      {link.name}
                    </Link>
                  )
                ))}
                
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
                  aria-label="Toggle theme"
                >
                  {theme === "dark" ? (
                    <Sun className="w-4 h-4 text-cyan-400" />
                  ) : (
                    <Moon className="w-4 h-4 text-cyan-600" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Mobile header */}
        <div className="md:hidden backdrop-blur-lg bg-card/70 border border-border/50 rounded-2xl px-4 py-3 shadow-lg">
          <div className="flex items-center justify-between">
            <Link to="/" className="font-bold bg-gradient-to-r from-cyan-400 to-teal-500 bg-clip-text text-transparent">
              Portfolio
            </Link>
            
            <div className="flex items-center gap-2">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <Sun className="w-4 h-4 text-cyan-400" />
                ) : (
                  <Moon className="w-4 h-4 text-cyan-600" />
                )}
              </button>
              
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5 text-cyan-400" />
                ) : (
                  <Menu className="w-5 h-5 text-cyan-400" />
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 left-4 right-4 z-40 md:hidden"
          >
            <div className="backdrop-blur-lg bg-card/95 border border-border/50 rounded-2xl p-6 shadow-xl">
              <nav className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  link.href.startsWith("#") ? (
                    <button
                      key={link.name}
                      onClick={() => scrollToSection(link.href)}
                      className="text-left text-foreground/80 hover:text-cyan-400 transition-colors py-2"
                    >
                      {link.name}
                    </button>
                  ) : (
                    <Link
                      key={link.name}
                      to={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-foreground/80 hover:text-cyan-400 transition-colors py-2"
                    >
                      {link.name}
                    </Link>
                  )
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
