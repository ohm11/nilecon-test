// All content below is placeholder/mock data.
// Swap `image` URLs or wire up a real API without touching any screen code.

export const liveChannel = {
  channelLabel: "Live : Workpoint 23",
  image: "https://picsum.photos/seed/live-cover/800/450",
};

// Real start/end times — on-air status is computed live against the
// device clock (see src/utils/schedule.js) instead of being hardcoded.
export const todaySchedule = [
  { id: "s1", title: "จำอวดหน้าจอ", startTime: "10:30", endTime: "11:00" },
  { id: "s2", title: "ARMCHAIR คุยเล่นเอาจริง", startTime: "11:00", endTime: "11:50" },
  { id: "s3", title: "SUPER100 อัจฉริยะเกินร้อย", startTime: "11:50", endTime: "13:00" },
  { id: "s4", title: "เคลียร์ชัดชัด", startTime: "13:00", endTime: "13:45" },
  { id: "s5", title: "เพชรตัดเพชร ลูกทุ่งรวมดาว", startTime: "18:00", endTime: "20:00" },
];

export const top10 = [
  { id: "t1", rank: 1, title: "ร้องข้ามกำแพง THE WALL SONG", subtitle: "ทุกวันพฤหัสบดี เวลา 20.05 น.", image: "https://picsum.photos/seed/top1/400/560" },
  { id: "t2", rank: 2, title: "โอมเพี้ยงอาจารย์คง", subtitle: "ทุกวันเสาร์ เวลา 12.00 น.", image: "https://picsum.photos/seed/top2/400/560" },
  { id: "t3", rank: 3, title: "หกฉากครับจารย์", subtitle: "ทุกวันอาทิตย์ เวลา 12.00 น.", image: "https://picsum.photos/seed/top3/400/560" },
  { id: "t4", rank: 4, title: "SUPER 100 อัจฉริยะเกินร้อย", subtitle: "ทุกวันจันทร์ - ศุกร์", image: "https://picsum.photos/seed/top4/400/560" },
];

export const featuredVideos = [
  { id: "f1", title: "ร้องข้ามกำแพง THE WALL SONG", image: "https://picsum.photos/seed/featured1/900/600" },
  { id: "f2", title: "โอมเพี้ยงอาจารย์คง", image: "https://picsum.photos/seed/featured2/900/600" },
  { id: "f3", title: "หกฉากครับจารย์", image: "https://picsum.photos/seed/featured3/900/600" },
];

export const latestReplays = [
  { id: "r1", title: 'สร้างแรงใจชีวิตจากผู้ป่วยโรคร้าย "ตี๋อ๋อ"', image: "https://picsum.photos/seed/replay1/500/300" },
  { id: "r2", title: "เชฟสุดโก๊ะ ที่ไม่ปล่อยเป๊ะง่ายๆ", image: "https://picsum.photos/seed/replay2/500/300" },
  { id: "r3", title: "ไมค์หมดหนี้ 9 มงคล Full EP", image: "https://picsum.photos/seed/replay3/500/300" },
];

export const singingContests = [
  { id: "c1", title: "เพชรตัดเพชร ลูกทุ่งรวมดาว", subtitle: "ทุกวันอาทิตย์ เวลา 18.00 น.", image: "https://picsum.photos/seed/contest1/400/560" },
  { id: "c2", title: "ไมค์ทองคำ สามวัย ครั้งที่ 6", subtitle: "ทุกวันเสาร์ เวลา 18.00 น.", image: "https://picsum.photos/seed/contest2/400/560" },
  { id: "c3", title: "ไมค์หมดหนี้ 9 มงคล", subtitle: "ทุกวันจันทร์ - พฤหัสบดี", image: "https://picsum.photos/seed/contest3/400/560" },
];

export const sitcoms = [
  { id: "sc1", title: "ออฟฟิศใหม่ไกล้ฉัน", subtitle: "ทุกวันพุธ เวลา 21.30 น.", image: "https://picsum.photos/seed/sitcom1/400/560" },
  { id: "sc2", title: "โอมเพี้ยงอาจารย์คง", subtitle: "ทุกวันเสาร์ เวลา 12.00 น.", image: "https://picsum.photos/seed/sitcom2/400/560" },
  { id: "sc3", title: "หกฉากครับจารย์", subtitle: "ทุกวันอาทิตย์ เวลา 12.00 น.", image: "https://picsum.photos/seed/sitcom3/400/560" },
];

export const latestMusic = [
  { id: "m1", title: "4EVE - รับจบ | OFFICIAL MV", image: "https://picsum.photos/seed/music1/500/500" },
  { id: "m2", title: "ATLAS - SOMTAM (ส้มตำ)", image: "https://picsum.photos/seed/music2/500/500" },
  { id: "m3", title: "4EVE - Salsa | OFFICIAL MV", image: "https://picsum.photos/seed/music3/500/500" },
];

export const newsItems = [
  { id: "n1", title: "มกราคม 69 แล้วเจอกัน!", image: "https://picsum.photos/seed/news1/500/300" },
  { id: "n2", title: "THE MASK SOULMATE | SPOT", image: "https://picsum.photos/seed/news2/500/300" },
  { id: "n3", title: "เพราะทุกบทเพลงในชีวิต มีความหมาย", image: "https://picsum.photos/seed/news3/500/300" },
];

export const socialLinks = [
  { id: "yt", icon: "logo-youtube" },
  { id: "fb", icon: "logo-facebook" },
  { id: "ig", icon: "logo-instagram" },
  { id: "x", icon: "logo-twitter" },
  { id: "tt", icon: "logo-tiktok" },
];

export const bottomTabs = [
  { id: "live", label: "ดูทีวีสด", icon: "tv" },
  { id: "highlight", label: "ไฮไลท์", icon: "play-circle" },
  { id: "replay", label: "รายการย้อนหลัง", icon: "albums" },
  { id: "news", label: "ข่าวสาร", icon: "newspaper" },
  { id: "schedule", label: "ผังรายการ", icon: "calendar" },
];
