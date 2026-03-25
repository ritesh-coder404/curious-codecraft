import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkles } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Content", href: "#content" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    links.forEach((link) => {
      const el = document.querySelector(link.href);
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 gradient-border ${
        scrolled
          ? "bg-background/90 backdrop-blur-xl shadow-[0_4px_30px_hsl(175_80%_50%/0.08)]"
          : "bg-background/60 backdrop-blur-md"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <motion.a
          href="#"
          className="font-display text-xl font-bold gradient-text flex items-center gap-1.5"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Sparkles className="w-4 h-4 text-primary" />
          R.
        </motion.a>

        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <motion.a
              key={l.label}
              href={l.href}
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 400 }}
              className={`relative font-display text-xs tracking-widest uppercase px-4 py-2 rounded-full transition-all duration-300 ${
                activeSection === l.href
                  ? "text-primary-foreground bg-primary/90 text-glow shadow-[0_0_20px_hsl(175_80%_50%/0.3)]"
                  : "text-muted-foreground hover:text-primary hover:bg-primary/10"
              }`}
            >
              {l.label}
            </motion.a>
          ))}
        </div>

        <motion.button
          onClick={() => setOpen(!open)}
          className="md:hidden text-foreground p-2 rounded-lg hover:bg-primary/10 transition-colors"
          whileTap={{ scale: 0.9 }}
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </motion.button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-primary/20 bg-background/95 backdrop-blur-xl overflow-hidden"
          >
            <div className="px-6 py-4 space-y-1">
              {links.map((l, i) => (
                <motion.a
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className={`block font-display text-sm tracking-widest uppercase py-3 px-4 rounded-lg transition-all ${
                    activeSection === l.href
                      ? "text-primary-foreground bg-primary/90 text-glow"
                      : "text-muted-foreground hover:text-primary hover:bg-primary/10"
                  }`}
                >
                  {l.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;