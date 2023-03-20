import React from 'react'
import Row from './Row'

export default function List(props) {
  return (
    <>
        <table className="pure-table pure-table-striped">
            <thead>
                <th>To-do</th>
                <th>Done?</th>
                <th></th>
            </thead>
            {props.list.map(todo => <Row todo={todo} />)}
        </table>
    </>
  )
}
