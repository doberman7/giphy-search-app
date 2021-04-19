import { useEffect } from 'react';
import Head from 'next/head';

// const key = process.env.GIPHY_KEY,

export default function Home(initialData) {
    useEffect(() => {
        console.log(initialData);
    });
    //Now that you know that the onChange event is working to grab the input’s value, you will create a function to get the value of inputs inside your component. Note that the component is also a function.
    const handleInputs = (event) => {
        console.log(event.target.value);
        console.log(event.target.name);
    };
    const search = (event) => {
        event.preventDefault();
        console.log('formInputs.searchTerm');
    };
    return (
        <div className="container">
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="/styles.css" />
            </Head>

            <h1>Giphy Search App</h1>

            <form onSubmit={search}>
                <input name="searchTerm" onChange={handleInputs} type="text" required />
                <button>Search</button>
            </form>
            <div className="giphy-search-results-grid">
                {initialData.catGiphys.data.map((each, index) => {
                    return (
                        <div key={index}>
                            <h3>{each.title}</h3>
                            <img src={each.images.original.url} alt={each.title} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export async function getStaticProps() {
    let catGiphys = await fetch(
        `https://api.giphy.com/v1/gifs/search?q=cats&api_key=${process.env.giphy_key}&limit=8`
    );
    catGiphys = await catGiphys.json();
    return { props: { catGiphys: catGiphys } };
}
