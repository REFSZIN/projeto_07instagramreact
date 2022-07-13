import React from "react";
import "./styled.js";
import {Corpo,Esquerda} from "./styled.js";

import Stories from "../Stories/Stories.js";
import Posts from "../Posts/Posts.js";
import Aside from "../Aside/Aside.js";

export default function Main (){
    return(
        <Corpo>
            <Esquerda className="esquerda">
                < Stories />
                < Posts />
            </Esquerda>
            < Aside />
        </Corpo>
    );
};