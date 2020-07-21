import React from "react";
import './content.css'
import {Card, Button} from "react-bootstrap";
import ParticlesBg from 'particles-bg';

const Content = () =>{

    return(
        <div className = "followup_div " id="#section2">
            <div id="part">
                <ParticlesBg color={["#000000"]} type="cobweb" bg={true} num={[55]} v={[1, 2]} />
            </div>
            <div className="grid-container">

                <div className="grid-item text-center ">
                    <h1>Work Experience</h1>
                </div>
                <div className="grid-item ">
                    <div className="content ">
                        <Card className="effect8">
                            <Card.Header className="bg-dark text-white"><h2>
                                Computer Science Teaching Assistance - CSU, East Bay</h2></Card.Header>
                            <Card.Body className="bg-dark text-white">

                                <Card.Subtitle className="mb-3 text-muted">
                                    <i>Data Structure and Algorithm Design</i></Card.Subtitle>
                                <Card.Text className="mb-3">
                                    <p><h5>• Tutored 25 students and assisted them with Python programming that resulted in them going from zero programming experience to having a solid understanding of their first language </h5></p>
                                    <p><h5>• Maintained records of academic performance and applied this information to address the areas of improvement for students</h5></p>
                                </Card.Text>
                                <Card.Link href="#">LINK</Card.Link>

                            </Card.Body>
                        </Card>
                    </div>
                </div>
                <div className="grid-item">
                    <div className="content">
                        <Card>
                            <Card.Header className="text-">Featured</Card.Header>
                            <Card.Body>
                                <Card.Title>Special title treatment</Card.Title>
                                <Card.Text>
                                    With supporting text below as a natural lead-in to additional content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
                <div className="grid-item">3</div>
                <div className="grid-item">4</div>

            </div>
        </div>
    )
}

export default Content
