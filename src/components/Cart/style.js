import styled from "styled-components";

export const CartBtn = styled.button`
background-color: transparent;
border: none;
width: 64px;
height: 64px;
padding: 0;
&:hover {
    cursor: pointer;
}
b {
    color: #fff;
    font-size: 32px;
    position: absolute;
    text-align: center;
    text-shadow: 2px 2px 3px #000;
    transform: translateX(18px);
    width: 32px;
    height: 32px;
}
`;

export const List = styled.ul`
color: #000;
height: 360px;
padding: 0;
li {
    display: flex;
    align-items: center;
}
figure {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 10px 20px;
    width: -webkit-fill-available;
}
img {
    width: 48px;
    height: 48px;
}
figcaption {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: var(--font1);
    font-size: 18px;
    font-weight: 700;
    text-shadow: 1px 1px 2px #fff;
    margin: auto 5px;
    width: 150px;
}
mark {
    background-color: transparent;
    color: #118C4F;
    font-family: var(--font1);
    text-shadow: none;
    width: 60px;
}
em {
    font-family: var(--font2);
    font-size: 42px;
    color: #888;
    position: relative;
    top: 25%;
}
hr {
    color: #003b6f;
}
`;