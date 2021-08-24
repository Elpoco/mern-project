import React, { Component, useEffect, useState } from "react";

export default function IndexPage({ res }) {
  const [data, setData] = useState([]);
  console.log(res);

  //   var jsonData = [];

  setInterval(() => {
    res((r) => {
      //   jsonData = r;
      setData(r);
      console.log(r);
    });
  }, 3000);

  useEffect(() => {
    setData("tete");
  }, []);

  return (
    <div>
      <h1>Hello world</h1>
      <div>{data}</div>
    </div>
  );
}
