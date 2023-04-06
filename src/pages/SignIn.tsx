import { useSession, signIn, signOut, getProviders } from "next-auth/react";
import { useEffect, useState } from "react";
import { SwitchCase } from "@toss/react";
import { Provider } from "./auth/types/Provider";
import { css } from "@emotion/react";
import { Flex } from "@toss/emotion-utils";
import Container from "@/components/common/Container";

export default function Component() {
  const { data: session } = useSession();
  const [providerList, setProviderList] = useState<Provider>({});
  // const {} = useQuery('');

  const fetchProvider = async () => {
    const providerList = await getProviders();
    setProviderList(() => providerList as unknown as Provider);
  };

  useEffect(() => {
    fetchProvider();
  }, []);

  console.log(Object.values(providerList));

  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <Container>
      <div>오늘부터 시작하는 너와 나의 칭찬</div>
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
          <button onClick={() => signIn(provider.id)} css={css``}>
            구글 계정으로 로그인
          </button>
        ),
        Kakao: (
          <button onClick={() => signIn(provider.id)} css={css``}>
            카카오톡으로 로그인
          </button>
        ),
      }}
    />
  );
};
