"use client";
import { motion } from "framer-motion";
import Image from 'next/image'
const Welcome = () => {
  return (
    <section
      id="welcome"
      className="relative flex flex-col items-center justify-center h-screen text-center px-6 bg-gradient-to-r from-black via-gray-800 to-gray-900"
    >
      {/* แสดงหัวข้อหลักที่มีการเคลื่อนไหว */}
      <motion.h1
        className="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500"
        initial={{ opacity: 0, y: 100 }} // เริ่มต้นด้วยความทึบและย้ายจากด้านล่าง
        animate={{ opacity: 1, y: 0 }}  // เมื่อเคลื่อนที่เสร็จแล้ว จะโปร่งใสและอยู่ตำแหน่งเดิม
        transition={{ duration: 1.2 }}  // ใช้เวลา 1.2 วินาทีในการทำให้เต็มที่
      >
        Cook
       <span className="text-6xl  text-white bg-transparent ">🍳</span>
        Code {/* แทนที่อิโมจิด้วยรูป PNG */}
      </motion.h1>

      {/* ข้อความที่อธิบายเพิ่มเติม */}
      <motion.p
        className="text-lg text-gray-300 mt-6"
        initial={{ opacity: 0, x: -50 }}  // เริ่มต้นจากด้านซ้ายและความทึบ
        animate={{ opacity: 1, x: 0 }}   // ขยับมาที่ตำแหน่งเดิมและโปร่งใส
        transition={{ duration: 1, delay: 0.4 }} // ใช้เวลา 1 วินาทีและดีเลย์ 0.4 วินาที
      >
        Hi, we Cook the Perfect Code for You!
      </motion.p>

      {/* ปุ่มกด */}
      <motion.button
        className="mt-8 px-8 py-4 bg-transparent border-2 border-yellow-400 rounded-full text-lg text-yellow-400 font-semibold shadow-xl hover:bg-yellow-400 hover:text-gray-900 transition-all duration-300"
        initial={{ scale: 0.8 }}  // เริ่มต้นจากขนาดเล็ก
        animate={{ scale: 1 }}   // ขยายจนเต็มขนาด
        transition={{ duration: 0.6, delay: 0.6 }} // ใช้เวลา 0.6 วินาทีและดีเลย์ 0.6 วินาที
      >
        Let's Cook Together!
      </motion.button>
    </section>
  );
};

export default Welcome;
