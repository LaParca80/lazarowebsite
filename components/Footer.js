import React, { Fragment } from "react";
import styled from "styled-components";

const WaveSeparate = styled.div`
    overflow: hidden;
    position: absolute;
    left: 0;
    width: 100%;
    line-height: 0;
    direction: ltr;
`;

const FooterWave = styled.footer`
    position: relative;
    padding-top: 210px !important;
`;

const Footer = ({ wave }) => {
    if (wave) {
        return (
            <Fragment>
                <FooterWave className="bg-dark-m text-light py-5">
                    <WaveSeparate className="separateTop">
                        <svg
                            viewBox="0 0 1440 400"
                            xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="none"
                            className="transition duration-300 ease-in-out delay-150 svg"
                            style={{ height: "210px" }}
                        >
                            <path
                                d="M 0,400 C 0,400 0,200 0,200 C 84.98728959120578,220.65956715905187 169.97457918241156,241.31913431810375 235,250 C 300.02542081758844,258.68086568189625 345.0889728615596,255.3830298866369 406,231 C 466.9110271384404,206.6169701133631 543.6695293713501,161.1487461353487 618,165 C 692.3304706286499,168.8512538646513 764.2329096530401,222.0219855719684 823,234 C 881.7670903469599,245.9780144280316 927.3988320164892,216.76331157677777 1002,195 C 1076.6011679835108,173.23668842322223 1180.171762281003,158.92476812092065 1258,161 C 1335.828237718997,163.07523187907935 1387.9141188594986,181.53761593953968 1440,200 C 1440,200 1440,400 1440,400 Z"
                                stroke="none"
                                strokeWidth="0"
                                fill="#ffffffff"
                                className="transition-all duration-300 ease-in-out delay-150 path"
                            ></path>
                        </svg>
                    </WaveSeparate>
                    <div className="container">
                        <div className="row pb-4">
                            <div className="col-sm text-center py-4">
                                <h1 className="h3">Lázaro Cáceres</h1>
                                <span>Desarrollador web</span>
                            </div>
                            <div className="col-sm text-center py-4">
                                <h2 className="h3">Correo electrónico</h2>
                                <span>lazarocaceresdeveloper@gmail.com</span>
                            </div>
                            <div className="col-sm text-center py-4">
                                <h2 className="h3">Idiomas</h2>
                                <span>Español, english, português</span>
                            </div>
                        </div>
                        <div className="text-center py-4">
                            <h2 className="pt-4 mb-4 border-top">¡Gracias por llegar hasta aquí!</h2>
                            <div className="row justify-content-center">
                                <a className="contain-icon fci" target="_blank" rel="noreferrer" href="https://www.facebook.com/lazaro.caceres.733">
                                    <i className="fa fa-facebook f-i"></i>
                                </a>
                                <a className="contain-icon fci" target="_blank" rel="noreferrer" href="https://twitter.com/lazarodeveloper">
                                    <i className="fa fa-twitter f-i"></i>
                                </a>
                                <a className="contain-icon fci" target="_blank" rel="noreferrer" href="https://www.instagram.com/laparca80/">
                                    <i className="fa fa-instagram f-i"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </FooterWave>
            </Fragment>
        );
    }
    return (
        <footer className="bg-dark-m text-light pb-5 pt=">
            <div className="container">
                <div className="row pb-4">
                    <div className="col-sm text-center py-4">
                        <h1 className="h3">Lázaro Cáceres</h1>
                        <span>Desarrollador web</span>
                    </div>
                    <div className="col-sm text-center py-4">
                        <h2 className="h3">Correo electrónico</h2>
                        <span>lazarocaceresdeveloper@gmail.com</span>
                    </div>
                    <div className="col-sm text-center py-4">
                        <h2 className="h3">Idiomas</h2>
                        <span>Español, english, português</span>
                    </div>
                </div>
                <div className="text-center pt-4 pb-5">
                    <h2 className="pt-4 mb-4 border-top">¡Gracias por llegar hasta aquí!</h2>
                    <div className="row justify-content-center">
                        <a className="contain-icon fci" target="_blank" rel="noreferrer" href="https://www.facebook.com/lazaro.caceres.733">
                            <i className="fa fa-facebook f-i"></i>
                        </a>
                        <a className="contain-icon fci" target="_blank" rel="noreferrer" href="https://twitter.com/lazarodeveloper">
                            <i className="fa fa-twitter f-i"></i>
                        </a>
                        <a className="contain-icon fci" target="_blank" rel="noreferrer" href="https://www.instagram.com/laparca80/">
                            <i className="fa fa-instagram f-i"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
