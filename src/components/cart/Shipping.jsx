import React from "react";
import { Link } from "react-router-dom";
import { Country, State } from "country-state-city";
import Popup from 'reactjs-popup';

const Shipping = () => {
  return (
    <section className="shipping">
      <main>
        <h1>Datos del pedido:</h1>
        
        <form>
        
          <div>
            <label>Dirección</label>
            <input type="text" placeholder="dirección" value="San Lucas, 1"/>
          </div>
        
          <div>
            <label>Localidad</label>
            <input type="text" placeholder="localidad" value="León" />
          </div>

          <div>
              <label>Provincia</label>
              <select>
                 <option value="">León</option>
              </select>
          </div>

          <div>
            
            {/* Pais */}
            <label>País/Provincia</label>
            <select>
              <option value="">España</option>
            </select>

          </div>
          
          <div>
            <label>Teléfono</label>
            <input type="tel" placeholder="teléfono" value="987-12-13-14"/>
          </div>
          
          {/* Enter thr code for contact  */}
          
          <Popup trigger=
                {
                  <Link className="link" to="/myorders">
                    Confirmar pedido
                  </Link>
                }>
                
                <div style={{color:"red",position: 'absolute', top: '50%', right: '100%', transform: 'translateY(-50%)', backgroundColor: '#fff', padding: '10px', borderRadius: '5px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)'}}>¡Completado con éxito!</div>     
          </Popup>


        </form>
      </main>
    </section>
  );
};

export default Shipping;
