import React, { memo, useCallback } from "react";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import { patchRab, postRab } from "../../../../../../redux/actions";
import { Reducers } from "../../../../../../redux/types";

interface Props {
  isShow: boolean;
  onHide?: () => void;
  data?: any;
  idKapal: string;
  id?: string | number;
  title: string;
}

const Component = ({ isShow, onHide, data, idKapal, title, id }: Props) => {
  const dispatch = useDispatch();
  const { register, handleSubmit, errors } = useForm();

  const rabReparasiState = useSelector((state: Reducers) => state.rabReparasi);

  const _handleSubmit = useCallback(
    form => {
      if (data) {
        dispatch(patchRab(form, idKapal, id!, onHide));
      } else {
        dispatch(postRab(form, idKapal, onHide));
      }
    },
    [dispatch, data, idKapal, onHide, id]
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
            <label>Pekerjaan</label>
            <select
              className={`form-control${
                errors.id_pekerjaan ? " is-invalid" : ""
              }`}
              name="id_pekerjaan"
              ref={register({ required: true })}
              defaultValue={(data && data.id_pekerjaan) || ""}
            >
              <option value="">--pilih--</option>
              {rabReparasiState.listPekerjaan.map((item, index) => (
                <option key={index} value={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
            {_renderError(errors.id_pekerjaan, "Pekerjaan is required")}
          </div>

          <div className="form-group">
            <label>Nama Pekerjaan</label>
            <input
              className={`form-control${
                errors.nama_pekerjaan ? " is-invalid" : ""
              }`}
              type="text"
              name="nama_pekerjaan"
              placeholder="Nama Pekerjaan"
              ref={register({ required: true })}
              defaultValue={(data && data.nama_pekerjaan) || ""}
            />
            {_renderError(errors.nama_pekerjaan, "Nama Pekerjaan is required")}
          </div>

          <div className="form-group">
            <label>Satuan</label>
            <input
              className="form-control"
              type="text"
              name="satuan"
              placeholder="Satuan"
              ref={register}
              defaultValue={(data && data.satuan) || ""}
            />
          </div>

          <div className="form-group">
            <label>DPS</label>
            <input
              className="form-control"
              type="text"
              name="dps"
              placeholder="DPS"
              ref={register}
              defaultValue={(data && data.dps) || ""}
            />
          </div>

          <div className="form-group">
            <label>SUB KONT</label>
            <input
              className="form-control"
              type="text"
              name="sub_kont"
              placeholder="SUB KONT"
              ref={register}
              defaultValue={(data && data.sub_kont) || ""}
            />
          </div>

          <div className="form-group">
            <label>Jasa Peralatan</label>
            <input
              className="form-control"
              type="text"
              name="jasa_peralatan"
              placeholder="Jasa Peralatan"
              ref={register}
              defaultValue={(data && data.jasa_peralatan) || ""}
            />
          </div>

          <div className="form-group">
            <label>Material</label>
            <input
              className="form-control"
              type="text"
              name="material"
              placeholder="Material"
              ref={register}
              defaultValue={(data && data.material) || ""}
            />
          </div>

          <div className="form-group">
            <label>Material Bantu</label>
            <input
              className="form-control"
              type="text"
              name="material_bantu"
              placeholder="Material Bantu"
              ref={register}
              defaultValue={(data && data.material_bantu) || ""}
            />
          </div>

          <div className="form-group">
            <label>Overhead</label>
            <input
              className="form-control"
              type="text"
              name="overhead"
              placeholder="Overhead"
              ref={register}
              defaultValue={(data && data.overhead) || ""}
            />
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

Component.defaultProps = {
  type: "pengedokan"
};

export default memo(Component);
