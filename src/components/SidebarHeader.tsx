const SidebarHeader = () => {
  return (
    <div className="flex flex-col p-4 gap-y-2">
      <div className="flex flex-row  items-center">
        <div className="grow w-fit text-3xl font-bold">Chats</div>

        <button className="bg-transparent hover:bg-rose-600 rounded-lg w-9 h-9 flex text-3xl justify-center items-center">
            <div className="h-min">+</div>
        </button>
      </div>

      <div>
        <input
          className="px-4 py-2 focus:outline-none focus:border-rose-600 focus:ring-1 focus:ring-rose-600  bg-neutral-900 border-white/30 border-2 placeholder:text-white/50 rounded-xl w-full"
          placeholder="Search"
        />
      </div>
    </div>
  )
}

export default SidebarHeader
