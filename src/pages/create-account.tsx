import { GetServerSidePropsContext } from "next"
import { authGuard } from "../utils/guards/auth"

const CreateAccount = () => {
  return <h1> Logging out...</h1>
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  return await authGuard(context)
}

export default CreateAccount
