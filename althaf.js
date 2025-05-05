import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <main className="bg-gradient-to-br from-slate-900 to-slate-800 min-h-screen text-white px-6 py-12 font-sans">
      {/* Hero Section */}
      <section className="text-center max-w-3xl mx-auto mb-16">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: -40 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}>
          Shaik Althaf
        </motion.h1>
        <p className="text-lg md:text-xl text-slate-300">
          CSE Graduate | AI Enthusiast | Web Developer
        </p>
        <p className="mt-4 text-slate-400">
          I’m passionate about building smart and scalable tech solutions using AI, ML, and web technologies. Let’s innovate together.
        </p>
        <div className="flex justify-center gap-4 mt-6">
          <a href="mailto:althaf1504@gmail.com" target="_blank">
            <Button variant="outline" className="flex items-center gap-2">
              <FaEnvelope /> Email
            </Button>
          </a>
          <a href="https://linkedin.com/in/shaik-althaf-1b0907231" target="_blank">
            <Button variant="outline" className="flex items-center gap-2">
              <FaLinkedin /> LinkedIn
            </Button>
          </a>
        </div>
      </section>

      {/* Education */}
      <Section title="Education">
        <ListItem title="B.Tech in Computer Science & Engineering" subtitle="JNTU Anantapur (2021–2024)" detail="CGPA: 7.65" />
        <ListItem title="Intermediate" subtitle="Board of Intermediate Education" detail="89.84%" />
        <ListItem title="SSC" subtitle="State Board" detail="GPA: 9.8" />
      </Section>

      {/* Experience */}
      <Section title="Experience">
        <ListItem title="Frontend Developer Intern" subtitle="Lyte Calc Technologies" detail="Built chatbot UI and responsive client-side features." />
      </Section>

      {/* Projects */}
      <Section title="Projects">
        <ListItem title="Image Generator from Text" subtitle="AI/ML project using Hugging Face & Stable Diffusion" detail="Real-time image generation from prompts." />
        <ListItem title="Time Spent Analyzer" subtitle="Browser extension" detail="Tracks user activity and flags dark patterns on websites." />
      </Section>

      {/* Skills */}
      <Section title="Technical Skills">
        <p className="text-slate-300">Python, C, Java (familiar), Flask, HTML/CSS, MySQL, Oracle, Bootstrap, Hugging Face, Git, OOPs, DSA</p>
      </Section>

      {/* Achievements */}
      <Section title="Achievements">
        <ul className="list-disc list-inside text-slate-300">
          <li>GATE DA 2025 Rank: 8014/52,000</li>
          <li>Winner - IIT-BHU Hackathon for "Time Spent Analyzer"</li>
          <li>Finalist - Dr. Kalam’s Hackathon for "Taste of Tomorrow"</li>
          <li>Top 7 - National Ideathon (out of 125+ entries)</li>
        </ul>
      </Section>

      {/* Footer */}
      <footer className="text-center text-sm text-slate-500 mt-16">
        &copy; {new Date().getFullYear()} Shaik Althaf. Built with ❤️ using React & Tailwind.
      </footer>
    </main>
  );
}

function Section({ title, children }) {
  return (
    <motion.section 
      className="mb-12" 
      initial={{ opacity: 0, y: 20 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: true }} 
      transition={{ duration: 0.5 }}>
      <h2 className="text-2xl font-semibold mb-4 text-teal-400">{title}</h2>
      <div className="space-y-4">{children}</div>
    </motion.section>
  );
}

function ListItem({ title, subtitle, detail }) {
  return (
    <Card className="bg-slate-800 border border-slate-700">
      <CardContent className="p-4">
        <h3 className="text-lg font-bold text-white">{title}</h3>
        <p className="text-sm text-slate-400">{subtitle}</p>
        <p className="text-sm text-slate-300 mt-1">{detail}</p>
      </CardContent>
    </Card>
  );
}
