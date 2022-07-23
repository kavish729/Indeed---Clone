import { Container } from "@chakra-ui/react";
import React from "react";
import { useParams } from "react-router-dom";
import Snapshot_about from "../snapshotTab/Snapshot_about";
import Snapshot_interview from "../snapshotTab/Snapshot_interview";
import Snapshot_jobs from "../snapshotTab/Snapshot_jobs";
import Snapshot_location from "../snapshotTab/Snapshot_location";
import Snapshot_QandA from "../snapshotTab/Snapshot_QandA";
import Snapshot_salaries from "../snapshotTab/Snapshot_salaries";

const Snapshot = () => {
  return (
    <Container maxW='100%' paddingBottom='100px' >
      <Snapshot_about />
      <Snapshot_jobs/>
      <Snapshot_salaries/>
      <Snapshot_QandA/>
      <Snapshot_location/>
      <Snapshot_interview/>
      
    </Container>
  );
};

export default Snapshot;
