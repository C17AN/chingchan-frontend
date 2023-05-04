import { ReactNode } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

export const DefaultLayout = ({ children }: { children: ReactNode }) => {
  return <div>{children}</div>;
};

export const ProtectedLayout = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const session = useSession();
  if (session.status === "unauthenticated") {
    router.replace("/auth");
    return null;
  } else return <div>{children}</div>;
};
