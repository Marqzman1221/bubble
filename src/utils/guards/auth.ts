import { GetServerSidePropsContext } from 'next'
import { authOptions } from '../../pages/api/auth/[...nextauth]'
import { getServerAuthSession } from '../../server/common/get-server-auth-session'

export async function authGuard(context: GetServerSidePropsContext) {
  const session = await getServerAuthSession(context)

  if (!session) {
    return {
      redirect: {
        destination: authOptions.pages?.signIn,
        permanent: false,
      },
      props: {
        from: context.req.url,
      },
    }
  }

  return {
    props:  {},
  }
}
