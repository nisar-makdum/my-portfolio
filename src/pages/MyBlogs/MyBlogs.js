import React from 'react';
import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import blog1 from '../../assets/img/blogs/blog1.jpg';
import blog2 from '../../assets/img/blogs/blog2.png';
import blog3 from '../../assets/img/blogs/blog3.png';

const MyBlogs = () => {
    return (
        <div>
            <h1 style={{color:"#F0FFF0"}} className="text-center font-details-b pb-4">MY BLOGS</h1>
           <Row  className="d-flex justify-content-around">
           <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={blog1} />
                <Card.Body>
                    <Card.Title>JavaScript</Card.Title>
                    <Card.Text>
                    With two decades of improvement, JavaScript has become one of the most popular programming languages of all time.
                    </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={blog2} />
                <Card.Body>
                    <Card.Title>React</Card.Title>
                    <Card.Text>
                    React is a JavaScript library for building user interfaces.
                    React is used to build single page applications.
                    React allows us to create reusable UI components.
                    </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={blog3} />
                <Card.Body>
                    <Card.Title>Node Js</Card.Title>
                    <Card.Text>
                    Node.js is an event-driven JavaScript runtime.
                     Node has myriad potential uses for JavaScript development including being a great environment for building efficient network applications.
                    </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
            </Card>

            {/* <Card style={{ width: '18rem', marginTop:'15px' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem', marginTop:'15px'}}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem', marginTop:'15px' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card> */}
           </Row>
        </div>
    );
};

export default MyBlogs;