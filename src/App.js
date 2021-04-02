import React from 'react';
import './App.scss';
import {BasicTable} from "./components/BasicTable";
import {SortingTable} from "./components/SortingTable";
import {PaginationTable} from "./components/PaginationTable";

class App extends React.Component {

  render() {
return(
  <div>
    <SortingTable/>
  </div>
)

  }
}

export default App;
