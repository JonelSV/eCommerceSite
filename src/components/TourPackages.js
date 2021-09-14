import React from 'react' 
import 'bootstrap/dist/css/bootstrap.min.css'
import {Card, Button} from 'react-bootstrap'

// using cards and buttons from bootstrap library

const TourPackages = () => {
    return (

         <div>
            <div className="col-md-6" align='center'>
                <Card className ='mb-5' style={{color: "#008080" }}>
                <Card.Img src="https://picsum.photos/1920/1080?random=1"/>
                    <Card.Body>
                        <Card.Title>
                            Tour Package 1
                        </Card.Title>.
                        <Card.Text>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, vero!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, vero!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, vero!
                        </Card.Text>
                    </Card.Body>
                    <Button variant='secondary'> Click for more details</Button>
                </Card>

                <Card style={{color: "#008080" }}>
                <Card.Img src="https://picsum.photos/1920/1080?random=2"/>
                    <Card.Body>
                        <Card.Title>
                            Tour Package 2
                        </Card.Title>.
                        <Card.Text>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, vero!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, vero!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, vero!
                        </Card.Text>
                    </Card.Body>
                    <Button variant='secondary'> Click for more details</Button>
                </Card>
        
        </div>

       
        <div className="col-md-6">
            <Card className ='mb-5' style={{color: "#008080" }}>
            <Card.Img src="https://picsum.photos/1920/1080?random=3"/>
                <Card.Body>
                    <Card.Title>
                        Tour Package 3
                    </Card.Title>.
                    <Card.Text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, vero!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, vero!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, vero!
                    </Card.Text>
                </Card.Body>
                <Button variant='secondary'> Click for more details</Button>
            </Card>

            <Card style={{color: "#008080" }}>
            <Card.Img src="https://picsum.photos/1920/1080?random=4"/>
                <Card.Body>
                    <Card.Title>
                        Tour Package 4
                    </Card.Title>.
                    <Card.Text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, vero!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, vero!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, vero!
                    </Card.Text>
                </Card.Body>
                <Button variant='secondary'> Click for more details</Button>
            </Card>
        
        </div>
    </div>
    )
}

export default TourPackages;