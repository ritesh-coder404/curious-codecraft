import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "HTML", level: 95 },
      { name: "CSS", level: 90 },
      { name: "JavaScript", level: 80 },
      { name: "C", level: 70 },
      { name: "C++", level: 65 },
      { name: "Java", level: 60 },
      { name: "SQL", level: 75 },
    ],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      { name: "React", level: 65 },
      { name: "Bootstrap", level: 85 },
      { name: "Express.js", level: 55 },
      { name: "Tailwind CSS", level: 90 },
    ],
  },
  {
    title: "Backend & Tools",
    skills: [
      { name: "MongoDB", level: 60 },
      { name: "API Integration", level: 70 },
      { name: "Responsive Design", level: 90 },
      { name: "Git & GitHub", level: 75 },
    ],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-card/50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-display text-sm tracking-[0.3em] uppercase text-primary mb-3">
            Skills
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-14">
            Tech <span className="gradient-text">Stack</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIdx * 0.15 }}
              className="p-6 rounded-xl border border-border bg-card"
            >
              <h3 className="font-display text-sm tracking-widest uppercase text-primary mb-6">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, i) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1.5">
                      <span className="font-display text-xs font-bold text-foreground">
                        {skill.name}
                      </span>
                      <span className="font-display text-xs text-primary">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 + i * 0.08 }}
                        className="h-full rounded-full"
                        style={{
                          background:
                            "linear-gradient(90deg, hsl(175 80% 50%), hsl(190 90% 60%))",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
