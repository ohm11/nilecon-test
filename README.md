# Workpoint Clone App (React Native / Expo)

แอปตัวอย่างที่จำลองหน้าตาแอป Workpoint (ดูทีวีสด, ไฮไลท์, รายการย้อนหลัง, ข่าวสาร, ผังรายการ)
ทุกปุ่ม/การ์ดกดได้จริง และนำไปยัง **หน้าเปล่า (placeholder)** ตามที่ออกแบบไว้
ข้อมูลทั้งหมดเป็น mock data อยู่ที่ `src/data/mockData.js` — แก้ไข/เชื่อมต่อ API จริงได้ทีเดียวจบที่ไฟล์นี้

## โครงสร้างโปรเจกต์

```
App.js                        entry point
src/
  navigation/
    AppNavigator.js           root stack (tabs + modal screens + placeholder)
    BottomTabNavigator.js     5 แท็บล่าง (ดูทีวีสด/ไฮไลท์/ย้อนหลัง/ข่าวสาร/ผังรายการ)
  screens/
    HomeScreen.js             หน้าแรก (ตรงกับภาพหน้าจอหลัก)
    LiveDetailScreen.js       หน้าเล่นสด + รายการวันนี้ (ตรงกับภาพแรก)
    SearchScreen.js           ค้นหา
    MenuScreen.js             เมนูแฮมเบอร์เกอร์
    HighlightScreen.js        แท็บไฮไลท์ (grid)
    ReplayScreen.js           แท็บรายการย้อนหลัง (grid)
    NewsScreen.js             แท็บข่าวสาร (grid)
    ScheduleScreen.js         แท็บผังรายการ (list)
    GridListScreen.js         grid ใช้ร่วมกันหลายแท็บ
    PlaceholderScreen.js      หน้าเปล่า ใช้เป็นปลายทางของทุกปุ่มที่ยังไม่มีข้อมูลจริง
  components/                 UI ที่ใช้ซ้ำ (Header, LiveBanner, Card, HorizontalCardList, ...)
  data/mockData.js            ข้อมูลตัวอย่างทั้งหมด
  theme/colors.js             สี/ระยะห่าง/มุมโค้ง ที่ใช้ร่วมกันทั้งแอป
```

## เริ่มต้นใช้งาน

ต้องมี Node.js (แนะนำ 18+) และเชื่อมต่ออินเทอร์เน็ต

```bash
npm install
npx expo start
```

จากนั้นสแกน QR ด้วยแอป Expo Go (iOS/Android) หรือกด `i` / `a` เพื่อเปิดใน simulator/emulator, หรือกด `w` เพื่อรันบนเว็บ

## รายการวันนี้ (สถานะเวลาจริง)

วันที่และสถานะ "กำลังรับชม / รายการถัดไป / ออกอากาศแล้ว" ใน `LiveDetailScreen` และแท็บ "ผังรายการ" คำนวณจาก **เวลาจริงของเครื่อง** (ไม่ใช่ค่า hardcode อีกต่อไป) ผ่าน:

- `src/utils/schedule.js` — เทียบเวลาปัจจุบันกับ `startTime`/`endTime` ของแต่ละรายการ (mock อยู่ใน `src/data/mockData.js`) เพื่อตัดสินสถานะ และฟอร์แมตวันที่แบบไทย/พ.ศ.
- `src/utils/useNow.js` — hook ที่ re-render หน้าจอทุก 1 นาที เพื่อให้สถานะไม่ค้าง ถ้าเปิดแอปทิ้งไว้ข้ามช่วงเวลารายการ
- ถ้าตอนนี้ไม่มีรายการใดออกอากาศ (นอกช่วง 10:30-20:00 ตาม mock) ป้าย "กำลังรับชม" จะเปลี่ยนเป็น "ไม่มีรายการออกอากาศขณะนี้" แทนการโชว์ข้อมูลผิดๆ

แก้เวลาออกอากาศจริงได้ที่ `todaySchedule` ใน `src/data/mockData.js` (รูปแบบ `"HH:MM"` ตามเวลา 24 ชม.)

## หน้า Live

หน้า `LiveDetailScreen` (ตรงกับภาพหน้าจอแรก) ใช้ `expo-av` เล่นวิดีโอตัวอย่าง (mock up) แบบ inline จริง — แตะที่วิดีโอเพื่อ play/pause, มีปุ่ม mute/unmute มุมขวาล่าง และ label "ตัวอย่างวิดีโอ (mock up)" กำกับไว้ให้ชัดเจนว่าเป็นของทดสอบ ไม่ใช่สตรีมจริง สลับ URL วิดีโอได้ที่ `MOCK_VIDEO_SOURCE` ใน `src/components/LiveBanner.js`

หน้า Home ยังคงเป็นภาพนิ่ง + ปุ่มเล่น (แตะแล้วพาไปหน้า Live) เพื่อลดโหลดวิดีโอซ้ำซ้อนตอนเลื่อนฟีด

## การเชื่อม API จริงในอนาคต

แก้ที่ไฟล์เดียว: `src/data/mockData.js` — เปลี่ยนจาก mock array เป็นผลลัพธ์จาก fetch/axios โครงสร้าง component จะไม่ต้องแก้อะไรเพิ่ม

## Push ขึ้น Git

โปรเจกต์นี้ `git init` และ commit ไว้ในเครื่องเรียบร้อยแล้ว หากต้องการ push ขึ้น remote (เช่น GitHub):

```bash
git remote add origin <URL_REPO_ของคุณ>
git branch -M main
git push -u origin main
```
