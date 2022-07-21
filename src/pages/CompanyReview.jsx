import React, { useEffect } from 'react';
import { Container } from '@chakra-ui/react';
import Header from '../components/companyReview/Header';
import { useDispatch } from 'react-redux';
import { getcompanyApi } from '../redux/appReducer/actions';
import PopularCompanies from '../components/companyReview/PopularCompanies';
import CompareCompanies from '../components/companyReview/CompareCompanies';
import RateCompany from '../components/companyReview/RateCompany';

const CompanyReview = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getcompanyApi());
  }, [dispatch]);

  return (
    <Container maxW={['100%', '100%', '70%', '70%', '70%']} pb='100px'>
      <Header />
      <PopularCompanies />
      <CompareCompanies/>
      <RateCompany />
    </Container>
  );
};
export default CompanyReview;
