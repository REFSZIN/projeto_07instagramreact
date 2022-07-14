import styled from "styled-components";

export const SectionStories = styled.section`
    display: flex;
    align-items: center;
    height: 118px;
    border-radius: 3px;
    border: 1px solid #DBDBDB;
    padding: 0 18px;
    overflow: hidden;
    position: relative;
    overflow-x: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none; 
    &::-webkit-scrollbar{
        display: none;
    }
@media (max-width: 614px) {
    background-color: transparent;
    border: none;
    width: 100%;
}
`
export const Setinha = styled.div`
    position: sticky;
    right: 10px;
    top: 45px;
    height: 32px;
    width: 32px;
    color: #FFF;
    font-size: 28px;
    cursor: pointer;
    @media (max-width: 614px) {
    display: none;
}
`
export const NameUser = styled.figcaption`
    width: 66px;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: center;
    height: 14px;
`
export const Imagem = styled.img`
    width: 56px;
    height: 56px;
    border-radius: 50%;
`
export const Figure = styled.figure`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 66px;
    width: 66px;
    background-image: url('../images/story-circle.svg');
`
export const ConteinerStory = styled.article`
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 14px 0;
    font-size: 12px;
    cursor: pointer;
    margin-right: 10px;
    animation: fadeInRightBig;
    animation-duration: 2s;
`