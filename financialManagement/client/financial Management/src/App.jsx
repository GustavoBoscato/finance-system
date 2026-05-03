
import './App.css'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Login } from './Pages/Login';
import { Dashboard } from './Pages/Dashboard';
import { Despesas } from './Pages/Despesas';
import { Receitas } from './Pages/Receitas';
import { Relatorios } from './Pages/Relatorios';
import { AlocacaoRenda } from './Pages/AlocacaoRenda';
import { Home } from './Pages/Home';
import { Metas } from './Pages/Metas';
import { EstruturaPrincipal } from './Pages/EstruturaPrincipal';
function App() {
  

  return (
    <>
      
      <Router>
        <Routes>
          <Route element={<EstruturaPrincipal/>}>
          
          <Route path="/" element={<Home/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/dashboard" element={<Dashboard/>}></Route>
          <Route path="/despesas" element={<Despesas/>}></Route>
          <Route path="/receitas" element={<Receitas/>}></Route>
          <Route path="/relatorios" element={<Relatorios/>}></Route>
          <Route path="/alocacaoRenda" element={<AlocacaoRenda/>}></Route>
          <Route path="/metas" element={<Metas/>}></Route>
          </Route>
          
        </Routes>
      </Router>
    </>
  )
}

export default App
