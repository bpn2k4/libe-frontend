import { Link } from 'react-router-dom'

import { twMerge } from '@hooks'

const ShopFooter = () => {

  const sections: FooterSection[] = [
    {
      title: 'ABOUT US',
      items: [
        { title: 'Our Story', link: '/' },
        { title: 'LIBÉ Stores', link: '/' },
        { title: 'Join LIBÉ Team', link: '/' },
      ]
    },
    {
      title: 'HELP & INFORMATION',
      items: [
        { title: 'LIBÉcommunity', link: '/' },
        { title: 'Exchange & Return Policy', link: '/' },
        { title: 'How To Order', link: '/' },
        { title: 'Size Guide', link: '/' },
        { title: 'Payment Method', link: '/' },
        { title: 'Shipping', link: '/' },
        { title: 'Privacy Policy', link: '/' },
      ]
    },
    {
      title: 'CUSTOMER SERVICE',
      items: [
        { title: '(+84) 909 408 169', link: '/' },
        { title: 'support@libe.clothing', link: '/' },
      ]
    },
    {
      title: '© LIBÉ',
      items: [
        { title: 'RMNT Limited Company Business Registration No. 0315840235 issued on 09/08/2019 by department of Planning and Investment HCMC.' },
      ]
    },
  ]

  return (
    <footer className='w-full pb-10'>
      <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 px-3'>
        {sections.map(({ title, items }, index) => (
          <FooterSection
            key={index}
            title={title}
            items={items} />
        ))}
      </div>
    </footer>
  )
}

const FooterSection = (props: FooterSectionProps) => {

  const { title, items = [] } = props

  return (
    <div className='flex flex-col gap-1'>
      <span className='py-3 mb-3 border-b text-xl font-medium'>{title}</span>
      {items.map(({ title, link, onClick }, index) => (
        <FooterItem
          key={index}
          title={title}
          link={link}
          onClick={onClick}
        />
      ))}
    </div>
  )
}

const FooterItem = (props: FooterItemProps) => {

  const { title, link, onClick } = props

  return (
    link ? (
      <Link to={link} className={twMerge(
        'px-2 text-left leading-8 rounded transition-opacity',
        link && 'hover:opacity-50'
      )}>
        {title}
      </Link>
    ) : (
      <button onClick={onClick} className={twMerge(
        'px-2 text-left leading-8 rounded transition-opacity',
        onClick ? 'hover:opacity-50' : 'cursor-default'
      )}>
        {title}
      </button>
    )
  )
}

type FooterItem = {
  title?: string,
  link?: string,
  onClick?: () => void
}

type FooterItemProps = FooterItem

type FooterSection = {
  title?: string,
  items: FooterItem[]
}

type FooterSectionProps = FooterSection

export default ShopFooter
