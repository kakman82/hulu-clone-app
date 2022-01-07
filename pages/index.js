import Head from 'next/head';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import Results from '../components/Results';
import { requests } from '../utils/requests';

export default function Home({ results }) {
  //console.log(results);
  return (
    <div>
      <Head>
        <title>Hulu Clone App</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>

      <Header />
      <NavBar />
      <Results results={results} />
    </div>
  );
}

// export async function getServerSideProps(context) {
//   const genre = context.query.genre;

//   const response = await fetch(
//     `https://api.themoviedb.org/3${
//       requests[genre]?.url || requests.fetchTrending.url
//     }`
//   ).then((res) => res.json());

//   return {
//     props: {
//       results: response.results,
//     },
//   };
// }

// second way with arrow function and using await (not then) to get json;
export const getServerSideProps = async (context) => {
  const genre = context.query.genre;

  const res = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchTrending.url
    }`
  );

  const { results } = await res.json();

  return {
    props: {
      results,
    },
  };
};
