import React from "react";
import { motion } from "framer-motion";
import foto from "../../assets/amv_hexatar.png";

const Founder = () => {
  const options = {
    initial: {
      x: "-100%",
      opacity: 0,
    },
    whileInView: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <section className="founder">
      <motion.div {...options}>
        <img src={foto} alt="Founder" height={200} width={200} />
        <h3>Sobre mí</h3>
        <p>
          ¡Hola! Soy Alejandro, el creador de este sitio para paladares selectos.
          <br />
          Nuestro objetivo es conseguir hacer los sueños una realidad.
        </p>
      </motion.div>
    </section>
  );
};

export default Founder;
