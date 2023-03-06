import { ADD_NUM, DEL_NUM } from '../constant/types'
 
const initState = 0
 
const calculate = (state = initState, action: any) => {
    let payload = action.payload
    switch (action.type) {
        case ADD_NUM:
            state = payload + 1
            return state
        case DEL_NUM:
            state = payload - 1
            return state
        default:
            return state
    }
}
 
export default calculate