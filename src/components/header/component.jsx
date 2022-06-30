import React, { useState } from "react";
import { Switch } from "@nextui-org/react";
import './style.css';
import Fa from '@fortawesome/fontawesome-free'

{/* <FontAwesomeIcon icon="fa-regular fa-arro-right-to-bracket" /> */}

const Header = () => {
    let currentTheme = window.localStorage.getItem('theme')
    const links = window.links
    const [controller, setController] = useState({
        theme: currentTheme
    })
    
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

        window.localStorage.setItem('theme', controller.theme)
        controller.main.setAttribute('data-theme', controller.theme)
        isDark = isDark ? 'white' : 'black'
    }

    return(
        <div className="header-wrapper" data-role="header">
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
                    size="sm"
                    color="primary"
                    icon={''} />
            </div>
            <div className="header-loggin-wrapper">
                <a href="/loggin">
                    <span>
                        {/* <Fa icon="fa-regular fa-arrow-right-to-bracket" /> */}
                    </span>
                </a>
            </div>
        </div>
    )
}

export default Header