(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const l of t)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function a(t){const l={};return t.integrity&&(l.integrity=t.integrity),t.referrerPolicy&&(l.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?l.credentials="include":t.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(t){if(t.ep)return;t.ep=!0;const l=a(t);fetch(t.href,l)}})();$(document).ready(function(){$(".body-header__burger").click(function(e){e.stopPropagation(),$(".body-header__burger,.body-header__menu").toggleClass("active"),$("body").toggleClass("lock")}),$(document).click(function(e){$(e.target).closest(".body-header__burger, .body-header__menu").length||($(".body-header__burger,.body-header__menu").removeClass("active"),$("body").removeClass("lock"))}),$(".header-list__item_sub").click(function(e){e.stopPropagation(),$(".header-list__top").not($(this).find(".header-list__top")).removeClass("active"),$(".header-list__wrapper-sub").not($(this).find(".header-list__wrapper-sub")).removeClass("active"),$(this).find(".header-list__top").toggleClass("active"),$(this).find(".header-list__wrapper-sub").toggleClass("active")}),$(document).click(function(e){$(e.target).closest(".header-list__item_sub, .header-list__wrapper-sub").length||($(".header-list__top").removeClass("active"),$(".header-list__wrapper-sub").removeClass("active"))}),$(".header-list__wrapper-sub").click(function(e){e.stopPropagation()}),$(".sub-list__item a").click(function(e){$(".body-header__burger,.body-header__menu").removeClass("active"),$("body").removeClass("lock"),$(this).closest(".header-list__wrapper-sub").removeClass("active"),$(this).closest(".header-list__item_sub").find(".header-list__top").removeClass("active")}),$(".header-list__item").click(function(e){$(this).hasClass("header-list__item_sub")||($(".body-header__burger,.body-header__menu").removeClass("active"),$("body").removeClass("lock"))}),$(".activity__langluage").click(function(e){e.stopPropagation(),$(".activity__wrapper-language").toggleClass("active")}),$(document).click(function(e){$(e.target).closest(".activity__langluage, .activity__wrapper-language").length||$(".activity__wrapper-language").removeClass("active")})});$(document).ready(function(){$(".title-tab__title").click(function(){var e=$(this).attr("id"),i=$('.about-banner__banner[id="'+e+'"]');i.length&&($(".title-tab__title, .about-banner__banner").removeClass("active"),$(this).addClass("active"),i.addClass("active"))})});$(document).ready(function(){$(".tabs-portfolio__item").click(function(){$(".tabs-portfolio__item").removeClass("active"),$(this).addClass("active");const e=$(this).find("img").attr("src");$(".portfolio-info__banner img").attr("src",e)})});$(document).ready(function(){$(".spoller__top").on("click",function(){const e=$(this).parent(),i=e.find(".spoller__text");e.hasClass("active")?(e.removeClass("active"),i.attr("hidden","hidden")):($(".spoller__item").removeClass("active"),$(".spoller__text").attr("hidden","hidden"),e.addClass("active"),i.removeAttr("hidden"))})});$(".activity__theme").on("click",function(){const e=$("body"),i=$("#theme-icon"),a=$("#logo-svg"),r=$(".wrapper-main");e.hasClass("dark-theme")?(e.removeClass("dark-theme").addClass("white-theme"),i.html(`
    <g opacity="0.961">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.1308 0C13.377 0 13.623 0 13.8691 0C14.3428 0.148605 14.6505 0.465012 14.792 0.949219C14.8738 1.79109 14.8914 2.63484 14.8447 3.48047C14.7545 4.28261 14.3062 4.72206 13.5 4.79883C12.6937 4.72206 12.2455 4.28261 12.1553 3.48047C12.1086 2.63484 12.1261 1.79109 12.208 0.949219C12.3495 0.465012 12.6571 0.148605 13.1308 0Z" fill="white"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.69336 3.5332C5.10571 3.51184 5.47484 3.6261 5.80079 3.87598C6.39125 4.4488 6.96252 5.03767 7.51465 5.64258C7.93357 6.58394 7.67871 7.26073 6.75 7.67285C6.3613 7.74193 5.99216 7.6892 5.64258 7.51465C4.9834 6.92576 4.35938 6.30176 3.77051 5.64258C3.31784 4.60004 3.62546 3.89692 4.69336 3.5332Z" fill="white"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M21.9375 3.5332C23.0745 3.60647 23.558 4.20413 23.3877 5.32617C23.3132 5.49287 23.2253 5.65107 23.124 5.80078C22.5512 6.39125 21.9623 6.96252 21.3574 7.51465C20.5037 7.91548 19.8446 7.71335 19.3799 6.9082C19.2098 6.36609 19.2977 5.87392 19.6435 5.43164C20.1621 4.91309 20.6807 4.39453 21.1992 3.87598C21.4308 3.71603 21.6769 3.60177 21.9375 3.5332Z" fill="white"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.2363 6.69727C16.2514 6.75343 18.4223 8.12452 19.749 10.8105C20.7739 13.5703 20.3168 16.0488 18.3779 18.2461C16.1709 20.2941 13.6484 20.7951 10.8105 19.749C8.20826 18.4889 6.83717 16.4059 6.69726 13.5C6.83717 10.5941 8.20826 8.51106 10.8105 7.25098C11.5963 6.93404 12.4049 6.74947 13.2363 6.69727Z" fill="white"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 13.8691C0 13.623 0 13.377 0 13.1309C0.148605 12.6571 0.465011 12.3495 0.949218 12.208C1.79109 12.1262 2.63483 12.1086 3.48047 12.1553C4.28261 12.2455 4.72206 12.6937 4.79883 13.5C4.73571 14.1464 4.40173 14.5771 3.79687 14.792C2.84765 14.8272 1.89844 14.8272 0.949218 14.792C0.465011 14.6505 0.148605 14.3429 0 13.8691Z" fill="white"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M27 13.1309C27 13.377 27 13.623 27 13.8691C26.8514 14.3429 26.535 14.6505 26.0508 14.792C25.1016 14.8272 24.1523 14.8272 23.2031 14.792C22.3675 14.4479 22.0775 13.8414 22.333 12.9727C22.5685 12.4743 22.964 12.2018 23.5195 12.1553C24.3652 12.1086 25.2089 12.1262 26.0508 12.208C26.535 12.3495 26.8514 12.6571 27 13.1309Z" fill="white"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.01171 19.3008C6.8282 19.1768 7.38191 19.4932 7.67285 20.25C7.78243 20.7449 7.67696 21.1843 7.35644 21.5684C6.8012 22.1412 6.22988 22.6949 5.64257 23.2295C4.75536 23.6545 4.07861 23.4347 3.6123 22.5703C3.46537 22.0682 3.55326 21.6112 3.87597 21.1992C4.39452 20.6807 4.91308 20.1621 5.43164 19.6436C5.61267 19.5006 5.80605 19.3864 6.01171 19.3008Z" fill="white"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M20.25 19.3008C20.639 19.258 21.0082 19.3195 21.3574 19.4853C21.9623 20.0375 22.5512 20.6087 23.124 21.1992C23.6328 21.9443 23.5537 22.6211 22.8867 23.2295C22.376 23.5456 21.8663 23.5456 21.3574 23.2295C20.6982 22.6406 20.0742 22.0166 19.4854 21.3574C19.0714 20.4098 19.3263 19.7242 20.25 19.3008Z" fill="white"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.8691 27C13.623 27 13.377 27 13.1308 27C12.6571 26.8514 12.3495 26.535 12.208 26.0508C12.1261 25.2089 12.1086 24.3652 12.1553 23.5195C12.2455 22.7174 12.6937 22.278 13.5 22.2012C14.3062 22.278 14.7545 22.7174 14.8447 23.5195C14.8914 24.3652 14.8738 25.2089 14.792 26.0508C14.6505 26.535 14.3428 26.8514 13.8691 27Z" fill="white"/>
    </g>`),a.html(`
    <svg>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9224 17.9998L1.42046 28.066C-0.427846 29.8376 -0.477786 32.7594 1.30892 34.5921C3.09563 36.4248 6.04239 36.4743 7.8907 34.7027L19.7775 23.3092C22.8059 20.4065 22.8059 15.5932 19.7775 12.6904L7.8907 1.29697C6.04239 -0.474628 3.09562 -0.425109 1.30892 1.40758C-0.477787 3.24027 -0.427847 6.16212 1.42046 7.93372L11.9224 17.9998Z" fill="url(#paint0_linear_1592_576)"/>
        <path d="M7.8907 34.7027L10.3051 32.3885C13.6343 28.6478 16.4738 22.8269 11.9224 17.9998L1.42046 7.93372C-0.427847 6.16212 -0.477787 3.24027 1.30892 1.40758C3.09562 -0.425109 6.04239 -0.474628 7.8907 1.29697L19.7775 12.6904C22.8059 15.5932 22.8059 20.4065 19.7775 23.3092L10.3051 32.3885C9.49621 33.2974 8.65841 34.0835 7.8907 34.7027Z" fill="url(#paint1_linear_1592_576)"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M75.0776 18.0002L85.5795 7.93403C87.4278 6.16243 87.4778 3.24058 85.6911 1.40789C83.9044 -0.424798 80.9576 -0.474316 79.1093 1.29729L67.2225 12.6908C64.1941 15.5935 64.1941 20.4068 67.2225 23.3096L79.1093 34.703C80.9576 36.4746 83.9044 36.4251 85.6911 34.5924C87.4778 32.7597 87.4278 29.8379 85.5795 28.0663L75.0776 18.0002Z" fill="url(#paint2_linear_1592_576)"/>
        <path d="M79.1093 1.29729L76.6949 3.61148C73.3657 7.35222 70.5262 13.1731 75.0776 18.0002L85.5795 28.0663C87.4278 29.8379 87.4778 32.7597 85.6911 34.5924C83.9044 36.4251 80.9576 36.4746 79.1093 34.703L67.2225 23.3096C64.1941 20.4068 64.1941 15.5935 67.2225 12.6908L76.6949 3.61148C77.5038 2.70259 78.3416 1.91649 79.1093 1.29729Z" fill="url(#paint3_linear_1592_576)"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M60.0599 1.30805C61.792 3.05211 61.792 5.87979 60.0599 7.62385L33.1773 34.6916C31.4452 36.4356 28.6369 36.4356 26.9047 34.6916C25.1726 32.9475 25.1726 30.1198 26.9047 28.3758L53.7873 1.30805C55.5194 -0.436015 58.3278 -0.436015 60.0599 1.30805Z" fill="#7895FE"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M26.9046 1.3081C28.6367 -0.435964 31.445 -0.435964 33.1772 1.3081L60.0597 28.3758C61.7919 30.1199 61.7919 32.9476 60.0597 34.6916C58.3276 36.4357 55.5193 36.4357 53.7871 34.6916L26.9046 7.6239C25.1724 5.87984 25.1724 3.05216 26.9046 1.3081Z" fill="#7895FE"/>
        <defs>
        <linearGradient id="paint0_linear_1592_576" x1="18.4735" y1="14.3999" x2="0.663515" y2="36.5329" gradientUnits="userSpaceOnUse">
        <stop stop-color="#1C2F75"/>
        <stop offset="1" stop-color="#3257DD"/>
        </linearGradient>
        <linearGradient id="paint1_linear_1592_576" x1="22.0488" y1="23.6998" x2="-1.05449" y2="0.158542" gradientUnits="userSpaceOnUse">
        <stop stop-color="#3257DD"/>
        <stop offset="1" stop-color="#6284FF"/>
        </linearGradient>
        <linearGradient id="paint2_linear_1592_576" x1="68.5265" y1="21.6001" x2="86.3365" y2="-0.532887" gradientUnits="userSpaceOnUse">
        <stop stop-color="#1C2F75"/>
        <stop offset="1" stop-color="#3257DD"/>
        </linearGradient>
        <linearGradient id="paint3_linear_1592_576" x1="64.9512" y1="12.3002" x2="88.0545" y2="35.8415" gradientUnits="userSpaceOnUse">
        <stop stop-color="#3257DD"/>
        <stop offset="1" stop-color="#6284FF"/>
        </linearGradient>
        </defs>
    </svg>`),r.css("background-image",'url("./temple/images/theme-white/bg/bg-main.jpg")')):(e.removeClass("white-theme").addClass("dark-theme"),i.html(`
    <path opacity="0.99" fill-rule="evenodd" clip-rule="evenodd" d="M7.91016 0C8.0508 0 8.19139 0 8.33203 0C8.66046 0.183528 8.77474 0.464778 8.6748 0.84375C6.76118 5.01079 6.90177 9.10649 9.09668 13.1309C11.6882 17.2929 15.4499 19.455 20.3818 19.6172C21.6659 19.6185 22.9227 19.4339 24.1523 19.0635C24.9259 18.794 25.6906 18.5039 26.4463 18.1934C26.6957 18.2236 26.8802 18.3467 27 18.5625C27 18.7207 27 18.8789 27 19.0371C24.8965 23.0989 21.6094 25.6565 17.1387 26.71C16.502 26.8321 15.8691 26.9288 15.2402 27C14.5547 27 13.8691 27 13.1836 27C8.32191 26.5032 4.58654 24.2005 1.97754 20.0918C0.877468 18.1892 0.21829 16.1502 0 13.9746C0 13.1836 0 12.3926 0 11.6016C0.620784 6.34331 3.2575 2.47612 7.91016 0Z" fill="white"/>`),a.html(`
    <svg>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9205 17.9998L1.41851 28.066C-0.429799 29.8376 -0.479739 32.7594 1.30697 34.5921C3.09367 36.4248 6.04044 36.4743 7.88875 34.7027L19.7756 23.3092C22.804 20.4065 22.804 15.5932 19.7756 12.6904L7.88875 1.29697C6.04044 -0.474628 3.09367 -0.425109 1.30697 1.40758C-0.47974 3.24027 -0.4298 6.16212 1.41851 7.93372L11.9205 17.9998Z" fill="url(#paint0_linear_1592_434)"/>
        <path d="M7.88875 34.7027L10.3032 32.3885C13.6323 28.6478 16.4718 22.8269 11.9205 17.9998L1.41851 7.93372C-0.4298 6.16212 -0.47974 3.24027 1.30696 1.40758C3.09367 -0.425109 6.04044 -0.474628 7.88875 1.29697L19.7756 12.6904C22.804 15.5932 22.804 20.4065 19.7756 23.3092L10.3032 32.3885C9.49426 33.2974 8.65646 34.0835 7.88875 34.7027Z" fill="url(#paint1_linear_1592_434)"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M75.0776 18.0002L85.5795 7.93403C87.4278 6.16243 87.4778 3.24058 85.6911 1.40789C83.9044 -0.424797 80.9576 -0.474316 79.1093 1.29729L67.2225 12.6908C64.1941 15.5935 64.1941 20.4068 67.2225 23.3096L79.1093 34.703C80.9576 36.4746 83.9044 36.4251 85.6911 34.5924C87.4778 32.7597 87.4278 29.8379 85.5795 28.0663L75.0776 18.0002Z" fill="url(#paint2_linear_1592_434)"/>
        <path d="M79.1093 1.29729L76.6949 3.61148C73.3657 7.35222 70.5262 13.1731 75.0776 18.0002L85.5795 28.0663C87.4278 29.8379 87.4778 32.7597 85.6911 34.5924C83.9044 36.4251 80.9576 36.4746 79.1093 34.703L67.2225 23.3096C64.1941 20.4068 64.1941 15.5935 67.2225 12.6908L76.6949 3.61148C77.5038 2.70259 78.3416 1.91649 79.1093 1.29729Z" fill="url(#paint3_linear_1592_434)"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M60.0599 1.30805C61.792 3.05211 61.792 5.87979 60.0599 7.62385L33.1773 34.6916C31.4452 36.4356 28.6369 36.4356 26.9047 34.6916C25.1726 32.9475 25.1726 30.1198 26.9047 28.3758L53.7873 1.30805C55.5194 -0.436015 58.3278 -0.436015 60.0599 1.30805Z" fill="#FF9A9A"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M26.9046 1.3081C28.6367 -0.435964 31.445 -0.435964 33.1772 1.3081L60.0597 28.3758C61.7919 30.1199 61.7919 32.9476 60.0597 34.6916C58.3276 36.4357 55.5193 36.4357 53.7871 34.6916L26.9046 7.6239C25.1724 5.87984 25.1724 3.05216 26.9046 1.3081Z" fill="#FF9A9A"/>
        <defs>
        <linearGradient id="paint0_linear_1592_434" x1="18.4715" y1="14.3999" x2="0.661562" y2="36.5329" gradientUnits="userSpaceOnUse">
        <stop stop-color="#311A1A"/>
        <stop offset="1" stop-color="#FF4D4D"/>
        </linearGradient>
        <linearGradient id="paint1_linear_1592_434" x1="22.0469" y1="23.6998" x2="-1.05645" y2="0.158542" gradientUnits="userSpaceOnUse">
        <stop stop-color="#FF5151"/>
        <stop offset="1" stop-color="#FF1D1D"/>
        </linearGradient>
        <linearGradient id="paint2_linear_1592_434" x1="68.5265" y1="21.6001" x2="86.3365" y2="-0.532887" gradientUnits="userSpaceOnUse">
        <stop stop-color="#311A1A"/>
        <stop offset="1" stop-color="#FF4D4D"/>
        </linearGradient>
        <linearGradient id="paint3_linear_1592_434" x1="64.9512" y1="12.3002" x2="88.0545" y2="35.8415" gradientUnits="userSpaceOnUse">
        <stop stop-color="#FF5151"/>
        <stop offset="1" stop-color="#FF1D1D"/>
        </linearGradient>
        </defs>
    </svg>`),r.css("background-image",'url("./temple/images/theme-dark/bg/bg-main-page.jpg")'))});
