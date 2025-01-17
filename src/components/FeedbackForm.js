import React, { useState, useEffect } from 'react';
import { TextField, Button, FormControlLabel, Typography, Box, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import '../styles/_feedbackForm.scss';
import {sendFeedback} from "../services/apiService";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProjectIcon = () => (
    <svg
        width="76"
        height="71"
        viewBox="0 0 76 71"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
        className="mobile-only"
    >
        <circle cx="40.4343" cy="39.4616" r="30.6921" fill="#6C799F"/>
        <mask id="mask0_36_317" maskUnits="userSpaceOnUse" x="9" y="8" width="63" height="63">
            <circle cx="40.4382" cy="39.4616" r="30.6921" fill="#6C799F"/>
        </mask>
        <g mask="url(#mask0_36_317)">
            <path
                d="M49.696 51.6387V69.0267C49.5694 69.0885 49.0918 69.1749 48.9652 69.2367C47.51 69.6073 46.3427 69.9661 44.8242 70.1514V51.6387H49.696Z"
                fill="white"/>
            <path
                d="M54.0788 51.6387V66.8161C53.7583 67.0035 53.4378 67.1284 53.1173 67.2533C52.9891 67.3158 52.8609 67.3782 52.7326 67.4407H52.6685C52.5403 67.5031 52.348 67.5656 52.2198 67.628C51.2583 68.0653 50.2327 68.3776 49.207 68.6898V51.6387H54.0788Z"
                fill="#D5DAE8"/>
            <path opacity="0.1"
                  d="M53.9234 58.9473V66.4422C53.6752 66.5661 53.4269 66.69 53.1787 66.8139C53.0546 66.8758 52.9305 66.9378 52.8064 66.9997H52.7443C52.6202 67.0616 52.434 67.1236 52.3099 67.1855C51.379 67.6191 50.3861 67.9288 49.3932 68.2385C49.3311 68.2385 49.2691 68.3005 49.207 68.3005V66.69C49.2691 66.5042 49.3311 66.3183 49.3932 66.1325C50.3241 63.7168 51.5032 61.7966 52.8684 60.1861C53.1787 59.7525 53.5511 59.3189 53.9234 58.9473Z"
                  fill="#062C78"/>
            <path opacity="0.1" d="M54.1337 51.5977H44.9492V56.9247H54.1337V51.5977Z" fill="#062C78"/>
            <path
                d="M36.5805 64.4941C35.7117 65.7949 34.6568 67.9009 34.0362 69.6973C33.9741 69.8211 33.9121 70.007 33.9121 70.1308C33.4777 70.0689 33.0433 69.945 32.6089 69.8211C32.2365 68.954 31.9883 68.0248 31.9883 68.0248C32.2365 67.7151 32.4227 67.4674 32.6709 67.2196C33.85 65.733 35.0912 64.7419 36.5805 64.4941Z"
                fill="#B6BED6"/>
            <path
                d="M22.3667 57.1844C23.8561 61.5823 24.7591 64.8386 26.3106 67.4402C29.9644 69.3889 33.131 69.876 34.1054 70.1196C33.733 69.4383 33.1647 68.1481 32.6062 67.1571C31.303 64.9272 29.4413 62.2637 27.2693 60.4673C25.5317 59.0427 24.3526 58.1755 23.6079 57.68C23.2355 57.4322 22.9253 57.3083 22.7391 57.1844C22.4288 57.0605 22.3047 57.0605 22.3047 57.0605C22.3667 57.1225 22.3667 57.1225 22.3667 57.1844V57.1844Z"
                fill="#D5DAE8"/>
            <path
                d="M31.7374 69.5103C31.6133 69.4484 31.4892 69.4484 31.3651 69.3864C31.241 69.3245 31.1168 69.3245 30.9307 69.2625C28.076 63.5019 24.849 59.8474 22.9253 57.7413C22.7391 57.4936 22.5529 57.3078 22.3667 57.1219C22.3667 57.06 22.3667 57.06 22.3047 56.998C22.3047 56.998 22.4288 56.998 22.7391 57.1219C22.9253 57.2458 23.2355 57.3697 23.6079 57.6175C25.5937 59.8474 28.8828 63.6258 31.7374 69.5103Z"
                fill="#EAEEF9"/>
            <path
                d="M60.5957 55.8638L60.7819 55.4922C60.4095 55.6161 60.0372 55.74 59.789 55.8638C57.9893 56.4833 56.0655 57.6601 54.2659 59.4565C53.8315 59.89 53.3971 60.3856 52.9627 60.8811L52.9627 60.8811C51.5974 62.4916 50.4183 64.4118 49.4874 66.8275C49.1771 67.5089 48.967 68.6181 48.7188 69.4233C52.6162 68.6926 56.0264 66.2567 56.0264 66.2567C57.2055 62.2305 59.851 57.2266 60.5957 55.8638Z"
                fill="#D5DAE8"/>
            <path
                d="M60.602 55.8638L60.7882 55.4922C60.4158 55.6161 59.9262 55.7824 59.4391 56.026C57.4532 57.8842 55.8236 60.4475 54.148 63.8543C53.5895 65.0312 53.031 66.332 52.4725 67.6947C52.4725 67.6947 52.375 67.9618 52.375 68.2054C52.4991 68.1435 53.2252 67.7802 53.3494 67.7182C53.6596 66.913 53.8377 66.0223 54.148 65.279C56.0718 61.1289 58.2438 57.9079 60.602 55.8638Z"
                fill="#EAEEF9"/>
        </g>
        <path
            d="M37.7561 25.0251C34.7773 22.6093 33.2259 18.5831 33.7844 14.8047C34.405 10.5307 37.4458 9.72544 38.9972 10.4068C40.1143 10.9023 40.7969 12.3889 40.1763 13.5039C39.1213 15.486 35.0876 14.6808 34.2809 11.274C33.9706 10.0351 34.2809 8.67243 35.0255 7.61941C36.2667 5.94698 38.5628 5.32757 40.6107 5.01786C41.1072 5.01786 41.6036 4.95591 42.038 4.89397C43.1551 4.77009 44.5203 4.58426 45.9477 4.39844"
            stroke="#D5DAE8" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M49.0528 5.14034L47.129 6.00753L47.4393 2.72461" fill="#D5DAE8"/>
        <path
            d="M61.399 1.11495L60.5302 1.61049L50.4769 7.2472L47.8705 3.4068L47.4361 2.72544L45.5743 0L59.7855 0.99107L61.399 1.11495Z"
            fill="#EAEEF9"/>
        <path d="M61.4005 1.11607L60.5317 1.61161L47.872 3.40792L47.4376 2.72656L59.7871 0.992188L61.4005 1.11607Z"
              fill="#D5DAE8"/>
        <path
            d="M10.6806 20.9804C11.4955 20.716 11.9413 19.8424 11.6765 19.029C11.4116 18.2157 10.5364 17.7707 9.72151 18.035C8.90666 18.2994 8.4608 19.173 8.72565 19.9863C8.9905 20.7997 9.86577 21.2447 10.6806 20.9804Z"
            fill="#EAEEF9"/>
        <path
            d="M14.0656 15.9293C14.6197 15.7495 14.9229 15.1555 14.7428 14.6024C14.5627 14.0493 13.9675 13.7467 13.4134 13.9265C12.8593 14.1062 12.5562 14.7003 12.7363 15.2534C12.9164 15.8064 13.5115 16.1091 14.0656 15.9293Z"
            fill="#EAEEF9"/>
        <path
            d="M26.8131 8.65485C27.7745 7.77789 27.8417 6.28904 26.9631 5.32941C26.0845 4.36978 24.5929 4.30276 23.6314 5.17971C22.67 6.05667 22.6029 7.54551 23.4815 8.50515C24.36 9.46478 25.8517 9.5318 26.8131 8.65485Z"
            fill="#EAEEF9"/>
        <path
            d="M75.2679 20.7302C75.6727 20.3609 75.701 19.7341 75.3311 19.33C74.9611 18.9259 74.3331 18.8977 73.9283 19.267C73.5235 19.6362 73.4952 20.2631 73.8651 20.6672C74.2351 21.0712 74.8631 21.0994 75.2679 20.7302Z"
            fill="#EAEEF9"/>
        <path
            d="M73.6223 32.7675V51.8456L59.434 51.883L58.7285 51.9076H28.8789V17.6537H57.2392C57.6115 17.5918 57.9838 17.5918 58.4182 17.5918C58.9147 17.5918 59.3491 17.5918 59.8456 17.6537C60.4661 17.7157 61.0247 17.7776 61.5832 17.9015C64.4999 18.5209 67.1063 20.0075 69.1542 21.9897C71.9468 24.7771 73.6223 28.6174 73.6223 32.7675Z"
            fill="url(#paint0_linear_36_317)"/>
        <path
            d="M61.5814 17.9621V32.1467C61.5814 32.6423 61.209 33.0139 60.7126 33.0139C60.2161 33.0139 59.8438 32.6423 59.8438 32.1467V17.6523C60.4023 17.7143 61.0228 17.8382 61.5814 17.9621Z"
            fill="url(#paint1_linear_36_317)"/>
        <path
            d="M61.0264 37.2277C62.9115 37.2277 64.4396 35.7024 64.4396 33.8209C64.4396 31.9393 62.9115 30.4141 61.0264 30.4141C59.1414 30.4141 57.6133 31.9393 57.6133 33.8209C57.6133 35.7024 59.1414 37.2277 61.0264 37.2277Z"
            fill="#5C71FF"/>
        <path
            d="M61.5881 36.7921C63.5416 36.7921 65.1253 35.2668 65.1253 33.3853C65.1253 31.5038 63.5416 29.9785 61.5881 29.9785C59.6345 29.9785 58.0508 31.5038 58.0508 33.3853C58.0508 35.2668 59.6345 36.7921 61.5881 36.7921Z"
            fill="#D5DAE8"/>
        <path
            d="M61.7686 36.7921C63.6537 36.7921 65.1818 35.2668 65.1818 33.3853C65.1818 31.5038 63.6537 29.9785 61.7686 29.9785C59.8836 29.9785 58.3555 31.5038 58.3555 33.3853C58.3555 35.2668 59.8836 36.7921 61.7686 36.7921Z"
            fill="#EAEEF9"/>
        <path
            d="M61.772 34.6875C62.4917 34.6875 63.0752 34.1051 63.0752 33.3867C63.0752 32.6683 62.4917 32.0859 61.772 32.0859C61.0522 32.0859 60.4688 32.6683 60.4688 33.3867C60.4688 34.1051 61.0522 34.6875 61.772 34.6875Z"
            fill="#D5DAE8"/>
        <path
            d="M43.7089 31.2796V51.9062H13.3008V31.2796C13.3008 24.7757 17.893 19.3248 23.9747 17.9621C24.9676 17.7143 25.9605 17.6523 27.0155 17.6523H30.1183C36.9447 17.6523 42.5919 22.6077 43.6469 29.1735C43.6469 29.7929 43.7089 30.5362 43.7089 31.2796Z"
            fill="url(#paint2_linear_36_317)"/>
        <path
            d="M62.761 16.8477V33.2622C62.761 33.7578 62.3887 34.1294 61.8922 34.1294C61.3958 34.1294 61.0234 33.7578 61.0234 33.2622V16.8477H62.761Z"
            fill="white"/>
        <path
            d="M37.2953 43.1737C37.2953 44.4745 36.2404 45.5275 34.9371 45.5275C10.6106 45.5275 12.1621 45.6514 11.3553 45.1558C10.6727 44.7222 10.2383 43.9789 10.2383 43.1737C11.6656 27.0069 11.4174 27.1927 12.4103 26.2636C13.3412 25.4583 12.0379 25.7061 36.2404 25.7061C36.985 25.7061 37.6677 26.0777 38.1021 26.5733C38.9088 27.6263 38.7226 27.2546 37.2953 43.1737Z"
            fill="white"/>
        <path
            d="M38.3544 26.945C26.0671 37.3512 26.3774 37.537 24.5777 37.537C22.6539 37.537 22.8401 37.2893 11.918 26.945C12.8488 25.2106 12.2903 25.7062 36.3065 25.7062C37.1753 25.7062 37.9821 26.2017 38.3544 26.945Z"
            fill="#EAEEF9"/>
        <path
            d="M8.7501 30.3508H0.682632C0.310287 30.3508 0 30.0411 0 29.6694C0 29.2978 0.310287 28.9881 0.682632 28.9881H8.7501C9.12245 28.9881 9.43273 29.2978 9.43273 29.6694C9.43273 30.0411 9.12245 30.3508 8.7501 30.3508Z"
            fill="url(#paint3_linear_36_317)"/>
        <path
            d="M8.37991 34.1928H3.7256C3.35326 34.1928 3.04297 33.8831 3.04297 33.5114C3.04297 33.1398 3.35326 32.8301 3.7256 32.8301H8.37991C8.75225 32.8301 9.06254 33.1398 9.06254 33.5114C9.06254 33.8831 8.75225 34.1928 8.37991 34.1928Z"
            fill="url(#paint4_linear_36_317)"/>
        <path
            d="M7.9453 37.8471H5.33888C4.96654 37.8471 4.65625 37.5374 4.65625 37.1657C4.65625 36.7941 4.96654 36.4844 5.33888 36.4844H8.00735C8.3797 36.4844 8.68998 36.7941 8.68998 37.1657C8.68998 37.5374 8.3797 37.8471 7.9453 37.8471Z"
            fill="url(#paint5_linear_36_317)"/>
        <path
            d="M33.7565 37.6602H30.9639C30.7777 37.6602 30.6536 37.784 30.6536 37.9699L30.5915 38.3415L30.4674 39.3326L30.4054 40.0139L30.2812 40.7573C30.2812 40.8192 30.2812 40.8811 30.2812 40.9431C30.3433 41.067 30.4674 41.1908 30.5915 41.1908H33.3841C33.5703 41.1908 33.6944 41.067 33.6944 40.8811L34.0668 38.0937C34.1288 37.846 34.0047 37.6602 33.7565 37.6602ZM33.0738 40.1998C33.0738 40.2617 33.0118 40.3856 32.8877 40.3856H31.5224H31.3362C31.2121 40.3856 31.1501 40.2617 31.1501 40.1998L31.2121 39.7042L31.2742 39.0229L31.3362 38.7132C31.3362 38.6512 31.3983 38.5273 31.5224 38.5273H33.0738C33.198 38.5273 33.26 38.6512 33.26 38.7132L33.0738 40.1998Z"
            fill="#2D76F9"/>
        <path
            d="M31.5269 38.4654C31.4027 38.4654 31.3407 38.5274 31.3407 38.6513L31.2786 38.961C30.9683 39.1468 30.7201 39.2707 30.4719 39.3326C30.2857 39.3946 30.0995 39.3946 29.9134 39.3946C29.3548 39.3946 28.9204 39.2087 28.5481 39.0229C27.9896 38.7751 27.8655 38.7751 27.6793 38.961C27.4931 39.1468 27.2449 39.1468 27.0587 39.0229C26.8725 38.8371 26.8725 38.5893 26.9967 38.4035C27.6172 37.6602 28.3619 37.9699 28.9204 38.2177C29.479 38.4654 29.9134 38.7132 30.596 38.3415C30.658 38.2796 30.7822 38.2796 30.8442 38.2177C31.0304 38.0938 31.3407 38.1557 31.4648 38.3415C31.5269 38.3415 31.5269 38.4035 31.5269 38.4654Z"
            fill="#2D76F9"/>
        <path
            d="M31.5277 40.3254L31.4657 40.3873C31.0313 40.697 30.6589 40.8209 30.3486 40.8828C30.2245 40.8828 30.1004 40.8828 30.0384 40.8828C29.4798 40.8828 29.0454 40.697 28.6731 40.5112C28.1146 40.2634 27.9905 40.2634 27.8043 40.4492C27.6181 40.6351 27.3699 40.6351 27.1837 40.5112C26.9975 40.3254 26.9975 40.0776 27.1217 39.8918C27.7422 39.1485 28.4869 39.4582 28.9834 39.7059C29.4178 39.8918 29.8522 40.0776 30.3486 39.9537C30.5348 39.8918 30.6589 39.8298 30.9072 39.7059C30.9692 39.644 31.0933 39.644 31.2174 39.644L31.1554 40.1395C31.1554 40.2634 31.2174 40.3254 31.3416 40.3254H31.5277Z"
            fill="#2D76F9"/>
        <path opacity="0.5"
              d="M43.7112 34.1303L43.525 29.113C42.47 22.6091 36.8228 17.5918 29.9965 17.5918H26.8936C25.8387 17.5918 24.8457 17.7157 23.8528 17.9015L23.4805 18.2112L31.1756 49.8016L43.6491 50.4829V34.1303H43.7112Z"
              fill="url(#paint6_linear_36_317)"/>
        <path
            d="M71.1384 16.2904C71.3866 16.4763 71.2625 16.9099 70.8901 16.9099H62.8227H60.9609V10.1582H70.8901C71.2004 10.1582 71.3866 10.5299 71.1384 10.7776L68.5319 12.9456C68.1596 13.2553 68.1596 13.8128 68.5319 14.1225L71.1384 16.2904Z"
            fill="url(#paint7_linear_36_317)"/>
        <path
            d="M43.7167 29.113C42.6618 22.6091 36.8904 17.5918 30.0641 17.5918H26.9612C25.9063 17.5918 24.9133 17.7157 23.9204 17.9015C19.5764 18.8926 16.0391 21.9277 14.3015 25.892C14.4877 25.7681 14.798 25.7062 15.4185 25.6442C17.0941 22.2374 20.259 19.6359 24.1066 18.7687C24.9754 18.5829 25.9683 18.459 26.8992 18.459H30.002C36.3319 18.459 41.6068 22.9807 42.5997 29.1749C42.7238 29.7943 42.7859 30.4757 42.7859 31.1571V50.8546H14.2395V45.4037C13.743 45.4037 13.4948 45.3417 13.3086 45.2798V51.7837H43.9029V31.2809C43.9029 30.5376 43.8409 29.7943 43.7167 29.113Z"
            fill="#96A7FF"/>
        <path
            d="M43.9025 49.7402V51.9082H2.32407C1.70349 51.9082 1.20703 51.4127 1.20703 50.8552C1.20703 50.2358 1.70349 49.7402 2.32407 49.7402H43.9025Z"
            fill="#7894FF"/>
        <defs>
            <linearGradient id="paint0_linear_36_317" x1="28.8835" y1="34.7693" x2="73.6331" y2="34.7693"
                            gradientUnits="userSpaceOnUse">
                <stop stop-color="#1D5BF8"/>
                <stop offset="1" stop-color="#609FFF"/>
            </linearGradient>
            <linearGradient id="paint1_linear_36_317" x1="60.7078" y1="30.884" x2="60.7078" y2="22.6704"
                            gradientUnits="userSpaceOnUse">
                <stop stop-color="#4F6AFF"/>
                <stop offset="1" stop-color="#657EFF" stop-opacity="0"/>
            </linearGradient>
            <linearGradient id="paint2_linear_36_317" x1="13.2806" y1="34.7463" x2="43.7197" y2="34.7463"
                            gradientUnits="userSpaceOnUse">
                <stop stop-color="#627AFF"/>
                <stop offset="1" stop-color="#273DD1"/>
            </linearGradient>
            <linearGradient id="paint3_linear_36_317" x1="-1.74422" y1="28.734" x2="-1.62611" y2="30.412"
                            gradientUnits="userSpaceOnUse">
                <stop stop-color="#E9ECF6"/>
                <stop offset="1" stop-color="white"/>
            </linearGradient>
            <linearGradient id="paint4_linear_36_317" x1="1.92988" y1="32.5761" x2="2.11365" y2="34.242"
                            gradientUnits="userSpaceOnUse">
                <stop stop-color="#E9ECF6"/>
                <stop offset="1" stop-color="white"/>
            </linearGradient>
            <linearGradient id="paint5_linear_36_317" x1="3.91037" y1="36.2304" x2="4.18061" y2="37.8721" gradientUnits="userSpaceOnUse">
                <stop stop-color="#E9ECF6"/>
                <stop offset="1" stop-color="white"/>
            </linearGradient>
            <linearGradient id="paint6_linear_36_317" x1="42.942" y1="33.6995" x2="30.0983" y2="34.298" gradientUnits="userSpaceOnUse">
                <stop stop-color="#0C1E82"/>
                <stop offset="1" stop-color="#001DB5" stop-opacity="0"/>
            </linearGradient>
            <linearGradient id="paint7_linear_36_317" x1="61.0274" y1="13.5058" x2="71.2854" y2="13.5058" gradientUnits="userSpaceOnUse">
                <stop stop-color="#64BEFF"/>
                <stop offset="1" stop-color="#0C8AFF"/>
            </linearGradient>
        </defs>
    </svg>);

const CustomTextField = styled(TextField)(({ theme }) => ({
    [theme.breakpoints.up(768, 900)]: {
        '& .MuiInputLabel-root': {
            transform: 'translate(35px, -10px)',
        },
        '& .MuiOutlinedInput-notchedOutline legend': {
            width: 'auto',
            maxWidth: '100%',
            padding: '0 16px',
        },
    },
}));

const CustomCheckbox = styled('input')(({theme}) => ({
    width: '25px',
    height: '25px',
    margin: '13px',
    border: '1px solid rgba(255, 255, 255, 1)',
    borderRadius: '4px',
    appearance: 'none',
    cursor: 'pointer',
    '&:checked': {
        backgroundColor: 'white',
        border: '1px solid rgba(255, 255, 255, 0.5)',
    },
}));

const CustomFormControlLabel = styled(FormControlLabel)`
    display: flex;
    margin-top: 37px;
    @media (max-width: 768px) {
        display: none;
    }
`;

const FeedbackForm = () => {
    const [formData, setFormData] = useState({name: '', email: '', phone: '', message: '', consent: false});
    const [errors, setErrors] = useState({});
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const validateForm = () => {
        let valid = true;
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Пожалуйста, введите ваше имя';
            valid = false;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim()) {
            newErrors.email = 'Пожалуйста, введите ваш email';
            valid = false;
        } else if (!emailPattern.test(formData.email)) {
            newErrors.email = 'Введите корректный email';
            valid = false;
        }

        if (!formData.phone.trim()) {
            newErrors.phone = 'Пожалуйста, введите ваш телефон';
            valid = false;
        } else if (!/^\+?[0-9]{10,15}$/.test(formData.phone)) {
            newErrors.phone = 'Введите корректный номер телефона';
            valid = false;
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Пожалуйста, введите сообщение';
            valid = false;
        }

        if (!isMobile && !formData.consent) {
            newErrors.consent = 'Пожалуйста, подтвердите согласие на обработку данных';
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) {
            toast.error("Заполните все обязательные поля корректно!", { position: "top-center" });
            return;
        }

        try {
            await sendFeedback(formData);
            toast.success("Сообщение отправлено!", { position: "top-center" });
            setErrors({});
        } catch (error) {
            if (error.response && error.response.status === 422) {
                toast.error("Ошибка отправки: проверьте данные.", { position: "top-center" });
                setErrors(error.response.data.errors);
            } else {
                toast.error("Произошла ошибка отправки. Попробуйте позже.", { position: "top-center" });
            }
        }
    };

    return (
        <Box component="form" onSubmit={handleSubmit} className="feedback-form" noValidate>
            <ToastContainer />
            <Box className="title-container" display={{xs: 'flex'}}>
                <ProjectIcon/>
                <Box>
                    <h2>Расскажите <br/>о вашем проекте<span className='desktop-only'>:</span></h2>
                </Box>
            </Box>
            <Grid container spacing={6}>
                <Grid item xs={12} md={4}>
                    <CustomTextField
                        label="Ваше имя"
                        variant="outlined"
                        fullWidth
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        error={!!errors.name}
                        helperText={errors.name}
                        required
                        InputProps={{
                            sx: {
                                height: {
                                    xs: '52px',
                                    sm: '61px',
                                },
                            },
                        }}
                    />
                </Grid>
                <Grid item xs={12} md={4}>
                    <CustomTextField
                        label="Email"
                        variant="outlined"
                        fullWidth
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        error={!!errors.email}
                        helperText={errors.email}
                        required
                        InputProps={{
                            sx: {
                                height: {
                                    xs: '52px',
                                    sm: '61px',
                                },
                            },
                        }}
                    />
                </Grid>
                <Grid item xs={12} md={4}>
                    <CustomTextField
                        label="Телефон"
                        variant="outlined"
                        fullWidth
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        error={!!errors.phone}
                        helperText={errors.phone}
                        required
                        InputProps={{
                            sx: {
                                height: {
                                    xs: '52px',
                                    sm: '61px',
                                },
                            },
                        }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <CustomTextField
                        label="Сообщение"
                        variant="outlined"
                        className='message'
                        fullWidth
                        multiline
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        error={!!errors.message}
                        helperText={errors.message}
                        required
                        InputProps={{
                            sx: {
                                height: '139px',
                            },
                        }}
                    />
                </Grid>
            </Grid>
            {!isMobile && (
                <CustomFormControlLabel
                    control={
                        <CustomCheckbox
                            type="checkbox"
                            checked={formData.consent}
                            onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                        />
                    }
                    label="Согласие на обработку персональных данных"
                    error={!!errors.consent}
                />
            )}
            {errors.consent && !formData.consent && (
                <Typography color="error" variant="body2" sx={{ mt: 1 }}>
                    {errors.consent}
                </Typography>
            )}
            <Box className="button-container" mt={6}>
                <Button type="submit" variant="contained">
                    {isMobile ? 'Отправить' : 'Обсудить проект'}
                </Button>
            </Box>
            {isMobile && (
                <Box className="consent-text-container" display={{ xs: 'block', md: 'none' }}>
                    <Typography variant="body2">
                        Нажимая "Отправить", Вы даете согласие на обработку персональных данных
                    </Typography>
            </Box>
                )}
        </Box>
    );
};

export default FeedbackForm;