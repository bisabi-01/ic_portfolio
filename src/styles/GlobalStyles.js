import { createGlobalStyle } from 'styled-components'


const GlobalStyles = createGlobalStyle`


//*color variables

::-moz-selection { /* Code for Firefox */
  background: hsl(38.6, 19.6%, 42%);
}

::selection {
  background: hsl(38.6, 19.6%, 42%);
}

/* Works on Chrome, Edge, and Safari */
*::-webkit-scrollbar {
  width: 8px;
}

*::-webkit-scrollbar-track {
  background: hsla(39, 23%, 25%, 0);
}

*::-webkit-scrollbar-thumb {
  background-color: hsl(39, 100%, 64.1%);
}

body {
  overflow: hidden;
}

html {
    height:100vh;
    scrollbar-width: thin;  
    scrollbar-color: hsl(39, 100%, 64.1%) hsla(39, 23%, 25%, 0);
    background-color: hsl(38.8, 48.6%, 93.1%);
    
    opacity: 1;
    background-image: radial-gradient(hsl(37.5, 15.7%, 20%) 0.5px, hsl(36.9, 17.8%, 14.3%) 0.5px);
    background-size: 5px 5px;
}

ul {
    list-style: none;
}
`;



export default GlobalStyles;