import React, { memo, useCallback } from "react";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import { patchKapal, postKapal } from "../../../../redux/actions";
import { Reducers } from "../../../../redux/types";

interface Props {
  isShow: boolean;
  onHide?: () => void;
  data?: any;
  id?: number;
  title: string;
}

const Component = ({ isShow, onHide, data, id, title }: Props) => {
  const dispatch = useDispatch();
  const { register, handleSubmit, errors } = useForm();

  const kapalState = useSelector((state: Reducers) => state.kapal);

  const _handleSubmit = useCallback(
    form => {
      if (data) {
        dispatch(patchKapal(form, id!, onHide!));
      } else {
        dispatch(postKapal(form, onHide!));
      }
    },
    [dispatch, onHide, id, data]
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
            <label>Nama Kapal</label>
            <input
              className={`form-control${errors.name ? " is-invalid" : ""}`}
              type="text"
              name="name"
              placeholder="Nama Kapal"
              ref={register({ required: true })}
              defaultValue={(data && data.name) || ""}
            />
            {_renderError(errors.name, "Nama Kapal is required")}
          </div>

          <div className="form-group">
            <label>Tipe Kapal</label>
            {!kapalState.typeKapal.isLoading ? (
              <>
                <select
                  className={`form-control${
                    errors.kapal_type ? " is-invalid" : ""
                  }`}
                  name="kapal_type"
                  ref={register({ required: true })}
                  defaultValue={(data && data.kapal_type) || ""}
                >
                  <option value="">--pilih--</option>
                  {kapalState.typeKapal.list.map((item, index) => (
                    <option key={index} value={item.id}>
                      {item.name}
                    </option>
                  ))}
                </select>
                {_renderError(errors.kapal_type, "Kapal Type is required")}
              </>
            ) : (
              <p>loading...</p>
            )}
          </div>

          <div className="form-group">
            <label>Length OA</label>
            <input
              className={`form-control${errors.length_oa ? " is-invalid" : ""}`}
              type="text"
              name="length_oa"
              placeholder="length_oa (Satuan Meter)"
              ref={register({ required: true })}
              defaultValue={(data && data.length_oa) || ""}
            />
            {_renderError(errors.length_oa, "Length_oa is required")}
          </div>

          <div className="form-group">
            <label>Length PP</label>
            <input
              className={`form-control${errors.length_pp ? " is-invalid" : ""}`}
              type="text"
              name="length_pp"
              placeholder="length_pp (Satuan Meter)"
              ref={register({ required: true })}
              defaultValue={(data && data.length_pp) || ""}
            />
            {_renderError(errors.length_pp, "Length_pp is required")}
          </div>

          <div className="form-group">
            <label>Breadth</label>
            <input
              className={`form-control${errors.breadth ? " is-invalid" : ""}`}
              type="text"
              name="breadth"
              placeholder="breadth (Satuan Meter)"
              ref={register({ required: true })}
              defaultValue={(data && data.breadth) || ""}
            />
            {_renderError(errors.breadth, "Breadth is required")}
          </div>

          <div className="form-group">
            <label>Depth</label>
            <input
              className={`form-control${errors.depth ? " is-invalid" : ""}`}
              type="text"
              name="depth"
              placeholder="depth (Satuan Meter)"
              ref={register({ required: true })}
              defaultValue={(data && data.depth) || ""}
            />
            {_renderError(errors.depth, "Depth is required")}
          </div>

          <div className="form-group">
            <label>Draft</label>
            <input
              className={`form-control${errors.draft ? " is-invalid" : ""}`}
              type="text"
              name="draft"
              placeholder="draft (Satuan Meter)"
              ref={register({ required: true })}
              defaultValue={(data && data.draft) || ""}
            />
            {_renderError(errors.draft, "Draft is required")}
          </div>

          <div className="form-group">
            <label>Gross Tonnage</label>
            <input
              className={`form-control${
                errors.gross_tonnage ? " is-invalid" : ""
              }`}
              type="text"
              name="gross_tonnage"
              placeholder="gross_tonnage (Satuan Meter)"
              ref={register({ required: true })}
              defaultValue={(data && data.gross_tonnage) || ""}
            />
            {_renderError(errors.gross_tonnage, "Gross_tonnage is required")}
          </div>

          <div className="form-group">
            <label>Nama Perusahaan</label>
            <input
              className={`form-control${errors.class ? " is-invalid" : ""}`}
              type="text"
              name="class"
              placeholder="Nama Perusahaan"
              ref={register({ required: true })}
              defaultValue={(data && data.class) || ""}
            />
            {_renderError(errors.class, "Nama Perusahaan is required")}
          </div>

          <div className="form-group">
            <label>Tahun</label>
            <input
              className={`form-control${errors.tahun ? " is-invalid" : ""}`}
              type="text"
              name="tahun"
              placeholder="Tahun"
              ref={register({ required: true })}
              defaultValue={(data && data.tahun) || ""}
            />
            {_renderError(errors.tahun, "Tahun is required")}
          </div>

          <div className="form-group">
            <label>Tipe Survey</label>
            {!kapalState.typeSurvey.isLoading ? (
              <>
                <select
                  className={`form-control${
                    errors.survey_type ? " is-invalid" : ""
                  }`}
                  name="survey_type"
                  ref={register({ required: true })}
                  defaultValue={(data && data.survey_type) || ""}
                >
                  <option value="">--pilih--</option>
                  {kapalState.typeSurvey.list.map((item, index) => (
                    <option key={index} value={item.id}>
                      {item.name}
                    </option>
                  ))}
                </select>
                {_renderError(errors.survey_type, "Survey Type is required")}
              </>
            ) : (
              <p>loading...</p>
            )}
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
