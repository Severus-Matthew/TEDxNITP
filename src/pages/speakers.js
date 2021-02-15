import React from "react"
import style from './sass/speakers.module.scss'
import Layout from '../components/layout'
import Container from '../components/Container'
import { FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import a from '../pages/Kevin.jpg'


//import Img from 'gatsby-image';
const SpeakerPage = () =>
    (

        <Layout style={{backgroundColor:'black'}}>
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
                    </div>
                        <div className={style.speaker_holder}>
                            <table>
                                <tr>
                                    <td><div className={style.cont}><img className={style.image} src={a} alt='kevin' /><div className={style.overlay}><div className={style.text}><IconContext.Provider className={style.icon} value={{ size: '40px', color: 'white' }}> <FaInstagram style={{marginRight:'15px'}} /><FaYoutube /></IconContext.Provider></div></div></div></td>
                                    <td><p className={style.title1}> KEVIN MISSAL</p>
                                        <p className={style.content1}>
                                            Kevin Missal is a 22 year old graduate of St. Stephen's College. 
                                            He had released the Kalki Trilogy in 2017 which had garnered critical 
                                            phrases from the likes of Millennium Post, Sunday Guardian who termed it as
                                        <span className={style.bold1}> "2017's mythological phenomenon"</span> and was a <span className={style.bold1}> National Bestseller </span>and was on
                                        bestselling charts of <span className={style.bold1}> Asian Age, Hindustan Times.</span> He had forayed further
                                        into mythology and has topped charts ever since, selling cumulatively 200,000
                                        copies. He has been featured in all the daily newspapers and has opened his creative
                                        marketing agency "HubHawks" which helps authors and publishers. His hopes and dreams
                                        are to open a writing school which he's making it alive. 
                                      </p>
                                    </td>
                                </tr>
                                <tr>
                                    
                                    <td><p className={style.title2}> KEVIN MISSAL</p>
                                        <p className={style.content2}>
                                            Kevin Missal is a 22 year old graduate of St. Stephen's College.
                                            He had released the Kalki Trilogy in 2017 which had garnered critical
                                            phrases from the likes of Millennium Post, Sunday Guardian who termed it as
                                        <span className={style.bold1}> "2017's mythological phenomenon"</span> and was a <span className={style.bold1}> National Bestseller </span>and was on
                                        bestselling charts of <span className={style.bold1}> Asian Age, Hindustan Times.</span> He had forayed further
                                        into mythology and has topped charts ever since, selling cumulatively 200,000
                                        copies. He has been featured in all the daily newspapers and has opened his creative
                                        marketing agency "HubHawks" which helps authors and publishers. His hopes and dreams
                                        are to open a writing school which he's making it alive.
                                      </p>
                                    </td>
                                    <td><div className={style.cont} style={{marginRight:'80px'}}><img className={style.image} src={a} alt='kevin' /><div className={style.overlay}><div className={style.text}><IconContext.Provider className={style.icon} value={{ size: '40px', color: 'white' }}> <FaInstagram style={{ marginRight: '15px' }} /><FaYoutube /></IconContext.Provider></div></div></div></td>
                                </tr>
                                <tr>
                                </tr>
                                <tr>
                                </tr>
                                <tr>
                                </tr>
                            </table>


                            

                        </div>
                    </div>
                


          


        </Container>
        </div>

</Layout>


)

export default SpeakerPage;