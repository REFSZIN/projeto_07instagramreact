import React from "react";
import Post from "./Post";
import { Postz } from "./styled.js";
import { posts } from "../../assets/data/indexdata";

export default function Posts(){
    return(
        <Postz>
            {posts.map((item , i) => <Post 
                key ={i}
                username={item.username}
                userimg={item.userimg}
                conteudo={item.conteudo}
                userlike={item.userlike}
                texto={item.texto}
                texto1={item.texto1}
                usercomment={item.usercomment}
                namecomment={item.namecomment}
                comment={item.comment}
                />
            )}
        </Postz>
    );
};