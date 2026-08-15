function Footer({ name }) {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} {name}</p>
    </footer>
  )
}

export default Footer
