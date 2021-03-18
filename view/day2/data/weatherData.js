const weatherData = [{
    key: 0,
    city: "\u798f\u5dde",
    night: !0,
    bg: require("../../img/w2.png"),
    abs: "\u5927\u90e8\u6674\u6717",
    degree: 15,
    today: {
        week: "\u661f\u671f\u516d",
        day: "\u4eca\u5929",
        high: 16,
        low: 14
    },
    hours: [{
        key: 101,
        time: "\u73b0\u5728",
        icon: "ios-moon",
        degree: "15\xb0",
        color: "rgba(255,255,255,1)"
    },
    {
        key: 102,
        time: "3\u65f6",
        icon: "ios-cloudy-night",
        degree: "15\xb0",
        color: "rgba(255,255,255,0.8)"
    },
    {
        key: 103,
        time: "4\u65f6",
        icon: "ios-cloudy-night",
        degree: "16\xb0",
        color: "rgba(255,255,255,0.8)"
    },
    {
        key: 104,
        time: "5\u65f6",
        icon: "ios-cloudy-night",
        degree: "16\xb0",
        color: "rgba(255,255,255,0.8)"
    },
    {
        key: 105,
        time: "6\u65f6",
        icon: "ios-cloudy-night",
        degree: "16\xb0",
        color: "rgba(255,255,255,0.8)"
    },
    {
        key: 106,
        time: "06:21",
        icon: "ios-sunny-outline",
        degree: "\u65e5\u51fa",
        color: "#fedf32"
    },
    {
        key: 107,
        time: "7\u65f6",
        icon: "ios-partly-sunny",
        degree: "16\xb0",
        color: "rgba(255,255,255,0.9)"
    },
    {
        key: 108,
        time: "8\u65f6",
        icon: "ios-partly-sunny",
        degree: "18\xb0",
        color: "rgba(255,255,255,0.9)"
    },
    {
        key: 109,
        time: "9\u65f6",
        icon: "ios-sunny",
        degree: "19\xb0",
        color: "#fedf32"
    },
    {
        key: 110,
        time: "10\u65f6",
        icon: "ios-sunny",
        degree: "122\xb0",
        color: "#fedf32"
    },
    {
        key: 111,
        time: "11\u65f6",
        icon: "ios-sunny",
        degree: "23\xb0",
        color: "#fedf32"
    },
    {
        key: 112,
        time: "13\u65f6",
        icon: "ios-sunny",
        degree: "22\xb0",
        color: "#fedf32"
    },
    {
        key: 113,
        time: "13\u65f6",
        icon: "ios-sunny",
        degree: "22\xb0",
        color: "#fedf32"
    },
    {
        key: 114,
        time: "14\u65f6",
        icon: "ios-partly-sunny",
        degree: "16\xb0",
        color: "rgba(255,255,255,0.9)"
    },
    {
        key: 115,
        time: "15\u65f6",
        icon: "ios-partly-sunny",
        degree: "22\xb0",
        color: "rgba(255,255,255,0.9)"
    },
    {
        key: 116,
        time: "16\u65f6",
        icon: "ios-partly-sunny",
        degree: "21\xb0",
        color: "rgba(255,255,255,0.9)"
    },
    {
        key: 117,
        time: "17\u65f6",
        icon: "ios-partly-sunny",
        degree: "19\xb0",
        color: "rgba(255,255,255,0.9)"
    },
    {
        key: 118,
        time: "18\u65f6",
        icon: "ios-partly-sunny",
        degree: "18\xb0",
        color: "rgba(255,255,255,0.9)"
    },
    {
        key: 119,
        time: "18:06",
        icon: "ios-partly-sunny-outline",
        degree: "\u65e5\u843d",
        color: "rgba(255,255,255,0.9)"
    },
    {
        key: 120,
        time: "19\u65f6",
        icon: "ios-cloudy-night",
        degree: "18\xb0",
        color: "rgba(255,255,255,0.8)"
    },
    {
        key: 121,
        time: "20\u65f6",
        icon: "ios-cloudy-night",
        degree: "18\xb0",
        color: "rgba(255,255,255,0.8)"
    },
    {
        key: 122,
        time: "21\u65f6",
        icon: "ios-cloudy-night",
        degree: "18\xb0",
        color: "rgba(255,255,255,0.8)"
    },
    {
        key: 123,
        time: "22\u65f6",
        icon: "ios-cloudy-night",
        degree: "17\xb0",
        color: "rgba(255,255,255,0.8)"
    },
    {
        key: 124,
        time: "23\u65f6",
        icon: "ios-cloudy",
        degree: "17\xb0",
        color: "rgba(255,255,255,0.8)"
    },
    {
        key: 125,
        time: "0\u65f6",
        icon: "ios-cloudy",
        degree: "17\xb0",
        color: "rgba(255,255,255,0.8)"
    },
    {
        key: 126,
        time: "1\u65f6",
        icon: "ios-cloudy",
        degree: "17\xb0",
        color: "rgba(255,255,255,0.8)"
    },
    {
        key: 127,
        time: "2\u65f6",
        icon: "ios-cloudy",
        degree: "17\xb0",
        color: "rgba(255,255,255,0.8)"
    }],
    days: [{
        key: 21,
        day: "\u661f\u671f\u4e00",
        icon: "ios-partly-sunny",
        high: 21,
        low: 16
    },
    {
        key: 22,
        day: "\u661f\u671f\u4e8c",
        icon: "ios-rainy",
        high: 22,
        low: 14
    },
    {
        key: 23,
        day: "\u661f\u671f\u4e09",
        icon: "ios-rainy",
        high: 21,
        low: 11
    },
    {
        key: 24,
        day: "\u661f\u671f\u56db",
        icon: "ios-rainy",
        high: 12,
        low: 8
    },
    {
        key: 25,
        day: "\u661f\u671f\u4e94",
        icon: "ios-rainy",
        high: 9,
        low: 7
    },
    {
        key: 26,
        day: "\u661f\u671f\u516d",
        icon: "ios-partly-sunny",
        high: 13,
        low: 9
    },
    {
        key: 27,
        day: "\u661f\u671f\u65e5",
        icon: "ios-rainy",
        high: 17,
        low: 13
    },
    {
        key: 28,
        day: "\u661f\u671f\u4e00",
        icon: "ios-partly-sunny",
        high: 18,
        low: 14
    },
    {
        key: 29,
        day: "\u661f\u671f\u4e8c",
        icon: "ios-partly-sunny",
        high: 22,
        low: 17
    }],
    info: "\u4eca\u5929\uff1a\u4eca\u5929\u5927\u90e8\u591a\u4e91\u3002\u73b0\u5728\u6c14\u6e29 15\xb0\uff1b\u6700\u9ad8\u6c14\u6e2923\xb0\u3002",
    rise: "06:21",
    down: "18:06",
    prop: "10%",
    humi: "94%",
    dir: "\u4e1c\u5317\u504f\u5317",
    speed: "3\u5343\u7c73\uff0f\u5c0f\u65f6",
    feel: "15\xb0",
    rain: "0.0 \u5398\u7c73",
    pres: "1,016 \u767e\u5e15",
    sight: "5.0 \u516c\u91cc",
    uv: "0"
},
/*************************************************** */
{
    key: 1,
    city: "\u5361\u5c14\u52a0\u91cc",
    night: !1,
    bg: require("../../img/w3.png"),
    abs: "\u5927\u90e8\u6674\u6717",
    degree: 15,
    today: {
        week: "\u661f\u671f\u516d",
        day: "\u4eca\u5929",
        high: 16,
        low: 14
    },
    hours: [{
        key: 101,
        time: "\u73b0\u5728",
        icon: "ios-moon",
        degree: "15\xb0",
        color: "rgba(255,255,255,1)"
    },
    {
        key: 102,
        time: "3\u65f6",
        icon: "ios-cloudy-night",
        degree: "15\xb0",
        color: "rgba(255,255,255,0.8)"
    },
    {
        key: 103,
        time: "4\u65f6",
        icon: "ios-cloudy-night",
        degree: "16\xb0",
        color: "rgba(255,255,255,0.8)"
    },
    {
        key: 104,
        time: "5\u65f6",
        icon: "ios-cloudy-night",
        degree: "16\xb0",
        color: "rgba(255,255,255,0.8)"
    },
    {
        key: 105,
        time: "6\u65f6",
        icon: "ios-cloudy-night",
        degree: "16\xb0",
        color: "rgba(255,255,255,0.8)"
    },
    {
        key: 106,
        time: "06:21",
        icon: "ios-sunny-outline",
        degree: "\u65e5\u51fa",
        color: "#fedf32"
    },
    {
        key: 107,
        time: "7\u65f6",
        icon: "ios-partly-sunny",
        degree: "16\xb0",
        color: "rgba(255,255,255,0.9)"
    },
    {
        key: 108,
        time: "8\u65f6",
        icon: "ios-partly-sunny",
        degree: "18\xb0",
        color: "rgba(255,255,255,0.9)"
    },
    {
        key: 109,
        time: "9\u65f6",
        icon: "ios-sunny",
        degree: "19\xb0",
        color: "#fedf32"
    },
    {
        key: 110,
        time: "10\u65f6",
        icon: "ios-sunny",
        degree: "122\xb0",
        color: "#fedf32"
    },
    {
        key: 111,
        time: "11\u65f6",
        icon: "ios-sunny",
        degree: "23\xb0",
        color: "#fedf32"
    },
    {
        key: 112,
        time: "13\u65f6",
        icon: "ios-sunny",
        degree: "22\xb0",
        color: "#fedf32"
    },
    {
        key: 113,
        time: "13\u65f6",
        icon: "ios-sunny",
        degree: "22\xb0",
        color: "#fedf32"
    },
    {
        key: 114,
        time: "14\u65f6",
        icon: "ios-partly-sunny",
        degree: "16\xb0",
        color: "rgba(255,255,255,0.9)"
    },
    {
        key: 115,
        time: "15\u65f6",
        icon: "ios-partly-sunny",
        degree: "22\xb0",
        color: "rgba(255,255,255,0.9)"
    },
    {
        key: 116,
        time: "16\u65f6",
        icon: "ios-partly-sunny",
        degree: "21\xb0",
        color: "rgba(255,255,255,0.9)"
    },
    {
        key: 117,
        time: "17\u65f6",
        icon: "ios-partly-sunny",
        degree: "19\xb0",
        color: "rgba(255,255,255,0.9)"
    },
    {
        key: 118,
        time: "18\u65f6",
        icon: "ios-partly-sunny",
        degree: "18\xb0",
        color: "rgba(255,255,255,0.9)"
    },
    {
        key: 119,
        time: "18:06",
        icon: "ios-partly-sunny-outline",
        degree: "\u65e5\u843d",
        color: "rgba(255,255,255,0.9)"
    },
    {
        key: 120,
        time: "19\u65f6",
        icon: "ios-cloudy-night",
        degree: "18\xb0",
        color: "rgba(255,255,255,0.8)"
    },
    {
        key: 121,
        time: "20\u65f6",
        icon: "ios-cloudy-night",
        degree: "18\xb0",
        color: "rgba(255,255,255,0.8)"
    },
    {
        key: 122,
        time: "21\u65f6",
        icon: "ios-cloudy-night",
        degree: "18\xb0",
        color: "rgba(255,255,255,0.8)"
    },
    {
        key: 123,
        time: "22\u65f6",
        icon: "ios-cloudy-night",
        degree: "17\xb0",
        color: "rgba(255,255,255,0.8)"
    },
    {
        key: 124,
        time: "23\u65f6",
        icon: "ios-cloudy",
        degree: "17\xb0",
        color: "rgba(255,255,255,0.8)"
    },
    {
        key: 125,
        time: "0\u65f6",
        icon: "ios-cloudy",
        degree: "17\xb0",
        color: "rgba(255,255,255,0.8)"
    },
    {
        key: 126,
        time: "1\u65f6",
        icon: "ios-cloudy",
        degree: "17\xb0",
        color: "rgba(255,255,255,0.8)"
    },
    {
        key: 127,
        time: "2\u65f6",
        icon: "ios-cloudy",
        degree: "17\xb0",
        color: "rgba(255,255,255,0.8)"
    }],
    days: [{
        key: 21,
        day: "\u661f\u671f\u4e00",
        icon: "ios-partly-sunny",
        high: 21,
        low: 16
    },
    {
        key: 22,
        day: "\u661f\u671f\u4e8c",
        icon: "ios-rainy",
        high: 22,
        low: 14
    },
    {
        key: 23,
        day: "\u661f\u671f\u4e09",
        icon: "ios-rainy",
        high: 21,
        low: 11
    },
    {
        key: 24,
        day: "\u661f\u671f\u56db",
        icon: "ios-rainy",
        high: 12,
        low: 8
    },
    {
        key: 25,
        day: "\u661f\u671f\u4e94",
        icon: "ios-rainy",
        high: 9,
        low: 7
    },
    {
        key: 26,
        day: "\u661f\u671f\u516d",
        icon: "ios-partly-sunny",
        high: 13,
        low: 9
    },
    {
        key: 27,
        day: "\u661f\u671f\u65e5",
        icon: "ios-rainy",
        high: 17,
        low: 13
    },
    {
        key: 28,
        day: "\u661f\u671f\u4e00",
        icon: "ios-partly-sunny",
        high: 18,
        low: 14
    },
    {
        key: 29,
        day: "\u661f\u671f\u4e8c",
        icon: "ios-partly-sunny",
        high: 22,
        low: 17
    }],
    info: "\u4eca\u5929\uff1a\u4eca\u5929\u5927\u90e8\u591a\u4e91\u3002\u73b0\u5728\u6c14\u6e29 15\xb0\uff1b\u6700\u9ad8\u6c14\u6e2923\xb0\u3002",
    rise: "06:21",
    down: "18:06",
    prop: "10%",
    humi: "94%",
    dir: "\u4e1c\u5317\u504f\u5317",
    speed: "3\u5343\u7c73\uff0f\u5c0f\u65f6",
    feel: "15\xb0",
    rain: "0.0 \u5398\u7c73",
    pres: "1,016 \u767e\u5e15",
    sight: "5.0 \u516c\u91cc",
    uv: "0"
}];

export default weatherData