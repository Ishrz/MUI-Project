import React from 'react'
import { MyButton } from '../App'
import DeleteIcon from '@mui/icons-material/Delete';
const Section = () => {
  return (
    <div className='w-full bg-gray-700 min-h-[80%] flex items-center justify-center'>

    <MyButton
     endIcon={<DeleteIcon/>
     } >Hello</MyButton>
    </div>
  )
}

export default Section
