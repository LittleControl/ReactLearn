import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DEL_TODO_ITEM } from './actiontypes'

export const getInputChangeAction = (value) => ({
    type: CHANGE_INPUT_VALUE,
    value
})

export const getAddAction = () => ({
    type: ADD_TODO_ITEM
})

export const getDelAction = (index) => ({
    type: DEL_TODO_ITEM,
    index
})
