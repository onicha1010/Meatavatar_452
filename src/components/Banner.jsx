import React, { useEffect } from 'react';
import "../CSS/Banner.css";
import { Link } from 'react-router-dom';

function Banner() {

  return (
    <div className="banner_container">
        <div className="banner-background">
          <img src="https://cdn.discordapp.com/attachments/1167783457628368956/1188410544634482729/image_75.png?ex=659a6c91&is=6587f791&hm=e51723940825820757ec73203844a465ceb1cd84636bf927b8b1ae4257a1a032&" alt="Meat avatar banner" />
          <div className="banner_info">
            <div className="bannerlogo"></div>
            <div className="bannerlogoname">อาหารทางเลือกใหม่ ของคนรักสุขภาพ
            <br></br>Meat Avatar
            </div>
          </div>
        </div>
    </div>
  )
}

export default Banner;
