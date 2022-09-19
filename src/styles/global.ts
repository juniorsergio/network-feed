import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root {
        --white: #fff;
        --grey-100: #e1e1e6;
        --grey-300: #c4c4cc;
        --grey-400: #8d8d99;
        --grey-600: #323238;
        --grey-700: #29292e;
        --grey-800: #202024;
        --grey-900: #121214;

        --purple: #483D8B;
        --red: #F75A68;
    }
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    } 

    @keyframes fadein-scale {
        from {
            opacity: 0;
            transform: scale(0.5);
        }
        to {
            opacity: 1;
            transform: scale(1);
        }
    }

    body {
        background-image: radial-gradient(circle, var(--grey-800), black);
        background-attachment: fixed;
    }

    body, input, textarea, button {
        font-family: 'Roboto', sans-serif;
        font-size: 1rem;
        color: var(--grey-300);
    }

    input, textarea {  
        width: 100%;
        padding: 10px;

        background: var(--grey-800);
        border-radius: 8px;
        border: 0;

        color: var(--gray-100);
        line-height: 1.4;

        &:focus {
            outline: transparent;
            box-shadow: 0 0 0 2px var(--purple);
        }
    }

    button {
        background: black;
        color: white;
        font-weight: bold;

        width: 30%;
        padding: 10px;

        border: none;
        border-radius: 8px;
        cursor: pointer;

        transition: background-color 0.2s;

        &:hover {
            background: var(--grey-800); 
        }
    }

    .react-modal-overlay {
        background: #2020249F;
        width: auto;

        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    .react-modal-content {
        margin: 0 auto;
        width: auto;
    }
`

export const Header = styled.header`
    width: 100%;
    padding: 20px 15vw;

    display: flex;
    justify-content: space-between;

    background-color: black;

    button {
        background: var(--red);
        width: auto;
    }
`