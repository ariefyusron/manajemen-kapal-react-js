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
  const { register, handleSubmit } = useForm();

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
              className="form-control"
              type="text"
              name="name"
              placeholder="Nama Kapal"
              ref={register}
              defaultValue={(data && data.name) || ""}
            />
          </div>

          <div className="form-group">
            <label>Tipe Kapal</label>
            {!kapalState.typeKapal.isLoading ? (
              <select
                className="form-control"
                name="kapal_type"
                ref={register}
                defaultValue={(data && data.kapal_type) || ""}
              >
                <option value="">--pilih--</option>
                {kapalState.typeKapal.list.map((item, index) => (
                  <option key={index} value={item.id}>
                    {item.name}
                  </option>
                ))}
              </select>
            ) : (
              <p>loading...</p>
            )}
          </div>

          <div className="form-group">
            <label>Length OA</label>
            <input
              className="form-control"
              type="text"
              name="length_oa"
              placeholder="length_oa (Satuan Meter)"
              ref={register}
              defaultValue={(data && data.length_oa) || ""}
            />
          </div>

          <div className="form-group">
            <label>Length PP</label>
            <input
              className="form-control"
              type="text"
              name="length_pp"
              placeholder="length_pp (Satuan Meter)"
              ref={register}
              defaultValue={(data && data.length_pp) || ""}
            />
          </div>

          <div className="form-group">
            <label>Breadth</label>
            <input
              className="form-control"
              type="text"
              name="breadth"
              placeholder="breadth (Satuan Meter)"
              ref={register}
              defaultValue={(data && data.breadth) || ""}
            />
          </div>

          <div className="form-group">
            <label>Depth</label>
            <input
              className="form-control"
              type="text"
              name="depth"
              placeholder="depth (Satuan Meter)"
              ref={register}
              defaultValue={(data && data.depth) || ""}
            />
          </div>

          <div className="form-group">
            <label>Draft</label>
            <input
              className="form-control"
              type="text"
              name="draft"
              placeholder="draft (Satuan Meter)"
              ref={register}
              defaultValue={(data && data.draft) || ""}
            />
          </div>

          <div className="form-group">
            <label>Gross Tonnage</label>
            <input
              className="form-control"
              type="text"
              name="gross_tonnage"
              placeholder="gross_tonnage (Satuan Meter)"
              ref={register}
              defaultValue={(data && data.gross_tonnage) || ""}
            />
          </div>

          <div className="form-group">
            <label>Nama Perusahaan</label>
            <input
              className="form-control"
              type="text"
              name="class"
              placeholder="Nama Perusahaan"
              ref={register}
              defaultValue={(data && data.class) || ""}
            />
          </div>

          <div className="form-group">
            <label>Tipe Survey</label>
            {!kapalState.typeSurvey.isLoading ? (
              <select
                className="form-control"
                name="survey_type"
                ref={register}
                defaultValue={(data && data.survey_type) || ""}
              >
                <option value="">--pilih--</option>
                {kapalState.typeSurvey.list.map((item, index) => (
                  <option key={index} value={item.id}>
                    {item.name}
                  </option>
                ))}
              </select>
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
