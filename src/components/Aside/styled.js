import styled from "styled-components";

export const Branch = styled.aside`
    flex-direction: column;
    position: fixed;
    top: 85px;
    display: flex;
    width: 280px;
    margin-top: 15px;
    margin-left: 640px;
    margin-bottom: 350px;
    animation: pulse;
    animation-duration: 2s;
    @media (max-width: 935px) {
    display:  none;;
}
`
export const Sugestao = styled.section`
display: flex;
    justify-content: space-between;
    align-items: center;
    height: 31px;
    margin-bottom: 16px;
& img {
    width: 32px;
    height: 32px;
    cursor: pointer;
}
`
export const Title = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0 14px;
    &:last-child{
        cursor: pointer;
    }
`
export const Links = styled.summary`
    margin-top: 10px;
    font-size: 11px;
    color: #C7C7C7;
`
export const Copyright = styled.summary`
    font-size: 11px;
    color: #C7C7C7;
    margin-top: 10px;
    font-weight: 600;
`
export const Usuario = styled.section`
    display: flex;
    align-items: center;
`
export const ImgUsuario = styled.img`
    width: 56px;
    height: 56px;
    border-radius: 50%;
    cursor: pointer;
`
export const UserName = styled.div`
    margin-left: 14px;
    font-weight: 300;
    color: #8E8E8E;
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
    & strong {
    font-weight: 500;
    color: #262626;
}
`
export const Sugesto = styled.article`
`
export const SugeUser = styled.div`
    display: flex;
`
export const Img = styled.img`
    width: 56px;
    height: 56px;
    border-radius: 50%;
    
`
export const SugeText = styled.div`
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
    
&:last-child{
    cursor: default;
    color: #8E8E8E;
    font-weight: 400;
}
`
export const SugeName = styled.div`
    color: black;
    font-weight: 400;
    cursor: pointer;
`
export const SugeRazao = styled.div`
`
export const Seguir = styled.div`
    color: #139EF2;
    font-weight: 600;
    cursor: pointer;
`