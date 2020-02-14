# 樂台計畫後台管理系統
###### Nov, 2018 - Present
---

![](/static/img/mcip/fb-cover.png)

[樂台計畫](https://mcip.ml/)誕生於2018年的冬天，是我與大學好友 Kaichi 攜手開發的大專院校音樂平台，我們皆來自吉他社，宗旨是打造更優質的音樂賽事環境。系統雖已上線，但我們仍持續不斷地優化系統與擴展規模。

對於參賽者，樂台計畫以 Line App 官方帳號的形式，讓用戶輕鬆簡單地報名參賽，瀏覽各賽事的詳細資訊，還有查看當前比賽進度等功能。目前用戶數已超過 1,500 人，全台有 14 所大專院校的音樂社團與我們成為合作夥伴。

而對於主辦比賽的社團成員們，樂台計畫提供一套完整的後台管理系統。
在此項目我負責的是**後台管理系統**開發與部分 Line App **UI/UX 設計**。

![管理後台概覽頁面(Dashboard)](/static/img/mcip/cover.png)

管理後台前端框架為 Vue.js，主要都 Vuetify 這個組件庫來建置，它提供許多 Material Design 風格的組件如 button 和 text field 等，使得在設計 UI 上節省不少心力。
![參賽者報名列表](/static/img/mcip/forms.png)
![編輯報名表單](/static/img/mcip/edit-form.png)

本專案落實前後端分離架構，擁有一套規範的 API，使用 axios 來與後端溝通。
![登入畫面](/static/img/mcip/login.png)

本專案全部都使用 Pug 模板語言進行撰寫，透過縮排就能很靈活地調整 html 的巢狀結構，它的混入功能也為設計模板帶來許多方便。
![專案中使用的 Pug 模板](/static/img/mcip/pug.png)

![編輯賽況資訊](/static/img/mcip/competition.png)
![設定學校資訊](/static/img/mcip/config.png)

除了管理後台之外，我也為樂台計畫設計了單頁式的形象官網。
[https://mcip.ml/](https://mcip.ml/)
![形象官網](/static/img/mcip/index.png)
