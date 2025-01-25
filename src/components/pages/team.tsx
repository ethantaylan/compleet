import { Header } from "../header/header";
import { Main } from "../main/main";
import { Tasks } from "../tasks/tasks";
import { TeamHeader } from "../team-header/team-header";

export const Team = () => {
  return (
    <Main>
      <Header />

      <TeamHeader />

      <Tasks />
    </Main>
  );
};
