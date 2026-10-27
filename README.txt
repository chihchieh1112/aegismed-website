醫盾 AegisMed AI co. 官網（草稿版 v2.1，依 2026-10-15 長官交接包改版）
================================================================

【直接檢閱】
解壓縮後，雙擊 index.html 即可用瀏覽器開啟；右上角可切換 繁中 / EN / VI。
畫面上橘色虛線的「待補」標記，是提醒尚未確認或補齊的內容（上線前會關閉）。
所有方案與流程文案依交接包保留「示意／待核定」註記，核定後再移除。

【上傳主機】
把這個資料夾裡的所有檔案（含 assets 資料夾）原封不動上傳到主機的網站根目錄，
入口頁為 index.html。所有連結都是相對路徑，放在子目錄也能正常運作。
目前每頁都設定 noindex，正式上線時請移除 <meta name="robots"> 那一行。

【頁面】
index.html            首頁（十個區塊）
solutions.html        核心解決方案總覽
solution-his.html     01 新一代智慧化 HIS 轉換      solution-smart-mdt.html  04 Smart-MDT
solution-emr.html     02 EMR Platform               solution-native-ai.html  05 原生 AI
solution-smart-icu.html 03 Smart-ICU                solution-ai-assist.html  06 AI 輔助
platform.html         平台與整合
cooperation.html      導入與合作（含人才交流與數據培訓服務）
cases.html            公司案例（三類；合作交流＝台越合作紀錄與照片）
news.html             洞察與動態（文章暫不顯示，只有媒體報導）
about.html            關於醫盾（執行長介紹、合作組織）
contact.html          聯絡我們
privacy.html          隱私政策、Cookie 與網站使用說明（草稿）

【檔案結構】
assets/style.css   版面與品牌配色
assets/content.js  交接包文案（三語）：首頁、六大方案、路徑、情境、平台、導入、合作、關於、聯絡、案例、隱私
assets/data.js     行程、照片、新聞、專家、合作組織、公司資料
assets/i18n.js     導覽與介面文字的英文、越南文
assets/site.js     頁首頁尾、語言切換、各頁內容產生、燈箱、表單
assets/photos/     活動照片與縮圖（疑涉隱私與專家字卡的八張照片已自素材中移除）
assets/img/        logo、favicon

【注意】
- 聯絡表單目前按「送出」會開啟使用者的郵件程式，尚未接表單服務。
- 字型由 Google Fonts 載入，離線開啟會改用系統字型，版面不受影響。
- 版本：v2.2 / 2026-10-26。變更紀錄：移除顧問專家區塊與相關照片；執行長介紹改為正式體例、暫不放照片；移除四張疑涉隱私照片。
- 前版 v2.1 / 2026-10-19：改為六大方案定位、新增 11 個頁面、移除里程碑／專家／相簿獨立頁。
