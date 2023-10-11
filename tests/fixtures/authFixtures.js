
export const initialState = {
    status:'checking',// , authenticated, checking , not-authenticated
    uid:null,
    email:null,
    displayName:null,
    photoURL:null,
    errorMessage:null, 
    }

    export const authenticatedState = {
        status:'authenticated',// , authenticated, checking , not-authenticated
        uid:'1234',
        email:'demo@gmail.com',
        displayName:'demo user',
        photoURL:'https://demo.jpg.',
        errorMessage:null, 
        }

        export const notAuthenticatedState = {
            status:'not-authenticated',// , authenticated, checking , not-authenticated
            uid:null,
            email:null,
            displayName:null,
            photoURL:null,
            errorMessage:'no hya ususario', 
            }
        export const demoUser ={
            uid:'1234',
            email:'demo@gmail.com',
            displayName:'demo user',
            photoURL:'https://demo.jpg.',
            errorMessage:null, 
        }