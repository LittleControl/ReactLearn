import React, { Component, Fragment } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './App.css'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show: true,
            list: ['nothing']
        }
        this.toggleShow = this.toggleShow.bind(this)
        this.handleAddItem = this.handleAddItem.bind(this)
    }
    render() {
        return (
            <Fragment>
                <CSSTransition
                    in={this.state.show}
                    timeout={1000}
                    classNames='fade'
                    unmountOnExit
                    onEntered={(el) => { el.style.color = 'blue' }}
                    appear={true}
                >
                    <div>Hello</div>
                </CSSTransition>
                <button
                    onClick={this.toggleShow}
                >Toggle</button>
                <TransitionGroup>
                    {this.state.list.map((item, index) => {
                        return (
                            <CSSTransition
                                timeout={1000}
                                classNames='fade'
                                unmountOnExit
                                onEntered={(el) => { el.style.color = 'blue' }}
                                appear={true}
                                key={index}
                            >
                                <div>{item}</div>
                            </CSSTransition>
                        )
                    })}
                    <button onClick={this.handleAddItem}>Add</button>
                </TransitionGroup>
            </Fragment>
        )
    }
    componentDidMount() {

    }
    toggleShow() {
        this.setState((state) => ({
            show: !state.show
        }))
    }
    handleAddItem() {
        this.setState((state) => ({
            list: [...state.list, 'item']
        }))
    }
}

export default App;
