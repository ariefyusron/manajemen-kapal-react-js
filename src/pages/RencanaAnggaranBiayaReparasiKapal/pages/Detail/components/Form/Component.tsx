import React, { memo, useCallback } from "react";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

import {
  patchKontruksiBadanKapal,
  patchPelayananUmum,
  patchPengedokan,
  postKontruksiBadanKapal,
  postPelayananUmum,
  postPengedokan
} from "../../../../../../redux/actions";

interface Props {
  isShow: boolean;
  onHide?: () => void;
  data?: any;
  idKapal: string;
  id?: string | number;
  title: string;
  type?: "pengedokan" | "pelayananUmum" | "kontruksiBadanKapal";
}

const Component = ({
  isShow,
  onHide,
  data,
  idKapal,
  title,
  type,
  id
}: Props) => {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const _handleSubmit = useCallback(
    form => {
      if (data) {
        if (type === "pengedokan") {
          dispatch(patchPengedokan(form, idKapal, id!, onHide));
        } else if (type === "pelayananUmum") {
          dispatch(patchPelayananUmum(form, idKapal, id!, onHide));
        } else {
          dispatch(patchKontruksiBadanKapal(form, idKapal, id!, onHide));
        }
      } else if (type === "pengedokan") {
        dispatch(postPengedokan(form, idKapal, onHide));
      } else if (type === "pelayananUmum") {
        dispatch(postPelayananUmum(form, idKapal, onHide));
      } else {
        dispatch(postKontruksiBadanKapal(form, idKapal, onHide));
      }
    },
    [dispatch, data, idKapal, type, onHide, id]
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
              className="form-control"
              type="text"
              name="nama_pekerjaan"
              placeholder="Nama Pekerjaan"
              ref={register}
              defaultValue={(data && data.nama_pekerjaan) || ""}
            />
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
