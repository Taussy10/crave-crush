import { createSlice } from "@reduxjs/toolkit";

// This is use to make Slice will be shown in redux
// sliceName = category(not intialState wala category) see the redux{click first anyCategory}
const categorySlice = createSlice({
  name: "category" ,
  initialState:{
  category:"All"
  },

  
  reducers:{
    setCategory: (state,action) =>{
      // state.category state of category{sliceName}
      // action.payload = data of state of category we will do some action on it 
      state.category=action.payload
    }
    
  }


})

// here we import reducers suchas setCategory from categorySlice.actions
export const {setCategory}= categorySlice.actions;
export default categorySlice.reducer;