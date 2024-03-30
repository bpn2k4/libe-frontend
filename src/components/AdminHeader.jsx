import { ToggleTheme } from "./ToggleTheme"

export const AdminHeader = () => {

  return (
    <header className='w-full h-14 pl-4 pr-5'>
      <div className='flex flex-row items-center justify-between bg-main h-full rounded-b px-2 shadow-primary'>
        <div></div>
        <div className='flex flex-row items-center'>
          <ToggleTheme />
        </div>
      </div>
    </header>
  )
}