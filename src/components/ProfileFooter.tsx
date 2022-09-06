const ProfileFooter = () => {
  const user = {
    first_name: "Tristan",
    last_name: "Marquise",
  }

  return (
    <div className="b-profile-footer">
      <div className="flex h-full items-center justify-center">
        <div className="flex rounded-full bg-rose-600 text-neutral-900 text-white text-2xl w-12 h-12 justify-center items-center">
          <span className="h-min">{user.first_name?.charAt(0)}</span>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="font-bold text-lg">
          {user.first_name} {user.last_name}
        </div>
      </div>
    </div>
  )
}

export default ProfileFooter
