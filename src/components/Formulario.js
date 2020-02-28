import React, { Fragment, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";

const Formulario = ({ crearCita }) => {
  //Crear State de appointment
  const [appointment, updateAppointment] = useState({
    pet: "",
    owner: "",
    date: "",
    time: "",
    symptoms: ""
  });
  const [error, actualizarError] = useState(false);

  //Funcion que se ejecuta cada vez que el usuairo escribe en un input
  const updateState = e => {
    updateAppointment({
      ...appointment,
      [e.target.name]: e.target.value
    });
  };

  //extrae los valores
  const { pet, owner, date, time, symptoms } = appointment;

  //cuando el usuario presiona el boton del formulario
  const submitAppointment = e => {
    e.preventDefault();

    //validar
    if (
      pet.trim() === "" ||
      owner.trim() === "" ||
      date.trim() === "" ||
      time.trim() === "" ||
      symptoms.trim() === ""
    ) {
      actualizarError(true);
      return;
    }

    //eliminar mensaje de error
    actualizarError(false);

    //asignar un ID
    appointment.id = uuidv4();
    //Crear la cita
    crearCita(appointment);
    //Reiniciar el form
    updateAppointment({
      pet: "",
      owner: "",
      date: "",
      time: "",
      symptoms: ""
    });
  };

  return (
    <Fragment>
      <h2>Add new appointment</h2>
      {error ? (
        <p className="alerta-error">Todos los campos son obligatiors</p>
      ) : null}
      <form onSubmit={submitAppointment}>
        <label>Pet Name</label>
        <input
          type="text"
          name="pet"
          className="u-full-width"
          placeholder="Pet name"
          onChange={updateState}
          value={pet}
        />
        <label>Nombre dueño</label>
        <input
          type="text"
          name="owner"
          className="u-full-width"
          placeholder="Owner name"
          onChange={updateState}
          value={owner}
        />
        <label>Date</label>
        <input
          type="date"
          name="date"
          className="u-full-width"
          onChange={updateState}
          value={date}
        />
        <label>Hora</label>
        <input
          type="time"
          name="time"
          className="u-full-width"
          onChange={updateState}
          value={time}
        />
        <label>Sintomas</label>
        <textarea
          className="u-full-width"
          name="symptoms"
          onChange={updateState}
          value={symptoms}
        ></textarea>
        <button type="submit" className="u-full-width button-primary">
          Add appointment
        </button>
      </form>
    </Fragment>
  );
};

Formulario.propTypes = {
  crearCita: PropTypes.func.isRequired
};
export default Formulario;
