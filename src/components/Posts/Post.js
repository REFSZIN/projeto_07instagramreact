
import React , {useState} from "react";
import "./styled.js";
import {Avatar, ConteinerPost, Img ,Topo,TitleUsuario,AvatarUser,AcoeStop,Moldura,Imagem,FooterPost,AcoesBtn,Nav,Navi, Curtidas, Texto, ComentsPost, AvatarImage, AvatarName, AvatarComent,ConteinerComment,IconComment,Input,Publish } from "./styled.js";

export default function Post(props){
    const [like, setLike] = useState(0);
    return(
        <ConteinerPost>
            <Topo>
                <TitleUsuario>
                    <AvatarUser src={props.userimg} alt="img"/>{props.username}
                </TitleUsuario>
            <AcoeStop>
                <ion-icon name="ellipsis-horizontal"></ion-icon>
            </AcoeStop>
            </Topo>
            {like ? (<Moldura>
                        <ion-icon id="liked" className="md hydrated" onClick={() => setLike(!like)} name="heart" aria-label="heart" ></ion-icon>
                        <Imagem src={props.conteudo} alt="img" onClick={() => setLike(!like)}/>
                    </Moldura>)
                    :
                    (<Moldura>
                        <Imagem onClick={() => setLike(1)} src={props.conteudo} alt="img"/>
                    </Moldura>)}
            <FooterPost>
                <AcoesBtn>
                    <Nav>
                        {like ? (<ion-icon id="liked" className="md hydrated" onClick={() => setLike(!like)} name="heart" aria-label="heart" ></ion-icon>):(<ion-icon className="md hydrated" onClick={() => setLike(!like)} name="heart-outline"></ion-icon>)}
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </Nav>
                    <Navi>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </Navi>
                </AcoesBtn>
                <Curtidas>
                    <Img src={props.userlike} alt="img" />
                <Texto>
                    Curtido por <strong>{props.texto}</strong> e <strong>{props.texto1}</strong>
                </Texto>
                </Curtidas>
                <ComentsPost>
                    <Avatar>
                        <AvatarImage src={props.usercomment} alt="User comment in thats post"/>
                        <AvatarName>{props.namecomment}</AvatarName>
                        <AvatarComent>{props.comment}</AvatarComent>
                    </Avatar>
                </ComentsPost>
                <ConteinerComment>
                    <IconComment><ion-icon className="emotions" name="happy-outline"></ion-icon></IconComment>
                    <Input  className="input" type="text" placeholder="Adicione um Comentário...."/>
                    <Publish className="button">Publicar</Publish>
                </ConteinerComment>
            </FooterPost>
        </ConteinerPost>
    )
}