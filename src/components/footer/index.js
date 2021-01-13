//import { Link } from "gatsby"
import React from "react"
import style from './style.module.scss'
import Container from '../Container/index'
import tedlogo from '../../images/lgb.png'
import { FaInstagram, FaEnvelopeOpen, FaPhoneAlt, FaLinkedin } from 'react-icons/fa';
import { IconContext } from 'react-icons';


const Footer =()=>
(
    <div className={style.section}>
        <Container>

            <div className={style.container}>
                    <div className={style.content_holder}>
                        <img src={tedlogo} style={{width:'300px', height:'100px'}} alt='tedxlogo'/>
                        <p className={style.insta2}><IconContext.Provider className={style.icon} value={{ size: '37px' }}> <FaInstagram/></IconContext.Provider><br /><span className={style.red} ></span>  </p>
                        <p className={style.insta}><IconContext.Provider value={{ size: '37px' }}> <FaEnvelopeOpen /></IconContext.Provider> <span className={style.red}> <br /></span>  </p>
                        <p className={style.insta}><IconContext.Provider value={{ size: '37px' }}><FaLinkedin /></IconContext.Provider> <span className={style.red}> <br /> </span>  </p>
                        <p className={style.insta}><IconContext.Provider value={{ size: '37px'}}><FaPhoneAlt /></IconContext.Provider> <span className={style.red}> <br /> </span>  </p>
                        <p className={style.news}> SignUp For Newsletter</p>
                </div>
                    <p className={style.license}>"This Independent TEDx event is operated under license from TED."  </p>
                    
                <div className={style.credits}>
               
                
                </div>
            </div>

        </Container>
    </div>


)

export default Footer;