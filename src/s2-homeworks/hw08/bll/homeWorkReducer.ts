import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }
 const initialState: UserType[]  =  []

export const homeWorkReducer = (state = initialState, action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {
            const sortedState = [...state].sort((a, b) => {
                if (a.name < b.name) return action.payload === 'up' ? -1 : 1;
                if (a.name > b.name) return action.payload === 'up' ? 1 : -1;
                return 0;
            });
            return sortedState;
        }
        case 'check': {
            const filteredState = state.filter(user => user.age >= action.payload);
            return filteredState;
        }
        default:
            return state;
    }
}

