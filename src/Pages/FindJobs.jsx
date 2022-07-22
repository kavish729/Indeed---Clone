import React from 'react'
import Seachbar from '../components/FindJobs/Seachbar'
import {Box,Flex} from '@chakra-ui/react'
import Jobfeeds from '../components/FindJobs/Jobfeeds'

const Findjobs = () => {
  return (
    <div>
      <Seachbar/>
      <Flex>
        <Box><Jobfeeds/></Box>
        <Box></Box>
      </Flex>
  
    </div>
    
  )
}

export default Findjobs