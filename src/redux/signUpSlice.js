import { createSlice } from "@reduxjs/toolkit"
import { current } from "immer"
import { v4 as uuidv4 } from 'uuid';
import md5 from "md5"

const initialState = []
let flag = false
let signUpErrors = ""
let signInErrors = ""
let signInSuccess = ""
let userName = ""

const signUpSlice = createSlice({
    name: "SignUp",
    initialState,
    reducers: {
        signUp: (state = initialState, { payload }) => {
            
            const { email, password, firstName, lastName } = payload.formValues
            if (state.find(mail => mail.email === email)) {
                flag = false
                signUpErrors = "User Already Exists"
                return state
            }
            else {
                userName = firstName
                signInSuccess= "Sign Up Successfull"
                flag = true
                return [
                    ...state,
                    {
                        id: uuidv4(),
                        email,
                        password: md5(password),
                        firstName,
                        lastName
                    }
                ]
            }
        },
        checksignIn: (state = initialState, { payload }) => {

            const { email, password } = payload.formValues
            if (state.find(mail => mail.email === email)) {
                if (state.find(pass => pass.password === md5(password))) {
                    userName = current(state).find(mail => mail.email === email).firstName
                    flag = true
                    signInSuccess= "Sign In Successfull"
                    return state
                } else {
                    flag = false
                    signInErrors = "Incorrect Password"
                }
            } else {
                flag = false
                signInErrors = "Email Address Does Not Exist. Please Sign Up first"
            }
        }
    }
})

export const { signUp, checksignIn, resetState } = signUpSlice.actions
export default signUpSlice.reducer
export { flag, signInErrors, signUpErrors, signInSuccess, userName }