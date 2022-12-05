import React, { useState } from "react";

export default function Contact() {

  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
    phone: "",
  });

  const [error, setError] = useState({
    username: null,
    email: null,
    phone: null,
  });

  const changeHandeler = (e) => {
    switch (e.target.name) {
      case "email":
        const regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
        if (!regex.test(e.target.value)) {
          setError({
            [e.target.name]: 1,
          });
        } else {
          setFormValues({
            ...formValues,
            [e.target.name]: e.target.value,
          });
          setError({
            [e.target.name]: null,
          });
        }
        break;

      case "username":
        if (e.target.value.length <= 5) {
          setError({
            [e.target.name]: 1,
          });
        } else {
          setFormValues({
            ...formValues,
            [e.target.name]: e.target.value,
          });
          setError({
            [e.target.name]: null,
          });
        }
        break;

      case "phone":
        if(e.target.value.length < 11 || isNaN(e.target.value))
        {
          setError({
            [e.target.name]: 1,
          });
        } else
        {
          setFormValues({
            ...formValues,
            [e.target.name]: e.target.value,
          });
          setError({
            [e.target.name]: null,
          });
        }
        break;

      default:
        setError({
          username: null,
          email: null,
          phone: null,
        });
    }
  };

  const onSubmit = (e) => {
    
    e.preventDefault();
    (formValues.username == "") ? setError({...error, [error.username]: 1,}) : setError({...error, [error.username]: null,});
    (formValues.email == "") ? setError({...error, [error.email]: 1,}) : setError({...error, [error.email]: null,});
    (formValues.phone == "") ? setError({...error, [error.phone]: 1,}) : setError({...error, [error.phone]: null,});
  }

  return (
    <section className="contact section bd-container" id="contact">
      <div className="contact__container bd-grid">
        <div className="contact__box">
          <h2 className="section__title">
            Reach out to us today <br /> We are glad to hear your <br />{" "}
            Feedback
          </h2>
        </div>
        <form action="" className="contact__form">
          <div className="contact__inputs">
            <div className="contact__content">
              <input
                type="text"
                placeholder=" "
                className="contact__input"
                id="name"
                onChange={changeHandeler}
                name="username"
              />
              <label htmlFor="" className="contact__label">
                Name
              </label>
            </div>

            {error.username && (
              <p className="text-danger">
                user name must be longer than 5 chats
              </p>
            )}

            <div className="contact__content">
              <input
                type="email"
                placeholder=" "
                className="contact__input"
                id="email"
                onChange={changeHandeler}
                name="email"
              />
              <label htmlFor="" className="contact__label">
                Email
              </label>
              <p className="alert" id="emailAlert" />
            </div>

            {error.email && (
              <p className="text-danger">Email not match the pattern...</p>
            )}

            <div className="contact__content">
              <input
                type="tel"
                placeholder=" "
                className="contact__input"
                id="phone"
                onChange={changeHandeler}
                name="phone"
              />
              <label htmlFor="" className="contact__label">
                Phone
              </label>
              <p className="alert" id="phoneAlert" />
            </div>

            {error.phone && (
              <p className="text-danger">Phone Must be a Number...</p>
            )}

            <div className="contact__content">
              <input
                type="text"
                placeholder=" "
                className="contact__input"
                id="subject"
              />
              <label htmlFor="" className="contact__label">
                Subject
              </label>
              <p className="alert" id="subjectAlert" />
            </div>
          </div>
          <button className="button contact__submit" id="submit" onClick={onSubmit}>
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
