'use client';

import './globals.css'
import theme from './theme';
import Script from "next/script";

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';

declare global {
    interface Window {
        kakao: any;
    }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <head />
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <body>{children}</body>
            {/* 해당 부분에 Script를 추가한다. */}
            <Script src="https://developers.kakao.com/sdk/js/kakao.js" async />
            {/* 이 두번째 Script는 kakao map을 이용하기 위한 Script이다. appkey 부분엔 발급받은 본인의 API KEY를 입력한다. */}
            <Script
                type="text/javascript"
                src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=ca890567457c18e421fd93cc86868d7f&autoload=false&libraries=services`}
            />
        </ThemeProvider>
        </html>
    );
}