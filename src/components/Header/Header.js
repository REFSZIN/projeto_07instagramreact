import React from "react";
import "./styled.js";
import {Heade,Logu,Conteiner,ConteinerLogo,Hr,ConteinerMobileLogo,ConteinerMobile,ConteinerPesquisa , Input, ConteinerIcons,  ConteinerIconsMobile  } from "./styled.js";
import { logo } from "../../assets/data/indexdata";

export default function Header () {
    return (
        <Heade>
            <Conteiner>
                <ConteinerLogo>
                    <ion-icon name="logo-instagram"></ion-icon>
                    <Hr/>
                    <Logu src={logo.img} alt="Logo"/>
                </ConteinerLogo>
                <ConteinerMobileLogo>
                    <ion-icon name="logo-instagram"></ion-icon>
                </ConteinerMobileLogo>
                <ConteinerMobile>
                    <Logu src={logo.img} alt="Logo"/>
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