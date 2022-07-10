import { Input, Button } from "@nextui-org/react";

const Auth = (props) => {
  function handelSubmit(e) {
    e.preventDefault();

    if (props.dataUser.email && props.dataUser.password) {
      props.logginSubmit();
    } else {
      alert("Заполните обязательные поля");
    }
  }

  return (
    <form method="POST" onSubmit={handelSubmit}>
      <Input
        aria-label="form"
        value={props.dataUser.email}
        onChange={(e) =>
          props.setDataUser({
            ...props.dataUser,
            email: e.target.value,
          })
        }
        className="loggin--page-form-field"
        placeholder="email"
      />

      <Input.Password
        aria-label="form"
        value={props.dataUser.password}
        onChange={(e) =>
          props.setDataUser({
            ...props.dataUser,
            password: e.target.value,
          })
        }
        className="loggin--page-form-field"
        placeholder="Пароль"
      />

      <div className="loggin--page-form-buttons">
        <Button type="submit" bordered>
          Применить
        </Button>

        <Button color="error" bordered onPress={props.clearState}>
          Сбросить
        </Button>
      </div>
    </form>
  );
};

export default Auth;
