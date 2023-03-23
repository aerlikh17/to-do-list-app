import './App.css';
import Index from './pages/Index';
import { useState } from 'react';

function App() {

  const [list, setList] = useState([
    {
      id: '1',
      name: 'Learn MERN',
      done: false
    }
  ])

  const [id, setId] = useState('')
  const [name, setName] = useState('')

  const handleChange = (evt) => {
    evt.preventDefault()
    setName(evt.target.value)
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    setId((Math.floor(Math.random()*1000000)).toString())
    setList([...list, { id, name, done: false }])
    setName('')
  }

  const handleDelete = (id) => {
    setList(list.filter(todo => todo.id !== id))
  }

  return (
    <div className="App">
      <Index list={list} handleSubmit={handleSubmit} handleChange={handleChange} name={name} handleDelete={handleDelete}/>
    </div>
  );
}

export default App;
