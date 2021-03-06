import Head from "next/head";
import Container from "../components/Container";
import { Fragment } from "react";
import styled from "styled-components";
import Footer from "../components/Footer";

const Contain = styled.div`
    padding-top: 5%;
    padding-bottom: 100px;
`;

const ResponsiveIMG = styled.img`
    max-width: 550px;
    width: 100%;
    height: auto;
    transition: all 0.4s ease;
    &:hover {
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    }
`;

const About = () => (
    <Fragment>
        <Container>
            <Contain className="container">
                <h1 data-aos="fade-up" className="font-weight-bold">
                    Sobre mí
                </h1>
                <div data-aos="fade-up" data-aos-delay="200" className="p-3">
                    <p>
                        Mi nombre es Lázaro Cáceres, tengo 14 años. Soy un desarrollador web, poseedor de varios sitios web finalizados y publicados. Actualmente, me dedico
                        exclusivamente a esta área de programación, ya que me apasiona la cualidad de la web: tu trabajo puede ser visto por cualquiera de tus visitantes,
                        simplemente deben encontrarte.
                    </p>
                    <p>
                        Me adentré en el desarrollo web hace tiempo, por lo que tengo conocimientos suficientes para crear proyectos competentes. En este período, aprendí a
                        utilizar HTML, CSS, JavaScript, React, MySQL, PHP, Node.js, lenguajes de programación muy típicos en el entorno.
                    </p>
                    <p>
                        Formo parte del equipo de programación de Daydreams Studios, estudio encargado de la realización del anime Daydreams. He creado varios sitios web en los
                        cuales se puede reflejar mi trabajo. A causa de estos y mi intensa búsqueda por más conocimiento, mi experiencia se ha incrementado significativamente. Cabe
                        destacar que me he encargado asimismo del diseño de casi todos mis proyectos.
                    </p>
                    <p>
                        Poseo diferentes certificaciones de cursos de "Google Actívate" realizados en julio del 2020. Al final de este documento están adjuntadas, a modo de
                        demostrar el origen de mi conocimiento como desarrollador. Desde aquel entonces, he construido variados proyectos gracias a los conocimientos adquiridos en
                        los cursos mencionados.
                    </p>
                    <div className="row justify-content-center">
                        <a href="/desMobile.png">
                            <ResponsiveIMG className="mx-1" src="desMobile.png" alt="Certificado de Google Actívate, del curso Desarrollo de Apps Móviles."></ResponsiveIMG>
                        </a>
                        <a href="/desWeb.png">
                            <ResponsiveIMG src="desWeb.png" alt="Certificado de Google Actívate, del curso Introducción al Desarrollo Web 1."></ResponsiveIMG>
                        </a>
                    </div>
                </div>
            </Contain>
            <Footer wave="Wave" />
        </Container>
        <Head>
            <title>Lázaro Cáceres | Sobre mí</title>
            <meta name="description" content="Acerca de Lázaro Cáceres."></meta>
        </Head>
    </Fragment>
);

export default About;
