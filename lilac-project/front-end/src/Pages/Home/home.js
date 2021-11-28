import { Slider } from '@material-ui/core'
import React from 'react'
import Navbar from '../../Components/navBarComponent'
import SecondHeader from '../../Components/secondheader'
import TopHeader from '../../Components/topHeader'
import Slider_main from '../../Components/slider_main'
import Product_Firstrow from '../../Components/Product_Firstrow'
import Product_Second from '../../Components/Product_Second'
import Recommented from '../../Components/Recommented'
import Flash_sale from '../../Components/Flash_sale'
import Add_cart from '../../Components/Add_cart'
import Cards_last from '../../Components/Cards_last'
import Recently_Viewed from '../../Components/Recently_Viewed'
import Footer from '../../Components/Footer'
import { ArrowUpward ,MailOutline} from '@material-ui/icons'
import News_letter from '../../Components/News_letter'

function HomePage() {
  return (
    <div>
      <TopHeader />
      <SecondHeader />
      <Navbar />
      <Slider_main />
      <Product_Firstrow />
      <Product_Second />
      <Recommented />
      <Flash_sale />
      <Add_cart />
      <Cards_last />
      <Recently_Viewed />
      <div className="back-to-top">
        <b><p className="pt-4">Back to Top <ArrowUpward /></p></b>
      </div>
      <News_letter/>
      <Footer />
    </div>
  )
}

export default HomePage
