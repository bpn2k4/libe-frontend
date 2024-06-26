import { twMerge } from '@hooks'

export const IconSun: Icon = ({ className }) => (
  <svg viewBox='0 0 24 24' className={twMerge('w-6 h-6 stroke-current fill-none stroke-2', className)}>
    <path d='M12 3V4M12 20V21M4 12H3M6.31412 6.31412L5.5 5.5M17.6859 6.31412L18.5 5.5M6.31412 17.69L5.5 18.5001M17.6859 17.69L18.5 18.5001M21 12H20M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)

export const IconMoon: Icon = ({ className }) => (
  <svg viewBox='0 0 24 24' className={twMerge('w-6 h-6 fill-current', className)}>
    <path d='M3.32031 11.6835C3.32031 16.6541 7.34975 20.6835 12.3203 20.6835C16.1075 20.6835 19.3483 18.3443 20.6768 15.032C19.6402 15.4486 18.5059 15.6834 17.3203 15.6834C12.3497 15.6834 8.32031 11.654 8.32031 6.68342C8.32031 5.50338 8.55165 4.36259 8.96453 3.32996C5.65605 4.66028 3.32031 7.89912 3.32031 11.6835Z' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)

export const IconCaret: Icon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={twMerge('w-2 h-2 fill-current', className)}>
    <path d="M11.125 16.313l7.688-7.688 3.594 3.719-11.094 11.063-11.313-11.313 3.5-3.531z" />
  </svg>
)

export const IconCancel: Icon = ({ className }) => (
  <svg viewBox='0 0 24 24' className={twMerge('w-6 h-6 stroke-current', className)}>
    <path d="M6.75827 17.2426L12.0009 12M17.2435 6.75736L12.0009 12M12.0009 12L6.75827 6.75736M12.0009 12L17.2435 17.2426" />
  </svg>
)

export const IconSpinner: Icon = ({ className }) => (
  <svg viewBox="0 0 100 101" className={twMerge("w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600", className)}>
    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
  </svg>
)

