import React from "react";
import "./style.css";
import { withAutentification } from "./parts/withAutentification";
import Auth from "./parts/auth";
import Registration from "./parts/registration";

const Loggin = (props) => {
  return (
    //TODO check forms Components
    <div className="loggin--page-wrapper">
      <div className="loggin--page-container">
        <div className="loggin--page-form">
          <h2 className="loggin--page-form-hedeline">
            {props.isLoggin ? "Авторизация" : "Регистрация"}
          </h2>
          <div className="loggin--page-form-sub-headline">
            Эта информация нужна для того, чтобы автоматизировать процесс заказа
          </div>
          <>
            {props.isLoggin ? <Auth {...props} /> : <Registration {...props} />}
          </>
          <div className="loggin--page-form-switch-mode">
            <span onClick={props.changeMode}>
              {props.isLoggin ? "Перейти к регистрации" : "Авторизоваться"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withAutentification(Loggin);
