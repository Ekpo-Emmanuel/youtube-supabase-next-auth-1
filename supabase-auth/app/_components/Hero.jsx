'use client'

import { useState, useEffect } from "react";
import Link from "next/link";
import { BsStars } from "react-icons/bs";
export default function Hero() {


  return (
    <div className="">
      <section>
        <div className="h-full px-8 py-20 sm:py-24  mx-auto lg:py-32 md:px-12 lg:px-32 max-w-7xl">
          <div className="sm:text-center">
              <p className="text-[10px] sm:text-sm flex gap-2 items-center justify-center bg-[#f2f2f2] text-gray-500 w-fit m-0 sm:m-auto px-2 sm:px-6 py-1 rounded-full ">See what's new  <p className="text-[10px] sm:text-sm font-medium text-blue-600 flex"> <BsStars /> AI Diagram</p></p>
              <h1 className="text-3xl mt-4 font-semibold sm:font-bold tracking-tighter text-gray-900 lg:text-7xl text-balance">
              Documents and Diagrams
                <span className="text-blue-500"> for students and teams</span>
              </h1>
            <p className="mt-4 text-base text-gray-500">
            All-in-one markdown editor, collaborative canvas,
              <span className="lg:block">
                and diagram-as-code builder
              </span>
            </p>
            <div className="flex flex-col items-center justify-center gap-3 mt-10 md:flex-row">
                  <Link href="/api/auth/sign-up" className="flex items-center justify-center w-full h-10 px-4 py-2 text-sm font-semibold text-white transition-all bg-blue-500 rounded-lg hover:bg-blue-600 md:w-auto">
                    Try docSketch Now →
                  </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
