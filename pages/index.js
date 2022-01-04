import React from "react";
import Router from "next/router";
import firebase from 'firebase/app';
import "firebase/auth";




export default function Index() {

  React.useEffect(() => {

    firebase.auth().onAuthStateChanged((user) => {

      if (user) {

        Router.push("/admin/dashboard");

      }

      else {

        Router.push("/auth/login");

      }


    })

  });

  return <div />;
}
