import React from 'react';
import "normalize.css";
import GlobalStyles from "../styles/GlobalStyles";
import Typography from "../styles/Typography";
import Nav from './Nav';
import styled from 'styled-components';

const GridStyled = styled.div`
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-columns: 1fr;
    
    
    
    //* Responsive 

   

    @media (max-width: 450px){  
        margin: 0;  
    }

`;



export default function Layout ( { children }) {
    return (
        <GridStyled>
            
            <Typography />
            <GlobalStyles />
            <Nav/>
            
            
            {children}
            
        </GridStyled>
    );
}

