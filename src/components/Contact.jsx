function Contact({ email }) {
  return (
    <section id="contact">
      <h2>Contact</h2>
      <p>
        <a href={`mailto:${email}`}>{email}</a>
      </p>
    </section>
  )
}

export default Contact
