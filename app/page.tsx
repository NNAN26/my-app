import MenuBar from "@/components/MenuBar";

type MenubarProps = {
  page : string;
}
export default function IndexPage(){
  return( 
 <div>
  <MenuBar page={"หน้าแรก"}/> 

  {/*สร้างเมนูด้านบน*/}
  <div>
    <div className="alert alert-danger" role="alert">
      <p className=" h1 text-center  itim-regular">ตัวอย่างเว็บเท่านั้น</p>
    </div>
    
  </div>
  {/*section1*/}
  <div className="section1-box">
    <h1 className="section1-name pacifico-regular">Hey I'm Chomphunut</h1>
    <p className="section1-meta-data itim-regular">
      ศึกษาอยู่ที่มหาวิทยาลัยเทคโนโลยีราชมงคลกรุงเทพ
    </p>
    <img src="https://scontent.fbkk14-1.fna.fbcdn.net/v/t39.30808-6/492207608_2532714323737537_5051502393639510762_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeG935yyrckvaPaGmuChsWIxypXIlsQNtTHKlciWxA21MSG4a_jdRj63YSLD7LrPUZ9VNNHtbgeUvLh-y12pqzzZ&_nc_ohc=rKw_CpkNkGEQ7kNvwEFUY_y&_nc_oc=AdnuNpq0d5fAKTKtdlWY0pl8SFYjPWQL_OoaIJEr0EbswjhngxMF0qfY9GPvo3UHrag&_nc_zt=23&_nc_ht=scontent.fbkk14-1.fna&_nc_gid=DgMYdPDbe_dF9Rs17UHNPg&oh=00_AfE9Gh9ZrQyX-FnfzUH4zvG0wc_SFZPzve1MS72yibdABA&oe=6819EA6F" alt="NAN" className="section1-profile-picture" />
    <p className="section1-profile-description itim-regular">
      อาหารที่ชอบ เป็นคนกินง่ายๆ <br />
      {/*การขึ้นบรรทัดใหม่*/}
      อย่าถามว่าไม่กินอะไร ให้ถามว่ากินอะไรบ้างง่ายกว่า
    </p>
  </div>
  {/*section2*/}
  <div className="section2-box">
    <a className="section2-contact-link pacifico-regular" href="https://www.facebook.com/chmphunuth.ph.ng.ya?locale=th_TH">Facebook</a>
    <br />
    {/*-<a เป็นการใส่ลิงก์>*/}
    <a className="section2-contact-link pacifico-regular" href="https://www.instagram.com/chomphu_nn/">Instagram</a>
    {/*แท็กa คือการใส่ลิงก์ ก่อนใส่ต้องมีคำว่า href */}
  </div>
  {/*section3*/}
  <div className="section3-box">
    <div className="section3-box-a">
      <h1 className="section3-box-a-study itim-regular">การศึกษา</h1>
      <p className="section3-box-a-study1 itim-regular">
        กำลังศึกษาอยู่ปีที่3 สาขานวัตกรรมระบบสารสนเทศ <br />
        คณะบริหารธุรกิจ มหาวิทยาลัยเทคโนโลยีสารสนเทศ
      </p>
    </div>
    <div className="section3-box-b">
      <h1 className="section3-box-b-work itim-regular">ประสบการณ์ฝึกงาน</h1>
      <p className="section3-box-b-work1 itim-regular">
        ตอนเรียน ปวส. ที่วิทยาลัยเทคนิคนครนายก <br />
        เคยฝึกงานแผนก IT Support ที่มหาวิทยาลัยศรีนครินทร์วิโรฒ
      </p>
    </div>
  </div>
</div>
  )
}