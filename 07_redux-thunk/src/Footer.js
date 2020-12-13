import React, { Component } from 'react'
import store from './store'
import { clearCompletedAction } from './store/actionCreators'

class Footer extends Component {
    constructor(props) {
        super(props)
        this.state = store.getState()
        this.handleStoreChange = this.handleStoreChange.bind(this)
        this.clearCompleted = this.clearCompleted.bind(this)
        store.subscribe(this.handleStoreChange)
    }
    render() {
        if (this.state.list.length === 0) {
            return null
        }
        return (
            <footer className="footer">
                <span className="todo-count"><strong>{this.state.list.length - this.state.completed.length}</strong> item left</span>
                <ul className="filters">
                    <li>
                        <a className="selected" href="#/">All</a>
                    </li>
                    <li>
                        <a href="#/active">Active</a>
                    </li>
                    <li>
                        <a href="#/completed">Completed</a>
                    </li>
                </ul>
                <button
                    className="clear-completed"
                    onClick={this.clearCompleted}
                >Clear completed</button>
            </footer>
        )
    }
    handleStoreChange() {
        this.setState(store.getState())
    }
    clearCompleted() {
        const action = clearCompletedAction()
        store.dispatch(action)
    }
}

export default Footer;
