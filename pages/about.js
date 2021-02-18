import Link from 'next/link'

const AboutPage = () => {
  return (
    <>
      <Link href="/">
        <a>Home</a>
      </Link>
      <h1>Tentang Kita</h1>
      <img src="/about.jpg" alt="About page" />
    </>
  )
}

export default AboutPage