import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../constants/Url";
import { GlobalStateContext } from "./GlobalStateContext";

export const GlobalState = (props) => {
  const [dataList, setDataList] = useState([]);
  const [person, setPerson] = useState([]);
  const [reset, setReset] = useState()

  useEffect(() => {
    getData();
  }, []);

  useEffect(()=>{
    sendData()
  }, [person]);
 

  const getData = async () => {
    await axios
      .get(`${BASE_URL}/user/get`)
      .then((res) => {
        setDataList(res.data);
      })
      .catch((erro) => {
        console.log(erro.mesage);
      });
  };

 const body = {firstName: person.firstName, lastName: person.lastName
  , participation: Number(person.participation)}

  const sendData = async  () => {
    if(person.firstName){
    await axios
    .post(`${BASE_URL}/user/add`, body )
    .then((res) => {
      console.log(res);
      getData()
    })
    .catch((erro) => {
      console.log(erro);
      alert(erro.error);
    });
  }
  }

  if(reset){
    axios
    .delete(`${BASE_URL}/user/table/delete`)
    .then((res)=>{
      console.log(res)
      alert("Deleted Data", res)
      setReset(false)
      getData()
    })
    .catch((erro) =>{
      console.log(erro.mesage)
    })
  }

  const data = {
    dataList,
    person,
    setPerson,
    setReset
  };

  return (
    <GlobalStateContext.Provider value={data}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};
