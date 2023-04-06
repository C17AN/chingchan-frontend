import React from "react";
import { useSession } from "next-auth/react";

type Props = {};

const onBoarding = (props: Props) => {
  const { data: session } = useSession();
  console.log(session);
  return <div>onBoarding</div>;
};

export default onBoarding;
