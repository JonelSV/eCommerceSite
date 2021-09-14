import React from 'react' 
import 'bootstrap/dist/css/bootstrap.min.css'
import {Card, Button} from 'react-bootstrap'

const TourPackages = () => {
    return (
        <div className ='row'>
            <div className="col-md-6">
                <Card style={{color: "#008080" }}>
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
        </div>
    )
}

export default TourPackages;