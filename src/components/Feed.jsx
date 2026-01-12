import React from 'react'
import {Box} from '@mui/material'
import FeedCard from './FeedCard'
const Feed = () => {
  return (
    <Box sx={
      {display:'flex', 
      margin:'1rem',
      flexDirection:'column',
      gap:'2rem'
    }
      } flex={'4'}>

      <FeedCard/>
      <FeedCard/>
      <FeedCard/>
      <FeedCard/>
    </Box>
  )
}

export default Feed
