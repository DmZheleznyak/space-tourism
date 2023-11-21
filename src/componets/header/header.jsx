import './header.css';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
    const [isOpenMenu, setIsOpenMenu] = useState(false)
    const openMenu = () => {
        setIsOpenMenu(!isOpenMenu)
    }

    const listOfNavigation = ['home', 'destination', 'crew', 'technology']
    const Navigation = listOfNavigation.map( (item, i) => {
        if (item === 'home') {
            return (
                <NavLink to={``} className={`itemOfListNavigation`} key={i}>
                    <li className='linkOfListNavigation'>
                       <span className='itemsNumberOfList'>0{i}</span> {item}
                    </li>
                </NavLink>
            )
        } else {
            return (
                <NavLink to={`./${item}`} className='itemOfListNavigation' key={i}>
                    <li className='linkOfListNavigation'>
                       <span className='itemsNumberOfList'>0{i}</span> {item}
                    </li>
                </NavLink>
            )
        }
    })

    return (
        <header className='header'>
            <div className='headerContainer'>
                <div className='logoContainer'>
                    <div className='logo'></div>
                </div>
                <div className='lineContainer'>
                    <div className='line'></div>
                </div>
                <div className='buttonMenu' onClick={openMenu}>
                    <div className={!isOpenMenu ? 'hamburgerMenu' : 'hamburgerMenu crossmark'}>
                        <span className="lineOfButtonMenu"></span>
                        <span className="lineOfButtonMenu"></span>
                        <span className="lineOfButtonMenu"></span>
                    </div>
                    {/* <input type='checkbox' /> */}
                </div>
                <div className={isOpenMenu ? 'navContainer open' : 'navContainer close'}>
                    <ul className='listOfNavigation'>
                        { Navigation }
                    </ul>
                </div>
            </div>
        </header>
    ) 
}

export default Header;