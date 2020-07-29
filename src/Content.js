import React from "react";
import './content.css'
import {Card, Button} from "react-bootstrap";
import ParticlesBg from 'particles-bg';

const Content = () =>{

    return(
        <div className = "followup_div " id="#section2">
            <ParticlesBg color={["#000000"]} type="cobweb" bg={true} num={[55]} v={[1, 2]} />
            <div className="grid-container">

                <div className="grid-item main">
                    <Card>
                        <div className="grid-item text-center customFont3 ">
                            <h1>WORK EXPERIENCE</h1>
                        </div>
                        <div className="grid-item ">
                            <div className="content effect">
                                <Card>
                                    <Card.Header className="customFont"><h3>
                                        Computer Science Teaching Assistant - CSU, East Bay</h3></Card.Header>
                                    <Card.Body>

                                        <Card.Subtitle className="mb-3 text-muted">
                                            <i>Data Structure and Algorithm Design</i></Card.Subtitle>
                                        <Card.Text className="mb-3 customFont2">
                                            <p><h5>• Tutored 25 students and assisted them with Python programming that resulted in them going from zero programming experience to having a solid understanding of their first language </h5></p>
                                            <p><h5>• Maintained records of academic performance and applied this information to address the areas of improvement for students</h5></p>
                                        </Card.Text>


                                    </Card.Body>
                                </Card>
                            </div>
                        </div>

                        <div className="grid-item ">
                            <div className="content effect">
                                <Card>
                                    <Card.Header className="customFont"><h3>
                                        Software Engineer Intern – ACTY Systems  </h3></Card.Header>
                                    <Card.Body>

                                        <Card.Subtitle className="mb-3 text-muted">
                                            <i>Tech Stack – Java, Swing, OpenCV, Image Processing</i></Card.Subtitle>
                                        <Card.Text className="mb-3 customFont2">
                                            <p><h5>•	Worked in collaboration with the system architect to strategize a robust computer vision algorithm implementing OpenCV to extract quality parameters of a biscuit like bake level, texture, etc. </h5></p>
                                            <p><h5>•	Proposed and delivered an algorithm based on Canny edge detection and Gaussian filters to reduce noise and effectively smooth and enhance the input images before processing </h5></p>
                                            <p><h5>• 	Configured and calibrated a threshold value based on the environmental conditions like light and background to extract cracks on the biscuit surface using Hough Transform  </h5></p>
                                        </Card.Text>


                                    </Card.Body>
                                </Card>
                            </div>
                        </div>




                    </Card>


                </div>
            </div>

            <div className="grid-container">
                <div className="grid-item main">
                    <Card>
                        <div className="grid-item text-center customFont3 ">
                            <h1>PROJECTS</h1>
                        </div>
                        <div className="grid-item ">
                            <div className="content effect">
                                <Card>
                                    <Card.Header className="customFont"><h3>
                                        COVID-19 Worldwide Cases and Visualization by Country 	</h3></Card.Header>
                                    <Card.Body>

                                        <Card.Subtitle className="mb-1 text-muted">
                                            <i>Tech Stack – Front-end, React, ES6, JavaScript, Chart.js, Bootstrap  </i></Card.Subtitle>
                                        <Card.Text className="mb-3 customFont2">
                                            <p><h5>• Built a responsive, dynamic webpage with doughnut, line, and bar graphs of up-to-date reported cases. Improved and extended search by calling Async Fetch API to visualize cases-by-country</h5></p>
                                            <p><h5>• Captured and utilized data in real-time by calling REST API and deployed the application on AWS Amplify server via command line</h5></p>
                                            <p><h5>• Integrated and implemented react-modules and Bootstrap to animate and enhance the look</h5></p>
                                        </Card.Text>


                                    </Card.Body>
                                </Card>
                            </div>
                        </div>

                        <div className="grid-item ">
                            <div className="content effect">
                                <Card>
                                    <Card.Header className="customFont"><h3>
                                        Crosswalk Detection for Low Vision People using Deep Learning </h3></Card.Header>
                                    <Card.Body>

                                        <Card.Subtitle className="mb-1 text-muted">
                                            <i>Tech Stack – Python, Numpy, TensorFlow, Scikit-learn, Keras – Group effort                                 </i></Card.Subtitle>
                                        <Card.Text className="mb-3 customFont2">
                                            <p><h5>•	Worked in collaboration with the system architect to strategize a robust computer vision algorithm implementing OpenCV to extract quality parameters of a biscuit like bake level, texture, etc. </h5></p>
                                            <p><h5>•	Proposed and delivered an algorithm based on Canny edge detection and Gaussian filters to reduce noise and effectively smooth and enhance the input images before processing </h5></p>
                                            <p><h5>• 	Configured and calibrated a threshold value based on the environmental conditions like light and background to extract cracks on the biscuit surface using Hough Transform  </h5></p>
                                        </Card.Text>


                                    </Card.Body>
                                </Card>
                            </div>
                        </div>

                        <div className="grid-item ">
                            <div className="content effect">
                                <Card>
                                    <Card.Header className="customFont"><h3>
                                        Sudoku Solver using Convolution Neural Nets and Image Processing  </h3></Card.Header>
                                    <Card.Body>

                                        <Card.Subtitle className="mb-1 text-muted">
                                            <i>Tech Stack – Python, Numpy, Keras, OpenCV</i></Card.Subtitle>
                                        <Card.Text className="mb-3 customFont2">
                                            <p><h5>•	Read, cleaned, and extracted a 9x9 puzzle box using the contour approximation method. Trained a custom 2D CNN model on MNIST dataset and executed image classification to recognize 1-9 digits  </h5></p>
                                            <p><h5>•	Proposed and delivered an algorithm based on Canny edge detection and Gaussian filters to reduce noise and effectively smooth and enhance the input images before processing </h5></p>
                                            <p><h5>• 	Converted the puzzle to a 2D integer matrix and filled empty boxes with ‘0’ by calculating its brightness. Solved the matrix using optimized recursive algorithm and recorded multiple solutions  </h5></p>
                                        </Card.Text>


                                    </Card.Body>
                                </Card>
                            </div>
                        </div>



                    </Card>


                </div>
            </div>

            <div className="grid-container" >
                <div className="grid-item main" >
                    <div className="grid-item text-center customFont3 ">
                        <h1>PUBLICATIONS</h1>
                    </div>
                    <Card>
                        <div className="grid-item ">
                            <div className="content effect">
                                <Card>
                                    <Card.Header className="customFont"><h3>
                                        Bachelor of Science, Information Technology</h3></Card.Header>
                                    <Card.Body>

                                        <Card.Subtitle className="mb-1 text-muted">
                                            <i> July 2014 – May 2018</i>   <b>|</b>   <i>GPA: 3.68</i></Card.Subtitle>
                                        <Card.Subtitle className="mb-1 text-muted">
                                            <i> </i></Card.Subtitle>
                                        <Card.Text className="mb-3 customFont2">
                                            <p><h5>  • Vellore Institute of Technology, Vellore (Abet Accredited)</h5></p>
                                        </Card.Text>


                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                    </Card>


                </div>
            </div>

            <div className="grid-container" >
                <div className="grid-item main" >
                    <div className="grid-item text-center customFont3 ">
                        <h1>EDUCATION</h1>
                    </div>
                    <Card>
                        <div className="grid-item ">
                            <div className="content effect">
                                <Card>
                                    <Card.Header className="customFont"><h3>
                                      	Master of Science, Computer Science  </h3></Card.Header>
                                    <Card.Body>

                                        <Card.Subtitle className="mb-1 text-muted">
                                            <i> August 2018 – May 2020</i>   <b>|</b>   <i>GPA: 3.75</i></Card.Subtitle>
                                        <Card.Subtitle className="mb-1 text-muted">
                                            <i> </i></Card.Subtitle>
                                        <Card.Text className="mb-3 customFont2">
                                           <p><h5>  • California State University, East Bay</h5></p>
                                        </Card.Text>


                                    </Card.Body>
                                </Card>
                            </div>
                        </div>

                        <div className="grid-item ">
                            <div className="content effect">
                                <Card>
                                    <Card.Header className="customFont"><h3>
                                        Bachelor of Science, Information Technology</h3></Card.Header>
                                    <Card.Body>

                                        <Card.Subtitle className="mb-1 text-muted">
                                            <i> July 2014 – May 2018</i>   <b>|</b>   <i>GPA: 3.68</i></Card.Subtitle>
                                        <Card.Subtitle className="mb-1 text-muted">
                                            <i> </i></Card.Subtitle>
                                        <Card.Text className="mb-3 customFont2">
                                            <p><h5>  • Vellore Institute of Technology, Vellore (Abet Accredited)</h5></p>
                                        </Card.Text>


                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                    </Card>


                </div>
            </div>


        </div>
    )
}

export default Content
