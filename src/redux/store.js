import { configureStore } from '@reduxjs/toolkit'

import fixtureReducer from '../redux/FixtureSlice'

export const store = configureStore({
  reducer: {
      fixture: fixtureReducer
  },
})