import { initializeConnect } from "react-redux/es/components/connect";
import { authSlice, checkingCredentials, login, logout } from "../../../src/store/auth/authSlice";
import { authenticatedState, demoUser, initialState, notAuthenticatedState } from "../../fixtures/authFixtures";


describe('pruebas en < authSlice>',()=>{
test('debe de regresar el estado inicial y llamarse auth', () => { 

expect(authSlice.name).toBe('auth');

const state= authSlice.reducer(initialState,{})
console.log(state);

expect(state).toEqual(initialState);

    })

    test('debe de realizar autenticación', () => { 

        const state= authSlice.reducer(initialState,login(demoUser))

        expect(state).toEqual({
            uid:'1234',
            status:'authenticated',// , authenticated, checking , not-authenticated
            email:'demo@gmail.com',
            displayName:'demo user',
            photoURL:'https://demo.jpg.',
            errorMessage:null, 
            });


// expect(state).toEqual(initialState);

    })

    test('debe de realizar logout sin argumentos ', () => { 

        const state= authSlice.reducer(authenticatedState,logout())

        console.log(state);
        
        expect(state).toEqual( {
            status:'not-authenticated',
            uid:null,
            email:null,
            displayName:null,
            photoURL:null,
            errorMessage:undefined, 
            });



    })

    test('debe de realizar logout con argumentos ', () => { 

 const errorMessage ='no hya usuario '

        const state= authSlice.reducer(authenticatedState,logout({errorMessage}))

        expect(state).toEqual( {
            status:'not-authenticated',
            uid:null,
            email:null,
            displayName:null,
            photoURL:null,
            errorMessage:errorMessage, 
        });
        
        console.log(state);


    })

    test('debe de pasar de estar autenticado a checking ', () => { 


               const state= authSlice.reducer(authenticatedState,checkingCredentials())
       
               expect(state.status).toEqual('checking',);
               
               console.log(state);
       
       
           })

})