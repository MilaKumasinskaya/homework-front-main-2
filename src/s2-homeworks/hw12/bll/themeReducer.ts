type InitStateType = {
    themeId: number
}
const initState = {
    themeId: 1,
}

export const themeReducer = (state: InitStateType = initState, action: ChangeThemeIdAT): InitStateType => { // fix any
    switch (action.type) {
        case "SET_THEME_ID":{
            return {...state, themeId: action.id}
        }
        // дописать

        default:
            return state
    }
}
type ChangeThemeIdAT = {
    type: 'SET_THEME_ID'
    id: number
}
export const changeThemeId = (id: number): ChangeThemeIdAT  => ({ type: 'SET_THEME_ID', id }) // fix any
