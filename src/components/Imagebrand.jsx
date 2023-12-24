import React from 'react'
import "../CSS/imagebrand.css";
function Imagebrand() {
    return (
        <div className="imagebrand">
            <div className="flex_decoration">
            <div className="imagebrand_header">
                <b className='header_eng'>Meat Avatar Plant-Based Meat</b><br />
                <b className='header_th'>มีประโยชน์และดีอย่างไร?</b>
            </div>
            <div className="benefit">
                <div className="benefits">
                    <img src="https://media.discordapp.net/attachments/1167783457628368956/1188414886221455370/2.png?ex=659a709c&is=6587fb9c&hm=9dac45ff9b0b80edea7f18358890b98e939c7b2c442ecc136971b448cd72caa3&=&format=webp&quality=lossless" alt="Cholesterol Free" />
                    <p className='BENEFITHEADER'>0% Cholesterol</p>
                    <p className='benefitinfo'>คอเลสเตอรอล 0% ช่วยลดอัตราการเกิดโรคที่เกี่ยวกับไขมัน</p>
                </div>
                <div className="benefits">
                <img src="https://media.discordapp.net/attachments/1167783457628368956/1188414886838018078/5.png?ex=659a709c&is=6587fb9c&hm=8b879ba2bb9f7cd5290a18b3506ab08ac2a847fbdd96c89ead5e58aeb9fb177f&=&format=webp&quality=lossless" alt="0% Meat" />
                    <p className='BENEFITHEADER'>0% Meat</p>
                    <p className='benefitinfo'>ใช้พืชทดแทนเนื้อสัตว์<br />แต่ยังได้รสสัมผัสไม่ต่างจากเนื้อสัตว์จริง</p>
                </div>
                <div className="benefits">
                <img src="https://media.discordapp.net/attachments/1167783457628368956/1188414886838018078/5.png?ex=659a709c&is=6587fb9c&hm=8b879ba2bb9f7cd5290a18b3506ab08ac2a847fbdd96c89ead5e58aeb9fb177f&=&format=webp&quality=lossless" alt="0% Meat" />
                    <p className='BENEFITHEADER'>0% Trans Fat</p>
                    <p className='benefitinfo'>ไขมันทรานส์ 0%<br />ช่วยลดอัตราการเกิดโรคหัวใจและหลอดเลือด</p>
                </div>
                <div className="benefits">
                <img src="https://media.discordapp.net/attachments/1167783457628368956/1188414886838018078/5.png?ex=659a709c&is=6587fb9c&hm=8b879ba2bb9f7cd5290a18b3506ab08ac2a847fbdd96c89ead5e58aeb9fb177f&=&format=webp&quality=lossless" alt="0% Meat" />
                    <p className='BENEFITHEADER'>0% MSG</p>
                    <p className='benefitinfo'>ไม่มีส่วนผสมของผงชูรส (โมโนโซเดียมกลูตาเมต)<br />ช่วยลดอัตราการเกิดโรคหัวใจและหลอดเลือด</p>
                </div>
                <div className="benefits">
                <img src="https://media.discordapp.net/attachments/1167783457628368956/1188414886628315176/4.png?ex=659a709c&is=6587fb9c&hm=f86833376dfed5609860f4d34cf1db7ae424ffd6a981a54934b552bcfd1a6127&=&format=webp&quality=lossless" alt="Gluten Free" />
                    <p className='BENEFITHEADER'>0% Gluten</p>
                    <p className='benefitinfo'>คอเลสเตอรอล 0%<br />ไม่ก่อให้เกิดผลกระทบต่อระบบภูมิต้านทานของร่างกาย</p>
                </div>
            </div>
            </div>
            
        </div>
    )
}

export default Imagebrand