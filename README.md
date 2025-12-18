<div align="center">
<h3 align="center">Apple Macbook 網站</h3>
<img src="https://img.shields.io/badge/-Vue-38B2AC?style=for-the-badge&logo=vue.js&logoColor=white" />
<img src="https://img.shields.io/badge/-GSAP-88CE02?style=for-the-badge&logo=greensock&logoColor=white" />
<img src="https://img.shields.io/badge/-Three.js-27136A?style=for-the-badge&logo=three.js&logoColor=white" />
<img src="https://img.shields.io/badge/-Tailwind_CSS-58C4DC?style=for-the-badge&logo=tailwind-css&logoColor=white" />
<img src="https://img.shields.io/badge/-CodeRabbit-FF6C37?style=for-the-badge&logo=visual-studio-code&logoColor=white" />

</div>

## 📋 <a name="table">目錄</a>

1. ✨ [專案介紹](#introduction)
2. ⚙️ [技術棧](#tech-stack)
3. 🔋 [功能特色](#features)

## <a name="introduction">✨ 專案介紹</a>

這是一個 Apple 風格的 3D 網站，使用 Vue、Three.js、GSAP 與 TailwindCSS 打造！透過沉浸式 3D 場景展示產品，結合捲動動畫模型與釘選（pinned）區塊。具備響應式設計、流暢的時間軸動畫以及視覺效果突出的圖片轉場，非常適合想打造互動式、現代化網頁體驗的開發者。

## <a name="tech-stack">⚙️ 技術棧</a>

- **[CodeRabbit](https://jsm.dev/mbook-coderabbit)** 是一款 AI 驅動的程式碼審查工具，可整合至 VS Code 等 IDE，以及 GitHub、GitLab 等 Git 平台。它能針對 Pull Request 提供即時且具上下文理解的回饋，包括逐行分析、安全性漏洞檢測，以及程式碼風格與規範的檢查。CodeRabbit 也會學習團隊偏好，隨時間優化審查品質，提升整體開發效率。

- **[GSAP](https://gsap.com/)** 是一套強大的 JavaScript 動畫函式庫，在本專案中用於打造動態、以捲動為核心的視覺效果。功能包含 SplitText 文字拆分動畫、ScrollTrigger 時間軸控制、視差捲動、區塊釘選、捲動同步影片播放、多區段無縫時間軸、圖片遮罩效果，以及完全客製化的動畫輪播。

- **[Vue](https://vuejs.org/)** 是一個用於建構互動式 UI 的宣告式 JavaScript 函式庫。它提供元件化結構，方便模組化開發，能順利整合 GSAP 動畫、重複使用捲動邏輯，並支援響應式版面與狀態驅動的 UI 功能，例如輪播與影片區塊。

- **[Tailwind CSS](https://tailwindcss.com/)** 是一個 utility-first 的 CSS 框架，透過直接在 HTML 中套用低階工具類別來設計介面，大幅提升客製化 UI 的開發效率。

- **[Three.js](https://threejs.org/)** 是一套強大的 JavaScript 3D 函式庫，用於在瀏覽器中渲染互動式 3D 圖形。功能包含基於 WebGL 的渲染、相機與光源系統、材質設定、3D 模型匯入、幾何與貼圖操作、場景樹管理、動畫、射線偵測（raycasting）互動，以及與物理與後製效果整合，打造沉浸式體驗。

- **[Vite](https://vitejs.dev/)** 是本專案使用的高速建置工具與開發伺服器，提供即時 HMR、快速啟動與最佳化的正式版建置流程，非常適合動畫密集的 Vue 專案。

## <a name="features">🔋 功能特色</a>

👉 **具備真實光影系統的 3D 產品場景**：在擬真的 3D 環境中展示產品，帶來強烈視覺衝擊。

👉 **依捲動動畫化 3D 模型**：根據使用者捲動位置，動態呈現 3D 模型動畫。

👉 **ScrollTrigger 效果**：透過 GSAP ScrollTrigger 實現以捲動為核心的動畫與時間軸控制。

👉 **釘選（Pinned）區塊**：在捲動時鎖定區塊位置，同步播放動畫內容。

👉 **圖片遮罩效果**：結合捲動觸發的釘選與遮罩，打造吸睛的圖片轉場效果。

👉 **無縫時間軸動畫**：建立跨多個區段的流暢動畫時間軸。

👉 **響應式設計**：在各種螢幕尺寸下，都能維持流暢的 UI 與 GSAP 動畫效果。
