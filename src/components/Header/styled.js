import styled from "styled-components";
export const Heade = styled.header`
    width: 100%;
    display: flex;
    justify-content: center;
    height: 54px;
    border-bottom: 1px solid #DBDBDB;
    font-size: 22px;
    background-color: #FFF;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
    & ion-icon{
        height: 50px;
        cursor: pointer;
    }
    & img{
        height: 47px;
        margin-bottom: 10px;
    cursor: pointer;
    }
    & > *{
    display: flex;
    align-items: center;
    height: 100%;
}
@media (max-width: 614px) {
    padding: 0 20px;
    justify-content: space-around;
    & ion-icon:first-child{
        margin-right: 20px;
    }
    & ion-icon:last-child{
        margin-left: 30px;
    }
}
`
export const Conteiner = styled.section`
    width: 100%;
    max-width: 935px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
& > *{
    display: flex;
    align-items: center;
    height: 100%;
}
@media (max-width: 935px) {
    padding: 0 20px;
    justify-content: space-around;
}
`
export const ConteinerLogo = styled.nav`
& img{
    height: 30px;
    position: relative;
    top: 8px;
}
@media (max-width: 614px) {
    display: none;
}
`
export const Hr = styled.hr`
    width: 1px;
    height: 22px;
    background-color: #DBDBDB;
    margin: 0 10px;
`

export const ConteinerMobileLogo = styled.nav`
    display: none !important;
@media (max-width: 614px) {
    display: flex !important;
}
`
export const ConteinerMobile = styled.nav`
    display: none;
    & img{
        margin-left: 20px;
    }
@media (max-width: 614px) {
    display: flex;
    height: 30px;
    position: relative;
    top: 3px;
    margin-right: 20px;
}
`
export const ConteinerPesquisa = styled.nav`
@media (max-width: 614px) {
    display: none;
}
`
export const Input = styled.input`
    width: 215px;
    height: 28px;
    border-radius: 3px;
    background-color: #FAFAFA;
    border: 1px solid #DBDBDB;
    color: #979797;
    text-align: center;
@media (max-width: 614px) {
    display: none;
}
`
export const ConteinerIcons = styled.nav`
& > ion-icon {
    margin: 0 5px;
}
@media (max-width: 614px) {
    display: none;
}
`
export const ConteinerIconsMobile = styled.nav`
    display: none ;
@media (max-width: 935px) {

}
@media (max-width: 614px) {
    display: flex;
    margin-right: 20px;
}`

export const Logu = styled.img`
    height: 30px;
    position: relative;
    top: 3px;
`