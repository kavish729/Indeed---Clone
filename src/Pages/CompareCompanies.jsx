import React from 'react';
import CompareHeader from '../components/CompareCompanies/CompareHeader';
import CompareInformation from '../components/CompareCompanies/CompareInformation';
import CompareInterview from '../components/CompareCompanies/CompareInterview';
import CompareRating from '../components/CompareCompanies/CompareRating';
import CompareSalaries from '../components/CompareCompanies/CompareSalaries';
import {Container} from '@chakra-ui/react';

const CompareCompanies = () => {
    return (
        <Container maxW={['100%', '100%', '70%', '70%', '70%']} paddingBottom='100px'>
            <CompareHeader/>
            <CompareInformation/>
            <CompareRating/>
            <CompareSalaries/>
            <CompareInterview/>

        </Container>
    );
};

export default CompareCompanies;