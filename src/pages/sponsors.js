import React from "react"
import style from './sass/sponsor.module.scss'
import Layout from '../components/layout'
import Container from '../components/Container'
import { StaticQuery, graphql } from "gatsby";
//import Img from 'gatsby-image';



const Sponsors=()=>
(
    <Layout>
    <StaticQuery


    query={graphql`
    fragment SponsorPageImages on File {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }

      query {
        imageFirst: file(relativePath: { eq: "Sahyadri.png" }) {
          ...SponsorPageImages
        }
        imageSecond: file(relativePath: { eq: "sosc-svg.png" }) {
            ...SponsorPageImages
          }

      }

    `}

    render={data=>(


        <div className={style.section}>
            <Container>
            <p className={style.title}> Our <span className={style.red}>Sponsors</span></p>
            <div className={style.container}>

          <h1 className={style.sponsor}>Coming Soon...</h1>

            </div>
           <p className={style.sponsor}>Wanna Sponsor Us ? Mail us on <span className={style.red}>tedxnitp@gmail.com </span>to know more.</p>

            </Container>


        </div>
    )}
    />
    </Layout>
)

export default Sponsors;