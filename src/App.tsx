/**
 * @license
 * SPDX-License-Identifier:
 *  Apache-2.0
 */
 
// import graduationImg from "./assets/graduation.jpeg";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  Cpu, 
  Database, 
  Code2, 
  BrainCircuit, 
  Terminal, 
  Trophy, 
  GraduationCap, 
  Briefcase, 
  Rocket, 
  ChevronRight,
  ExternalLink,
  ShieldCheck,
  Zap,
  X
} from 'lucide-react';

// --- Types ---
interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
}

interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
}

// --- Components ---

const GraduationStory = ({ onClose }: { onClose: () => void }) => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/90 backdrop-blur-xl overflow-y-auto"
  >
    <div className="max-w-4xl w-full bg-zinc-900 border border-white/10 cyber-border relative my-auto">
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 p-2 bg-white/5 hover:bg-cyber-pink transition-colors z-10"
      >
        <X className="w-6 h-6" />
      </button>

      <div className="grid md:grid-cols-2 gap-8 p-8">
        <div className="relative aspect-video md:aspect-auto overflow-hidden cyber-border border border-white/10 bg-black/50">
        <img 
       // src =  {graduationImg}
  src="https://media.licdn.com/dms/image/v2/D5622AQECzc6D1G2sjQ/feedshare-shrink_1280/B56Zjr8xlOH8A0-/0/1756305237472?e=1774483200&v=beta&t=HQEFoW6LSCytyUpBxkGjNjDcL9Prtzkb4zpJT8sgHR8"
  alt="Graduation" 
  className="w-full h-full object-contain"
  referrerPolicy="no-referrer"
/>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>

        <div className="space-y-6 font-sans text-white/80 leading-relaxed overflow-y-auto max-h-[70vh] pr-4 custom-scrollbar">
          <h2 className="text-3xl font-display font-black text-cyber-blue italic uppercase tracking-tighter">
            From Confusion to Code — My FAST Journey 🌿
          </h2>
          
          <div className="space-y-4 text-sm md:text-base">
            <p>Four years ago, I walked into FAST NUCES as someone completely lost.</p>
            <p>Fresh out of college, I didn’t know what field to choose or what direction my life would take. I just knew one thing — I was curious about technology. Somehow, life led me to Data Science, and I took the leap without truly knowing what I was stepping into.</p>
            <p>And that leap changed everything.</p>
            <p>Slowly, the world started to make sense in a way I had never experienced before. Every strange thought, every random curiosity suddenly had a place — inside code. Problems that once looked chaotic now had logical explanations.</p>
            
            <div className="py-4 border-l-2 border-cyber-blue pl-4 italic font-mono text-cyber-blue">
              <p>Algorithms became stories.</p>
              <p>Patterns became answers.</p>
              <p>And code became a language I fell in love with.</p>
            </div>

            <p>I still remember the first time I understood how a Neural Network actually learns, or how Dijkstra's Algorithm finds the shortest path. Those moments felt magical — like discovering the hidden logic behind the world.</p>
            <p>But FAST was never easy.</p>
            <p>There were thousands of failures. Assignments piling up. Four deadlines on the same day. Nights spent staring at a bug for hours, only to realize a missing semicolon was the villain all along.</p>
            <p>There were moments when I thought I couldn't do it anymore.</p>
            <p>But FAST has a way of shaping you. It teaches you resilience. It teaches you discipline. And most importantly, it teaches you how to think.</p>
            <p>Somewhere between the sleepless nights, chaotic project weeks, and endless debugging sessions, I discovered something beautiful — I had found my passion.</p>
            
            <p className="font-bold text-white">The realization that I could build things. Work with images, audio, videos, data. Train models that learn patterns. Create systems that make predictions.</p>
            <p>The idea that anything I imagine, I might actually be able to build. And that feeling is indescribable.</p>
            
            <p>But FAST was never just about code. It was about the people.</p>
            <p>Friends who turned stressful nights into laughter. Group projects that somehow became unforgettable memories. Batchmates who struggled together and grew together. People who slowly became family.</p>
            <p>It was also about the mentors and professors — the ones who challenged us, pushed us, and sometimes terrified us with deadlines… but ultimately made us stronger thinkers.</p>
            <p>And then there was the AIMS Lab. A place where ideas felt limitless. Where brainstorming sessions turned into wild product ideas and crazy innovations. It wasn’t just a lab — it was a playground for imagination.</p>
            
            <p>FAST wasn’t always comfortable. Sometimes it was exhausting. Sometimes it was frustrating. Sometimes it felt impossible.</p>
            <p>But looking back today, I realize something: Every challenge was shaping me into the person I am today.</p>
            
            {/* <p className="text-xl font-display font-bold text-cyber-yellow pt-4">
              Today, I graduate as Khadeeja Shah — BS Data Science, Batch ’21.
            </p> */}
            
            <p>A student who once entered FAST confused about life… and leaves as someone deeply in love with the world of Data Science and AI.</p>
            <p>What started as uncertainty turned into passion. And this is only the beginning.</p>
            <p>Because the journey from a curious student who loved code to a data scientist building intelligent systems is just getting started.</p>
            <p>Thank you, FAST, for the chaos, the lessons, the sleepless nights, the friendships, and the version of me that I discovered here.</p>
            
            <p className="font-display font-bold text-cyber-blue pt-4">This chapter ends here. But the story is far from over.</p>
            
            <div className="pt-8 font-display text-right">
              <p className="text-2xl">🎓</p>
              <p className="font-black">Khadeeja Shah</p>
              <p className="text-xs font-mono text-white/40">BS Data Science — Batch ’21</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

