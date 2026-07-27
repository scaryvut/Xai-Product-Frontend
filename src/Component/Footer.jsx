"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const productLinks = [
  "Features",
  "Integrations",
  "Automations",
  "Security",
  "Pricing",
];

const solutionLinks = [
  "By Industry",
  "Use Cases",
  "Data Analytics",
  "AI & ML",
  "Business Intelligence",
];

const resourceLinks = [
  "Documentation",
  "Guides",
  "Blog",
  "Webinars",
  "Help Center",
];

const companyLinks = [
  "About Us",
  "Careers",
  "Partners",
  "Contact",
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#050816] pt-24">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-violet-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="rounded-[32px] border border-white/10 bg-[#08101F]/80 backdrop-blur-xl">
          <div className="grid gap-16 px-12 py-16 lg:grid-cols-5">
            {/* Brand */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <div className="mb-8 flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-400 to-violet-500 text-3xl font-bold text-white">
                  X
                </div>

                <div>
                  <h2 className="text-4xl font-bold text-white">Xai</h2>

                  <p className="mt-1 text-xs uppercase tracking-[0.35em] text-slate-400">
                    Intelligence Workspace
                  </p>
                </div>
              </div>

              <p className="leading-8 text-slate-400">
                Transform raw data into structured intelligence and actionable
                insights for a smarter tomorrow.
              </p>
            </motion.div>

            {/* Product */}
            <FooterColumn title="Product" links={productLinks} delay={0.1} />

            {/* Solutions */}
            <FooterColumn
              title="Solutions"
              links={solutionLinks}
              delay={0.2}
            />

            {/* Resources */}
            <FooterColumn
              title="Resources"
              links={resourceLinks}
              delay={0.3}
            />

            {/* Company */}
            <FooterColumn
              title="Company"
              links={companyLinks}
              delay={0.4}
            />
          </div>

          {/* Divider */}
          <div className="h-px bg-white/10" />

          {/* Bottom */}
          <div className="flex flex-col items-center justify-between gap-5 px-12 py-8 text-sm text-slate-500 md:flex-row">
            <p>
              © {new Date().getFullYear()} Xai Intelligence Workspace. All
              rights reserved.
            </p>

            <div className="flex flex-wrap items-center gap-8">
              <Link
                href="#"
                className="transition hover:text-cyan-400"
              >
                Privacy Policy
              </Link>

              <Link
                href="#"
                className="transition hover:text-cyan-400"
              >
                Terms of Service
              </Link>

              <Link
                href="#"
                className="transition hover:text-cyan-400"
              >
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      viewport={{ once: true }}
    >
      <h3 className="mb-8 text-xl font-semibold uppercase tracking-wide text-white">
        {title}
      </h3>

      <div className="space-y-5">
        {links.map((link) => (
          <Link
            key={link}
            href="#"
            className="block text-slate-400 transition hover:translate-x-1 hover:text-cyan-400"
          >
            {link}
          </Link>
        ))}
      </div>
    </motion.div>
  );
}