import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useSearchParams } from 'react-router-dom'

import Breadcrumb from '@components/Breadcrumb'
import CollectionSlider from '@components/CollectionSlider'
import Select from '@components/Select'
import Pagination from '@components/Pagination'
import GridProduct from '@components/GridProduct'
import Utils from '@utils'

const CollectionDetail = () => {

  const { t } = useTranslation()

  const [collection,] = useState({
    name: 'DENIM WEAR',
    description: 'Shop our Denim Ware line with all the elegant and comfy pieces suitable for both office and outing.',
  })

  const [sortBy, setSortBy] = useState({
    id: -1,
    label: t('Default')
  })

  const breadcrumbItems = [
    { name: t('Home'), path: '/' },
    { name: t('Collection'), path: '/collections' },
    { name: 'DENIM WEAR', path: '/collections/denim-ware' },
  ]

  const options = [
    { id: 0, label: t('NameAscending') },
    { id: 1, label: t('NameDescending') },
    { id: 2, label: t('PriceAscending') },
    { id: 3, label: t('PriceDescending') },
    { id: 4, label: t('Newest') },
    { id: 5, label: t('Oldest') },
  ]

  const [loading, setLoading] = useState(true)


  const [searchParams] = useSearchParams()
  const page = (() => {
    const pageParam = searchParams.get('page')
    const parsedPage = Number(pageParam)
    return pageParam && !isNaN(parsedPage) && parsedPage > 0 ? parsedPage : 1
  })()

  useEffect(() => {
    setLoading(true)
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)
    return () => {
      clearTimeout(timer)
    }
  }, [sortBy, page])

  const getProducts = () => {
    if (sortBy.id === 0) {
      return [...products].sort((a, b) => a.name.localeCompare(b.name))
    }
    if (sortBy.id === 1) {
      return [...products].sort((a, b) => b.name.localeCompare(a.name))
    }
    if (sortBy.id === 2) {
      return [...products].sort((a, b) => a.price - b.price)
    }
    if (sortBy.id === 3) {
      return [...products].sort((a, b) => b.price - a.price)
    }
    return products
  }

  useEffect(() => {
    Utils.GlobalComponent.Container.scrollToTop()
  }, [])

  return (
    <div className='w-full'>
      <Breadcrumb
        className='px-4 xl:px-0'
        items={breadcrumbItems}
      />
      <CollectionSlider
        name={collection.name}
        description={collection.description} />

      <div className='w-full flex flex-row justify-between px-4 py-4 xl:px-0'>
        <span>{collection.name}</span>
        <div className='flex flex-row items-center gap-2'>
          <span>{t('SortBy')}</span>
          <Select
            className='z-5'
            position='bottom'
            label={t(sortBy.label)}
            options={options}
            onSelect={option => {
              setSortBy({
                id: option.id as number,
                label: option.label as string,
              })
            }} />
        </div>
      </div>
      <GridProduct
        className='w-full px-4 xl:px-0'
        skeleton={loading}
        products={getProducts().slice((page - 1) * 20, page * 20)} />

      <div className='w-full py-4 flex flex-col items-center'>
        <Pagination
          page={page}
          link={true}
          renderLink={page => `/collections/denim-ware?page=${page}`}
          totalPage={10} />
      </div>

    </div>
  )
}

export default CollectionDetail




