import React from 'react';
import '../CSS/IntroProduct.css';
import { Link } from 'react-router-dom';
function IntroProduct() {
  return (
    <div className="intro-product">
      <div className="intro">
        <div className="headerintro">เราสร้างผลิตภัณฑ์จากพืชทั้งหมดของเราให้เป็นธรรมชาติที่สุดเท่าที่จะเป็นไปได้ ดังนั้นผลิตภัณฑ์ของเราจึงคงความเป็นธรรมชาติมากที่สุด อุดมไปด้วยคุณค่าทางโภชนาการ และปลอดภัยสำหรับผู้บริโภค และเป็นทางเลือกสําหรับผู้ต้องการลดโปรตีน</div>
        <div className="listintro">
            <ul>
            <li>กระบวนการน้อยลง</li>
            <li>โซเดียมตํ่า</li>
            <li>คาร์โบไฮเดรตน้อยลง</li>
            <li>อาหารจากพืช</li>
        </ul>
        </div>
        <Link to="/menu"><button className='Productbtn'>Product</button></Link>
      </div>
    </div>
  );
}

export default IntroProduct;
