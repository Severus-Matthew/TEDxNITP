import React from "react"
import style from './sass/speakers.module.scss'
import Layout from '../components/layout'
import Container from '../components/Container'
import { FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import a from '../pages/download.jpg'
import b from '../pages/Kevin.jpg'
import c from '../pages/IMG-0023.png'
import d from '../pages/Harshit.jpg'
import e from '../pages/0001.jpg'


//import Img from 'gatsby-image';
const SpeakerPage = () =>
    (

        <Layout>
        <div className={style.section}>
        <Container>
            <div className={style.container}>
            <div className={style.speaker_container}>
            <div className={style.speaker_content}>
           
                                <div>    <p className={style.speaker_details} style={{ marginLeft: '0px'}}>Our <span className={style.title}>Speakers </span><br/><br />
                                    <br /></p>
                              </div>
                                <br /><br />
                               
                               
                            </div>
                            <img src={b} className={style.rect1} style={{ objectFit: "fill" }} />
                            <hr className={style.line11} /> <p className={style.text1}>Kevin Missal</p><hr className={style.line12} /><hr className={style.line13} />
                            <p className={style.cont1}>Kevin Missal is a 22 year old graduate of St. Stephen's College.
                            He had released the Kalki Trilogy in 2017 which had garnered critical
                            phrases from the likes of Millennium Post, Sunday Guardian who termed it as
                            "2017's mythological phenomenon" and was a National Bestseller and was on
                            bestselling charts of Asian Age, Hindustan Times. He had forayed further
                            into mythology and has topped charts ever since, selling cumulatively 200,000
                            copies. He has been featured in all the daily newspapers and has opened his creative
                            marketing agency "HubHawks" which helps authors and publishers. His hopes and dreams
                                        are to open a writing school which he's making it alive. </p><hr className={style.line14} /><hr className={style.line15} />



                            <img src={c} className={style.rect2} style={{ objectFit: "fill" }} />
                            <hr className={style.line21} /> <p className={style.text2}>Jeena Etharvia</p><hr className={style.line22} /><hr className={style.line23} />
                            <p className={style.cont2}>India's 1st Conscious Music Artist & Transformational Coach 
                            Jeena is an international composer, music producer, singer, songwriter for Conscious Music (Music that is consciously created to transform the life-state of the listener) 
                            She is the inventor of the life-transformation technology
                            THE CONSCIOUS MUSIC CODE - using Conscious Music & Transformative Mind Hacks to code your mind, body & spirit to with the power to bend, reshape & even create your own reality! 
                                    She is the 1st to use Live Sound Design with Applied Mental Space Psychology and also the 1st to be represented at NLP Conference India for her Conscious Music work with New Code NLP </p><hr className={style.line24} /><hr className={style.line25} />
                    </div>
                       
                           


                    </div>
                   
                
                

                     
          


        </Container>
        </div>

</Layout>


)

export default SpeakerPage;