import React from "react";
import PropTypes from "prop-types";

const Cita = ({ cita, eliminarCita }) => (
  <div className="cita">
    <p>
      Pet:
      <span>{cita.pet}</span>
    </p>
    <p>
      Owner:
      <span>{cita.owner}</span>
    </p>
    <p>
      Date:
      <span>{cita.date}</span>
    </p>
    <p>
      Time:
      <span>{cita.time}</span>
    </p>
    <p>
      Symptoms:
      <span>{cita.symptoms}</span>
    </p>

    <button
      className="button eliminar u-full-width"
      onClick={() => eliminarCita(cita.id)}
    >
      Eliminar &times;
    </button>
  </div>
);

Cita.propTypes = {
  cita: PropTypes.object.isRequired,
  eliminarCita: PropTypes.func.isRequired
};
export default Cita;
