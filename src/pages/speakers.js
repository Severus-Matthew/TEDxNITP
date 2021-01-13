import React from "react"
import style from './sass/speakers.module.scss'
import Layout from '../components/layout'
import Container from '../components/Container'
import { StaticQuery, graphql } from "gatsby";
import Img from 'gatsby-image';
const SpeakerPage=()=>
(

    <StaticQuery 

    query={graphql`
    fragment SpeakerPageImages on File {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }

      query {
        imageFirst: file(relativePath: { eq: "Speaker_1.JPG" }) {
          ...SpeakerPageImages
        }
        }

    `}
    render={ data=>(<Layout>
        <div className={style.section}>
        <Container>
            <div className={style.container}>
            <div className={style.speaker_container}>
            <div className={style.speaker_content}>
            <div className={style.speaker_holder}>
                                
                                
             </div>
                            <p className={style.speaker_details}>Our <span className={style.title}>Speakers </span><br/><br />
                                <br /></p>
                            
            </div>
             
                    </div>

                    </div>
                


          


        </Container>
        </div>

</Layout>


)}
/>
)

export default SpeakerPage;