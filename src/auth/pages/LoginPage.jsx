
import { Google } from '@mui/icons-material'
import { Button, Grid, Link, TextField, Typography } from '@mui/material'
import React, { useEffect, useMemo } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { AuthLayouth } from '../layout/AuthLayouth'
import { useForm } from '../../hooks'
import { useDispatch, useSelector } from 'react-redux'
import { checkingAuthentication, startGoogleSignIn } from '../../store/auth'

export const LoginPage = () => {

  const {status} = useSelector(state =>state.auth)
  const isAuthenticating = useMemo(()=> status === 'checking',[status])

  const  dispatch= useDispatch();

  
  const {email,password,onInputChange} = useForm({
    email: 'andres@gmail.com',
    password:'123'
  })

  const onSubmit =(event)=>{
    event.preventDefault()
    console.log({email,password});
    dispatch( checkingAuthentication())
    
  }

  const onGoogleSignIn= ( ) =>{
    console.log('onGoogleSignIn');
    dispatch(startGoogleSignIn())
    
  }
  
  return (
    
    <AuthLayouth title='Login'>

            <form  onSubmit={onSubmit} >
                    <Grid container>
                          <Grid item xs={12} sx={{mt:2}} >
                              <TextField 
                              label="correo"
                                 type="email"
                                  placeholder='correo@gmail.com'
                                  name='email'
                                  onChange={onInputChange}
                                  value={email}
                                  fullWidth
                                    />
                          </Grid>
                          <Grid item xs={12} sx={{mt:2}}>
                              <TextField 
                              label="Contraseña"
                                 type="password"
                                  placeholder='Contraseña'
                                  fullWidth
                                  name='password'
                                  onChange={onInputChange}
                                  value={password}
                                    />
                          </Grid>
                                <Grid container spacing={2} sx={{mb:2, mt:1}}>
                                  <Grid item xs={12} sm={6}>
                                      <Button 
                                      disabled={isAuthenticating}
                                      type='submit' 
                                      variant='contained'
                                      fullWidth
                                      onClick={onSubmit}>
                                        Login
                                      </Button>
                                    </Grid>

                                  <Grid item xs={12} sm={6}>
                                      <Button 
                                       disabled={isAuthenticating}
                                      variant='contained' 
                                      fullWidth
                                      onClick={ onGoogleSignIn}>
                                      <Google/>
                                       <Typography sx={{ml:1}}>  Google   </Typography> 
                                      </Button>
                                  </Grid>
                                  
                              </Grid>

                          <Grid container direction='row' justifyContent='end'>
                           <Link component={RouterLink} color='inherit' to='/auth/register'>
                            Crear una cuenta 
                           
                           </Link>
                           
                          </Grid>

                    </Grid>
               </form>

    </AuthLayouth>
              
    
  )
}
