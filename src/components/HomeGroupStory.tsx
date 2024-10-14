import { Link } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'
import Image from './Image'


const HomeGroupStory = () => {

  const stories = [
    {
      name: 'BST TẾT CHÀO MÙA HOA: CÙNG BẠN BƯỚC VÀO MỘT NĂM MỚI KHỞI SẮC',
      tag: '',
      firstImage: 'https://theme.hstatic.net/1000370106/1000775487/14/home_list_story_img_1.jpg?v=1847',
      secondImage: 'https://theme.hstatic.net/1000370106/1000775487/14/home_list_story_img_1_hover.jpg?v=1847'
    },
    {
      name: 'THE PARTY EDIT | LẤP LÁNH NHƯ NHỮNG NGÔI SAO CỦA BUỔI TIỆC',
      tag: '',
      firstImage: 'https://theme.hstatic.net/1000370106/1000775487/14/home_list_story_img_2.jpg?v=1847',
      secondImage: 'https://theme.hstatic.net/1000370106/1000775487/14/home_list_story_img_2_hover.jpg?v=1847'
    },
    {
      name: 'ĐỪNG QUÊN CHĂM SÓC KHU VƯỜN TINH THẦN CỦA RIÊNG MÌNH!',
      tag: '',
      firstImage: 'https://theme.hstatic.net/1000370106/1000775487/14/home_list_story_img_3.jpg?v=1847',
      secondImage: 'https://theme.hstatic.net/1000370106/1000775487/14/home_list_story_img_3_hover.jpg?v=1847'
    },
  ]

  return (
    <div className='w-full'>
      {stories.map(({ name, firstImage, secondImage }, index) => (
        <ItemStory
          key={index}
          reserved={index % 2 !== 0}
          name={name}
          firstImage={firstImage}
          secondImage={secondImage} />
      ))}
    </div>
  )
}

const ItemStory = (props: ItemStoryProps) => {

  const { reserved, name, firstImage, secondImage } = props

  return (
    <div className={twMerge(
      'w-full flex flex-col md:flex-row',
      reserved && 'md:flex-row-reverse'
    )}>
      <Link
        to={'/'}
        className='w-full md:w-1/2 relative group'>
        <Image
          className='w-full aspect-9/16'
          src={firstImage} />
        <Image
          className='w-full absolute top-0 left-0 right-0 bottom-0 z-2 opacity-0 hover:opacity-100 transition-opacity duration-500'
          src={secondImage} />
      </Link>
      <div className='w-full md:w-1/2 flex items-center justify-center flex-col py-12'>
        <span className='font-bold text-2xl text-center px-3'>{name}</span>
        <button className='my-5 hover:underline'>#libe3min</button>
        <button className='border rounded-full px-5 py-3 hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all active:scale-95'>View Story</button>
      </div>
    </div>
  )
}

type ItemStoryProps = {
  reserved?: boolean,
  name?: string,
  description?: string
  hashtag?: string,
  firstImage?: string,
  secondImage?: string
}


export default HomeGroupStory