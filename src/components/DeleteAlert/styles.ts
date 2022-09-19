import styled from "styled-components";

export const Container = styled.div`
    height: 20vh;

    background: var(--grey-900);
    border-radius: 20px;
    border: 2px solid black;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    gap: 20px;
    margin: 40vh auto;
    padding: 20px;
`

export const ConfirmationButtons = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 20px;
    width: 60%;

    button {
        flex: 1;
    }
`