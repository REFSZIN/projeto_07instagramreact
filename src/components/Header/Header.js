import React from "react";
import "./styled.js";
import {Heade,Logu,Conteiner,ConteinerLogo,Hr,ConteinerMobileLogo,ConteinerMobile,ConteinerPesquisa , Input, ConteinerIcons,  ConteinerIconsMobile  } from "./styled.js";
import { logo } from "../../assets/data/indexdata";
import { Link } from "react-router-dom";

export default function Header () {
    return (
        <Heade>
            <Conteiner>
                <ConteinerLogo>
                <ion-icon name="logo-instagram"></ion-icon>
                    <Hr/>
                    <Link to="/curiosod+"><Logu src={logo.img} alt="Logo"/></Link>
                </ConteinerLogo>
                <ConteinerMobileLogo>
                <Link to="/"><ion-icon name="logo-instagram"></ion-icon></Link>
                </ConteinerMobileLogo>
                <ConteinerMobile>
                    <Link to="/"><Logu src={logo.img} alt="Logo"/></Link>
                </ConteinerMobile>
                <ConteinerPesquisa>
                    <Input type="text" placeholder="Pesquisar"/>
                </ConteinerPesquisa>
                <ConteinerIcons>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                    <ion-icon name="compass-outline"></ion-icon>
                    <ion-icon name="heart-outline"></ion-icon>
                    <ion-icon name="person-outline"></ion-icon>
                </ConteinerIcons>
                <ConteinerIconsMobile>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                </ConteinerIconsMobile>
            </Conteiner>
        </Heade>
    );
};