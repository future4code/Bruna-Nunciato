import React, { useContext } from "react";
import { Doughnut } from "react-chartjs-2";
import { ContainerChart } from "./styled";
import { GlobalStateContext } from "../../global/GlobalStateContext";

const Chart = () => {
    const { dataList } = useContext(GlobalStateContext);

    const dataName =dataList.map(data=>{ 
      const names =[]
     names.push(data.firstName +" "+ data.lastName)
     return names[0]
      })
      
      const dataParticipation = dataList.map(data=>{
        return`${data.participation}`
      })    

  const chartData = {
    labels: dataName,
    datasets: [
      {
        data: dataParticipation,
        backgroundColor: ["#15BA99",  "rgb(233, 74, 52)", "#9C56B8","rgb(44, 151, 222)", "rgb(189, 195, 199)","yellow", "pink"],
      },
    ],
  };

  return (
    <ContainerChart>
      <Doughnut data={chartData} options={{ maintainAspectRatio: false }} />
    </ContainerChart>
  );
};
export default Chart;
