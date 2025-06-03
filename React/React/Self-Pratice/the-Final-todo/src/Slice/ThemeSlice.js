import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isDark: JSON.parse(localStorage.getItem("isDark") || "false"),
}

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.isDark = !state.isDark;
            localStorage.setItem('isDark', JSON.stringify(state.isDark));

            if (state.isDark) {
                document.documentElement.classList.add('dark');
                document.documentElement.classList.remove('light');
                document.body.style.backgroundColor = '#1e293b';
                document.body.style.color = '#e2e8f0';
            } else {
                document.documentElement.classList.remove('dark');
                document.documentElement.classList.add('light');
                document.body.style.backgroundColor = '#d4d3d1'; 
                document.body.style.color = '#334155';
            }
        },
        defaultMode: (state, action) => {
            state.isDark = action.payload
            localStorage.setItem("isDark", JSON.stringify(action.payload));
            if (state.isDark) {
                document.documentElement.classList.add('dark');
                document.documentElement.classList.remove('light');
            } else {
                document.documentElement.classList.remove('dark');
                document.documentElement.classList.add('light');
            }
        },
        // darkMode: (state) => {
        //     if(state.isDark){

        //     }
        // }
    }
})

export const { toggleTheme, defaultMode } = themeSlice.actions;
export default themeSlice.reducer