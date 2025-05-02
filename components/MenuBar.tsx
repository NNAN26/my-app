import Link from "next/link";

export default function MenuBar() {
  return (
    <div className="menu-section">
      <Link href='/' className="menu-item itim-regular">
        หน้าหลัก
      </Link>
      <Link href='/state'className="menu-item itim-regular" >
        เกี่ยวกับฉัน
      </Link>
      <Link href=''className="menu-item itim-regular" >
        ผลงาน
      </Link>
    </div>
  );
}
