import React, { Component, Fragment } from 'react'
import classNames from 'classnames'
import Header from './Header'
import Footer from './Footer'
import store from './store'
import {
    delTodoItemAction,
    toggleItemAction,
    toggleEditAction,
    changeItemAction,
    changeEditAction,
    toggleAllAction,
    getThunkTest
} from './store/actionCreators'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = store.getState()
        this.handleStoreChange = this.handleStoreChange.bind(this)
        this.getTodoItems = this.getTodoItems.bind(this)
        this.toggleAll = this.toggleAll.bind(this)
        store.subscribe(this.handleStoreChange)
    }
    componentDidMount() {
        const action = getThunkTest()
        console.log(action)
        store.dispatch(action)
    }
    render() {
        return (
            <Fragment>
                <Header />
                <div className="main">
                    <input
                        id="toggle-all"
                        className="toggle-all"
                        type="checkbox"
                        onClick={this.toggleAll}
                    />
                    <label htmlFor="toggle-all">Mark all as complete</label>
                    <ul className="todo-list">
                        {this.getTodoItems()}
                    </ul>
                </div>
                <Footer />
            </Fragment>
        )
    }
    handleStoreChange() {
        this.setState(store.getState())
    }
    toggleAll() {
        const action = toggleAllAction()
        store.dispatch(action)
    }
    getTodoItems() {
        return this.state.list.map((item, index) => {
            return (
                <li
                    key={index}
                    className={classNames({
                        completed: this.state.completed.includes(index),
                        editing: this.state.editing === index
                    })}
                >
                    <div className="view">
                        <input
                            className="toggle"
                            type="checkbox"
                            onClick={this.toggleItem.bind(this, index)}
                            checked={this.state.completed.includes(index) ? true : false}
                            readOnly
                        />
                        <label
                            onDoubleClick={this.toggleEdit.bind(this, index)}
                        >{item}</label>
                        <button className="destroy" onClick={this.handleDelItem.bind(this, index)}></button>
                    </div>
                    <input
                        className="edit"
                        placeholder={this.state.inputValue}
                        value={this.state.editText}
                        onKeyUp={(e) => this.handleKeyUp(e, index)}
                        onChange={(e) => this.handleEditChange(e)}
                        autoFocus
                    />
                    {/* onBlur={() => this.handleBlur(index)} */}
                </li>
            )
        })
    }
    toggleItem(index) {
        const action = toggleItemAction(index)
        store.dispatch(action)
    }
    handleDelItem(index) {
        const action = delTodoItemAction(index)
        store.dispatch(action)
    }
    toggleEdit(index) {
        const action = toggleEditAction(index)
        store.dispatch(action)
    }
    handleItemChange(index) {
        const action = changeItemAction(index)
        store.dispatch(action)
    }
    handleKeyUp(e, index) {
        console.log(e.keyCode)
        //enter key
        if (e.keyCode === 13) {
            const action = toggleEditAction(index)
            store.dispatch(action)
            this.handleItemChange(index)
        }
        //esc key
        if (e.keyCode === 27) {
            const action = toggleEditAction(index)
            store.dispatch(action)
        }
    }
    handleBlur(index) {
        // console.log(index)
        const action = toggleEditAction(index)
        store.dispatch(action)
        this.handleItemChange(index)
    }
    handleEditChange(e) {
        const action = changeEditAction(e.target.value)
        store.dispatch(action)
    }
}

export default App;
