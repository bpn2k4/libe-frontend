import HomeGroupImage from '@components/HomeGroupImage'
import HomeGroupStory from '@components/HomeGroupStory'
import HomeMarquee from '@components/HomeMarquee'
import HomeSlider from '@components/HomeSlider'
import HomeSubscribe from '@components/HomeSubscribe'

const Home = () => {

  return (
    <div className='w-full'>
      {/* 
      <button className='px-4 py-2 border' onClick={() => {
        dispatch(setTheme(theme == 'light' ? 'dark' : 'light'))
      }}>
        Click Me
      </button> */}
      <HomeGroupImage />
      <HomeMarquee />
      <HomeSlider />
      <HomeGroupStory />
      <HomeSubscribe />
    </div>
  )
}

export default Home