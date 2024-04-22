import Image from "next/image"
import React from 'react'

export default function Loader() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center animate-pulse ">
        <div>
        <Image src="/images/logo.svg" alt="logo" width={70} height={70} className="mx-auto"/>
        <div className="mt-5 text-center block">Loading...</div>
        </div>
    </div>
  )
}
