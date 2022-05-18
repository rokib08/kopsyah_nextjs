import Head from "next/head";
import Footer from "../Footer";
import Header from "../Header";
import styles from "./Layout.module.css";


function Layout({children, pageTitle}) {
    return (
        <>
        <Head>
            <title>Next JS | {pageTitle}</title>
            <meta name="description" content="Wibsite NexxtJS Basic"/>
        </Head>
        <div className={styles.container}>
            <Header />
            <div className={styles.content}>{children}</div>
            <Footer />  
        </div>
        </>
    );
}

export default Layout;