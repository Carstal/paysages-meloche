import nav_auth from "./nav_auth";
import nav_no_auth from "./nav_no_auth";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function NavDynamic() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  if (!user) {
    return nav_no_auth();
  } else {
    return user && nav_auth(user);
  }
}
