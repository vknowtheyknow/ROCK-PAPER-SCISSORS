

# ชื่อโครงงาน : ROCK-PAPER-SCISSORS
โครงงานนี้เป็นส่วนหนึ่งของรายวิชา Practicum for Computer Engineering การปฏิบัติการทางวิศวกรรมคอมพิวเตอร์ รหัสวิชา 01204223 ภาควิชาวิศวกรรมคอมพิวเตอร์ คณะวิศวกรรมศาสตร์ มหาวิทยาลัยเกษตรศาสตร์ ภาคปลาย ปีการศึกษา 2564 หมู่ 11,12

## ผลงานนี้ถูกจัดทำโดย: ปรมาจารย์หนีการ F
สมาชิกประกอบด้วย
1. 6310503243 โฆษิต วัฒนกุลวิวัฒน์
2. 6310503561 วิมลมณี วิศิษฎ์สกุลเจริญ
3. 6310505696 จิดาภา ณัฐภานนท์
4. 6310504063 ชุติพันธุ์ บาลมงคล

## รายละเอียดไฟล์
### firmware
ประกอบด้วย
```
└───arduino-IDE 
    └───tessiscor.ino ควบคุม hardware ส่งข้อมูลไปให้บอร์ด
    └───usbconfig.h 
```
รายการไลบราลี่/เฟรมเวิร์คที่ใช้ 
`usbdrv.h` `Servo.h`

### python
ประกอบด้วย
```
└───__pycache__
└───static ไฟล์ตกแต่งเว็บไซต์ ได้แก่ css และ javascript
    └───css
        └───style.css
        └───style1.css
    └───script
        └───app.js
└───templates
    └───index.html    html แสดงหน้าสะสมคะแนน
    └───winner.html   html แสดงหน้าผู้ชนะเกม
└───practicum.py ฟังก์ชันที่ใช้กับ usb เช่น read write และ get_winner ที่รับค่าจากฮาร์ดแวร์
└───webapp.py แสดงผลข้อมูลที่ได้จากฮาร์ดแวร์เข้ากับเว็บไซต์
```
รายการไลบราลี่/เฟรมเวิร์คที่ใช้ 
`flask` `usb`

### Others  
```
picture of project : โฟลเดอร์ที่จัดเก็บรูปภาพของตัวโปรเจคที่ได้ทำการสร้างขึ้นมา
schematic : โฟลเดอร์ที่จัดเก็บ Schematic ของวงจร
README.md : ไฟล์ระบุชื่อโครงงาน, รายชื่อผู้จัดทำ, รายละเอียดไฟล์ ได้แก่ โฟลเดอร์ ไฟล์ย่อย และรายการไลบรารี/เฟรมเวิร์คที่ใช้, รายการอุปกรณ์ฮาร์ดแวร์ที่ใช้, และการใช้งานโปรแกรม
LICENSE.md : ไฟล์ระบุเงื่อนไขการอนุญาตให้ผู้อื่นนำงานนี้ไปใช้
```

## รายการอุปกรณ์ฮาร์ดแวร์ที่ใช้
- servo moter 6 ตัว
- สายไฟ 
- สวิตซ์  6 ตัว
- Practicum Board 1 บอร์ด
- Raspberry pi 1 ตัว
- Breadboard 3 บอร์ด
- Breakout board 3 ตัว
- สายแพร 3 เส้น

## การใช้งานโปรแกรม
เมื่อทำการดาวโหลดไฟล์ทั้งหมด
### hardware
- ต่อวงจรกับบอร์ด practicum ตาม schematic 
- เสียบ usb เข้ากับ raspberry pi
- download VNC เพื่อแสดงหน้าจอของ raspberry pi
- download arduino ide
- เปิด arduino ide และกดสวิชซ์ที่บอร์ด practicum จนไฟสีเหลืองกระพริบ จากนั้นอัพโหลด tessiscor.ino ลงบนบอร์ด
### website
run คำสั่ง
```
python webapp.py
```
### เล่นเกม
ให้ทั้งสองผู้เล่นกดที่ปุ่มค้อนพร้อมกับ refresh หน้าจอเว็บไซต์ เป็นการเริ่มเล่นเกม
