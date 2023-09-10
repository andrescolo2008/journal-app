
import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { Button, Grid, Link, TextField, Typography } from '@mui/material'
import { AuthLayouth } from '../layout/AuthLayouth'
import { useForm } from '../../hooks'

        const formData={
          displayName:'luis',
          email: 'andres@gmail.com',
          password:'123'
        }

        const formValidations = {
          email:[ (value)=>value.includes('@'),' el correo debe contener un @' ],
          password:[ (value)=>value.length >=6,' el password debe contener más de 6 caracteres (números,letras y/0 símbolos)' ],
          displayName:[ (value)=>value.length >2,' el nombre es requerido ' ],
          
        }

export const RegisterPage = () => {

  const {
    formState,displayName, email,password,onInputChange,
    formStateValid,displayNameValid,emailValid,passwordValid
  } = useForm(formData,formValidations)

 const onSubmit = (event )=>{
  event.preventDefault()
  console.log(formState);
  
 }

  return (
    
    <AuthLayouth title='User Register'>

            <form  onSubmit={onSubmit}>
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
                                  error={!displayNameValid}
                                  helperText={displayNameValid ?'elnombre es obligaroio ':''}
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
                                    />
                          </Grid>
                                <Grid container spacing={2} sx={{mb:2, mt:1}}>
                                  <Grid item xs={12} >
                                      <Button 
                                      type='submit'
                                      variant='contained' 
                                      fullWidth>
                                        Crear Cuenta
                                      </Button>
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
