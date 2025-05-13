"use client";
import Footer from "@/components/Footer";
import MenuBar from "@/components/MenuBar";
import { useState } from "react";

export default function StatePage() {
  const [isLightOn, setIsLightOn] = useState(false);

  const [count, setCount] = useState(0);
  const [animal, setAnimal] = useState("");

  return (
    <div>
      <MenuBar page={"เรียนรู้ State"}/>
      <div className="p-4">
        <h1 className="text-center text-4xl">Switch ไฟ</h1>
        <p className="text-center text-xl">เรียนรู้การ toggle state</p>
        <div className="flex justify-center mt-4">
          <button
            className="bg-red-600 p-4 rounded-2xl text-3xl"
            onClick={() => setIsLightOn((prev) => !prev)}
          >
            เปิด / ปิด ไฟ
          </button>
        </div>
        <div className="flex justify-center mt-4">
          {isLightOn ? (
            <img src="https://www.w3schools.com/js/pic_bulbon.gif" />
          ) : (
            <img src="https://www.w3schools.com/js/pic_bulboff.gif" />
          )}
        </div>
      </div>

      <div className="p-4">
        <h2 className="text-center text-3xl font-bold">เพิ่ม/ลด เลข</h2>
        <p className="text-xl text-center ">เรียนรู้การเพิ่ม/ลด state</p>
        <h1 className=" text-6xl text-center mt-4">{count}</h1>
        <div className="flex justify-center gap-4 mt-4">
          <button
            className="p-4 font-bold text-2xl bg-amber-600 "
            type="button"
            onClick={() => setCount(count - 1)}
          >
            ลบ1
          </button>
          <button
            className="p-4 font-bold text-2xl bg-green-600 "
            type="button"
            onClick={() => setCount(count + 1)}
          >
            เพิ่ม1
          </button>
        </div>
      </div>

      <div className="p-4">
        <h1 className="text-2xl text-center font-bold">สัตว์ที่ฉันชอบ</h1>
        <p className="text-center text-x">เรียนรู้การเพิ่มเติม state จากการชอบสัตว์</p>
        <h1 className="text-4xl text-center mt-4">สัตว์ที่ชอบ คือ {animal}</h1>
        <div className="flex justify-center gap-4  mt-4">
          <div>
            <button
              className="p-4 font-bold text-4xl bg-pink-400"
              type="button"
              onClick={() => setAnimal("dog")}
            >
              Dog
            </button>
          </div>
          <div>
            <button
              className="p-4 font-bold text-4xl bg-pink-300"
              type="button"
              onClick={() => setAnimal ("cat")}
            >
              Cat
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
