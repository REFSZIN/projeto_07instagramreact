import User from "./User";
import ForYou from "./ForYou";
import { user, users } from "../../assets/data/indexdata";
import "./styled.js";
import { Branch,Sugesto, Title, Links ,Copyright } from "./styled.js";

export default function Aside(){
    return (
        <Branch>
            <User name={user.name} username={user.username} img={user.img}/>
            <Sugesto>
                <Title>
                    Sugestões para você
                    <Title>Ver tudo</Title>
                </Title>
                {users.map(({name, img}, i) => <ForYou  key={i} name={name} img={img}/>)}
            </Sugesto>
            <Links>
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade  Termos • Localizações • Contas mais relevantes <br/> Hashtags • Idiomas
            </Links>
            <Copyright>
                © 2021 INSTAGRAM DO FACEBOOK
            </Copyright>
        </Branch>
    );
};