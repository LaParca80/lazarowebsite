import Head from "next/head";
import Container from "../components/Container";
import { Fragment } from "react";
import styled from "styled-components";
import Footer from "../components/Footer";

const ContainElements = styled.div`
    padding-top: 7%;
    padding-bottom: 140px;
`;

const Row = styled.div`
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
    transition: all 0.4s;
    &:hover {
        box-shadow: rgba(253, 0, 146, 0.26) 0px 10px 36px 0px, rgba(253, 0, 146, 0.06) 0px 0px 0px 1px;
    }
`;

const ResponsiveA = styled.a`
    @media (max-width: 584px) {
        flex-direction: column !important;
    }
`;

const Column = styled.div`
    @media (max-width: 584px) {
        align-items: center !important;
        text-align: center;
    }
`;

const ResponsiveIMG = styled.img`
    max-width: 120px;
    width: 100%;
    height: auto;
`;

const Experience = () => (
    <Fragment>
        <Container>
            <ContainElements className="container">
                <h1 data-aos="fade-up" className="font-weight-bold">
                    Experiencia
                </h1>
                <div className="px-3">
                    <div data-aos="fade-up" data-aos-delay="200">
                        <Row className="row m-0 mt-5 rounded">
                            <ResponsiveA className="d-flex py-2" target="_blank" rel="noreferrer" href="https://daydreams.ga/">
                                <Column className="col-sm justify-content-center d-flex flex-column">
                                    <ResponsiveIMG className="rounded" src="daydreams-studios.png" alt="Logo de Daydreams Studios."></ResponsiveIMG>
                                </Column>
                                <Column className="col-sm justify-content-center d-flex flex-column">
                                    <span className="h6 font-weight-normal mb-1 mt-2">2021</span>
                                    <h1 className="d-block h4">Daydreams Studios</h1>
                                </Column>
                                <Column className="col-sm justify-content-center d-flex flex-column">
                                    <p className="h6 font-weight-normal mt-2 text-break text-dark">
                                        Use border utilities to quickly style the border and border-radius of an element. Great for images, buttons, or any other element.
                                    </p>
                                </Column>
                            </ResponsiveA>
                        </Row>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="300">
                        <Row className="row m-0 mt-5 rounded">
                            <ResponsiveA className="d-flex py-2" target="_blank" rel="noreferrer" href="https://daydreams.ga/">
                                <Column className="col-sm justify-content-center d-flex flex-column">
                                    <ResponsiveIMG className="rounded" src="mijimena-jinsei.png" alt="Logo de Mijimena Jinsei."></ResponsiveIMG>
                                </Column>
                                <Column className="col-sm justify-content-center d-flex flex-column">
                                    <span className="h6 font-weight-normal mb-1 mt-2">2021</span>
                                    <h1 className="d-block h4">Mijimena Jinsei</h1>
                                </Column>
                                <Column className="col-sm justify-content-center d-flex flex-column">
                                    <p className="h6 font-weight-normal mt-2 text-break text-dark">
                                        Use border utilities to quickly style the border and border-radius of an element. Great for images, buttons, or any other element.
                                    </p>
                                </Column>
                            </ResponsiveA>
                        </Row>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="400">
                        <Row className="row m-0 mt-5 rounded">
                            <ResponsiveA className="d-flex py-2" target="_blank" rel="noreferrer" href="https://daydreams.ga/">
                                <Column className="col-sm justify-content-center d-flex flex-column">
                                    <ResponsiveIMG className="rounded" src="amor-de-verano.png" alt="Logo de Amor de Verano."></ResponsiveIMG>
                                </Column>
                                <Column className="col-sm justify-content-center d-flex flex-column">
                                    <span className="h6 font-weight-normal mb-1 mt-2">2021</span>
                                    <h1 className="d-block h4">Amor de Verano</h1>
                                </Column>
                                <Column className="col-sm justify-content-center d-flex flex-column">
                                    <p className="h6 font-weight-normal mt-2 text-break text-dark">
                                        Use border utilities to quickly style the border and border-radius of an element. Great for images, buttons, or any other element.
                                    </p>
                                </Column>
                            </ResponsiveA>
                        </Row>
                    </div>
                </div>
            </ContainElements>
            <Footer wave="Wave" />
        </Container>
        <Head>
            <title>Lázaro Cáceres | Experiencia</title>
            <meta name="description" content="Experiencia laboral de Lázaro Cáceres."></meta>
        </Head>
    </Fragment>
);

export default Experience;
