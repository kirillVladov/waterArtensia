import React, { useRef, useState } from "react";
import { Input, Switch } from "@nextui-org/react";
import './style.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {faMoon, faSun, faUser } from "@fortawesome/free-regular-svg-icons";

const Header = () => {
    let currentTheme = window.localStorage.getItem('theme')
    const links = window.links
    const [controller, setController] = useState({
        theme: currentTheme,
        search: useRef(null),
        themeToggle: useRef(null)
    })

    window.addEventListener('load', ()=>{
            setController((prev)=>{
                return{
                    ...prev,
                    main: document.querySelector('#mainBlock'),
                }
            })

        // changeTheme();   
        
        window.localStorage.setItem('theme', controller.theme)
    })

    function changeTheme(e) {
        let isDark = e.target.checked

        setController((prev) => {
            return{
                ...prev,
                theme: isDark
            }
        })

        isDark = isDark ? 'white' : 'black'

        window.localStorage.setItem('theme', controller.theme)
        controller.main.setAttribute('data-theme', controller.theme)
    }

    return(
        <div className="header-wrapper" data-role="header">
            <div className="header-container">
                <div className="header-mobile-menu-wrapper">
                    <button className="header-mobile-menu-toggle" data-state="deployed">
                        <div className="header-mobile-menu-burger-row"></div>    
                        <div className="header-mobile-menu-burger-row"></div>    
                        <div className="header-mobile-menu-burger-row"></div>    
                    </button>
                </div>
                <div className="header-logo-wrapper">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SCA_company_logo.svg/2560px-SCA_company_logo.svg.png" />
                </div>
                <div className="header-menu-wrapper">
                {
                       Object.entries(links).map(([key, value]) => (
                            <div className="header-menu-item" key={key}>
                                <Link to={key}>
                                    {value.name}
                                </Link>
                            </div>
                        ))
                }
                </div>
                <div className="header-switch-mode-wrapper">
                    {
                        controller.theme === 'black' 
                        
                        ?

                        <Switch
                        aria-label="header"
                        onChange={changeTheme}
                        data-role='themeSwitchButton'
                        checked={false}
                        ref={controller.themeToggle}
                        size="xl"
                        color="primary"
                        icon={<FontAwesomeIcon icon={faMoon} />} />
                        
                        :

                        <Switch
                        aria-label="header"
                        onChange={changeTheme}
                        data-role='themeSwitchButton'
                        checked={true}
                        ref={controller.themeToggle}
                        size="xl"
                        color="primary"
                        icon={<FontAwesomeIcon icon={faSun} />} />
                    }
                    
                </div>
                <div className="header-search-wrapper">
                    <Input 
                        aria-label="header"
                        ref={controller.search}
                        type='text'
                        css={{colorAdjust:"Black"}}
                        clearable
                        placeholder="Поиск по сайту"
                     />
                </div>
                <div className="header-loggin-wrapper">
                    <Link to="/loggin">
                        <FontAwesomeIcon icon={faUser} size="2x" className="header-loggin-icon" />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header