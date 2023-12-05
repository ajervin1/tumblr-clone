import SignTok from 'signtok'
import axios from 'axios'
const MSTOKEN = "jwPg57GGtpWeOb4vzUcg2MoeCzZZd_yCQLtigUPi3Y_i5wsxbR078V_-PwlFywmpLzBGPHuykqL6tZqwrMjrRhWzKlajzf6XAXl5M2VT-7eWKkpKw1nZoqEKCcmjZt3r5TzCt4uKoNcIG2T-SzIakw==";
const USER_AGENT =
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36 Edg/105.0.1343.53";
export async function getTrending() {
    console.log("Get Trending Data")
    const queryParams = {
        // aweme_id: VIDEO_ID,
        cursor: 0,
        count: 4,
        msToken: MSTOKEN, // msToken is required for comments
        // ------------------- //
        aid: 1988,
        app_language: 'ja-JP',
        app_name: 'tiktok_web',
        battery_info: 1,
        browser_language: 'en-US',
        browser_name: 'Mozilla',
        browser_online: true,
        browser_platform: 'Win32',
        browser_version: '5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36 Edg/110.0.1587.63',
        channel: 'tiktok_web',
        cookie_enabled: true,
        current_region: 'JP',
        device_id: '7165118680723998214',
        device_platform: 'web_pc',
        from_page: 'video',
        os: 'windows',
        priority_region: 'US',
        referer: '',
        region: 'US',
        screen_height: 1440,
        screen_width: 2560,
        webcast_language: 'en',
    };
    const qsObject = new URLSearchParams(queryParams);
    const qs = qsObject.toString();

    const unsignedUrl = `https://us.tiktok.com/api/recommend/item_list/?${ qs }`;
    const signer = new SignTok();
    const signature = signer.sign(unsignedUrl);
    const navigator = signer.navigator()
    const res = await axios.get(signature.signed_url, {
        headers: {
            "user-agent": navigator.user_agent,
            "referer": "https://www.tiktok.com",
            "Cookie": "ttwid=1%7CZpQgmKcNyBlVzgLNBhm2VgA5hlrfJ2yPgXY0Yg17prY%7C1680702278%7C16a31d60a7584f04165734422a0a1831e65454b15ba14962df63b4ff42014d7c\t"
        }
    })
    console.log(res.data)
    return res.data
}
export async function getUserVideos( secUID, cursor = 0 ) {
    console.log("get user videos")
    const queryParams = {
        // aweme_id: VIDEO_ID,
        cursor: cursor,
        count: 4,
        secUid: secUID,
        msToken: MSTOKEN, // msToken is required for comments
        // ------------------- //
        aid: 1988,
        app_language: 'ja-JP',
        app_name: 'tiktok_web',
        battery_info: 1,
        browser_language: 'en-US',
        browser_name: 'Mozilla',
        browser_online: true,
        browser_platform: 'Win32',
        browser_version: '5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36 Edg/110.0.1587.63',
        channel: 'tiktok_web',
        cookie_enabled: true,
        current_region: 'JP',
        device_id: '7165118680723998214',
        device_platform: 'web_pc',
        from_page: 'video',
        os: 'windows',
        priority_region: 'US',
        referer: '',
        region: 'US',
        screen_height: 1440,
        screen_width: 2560,
        webcast_language: 'en',
    };
    const signer = new SignTok();
    const qsObject = new URLSearchParams(queryParams);
    const qs = qsObject.toString();

    const unsignedUrl = `https://www.tiktok.com/api/post/item_list/?${ qs }`;
    const signature = signer.sign(unsignedUrl);
    const navigator = signer.navigator();
    const res = await axios.get(signature.signed_url, {
        headers: {
            "user-agent": navigator.user_agent,
            "referer": "https://www.tiktok.com",
            "Cookie": "ttwid=1%7CZpQgmKcNyBlVzgLNBhm2VgA5hlrfJ2yPgXY0Yg17prY%7C1680702278%7C16a31d60a7584f04165734422a0a1831e65454b15ba14962df63b4ff42014d7c\t"
        }
    })
    console.log(res.data);
    return res.data;
}
export async function getUserInfo( username ) {
    const TT_REQ_PERM_URL =
        "https://www.tiktok.com/api/user/detail/?aid=1988&app_language=en&app_name=tiktok_web&battery_info=1&browser_language=en-US&browser_name=Mozilla&browser_online=true&browser_platform=Win32&browser_version=5.0%20%28Windows%20NT%2010.0%3B%20Win64%3B%20x64%29%20AppleWebKit%2F537.36%20%28KHTML%2C%20like%20Gecko%29%20Chrome%2F105.0.0.0%20Safari%2F537.36%20Edg%2F105.0.1343.53&channel=tiktok_web&cookie_enabled=true&device_id=7149974697697428997&device_platform=web_pc&focus_state=true&from_page=user&history_len=3&is_fullscreen=false&is_page_visible=true&language=en&os=windows&priority_region=&referer=&region=RO&screen_height=1440&screen_width=2560&secUid=&tz_name=Europe%2FBucharest&uniqueId=emmax_jnr&webcast_language=en&msToken=byMTrhcGuu6WHrJslbbA1f-QJKLaiUiTZhGBvn1i43c1MzTB192fsxadbUpRs4vZp2Zsvjg2DYODyEZr8jFV6etAdBoBG8-MnqhcH7pyE9DL8s42m2I-SYVPYZiVakOchCol2UGPQW1QiBYdOQ==&X-Bogus=DFSzswVYmHtANH7ZSKy6IGXyYJU3&_signature=_02B4Z6wo00001kU0aZwAAIDDZpVHMLhlGFZFNG0AAPKD0f";
    const permUrl = "https://www.tiktok.com/api/user/detail/?WebIdLastTime=1645909750&aid=1988&app_language=en&app_name=tiktok_web&browser_language=en-US&browser_name=Mozilla&browser_online=true&browser_platform=Win32&browser_version=5.0%20%28Windows%20NT%2010.0%3B%20Win64%3B%20x64%29%20AppleWebKit%2F537.36%20%28KHTML%2C%20like%20Gecko%29%20Chrome%2F117.0.0.0%20Safari%2F537.36&channel=tiktok_web&cookie_enabled=true&device_id=7069128521332213254&device_platform=web_pc&focus_state=true&from_page=user&history_len=5&is_fullscreen=false&is_page_visible=true&language=en&os=windows&priority_region=US&referer=&region=US&screen_height=960&screen_width=1707&secUid=MS4wLjABAAAAL4SwMC2HkCB1V8GUN9EVHnye1-IMQwbte0msHk8lSSQ&tz_name=America%2FPhoenix&uniqueId=avajustin&webcast_language=en&msToken=l76kw8t25QhCXFqeRlJkIvLaKbH1lZKtirxpFEwEJejyMCfKYyYlT_sEm6k8PldMWEKCJdyTgzuLh4K7K4gw_MleZ27rKjZ35H_EP7_Ed8lPDhj4gJSt33h_XaXQTTmDhC7632E3lGTTGT4dY6Po-oA=&X-Bogus=DFSzswVLsJsANcRNtO0Ncz9WcBJc&_signature=_02B4Z6wo00001lGF-sAAAIDCUYX6wnsWaqZRhf5AAPGF4b"
    const USER_UNIQUE_ID = username
    const queryParams = {
        // aweme_id: VIDEO_ID,


        msToken: MSTOKEN,
        aid: 1988,
        app_language: 'ja-JP',
        app_name: 'tiktok_web',
        battery_info: 1,
        browser_language: 'en-US',
        browser_name: 'Mozilla',
        browser_online: true,
        browser_platform: 'Win32',
        browser_version: '5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36 Edg/110.0.1587.63',
        channel: 'tiktok_web',
        cookie_enabled: true,
        current_region: 'JP',
        device_id: '7165118680723998214',
        device_platform: 'web_pc',
        from_page: 'video',
        os: 'windows',
        priority_region: 'US',
        referer: '',
        region: 'US',
        screen_height: 1440,
        screen_width: 2560,
        secUid: "",
        uniqueId: username,
        webcast_language: 'en',
    };
    const signer = new SignTok(USER_AGENT);
    const qsObject = new URLSearchParams(queryParams);
    const qs = qsObject.toString();
    const unsignedUrl = `https://www.tiktok.com/api/user/detail?${ qs }`;
    const signature = signer.sign(unsignedUrl);
    const navigator = signer.navigator()
    const { user_agent: userAgent } = navigator;
    const { "x-tt-params": xTtParams } = signature;

    const res = await axios.get(signature.signed_url, {
        headers: {
            "user-agent": userAgent,
            "referer": "https://www.tiktok.com",
            "x-tt-params": xTtParams,
            "X-Bogus": signature["X-Bogus"],
            "verifyFp": signature.verify_fp,
            "signature": signature.signature

        }
    })
    console.log(res.data)
    return res.data
}
async function getVideosByMusicId2() {
    const musicID = "7034143722082192134";
    const queryParams = {
        // aweme_id: VIDEO_ID,

        cursor: 0,
        count: 3,
        msToken: MSTOKEN, // msToken is required for comments
        // ------------------- //
        musicID: musicID,
        aid: 1988,
        app_language: 'ja-JP',
        app_name: 'tiktok_web',
        battery_info: 1,
        browser_language: 'en-US',
        browser_name: 'Mozilla',
        browser_online: true,
        browser_platform: 'Win32',
        browser_version: '5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36 Edg/110.0.1587.63',
        channel: 'tiktok_web',
        cookie_enabled: true,
        current_region: 'JP',
        device_id: '7165118680723998214',
        device_platform: 'web_pc',
        from_page: 'video',
        os: 'windows',
        priority_region: 'US',
        referer: '',
        region: 'US',
        screen_height: 1440,
        screen_width: 2560,
        webcast_language: 'en',
    };

    const signer = new Signer(null, USER_AGENT);
    await signer.init();

    const qsObject = new URLSearchParams(queryParams);
    const qs = qsObject.toString();

    const unsignedUrl = `https://m.tiktok.com/api/music/item_list/?${ qs }`;

    const signature = await signer.sign(unsignedUrl);
    const navigator = await signer.navigator();
    await signer.close();

    const { signed_url } = signature;
    const { user_agent: userAgent } = navigator;
    const res = await axios.get(signed_url, {
        headers: {
            "user-agent": userAgent,
            "referer": "https://www.tiktok.com"
        }
    })
    console.log(res)
    return res.data
}
async function getVideosByHashTagId( hashId, cursor ) {
    const queryParams = {
        // aweme_id: VIDEO_ID,

        cursor: cursor,
        count: 3,
        msToken: MSTOKEN, // msToken is required for comments
        // ------------------- //
        challengeID: hashId,
        aid: 1988,
        app_language: 'ja-JP',
        app_name: 'tiktok_web',
        battery_info: 1,
        browser_language: 'en-US',
        browser_name: 'Mozilla',
        browser_online: true,
        browser_platform: 'Win32',
        browser_version: '5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36 Edg/110.0.1587.63',
        channel: 'tiktok_web',
        cookie_enabled: true,
        current_region: 'JP',
        device_id: '7165118680723998214',
        device_platform: 'web_pc',
        from_page: 'video',
        os: 'windows',
        priority_region: 'US',
        referer: '',
        region: 'US',
        screen_height: 1440,
        screen_width: 2560,
        webcast_language: 'en',
    };

    const signer = new SignTok(USER_AGENT);
    const qsObject = new URLSearchParams(queryParams);
    const qs = qsObject.toString();
    const unsignedUrl = `https://www.tiktok.com/api/challenge/item_list/?${ qs }`;
    const signature = signer.sign(unsignedUrl);
    const navigator = signer.navigator()
    const { user_agent: userAgent } = navigator;
    const { "x-tt-params": xTtParams } = signature;

    const res = await axios.get(signature.signed_url, {
        headers: {
            "user-agent": userAgent,
            "referer": "https://www.tiktok.com",
            "x-tt-params": xTtParams,
            "X-Bogus": signature["X-Bogus"],
            "verifyFp": signature.verify_fp,
            "signature": signature.signature

        }
    })
    return res.data
}
async function getVideosByMusicId(musicID = "7034143722082192134") {
    const queryParams = {
        // aweme_id: VIDEO_ID,

        cursor: 0,
        count: 3,
        msToken: MSTOKEN, // msToken is required for comments
        // ------------------- //
        musicID: musicID,
        aid: 1988,
        app_language: 'ja-JP',
        app_name: 'tiktok_web',
        battery_info: 1,
        browser_language: 'en-US',
        browser_name: 'Mozilla',
        browser_online: true,
        browser_platform: 'Win32',
        browser_version: '5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36 Edg/110.0.1587.63',
        channel: 'tiktok_web',
        cookie_enabled: true,
        current_region: 'JP',
        device_id: '7165118680723998214',
        device_platform: 'web_pc',
        from_page: 'video',
        os: 'windows',
        priority_region: 'US',
        referer: '',
        region: 'US',
        screen_height: 1440,
        screen_width: 2560,
        webcast_language: 'en',
    };
    const signer = new SignTok(USER_AGENT);
    const qsObject = new URLSearchParams(queryParams);
    const qs = qsObject.toString();

    const unsignedUrl = `https://m.tiktok.com/api/music/item_list/?${ qs }`;
    const signature = signer.sign(unsignedUrl);
    const navigator = signer.navigator()
    const { user_agent: userAgent } = navigator;
    const { "x-tt-params": xTtParams } = signature;

    const res = await axios.get(signature.signed_url, {
        headers: {
            "user-agent": userAgent,
            "referer": "https://www.tiktok.com",
            "x-tt-params": xTtParams,
            "X-Bogus": signature["X-Bogus"],
            "verifyFp": signature.verify_fp,
            "signature": signature.signature

        }
    })
    console.log(res.data)
    return res.data
}
async function searchTikTok2( term ) {

    const queryParams = {
        // aweme_id: VIDEO_ID,

        cursor: 0,
        msToken: MSTOKEN, // msToken is required for comments
        // ------------------- //

        aid: 1988,
        app_language: 'ja-JP',
        app_name: 'tiktok_web',
        battery_info: 1,
        browser_language: 'en-US',
        browser_name: 'Mozilla',
        browser_online: true,
        browser_platform: 'Win32',
        browser_version: '5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36 Edg/110.0.1587.63',
        channel: 'tiktok_web',
        cookie_enabled: true,
        current_region: 'JP',
        device_id: '7165118680723998214',
        device_platform: 'web_pc',
        from_page: 'video',
        os: 'windows',
        priority_region: 'US',
        referer: '',
        region: 'US',
        screen_height: 1440,
        screen_width: 2560,
        keyword: term,
        webcast_language: 'en',
    };

    // const signer = new Signer(null, USER_AGENT);
    // await signer.init();
    const signer = new SignTok();
    const qsObject = new URLSearchParams(queryParams);
    const qs = qsObject.toString();

    const unsignedUrl = `https://us.tiktok.com/api/search/user/full/?${ qs }`;
    const signature = signer.sign(unsignedUrl);
    const navigator = signer.navigator();
    const res = await axios.get(signature.signed_url, {
        headers: {
            "user-agent": navigator.user_agent,
            "referer": "https://www.tiktok.com",
            "Cookie": "ttwid=1%7CZpQgmKcNyBlVzgLNBhm2VgA5hlrfJ2yPgXY0Yg17prY%7C1680702278%7C16a31d60a7584f04165734422a0a1831e65454b15ba14962df63b4ff42014d7c\t"
        }
    })
    console.log(res.data);
    return res.data;

}

