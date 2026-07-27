"use client";

import { motion } from "framer-motion";
import LatticeScene from "./LatticeScene";

export default function SignatureInteraction() {
  return (
    <section
      id="signature"
      className="relative overflow-hidden bg-[#050816] py-32"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[180px]" />

        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-violet-500/10 blur-[180px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
          }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <p className="mb-4 uppercase tracking-[0.35em] text-cyan-400">
            Signature Interaction
          </p>

          <h2 className="text-5xl font-black text-white md:text-6xl">
            Intelligence
            <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
              {" "}Lattice
            </span>
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-400">
            Watch thousands of independent signals organize
            themselves into a living intelligence system.
            Every movement responds to your cursor and
            scroll position.
          </p>
        </motion.div>

        {/* 3D Canvas */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.9,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
          }}
          className="overflow-hidden rounded-[36px] border border-white/10 bg-[#08101F] shadow-[0_0_80px_rgba(34,211,238,.12)]"
        >
          <div className="h-[750px] w-full">
            <LatticeScene />
          </div>
        </motion.div>

        {/* Bottom Features */}

        <div className="mt-20 grid gap-8 md:grid-cols-3">

          {[
            {
              title: "Particle Intelligence",
              desc:
                "Thousands of particles communicate in real-time to represent structured knowledge.",
            },
            {
              title: "3D Geometry",
              desc:
                "Procedural lattice structures generated mathematically inside WebGL.",
            },
            {
              title: "Reactive Motion",
              desc:
                "Mouse movement and scrolling continuously reshape the intelligence field.",
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
              }}
              whileHover={{
                y: -10,
              }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
            >
              <h3 className="mb-4 text-2xl font-bold text-white">
                {item.title}
              </h3>

              <p className="leading-8 text-slate-400">
                {item.desc}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}