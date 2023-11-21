import {useState} from 'react';
import './crew.css';
import data from './../../data/data.json';

const Crew = () => {

    const [indexSlider , setIndexSlider] = useState(0)

    const changeSlider = (e) => {
        data.crew.map((human, i) => {
            if (i == e.target.textContent) setIndexSlider(i)
        })
    }

    const CrewSection = data.crew.map((human, index) => {


    const dots = ['0', '1', '2', '3']
    // can take this var from data array 

    if (index === indexSlider)    
        return (
            <>
                <div className='mainTitleCrewPage' >
                    <span>02</span>meet your crew
                </div>
                <div className='mainContainerOfInfoCrew'>
                    <article className='containerOfInfoCrew'>
                        <h4 className='roleHuman'>
                            {human.role}
                        </h4>
                        <h3 className='nameHuman'>
                            {human.name}
                        </h3>
                        <p className='textHuman'>
                            {human.bio}
                        </p>
                        <ul className='dotsContainer'>
                            {
                                dots.map((dot, i) => {
                                    if (index === i) {
                                        return (
                                            <li key={i} className='dot' 
                                            onClick={changeSlider}
                                            style={{backgroundColor: `white`, color: `white`}}
                                            >{dot}</li>
                                        )  
                                    } else {
                                        return (
                                            <li key={i} className='dot' 
                                            onClick={changeSlider}
                                            >{dot}</li>
                                        )
                                    }
                                })
                            }
                        </ul>
                    </article>
                    <div className='containerOfHumans'>
                        <div className='humasContainer'>
                            <img className='imageHuman'
                                src={process.env.PUBLIC_URL + `${human.images.png}`}
                                alt='image Human'
                            ></img>
                        </div>
                    </div>
                </div>
              
            </>
        )
    })

    return ( 
        <section className='crewSection mainSection'>
            <div className="crewContentSection contentSection">
                {CrewSection}        
            </div>
        </section>
    )
}

export default Crew;