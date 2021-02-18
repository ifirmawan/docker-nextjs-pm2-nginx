import Link from 'next/link'

const HomePage = ({ host }) => {
  return (
    <>
      <Link href="/about">
        <a>About</a>
      </Link>
      <h1>Home {host || ''}</h1>
      <img src="/home.jpg" alt="homepage" />
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


export default HomePage