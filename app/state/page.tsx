"use client";
import Footer from "@/components/Footer";
import MenuBar from "@/components/MenuBar";
import { useState } from "react";

export default function StatePage() {
  const [isLightOn, setIsLightOn] = useState(false);

  return (
    <div>
      <MenuBar />
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
      <Footer />
    </div>
  );
}
