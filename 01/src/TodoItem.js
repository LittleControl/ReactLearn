import React, { Component } from 'react'

class TodoItem extends Component {

    constructor(props) {
        super(props)
        this.handleDel = this.handleDel.bind(this)
    }

    render() {
        return (
            <div
                dangerouslySetInnerHTML={{ __html: this.props.item }}
                onClick={this.handleDel}
            >
            </div>
        )
    }

    handleDel() {
        const { handleDelItem, index } = this.props
        handleDelItem(index)
    }
}

export default TodoItem;
