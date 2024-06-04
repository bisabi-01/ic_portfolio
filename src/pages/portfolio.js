import * as React from "react";
import { Link, useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Seo from '../components/Seo';
import { GatsbyImage, getImage } from "gatsby-plugin-image";


const PortfolioStyled = styled.div`
    color: hsl(37.7, 100%, 91.6%); 
    grid-column: 1/2;
    justify-self: start;
    width: 100%;
    height: 90vh;
    overflow-y: scroll;
    scrollbar-width: thin;
    border-top: 1px solid hsl(37.7, 100%, 91.6%);
    
    .window {
      
      
      border-bottom: 1px solid hsl(37.7, 100%, 91.6%);
      
      padding: 1rem 0 1rem 0;

      display: grid;
      grid-template-columns: 400px auto auto auto 1fr;
      grid-template-rows: auto;
      grid-gap: 0.3rem;
      justify-content: start;

    a {   
      grid-column: 1/2;
      grid-row: 1/2;
      margin-top: 0;
      margin-bottom: 0;
      width: fit-content;
      align-self: start;
      height: fit-content;  
      margin-left: 0.7rem;  
      text-decoration: none;
      

      h1:hover {
          letter-spacing: 0.01rem;
          border-bottom: 3px solid hsl(39, 100%, 64.1%);
        }

    }

    h1 {
      margin: 0 0 0 0;
    }

    .label {
      grid-column: 1/2;
      grid-row: 1/2;
      align-self: center;
      margin-left: 0.7rem;
      margin-right: 2rem;
      margin-bottom: -2px;
      background-color: hsl(39, 100%, 64.1%);
      width: 15px;
      height: 10px;
      clip-path: polygon(100% 0%, 75% 50%, 100% 100%, 0 100%, 0% 50%, 0 0);
    }

    h5 {
      grid-column: 1/2;
      grid-row: 1/2;
      align-self: center;
      color: hsl(36.9, 33.3%, 69.4%);
      margin-left: 2rem;
      }

    .gallery {
      
    }

    .gatsby-image-wrapper {
      margin-right: 2rem;
    }

   
      

      

    }

    @media (max-width: 850px){ 
      .window {
        grid-template-columns: 1fr;
        grid-template-rows: auto auto auto; 
        
      }

      a {
        grid-column: 1/2;
        grid-row: 1/2;
    
      }

      .gallery {
        grid-column: 1/2;
        grid-row: 3/4;
        margin-left: 0.7rem;
        margin-top: 0.5rem;
  
      }

      .label {
        grid-column: 1/2;
        grid-row: 2/3!important;
      }

      h5 {
        
      grid-column: 1/2;
      grid-row: 2/3!important;
        
      }  
    }

    @media (max-width: 500px){ 
      
     

      .featImg3 {
        display: none;
      }
    }


`;



export default function Poortfolio () {
  const data = useStaticQuery(graphql`
    query PoortfolioQuery {
      allMdx {
        nodes {
          frontmatter {
            title
            label
            featuredImage {
              childImageSharp {
                gatsbyImageData(height: 200, quality: 100, outputPixelDensities: 2)
              }
            }
            featuredImage2 {
              childImageSharp {
                gatsbyImageData(height: 200, quality: 100, outputPixelDensities: 2)
              }
            }
            featuredImage3 {
              childImageSharp {
                gatsbyImageData(height: 200, quality: 100, outputPixelDensities: 2)
              }
            }
            slug
          }
        }
      }
  }  
  `)


    
  return (
        <PortfolioStyled>
            
           
            
              {
                data.allMdx.nodes.map
                (node => (
                  
                  <div className="window">
                        
                        
                          <Link to={`${node.frontmatter.slug}`}>
                            <h1 key={node.frontmatter.title}>{node.frontmatter.title}</h1>
                          </Link> 

                          <div className="label"></div>
                          <h5>{node.frontmatter.label}</h5>

                          <div className="gallery">
                           
                            <GatsbyImage className="featImg" image={getImage(node.frontmatter.featuredImage)} alt={node.frontmatter.title}/>
                            <GatsbyImage className="featImg2" image={getImage(node.frontmatter.featuredImage2)} alt={node.frontmatter.title}/>
                            <GatsbyImage className="featImg3" image={getImage(node.frontmatter.featuredImage3)} alt={node.frontmatter.title}/>

                          </div>
                          
                          
                            
                           
                          
                      </div>
                  
                ))
              }
           
        </PortfolioStyled>
  )   
}







export const Head = ( ) => <Seo title="Portfolio"/>
