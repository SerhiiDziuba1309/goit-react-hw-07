import React from 'react';
import s from './Contact.module.css';

function Contact({ id, name, number, deleteContact }) {
  return (
    <li className={s.contact}>
      {name}: {number}
      <button className={s.deleteButton} onClick={() => deleteContact(id)}>
        Delete
      </button>
    </li>
  );
}

export default Contact;
