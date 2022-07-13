import "./styled.js";
import {Sugestao , SugeUser ,Img, SugeText, SugeName, SugeRazao , Seguir } from "./styled.js";

export default function ForYou (props){
    return(
        <Sugestao>
            <SugeUser>
                <Img src={props.img} key={props.i} alt="img"/>
            <SugeText>
                <SugeName key={props.i} >{props.name}</SugeName>
                <SugeRazao className="razao">Segue você</SugeRazao>
            </SugeText>
        </SugeUser>
            <Seguir>Seguir</Seguir>
        </Sugestao>
)
}