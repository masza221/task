import './App.css';
import { Routes, Route } from "react-router-dom";
import TableComp from './components/TableComp/TableComp';
import SingleTable from "./components/SingleTable/SingleTable";
import Nav from './components/Nav/Nav';


function App() {


  return (
    <div className="app">
      <Nav></Nav>
      <Routes>
        <Route
          path={'/'}
          element={<TableComp />}>
        </Route>
        <Route
          path='/:id'
          element={<TableComp />}>
        </Route>
        <Route
          path='/product/:id'
          element={<SingleTable />}>
        </Route>
      </Routes>
    </div >
  );
}

export default App;
