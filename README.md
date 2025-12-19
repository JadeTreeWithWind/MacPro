<div align="center">
<h3 align="center">Apple Macbook 網站</h3>
<img src="https://img.shields.io/badge/-react-38B2AC?style=for-the-badge&logo=react.js&logoColor=white" />
<img src="https://img.shields.io/badge/-GSAP-88CE02?style=for-the-badge&logo=greensock&logoColor=white" />
<img src="https://img.shields.io/badge/-Three.js-27136A?style=for-the-badge&logo=three.js&logoColor=white" />
<img src="https://img.shields.io/badge/-Tailwind_CSS-58C4DC?style=for-the-badge&logo=tailwind-css&logoColor=white" />
<img src="https://img.shields.io/badge/-CodeRabbit-FF6C37?style=for-the-badge&logo=visual-studio-code&logoColor=white" />
</div>

---

## 📋 目錄

1. ✨ [專案介紹](#introduction)
2. ⚙️ [技術棧](#tech-stack)
3. 🔋 [功能特色](#features)

---

## <a name="introduction">✨ 專案介紹</a>

這是一個 **Apple 風格的 3D 產品展示網站**，使用 **React、Three.js、GSAP 與 Tailwind CSS** 打造。

專案重點放在「**視覺體驗與互動感**」，透過沉浸式 3D 場景、隨捲動觸發的動畫效果，以及 pinned 區塊設計，模擬 Apple 官網那種細緻、順暢的瀏覽體驗。

整體架構支援 **響應式設計**，不論桌機或行動裝置，都能保持動畫流暢、版面一致，非常適合想練習 **前端動畫、3D 整合與高互動 Landing Page** 的開發者參考與實作。

---

## <a name="tech-stack">⚙️ 技術棧</a>

- **[React](https://reactjs.org/)**
  前端核心框架，負責整體 UI 與元件架構。透過元件化設計，讓動畫邏輯與畫面結構可以清楚拆分，方便維護與擴充，也能順利整合 GSAP 與 Three.js。

- **[GSAP](https://gsap.com/)**
  本專案的動畫主力。大量使用 ScrollTrigger 製作捲動驅動動畫，包含 pinned 區塊、時間軸控制、視差效果與圖片轉場，讓畫面跟著使用者操作自然流動。

- **[Three.js](https://threejs.org/)**
  負責 3D 場景與模型渲染，包含燈光、材質與相機設定，讓產品展示更有立體感與真實感，提升整體視覺質感。

- **[Tailwind CSS](https://tailwindcss.com/)**
  採用 utility-first 的方式快速刻 UI，搭配動畫效果能有效維持版面一致性，同時減少撰寫大量客製 CSS 的負擔。

- **[Vite](https://vitejs.dev/)**
  專案建置與開發工具，提供快速啟動與即時 HMR，對於動畫與 3D 開發來說，能大幅提升開發效率與調整手感。

- **[CodeRabbit](https://jsm.dev/mbook-coderabbit)**
  AI 程式碼審查工具，可協助檢視 PR、找出潛在問題與風格不一致之處，對於維持專案品質與團隊協作相當實用。

---

## <a name="features">🔋 功能特色</a>

👉 **高品質 3D 產品展示場景**
透過真實感燈光與材質設定，呈現具有 Apple 風格的產品視覺效果。

👉 **捲動驅動的 3D 動畫互動**
模型動畫會隨著使用者捲動進行變化，提升整體沉浸感與操作回饋。

👉 **GSAP ScrollTrigger 整合**
大量運用 ScrollTrigger 控制動畫進場、離場與時間軸，讓動畫節奏精準可控。

👉 **Pinned 區塊設計**
關鍵內容在捲動時固定於畫面中，搭配動畫逐步呈現資訊，提升敘事感。

👉 **圖片遮罩與轉場效果**
利用遮罩與捲動動畫，打造乾淨、有層次的視覺轉場。

👉 **完整響應式支援**
針對不同裝置尺寸調整版面與動畫行為，確保在各種裝置上都有良好體驗。