const products = [
  {
    "name": "Ruffle Embroidered Skorts",
    "price": 410000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/5.1_43235b14433f4bf1ba2def484bd32f43_master.jpeg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/5.2_7b688ac81be14bf3a06662d0413d084d_master.jpeg"
  },
  {
    "name": "Striped Flowy Shirt",
    "price": 390000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/8.6_29982d41e8154524968251a796de1820_master.jpeg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/8.2_052fa34d370b4d2596b5ecc9bbaa4c6a_master.jpeg"
  },
  {
    "name": "Wide Leg Striped Trousers",
    "price": 530000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/7.1_3698be3be99b4f34901fb878d84cf06e_master.jpeg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/7.2_33146de650c54ffbbac60beeca0ac6aa_master.jpeg"
  },
  {
    "name": "Lace Mini Skirt",
    "price": 390000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/4.1_77371881c5a34c31bfab91a9672b3c8c_master.jpeg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/4.2_4d808123048741c0a9601adbb25f7c49_master.jpeg"
  },
  {
    "name": "Cut Out Midi Dress",
    "price": 570000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/15.1_eb9d280b5a12405497444a759f64922b_master.jpeg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/15.2_3ae1dd2dc13d4fc6b1f289480bbde25e_master.jpeg"
  },
  {
    "name": "Ruched Asymmetrical Top",
    "price": 340000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/14.1_d39f6f802ab247d2b967de09fda63e68_master.jpeg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/14.2_9986e289379747d2b7fe27586614568d_master.jpeg"
  },
  {
    "name": "Smock Mini Dress",
    "price": 530000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/11.1_12fbde82422142c99eefebda27dc0fcb_master.jpeg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/11.2_a7c349dfecf44d0facf36f969e7bdd37_master.jpeg"
  },
  {
    "name": "Lace Bow Top",
    "price": 360000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/5.1_4f0fde1e826a4cd6bf849dfa4b21c370_master.jpeg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/5.2_705e9febe5524ce398eff8e3949c0a55_master.jpeg"
  },
  {
    "name": "Lace Bow Top",
    "price": 360000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/2.1_0cf603709e0d42da86990e0768b01ef9_master.jpeg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/2.2_f97f64e65e4b4bbabe8ffeb74fbe19f7_master.jpeg"
  },
  {
    "name": "Polkat Dot Bubble Top",
    "price": 370000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/8.1_b505b99a1ffb4eedb8b601fbd5d0c78b_master.jpeg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/8.2_37adbef985e24db2bd80ee51539149d5_master.jpeg"
  },
  {
    "name": "V-neck Mini Dress",
    "price": 530000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/10.1_07f7d572bbd84f6e9ea2b0e4db944ae1_master.jpeg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/10.2_5fd129f4eed54ba1a2c677838ee33870_master.jpeg"
  },
  {
    "name": "Asymmetrical Neckline Midi Dress",
    "price": 570000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/dsc08407-enhanced-nr_b291a466c85448caa3a0440f315ec152_master.jpeg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/9.2_97d52398287841279ed54fee98b03f8f_master.jpeg"
  },
  {
    "name": "Striped Cargo Trousers",
    "price": 530000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/1.1_7aa9757545f648a8987d8b51a3b05768_master.jpeg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/1.2_0cab5d2033af483b857c10fe47ab95fd_master.jpeg"
  },
  {
    "name": "Striped Elastic Shorts",
    "price": 350000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/6.1_ba4479cdf48747779a825dd98b2fb445_master.jpeg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/6.2_783a368e77544be79349a7cb96153049_master.jpeg"
  },
  {
    "name": "Striped Elastic Shorts",
    "price": 350000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/12.1_093950f87314431e926d74c2f062b0f2_master.jpeg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/12.2_96b8360e6ab44e23a9277d9c498ee7e9_master.jpeg"
  },
  {
    "name": "Striped Crop Shirt",
    "price": 400000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/7.1_b57b72b5d7dd4f81842d1d69c8fdfd0c_master.jpeg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/7.2_4ab136e781184f8b9608bfe9332002a2_master.jpeg"
  },
  {
    "name": "Striped Crop Shirt",
    "price": 400000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/13.1_5a5dd8cae4bd458f9bb946f8271cd809_master.jpeg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/13.2_558e838db2864d8e9475b621315b50c5_master.jpeg"
  },
  {
    "name": "Floral Halter Neck Top",
    "price": 350000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/3.1_1c07551d6e0f47cdab239a3a114fc697_master.jpeg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/3.2_aab00bd2190e49efbd2e6e9f272e9052_master.jpeg"
  },
  {
    "name": "Stretchy Layered Camisole",
    "price": 280000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/9.1_748740b874df486bb96e80ce36c30e27_master.jpeg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/9.2_5938d42931db4ca1b2891f938e248044_master.jpeg"
  },
  {
    "name": "Loose Long Sleeves Top",
    "price": 320000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/10.1_f32b005296994d9497d75ee8df068b15_master.jpeg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/10.2_91638270412048aa8bd0e11f0e57488a_master.jpeg"
  },
  {
    "name": "Button Fitted Gilet",
    "price": 390000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/3.1_6bf63aeb1c0f498787674b31921cbd4f_master.jpeg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/3.2_97d8b4da08aa4a6bac3f174f1ad052c2_master.jpeg"
  },
  {
    "name": "Straight Leg Trousers",
    "price": 510000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/1.1_1df09a376a4a498d8ee98c4cb272d3cc_master.jpeg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/1.2_9a85e0c766ad4dd28927042fa66ffb32_master.jpeg"
  },
  {
    "name": "Guipure Mini Skirt",
    "price": 440000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/12.1_b40c5ab3075d408dad44fbac6863a80f_master.jpeg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/12.2_e11d74a0f2534dcf82fe58fe4fcf7d1b_master.jpeg"
  },
  {
    "name": "Balloon Maxi Skirt",
    "price": 480000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/8.1_6d0b7e7002cd4af29a2bff344b3ae309_master.jpeg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/8.2_49712b6b9d154a999436dc09ea011f63_master.jpeg"
  },
  {
    "name": "Long Sleeves Polo Top",
    "price": 360000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/11.1_dd0b1c3a158f402586ca71120ec4b5fe_master.jpeg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/11.2_677d92486536465180a3609535f07cc8_master.jpeg"
  },
  {
    "name": "Long Sleeves V Neck Top",
    "price": 340000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/2.1_9fc502e5556c4d71925e9abfa4f7655b_master.jpeg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/2.2_4631dde0b0c5497990e83268dc622e4c_master.jpeg"
  },
  {
    "name": "Guipure Crop Shirt",
    "price": 440000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/13.1_2a95d754893a4792af65c8c59d43aecc_master.jpeg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/13.2_f536266e41cb48dc9e7594b05e6a4a6c_master.jpeg"
  },
  {
    "name": "Mini Tent Dress",
    "price": 530000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/14.1_efa34c8476ed4229842e654c0acfa2ad_master.jpeg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/14.2_411eccd57017498d93e1602b1ed59644_master.jpeg"
  },
  {
    "name": "Straight Leg Trousers",
    "price": 510000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/4.1_a3feac6b97fc4dc08a55a22a6d300ea2_master.jpeg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/4.2_b09a44ded9b24cd691994af9a90f4ac9_master.jpeg"
  },
  {
    "name": "Long Sleeves Polo Top",
    "price": 360000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/5.1_eab69046f6d943ada789d3204a298562_master.jpeg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/5.2_dcda66d144b645f0bcc9d0d5d8fc2654_master.jpeg"
  },
  {
    "name": "Striped Midi Dress",
    "price": 540000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/7.1_dedd5e2e3caa4c9c8cc70eb4bd23adb1_master.jpeg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/7.2_2cc4dc8b65ff4ffa976cd5075d26c2f2_master.jpeg"
  },
  {
    "name": "Pencil Mini Skirt",
    "price": 380000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/1.1_48e97a4f52e34ee48b377a0ba55f778c_master.jpeg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/1.2_120052b4e933461dbe4aa6e3b00d6d7f_master.jpeg"
  },
  {
    "name": "Boat Neck Midi Dress",
    "price": 560000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/2.1_6ecd3aeccb8a41668a3fed00aec25ab5_master.jpeg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/2.2_de8a604575db495c8d07cc434a134984_master.jpeg"
  },
  {
    "name": "Glittering Tank Top",
    "price": 280000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/11.1_c5f70865f82944a0ab4347eb98a3246b_master.jpeg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/11.2_e7d893fa80934088a9822b710bca55f3_master.jpeg"
  },
  {
    "name": "Off Shoulder Top",
    "price": 330000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/6.5_286176fd4e4b4a4b8ce16c2d1decdee4_master.jpeg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/6.2_1995e3f7106c416da85b3a8c0040c1bf_master.jpeg"
  },
  {
    "name": "Asymmetrical Neckline Midi Dress",
    "price": 560000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/13.6_591d4129c2004c1bafcc5483e38c2b5d_master.jpeg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/13.2_0e2231f4213d436888910495959c4018_master.jpeg"
  },
  {
    "name": "Layered Slip Dress",
    "price": 510000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/5.1_2ecf9b4bf2db41bbbfd07bede27fd53a_master.jpeg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/5.2_a53244368dbe48768e636e82f65200f5_master.jpeg"
  },
  {
    "name": "Low Waist Pencil Skirt",
    "price": 460000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/3.1_e204cf439365475b8c114acc1f9f5fbc_master.jpeg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/3.2_f4593021fe3b4ac7b482a8ca8fe563dd_master.jpeg"
  },
  {
    "name": "Bow Tie Crop Shirt",
    "price": 420000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/14.1_5f2348271f104e47bdb0dc9cdad30394_master.jpeg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/14.2_0acae787014d430a92884678ded86a3a_master.jpeg"
  },
  {
    "name": "Relaxed Oversized Shirt",
    "price": 420000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/12.1_c6226bff5adf4536b90b2463c74101ce_master.jpeg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/12.2_496cc0b85d3f4f02a204354c1c835a29_master.jpeg"
  },
  {
    "name": "Long Sleeves Buttoned Top",
    "price": 340000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/4.1_cc4702661a3842a48c046253d3cf5c19_master.jpeg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/4.2_e64bbc56669f40159a764b63a3db65a2_master.jpeg"
  },
  {
    "name": "Cotton Long Sleeves Top",
    "price": 320000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/2.3_40662bd93c3c4fcfbaa9ddc6670d3edc_master.jpeg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/2.2_0e7aa119a6a64147a5b284738d53d0da_master.jpeg"
  },
  {
    "name": "Cotton Tank Top",
    "price": 280000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/10.1_65db3916d73746cb9765085056476a65_master.jpeg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/10.2_406bbec7c9f5428ab5fc365fd5fba695_master.jpeg"
  },
  {
    "name": "Wide Leg Trousers",
    "price": 520000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/9.1_96b2a1e7b5b143c584c3da2b0c845a89_master.jpeg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/9.2_ad9a8ab8075b4cb29ffd35b49a9f6278_master.jpeg"
  },
  {
    "name": "White Ruched Shirt",
    "price": 380000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/2.1_a5c2176765de4d9a825417e982626ce1_master.jpeg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/2.2_5d647c805d724711b63cd5bfcf71f056_master.jpg"
  },
  {
    "name": "Floral Mini Dress",
    "price": 520000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/18.1_bbe2307a3eb349d7bef256646d694043_master.jpeg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/18.2_c24ba8d94a1242cf89ba245d1ef27ebf_master.jpeg"
  },
  {
    "name": "Striped Bow Tote",
    "price": 350000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/1.1_ad07b0dcfe0b42d08c8733bdb17463f0_master.jpeg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/1.2_9a966b7f5b45405193f742c54dd08ea2_master.jpeg"
  },
  {
    "name": "Black Ruched Shirt",
    "price": 380000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/6.1_730bec1b490e4abcb2f93c6736eeff9c_master.jpeg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/6.2_4adc02de845645d99d4f2e9a6649c323_master.jpeg"
  },
  {
    "name": "Khaki Micro Shorts",
    "price": 380000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/14.1_2e0b17874d5849178c3352490a0c8c14_master.jpeg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/14.2_4dd114e20ade4b85af1f33ffda63f13c_master.jpeg"
  },
  {
    "name": "Low Waist Shorts",
    "price": 390000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/5.1_81f7bd3c5b144c5c8c5c661da5348a41_master.jpeg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/5.2_6ac576fe81e54d47aad76f70309e117b_master.jpeg"
  },
  {
    "name": "Low Waist Shorts",
    "price": 390000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/3.1_854c7c761513454ca749a94af47ac2cb_master.jpeg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/3.2_53cd5807f37949488d0b11bd7685659e_master.jpeg"
  },
  {
    "name": "Front Zip Trousers",
    "price": 530000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/11.1_ed5d2fa7b5f14163bec142305d75aac1_master.jpeg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/11.2_9a4a7735756d496e94d2225d257d9ed6_master.jpeg"
  },
  {
    "name": "Layer Mini Dress",
    "price": 580000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/10.1_32a2cb4ead4b4e598a28d192250cf280_master.jpeg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/10.2_aa2bc91262ba4262b74897fc607eddae_master.jpeg"
  },
  {
    "name": "Sheer Fitted Top",
    "price": 270000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/1.1_ae8a68dc518749a09d53cbc66c2f8693_master.jpeg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/1.2_1bae20eb4b524f56a780abc06c302ce0_master.jpeg"
  },
  {
    "name": "Sheer Layer Top",
    "price": 390000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/8.1_101e16128dfc4365af1ce9f5939b14eb_master.jpeg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/8.2_92f7434815254a069cfaa58e94b2064e_master.jpeg"
  },
  {
    "name": "Drawstring Midi Dress",
    "price": 560000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/17.1_ff60fa94901b4c78b1f76b412d6eb27b_master.jpeg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/17.2_cbcd40e1e2c74247a1d04d5f071b6b63_master.jpeg"
  },
  {
    "name": "Stretchy Maxi Skirt",
    "price": 470000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/15.1_cb7b24f625234cc6b1e3df461afeb83e_master.jpeg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/15.2_764371ee1fce4104b4cbc460e0adbf71_master.jpeg"
  },
  {
    "name": "One Shoulder Layer Top",
    "price": 370000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/13.1_d6c45e24ea9f4b19a0144a7ef361181d_master.jpeg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/13.2_e7cb4f8770f24f17889ad071a14e5a71_master.jpeg"
  },
  {
    "name": "Stretchy Maxi Skirt",
    "price": 470000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/4.1_347c6b84c424424fa621fb50a8325180_master.jpeg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/4.2_9fa7c93cb490433eaf127f63744091fb_master.jpeg"
  },
  {
    "name": "Off Shoulder Top",
    "price": 370000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/16.1_a41a2c945dd9475a834ca18acd7e49b9_master.jpeg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/16.2_4a4349dc461d495185a430c31d624e23_master.jpeg"
  },
  {
    "name": "Off Shoulder Top",
    "price": 370000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/12.1_56f20d70a8ee434b830bc4323bc8bd66_master.jpeg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/12.2_0accfb97a66842878e310f281a7344da_master.jpeg"
  },
  {
    "name": "Neutral Grey Short Sleeve Ruched Shirt",
    "price": 380000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/10.1_7a69465fae854761bf909c857c57d6ed_master.jpg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/10.2_834a303194f74b7aa41c51d144904ba8_master.jpg"
  },
  {
    "name": "Navy Sporty Elastic Waistband Mini Skirt",
    "price": 340000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/13.1_16d57d9714a44f6d9308b21908fd3e59_master.jpg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/13.2_44fd5b9fb44142bf914c7cf6fde3ccfe_master.jpg"
  },
  {
    "name": "Ruffle Seersucker Top",
    "price": 370000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/15.1_23c9a4b3c2524f2d9052cd91fdefb213_master.jpeg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/15.2_ce5b88b1e9304fcf88a24440d706c973_master.jpeg"
  },
  {
    "name": "Embroidered Oversized Shirt",
    "price": 460000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/12.1_efb5c945cf254f75b5d076c3433da224_master.jpeg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/12.2_97cffaf5e2a442ea8bec451f8bd3c073_master.jpeg"
  },
  {
    "name": "Smock Mini Skort",
    "price": 370000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/5.1_646ebb0a03eb4dcc924756ca3a8e2ba5_master.jpeg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/5.2_a4e389ac7689493bb21def63b40f279b_master.jpeg"
  },
  {
    "name": "Boatneck Mini Dress",
    "price": 490000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/9.1_98cb71160398451c8ade8509ac9f3084_master.jpeg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/9.2_f3d6aa8f1ceb462d84aea9952356c0a9_master.jpeg"
  },
  {
    "name": "Lace Maxi Skirt",
    "price": 470000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/10.1_618192f34c1f40b1ab0c541021f5e953_master.jpeg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/10.2_2e7f5feb62734ed48acf68de3b371072_master.jpeg"
  },
  {
    "name": "Navy Gilet Top",
    "price": 380000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/6.1_f6e41069e1fc4273b39006ea8b2446da_master.jpeg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/6.2_57e2f9dda8b847b0a45b55a2f5ce1bcd_master.jpeg"
  },
  {
    "name": "Puff Drawstring Blouse",
    "price": 380000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/2.1_e3cc9d318be84f8fac2c32ba2702a7c8_master.jpg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/2.2_38547b2d92bf482db105da0149f6a270_master.jpg"
  },
  {
    "name": "Halterneck Mini Dress",
    "price": 440000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/8.1_5abcfa5df84b4a64b2f7c1d06b46b00d_master.jpeg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/8.2_d8d6acdae5f649c8963c2c1118b0f744_master.jpeg"
  },
  {
    "name": "Low Waist Shorts",
    "price": 370000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/4.1_7852e2e0c1604873b397284ad4e0f626_master.jpeg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/4.2_6211d6c1a4594ed38b815505762b656c_master.jpeg"
  },
  {
    "name": "Squared Neckline Midi Dress",
    "price": 530000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/11.1_babf21120f6d48b8b60bddd85d7c7977_master.jpeg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/11.2_7662ece38a3341d9961562d7c8771464_master.jpeg"
  },
  {
    "name": "Lantern Sleeves Blouse",
    "price": 390000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/1.1_c47fd2ebf5a0476e8ece5155543fecc7_master.jpg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/1.2_fad22de0029a416f9c4085f9d9098e4b_master.jpg"
  },
  {
    "name": "Low Waist Shorts",
    "price": 370000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/3.1_9cb88b6f4b3847ac9a8682350525e48e_master.jpeg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/3.2_e295c1dadae848c4a6290fa551a0ed45_master.jpeg"
  },
  {
    "name": "Scoop Neck Top",
    "price": 380000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/7.1_e54f5093ff814087bd1fceb5e648ede0_master.jpeg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/7.2_58a0838665254ccda0afed0611e4c0ac_master.jpeg"
  },
  {
    "name": "Flare Lace Pants",
    "price": 470000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/14.1_82a6443635e84542a840b80d2134479d_master.jpeg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/14.2_a3e9363222ae4368a3e4d6ef5bb52a94_master.jpeg"
  },
  {
    "name": "White Sporty Elastic Waistband Mini Skirt",
    "price": 340000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/12.1_5d04af0e2eee4913a53e28de437888ea_master.jpg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/12.2_f613f8b30768466ebe054bd1fafb1e4c_master.jpg"
  },
  {
    "name": "Sailor Collar Crop Shirt",
    "price": 410000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/10.1_2af5a68d8567417e9a6a3f9cf506f4a4_master.jpg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/10.2_2f0041d98c2640baa6ce6f8c31e017ad_master.jpg"
  },
  {
    "name": "Striped Polo T-shirt",
    "price": 390000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/9.1_edd4aa72cd464d908cd77da57b5a2f32_master.jpg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/9.2_ad6f1712df264659b9354662329fbf03_master.jpg"
  },
  {
    "name": "\"LIBÉ\" Printed Baby Tee",
    "price": 350000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/7.1_e77468683e474de1b8462298015e0959_master.jpg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/7.2_9f92d3040b584f809de862fc8f328e0c_master.jpg"
  },
  {
    "name": "\"LIBÉ\" Printed Baby Tee",
    "price": 350000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/15.1_26d46b4b96534388bfa8f5d1ace7a79f_master.jpg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/15.2_ae5be9e507404020b84f4772d10b851e_master.jpg"
  },
  {
    "name": "Box-Pleated Mid-Length Skirt",
    "price": 430000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/8.4_3167ca84b03b4095938249aa30b6d4c5_master.jpg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/8.1_0544f5d94f40480cadfb769c1b586d4d_master.jpg"
  },
  {
    "name": "Wide Leg Trousers",
    "price": 490000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/4.3_544f0dda0eef4c85ab7e09ebc642de51_master.jpg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/4.1_8ce34538d0424fddbfd8dd7dc591660c_master.jpg"
  },
  {
    "name": "Mid Waist Shorts",
    "price": 380000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/2.3_975ec5a2d8734e35bc1b13694938efd5_master.jpg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/2.1_5049d9f9807b41e393647136a05ac0b0_master.jpg"
  },
  {
    "name": "Crop Polo Neck Top",
    "price": 320000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/16.1_de424733bad348b48594d46eaeaadd88_master.jpg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/16.2_4f0609697b42442caa53f38a0a90a72c_master.jpg"
  },
  {
    "name": "Square Neck Tank Top",
    "price": 270000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/14.1_d9909a97b1194414a2ed0f65dcc657cf_master.jpg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/14.2_b41b273d06b84ca1ae62e720b449e5b6_master.jpg"
  },
  {
    "name": "Crop Polo Neck Top",
    "price": 320000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/5.1_cf35e550eb7e4ed8981d08605822fcea_master.jpg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/5.2_fa4992a2bd3445699613d86935769da0_master.jpg"
  },
  {
    "name": "\"The Parent Choice\" T-shirt",
    "price": 360000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/12.1_cc79f32d3c314167a77529994ac1badb_master.jpg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/12.2_b001465a78054c05b7cdbe564fa71d47_master.jpg"
  },
  {
    "name": "Square Neck Tank Top",
    "price": 270000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/13.1_5ebe05485b36478cad863fffd21fb3ff_master.jpg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/13.2_bb7db0c066ca49c4a60eac419da81bcc_master.jpg"
  },
  {
    "name": "Buckle-Up Mini Dress",
    "price": 510000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/18.1_925d19181ba74f4ebe0f9c0cfb8fa100_master.jpg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/18.2_e81756ada4ba4263ba699fbce4c6a56d_master.jpg"
  },
  {
    "name": "Box Pleated Mini Skirt",
    "price": 390000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/6.3_346aea4ae600488e9079ce9e618ad732_master.jpg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/6.1_0faea7763ec8430994c6ee627675456a_master.jpg"
  },
  {
    "name": "Long-Sleeves Oversize Polo",
    "price": 390000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/3.1_df5e09e3073d47f29eeabe3b737ef96d_master.jpg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/3.2_c1905a604a1642a8a817434b112e58e7_master.jpg"
  },
  {
    "name": "Drop Waist Mini Dress",
    "price": 490000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/17.1_41727cbe5cc44c0bb53ac84c34cb7f2f_master.jpg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/17.2_694ffb78932e4d99a3f7857325f6fb18_master.jpg"
  },
  {
    "name": "Short Sleeves Crop Shirt",
    "price": 380000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/1.1_e143595a1d71436f91db0b4e83aa501f_master.jpg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/1.2_2447c0e5776d4e3eb9c79330ec984e55_master.jpg"
  },
  {
    "name": "Oversize Striped T-Shirt",
    "price": 320000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/11.1_17d6fb2078634fd290c4ac3dff16de48_master.jpg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/11.2_4a6d2dec0dbf4d82b71dbfbb83dd1ff0_master.jpg"
  },
  {
    "name": "Polo Neckline Striped Mini Dress",
    "price": 530000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/17.1_206bc85eac8c4a879d35a1dfe4d28c0c_master.jpeg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/17.2_83d0fc046fe84899a8d71d4fe16c823a_master.jpeg"
  },
  {
    "name": "Black Smock Mini Skirt",
    "price": 380000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/16.4_86001f0b080e4d64bded9f59d84d1ad9_master.jpeg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/16.3_2864c32dac6d4079b0dcd32bb8e2db72_master.jpeg"
  },
  {
    "name": "Black Puff Sleeve Smock Top",
    "price": 410000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/15.1_eee9697a75b64f969d336bf8597e5c04_master.jpeg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/15.2_4c2ab40396604b20aaa7ac52db26925b_master.jpeg"
  },
  {
    "name": "Black Khaki Capri Trousers",
    "price": 480000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/1.1_6325a4130750400e872d005c62ca45eb_master.jpeg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/1.2_cc5783719f8c4891ae22d9735c579712_master.jpeg"
  },
  {
    "name": "Baby Blue Striped Cargo Pants",
    "price": 520000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/13.3_eca51fb685bb4e6bac58c87bb08713d3_master.jpeg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/13.1_4a786dc275434dfbba1571775971be52_master.jpeg"
  },
  {
    "name": "Baby Pink Striped Cargo Pants",
    "price": 520000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/12.4_9288535795404a0aa5b3e1c124bd0f95_master.jpeg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/12.1_d54f0c44e3904f68bb97a4d668549bce_master.jpeg"
  },
  {
    "name": "Butter Yellow Strappy Striped Maxi Dress",
    "price": 520000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/11.1_8cf3a80cbeab4e27ad47d9cc32e93760_master.jpg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/11.2_39d3d40951c34f1e92f085ff0baf4324_master.jpg"
  },
  {
    "name": "Hairline Striped Zipper Pockets Mini Skirt",
    "price": 420000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/10.4_eb3a21eba56044899b174d202411ce8b_master.jpeg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/10.1_b54788e813ca47b89f6638aadd98dd65_master.jpeg"
  },
  {
    "name": "Floral One Shoulder Mesh Top",
    "price": 330000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/9.1_38e1039e6dff43d3b8a90cd20268be32_master.jpeg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/9.2_abc8e0bedbb74d74aa3d0504d0500453_master.jpeg"
  },
  {
    "name": "Medium Blue Wash Loose Fit Jeans",
    "price": 650000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/8.5_f274cdb6a913419e93c030685ed1168c_master.jpeg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/8.1_8415ca4a5ebf4fabacb4abe1e0fe3a71_master.jpeg"
  },
  {
    "name": "Black Zipper Pockets Mini Skirt",
    "price": 420000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/7.4_2cadc2b09ecb4233ace611607b4b6e05_master.jpg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/7.1_6cb20e685290405d8fe8b2be4e517854_master.jpg"
  },
  {
    "name": "Tana Daisy Lace Trimming Shirt",
    "price": 380000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/5.1_7621fb8d543849d29a5046e4ecc65f64_master.jpg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/5.2_4e9dac6a609849768efb232a6fd0d86d_master.jpg"
  },
  {
    "name": "Hairline Striped Khaki Mid Length Skirt",
    "price": 460000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/4.3_767bdc72f2454b918075908fcacb98de_master.jpeg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/4.1_a901ce219b634c5c866d9cb3159cdc28_master.jpeg"
  },
  {
    "name": "Floral Lettuce Hem Mesh Mid Length Skirt",
    "price": 420000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/3.4_5e3d585df91c41138ab23f64b3b0abdc_master.jpg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/3.1_5dbcf33e1cb9489fa4df6a35605f6d80_master.jpeg"
  },
  {
    "name": "White Lace Neckline Babydoll Top",
    "price": 390000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/2.1_fbbf8643a8a641679b8b386c5df52f2c_master.jpeg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/2.2_1bd46e040b894f039ad50d2bb6984158_master.jpeg"
  },
  {
    "name": "Pink Striped Sleeveless Shirt",
    "price": 370000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/1.1_285cfc955eb04e1ca3214dba0042a5bd_master.jpeg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/1.2_62c85863e2644ed4b642ad588343b7de_master.jpeg"
  },
  {
    "name": "Black Layer Long Sleeve Top",
    "price": 370000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/10.1_5a3d0c7954e644e2904ba6e35c17fd59_master.jpg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/10.2_ac8e270586fa436295afc5bb8f668787_master.jpg"
  },
  {
    "name": "Navy Puff Sleeve Smock Top",
    "price": 410000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/16.1_f28ce2d2aa65474a8675ae94b4ffa8ba_master.jpg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/16.2_3fc44c5db8d64b7cb75d58e01a143ed2_master.jpg"
  },
  {
    "name": "Black V-Neck Halter Crop Top",
    "price": 290000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/6.1_267e8329358c496e9356584599b879e0_master.jpg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/6.2_d0c826bd9e9445ed8b6094feaf48f76b_master.jpg"
  },
  {
    "name": "White Smock Mini Skirt",
    "price": 380000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/2.1_6a0684cf73794306b6fe565dcd83c988_master.jpg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/2.2_eb03022f40d64f718f31b72dcdda33a9_master.jpg"
  },
  {
    "name": "Multicolor Crayon Flowers Khaki Skorts",
    "price": 380000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/3.1_ab0187de3ea54bf68797c3d3b3cf6cb3_master.jpeg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/3.2_da975f4908a347fba6fc5049d7d5800b_master.jpeg"
  },
  {
    "name": "Black Low Waist Trousers",
    "price": 520000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/12.1_7a75eed3c52b4d0a84ca64970727ec3d_master.jpg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/12.2_7e16b7a1156f44bcaaa80bbdd76f7e1a_master.jpg"
  },
  {
    "name": "Indigo High Waist Straight Leg Jeans",
    "price": 650000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/20.1_7ae9385caa7342ad8d33a47dea47ca65_master.jpg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/20.2_a0d40dbaa3d44f66951fcf0999b6a463_master.jpg"
  },
  {
    "name": "Black Mid Waist Front Pleats Shorts",
    "price": 380000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/19.1_e16c3f3ce4ab40aeb9da7efa43272c41_master.jpg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/19.3_0b191d59331f4acfb481aca5206575c6_master.jpg"
  },
  {
    "name": "White Buttons Ribbed Raglan Sleeve Top",
    "price": 360000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/17.1_928604568aab4aa5bd6155a595d4133d_master.jpg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/17.2_8b6f9e5d258e4f579ff318b28505016e_master.jpg"
  },
  {
    "name": "Black Buttons Ribbed Raglan Sleeve Top",
    "price": 360000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/16.1_65b49f1d64514f1bb3b22e88772515ce_master.jpg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/16.2_cf425d043e48401b81eb194edef2249e_master.jpg"
  },
  {
    "name": "Black Handkerchief Mini Dress",
    "price": 530000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/15.1_2bcd97b62aa743df9c358900d62460ab_master.jpg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/15.2_cf03997e098a41a291fce71a3abf13b4_master.jpg"
  },
  {
    "name": "Flamingo Pink Layer Mid Length Sheer Skirt",
    "price": 430000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/14.1_a19542122da441dfb9979f46f4b06352_master.jpg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/14.2_42b40efafebd41d3bfac094a97013fd0_master.jpg"
  },
  {
    "name": "Teal Dark Blue Off Shoulder Long Sleeve Top",
    "price": 380000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/11.1_89686645706b4aea9d24c5b254dd1916_master.jpg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/11.2_5b357f9e6bcb4b7fa58c9b34be5e400f_master.jpg"
  },
  {
    "name": "Teal Dark Green Off Shoulder Long Sleeve Top",
    "price": 380000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/10.1_350eafe6c8b143bcb085c080f4bfcc3e_master.jpg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/10.2_6b7e4683db164cb2a2340697c26dad86_master.jpg"
  },
  {
    "name": "Black Sheer Lace Camisole",
    "price": 250000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/9.1_34373a74fdac4249812a988f03144753_master.jpg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/9.2_ecc64967296c459d9b4533bae1080279_master.jpg"
  },
  {
    "name": "Black Sheer Lace Cardigan",
    "price": 330000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/8.1_35c58aa1d95a48b59ee6b845d7491c06_master.jpg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/8.2_895fe10e004747afa45f093423d62a82_master.jpg"
  },
  {
    "name": "Dark Grey Low Waist Trousers",
    "price": 520000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/7.1_a93bd1235b8a4fbbaef78e5990eefd44_master.jpg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/7.2_721b73b376d44021a4e2e77fa8c6693a_master.jpg"
  },
  {
    "name": "Peach Puff Sheer Lace Camisole",
    "price": 250000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/6.1_891ea0e6436b411cad657aa2a80ad810_master.jpg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/6.2_c8a12ce3da844669b49aaacb96b27d78_master.jpg"
  },
  {
    "name": "Peach Puff Sheer Lace Cardigan",
    "price": 330000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/5.1_baab3b33b2f047889ad7c222576446e5_master.jpg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/5.2_a7e638d7d10041a18995214ae0315ea9_master.jpg"
  },
  {
    "name": "Black Striped Front Pleats Bermuda Shorts",
    "price": 420000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/4.1_1a8f258b200049f4ad2bc411c54acda9_master.jpg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/4.2_23852818e18c4d63ad79094d7d55d8cc_master.jpg"
  },
  {
    "name": "Blue Striped Regular Fit Shirt",
    "price": 410000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/3.1_c8bf63477ca4429983adfb3cb3da11df_master.jpg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/3.2_9be1ac97bc5845359da727271645fef9_master.jpg"
  },
  {
    "name": "Neutral Grey Bow Belt Mini Skirt",
    "price": 390000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/2.1_a334686b0525458d81079532a1fd356e_master.jpg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/2.2_728913b9272a4df9ae044b1790eaa4b5_master.jpg"
  },
  {
    "name": "Grey Striped Regular Fit Shirt",
    "price": 410000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/1.1_e246ab94fb114240b549eb79cef97822_master.jpg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/1.2_7884d1ab4ca9419fb04df306dddbdaf2_master.jpg"
  },
  {
    "name": "Light Pink Cuffed Off Shoulder Long Sleeve Top",
    "price": 300000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/22.1_734707d5bfde45a4b2cc50e254ea9d07_master.jpeg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/22.2_ad1838a0538d4d3784eefd9ce8d72f8d_master.jpeg"
  },
  {
    "name": "Light Purple Cuffed Off Shoulder Long Sleeve Top",
    "price": 300000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/21.1_70e6505baf1d46af8a95e276f07ffe9e_master.jpeg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/21.2_3e92a6cd5bbf4cd783645eb99dfb0055_master.jpeg"
  },
  {
    "name": "Ivory Jacquard Maxi Skirt",
    "price": 470000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/18.1_613dca2320604081a971c482cb27b8ab_master.jpeg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/18.2_885969e54e004bd1b966258aaa7729b0_master.jpeg"
  },
  {
    "name": "Ivory Open Back Camisole",
    "price": 310000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/17.1_16c70a31a192479c8fa12dd57d0ba30b_master.jpeg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/17.2_c4a05ae02439467783f3da3a7ca0b099_master.jpeg"
  },
  {
    "name": "Melon Green Jacquard Maxi Skirt",
    "price": 470000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/16.1_e478ce1bb0654655aa340b3b98f0cbb3_master.jpeg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/16.2_48ebfe4b844246e6bc967b3f1e54eca2_master.jpeg"
  },
  {
    "name": "Melon Green Open Back Camisole",
    "price": 310000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/15.1_7fc769e44bdf42bf8d23edaaa66118d9_master.jpeg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/15.2_63e009159ae941bab54334c67c9ffe0f_master.jpeg"
  },
  {
    "name": "Cream Ruffle Long Sleeve Linen Soft Top",
    "price": 420000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/9.1_026340e939184094a00bcbeb033ea580_master.jpeg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/9.2_df098917913f4bb4b782684f4b030ccf_master.jpeg"
  },
  {
    "name": "Army Green Parachute Mini Cargo Skirt",
    "price": 370000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/13.1_dd933157cf3d4b4da7fdfe38c07a1da9_master.jpeg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/13.2_f8a3a45fd58046ec90755fb319c4993c_master.jpeg"
  },
  {
    "name": "Black Mid Rise Overlap Skorts",
    "price": 380000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/3.1_8f2b1d79497a44d5a774569f3e880c19_master.jpeg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/3.2_6ab69da8193f4e40a7d2a5a56e6e0e0c_master.jpeg"
  },
  {
    "name": "Purple Pink Lace Mullet Mid Length Skirt",
    "price": 420000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/23.1_44653ba504a04c7089de50337fc0e08e_master.jpeg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/23.2_2cdb9f83b30040f799bd5ec698476522_master.jpeg"
  },
  {
    "name": "Medium Blue High Waisted Wide Leg Jeans",
    "price": 650000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/20.1_6ee274a676c641ff95479c567ccf13dd_master.jpeg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/20.2_0cb8acc1ce2442e8bb149e830d1dcd6e_master.jpeg"
  },
  {
    "name": "Medium Blue Wash Flared Jeans",
    "price": 650000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/19.1_42836de1f5014d4aa968ebc5ea4f64a7_master.jpeg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/19.2_17654aa3cbbc4176aeb3735da83b6a45_master.jpeg"
  },
  {
    "name": "Black Open Back Eyelet Midi Dress",
    "price": 520000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/14.1_69e0d82bf93f464680a3366f190d8664_master.jpeg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/14.2_72bbb0fe46b54604af218f77db78a3ea_master.jpeg"
  },
  {
    "name": "Checked Drop Waist Mini Dress",
    "price": 440000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/13.1_0b55f713afdd4ac1bfbfae8578f30a0f_master.jpeg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/13.2_580cdd34324743bdbfa4b289c92f82bf_master.jpeg"
  },
  {
    "name": "Black Bow Taffeta Bubble Mini Dress",
    "price": 480000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/12.1_a591b8179dea4c429799fcc92025bbfb_master.jpeg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/12.2_1659e8aac8aa4f30bb1093e6aabaacd3_master.jpeg"
  },
  {
    "name": "Grey Printed Long Sleeve Raglan Top",
    "price": 370000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/11.1_cd5fdf4251b147a68660caa0eeec1789_master.jpeg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/11.2_20bc8b66ac384abe916ce86bc40e28a0_master.jpeg"
  },
  {
    "name": "Black Ruffle Tiered Mini Skirt",
    "price": 390000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/8.1_d1bdcdbd80e847f9ad2d4c973a0f7b43_master.jpeg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/8.2_b674983f022049e58fc7ca784ddac695_master.jpeg"
  },
  {
    "name": "Black Lace Ruffle Strappy Top",
    "price": 360000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/7.1_90f65af00dbd4bdc9e5c25d8c472932d_master.jpeg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/7.2_c0593782baf9442da0eaef42bcf65fde_master.jpeg"
  },
  {
    "name": "Black Zipper Quilted Mini Skirt",
    "price": 380000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/6.1_a0967b53fb724b59b212803f3b762b9a_master.jpeg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/6.2_ee4c7134ca734c89b47c106288a96121_master.jpeg"
  },
  {
    "name": "White Teddy Bear Printed Baby Tee",
    "price": 370000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/5.1_769521da9d7d431c9d4536b82eea3c4a_master.jpeg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/5.2_fb7242cf113548599d870a3d1678dac4_master.jpeg"
  },
  {
    "name": "Navy Knit Micro Short",
    "price": 360000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/4.1_a755a204a0e14483b93d5ea02275bfae_master.jpeg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/4.2_75cf92d344324a63afe7d86ebb37c878_master.jpeg"
  },
  {
    "name": "Navy V-neck Knit Cardigan",
    "price": 380000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/3.1_9c7966d96ea747b6a5c6b84dd203b400_master.jpeg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/3.2_b5976a6d036e42189e37b9a8708fdfe4_master.jpeg"
  },
  {
    "name": "Grey Knit Micro Short",
    "price": 360000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/2.1_5b3c80a915714768846b7e090f66a9b1_master.jpeg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/2.2_0a4fed254b1740c995a9c28bd9a5191a_master.jpeg"
  },
  {
    "name": "Grey V-neck Knit Cardigan",
    "price": 380000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/1.1_cbff0ffae97e40fc8d13e6e8eaa867ce_master.jpeg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/1.2_468a1acedaa140cfa830f6b8f7a1ba52_master.jpeg"
  },
  {
    "name": "Light Grey Lace Trim Mini Skirt",
    "price": 380000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/15.1_a37ab78bb91d42b1a85839704df05866_master.jpeg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/15.2_67658fbc090e4fc3bc0dc20dca55aa98_master.jpeg"
  },
  {
    "name": "Medium Blue Wash Denim Skorts",
    "price": 490000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/14.1_516533293e3c4e30ae899c4bc8b35734_master.jpeg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/14.2_d3a686fa1607436991ab5b00bf6d82cd_master.jpeg"
  },
  {
    "name": "White Printed Tank Top",
    "price": 320000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/13.1_e2540f3b24d74d5d9a0e8d7e81a20959_master.jpeg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/13.2_7ea572b0557649c4aade542950e5919a_master.jpeg"
  },
  {
    "name": "Blue Floral Halter Neck Top",
    "price": 350000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/12.1_e615655091214c68ad69df1821a9e622_master.jpeg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/12.2_71ba704e90384ffe8b28788019945661_master.jpeg"
  },
  {
    "name": "Cloudy White Eyelet Bubble Babydoll Dress",
    "price": 550000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/11.1_8a7cac966917444580f235c861c7d6f6_master.jpeg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/11.2_ced788021a4149a0bb57dff361364b89_master.jpeg"
  },
  {
    "name": "Black Drawstring Ribbed Capri Pants",
    "price": 420000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/10.1_8bde1026fae34ca68bbb7c08e4f29f9d_master.jpeg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/10.2_3f1f0fea1cf84f74b0cbfc8a61a5adb1_master.jpeg"
  },
  {
    "name": "White Chiffon Checked Off-Shoulder Top",
    "price": 390000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/9.1_95beeb896fbd463b9c392e03355baa3a_master.jpeg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/9.2_71f3b12c78a64118a01b7d3a166771c4_master.jpeg"
  },
  {
    "name": "Red Floral Fitted V-neck Top",
    "price": 330000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/8.1_196b2567e0a24cbb85bc64a37646f696_master.jpeg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/8.2_20c4d0dac23c449b95f5521576984707_master.jpeg"
  },
  {
    "name": "Purple Floral Fitted V-neck Top",
    "price": 330000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/7.1_8eb561e29655499ea9616cf51d7bad37_master.jpeg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/7.2_8ee830406e484c6882e53076417d430f_master.jpeg"
  },
  {
    "name": "Printed Floral Lace Hem Mid Length Skirt",
    "price": 440000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/5.1_ae95831041ef43588e5cf86a3eda12a3_master.jpeg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/5.2_5b6b346acd2341c2b55ff54162c7e428_master.jpeg"
  },
  {
    "name": "Printed Floral Lace Hem Strappy Top",
    "price": 340000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/4.1_62bfc4ae84f94705af9b2cd602deeafd_master.jpeg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/4.2_2239c8cdd6bb4025ae0600ba6a8e0ce7_master.jpeg"
  },
  {
    "name": "Blue Floral Fitted Long Sleeve Polo Top",
    "price": 380000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/2.1_de897c462426445fa140cd8f56aec01a_master.jpeg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/2.2_384146473e3d4874ab64b4849e83f776_master.jpeg"
  },
  {
    "name": "Rainbow Striped Fitted Short Sleeve Polo Top",
    "price": 350000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/1.1_0056be4c65434bd794224a44632cd4cb_master.jpeg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/1.2_9222c7947edf4357a77248ad03233e7c_master.jpeg"
  },
  {
    "name": "Beige Gingham Shoulder Ruched Midi Dress",
    "price": 520000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/16.1_05c205b3b36a47b383f771271461a16e_master.jpg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/16.2_aeb4915a377041209308f7b80e44475e_master.jpg"
  },
  {
    "name": "Dark Grey Layer Stretch Mini Dress",
    "price": 460000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/15.1_d776393893ce4e1eb3b654d2112ec40c_master.jpg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/15.2_468256cb64fa418898bcc53f6aadb5de_master.jpg"
  },
  {
    "name": "White Polo Neck Tank Top",
    "price": 320000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/16.1_09629ab9ecb64ac98267ce2532d6a42f_master.jpg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/16.2_9347b5fb6dc140928cd41419f9d132a5_master.jpg"
  },
  {
    "name": "Blue Polo Neck Tank Top",
    "price": 320000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/15.1_2f73fbe905194ee38b1227d4547de0b0_master.jpg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/15.2_fc72c00eca8a446d9a9a97d9506c7898_master.jpg"
  },
  {
    "name": "Black Terry Strapless Mini Jumpsuit",
    "price": 450000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/14.1_035e97972a124c7d80e3c1e8535e5b63_master.jpg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/14.2_aa16ca7058b54b29b0014b19a7faf884_master.jpg"
  },
  {
    "name": "White Polo Neck Bubble Dress",
    "price": 540000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/13.1_0d541c5260a640d593da1c59c1c36e68_master.jpg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/13.2_773a882ab6834ac3bbdf5e6f8910cf29_master.jpg"
  },
  {
    "name": "Black Polo Neck Bubble Dress",
    "price": 540000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/12.1_0fee2c55e0cf4dbb8ff20e7b309c7c39_master.jpg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/12.2_610d3e7b6a004056ac9d150ba43a6d10_master.jpg"
  },
  {
    "name": "Beige Terry Printed Shorts",
    "price": 340000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/11.1_a934698fe8164388a63d64fbce2723d5_master.jpg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/11.2_35aa95b5237246588700f017da45842b_master.jpg"
  },
  {
    "name": "Orange Blue Hem Tank Top",
    "price": 270000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/10.1_ba61cbf581c94e0f907e80bdf3794896_master.jpg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/10.2_d4e368d1fcd94645904cf4440d14df1f_master.jpg"
  },
  {
    "name": "Black Grey Hem Straight Leg Pants",
    "price": 520000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/9.1_e35ed894d25941d08570f92d0809e723_master.jpg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/9.2_f815efb0effa469f8a8fa1762254c4e8_master.jpg"
  },
  {
    "name": "Black Grey Line Sporty Bra",
    "price": 220000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/8.1_17cb31e8eb244e43b66a1fea95fd1f7d_master.jpg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/8.2_df5ba13da8814e359fc9f93198b679a4_master.jpg"
  },
  {
    "name": "Grey Neon Hem Tank Top",
    "price": 270000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/7.1_c1fd3fcb1e3f4e88bd5cf6e54e143680_master.jpg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/7.2_f28462e902194a278a543e1a24bfcad5_master.jpg"
  },
  {
    "name": "Black Low Waist Parachute Mini Skirt",
    "price": 360000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/6.1_b3e44b891c614069a63b0fb6c9486c62_master.jpg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/6.2_f6cdf825f7f14d1b91a512954a2305a5_master.jpg"
  },
  {
    "name": "Black Bubble Low Waist Parachute Mid-length Skirt",
    "price": 410000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/5.1_38e567759cd848c6850c1fd127261827_master.jpg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/5.2_4e76488188264bb689e20256e9002b1d_master.jpg"
  },
  {
    "name": "White Grey Hem Straight Leg Pants",
    "price": 520000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/4.1_c5c2a94e91ce4228a0653e87a80795fd_master.jpg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/4.2_4774e5f2cba64a0da964f48f8659be78_master.jpg"
  },
  {
    "name": "Black Printed Fitted Baby Tee",
    "price": 340000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/3.1_90db926beb9541f3b5a08d0467e0f5fb_master.jpg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/3.2_39b588f0b481420e9027a1bcbcd4ff09_master.jpg"
  },
  {
    "name": "Grey Printed Fitted Baby Tee",
    "price": 340000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/2.5_1f036ff6a321437281d70a070966acf2_master.jpg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/2.1_1422bbece3024b0f829b51c80427d3f9_master.jpg"
  },
  {
    "name": "White Long Sleeve Crop T-shirt",
    "price": 340000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/1.1_2336495a2d4e4b2ab1cdf544618175c8_master.jpg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/1.2_04f74a3119044d7d8ffcb760bb128528_master.jpg"
  },
  {
    "name": "Ivory Oversized Eyelet Boxy Shirt",
    "price": 450000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/1__2__e0a0c2be5c574fa4a7046782f5cb3567_master.jpeg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/1__4__f1fd43a8980845a5b4fe93f7e2911aa9_master.jpeg"
  },
  {
    "name": "Black Printed Halter Neck Mini Dress",
    "price": 440000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/14.1_836d926bca1746c88e7ee504c768e639_master.jpg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/14.2_b1d351f903154b068656cc2bcaf6624b_master.jpg"
  },
  {
    "name": "Butter Yellow Boxy Short Sleeve Linen Shirt",
    "price": 380000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/12.1_527cbf9b7691463e8b939cc03ab6e48a_master.jpg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/12.2_b3aeeb76b2764e66ab013a39198526c1_master.jpg"
  },
  {
    "name": "Floral Smock Halter Neck Top",
    "price": 310000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/11.1_590153775eeb475bbd95f018f1e80159_master.jpg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/11.2_82c95d394f524a24b0d810ef9469d3b7_master.jpg"
  },
  {
    "name": "White Twisted Front Top",
    "price": 320000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/10.1_ea953a5a3e924442b384337c945b661d_master.jpg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/10.2_a6911925d0634ce1b9069f93f8ed2d16_master.jpg"
  },
  {
    "name": "Butter Yellow Straight Leg Linen Trousers",
    "price": 480000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/9.1_037636d66ccf49209447dc1448a29ab3_master.jpg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/9.2_515c8716dba2482c951f6648827bc933_master.jpg"
  },
  {
    "name": "Baby Yellow Elastic Waist Sporty Shorts",
    "price": 320000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/8.1_cdf403f663b84a7182b1012097e26d78_master.jpg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/8.2_8956a754feeb4081b020fb96bc72c928_master.jpg"
  },
  {
    "name": "White Open Back Eyelet Strappy Top",
    "price": 330000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/8.4_b48ed26626ce4406b3c903a4b7a7c9de_master.jpg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/8.5_1634e67307554616acdc89283a86bec5_master.jpg"
  },
  {
    "name": "Multicolor Crayon Flowers Khaki Trousers",
    "price": 590000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/4.1_5a503a72cc9046ff9c8a7ea314e56487_master.jpg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/4.2_7a35b2377da74228b2d1ef5e0c1ecf4f_master.jpg"
  },
  {
    "name": "Multicolor Crayon Flowers Khaki Skorts",
    "price": 380000,
    "primaryImage": "https://product.hstatic.net/1000370106/product/3.1_236fcb53088a4a8c8cf0ca4ce90a4e91_master.jpg",
    "secondaryImage": "https://product.hstatic.net/1000370106/product/3.2_124e761672194d019799cf3a0e2fc47c_master.jpg"
  }
]
