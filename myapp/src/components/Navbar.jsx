import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
      <div>
          <AppBar>
              <Toolbar>
                  <Typography variant='h6'>myapp</Typography>
                   <Link to='/Signup'>
                      <Button variant='contained'>Signup</Button>
                  </Link>

                  <Link to='/l'>
                      <Button variant='contained'>Login</Button>
                  </Link>

                  <Link to='/sb'>
                      <Button variant='contained'>Homepage</Button>
                  </Link>

                  <Link to='/wl'>
                      <Button variant='contained'>Wlcome</Button>
                  </Link>
                  <Link to='/a'>
                      <Button variant='contained'>Api</Button>
                  </Link>
              </Toolbar>
          </AppBar>
          <br /><br /><br /><br />
          </div>
  )
}

export default Navbar
