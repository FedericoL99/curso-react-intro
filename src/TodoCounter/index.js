import React from "react"
import "./TodoCounter.css"
import { TodoContext } from "../TodoContext"

const TodoCounter = () => {
  const {
      completedTodos,
      totalTodos,
  } = React.useContext(TodoContext)
  return (
    <h1 className="TodoCounter"> 
        {totalTodos !== 0 ? (
          <span>
            Has completado {completedTodos} de {totalTodos} TODOs
          </span>
        ) : (
          <span>Tareas completadas</span>
        )}
    </h1>
  )
}

export { TodoCounter }
