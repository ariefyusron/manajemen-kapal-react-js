import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";

import { Reducers } from "../../redux/types";
import {
  deleteKapal,
  getAllKapal,
  getTypeKapal,
  getTypeSurvey,
  postKapal
} from "../../redux/actions";
import { documentTitle } from "../../utils";

const Component = () => {
  documentTitle("Identitas Kapal");
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const kapalState = useSelector((state: Reducers) => state.kapal);
  const [modalAdd, setModalAdd] = useState(false);

  useEffect(() => {
    dispatch(getAllKapal());
    dispatch(getTypeSurvey());
    dispatch(getTypeKapal());
  }, [dispatch]);

  const _addKapal = useCallback(
    form => {
      dispatch(postKapal(form, () => setModalAdd(false)));
    },
    [dispatch]
  );

  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: 1 }}>
        <h1>Identitas Kapal</h1>
        <button type="button" onClick={() => setModalAdd(true)}>
          Add kapal
        </button>
        <br />
        <br />

        {!kapalState.kapal.isLoading ? (
          <table>
            {kapalState.kapal.list.map((item, index) => (
              <tr key={index}>
                <td>{`${index + 1}.`}</td>
                <td>{item.name}</td>
                <td>
                  <button type="button">edit</button>
                </td>
                <td>
                  <button
                    type="button"
                    onClick={() => dispatch(deleteKapal(item.id))}
                  >
                    delete
                  </button>
                </td>
              </tr>
            ))}
          </table>
        ) : (
          <p>loading.div....</p>
        )}
      </div>

      {modalAdd && (
        <div style={{ flex: 1 }}>
          <h1>Form Add Kapal</h1>
          <br />
          <br />
          <form onSubmit={handleSubmit(_addKapal)}>
            <div>
              <input
                type="text"
                name="name"
                placeholder="Nama Kapal"
                ref={register}
              />
            </div>
            <div>
              {!kapalState.typeKapal.isLoading ? (
                <select name="kapal_type" ref={register}>
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
            <div>
              <input
                type="text"
                name="length_oa"
                placeholder="length_oa (Satuan Meter)"
                ref={register}
              />
            </div>
            <div>
              <input
                type="text"
                name="length_pp"
                placeholder="length_pp (Satuan Meter)"
                ref={register}
              />
            </div>
            <div>
              <input
                type="text"
                name="breadth"
                placeholder="breadth (Satuan Meter)"
                ref={register}
              />
            </div>
            <div>
              <input
                type="text"
                name="depth"
                placeholder="depth (Satuan Meter)"
                ref={register}
              />
            </div>
            <div>
              <input
                type="text"
                name="draft"
                placeholder="draft (Satuan Meter)"
                ref={register}
              />
            </div>
            <div>
              <input
                type="text"
                name="gross_tonnage"
                placeholder="gross_tonnage (Satuan Meter)"
                ref={register}
              />
            </div>
            <div>
              <input
                type="text"
                name="class"
                placeholder="Nama Perusahaan"
                ref={register}
              />
            </div>
            <div>
              {!kapalState.typeSurvey.isLoading ? (
                <select name="survey_type" ref={register}>
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

            <div>
              <button type="button" onClick={() => setModalAdd(false)}>
                Close
              </button>
              <button type="button" onClick={handleSubmit(_addKapal)}>
                Add
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Component;
