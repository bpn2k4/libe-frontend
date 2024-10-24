import { Link } from 'react-router-dom'
import Carousel from './Carousel'


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
    <Carousel
      showDots={true}
      autoPlay={true}
      duration={3000}
      showArrows={true}>
      {items.map((item, index) => (
        <Link key={index} to={item.path}>
          <img
            src={item.image} />
        </Link>
      ))}
    </Carousel>
  )
}

export default HomeSlider