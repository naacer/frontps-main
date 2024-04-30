import { Card } from '@mui/material'
import React from 'react'

export const OrderCard = () => {
  return (
    <Card className='flex justify-between items-start p-5'>
    <div className='flex items-center space-x-5'>
    <img className='h-16 W-16' 
      src='https://th.bing.com/th/id/OIP.E9_znRJ07WtBddTAXsHizgHaGO?w=212&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7'
      alt=""
    />
    <div>
      <p>Biryani</p>
      <p>$39</p>
    </div> 
    </div>
    <div>
      <button className='cursor-not-allowed'>
        completed
      </button>
    </div>

    </Card>
  )
}
