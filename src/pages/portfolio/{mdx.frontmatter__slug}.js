import * as React from "react";
import { graphql } from 'gatsby';
import Seo from '../../components/Seo';
import styled from 'styled-components';


const PortfolioPost = styled.div`
    color: hsla(0, 0, 54%, 1); 
    grid-column: 1/3;
    justify-self: start;
    width: 100%;
    height: 92vh;
    
    .portfolioGrid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: baseline;
      height: 100%;
      width: 100%;
      border-top: 1px solid hsl(37.7, 100%, 91.6%);
      overflow-y: scroll;
      scrollbar-width: thin;

    }

    article {
      color: hsl(37.7, 100%, 91.6%);
      grid-column: 1/2;
      width: 100%;
      position: sticky;
      top: 0;
      
      h1 {
       
      }

      p {
        max-width: 90%;
        padding-left: 1rem; 
        margin-bottom: 2rem;
      }
    }

    .galleryImg {
      grid-column: 2/3;
      align-self: center;
      border-left: 2px solid hsl(37.7, 100%, 91.6%);
      height: 100%;
    }
  
   .gatsby-resp-image-wrapper {
    align-self: center!important;
    margin-left: 2%!important;
    margin-right: 2%!important;
    margin-bottom: 2%!important;
    grid-column: 2/3!important;
   }


    h1 {
      margin: 4% 0 2% 2%;
    }

    h5 {
      margin: 1% 0 2% 4%;
      text-decoration: underline;
    }

    
    
    @media (max-width: 670px){
      .portfolioGrid {
        grid-template-columns: 1fr;
        height: fit-content;
      }

      .article {
        align-self: center;
        grid-row: 1/2;
        
      }

      .galleryImg {
        
        grid-column: 1/2;
        
        display: grid;
        grid-auto-columns: calc(100% - 4rem);
        grid-auto-flow: column;
        grid-gap: 8px;
        overflow-x: scroll;
        scrollbar-width: thin;  
        scrollbar-color: hsla(39, 62%, 67%, 1) hsla(39, 23%, 25%, 0);

      }

      
    }
    
`;

const PortfolioWork = ( { data, children} ) => {


    return (
        <PortfolioPost>
          
          
          {children}
          
        </PortfolioPost>
      
    )
  }
  
  export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        featuredImage {
          childImageSharp {
            gatsbyImageData(height: 120 )
          }
        }
        date(formatString: "MMMM D, YYYY")
      }
    }
  }
`
  
  
  export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title} />

  export default PortfolioWork
  