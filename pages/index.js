import Link from "next/link";
import Head from "next/head";
import Container from "../components/Container";
import { Fragment, useEffect } from "react";
import styled from "styled-components";
import $ from "jquery";
import "imagehover.css/css/imagehover.css";
// import "@fortawesome/fontawesome-free";
import Footer from "../components/Footer";

const FullScreen = styled.section`
    position: relative;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 296px 0;
`;

const WaveSeparate = styled.div`
    overflow: hidden;
    position: absolute;
    left: 0;
    width: 100%;
    line-height: 0;
    direction: ltr;
`;

const SectionWithTopWave = styled.section`
    position: relative;
    padding-top: 296px;
    padding-bottom: 70px;
`;

const SectionWithWaves = styled.section`
    position: relative;
    padding: 296px 0;
`;

const DestacatedSection = styled.section`
    position: relative;
    background-color: transparent;
    background-image: linear-gradient(0deg, #fcb901 0%, #eb154d 100%);
    padding: 296px 0;
`;

const CenterZone = styled.div`
    padding: 80px 0;
`;

const DestacatedTitle = styled.h1`
    font-size: 80px;
    z-index: 2;
`;

const DestacatedSpan = styled.span`
    font-size: 30px;
    z-index: 2;
`;

const LandingPage = () => {
    useEffect(() => {
        $(document).ready(() => {
            $("#cta").hover(() => {
                $("#wave").css("transform", "translateX(0)");
            });
            $("#cta").mouseleave(() => {
                $("#wave").css("transform", "translateX(-5px)");
            });
            $("#cta-reverse").hover(() => {
                $("#wave1").css("transform", "translateX(0)");
            });
            $("#cta-reverse").mouseleave(() => {
                $("#wave1").css("transform", "translateX(-5px)");
            });
        });
    });

    return (
        <Fragment>
            <Container>
                <FullScreen>
                    <DestacatedTitle data-aos="zoom-in-down" data-aos-offset="0" className="font-weight-bold text-center">
                        Lázaro Cáceres
                    </DestacatedTitle>
                    <DestacatedSpan data-aos="zoom-in-up" data-aos-offset="0" className="text-secondary h5 font-weight-normal text-center">
                        Desarrollador web
                    </DestacatedSpan>
                    <WaveSeparate className="separateBottom transform-required">
                        <svg className="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                            <path
                                fill="#f2f2f2"
                                className="elementor-shape-fill path"
                                d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7
                        c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4
                        c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"
                            ></path>
                        </svg>
                    </WaveSeparate>
                </FullScreen>
                <section className="bg-light-m overflow-hidden">
                    <div className="container py-5">
                        <div data-aos="flip-up" className="row">
                            <div className="col-sm my-auto">
                                <h1 className="font-weight-bold">Lázaro Cáceres</h1>
                                <span className="h5 font-weight-normal">Sobre mí</span>
                                <hr className="dashed"></hr>
                                <p className="secondary-text">
                                    Mi nombre es Lázaro Cáceres, tengo 14 años y me apasiona el desarrollo web. Me adentré a esta área de programación en el año 2020 y desde
                                    entonces me ha resultado muy divertida e interesante.
                                </p>
                                <p className="secondary-text">
                                    Tengo conocimiento en HTML, CSS, JavaScript & jQuery, React, MySQL y PHP. He construido varios sitios webs durante el tiempo que llevo activo, y
                                    estoy muy orgulloso de mis resultados.
                                </p>
                                <div className="button">
                                    <Link href="/sobre-mi">
                                        <a className="cta" id="cta">
                                            <span className="btn-text">Ver más</span>
                                            <svg className="flecha" id="wave" width="13px" height="10px" viewBox="0 0 13 10">
                                                <path d="M1,5 L11,5"></path>
                                                <polyline points="8 1 12 5 8 9"></polyline>
                                            </svg>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-sm my-auto text-center">
                                <img data-tilt className="img-fluid rounded" src="lazaro.png" alt="Lázaro Cáceres."></img>
                            </div>
                        </div>
                    </div>
                </section>
                <SectionWithTopWave>
                    <WaveSeparate className="separateTop no-transform-required">
                        <svg xmlns="http://www.w3.org/2000/svg" className="svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                            <path
                                fill="#f2f2f2"
                                className="elementor-shape-fill path"
                                d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7
                        c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4
                        c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"
                            ></path>
                        </svg>
                    </WaveSeparate>
                    <div className="container-md pb-5">
                        <h1 data-aos="fade-up" className="font-weight-bold">
                            Proyectos destacados
                        </h1>
                        <div className="contain-projects px-2">
                            <div data-aos="fade-up" data-aos-delay="200" className="col-sm pb-4">
                                <div className="d-flex justify-content-center overflow-hidden">
                                    <figure className="imghvr-fold-left overflow-hidden tarjeta">
                                        <img src="daydreams-studios.png" alt="Logo de Daydreams Studios."></img>
                                        <a target="_blank" rel="noreferrer" href="https://daydreams.ga/">
                                            <figcaption>
                                                <h1>Daydreams Studios</h1>
                                                <p>Sitio web de Daydreams Studios, encargado del desarrollo del anime Daydreams e iniciadores de la propuesta Cambio Educativo.</p>
                                            </figcaption>
                                        </a>
                                    </figure>
                                </div>
                            </div>
                            <div data-aos="fade-up" data-aos-delay="300" className="col-sm pb-4">
                                <div className="d-flex justify-content-center overflow-hidden">
                                    <figure className="imghvr-fold-left overflow-hidden tarjeta">
                                        <img className="text-center" src="daydreams-game.png" alt="Captura de pantalla del futuro juego sobre Daydreams."></img>
                                        <a target="_blank" rel="noreferrer" href="https://daydreamsgame.ga/">
                                            <figcaption>
                                                <h1>Daydreams game</h1>
                                                <p>Sitio web del futuro juego sobre Daydreams. Este llevaría reflejadas las enseñanzas que intenta dar el estudio a la sociedad.</p>
                                            </figcaption>
                                        </a>
                                    </figure>
                                </div>
                            </div>
                            <div data-aos="fade-up" data-aos-delay="400" className="col-sm pb-4">
                                <div className="d-flex justify-content-center overflow-hidden">
                                    <figure className="imghvr-fold-left overflow-hidden tarjeta">
                                        <img src="amor-de-verano.png" alt="Logo de Amor de Verano."></img>
                                        <a target="_blank" rel="noreferrer" href="https://lazaro.cf/">
                                            <figcaption>
                                                <h1>Amor de Verano</h1>
                                                <p>Sitio web de un manga en elaboración, desarrollado por el equipo de Amor de Verano.</p>
                                            </figcaption>
                                        </a>
                                    </figure>
                                </div>
                            </div>
                            <div data-aos="fade-up" data-aos-delay="200" className="col-sm pb-4">
                                <div className="d-flex justify-content-center overflow-hidden">
                                    <figure className="imghvr-fold-left overflow-hidden tarjeta">
                                        <img src="mijimena-jinsei.png" alt="Logo de Daydreams Studios."></img>
                                        <a target="_blank" rel="noreferrer" href="https://lazaro.cf/">
                                            <figcaption>
                                                <h1>Mijimena Jinsei</h1>
                                                <p>Manga en desarrollo, realizado en Latinoamérica.</p>
                                            </figcaption>
                                        </a>
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </SectionWithTopWave>
                <SectionWithTopWave className="bg-light-m p-bottom">
                    <WaveSeparate className="separateTop">
                        <svg
                            style={{ height: "136px" }}
                            viewBox="0 0 1440 400"
                            xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="none"
                            className="transition duration-300 ease-in-out delay-150 svg"
                        >
                            <path
                                d="M 0,400 C 0,400 0,200 0,200 C 47.486595141201136,190.17264767542235 94.97319028240227,180.34529535084474 144,202 C 193.02680971759773,223.65470464915526 243.5938340115921,276.7914662720434 293,255 C 342.4061659884079,233.20853372795662 390.6514736712295,136.4888395609816 450,125 C 509.3485263287705,113.51116043901838 579.8002713034899,187.25317548403007 635,189 C 690.1997286965101,190.74682451596993 730.1474411148107,120.49845850289802 790,127 C 849.8525588851893,133.50154149710198 929.6099642372671,216.7529905043778 981,247 C 1032.3900357627329,277.2470094956222 1055.4127019361206,254.48957947959062 1108,222 C 1160.5872980638794,189.51042052040938 1242.7392280182514,147.2886915772598 1303,142 C 1363.2607719817486,136.7113084227402 1401.6303859908744,168.3556542113701 1440,200 C 1440,200 1440,400 1440,400 Z"
                                stroke="none"
                                strokeWidth="0"
                                fill="#ffffff"
                                className="transition-all duration-300 ease-in-out delay-150 path"
                            ></path>
                        </svg>
                    </WaveSeparate>
                    <div className="container-xl text-center">
                        <div className="w-50 mx-auto" id="responsive">
                            <div data-aos="zoom-in-down">
                                <h1 className="font-weight-bold">Redes sociales</h1>
                                <hr></hr>
                                <p>
                                    Si deseas contactarme de un modo más personal, puedes enviarme un mensaje directo a cualquiera de mis redes sociales, o mediante el formulario
                                    de contacto situado al final de este sitio web.
                                </p>
                            </div>
                            <div className="row justify-content-center">
                                <div data-aos="fade-up" data-aos-delay="200">
                                    <a className="contain-icon" target="_blank" rel="noreferrer" href="https://www.facebook.com/lazaro.caceres.733">
                                        <i className="fa fa-facebook"></i>
                                    </a>
                                </div>
                                <div data-aos="fade-up" data-aos-delay="300">
                                    <a className="contain-icon" target="_blank" rel="noreferrer" href="https://twitter.com/lazarodeveloper">
                                        <i className="fa fa-twitter"></i>
                                    </a>
                                </div>
                                <div data-aos="fade-up" data-aos-delay="400">
                                    <a className="contain-icon" target="_blank" rel="noreferrer" href="https://www.instagram.com/laparca80/">
                                        <i className="fa fa-instagram"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </SectionWithTopWave>
                <DestacatedSection>
                    <WaveSeparate className="separateTop">
                        <svg viewBox="0 0 1440 400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="transition duration-300 ease-in-out delay-150 svg">
                            <path
                                d="M 0,400 C 0,400 0,100 0,100 C 20.770091338447074,113.22325571008145 41.54018267689415,126.44651142016288 67,124 C 92.45981732310585,121.55348857983712 122.6093606308705,103.43721002942996 146,94 C 169.3906393691295,84.56278997057004 186.0223747996239,83.80464846211723 206,91 C 225.9776252003761,98.19535153788277 249.30114017063403,113.3441961221011 276,113 C 302.698859829366,112.6558038778989 332.7730645178398,96.81856704947842 360,96 C 387.2269354821602,95.18143295052158 411.6066017580067,109.38153567998523 436,121 C 460.3933982419933,132.61846432001477 484.80052845013347,141.65529023058065 508,128 C 531.1994715498665,114.34470976941935 553.1912844414595,77.99730339769216 575,84 C 596.8087155585405,90.00269660230784 618.4343337840285,138.35549617865067 641,136 C 663.5656662159715,133.64450382134933 687.0713804224271,80.5807118877052 710,69 C 732.9286195775729,57.41928811229479 755.2801445262628,87.32165627052855 779,102 C 802.7198554737372,116.67834372947145 827.808041472522,116.13266303018062 856,110 C 884.191958527478,103.86733696981938 915.4876895836502,92.14769160874896 939,88 C 962.5123104163498,83.85230839125104 978.2412001928774,87.2765705348235 997,84 C 1015.7587998071226,80.7234294651765 1037.5475096448395,70.746026251957 1067,65 C 1096.4524903551605,59.253973748043 1133.568761227764,57.73932445734853 1162,63 C 1190.431238772236,68.26067554265147 1210.1774454441045,80.29667591864884 1231,83 C 1251.8225545558955,85.70332408135116 1273.721456995818,79.07397186805608 1295,78 C 1316.278543004182,76.92602813194392 1336.9367265726232,81.40743660912683 1361,86 C 1385.0632734273768,90.59256339087317 1412.5316367136884,95.29628169543659 1440,100 C 1440,100 1440,400 1440,400 Z"
                                stroke="none"
                                strokeWidth="0"
                                fill="#f2f2f266"
                                className="transition-all duration-300 ease-in-out delay-150 path"
                            ></path>
                            <path
                                d="M 0,400 C 0,400 0,200 0,200 C 23.57756466520459,189.69781570103297 47.15512933040918,179.39563140206593 69,185 C 90.84487066959082,190.60436859793407 110.9570473435679,212.11529009276921 137,206 C 163.0429526564321,199.88470990723079 195.01668129531922,166.1432082268572 221,165 C 246.98331870468078,163.8567917731428 266.9762274751552,195.31187699980194 292,198 C 317.0237725248448,200.68812300019806 347.07840880405996,174.6092837739351 368,168 C 388.92159119594004,161.3907162260649 400.7101373086049,174.25098790445765 422,191 C 443.2898626913951,207.74901209554235 474.0810419615203,228.38676460823427 497,220 C 519.9189580384797,211.61323539176573 534.9656948453137,174.2019536626053 562,163 C 589.0343051546863,151.7980463373947 628.0561786572249,166.80542074134465 656,182 C 683.9438213427751,197.19457925865535 700.809590525787,212.57636337201615 720,205 C 739.190409474213,197.42363662798385 760.7054592396269,166.88912577059068 790,169 C 819.2945407603731,171.11087422940932 856.3685725157055,205.86713354562121 877,218 C 897.6314274842945,230.13286645437879 901.8202506975508,219.6423400469245 923,201 C 944.1797493024492,182.3576599530755 982.3504246940913,155.5635062666809 1009,164 C 1035.6495753059087,172.4364937333191 1050.7780505260837,216.10363488635198 1072,225 C 1093.2219494739163,233.89636511364802 1120.5373732015742,208.0219541879112 1150,205 C 1179.4626267984258,201.9780458120888 1211.072456667619,221.80854836200322 1232,223 C 1252.927543332381,224.19145163799678 1263.1728001279487,206.74385236407602 1288,206 C 1312.8271998720513,205.25614763592398 1352.236342820586,221.21604218169256 1380,223 C 1407.763657179414,224.78395781830744 1423.8818285897069,212.39197890915372 1440,200 C 1440,200 1440,400 1440,400 Z"
                                stroke="none"
                                strokeWidth="0"
                                fill="#f2f2f288"
                                className="transition-all duration-300 ease-in-out delay-150 path"
                            ></path>
                            <path
                                d="M 0,400 C 0,400 0,300 0,300 C 30.902618708435497,310.68494683084543 61.805237416870995,321.3698936616908 82,320 C 102.194762583129,318.6301063383092 111.68166904095153,305.2053721840822 133,303 C 154.31833095904847,300.7946278159178 187.46808641932282,309.8086176019803 216,311 C 244.53191358067718,312.1913823980197 268.44598528175726,305.56015740799654 293,299 C 317.55401471824274,292.43984259200346 342.74797245364834,285.9507527660334 367,286 C 391.25202754635166,286.0492472339666 414.56212490364936,292.6368315278699 439,299 C 463.43787509635064,305.3631684721301 489.00352793175387,311.5019211224869 512,317 C 534.9964720682461,322.4980788775131 555.4237633693352,327.3554839821826 575,328 C 594.5762366306648,328.6445160178174 613.3014185909053,325.0761429487827 640,322 C 666.6985814090947,318.9238570512173 701.3705622670439,316.3399442226863 725,304 C 748.6294377329561,291.6600557773137 761.2163323409195,269.564080160472 784,274 C 806.7836676590805,278.435919839528 839.7641083692781,309.4037351354256 866,319 C 892.2358916307219,328.5962648645744 911.7272341819684,316.82097929782555 937,304 C 962.2727658180316,291.17902070217445 993.326954902848,277.3123476732721 1020,287 C 1046.673045097152,296.6876523267279 1068.9649462066388,329.9296300090863 1090,321 C 1111.0350537933612,312.0703699909137 1130.8132602705969,260.969132290383 1150,264 C 1169.1867397294031,267.030867709617 1187.782012710974,324.1938408293818 1214,337 C 1240.217987289026,349.8061591706182 1274.0586888855069,318.25550439208945 1302,305 C 1329.9413111144931,291.74449560791055 1351.983231746998,296.78414160226015 1374,299 C 1396.016768253002,301.21585839773985 1418.008384126501,300.6079291988699 1440,300 C 1440,300 1440,400 1440,400 Z"
                                stroke="none"
                                strokeWidth="0"
                                fill="#f2f2f2"
                                className="transition-all duration-300 ease-in-out delay-150 path"
                            ></path>
                        </svg>
                    </WaveSeparate>
                    <CenterZone>
                        <div className="container-md text-center text-light">
                            <h1 data-aos="fade-up" className="mb-5 font-weight-bold">
                                Habilidades
                            </h1>
                            <div className="row py-5">
                                <div data-aos="fade-up" data-aos-delay="200" className="col-sm p-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="84" height="84" fill="#ffffff" className="bi bi-journal-code p-2" viewBox="0 0 16 16">
                                        <path
                                            fillRule="evenodd"
                                            d="M8.646 5.646a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L10.293 8 8.646 6.354a.5.5 0 0 1 0-.708zm-1.292 0a.5.5 0 0 0-.708 0l-2 2a.5.5 0 0 0 0 .708l2 2a.5.5 0 0 0 .708-.708L5.707 8l1.647-1.646a.5.5 0 0 0 0-.708z"
                                        />
                                        <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z" />
                                        <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z" />
                                    </svg>
                                    <h2>Desarrollo web</h2>
                                    <p>
                                        El desarrollo web es algo que me ha resultado fácil de aprender, ya que siempre me ha gustado mucho este tipo de programación en concreto.
                                        Desde que aprendí a crear aplicaciones web, he dedicado mi tiempo libre a dicha labor.
                                    </p>
                                </div>
                                <div data-aos="fade-up" data-aos-delay="300" className="col-sm p-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="84" height="84" fill="currentColor" className="bi bi-lightbulb p-2" viewBox="0 0 16 16">
                                        <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm6-5a5 5 0 0 0-3.479 8.592c.263.254.514.564.676.941L5.83 12h4.342l.632-1.467c.162-.377.413-.687.676-.941A5 5 0 0 0 8 1z" />
                                    </svg>
                                    <h2>Trabajo en equipo</h2>
                                    <p>
                                        Me gusta mucho trabajar en equipo con otros desarrolladores. Soy bueno a la hora de colaborar: explicando mis ideas y buscando soluciones a
                                        posibles problemas en conjunto con el resto.
                                    </p>
                                </div>
                                <div data-aos="fade-up" data-aos-delay="400" className="col-sm p-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="84" height="84" fill="#ffffff" className="bi bi-bookmark-heart p-2" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z" />
                                        <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
                                    </svg>
                                    <h2>Pasión por aprender</h2>
                                    <p>
                                        Me apasiona adquirir conocimientos, estos me dotan de capacidad, a modo de estar preparado frente a las dificultades que pueda tener en mi
                                        trabajo.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </CenterZone>
                    <WaveSeparate className="separateBottom no-transform-required">
                        <svg viewBox="0 0 1440 400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="transition duration-300 ease-in-out delay-150 svg">
                            <path
                                d="M 0,400 C 0,400 0,100 0,100 C 20.770091338447074,113.22325571008145 41.54018267689415,126.44651142016288 67,124 C 92.45981732310585,121.55348857983712 122.6093606308705,103.43721002942996 146,94 C 169.3906393691295,84.56278997057004 186.0223747996239,83.80464846211723 206,91 C 225.9776252003761,98.19535153788277 249.30114017063403,113.3441961221011 276,113 C 302.698859829366,112.6558038778989 332.7730645178398,96.81856704947842 360,96 C 387.2269354821602,95.18143295052158 411.6066017580067,109.38153567998523 436,121 C 460.3933982419933,132.61846432001477 484.80052845013347,141.65529023058065 508,128 C 531.1994715498665,114.34470976941935 553.1912844414595,77.99730339769216 575,84 C 596.8087155585405,90.00269660230784 618.4343337840285,138.35549617865067 641,136 C 663.5656662159715,133.64450382134933 687.0713804224271,80.5807118877052 710,69 C 732.9286195775729,57.41928811229479 755.2801445262628,87.32165627052855 779,102 C 802.7198554737372,116.67834372947145 827.808041472522,116.13266303018062 856,110 C 884.191958527478,103.86733696981938 915.4876895836502,92.14769160874896 939,88 C 962.5123104163498,83.85230839125104 978.2412001928774,87.2765705348235 997,84 C 1015.7587998071226,80.7234294651765 1037.5475096448395,70.746026251957 1067,65 C 1096.4524903551605,59.253973748043 1133.568761227764,57.73932445734853 1162,63 C 1190.431238772236,68.26067554265147 1210.1774454441045,80.29667591864884 1231,83 C 1251.8225545558955,85.70332408135116 1273.721456995818,79.07397186805608 1295,78 C 1316.278543004182,76.92602813194392 1336.9367265726232,81.40743660912683 1361,86 C 1385.0632734273768,90.59256339087317 1412.5316367136884,95.29628169543659 1440,100 C 1440,100 1440,400 1440,400 Z"
                                stroke="none"
                                strokeWidth="0"
                                fill="#ffffff66"
                                className="transition-all duration-300 ease-in-out delay-150 path"
                            ></path>
                            <path
                                d="M 0,400 C 0,400 0,200 0,200 C 23.57756466520459,189.69781570103297 47.15512933040918,179.39563140206593 69,185 C 90.84487066959082,190.60436859793407 110.9570473435679,212.11529009276921 137,206 C 163.0429526564321,199.88470990723079 195.01668129531922,166.1432082268572 221,165 C 246.98331870468078,163.8567917731428 266.9762274751552,195.31187699980194 292,198 C 317.0237725248448,200.68812300019806 347.07840880405996,174.6092837739351 368,168 C 388.92159119594004,161.3907162260649 400.7101373086049,174.25098790445765 422,191 C 443.2898626913951,207.74901209554235 474.0810419615203,228.38676460823427 497,220 C 519.9189580384797,211.61323539176573 534.9656948453137,174.2019536626053 562,163 C 589.0343051546863,151.7980463373947 628.0561786572249,166.80542074134465 656,182 C 683.9438213427751,197.19457925865535 700.809590525787,212.57636337201615 720,205 C 739.190409474213,197.42363662798385 760.7054592396269,166.88912577059068 790,169 C 819.2945407603731,171.11087422940932 856.3685725157055,205.86713354562121 877,218 C 897.6314274842945,230.13286645437879 901.8202506975508,219.6423400469245 923,201 C 944.1797493024492,182.3576599530755 982.3504246940913,155.5635062666809 1009,164 C 1035.6495753059087,172.4364937333191 1050.7780505260837,216.10363488635198 1072,225 C 1093.2219494739163,233.89636511364802 1120.5373732015742,208.0219541879112 1150,205 C 1179.4626267984258,201.9780458120888 1211.072456667619,221.80854836200322 1232,223 C 1252.927543332381,224.19145163799678 1263.1728001279487,206.74385236407602 1288,206 C 1312.8271998720513,205.25614763592398 1352.236342820586,221.21604218169256 1380,223 C 1407.763657179414,224.78395781830744 1423.8818285897069,212.39197890915372 1440,200 C 1440,200 1440,400 1440,400 Z"
                                stroke="none"
                                strokeWidth="0"
                                fill="#ffffff88"
                                className="transition-all duration-300 ease-in-out delay-150 path"
                            ></path>
                            <path
                                d="M 0,400 C 0,400 0,300 0,300 C 30.902618708435497,310.68494683084543 61.805237416870995,321.3698936616908 82,320 C 102.194762583129,318.6301063383092 111.68166904095153,305.2053721840822 133,303 C 154.31833095904847,300.7946278159178 187.46808641932282,309.8086176019803 216,311 C 244.53191358067718,312.1913823980197 268.44598528175726,305.56015740799654 293,299 C 317.55401471824274,292.43984259200346 342.74797245364834,285.9507527660334 367,286 C 391.25202754635166,286.0492472339666 414.56212490364936,292.6368315278699 439,299 C 463.43787509635064,305.3631684721301 489.00352793175387,311.5019211224869 512,317 C 534.9964720682461,322.4980788775131 555.4237633693352,327.3554839821826 575,328 C 594.5762366306648,328.6445160178174 613.3014185909053,325.0761429487827 640,322 C 666.6985814090947,318.9238570512173 701.3705622670439,316.3399442226863 725,304 C 748.6294377329561,291.6600557773137 761.2163323409195,269.564080160472 784,274 C 806.7836676590805,278.435919839528 839.7641083692781,309.4037351354256 866,319 C 892.2358916307219,328.5962648645744 911.7272341819684,316.82097929782555 937,304 C 962.2727658180316,291.17902070217445 993.326954902848,277.3123476732721 1020,287 C 1046.673045097152,296.6876523267279 1068.9649462066388,329.9296300090863 1090,321 C 1111.0350537933612,312.0703699909137 1130.8132602705969,260.969132290383 1150,264 C 1169.1867397294031,267.030867709617 1187.782012710974,324.1938408293818 1214,337 C 1240.217987289026,349.8061591706182 1274.0586888855069,318.25550439208945 1302,305 C 1329.9413111144931,291.74449560791055 1351.983231746998,296.78414160226015 1374,299 C 1396.016768253002,301.21585839773985 1418.008384126501,300.6079291988699 1440,300 C 1440,300 1440,400 1440,400 Z"
                                stroke="none"
                                strokeWidth="0"
                                fill="#ffffffff"
                                className="transition-all duration-300 ease-in-out delay-150 path"
                            ></path>
                        </svg>
                    </WaveSeparate>
                </DestacatedSection>
                <section className="py-5 overflow-hidden">
                    <div className="container">
                        <div data-aos="flip-down" className="row">
                            <div className="col-sm my-auto">
                                <h1 className="font-weight-bold">Lázaro Cáceres</h1>
                                <span className="h5 font-weight-normal">Experiencia</span>
                                <hr className="dashed"></hr>
                                <p className="secondary-text">
                                    Comencé mi aprendizaje sobre desarrollo web a mitades de 2020, desde entonces he conlcuido varias aplicaciones web.
                                </p>
                                <p className="secondary-text">
                                    A inicios de 2021, aprendí ReactJS, y me motivé a crear nuevos sitios web basados en este. Asimismo, he estudiado MySQL y PHP para encargarme
                                    del backend de mis aplicaciones.
                                </p>
                                <div className="button">
                                    <Link href="/experiencia">
                                        <a className="cta" id="cta-reverse">
                                            <span className="btn-text">Ver más</span>
                                            <svg className="flecha" id="wave1" width="13px" height="10px" viewBox="0 0 13 10">
                                                <path d="M1,5 L11,5"></path>
                                                <polyline points="8 1 12 5 8 9"></polyline>
                                            </svg>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-sm my-auto text-center">
                                <img data-tilt className="img-fluid rounded" src="lazaro2.png" alt="Lázaro Cáceres."></img>
                            </div>
                        </div>
                    </div>
                </section>
                <SectionWithWaves className="bg-blue text-light">
                    <WaveSeparate className="separateTop">
                        <svg viewBox="0 0 1440 400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="transition duration-300 ease-in-out delay-150 svg">
                            <path
                                d="M 0,400 C 0,400 0,100 0,100 C 67.73594771241831,111.73382661240598 135.47189542483662,123.46765322481194 188,117 C 240.52810457516338,110.53234677518806 277.84836601307194,85.86321371315822 332,86 C 386.15163398692806,86.13678628684178 457.13464052287577,111.07949192255518 507,108 C 556.8653594771242,104.92050807744482 585.6130718954249,73.81881859662104 631,76 C 676.3869281045751,78.18118140337896 738.413071895425,113.64523369096065 801,121 C 863.586928104575,128.35476630903935 926.7346405228757,107.60024663953632 986,97 C 1045.2653594771243,86.39975336046368 1100.648366013072,85.95377975089407 1143,95 C 1185.351633986928,104.04622024910593 1214.6718954248365,122.5846343568874 1262,125 C 1309.3281045751635,127.4153656431126 1374.6640522875819,113.70768282155629 1440,100 C 1440,100 1440,400 1440,400 Z"
                                stroke="none"
                                strokeWidth="0"
                                fill="#ffffff66"
                                className="transition-all duration-300 ease-in-out delay-150 path"
                            ></path>
                            <path
                                d="M 0,400 C 0,400 0,200 0,200 C 49.98268590455049,199.65001849796522 99.96537180910099,199.30003699593044 152,199 C 204.034628190899,198.69996300406956 258.1211986681466,198.44987051424343 307,193 C 355.8788013318534,187.55012948575657 399.54983351831294,176.90048094709584 453,175 C 506.45016648168706,173.09951905290416 569.6794672586016,179.94820569737328 624,180 C 678.3205327413984,180.05179430262672 723.7322974472809,173.30669626341103 771,170 C 818.2677025527191,166.69330373658897 867.3913429522751,166.8250092489826 933,179 C 998.6086570477249,191.1749907510174 1080.7023307436182,215.39326674065856 1144,216 C 1207.2976692563818,216.60673325934144 1251.7993340732519,193.60192378838326 1298,187 C 1344.2006659267481,180.39807621161674 1392.100332963374,190.19903810580837 1440,200 C 1440,200 1440,400 1440,400 Z"
                                stroke="none"
                                strokeWidth="0"
                                fill="#ffffff88"
                                className="transition-all duration-300 ease-in-out delay-150 path"
                            ></path>
                            <path
                                d="M 0,400 C 0,400 0,300 0,300 C 56.670119620175115,303.9501788136638 113.34023924035023,307.90035762732765 161,318 C 208.65976075964977,328.09964237267235 247.3091626587742,344.3487483043532 292,335 C 336.6908373412258,325.6512516956468 387.42311012455286,290.7046491552596 452,281 C 516.5768898754471,271.2953508447404 594.998396843014,286.8326550746085 652,291 C 709.001603156986,295.1673449253915 744.5833025033912,287.96473054630655 789,289 C 833.4166974966088,290.03526945369345 886.668393143421,299.30842274016527 948,310 C 1009.331606856579,320.69157725983473 1078.743124922925,332.8015784930324 1131,322 C 1183.256875077075,311.1984215069676 1218.3591071648784,277.48526328770504 1267,270 C 1315.6408928351216,262.51473671229496 1377.8204464175608,281.2573683561475 1440,300 C 1440,300 1440,400 1440,400 Z"
                                stroke="none"
                                strokeWidth="0"
                                fill="#ffffffff"
                                className="transition-all duration-300 ease-in-out delay-150 path"
                            ></path>
                        </svg>
                    </WaveSeparate>
                    <div className="container-fluid text-center py-5">
                        <div data-aos="fade-up" className="width mx-auto">
                            <h1 className="font-weight-bold p-4 m-0">Contacto</h1>
                            <hr className="dashedA"></hr>
                            <div className="pt-5">
                                <Link href="/contacto">
                                    <a className="contact-btn">Contáctame</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <WaveSeparate className="separateBottom">
                        <svg viewBox="0 0 1440 400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="transition duration-300 ease-in-out delay-150 svg">
                            <path
                                d="M 0,400 C 0,400 0,200 0,200 C 84.98728959120578,220.65956715905187 169.97457918241156,241.31913431810375 235,250 C 300.02542081758844,258.68086568189625 345.0889728615596,255.3830298866369 406,231 C 466.9110271384404,206.6169701133631 543.6695293713501,161.1487461353487 618,165 C 692.3304706286499,168.8512538646513 764.2329096530401,222.0219855719684 823,234 C 881.7670903469599,245.9780144280316 927.3988320164892,216.76331157677777 1002,195 C 1076.6011679835108,173.23668842322223 1180.171762281003,158.92476812092065 1258,161 C 1335.828237718997,163.07523187907935 1387.9141188594986,181.53761593953968 1440,200 C 1440,200 1440,400 1440,400 Z"
                                stroke="none"
                                strokeWidth="0"
                                fill="#202020ff"
                                className="transition-all duration-300 ease-in-out delay-150 path"
                            ></path>
                        </svg>
                    </WaveSeparate>
                </SectionWithWaves>
                <Footer />
            </Container>
            <Head>
                <title>Lázaro Cáceres</title>
            </Head>
        </Fragment>
    );
};

export default LandingPage;
