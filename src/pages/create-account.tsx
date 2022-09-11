import { GetServerSidePropsContext } from "next"
import { authGuard } from "../utils/guards/auth"

const CreateAccount = () => {

  return <h1> Welcome to Bubble, new User!</h1>
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  return await authGuard(context)
}

export default CreateAccount
