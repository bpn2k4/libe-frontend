import { GroupPictureHome, GroupStory, Marquee } from '~/components'

export const Home = () => {

  return (
    <main className='w-full'>
      <GroupPictureHome />
      <Marquee />
      <GroupStory />
    </main>
  )
}