import React from "react";
import { useQuery } from "@apollo/react-hooks";
import QueriesApi from "../../Api";
import { Container, Box } from "@material-ui/core";
import AiringAnimes from "./components/AiringAnimes";
import UpcomingAnimes from "./components/UpcomingAnimes";
import TopAnimesEver from "./components/TopAnimes";
import LoadingPage from "../Shared/LoadingPage";

const Home = () => {
  const { loading, data } = useQuery(QueriesApi.mainPage);

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <Box py={10}>
      <Container>
        <AiringAnimes data={data.topAiringAnimes} />
        <UpcomingAnimes data={data.upcomingAnimes} />
        <TopAnimesEver data={data.topAnimes} />
      </Container>
    </Box>
  );
};

export default Home;
