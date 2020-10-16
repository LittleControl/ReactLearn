import React, { Component, Fragment } from 'react'

class TodoList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            inputValue: '',
            list: []
        }
    }

    render() {
        //JSX语法要求必须存在一个根节点
        return (
            <Fragment>
                <div>TodoList </div>
                <input
                    value={this.state.inputValue}
                    onChange={this.handleInputChange.bind(this)}
                />
                <button onClick={this.handleBtnClick.bind(this)}>Add</button>
                <ul>
                    {
                        this.state.list.map((item, index) => {
                            return (
                                <li
                                    key={index}
                                    onClick={this.handleDelItem.bind(this, index)}
                                >
                                    {index}-{item}
                                </li>)
                        })
                    }
                </ul>
            </Fragment>
        )
    }

    handleInputChange(e) {
        this.setState({
            inputValue: e.target.value
        })
    }

    handleBtnClick() {
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        })
    }

    handleDelItem(index) {
        const list = [...this.state.list]
        list.splice(index, 1)
        this.setState({
            list: list
        })
    }

}

export default TodoList;
