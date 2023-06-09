import React from 'react'
import List from '../components/List'
import Row from '../components/Row'

export default function Index(props) {
  return (
    <>
        <h1>To-do List</h1>
        <form className="pure-form" onSubmit={props.handleSubmit}>
            <label>Name:</label>
            <input type="text" name="name" value={props.name} onChange={props.handleChange}/>
            <button className="pure-button">Add to-do</button>
        </form>
        <br></br>
        <hr></hr>
        <List list={props.list} handleDelete={props.handleDelete}></List>
    </>
  )
}
