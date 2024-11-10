import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "../components/Contact.css";

const EmailSender = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = "service_ioi7r8p";
    const templateID = "template_12m6jma";
    const publicKey = "Lp711BOuCg8w_tYzG";

    const templateParams = {
      from_name: name,
      from_email: email,
      from_phone: phone,
      to_name: "Vlad Simionescu",
      message: message,
    };

    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
      });
  };

  return (
    <div className="contact-box">
      <form onSubmit={handleSubmit} className="emailForm">
        <label>Name</label>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Email</label>
        <input
          type="email"
          placeholder="Your Email Adress"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Phone</label>
        <input
          type="text"
          placeholder="Your Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <label>Message</label>
        <textarea
          cols="50"
          rows="3"
          maxLength="200"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">
          Send
        </button>
      </form>
    </div>
  );
};

export default EmailSender;
