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
interface TikTok  {
	_score: null,
	_tik_archive_count: 1,
	_searchAfter: [ 1699883966 ],
	_tik:
		{ id: '7300945885695954206',
			tikHash: '5cff841611f73dc1961223395df7135d',
			updated: 1699891483,
			webpage: 'https://tik.fail/watch/5cff841611f73dc1961223395df7135d',
			webpageDirect: 'https://tik.fail/stream?q=5cff841611f73dc1961223395df7135d',
			video: 'https://v2-videos-tiktok.files.fail/5cff841611f73dc1961223395df7135d.mp4',
			thumbnail: 'https://v2-thumbs-tiktok.files.fail/jpg/5cff841611f73dc1961223395df7135d.jpg',
			thumbnailDynamic: 'https://v2-thumbs-tiktok.files.fail/dynamic/5cff841611f73dc1961223395df7135d.webp',
			thumbnailCDN: 'https://images.weserv.nl/?url=ssl:v2-thumbs-tiktok.files.fail/dynamic/5cff841611f73dc1961223395df7135d.webp&default=ssl:v2-thumbs-tiktok.files.fail/jpg/5cff841611f73dc1961223395df7135d.jpg&maxage=31d&q=80&n=-1w=540&h=960',
			meta: 'https://tik.fail/api/query/v2/hash/5cff841611f73dc1961223395df7135d',
			metaV2: 'https://api.tik.fail/v2/search?videoID=7300945885695954206',
			source: 'https://api.tik.fail/download/source/7300945885695954206?hash=5cff841611f73dc1961223395df7135d&x=3',
			sourceLocal: 'https://api.tik.fail/download/source/7300945885695954206?hash=5cff841611f73dc1961223395df7135d&x=2' },
	metadata:
		{ anchors: null,
			author:
				{ avatar_uri: 'tos-maliva-avt-0068/ee365b9d0d9e50cb3b8622b9492437e4',
					custom_verify: '',
					enterprise_verify_reason: '',
					language: 'en',
					nickname: 'Ava Justin',
					region: 'US',
					sec_uid: 'MS4wLjABAAAAL4SwMC2HkCB1V8GUN9EVHnye1-IMQwbte0msHk8lSSQ',
					signature: 'Probably on a ✈️\nFollow my insta: @avajustin\nAdd my snap: @actress.avaj',
					uid: '28604037',
					unique_id: 'avajustin',
					verification_type: 0,
					verify_info: '' },
			aweme_id: '7300945885695954206',
			aweme_type: 0,
			cha_list:
				[ { cid: '14530293',
					cha_name: 'halara',
					desc: '',
					schema: 'aweme://aweme/challenge/detail?cid=14530293',
					author:
						{ followers_detail: null,
							platform_sync_info: null,
							geofencing: null,
							cover_url: null,
							item_list: null,
							type_label: null,
							ad_cover_url: null,
							relative_users: null,
							cha_list: null,
							need_points: null,
							homepage_bottom_toast: null,
							can_set_geofencing: null,
							white_cover_url: null,
							user_tags: null,
							bold_fields: null,
							search_highlight: null,
							mutual_relation_avatars: null,
							events: null,
							advance_feature_item_order: null,
							advanced_feature_info: null,
							user_profile_guide: null,
							shield_edit_field_info: null,
							can_message_follow_status_list: null,
							account_labels: null },
					user_count: 0,
					share_info:
						{ share_url: 'https://www.tiktok.com/tag/halara?_r=1&name=halara&u_code=0&_d=0&share_challenge_id=14530293&sharer_language=en&source=h5_m',
							share_desc: 'Check out #halara on TikTok!',
							share_title: 'It is a becoming a big trend on TikTok now! Click here: halara',
							bool_persist: 0,
							share_title_myself: '',
							share_title_other: '',
							share_signature_url: '',
							share_signature_desc: '',
							share_quote: '',
							share_desc_info: 'Check out #halara on TikTok!',
							now_invitation_card_image_urls: null },
					connect_music: [],
					type: 1,
					sub_type: 0,
					is_pgcshow: false,
					collect_stat: 0,
					is_challenge: 0,
					view_count: 0,
					is_commerce: false,
					hashtag_profile: '',
					cha_attrs: null,
					banner_list: null,
					show_items: null,
					search_highlight: null } ],
			commerce_info: { adv_promotable: false, branded_content_type: 0 },
			content_desc: '["Love @Halara_official \\ud83d\\udc97 ","use my code ava58 for 15% off your order #halara #halarapants "]',
			content_desc_extra:
				[ { start: 5,
					end: 21,
					user_id: '6836544211471844358',
					type: 0,
					sec_uid: 'MS4wLjABAAAAh0YBzT8RN8mm0rIqTQsKNKlLKtxGkvzNo-Do8xdvZEBDb7G5X7UIAXg46cI9I-l0',
					line_idx: 0 },
					{ start: 41,
						end: 48,
						type: 1,
						hashtag_name: 'halara',
						hashtag_id: '14530293',
						is_commerce: false,
						line_idx: 1 },
					{ start: 49,
						end: 61,
						type: 1,
						hashtag_name: 'halarapants',
						hashtag_id: '1704137518143494',
						is_commerce: false,
						line_idx: 1 } ],
			content_type: 'video',
			content_original_type: 2,
			create_time: 1699883966,
			create_time_ISO: '2023-11-13T13:59:26.000Z',
			desc: 'Love @Halara_official 💗  use my code ava58 for 15% off your order #halara #halarapants ',
			desc_language: 'en',
			follow_up_item_id_groups: '',
			interact_permission:
				{ duet: 0,
					stitch: 0,
					duet_privacy_setting: 0,
					stitch_privacy_setting: 0,
					upvote: 0,
					allow_adding_to_story: 1,
					allow_create_sticker: { status: 2 } },
			interaction_stickers:
				[ { type: 18,
					index: 0,
					track_info: '[{"x":0.5,"end_time":30206.062,"p":null,"y":0.1349,"h":0.1034,"isRatioCoord":true,"start_time":0,"r":0,"w":0.7532,"s":0.8086}]',
					attr: '',
					text_info: 'Use my code “ava58” to get 15% off 💗',
					text_sticker_info:
						{ text_size: 28,
							text_color: '#FFFFFFFF',
							bg_color: '#FFF8D7E9',
							text_language: 'en',
							alignment: 0,
							source_width: 0.9034267912772586,
							source_height: 0.11214953271028036 } } ],
			is_hash_tag: 1,
			is_top: 0,
			main_arch_common: '',
			mask_infos: [],
			misc_info: '{}',
			music:
				{ album: '',
					artists: null,
					author: 'Ava Justin',
					cover_uri: 'tos-maliva-avt-0068/ee365b9d0d9e50cb3b8622b9492437e4',
					duration: 30,
					external_song_info: [],
					id_str: '7300945989001628446',
					mid: '7300945989001628446',
					offline_desc: '',
					owner_handle: 'avajustin',
					owner_id: '28604037',
					owner_nickname: 'Ava Justin',
					play_url:
						{ uri: 'https://sf16-ies-music-va.tiktokcdn.com/obj/ies-music-ttp-dup-us/tx27300946026821651230.mp3',
							url_list: [ 'https://sf16-ies-music-va.tiktokcdn.com/obj/ies-music-ttp-dup-us/tx27300946026821651230.mp3' ],
							width: 720,
							height: 720,
							url_prefix: null },
					sec_uid: 'MS4wLjABAAAAL4SwMC2HkCB1V8GUN9EVHnye1-IMQwbte0msHk8lSSQ',
					title: 'original sound - avajustin' },
			music_begin_time_in_ms: 0,
			music_end_time_in_ms: 30106,
			music_selected_from: 'original',
			music_volume: '0.000000',
			origin_comment_ids: null,
			original_client_text:
				{ markup_text: 'Love <m id="1">@Halara_official</m> 💗 <br>use my code ava58 for 15% off your order <h id="716">#halara</h> <h id="289">#halarapants</h> ',
					text_extra:
						[ { user_id: '6836544211471844358',
							type: 0,
							is_commerce: false,
							sec_uid: 'MS4wLjABAAAAh0YBzT8RN8mm0rIqTQsKNKlLKtxGkvzNo-Do8xdvZEBDb7G5X7UIAXg46cI9I-l0',
							sub_type: 0,
							tag_id: '1' },
							{ type: 1,
								hashtag_name: 'halara',
								is_commerce: false,
								sub_type: 0,
								tag_id: '716' },
							{ type: 1,
								hashtag_name: 'halarapants',
								is_commerce: false,
								sub_type: 0,
								tag_id: '289' } ] },
			risk_infos:
				{ vote: false,
					warn: false,
					risk_sink: false,
					type: 0,
					content: '' },
			region: 'US',
			share_url: 'https://www.tiktok.com/@avajustin/video/7300945885695954206?_r=1&u_code=0&preview_pb=0&sharer_language=en&_d=0&share_item_id=7300945885695954206&source=h5_m',
			shoot_tab_name: 'video_60',
			status:
				{ aweme_id: '7300945885695954206',
					is_delete: false,
					allow_share: true,
					allow_comment: true,
					is_private: false,
					with_goods: false,
					private_status: 0,
					in_reviewing: false,
					reviewed: 1,
					self_see: false,
					is_prohibited: false,
					download_status: 0 },
			statistics:
				{ aweme_id: '7300945885695954206',
					comment_count: 1,
					digg_count: 122,
					download_count: 0,
					play_count: 810,
					share_count: 0,
					forward_count: 0,
					lose_count: 0,
					lose_comment_count: 0,
					whatsapp_share_count: 0,
					collect_count: 15 },
			text_extra:
				[ { start: 5,
					end: 21,
					user_id: '6836544211471844358',
					type: 0,
					sec_uid: 'MS4wLjABAAAAh0YBzT8RN8mm0rIqTQsKNKlLKtxGkvzNo-Do8xdvZEBDb7G5X7UIAXg46cI9I-l0' },
					{ start: 67,
						end: 74,
						user_id: '',
						type: 1,
						hashtag_name: 'halara',
						hashtag_id: '14530293',
						is_commerce: false,
						sec_uid: '' },
					{ start: 75,
						end: 87,
						user_id: '',
						type: 1,
						hashtag_name: 'halarapants',
						hashtag_id: '1704137518143494',
						is_commerce: false,
						sec_uid: '' } ],
			text_sticker_major_lang: 'un',
			tts_voice_ids: null,
			video:
				{ cla_info:
						{ has_original_audio: 1,
							enable_auto_caption: 0,
							original_language_info:
								{ lang: 'eng-US',
									language_id: 2,
									language_code: 'en',
									can_translate_realtime: false,
									original_caption_type: 1,
									is_burnin_caption: false,
									can_translate_realtime_skip_translation_lang_check: true },
							caption_infos:
								[ { lang: 'eng-US',
									language_id: 2,
									url: 'https://v19-cla.tiktokcdn.com/0be63fa3826b7607406f4f17bfe0eacb/6579d636/video/tos/maliva/tos-maliva-v-0068c799-us/e89899d8305046388935ebb199b5cae6/?a=1180&ch=0&cr=13&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=19160&bt=9580&bti=OHYpOTY0Zik7OzlmOm01MzE6ZC4xMDo%3D&ds=4&ft=kucK_y_RZLG0PD1VApmxg9we7dRrBEeC~&mime_type=video_mp4&qs=13&rc=M2xpZnQ5cjc1bzMzaTczNEBpM2xpZnQ5cjc1bzMzaTczNEAyZHNmMmRzZjZgLS1kMTJzYSMyZHNmMmRzZjZgLS1kMTJzcw%3D%3D&l=202311131604386EC72640287634C053B3&btag=e00048000',
									expire: 1702483510,
									caption_format: 'webvtt',
									complaint_id: 7300955100456144000,
									is_auto_generated: true,
									sub_id: -714508459,
									sub_version: '1',
									cla_subtitle_id: 7300955100456144000,
									translator_id: 0,
									language_code: 'en',
									is_original_caption: true,
									url_list: [Object],
									caption_length: 450 } ],
							creator_edited_caption_id: 0,
							vertical_positions: null,
							hide_original_caption: false,
							captions_type: 1,
							no_caption_reason: 0 },
					cover_is_custom: true,
					download_addr:
						{ uri: 'v15044gf0000cl92i4vog65qicvfgi50',
							url_list:
								[ 'https://v16m.tiktokcdn.com/8034b8bca9c57fb0af3537dcb8bfff74/65529d96/video/tos/maliva/tos-maliva-ve-0068c799-us/ooJQ4cknEDVU3VwkGUFaAkIERA1eg5TfEIBlmi/?a=1180&ch=0&cr=13&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=2334&bt=1167&bti=OHYpOTY0Zik7OzlmOm01MzE6ZC4xMDo%3D&cs=0&ds=3&ft=iueGqy_RZLG0PD1VApmxg9we7dRrBEeC~&mime_type=video_mp4&qs=0&rc=M2Q7Ozw4PDk8Omk1ODRnN0BpM2xpZnQ5cjc1bzMzaTczNEA0YmFeX2MyX14xXjIvNi5eYSMyZHNmMmRzZjZgLS1kMTJzcw%3D%3D&l=202311131604386EC72640287634C053B3&btag=e00088000&cc=3',
									'https://v19.tiktokcdn.com/e1690c6b35d8bfb518f1fa2b11039f3a/65529d96/video/tos/maliva/tos-maliva-ve-0068c799-us/ooJQ4cknEDVU3VwkGUFaAkIERA1eg5TfEIBlmi/?a=1180&ch=0&cr=13&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=2334&bt=1167&bti=OHYpOTY0Zik7OzlmOm01MzE6ZC4xMDo%3D&cs=0&ds=3&ft=iueGqy_RZLG0PD1VApmxg9we7dRrBEeC~&mime_type=video_mp4&qs=0&rc=M2Q7Ozw4PDk8Omk1ODRnN0BpM2xpZnQ5cjc1bzMzaTczNEA0YmFeX2MyX14xXjIvNi5eYSMyZHNmMmRzZjZgLS1kMTJzcw%3D%3D&l=202311131604386EC72640287634C053B3&btag=e00088000&cc=4',
									'https://api16-normal-c-useast1a.tiktokv.com/aweme/v1/play/?video_id=v15044gf0000cl92i4vog65qicvfgi50&line=0&watermark=1&logo_name=tiktok_m&source=FEED&file_id=a41d912552af47a9b659f5b9a8d8ea70&item_id=7300945885695954206&signaturev3=dmlkZW9faWQ7ZmlsZV9pZDtpdGVtX2lkLjZkOTQ5YTFiYWMzNmY4YTQzYzIxMzY5NzRmNTgzYmE1' ],
							width: 720,
							height: 720,
							data_size: 4509379,
							url_prefix: null },
					duration: 30167,
					play_addr:
						{ uri: 'v15044gf0000cl92i4vog65qicvfgi50',
							url_list:
								[ 'https://v16m.tiktokcdn.com/6c5dab0d2779f0e060a63d1871ea70b8/65529d96/video/tos/maliva/tos-maliva-ve-0068c799-us/o8yqB6SKEtRKA4kCIJDSoiAIQIi8nqfzUA7BSi/?a=1180&ch=0&cr=13&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=2010&bt=1005&bti=OHYpOTY0Zik7OzlmOm01MzE6ZC4xMDo%3D&cs=0&ds=6&ft=iueGqy_RZLG0PD1VApmxg9we7dRrBEeC~&mime_type=video_mp4&qs=0&rc=aDdpNGU6ZDhnNmQ3OmQ2ZUBpM2xpZnQ5cjc1bzMzaTczNEBhLzM0YjBiXi8xLzZiNl9hYSMyZHNmMmRzZjZgLS1kMTJzcw%3D%3D&l=202311131604386EC72640287634C053B3&btag=e00088000&cc=3',
									'https://v19.tiktokcdn.com/0edc626aabd67cfa81914e1e51dc92db/65529d96/video/tos/maliva/tos-maliva-ve-0068c799-us/o8yqB6SKEtRKA4kCIJDSoiAIQIi8nqfzUA7BSi/?a=1180&ch=0&cr=13&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=2010&bt=1005&bti=OHYpOTY0Zik7OzlmOm01MzE6ZC4xMDo%3D&cs=0&ds=6&ft=iueGqy_RZLG0PD1VApmxg9we7dRrBEeC~&mime_type=video_mp4&qs=0&rc=aDdpNGU6ZDhnNmQ3OmQ2ZUBpM2xpZnQ5cjc1bzMzaTczNEBhLzM0YjBiXi8xLzZiNl9hYSMyZHNmMmRzZjZgLS1kMTJzcw%3D%3D&l=202311131604386EC72640287634C053B3&btag=e00088000&cc=4',
									'https://api16-normal-c-useast1a.tiktokv.com/aweme/v1/play/?video_id=v15044gf0000cl92i4vog65qicvfgi50&line=0&is_play_url=1&source=PackSourceEnum_FEED&file_id=dbb39ae7942a432da5ea37eb716f24de&item_id=7300945885695954206&signv3=dmlkZW9faWQ7ZmlsZV9pZDtpdGVtX2lkLjk1ODcyZjBkMzI0NDVkNzU4YzBhNzFiNjRmNDJhY2Iw' ],
							width: 576,
							height: 1024,
							url_key: 'v15044gf0000cl92i4vog65qicvfgi50_h264_540p_1029804',
							data_size: 3883265,
							file_hash: '152e1ea3a5abeab550152e070acfa8e7',
							url_prefix: null } },
			video_control:
				{ allow_download: false,
					share_type: 0,
					show_progress_bar: 1,
					draft_progress_bar: 1,
					allow_duet: true,
					allow_react: true,
					prevent_download_type: 2,
					allow_dynamic_wallpaper: true,
					timer_status: 1,
					allow_music: true,
					allow_stitch: true },
			video_labels: [],
			video_text: [],
			voice_filter_ids: null } }
// Interfaces
interface Pagination {
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
interface LookupData {
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
// Index Page
async function searchTiktok(username = 'avajustin', cursor = 0){
	const url = `/search?usernames=${username}&cursor=${cursor}&sortBy=date&legacySearch=true`;
	const {data} = await request.get(url);
	const {total,lookup, itemList} = data;
	const pagination:Pagination = lookup.pagination;
	const tiktok:TikTok = itemList[0];
	const searchAfter = tiktok._searchAfter[0];
	const {video: tiktokvideo, thumbnailDynamic, updated, id, tikHash } = tiktok._tik;
	const {author, content_desc, aweme_id, create_time, create_time_ISO, desc, cha_list, music, music_end_time_in_ms, statistics, video} = tiktok.metadata
	const playAddress = tiktok.metadata.video.play_addr.url_list[2];
	const videoAddress2 = video.download_addr.url_list[2];
	console.log(tiktok.metadata)
	
}
// Use this for Show Page
async function getTikTokById(videoId = "7300945885695954206") {
	const url = `/search?videoID=${videoId}`;
	const {data} = await request.get(url);
	console.log(data)
}
async function searchByHashTag(hashtagName = "foryou", cursor = 0) {
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