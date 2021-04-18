import React, { useEffect, useMemo } from "react";
import { Modal } from "react-bootstrap";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import {ModalProgressBar} from "../../../../../../_metronic/_partials/controls";
import * as actions from "../../../_redux/pettyCashBooks/Actions";
import {useUIContext} from "../UIContext";

//pettyCashBook
//PettyCashBook

// Delete particular record.
export function DeleteDialog({ id, show, onHide }) {
  // PettyCashBooks UI Context
  const pettyCashBooksUIContext = useUIContext();
  const pettyCashBooksUIProps = useMemo(() => {
    return {
      setIds: pettyCashBooksUIContext.setIds,
      queryParams: pettyCashBooksUIContext.queryParams
    };
  }, [pettyCashBooksUIContext]);

  // PettyCashBooks Redux state
  const dispatch = useDispatch();
  const { isLoading } = useSelector(
    (state) => ({ isLoading: state.pettyCashBooks.actionsLoading }),
    shallowEqual
  );

  // if !id we should close modal
  useEffect(() => {
    if (!id) {
      onHide();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  // looking for loading/dispatch
  useEffect(() => {}, [isLoading, dispatch]);

  const deletePettyCashBook = () => {
    // server request for deleting pettyCashBook by id
    dispatch(actions.deletePettyCashBook(id)).then(() => {
      // refresh list after deletion
      dispatch(actions.fetchPettyCashBooks(pettyCashBooksUIProps.queryParams));
      // clear selections list
      pettyCashBooksUIProps.setIds([]);
      // closing delete modal
      onHide();
    });
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      {/*begin::Loading*/}
      {isLoading && <ModalProgressBar />}
      {/*end::Loading*/}
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">
          PettyCashBook Delete
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {!isLoading && (
          <span>Are you sure to permanently delete this pettyCashBook?</span>
        )}
        {isLoading && <span>PettyCashBook is deleting...</span>}
      </Modal.Body>
      <Modal.Footer>
        <div>
          <button
            type="button"
            onClick={onHide}
            className="btn btn-light btn-elevate"
          >
            Cancel
          </button>
          <> </>
          <button
            type="button"
            onClick={deletePettyCashBook}
            className="btn btn-primary btn-elevate"
          >
            Delete
          </button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}
