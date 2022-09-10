import { GetServerSidePropsContext } from "next";
import { getServerAuthSession } from "../../server/common/get-server-auth-session";

export async function guestGuard(context: GetServerSidePropsContext) {
  const session = await getServerAuthSession(context)

  if (!!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  return {
    props:  {},
  }
}