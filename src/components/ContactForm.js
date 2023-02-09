import React from 'react'
import classes from './ContactForm.module.css'

function ContactForm() {
  return (
    <div className={classes['form-container']}>
     <h3>Send us a message 😎</h3>
     <form>
      <input placeholder='Name' />
      <input placeholder='Email' />
      <input placeholder='Subject' />
      <textarea placeholder='Message' rows='4'></textarea>
      <button>Send message</button>
     </form>
    </div>
  )
}

export default ContactForm