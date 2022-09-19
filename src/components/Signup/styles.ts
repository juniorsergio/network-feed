import styled from "styled-components";

export const Container = styled.div`
    width: 40vw;
    height: 50vh;

    display: flex;
    flex-direction: column;
    justify-content: space-around;

    margin: 25vh auto;
    gap: 20px;
    padding: 30px;

    background: var(--grey-900);
    border-radius: 10px;
    
    animation: fadein-scale 1s;

    .send {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`

export const Checkbox = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;

    input {
        width: auto;
    }
`