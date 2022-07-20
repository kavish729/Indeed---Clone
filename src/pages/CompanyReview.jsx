import React, { useEffect } from 'react';
import { Container } from '@chakra-ui/react';
import Header from '../components/companyReview/Header';
import { useDispatch } from 'react-redux';
import { getcompanyApi } from '../redux/appReducer/actions';
import PopularCompanies from '../components/companyReview/PopularCompanies';
const CompanyReview = () => {

    const dispatch=useDispatch();
    useEffect(()=>{
        
        dispatch(getcompanyApi())
        
    },[]);
    
    return (
    <Container maxW={['100%','100%','70%','70%','70%']}>
        <Header/>
        <PopularCompanies/>

    </Container>
    );
};

export default CompanyReview;