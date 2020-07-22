import React, { memo, useCallback } from "react";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

import { patchPersetujuanRab } from "../../../../../../redux/actions";

interface Props {
  isShow: boolean;
  onHide?: () => void;
  data?: any;
  idKapal: string;
  title: string;
}

const Component = ({ isShow, onHide, data, idKapal, title }: Props) => {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const _handleSubmit = useCallback(
    form => {
      dispatch(patchPersetujuanRab(form, idKapal, onHide));
    },
    [idKapal, dispatch, onHide]
  );

  return (
    <Modal show={isShow} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit(_handleSubmit)}>
          <h5 style={{ marginBottom: 10, marginTop: 20 }}>
            1. Penyelesaian Proyek
          </h5>
          <div className="form-group">
            <label>Kapal di atas dok</label>
            <input
              className="form-control"
              type="text"
              name="dok"
              placeholder="Kapal di atas dok (Hari)"
              ref={register}
              defaultValue={(data && data.dok) || ""}
            />
          </div>

          <div className="form-group">
            <label>Kapal floating</label>
            <input
              className="form-control"
              type="text"
              name="floating"
              placeholder="Kapal floating (Hari)"
              ref={register}
              defaultValue={(data && data.floating) || ""}
            />
          </div>

          <h5 style={{ marginBottom: 10, marginTop: 30 }}>
            2. Syarat Pembayaran
          </h5>
          <div className="form-group">
            <label>Tahap Pertama</label>
            <textarea
              className="form-control"
              name="pertama"
              placeholder="Tahap Pertama"
              ref={register}
              defaultValue={(data && data.pertama) || ""}
            />
          </div>

          <div className="form-group">
            <label>Tahap Kedua</label>
            <textarea
              className="form-control"
              name="kedua"
              placeholder="Tahap Kedua"
              ref={register}
              defaultValue={(data && data.kedua) || ""}
            />
          </div>

          <div className="form-group">
            <label>Tahap Ketiga</label>
            <textarea
              className="form-control"
              name="ketiga"
              placeholder="Tahap Ketiga"
              ref={register}
              defaultValue={(data && data.ketiga) || ""}
            />
          </div>

          <div className="form-group">
            <label>Tahap Keempat</label>
            <textarea
              className="form-control"
              name="keempat"
              placeholder="Tahap Keempat"
              ref={register}
              defaultValue={(data && data.keempat) || ""}
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
