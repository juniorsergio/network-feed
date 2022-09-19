import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;

    gap: 20px;

    background: var(--grey-900);
    border: 2px solid black;
    border-radius: 40px;

    .post-content {     
        padding: 0 30px;

        p {
            margin-bottom: 20px;
            text-align: justify;
        }
    }
`

export const Title = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    padding: 20px 30px;
    border-top-left-radius: 35px;
    border-top-right-radius: 35px;

    background: black;
    text-align: center;
`

export const PostOptions = styled.div`
    display: flex;
    gap: 20px;
    
    button {
        background: transparent;
        color: var(--grey-400);
        cursor: pointer;
        line-height: 0;

        &:hover {
            background: transparent;
            color: var(--red);
        }
    }
`

export const PostInfo = styled.div`
    display: flex;
    justify-content: space-between;

    padding: 0 30px;
    color: var(--grey-600);
    font-weight: bold;
`