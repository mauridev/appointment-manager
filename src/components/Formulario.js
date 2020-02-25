import React, { Fragment, useState } from "react";

const Formulario = () => {
  //Crear State de appointment
  const [appointment, updateAppointment] = useState({
    pet: "",
    owner: "",
    date: "",
    time: "",
    symptoms: ""
  });

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
    console.log("enviando form");

    //validar

    //asignar un ID

    //Crear la cita

    //Reiniciar el form
  };

  return (
    <Fragment>
      <h2>Add new appointment</h2>
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

export default Formulario;
