import Head from 'next/head';

interface TitleType {
  title: string;
}

const Title = (props: TitleType) => {
  return (
    <Head>
      <title>{props.title}</title>
      <link rel="icon" href="/images/tab_icon.png" />
    </Head>
  );
};

export default Title;