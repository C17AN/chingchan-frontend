export const useAuthenticationGuard = () => {
  const { user } = useUser();

  useEffect(() => {
    if (!user) {
      Router.push("/login");
    }
  }, [user]);
};
