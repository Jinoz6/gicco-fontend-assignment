
import { createContext, useState, useContext, useEffect } from "react";

import AuthService from '../services/authService';
import firebase from 'firebase/app';
import "firebase/auth";

import Router from "next/router";

const authContext = createContext();


export default function useAuth() {
    return useContext(authContext);
}


export function AuthProvider({ children }) {

    const [user, setUser] = useState(null)
    const [error, setError] = useState("")

    useEffect(() => {

        firebase.auth().onAuthStateChanged((user) => {

            setUser(user)


        })
    }, [])

    const createWithEmailPass = async (email, pass) => {

        if (email && pass) {

            const { error, user } = await AuthService.createWithEmailAndPassword(email, pass)

            if (error) {
                setError(error)
                return
            }

            setUser(user ?? null)
            Router.push('/auth/login')

        } else {
            setError("Email and password should not empty")
        }



    }

    const loginWithGoogle = async () => {

        const { error, user } = await AuthService.loginWithGoogle()
        setUser(user ?? null)
        setError(error ?? "")

    }

    const loginWithFacebook = async () => {

        const { error, user } = await AuthService.loginWithFacebook()
        setUser(user ?? null)
        setError(error ?? "")

    }

    const loginWithEmailPass = async (email, pass) => {


        if (email && pass) {

            const { error, user } = await AuthService.loginWithEmailAndPassword(email, pass)

            if (error) {
                setError(error)
                return
            }

            setUser(user ?? null)
            Router.push('/auth/login')

        } else {
            setError("Email and password should not empty")
        }

    }

    const resetPassword = async (email) => {


        if (email) {

            const { error } = await AuthService.resetPassword(email)

            if (error) {
                setError(error)
                return
            } else {
                setError("")
                alert("Reset password link have already send to your email")
                Router.push('/auth/login')

            }



        } else {
            setError("Email should not empty")
        }

    }



    const logout = async () => {
        await AuthService.logout()
        setUser(null)
        // Router.replace('/auth/login')
    }

    const value = { user, error, loginWithGoogle, logout, setUser, createWithEmailPass, loginWithEmailPass, setError, loginWithFacebook, resetPassword }

    return <authContext.Provider value={value}>{children}</authContext.Provider>

}