export const IconSearch: Icon = ({ className }) => (
  <svg viewBox='0 0 24 24' className={twMerge('w-6 h-6 stroke-current stroke-2 fill-none', className)}>
    <path d="M14.9536 14.9458L21 21M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export const IconCart: Icon = ({ className }) => (
  <svg viewBox='0 0 24 24' className={twMerge('w-6 h-6 stroke-current stroke-2 fill-none', className)}>
    <path d="M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export const IconUser: Icon = ({ className }) => (
  <svg viewBox='0 0 24 24' className={twMerge('w-6 h-6 stroke-current stroke-2 fill-none', className)}>
    <path d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export const IconThreeLine: Icon = ({ className }) => (
  <svg viewBox='0 0 20 20' className={twMerge('w-6 h-6 fill-current', className)}>
    <path d="M2 4.75C2 4.33579 2.33579 4 2.75 4H17.25C17.6642 4 18 4.33579 18 4.75C18 5.16421 17.6642 5.5 17.25 5.5H2.75C2.33579 5.5 2 5.16421 2 4.75Z" />
    <path d="M2 9.75C2 9.33579 2.33579 9 2.75 9H17.25C17.6642 9 18 9.33579 18 9.75C18 10.1642 17.6642 10.5 17.25 10.5H2.75C2.33579 10.5 2 10.1642 2 9.75Z" />
    <path d="M2.75 14C2.33579 14 2 14.3358 2 14.75C2 15.1642 2.33579 15.5 2.75 15.5H17.25C17.6642 15.5 18 15.1642 18 14.75C18 14.3358 17.6642 14 17.25 14H2.75Z" />
  </svg>
)
export const IconImagePlaceHolder: Icon = ({ className }) => (
  <svg viewBox="0 0 20 18" className={twMerge('w-14 h-14 text-gray-300 dark:text-gray-600', className)}>
    <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
  </svg>
)
export const IconCheck: Icon = ({ className }) => (
  <svg viewBox='0 0 24 24' className={twMerge('w-6 h-6 stroke-current stroke-2 fill-none', className)}>
    <path d="M4 12.6111L8.92308 17.5L20 6.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)
export const IconHome: Icon = ({ className }) => (
  <svg viewBox='0 0 24 24' className={twMerge('w-6 h-6 stroke-current stroke-2 fill-none', className)}>
    <path d="M3.99999 10L12 3L20 10L20 20H15V16C15 15.2044 14.6839 14.4413 14.1213 13.8787C13.5587 13.3161 12.7956 13 12 13C11.2043 13 10.4413 13.3161 9.87868 13.8787C9.31607 14.4413 9 15.2043 9 16V20H4L3.99999 10Z" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)
export const IconBell: Icon = ({ className }) => (
  <svg viewBox='0 0 24 24' className={twMerge('w-6 h-6 stroke-current stroke-2 fill-none', className)}>
    <path d="M9 17V18C9 18.394 9.0776 18.7841 9.22836 19.1481C9.37913 19.512 9.6001 19.8427 9.87868 20.1213C10.1573 20.3999 10.488 20.6209 10.8519 20.7716C11.2159 20.9224 11.606 21 12 21C12.394 21 12.7841 20.9224 13.1481 20.7716C13.512 20.6209 13.8427 20.3999 14.1213 20.1213C14.3999 19.8427 14.6209 19.512 14.7716 19.1481C14.9224 18.7841 15 18.394 15 18V17M18 9C18 12 20 17 20 17H4C4 17 6 13 6 9C6 5.732 8.732 3 12 3C15.268 3 18 5.732 18 9Z" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)
export const IconTrashCan: Icon = ({ className }) => (
  <svg viewBox='0 0 24 24' className={twMerge('w-6 h-6 stroke-current stroke-2 fill-none', className)}>
    <path d="M10 10V16M14 10V16M18 6V18C18 19.1046 17.1046 20 16 20H8C6.89543 20 6 19.1046 6 18V6M4 6H20M15 6V5C15 3.89543 14.1046 3 13 3H11C9.89543 3 9 3.89543 9 5V6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)
export const IconDownload: Icon = ({ className }) => (
  <svg viewBox='0 0 24 24' className={twMerge('w-6 h-6 stroke-current stroke-2 fill-none', className)}>
    <path d="M20 15V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18L4 15M8 11L12 15M12 15L16 11M12 15V3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)
export const IconBag: Icon = ({ className }) => (
  <svg viewBox='0 0 24 24' className={twMerge('w-6 h-6 stroke-current stroke-2 fill-none', className)}>
    <path d="M8 11.01V11M16 11.01V11M8 8V7C8 5.93913 8.42143 4.92172 9.17157 4.17157C9.92172 3.42143 10.9391 3 12 3C13.0609 3 14.0783 3.42143 14.8284 4.17157C15.5786 4.92172 16 5.93913 16 7V8M8 8H6.84027C5.80009 8 4.93356 8.79732 4.84718 9.83391L4.18051 17.8339C4.08334 18.9999 5.00352 20 6.1736 20H17.8264C18.9965 20 19.9167 18.9999 19.8195 17.8339L19.1528 9.83391C19.0664 8.79732 18.1999 8 17.1597 8H16M8 8H16" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)
export const IconMessage: Icon = ({ className }) => (
  <svg viewBox='0 0 24 24' className={twMerge('w-6 h-6 stroke-current stroke-2 fill-none', className)}>
    <path d="M8 9.5H15M8 13.5H13M15.3 19.1L21 21L19.1 15.3C19.1 15.3 20 14 20 11.5C20 6.80558 16.1944 3 11.5 3C6.80558 3 3 6.80558 3 11.5C3 16.1944 6.80558 20 11.5 20C14.0847 20 15.3 19.1 15.3 19.1Z" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)
export const IconList: Icon = ({ className }) => (
  <svg viewBox='0 0 24 24' className={twMerge('w-6 h-6 stroke-current stroke-2 fill-none', className)}>
    <path d="M8 8H19M8 12H19M8 16H19M5 8V8.00999M5 12V12.01M5 16V16.01" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)
export const IconCaretDouble: Icon = ({ className }) => (
  <svg viewBox='0 0 24 24' className={twMerge('w-6 h-6 stroke-current stroke-2 fill-none', className)}>
    <path d="M7 13L12 18L17 13M7 6L12 11L17 6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)
export const IconCaretThick: Icon = ({ className }) => (
  <svg viewBox='0 0 24 24' className={twMerge('w-6 h-6 stroke-current stroke-2 fill-none', className)}>
    <path d="M6 9L12 15L18 9" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)
export const IconPlus: Icon = ({ className }) => (
  <svg viewBox='0 0 24 24' className={twMerge('w-6 h-6 stroke-current stroke-2 fill-none', className)}>
    <path d="M4 12H20M12 4V20" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)
export const IconPen: Icon = ({ className }) => (
  <svg viewBox='0 0 24 24' className={twMerge('size-6 stroke-current stroke-2 fill-none', className)}>
    <path d="M15.4998 5.50067L18.3282 8.3291M13 21H21M3 21.0004L3.04745 20.6683C3.21536 19.4929 3.29932 18.9052 3.49029 18.3565C3.65975 17.8697 3.89124 17.4067 4.17906 16.979C4.50341 16.497 4.92319 16.0772 5.76274 15.2377L17.4107 3.58969C18.1918 2.80865 19.4581 2.80864 20.2392 3.58969C21.0202 4.37074 21.0202 5.63707 20.2392 6.41812L8.37744 18.2798C7.61579 19.0415 7.23497 19.4223 6.8012 19.7252C6.41618 19.994 6.00093 20.2167 5.56398 20.3887C5.07171 20.5824 4.54375 20.6889 3.48793 20.902L3 21.0004Z" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)
export const IconGear: Icon = ({ className }) => (
  <svg viewBox='0 0 24 24' className={twMerge('size-6 stroke-current stroke-2 fill-none', className)}>
    <path d="M17.2994 10.4527L19.2267 10.7677C19.3846 10.7935 19.5003 10.9298 19.5 11.0896V12.883C19.5 13.0412 19.3865 13.1768 19.2303 13.2042L17.3004 13.543C17.1885 13.9298 17.0349 14.3022 16.8415 14.6543L17.9823 16.2382C18.0759 16.3679 18.0612 16.5463 17.9483 16.6595L16.6804 17.9283C16.5682 18.0401 16.3921 18.0561 16.2623 17.9645L14.6627 16.8424C14.3099 17.0387 13.9352 17.1952 13.5442 17.3103L13.2034 19.231C13.176 19.3865 13.0406 19.5 12.8825 19.5H11.0888C10.9294 19.5 10.7934 19.3849 10.7676 19.228L10.4493 17.3168C10.059 17.204 9.6823 17.0485 9.32585 16.8525L7.73767 17.9648C7.60821 18.0558 7.43178 18.0401 7.31992 17.9283L6.05198 16.6595C5.93947 16.5463 5.9248 16.3686 6.01741 16.2391L7.13958 14.6697C6.94163 14.3116 6.78444 13.9337 6.67062 13.5414L4.76905 13.2042C4.61349 13.1765 4.5 13.0412 4.5 12.883V11.0896C4.5 10.9304 4.61544 10.7941 4.77263 10.768L6.67421 10.4514C6.78868 10.0582 6.94586 9.68022 7.14316 9.32315L6.0347 7.73739C5.94371 7.60793 5.95937 7.43185 6.07122 7.32L7.33883 6.0525C7.452 5.94 7.62908 5.925 7.7592 6.01793L9.33433 7.14293C9.68817 6.94924 10.0639 6.795 10.4552 6.6825L10.767 4.77359C10.7927 4.61576 10.929 4.5 11.0888 4.5H12.8825C13.041 4.5 13.1763 4.61413 13.2037 4.77L13.5399 6.68935C13.929 6.8025 14.304 6.95837 14.6591 7.15467L16.2385 6.01957C16.3683 5.92598 16.5464 5.94065 16.6595 6.05348L17.9278 7.32098C18.0397 7.43315 18.0553 7.60957 17.9643 7.73902L16.8392 9.34239C17.0323 9.69424 17.1865 10.066 17.2994 10.4527ZM9.71725 12C9.71725 13.2607 10.7393 14.2826 12.0001 14.2826C13.2608 14.2826 14.2829 13.2607 14.2829 12C14.2829 10.7394 13.2608 9.71742 12.0001 9.71742C10.7393 9.71742 9.71725 10.7394 9.71725 12Z" />
  </svg>
)

type IconProps = {
  className?: string
}
type Icon = (props: IconProps) => JSX.Element