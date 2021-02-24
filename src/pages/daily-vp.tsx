import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Layout from '@/components/layout/layout';
import tw from 'twin.macro';
import Card from '@/components/Card';
import { useRef, useState } from 'react';

const TextAreaDescription = tw.p`text-center text-xl leading-6 mt-16`;
const FinalDescription = tw(
  TextAreaDescription,
)`text-blue-500 text-left self-start text-3xl`;
const TextArea = tw.textarea`mt-4 w-full border border-gray-200 h-32`;

const CardWFull = tw(Card)`w-full`;
const Code = tw.p`bg-gray-200 rounded p-3 text-sm font-mono`;
const HiddenTextArea = tw.textarea`w-1 h-1 fixed -top-1 -left-1`;

const Description = tw.p`text-center text-base leading-6`;
const DescriptionXL = tw(Description)`text-xl`;

export const CopyButton = tw.div`w-1/2 px-3 py-2 mx-1 mt-3 rounded text-center text-sm font-medium leading-5
 bg-blue-500 text-gray-50 border border-blue-500 hover:(bg-gray-50 text-gray-900 )
 md:mx-0 md:w-auto flex items-center self-start cursor-pointer`;

export default function Home() {
  const ref = useRef(null);
  const [today, setToday] = useState(
    'Hania , Madama di Dragoniuss Unico Uomo della Sua Vita!!\t255PR\t\n' +
      'Anirama , Madama dei Carafa della Spina\t255PR\t\n' +
      'Gregorio , Cavaliere Immoto\t255PR\t\n' +
      'Nadezda , Baronessa di Rubiera, Contessa consorte di Correggio e di Bianello\t255PR\t',
  );
  const [yesterday, setYesterday] = useState(
    'Hania , Madama di Dragoniuss Unico Uomo della Sua Vita!!\t255PR\t\n' +
      'Gregorio , Cavaliere Immoto\t255PR\t\n' +
      'Nadezda , Baronessa di Rubiera, Contessa consorte di Correggio e di Bianello\t255PR\t\n' +
      'Periplo , Cavaliere di Merito del Ducato di Modena , Cavaliere di Massa Finalese\t255PR\t',
  );
  const [groups, setGroups] = useState(
    'Gruppo Armato di Miriah\n' +
      "Con l'autorizzazione\tChiedete di unirvi\n" +
      'Gruppo Armato di Orlando_collalto\n' +
      'Ammissione libera\tUnitevi',
  );

  const copyToClipboard = () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    ref.current.select();
    document.execCommand('copy');
  };

  const getName = (elem: string): string => {
    const temp = elem.replace('\t', ' ').split(' ');
    return temp[0];
  };

  const todayNames = today.split('\n').map(getName);
  const yesterdayNames = yesterday.split('\n').map(getName);
  const level_1 = today
    .split('\n')
    .filter((x) => x.includes('(Scheda degli obiettivi)'))
    .map(getName);

  const arrived = todayNames.filter(
    (x) => !yesterdayNames.includes(x) && !level_1.includes(x),
  );
  const departed = yesterdayNames.filter((x) => !todayNames.includes(x));
  const new_born = todayNames.filter(
    (x) => !yesterdayNames.includes(x) && level_1.includes(x),
  );

  const groupsFN = () =>
    groups
      .split('\n')
      .filter((_, index) => index % 2 === 0)
      .map((x) => x.trim());

  const fullText = `
            [color=darkred][b][size=18]Arrivati[/size][/b][/color]
            [list]
            ${arrived.map((x) => `[char]${x}[/char]\n`).join('')}[/list]

            [color=darkred][b][size=18]Partiti[/size][/b][/color]
            [list]
            ${departed.map((x) => `[char]${x}[/char]\n`).join('')}[/list]

            [color=darkred][b][size=18]Nuovi Nati[/size][/b][/color]
            [list]
            ${new_born.map((x) => `[char]${x}[/char]\n`).join('')}[/list]

            [color=darkred][size=18][b]Lista di coloro che attualmente si trovano in città  (${
              todayNames.length
            })[/b][/size][/color]
            [list]
             ${todayNames
               .map((x) => (x ? `[char]${x.trim()}[/char]\n` : ''))
               .join('')}[/list]

            [color=darkred][b][size=18]Gruppi ed eserciti presenti in città[/size][/b][/color]
            [list]
            ${groupsFN()
              .map((x) => `${x}\n`)
              .join('')}[/list]
            `;

  return (
    <Layout>
      <Head>
        <title>Deputy Prefect - RR Web Tools</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <div className={styles.main}>
          <h1 className={styles.title}>Deputy Prefect</h1>

          <DescriptionXL>
            Use the list of citizen in the town hall from two different days to
            check the daily differences
          </DescriptionXL>

          <Description>
            Please substitute the default values, they're there just as an
            example!
          </Description>

          <TextAreaDescription>Today's list of citizen</TextAreaDescription>
          <TextArea value={today} onChange={(e) => setToday(e.target.value)} />

          <TextAreaDescription>Yesterday's list of citizen</TextAreaDescription>
          <TextArea
            value={yesterday}
            onChange={(e) => setYesterday(e.target.value)}
          />

          <TextAreaDescription>Groups in the city</TextAreaDescription>
          <TextArea
            value={groups}
            onChange={(e) => setGroups(e.target.value)}
          />

          <FinalDescription>Your report</FinalDescription>
          <CopyButton onClick={copyToClipboard}>Copy to clipboard</CopyButton>
          <CardWFull>
            <HiddenTextArea value={fullText} ref={ref} readOnly />
            <Code>
              {fullText
                .split('\n')
                .map((x, i) => (x ? <p key={i}>{x}</p> : <br />))}
            </Code>
          </CardWFull>
        </div>
      </div>
    </Layout>
  );
}
