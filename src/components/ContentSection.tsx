import { motion } from "framer-motion";
import { Play, Cpu, Smartphone, Video } from "lucide-react";

const topics = [
  {
    icon: Cpu,
    title: "AI Tools & ChatGPT",
    desc: "Tips, tricks, and tutorials on the latest AI tools to boost your productivity.",
  },
  {
    icon: Smartphone,
    title: "Android Apps",
    desc: "Reviews and guides on the best and latest Android applications.",
  },
  {
    icon: Video,
    title: "Mobile Video Editing",
    desc: "Learn professional video editing techniques right from your phone.",
  },
  {
    icon: Play,
    title: "Tech Tutorials",
    desc: "Easy-to-follow tutorials covering web development and tech topics.",
  },
];

const ContentSection = () => {
  return (
    <section id="content" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="font-display text-sm tracking-[0.3em] uppercase text-primary mb-3">
            Content
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            What I <span className="gradient-text">Create</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Exploring tech topics on YouTube to help people learn and grow.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {topics.map((topic, i) => (
            <motion.div
              key={topic.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group bg-card border border-border rounded-xl p-7 hover:border-primary/40 hover:border-glow transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <topic.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-lg font-bold mb-2">{topic.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{topic.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
