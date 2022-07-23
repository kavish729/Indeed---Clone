import {
  Container,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import React from "react";
import { useParams, Link, Outlet } from "react-router-dom";
import LandingHeader from "../components/CompanyLandingPage/LandingHeader";
import Snapshot from "../components/CompanyLandingPage/Tabs/Snapshot";
import WhyUS from "../components/CompanyLandingPage/Tabs/WhyUS";
import Reviews from "../components/CompanyLandingPage/Tabs/Reviews";
import Salaries from "../components/CompanyLandingPage/Tabs/Salaries";
import Jobs from "../components/CompanyLandingPage/Tabs/Jobs";
import Questions from "../components/CompanyLandingPage/Tabs/Questions";
import Interviews from "../components/CompanyLandingPage/Tabs/Interviews";
import Photos from "../components/CompanyLandingPage/Tabs/Photos";
const CompanyLandingPage = () => {
  const { id } = useParams();

  return (
    <Container maxW={["100%", "100%", "70%", "70%", "70%"]} pb="100px">
      <LandingHeader id={id} />

      <Tabs>
        <TabList isFitted overflow="auto" position="sticky">
          <Tab>Snapshot</Tab>
          <Tab>Why_Join_Us</Tab>
          <Tab>Reviews</Tab>
          <Tab>Salaries</Tab>
          <Tab>Jobs</Tab>
          <Tab>Questions</Tab>
          <Tab>Interviews</Tab>
          <Tab>Photos</Tab>
        </TabList>

        <TabPanels >
          <TabPanel >
            <Snapshot />{" "}
          </TabPanel>
          <TabPanel>
            <WhyUS />
          </TabPanel>
          <TabPanel>
            <Reviews />{" "}
          </TabPanel>
          <TabPanel>
            <Salaries />{" "}
          </TabPanel>
          <TabPanel>
            <Jobs />{" "}
          </TabPanel>
          <TabPanel>
            <Questions />{" "}
          </TabPanel>
          <TabPanel>
            <Interviews />{" "}
          </TabPanel>
          <TabPanel>
            <Photos />{" "}
          </TabPanel>
        </TabPanels>
      </Tabs>
      
    </Container>
  );
};

export default CompanyLandingPage;
