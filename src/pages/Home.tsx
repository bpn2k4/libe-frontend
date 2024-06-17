import { useSystemSelector, useDispatch } from "@hooks"
import { setTheme } from "@slices/System"


const Home = () => {

  const { theme } = useSystemSelector()
  const dispatch = useDispatch()


  return (
    <div className="bg-red-400 dark:bg-blue-500 h-[1000px]">Home

      <button className='px-4 py-2 border' onClick={() => {
        dispatch(setTheme(theme == 'light' ? 'dark' : 'light'))
      }}>
        Click Me
      </button>
    </div>
  )
}

export default Home