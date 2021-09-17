import React, { useContext } from "react";
import { GlobalStateContext } from "../../global/GlobalStateContext";
import { Table } from 'reactstrap';
import { MainContainer } from "./styled";
// import { dataList } from '../../mocks/dataMocks'

export default function TableComponent (props) {
  const { dataList } = useContext(GlobalStateContext);

  const tableData = () => {
    return dataList.map((data) => (
      <tr key={data.firstName}>
        <td>{data.id}</td>
        <td>{data.firstName}</td>
        <td>{data.lastName}</td>
        <td>{data.participation}%</td>
      </tr>
    ));
  };

  return (
    <MainContainer>
{dataList[0] ? (
<Table bordered size='sm'>
      <thead>
       <tr>
          <th></th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Participation</th>
        </tr>
      </thead>
      <tbody> {tableData()}
       </tbody>
    </Table>): (<p>
       Complete the field to get the data
    </p>        
       )
    }
    </MainContainer>
  );
};

