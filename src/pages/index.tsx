import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import Layout from '@/components/layout/layout';
import tw from 'twin.macro';

const Description = tw.p`text-center text-base leading-6`;
const DescriptionXL = tw(Description)`text-xl`;
export default function Home() {
  return (
    <Layout>
      <Head>
        <title>RR Web Tools</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <div className={styles.main}>
          <h1 className={styles.title}>
            Welcome to <Link href="">RR Web Tools</Link>!
          </h1>

          <DescriptionXL>
            Get started by selecting one of the{` `}
            <code className={styles.code}>tools</code>
          </DescriptionXL>

          <Description className={styles.description}>
            Some of the tools maybe in Italian only, contact me In Game if you
            want them in your language!
          </Description>

          <div className={styles.grid}>
            <Link href="/daily-vp" passHref>
              <a className={styles.card}>
                <h3>Deputy Prefect &rarr;</h3>
                <p>Check who traveled in and out of your city!</p>
              </a>
            </Link>

            <a className={styles.card}>
              <h3>:)</h3>
              <p>I haven't implemented other tools as of now :D</p>
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}
