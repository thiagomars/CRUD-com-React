import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './components/pages/Home'
import Contatos from './components/pages/Contatos'
import AddContato from './components/pages/AddContato'
import TodosContato from './components/pages/TodosContato'
import Alterar from './components/pages/Alterar'

import Container from './components/layout/Container'
import Navbar from './components/layout/Navbar'


function App() {

  return (
    <Router>
      <Navbar />
      <Container>
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/contatos' element={<Contatos />} />
            <Route exact path='/addContato' element={<AddContato />} />
            <Route exact path='/todosContato' element={<TodosContato />} />
            <Route exact path='/alterar' element={<Alterar />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
