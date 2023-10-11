import { logOutFirebase, loginWithEmailPassword, signInWithGoogle } from "../../../src/firebase/providers"
import { checkingCredentials, login, logout } from "../../../src/store/auth";
import { checkingAuthentication, startGoogleSignIn, startLogOut, startLoginWithEmailPassword } from "../../../src/store/auth/thunks"
import { clearNotesLogout } from "../../../src/store/journal/journalSlice";
import { demoUser } from "../../fixtures/authFixtures";

jest.mock('../../../src/firebase/providers');

describe('pruebas en < pruebas en AuthThunks >',()=>{

    const dispatch = jest.fn()

    beforeEach( ()=> jest.clearAllMocks() );

test('debe de invocar checkingCredentials ',async () => { 

    await checkingAuthentication()(dispatch)

    expect(dispatch).toHaveBeenCalledWith(checkingCredentials())
  })

 

test('dstartGoogleSignIn  debe  de llamar checking Credentials y login -Exíto   ', async () => { 

    const loginData = {ok:true , ...demoUser}

    await signInWithGoogle.mockResolvedValue(loginData)
   await startGoogleSignIn()(dispatch)

   expect(dispatch).toHaveBeenCalledWith(checkingCredentials())
   expect(dispatch).toHaveBeenCalledWith(login(loginData))

   
  })

  test('dstartGoogleSignIn  debe  de llamar checking Credentials y logout -Error ', async () => { 

    const loginData = {ok:false , errorMessage:'un -Error en Google'}

    await signInWithGoogle.mockResolvedValue(loginData)
    //thunks

    await startGoogleSignIn()(dispatch)

    expect(dispatch).toHaveBeenCalledWith(checkingCredentials())
   expect(dispatch).toHaveBeenCalledWith(logout(loginData.errorMessage))
   
  })

  test('startLogiWith Email and PAssword debe de llamar checking credential y login - éxito ', async () => { 

    const loginData = {ok:true , ...demoUser}

   const formData ={email:demoUser.email,password :'123456'}

   await loginWithEmailPassword.mockResolvedValue(loginData)

   await startLoginWithEmailPassword(formData)(dispatch);

   expect(dispatch).toHaveBeenCalledWith(checkingCredentials())
   expect(dispatch).toHaveBeenCalledWith(login(loginData))
   
  })

  test('startLogout debe de llmar logoutFirebase,clearNotes y logout', async () => { 

   await startLogOut()(dispatch)

   expect(logOutFirebase).toHaveBeenCalled()

   expect(dispatch).toHaveBeenCalledWith(clearNotesLogout())
   expect(dispatch).toHaveBeenCalledWith(logout())



    })

})