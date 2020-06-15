import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { postRegister } from "../../redux/actions";
import { Reducers } from "../../redux/types";
import { documentTitle } from "../../utils";

const Component = () => {
  documentTitle("Register - Admin");
  const dispatch = useDispatch();
  const history = useHistory();
  const { register, handleSubmit, errors, getValues } = useForm();

  const authState = useSelector((state: Reducers) => state.auth);

  const _handleRegister = useCallback(
    form => {
      dispatch(
        postRegister({ username: form.username, password: form.password }, () =>
          history.push("/standar-tarif")
        )
      );
    },
    [dispatch, history]
  );

  const _renderError = (isShow: boolean, message: string) =>
    isShow && (
      <div>
        <p>{message}</p>
      </div>
    );

  return (
    <div>
      <h1>Register Admin</h1>

      {_renderError(authState.register.error !== "", authState.register.error)}

      <form onSubmit={handleSubmit(_handleRegister)}>
        <div>
          <input
            type="text"
            name="username"
            placeholder="username"
            ref={register({ required: true })}
          />
          {_renderError(errors.username, "Username is required")}
        </div>

        <div>
          <input
            type="password"
            name="password"
            placeholder="password"
            ref={register({ required: true, minLength: 8 })}
          />
          {_renderError(errors.password, "Password min 8")}
        </div>

        <div>
          <input
            type="password"
            name="password_confirm"
            placeholder="password confirm"
            ref={register({
              required: true,
              minLength: 8,
              validate: value => value === getValues("password")
            })}
          />
          {_renderError(errors.password_confirm, "Password invalid")}
        </div>

        <div>
          <button type="submit" onClick={handleSubmit(_handleRegister)}>
            Daftar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Component;
