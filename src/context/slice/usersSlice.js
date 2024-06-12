import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
    name: "users",
    initialState: {
        value: [
            {
                id: 1,
                username: "Ashurov",
                name: "Sherzod",
                proffession: "Developer",
                age: 19,
                gender: "male"
            },
            {
                id: 2,
                username: "Asad",
                name: "Ali",
                proffession: "Doctor",
                age: 25,
                gender: "male"
            },

        ],
        followers: []
    },
    reducers: {
        addToUsers: (state, action) => {
            state.value = [...state.value, action.payload]
        },
        removeFromUsers: (state, action) => {
            state.value = state.value.filter(user => user.id !== action.payload )
        },
        addToFollowers: (state, action) => {
            state.followers = [...state.followers, action.payload]
        },
    }
})

export const {addToUsers, removeFromUsers, addToFollowers} = usersSlice.actions
export default usersSlice.reducer