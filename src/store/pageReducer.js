

const defaultState={
  current: 1,
  all: 0
}

const SET_PAGE = "SET_PAGE"
const SET_TOTAL_PAGE = "SET_TOTAL_PAGE"

export const pageReducer = (state=defaultState,action)=>{

  switch (action.type){
    case SET_PAGE:
      return {...state, current: action.payload}
    case SET_TOTAL_PAGE:
      return {...state, all: action.payload}

    default:
      return state
  }
}

export const getAction_setTotalPage = (pages)=>{return {type:SET_TOTAL_PAGE, payload:pages}}
export const getAction_setPage = (page)=>{return {type:SET_PAGE, payload:page}}