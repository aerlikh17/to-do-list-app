import React from 'react'

export default function Row(props) {
  return (
    <tbody>
        <tr>
            <td>{props.todo.name}</td>
            <td>{props.todo.done ? "Done" : "Not done"}</td>
            <td><button>X</button></td>
        </tr>
    </tbody>
  )
}
