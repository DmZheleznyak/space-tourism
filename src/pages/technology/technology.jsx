import {useState} from 'react';
import './technology.css';
import data from './../../data/data.json';

    const Technology = () => { 
        const [indexSlider , setIndexSlider] = useState(0)

        const changeSlider = (e) => {
            data.crew.map((human, i) => {
                if (i+1 == e.target.textContent) setIndexSlider(i)
            })
        }
    const TechnologySection = data.technology.map((rocket,index) => {
            const dots = [0, 1, 2]
    // can take this var from data array 

    if (index === indexSlider)    
        return (
            <>
                <div className='mainTitleTechnologyPage' >
                    <span>03</span>space launch 101
                </div>
                <div className='sectionOfTechnology'>
                    <article className='containerOfInfoTechnology'>
                        <div className='mainTextTechnology'>
                            <ul className='dotsOfTechnologyContainer'>
                                {
                                    dots.map((dot, i) => {
                                        if (index === i) {
                                            return (
                                                <li key={i} className='dotTech' 
                                                onClick={changeSlider}
                                                style={{backgroundColor: `white`, color: `#0B0D17`}}
                                                ><span className='numberDot'>{dot + 1}</span></li>
                                            )  
                                        } else {
                                            return (
                                                <li key={i} className='dotTech' 
                                                onClick={changeSlider}
                                                ><span className='numberDot'>{dot + 1}</span></li>
                                            )
                                        }
                                        })
                                    }
                            </ul>
                            <div className='infoOfTechnology'>
                                    <div className='titleTechnology'>the technology</div>
                                    <h3 className='nameOfTechnology'>{rocket.name}</h3>
                                    <p className='textTechnology'>
                                        {rocket.description}
                                    </p>
                            </div>               
                        </div>
                    </article>
                    <div className='containerOfTechnology'>
                        <div className='TechnologiesContainer'>
                            <img className='imageRocket'
                                src={process.env.PUBLIC_URL + `${rocket.images.portrait}`}
                                alt='Image Rocket'
                            ></img>
                        </div>
                    </div>
                </div>
                
            </>
        )
        })

    return ( 
        <section className='technologySection mainSection'>
            <div className="technologyContentSection contentSection">
                {TechnologySection}        
            </div>
        </section>
    )
}

export default Technology;