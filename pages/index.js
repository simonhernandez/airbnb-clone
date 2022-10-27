import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Banner from "../components/Banner";
import SmallCard from "../components/SmallCard";
import MediumCard from "../components/MediumCard";

export default function Home({exploreData, cardsData}) {
  return (
    <div>
      <Head>
        <title>Airbnb Clone</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />

      {/* Banner */}
      <Banner />

      {/* Main */}
      <main className="max-w-7xl mx-auto">
        <section className="py-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>

          {/* Pull data from endpoint */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {exploreData?.map((item, index) => (
            <li key={index}>
              <SmallCard image={item.img} location={item.location} distance={item.distance} />
            </li>
          ))}
          </ul>
        </section>

        <section className="py-6">
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>

          {/* Pull data from endpoint */}
          <ul className="flex space-x-3 overflow-x-scroll py-3">
          {cardsData?.map((item, index) => (
            <li key={index}>
              <MediumCard image={item.img} title={item.title} />
            </li>
          ))}
          </ul>
        </section>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const exploreData = await fetch("https://www.jsonkeeper.com/b/4G1G").then(
    (res) => res.json()
  );

  const cardsData = await fetch("https://www.jsonkeeper.com/b/VHHT").then(
    (res) => res.json()
  );

  return {
    props: {
      exploreData,
      cardsData,
    },
  }
}
