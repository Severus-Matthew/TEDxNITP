import React from "react"
import style from "./sass/team.module.scss"
import Layout from "../components/layout"
import Container from "../components/Container"
import O1 from "../images/team/O1.jpg"
import O2 from "../images/team/O2.jpg"
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
import EX7 from "../images/team/ex7.jpg"
import EX8 from "../images/team/ex8.jpg"
import D1 from "../images/team/d1.jpg"
import D2 from "../images/team/d2.jpg"
import D3 from "../images/team/d3.jpg"
import D4 from "../images/team/d4.jpg"
import D5 from "../images/team/d5.jpg"
import W1 from "../images/team/W1.jpg"
import W2 from "../images/team/W2.jpg"
import ED1 from "../images/team/ed1.jpg"
import ED2 from "../images/team/ed2.jpg"
import PR1 from "../images/team/pr1.jpg"
import PR2 from "../images/team/pr2.jpg"
import PR3 from "../images/team/pr3.jpg"
import PR4 from "../images/team/pr4.jpg"
import CM1 from "../images/team/cm1.jpg"
import CM2 from "../images/team/cm2.jpg"
import CM3 from "../images/team/cm3.jpeg"
import CM4 from "../images/team/cm4.jpg"
import M1 from "../images/team/m1.jpg"
import M2 from "../images/team/m2.jpg"
//import M3 from "../images/team/m3.jpg"
import M4 from "../images/team/m4.jpg"
import M5 from "../images/team/m5.jpeg"
//import M6 from "../images/team/m6.jpg"
import M7 from "../images/team/m7.jpg"
import M8 from "../images/team/m8.jpg"
import M9 from "../images/team/m9.jpeg"




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
                        <div className={style.row}>
                        <div className={style.column}>
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
                            </div>
                            <div className={style.column}>
                                <div className={style.flipcard}>
                                    <div className={style.flipcardinner}>
                                        <div className={style.flipcardfront}>
                                            <img src={O2} alt='teamImages' />
                                        </div>
                                        <div className={style.flipcardback}>
                                            <h1>Priyansh Khare</h1>
                                            <p>Lead Organizer</p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>





                       
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
                                            <p>PR Executive</p>

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
                                            <p>PR Executive</p>

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

                        <div className={style.row}>
                            <div className={style.column}>
                                <div className={style.flipcard}>
                                    <div className={style.flipcardinner}>
                                        <div className={style.flipcardfront}>
                                            <img src={EX7} alt='teamImages' />
                                        </div>
                                        <div className={style.flipcardback}>
                                            <h1>Rishu Pal</h1>
                                            <p>Curator Lead & Budget Executive</p>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={style.column}>
                                <div className={style.flipcard}>
                                    <div className={style.flipcardinner}>
                                        <div className={style.flipcardfront}>
                                            <img src={EX8} alt='teamImages' />
                                        </div>
                                        <div className={style.flipcardback}>
                                            <h1>Tanishq Singh</h1>
                                            <p>Curator Lead</p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>






                       
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


                        <br/>
                        <p className={style.title} style={{ fontSize: '30px', textDecoration: 'underline', textDecorationColor: 'red' }}>Design Team</p>
                        <br />
                        <div className={style.row}>
                            <div className={style.column1}>
                                <div className={style.flipcard}>
                                    <div className={style.flipcardinner}>
                                        <div className={style.flipcardfront}>
                                            <img src={D1} alt='teamImages' />
                                        </div>
                                        <div className={style.flipcardback}>
                                            <h1>Nipendra Gupta</h1>
                                            <p>Design Lead</p>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={style.column1}>
                                <div className={style.flipcard}>
                                    <div className={style.flipcardinner}>
                                        <div className={style.flipcardfront}>
                                            <img src={D2} alt='teamImages' />
                                        </div>
                                        <div className={style.flipcardback}>
                                            <h1>Nallajama Gunapriya</h1>
                                            <p>Design Lead</p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={style.column1}>
                                <div className={style.flipcard}>
                                    <div className={style.flipcardinner}>
                                        <div className={style.flipcardfront}>
                                            <img src={D3} alt='teamImages' />
                                        </div>
                                        <div className={style.flipcardback}>
                                            <h1>Anisha Khan</h1>
                                            <p>Design Lead</p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={style.row}>
                            <div className={style.column}>
                                <div className={style.flipcard}>
                                    <div className={style.flipcardinner}>
                                        <div className={style.flipcardfront}>
                                            <img src={D4} alt='teamImages' />
                                        </div>
                                        <div className={style.flipcardback}>
                                            <h1>Priyanka Kumari</h1>
                                            <p>Design Lead</p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={style.column}>
                                <div className={style.flipcard}>
                                    <div className={style.flipcardinner}>
                                        <div className={style.flipcardfront}>
                                            <img src={D5} alt='teamImages' />
                                        </div>
                                        <div className={style.flipcardback}>
                                            <h1>Priyanshu Shekhar </h1>
                                            <p>Design Member</p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>



                        <br />
                        <p className={style.title} style={{ fontSize: '30px', textDecoration: 'underline', textDecorationColor: 'red' }}>Website Team</p>
                        <br />
                        <div className={style.row}>
                            <div className={style.column}>
                                <div className={style.flipcard}>
                                    <div className={style.flipcardinner}>
                                        <div className={style.flipcardfront}>
                                            <img src={W1} alt='teamImages' />
                                        </div>
                                        <div className={style.flipcardback}>
                                            <h1>Manvi Jha</h1>
                                            <p>Website Manager</p>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={style.column}>
                                <div className={style.flipcard}>
                                    <div className={style.flipcardinner}>
                                        <div className={style.flipcardfront}>
                                            <img src={W2} alt='teamImages' />
                                        </div>
                                        <div className={style.flipcardback}>
                                            <h1>Vikhyat Singh</h1>
                                            <p>Website Manager</p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <br />
                        <p className={style.title} style={{ fontSize: '30px', textDecoration: 'underline', textDecorationColor: 'red' }}>Editorial Team</p>
                        <br />
                        <div className={style.row}>
                            <div className={style.column1}>
                                <div className={style.flipcard}>
                                    <div className={style.flipcardinner}>
                                        <div className={style.flipcardfront}>
                                            <img src={ED1} alt='teamImages' />
                                        </div>
                                        <div className={style.flipcardback}>
                                            <h1>Akansh Omar</h1>
                                            <p>Editorial Lead</p>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={style.column1}>
                                <div className={style.flipcard}>
                                    <div className={style.flipcardinner}>
                                        <div className={style.flipcardfront}>
                                            <img src={ED2} alt='teamImages' />
                                        </div>
                                        <div className={style.flipcardback}>
                                            <h1>Kirti Mathur</h1>
                                            <p>Editorial Associate</p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={style.column1}>
                                <div className={style.flipcard}>
                                    <div className={style.flipcardinner}>
                                        <div className={style.flipcardfront}>
                                            
                                        </div>
                                        <div className={style.flipcardback}>
                                            <h1>Neeloptal Singh Raghuvanshi</h1>
                                            <p>Editorial Associate</p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <br />
                        <p className={style.title} style={{ fontSize: '30px', textDecoration: 'underline', textDecorationColor: 'red' }}>Public Relations Team</p>
                        <br />
                        <div className={style.row}>
                            <div className={style.column1}>
                                <div className={style.flipcard}>
                                    <div className={style.flipcardinner}>
                                        <div className={style.flipcardfront}>
                                            <img src={PR1} alt='teamImages' />
                                        </div>
                                        <div className={style.flipcardback}>
                                            <h1>Pratush Parmar</h1>
                                            <p>PR Associate</p>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={style.column1}>
                                <div className={style.flipcard}>
                                    <div className={style.flipcardinner}>
                                        <div className={style.flipcardfront}>
                                            <img src={PR2} alt='teamImages' />
                                        </div>
                                        <div className={style.flipcardback}>
                                            <h1>Aarika Srivastava</h1>
                                            <p>PR Associate</p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={style.column1}>
                                <div className={style.flipcard}>
                                    <div className={style.flipcardinner}>
                                        <div className={style.flipcardfront}>
                                            <img src={PR3} alt='teamImages' />
                                        </div>
                                        <div className={style.flipcardback}>
                                            <h1>Anu Kashyap</h1>
                                            <p>PR Associate</p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={style.row}>
                            <div className={style.column2}>
                                <div className={style.flipcard}>
                                    <div className={style.flipcardinner}>
                                        <div className={style.flipcardfront}>
                                            <img src={PR4} alt='teamImages' />
                                        </div>
                                        <div className={style.flipcardback}>
                                            <h1>Anushka Gupta</h1>
                                            <p>PR Associate</p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>



                        <br />
                        <p className={style.title} style={{ fontSize: '30px', textDecoration: 'underline', textDecorationColor: 'red' }}>Communications & Marketing Team</p>
                        <br />
                        <div className={style.row}>
                            <div className={style.column1}>
                                <div className={style.flipcard}>
                                    <div className={style.flipcardinner}>
                                        <div className={style.flipcardfront}>
                                            <img src={CM1} alt='teamImages' />
                                        </div>
                                        <div className={style.flipcardback}>
                                            <h1>Shreya Vijayvargiya</h1>
                                            <p>Comm. & Marketing Lead</p>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={style.column1}>
                                <div className={style.flipcard}>
                                    <div className={style.flipcardinner}>
                                        <div className={style.flipcardfront}>
                                            <img src={CM2} alt='teamImages' />
                                        </div>
                                        <div className={style.flipcardback}>
                                            <h1>Utkarsh Raj</h1>
                                            <p>Comm. & Marketing Lead</p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={style.column1}>
                                <div className={style.flipcard}>
                                    <div className={style.flipcardinner}>
                                        <div className={style.flipcardfront}>
                                            <img src={CM3} alt='teamImages' />
                                        </div>
                                        <div className={style.flipcardback}>
                                            <h1>Shivam Tyagi</h1>
                                            <p>Comm. & Marketing Lead</p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={style.row}>
                            <div className={style.column2}>
                                <div className={style.flipcard}>
                                    <div className={style.flipcardinner}>
                                        <div className={style.flipcardfront}>
                                            <img src={CM4} alt='teamImages' />
                                        </div>
                                        <div className={style.flipcardback}>
                                            <h1>Maddhuri Dhruti</h1>
                                            <p>Comm. & Marketing Member</p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <br />
                        <p className={style.title} style={{ fontSize: '30px', textDecoration: 'underline', textDecorationColor: 'red' }}>Media Team</p>
                        <br />
                        <div className={style.row}>
                            <div className={style.column1}>
                                <div className={style.flipcard}>
                                    <div className={style.flipcardinner}>
                                        <div className={style.flipcardfront}>
                                            <img src={M1} alt='teamImages' />
                                        </div>
                                        <div className={style.flipcardback}>
                                            <h1>Sameer Nautiyal</h1>
                                            <p>Media Lead</p>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={style.column1}>
                                <div className={style.flipcard}>
                                    <div className={style.flipcardinner}>
                                        <div className={style.flipcardfront}>
                                            <img src={M2} alt='teamImages' />
                                        </div>
                                        <div className={style.flipcardback}>
                                            <h1>Rupesh Raj</h1>
                                            <p>Media Lead</p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={style.column1}>
                                <div className={style.flipcard}>
                                    <div className={style.flipcardinner}>
                                        <div className={style.flipcardfront}>
                                            
                                        </div>
                                        <div className={style.flipcardback}>
                                            <h1>Neha Kumari</h1>
                                            <p>Media Lead</p>

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
                                            <img src={M4} alt='teamImages' />
                                        </div>
                                        <div className={style.flipcardback}>
                                            <h1>Sushant Kumar Rai</h1>
                                            <p>Video & Production Lead</p>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={style.column1}>
                                <div className={style.flipcard}>
                                    <div className={style.flipcardinner}>
                                        <div className={style.flipcardfront}>
                                            <img src={M5} alt='teamImages' />
                                        </div>
                                        <div className={style.flipcardback}>
                                            <h1>Satyajit Prasad</h1>
                                            <p>Video & Production Lead</p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={style.column1}>
                                <div className={style.flipcard}>
                                    <div className={style.flipcardinner}>
                                        <div className={style.flipcardfront}>
                                           
                                        </div>
                                        <div className={style.flipcardback}>
                                            <h1>Akhila Thupakula</h1>
                                            <p>Video & Production Lead</p>

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
                                            <img src={M7} alt='teamImages' />
                                        </div>
                                        <div className={style.flipcardback}>
                                            <h1>Shreyashi Kumari</h1>
                                            <p>Production Lead</p>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={style.column1}>
                                <div className={style.flipcard}>
                                    <div className={style.flipcardinner}>
                                        <div className={style.flipcardfront}>
                                            <img src={M8} alt='teamImages' />
                                        </div>
                                        <div className={style.flipcardback}>
                                            <h1>Shivam Mishra</h1>
                                            <p>Production Lead</p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={style.column1}>
                                <div className={style.flipcard}>
                                    <div className={style.flipcardinner}>
                                        <div className={style.flipcardfront}>
                                            <img src={M9} alt='teamImages' />
                                        </div>
                                        <div className={style.flipcardback}>
                                            <h1>Yashaswi Harsh</h1>
                                            <p>Video & Production Member</p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br />
                        <p className={style.title} style={{ fontSize: '30px', fontStyle: 'italic', marginLeft: '10%',marginRight:'3%' }}>Alone We Can Do So Little, Together We Can Do So Much</p>
                        <p className={style.title} style={{ fontSize: '30px', fontStyle: 'italic', marginRight: '10%',textAlign:'right' }}>-Helen Keller</p>





                        




                   </div>
                </Container>
            </div>
            </Layout>
        )
  
export default TeamPage
