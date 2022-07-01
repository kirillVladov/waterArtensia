import React, { useRef, useState } from "react";
import { Input, Switch } from "@nextui-org/react";
import './style.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faMoon, faSun, faUser } from "@fortawesome/free-regular-svg-icons";

const Header = () => {
    let currentTheme = window.localStorage.getItem('theme')
    const links = window.links
    const [controller, setController] = useState({
        theme: currentTheme
    })
    const search = useRef(null)

    
    window.addEventListener('load', ()=>{
        //get theme
        if(window.localStorage.getItem('theme')) {
            setController((prev)=>{
                return{
                    ...prev,
                    main: document.querySelector('#mainBlock'),
                    theme: currentTheme
                }
            })
        } 
        
        window.localStorage.setItem('theme', controller.theme)
    })

    function changeTheme(e) {
        e.preventDefault()
        let isDark = e.target.checked

        setController((prev) => {
            return{
                ...prev,
                theme: isDark
            }
        })

        isDark = isDark ? 'white' : 'black'
        if(isDark !== 'black')
          search.current.style.backgroundColor = 'black'
        else
            search.current.style.backgroundColor = 'white'


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
                <a className="header-menu-item" href={''}>Главная</a>
                <a className="header-menu-item" href={''}>Главная</a>
                <a className="header-menu-item" href={''}>Главная</a>
                <a className="header-menu-item" href={''}>Главная</a>

                    {/* {
                        Object.entries(links).forEach(([item, key]) => (
                            <a className="header-menu-item" href={key}>{item}</a>
                        ))
                    }                 */}
                </div>
                <div className="header-switch-mode-wrapper">
                    <Switch
                    onChange={changeTheme}
                        data-role='themeSwitchButton'
                        checked={false}
                        size="xl"
                        color="primary"
                        icon={<FontAwesomeIcon icon={faMoon} />} />
                </div>
                <div className="header-search-wrapper">
                    <Input 
                        ref={search}
                        type='text'
                        clearable
                        placeholder="Поиск по сайту"
                     />
                </div>
                <div className="header-loggin-wrapper">
                    <a href="/loggin">
                        <FontAwesomeIcon icon={faUser} size="2x" className="header-loggin-icon" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Header