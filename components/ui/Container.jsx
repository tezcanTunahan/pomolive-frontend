import Head from 'next/head';
import Navbar from '../Navbar';
const Container = ({ title, description, keywords, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
      </Head>
      <Navbar />
      {children}
      <footer></footer>
    </>
  );
};
Container.defaultProps = {
  title: 'Pomolive',
  description: 'online pomo',
  keywords: 'onlinne,pomo,work',
};

export default Container;
