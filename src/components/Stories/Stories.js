import React from "react";
import "./styled.js";
import {SectionStories, Setinha} from "./styled.js";
import { stories } from "../../assets/data/indexdata";
import Story from "./Story";

export default function Stories(){
    return(
        <SectionStories>
            {stories.map((item, i) => <Story key={i} name={item.name} img={item.img} />)}
            <Setinha>
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </Setinha>
        </SectionStories>
    );
};
