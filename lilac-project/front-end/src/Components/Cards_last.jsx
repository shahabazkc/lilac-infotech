import React from 'react'
import image from '../images/image4.png'

function Cards_last() {
    return (
        <div>
            <div className="fourth-card">
            <div class="fourth-card-cardone row ">
  <div className="card-column col-sm-5 p-1 m-3">
    <div className="card " style={{height:"200px",backgroundColor:"orange",borderRadius:"30px"}}>
      <div className="main-card card-body">
      <h3>Explore</h3>
          <h3><b>Classifiels</b></h3>
          <img src={image} alt="" style={{width:"200px",float:"right"}} />
          <div className="para-card">
        <span>Over 5000 + Products</span>
          </div>
        
      </div>
    </div>
  </div>
  <div className="card-column col-sm-5 p-1 m-3">
    <div className="card"  style={{height:"200px",backgroundColor:"lightgreen",borderRadius:"30px"}}>
      <div className="main-card card-body">
      <h3>Add</h3>
          <h3><b>Classifieds</b></h3>
          <img src={image} alt="" style={{width:"200px",float:"right"}} />
          <div className="para-card">
        <span>Ads,Event Ads Service <br /> Requests Etc</span>
          </div>
        
      </div>
    </div>
  </div>
</div>
<div class="fourth-card-cardone row ">
  <div className="card-column col-sm-5 p-1 m-3">
    <div className="card"  style={{height:"200px",backgroundColor:"blue",borderRadius:"30px"}}>
      <div className="main-card card-body">
      <h3>EXPLORE</h3>
          <h3><b>Products</b></h3>
          <img src={image} alt="" style={{width:"200px",float:"right"}} />
          <div className="para-card">
        <span>Over 25000 + Products</span>
          </div>
      </div>
    </div>
  </div>
  <div className="card-column col-sm-5 p-1 m-3">
    <div className="card"  style={{height:"200px",backgroundColor:"green",borderRadius:"30px"}}>
      <div className="main-card card-body">
      <h3>Partner</h3>
          <h3><b>With us</b></h3>
          <img src={image} alt="" style={{width:"200px",float:"right"}} />
          <div className="para-card">
        <span>Sell Your Products</span>
          </div>
       
      </div>
    </div>
  </div>
</div>
            </div>
        </div>
    )
}

export default Cards_last
