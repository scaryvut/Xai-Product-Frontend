"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Database,
  BrainCircuit,
  Sparkles,
  ArrowRight,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    id: "01",
    icon: Database,
    title: "Ingest Data",
    description:
      "Connect APIs, databases, documents, CSV files and live event streams into one unified workspace.",
    color: "from-cyan-500 to-sky-500",
  },
  {
    id: "02",
    icon: BrainCircuit,
    title: "Analyze with AI",
    description:
      "AI organizes, classifies and understands every signal to surface meaningful patterns.",
    color: "from-violet-500 to-fuchsia-500",
  },
  {
    id: "03",
    icon: Sparkles,
    title: "Generate Insight",
    description:
      "Transform intelligence into recommendations, alerts and automated workflows.",
    color: "from-emerald-500 to-green-500",
  },
];

export default function InsightFlow() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const cards = gsap.utils.toArray(".flow-card");

    gsap.from(cards, {
      opacity: 0,
      y: 120,
      duration: 1,
      stagger: 0.25,
      ease: "power4.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%",
      },
    });

    gsap.to(".progress-line", {
      scaleY: 1,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <section
      id="workflow"
      ref={sectionRef}
      className="relative bg-[#050816] py-32 text-white"
    >
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-24 max-w-3xl text-center"
        >
          <p className="mb-4 text-cyan-400 uppercase tracking-[0.3em] text-sm">
            Workflow
          </p>

          <h2 className="text-5xl font-black">
            Data becomes intelligence
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            Every dataset moves through a structured pipeline that converts
            fragmented information into actionable decisions.
          </p>
        </motion.div>

        <div className="relative">

          {/* Vertical Line */}

          <div className="absolute left-8 top-0 h-full w-[2px] bg-white/10">

            <div className="progress-line origin-top h-full w-full scale-y-0 bg-gradient-to-b from-cyan-400 via-violet-500 to-emerald-400" />

          </div>

          <div className="space-y-20">

            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.id}
                  whileHover={{ x: 8 }}
                  className="flow-card flex flex-col gap-8 md:flex-row md:items-center"
                >
                  {/* Number */}

                  <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-[#111827] shadow-xl">

                    <Icon className="h-7 w-7 text-cyan-400" />

                  </div>

                  {/* Card */}

                  <div className="flex-1 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-300 hover:border-cyan-400/30 hover:bg-white/10">

                    <div className="mb-4 flex items-center justify-between">

                      <span className="text-sm font-bold text-slate-500">
                        {step.id}
                      </span>

                      <div
                        className={`rounded-full bg-gradient-to-r ${step.color} px-3 py-1 text-xs font-semibold`}
                      >
                        AI Stage
                      </div>

                    </div>

                    <h3 className="text-3xl font-bold">
                      {step.title}
                    </h3>

                    <p className="mt-5 max-w-2xl leading-8 text-slate-400">
                      {step.description}
                    </p>

                    <button className="mt-8 flex items-center gap-2 font-semibold text-cyan-400 transition hover:gap-4">
                      Learn More
                      <ArrowRight size={18} />
                    </button>

                  </div>
                </motion.div>
              );
            })}

          </div>
        </div>
      </div>
    </section>
  );
}