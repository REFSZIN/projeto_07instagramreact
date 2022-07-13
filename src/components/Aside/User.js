import "./styled.js";
import { Usuario, ImgUsuario, UserName} from "./styled.js";
export default function User (props){
    return(
        <Usuario>
            <ImgUsuario src={props.img}alt="img"/>
            <UserName>
                <strong>{props.username}</strong>{props.name}
            </UserName>
        </Usuario>
    )
}