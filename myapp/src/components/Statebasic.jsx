import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Statebasic = () => {
    var [val, setval] = useState("MD MKT")
    var [name, setname] = useState()
    
    const handleinput = (e) => {
        setval(e.target.value)
        console.log(e.target.value)
    }
    const submit = () => {
        setname(val)
    }
  return (
      <div>
          <Typography variant='h2' gutterBottom>WELCOME {name}</Typography>
          <TextField id='outlined' label="enter your name" onChange={handleinput}/><br />
          <Button variant='contained'onClick={submit}>SUBMIT</Button><br />
      
    </div>
  )
}

export default Statebasic
