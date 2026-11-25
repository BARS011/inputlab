InputLab 3D — paket fayllari (GitHub Pages uchun tayyor)
========================================================

index.html      — GitHub Pages / mahalliy server uchun bosh sahifa (inputlab3.html bilan bir xil).
inputlab3.html  — asosiy versiya: iOS dizayn, 3D klaviatura va sichqoncha, qo'llanma,
                  statistika, hisobot, palitralar, PC/Noutbuk rejimlari.
inputlab2.html  — asl nusxa (o'zgartirilmagan, faqat solishtirish uchun).
404.html        — noto'g'ri manzil bo'lganda bosh sahifaga qaytaradi (404 ko'rinmaydi).
.nojekyll       — GitHub Pagesda Jekyll qayta ishlashni o'chiradi.
serve.js        — mahalliy server: node serve.js  ->  http://localhost:8137/

Eslatma: ilova to'liq o'z ichiga olingan — tashqi font/CSS/JS so'rovlari yo'q,
favicon ham inline SVG. Shuning uchun hech qanday 404 so'rovi bo'lmaydi.

Ishga tushirish:
  - GitHub Pages: papkani repo qilib, Settings > Pages > Deploy from branch (main / root).
  - Mahalliy: index.html ni brauzerda oching yoki node serve.js ishga tushiring.
