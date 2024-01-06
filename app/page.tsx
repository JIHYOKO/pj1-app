'use client'

import Image from 'next/image';

import { useEffect } from 'react';
import { useRef, useState } from 'react';
import * as React from 'react';
import "tailwindcss/tailwind.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Checkbox from '@mui/material/Checkbox';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {auto} from "@popperjs/core";

export default function Home() {

  useEffect(() => {
    // 카운트다운 구현
    var countDownDate = new Date('Feb 17, 2024 13:00:00').getTime();

    // 1초마다 카운트다운 업데이트
    var x = setInterval(function () {
      // 현재 시간 구하기
      var now = new Date().getTime();

      // 남은 시간 계산
      var distance = countDownDate - now;

      // 남은 시간을 일, 시간, 분, 초로 계산
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // React 컴포넌트 내의 요소에 결과를 표시
      document.getElementById('days').textContent = days + '일';
      document.getElementById('hours').textContent = hours + '시간';
      document.getElementById('minutes').textContent = minutes + '분';
      document.getElementById('seconds').textContent = seconds + '초';
    }, 1000);

    // 컴포넌트가 사라질 때 interval 정리
    return () => clearInterval(x);
  }, []); // 빈 배열은 컴포넌트가 처음 렌더링될 때만 실행하도록 합니다.

  useEffect(() => {
    // 카카오맵 구현
    const mapScript = document.createElement('script');

    mapScript.async = true;
    mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=ca890567457c18e421fd93cc86868d7f&autoload=false`;

    document.head.appendChild(mapScript);

    const onLoadKakaoMap = () => {
      window.kakao.maps.load(() => {
        const mapContainer = document.getElementById('map');
        const mapOption = {
          center: new window.kakao.maps.LatLng(37.31471634720639, 126.82791181717748), // 지도의 중심좌표
          level: 3, // 지도의 확대 레벨
        };
        new window.kakao.maps.Map(mapContainer, mapOption);

        // 마커
        const map = new window.kakao.maps.Map(mapContainer, mapOption);
        const markerPosition = new window.kakao.maps.LatLng(37.31471634720639, 126.82791181717748);
        // 마커를 생성합니다
        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
        });
        marker.setMap(map);
      });
    };
    mapScript.addEventListener('load', onLoadKakaoMap);
  }, []);

  const codeElementRef = useRef(null);
  const [copiedText, setCopiedText] = useState('');

  const copyCodeToClipboard = () => {
    alert('test');
    const codeElement = codeElementRef.current;
    if (codeElement) {
      const range = document.createRange();
      range.selectNode(codeElement);
      window.getSelection().removeAllRanges();
      window.getSelection().addRange(range);

      try {
        const successful = document.execCommand('copy');
        if (successful) {
          setCopiedText('코드를 클립보드로 복사했습니다.');
        } else {
          setCopiedText('코드 복사에 실패했습니다.');
        }
      } catch (err) {
        console.error('복사 중 오류가 발생했습니다:', err);
        setCopiedText('코드 복사에 실패했습니다.');
      }

      window.getSelection().removeAllRanges();
    } else {
      console.error('클래스명이 language-javascript인 요소를 찾을 수 없습니다.');
    }
  };

  return (
      <main className="flex min-h-screen flex-col items-center justify-between">
        <h1 className="text-4xl font-bold text-center mb-8">권형준 🤍 고지효</h1>

        <div className="bg-blue-500 py-4 px-5 rounded-2xl text-white text-center">
          <p><b>2024년 2월 17일 토요일 오후 1시</b></p>
          <p className="language-javascript">빌라드지디 안산 그랜드볼룸홀 💍</p>
        </div>

        {/* 미모티콘 */}
        <div className="image-container">
          <div className="left-image">
            <Image src="/emoji_joon.png" alt="Left Image" width={500} height={300}/>
          </div>
          <div className="right-image">
            <Image src="/emoji_hyo.png" alt="Right Image" width={500} height={300}/>
          </div>
        </div>
        <br/><br/>

        {/* 말풍선 */}
        <div className="greeting">
          <blockquote className="max-w-sm p-6 bg-gray-100 border-gray-600 rounded-bl-sm shadow-sm rounded-2xl text-center">
            <p>
              믿음과 사랑으로 한 가정을 이루고자 <br/>혼인 예배를 드리오니 새로운 가정을 이루는 <br/>약속의 증인이 되어 앞날을 축복해 주시면 <br/>감사하겠습니다.
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
        <br/><br/>

        {/* 글귀 */}
        <div className="px-4 py-4 mx-5 font-normal bg-red-200 rounded-lg max-w-xs">
          <p className="text-gray-700">
            사랑은 오래 참고 사랑은 온유하며 <br/>
            투기하는 자가 되지 아니하며 사랑은 <br/>
            자랑하지 아니하며 교만하지 아니하며 <br/>
            무례히 행치 아니하며 자기의 유익을 <br/>
            구치 아니하며 성내지 아니하며 악한 <br/>
            것을 생각지 아니하며 불의를 기뻐하지 <br/>
            아니하며 진리와 함께 기뻐하고 모든 <br/>
            것을 참으며 모든 것을 믿으며 모든 것을 <br/>
            바라며 모든 것을 견디느니라
          </p>
          <br/>
          <p><b>고린도전서 13:4-7</b></p>
        </div>

        <br/>

        {/* 연락처 */}
        <div>
          <Image className="my-4" alt="Next.js Logo" src="/photo2.jpg" width={400} height={300}/>
          <br/>
          <p className="text-center">
            <span className="text-lg text-gray-700 font-bold">권일혁 · 이혜숙</span>의 아들 &nbsp;<span className="text-lg text-gray-700 font-bold">형준 </span><a href="tel:010-9993-3993">CALL</a>
          </p>
          <p className="text-center">
            <span className="text-lg text-gray-700 font-bold">고현빈 · 박은영</span>의 &nbsp;&nbsp;딸 &nbsp;&nbsp;&nbsp;<span className="text-lg text-gray-700 font-bold">지효</span><a href="tel:010-9993-3993">CALL</a>
          </p>
        </div>

        <br/><br/>

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
        <br/>

        {/* 카운트 다운 */}
        <div>
          <div className="max-w-lg mx-auto bg-white rounded-lg overflow-hidden">
            <div className="py-4 px-6">
              <p className="text-center">형준 ❤ 지효의 결혼식까지</p>
            </div>

            <div className="py-4 px-4 border border-yellow-400 rounded-lg bg-yellow-100/50 rounded-ful">
              <div className="flex flex-wrap gap-4 justify-center items-center">
                <div className="px-3 py-2">
                  <div id="days" className="font-bold font-mono text-xl text-gray-800"></div>
                </div>
                <div className="px-3 py-2">
                  <div id="hours" className="font-bold font-mono text-xl text-gray-800"></div>
                </div>
                <div className="px-3 py-2">
                  <div id="minutes" className="font-bold font-mono text-xl text-gray-800"></div>
                </div>
                <div className="px-3 py-2">
                  <div id="seconds" className="font-bold font-mono text-xl text-gray-800"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br/><br/>

        {/* 사진 */}
        <Carousel>
          <div>
            <Image src="/photo1.jpg" alt="photo3" width={400} height={300}/>
          </div>
          <div>
            <Image src="/photo2.jpg" alt="photo3" width={400} height={300}/>
          </div>
          <div>
            <Image src="/photo3.jpg" alt="photo3" width={400} height={300}/>
          </div>
          <div>
            <Image src="/photo4.jpg" alt="photo3" width={400} height={300}/>
          </div>
          <div>
            <Image src="/photo5.jpg" alt="photo3" width={400} height={300}/>
          </div>
          <div>
            <Image src="/photo6.jpg" alt="photo3" width={400} height={300}/>
          </div>
          <div>
            <Image src="/photo7.jpg" alt="photo3" width={400} height={300}/>
          </div>
        </Carousel>

        <h3 className="flex items-center w-full">
          <span className="flex-grow bg-gray-200 rounded h-1"></span>
          <span className="flex-grow bg-gray-200 rounded h-1"></span>
        </h3>

        <br/><br/>



        {/* 지도 */}
        <h3>L O C A T I O N</h3>
        <h3>오시는 길</h3>
        <h3>빌라드 지디 안산 8층 그랜드볼룸홀</h3>
        <br/>

        <div>
          <div id="map" className="w-96 h-96"></div>
        </div>
        <br/>
        <div>
          <ul className="flex flex-col gap-3">
            <li>
              <span className="inline-block mt-0 rounded-lg font-medium text-blue-800 bg-blue-100 px-1 relative">📍 주소</span>
              <p className="pb-4"> 경기도 안산시 단원구 광덕4로 140(고잔동 703) GD팰리스타워</p>
            </li>
            <li>
              <span className="inline-block mt-0 rounded-lg font-medium text-blue-800 bg-blue-100 px-1 relative">🚗 주차안내</span>
              <p className="pb-4"> GD팰리스타워 앞 화랑, 월드타워 주차 </p>
            </li>
            <li>
              <span className="inline-block mt-0 rounded-lg font-medium text-blue-800 bg-blue-100 px-1 relative">🚍셔틀버스</span>
              <p className="pb-4"> 삼성디지털시티 수원사업장주차장 정류장</p>
            </li>
            <li>
              <span className="inline-block mt-0 rounded-lg font-medium text-blue-800 bg-blue-100 px-1 relative">🚌 버스</span>
              <p className="pb-4"> 97번, 98번, 99-1번, 500번 버스 고잔역 뒤 정류장 하차</p>
            </li>
            <li>
              <span className="inline-block mt-0 rounded-lg font-medium text-blue-800 bg-blue-100 px-1 relative">🚊 지하철</span>
              <p> 4호선 고잔역 하차 2번출구 왼쪽대로변 200m 직진 </p>
            </li>
          </ul>
        </div>

        <br/><br/>

        {/* 예식정보 */}
        <div>



        </div>

        <br/><br/>

        {/* 계좌번호 */}
        <p>🕊</p>
        <br/>
        <h1 className="text-xl font-bold text-center mb-8">마음 전하실 곳</h1>
        <div className="py-4 px-0 max-w-lg mx-auto">
          <details className="mb-2">
            <summary className="bg-red-100 p-4 rounded-lg cursor-pointer shadow-md mb-4">
              <span className="font-semibold">신랑측 계좌번호</span>
            </summary>
            <ul className="ml-8 space-y-4">
              <li>
                <div className="bg-white p-4 flex justify-between items-center">
                  <div>
                    <p className="text-gray-800">새마을 9003-2639-36004</p>
                    <p>권형준</p>
                  </div>
                  <button className="py-2.5 px-6 rounded-lg text-sm font-medium bg-white text-gray-500 border border-gray-300">복사</button>
                </div>
                <div className="bg-white p-4 flex justify-between items-center">
                  <div>
                    <p className="text-gray-800">국민 9999-9999-999</p>
                    <p>권일혁</p>
                  </div>
                  <button className="py-2.5 px-6 rounded-lg text-sm font-medium bg-white text-gray-500 border border-gray-300">복사</button>
                </div>
                <div className="bg-white p-4 flex justify-between items-center">
                  <div>
                    <p className="text-gray-800">국민 9999-9999-999</p>
                    <p>이혜숙</p>
                  </div>
                  <button className="py-2.5 px-6 rounded-lg text-sm font-medium bg-white text-gray-500 border border-gray-300">복사</button>
                </div>
              </li>
            </ul>
          </details>
          <details className="mb-2">
            <summary className="bg-red-100 p-4 rounded-lg cursor-pointer shadow-md mb-4">
              <span className="font-semibold">신부측 계좌번호</span>
            </summary>
            <ul className="ml-8 space-y-4">
              <li>
                <div className="bg-white p-4 flex justify-between items-center">
                  <div>
                    <p className="text-gray-800">신한 110-500-850618</p>
                    <p>고지효</p>
                  </div>
                  <button className="py-2.5 px-6 rounded-lg text-sm font-medium bg-white text-gray-500 border border-gray-300">복사</button>
                </div>
                <div className="bg-white p-4 flex justify-between items-center">
                  <div>
                    <p className="text-gray-800">신한 110-382-019902</p>
                    <p>박은영</p>
                  </div>
                  <button className="py-2.5 px-6 rounded-lg text-sm font-medium bg-white text-gray-500 border border-gray-300">복사</button>
                </div>
              </li>
            </ul>
          </details>
        </div>

        <br/><br/>

        {/* 마지막 인사 */}
        <div className="font-sans rounded-md border px-6 py-4 max-w-md">
          <div className="flex items-center">
          </div>
          <div className=" mt-3 mb-1 leading-normal text-lg">
            🤵🏻👰🏻응원하고 격려해주신 모든 분들께 감사드리며
            행복하게 잘 살겠습니다.🎉
          </div>
          <div className="text-grey mb-3 text-sm">13:00 PM - Feb 17, 2024</div>
          <div className="flex text-grey">
            <div className="flex items-center mr-4">
              <svg className="mr-2" width="24" height="24" viewBox="0 0 24 24">
                <path className="fill-current"
                      d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.045.286.12.403.143.225.385.347.633.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.368-3.43-7.788-7.8-7.79zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.334-.75-.75-.75h-.395c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z">
                </path>
              </svg>
              <span>2</span></div>
            <div className="flex items-center mr-4">
              <svg className="mr-2" width="24" height="24" viewBox="0 0 24 24">
                <path className="fill-current"
                      d="M23.77 15.67c-.292-.293-.767-.293-1.06 0l-2.22 2.22V7.65c0-2.068-1.683-3.75-3.75-3.75h-5.85c-.414 0-.75.336-.75.75s.336.75.75.75h5.85c1.24 0 2.25 1.01 2.25 2.25v10.24l-2.22-2.22c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l3.5 3.5c.145.147.337.22.53.22s.383-.072.53-.22l3.5-3.5c.294-.292.294-.767 0-1.06zm-10.66 3.28H7.26c-1.24 0-2.25-1.01-2.25-2.25V6.46l2.22 2.22c.148.147.34.22.532.22s.384-.073.53-.22c.293-.293.293-.768 0-1.06l-3.5-3.5c-.293-.294-.768-.294-1.06 0l-3.5 3.5c-.294.292-.294.767 0 1.06s.767.293 1.06 0l2.22-2.22V16.7c0 2.068 1.683 3.75 3.75 3.75h5.85c.414 0 .75-.336.75-.75s-.337-.75-.75-.75z">
                </path>
              </svg>
              <span>17</span></div>
            <div className="flex items-center">
              <svg className="mr-2" width="24" height="24" viewBox="0 0 24 24">
                <path className="fill-current"
                      d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.813-1.148 2.353-2.73 4.644-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.375-7.454 13.11-10.037 13.156H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.035 11.596 8.55 11.658 1.52-.062 8.55-5.917 8.55-11.658 0-2.267-1.822-4.255-3.902-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.015-.03-1.426-2.965-3.955-2.965z">
                </path>
              </svg>
              <span>2024</span></div>
          </div>
        </div>

        {/* footer */}
        <div className="flex flex-col-reverse justify-between pt-5 pb-10">
          <p className="text-sm text-gray-600">© Copyright 2024 kojihyo. All rights reserved.</p>
          <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
          </ul>
        </div>

      </main>
  )
}
