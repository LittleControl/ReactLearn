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

export const changeInputValueAction = (value) => ({
    type: CHANGE_INPUT_VALUE,
    value
})
export const addTodoItemAction = () => ({
    type: ADD_TODO_ITEM
})
export const delTodoItemAction = (index) => ({
    type: DEL_TODO_ITEM,
    index
})
export const toggleItemAction = (index) => ({
    type: TOGGLE_ITEM,
    index
})
export const toggleEditAction = (index) => ({
    type: TOGGLE_EDITING,
    index
})
export const changeItemAction = (index) => ({
    type: CHANGE_ITEM_VALUE,
    index
})
export const changeEditAction = (value) => ({
    type: CHANGE_EDIT_VALUE,
    value
})
export const toggleAllAction = () => ({
    type: TOGGLE_ALL
})

export const clearCompletedAction = () => ({
    type: CLEAR_COMPLETED
})

export const getThunkTest = () => {
    return (dispatch) => {
        console.log('getThunkTest')
    }
}