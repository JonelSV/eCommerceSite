import React, {useState} from 'react' 
import Items from './Items'


const Directory = () => {

const [products, setProducts] = useState({

    categories: [
        {
          title: 'Portugal',
          imageUrl: 'https://i.ibb.co/0y9Cp3d/IMG-1746.jpg',
          id: 1,
          linkUrl: 'shop/hats'
        },
        {
          title: 'Netherlands',
          imageUrl: 'https://i.ibb.co/gSBr4g4/IMG-4016.jpg',
          id: 2,
          linkUrl: 'shop/jackets'
        },
        {
          title: 'Belgium',
          imageUrl: 'https://i.ibb.co/C0NWMNX/IMG-6306.jpg',
          id: 3,
          linkUrl: 'shop/sneakers'
        },
        {
          title: 'Greece',
          imageUrl: 'https://i.ibb.co/rcRRntp/IMG-4833.jpg',
          size: 'large',
          id: 4,
          linkUrl: 'shop/womens'
        },
        {
          title: 'Venice',
          imageUrl: 'https://i.ibb.co/KWfy5L9/IMG-7078.jpg',
          size: 'large',
          id: 5,
          linkUrl: 'shop/mens'
        }
      ]
})


return(

    <div className="directory">
        {
            products.categories.map(({title, id, imageUrl, linkUrl}) =>
             <Items title={title} imageUrl ={imageUrl} key ={id}  linkUrl={linkUrl} />)
        }

    </div>

    )
}


export default Directory;