import { GetServerSidePropsContext } from "next"
import { authGuard } from "../utils/guards/auth"

const Logout = () => {
  return (
    <h1> Log Out </h1>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  return await authGuard(context)
}

export default Logout