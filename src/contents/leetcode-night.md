# LeetCode Night
###### Feb, 2022 - Present
---
## 緣由

長久以來都只有[中國版力扣](https://leetcode-cn.com/)支援較完整的暗黑模式，然而美國 LeetCode 主站則僅有在少數頁面，例如 Problem List、Profile 等頁才有暗黑模式，而最重要的解題頁卻遲遲未推出。

## 簡介

*LeetCode Night* 是 Google Chrome 的擴充功能，現已上架至商店，讓使用者在題目頁也可以套用深色模式，即使在夜晚刷題也不必擔心瞎眼。

- TypeScript
- UI 組件基於 [Tocas UI v4](https://v4.tocas-ui.com/) 建構，搭配 styled-component 自定義樣式
- 使用 Axios 和 GraphQL 請求題目列表
- 使用 react-i18next 本地化
- 透過 Webpack css-loader 向頁面注入複寫用的 SASS 樣式


此外還有附加以下便利功能：
1. 反相圖片顏色，讓題目中多數白底的插圖，在深色模式中也不至於太突兀
2. 輸入 Question Number 來迅速跳轉至題目頁，此插件會將題目列表緩存至本機，無需等待 API 回應
3. 自動清空編輯器裡前一次送出過的程式碼，特別適合刷題狂人，避免不小心瞄到答案


![](~@/assets/img/article/leetcode-night/banner.png)

![啟用 LeetCode 深色模式](~@/assets/img/article/leetcode-night/1.png)
![Popup 視窗](~@/assets/img/article/leetcode-night/2.png)


## Demo

<a href="https://chrome.google.com/webstore/detail/leetcode-night/aaokgipfeeeciodnffigjfiafledhcii" target="_blank">
  <img src="https://storage.googleapis.com/web-dev-uploads/image/WlD8wC6g8khYWPJUsQceQkhXSlv1/UV4C4ybeBTsZt43U4xis.png" />
</a>

<br/>
<br/>

<iframe src="https://ghbtns.com/github-btn.html?user=ngseke&repo=leetcode-night&type=star&count=false" frameborder="0" scrolling="0" width="150" height="20"></iframe>
