import Link from "next/link";
import Container from "../components/Container";
import { useEffect } from "react";
import $ from "jquery";
import styled from "styled-components";

const MegaTitle = styled.h1`
    font-size: 120px;
    text-align: center;
    margin-bottom: 50px;
`;

const NotFound = () => {
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
            <div className="d-table w-100 vh-100">
                <div className="d-table-cell align-middle text-center">
                    <MegaTitle className="font-weight-bold">Error #404</MegaTitle>
                    <Link href="/">
                        <a className="cta" id="cta">
                            <span className="btn-text">Ir al inicio</span>
                            <svg className="flecha" id="wave" width="13px" height="10px" viewBox="0 0 13 10">
                                <path d="M1,5 L11,5"></path>
                                <polyline points="8 1 12 5 8 9"></polyline>
                            </svg>
                        </a>
                    </Link>
                </div>
            </div>
        </Container>
    );
};

export default NotFound;
