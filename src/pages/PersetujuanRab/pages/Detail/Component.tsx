import React, { useCallback, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { Reducers } from "../../../../redux/types";
import {
  getAllPekerjaanRab,
  getAllRab,
  getKapal,
  getPersetujuanRab
} from "../../../../redux/actions";
import { maskedMoney } from "../../../../utils";
import { Col, Container, Row } from "../../../../components";
import { Form } from "./components";

const Component = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();

  const [modalEdit, setModalEdit] = useState(false);
  const { rabReparasiState, kapalState, persetujuanRab } = useSelector(
    (state: Reducers) => ({
      rabReparasiState: state.rabReparasi,
      kapalState: state.kapal,
      persetujuanRab: state.persetujuanRab
    }),
    shallowEqual
  );

  useEffect(() => {
    dispatch(getAllPekerjaanRab(id!));
    dispatch(getAllRab(id!));
    dispatch(getKapal(id!));
    dispatch(getPersetujuanRab(id!));
  }, [dispatch, id]);

  const _sum = useCallback(
    (item: any[], key: string) =>
      item.reduce((a, b) => parseInt(a, 10) + (parseInt(b[key], 10) || 0), 0),
    []
  );

  const totalBiayaTenagaKerja =
    _sum(rabReparasiState.list, "dps") +
    _sum(rabReparasiState.list, "sub_kont");

  const totalBiayaBahanBaku = _sum(rabReparasiState.list, "material");

  const totalBiayaOverhead =
    _sum(rabReparasiState.list, "overhead") +
    _sum(rabReparasiState.list, "material_bantu") +
    _sum(rabReparasiState.list, "jasa_peralatan");

  const totalBiayaTidakLangsung = Math.ceil(
    (totalBiayaTenagaKerja + totalBiayaBahanBaku + totalBiayaOverhead) * 0.025
  );

  const totalEstimasi =
    totalBiayaTenagaKerja +
    totalBiayaBahanBaku +
    totalBiayaOverhead +
    totalBiayaTidakLangsung;

  const _exportPdf = () => {
    const printContents = document.getElementById("print")!.innerHTML;

    document.body.innerHTML = printContents;
    window.print();
    window.location.reload();
  };

  return (
    <Container
      isLoading={
        rabReparasiState.isLoading ||
        kapalState.detailKapal.isLoading ||
        persetujuanRab.isLoading
      }
    >
      <Row
        style={{ marginBottom: 20, marginTop: 10 }}
        className="align-items-center"
      >
        <Col size={11}>
          <h1>Persetujuan Rencana Anggaran Biaya</h1>
        </Col>
        <Col size={1}>
          <button
            type="button"
            className="btn btn-outline-primary my-2 my-sm-0"
            onClick={() => history.goBack()}
            style={{ textDecoration: "underline" }}
          >
            Back
          </button>
        </Col>
      </Row>

      <div style={{ width: "100%" }} id="print">
        <Row style={{ marginBottom: 20 }}>
          <Col size={10}>
            <table style={{ width: "100%" }}>
              <tr>
                <th scope="col" colSpan={5}>
                  DATA-DATA KAPAL :
                </th>
              </tr>
              <tr>
                <td> </td>
                <td>Client</td>
                <td>:</td>
                <td colSpan={2}>{kapalState.detailKapal.data.class}</td>
              </tr>
              <tr>
                <td> </td>
                <td>Nama</td>
                <td>:</td>
                <td colSpan={2}>{kapalState.detailKapal.data.name}</td>
              </tr>
              <tr>
                <td style={{ width: "5%" }}> </td>
                <td style={{ width: "10%" }}>Loa</td>
                <td style={{ width: "2%" }}>:</td>
                <td style={{ width: "5%" }}>
                  {kapalState.detailKapal.data.length_oa}
                </td>
                <td>M</td>
              </tr>
              <tr>
                <td> </td>
                <td>Lpp</td>
                <td>:</td>
                <td>{kapalState.detailKapal.data.length_pp}</td>
                <td>M</td>
              </tr>
              <tr>
                <td> </td>
                <td>Breadth</td>
                <td>:</td>
                <td>{kapalState.detailKapal.data.breadth}</td>
                <td>M</td>
              </tr>
              <tr>
                <td> </td>
                <td>Depth</td>
                <td>:</td>
                <td>{kapalState.detailKapal.data.depth}</td>
                <td>M</td>
              </tr>
              <tr>
                <td> </td>
                <td>Draft</td>
                <td>:</td>
                <td>{kapalState.detailKapal.data.draft}</td>
                <td>M</td>
              </tr>
              <tr>
                <td> </td>
                <td>GRT</td>
                <td>:</td>
                <td>{kapalState.detailKapal.data.gross_tonnage}</td>
                <td>TON</td>
              </tr>
              <tr>
                <td> </td>
                <td>Survey</td>
                <td>:</td>
                <td colSpan={2}>
                  {kapalState.detailKapal.data.SurveyType &&
                    kapalState.detailKapal.data.SurveyType.name}
                </td>
              </tr>
              <tr>
                <td> </td>
                <td>Class</td>
                <td>:</td>
                <td colSpan={2}>
                  {kapalState.detailKapal.data.KapalType &&
                    kapalState.detailKapal.data.KapalType.name}
                </td>
              </tr>
            </table>
          </Col>
          <Col size={2} className="no-print">
            <button
              type="button"
              className="btn btn-outline-success my-2 my-sm-0"
              style={{ textDecoration: "underline" }}
              onClick={() => setModalEdit(true)}
            >
              Edit
            </button>
          </Col>
        </Row>

        <Row style={{ marginBottom: 40 }} className="align-items-end">
          <Col>
            <table style={{ width: "60%" }}>
              <tr>
                <th scope="col" colSpan={5}>
                  ASUMSI YANG DIPAKAI :
                </th>
              </tr>
              <tr>
                <td style={{ width: "2%" }}>1.</td>
                <td colSpan={4}>Penyelesaian Proyek :</td>
              </tr>
              <tr>
                <td style={{ width: "2%" }}> </td>
                <td style={{ width: "30%" }}>Kapal di atas dok</td>
                <td style={{ width: "2%" }}>:</td>
                <td style={{ width: "5%" }}>{persetujuanRab.data.dok}</td>
                <td>Hari</td>
              </tr>
              <tr>
                <td style={{ width: "2%" }}> </td>
                <td style={{ width: "30%" }}>Kapal floating</td>
                <td style={{ width: "2%" }}>:</td>
                <td style={{ width: "5%" }}>{persetujuanRab.data.floating}</td>
                <td>Hari</td>
              </tr>
              <tr>
                <td>2.</td>
                <td colSpan={4}>Syarat Pembayaran :</td>
              </tr>
              <tr style={{ verticalAlign: "top" }}>
                <td style={{ width: "2%" }}> </td>
                <td style={{ width: "30%" }}>Tahap Pertama</td>
                <td style={{ width: "2%" }}>:</td>
                <td colSpan={2}>{persetujuanRab.data.pertama}</td>
              </tr>
              <tr style={{ verticalAlign: "top" }}>
                <td style={{ width: "2%" }}> </td>
                <td style={{ width: "30%" }}>Tahap Kedua</td>
                <td style={{ width: "2%" }}>:</td>
                <td colSpan={2}>{persetujuanRab.data.kedua}</td>
              </tr>
              <tr style={{ verticalAlign: "top" }}>
                <td style={{ width: "2%" }}> </td>
                <td style={{ width: "30%" }}>Tahap Ketiga</td>
                <td style={{ width: "2%" }}>:</td>
                <td colSpan={2}>{persetujuanRab.data.ketiga}</td>
              </tr>
              <tr style={{ verticalAlign: "top" }}>
                <td style={{ width: "2%" }}> </td>
                <td style={{ width: "30%" }}>Tahap Keempat</td>
                <td style={{ width: "2%" }}>:</td>
                <td colSpan={2}>{persetujuanRab.data.keempat}</td>
              </tr>
              <tr>
                <td style={{ width: "2%" }}>3.</td>
                <td style={{ width: "30%" }}>Estimasi RAB</td>
                <td style={{ width: "2%" }}>:</td>
                <td colSpan={2}>{maskedMoney(totalEstimasi)}</td>
              </tr>
            </table>
          </Col>
        </Row>
      </div>

      <Row style={{ marginBottom: 60 }} justifyContent="end">
        <Col size={2}>
          <button type="button" className="btn btn-dark" onClick={_exportPdf}>
            export to pdf
          </button>
        </Col>
      </Row>

      <Form
        isShow={modalEdit}
        onHide={() => setModalEdit(false)}
        title="Edit"
        idKapal={id!}
        data={persetujuanRab.data}
      />
    </Container>
  );
};

export default Component;
