import React, { useEffect, useState } from 'react'
import Navbar from '../../Components/home/navBarComponent'
import SecondHeader from '../../Components/home/secondheader'
import TopHeader from '../../Components/home/topHeader'
import SliderMain from '../../Components/home/slidermain'
import ProductFirstrow from '../../Components/home/ProductFirstrow'
import ProductSecond from '../../Components/home/ProductSecond'
import Recommented from '../../Components/home/Recommented'
import Flashsale from '../../Components/home/Flashsale'
import Addcarts from '../../Components/home/AddcartItems'
import Cardslast from '../../Components/home/Cardslast'
import RecentlyViewed from '../../Components/home/RecentlyViewed'
import Footer from '../../Components/home/Footer'
import { ArrowUpward, MailOutline } from '@material-ui/icons'
import Newsletter from '../../Components/home/Newsletter'
import { userLoginCheck } from '../../Handlers/handler'

function HomePage() {
  const [loginStatus, setLoginStatus] = useState(false);
  useEffect(() => {
    userLoginCheck().then((res) => {
      if (res.data.status) {
        setLoginStatus(true);
      }
      else {
        setLoginStatus(false);
      }
    })
  }, [])

  return (
    <div>
      <TopHeader />
      <SecondHeader />
      <Navbar />
      <SliderMain />
      <ProductFirstrow props={loginStatus} />
      <ProductSecond props={loginStatus} />
      <Recommented props={loginStatus} />
      <Flashsale props={loginStatus} />
      <Addcarts props={loginStatus} />
      <Cardslast props={loginStatus}/>
      <RecentlyViewed props={loginStatus} />
      <div className="back-to-top">
        <b><p className="pt-4">Back to Top <ArrowUpward /></p></b>
      </div>
      <Newsletter />
      <Footer />
    </div>
  )
}

export default HomePage
