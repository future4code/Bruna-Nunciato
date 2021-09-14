import './App.css';
import Header from './components/header/Header';
import Chart from '../src/components/chart/Chart';
import Table from './components/table/Table';

function App() {
  return (
    <div className="App">
      <Header/>
      <h1>Data</h1>
      <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
      <Table/>
      <Chart />
    </div>
  );
}

export default App;
