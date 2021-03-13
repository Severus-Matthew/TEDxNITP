import React from "react"
import style from './sass/sponsor.module.scss'
import Layout from '../components/layout'
import Container from '../components/Container'
import { StaticQuery, graphql } from "gatsby";
import rft from '../pages/Riyft.png'
import ww from '../pages/ww.png'
import vlcc from '../pages/vlcc.png'
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
                    <div className={style.row}>
                        <div classname={style.column1}>
                    <div className={style.card}>
                        <img className={style.card} src={rft} />
                    <div className={style.container2}>
                                    <h4 className={style.comname}><b>RIYFT</b></h4>
                                    <p className={style.prt}>STRATEGIC PARTNER</p>
                        </div>
                            </div>
                        </div>
                        <div classname={style.column1}>
                            <div className={style.card}>
                                <img className={style.card} src={ww} />
                                <div className={style.container2}>
                                    <h4 className={style.comname}>Wealthy Waste</h4>
                                    <p className={style.prt}>GIFT PARTNER</p>
                                </div>
                            </div>
                        </div>
                        <div classname={style.column1}>
                            <div className={style.card}>
                                <img className={style.card} src={vlcc} />
                                <div className={style.container2}>
                                    <h4 className={style.comname}>VLCC</h4>
                                    <p className={style.prt}>GROOMING PARTNER</p>
                                </div>
                            </div>
                        </div>
                    </div>
                   
                </div>
              
                <p className={style.sponsor} style={{marginTop:'170px'}}>Want to Partner with Us ? Mail us at <span className={style.red}>tedxnitpatna@gmail.com </span>to know more.</p>

            </Container>


        </div>
    )}
    />
    </Layout>
)

export default Sponsors;