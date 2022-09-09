import { useSession } from 'next-auth/react'
import { useMemo } from 'react'

const ProfileFooter = () => {
  const { data: session } = useSession()

  const user = useMemo(() => {
    return session?.user
  }, [session])

  const userInitial = useMemo(() => {
    return user?.name?.charAt(0)
  }, [user])

  if (!user) return null

  return (
    <div className="b-profile-footer">
      <div className="flex h-full items-center justify-center">
        <div className="flex rounded-full bg-rose-600 text-white text-2xl w-12 h-12 justify-center items-center">
          <span className="h-min">{userInitial}</span>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="font-bold text-lg">{user.name}</div>
      </div>
    </div>
  )
}

export default ProfileFooter
