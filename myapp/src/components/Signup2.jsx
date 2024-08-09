import { Button, TextField } from '@mui/material'
import React from 'react'

const Signup2 = () => {
  return (
      <div>
          <TextField variant='outlined' label='name'></TextField><br /><br />
          <TextField variant='outlined' label='age'></TextField><br /><br />
          <TextField variant='outlined' label='number'></TextField><br /><br />
          <TextField variant='outlined' label='password'></TextField><br /><br />
          <Button variant='contained'>SUBMIT</Button>
    </div>
  )
}

export default Signup2
