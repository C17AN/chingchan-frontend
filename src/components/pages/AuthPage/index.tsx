import Container from "@/components/common/ui/Container";
import FirstStep from "./Step/FirstStep";

type Props = {};

const AuthPage = (props: Props) => {
  return (
    <Container>
      <FirstStep />
    </Container>
  );
};

export default AuthPage;
