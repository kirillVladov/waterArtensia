import { useState } from "react";
import { useMutation } from "react-query";
import { AuthService } from "../../../services/auth.services";

export function withAutentification(Component) {
  return (props) => {
    const [isLoggin, setIsLoggin] = useState(true);
    const [dataUser, setDataUser] = useState({
      email: "",
      phone: "",
      address: "",
      name: "",
      password: "",
    });

    function changeMode() {
      setIsLoggin(!isLoggin);
    }

    const { mutateAsync: registerAsync } = useMutation(
      "register",
      () =>
        AuthService.register(
          dataUser.email,
          dataUser.password,
          dataUser.address,
          dataUser.name,
          dataUser.phone
        ),
      {
        onError: (err) => console.error(err),
      }
    );
    const { mutateAsync: logginAsync } = useMutation(
      "loggin",
      () => AuthService.loggin(dataUser.email, dataUser.password),
      {
        onError: (err) => console.error(err),
      }
    );

    return (
      <Component
        {...props}
        dataUser={dataUser}
        setDataUser={setDataUser}
        logginSubmit={logginAsync}
        registerSubmit={registerAsync}
        changeMode={changeMode}
        isLoggin={isLoggin}
      />
    );
  };
}
