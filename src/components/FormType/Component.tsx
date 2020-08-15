import React, { memo, useCallback } from "react";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

import { postTypeKapal, postTypeSurvey } from "../../redux/actions";

interface Props {
  isShow: boolean;
  onHide?: () => void;
  type: "kapal" | "survey";
  title: string;
}

const Component = ({ isShow, onHide, title, type }: Props) => {
  const dispatch = useDispatch();
  const { register, handleSubmit, errors } = useForm();

  const _handleSubmit = useCallback(
    (form) => {
      if (type === "kapal") {
        dispatch(postTypeKapal(form, onHide!));
      } else {
        dispatch(postTypeSurvey(form, onHide!));
      }
    },
    [dispatch, onHide, type]
  );

  const _renderError = (show: boolean, message: string) =>
    show && <div className="invalid-feedback">{message}</div>;

  return (
    <Modal show={isShow} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit(_handleSubmit)}>
          <div className="form-group">
            <label>Name</label>
            <input
              className={`form-control${errors.name ? " is-invalid" : ""}`}
              type="text"
              name="name"
              placeholder="name"
              ref={register({ required: true })}
            />
            {_renderError(errors.name, "Name is required")}
          </div>

          <input type="submit" hidden />
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
