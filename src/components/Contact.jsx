import React from "react";
import "./Contact.css";
import Swal from "sweetalert2";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "3510b889-cf75-4178-aa89-dab32d1734e0");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Takk for din bestilling!",
        text: "Du vil bli kontaktet fortløpende angående levering. Du kan nå lukke vinduet",
        icon: "success",
      });
    }
  };

  return (
    <section className="contact">
      <form onSubmit={onSubmit}>
        <h2>Bestillingsskjema | kunstKaja.no</h2>
        <div className="input-box">
          <label>Navn</label>
          <input
            type="text"
            className="field"
            placeholder="Ditt navn her"
            name="name"
            required
          />
        </div>

        <div className="input-box">
          <label>E-post</label>
          <input
            type="email"
            className="field"
            placeholder="Din e-post her"
            name="email"
            required
          />
        </div>
        <div className="input-box">
          <label>Telefon</label>
          <input
            type="phone"
            className="field"
            placeholder="Ditt telefonnummer her"
            name="phone"
            required
          />
        </div>
        <div className="input-box">
          <label>Bestilling:</label>
          <textarea
            name="message"
            className="field message"
            placeholder="Jeg vil gjerne bestille..."
            required
          />
        </div>
        <button type="submit">Send bestilling</button>
      </form>
    </section>
  );
};

export default Contact;
