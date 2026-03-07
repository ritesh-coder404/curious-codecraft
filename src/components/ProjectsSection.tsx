import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Dashboard",
    description:
      "A responsive admin dashboard with product management, analytics charts, and order tracking built with modern UI components.",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
    demo: "#",
    github: "https://github.com/ritesh-coder404",
  },
  {
    title: "Weather App",
    description:
      "Real-time weather application with location search, 5-day forecast, and dynamic backgrounds based on weather conditions.",
    tags: ["JavaScript", "API", "CSS"],
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&q=80",
    demo: "#",
    github: "https://github.com/ritesh-coder404",
  },
  {
    title: "Portfolio Website",
    description:
      "A modern, animated portfolio website with smooth scrolling, dark theme, and responsive design for all devices.",
    tags: ["React", "Tailwind", "Framer Motion"],
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&q=80",
    demo: "#",
    github: "https://github.com/ritesh-coder404",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="font-display text-xs tracking-[0.3em] uppercase text-primary mb-3">
            My Work
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Featured<span className="gradient-text"> Projects</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group rounded-xl border border-border bg-card overflow-hidden hover:border-primary/50 hover:shadow-[0_0_30px_hsl(175_80%_50%/0.1)] transition-all duration-300"
            >
              <div className="relative overflow-hidden h-44">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-full bg-primary text-primary-foreground hover:scale-110 transition-transform"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-full bg-primary text-primary-foreground hover:scale-110 transition-transform"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <div className="p-5">
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-display px-2.5 py-1 rounded-full bg-secondary text-primary border border-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
