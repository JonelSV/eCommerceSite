import React from 'react' 
import {Card, Button} from 'react-bootstrap'

const TourPackages = () => {
    return (
        <div>
            <Card style={{color: "#008080" }}>
               <Card.Img src="https://picsum.photos/200/300"/>
                <Card.Body>
                    <Card.Title>
                        Tour Package 1
                    </Card.Title>.
                    <Card.Text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, vero!
                    </Card.Text>
                </Card.Body>
                <Button variant='secondary'> Click for more details</Button>
            </Card>




        </div>
    )
}

export default TourPackages;