import Carousel from 'react-bootstrap/Carousel'
import React from "react";
import "./Styles/Games.css"
import { Container} from "react-bootstrap"


const Games = () => {
    return(
        <div id="games" className="games-news">
            <h1 className='game-head'>BABEL GAMING TOURNAMENT</h1>
            
                 <div className="game-1">
                     <h2 className='game-name'>DOTA 2</h2>
                    <p className="game-des">
                      <img alt='game' className="game-img" src={ require('../Images/Video/DOTA.jpg').default } />
                    </p>
                 </div>
                 <div className="game-2">
                     <h2 className='game-name'>CS GO: TEAM FULL DETAILS </h2>
                    <p className="game-des">
                      <img alt='game' className="game-image" src={ require('../Images/Video/CS GO 2.jpg').default } />
                    </p>
                 </div> 
                 <div className="game-3">
                     <h2 className='game-name'>CS GO: TOURNAMENT MATCH FIXTURES</h2>
                    <p className="game-des">
                      <img alt='game' className="game-img" src={ require('../Images/Video/CS GO.jpg').default } />
                    </p>
                 </div>                   
        </div>
    )
}

export default Games;

// const Games = () => {
//   return(

// <Carousel>
//   <Carousel.Item>
//     <img
//       className="d-block w-100"
//       src="../Images/Video/DOTA.jpg"
//       alt="First slide"
//     />
//     <Carousel.Caption>
//       <h3>First slide label</h3>
//       <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//     </Carousel.Caption>
//   </Carousel.Item>
//   <Carousel.Item>
//     <img
//       className="d-block w-100"
//       src="../Images/Video/CS GO 2.jpg"
//       alt="Second slide"
//     />

//     <Carousel.Caption>
//       <h3>Second slide label</h3>
//       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//     </Carousel.Caption>
//   </Carousel.Item>
//   <Carousel.Item>
//     <img
//       className="d-block w-100"
//       src="../Images/Video/CS GO.jpg"
//       alt="Third slide"
//     />

//     <Carousel.Caption>
//       <h3>Third slide label</h3>
//       <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
//     </Carousel.Caption>
//   </Carousel.Item>
// </Carousel>
// )
// }

// export default Games;