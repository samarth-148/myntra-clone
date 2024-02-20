/** @format */

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemsActions } from "../store/itemsSlice";
import { fetchStatusActions } from "../store/fetchStatusSlice";
import Loader from "./Loader";

const FetchInitialData = () => {
  const { isFetched, currentlyFetching } = useSelector(
    (state) => state.fetchStatus
  );
  const dispatch = useDispatch();
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    if (isFetched === false) {
      dispatch(fetchStatusActions.isCurrentlyFetching());
      fetch("http://localhost:8080/items", { signal })
        .then((res) => res.json())
        .then(({ items }) => {
          dispatch(itemsActions.addInitials(items[0]));
          dispatch(fetchStatusActions.isDataFetched());
        });
    }
  }, [isFetched]);
  return isFetched === false && <Loader />;
};
export default FetchInitialData;
