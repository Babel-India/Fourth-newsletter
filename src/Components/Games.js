import React from "react";
import "./Styles/Games.css"
import { Container} from "react-bootstrap"


const Games = () => {
    return(
        <div id="games" className="games-news">
            <h1 className='game-head'>to the world of games</h1>
            
                 <div className="game-1">
                     <h2 className='game-name'>FIFA 22</h2>
                    <p className="game-des">
                      <img alt='game' className="game-img" src={ require("../Images/Games/Fifa22.jpg").default } />
                      The next-generation version of EA Sports FIFA 22 moves the game forward with the groundbreaking HyperMotion technology that elevates every moment on the pitch. FIFA 22 also brings a new season of innovation across every mode in the game.
                    </p>
                    <p> Platform's: Stadia, Xbox Series X|S, PlayStation 5 </p>
                    <p>Release date: September 29, 2021</p>
                 </div>
                 <div className="game-2">
                     <h2 className='game-name'>Hot Wheels Unleashed</h2>
                    <p className="game-des">
                      <img alt='game' className="game-image" src={ require("../Images/Games/hotwheels unleashed.jpg").default } />
                      In Hot Wheels Unleashed, collect the best vehicles in the Hot Wheels universe, build spectacular tracks and dive into breathtaking races! 
                    </p>
                    <p> Platform's:PlayStation 4, PlayStation 5, Xbox One, Xbox Series X|S, PC, Nintendo Switch </p>
                    <p>Release date: September 30, 2021</p>
                 </div> 
                 <div className="game-3">
                     <h2 className='game-name'>Call of Duty: Vanguard</h2>
                    <p className="game-des">
                      <img alt='game' className="game-img" src={ require("../Images/Games/vangaurd.jpg").default } />
                      Vanguard is set to release this November, and as we know from the recent swath of reveal trailers and Gamescom 2021 coverage, it will follow four different people from four different countries as they experience WW2. One of those people will be played by the now-iconic voice actor Laura Bailey, who will portray a Soviet sniper named Polina Petrova. 
                    </p>
                    <p> Platform's:  PC, PS4, PS5, Xbox Series X, Xbox Series S, Xbox One </p>
                    <p>Release date: November 5, 2021</p>
                 </div>   
                
        </div>
    )
}

export default Games;