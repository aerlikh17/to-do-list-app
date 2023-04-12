import './App.css';
import Index from './pages/Index';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {

  const [list, setList] = useState([])

  const [id, setId] = useState('')
  const [name, setName] = useState('')
  const [clicked, setClicked] = useState(false)

  useEffect(() => {
    async function fetchData(){
      let res = await axios.get('/api/todos')
      setList(res.data)
    }
    fetchData()
  }, [clicked])

  const handleChange = (evt) => {
    evt.preventDefault()
    setName(evt.target.value)
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    setId((Math.floor(Math.random()*1000000)).toString())
    setList([...list, { id, name, done: false }])
    setName('')
    axios.post('/api/todos', {id, name, done: false})
    setClicked(!clicked)
  }

  const handleDelete = (id) => {
    setList(list.filter(todo => todo.id !== id))
    axios.delete(`/api/todos/${id}`)
    setClicked(!clicked)
  }

  return (
    <div className="App">
      <Index list={list} handleSubmit={handleSubmit} handleChange={handleChange} name={name} handleDelete={handleDelete}/>
    </div>
  );
}

export default App;
