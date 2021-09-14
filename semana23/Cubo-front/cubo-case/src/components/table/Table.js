import React from "react";
import { dataList } from '../../mocks/dataMocks'

class Table extends React.Component {
 
  render() {
    return (
      <div>
        Table
        <table>
            <thead>
            <tr>
            <th></th>
              <th>Fisrt Name</th>
              <th>Last Name</th>
              <th>Participation</th>
            </tr>
          </thead>
          <tbody>
            {dataList.map((data) => (
              <tr key={data.firstName}>
                  <td>{data.id}</td>
                <td>{data.firstName}</td>
                <td>{data.lastName}</td>
                <td>{data.participation}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
export default Table