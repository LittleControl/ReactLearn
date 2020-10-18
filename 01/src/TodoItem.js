import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TodoItem extends Component {

    constructor(props) {
        super(props)
        this.handleDel = this.handleDel.bind(this)
    }

    render() {
        const { test, item } = this.props
        return (
            // <div
            //     dangerouslySetInnerHTML={{ __html: this.props.item }}
            //     onClick={this.handleDel}
            // >
            // </div>
            <div
                onClick={this.handleDel}
            >
                {test} - {item}
            </div>
        )
    }

    handleDel() {
        const { handleDelItem, index } = this.props
        handleDelItem(index)
    }
}

TodoItem.propTypes = {
    content: PropTypes.arrayOf(PropTypes.number, PropTypes.string),
    handleDelItem: PropTypes.func,
    index: PropTypes.number,
    test: PropTypes.string.isRequired
}

TodoItem.defaultProps = {
    test: 'test'
}

export default TodoItem;
