import { GetServerSidePropsContext } from "next"
import { authGuard } from "../utils/guards/auth"

const AccountVerification = () => {
  return <h1> Account Verification </h1>
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  return await authGuard(context)
}

export default AccountVerification