const Intro = ({ onComplete }: { onComplete: () => void }) => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(1), 1000), // Name reveal
      setTimeout(() => setStep(2), 4000), // 3 second pose (1s reveal + 3s pose)
      setTimeout(() => onComplete(), 5500), // Final transition
    ];
    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50 overflow-hidden">
      <div className="scanline" />
      
      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div
            key="name"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.2, filter: 'blur(10px)' }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center"
          >
            <h1 className="text-6xl md:text-8xl font-display font-black tracking-tighter glitch-text text-cyber-blue">
              KHADEEJA SHAH
            </h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-4 font-mono text-cyber-yellow tracking-[0.5em] uppercase text-sm"
            >
              Artificial Intelligence / Machine Learning Engineer
            </motion.p>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center"
          >
            <div className="w-64 h-1 bg-white/10 relative overflow-hidden mb-4">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="absolute inset-y-0 left-0 bg-cyber-blue shadow-[0_0_15px_rgba(0,240,255,0.8)]"
              />
            </div>
            <p className="font-mono text-xs text-cyber-blue animate-pulse">
              INITIALIZING AI CORE... SYSTEM READY
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background grid effect */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle, #00f0ff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
    </div>
  );
};

const HUD = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-40">
      {/* Top Bar */}
      <div className="absolute top-0 inset-x-0 h-16 border-b border-white/10 bg-black/40 backdrop-blur-md flex items-center justify-between px-8 pointer-events-auto">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-cyber-blue/20 border border-cyber-blue flex items-center justify-center">
            <Cpu className="w-6 h-6 text-cyber-blue" />
          </div>
          <div>
            <div className="text-[10px] font-mono text-cyber-blue/60 uppercase leading-none">System Status</div>
            <div className="text-xs font-display font-bold text-cyber-blue">AI_CORE_ACTIVE</div>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          {['Mission', 'Campaign', 'Tech Tree', 'Achievements', 'Recruit'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className="text-[10px] font-display font-bold tracking-widest uppercase hover:text-cyber-blue transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <div className="text-right">
            <div className="text-[10px] font-mono text-cyber-yellow/60 uppercase leading-none">Location</div>
            <div className="text-xs font-display font-bold text-cyber-yellow">PAKISTAN_PK</div>
          </div>
          <div className="w-10 h-10 border border-cyber-yellow/40 flex items-center justify-center">
            <MapPin className="w-5 h-5 text-cyber-yellow" />
          </div>
        </div>
      </div>

      {/* Side HUD Elements */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 flex flex-col gap-8">
        <div className="w-1 h-32 bg-white/5 relative">
          <motion.div 
            animate={{ height: ['20%', '80%', '40%', '90%', '60%'] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-0 inset-x-0 bg-cyber-blue"
          />
        </div>
        <div className="rotate-90 origin-left text-[8px] font-mono text-white/20 uppercase tracking-[0.5em] whitespace-nowrap">
          Neural_Link_Stable
        </div>
      </div>

      <div className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col items-end gap-8">
        <div className="text-right">
          <div className="text-[8px] font-mono text-cyber-pink uppercase mb-1">Threat Level</div>
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map(i => (
              <div key={i} className={`w-3 h-1 ${i < 4 ? 'bg-cyber-pink' : 'bg-white/10'}`} />
            ))}
          </div>
        </div>
        <div className="w-1 h-32 bg-white/5 relative">
          <motion.div 
            animate={{ height: ['90%', '30%', '70%', '10%', '50%'] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 inset-x-0 bg-cyber-pink"
          />
        </div>
      </div>

      {/* Bottom Corner Accents */}
      <div className="absolute bottom-8 left-8 w-32 h-32 border-l border-b border-white/20" />
      <div className="absolute bottom-8 right-8 w-32 h-32 border-r border-b border-white/20" />
    </div>
  );
};

const SectionHeader = ({ title, subtitle, id }: { title: string, subtitle: string, id: string }) => (
  <div id={id} className="mb-12 relative">
    <div className="absolute -left-4 top-0 bottom-0 w-1 bg-cyber-blue" />
    <h2 className="text-4xl md:text-6xl font-display font-black text-white uppercase tracking-tighter italic">
      {title}
    </h2>
    <p className="font-mono text-cyber-blue text-sm uppercase tracking-widest mt-2">
      {subtitle}
    </p>
  </div>
);

const ExperienceCard = ({ exp }: { exp: Experience }) => (
  <motion.div 
    whileHover={{ x: 10 }}
    className="relative p-6 border border-white/10 bg-white/5 backdrop-blur-sm cyber-border group mb-8"
  >
    <div className="absolute top-0 right-0 p-2 text-[10px] font-mono text-white/20 uppercase">
      {exp.period}
    </div>
    <h3 className="text-xl font-display font-bold text-cyber-blue mb-1">{exp.role}</h3>
    <div className="text-sm font-mono text-cyber-yellow mb-4 uppercase tracking-wider">{exp.company}</div>
    <ul className="space-y-2">
      {exp.description.map((item, i) => (
        <li key={i} className="flex gap-3 text-sm text-white/70 leading-relaxed">
          <ChevronRight className="w-4 h-4 text-cyber-blue shrink-0 mt-1" />
          {item}
        </li>
      ))}
    </ul>
  </motion.div>
);

const ProjectCard = ({ project }: { project: Project }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="border border-white/10 bg-white/5 p-6 cyber-border flex flex-col h-full group"
  >
    <div className="flex justify-between items-start mb-4">
      <div className="w-12 h-12 bg-cyber-blue/10 border border-cyber-blue/30 flex items-center justify-center">
        <Terminal className="w-6 h-6 text-cyber-blue" />
      </div>
      {project.link && (
        <a href={project.link} className="text-white/40 hover:text-cyber-blue transition-colors">
          <ExternalLink className="w-5 h-5" />
        </a>
      )}
    </div>
    <h3 className="text-xl font-display font-bold mb-2 group-hover:text-cyber-blue transition-colors">{project.title}</h3>
    <p className="text-sm text-white/60 mb-6 flex-grow">{project.description}</p>
    <div className="flex flex-wrap gap-2">
      {project.tags.map(tag => (
        <span key={tag} className="text-[10px] font-mono px-2 py-1 bg-white/5 border border-white/10 text-white/40 uppercase">
          {tag}
        </span>
      ))}
    </div>
  </motion.div>
);

export default function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [showGradStory, setShowGradStory] = useState(false);

  const experiences: Experience[] = [
    {
      role: "AI Engineer",
      company: "SkyElectric — Islamabad",
      period: "Jul 2025 – Present",
      description: [
        "Built a production time-series forecasting system predicting PV generation, load demand, and grid behavior for 72 hours ahead.",
        "Implemented GRU-based deep learning models using weather, temporal, and usage features.",
        "Developed a real-time data pipeline ingesting operational data from ScyllaDB and PostgreSQL.",
        "Implemented experiment tracking and model evaluation pipelines using MLflow.",
        "Designed multi-channel AI chatbots for WhatsApp and LINE serving customers in Pakistan and Japan.",
        "Built a live streaming AI avatar assistant enabling real-time conversational responses."
      ]
    },
    {
      role: "AI Engineer",
      company: "Eynvision — Remote",
      period: "Jan 2025 – Present",
      description: [
        "Developed LLM-based systems including RAG chatbots and ReAct reasoning agents.",
        "Built data pipelines and AI services automating decision workflows in financial applications.",
        "Designed microservice-based AI architectures enabling scalable API access to models."
      ]
    },
    {
      role: "AI / ML Intern",
      company: "CyberXStudio",
      period: "Jul 2024 – Sep 2024",
      description: [
        "Built an AI itinerary generator integrating OpenAI APIs, Google Maps, and travel datasets.",
        "Developed a custom NLP chatbot by creating a domain dataset from company website data.",
        "Improved intent classification and entity extraction accuracy by 35%."
      ]
    }
  ];

  const projects: Project[] = [
    {
      title: "RefactoAI",
      description: "LLM Code Refactoring System. Built a React-based platform using LLMs to refactor and regenerate Python code from user requirements. Generated traceable reports linking regenerated code to user stories.",
      tags: ["React", "LLM", "Python", "Refactoring"],
      link: "https://www.linkedin.com/posts/khadeeja-shah-4016b4300_refactoai-fyp-llm-activity-7326257898987106305--dm1?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEz9YEEB0NQUrr-NFmJg0nDZ2COQa2xlT4k"
    },
    {
      title: "Hiday — Ethical Voice Assistant",
      description: "Hiday is a real-time AI voice assistant designed to provide ethical guidance through conversational interaction. The system captures user speech, analyzes the sentiment and context using NLP techniques, and generates thoughtful responses aimed at promoting ethical decision-making. It integrates speech recognition, natural language processing, and text-to-speech technologies.",
      tags: ["Python", "Flask", "NLP", "SpeechRecognition", "TTS"],
    },
    {
      title: "AI Itinerary Generator",
      description: "Developed an AI-powered travel itinerary generator that automatically creates personalized travel plans based on user preferences. The system integrates location data, hotel information, and route optimization to generate complete travel schedules from home departure to return.",
      tags: ["Python", "OpenAI API", "Google Maps API", "Flask", "NLP"],
    }
  ];

  const skills = {
    coreLogic: [
      "Bridging Data Science and Production Engineering",
      "Engineering > Algorithms",
      "Data-Driven Decision Making",
      "Feature Engineering & Data Quality First",
      "Productionization (MLOps)",
      "Scalable AI System Design",
      "Model Deployment & API Integration",
      "Monitoring, Evaluation & Model Drift Detection"
    ],
    aiModels: [
      "GRU",
      "LSTM",
      "Neural Networks",
      "Time Series Forecasting Models",
      "NLP Models",
      "Retrieval-Based QA Systems"
    ],
    frameworks: [
      "Python",
      "SQL",
      "Pandas",
      "NumPy",
      "Flask",
      "MLflow",
      "Hugging Face Transformers",
      "Git",
      "API Integrations"
    ],
    infra: [
      "Flask",
      "REST APIs",
      "Redis",
      "PostgreSQL",
      "ScyllaDB",
      "MySQL",
      "MongoDB",
      "Pinecone",
      "Production Server Deployment",
      "Messaging APIs (WhatsApp, LINE)"
    ]
  };

  if (showIntro) {
    return <Intro onComplete={() => setShowIntro(false)} />;
  }

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-cyber-blue selection:text-black">
      <AnimatePresence>
        {showGradStory && <GraduationStory onClose={() => setShowGradStory(false)} />}
      </AnimatePresence>

      <HUD />
      
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(0,240,255,0.05),transparent_70%)]" />
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-cyber-pink/10 blur-[120px] rounded-full" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-cyber-blue/10 blur-[120px] rounded-full" />
      </div>

      <main className="relative z-10 max-w-6xl mx-auto px-8 pt-32 pb-24">
        
        {/* Hero / Profile Section */}
        <section id="mission" className="mb-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block px-3 py-1 bg-cyber-blue/10 border border-cyber-blue/30 text-cyber-blue text-[10px] font-mono uppercase tracking-widest mb-6">
                Active Operative: Khadeeja Shah
              </div>
              <h1 className="text-6xl md:text-8xl font-display font-black tracking-tighter mb-6 leading-none italic uppercase">
                AI <span className="text-cyber-blue">ENGINEER</span>
              </h1>
              <p className="text-lg text-white/60 max-w-lg mb-8 leading-relaxed">
                Specialized in building production ML systems, real-time AI services, and LLM applications. 
                Architecting the future of intelligence with scalable pipelines and deep learning.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="cyber-button bg-cyber-blue text-black px-6 py-3 font-display font-bold text-sm flex items-center gap-2 hover:bg-white transition-colors">
                  <Linkedin className="w-4 h-4" /> LINKEDIN_PROFILE
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="cyber-button border border-white/20 px-6 py-3 font-display font-bold text-sm flex items-center gap-2 hover:bg-cyber-blue hover:text-black transition-colors">
                  <Github className="w-4 h-4" /> GITHUB_REPO
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square bg-white/5 border border-white/10 cyber-border relative overflow-hidden group">
                <img 
                  src="https://picsum.photos/seed/cyberpunk-ai/800/800" 
                  alt="Profile" 
                  className="w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 group-hover:opacity-80 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                
                {/* HUD Overlay on Image */}
                <div className="absolute top-4 left-4 font-mono text-[8px] text-cyber-blue uppercase">
                  Subject_ID: KS_03<br />
                  Origin: Islamabad_PK
                </div>
                <div className="absolute bottom-4 right-4 font-mono text-[8px] text-cyber-yellow uppercase text-right">
                  Neural_Sync: 98.4%<br />
                  Uptime: 24.03.2026
                </div>
              </div>
              {/* Floating Accents */}
              <div className="absolute -top-4 -right-4 w-12 h-12 border-t-2 border-r-2 border-cyber-blue" />
              <div className="absolute -bottom-4 -left-4 w-12 h-12 border-b-2 border-l-2 border-cyber-pink" />
            </motion.div>
          </div>
        </section>

        {/* Achievements / Loot Section */}
        <section id="achievements" className="mb-32">
          <SectionHeader title="Achievements" subtitle="Loot & Certifications" id="achievements-header" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: "Medalist", 
                desc: "FAST NUCES Islamabad", 
                icon: Trophy, 
                color: "text-cyber-yellow", 
                img: "https://picsum.photos/seed/medal/400/300",
                link: "https://www.linkedin.com/posts/khadeeja-shah-4016b4300_universitymedal-academicachievement-semestersuccess-activity-7251529539019776000-1n-0?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEz9YEEB0NQUrr-NFmJg0nDZ2COQa2xlT4k"
              },
              { 
                title: "Graduation", 
                desc: "Bachelor of Data Science", 
                icon: GraduationCap, 
                color: "text-cyber-blue", 
                img: "src/public/assets/graduation.jpeg",
                onClick: () => setShowGradStory(true)
              },
              { 
                title: "Dean's List", 
                desc: "Honor Roll 2021-2025", 
                icon: ShieldCheck, 
                color: "text-cyber-green", 
                img: "https://picsum.photos/seed/degree/400/300",
                link: "https://www.linkedin.com/posts/khadeeja-shah-4016b4300_the-end-of-a-chapter-the-start-of-a-journey-activity-7366478091583442944-huML?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEz9YEEB0NQUrr-NFmJg0nDZ2COQa2xlT4k"
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group cursor-pointer"
                onClick={() => {
                  if (item.onClick) item.onClick();
                  else if (item.link) window.open(item.link, '_blank');
                }}
              >
                <div className="relative aspect-video bg-white/5 border border-white/10 cyber-border overflow-hidden mb-4">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <item.icon className={`w-12 h-12 ${item.color} opacity-50 group-hover:scale-110 transition-transform`} />
                  </div>
                  {(item.link || item.onClick) && (
                    <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <ExternalLink className="w-4 h-4 text-white/60" />
                    </div>
                  )}
                </div>
                <h3 className="font-display font-bold text-lg">{item.title}</h3>
                <p className="text-xs font-mono text-white/40 uppercase">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Experience / Campaign Section */}
        <section id="campaign" className="mb-32">
          <SectionHeader title="Campaign" subtitle="Professional Journey" id="campaign-header" />
          <div className="space-y-4">
            {experiences.map((exp, i) => (
              <div key={i}>
                <ExperienceCard exp={exp} />
              </div>
            ))}
          </div>
        </section>

        {/* Projects / Side Quests Section */}
        <section id="mission" className="mb-32">
          <SectionHeader title="Side Quests" subtitle="Key Projects & Research" id="mission-header" />
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <div key={i}>
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </section>

        {/* Skills / Tech Tree Section */}
        <section id="tech-tree" className="mb-32">
          <SectionHeader title="Tech Tree" subtitle="Skill Matrix & Expertise" id="tech-tree-header" />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: "Core Logic", skills: skills.coreLogic, icon: Code2 },
              { label: "AI Models", skills: skills.aiModels, icon: BrainCircuit },
              { label: "Frameworks & Tools", skills: skills.frameworks, icon: Zap },
              { label: "Infrastructure", skills: skills.infra, icon: Database }
            ].map((group, i) => (
              <div key={i} className="space-y-4">
                <div className="flex items-center gap-2 mb-4">
                  <group.icon className="w-5 h-5 text-cyber-blue" />
                  <h3 className="font-display font-bold text-sm uppercase tracking-widest">{group.label}</h3>
                </div>
                <div className="flex flex-col gap-2">
                  {group.skills.map(skill => (
                    <div key={skill} className="flex items-center justify-between p-3 bg-white/5 border-l-2 border-white/10 hover:border-cyber-blue transition-all group">
                      <span className="text-xs font-mono text-white/60 group-hover:text-white">{skill}</span>
                      <div className="w-12 h-1 bg-white/10 overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: '85%' }}
                          className="h-full bg-cyber-blue"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why Hire Me / Recruit Section */}
        <section id="recruit" className="mb-32">
          <SectionHeader title="Recruit" subtitle="Why Join Forces?" id="recruit-header" />
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="p-8 border border-cyber-blue/20 bg-cyber-blue/5 cyber-border">
                <h3 className="text-2xl font-display font-black mb-4 italic">THE EDGE</h3>
                <p className="text-white/70 leading-relaxed mb-6">
                  I don't just build models; I build production-ready systems. My experience spans from 
                  real-time energy forecasting to multi-channel conversational AI. I bridge the gap 
                  between academic research and enterprise-scale deployment.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-black/40 border border-white/5">
                    <div className="text-2xl font-display font-bold text-cyber-blue">35%</div>
                    <div className="text-[10px] font-mono text-white/40 uppercase">Accuracy Boost</div>
                  </div>
                  <div className="p-4 bg-black/40 border border-white/5">
                    <div className="text-2xl font-display font-bold text-cyber-yellow">72H</div>
                    <div className="text-[10px] font-mono text-white/40 uppercase">Forecast Horizon</div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col gap-4">
                <h3 className="font-display font-bold text-sm uppercase tracking-widest text-cyber-pink">Interests</h3>
                <div className="flex flex-wrap gap-2">
                  {["gaming", "sports", "podcast", "quantum ml", "edge ai", "genAI art"].map(interest => (
                    <span key={interest} className="px-3 py-1 bg-white/5 border border-white/10 text-[10px] font-mono uppercase">
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <div className="p-8 border border-white/10 bg-white/5 cyber-border relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-cyber-pink" />
                <h3 className="text-3xl font-display font-black mb-8 italic">ESTABLISH_LINK</h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4 group cursor-pointer">
                    <div className="w-12 h-12 bg-white/5 flex items-center justify-center group-hover:bg-cyber-blue group-hover:text-black transition-colors">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono text-white/40 uppercase">Email</div>
                      <div className="text-sm font-display font-bold">khadeejaishaque03@gmail.com</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 group cursor-pointer">
                    <div className="w-12 h-12 bg-white/5 flex items-center justify-center group-hover:bg-cyber-yellow group-hover:text-black transition-colors">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono text-white/40 uppercase">Comm-Link</div>
                      <div className="text-sm font-display font-bold">03343999918</div>
                    </div>
                  </div>
                  <button className="w-full cyber-button bg-white text-black py-4 font-display font-black text-lg hover:bg-cyber-blue transition-colors mt-4">
                    INITIATE_RECRUITMENT
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-24 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="font-display font-black text-2xl italic">
            KHADEEJA <span className="text-cyber-blue">SHAH</span>
          </div>
          <div className="font-mono text-[10px] text-white/20 uppercase tracking-[0.3em]">
            © 2026 AI_CORE_PROTOCOL // ALL_RIGHTS_RESERVED
          </div>
          <div className="flex gap-6">
            <Github className="w-5 h-5 text-white/40 hover:text-white cursor-pointer" />
            <Linkedin className="w-5 h-5 text-white/40 hover:text-white cursor-pointer" />
            <Mail className="w-5 h-5 text-white/40 hover:text-white cursor-pointer" />
          </div>
        </footer>

      </main>
    </div>
  );
}
