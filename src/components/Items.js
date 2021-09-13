import React from 'react' 



const Items = ({title, imageUrl}) => {
    return (

     
            <div className="item" style= {{backgroundImage: `url(${imageUrl})`}}>
              <div className="content">
                  <h1 className="title">{title}</h1>
                  <h3 className="subtitle">Book Now</h3>
              </div>
            </div>
       
    )
}

export default Items;