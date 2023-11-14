import axios from "axios";

const request = axios.create({
	baseURL: 'https://api.tik.fail/v2/',
	
});
const avatarUrl = "https://v2-thumbs-tiktok.files.fail/avatar/${uniqueId}.jpeg"
// Mock Data
const pag = {
	total: 192,
	count: 9,
	cursor: 0,
	previousCursor: 0,
	nextCursor: 9,
	lastCursor: 189,
	firstCursor: 0,
	currentPage: 1,
	totalPages: 22
	
}
const lookupData = {
	AccountProfileName: 'Ava Justin',
	AccountProfileURL: 'https://tiktok.com/@MS4wLjABAAAAL4SwMC2HkCB1V8GUN9EVHnye1-IMQwbte0msHk8lSSQ',
	AccountUserName: 'avajustin',
	AccountID: '28604037',
	AudioAuthor: '🍪',
	AudioName: '20 min',
	AudioURL: 'https://www.tiktok.com/music/id-7070018976055233281',
	AudioID: '7070018976055233281',
	VideoDescription: 'Took a swim🐬🌊 #foryou #viral #ocean #beach ',
	VideoEmbedURL: 'https://www.tiktok.com/embed/v2/7300270556291583274',
	VideoKeywords: '',
	VideoURL: 'https://tiktok.com/@/video/7300270556291583274',
	VideoUploadDate: 1699726704,
	id: '7300270556291583274',
	hash: '619660ae6de0b6fd590e73f0a1a47378',
	timestamp: ''
}

// Interfaces

// Index Page
async function searchTiktok(username = 'avajustin', cursor = 0){
	const url = `/search?usernames=${username}&cursor=${cursor}&sortBy=date&legacySearch=true`;
	const {data} = await request.get(url);
	const {total,lookup, itemList} = data;
	const pagination = lookup.pagination;
	const tiktok = itemList[0];
	const searchAfter = tiktok._searchAfter[0];
	const {video: tiktokvideo, thumbnailDynamic, updated, id, tikHash } = tiktok._tik;
	const {author, content_desc, aweme_id, create_time, create_time_ISO, desc, cha_list, music, music_end_time_in_ms, statistics, video} = tiktok.metadata
	const playAddress = tiktok.metadata.video.play_addr.url_list[2];
	const videoAddress2 = video.download_addr.url_list[2];
	console.log(tiktok.metadata)
	
}
// Use this for Show Page
export async function getTikTokById(videoId = "7300945885695954206") {
	const url = `/search?videoID=${videoId}`;
	const {data} = await request.get(url);
	console.log(data)
}
export async function searchByHashTag(hashtagName = "foryou", cursor = 0) {
	// https://api.tik.fail/v2/search?hashtagName=foryou&cursor=0&sortBy=date&legacySearch=true
	const url = `/search`;
	const params = {
		hashtagName: hashtagName,
		cursor,
		sortBy: "date",
		legacySearch: true
	}
	
	const {data} = await request.get(url, {
		params
	});
	console.log(data)
}
// When User Clicks on Hashtag Id
async function getByHashId(hashtagID = "foryou", cursor = 0) {
	// https://api.tik.fail/v2/search?hashtagID=12&cursor=0&sortBy=date&legacySearch=true
	const url = `/search`;
	const params = {
		hashtagID,
		cursor,
		sortBy: "date",
		legacySearch: true
	}
	
	const {data} = await request.get(url, {
		params
	});
	console.log(data)
}
// When User Clicks on Music ID, Use own page for now
async function getByMusicId(musicID = "foryou", cursor = 0) {
	// https://api.tik.fail/v2/search?musicID=12&cursor=0&sortBy=date&legacySearch=true
	const url = `/search`;
	const params = {
		musicID,
		cursor,
		sortBy: "date",
		legacySearch: true
	}
	
	const {data} = await request.get(url, {
		params
	});
	console.log(data)
}