import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./ContactForm.css";

const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.send(
      "service_0q57l6e", // Reemplaza con tu Service ID
      "template_bhldg4h", // Reemplaza con tu Template ID
      
      {
        from_name: name,
        from_email: email,
        to_name: "StrengthFit Utrera", // Nombre del receptor
        message: message,
      },
      "2rBtVNFTQLeJiUiRc" // Reemplaza con tu User ID de EmailJS
    ).then((result) => {
        console.log("Email sent successfully!", result.text);
      })
      .catch((error) => {
        console.error("There was an error sending the email", error.text);
      });

    // Limpiar el formulario después del envío
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="container text-white contact__form-square">
      <form onSubmit={sendEmail}>
        <div className="mb-2 text-xl-center">
          <label htmlFor="exampleFormControlInput1" className="form-label ">
            Tu Nombre
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlName"
            placeholder="Tu Nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-2 text-xl-center">
          <label htmlFor="exampleFormControlInput1" className="form-label ">
            Tu Email
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="text-xl-center">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Tu mensaje
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="10"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="mt-4 mb-4 d-flex ">
          <button type="submit" className="btn btn-primary button-contacto">
            Solicitar más información
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
