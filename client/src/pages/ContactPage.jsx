import "../styles/ContactPage.css";
import { useState } from "react";

function ContactPage() {
  const [formData, setFormData] = useState({
    lastname: "",
    firstname: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "lastname") {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value.slice(0, 30).toUpperCase(),
      }));
    } else if (name === "firstname") {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value.slice(0, 30).charAt(0).toUpperCase() + value.slice(1),
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormData({
      lastname: "",
      firstname: "",
      email: "",
      message: "",
    });
  };

  return (
    <>
      <img
        className="banniere-contact-page"
        src="./src/assets/images/banniere-2-2000x1200.jpg"
        alt="banniere site remember"
      />
      <section className="contact-form-container">
        <h2 className="title-contact-page">Contactez nous</h2>
        <form onSubmit={handleSubmit}>
          <article className="form-group">
            <label htmlFor="lastname">Nom:</label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              value={formData.lastname}
              onChange={handleChange}
              placeholder="Entrer votre nom"
              required
            />
          </article>
          <article className="form-group">
            <label htmlFor="firstname">Prénom:</label>
            <input
              type="text"
              id="firstname"
              name="firstname"
              value={formData.firstname}
              onChange={handleChange}
              placeholder="Entrer votre prénom"
              required
            />
          </article>
          <article className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Entrer votre adresse mail"
              required
            />
          </article>
          <article className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Entrer votre message"
              required
            />
          </article>
          <button className="formButton" type="submit">
            Envoyer
          </button>
        </form>
      </section>
    </>
  );
}

export default ContactPage;
