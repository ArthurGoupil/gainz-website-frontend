import { useState, useEffect, useCallback } from "react";

import axios from "axios";

const ContactForm = ({ id }) => {
  const [lastName, setLastName] = useState(null);
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [tel, setTel] = useState(null);
  const [select, setSelect] = useState(null);

  const handleSubmit = async event => {};
  const handleLastNameChange = () => {};
  const handleNameChange = () => {};
  const handleEmailChange = () => {};
  const handleTelChange = () => {};
  const handleSelectChange = () => {};

  return (
    <form className="d-flex flex-column">
      <input
        type="text"
        placeholder="Dupont"
        name="last-name"
        autoComplete="family-name"
        value={lastName}
        onChange={handleLastNameChange}
      />
      <input
        type="text"
        placeholder="Martin"
        name="name"
        autoComplete="given-name"
        value={name}
        onChange={handleNameChange}
      />
      <input
        type="email"
        placeholder="martindupont@mail.com"
        name="email"
        autoComplete="email"
        value={email}
        onChange={handleEmailChange}
      />
      <input
        type="tel"
        placeholder="06 12 34 56 78"
        name="tel"
        autoComplete="tel"
        value={tel}
        onChange={handleTelChange}
      />
      <textarea
        placeholder="06 12 34 56 78"
        name="tel"
        autoComplete="tel"
        value={tel}
        onChange={handleTelChange}
      />
      <input type="submit" value="yo" />
    </form>
  );
};

export default ContactForm;
