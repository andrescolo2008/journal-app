
import { Google } from '@mui/icons-material'
import { Button, Grid, Link, TextField, Typography } from '@mui/material'
import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { AuthLayouth } from '../layout/AuthLayouth'

export const RegisterPage = () => {
  return (
    
    <AuthLayouth title='User Register'>

            <form >
                    <Grid container>

                          <Grid item xs={12} sx={{mt:2}} >
                              <TextField 
                              label="nombre competo"
                                 type="text"
                                  placeholder='escriba su nombre completo'
                                  fullWidth
                                    />
                                    
                          </Grid>

                          <Grid item xs={12} sx={{mt:2}} >
                              <TextField 
                              label="correo"
                                 type="email"
                                  placeholder='correo electrónico'
                                  fullWidth
                                    />

                              </Grid>

                          <Grid item xs={12} sx={{mt:2}}>
                              <TextField 
                              label="Contraseña"
                                 type="password"
                                  placeholder='Contraseña'
                                  fullWidth
                                    />
                          </Grid>
                                <Grid container spacing={2} sx={{mb:2, mt:1}}>
                                  <Grid item xs={12} >
                                      <Button variant='contained' fullWidth>
                                        Crear Cuenta
                                      </Button>
                                    </Grid>
                                  
                              </Grid>

                          <Grid container='row' justifyContent='end'>
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
