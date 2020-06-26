import * as types from './types'
export const CreateBudget = (payload) => ({type: types.CREATE_BUDGET, payload})
export const OpenBudget = (payload) => ({type: types.OPEN_BUDGET, payload})
export const SaveBudget = (payload) => ({type: types.SAVE_BUDGET, payload})
export const UpdateBudget = (payload) => ({type: types.UPDATE_BUDGET, payload})