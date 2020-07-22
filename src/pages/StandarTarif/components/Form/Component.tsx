import React, { memo, useCallback } from "react";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

import { patchStandarTarif, postStandarTarif } from "../../../../redux/actions";

interface Props {
  isShow: boolean;
  onHide?: () => void;
  data?: any;
  id?: string | number;
  title: string;
}

const Component = ({ isShow, onHide, data, id, title }: Props) => {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const _handleSubmit = useCallback(
    form => {
      if (data) {
        dispatch(patchStandarTarif(form, id!, onHide!));
      } else {
        dispatch(postStandarTarif(form, onHide!));
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
            <label>Item Pekerjaan</label>
            <input
              className="form-control"
              type="text"
              name="item_pekerjaan"
              placeholder="Item Pekerjaan"
              ref={register}
              defaultValue={(data && data.item_pekerjaan) || ""}
            />
          </div>

          <div className="form-group">
            <label>Jam Orang</label>
            <input
              className="form-control"
              type="text"
              name="jam_orang"
              placeholder="Jam Orang"
              ref={register}
              defaultValue={(data && data.jam_orang) || ""}
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
            <label>Peralatan</label>
            <input
              className="form-control"
              type="text"
              name="peralatan"
              placeholder="Peralatan"
              ref={register}
              defaultValue={(data && data.peralatan) || ""}
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

          <div className="form-group">
            <label>Standar Tarif</label>
            <input
              className="form-control"
              type="text"
              name="standar_tarif"
              placeholder="Standar Tarif"
              ref={register}
              defaultValue={(data && data.standar_tarif) || ""}
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

export default memo(Component);
