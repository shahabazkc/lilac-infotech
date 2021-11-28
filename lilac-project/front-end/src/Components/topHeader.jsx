import React from 'react'
import { Phone, Mail, LocationOn,ArrowDropDown } from '@material-ui/icons';
function TopHeader() {
    return (
        <div className='top_header'>
            <div className="header-section" >
                <div className="align-left">
                    <div> <Phone style={{ color: "white", fontSize: "16px" }} /><span style={{ paddingBottom: "2px" }}> +221336622</span></div>
                    <div> <Mail style={{ color: "white", fontSize: "16px" }} /> <span>support@elextra.io</span></div>
                </div>
                <div className="align-right" >
                    <div className="items">
                        <div className="item">
                            <LocationOn style={{ fontSize: "15px" }} />Locations
                        </div>
                        <div className="item">
                               <span><b>|</b></span>                                     
                        </div>
                        <div className="item">
                           <span> $ Dollar (US)</span> 
                        </div><ArrowDropDown/>
                        <div className="item">
                            <span>EN</span>
                        </div><ArrowDropDown/>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default TopHeader
