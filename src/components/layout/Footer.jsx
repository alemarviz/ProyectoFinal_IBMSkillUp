import React from "react";
import { AiFillInstagram, AiFillYoutube, AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <h2>AMV bar</h2>
        <p>Explora nuestra amplia gama de hamburguesas diseñadas para complacer a todos los paladares. </p>
        <br />
        <em>No importa si eres un amante de la carne o prefieres opciones vegetarianas, tenemos algo especial reservado para ti. </em>
        <strong>Alejandro MV #2023#</strong>
      </div>
      <aside>
        <h4>Siguenos en nuestras redes</h4>
        <a href="https://youtube.com/xyz">
          <AiFillYoutube />
        </a>
        <a href="https://instagram.com/xyz">
          <AiFillInstagram />
        </a>
        <a href="https://github.com/xyz">
          <AiFillGithub />
        </a>
      </aside>
    </footer>
  );
};

export default Footer;
