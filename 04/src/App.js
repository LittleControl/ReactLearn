import React, { Component, Fragment } from 'react'
import 'antd/dist/antd.css'
import { Button, Input, List } from 'antd'
import store from './store'
import { getInputChangeAction, getAddAction, getDelAction } from './store/actionCreators'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = store.getState()
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleStoreChange = this.handleStoreChange.bind(this)
        this.handleAddItem = this.handleAddItem.bind(this)
        store.subscribe(this.handleStoreChange)
    }
    render() {
        return (
            <Fragment>
                <Input
                    value={this.state.inputValue} placeholder="What do you want to do" style={{ width: '300px', margin: '20px 20px 20px 20px' }}
                    onChange={this.handleInputChange}
                />
                <Button type="primary" onClick={this.handleAddItem}>Primary</Button>
                <List
                    style={{ width: '400px' }}
                    bordered
                    dataSource={this.state.list}
                    renderItem={(item, index) => (
                        <List.Item onClick={this.handleDelItem.bind(this, index)}>
                            {item}
                        </List.Item>
                    )}
                />
            </Fragment>
        )
    }
    handleInputChange(e) {
        const action = getInputChangeAction(e.target.value)
        store.dispatch(action)
    }
    handleStoreChange() {
        this.setState(store.getState())
    }
    handleAddItem() {
        const action = getAddAction()
        store.dispatch(action)
    }
    handleDelItem(index) {
        const action = getDelAction(index)
        store.dispatch(action)
    }
}

export default App;
