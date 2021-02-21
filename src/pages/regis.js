import React from "react"
import style from './sass/regis.module.scss'
import Layout from '../components/layout'
import Container from '../components/Container'

//import { StaticQuery, graphql } from "gatsby";
//import Img from 'gatsby-image';



const regis = () =>
    (
        <Layout>
            <div className={style.section}>
                <Container>

                    <div className={style.container}>
                       

                        <p className={style.title} style={{ marginTop: '110px' }}><br /> Register For <span className={style.red}>TEDx</span> Event</p>
                       
                           
                        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSc8_oLBe4K5QZsnPRx62iHIrTaMAu_QO_kkgsXmJ46pEqd0MA/viewform?embedded=true" >Loading…</iframe>
                    </div>


                </Container>


            </div>
        </Layout>
    )

export default regis;