import React, { Component, Fragment } from 'react'
import Axios from 'axios'
import TodoItem from './TodoItem'
import './todolist.css'

class TodoList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            inputValue: '',
            list: []
        }
        this.handleDelItem = this.handleDelItem.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleBtnClick = this.handleBtnClick.bind(this)
    }

    render() {
        return (
            <Fragment>
                <div>TodoList </div>
                <label htmlFor="redInput">Please Input Sth</label>
                <input
                    id="redInput"
                    className='red'
                    value={this.state.inputValue}
                    onChange={this.handleInputChange}
                    ref={(input) => { this.input = input }}
                />
                <button onClick={this.handleBtnClick}>Add</button>
                <ul ref={(ul) => { this.ul = ul }}>{this.getItems()}</ul>
            </Fragment>
        )
    }

    componentDidMount() {
        Axios.get('/api/user?ID=12345')
            .then(() => { console.log('success') })
            .catch(() => { console.log('error') })
    }

    handleInputChange(e) {
        // //e.target就是一个DOM节点
        // const value = e.target.value
        const value = this.input.value
        this.setState(() => ({
            inputValue: value
        }))
    }

    handleBtnClick() {
        this.setState((state) => ({
            list: [...state.list, state.inputValue],
            inputValue: ''
        }), () => {
            console.log(this.ul.querySelectorAll('div').length)
        })
    }

    handleDelItem(index) {
        this.setState((state) => {
            const list = [...state.list]
            list.splice(index, 1)
            return { list }
        })
    }

    getItems() {
        return this.state.list.map((item, index) => {
            return (
                <TodoItem
                    key={index}
                    item={item}
                    index={index}
                    handleDelItem={this.handleDelItem}
                />
            )
        })
    }

}

export default TodoList;
