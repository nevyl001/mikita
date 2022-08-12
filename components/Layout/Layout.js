import Head from "next/head";
import Menu from "./Menu";
import Footer from "./Footer";
import classes from "./Layout.module.css";

function Layout(props) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/imgs/logoal.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />

        <title>Mikita</title>
        <meta
          name="description"
          content="MIKITA TOWN - SE UBICA EN UNA ZONA PRVILEGIADA..."
        />
        <link rel="icon" href="/imgs/logoal.png" />
        <meta name="description" content="MIKITA TOWN" />
        <meta property="og:image" content="/imgs/logoal.png"></meta>
        <meta
          property="og:title"
          content="MIKITA TOWN - PERMITE TRASLADOS EN CORTO TIEMPO, GRACIAS AL POCO TRAFICO VEHICULAR."
        ></meta>
        <meta
          property="og:description"
          content="MIKITA TOWN SE UBICA EN UNA ZONA PRVILEGIADA QUE PERMITE TRASLADOS EN CORTO TIEMPO, GRACIAS AL POCO TRAFICO VEHICULAR."
        ></meta>
      </Head>
      <Menu />
      <main className={classes.main}>{props.children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
