import React, { useState } from "react";
import {Button, Input} from "@nextui-org/react";
import './style.css'
import { useMutation } from "react-query";
import { AuthService } from "../../services/auth.services";

const Loggin = () => {

    const [dataUser, setDataUser] = useState({
        email: '',
        phone: '',
        address: '',
        name: '',
        password: ''
    })

    const {mutateAsync: registerAsync} = useMutation(
        'register', 
        () => AuthService.register(
            dataUser.email,
            dataUser.phone,
            dataUser.name,
            dataUser.address,
            dataUser.password
        ), 
        {
            onError: err => console.error(err),
            // onSuccess: {user} => /
        }
    ) 

    const {mutateAsync: logginAsync} = useMutation(
       'loggin', 
       () => AuthService.loggin(
            dataUser.email,
            dataUser.password
       ), 
       {
           onError: err => console.error(err),
           // onSuccess: {user} => /
       }
    ) 

    function clearState() {
        setDataUser({
                email: '',
                phone: '',
                address: '',
                name: '',
                password: ''
        })
    }

    function handelSubmit(e) {
        e.preventDefault()
        registerAsync()

    }

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
                    <form method="POST" onSubmit={handelSubmit}>
                        <Input 
                        aria-label="form"
                        value={dataUser.email}
                        onChange={ e => setDataUser({
                            ...dataUser,
                            email: e.target.value
                        })}
                        className="loggin--page-form-field"
                        placeholder="email"/>

                        <Input
                        aria-label="form"
                        value={dataUser.phone}
                        onChange={e=> setDataUser({
                            ...dataUser,
                            phone: e.target.value
                        })}
                        className="loggin--page-form-field"
                        placeholder="Номер телефона"/>
                        
                        <Input
                        aria-label="form"
                        value={dataUser.address}
                        onChange={e=> setDataUser({
                            ...dataUser,
                            address: e.target.value
                        })}
                        className="loggin--page-form-field"
                        placeholder="Адрес"/>
                        
                        <Input
                        aria-label="form"
                        value={dataUser.name}
                        onChange={e=> setDataUser({
                            ...dataUser,
                            name: e.target.value
                        })}
                        className="loggin--page-form-field"
                        placeholder="Как к вам обращаться"/>
                        
                        <Input.Password
                        aria-label="form"
                        value={dataUser.password}
                        onChange={e=> setDataUser({
                            ...dataUser,
                            password: e.target.value
                        })}
                        className="loggin--page-form-field"
                        placeholder="Пароль"/>
                        
                        <div className="loggin--page-form-buttons">
                            <Button
                            type="submit"
                            bordered>
                                Применить
                            </Button>

                            <Button 
                            color='error'
                            bordered
                            onPress={clearState}>
                                Сбросить
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Loggin