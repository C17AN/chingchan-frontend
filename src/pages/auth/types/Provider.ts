export type Provider = Record<
  string,
  {
    callbackUrl: string;
    id: string;
    name: string;
    signinUrl: string;
    type: string;
  }
>;
