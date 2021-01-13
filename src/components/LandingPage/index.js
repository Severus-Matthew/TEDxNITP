//import { Link } from "gatsby"
//import PropTypes from "prop-types"
import React from "react"
//import tedx from '../../images/TedX.png'
import style from './style.module.scss'
import Container from '../Container/index'

const LandingPage =()=>
(
  

<div className={style.container}>
<Container>
    <div className={style.herocontent}>
        <p className={style.herotitle}><span className={style.red}>TEDx</span> NITP</p>
                    <p className={style.heroslogan} style={{fontStyle:'italic'}}>"Tending To <span className={style.red}> Infinity</span>"</p>
        <p className={style.slogans}>"<span className={style.spin}></span><span className={style.red}>nity"</span> </p>
    </div>
</Container>
</div>


)


export default LandingPage;
