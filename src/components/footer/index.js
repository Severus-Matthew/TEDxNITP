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
                        <img src={tedlogo} className={style.tedxlogo} alt='tedxlogo'/>
                        <p className={style.insta2}><a href="https://instagram.com/tedxnitpatna" style={{color:'grey'}}><IconContext.Provider className={style.icon} value={{ size: '30px' }}> <FaInstagram/></IconContext.Provider></a><br /><span className={style.red} ></span>  </p>
                        <p className={style.insta}><a href="mailto: tedxnitpatna@gmail.com" style={{ color: 'grey' }}><IconContext.Provider value={{ size: '30px' }}> <FaEnvelopeOpen /></IconContext.Provider></a> <span className={style.red}> <br /></span>  </p>
                        
                       
                        
                </div>
                    <p className={style.license}>"This website is developed by Manvi Jha & Vikhyat Singh (Web Team TEDx NITP)"  </p>
                    
                <div className={style.credits}>
               
                
                </div>
            </div>

        </Container>
    </div>


)

export default Footer;