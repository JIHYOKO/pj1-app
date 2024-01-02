'use client'

import Image from 'next/image';

import * as React from 'react';
import "tailwindcss/tailwind.css"
import Checkbox from '@mui/material/Checkbox';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {auto} from "@popperjs/core";

export default function Home() {
  return (
      <main className="flex min-h-screen flex-col items-center justify-between">

        <h1 className="text-4xl font-bold text-center mb-8">권형준 💍 고지효</h1>

        <div className="bg-blue-500 py-4 px-5 rounded-2xl text-white text-center">
          <p><b>2024년 2월 17일 토요일 오후 1시</b></p>
          <p>빌라드지디 안산 그랜드볼룸홀</p>
        </div>

        {/* 미모티콘 */}
        <div className="image-container">
          <div className="left-image">
            <Image src="/emoji_hyo.png" alt="Left Image" width={500} height={300}/>
          </div>
          <div className="right-image">
            <Image src="/emoji_hyo.png" alt="Right Image" width={500} height={300}/>
          </div>
        </div>
        <br/>

        {/* 말풍선 */}
        <div className="greeting">
          <blockquote className="max-w-sm p-6 bg-gray-100 border-gray-600 rounded-bl-sm shadow-sm rounded-2xl">
            <p>
              어쩌구저쩌구 저쩌구어쩌라구어쩌구저쩌구 저쩌구어쩌라구어쩌구저쩌구 저쩌구어쩌라구어쩌구저쩌구 저쩌구어쩌라구어쩌구저쩌구 저쩌구어쩌라구어쩌구저쩌구 저쩌구어쩌라구어쩌구저쩌구 저쩌구어쩌라구어쩌구저쩌구 저쩌구어쩌라구
            </p>
          </blockquote>
          <footer className="flex items-center gap-4 mt-4">
            <div className="flex -space-x-2 overflow-hidden">
              <Image src="/mango01.jpg" alt="mango" className="inline-block h-12 w-12 rounded-full ring-2 ring-white"  width={500} height={300}/>
              <Image src="/gureum02.jpg" alt="Next.js Logo" className="inline-block h-12 w-12 rounded-full ring-2 ring-white"  width={500} height={300}/>
            </div>
              <div className="font-medium">
                <p>형준과 지효</p>
                <p className="text-gray-300">@joonandhyo</p>
              </div>
          </footer>
        </div>
        <br/>

        <div>
          <Image className="my-4" alt="Next.js Logo" src="/emoji_hyo.png" width={400} height={300}/>
          <br/>
          <p>권일혁 · 이혜숙의 장남 &nbsp;권형준 <a href="tel:010-4703-3043">CALL</a> </p>
          <p>고현빈 · 박은영의 장녀 &nbsp;고지효 <a href="tel:010-2298-2936">CALL</a> </p>
        </div>

        {/* 달력 */}
        <div className="flex items-center justify-center py-8 px-4">
          <div className="max-w-sm w-full shadow-lg">
            <div className="md:p-8 p-5 dark:bg-gray-800 bg-white rounded-t">
              <div className="px-4 flex items-center justify-between">
                <span className="focus:outline-none  text-base font-bold dark:text-gray-100 text-gray-800">2024. 02</span>
              </div>
              <div className="flex items-center justify-between pt-12 overflow-x-auto">
                <table className="w-full">
                  <thead>
                  <tr>
                    <th>
                      <div className="w-full flex justify-center">
                        <p className="text-base font-medium text-center text-gray-800 dark:text-gray-100">일</p>
                      </div>
                    </th>
                    <th>
                      <div className="w-full flex justify-center">
                        <p className="text-base font-medium text-center text-gray-800 dark:text-gray-100">월</p>
                      </div>
                    </th>
                    <th>
                      <div className="w-full flex justify-center">
                        <p className="text-base font-medium text-center text-gray-800 dark:text-gray-100">화</p>
                      </div>
                    </th>
                    <th>
                      <div className="w-full flex justify-center">
                        <p className="text-base font-medium text-center text-gray-800 dark:text-gray-100">수</p>
                      </div>
                    </th>
                    <th>
                      <div className="w-full flex justify-center">
                        <p className="text-base font-medium text-center text-gray-800 dark:text-gray-100">목</p>
                      </div>
                    </th>
                    <th>
                      <div className="w-full flex justify-center">
                        <p className="text-base font-medium text-center text-gray-800 dark:text-gray-100">금</p>
                      </div>
                    </th>
                    <th>
                      <div className="w-full flex justify-center">
                        <p className="text-base font-medium text-center text-gray-800 dark:text-gray-100">토</p>
                      </div>
                    </th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td className="pt-6">
                      <div className="px-2 py-2 cursor-pointer flex w-full justify-center"></div>
                    </td>
                    <td className="pt-6">
                      <div className="px-2 py-2 cursor-pointer flex w-full justify-center"></div>
                    </td>
                    <td>
                      <div className="px-2 py-2 cursor-pointer flex w-full justify-center"></div>
                    </td>
                    <td>
                      <div className="px-2 py-2 cursor-pointer flex w-full justify-center"></div>
                    </td>
                    <td className="pt-6">
                      <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                        <p className="text-base text-gray-500 dark:text-gray-100 font-medium">1</p>
                      </div>
                    </td>
                    <td className="pt-6">
                      <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                        <p className="text-base text-gray-500 dark:text-gray-100">2</p>
                      </div>
                    </td>
                    <td className="pt-6">
                      <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                        <p className="text-base text-gray-500 dark:text-gray-100">3</p>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                        <p className="text-base text-red-500 dark:text-red-700 font-medium">4</p>
                      </div>
                    </td>
                    <td>
                      <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                        <p className="text-base text-gray-500 dark:text-gray-100 font-medium">5</p>
                      </div>
                    </td>
                    <td>
                      <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                        <p className="text-base text-gray-500 dark:text-gray-100 font-medium">6</p>
                      </div>
                    </td>
                    <td>
                      <div className="w-full h-full">
                        <div className="flex items-center justify-center w-full rounded-full cursor-pointer">
                          <p className="text-base text-gray-500 dark:text-gray-100 font-medium">7</p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                        <p className="text-base text-gray-500 dark:text-gray-100 font-medium">8</p>
                      </div>
                    </td>
                    <td>
                      <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                        <p className="text-base text-gray-500 dark:text-gray-100">9</p>
                      </div>
                    </td>
                    <td>
                      <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                        <p className="text-base text-gray-500 dark:text-gray-100">10</p>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                        <p className="text-base text-red-500 dark:text-red-700 font-medium">11</p>
                      </div>
                    </td>
                    <td>
                      <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                        <p className="text-base text-gray-500 dark:text-gray-100 font-medium">12</p>
                      </div>
                    </td>
                    <td>
                      <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                        <p className="text-base text-gray-500 dark:text-gray-100 font-medium">13</p>
                      </div>
                    </td>
                    <td>
                      <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                        <p className="text-base text-gray-500 dark:text-gray-100 font-medium">14</p>
                      </div>
                    </td>
                    <td>
                      <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                        <p className="text-base text-gray-500 dark:text-gray-100 font-medium">15</p>
                      </div>
                    </td>
                    <td>
                      <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                        <p className="text-base text-gray-500 dark:text-gray-100">16</p>
                      </div>
                    </td>
                    <td>
                      <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                        <button>
                          <svg className="text-red-400 w-6 h-auto fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path d="M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z"/>
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                        <p className="text-base text-red-500 dark:text-red-700 font-medium">18</p>
                      </div>
                    </td>
                    <td>
                      <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                        <p className="text-base text-gray-500 dark:text-gray-100 font-medium">19</p>
                      </div>
                    </td>
                    <td>
                      <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                        <p className="text-base text-gray-500 dark:text-gray-100 font-medium">20</p>
                      </div>
                    </td>
                    <td>
                      <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                        <p className="text-base text-gray-500 dark:text-gray-100 font-medium">21</p>
                      </div>
                    </td>
                    <td>
                      <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                        <p className="text-base text-gray-500 dark:text-gray-100 font-medium">22</p>
                      </div>
                    </td>
                    <td>
                      <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                        <p className="text-base text-gray-500 dark:text-gray-100">23</p>
                      </div>
                    </td>
                    <td>
                      <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                        <p className="text-base text-gray-500 dark:text-gray-100">24</p>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                        <p className="text-base text-red-500 dark:text-red-700 font-medium">25</p>
                      </div>
                    </td>
                    <td>
                      <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                        <p className="text-base text-gray-500 dark:text-gray-100 font-medium">26</p>
                      </div>
                    </td>
                    <td>
                      <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                        <p className="text-base text-gray-500 dark:text-gray-100 font-medium">27</p>
                      </div>
                    </td>
                    <td>
                      <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                        <p className="text-base text-gray-500 dark:text-gray-100 font-medium">28</p>
                      </div>
                    </td>
                    <td>
                      <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                        <p className="text-base text-gray-500 dark:text-gray-100 font-medium">29</p>
                      </div>
                    </td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>


        {/* footer */}
        <div className="flex flex-col-reverse justify-between pt-5 pb-10">
          <p className="text-sm text-gray-600">© Copyright 2023 Kojihyo. All rights reserved.</p>
          <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
          </ul>
        </div>



      </main>
  )
}
