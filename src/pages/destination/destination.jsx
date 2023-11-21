import {useState} from 'react';
import './destination.css';
import data from './../../data/data.json';

const Destination = () => {

    const [indexSlider , setIndexSlider] = useState(0)

    const changeSlider = (e) => {
        data.destinations.map((planet, i) => {
            if (planet.name === e.target.textContent) setIndexSlider(i)
        })
    }
    
    const planets = ['moon', 'mars', 'europa', 'titan']

    const DestinationContent = data.destinations.map((planet, index) => {

        const listOfPlanets = planets.map((planetInListOfPlanets, i) => {
            return (
                <li key={i} className='itemOfListDestination' onClick={changeSlider}>{planetInListOfPlanets}</li>
            )
        })

        if (index === indexSlider) {
            return (
                <>
                <div className='containerOfPlanets'>
                    <div className='mainTitleDestinationPage' >
                        <span>01</span>pick your destination
                    </div>
                    <div className='planetsContainer'>
                        <img className='imagePlanet'
                            src={process.env.PUBLIC_URL + `/assets/destination/image-${planet.name}.png`}
                            alt='Image Planet'>
                        </img>
                    </div>
                </div>
                <article className='containerOfInfoDestination'>
                    <div className='containerOfListOfDestination'>
                        <ul className='listOfDestination'>
                            {listOfPlanets}
                        </ul>
                    </div>
                    <h2 className='titleDestination'>
                        {planet.name}
                    </h2>
                    <p className='textDestionation'>
                        {planet.description}
                    </p>
                    <div className='lineContainerDestination'>
                        <div className='lineDestination'></div>
                    </div>
                    <div className='infoDestination'>
                        <div className='infoInNumbers'>
                            <div className='titleInfoInNumbers'>
                                distance
                            </div>
                            <div className='textInfoInNumbers'>
                                {planet.distance}
                            </div>
                        </div>
                        <div className='infoInNumbers'>
                            <div className='titleInfoInNumbers'>
                                travel
                            </div>
                            <div className='textInfoInNumbers'>
                                {planet.travel}
                            </div>
                        </div>
                    </div>
                </article>
                </>
            )
        }
    })

    return (
        <section className='destinationSection mainSection'>
            <div className="destinationContentSection contentSection">
                {DestinationContent}
            </div>
        </section>
    )
}

export default Destination;

// if i need
// will do animation
// delete if (index === indexSlider) 
// render with class SHOW 
// and css

