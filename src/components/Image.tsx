import { twMerge } from 'tailwind-merge'
import { IconImagePlaceHolder } from './Icon'


const Image = (props: ImageProps) => {

  const { alt = '', src = '', className, style, skeleton = false, cx, children } = props

  return (
    <div className={twMerge('relative overflow-hidden', className, cx?.wrapper)}>
      <img
        src={src}
        alt={alt}
        style={style}
        loading={skeleton ? 'lazy' : undefined}
        className={twMerge('absolute z-[2] object-cover bg-no-repeat w-full h-full', cx?.img)} />
      {skeleton && (
        <div className={twMerge('absolute skeleton top-0 left-0 right-0 bottom-0 center', cx?.skeleton)}>
          <IconImagePlaceHolder className={twMerge('z-[1]', cx?.icon)} />
        </div>
      )}
      {children}
    </div>
  )
}

type ImageProps = {
  src?: string,
  alt?: string,
  className?: string,
  style?: React.CSSProperties,
  skeleton?: boolean,
  cx?: {
    wrapper?: string,
    img?: string,
    icon?: string,
    skeleton?: string
  },
  children?: React.ReactNode
}

export default Image