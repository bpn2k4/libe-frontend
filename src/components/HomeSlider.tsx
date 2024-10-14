import { Link } from 'react-router-dom'
import Slider from './Slider'


const HomeSlider = () => {

  const items = [
    {
      image: 'https://theme.hstatic.net/1000370106/1000775487/14/slideshow_1.jpg',
      path: '/'
    },
    {
      image: 'https://theme.hstatic.net/1000370106/1000775487/14/slideshow_2.jpg',
      path: '/'
    },
    {
      image: 'https://theme.hstatic.net/1000370106/1000775487/14/slideshow_3.jpg',
      path: '/'
    },
    {
      image: 'https://theme.hstatic.net/1000370106/1000775487/14/slideshow_4.jpg',
      path: '/'
    },
  ]

  return (
    <Slider>

      {items.map((item, index) => (
        <Link key={index} to={item.path}>
          <img
            src={item.image} />
        </Link>
      ))}

    </Slider>
  )
}

export default HomeSlider