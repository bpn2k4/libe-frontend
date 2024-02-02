import { ToggleTheme } from "./ToggleTheme"

export const AdminHeader = () => {

  return (
    <header className='w-full h-14 flex flex-row items-center border-b border-main'>
      <ToggleTheme />
    </header>
  )
}