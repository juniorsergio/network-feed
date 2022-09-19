import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    width: 70vw;

    gap: 20px;
    padding: 20px 30px;

    background: var(--grey-900);
    border: 2px solid black;
    border-radius: 40px;

    textarea {
        resize: none;
        height: 6rem;
    }

    button {
        margin-left: auto;
        margin-right: 0;
    }
`