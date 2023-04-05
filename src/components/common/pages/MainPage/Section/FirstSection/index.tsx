import React from "react";
import RecentPostSection from "./RecentPostSection";
import TitleSection from "./RecentSurvey";
import { Flex } from "@toss/emotion-utils";

type Props = {};

const FirstSection = (props: Props) => {
  return (
    <Flex>
      <TitleSection />
      {/* <RecentPostSection /> */}
    </Flex>
  );
};

export default FirstSection;
