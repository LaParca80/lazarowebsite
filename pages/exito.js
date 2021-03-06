import Link from "next/link";
import Container from "../components/Container";
import { useEffect } from "react";
import $ from "jquery";
import styled from "styled-components";

const SuccessTitle = styled.h1`
    font-size: 48px;
    font-weight: 700;
`;

const Success = () => {
    useEffect(() => {
        $(document).ready(() => {
            $("#cta").hover(() => {
                $("#wave").css("transform", "translateX(0)");
            });
            $("#cta").mouseleave(() => {
                $("#wave").css("transform", "translateX(-5px)");
            });
        });
    });

    return (
        <Container>
            <div className="d-table w-100 vh-100 overflow-hidden">
                <div className="d-table-cell align-middle text-center">
                    <div className="container-fluid">
                        <div data-aos="fade-right" data-aos-duration="800" data-aos-once="true">
                            <svg
                                className="img-fluid"
                                id="outputsvg"
                                xmlns="http://www.w3.org/2000/svg"
                                style={{ transform: "none; transform-origin: 50% 50%;" }}
                                width="252"
                                height="252"
                                viewBox="0 0 4520 4520"
                            >
                                <g id="l4ayCZWXN8lCkiT2ilCc2m9" fill="rgb(0,0,0)" style={{ transform: "none" }}>
                                    <g>
                                        <path
                                            id="p19pdUbDmR"
                                            d="M104 3800 c-30 -12 -64 -58 -64 -87 0 -32 26 -80 49 -93 12 -6 105 -10 230 -10 l211 0 31 28 c51 45 40 125 -21 157 -23 12 -68 15 -222 14 -106 0 -203 -4 -214 -9z"
                                        ></path>
                                        <path
                                            id="picyeQsn1"
                                            d="M1188 3794 c-35 -19 -48 -43 -48 -92 0 -33 6 -45 31 -66 l31 -26 1413 0 c980 0 1430 -3 1465 -11 75 -16 139 -64 172 -128 l28 -54 -2 -1161 -3 -1161 -22 -41 c-12 -22 -40 -57 -62 -77 -79 -71 16 -67 -1570 -67 -784 0 -1443 3 -1464 6 -61 11 -138 63 -172 118 l-30 49 -5 362 c-5 392 -4 381 -63 411 -36 19 -78 11 -111 -23 l-26 -26 0 -357 c0 -323 2 -364 19 -419 48 -156 183 -277 345 -311 35 -7 524 -10 1531 -8 l1480 3 57 23 c126 51 231 160 275 284 17 50 18 115 18 1254 l0 1200 -37 75 c-42 84 -96 142 -181 193 -116 69 -39 66 -1619 66 -1236 -1 -1427 -3 -1450 -16z"
                                        ></path>
                                        <path
                                            id="pVt24JrtG"
                                            d="M249 3071 c-31 -31 -39 -83 -19 -122 26 -48 38 -49 529 -49 494 0 500 1 527 51 23 45 18 87 -15 120 l-29 29 -482 0 -482 0 -29 -29z"
                                        ></path>
                                        <path
                                            id="p7C27bdDu"
                                            d="M2455 2625 c-201 -45 -419 -160 -659 -347 -245 -191 -559 -506 -572 -573 -11 -61 35 -114 99 -115 34 0 44 7 104 73 365 395 720 660 1003 749 111 34 274 32 383 -5 279 -97 619 -348 939 -695 54 -59 109 -111 121 -115 61 -23 132 27 132 92 0 45 -30 83 -199 253 -525 530 -989 764 -1351 683z"
                                        ></path>
                                        <path
                                            id="po1ymkChR"
                                            d="M573 2393 c-12 -2 -34 -18 -48 -34 -46 -55 -27 -127 41 -155 47 -20 272 -19 319 0 71 30 83 124 22 170 -25 19 -43 21 -170 22 -78 1 -152 0 -164 -3z"
                                        ></path>
                                    </g>
                                </g>
                            </svg>
                        </div>
                        <div data-aos="fade-left" data-aos-delay="300" data-aos-once="true" className="pb-5">
                            <SuccessTitle>¡Mensaje recibido!</SuccessTitle>
                            <span className="h4 font-weight-normal">Muchas gracias por tu tiempo.</span>
                            <div className="pt-5">
                                <Link href="/">
                                    <a className="cta" id="cta">
                                        <span className="btn-text">Volver al inicio</span>
                                        <svg className="flecha" id="wave" width="13px" height="10px" viewBox="0 0 13 10">
                                            <path d="M1,5 L11,5"></path>
                                            <polyline points="8 1 12 5 8 9"></polyline>
                                        </svg>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Success;
