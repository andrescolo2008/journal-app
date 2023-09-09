
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

export const RegisterPage = () => {

  const {displayName, email,password,onInputChange,formState} = useForm(formData)

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