async function getVideoInfo( videoId ) {
    const queryParams = {

        itemId: videoId,
        msToken: MSTOKEN,
        aid: 1988,
        app_language: 'ja-JP',
        app_name: 'tiktok_web',
        battery_info: 1,
        browser_language: 'en-US',
        browser_name: 'Mozilla',
        browser_online: true,
        browser_platform: 'Win32',
        browser_version: '5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36 Edg/110.0.1587.63',
        channel: 'tiktok_web',
        cookie_enabled: true,
        current_region: 'JP',
        device_id: '7165118680723998214',
        device_platform: 'web_pc',
        from_page: 'video',
        os: 'windows',
        priority_region: 'US',
        referer: '',
        region: 'US',
        screen_height: 1440,
        screen_width: 2560,

        webcast_language: 'en',
    };
    const signer = new SignTok(USER_AGENT);
    const qsObject = new URLSearchParams(queryParams);
    const qs = qsObject.toString();


    const unsignedUrl = `https://www.tiktok.com/api/item/detail/?itemId=${ videoId }&${ qs }`;

    const signature = signer.sign(unsignedUrl);
    const navigator = signer.navigator()
    const { user_agent: userAgent } = navigator;
    const { "x-tt-params": xTtParams } = signature;
    const res = await axios.get(signature.signed_url, {
        headers: {
            "user-agent": userAgent,
            "referer": "https://www.tiktok.com",
            "x-tt-params": xTtParams,
            "X-Bogus": signature["X-Bogus"],
            "verifyFp": signature.verify_fp,
            "signature": signature.signature

        }
    })
    console.log(res.data)
    return res.data
}
const userId = "MS4wLjABAAAAL4SwMC2HkCB1V8GUN9EVHnye1-IMQwbte0msHk8lSSQ";
getUserVideos(userId)