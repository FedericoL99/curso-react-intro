import React from "react";

function TodoForm(){
    return(
        <form>
            <label>Escribe tu nuevo TODO</label>
            <textarea placeholder="Cortar cerbolla para el almuerzo"></textarea>
            <button className="TodoForm-button TodoForm-button--cancel">+</button>
            <button className="TodoForm-button TodoForm-button--add">+</button>
        </form> 
    );
}

export {TodoForm};