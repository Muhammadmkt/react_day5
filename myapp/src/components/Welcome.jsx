import { Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Wlcome = () => {
    var [val, setval] = useState()
    
    const inpt1 = () => {
        setval("React")
    }
    const inpt2 = () => {
        setval("Angular")
    }
    const inpt3 = () => {
        setval("Success")
    }
  //useEffect(()=>{},[])
  useEffect(() => {
    inpt2() 
  },[])
    
  return (
    <div>
          <Typography variant='h5'> Welcome {val} </Typography>
          <Button variant='contained' color='primary' onClick={inpt1}>React</Button>
          <Button variant='contained' color='secondary' onClick={inpt2}>Angular</Button>
          <Button variant='contained' color='success' onClick={inpt3}>Success</Button>
    </div>
  )
}

export default Wlcome
