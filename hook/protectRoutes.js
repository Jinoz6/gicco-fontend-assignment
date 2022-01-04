
import React from 'react';
import Router from "next/router";


import useAuth from './auth';
import PageChange from "../components/PageChange/Loading.js";

import firebase from 'firebase/app';
import "firebase/auth";


export function withProtected(Component) {

    return function withProtected(props) {


        if (typeof window !== "undefined") {

            const auth = useAuth();

            if (!auth.user) {



                firebase.auth().onAuthStateChanged((user) => {

                    if (user) {


                        return <Component auth={auth} {...props} />

                    }

                    else {


                        Router.push('/auth/login')
                        return <PageChange />

                    }


                })

                return <PageChange />



            } else {


                return <Component auth={auth} {...props} />

            }



        } else {

            return <PageChange />

        }


    }
}

export function withPublic(Component) {

    return function withPublic(props) {

        const auth = useAuth();

        if (auth.user) {

            Router.push('/auth/login')
            return <h1>Loading...</h1>

        }

        return <Component auth={auth} {...props} />
    }
}