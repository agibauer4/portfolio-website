function Footer({ name, email }) {
  return (
    <footer>
      <a className="btn" href={`mailto:${email}`}>
        {email}
      </a>
      <p>
        &copy; {new Date().getFullYear()} {name}
      </p>
    </footer>
  )
}

export default Footer
