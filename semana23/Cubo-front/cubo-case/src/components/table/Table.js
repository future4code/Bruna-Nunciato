import React, { useContext } from "react";
import { GlobalStateContext } from "../../global/GlobalStateContext";
// import { dataList } from '../../mocks/dataMocks'

const Table = () => {
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
    <div>
      {dataList[0] ? (
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Fisrt Name</th>
              <th>Last Name</th>
              <th>Participation</th>
            </tr>
          </thead>
          <tbody>{tableData()}</tbody>
        </table>
      ) : (
        <p>Complete the data </p>
      )}
    </div>
  );
};

export default Table;
