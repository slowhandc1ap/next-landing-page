"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const teamMembers = [
  {
    name: "Korn",
    position: "Software Developer",
    companyPosition: "Founder", // เพิ่มตำแหน่งในบริษัท
    github: "https://github.com/slowhandc1ap",
    facebook: "https://facebook.com/KornDev",
    image: "/korn-profile.png",
  },
  {
    name: "Pooh",
    position: "Frontend Engineer",
    companyPosition: "Co-Founder", // เพิ่มตำแหน่งในบริษัท
    github: "https://github.com/AliceDev",
    facebook: "https://facebook.com/AliceDev",
    image: "/pooh-profile.jpg",
  },
  {
    name: "Green",
    position: "Backend Engineer",
    companyPosition: "Co-Founder", // เพิ่มตำแหน่งในบริษัท
    github: "https://github.com/BobBackend",
    facebook: "https://facebook.com/BobBackend",
    image: "/green-profile.jpg",
  },
  {
    name: "Field",
    position: "Tester Engineer",
    companyPosition: "Co-Founder", // เพิ่มตำแหน่งในบริษัท
    github: "https://github.com/CharlieSec",
    facebook: "https://facebook.com/CharlieSec",
    image: "/few-profile.jpg",
  },
];

const Team = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  // ฟังก์ชันเปลี่ยนไปยังสมาชิกคนถัดไป
  const nextMember = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % teamMembers.length);
  };

  // ฟังก์ชันเปลี่ยนไปยังสมาชิกก่อนหน้า
  const prevMember = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
  };

  // ตั้งค่า Auto Slide ทุก 5 วินาที
  useEffect(() => {
    const interval = setInterval(nextMember, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="Team"
      className="relative min-h-screen flex flex-col items-center justify-center text-center  text-white space-y-8 px-10"
    >
      {/* หัวข้อ */}
      <motion.h2
        className="text-5xl font-extrabold text-yellow-400"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Meet Our Team
      </motion.h2>

      {/* Container สำหรับการ์ด */}
      <div className="relative w-full flex flex-col items-center mt-4">
        {/* การ์ดสมาชิก */}
        <div className="relative w-[400px] h-[320px] flex justify-center items-center overflow-hidden">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={index}
              className="absolute flex flex-col items-center justify-center w-72 h-80 rounded-2xl bg-gray-800 shadow-xl text-center p-6 z-10"
              initial={{ x: direction * 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -direction * 300, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={(event, info) => {
                if (info.offset.x > 50) prevMember();
                else if (info.offset.x < -50) nextMember();
              }}
            >
              {/* รูปโปรไฟล์ */}
              <Image
                src={teamMembers[index].image}
                alt={teamMembers[index].name}
                width={120}
                height={120}
                className="rounded-full border-4 border-yellow-400"
              />
              <h3 className="text-2xl font-bold mt-4">{teamMembers[index].name}</h3>
              <p className="text-lg text-gray-400">{teamMembers[index].position}</p>
              
              {/* แสดงตำแหน่งในบริษัท */}
              <p className="text-sm text-yellow-400 mt-2">{teamMembers[index].companyPosition}</p>

              {/* Social Icons */}
              <div className="flex space-x-4 mt-3">
                <a
                  href={teamMembers[index].github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform"
                >
                  <Image src="/github-logo.png" alt="GitHub" width={30} height={30} />
                </a>
                <a
                  href={teamMembers[index].facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform"
                >
                  <Image src="/fb-logo.png" alt="Facebook" width={30} height={30} />
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* จุดแสดงสถานะว่ากำลังดูการ์ดไหน */}
        <div className="flex space-x-2 mt-4">
          {teamMembers.map((_, i) => (
            <span
              key={i}
              className={`w-3 h-3 rounded-full ${i === index ? 'bg-yellow-400' : 'bg-gray-500'} transition-all duration-300`}
            />
          ))}
        </div>
      </div>

      {/* เพิ่ม blur overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 opacity-30 blur-lg"></div>
    </section>
  );
};

export default Team;
