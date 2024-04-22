import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "./Form.scss";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const [sent, setSent] = useState(false);

  let tg = {
    token: "5725567041:AAGRSVQWgjq6u3dBGOC753HxHEj0srtUyF0",
    chat_id: "-1001532196049,", // The user's(that you want to send a message) telegram chat id
  };

  function sendMessage(e) {
    e.preventDefault();
    let message = `имя: ${name}, емейл: ${email}`;
    const url = `https://api.telegram.org/bot${tg.token}/sendMessage?chat_id=${tg.chat_id}&text=${message}`; // The url to request
    const xht = new XMLHttpRequest();
    xht.open("POST", url);
    xht.send();
    setEmail("");
    setName("");
    setSent(true);
  }
  return (
    <section className="form-container module-border-wrap">
      <form
        action=""
        onSubmit={sendMessage}
        className="form-container__form  module"
        style={
          sent
            ? {
                height: "400px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }
            : {}
        }
      >
        {!sent ? (
          <>
            <h1>We will text you soon</h1>
            <label htmlFor="name">Name:</label>
            <div className="form-container__form__input">
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                onChange={(e) => setName(e.target.value)}
                value={name}
                required
              />
            </div>
            <label htmlFor="email">Email:</label>
            <div className="form-container__form__input">
              <input
                type="text"
                name="email"
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
              />
            </div>
            <button className="form-container__form__input-btn" type="submit">
              Contact
            </button>
          </>
        ) : (
          <h2>Thank you!</h2>
        )}
      </form>
    </section>
  );
};

export default Form;
