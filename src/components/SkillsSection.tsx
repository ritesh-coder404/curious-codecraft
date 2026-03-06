import { motion } from "framer-motion";

const skills = [
  { name: "HTML", level: 90 },
  { name: "CSS", level: 85 },
  { name: "JavaScript", level: 75 },
  { name: "Responsive Design", level: 88 },
  { name: "React", level: 60 },
  { name: "Backend (Learning)", level: 35 },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-card/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-display text-sm tracking-[0.3em] uppercase text-primary mb-3">
            Skills
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-12">
            Tech <span className="gradient-text">Stack</span>
          </h2>
        </motion.div>

        <div className="space-y-6">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="flex justify-between mb-2">
                <span className="font-display text-sm font-bold">{skill.name}</span>
                <span className="font-display text-sm text-primary">{skill.level}%</span>
              </div>
              <div className="h-2 bg-secondary rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 + i * 0.1 }}
                  className="h-full rounded-full"
                  style={{
                    background:
                      "linear-gradient(90deg, hsl(175 80% 50%), hsl(190 90% 60%))",
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
