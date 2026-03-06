import { motion } from "framer-motion";
import { Code, Smartphone, Globe, Youtube } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-display text-sm tracking-[0.3em] uppercase text-primary mb-3">
            About
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-8">
            Who I <span className="gradient-text">Am</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-5 text-muted-foreground leading-relaxed"
          >
            <p>
              I'm a <span className="text-foreground font-medium">Tech Content Creator</span> and{" "}
              <span className="text-foreground font-medium">Web Developer</span>. On my YouTube
              channel, I create content about AI tools, ChatGPT tips and tricks, the latest Android
              apps, and mobile video editing.
            </p>
            <p>
              I have experience in Frontend technologies — HTML, CSS, and JavaScript — where I design
              modern, responsive, and user-friendly websites. I'm also learning Backend development
              to understand server-side logic, databases, and application functionality.
            </p>
            <p>
              My goal is to become a{" "}
              <span className="text-primary font-medium">Full Stack Developer</span> and continue
              creating valuable tech content that helps people learn about new technologies.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { icon: Youtube, label: "Content Creator", desc: "AI & Tech Videos" },
              { icon: Code, label: "Frontend Dev", desc: "HTML, CSS, JS" },
              { icon: Globe, label: "Responsive Design", desc: "All Devices" },
              { icon: Smartphone, label: "Mobile First", desc: "Smooth UX" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="bg-card border border-border rounded-xl p-5 hover:border-primary/40 hover:border-glow transition-all duration-300"
              >
                <item.icon className="w-6 h-6 text-primary mb-3" />
                <p className="font-display text-sm font-bold text-foreground">{item.label}</p>
                <p className="text-xs text-muted-foreground mt-1">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
