import {configureStore} from '@reduxjs/toolkit'
import bookmarkSlice  from '../features/bookmarkSlice'
export const store = configureStore({

reducer:{
    bookmark: bookmarkSlice
}
})

