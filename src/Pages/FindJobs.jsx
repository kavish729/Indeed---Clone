import React from 'react'
import Seachbar from '../components/FindJobs/Seachbar'
import {Box,Flex} from '@chakra-ui/react'
import Jobfeeds from '../components/FindJobs/Jobfeeds'
import JobDetails from '../components/FindJobs/JobDetails'

const Findjobs = () => {
  return (
    <div>
      <Seachbar/>
      <Flex>
        <Box><Jobfeeds/></Box>
        <Box><JobDetails/></Box>
      </Flex>
  
    </div>
    
  )
}

export default Findjobs