import StartPage from "./Pages/StartPage";
import MatchsPage from "./Pages/MatchsPage";
import React from "react";
import { useState } from "react";
import {
  LandingPageContainer,
  Header,
  Logo,
  Cupido,
  Space, MatchContainer
} from "./Pages/styles";
import { FcApproval, FcLikePlaceholder } from "react-icons/fc";
import Cupidoimg from './components/Img/cupido.png';

function LandingPage() {
  const [page, setPage] = useState(true);

  const changePage = () => {
    setPage(!page);
  };

  return (
    <LandingPageContainer>
      <Header>
        {page && (
          <>
            <Space />
            <Logo> LoveMatch</Logo>
            <Cupido src={Cupidoimg} />
            <FcApproval
              cursor="pointer"
              size="56"
              onClick={changePage}
            ></FcApproval>
          </>
        )}
        {!page && (
          <>
          <Space />
          <Logo> LoveMatch</Logo>
            <Cupido src={Cupidoimg} />
            <FcLikePlaceholder
              size="56"
              cursor="pointer"
              onClick={changePage}
            />
           </>
        )}
      </Header>
      <MatchContainer>
      {page && <StartPage />}
      {!page && <MatchsPage />}
      </MatchContainer>
    </LandingPageContainer>
  );
}
export default LandingPage;
