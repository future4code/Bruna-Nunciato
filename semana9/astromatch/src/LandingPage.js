import StartPage from "./Pages/StartPage";
import MatchsPage from "./Pages/MatchsPage";
import React from "react";
import { useState } from "react/cjs/react.development";
import {
  LandingPageContainer,
  Header,
  Logo,
  Cupido,
  Space,
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
              size="30"
              onClick={changePage}
            ></FcApproval>
          </>
        )}
        {!page && (
          <>
            <FcLikePlaceholder
              size="30"
              cursor="pointer"
              onClick={changePage}
            />
            <Logo> LoveMatch</Logo>
            <Cupido src={Cupidoimg} />
            <Space />
          </>
        )}
      </Header>
      {page && <StartPage />}
      {!page && <MatchsPage />}
    </LandingPageContainer>
  );
}
export default LandingPage;
