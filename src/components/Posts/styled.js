import styled from "styled-components";
export const Postz = styled.section`
    width: 100%;
    max-width: 614px;
`
export const ConteinerPost = styled.article`
    border-radius: 3px;
    border: 1px solid #DBDBDB;
    display: flex;
    flex-direction: column;
    margin-top: 18px;
    border-radius: 12px;
@media (max-width: 614px) {
    border-radius: 0;
    border-left: none;
    border-right: none;
    width: 100%;
    &:last-child {
        margin-bottom: 72px;
    }
    &:first-child {
        margin-top: 0;
    }
}
`
export const Topo = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 13px 16px;
    font-size: 14px;
    font-weight: 500;
    & img{
        width: 32px;
        height: 32px;
        margin-right: 10px;
        border-radius: 100px;
        cursor: pointer;
    }
`
export const TitleUsuario = styled.figure`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`
export const Img = styled.img`
    width: 20px;
    height: 20px;
    margin-right: 10px
`
export const AvatarUser = styled.img`
    width: 32px;
    height: 32px;
    margin-right: 10px;
    border-radius: 100px;
    cursor: pointer;
`
export const AcoeStop = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-right: 6px;
    cursor: pointer;
`
export const Moldura = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
& ion-icon{
    padding: 10px;
    left: -164px;
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 170px;
    animation: heartBeat 1.5s ;
    @media (max-width: 935px) {
        margin-left: 140px;
        width: 100%;
        height: 120px;
}
}
`
export const Imagem = styled.img`
    width: 100%;
    position: relative;
    cursor: pointer;
`
export const FooterPost = styled.section`

`
export const AcoesBtn = styled.section`
    display: flex;
    justify-content: space-between;
    padding: 13px 16px;
    font-size: 24px;
    & ion-icon{
        cursor: pointer;
    }
`
export const Nav = styled.nav`
    & ion-icon{
        margin-right: 5px;
    }
`
export const Navi = styled.nav`
margin-right: 5px;
`
export const Curtidas = styled.section`
    display: flex;
    align-items: center;
    padding: 0 16px 13px;
    font-weight: 300;
    height: 20px;
    & strong, img{
        cursor: pointer;
    }
`
export const Texto = styled.div`
    display: inline;
    flex-direction: column;
    margin-left: 14px;
    font-weight: 300;
    color: #8E8E8E;
    & strong{
        font-weight: 600;
        color: #262626;
    }
`
export const ComentsPost = styled.section`
    height: 50px;
    margin-left: 20px;
    margin-right: 20px;
    display: flex;
    justify-content: start;
    align-items: flex-start;
    flex-direction: column;
`
export const AvatarImage = styled.img`
    border-radius: 100px;
    margin-right: 12px;
    height: 30px;
    cursor: pointer;
`
export const AvatarName = styled.h3`
    line-height: 10px;
    margin-top: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`
export const AvatarComent = styled.p`
    margin-left: 4px;
    margin-top: 12px;
    line-height: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const ConteinerComment = styled.section`
    display: flex;
    justify-content: flex-start;
    align-content: center;
    flex-wrap: nowrap;
    flex-direction: row;
    align-items: stretch;
    width: 98%;
    margin-right: 1%;
    margin-left: 1%;
    height: 50px;
`
export const IconComment = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 30px;
    width: 60px;
    padding-top: 6px;
    cursor: pointer;
    & ion-icon{
        width: 40px;
        height: 40px;
    }
`
export const Input = styled.input`
    border-color: gray;
    border-radius: 12px;
    width: 75%;
    height: 40px;
`
export const Publish = styled.button`
    background-color:#FAFAFA;
    margin-left: 10px;
    width: 80px;
    height: 40px;
    border: none;
    color: blue;
    font-size: 15px;
    font-style: bold;
    line-height: 14px;
    &:hover{
    cursor: pointer;
    opacity: 0.7;
    transition: opacity 0.3s ease-in-out;
    }
`
export const Avatar = styled.div`
    margin-top: 5px;
    margin-left:4px;
    display: flex;
    height: 30px;
`