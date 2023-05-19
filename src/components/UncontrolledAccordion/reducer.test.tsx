import {reducer, StateType, TOGGLE_COLLAPSED} from "./reducer";

test('reducer should be true', () => {
    // data
    const state: StateType = {
        collapsed: false
    }


    //action
    const newState = reducer(state, {type: TOGGLE_COLLAPSED})

    // expectation
    expect(newState.collapsed).toBe(true)

})
test('reducer should be false', () => {
    // data
    const state: StateType = {
        collapsed: true
    }


    //action
    const newState = reducer(state, {type: TOGGLE_COLLAPSED})

    // expectation
    expect(newState.collapsed).toBe(false)

})