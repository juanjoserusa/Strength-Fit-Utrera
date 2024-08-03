import React from "react";
import "./ContactForm.css";

const ContactForm = () => {
  return (
    <div className="container text-white contact__form-square">
      <form>
        <div class="mb-5 text-xl-center">
          <label for="exampleFormControlInput1" class="form-label ">
            Tu Email
          </label>
          <input
            type="email"
            class="form-control "
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
        <div className="text-xl-center">
          <label for="exampleFormControlTextarea1" class="form-label">
            Tu mensaje
          </label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="10"
          ></textarea>
        </div>
        <div className="mt-4 mb-4 d-flex ">
            <button className=" btn btn-primary button-contacto ">Solcitar mas información</button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;


