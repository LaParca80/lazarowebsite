import Router from "next/router";
import Head from "next/head";
import Container from "../components/Container";
import { Fragment } from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import emailjs, { init } from "emailjs-com";
init("user_feXeVwWEMedQ0J5xGwcG1");

const FluidIMG = styled.img`
    width: 100%;
    max-width: 260px;
    height: auto;
    border-radius: 50%;
`;

const ResponsiveFormDiv = styled.div`
    @media (max-width: 767px) {
        display: block !important;
    }
`;

const SendButton = styled.input`
    border: 0 !important;
    outline: 0 !important;
    border-radius: 0.25rem;
    &:hover {
        box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
    }
`;

const Contact = () => {
    const sendMail = event => {
        event.preventDefault();
        let tempParams = {
            from_name: document.getElementById("name").value,
            from_email: document.getElementById("email").value,
            message: document.getElementById("message").value,
        };
        emailjs.send("service_m09c99i", "template_vn1ot6k", tempParams).then(
            () => {
                Router.push("/exito");
            },
            error => {
                window.alert(`¡Ups! Algo ha salido mal, tu mensaje no ha sido enviado. ${error.text}`);
                console.log(error.text);
            }
        );
    };

    return (
        <Fragment>
            <Container>
                <div className="container d-table vh-100">
                    <div className="d-table-cell align-middle text-center overflow-hidden py-5">
                        <div data-aos="fade-up" data-aos-once="true" data-aos-offset="0">
                            <FluidIMG src="lazaro2.png"></FluidIMG>
                            <h1 className="font-weight-bold my-4">¡Contáctame!</h1>
                        </div>
                        <form onSubmit={sendMail} className="pt-2">
                            <div className="col-md-8 mx-auto offset-md-2 text-left">
                                <ResponsiveFormDiv className="d-flex justify-content-center mt-4">
                                    <div data-aos="fade-right" data-aos-offset="0" data-aos-once="true" data-aos-delay="200" className="col-md-6 px-3 form-group">
                                        <label className="d-block h5 font-weight-normal" htmlFor="name">
                                            Nombre *
                                        </label>
                                        <input className="form-control" type="text" title="" required placeholder="Introduce tu nombre." name="name" id="name"></input>
                                    </div>
                                    <div data-aos="fade-left" data-aos-offset="0" data-aos-once="true" data-aos-delay="300" className="col-md-6 px-3 form-group">
                                        <label className="d-block h5 font-weight-normal" htmlFor="email">
                                            Correo electrónico *
                                        </label>
                                        <input className="form-control" type="email" title="" required placeholder="Introduce tu email." name="email" id="email"></input>
                                    </div>
                                </ResponsiveFormDiv>
                                <div data-aos="fade-up" data-aos-offset="0" data-aos-once="true" data-aos-delay="400" className="col-12 px-3 form-group pt-2">
                                    <label className="d-block h5 font-weight-normal" htmlFor="message">
                                        Mensaje *
                                    </label>
                                    <textarea className="form-control" title="" required placeholder="Escribe tu mensaje." rows="9" name="message" id="message"></textarea>
                                </div>
                                <div data-aos="fade-up" data-aos-once="true" data-aos-delay="500" data-aos-offset="0" className="d-flex justify-content-center mt-4">
                                    <SendButton className="contact-btn" type="submit" value="Enviar"></SendButton>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <Footer wave="Wave" />
            </Container>
            <Head>
                <title>Lázaro Cáceres | Contacto</title>
                <meta name="description" content="Contactar con Lázaro Cáceres."></meta>
            </Head>
        </Fragment>
    );
};

export default Contact;
