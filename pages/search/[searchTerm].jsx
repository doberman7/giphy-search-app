import Head from 'next/head';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Footer from '../../components/Footer';

export default function Search(initialData) {
    const router = useRouter();
    return (
        <>
            <Head>
                <p>
                    Go{' '}
                    <Link href="/">
                        <a>home</a>
                    </Link>
                </p>
                <title>Search</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="/styles.css" />
            </Head>
            <h1>Search results for: {router.query.searchTerm}</h1>

            {/* You access the parameter with the name you assigned it. It will be located inside the
            router.params object. */}
            <div className="giphy-search-results-grid">
                {initialData.giphys.map((each, index) => {
                    return (
                        <div key={index}>
                            <h3>{each.title}</h3>
                            <img src={each.images.original.url} alt={each.title} />
                        </div>
                    );
                })}
            </div>
            <Footer />
        </>
    );
}
export async function getServerSideProps(context) {
    const searchTerm = context.query.searchTerm;
    let giphys = await fetch(
        `https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=nPJNlVceWHERWCSDBW5XMo1p90l7l9ie&limit=6`
    );
    giphys = await giphys.json();
    return { props: { giphys: giphys.data } };
}
