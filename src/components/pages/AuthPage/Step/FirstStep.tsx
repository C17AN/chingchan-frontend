import { useSession, signIn, signOut, getProviders } from "next-auth/react";
import { useEffect, useState } from "react";
import { SwitchCase } from "@toss/react";
import { Provider } from "@/types/Provider";
import { css } from "@emotion/react";
import { Flex } from "@toss/emotion-utils";
import Container from "@/components/common/ui/Container";
import Text from "@/components/common/ui/Text";
import Button from "@/components/common/ui/Button";

export default function FirstStep() {
  const { data: session } = useSession();
  const [providerList, setProviderList] = useState<Provider>({});

  const fetchProvider = async () => {
    const providerList = await getProviders();
    setProviderList(() => providerList as unknown as Provider);
  };

  useEffect(() => {
    fetchProvider();
  }, []);

  if (session) {
    return (
      <>
        Signed in as {session?.user?.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }

  return (
    <Container>
      <Text typography="h1">
        오늘부터 시작하는
        <br />
        너와 나의 칭찬
      </Text>
      <div
        css={css`
          margin-top: auto;
        `}
      >
        <Flex
          direction="column"
          css={css`
            gap: 8px;
          `}
        >
          {Object.values(providerList)?.map((provider) => (
            <LoginButton
              key={provider.name}
              provider={provider}
              name={provider.name}
            />
          ))}
          <Button onClick={() => {}}>아직 회원이 아니신가요? 회원가입</Button>
        </Flex>
      </div>
    </Container>
  );
}

const LoginButton = ({ provider, name }: { provider: any; name: string }) => {
  return (
    <SwitchCase
      value={name}
      caseBy={{
        Google: (
          <Button
            onClick={() => signIn(provider.id)}
            css={css`
              border-radius: 12px;
            `}
          >
            구글 계정으로 로그인
          </Button>
        ),
        Kakao: (
          <Button
            onClick={() => signIn(provider.id)}
            css={css`
              background-color: #fee500;
              color: #00000085;
              font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
                Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
                sans-serif;
              font-weight: 500;
              border-radius: 12px;
            `}
          >
            카카오톡으로 로그인
          </Button>
        ),
      }}
    />
  );
};
