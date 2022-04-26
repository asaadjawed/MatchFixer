import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0,
}

export const fixtureSlice = createSlice ({
    name: 'MatchFixture',
    initialState,
    reducers: {
        getMatchFixtures: (state, data) => {
            console.log(state,'state')
            state.value = data;
        }
    }
})

export const {getMatchFixtures} = fixtureSlice.actions
export default fixtureSlice.reducer