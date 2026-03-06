import { motion } from "framer-motion";
import { Mail, Youtube, Github, Linkedin, Send } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const socials = [
  { icon: Youtube, label: "YouTube", href: "https://youtube.com/@ritesh", color: "hover:text-red-500" },
  { icon: Github, label: "GitHub", href: "https://github.com/ritesh", color: "hover:text-foreground" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/ritesh", color: "hover:text-blue-400" },
  { icon: Mail, label: "Email", href: "mailto:ritesh@example.com", color: "hover:text-primary" },
];

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast({ title: "Please fill in all fields", variant: "destructive" });
      return;
    }
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast({ title: "Message sent!", description: "Thanks for reaching out. I'll get back to you soon." });
      setForm({ name: "", email: "", message: "" });
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="font-display text-xs tracking-[0.3em] uppercase text-primary mb-3">
            Get In Touch
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Contact<span className="gradient-text"> Me</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <Input
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              maxLength={100}
              className="bg-card border-border focus:border-primary"
            />
            <Input
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              maxLength={255}
              className="bg-card border-border focus:border-primary"
            />
            <Textarea
              placeholder="Your Message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              maxLength={1000}
              rows={5}
              className="bg-card border-border focus:border-primary resize-none"
            />
            <Button type="submit" disabled={sending} className="gap-2">
              {sending ? "Sending..." : "Send Message"}
              <Send className="w-4 h-4" />
            </Button>
          </motion.form>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Feel free to reach out for collaborations, project ideas, or just to say hello. 
              You can also find me on these platforms:
            </p>
            <div className="grid grid-cols-2 gap-4">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-3 p-4 rounded-lg bg-card border border-border text-muted-foreground transition-all hover:border-primary/50 hover:shadow-[0_0_20px_hsl(175_80%_50%/0.1)] ${s.color}`}
                >
                  <s.icon className="w-5 h-5" />
                  <span className="font-display text-sm">{s.label}</span>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
