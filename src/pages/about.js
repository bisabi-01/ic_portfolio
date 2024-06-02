import * as React from "react";
import styled from 'styled-components';
import Seo from '../components/Seo'

const AboutStyled = styled.div`
    
    color: hsla(0, 0, 54%, 1); 
    grid-column: 1/2;
    justify-self: start;
    width: 100%;
    height: 90vh;
    overflow-y: scroll;
    scrollbar-width: thin;
    border-top: 1px solid hsl(37.7, 100%, 91.6%);
    
    
    h1 {
        
        max-width: 600px;
        margin-right: auto;
        margin-left: 1rem;
    }

    h2 {
        max-width: 600px;
        margin-right: auto;
        margin-left: 1rem;
    }
    
    h3 {
        writing-mode: vertical-rl;
        text-orientation: upright;
        font-size: 1rem!important;
    }

    a {
        display: inline-block;
        letter-spacing: 0.04rem;
        text-decoration: underline ;
    }

   
    
    p {
        max-width: 1000px;
        margin-top: 2rem;
        margin-bottom: 2rem;
        margin-right: auto;
        margin-left: 2rem;
        color: hsl(37.7, 100%, 91.6%);
    }

    .container {
        display: flex;
        margin-bottom: 3rem;
        
    }
    .container2 {
        display: flex;
        flex-direction: column;
        align-self: center;
        width: fit-content;
        height: fit-content;
        p {
            margin: 1rem;
           
        }
    }

    .skills {
        display: inline-block;
        color: hsl(37.7, 100%, 91.6%);
        font-size: clamp(0.9rem, 0.7500rem + 0.6667vw, 1.1rem);
        list-style-type: square;
        margin-right: 2rem;
        padding-left: 0;
        margin-left: 3rem;
        h5 {
            text-decoration: 1px dashed underline ;
            margin-bottom: 0.6rem;
            margin-left: -14px;
        } 
        
        
    }

    //* Responsive 

    @media (max-width: 1190px){  
        grid-column: 1/2;
        grid-row: 2/3;
        width: 100%;
        
    }
    @media (max-width: 700px){  
        p {
            margin: 0 4% 0 4%;
        }
    }
    

    


`;


const About = () => {
  return (
    
    <AboutStyled>
            
            
            <p>Ciao, il mio nome è Ivan :-)</p>
            
            
            <p>Sono un designer interdisciplinare con focus su Web design, Web Development e Graphic design. 
            

           
            Pensi di avere un lavoro per me? <a href="mailto:ivancernuto@gmail.com">contattami!</a>
            </p>
           

            <div className="container">
            <ul className="skills">
            <h5>Design Skills: </h5>
                <li>Illustrator</li>
                <li>Indesign</li>
                <li>Photoshop</li>
                <li>Figma</li>
                <li>Premiere</li>
                <li>After Effect</li>
            </ul>

            <ul className="skills">
            <h5>Development Skills: </h5>
                <li>Github</li>
                <li>HTML & CSS</li>
                <li>Javascript</li>
                <li>P5.js</li>
                <li>React.js</li>
                <li>Gatsby.js</li>  
            </ul>

            <ul className="skills">
            <h5>Currently Learning:</h5> 
                <li>Next.js</li>
                <li>Astro.js</li>
                 
            </ul>
            </div>
            <div className="container">
            <h3>書いて見たりけしたり果はけしの花</h3> 

            <div className="container2">
            <p>I write, erase, rewrite </p>

            <p>Erase again, and then </p>

            <p>A poppy blooms.</p>
            </div>
           
            </div>
            
            
        </AboutStyled>
    
    
    
  )
}

export default About

export const Head = () => <Seo title="About me"/>