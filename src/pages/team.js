import React from "react"
import style from "./sass/team.module.scss"
import Layout from "../components/layout"
import Container from "../components/Container"
import O1 from "../images/team/O1.jpg"
import E1 from "../images/team/E1.jpg"
import E2 from "../images/team/E2.jpeg"
import E3 from "../images/team/E3.jpg"
import E4 from "../images/team/E4.jpg"
import E5 from "../images/team/E5.jpg"
import E6 from "../images/team/E6.jpg"
import EX1 from "../images/team/ex1.jpg"
import EX2 from "../images/team/ex2.jpg"
import EX3 from "../images/team/ex3.jpg"
import EX4 from "../images/team/ex4.jpg"
import EX5 from "../images/team/ex5.jpg"
import EX6 from "../images/team/ex6.jpg"



const TeamPage = () =>
    (
        <Layout>
            <div className={style.section}>
                <Container>
                    <div className={ style.container}>
                        <p className={style.title} style={{ marginTop: '110px' }}><br /> TEAM <span className={style.red}>TEDx</span> NITP<br /> </p>
                        <hr />
                        <br />
                        <p className={style.title} style={{ fontSize: '30px', textDecoration: 'underline', textDecorationColor: 'red' }}>Organizers</p>
                        <br />
                        <div className={style.flipcard}>
                            <div className={style.flipcardinner}>
                            <div className={style.flipcardfront}>
                                    <img src={O1} alt='teamImages'/>
                                 </div>
                            <div className={style.flipcardback}>
                                        <h1>Aditi Anshu</h1>
                                        <p>Lead Organizer</p>
                                        
                                    </div>
                                </div>
                        </div>





                        <br />
                        <br />
                        <br />
                        <p className={style.title} style={{ fontSize: '30px', textDecoration: 'underline', textDecorationColor: 'red' }}>Executive Team</p>
                        <br />
                        <div className={style.row}>
                            <div className={style.column1}>
                                <div className={style.flipcard}>
                                    <div className={style.flipcardinner}>
                                        <div className={style.flipcardfront}>
                                            <img src={EX1} alt='teamImages' />
                                        </div>
                                        <div className={style.flipcardback}>
                                            <h1>Dewansh Shrivastav</h1>
                                            <p>Executive Producer</p>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={style.column1}>
                                <div className={style.flipcard}>
                                    <div className={style.flipcardinner}>
                                        <div className={style.flipcardfront}>
                                            <img src={EX2} alt='teamImages'  />
                                        </div>
                                        <div className={style.flipcardback}>
                                            <h1>Aditya Singh</h1>
                                            <p>Executive Producer</p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={style.column1}>
                                <div className={style.flipcard}>
                                    <div className={style.flipcardinner}>
                                        <div className={style.flipcardfront}>
                                            <img src={EX3} alt='teamImages' />
                                        </div>
                                        <div className={style.flipcardback}>
                                            <h1>Harsh Jha</h1>
                                            <p>Sponsorship Executive</p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>



                        <div className={style.row}>
                            <div className={style.column1}>
                                <div className={style.flipcard}>
                                    <div className={style.flipcardinner}>
                                        <div className={style.flipcardfront}>
                                            <img src={EX4} alt='teamImages'  />
                                        </div>
                                        <div className={style.flipcardback}>
                                            <h1>Adarsh Mishra</h1>
                                            <p>Sponsorship Executive</p>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={style.column1}>
                                <div className={style.flipcard}>
                                    <div className={style.flipcardinner}>
                                        <div className={style.flipcardfront}>
                                            <img src={EX5} alt='teamImages' />
                                        </div>
                                        <div className={style.flipcardback}>
                                            <h1>Insha Nadeem</h1>
                                            <p>Experiences Executive</p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={style.column1}>
                                <div className={style.flipcard}>
                                    <div className={style.flipcardinner}>
                                        <div className={style.flipcardfront}>
                                            <img src={EX6} alt='teamImages' />
                                        </div>
                                        <div className={style.flipcardback}>
                                            <h1>Suraj Kuamr Jha</h1>
                                            <p>Experiences Executive</p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>






                        <br />
                        <br />
                        <br />
                        <p className={style.title} style={{ fontSize: '30px', textDecoration: 'underline', textDecorationColor: 'red' }}>Event Team</p>
                        <br />
                        <div className={style.row}>
                            <div className={style.column1}>
                        <div className={style.flipcard}>
                            <div className={style.flipcardinner}>
                                <div className={style.flipcardfront}>
                                            <img src={E1} alt='teamImages' />
                                </div>
                                <div className={style.flipcardback}>
                                    <h1>Shitij Sahu</h1>
                                    <p>Event Curator</p>

                                </div>
                            </div>
                            </div>
                            </div>
                            
                            <div className={style.column1}>
                        <div className={style.flipcard}>
                            <div className={style.flipcardinner}>
                                <div className={style.flipcardfront}>
                                            <img src={E2} alt='teamImages' />
                                </div>
                                <div className={style.flipcardback}>
                                    <h1>Pratik Kumar</h1>
                                    <p>Event Curator</p>

                                </div>
                            </div>
                            </div>
                            </div>

                            <div className={style.column1}>
                                <div className={style.flipcard}>
                                    <div className={style.flipcardinner}>
                                        <div className={style.flipcardfront}>
                                            <img src={E3} alt='teamImages' />
                                        </div>
                                        <div className={style.flipcardback}>
                                            <h1>Jelsy Singh</h1>
                                            <p>Event Associate</p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={style.row}>
                            <div className={style.column1}>
                                <div className={style.flipcard}>
                                    <div className={style.flipcardinner}>
                                        <div className={style.flipcardfront}>
                                            <img src={E4} alt='teamImages' />
                                        </div>
                                        <div className={style.flipcardback}>
                                            <h1>Raja Babu</h1>
                                            <p>Event Associate</p>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={style.column1}>
                                <div className={style.flipcard}>
                                    <div className={style.flipcardinner}>
                                        <div className={style.flipcardfront}>
                                            <img src={E5} alt='teamImages'/>
                                        </div>
                                        <div className={style.flipcardback}>
                                            <h1>Anupriya</h1>
                                            <p>Event Manager</p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={style.column1}>
                                <div className={style.flipcard}>
                                    <div className={style.flipcardinner}>
                                        <div className={style.flipcardfront}>
                                            <img src={E6} alt='teamImages' />
                                        </div>
                                        <div className={style.flipcardback}>
                                            <h1>Subrat Chaturvedi</h1>
                                            <p>Event Manager</p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>





                        




                   </div>
                </Container>
            </div>
            </Layout>
        )
  
export default TeamPage
