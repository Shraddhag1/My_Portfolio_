import { createSlice } from "@reduxjs/toolkit";
const rootSlice = createSlice({
    name: 'root',
    initialState: {
        lodaing: false,
        portfolioData: null,
    },
    reducers: {
        ShowLoading: (state, action) => {
            state.loading = true;
        },
        HideLoadinng: (state, action) => {
            state.loading = false;
        },
        SetPortfolioData: (state, action) => {
            state.portfolioData = action.payload;
        },
    },
});


export default rootSlice.reducer;
export const { ShowLoading, HideLoadinng, SetPortfolioData } = rootSlice.actions;
