const navLinks = [
  { label: "商店" },
  { label: "Mac" },
  { label: "iPhone" },
  { label: "Watch" },
  { label: "Vision" },
  { label: "支援" },
];

const noChangeParts = [
  "Object_84",
  "Object_37",
  "Object_34",
  "Object_12",
  "Object_80",
  "Object_35",
  "Object_36",
  "Object_13",
  "Object_125",
  "Object_76",
  "Object_33",
  // "Object_42",
  "Object_58",
  "Object_52",
  "Object_21",
  "Object_10",
];

const performanceImages = [
  { id: "p1", src: "/performance1.png" },
  { id: "p2", src: "/performance2.png" },
  { id: "p3", src: "/performance3.png" },
  { id: "p4", src: "/performance4.png" },
  { id: "p5", src: "/performance5.jpg" },
  { id: "p6", src: "/performance6.png" },
  { id: "p7", src: "/performance7.png" },
];

const performanceImgPositions = [
  {
    id: "p1",
    left: 5,
    bottom: 65,
  },
  {
    id: "p2",
    right: 10,
    bottom: 60,
  },
  {
    id: "p3",
    right: -5,
    bottom: 45,
  },
  {
    id: "p4",
    right: -10,
    bottom: 0,
  },
  {
    id: "p5",
    left: 20,
    bottom: 50,
  },
  {
    id: "p6",
    left: 2,
    bottom: 30,
  },
  {
    id: "p7",
    left: -5,
    bottom: 0,
  },
];

const features = [
  {
    id: 1,
    icon: "/feature-icon1.svg",
    highlight: "做更多，更不費力。",
    text: "好幫手 Siri，能在日常生活的每一刻，助你完成大小事。需要時，只要開個口或透過輸入來與 Siri 對話，就一切搞定。Siri 可以幫你掌握 Apple 產品的新知識，還能運用 ChatGPT 的廣泛世界知識，給你適時解答。",
    styles: "left-5 md:left-20 top-[20%] opacity-0 translate-y-5",
  },
  {
    id: 2,
    icon: "/feature-icon2.svg",
    highlight: "開心愉悅的影像，為你而生成。",
    text: "你可以直接用「影像樂園」在各款 app 或它的專用 app 中，製作趣味滿滿的原創圖像。除了試試動畫、插畫和塗鴉等不同風格，還能在 ChatGPT 中探索更多風格。可透過「影像魔杖」將草圖轉成相關圖片，搭配筆記，相得益彰；也能在「照片」app 中，精心打造自訂的回憶影片；更能以朋友為靈感，用 Genmoji 大玩影像創作。",
    styles: "right-5 md:right-20 top-[30%] opacity-0 translate-y-5",
  },
  {
    id: 3,
    icon: "/feature-icon3.svg",
    highlight: "多點聯繫，少點干擾。",
    text: "Apple Intelligence 讓日常溝通變得簡單，還能幫你保持專注。你可以透過「即時翻譯」用各種語言溝通，使用「書寫工具」讓遣詞用字恰到好處，還能排定通知的優先順序，將干擾降到最低。",
    styles: "left-5 md:left-20 top-[50%] opacity-0 translate-y-5",
  },
  {
    id: 4,
    icon: "/feature-icon4.svg",
    highlight: "優異的隱私保護，隨優越實力而來。",
    text: "Apple Intelligence 精心設計，保護你的隱私，步步為營。它深度整合至你的 iPhone、iPad 和 Mac，一切操作都在裝置端處理。因此，它知道你的個人資料，但絕不會搜集你的個資。透過創新突破的「私密雲端運算」功能，Apple Intelligence 還能利用基於伺服器的更大模型，在 Apple 晶片上執行，為你處理更複雜的要求，同時保障你的隱私。",
    styles: "right-5 md:right-20 top-[70%] opacity-0 translate-y-5",
  },
  {
    id: 5,
    icon: "/feature-icon5.svg",
    highlight: "ChatGPT，緊密整合。",
    text: "OpenAI 出品的 ChatGPT 已整合至 Siri、「書寫工具」、視覺智慧、「影像樂園」和「捷徑」app 中，方便你獲得更多實用的專業知識，省卻切換不同工具的麻煩。",
    styles: "left-5 md:left-20 top-[90%] opacity-0 translate-y-5",
  },
];

const featureSequence = [
  { videoPath: "/videos/feature-1.mp4", boxClass: ".box1", delay: 1 },
  { videoPath: "/videos/feature-2.mp4", boxClass: ".box2", delay: 0 },
  { videoPath: "/videos/feature-3.mp4", boxClass: ".box3", delay: 0 },
  { videoPath: "/videos/feature-4.mp4", boxClass: ".box4", delay: 0 },
  { videoPath: "/videos/feature-5.mp4", boxClass: ".box5", delay: 0 },
];

const footerLinks = [
  { label: "Privacy Policy", link: "#" },
  { label: "Terms of Use", link: "#" },
  { label: "Sales Policy", link: "#" },
  { label: "Legal", link: "#" },
  { label: "Site Map", link: "#" },
];

export {
  features,
  featureSequence,
  footerLinks,
  navLinks,
  noChangeParts,
  performanceImages,
  performanceImgPositions,
};
