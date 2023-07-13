import React from 'react';
import './Home.css';
import Nav from './Nav';
import Bar from './homeComponents/Bar';
import BTemp from '../Book/BTemp';
import Asthetic from '../Book/Asthetic.js';
import bg from './homeComponents/himages/bg.webp';

function Home() {
  return(
    <div className='All'>
      <div className='naval'>
       <Nav/>
      </div>
      {/* <div className='fimg'>
        <img src={bg }id='f1'></img>
      </div> */}
      <div id='barh'>
        <Bar/>
      </div>
      <div className='books'>
        <Asthetic/>
        {/* <Asthetic/> */}
        <Asthetic/>
        <Asthetic/>
        <Asthetic/>
        <Asthetic/>
        <Asthetic/>
        <Asthetic/>
        <Asthetic/>
        <Asthetic/>
        <Asthetic/>
      </div>
      <footer id='footer'>
      1. Qualified purchasers can receive promotion savings when they purchase an eligible product with promotion product at a qualifying location. Only one promotion product per eligible product per qualified purchaser. Offer is subject to availability. Subject to terms and conditions herein.
*Instant savings, otherwise referred to as instant cashback on the Apple Store Online, is available with the purchase of an eligible product for qualifying HDFC Bank Credit Cards and EasyEMI Credit Cards only. Minimum transaction value of ₹10001.00 applies. Click here to see instant savings amounts and eligible devices. Instant savings is available for up to two orders per rolling 90-day period with an eligible card. Card eligibility is subject to terms and conditions between you and your card issuing bank. Total transaction value is calculated after any trade-in credit or eligible discount applied. Any subsequent order adjustment(s) or cancellation(s) may result in instant savings being recalculated, and any refund may be adjusted to account for instant savings clawback; this may result in no refund being made to you. Offer may be revised or withdrawn at any time without any prior notice. Terms and conditions apply. Offer cannot be combined with Apple Store for Education or Corporate Employee Purchase Plan pricing. Multiple separate orders cannot be combined for instant savings.
A subscription is required for Apple TV+.
More ways to shop: Find an Apple Store or other retailer near you. Or call 000800 040 1966.
India
Copyright © 2023 Apple Inc. All rights reserved.Privacy Policy Terms of Use Sales Policy Legal Site Map
      </footer>
    </div>
  );
}

export default Home;