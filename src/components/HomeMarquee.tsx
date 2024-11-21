import { Link } from 'react-router-dom'
import Marquee from './Marquee'


const HomeMarquee = () => {

  return (
    <Marquee>
      <Link className='block p-5' to={'/collections/new-in'}>
        🌸 🌼  NEW ARRIVALS 🌸 🌼
      </Link>
    </Marquee>
  )
}

export default HomeMarquee