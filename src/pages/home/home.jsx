import { Link } from 'react-router-dom'; 
import './home.css';

const Home = () => {
    return (
        <main className='mainSection'>
            <div className="contentSection">
                <article className='homeArticle'>
                    <h5 className='h5'>
                        SO, YOU WANT TO TRAVEL TO
                    </h5>
                    <h1 className='h1'>
                        SPACE
                    </h1>
                    <p>
                        Let’s face it; if you want to go to space, you might as well genuinely go to outer 
                        space and not hover kind of on the edge of it. Well sit back, and relax because 
                        we’ll give you a truly out of this world experience!    
                    </p>
                </article>
                <div className='mainButton' >
                    <Link className='buttonToExplore' to='./explore'>
                        EXPLORE
                    </Link>          
                </div>
            </div>
        </main>
    )    
}    

export default Home;