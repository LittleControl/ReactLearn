import {
    CHANGE_INPUT_VALUE,
    ADD_TODO_ITEM,
    DEL_TODO_ITEM,
    TOGGLE_ITEM,
    TOGGLE_EDITING,
    CHANGE_ITEM_VALUE,
    CHANGE_EDIT_VALUE,
    TOGGLE_ALL,
    CLEAR_COMPLETED
} from './actionTypes'

const defaultState = {
    inputValue: '',
    list: [1, 2, 3],
    completed: [],
    editing: -1,
    editText: ''
}

export default (state = defaultState, action) => {
    if (action.type === CHANGE_INPUT_VALUE) {
        const newState = Object.assign({}, state)
        newState.inputValue = action.value
        return newState
    }
    if (action.type === ADD_TODO_ITEM) {
        const newState = Object.assign({}, state)
        newState.list.push(newState.inputValue)
        newState.inputValue = ''
        return newState
    }
    if (action.type === DEL_TODO_ITEM) {
        const newState = Object.assign({}, state)
        if (newState.completed.includes(action.type)) {
            newState.completed.splice(newState.completed.findIndex(action.index), 1)
        }
        newState.list.splice(action.index, 1)
        return newState
    }
    if (action.type === TOGGLE_ITEM) {
        const newState = Object.assign({}, state)
        if (newState.completed.includes(action.index)) {
            newState.completed.splice(newState.completed.indexOf(action.index), 1)
        } else {
            newState.completed.push(action.index)
        }
        return newState
    }
    if (action.type === TOGGLE_EDITING) {
        const newState = Object.assign({}, state)
        if (newState.editing === action.index) {
            newState.editing = -1
        } else {
            newState.editing = action.index
            newState.editText = newState.list[action.index]
        }
        return newState
    }
    if (action.type === CHANGE_ITEM_VALUE) {
        const newState = Object.assign({}, state)
        newState.list[action.index] = newState.editText
        return newState
    }
    if (action.type === CHANGE_EDIT_VALUE) {
        const { value } = action
        const newState = Object.assign({}, state)
        newState.editText = value
        return newState
    }
    if (action.type === TOGGLE_ALL) {
        const newState = Object.assign({}, state)
        if (newState.list.length === newState.completed.length) {
            newState.completed = []
        } else {
            newState.completed = newState.list.map((value, index) => index)
        }
        return newState
    }
    if (action.type === CLEAR_COMPLETED) {
        const newState = Object.assign({}, state, { completed: [] })
        return newState
    }
    return state
}
