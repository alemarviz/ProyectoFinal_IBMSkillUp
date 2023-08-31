import React from "react";
import { Link } from "react-router-dom";
import { RiFindReplaceLine } from "react-icons/ri";
import me from "../../assets/amv_hexatar.png";

const About = () => {
  return (
    <section className="about">
      <main>
        <h1>Sobre nosotros</h1>
        <article>
          <h4>AMV Bar</h4>
          <p>
            ¡Bienvenidos a nuestro sitio, donde las hamburguesas de tus sueños se vuelven realidad! 
          </p>
          <p>
            En nuestro sitio, te sumergirás en un paraíso jugoso y lleno de sabor que satisfará todos tus antojos. 
            Nuestra pasión por la comida se refleja en cada aspecto de nuestras hamburguesas: 
            desde la elección meticulosa de los ingredientes frescos y de alta calidad hasta la combinación perfecta de sabores.
          </p>
          <Link to="/">
            <RiFindReplaceLine />
          </Link>
        </article>
        <div>
          <h2>Fundador</h2>
          <article>
            <div>
              <img src={me} alt="Founder" />
              <h3>Alejandro MV</h3>
            </div>
            <p>
                Es un honor para mi presentarte nuestra carta destinada a cautivar los corazones de los amantes de la comida.
            </p>
          </article>
        </div>
      </main>
    </section>
  );
};

export default About;
