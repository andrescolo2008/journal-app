const { render, screen, fireEvent } = require("@testing-library/react")
const { Provider } = require("react-redux")
const { LoginPage } = require("../../../src/auth/pages/LoginPage")
const { configureStore } = require("@reduxjs/toolkit")
const { startGoogleSignIn, startLoginWithEmailPassword } = require("../../../src/store/auth/thunks")
const { MemoryRouter } = require("react-router-dom")
const { notAuthenticatedState } = require("../../fixtures/authFixtures")
const { authSlice } = require("../../../src/store/auth")



const mockStartGoogleSignIn=jest.fn()

const mockStartLoginWithEmailPassword=jest.fn()

jest.mock('../../../src/store/auth/thunks', ( ) =>({

startGoogleSignIn: ( )=> mockStartGoogleSignIn,
startLoginWithEmailPassword: ({email,password} )=>{
    
    return ()=> mockStartLoginWithEmailPassword({email,password})
  },
}))

jest.mock('react-redux',()=>({
    ...jest.requireActual('react-redux'),
    useDispatch:()=> () => ( fn ) => fn(),
}))

const store= configureStore({
    reducer:{
        auth:authSlice.reducer
    },
    preloadedState:{
        auth:notAuthenticatedState
    }
})

describe('pruebas en < loginPage >',()=>{
    
    beforeEach(()=> jest.clearAllMocks());


test('debe de mostrar el componente correctamente ', () => { 
render(

    <Provider store={store}>

        <MemoryRouter>
            <LoginPage />


        </MemoryRouter>

        
    </Provider> 
)

// screen.debug();

expect(screen.getAllByText('Login').length ).toBeGreaterThan(1)
   })
   test('Botón de GOOGLe debe ejecutar startGoogleSignIn', () => { 
    
    render(

        <Provider store={store}>
    
            <MemoryRouter>
                <LoginPage />
    
    
            </MemoryRouter>
    
            
        </Provider> 
    )
    console.log(store.getState());
        
    const googleBtn= screen.getByLabelText('google-btn')

        fireEvent.click(googleBtn);

        // console.log(store.getState());
        

        expect(mockStartGoogleSignIn).toHaveBeenCalled();

       })


       test('submit debe dellamar startLoginWithEmailAndPassword', () => { 
    

        const email= 'andres@gmail.com';
        const password='123456';
        render(
    
            <Provider store={store}>
        
                <MemoryRouter>
                    <LoginPage />
        
        
                </MemoryRouter>
        
                
            </Provider> 
        )

        const emailField= screen.getByRole('textbox',{name:'correo'})
        
        fireEvent.change(emailField,{target:{name:'email',value:email} } )
        
        const passwordField= screen.getByTestId('password')
        fireEvent.change(passwordField,{target:{name:'password',value:password} } )
        
        const loginForm= screen.getByLabelText('submit-form')
        fireEvent.change(loginForm)


          
            expect(mockStartLoginWithEmailPassword).toHaveBeenCalledWith({
                email:email,
                password:password
            });
    
           })

})