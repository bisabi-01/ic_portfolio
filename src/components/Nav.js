import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';




const NavStyles = styled.nav`
    grid-column: 1/3;
    display: flex;
    flex-direction: row;
    position: sticky;
    top: 0;
    width: 100%;
    height: 8vh;

    .menu {
        display: inline-flex;
        align-items: center;
        padding: 0;
        margin: 0 0.8% 0 2%;
        height: 100%;
        width: 100%;
        -webkit-transition: flex 1s ease-out;
            -moz-transition: flex 1s ease-out;
            -ms-transition: flex 1s ease-out;
            -o-transition: flex 1s ease-out;
            transition: flex 1s ease-out;  

        a {
            text-decoration: none;
            margin-left: 0;
        }
    }
    
   
  

    
    


    //* Responsive

    @media (max-width: 520px){  
        .menu {
            justify-content: space-evenly;
        }

       

        
    }



   
    
`;



export default function Nav () {


    const linkStyles = {
        background: 'hsl(36.9, 33.3%, 69.4%)',
        color: 'hsl(38.4, 95%,4%)',
        textTransform: 'uppercase',
        width: 'fit-content',
        height: '20px',
        textAlign: 'center',
        fontSize: 'clamp(1rem, 0.8500rem + 0.6667vw, 1.2rem)',
        padding: '0.6rem',
        margin: '0 0.5rem 0 0',
    

    };

    const activeStyles = {
        background: 'hsl(39, 100%, 64.1%)',
        color: 'hsl(38.4, 95%,4%)',
        
    };

 
    return (
        
        <NavStyles>
           
                <ul className='menu'>
                    
                        <Link 
                            style={linkStyles}
                            activeStyle={activeStyles}
                            to="/" >
                               Home
                        </Link>
                      
                        <Link 
                            style={linkStyles}
                            activeStyle={activeStyles}
                            to="/portfolio" >
                               Portfolio
                        </Link>
                    
                        <Link 
                            style={linkStyles}
                            activeStyle={activeStyles}
                            to="/about" >
                            About me
                        </Link>
                   
                    <a 
                        style={linkStyles}
                        activeStyle={activeStyles}
                        href="mailto:ivancernuto@gmail.com">
                             @mail
                    </a>
                </ul>
           
            
        </NavStyles>
    )
}