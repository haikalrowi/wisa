"use client";

import { motion } from "framer-motion";

export default function Colors() {
  return (
    <article>
      <h1>Colors</h1>
      <blockquote>
        <p>Klik untuk menyalin kode warna.</p>
      </blockquote>
      <h2>Biru</h2>
      <ul>
        <Color hex="#CEF0FE">100: #CEF0FE</Color>
        <Color hex="#9DDCFD">200: #9DDCFD</Color>
        <Color hex="#6CC2FB">300: #6CC2FB</Color>
        <Color hex="#47A8F7">400: #47A8F7</Color>
        <Color hex="#0D80F2">500: #0D80F2</Color>
        <Color hex="#0963D0">600: #0963D0</Color>
        <Color hex="#0649AE">700: #0649AE</Color>
        <Color hex="#04348C">800: #04348C</Color>
        <Color hex="#022474">900: #022474</Color>
      </ul>
    </article>
  );
}

function Color({ children, hex }: { children: React.ReactNode; hex: string }) {
  const view = {
    color: {
      frameMotion: (
        <motion.span
          whileHover={{ textDecorationLine: "underline" }}
          whileTap={{ opacity: 0.3 }}
        />
      ),
      async copy() {
        await navigator.clipboard.writeText(hex);
      },
    },
  };

  return (
    <li>
      <motion.span
        className="cursor-pointer"
        onClick={view.color.copy}
        {...view.color.frameMotion.props}
      >
        <span
          className="mx-2 inline-block h-4 w-6 rounded"
          style={{ backgroundColor: hex }}
        />
        {children}
      </motion.span>
    </li>
  );
}
