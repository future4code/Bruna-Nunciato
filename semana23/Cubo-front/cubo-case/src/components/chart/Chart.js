import React, {useState} from "react";
import { Doughnut } from "react-chartjs-2";
import { ContainerChart } from "./styled";
import { dataList } from "../../mocks/dataMocks";

const Chart = () => {
    const [fullName, setFullName] = useState({})
  const chartData = {
    labels: ["Brasil", "Estados Unidos", "Belgica", "Holanda"],
    datasets: [
      {
        label: "Population",
        data: [121, 323, 434, 541],
        backgroundColor: ["blue", "orange", "blue", "yellow"],
      },
    ],
  };
//    const fullNames = [];
//    console.log(dataList)
//      for (let names of dataList.firstName) {fullNames.push(names);
//     dataList.forEach((name) => {
//       fullNames.push(name.lastName);
//     })}

//    dataList.map(data=>{
//        setFullName(data.firstName)
//    })


  //   chartInfo =  dataList.map(data=>{
  //       return (  <>
  //      chartData: [labels: data.firstName ],
  //       datasets:[
  //           {
  //               label: 'Population',
  //               data:[ data.participation
  //               ],
  //               backgroundColor: [

  //               ]}]
  //       ) </>
  //    })

  //     // static defaultProps = {
  //     displayTitle: true,
  //     displayLegend: true,
  //     legendPosition: 'right',
  //     location: 'City'
  // }

  return (
    <ContainerChart> {console.log(`fim`, fullName)}
      Chart
      <Doughnut data={chartData} options={{ maintainAspectRatio: false }} />
    </ContainerChart>
  );
};
export default Chart;
