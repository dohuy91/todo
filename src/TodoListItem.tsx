import React, { Component } from 'react'

interface Props{
    todo: Todo;
}

export class TodoListItem extends Component<Props> {
    render() {
        const todo = this.props.todo;
        return (
            <li>
                <label style={{ textDecoration: todo.isCompleted ? 'line-through' : undefined}}>
                    <input type="checkbox" checked={todo.isCompleted} /> {todo.text}
                </label>
            </li>
        )
    }
}

export default TodoListItem
