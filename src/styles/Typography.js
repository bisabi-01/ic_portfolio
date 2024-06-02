import { createGlobalStyle } from 'styled-components'

const Typography = createGlobalStyle`

body {
    font-family: "Inconsolata", monospace;
    -webkit-text-size-adjust: none;
    text-size-adjust: none;
}

html {
  font-size: 1rem;
  
}
@media (max-width: 840px) {
  
}
@media (max-width: 360px) {
  
}

/* Type will scale with document */
h1 {
    font-size: clamp(1.8rem, 1.4500rem + 0.6667vw, 2.4rem)!important;
    margin: 0;
    padding: 0;
    color: hsl(37.7, 100%, 91.6%);
    font-weight: bold;
}

h2 {
    font-size: clamp(1.4rem, 1.2500rem + 0.6667vw, 1.6rem)!important;
    margin: 0;
    padding: 0;
    color: hsla(38, 22%, 26%, 1);
}

h3 {
    font-size: clamp(1.2rem, 1.0500rem + 0.6667vw, 1.4rem)!important;
    margin: 0;
    padding: 0;
    color: hsla(38, 22%, 26%, 1);
}
h4 {
    font-size: clamp(1rem, 0.8500rem + 0.6667vw, 1.2rem)!important;
    margin: 0;
    padding: 0;
}
h5 {
    font-size: clamp(0.8rem, 0.6500rem + 0.6667vw, 1rem)!important;
    margin: 0;
    padding: 0;
}

h6 {
    font-size: clamp(0.8rem, 0.9500rem + -0.6667vw, 0.6rem)!important;
    margin: 0;
    padding: 0;
}

p {
    font-size: clamp(1.1rem, 0.7500rem + 0.6667vw, 1.3rem);
}


`;

export default Typography;