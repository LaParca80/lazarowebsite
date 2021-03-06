import { useEffect } from "react";
import Head from "next/head";
import { Fragment } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.css";

const Container = props => {
    useEffect(() => {
        AOS.init({
            startEvent: "DOMContentLoaded",
            offset: 120,
            duration: 1200,
            delay: 100,
        });
        window.addEventListener("scroll", () => {
            AOS.refresh();
        });
    });

    return (
        <Fragment>
            <Head>
                <title>Lázaro Cáceres</title>
                <link rel="stylesheet" href="index.css" />
                <meta name="author" content="Lázaro Cáceres" />
                <meta name="description" content="Sitio web profesional del programador Lázaro Cáceres." />
                <link rel="icon" sizes="16x16" href="code.svg" />
                <link rel="icon" sizes="32x32" href="code.svg" />
                <link rel="apple-touch-icon" sizes="180x180" href="code.svg" />
            </Head>
            <Fragment>{props.children}</Fragment>
        </Fragment>
    );
};

export default Container;
