import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { mapAPI } from 'features/map';

const WORLD = async () => {
   const res = await mapAPI.world()
   return res.data
}
const MEDPOINT = async (x) => {
    const res = await mapAPI.medPoint()
    return res.data
 }
const MEDLIST = async (x) => {
    const res = await mapAPI.medList()
    return res.data
 }
const CASES = async (x) => {
    const res = await mapAPI.cases()
    return res.data
}

export const worldMap = createAsyncThunk('/organ/world', WORLD)
export const medPointMap = createAsyncThunk('/organ/med-point', MEDPOINT)
export const medMapList = createAsyncThunk('/organ/med-list', MEDLIST)
export const casesMap = createAsyncThunk('/organ/cases', CASES)

const mapSlice = createSlice({
  name: 'maps',
  initialState: {
    mapState: {
      id:'', type:'', shortName:'', name:'', lat: '', long: '', population: '', cases: '', medPointId: ''
    },
    mapsState: [],
    type: '',
    keyword: '',
    params: {}
  },
  reducers: {},
  extraReducers: {
    [worldMap.fulfilled]: ( state, action ) => { 
      state.mapsState = action.payload 
    //   window.location.href = `/login`
    },
    [medPointMap.fulfilled]: ( state, action ) => { 
        state.mapState = action.payload 
    },
    [medMapList.fulfilled]: ( state, action ) => { 
        state.mapsState = action.payload 
    },
    [casesMap.fulfilled]: ( state, action ) => { 
        state.mapsState = action.payload 
    },
  }

})
export const currentMapState = state => state.maps.mapState
export const currentMapsState = state => state.maps.mapsState
export default mapSlice.reducer;
