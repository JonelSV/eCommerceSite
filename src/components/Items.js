import React from 'react' 
import { withRouter } from 'react-router';


const Items = ({title, imageUrl, history, linkUrl, match}) => {
    return (

        <div onClick= {() => history.push(`${match.url}${linkUrl}`)}>
            <div className="item" style= {{backgroundImage: `url(${imageUrl})`}}>
              <div className="content">
                  <h1 className="title">{title}</h1>
                  <h3 className="subtitle">Shop Now</h3>
              </div>
            </div>
        </div>
    )
}

export default withRouter(Items);