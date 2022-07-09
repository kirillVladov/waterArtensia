import React from "react";
import {Button, Input} from "@nextui-org/react";
import './style.css'

const Loggin = () => {

    return(
        <div className="loggin--page-wrapper">
            <div className="loggin--page-container">
                <div className="loggin--page-form">
                    <h2 className="loggin--page-form-hedeline">
                        Регистрация
                    </h2>
                    <div className="loggin--page-form-sub-headline">
                        Эта информация нужна для того, чтобы автоматизировать 
                        процесс заказа
                    </div>
                    <form method="POST">
                        <Input 
                        className="loggin--page-form-field"
                        placeholder="email"/>
                        <Input
                        className="loggin--page-form-field"
                        placeholder="Номер телефона"/>
                        <Input
                        className="loggin--page-form-field"
                        placeholder="Адрес"/>
                        <Input
                        className="loggin--page-form-field"
                        placeholder="Как к вам обращаться"/>
                        <Input
                        className="loggin--page-form-field"
                        placeholder="Пароль"/>
                        <div className="loggin--page-form-buttons">
                            <Button bordered>Применить</Button>
                            <Button color='error' bordered>Сбросить</Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Loggin