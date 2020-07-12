import * as types from './types'
export const CreateBudget = (payload) => ({type: types.CREATE_BUDGET, payload})
export const OpenBudget = (payload) => ({type: types.OPEN_BUDGET, payload})
export const SaveBudget = (payload) => ({type: types.SAVE_BUDGET, payload})
export const UpdateBudget = (payload) => ({type: types.UPDATE_BUDGET, payload})
export const DeleteBudget = () => ({type: types.DELETE_BUDGET})
export const SortBudget = () => ({type: types.SORT_BUDGET})

export const SetItem = (payload) => ({type: types.SET_ITEM, payload})
export const DeleteItem = (payload) => ({type:types.DELETE_ITEM, payload})
export const AddItem = () => ({type: types.ADD_ITEM})



export const ToggleHelp = () => ({types: types.TOGGLE_HELP})
export const HideNotification = () => ({type: types.HIDE_NOTIFICATION}) 
export const SetNotification = ({type, msg}) => ({type: types.SET_NOTIFICATION, payload: {type, msg}})