
import './App.css'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Login } from './Pages/Login';
import { Dashboard } from './Pages/Dashboard';
import { Despesas } from './Pages/Despesas';
import { Receitas } from './Pages/Receitas';
import { Relatorios } from './Pages/Relatorios';
import { AlocacaoRenda } from './Pages/AlocacaoRenda';
function App() {
  

  return (
    <>
      
      <Router>
        <Routes>

          <Route path="/" element={<Login/>}></Route>
          <Route path="/dashboard" element={<Dashboard/>}></Route>
          <Route path="/despesas" element={<Despesas/>}></Route>
          <Route path="/receitas" element={<Receitas/>}></Route>
          <Route path="/relatorios" element={<Relatorios/>}></Route>
          <Route path="/alocacaoRenda" element={<AlocacaoRenda/>}></Route>
          
        </Routes>
      </Router>
    </>
  )
}

export default App
