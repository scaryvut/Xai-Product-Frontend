"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { useState } from "react";

const navItems = [
  { name: "Features", href: "#features" },
  { name: "Workflow", href: "#workflow" },
  { name: "Dashboard", href: "#dashboard" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
      className="fixed top-0 left-0 z-50 w-full backdrop-blur-xl border-b border-white/10 bg-[#050816]/70"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">

          <motion.div
            whileHover={{
              rotate: 180,
              scale: 1.1,
            }}
            transition={{
              duration: 0.6,
            }}
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-violet-500"
          >
            <span className="font-bold text-white">
              X
            </span>
          </motion.div>

          <div>
            <h1 className="text-lg font-bold text-white">
              Xai
            </h1>

            <p className="text-xs text-slate-400">
              Intelligence Workspace
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden gap-10 md:flex">

          {navItems.map((item) => (
            <motion.a
              key={item.name}
              href={item.href}
              whileHover={{
                y: -2,
              }}
              className="relative text-sm text-slate-300 transition-colors hover:text-white"
            >
              {item.name}

              <motion.span
                layoutId="navbar-line"
                className="absolute left-0 -bottom-1 h-[2px] w-0 bg-cyan-400"
                whileHover={{
                  width: "100%",
                }}
              />
            </motion.a>
          ))}

        </nav>

        {/* CTA */}
        <motion.button
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: 0.95,
          }}
          className="hidden rounded-xl bg-gradient-to-r from-cyan-400 to-violet-500 px-5 py-3 text-sm font-semibold text-white shadow-lg md:block"
        >
          Launch Workspace
        </motion.button>

        {/* Mobile */}
        <button
          onClick={() => setMobileMenu(!mobileMenu)}
          className="text-white md:hidden"
        >
          <Menu />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenu && (
        <motion.div
          initial={{
            opacity: 0,
            height: 0,
          }}
          animate={{
            opacity: 1,
            height: "auto",
          }}
          exit={{
            opacity: 0,
            height: 0,
          }}
          className="border-t border-white/10 bg-[#050816]"
        >
          <div className="flex flex-col gap-5 p-6">

            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-slate-300 hover:text-white"
              >
                {item.name}
              </a>
            ))}

            <button className="rounded-xl bg-gradient-to-r from-cyan-400 to-violet-500 py-3 font-semibold text-white">
              Launch Workspace
            </button>

          </div>
        </motion.div>
      )}
    </motion.header>
  );
}