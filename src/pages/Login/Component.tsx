import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { postLogin } from "../../redux/actions";
import { Reducers } from "../../redux/types";
import { documentTitle } from "../../utils";

const Component = () => {
  documentTitle("Login");
  const dispatch = useDispatch();
  const history = useHistory();
  const { register, handleSubmit, errors } = useForm();

  const authState = useSelector((state: Reducers) => state.auth);

  const _handleLogin = useCallback(
    form => {
      dispatch(postLogin(form, () => history.push("/standar-tarif")));
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
      <h1>Login</h1>

      {_renderError(authState.login.error !== "", authState.login.error)}

      <form onSubmit={handleSubmit(_handleLogin)}>
        <div>
          <input
            type="text"
            name="username"
            ref={register({ required: true })}
          />
          {_renderError(errors.username, "Username is required")}
        </div>

        <div>
          <input
            type="password"
            name="password"
            ref={register({ required: true, minLength: 8 })}
          />
          {_renderError(errors.password, "Password min 8")}
        </div>

        <div>
          <button type="submit" onClick={handleSubmit(_handleLogin)}>
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Component;
