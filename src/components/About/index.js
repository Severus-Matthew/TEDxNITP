import { Link } from "gatsby"
//import PropTypes from "prop-types"
import React from "react"
import style from './style.module.scss'
import Container from '../Container/index'
import TEDx from '../../images/2.jpg'
import TEDx2 from '../../images/23.jpg'

const About =()=>
(
    
    <div className={style.container}>
        <Container>
        <div className={style.content_holder}>

        
        <div className={style.content_wrap}>
        <div className={style.content}>
        <p className={style.content_title}>What is <span className={style.red}>TEDx</span> </p>
        <p  className={style.content_data}>In the spirit of ideas worth spreading, TED has created a program called TEDx. 
        TEDx is a program of local, self-organized events that bring people together to share a TED-like experience. 
        Our event is called TEDxNITP, where x = independently organized TED event. At our TEDxNITP event, 
        TED Talks video and live speakers will combine to spark deep discussion and connection in a small group. The TED Conference provides general 
        guidance for the TEDx program, but individual TEDx events, including ours, are self-organized.</p>
        <Link className={style.HeroButton} to="/about">Learn more</Link>
        </div>

        <img src={TEDx} className={style.About_image}   alt="about-ted" />
        </div>


                    <div className={style.content_wrap}>
                        <div className={style.About_image} style={{ marginBottom: '80px' }}>
                            <p className={style.content_title}>About <span className={style.red}>TEDx </span>NIT Patna </p>
                            <p className={style.content_data} >Floating with the calm waves of Ganges, dancing with
                            the cool breeze and embracing the chaos, we join
                            together to celebrate ideas. A pool of talented and
                            creative individuals striving hard to create changes and
                            bring forth new innovations.
                            National Institute of Technology Patna, located in the
                            heart of the capital city of Bihar, the land of legendary
                            sagas, is one of the oldest technical institute of our
                            country and a TEDx event on its grounds and by the
                            serene waves of the sacred Ganges promises to attract
                            the most interesting and intellectual crowd of all age
                            groups.With the spirits tending to infinity, you will
                            engage with a completely different and beautiful group
                            of people and culture at TEDxNITPatna.In the long run,
                            it's a great opportunity to create recall value as you join
                            with an Institute of National Importance rising with a
fast pace through its great reservoir of talent.</p>
                            
                        </div>

                        <img src={TEDx2} className={style.content} alt="about-ted" />
                    </div>


        </div>


        </Container>

    </div>
)

export default About;