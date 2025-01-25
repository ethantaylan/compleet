import { Header } from "../header/header";
import { Main } from "../main/main";
import { Teams } from "../teams/teams";

export const Home = () => {
  return (
    <Main>
      <Header />

      <Teams />
    </Main>
  );
};
