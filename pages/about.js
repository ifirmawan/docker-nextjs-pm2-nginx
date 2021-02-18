import Link from 'next/link'

const AboutPage = ({ host, products }) => {
  
  const handleOnClick = async () => {
    const response = await fetch(`http://${process.env.NEXT_PUBLIC_ENV_API_PREFIX}.${host}`, {
      headers: {
        Accept: 'application/json'
      }
    })
    console.log(response.json());
  }

  return (
    <>
      <Link href="/">
        <a>Home</a>
      </Link>
      <h1>Tentang Kita</h1>
      <button type='button' onClick={handleOnClick}>
        klik disini
      </button>
      <img src="/about.jpg" alt="About page" />
    </>
  )
}

export async function getServerSideProps({ req, res }) {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=1, stale-while-revalidate=59'
  );  
  return {
    props: {
      host: req.headers.host
    }
  };
}

export default AboutPage