import React, { memo, useCallback } from "react";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

import {
  patchPekerjaanRab,
  postPekerjaanRab,
} from "../../../../../../redux/actions";

interface Props {
  isShow: boolean;
  onHide?: () => void;
  data?: any;
  id?: string | number;
  title: string;
  idKapal: string | number;
}

const Component = ({ isShow, onHide, data, id, title, idKapal }: Props) => {
  const dispatch = useDispatch();
  const { register, handleSubmit, errors } = useForm();

  const _handleSubmit = useCallback(
    (form) => {
      if (data) {
        dispatch(patchPekerjaanRab(form, idKapal, id!, onHide!));
      } else {
        dispatch(postPekerjaanRab(form, idKapal, onHide!));
      }
    },
    [dispatch, onHide, id, data, idKapal]
  );

  const _renderError = useCallback(
    (isShowError: boolean, message: string) =>
      isShowError && <div className="invalid-feedback">{message}</div>,
    []
  );

  return (
    <Modal show={isShow} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit(_handleSubmit)}>
          <div className="form-group">
            <label>Nama Pekerjaan</label>
            <input
              className={`form-control${errors.name ? " is-invalid" : ""}`}
              type="text"
              name="name"
              placeholder="Nama Pekerjaan"
              ref={register({ required: true })}
              defaultValue={(data && data.name) || ""}
            />
            {_renderError(errors.name, "Nama Pekerjaan is required")}
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
          {data ? "Save" : "Submit"}
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default memo(Component);
