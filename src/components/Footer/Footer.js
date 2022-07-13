import "./styled.js";
import { Foter, Ion} from "./styled.js";

export  default function Footer (){
    return(
        <Foter >
            <Ion><ion-icon name="home"></ion-icon></Ion>
            <Ion><ion-icon name="search-outline"></ion-icon></Ion>
            <Ion><ion-icon name="add-circle-outline"></ion-icon></Ion>
            <Ion><ion-icon name="heart-outline"></ion-icon></Ion>
            <Ion><ion-icon name="person-outline"></ion-icon></Ion>
        </Foter>
    );
};