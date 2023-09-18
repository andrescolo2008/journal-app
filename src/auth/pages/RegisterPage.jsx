
import React, { useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link as RouterLink } from 'react-router-dom'
import { useForm } from '../../hooks'
import { AuthLayouth } from '../layout/AuthLayouth'
import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material'
import { startCreatingUserWithEmailPassword } from '../../store/auth'


        const formData={
          displayName:'',
          email: '',
          password:''
        }

        const formValidations = {
          email:[ (value)=>value.includes('@'),' el correo debe contener un @' ],
          password:[ (value)=>value.length >=6,' el password debe contener más de 6 caracteres (números,letras y/0 símbolos)' ],
          displayName:[ (value)=>value.length >2,' el nombre es requerido ' ],
          
        }

export const RegisterPage = () => {

  const dispatch =useDispatch()

  const [formSubmitted  , setformSubmitted] = useState(false)

    const{status,errorMessage} = useSelector(state=>state.auth  )
    const isCheckingAuthentication = useMemo(()=>status ==='checking',[status]  )

  const {
    formState,displayName, email,password,onInputChange,
    isFormValid,displayNameValid,emailValid,passwordValid
  } = useForm(formData,formValidations)

  

 const onSubmit = (event )=>{
  event.preventDefault()
  setformSubmitted(true)

if (!isFormValid) return ;

  dispatch(startCreatingUserWithEmailPassword(formState))
  
 }

  return (
    
    <AuthLayouth title='User Register'>


            <form  onSubmit={onSubmit}
               className=" animate__animated animate__fadeIn animate__faster"
 
            >
                    <Grid container>

                          <Grid item xs={12} sx={{mt:2}} >
                              <TextField 
                              label="nombre competo"
                                 type="text"
                                  placeholder='escriba su nombre completo'
                                  fullWidth
                                  name='displayName'
                                  value={displayName}
                                  onChange={onInputChange}
                                  error={!!displayNameValid && formSubmitted}
                                  helperText={displayNameValid }
                                    />
                                    
                          </Grid>

                          <Grid item xs={12} sx={{mt:2}} >
                              <TextField 
                              label="correo"
                                 type="email"
                                  placeholder='correo electrónico'
                                  fullWidth
                                  name='email'
                                  value={email}
                                  onChange={onInputChange}
                                  error={!!emailValid && formSubmitted}
                                  helperText={emailValid }
                                    />

                              </Grid>

                          <Grid item xs={12} sx={{mt:2}}>
                              <TextField 
                              label="Contraseña"
                                 type="password"
                                  placeholder='Contraseña'
                                  fullWidth
                                  name='password'
                                  value={password}
                                  onChange={onInputChange}
                                  error={!!passwordValid && formSubmitted}
                                  helperText={passwordValid }
                                    />
                          </Grid>

                          <Grid container spacing={2} sx={{mb:2, mt:1}}>
                                  <Grid 
                                  item
                                   xs={12} 
                                   display={!!errorMessage?'':'none'}
                                   
                                   >

                                      <Alert severity='error'>{errorMessage}</Alert>
                                    </Grid>

                                <Grid container spacing={2} sx={{mb:2, mt:1}}>
                                  <Grid item xs={12} >
                                      <Button 
                                      disabled={isCheckingAuthentication}
                                      type='submit'
                                      variant='contained' 
                                      fullWidth>
                                        Crear Cuenta
                                      </Button>
                                    </Grid>
                                    </Grid>
                                  
                              </Grid>

                          <Grid container direction ='row' justifyContent='end'>
                            <Typography sx={{mr:1}}> ¿Ya tienes una cuenta?  </Typography>
                           <Link component={RouterLink} color='inherit' to='/auth/login'>
                           Ingresar 
                           
                           </Link>
                           
                          </Grid>

                    </Grid>
               </form>

    </AuthLayouth>
              
    
  )
}
