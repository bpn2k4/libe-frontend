import { twMerge } from 'tailwind-merge'

export const GroupStory = () => {

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
        <StoryItem
          key={index}
          index={index}
          name={name}
          firstImage={firstImage}
          secondImage={secondImage} />
      ))}
    </div>
  )
}

const StoryItem = ({ index, name, firstImage, secondImage }) => {
  return (
    <div className={twMerge(
      'w-full flex flex-col md:flex-row',
      index % 2 != 0 && 'md:flex-row-reverse'
    )}>
      <button className='w-full md:w-1/2 relative'>
        <img
          className='w-full object-fill'
          src={firstImage} />
        <img
          className='absolute top-0 left-0 w-full bg-no-repeat object-fill opacity-0 transition-opacity duration-500 hover:opacity-100'
          src={secondImage} />
      </button>
      <div className='w-full md:w-1/2 center flex-col'>
        <span className='font-bold text-2xl text-center px-3'>{name}</span>
        <button className='my-5 hover:underline'>#libe3min</button>
        <button className='border rounded-full px-5 py-3 hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all hover:scale-105 active:scale-95'>View Story</button>
      </div>
    </div>
  )
}