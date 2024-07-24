import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  storeApiData,
  setMessage,
  selectMessage,
} from "./features/todos/todosSlice";
import Interface from "./components/Interface";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const dispatch = useDispatch();
  const message = useSelector(selectMessage);

  const getApiData = async () => {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/todos`
    );
    data.length = 10;
    dispatch(storeApiData(data));
  };

  useEffect(() => {
    getApiData();
  }, []);

  // useEffect(() => {
  //   if (message) toast(message);

  //   dispatch(setMessage(""));
  // }, [message]);

  console.log("Hello World");

  return (
    <>
      <h1>Dev Version</h1>
      {message}
      <ToastContainer />
      <Interface />
    </>
  );
}

export default App;
