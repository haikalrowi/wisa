"use client";

import { motion } from "framer-motion";

export default function Mascot() {
  return (
    <article>
      <h1>Mascot</h1>
      <blockquote>
        <p>Klik untuk mengunduh gambar.</p>
      </blockquote>
      <h2>Simo</h2>
      <div className="not-prose">
        <ul
          className="grid grid-cols-2 place-items-center gap-4 p-4
          md:grid-cols-3"
        >
          <Simo
            src="/images/844c802e9035.png"
            alt="Simo Action 1"
            title="Simo Action 1"
          />
          <Simo
            src="/images/e90937e93236.png"
            alt="Simo Action 2"
            title="Simo Action 2"
          />
          <Simo
            src="/images/d2a01a9f4a1c.png"
            alt="Simo Action 3"
            title="Simo Action 3"
          />
          <Simo
            src="/images/6c1a17730fca.png"
            alt="Simo Action 2"
            title="Simo Action 2"
          />
        </ul>
      </div>
      <h2>Motivasi</h2>
      <p>
        Maskot STIKOM ini bernama SIMO yang melambangkan penyu, salah satu ciri
        khas hewan dari Banyuwangi. Sebagai hewan yang hidup ratusan tahun,
        penyu juga merupakan simbol keberlangsungan hidup dan ketahanan yang
        kuat. Dalam hal ini, SIMO mengajarkan nilai-nilai penting seperti
        ketahanan, ketekunan, dan konsistensi dalam menjalani kehidupan.
      </p>
      <p>
        Selain itu, penyu juga merupakan hewan yang terkenal sebagai penjelajah
        laut, yang sering menempuh perjalanan jauh untuk mencari makanan atau
        tempat bertelur. SIMO yang terinspirasi dari penyu ini juga mengajarkan
        nilai penting tentang eksplorasi dan kepemimpinan dalam mencapai tujuan,
        serta kemampuan untuk menjaga akar dan asal-usul dalam perjalanan hidup
        yang panjang.
      </p>
    </article>
  );
}

function Simo({
  src,
  alt,
  title,
}: {
  src: string;
  alt: string;
  title: string;
}) {
  const view = {
    mascot: {
      framerMotion: (
        <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 1.03 }} />
      ),
    },
  };

  return (
    <li>
      <motion.a
        className="inline-block w-fit"
        href={src}
        download
        {...view.mascot.framerMotion.props}
      >
        <img className="h-48 object-cover" src={src} alt={alt} title={title} />
      </motion.a>
    </li>
  );
}
