import styled from "styled-components";

export const AddBtn = styled.button`
    background-color: #85bb65;
    border-style: none;
    border-radius: 10px;
    box-shadow: 1px 1px 2px #000;
    display: flex;
    flex-flow: row;
    align-items: center;
    font-family: var(--font1);
    font-size: 16px;
    font-weight: 700;
    text-shadow: 1px 1px 2px #fff;
    &:hover {
        cursor: pointer;
        filter: brightness(1.25);
    }
`;

export const RemoveBtn = styled.button`
    background-color: #c55152;
    border-style: none;
    border-radius: 10px;
    color: white;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: var(--font1);
    font-size: 15px;
    font-weight: 700;
    margin: 5px;
    width: 30px;
    height: 30px;
    &:hover {
        filter: brightness(1.25);
    }
`;

export const Container = styled.div`
    background-image: url("images/melamine-wood.png");
    border: thin #BA8C63 solid;
    border-radius: 1px;
    margin: 10px;
    padding: 20px;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
`;

export const Fruit = styled.figure`
    background-image: url("images/heavy-paper.png");
    border: thin #c0c0c0 solid;
    border-radius: 5px;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    font-family: var(--font1);
    margin: 10px;
    padding: 5px;
    width: 128px;
    height: 128px;
img {
    width: 64px;
    height: 64px;
}
figcaption {
    color: #000;
    padding: 3px;
    text-align: center;
}
p {
    font-size: 24px;
    font-weight: 700;
    margin: 0;
}
mark {
    background-color: transparent;
    color: #118C4F;
    font-family: var(--font2);
    font-size: 20px;
}
`;
