import React, { Component } from 'react'
import store from './store'
import { changeInputValueAction, addTodoItemAction } from './store/actionCreators'

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = store.getState()
        this.handleStoreChange = this.handleStoreChange.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleKeyUp = this.handleKeyUp.bind(this)
        store.subscribe(this.handleStoreChange)
    }
    render() {
        return (
            <header className="header">
                <h1>todos</h1>
                <input
                    className="new-todo"
                    placeholder="What needs to be done?"
                    value={this.state.inputValue}
                    onKeyUp={this.handleKeyUp}
                    onChange={this.handleInputChange}
                    autoFocus
                />
            </header>
        )
    }
    handleStoreChange() {
        this.setState(store.getState())
    }
    handleInputChange(e) {
        const action = changeInputValueAction(e.target.value)
        store.dispatch(action)
    }
    handleKeyUp(e) {
        if (e.keyCode === 13) {
            const action = addTodoItemAction()
            store.dispatch(action)
        }
    }
}

export default Header;
