import styled from "styled-components";

export const MyHeader = styled.header`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: -webkit-fill-available;
    justify-content: space-between;
    font-family: var(--font1);
    background-image: url("images/melamine-wood.png");
    color: black;
    position: fixed;
    top: 0;
    z-index: 1;
    padding: 0 7px;
    h1 {
        font-size: 25px;
        line-height: 25px;
        margin: 0;
        text-shadow: 1px 1px 2px #fff;
    }
`;