
import { count } from "console";
import Link from "next/link";

type MenubarProps = {
  page:string;
}
export default function MenuBar(props: MenubarProps) {
  return (
    <div>
    <div className="menu-section">
      <Link href='/' className="menu-item itim-regular">
        หน้าหลัก
      </Link>
      <Link href='/state'className="menu-item itim-regular" >
      เรียนรู้ state
      </Link>
      <Link href='/props'className="menu-item itim-regular" >
      เรียนรู้ proge
      </Link>
      <Link href='/use-effect'className="menu-item itim-regular" >
      เรียนรู้ UseEffect
      </Link>
    </div>
    <div className="p-4 bg-pink-200">
      <p className="text-2xl itim-regular text-center">ตอนนี้คุณอยู่ที่หน้า {props.page} </p>
    </div>
    </div>
    
  );
}
