import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import useAsync from "./useAsync";
const fetchData = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = res.json();
  return data;
};
function App() {
  const { isLoading, error, result } = useAsync(fetchData, []);
  console.log(isLoading, error, result);

  if (isLoading) return <>Loading....</>;
  if (error) return <>{error}....</>;
  return (
    <>
      {result?.map((item) => {
        return <p>{item?.title}</p>;
      })}
    </>
  );
}

export default App;
