
import firebase from "firebase/app";
import "firebase/auth";

const AuthService = {

    loginWithGoogle: async () => {

        const provider = new firebase.auth.GoogleAuthProvider();

        try {
            const userCred = await firebase.auth().signInWithPopup(provider);

            return {
                user: userCred.user
            }
        } catch (e) {
            return {
                error: e.message,
            }
        }
    },

    loginWithFacebook: async () => {

        const provider = new firebase.auth.FacebookAuthProvider();

        try {
            const userCred = await firebase.auth().signInWithPopup(provider);

            return {
                user: userCred.user
            }
        } catch (e) {
            return {
                error: e.message,
            }
        }
    },

    logout: async () => {
        await firebase.auth().signOut();
    },

    createWithEmailAndPassword: async (email, pass) => {

        try {

            const userCred = await firebase.auth().createUserWithEmailAndPassword(email, pass);
            await userCred.user.sendEmailVerification({
                url: `${process.env.NEXT_PUBLIC_URL}/auth/login`
            })

            return {
                user: userCred.user
            }
        } catch (e) {
            return {
                error: e.message,
            }
        }

    },

    loginWithEmailAndPassword: async (email, pass) => {

        try {

            const userCred = await firebase.auth().signInWithEmailAndPassword(email, pass);

            return {
                user: userCred.user
            }
        } catch (e) {
            return {
                error: e.message,
            }
        }

    },

    resetPassword: async (email) => {

        try {

            await firebase.auth().sendPasswordResetEmail(email, { url: `${process.env.NEXT_PUBLIC_URL}/auth/login` });

            return {}

        } catch (e) {
            return {
                error: e.message,
            }
        }

    }
}

export default AuthService;