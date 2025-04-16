import {createGlobalStyle} from "styled-components";//Para aplicar a fonte onde a gente quiser

const Global = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        font-family: 'poppins', 'sans-serif';
    }

    body {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        background-color: #f2f2f2;
    }`;

export default Global;