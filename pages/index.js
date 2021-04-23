import AlbumList from '../components/album-list';
import Head from 'next/head';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Photo Album</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AlbumList/>
      <style jsx>{`
        .container {
          background: #efefef;
          min-height: 100vh;
          padding: 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      `}</style>
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
