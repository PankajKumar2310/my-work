"use client";

import React from "react";
import { FaDocker, FaAws, FaGitAlt, FaLinux } from "react-icons/fa";
import { SiKubernetes, SiRedis, SiMongodb, SiMysql, SiPostman } from "react-icons/si";

import { cn } from "../../lib/utils";

export const DevOpsskills = () => {
  const screenWidth = typeof window !== "undefined" ? window.innerWidth : 1024;

  let radius = 130;
  let size = 50;
  let padding = 30;

  if (screenWidth <= 320) {
    radius = 110;
    size = 30;
    padding = 20;
  } else if (screenWidth <= 412) {
    radius = 115;
    size = 30;
    padding = 40;
  } else if (screenWidth <= 520) {
    radius = 115;
    size = 30;
    padding = 40;
  }

  const toRadians = (deg) => (Math.PI / 180) * deg;

  const logos = [
    {
      Icon: FaDocker,
      className: "bg-[#2496ED] text-white",
      name: "Docker",
    },
    {
        Icon: SiPostman,
        className: "bg-[#FF6C37] text-white",
        name: "Postman",
      },
    {
      Icon: FaGitAlt,
      className: "bg-[#F1502F] text-white",
      name: "Git",
    },
    
    {
      Icon: FaAws,
      className: "bg-[#FF9900] text-black",
      name: "AWS",
    },
    {
      Icon: SiRedis,
      className: "bg-[#DC382D] text-white",
      name: "Redis",
    },
    // {
    //   Icon: SiMongodb,
    //   className: "bg-[#47A248] text-white",
    //   name: "MongoDB",
    // },
    // {
    //   Icon: SiMysql,
    //   className: "bg-[#00758F] text-white",
    //   name: "MySQL",
    // },
   
  ];

  return (
    <div className="flex items-center justify-center px-2 overflow-hidden xxs:px-4">
      <div
        style={{
          width: radius * 2 + size + padding,
          height: radius * 2 + size + padding,
        }}
        className="relative rounded-full max-w-[320px] xxs:max-w-[360px] xs:max-w-[400px] xsm:max-w-[440px] sm:max-w-none"
      >
        <div className="absolute inset-0 animate-spin-slow">
          {logos.map((logo, index) => {
            const angle = (360 / logos.length) * index;
            const x = radius * Math.cos(toRadians(angle));
            const y = radius * Math.sin(toRadians(angle));

            return (
              <div
                key={index}
                style={{
                  top: `calc(50% - ${size / 2}px + ${y}px)`,
                  left: `calc(50% - ${size / 2}px + ${x}px)`,
                  width: size,
                  height: size,
                }}
                className={cn(
                  "absolute flex items-center justify-center rounded-full shadow-md animate-spin-reverse",
                  logo.className
                )}
              >
                <logo.Icon className="w-5 h-5 xxs:w-4 xxs:h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6" />
              </div>
            );
          })}
        </div>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex items-center justify-center xxs:w-[100px] xxs:h-[100px] xs:w-[120px] xs:h-[120px] border-2 rounded-full shadow-inner">
            <span className=" text-xl text-center xxs:font-semibold tracking-wider xxs:text-[15px] xs:text-lg sm:text-xl text-foreground">
              DEVOPS
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
