import React, { useState } from "react";
import "./styled.js";
import {Sugestao , SugeUser ,Img, SugeText, SugeName, SugeRazao , Seguir, UnSeguir } from "./styled.js";

export default function ForYou (props){
    const [falow, setfalow] = useState(0);
    return(
        <Sugestao>
            <SugeUser>
                <Img src={props.img} key={props.i} alt="img"/>
            <SugeText>
                <SugeName key={props.i} >{props.name}</SugeName>
                <SugeRazao className="razao">Segue você</SugeRazao>
            </SugeText>
        </SugeUser>
            {falow ? <UnSeguir onClick={() => setfalow(!falow)}>Un-Follow</UnSeguir> : <Seguir onClick={() => setfalow(!falow)}>Seguir</Seguir>}
        </Sugestao>
)
}