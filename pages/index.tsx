import Image from 'next/image'
import { Inter } from 'next/font/google'
import ScrollDown from "@/components/scrollDown";
import React from "react";
import {Hero} from "@/components/hero";
import {Header} from "@/components/header";
import Link from "next/link";

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
      <div>
          <Header/>
        <Hero/>
        <ScrollDown/>
      </div>

  )
}
