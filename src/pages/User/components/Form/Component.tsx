import React, { memo, useCallback } from "react";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import { postRegister } from "../../../../redux/actions";
import { Reducers } from "../../../../redux/types";
import { Col, Row } from "../../../../components";

interface Props {
  isShow: boolean;
  onHide?: () => void;
}

const Component = ({ isShow, onHide }: Props) => {
  const dispatch = useDispatch();
  const { register, handleSubmit, errors, getValues } = useForm();

  const authState = useSelector((state: Reducers) => state.auth);

  const _handleSubmit = useCallback(
    (form) => {
      dispatch(postRegister(form, onHide!, true));
    },
    [dispatch, onHide]
  );

  const _renderError = (show: boolean, message: string) =>
    show && <div className="invalid-feedback">{message}</div>;

  return (
    <Modal show={isShow} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Add User</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col>
            {authState.register.error && (
              <div className="alert alert-danger" role="alert">
                {authState.register.error}
              </div>
            )}
          </Col>
        </Row>

        <form onSubmit={handleSubmit(_handleSubmit)}>
          <div className="form-group">
            <label>Username</label>
            <input
              className={`form-control${errors.username ? " is-invalid" : ""}`}
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
              className={`form-control${errors.password ? " is-invalid" : ""}`}
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
                validate: (value) => value === getValues("password"),
              })}
            />
            {_renderError(errors.password_confirm, "Password invalid")}
          </div>

          <div className="form-group form-check">
            <input
              type="checkbox"
              className="form-check-input"
              name="is_admin"
              ref={register}
            />
            <label className="form-check-label">Is Admin?</label>
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <button type="button" className="btn btn-secondary" onClick={onHide}>
          Cancel
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleSubmit(_handleSubmit)}
        >
          Submit
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default memo(Component);
