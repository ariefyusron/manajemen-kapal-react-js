import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";

import { Reducers } from "../../redux/types";
import { deleteKapal, getAllKapal, postKapal } from "../../redux/actions";
import { documentTitle } from "../../utils";

const Component = () => {
  documentTitle("Identitas Kapal");
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const kapalState = useSelector((state: Reducers) => state.kapal);
  const [modalAdd, setModalAdd] = useState(false);

  useEffect(() => {
    dispatch(getAllKapal());
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
                placeholder="name"
                ref={register}
              />
            </div>
            <div>
              <input
                type="text"
                name="length_oa"
                placeholder="length_oa"
                ref={register}
              />
            </div>
            <div>
              <input
                type="text"
                name="length_pp"
                placeholder="length_pp"
                ref={register}
              />
            </div>
            <div>
              <input
                type="text"
                name="breadth"
                placeholder="breadth"
                ref={register}
              />
            </div>
            <div>
              <input
                type="text"
                name="depth"
                placeholder="depth"
                ref={register}
              />
            </div>
            <div>
              <input
                type="text"
                name="draft"
                placeholder="draft"
                ref={register}
              />
            </div>
            <div>
              <input
                type="text"
                name="gross_tonnage"
                placeholder="gross_tonnage"
                ref={register}
              />
            </div>
            <div>
              <input
                type="text"
                name="class"
                placeholder="class"
                ref={register}
              />
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
