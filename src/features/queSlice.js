import { createSlice } from '@reduxjs/toolkit';

export const queSlice = createSlice({
  name: 'que',
  initialState: {
    queID:null,
    queName:null
  },
  reducers: {
    setQue:(state, action)=>{
        state.queID=action.payload.queID
        state.queName=action.payload.queName
    }
  },
});

export const { setQue} = queSlice.actions;

export const selectQueID = (state) => state.que.queID;
export const selectQueName = (state) => state.que.queName;


export default queSlice.reducer;
