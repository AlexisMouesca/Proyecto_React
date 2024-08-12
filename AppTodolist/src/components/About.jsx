import React from 'react';

const About = () => {
  return (
    <div className="container mt-5 about-container">
      <h1>About Us</h1>
      <p className="about-description">¡Bienvenido a nuestra aplicacion To-Do List! Aqui puede administrar y realizar un seguimiento de sus tareas facilmente.
        Ya sean tareas diarias o proyectos a largo plazo, nuetra aplicacion lo ayuda a mantenerse organizado y productivo.
      </p>
      <h2>Caracteristicas:</h2>
      <p>Facil gestion de tareas.
        Integracion de Calendario para una mejor planificacion. </p>
      <h2>Contact Us:</h2>
      <p>Si tiene alguna pregunta o comentario, no dude en contactarnos <a href="mailto:alexiscarpmouesca@gmail.com">contact us</a>.</p>
    </div>
  );
}

export default About;
