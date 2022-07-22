import { Container } from "@chakra-ui/react";
import React from "react";
import { useParams } from "react-router-dom";
import Snapshot_about from "../snapshotTab/Snapshot_about";

const Snapshot = () => {
  const { id } = useParams();
  return (
    <Container height="1000px">
      <Snapshot_about />
    </Container>
  );
};

export default Snapshot;
