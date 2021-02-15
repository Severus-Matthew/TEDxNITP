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
                        <img src={tedlogo} style={{width:'300px', height:'100px',marginRight:'120px'}} alt='tedxlogo'/>
                        <p className={style.insta2}><IconContext.Provider className={style.icon} value={{ size: '30px' }}> <FaInstagram/></IconContext.Provider><br /><span className={style.red} ></span>  </p>
                        <p className={style.insta}><IconContext.Provider value={{ size: '30px' }}> <FaEnvelopeOpen /></IconContext.Provider> <span className={style.red}> <br /></span>  </p>
                        <p className={style.insta}><IconContext.Provider value={{ size: '30px' }}><FaLinkedin /></IconContext.Provider> <span className={style.red}> <br /> </span>  </p>
                        <p className={style.insta}><IconContext.Provider value={{ size: '30px'}}><FaPhoneAlt /></IconContext.Provider> <span className={style.red}> <br /> </span>  </p>
                        <p className={style.news} style={{ marginLeft: '50px' }}> SignUp For Newsletter</p>
                </div>
                    <p className={style.license}>"This Independent TEDx event is operated under license from TED."  </p>
                    
                <div className={style.credits}>
               
                
                </div>
            </div>

        </Container>
    </div>


)

export default Footer;