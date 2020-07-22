import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { postRegister } from "../../redux/actions";
import { Reducers } from "../../redux/types";
import { documentTitle } from "../../utils";
import { Card, Col, Container, Row } from "../../components";

const Component = () => {
  documentTitle("Register - Admin");
  const dispatch = useDispatch();
  const history = useHistory();
  const { register, handleSubmit, errors, getValues } = useForm();

  const authState = useSelector((state: Reducers) => state.auth);

  const _handleRegister = useCallback(
    form => {
      dispatch(
        postRegister(
          { username: form.username, password: form.password, is_admin: true },
          () => history.push("/dashboard")
        )
      );
    },
    [dispatch, history]
  );

  const _renderError = (isShow: boolean, message: string) =>
    isShow && <div className="invalid-feedback">{message}</div>;

  return (
    <Container className="register" isLoading={authState.register.isLoading}>
      <Row justifyContent="center" style={{ paddingTop: 200 }}>
        <Col size={6}>
          <Card title="Register Admin">
            <Row>
              <Col>
                <Row>
                  <Col>
                    {authState.register.error && (
                      <div className="alert alert-danger" role="alert">
                        {authState.register.error}
                      </div>
                    )}
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <form onSubmit={handleSubmit(_handleRegister)}>
                      <div className="form-group">
                        <label>Username</label>
                        <input
                          className={`form-control${
                            errors.username ? " is-invalid" : ""
                          }`}
                          type="text"
                          name="username"
                          placeholder="username"
                          ref={register({ required: true })}
                        />
                        {_renderError(errors.username, "Username is required")}
                      </div>

                      <div className="form-group">
                        <label>Password</label>
                        <input
                          className={`form-control${
                            errors.password ? " is-invalid" : ""
                          }`}
                          type="password"
                          name="password"
                          placeholder="password"
                          ref={register({ required: true, minLength: 8 })}
                        />
                        {_renderError(errors.password, "Password min 8")}
                      </div>

                      <div className="form-group">
                        <label>Password</label>
                        <input
                          className={`form-control${
                            errors.password_confirm ? " is-invalid" : ""
                          }`}
                          type="password"
                          name="password_confirm"
                          placeholder="password confirm"
                          ref={register({
                            required: true,
                            minLength: 8,
                            validate: value => value === getValues("password")
                          })}
                        />
                        {_renderError(
                          errors.password_confirm,
                          "Password invalid"
                        )}
                      </div>

                      <button
                        type="submit"
                        onClick={handleSubmit(_handleRegister)}
                        className="btn btn-primary"
                      >
                        Daftar
                      </button>
                    </form>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Component;
