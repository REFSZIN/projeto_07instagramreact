import React from "react";
import {ConteinerStory,Figure, NameUser, Imagem} from "./styled.js";
export default function Story (props) {
    return (
        <ConteinerStory>
            <Figure>
                <Imagem src={props.img} alt="img"/>
            </Figure>
            <NameUser>{props.name}</NameUser>
        </ConteinerStory>
    )
}
