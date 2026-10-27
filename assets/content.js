/* ============================================================
   醫盾 AegisMed AI co. 官網 — 交接包 v2 文案（三語）
   zh 依「website_copy_文案擷取_v2.md」原文；en、vi 為翻譯初稿。
   六大方案內頁（solutions.items）已於 2026-10-27 改為定稿版：移除「本頁應附的證據」與設計提案註記，
   導言與要點改為對外文案，並以 figure 欄位提供各方案架構圖的三語文字。其餘頁面的註記仍依交接包保留。
   ============================================================ */
window.CONTENT = {

  /* ---------- 首頁：主視覺 ---------- */
  hero: {
    eyebrow: { zh: "新一代智慧化 HIS × AI-NATIVE HEALTHCARE", en: "NEXT-GENERATION SMART HIS × AI-NATIVE HEALTHCARE", vi: "HIS THÔNG MINH THẾ HỆ MỚI × AI-NATIVE HEALTHCARE" },
    title: { zh: ["從 HIS 升級，", "邁向 AI 原生的", "智慧醫院。"], en: ["From HIS upgrade", "to the AI-native", "smart hospital."], vi: ["Từ nâng cấp HIS", "đến bệnh viện thông minh", "AI-native."] },
    lead: {
      zh: "以新一代智慧化 HIS 轉換為起點，整合 EMR Platform、Smart-ICU、Smart-MDT、原生 AI 與 AI 輔助，規劃從核心系統到臨床與營運流程的智慧升級。",
      en: "Starting from next-generation smart HIS modernization, we integrate EMR Platform, Smart-ICU, Smart-MDT, native AI and AI assistance to plan the intelligent upgrade from core systems to clinical and operational workflows.",
      vi: "Bắt đầu từ chuyển đổi HIS thông minh thế hệ mới, tích hợp EMR Platform, Smart-ICU, Smart-MDT, AI nguyên bản và AI hỗ trợ, hoạch định nâng cấp thông minh từ hệ thống lõi đến quy trình lâm sàng và vận hành."
    },
    cta1: { zh: "探索解決方案", en: "Explore solutions", vi: "Khám phá giải pháp" },
    cta2: { zh: "了解 HIS 轉換路徑", en: "HIS modernization paths", vi: "Lộ trình chuyển đổi HIS" },
    tags: [
      { zh: "成熟核心轉換", en: "Mature core modernization", vi: "Chuyển đổi lõi trưởng thành" },
      { zh: "原生 AI 架構", en: "AI-native architecture", vi: "Kiến trúc AI nguyên bản" },
      { zh: "臨床與營運輔助", en: "Clinical and operational assistance", vi: "Hỗ trợ lâm sàng và vận hành" }
    ],
    board: {
      label: "AEGISMED AI · CONNECTED INTELLIGENCE",
      title: { zh: "方案關係示意", en: "How the solutions connect", vi: "Sơ đồ quan hệ các giải pháp" },
      sub: { zh: "從核心系統，連結智慧工作流程。", en: "From the core system to intelligent workflows.", vi: "Từ hệ thống lõi, kết nối quy trình làm việc thông minh." },
      line: { zh: "成熟 HIS 轉換 × 共同平台 × 原生 AI 能力", en: "Mature HIS modernization × shared platform × native AI capability", vi: "Chuyển đổi HIS trưởng thành × nền tảng chung × năng lực AI nguyên bản" },
      top: [
        { zh: "成熟 HIS 核心", en: "Mature HIS core", vi: "Lõi HIS trưởng thành" },
        { zh: "檢驗 / 影像", en: "Lab / imaging", vi: "Xét nghiệm / hình ảnh" },
        { zh: "醫療設備", en: "Medical devices", vi: "Thiết bị y tế" }
      ],
      mid: {
        title: { zh: "共同資料平台 × 原生 AI 架構", en: "Shared data platform × AI-native architecture", vi: "Nền tảng dữ liệu chung × kiến trúc AI nguyên bản" },
        line: { zh: "資料與情境 · 模型調用 · 角色權限 · 人工覆核 · 稽核", en: "Data and context · model invocation · role permissions · human review · audit", vi: "Dữ liệu và bối cảnh · gọi mô hình · phân quyền · rà soát bởi con người · kiểm toán" }
      },
      items: [
        { id: "his", name: { zh: "智慧 HIS", en: "Smart HIS", vi: "HIS thông minh" }, sub: { zh: "核心轉換", en: "Core modernization", vi: "Chuyển đổi lõi" } },
        { id: "emr", name: { zh: "EMR", en: "EMR", vi: "EMR" }, sub: { zh: "臨床工作", en: "Clinical work", vi: "Công việc lâm sàng" } },
        { id: "icu", name: { zh: "Smart-ICU", en: "Smart-ICU", vi: "Smart-ICU" }, sub: { zh: "重症照護", en: "Critical care", vi: "Hồi sức tích cực" } },
        { id: "mdt", name: { zh: "Smart-MDT", en: "Smart-MDT", vi: "Smart-MDT" }, sub: { zh: "共同照護", en: "Collaborative care", vi: "Chăm sóc phối hợp" } },
        { id: "native", name: { zh: "原生 AI", en: "Native AI", vi: "AI nguyên bản" }, sub: { zh: "架構能力", en: "Architecture capability", vi: "Năng lực kiến trúc" } },
        { id: "ai", name: { zh: "AI 輔助", en: "AI assistance", vi: "AI hỗ trợ" }, sub: { zh: "任務支援", en: "Task support", vi: "Hỗ trợ tác vụ" } }
      ],
      notes: {
        his: { t: { zh: "以成熟核心為基礎，規劃智慧化轉換。", en: "Plan the smart transformation on a mature core.", vi: "Hoạch định chuyển đổi thông minh trên nền lõi trưởng thành." }, d: { zh: "依既有環境選擇整合、分階段替換或新院導入；納入資料驗證與回復計畫。", en: "Choose integration, phased replacement or new-hospital deployment based on the existing environment, with data validation and rollback plans.", vi: "Tùy môi trường hiện có mà chọn tích hợp, thay thế theo giai đoạn hoặc triển khai bệnh viện mới; kèm kế hoạch kiểm chứng dữ liệu và khôi phục." } },
        emr: { t: { zh: "把分散資訊，串成可理解的臨床脈絡。", en: "Turn scattered information into an understandable clinical context.", vi: "Kết nối thông tin phân tán thành bối cảnh lâm sàng dễ hiểu." }, d: { zh: "以病人為中心規劃紀錄、檢查結果與跨專業工作流程。", en: "Plan records, results and cross-disciplinary workflows around the patient.", vi: "Lấy bệnh nhân làm trung tâm để hoạch định hồ sơ, kết quả xét nghiệm và quy trình liên chuyên khoa." } },
        icu: { t: { zh: "連結設備資料、趨勢與照護協作。", en: "Connect device data, trends and care collaboration.", vi: "Kết nối dữ liệu thiết bị, xu hướng và phối hợp chăm sóc." }, d: { zh: "以重症場景規劃監測資訊呈現、事件追蹤與人工覆核。", en: "Design monitoring displays, event tracking and human review for critical-care settings.", vi: "Thiết kế hiển thị thông tin theo dõi, theo dõi sự kiện và rà soát bởi con người cho bối cảnh hồi sức." } },
        mdt: { t: { zh: "從會前準備，走到共同照護計畫。", en: "From pre-meeting preparation to a shared care plan.", vi: "Từ chuẩn bị trước hội chẩn đến kế hoạch chăm sóc chung." }, d: { zh: "連結會診申請、資料整理、多專科討論與後續任務追蹤。", en: "Link consultation requests, data preparation, multidisciplinary discussion and follow-up tasks.", vi: "Kết nối yêu cầu hội chẩn, tổng hợp dữ liệu, thảo luận đa chuyên khoa và theo dõi nhiệm vụ." } },
        native: { t: { zh: "讓 AI 成為系統架構的一部分。", en: "Make AI part of the system architecture.", vi: "Đưa AI trở thành một phần của kiến trúc hệ thống." }, d: { zh: "共同設計資料情境、模型調用、角色權限、人工覆核與稽核追溯。", en: "Co-design data context, model invocation, role permissions, human review and audit traceability.", vi: "Cùng thiết kế bối cảnh dữ liệu, gọi mô hình, phân quyền, rà soát bởi con người và truy vết kiểm toán." } },
        ai: { t: { zh: "讓 AI 協助具體工作，保留專業判斷。", en: "Let AI support specific tasks while professionals keep the judgment.", vi: "Để AI hỗ trợ công việc cụ thể, giữ lại phán đoán chuyên môn." }, d: { zh: "從摘要、影像輔助與交班整理，到會診準備與營運分析，依任務定義範圍。", en: "From summaries, imaging support and handover notes to consultation prep and operational analytics, scoped per task.", vi: "Từ tóm tắt, hỗ trợ hình ảnh và bàn giao ca đến chuẩn bị hội chẩn và phân tích vận hành, xác định phạm vi theo từng tác vụ." } }
      }
    },
    points: [
      { num: "01", title: { zh: "核心轉換，不只介面翻新", en: "Core modernization, not just a new interface", vi: "Chuyển đổi lõi, không chỉ làm mới giao diện" }, text: { zh: "成熟 HIS 核心、在地化與資料移轉一起規劃。", en: "Plan the mature HIS core, localization and data migration together.", vi: "Hoạch định đồng thời lõi HIS trưởng thành, bản địa hóa và chuyển đổi dữ liệu." } },
      { num: "02", title: { zh: "原生 AI，不只加上聊天框", en: "Native AI, not just a chat box", vi: "AI nguyên bản, không chỉ thêm khung chat" }, text: { zh: "把資料、情境、權限與覆核納入系統設計。", en: "Bring data, context, permissions and review into the system design.", vi: "Đưa dữ liệu, bối cảnh, phân quyền và rà soát vào thiết kế hệ thống." } },
      { num: "03", title: { zh: "AI 輔助，支持實際工作", en: "AI assistance that supports real work", vi: "AI hỗ trợ công việc thực tế" }, text: { zh: "依任務呈現來源與限制，保留專業判斷。", en: "Show sources and limits per task, and keep professional judgment.", vi: "Hiển thị nguồn và giới hạn theo từng tác vụ, giữ lại phán đoán chuyên môn." } }
    ]
  },

  /* ---------- 六大核心解決方案 ---------- */
  solutions: {
    eyebrow: { zh: "核心解決方案", en: "Core solutions", vi: "Giải pháp cốt lõi" },
    title: { zh: "六大解決方案，從核心轉換到智慧應用。", en: "Six solutions, from core modernization to intelligent applications.", vi: "Sáu giải pháp, từ chuyển đổi lõi đến ứng dụng thông minh." },
    lead: { zh: "以 HIS 轉換為核心升級入口，以 EMR 與專科平台承接工作流程，透過原生 AI 架構與 AI 輔助延伸智慧能力。", en: "HIS modernization is the entry point for the core upgrade; EMR and specialty platforms carry the workflows; native AI architecture and AI assistance extend intelligent capability.", vi: "Chuyển đổi HIS là cửa ngõ nâng cấp lõi; EMR và các nền tảng chuyên khoa tiếp nhận quy trình; kiến trúc AI nguyên bản và AI hỗ trợ mở rộng năng lực thông minh." },
    more: { zh: "了解方案內容", en: "View this solution", vi: "Xem nội dung giải pháp" },
    band: {
      title: { zh: "六個方案入口，一套相互連結的能力架構。", en: "Six entry points, one connected capability architecture.", vi: "Sáu cửa ngõ, một kiến trúc năng lực liên kết." },
      text: { zh: "原生 AI 是可橫跨 HIS、EMR、ICU、MDT 的架構能力；AI 輔助是依需求選用的具體任務，並非六套必須分別採購的孤立系統。", en: "Native AI is an architecture capability that spans HIS, EMR, ICU and MDT; AI assistance is a set of specific tasks chosen as needed. They are not six isolated systems to be purchased separately.", vi: "AI nguyên bản là năng lực kiến trúc xuyên suốt HIS, EMR, ICU, MDT; AI hỗ trợ là các tác vụ cụ thể chọn theo nhu cầu, không phải sáu hệ thống riêng lẻ phải mua sắm riêng." },
      cta: { zh: "查看能力關係", en: "See how they relate", vi: "Xem quan hệ năng lực" }
    },
    cta: { zh: "討論導入需求", en: "Discuss your needs", vi: "Thảo luận nhu cầu triển khai" },
    items: [
      { id: "his", num: "01", tag: "HIS MODERNIZATION", page: "solution-his.html",
        name: { zh: "新一代智慧化 HIS 轉換", en: "Next-Generation Smart HIS Modernization", vi: "Chuyển đổi HIS thông minh thế hệ mới" },
        position: { zh: "核心系統轉換與升級", en: "Core system modernization and upgrade", vi: "Chuyển đổi và nâng cấp hệ thống lõi" },
        desc: { zh: "以成熟 HIS 核心為基礎，結合流程重整、資料移轉與在地化，規劃可驗證、可分階段推進的全院升級。", en: "Built on a mature HIS core, combining process redesign, data migration and localization to plan a verifiable, phased hospital-wide upgrade.", vi: "Dựa trên lõi HIS trưởng thành, kết hợp tái cấu trúc quy trình, chuyển đổi dữ liệu và bản địa hóa để hoạch định nâng cấp toàn viện có thể kiểm chứng và tiến hành theo giai đoạn." },
        headline: { zh: "從成熟核心，走向智慧化醫院。", en: "From a mature core to the smart hospital.", vi: "Từ lõi trưởng thành đến bệnh viện thông minh." },
        intro: { zh: "以成熟 HIS 產品為基礎，結合醫盾平台、流程改造與在地化；不是從零重寫全部核心，也不只是更換操作介面。", en: "Based on a mature HIS product, combined with the AegisMed platform, process redesign and localization. Not a rewrite of the entire core from scratch, and not just a new user interface.", vi: "Dựa trên sản phẩm HIS trưởng thành, kết hợp nền tảng AegisMed, cải tiến quy trình và bản địa hóa; không viết lại toàn bộ lõi từ đầu, cũng không chỉ thay giao diện." },
        figure: {
          type: "stack",
          label: { zh: "轉換路徑", en: "Modernization path", vi: "Lộ trình chuyển đổi" },
          rows: [
            { label: { zh: "起點", en: "Starting point", vi: "Điểm xuất phát" }, cells: [
              { zh: "既有 HIS", en: "Existing HIS", vi: "HIS hiện có" },
              { zh: "院內系統", en: "Hospital systems", vi: "Hệ thống trong viện" },
              { zh: "歷史資料", en: "Historical data", vi: "Dữ liệu lịch sử" } ] },
            { arrow: "↓", label: { zh: "三條規劃路徑", en: "Three planning paths", vi: "Ba lộ trình hoạch định" }, cells: [
              { zh: "整合升級", en: "Integrate and upgrade", vi: "Tích hợp nâng cấp" },
              { zh: "分階段替換", en: "Phased replacement", vi: "Thay thế theo giai đoạn" },
              { zh: "新院導入", en: "New-hospital deployment", vi: "Triển khai bệnh viện mới" } ] },
            { arrow: "↓", accent: true, label: { zh: "核心", en: "Core", vi: "Lõi" }, cells: [
              { zh: "成熟 HIS 核心 × 流程重整 × 在地化", en: "Mature HIS core × process redesign × localization", vi: "Lõi HIS trưởng thành × tái cấu trúc quy trình × bản địa hóa" } ] },
            { arrow: "↓", label: { zh: "延伸", en: "Extensions", vi: "Mở rộng" }, cells: [
              { zh: "EMR Platform", en: "EMR Platform", vi: "EMR Platform" },
              { zh: "Smart-ICU", en: "Smart-ICU", vi: "Smart-ICU" },
              { zh: "Smart-MDT", en: "Smart-MDT", vi: "Smart-MDT" },
              { zh: "原生 AI", en: "Native AI", vi: "AI nguyên bản" } ] }
          ],
          foot: { zh: "資料移轉驗證 · 平行試行 · 切換演練 · 回復條件", en: "Data migration validation · parallel run · cutover rehearsal · rollback conditions", vi: "Kiểm chứng chuyển đổi dữ liệu · chạy song song · diễn tập chuyển đổi · điều kiện khôi phục" }
        },
        points: [
          { t: { zh: "成熟核心與在地化", en: "Mature core and localization", vi: "Lõi trưởng thành và bản địa hóa" }, d: { zh: "依授權評估門急住、ADT、醫囑、藥事、費用與庫存等模組；確認當地語言、支付制度與作業需求。", en: "Evaluate outpatient, emergency, inpatient, ADT, orders, pharmacy, billing and inventory modules by license; confirm local language, payment system and operational needs.", vi: "Đánh giá theo giấy phép các phân hệ ngoại trú, cấp cứu, nội trú, ADT, y lệnh, dược, viện phí và kho; xác nhận ngôn ngữ, chế độ thanh toán và nhu cầu nghiệp vụ địa phương." } },
          { t: { zh: "資料移轉與驗證", en: "Data migration and validation", vi: "Chuyển đổi và kiểm chứng dữ liệu" }, d: { zh: "盤點主檔、歷史資料與病人識別；安排映射、轉檔、抽驗、對帳與稽核，確認移轉與歷史查詢範圍。", en: "Inventory master data, historical data and patient identity; plan mapping, conversion, sampling, reconciliation and audit; define the scope of migration and historical lookup.", vi: "Rà soát dữ liệu danh mục, dữ liệu lịch sử và định danh bệnh nhân; lập kế hoạch ánh xạ, chuyển đổi, lấy mẫu kiểm tra, đối soát và kiểm toán; xác định phạm vi chuyển đổi và tra cứu lịch sử." } },
          { t: { zh: "臨床平台與智慧升級", en: "Clinical platform and intelligent upgrade", vi: "Nền tảng lâm sàng và nâng cấp thông minh" }, d: { zh: "串接 EMR、Smart-ICU、Smart-MDT 與 AI 能力；釐清資料寫入、主系統及版本責任。", en: "Connect EMR, Smart-ICU, Smart-MDT and AI capabilities; clarify data write-back, system of record and version responsibilities.", vi: "Kết nối EMR, Smart-ICU, Smart-MDT và năng lực AI; làm rõ trách nhiệm ghi dữ liệu, hệ thống chủ và phiên bản." } },
          { t: { zh: "切換、回復與維運", en: "Cutover, rollback and operations", vi: "Chuyển đổi, khôi phục và vận hành" }, d: { zh: "設定平行試行、切換演練、回復條件、訓練、支援與驗收，不承諾未經驗證的零停機。", en: "Set up parallel runs, cutover rehearsals, rollback conditions, training, support and acceptance; no unverified zero-downtime promises.", vi: "Thiết lập chạy song song, diễn tập chuyển đổi, điều kiện khôi phục, đào tạo, hỗ trợ và nghiệm thu; không cam kết không gián đoạn khi chưa kiểm chứng." } }
        ],
        extra: [
          { t: { zh: "三種規劃路徑", en: "Three planning paths", vi: "Ba lộ trình hoạch định" }, d: { zh: "既有 HIS 整合升級、成熟新核心分階段替換，以及新院採成熟核心＋AI 原生設計。依系統條件與院方需求選擇，不預設全面一次汰換。", en: "Integrate and upgrade the existing HIS, replace with a mature new core in phases, or build a new hospital on a mature core with AI-native design. Chosen by system conditions and hospital needs; no default full replacement.", vi: "Tích hợp nâng cấp HIS hiện có, thay thế theo giai đoạn bằng lõi mới trưởng thành, hoặc bệnh viện mới dùng lõi trưởng thành kết hợp thiết kế AI nguyên bản. Lựa chọn theo điều kiện hệ thống và nhu cầu bệnh viện, không mặc định thay toàn bộ một lần." } },
          { t: { zh: "合作分工", en: "Division of responsibilities", vi: "Phân công hợp tác" }, d: { zh: "成熟核心供應商提供產品、授權與核心支援；醫盾規劃整體架構、臨床平台與 AI 整合；在地夥伴負責約定的在地化、部署與維運。實際分工以合約為準。", en: "The mature-core vendor provides the product, licensing and core support; AegisMed plans the overall architecture, clinical platform and AI integration; local partners handle agreed localization, deployment and operations. Actual roles follow the contract.", vi: "Nhà cung cấp lõi trưởng thành cung cấp sản phẩm, giấy phép và hỗ trợ lõi; AegisMed hoạch định kiến trúc tổng thể, nền tảng lâm sàng và tích hợp AI; đối tác địa phương phụ trách bản địa hóa, triển khai và vận hành theo thỏa thuận. Phân công thực tế theo hợp đồng." } },
          { t: { zh: "獨立的範圍與驗收", en: "Independent scope and acceptance", vi: "Phạm vi và nghiệm thu độc lập" }, d: { zh: "HIS 轉換以獨立的預算、範圍與驗收標準推進，與既有的 EMR 或 Smart-ICU 專案分開管理；每個專案的交付內容與責任都清楚界定。", en: "HIS modernization proceeds with its own budget, scope and acceptance criteria, managed separately from existing EMR or Smart-ICU projects, so each project's deliverables and responsibilities are clearly defined.", vi: "Chuyển đổi HIS được triển khai với ngân sách, phạm vi và tiêu chí nghiệm thu riêng, quản lý tách biệt với các dự án EMR hoặc Smart-ICU hiện có; nội dung bàn giao và trách nhiệm của từng dự án được xác định rõ ràng." } }
        ]
      },
      { id: "emr", num: "02", tag: "CLINICAL WORKSPACE", page: "solution-emr.html",
        name: { zh: "EMR Platform", en: "EMR Platform", vi: "EMR Platform" },
        position: { zh: "電子病歷與臨床工作平台", en: "Electronic medical record and clinical workspace", vi: "Bệnh án điện tử và nền tảng làm việc lâm sàng" },
        desc: { zh: "以病人為中心，串連醫療紀錄、護理作業、檢驗影像與臨床工作流程，建立跨專業協作的資訊基礎。", en: "Patient-centered: connects medical records, nursing work, lab and imaging and clinical workflows to form the information base for cross-disciplinary collaboration.", vi: "Lấy bệnh nhân làm trung tâm, kết nối hồ sơ y tế, công việc điều dưỡng, xét nghiệm hình ảnh và quy trình lâm sàng, tạo nền tảng thông tin cho phối hợp liên chuyên khoa." },
        headline: { zh: "讓病歷成為共同工作的臨床基礎。", en: "Make the record the shared foundation of clinical work.", vi: "Để bệnh án trở thành nền tảng lâm sàng chung." },
        intro: { zh: "病歷資訊分散在不同系統、同一筆資料重複登錄，是臨床團隊每天面對的負擔。EMR Platform 以病人為中心整理紀錄、檢查結果與工作流程，讓醫師、護理與各專業在同一個臨床基礎上協作。", en: "Records scattered across systems and data entered more than once are a daily burden for clinical teams. EMR Platform organizes records, results and workflows around the patient, so physicians, nurses and allied professionals work from one shared clinical foundation.", vi: "Thông tin bệnh án phân tán ở nhiều hệ thống và cùng một dữ liệu phải nhập nhiều lần là gánh nặng hằng ngày của đội ngũ lâm sàng. EMR Platform sắp xếp hồ sơ, kết quả xét nghiệm và quy trình xoay quanh bệnh nhân, để bác sĩ, điều dưỡng và các chuyên ngành phối hợp trên cùng một nền tảng lâm sàng." },
        figure: {
          type: "hub",
          label: { zh: "以病人為中心", en: "Patient-centered", vi: "Lấy bệnh nhân làm trung tâm" },
          center: { zh: "病人", en: "Patient", vi: "Bệnh nhân" },
          nodes: [
            { zh: "醫療紀錄", en: "Medical records", vi: "Hồ sơ y tế" },
            { zh: "護理紀錄", en: "Nursing records", vi: "Hồ sơ điều dưỡng" },
            { zh: "檢驗結果", en: "Lab results", vi: "Kết quả xét nghiệm" },
            { zh: "影像報告", en: "Imaging reports", vi: "Báo cáo hình ảnh" },
            { zh: "簽核與角色", en: "Sign-off and roles", vi: "Ký duyệt và vai trò" },
            { zh: "交班", en: "Handover", vi: "Bàn giao ca" },
            { zh: "檢視與追蹤", en: "Review and follow-up", vi: "Xem xét và theo dõi" },
            { zh: "跨專業協作", en: "Cross-disciplinary collaboration", vi: "Phối hợp liên chuyên khoa" }
          ],
          foot: { zh: "同一個臨床基礎，供 Smart-ICU、Smart-MDT 與 AI 能力共用", en: "One clinical foundation shared by Smart-ICU, Smart-MDT and AI capabilities", vi: "Một nền tảng lâm sàng dùng chung cho Smart-ICU, Smart-MDT và năng lực AI" }
        },
        points: [
          { t: { zh: "臨床與護理紀錄", en: "Clinical and nursing records", vi: "Hồ sơ lâm sàng và điều dưỡng" }, d: { zh: "依紀錄類型規劃結構化欄位與自由文字，搭配簽核流程與角色分工，每一筆紀錄的責任與時序都清楚可查。", en: "Structured fields and free text are planned by record type, with sign-off flows and role assignments, so the responsibility and timing of every entry are traceable.", vi: "Hoạch định trường dữ liệu có cấu trúc và văn bản tự do theo từng loại hồ sơ, kết hợp quy trình ký duyệt và phân vai, để trách nhiệm và thời điểm của từng bản ghi đều có thể tra cứu." } },
          { t: { zh: "檢驗與影像資訊", en: "Lab and imaging information", vi: "Thông tin xét nghiệm và hình ảnh" }, d: { zh: "整合檢驗結果與影像報告，標示資料來源與更新時間，讓檢視者清楚資料從哪裡來、何時更新。", en: "Lab results and imaging reports are integrated with source and update-time labels, so viewers know where each item came from and when it was last updated.", vi: "Tích hợp kết quả xét nghiệm và báo cáo hình ảnh, ghi rõ nguồn dữ liệu và thời điểm cập nhật, để người xem biết dữ liệu đến từ đâu và được cập nhật khi nào." } },
          { t: { zh: "臨床工作流程", en: "Clinical workflows", vi: "Quy trình lâm sàng" }, d: { zh: "紀錄、交班、檢視與追蹤在同一個工作面完成，減少切換系統與重複輸入。", en: "Documentation, handover, review and follow-up are completed in one workspace, reducing system switching and duplicate entry.", vi: "Ghi chép, bàn giao ca, xem xét và theo dõi được thực hiện trên cùng một không gian làm việc, giảm chuyển đổi hệ thống và nhập liệu trùng lặp." } },
          { t: { zh: "部署與支援", en: "Deployment and support", vi: "Triển khai và hỗ trợ" }, d: { zh: "提供院內部署與既有系統介接的選項，依院方環境確認介接前提、版本範圍與支援服務。", en: "On-premise deployment and integration with existing systems are both available; integration prerequisites, version scope and support services are confirmed for each hospital's environment.", vi: "Cung cấp lựa chọn triển khai tại viện và tích hợp với hệ thống hiện có; điều kiện tích hợp, phạm vi phiên bản và dịch vụ hỗ trợ được xác nhận theo môi trường của từng bệnh viện." } }
        ],
        extra: [
          { t: { zh: "介接能力", en: "Integration capability", vi: "Khả năng tích hợp" }, d: { zh: "可與成熟 HIS 核心、檢驗與影像系統共用資料，並為 Smart-ICU 與 Smart-MDT 提供病人脈絡；介接範圍依院方系統條件逐項確認。", en: "Shares data with the mature HIS core and lab and imaging systems, and provides patient context to Smart-ICU and Smart-MDT. Integration scope is confirmed item by item against the hospital's systems.", vi: "Chia sẻ dữ liệu với lõi HIS trưởng thành, hệ thống xét nghiệm và hình ảnh, đồng thời cung cấp bối cảnh bệnh nhân cho Smart-ICU và Smart-MDT; phạm vi tích hợp được xác nhận từng mục theo điều kiện hệ thống của bệnh viện." } },
          { t: { zh: "與其他方案的關係", en: "Relationship to the other solutions", vi: "Quan hệ với các giải pháp khác" }, d: { zh: "EMR Platform 是臨床工作的共同基礎：Smart-ICU 與 Smart-MDT 在這個基礎上延伸專科流程，原生 AI 與 AI 輔助則依授權取得病人脈絡與紀錄。", en: "EMR Platform is the shared foundation of clinical work: Smart-ICU and Smart-MDT extend specialty workflows on top of it, while native AI and AI assistance access patient context and records under authorization.", vi: "EMR Platform là nền tảng chung của công việc lâm sàng: Smart-ICU và Smart-MDT mở rộng quy trình chuyên khoa trên nền tảng này, còn AI nguyên bản và AI hỗ trợ truy cập bối cảnh bệnh nhân và hồ sơ theo ủy quyền." } }
        ]
      },
      { id: "icu", num: "03", tag: "CRITICAL CARE", page: "solution-smart-icu.html",
        name: { zh: "Smart-ICU", en: "Smart-ICU", vi: "Smart-ICU" },
        position: { zh: "智慧重症與病房照護", en: "Smart critical and ward care", vi: "Hồi sức và chăm sóc phòng bệnh thông minh" },
        desc: { zh: "整合床邊設備、生命徵象、照護紀錄與趨勢，規劃風險提示、人工覆核及事件追蹤的照護流程。", en: "Integrates bedside devices, vital signs, care records and trends to plan care workflows with risk alerts, human review and event tracking.", vi: "Tích hợp thiết bị đầu giường, sinh hiệu, hồ sơ chăm sóc và xu hướng; hoạch định quy trình chăm sóc với cảnh báo nguy cơ, rà soát bởi con người và theo dõi sự kiện." },
        headline: { zh: "讓監測資訊進入照護流程。", en: "Bring monitoring information into the care workflow.", vi: "Đưa thông tin theo dõi vào quy trình chăm sóc." },
        intro: { zh: "重症單位的資訊來自床邊設備、生命徵象、照護紀錄與檢驗結果。Smart-ICU 以一個床位與照護團隊的工作為主線，把這些資訊整合為可檢視的趨勢，讓風險提示經過人工覆核後，進入通知、處理與紀錄的照護流程。", en: "Critical-care information comes from bedside devices, vital signs, care records and lab results. Smart-ICU follows the work of one bed and its care team, integrating this information into reviewable trends so that risk alerts, after human review, flow into notification, handling and documentation.", vi: "Thông tin trong đơn vị hồi sức đến từ thiết bị đầu giường, sinh hiệu, hồ sơ chăm sóc và kết quả xét nghiệm. Smart-ICU lấy công việc của một giường bệnh và đội chăm sóc làm trục chính, tích hợp các thông tin này thành xu hướng có thể xem xét, để cảnh báo nguy cơ sau khi được con người rà soát sẽ đi vào quy trình thông báo, xử lý và ghi nhận." },
        figure: {
          type: "steps",
          label: { zh: "照護流程", en: "Care workflow", vi: "Quy trình chăm sóc" },
          steps: [
            { t: { zh: "床邊設備與生命徵象", en: "Bedside devices and vital signs", vi: "Thiết bị đầu giường và sinh hiệu" }, d: { zh: "監視器、設備資料、照護紀錄", en: "Monitors, device data, care records", vi: "Màn hình theo dõi, dữ liệu thiết bị, hồ sơ chăm sóc" } },
            { t: { zh: "資料整合與驗證", en: "Data integration and validation", vi: "Tích hợp và kiểm chứng dữ liệu" }, d: { zh: "設備與通訊協定逐一驗證", en: "Each device and protocol validated", vi: "Kiểm chứng từng thiết bị và giao thức" } },
            { t: { zh: "趨勢與病人脈絡", en: "Trends and patient context", vi: "Xu hướng và bối cảnh bệnh nhân" }, d: { zh: "時間軸、來源標示、紀錄對照", en: "Timeline, source labels, record cross-reference", vi: "Dòng thời gian, nhãn nguồn, đối chiếu hồ sơ" } },
            { t: { zh: "風險提示", en: "Risk alerts", vi: "Cảnh báo nguy cơ" }, d: { zh: "臨床規則 · 評估量表 · AI 模型", en: "Clinical rules · assessment scores · AI models", vi: "Quy tắc lâm sàng · thang điểm · mô hình AI" } },
            { accent: true, t: { zh: "人工覆核", en: "Human review", vi: "Rà soát bởi con người" }, d: { zh: "醫護確認後才進入處置流程", en: "Enters handling only after clinician confirmation", vi: "Chỉ vào quy trình xử lý sau khi nhân viên y tế xác nhận" } },
            { t: { zh: "通知、處理與紀錄", en: "Notification, handling and documentation", vi: "Thông báo, xử lý và ghi nhận" }, d: { zh: "負責人、狀態與完整歷程", en: "Owner, status and full history", vi: "Người phụ trách, trạng thái và toàn bộ quá trình" } }
          ],
          foot: { zh: "臨床決策由醫護負責；設備資料與紀錄可供 EMR Platform 與原生 AI 架構依授權使用", en: "Clinical decisions remain with clinicians; device data and records are available to EMR Platform and the native AI architecture under authorization", vi: "Quyết định lâm sàng do nhân viên y tế chịu trách nhiệm; dữ liệu thiết bị và hồ sơ có thể được EMR Platform và kiến trúc AI nguyên bản sử dụng theo ủy quyền" }
        },
        points: [
          { t: { zh: "設備資料整合", en: "Device data integration", vi: "Tích hợp dữ liệu thiết bị" }, d: { zh: "介接床邊設備與生命徵象資料，導入前逐一驗證設備與通訊協定；尚未驗證的設備先納入評估清單，不預設可直接連線。", en: "Bedside device and vital-sign data are integrated, with each device and protocol validated before go-live; devices not yet validated go on an assessment list rather than being assumed to connect.", vi: "Tích hợp dữ liệu thiết bị đầu giường và sinh hiệu; từng thiết bị và giao thức được kiểm chứng trước khi triển khai, thiết bị chưa kiểm chứng được đưa vào danh sách đánh giá thay vì mặc định có thể kết nối." } },
          { t: { zh: "趨勢與病人脈絡", en: "Trends and patient context", vi: "Xu hướng và bối cảnh bệnh nhân" }, d: { zh: "以時間軸呈現生命徵象與處置，標示資料來源並對照照護紀錄；資料缺漏或品質異常時即時提示。", en: "Vital signs and interventions are shown on a timeline with source labels and cross-referenced to care records; gaps or quality issues in the data are flagged.", vi: "Trình bày sinh hiệu và can thiệp trên dòng thời gian, ghi rõ nguồn dữ liệu và đối chiếu với hồ sơ chăm sóc; dữ liệu thiếu hoặc chất lượng bất thường được nhắc ngay." } },
          { t: { zh: "風險提示與覆核", en: "Risk alerts and review", vi: "Cảnh báo nguy cơ và rà soát" }, d: { zh: "提示分為臨床規則、評估量表與 AI 模型三類，各自標示適用族群與限制；提示經醫護覆核後才進入處置流程。", en: "Alerts are categorized as clinical rules, assessment scores or AI models, each labeled with its applicable population and limits; an alert enters the handling workflow only after clinician review.", vi: "Cảnh báo được chia thành ba loại: quy tắc lâm sàng, thang điểm đánh giá và mô hình AI, mỗi loại ghi rõ nhóm áp dụng và giới hạn; cảnh báo chỉ đi vào quy trình xử lý sau khi nhân viên y tế rà soát." } },
          { t: { zh: "照護事件追蹤", en: "Care event tracking", vi: "Theo dõi sự kiện chăm sóc" }, d: { zh: "從通知、確認、處理到紀錄，每個事件都有負責人與狀態，完整歷程可回溯。", en: "From notification and acknowledgment to handling and documentation, every event has an owner and a status, and the full history can be traced.", vi: "Từ thông báo, xác nhận, xử lý đến ghi nhận, mỗi sự kiện đều có người phụ trách và trạng thái, toàn bộ quá trình có thể truy vết." } }
        ],
        extra: [
          { t: { zh: "成效的揭露方式", en: "How outcomes are reported", vi: "Cách công bố hiệu quả" }, d: { zh: "Smart-ICU 的成效以實際導入場域的版本、場景、樣本與衡量方式為準，公開時一併說明，不以單一數字代表整體效益。", en: "Smart-ICU outcomes are reported with the version, setting, sample and measurement method of the actual deployment, published together, rather than as a single headline figure.", vi: "Hiệu quả của Smart-ICU được công bố kèm phiên bản, bối cảnh, mẫu và phương pháp đo của nơi triển khai thực tế, không dùng một con số đơn lẻ để đại diện cho toàn bộ hiệu quả." } },
          { t: { zh: "介接能力", en: "Integration capability", vi: "Khả năng tích hợp" }, d: { zh: "與 EMR Platform 共用病人脈絡與照護紀錄；整合後的設備資料可供原生 AI 架構依授權使用，並可依約定回寫至院內系統。", en: "Shares patient context and care records with EMR Platform; integrated device data can be used by the native AI architecture under authorization and written back to hospital systems as agreed.", vi: "Dùng chung bối cảnh bệnh nhân và hồ sơ chăm sóc với EMR Platform; dữ liệu thiết bị sau tích hợp có thể được kiến trúc AI nguyên bản sử dụng theo ủy quyền và ghi ngược về hệ thống trong viện theo thỏa thuận." } }
        ]
      },
      { id: "mdt", num: "04", tag: "COLLABORATIVE CARE", page: "solution-smart-mdt.html",
        name: { zh: "Smart-MDT", en: "Smart-MDT", vi: "Smart-MDT" },
        position: { zh: "會診與多專業共同照護", en: "Consultation and multidisciplinary care", vi: "Hội chẩn và chăm sóc đa chuyên khoa" },
        desc: { zh: "串連一般住院會診、Pre-MDT、跨科討論與照護計畫，讓共同決策延伸至任務執行與追蹤。", en: "Connects inpatient consultations, pre-MDT preparation, cross-specialty discussion and care plans so shared decisions extend into task execution and follow-up.", vi: "Kết nối hội chẩn nội trú thông thường, Pre-MDT, thảo luận liên khoa và kế hoạch chăm sóc, để quyết định chung đi tới thực hiện và theo dõi nhiệm vụ." },
        headline: { zh: "從會診申請到共同照護計畫。", en: "From consultation request to shared care plan.", vi: "Từ yêu cầu hội chẩn đến kế hoạch chăm sóc chung." },
        intro: { zh: "從一般住院會診到複雜疾病的多專科討論，Smart-MDT 串連申請、會前準備、討論與共同照護計畫，讓決策一路延伸到任務執行與追蹤，而不只是一場視訊會議。", en: "From routine inpatient consultations to multidisciplinary discussion of complex disease, Smart-MDT connects the request, pre-meeting preparation, discussion and shared care plan, carrying decisions through to task execution and follow-up rather than ending with a video call.", vi: "Từ hội chẩn nội trú thông thường đến thảo luận đa chuyên khoa cho bệnh phức tạp, Smart-MDT kết nối yêu cầu, chuẩn bị trước hội chẩn, thảo luận và kế hoạch chăm sóc chung, đưa quyết định đi tới thực hiện và theo dõi nhiệm vụ, chứ không chỉ là một cuộc họp trực tuyến." },
        figure: {
          type: "steps",
          label: { zh: "會診流程", en: "Consultation workflow", vi: "Quy trình hội chẩn" },
          steps: [
            { t: { zh: "會診申請", en: "Consultation request", vi: "Yêu cầu hội chẩn" }, d: { zh: "一般住院會診或 MDT 需求", en: "Inpatient consultation or MDT need", vi: "Hội chẩn nội trú hoặc nhu cầu MDT" } },
            { t: { zh: "分派與回覆", en: "Assignment and reply", vi: "Phân công và phản hồi" }, d: { zh: "時效管理、狀態追蹤", en: "Turnaround management, status tracking", vi: "Quản lý thời hạn, theo dõi trạng thái" } },
            { t: { zh: "Pre-MDT 會前準備", en: "Pre-MDT preparation", vi: "Chuẩn bị Pre-MDT" }, d: { zh: "病程、影像、病理、缺件標示", en: "Course, imaging, pathology, missing items", vi: "Diễn tiến, hình ảnh, giải phẫu bệnh, phần còn thiếu" } },
            { t: { zh: "多專科討論", en: "Multidisciplinary discussion", vi: "Thảo luận đa chuyên khoa" }, d: { zh: "各科意見、實證支援", en: "Specialty opinions, evidence support", vi: "Ý kiến các khoa, hỗ trợ bằng chứng" } },
            { accent: true, t: { zh: "共同照護計畫", en: "Shared care plan", vi: "Kế hoạch chăm sóc chung" }, d: { zh: "共同決定、紀錄與負責人", en: "Joint decision, record and owner", vi: "Quyết định chung, ghi nhận và người phụ trách" } },
            { t: { zh: "任務執行與追蹤", en: "Task execution and follow-up", vi: "Thực hiện và theo dõi nhiệm vụ" }, d: { zh: "分工、回報、再討論、結案", en: "Assignment, reporting, re-discussion, closure", vi: "Phân công, báo cáo, thảo luận lại, kết thúc" } }
          ],
          foot: { zh: "每個節點都留下紀錄與負責人；病歷、影像與病理資訊與 EMR Platform 共用", en: "Every step keeps a record and an owner; records, imaging and pathology are shared with EMR Platform", vi: "Mỗi bước đều có ghi nhận và người phụ trách; bệnh án, hình ảnh và giải phẫu bệnh dùng chung với EMR Platform" }
        },
        points: [
          { t: { zh: "一般住院會診", en: "Routine inpatient consultation", vi: "Hội chẩn nội trú thông thường" }, d: { zh: "會診申請、分派、回覆、時效管理與結案在同一流程完成，各科的待辦與回覆狀態一目了然。", en: "Consultation request, assignment, reply, turnaround management and closure run in one workflow, with each department's pending items and reply status visible at a glance.", vi: "Yêu cầu hội chẩn, phân công, phản hồi, quản lý thời hạn và kết thúc được thực hiện trong cùng một quy trình; việc cần làm và trạng thái phản hồi của từng khoa hiển thị rõ ràng." } },
          { t: { zh: "Pre-MDT 會前準備", en: "Pre-MDT preparation", vi: "Chuẩn bị Pre-MDT" }, d: { zh: "彙整病程、影像與病理資料，標示缺件與待討論問題，讓會議時間用在判斷，而不是找資料。", en: "Course, imaging and pathology are compiled, with missing items and discussion questions flagged, so meeting time goes to judgment rather than searching for data.", vi: "Tổng hợp diễn tiến bệnh, hình ảnh và giải phẫu bệnh, đánh dấu phần còn thiếu và câu hỏi cần thảo luận, để thời gian họp dành cho phán đoán thay vì tìm dữ liệu." } },
          { t: { zh: "MDT 與實證支援", en: "MDT and evidence support", vi: "MDT và hỗ trợ bằng chứng" }, d: { zh: "記錄各專科意見與共同決定的照護計畫；PICO 問題整理與文獻來源呈現依產品版本提供，讓討論有依據可循。", en: "Each specialty's opinion and the jointly agreed care plan are recorded; PICO question framing and literature-source presentation are provided by product version, so discussion rests on evidence.", vi: "Ghi nhận ý kiến từng chuyên khoa và kế hoạch chăm sóc được quyết định chung; tổng hợp câu hỏi PICO và trình bày nguồn tài liệu được cung cấp theo phiên bản sản phẩm, để thảo luận có căn cứ." } },
          { t: { zh: "照護任務與追蹤", en: "Care tasks and follow-up", vi: "Nhiệm vụ chăm sóc và theo dõi" }, d: { zh: "共同計畫拆解為執行分工，回報結果、安排再討論並設定追蹤節點，直到結案。", en: "The shared plan is broken into assigned tasks; results are reported, re-discussion scheduled and follow-up checkpoints set until closure.", vi: "Kế hoạch chung được chia thành phân công thực hiện; báo cáo kết quả, sắp xếp thảo luận lại và đặt các mốc theo dõi cho đến khi kết thúc." } }
        ],
        extra: [
          { t: { zh: "一條完整的流程", en: "One complete workflow", vi: "Một quy trình hoàn chỉnh" }, d: { zh: "以一個會診需求為起點：申請、分派、會前準備、多專科討論、共同計畫、任務執行到追蹤結案，每個節點都留下紀錄與負責人。", en: "Starting from one consultation request: request, assignment, preparation, multidisciplinary discussion, shared plan, task execution and follow-up closure, with a record and an owner at every step.", vi: "Bắt đầu từ một yêu cầu hội chẩn: yêu cầu, phân công, chuẩn bị, thảo luận đa chuyên khoa, kế hoạch chung, thực hiện nhiệm vụ đến theo dõi kết thúc; mỗi bước đều có ghi nhận và người phụ trách." } },
          { t: { zh: "介接能力", en: "Integration capability", vi: "Khả năng tích hợp" }, d: { zh: "與 EMR Platform 共用病歷、影像與病理資訊；會前摘要可由 AI 輔助產生草稿，交由醫護確認後使用。", en: "Shares records, imaging and pathology with EMR Platform; pre-meeting summaries can be drafted by AI assistance and used after clinician confirmation.", vi: "Dùng chung bệnh án, hình ảnh và giải phẫu bệnh với EMR Platform; tóm tắt trước hội chẩn có thể do AI hỗ trợ soạn bản nháp và được sử dụng sau khi nhân viên y tế xác nhận." } }
        ]
      },
      { id: "native", num: "05", tag: "AI-NATIVE ARCHITECTURE", page: "solution-native-ai.html",
        name: { zh: "原生 AI", en: "Native AI", vi: "AI nguyên bản" },
        position: { zh: "內建於系統的智慧架構", en: "Intelligence built into the system architecture", vi: "Kiến trúc thông minh tích hợp sẵn trong hệ thống" },
        desc: { zh: "從系統設計開始，將 AI 納入資料、使用情境與工作流程，統一規劃模型調用、授權、覆核與追溯。", en: "From system design onward, AI is built into data, use context and workflows, with unified planning of model invocation, authorization, review and traceability.", vi: "Ngay từ thiết kế hệ thống, đưa AI vào dữ liệu, bối cảnh sử dụng và quy trình; hoạch định thống nhất việc gọi mô hình, ủy quyền, rà soát và truy vết." },
        headline: { zh: "讓智慧能力成為系統的一部分。", en: "Make intelligence part of the system.", vi: "Để năng lực thông minh trở thành một phần của hệ thống." },
        intro: { zh: "原生 AI 是系統架構層的能力：在設計資料、角色與工作流程的同時納入 AI，而不是事後外掛一個聊天介面。模型調用、授權、人工覆核與稽核追溯在同一套架構中統一規劃。", en: "Native AI is a capability at the architecture level: AI is designed in together with data, roles and workflows rather than bolted on later as a chat interface. Model invocation, authorization, human review and audit traceability are planned within one architecture.", vi: "AI nguyên bản là năng lực ở tầng kiến trúc hệ thống: đưa AI vào ngay khi thiết kế dữ liệu, vai trò và quy trình, thay vì gắn thêm một giao diện chat sau này. Gọi mô hình, ủy quyền, rà soát bởi con người và truy vết kiểm toán được hoạch định thống nhất trong cùng một kiến trúc." },
        figure: {
          type: "stack",
          label: { zh: "架構關係", en: "Architecture", vi: "Kiến trúc" },
          rows: [
            { label: { zh: "工作平台", en: "Work platforms", vi: "Nền tảng làm việc" }, cells: [
              { zh: "智慧 HIS", en: "Smart HIS", vi: "HIS thông minh" },
              { zh: "EMR Platform", en: "EMR Platform", vi: "EMR Platform" },
              { zh: "Smart-ICU", en: "Smart-ICU", vi: "Smart-ICU" },
              { zh: "Smart-MDT", en: "Smart-MDT", vi: "Smart-MDT" } ] },
            { arrow: "↕", accent: true, label: { zh: "原生 AI 架構", en: "Native AI architecture", vi: "Kiến trúc AI nguyên bản" }, cells: [
              { zh: "資料與情境", en: "Data and context", vi: "Dữ liệu và bối cảnh" },
              { zh: "模型與工具調用", en: "Model and tool invocation", vi: "Gọi mô hình và công cụ" },
              { zh: "角色權限", en: "Role permissions", vi: "Phân quyền vai trò" },
              { zh: "人工覆核", en: "Human review", vi: "Rà soát bởi con người" },
              { zh: "稽核追溯", en: "Audit traceability", vi: "Truy vết kiểm toán" } ] },
            { arrow: "↕", label: { zh: "基礎", en: "Foundation", vi: "Nền tảng" }, cells: [
              { zh: "成熟 HIS 核心", en: "Mature HIS core", vi: "Lõi HIS trưởng thành" },
              { zh: "共同資料平台", en: "Shared data platform", vi: "Nền tảng dữ liệu chung" },
              { zh: "院內系統與設備", en: "Hospital systems and devices", vi: "Hệ thống và thiết bị trong viện" } ] }
          ],
          foot: { zh: "AI 不可用時，保留人工處理與核心作業路徑", en: "When AI is unavailable, manual handling and core workflows remain", vi: "Khi AI không khả dụng vẫn giữ đường xử lý thủ công và nghiệp vụ lõi" }
        },
        points: [
          { t: { zh: "資料與情境", en: "Data and context", vi: "Dữ liệu và bối cảnh" }, d: { zh: "將經授權的病人脈絡、使用者角色、工作任務與資料來源納入設計。", en: "Design in authorized patient context, user roles, tasks and data sources.", vi: "Đưa bối cảnh bệnh nhân đã được ủy quyền, vai trò người dùng, tác vụ và nguồn dữ liệu vào thiết kế." } },
          { t: { zh: "模型與工具調用", en: "Model and tool invocation", vi: "Gọi mô hình và công cụ" }, d: { zh: "依任務選用合適模型或工具，規劃版本管理、輸入輸出及責任邊界。", en: "Choose suitable models or tools per task; plan version management, inputs and outputs, and responsibility boundaries.", vi: "Chọn mô hình hoặc công cụ phù hợp theo tác vụ; hoạch định quản lý phiên bản, đầu vào đầu ra và ranh giới trách nhiệm." } },
          { t: { zh: "工作流程與人員確認", en: "Workflow and human confirmation", vi: "Quy trình và xác nhận bởi con người" }, d: { zh: "AI 產生摘要、待辦或建議草稿；關鍵寫入須經授權及確認，臨床決策由醫護負責。", en: "AI drafts summaries, to-dos or suggestions; critical write-backs require authorization and confirmation, and clinical decisions stay with clinicians.", vi: "AI tạo bản nháp tóm tắt, việc cần làm hoặc đề xuất; các ghi nhận quan trọng phải được ủy quyền và xác nhận, quyết định lâm sàng do nhân viên y tế chịu trách nhiệm." } },
          { t: { zh: "安全、追溯與降級", en: "Safety, traceability and fallback", vi: "An toàn, truy vết và dự phòng" }, d: { zh: "規劃權限、稽核與效果監測；AI 不可用時，保留人工處理及核心作業路徑。", en: "Plan permissions, audit and performance monitoring; when AI is unavailable, manual handling and core workflows remain.", vi: "Hoạch định phân quyền, kiểm toán và giám sát hiệu quả; khi AI không khả dụng vẫn giữ đường xử lý thủ công và nghiệp vụ lõi." } }
        ],
        extra: [
          { t: { zh: "原生 AI 不等於全部自研", en: "Native AI does not mean everything is built in-house", vi: "AI nguyên bản không có nghĩa tất cả tự phát triển" }, d: { zh: "這是整合與流程的架構定位，不代表模型全部由醫盾訓練，也不代表 AI 可以自主下醫囑或控制設備。第三方模型與工具應明確標示版本及整合責任。", en: "This is an integration and workflow architecture position. It does not mean all models are trained by AegisMed, nor that AI can issue orders or control devices on its own. Third-party models and tools must carry clear version and integration responsibility labels.", vi: "Đây là định vị kiến trúc về tích hợp và quy trình, không có nghĩa mọi mô hình đều do AegisMed huấn luyện, cũng không có nghĩa AI được tự ra y lệnh hay điều khiển thiết bị. Mô hình và công cụ bên thứ ba phải ghi rõ phiên bản và trách nhiệm tích hợp." } },
          { t: { zh: "可跨越多個工作平台", en: "Spans multiple work platforms", vi: "Xuyên suốt nhiều nền tảng làm việc" }, d: { zh: "原生 AI 能力可依範圍整合至 HIS、EMR、Smart-ICU 與 Smart-MDT；不是必須另購的孤立聊天產品。", en: "Native AI capability can be integrated into HIS, EMR, Smart-ICU and Smart-MDT by scope; it is not an isolated chat product to be purchased separately.", vi: "Năng lực AI nguyên bản có thể tích hợp theo phạm vi vào HIS, EMR, Smart-ICU và Smart-MDT; không phải sản phẩm chat riêng lẻ phải mua thêm." } }
        ]
      },
      { id: "ai", num: "06", tag: "AI-ASSISTED WORKFLOWS", page: "solution-ai-assist.html",
        name: { zh: "AI 輔助", en: "AI Assistance", vi: "AI hỗ trợ" },
        position: { zh: "臨床、護理與營運智慧支援", en: "Intelligent support for clinical, nursing and operations", vi: "Hỗ trợ thông minh cho lâm sàng, điều dưỡng và vận hành" },
        desc: { zh: "從病歷摘要、影像輔助與交班整理，到會診準備及營運分析，依任務導入可覆核、可追溯的 AI 支援。", en: "From record summaries, imaging support and handover notes to consultation preparation and operational analytics: reviewable, traceable AI support introduced task by task.", vi: "Từ tóm tắt bệnh án, hỗ trợ hình ảnh và bàn giao ca đến chuẩn bị hội chẩn và phân tích vận hành: đưa vào hỗ trợ AI có thể rà soát, truy vết theo từng tác vụ." },
        headline: { zh: "把智慧支援帶入實際工作。", en: "Bring intelligent support into real work.", vi: "Đưa hỗ trợ thông minh vào công việc thực tế." },
        intro: { zh: "AI 輔助依具體任務導入，涵蓋臨床、護理、會診與營運。每一項應用都說明使用的資料、產出的內容、負責覆核的人員與適用限制，讓 AI 支援實際工作，專業判斷仍由人負責。", en: "AI assistance is introduced task by task across clinical, nursing, consultation and operational work. Every application states the data it uses, what it produces, who reviews it and where it applies, so AI supports real work while professional judgment stays with people.", vi: "AI hỗ trợ được đưa vào theo từng tác vụ cụ thể, bao gồm lâm sàng, điều dưỡng, hội chẩn và vận hành. Mỗi ứng dụng đều nêu rõ dữ liệu sử dụng, nội dung tạo ra, người chịu trách nhiệm rà soát và giới hạn áp dụng, để AI hỗ trợ công việc thực tế còn phán đoán chuyên môn vẫn do con người đảm nhiệm." },
        figure: {
          type: "grid",
          label: { zh: "任務範圍", en: "Task scope", vi: "Phạm vi tác vụ" },
          groups: [
            { t: { zh: "臨床支援", en: "Clinical support", vi: "Hỗ trợ lâm sàng" }, items: [
              { zh: "病歷摘要", en: "Record summaries", vi: "Tóm tắt bệnh án" },
              { zh: "影像輔助", en: "Imaging support", vi: "Hỗ trợ hình ảnh" },
              { zh: "風險提示與實證檢索", en: "Risk alerts and evidence retrieval", vi: "Cảnh báo nguy cơ và tra cứu bằng chứng" } ] },
            { t: { zh: "護理與照護", en: "Nursing and care", vi: "Điều dưỡng và chăm sóc" }, items: [
              { zh: "交班資訊整理", en: "Handover summaries", vi: "Tổng hợp bàn giao ca" },
              { zh: "照護紀錄草稿", en: "Care-record drafts", vi: "Bản nháp hồ sơ chăm sóc" },
              { zh: "待辦彙整", en: "To-do compilation", vi: "Tổng hợp việc cần làm" } ] },
            { t: { zh: "會診與多專科", en: "Consultation and MDT", vi: "Hội chẩn và đa chuyên khoa" }, items: [
              { zh: "Pre-MDT 病程摘要", en: "Pre-MDT course summaries", vi: "Tóm tắt diễn tiến Pre-MDT" },
              { zh: "問題整理", en: "Question lists", vi: "Tổng hợp câu hỏi" },
              { zh: "資料缺件提醒", en: "Missing-data reminders", vi: "Nhắc dữ liệu thiếu" } ] },
            { t: { zh: "行政與營運", en: "Administration and operations", vi: "Hành chính và vận hành" }, items: [
              { zh: "行政文件草稿", en: "Administrative drafts", vi: "Bản nháp văn bản hành chính" },
              { zh: "營運報表解讀", en: "Report interpretation", vi: "Diễn giải báo cáo vận hành" },
              { zh: "資源需求分析", en: "Resource-demand analysis", vi: "Phân tích nhu cầu nguồn lực" } ] }
          ],
          foot: { zh: "每項任務：資料來源 → AI 草稿 → 專業覆核 → 紀錄與追溯", en: "Every task: data source → AI draft → professional review → record and traceability", vi: "Mỗi tác vụ: nguồn dữ liệu → bản nháp AI → rà soát chuyên môn → ghi nhận và truy vết" }
        },
        points: [
          { t: { zh: "臨床支援", en: "Clinical support", vi: "Hỗ trợ lâm sàng" }, d: { zh: "病歷摘要、文書草稿、影像輔助、風險提示與實證檢索；使用範圍依個別產品確認。", en: "Record summaries, document drafts, imaging support, risk alerts and evidence retrieval; scope confirmed per product.", vi: "Tóm tắt bệnh án, bản nháp văn bản, hỗ trợ hình ảnh, cảnh báo nguy cơ và tra cứu bằng chứng; phạm vi xác nhận theo từng sản phẩm." } },
          { t: { zh: "護理與照護", en: "Nursing and care", vi: "Điều dưỡng và chăm sóc" }, d: { zh: "交班資訊整理、照護紀錄草稿與待辦彙整；由負責人確認後進入工作流程。", en: "Handover summaries, care-record drafts and to-do compilation; enters the workflow after confirmation by the responsible person.", vi: "Tổng hợp thông tin bàn giao, bản nháp hồ sơ chăm sóc và việc cần làm; vào quy trình sau khi người phụ trách xác nhận." } },
          { t: { zh: "會診與多專科合作", en: "Consultation and multidisciplinary collaboration", vi: "Hội chẩn và phối hợp đa chuyên khoa" }, d: { zh: "Pre-MDT 病程摘要、問題整理與資料缺件提醒；保留來源及專業覆核。", en: "Pre-MDT course summaries, question lists and missing-data reminders; sources and professional review retained.", vi: "Tóm tắt diễn tiến Pre-MDT, tổng hợp câu hỏi và nhắc dữ liệu thiếu; giữ nguồn và rà soát chuyên môn." } },
          { t: { zh: "行政與營運", en: "Administration and operations", vi: "Hành chính và vận hành" }, d: { zh: "行政文件草稿、營運報表解讀及資源需求分析；以可取得資料與核定功能為前提。", en: "Administrative drafts, operational report interpretation and resource-demand analysis; based on available data and approved functions.", vi: "Bản nháp văn bản hành chính, diễn giải báo cáo vận hành và phân tích nhu cầu nguồn lực; dựa trên dữ liệu có sẵn và tính năng đã duyệt." } }
        ],
        extra: [
          { t: { zh: "每項應用的透明說明", en: "Transparency for every application", vi: "Minh bạch cho mỗi ứng dụng" }, d: { zh: "每項 AI 輔助應用都載明任務與使用者、提供者與產品版本、輸入與輸出、適用場景與驗證方式、人工覆核與紀錄機制，以及產品與地區的使用限制。", en: "Every AI-assistance application documents its task and users, provider and product version, inputs and outputs, applicable settings and validation, human review and record-keeping, and product or regional usage limits.", vi: "Mỗi ứng dụng AI hỗ trợ đều ghi rõ tác vụ và người dùng, nhà cung cấp và phiên bản sản phẩm, đầu vào và đầu ra, bối cảnh áp dụng và phương pháp kiểm chứng, cơ chế rà soát bởi con người và ghi nhận, cùng giới hạn sử dụng theo sản phẩm và khu vực." } },
          { t: { zh: "與原生 AI 的關係", en: "Relationship to native AI", vi: "Quan hệ với AI nguyên bản" }, d: { zh: "AI 輔助可以整合於既有系統，也可以由原生 AI 架構提供。原生是架構整合方式；輔助是 AI 的工作角色，並不是兩種互斥的模型。", en: "AI assistance can be integrated into existing systems or provided through the native AI architecture. Native is the way of integrating; assistance is AI's working role. They are not two mutually exclusive models.", vi: "AI hỗ trợ có thể tích hợp vào hệ thống hiện có hoặc do kiến trúc AI nguyên bản cung cấp. Nguyên bản là cách tích hợp kiến trúc; hỗ trợ là vai trò làm việc của AI, không phải hai mô hình loại trừ nhau." } }
        ]
      }
    ]
  },

  /* ---------- HIS 三條轉換路徑 ---------- */
  paths: {
    eyebrow: { zh: "新一代智慧化 HIS 轉換", en: "Next-generation smart HIS modernization", vi: "Chuyển đổi HIS thông minh thế hệ mới" },
    title: { zh: "保留成熟核心，重建智慧化的工作方式。", en: "Keep the mature core, rebuild the way work is done.", vi: "Giữ lõi trưởng thành, xây dựng lại cách làm việc thông minh." },
    lead: { zh: "以成熟 HIS 產品為起點，結合醫盾的臨床平台與 AI 架構方向，依醫院現況選擇合適的轉換路徑，而非一律從零重寫。", en: "Starting from a mature HIS product and combining AegisMed's clinical platform and AI architecture direction, hospitals choose the path that fits their situation instead of rewriting from scratch.", vi: "Xuất phát từ sản phẩm HIS trưởng thành, kết hợp nền tảng lâm sàng và định hướng kiến trúc AI của AegisMed, bệnh viện chọn lộ trình phù hợp hiện trạng thay vì viết lại từ đầu." },
    items: [
      { tag: { zh: "PATH 01 / 整合升級", en: "PATH 01 / Integrate and upgrade", vi: "PATH 01 / Tích hợp nâng cấp" }, title: { zh: "既有 HIS ＋ 智慧擴充", en: "Existing HIS + intelligent extensions", vi: "HIS hiện có + mở rộng thông minh" }, text: { zh: "評估保留既有交易核心，串接 EMR、Smart-ICU、Smart-MDT 與 AI 輔助；先確認介接、資料取得及原廠配合條件。", en: "Assess keeping the existing transaction core and connecting EMR, Smart-ICU, Smart-MDT and AI assistance; first confirm integration, data access and vendor cooperation.", vi: "Đánh giá giữ lõi giao dịch hiện có, kết nối EMR, Smart-ICU, Smart-MDT và AI hỗ trợ; xác nhận trước điều kiện tích hợp, truy xuất dữ liệu và sự phối hợp của hãng gốc." }, foot: { zh: "先改善優先工作流程", en: "Improve priority workflows first", vi: "Cải thiện trước các quy trình ưu tiên" } },
      { tag: { zh: "PATH 02 / 分階段轉換", en: "PATH 02 / Phased replacement", vi: "PATH 02 / Chuyển đổi theo giai đoạn" }, title: { zh: "成熟新核心 ＋ 漸進替換", en: "Mature new core + gradual replacement", vi: "Lõi mới trưởng thành + thay thế dần" }, text: { zh: "依模組與院區安排流程重整、資料轉換、對帳驗證、平行試行及切換演練，明確設定回復條件。", en: "By module and campus: process redesign, data conversion, reconciliation, parallel runs and cutover rehearsals, with explicit rollback conditions.", vi: "Theo từng phân hệ và cơ sở: tái cấu trúc quy trình, chuyển đổi dữ liệu, đối soát kiểm chứng, chạy song song và diễn tập chuyển đổi, với điều kiện khôi phục rõ ràng." }, foot: { zh: "分階段控制切換風險", en: "Control cutover risk in phases", vi: "Kiểm soát rủi ro chuyển đổi theo giai đoạn" } },
      { tag: { zh: "PATH 03 / 新院建置", en: "PATH 03 / New hospital", vi: "PATH 03 / Xây dựng bệnh viện mới" }, title: { zh: "成熟核心 ＋ AI 原生設計", en: "Mature core + AI-native design", vi: "Lõi trưởng thành + thiết kế AI nguyên bản" }, text: { zh: "從新院規劃開始，同步設計 HIS、臨床平台與 AI 的協作方式；結合成熟產品、在地化及可驗證的應用。", en: "From the planning of a new hospital, design how HIS, the clinical platform and AI work together, combining mature products, localization and verifiable applications.", vi: "Ngay từ quy hoạch bệnh viện mới, thiết kế đồng thời cách HIS, nền tảng lâm sàng và AI phối hợp; kết hợp sản phẩm trưởng thành, bản địa hóa và ứng dụng có thể kiểm chứng." }, foot: { zh: "從起點建立整合架構", en: "Build the integrated architecture from the start", vi: "Xây dựng kiến trúc tích hợp từ điểm xuất phát" } }
    ],
    must: {
      title: { zh: "每條路徑都要說清楚", en: "Every path must make these clear", vi: "Mỗi lộ trình đều phải nói rõ" },
      items: [
        { zh: "流程與資料盤點", en: "Process and data inventory", vi: "Rà soát quy trình và dữ liệu" },
        { zh: "版本與授權邊界", en: "Version and licensing boundaries", vi: "Ranh giới phiên bản và giấy phép" },
        { zh: "資料移轉與對帳", en: "Data migration and reconciliation", vi: "Chuyển đổi dữ liệu và đối soát" },
        { zh: "切換與回復演練", en: "Cutover and rollback rehearsal", vi: "Diễn tập chuyển đổi và khôi phục" },
        { zh: "訓練與維運責任", en: "Training and operations responsibility", vi: "Trách nhiệm đào tạo và vận hành" }
      ]
    },
    note: { zh: "以上為服務規劃方向，不表示所有既有系統均可直接介接，也不承諾零停機或無條件保留全部資料。", en: "The above is a service planning direction. It does not mean every existing system can be integrated directly, nor does it promise zero downtime or unconditional retention of all data.", vi: "Trên đây là định hướng hoạch định dịch vụ, không có nghĩa mọi hệ thống hiện có đều tích hợp trực tiếp được, cũng không cam kết không gián đoạn hay giữ nguyên toàn bộ dữ liệu vô điều kiện." }
  },

  /* ---------- 應用情境 ---------- */
  scenarios: {
    eyebrow: { zh: "從醫院情境開始", en: "Start from the hospital's situation", vi: "Bắt đầu từ bối cảnh bệnh viện" },
    title: { zh: "先理解工作，再決定需要哪些科技。", en: "Understand the work first, then decide which technology is needed.", vi: "Hiểu công việc trước, rồi mới quyết định cần công nghệ nào." },
    lead: { zh: "依照醫院關心的照護場景，連結相關模組與導入重點，而不是只列出一長串技術名詞。", en: "Link relevant modules and implementation priorities to the care settings hospitals care about, rather than listing a long string of technical terms.", vi: "Theo các bối cảnh chăm sóc mà bệnh viện quan tâm, kết nối phân hệ liên quan và trọng tâm triển khai, thay vì chỉ liệt kê một chuỗi thuật ngữ kỹ thuật." },
    label: { zh: "應用情境 · 非實績案例", en: "Application scenario · not a track record", vi: "Kịch bản ứng dụng · không phải thành tích thực tế" },
    flowTitle: { zh: "工作流程示意", en: "Workflow illustration", vi: "Minh họa quy trình" },
    cta: { zh: "討論適合醫院的切入點", en: "Discuss the right entry point for your hospital", vi: "Thảo luận điểm vào phù hợp cho bệnh viện" },
    items: [
      { id: "hospital", tab: { zh: "HIS 轉換與全院升級", en: "HIS modernization and hospital-wide upgrade", vi: "Chuyển đổi HIS và nâng cấp toàn viện" },
        flow: { zh: "從成熟核心，走向智慧化醫院。", en: "From a mature core to the smart hospital.", vi: "Từ lõi trưởng thành đến bệnh viện thông minh." },
        title: { zh: "選擇路徑，不只更換一套軟體。", en: "Choose a path, not just a new piece of software.", vi: "Chọn lộ trình, không chỉ thay một phần mềm." },
        text: { zh: "依醫院現況評估成熟 HIS 核心、資料取得、在地化與模組切換；以獨立範圍管理轉換專案，逐步串連醫盾臨床平台與 AI 能力。", en: "Assess the mature HIS core, data access, localization and module cutover against the hospital's situation; manage the modernization as its own project and progressively connect AegisMed's clinical platform and AI capabilities.", vi: "Đánh giá lõi HIS trưởng thành, truy xuất dữ liệu, bản địa hóa và chuyển đổi phân hệ theo hiện trạng bệnh viện; quản lý dự án chuyển đổi theo phạm vi riêng, từng bước kết nối nền tảng lâm sàng và năng lực AI của AegisMed." },
        steps: [ { zh: "盤點既有 HIS、流程與資料品質", en: "Inventory the existing HIS, processes and data quality", vi: "Rà soát HIS hiện có, quy trình và chất lượng dữ liệu" }, { zh: "評估成熟核心、授權與在地化", en: "Assess the mature core, licensing and localization", vi: "Đánh giá lõi trưởng thành, giấy phép và bản địa hóa" }, { zh: "驗證移轉對帳、整合與使用流程", en: "Validate migration reconciliation, integration and user flows", vi: "Kiểm chứng đối soát chuyển đổi, tích hợp và quy trình sử dụng" }, { zh: "完成切換與回復演練，分階段上線", en: "Complete cutover and rollback rehearsals, go live in phases", vi: "Hoàn thành diễn tập chuyển đổi và khôi phục, vận hành theo giai đoạn" } ],
        tags: [ { zh: "智慧化 HIS 轉換", en: "Smart HIS modernization", vi: "Chuyển đổi HIS thông minh" }, { zh: "成熟核心＋在地化", en: "Mature core + localization", vi: "Lõi trưởng thành + bản địa hóa" }, { zh: "資料移轉與驗證", en: "Data migration and validation", vi: "Chuyển đổi và kiểm chứng dữ liệu" } ] },
      { id: "critical", tab: { zh: "重症與病房", en: "Critical care and wards", vi: "Hồi sức và phòng bệnh" },
        flow: { zh: "把重症資訊，放回照護工作的脈絡。", en: "Put critical-care information back into the context of care.", vi: "Đưa thông tin hồi sức trở lại bối cảnh công việc chăm sóc." },
        title: { zh: "不只看見數據，更要能追蹤事件。", en: "Not just seeing the numbers, but tracking the events.", vi: "Không chỉ thấy số liệu mà còn theo dõi được sự kiện." },
        text: { zh: "以重症或病房團隊的日常工作規劃資訊呈現，串連設備資料、臨床紀錄與回應流程。預警功能須依實際版本及適用族群確認。", en: "Plan information display around the daily work of ICU or ward teams, linking device data, clinical records and response workflows. Early-warning functions must be confirmed by actual version and applicable population.", vi: "Hoạch định hiển thị thông tin theo công việc hằng ngày của đội hồi sức hoặc phòng bệnh, kết nối dữ liệu thiết bị, hồ sơ lâm sàng và quy trình phản ứng. Tính năng cảnh báo sớm phải xác nhận theo phiên bản thực tế và nhóm áp dụng." },
        steps: [ { zh: "盤點床邊設備與資料介接", en: "Inventory bedside devices and data interfaces", vi: "Rà soát thiết bị đầu giường và giao diện dữ liệu" }, { zh: "整合趨勢、紀錄與病人脈絡", en: "Integrate trends, records and patient context", vi: "Tích hợp xu hướng, hồ sơ và bối cảnh bệnh nhân" }, { zh: "呈現需由醫護覆核的事件資訊", en: "Present event information for clinician review", vi: "Trình bày thông tin sự kiện cần nhân viên y tế rà soát" }, { zh: "追蹤回應流程與使用回饋", en: "Track response workflows and user feedback", vi: "Theo dõi quy trình phản ứng và phản hồi sử dụng" } ],
        tags: [ { zh: "Smart-ICU", en: "Smart-ICU", vi: "Smart-ICU" }, { zh: "設備資料整合", en: "Device data integration", vi: "Tích hợp dữ liệu thiết bị" }, { zh: "人工覆核與追蹤", en: "Human review and tracking", vi: "Rà soát bởi con người và theo dõi" } ] },
      { id: "oncology", tab: { zh: "腫瘤共同照護", en: "Oncology collaborative care", vi: "Chăm sóc phối hợp ung bướu" },
        flow: { zh: "一次討論之後，照護仍持續前進。", en: "After one discussion, care keeps moving forward.", vi: "Sau một lần thảo luận, chăm sóc vẫn tiếp tục tiến tới." },
        title: { zh: "從一般會診到複雜疾病 MDT。", en: "From routine consultation to complex-disease MDT.", vi: "Từ hội chẩn thông thường đến MDT bệnh phức tạp." },
        text: { zh: "將病例準備、待討論問題、專業意見與後續任務放在連續流程中。需要實證支援的問題，可納入 PICO 與文獻來源的呈現設計。", en: "Put case preparation, open questions, expert opinions and follow-up tasks into one continuous flow. Questions that need evidence support can include PICO and literature-source presentation.", vi: "Đưa chuẩn bị ca bệnh, câu hỏi cần thảo luận, ý kiến chuyên môn và nhiệm vụ tiếp theo vào một quy trình liên tục. Câu hỏi cần hỗ trợ bằng chứng có thể đưa vào thiết kế trình bày PICO và nguồn tài liệu." },
        steps: [ { zh: "提出會診／MDT 討論需求", en: "Raise a consultation / MDT request", vi: "Đưa ra yêu cầu hội chẩn / thảo luận MDT" }, { zh: "彙整影像、病理與病程摘要", en: "Compile imaging, pathology and course summary", vi: "Tổng hợp hình ảnh, giải phẫu bệnh và tóm tắt diễn tiến" }, { zh: "記錄多專科討論與共同計畫", en: "Record the multidisciplinary discussion and shared plan", vi: "Ghi nhận thảo luận đa chuyên khoa và kế hoạch chung" }, { zh: "分派任務、追蹤執行與再討論", en: "Assign tasks, track execution and re-discuss", vi: "Phân công nhiệm vụ, theo dõi thực hiện và thảo luận lại" } ],
        tags: [ { zh: "Smart-MDT", en: "Smart-MDT", vi: "Smart-MDT" }, { zh: "Pre-MDT", en: "Pre-MDT", vi: "Pre-MDT" }, { zh: "共同照護計畫", en: "Shared care plan", vi: "Kế hoạch chăm sóc chung" } ] },
      { id: "pediatric", tab: { zh: "兒童醫療", en: "Pediatric care", vi: "Y tế nhi khoa" },
        flow: { zh: "先理解兒童照護的實際需求。", en: "First understand the real needs of pediatric care.", vi: "Trước hết hiểu nhu cầu thực tế của chăm sóc nhi khoa." },
        title: { zh: "用合適的情境，設計合適的流程。", en: "Design the right workflow for the right setting.", vi: "Dùng bối cảnh phù hợp để thiết kế quy trình phù hợp." },
        text: { zh: "針對兒童醫療的紀錄、重症照護與跨專業協作需求規劃應用；對年齡、單位、量表與模型適用性設置清楚的驗證欄位，不套用未確認的臨床能力。", en: "Plan applications for pediatric records, critical care and cross-disciplinary collaboration; set clear validation fields for age, unit, scores and model applicability, and do not apply unconfirmed clinical capabilities.", vi: "Hoạch định ứng dụng cho hồ sơ nhi khoa, hồi sức và phối hợp liên chuyên khoa; đặt các trường kiểm chứng rõ ràng cho tuổi, đơn vị, thang điểm và tính áp dụng của mô hình; không áp dụng năng lực lâm sàng chưa xác nhận." },
        steps: [ { zh: "確認科別、年齡與使用場景", en: "Confirm specialty, age group and setting", vi: "Xác nhận chuyên khoa, nhóm tuổi và bối cảnh sử dụng" }, { zh: "盤點兒科紀錄與設備資料需求", en: "Inventory pediatric record and device data needs", vi: "Rà soát nhu cầu hồ sơ nhi khoa và dữ liệu thiết bị" }, { zh: "驗證資訊呈現與協作工作流程", en: "Validate information display and collaboration workflows", vi: "Kiểm chứng hiển thị thông tin và quy trình phối hợp" }, { zh: "依試點結果調整與擴充", en: "Adjust and expand based on pilot results", vi: "Điều chỉnh và mở rộng theo kết quả thí điểm" } ],
        tags: [ { zh: "EMR Platform", en: "EMR Platform", vi: "EMR Platform" }, { zh: "Smart-ICU", en: "Smart-ICU", vi: "Smart-ICU" }, { zh: "跨專業協作", en: "Cross-disciplinary collaboration", vi: "Phối hợp liên chuyên khoa" } ] },
      { id: "aiworkflow", tab: { zh: "AI 工作流程", en: "AI workflows", vi: "Quy trình AI" },
        flow: { zh: "從觸發到確認，AI 與流程一起設計。", en: "From trigger to confirmation, AI and workflow designed together.", vi: "Từ kích hoạt đến xác nhận, AI và quy trình được thiết kế cùng nhau." },
        title: { zh: "原生 AI 串連架構，AI 輔助承接任務。", en: "Native AI connects the architecture; AI assistance takes on the tasks.", vi: "AI nguyên bản kết nối kiến trúc, AI hỗ trợ đảm nhận tác vụ." },
        text: { zh: "以會診準備為例：系統依已授權的使用情境取得資料，AI 產生有來源的摘要草稿，醫護確認後再寫入流程。高風險醫囑與設備操作不由 AI 自動執行。", en: "Take consultation preparation as an example: the system retrieves data under an authorized use context, AI drafts a summary with sources, and clinicians confirm before it enters the workflow. High-risk orders and device operations are not executed automatically by AI.", vi: "Lấy chuẩn bị hội chẩn làm ví dụ: hệ thống lấy dữ liệu theo bối cảnh sử dụng đã ủy quyền, AI tạo bản nháp tóm tắt có nguồn, nhân viên y tế xác nhận rồi mới ghi vào quy trình. Y lệnh nguy cơ cao và thao tác thiết bị không do AI tự động thực hiện." },
        steps: [ { zh: "依權限取得病人脈絡與任務", en: "Retrieve patient context and task by permission", vi: "Lấy bối cảnh bệnh nhân và tác vụ theo phân quyền" }, { zh: "產生附來源的摘要或建議草稿", en: "Generate a summary or suggestion draft with sources", vi: "Tạo bản nháp tóm tắt hoặc đề xuất kèm nguồn" }, { zh: "由醫護確認、修訂或拒絕", en: "Clinicians confirm, revise or reject", vi: "Nhân viên y tế xác nhận, chỉnh sửa hoặc từ chối" }, { zh: "記錄來源與版本，回到工作流程", en: "Record source and version, return to the workflow", vi: "Ghi nhận nguồn và phiên bản, quay lại quy trình" } ],
        tags: [ { zh: "原生 AI 架構", en: "AI-native architecture", vi: "Kiến trúc AI nguyên bản" }, { zh: "AI 輔助任務", en: "AI-assisted tasks", vi: "Tác vụ AI hỗ trợ" }, { zh: "人工覆核與追溯", en: "Human review and traceability", vi: "Rà soát bởi con người và truy vết" } ] }
    ]
  },

  /* ---------- 平台與整合 ---------- */
  platform: {
    eyebrow: { zh: "平台與整合", en: "Platform and integration", vi: "Nền tảng và tích hợp" },
    title: { zh: "原生 AI 是架構，AI 輔助是應用。", en: "Native AI is architecture; AI assistance is application.", vi: "AI nguyên bản là kiến trúc, AI hỗ trợ là ứng dụng." },
    p1: { zh: "在醫盾的網站定位中，原生 AI 指從系統設計開始，將資料情境、模型調用、角色權限、人工覆核與稽核納入共同架構；AI 輔助則指進入臨床、護理與營運流程的具體工作任務。", en: "In AegisMed's positioning, native AI means that from system design onward, data context, model invocation, role permissions, human review and audit are part of a shared architecture; AI assistance means the specific tasks that enter clinical, nursing and operational workflows.", vi: "Trong định vị của AegisMed, AI nguyên bản nghĩa là ngay từ thiết kế hệ thống đã đưa bối cảnh dữ liệu, gọi mô hình, phân quyền, rà soát bởi con người và kiểm toán vào kiến trúc chung; AI hỗ trợ là các tác vụ cụ thể đi vào quy trình lâm sàng, điều dưỡng và vận hành." },
    p2: { zh: "兩者可以結合，也可分階段導入。原生 AI 不等同所有模型皆為自研；採用第三方模型或工具時，仍需界定版本、使用範圍與整合責任。", en: "The two can be combined or introduced in phases. Native AI does not mean every model is built in-house; when third-party models or tools are used, their version, scope and integration responsibility must still be defined.", vi: "Hai bên có thể kết hợp hoặc triển khai theo giai đoạn. AI nguyên bản không đồng nghĩa mọi mô hình đều tự phát triển; khi dùng mô hình hoặc công cụ bên thứ ba vẫn phải xác định phiên bản, phạm vi sử dụng và trách nhiệm tích hợp." },
    cta: { zh: "比較原生 AI 與 AI 輔助", en: "Compare native AI and AI assistance", vi: "So sánh AI nguyên bản và AI hỗ trợ" },
    layers: [
      { num: "05", title: { zh: "AI 輔助任務", en: "AI-assisted tasks", vi: "Tác vụ AI hỗ trợ" }, lines: [ { zh: "病歷摘要 · 影像輔助 · 交班整理", en: "Record summaries · imaging support · handover notes", vi: "Tóm tắt bệnh án · hỗ trợ hình ảnh · bàn giao ca" }, { zh: "會診準備 · 營運分析", en: "Consultation prep · operational analytics", vi: "Chuẩn bị hội chẩn · phân tích vận hành" } ] },
      { num: "04", title: { zh: "原生 AI 能力", en: "Native AI capability", vi: "Năng lực AI nguyên bản" }, lines: [ { zh: "資料情境 · 模型調用 · 流程協作", en: "Data context · model invocation · workflow collaboration", vi: "Bối cảnh dữ liệu · gọi mô hình · phối hợp quy trình" }, { zh: "角色權限 · 人工覆核 · 稽核追溯", en: "Role permissions · human review · audit trail", vi: "Phân quyền · rà soát bởi con người · truy vết kiểm toán" } ] },
      { num: "03", title: { zh: "臨床工作平台", en: "Clinical work platforms", vi: "Nền tảng làm việc lâm sàng" }, lines: [ { zh: "EMR Platform · Smart-ICU", en: "EMR Platform · Smart-ICU", vi: "EMR Platform · Smart-ICU" }, { zh: "Smart-MDT · 與 AI 雙向協作", en: "Smart-MDT · two-way collaboration with AI", vi: "Smart-MDT · phối hợp hai chiều với AI" } ] },
      { num: "02", title: { zh: "共同資料與介接", en: "Shared data and integration", vi: "Dữ liệu chung và tích hợp" }, lines: [ { zh: "資料品質 · 身分對應 · API／FHIR", en: "Data quality · identity matching · API / FHIR", vi: "Chất lượng dữ liệu · đối chiếu định danh · API / FHIR" }, { zh: "支援範圍依已驗證版本說明", en: "Support scope stated per validated version", vi: "Phạm vi hỗ trợ nêu theo phiên bản đã kiểm chứng" } ] },
      { num: "01", title: { zh: "HIS 與院內系統", en: "HIS and hospital systems", vi: "HIS và hệ thống trong viện" }, lines: [ { zh: "成熟 HIS 核心轉換與在地化", en: "Mature HIS core modernization and localization", vi: "Chuyển đổi lõi HIS trưởng thành và bản địa hóa" }, { zh: "既有系統、檢驗影像及設備整合", en: "Existing systems, lab, imaging and device integration", vi: "Tích hợp hệ thống hiện có, xét nghiệm hình ảnh và thiết bị" } ] }
    ],
    note: { zh: "能力關係示意，非固定部署分層；原生 AI 能力可橫跨各工作平台。", en: "An illustration of capability relationships, not a fixed deployment stack; native AI capability spans all work platforms.", vi: "Minh họa quan hệ năng lực, không phải phân tầng triển khai cố định; năng lực AI nguyên bản xuyên suốt các nền tảng làm việc." },
    compare: {
      eyebrow: { zh: "原生 AI 與 AI 輔助", en: "Native AI and AI assistance", vi: "AI nguyên bản và AI hỗ trợ" },
      lead: { zh: "兩個方案入口回答不同問題，可以共同存在於同一套系統，不應被包裝成互斥的選擇。", en: "The two entry points answer different questions and can coexist in one system; they should not be packaged as mutually exclusive choices.", vi: "Hai cửa ngõ trả lời những câu hỏi khác nhau, có thể cùng tồn tại trong một hệ thống, không nên đóng gói thành lựa chọn loại trừ nhau." },
      blocks: [
        { t: { zh: "原生 AI：系統如何運作？", en: "Native AI: how does the system work?", vi: "AI nguyên bản: hệ thống vận hành thế nào?" }, d: { zh: "從資料、情境、角色權限、模型調用與工作流程開始共同設計 AI，並規劃人工覆核及追溯。", en: "Co-design AI from data, context, role permissions, model invocation and workflow, with human review and traceability planned in.", vi: "Cùng thiết kế AI từ dữ liệu, bối cảnh, phân quyền, gọi mô hình và quy trình, kèm hoạch định rà soát bởi con người và truy vết." } },
        { t: { zh: "AI 輔助：協助哪個任務？", en: "AI assistance: which task does it help?", vi: "AI hỗ trợ: hỗ trợ tác vụ nào?" }, d: { zh: "病歷摘要、影像輔助、交班整理、會診準備或營運分析；每項任務依功能與證據定義。", en: "Record summaries, imaging support, handover notes, consultation preparation or operational analytics; each task defined by function and evidence.", vi: "Tóm tắt bệnh án, hỗ trợ hình ảnh, bàn giao ca, chuẩn bị hội chẩn hoặc phân tích vận hành; mỗi tác vụ xác định theo tính năng và bằng chứng." } },
        { t: { zh: "共同例子：會診準備", en: "Shared example: consultation preparation", vi: "Ví dụ chung: chuẩn bị hội chẩn" }, d: { zh: "原生 AI 架構串起任務、授權與病人脈絡；AI 輔助產生摘要草稿，供醫護確認與修訂。", en: "The native AI architecture links task, authorization and patient context; AI assistance drafts the summary for clinicians to confirm and revise.", vi: "Kiến trúc AI nguyên bản kết nối tác vụ, ủy quyền và bối cảnh bệnh nhân; AI hỗ trợ tạo bản nháp tóm tắt để nhân viên y tế xác nhận và chỉnh sửa." } },
        { t: { zh: "共同底線：人員與責任", en: "Shared baseline: people and responsibility", vi: "Nguyên tắc chung: con người và trách nhiệm" }, d: { zh: "臨床決策與正式醫囑由合格人員負責；保留來源、覆核與紀錄，不以 AI 取代責任分工。", en: "Clinical decisions and formal orders are the responsibility of qualified staff; sources, review and records are kept, and AI does not replace accountability.", vi: "Quyết định lâm sàng và y lệnh chính thức do nhân sự đủ điều kiện chịu trách nhiệm; giữ nguồn, rà soát và ghi nhận, không dùng AI thay thế phân công trách nhiệm." } }
      ],
      chain: { t: { zh: "從核心到應用", en: "From core to application", vi: "Từ lõi đến ứng dụng" }, d: { zh: "成熟 HIS 核心與院內系統，透過共同資料與整合平台支援 EMR、Smart-ICU 與 Smart-MDT；原生 AI 能力橫跨上述流程，形成可選用的 AI 輔助任務。", en: "The mature HIS core and hospital systems support EMR, Smart-ICU and Smart-MDT through shared data and an integration platform; native AI capability spans these workflows, forming selectable AI-assisted tasks.", vi: "Lõi HIS trưởng thành và hệ thống trong viện hỗ trợ EMR, Smart-ICU và Smart-MDT thông qua dữ liệu chung và nền tảng tích hợp; năng lực AI nguyên bản xuyên suốt các quy trình trên, tạo thành các tác vụ AI hỗ trợ có thể lựa chọn." } }
    },
    trust: {
      eyebrow: { zh: "安全、覆核與信任", en: "Safety, review and trust", vi: "An toàn, rà soát và tin cậy" },
      title: { zh: "AI 進入流程的四個前提。", en: "Four preconditions for AI to enter a workflow.", vi: "Bốn điều kiện tiên quyết để AI đi vào quy trình." },
      items: [
        { t: { zh: "權限與授權", en: "Permissions and authorization", vi: "Phân quyền và ủy quyền" }, d: { zh: "依角色與使用情境取得資料；關鍵寫入須經授權。", en: "Data is retrieved by role and use context; critical write-backs require authorization.", vi: "Lấy dữ liệu theo vai trò và bối cảnh sử dụng; ghi nhận quan trọng phải được ủy quyền." } },
        { t: { zh: "人工覆核", en: "Human review", vi: "Rà soát bởi con người" }, d: { zh: "AI 輸出為草稿；由合格人員確認、修訂或拒絕。", en: "AI outputs are drafts, confirmed, revised or rejected by qualified staff.", vi: "Đầu ra của AI là bản nháp; nhân sự đủ điều kiện xác nhận, chỉnh sửa hoặc từ chối." } },
        { t: { zh: "來源與稽核追溯", en: "Sources and audit trail", vi: "Nguồn và truy vết kiểm toán" }, d: { zh: "保留資料來源、模型版本與操作紀錄。", en: "Data sources, model versions and operation records are retained.", vi: "Giữ nguồn dữ liệu, phiên bản mô hình và nhật ký thao tác." } },
        { t: { zh: "降級與回復", en: "Fallback and recovery", vi: "Dự phòng và khôi phục" }, d: { zh: "AI 不可用時，保留人工處理與核心作業路徑。", en: "When AI is unavailable, manual handling and core workflows remain.", vi: "Khi AI không khả dụng vẫn giữ đường xử lý thủ công và nghiệp vụ lõi." } }
      ]
    }
  },

  /* ---------- 導入與合作 ---------- */
  implementation: {
    eyebrow: { zh: "導入與合作", en: "Implementation and cooperation", vi: "Triển khai và hợp tác" },
    title: { zh: "從可驗證的起點，走向可持續的轉型。", en: "From a verifiable start to a sustainable transformation.", vi: "Từ điểm khởi đầu có thể kiểm chứng đến chuyển đổi bền vững." },
    lead: { zh: "將 HIS 轉換與臨床模組導入分別定義範圍，納入資料驗證、切換與回復計畫，以及 AI 的人工覆核要求。", en: "HIS modernization and clinical module deployment are scoped separately, with data validation, cutover and rollback plans, and human-review requirements for AI.", vi: "Xác định phạm vi riêng cho chuyển đổi HIS và triển khai phân hệ lâm sàng, kèm kế hoạch kiểm chứng dữ liệu, chuyển đổi và khôi phục, cùng yêu cầu rà soát bởi con người đối với AI." },
    steps: [
      { num: "STEP 01", title: { zh: "盤點與選型", en: "Inventory and selection", vi: "Rà soát và lựa chọn" }, text: { zh: "盤點流程、資料與在地需求，選擇成熟核心及轉換路徑，界定責任與範圍。", en: "Inventory processes, data and local needs; choose the mature core and modernization path; define responsibilities and scope.", vi: "Rà soát quy trình, dữ liệu và nhu cầu địa phương; chọn lõi trưởng thành và lộ trình chuyển đổi; xác định trách nhiệm và phạm vi." } },
      { num: "STEP 02", title: { zh: "建置與驗證", en: "Build and validate", vi: "Xây dựng và kiểm chứng" }, text: { zh: "進行在地化、介接與資料移轉測試；用代表性情境驗證功能及 AI 覆核流程。", en: "Carry out localization, integration and data-migration tests; validate functions and AI review flows with representative scenarios.", vi: "Thực hiện bản địa hóa, tích hợp và kiểm thử chuyển đổi dữ liệu; kiểm chứng tính năng và quy trình rà soát AI bằng các kịch bản tiêu biểu." } },
      { num: "STEP 03", title: { zh: "演練與切換", en: "Rehearse and cut over", vi: "Diễn tập và chuyển đổi" }, text: { zh: "安排對帳、平行試行、訓練及切換演練，依驗收結果啟動分階段切換。", en: "Arrange reconciliation, parallel runs, training and cutover rehearsals; start phased cutover based on acceptance results.", vi: "Sắp xếp đối soát, chạy song song, đào tạo và diễn tập chuyển đổi; khởi động chuyển đổi theo giai đoạn dựa trên kết quả nghiệm thu." } },
      { num: "STEP 04", title: { zh: "維運與演進", en: "Operate and evolve", vi: "Vận hành và tiến hóa" }, text: { zh: "追蹤流程、資料品質與模型表現；依核定版本、回復條件與需求持續改善。", en: "Track workflows, data quality and model performance; keep improving according to approved versions, rollback conditions and needs.", vi: "Theo dõi quy trình, chất lượng dữ liệu và hiệu năng mô hình; cải tiến liên tục theo phiên bản đã duyệt, điều kiện khôi phục và nhu cầu." } }
    ],
    note: { zh: "HIS 轉換採獨立專案範圍與驗收；不自動變更既有交付承諾。", en: "HIS modernization has its own project scope and acceptance; it does not automatically change existing delivery commitments.", vi: "Chuyển đổi HIS có phạm vi dự án và nghiệm thu riêng; không tự động thay đổi các cam kết bàn giao hiện có." },
    cta: { zh: "討論導入需求", en: "Discuss implementation needs", vi: "Thảo luận nhu cầu triển khai" }
  },

  cooperation: {
    eyebrow: { zh: "醫院與技術夥伴", en: "Hospitals and technology partners", vi: "Bệnh viện và đối tác công nghệ" },
    title: { zh: "讓不同專業，在同一個目標下合作。", en: "Different professions, one shared goal.", vi: "Để các chuyên môn khác nhau hợp tác vì cùng một mục tiêu." },
    lead: { zh: "以臨床需求、在地導入與清楚的責任分工為基礎，建立合作方式。公開案例與合作紀錄，依已確認範圍呈現。", en: "Cooperation is built on clinical needs, local implementation and clear responsibilities. Public cases and cooperation records are shown only within confirmed scope.", vi: "Hợp tác dựa trên nhu cầu lâm sàng, triển khai tại chỗ và phân công trách nhiệm rõ ràng. Các trường hợp công khai và hồ sơ hợp tác chỉ trình bày trong phạm vi đã xác nhận." },
    hospital: {
      title: { zh: "醫療機構合作", en: "Cooperation with healthcare institutions", vi: "Hợp tác với cơ sở y tế" },
      text: { zh: "從智慧化 HIS 轉換、科別試點或 AI 工作流程切入，討論需求盤點、方案設計、驗證與導入支援。", en: "Starting from smart HIS modernization, a departmental pilot or an AI workflow, we discuss needs assessment, solution design, validation and implementation support.", vi: "Bắt đầu từ chuyển đổi HIS thông minh, thí điểm tại khoa hoặc quy trình AI, thảo luận rà soát nhu cầu, thiết kế giải pháp, kiểm chứng và hỗ trợ triển khai." },
      tags: [ { zh: "需求交流", en: "Needs exchange", vi: "Trao đổi nhu cầu" }, { zh: "場景試點", en: "Scenario pilot", vi: "Thí điểm theo bối cảnh" }, { zh: "分階段導入", en: "Phased implementation", vi: "Triển khai theo giai đoạn" } ],
      cta: { zh: "洽談醫院合作", en: "Discuss hospital cooperation", vi: "Trao đổi hợp tác bệnh viện" }
    },
    partner: {
      title: { zh: "技術與在地夥伴合作", en: "Technology and local partner cooperation", vi: "Hợp tác với đối tác công nghệ và địa phương" },
      text: { zh: "與成熟 HIS、醫療設備、AI 模型及在地服務夥伴釐清整合範圍、供應責任、支援模式與市場合作方式。", en: "With mature HIS, medical device, AI model and local service partners, we clarify integration scope, supply responsibilities, support models and market cooperation.", vi: "Cùng các đối tác HIS trưởng thành, thiết bị y tế, mô hình AI và dịch vụ địa phương làm rõ phạm vi tích hợp, trách nhiệm cung ứng, mô hình hỗ trợ và phương thức hợp tác thị trường." },
      tags: [ { zh: "系統整合", en: "System integration", vi: "Tích hợp hệ thống" }, { zh: "方案協作", en: "Solution collaboration", vi: "Phối hợp giải pháp" }, { zh: "在地服務", en: "Local services", vi: "Dịch vụ địa phương" } ],
      cta: { zh: "洽談夥伴合作", en: "Discuss partnership", vi: "Trao đổi hợp tác đối tác" }
    },
    cases: {
      title: { zh: "案例版位設計：讓合作狀態清楚可辨。", en: "Case slots designed so cooperation status is unmistakable.", vi: "Thiết kế vị trí trường hợp: trạng thái hợp tác rõ ràng." },
      text: { zh: "正式網站依證據分為「已上線案例」「試點／建置中」「合作交流」。本網站不代填醫院名稱、合作標誌或成效數字，也不將個人過往經驗列為公司交付實績。", en: "The site separates cases by evidence into \"live cases\", \"pilot / in progress\" and \"cooperation exchange\". It does not fill in hospital names, partner logos or outcome figures without approval, and does not present personal past experience as company deliveries.", vi: "Website phân loại theo bằng chứng thành \"trường hợp đã vận hành\", \"thí điểm / đang xây dựng\" và \"giao lưu hợp tác\". Không tự điền tên bệnh viện, logo đối tác hay con số hiệu quả, cũng không liệt kê kinh nghiệm cá nhân trước đây như thành tích bàn giao của công ty." },
      cta: { zh: "查看合作案例", en: "View cooperation cases", vi: "Xem các trường hợp hợp tác" }
    },
    services: {
      eyebrow: { zh: "導入過程中的服務", en: "Services during implementation", vi: "Dịch vụ trong quá trình triển khai" },
      title: { zh: "人才交流與數據培訓，讓醫院自己接得住。", en: "Talent exchange and data training so the hospital can take over.", vi: "Trao đổi nhân lực và đào tạo dữ liệu để bệnh viện tự làm chủ." },
      lead: { zh: "導入不只是系統上線。我們安排與台灣醫學中心的交流與觀摩，並以 OHDSI 共通資料模型為基礎提供數據應用培訓。", en: "Implementation is more than go-live. We arrange exchanges and observerships with Taiwan's medical centers and provide data-application training based on the OHDSI common data model.", vi: "Triển khai không chỉ là đưa hệ thống vào vận hành. Chúng tôi sắp xếp giao lưu và tham quan học tập với các trung tâm y khoa Đài Loan và đào tạo ứng dụng dữ liệu dựa trên mô hình dữ liệu chung OHDSI." }
    }
  },

  /* ---------- 洞察與動態 ---------- */
  insights: {
    showArticles: false,
    eyebrow: { zh: "洞察與動態", en: "Insights and news", vi: "Góc nhìn và tin tức" },
    title: { zh: "公司與合作動態", en: "Company and cooperation news", vi: "Tin tức công ty và hợp tác" },
    lead: { zh: "合作交流的公開紀錄與媒體報導，依日期排列。", en: "Public records of cooperation exchanges and media coverage, by date.", vi: "Hồ sơ công khai về giao lưu hợp tác và tin tức truyền thông, xếp theo ngày." },
    articlesEyebrow: { zh: "洞察文章", en: "Insight articles", vi: "Bài viết góc nhìn" },
    articles: [
      { tag: { zh: "HIS 轉換 · 建議題綱", en: "HIS modernization · outline", vi: "Chuyển đổi HIS · đề cương" }, title: { zh: "從成熟 HIS 核心，走向新一代智慧醫院。", en: "From a mature HIS core to the next-generation smart hospital.", vi: "Từ lõi HIS trưởng thành đến bệnh viện thông minh thế hệ mới." } },
      { tag: { zh: "原生 AI · 建議題綱", en: "Native AI · outline", vi: "AI nguyên bản · đề cương" }, title: { zh: "AI 原生，不只是多一個聊天框。", en: "AI-native is more than adding a chat box.", vi: "AI nguyên bản không chỉ là thêm một khung chat." } },
      { tag: { zh: "AI 輔助 · 建議題綱", en: "AI assistance · outline", vi: "AI hỗ trợ · đề cương" }, title: { zh: "AI 如何真正進入臨床、護理與營運？", en: "How does AI truly enter clinical, nursing and operational work?", vi: "AI thực sự đi vào lâm sàng, điều dưỡng và vận hành như thế nào?" } }
    ]
  },

  /* ---------- 關於醫盾 ---------- */
  about: {
    eyebrow: { zh: "關於醫盾", en: "About AegisMed", vi: "Về AegisMed" },
    title: { zh: "理解醫院，整合科技，推動智慧醫療實踐。", en: "Understand hospitals, integrate technology, put smart healthcare into practice.", vi: "Thấu hiểu bệnh viện, tích hợp công nghệ, thúc đẩy thực hành y tế thông minh." },
    p1: { zh: "醫盾的官網定位，聚焦於新一代智慧化 HIS 轉換、臨床工作平台、原生 AI 與 AI 輔助：連結醫院核心系統、照護流程與智慧應用，並說清楚服務方式及合作邊界。", en: "AegisMed focuses on next-generation smart HIS modernization, clinical work platforms, native AI and AI assistance: connecting hospital core systems, care workflows and intelligent applications, while making service methods and cooperation boundaries clear.", vi: "AegisMed tập trung vào chuyển đổi HIS thông minh thế hệ mới, nền tảng làm việc lâm sàng, AI nguyên bản và AI hỗ trợ: kết nối hệ thống lõi bệnh viện, quy trình chăm sóc và ứng dụng thông minh, đồng thời nói rõ phương thức dịch vụ và ranh giới hợp tác." },
    p2: { zh: "公司能力由產品、團隊及可驗證案例共同呈現。領導者的醫院管理經驗提供專業背景，但不取代對產品功能與專案成果的說明。", en: "Company capability is shown through products, team and verifiable cases. The leadership's hospital-management experience provides professional background, but does not replace the description of product functions and project results.", vi: "Năng lực công ty được thể hiện qua sản phẩm, đội ngũ và các trường hợp có thể kiểm chứng. Kinh nghiệm quản lý bệnh viện của lãnh đạo cung cấp nền tảng chuyên môn nhưng không thay thế việc mô tả tính năng sản phẩm và kết quả dự án." },
    tags: [ { zh: "成熟核心轉換", en: "Mature core modernization", vi: "Chuyển đổi lõi trưởng thành" }, { zh: "原生 AI 架構", en: "AI-native architecture", vi: "Kiến trúc AI nguyên bản" }, { zh: "臨床與營運支援", en: "Clinical and operational support", vi: "Hỗ trợ lâm sàng và vận hành" } ],
    leadershipTitle: { zh: "領導團隊", en: "Leadership", vi: "Ban lãnh đạo" },
    leader: {
      name: { zh: "呂嵐欽", en: "Lu Lan-Chin", vi: "Lu Lan-Chin (呂嵐欽)" },
      role: { zh: "執行長｜醫盾人工智慧股份有限公司", en: "Chief Executive Officer, AegisMed AI co.", vi: "Tổng Giám đốc, AegisMed AI co." },
      summary: {
        zh: "深耕醫療管理領域逾三十年，專長涵蓋醫院籌設與營運管理、醫療品質改善、醫療資訊系統規劃及國際醫療合作。",
        en: "More than thirty years in healthcare management, with expertise in hospital planning and operations, quality improvement, health information systems and international healthcare cooperation.",
        vi: "Hơn ba mươi năm trong lĩnh vực quản lý y tế, chuyên môn bao gồm quy hoạch và vận hành bệnh viện, cải tiến chất lượng, hệ thống thông tin y tế và hợp tác y tế quốc tế."
      },
      bio: [
        { zh: "呂嵐欽先生現任醫盾人工智慧股份有限公司執行長。深耕醫療管理領域逾三十年，專長涵蓋醫院籌設與營運管理、醫療品質改善、醫療資訊系統規劃及國際醫療合作。",
          en: "Mr. Lu Lan-Chin is Chief Executive Officer of AegisMed AI co. With more than thirty years in healthcare management, his expertise spans hospital planning and operations, quality improvement, health information systems and international healthcare cooperation.",
          vi: "Ông Lu Lan-Chin (呂嵐欽) hiện là Tổng Giám đốc AegisMed AI co. Với hơn ba mươi năm trong lĩnh vực quản lý y tế, chuyên môn của ông bao gồm quy hoạch và vận hành bệnh viện, cải tiến chất lượng, hệ thống thông tin y tế và hợp tác y tế quốc tế." },
        { zh: "曾任臺北醫學大學萬芳醫學中心行政副院長、臺北醫學大學事業發展處事業長及北醫國際股份有限公司總經理。任職期間主導萬芳醫學中心之籌設規劃與營運，參與雙和醫院之籌設與興建，並赴越南河內市及廣寧省執行醫院營運診斷，累積大型醫院建置與跨國醫療合作的實務經驗。",
          en: "He previously served as Vice Superintendent for Administration of Taipei Medical University Wan Fang Hospital, Chief Business Development Officer of Taipei Medical University, and General Manager of TMU International Co., Ltd. In these roles he led the planning and operation of Wan Fang Medical Center, took part in the planning and construction of Shuang Ho Hospital, and conducted hospital operational assessments in Hanoi and Quang Ninh Province, Vietnam.",
          vi: "Ông từng giữ các chức vụ Phó Giám đốc hành chính Bệnh viện Vạn Phương thuộc Đại học Y Đài Bắc, Trưởng phòng Phát triển kinh doanh Đại học Y Đài Bắc và Tổng Giám đốc Công ty TMU International. Trong thời gian đó, ông chủ trì quy hoạch và vận hành Trung tâm Y khoa Vạn Phương, tham gia quy hoạch và xây dựng Bệnh viện Song Hòa, đồng thời thực hiện chẩn đoán vận hành bệnh viện tại Hà Nội và tỉnh Quảng Ninh, Việt Nam." },
        { zh: "呂執行長為國立陽明大學醫院管理碩士、臺北醫學大學公共衛生學士。",
          en: "He holds a Master of Hospital Administration from National Yang-Ming University and a Bachelor of Public Health from Taipei Medical University.",
          vi: "Ông có bằng Thạc sĩ Quản lý bệnh viện của Đại học Quốc lập Dương Minh và Cử nhân Y tế công cộng của Đại học Y Đài Bắc." }
      ],
      cta: { zh: "認識執行長", en: "Meet the CEO", vi: "Giới thiệu Tổng Giám đốc" },
      careerTitle: { zh: "經歷", en: "Career", vi: "Quá trình công tác" },
      career: [
        { zh: "臺北醫學大學萬芳醫學中心 行政副院長", en: "Vice Superintendent (Administration), Taipei Medical University Wan Fang Hospital", vi: "Phó Giám đốc hành chính, Bệnh viện Vạn Phương, Đại học Y Đài Bắc" },
        { zh: "臺北醫學大學事業發展處 事業長", en: "Chief Business Development Officer, Taipei Medical University", vi: "Trưởng phòng Phát triển kinh doanh, Đại học Y Đài Bắc" },
        { zh: "北醫國際股份有限公司 總經理", en: "General Manager, TMU International Co., Ltd.", vi: "Tổng Giám đốc, Công ty TMU International" }
      ],
      eduTitle: { zh: "學歷", en: "Education", vi: "Học vấn" },
      edu: [
        { zh: "國立陽明大學 醫院管理碩士", en: "Master of Hospital Administration, National Yang-Ming University", vi: "Thạc sĩ Quản lý bệnh viện, Đại học Quốc lập Dương Minh" },
        { zh: "臺北醫學大學 公共衛生學士", en: "Bachelor of Public Health, Taipei Medical University", vi: "Cử nhân Y tế công cộng, Đại học Y Đài Bắc" }
      ]
    },
    orgsEyebrow: { zh: "合作組織", en: "Partner organizations", vi: "Tổ chức đối tác" },
    orgsTitle: { zh: "台越合作備忘錄的簽署組織", en: "Signatories of the Taiwan–Vietnam MOUs", vi: "Các tổ chức ký kết MOU Việt Nam – Đài Loan" },
    orgsLead: { zh: "合作備忘錄由以下組織與越南醫院簽署，醫盾參與規劃與執行。", en: "The MOUs were signed by the following organizations and Vietnamese hospitals; AegisMed took part in planning and execution.", vi: "Các MOU do những tổ chức sau ký kết với các bệnh viện Việt Nam; AegisMed tham gia hoạch định và triển khai." },
    companyTitle: { zh: "公司資料", en: "Company information", vi: "Thông tin công ty" }
  },

  /* ---------- 聯絡我們 ---------- */
  contact: {
    eyebrow: { zh: "開始合作", en: "Start a conversation", vi: "Bắt đầu hợp tác" },
    title: { zh: "從醫院最需要解決的問題開始。", en: "Start with the problem your hospital most needs to solve.", vi: "Bắt đầu từ vấn đề bệnh viện cần giải quyết nhất." },
    lead: { zh: "從 HIS 升級、臨床平台到 AI 應用，先了解醫院現況與優先需求，再討論合適的轉換路徑、方案範圍與合作責任。", en: "From HIS upgrade and clinical platforms to AI applications, we first understand the hospital's situation and priorities, then discuss the right path, scope and responsibilities.", vi: "Từ nâng cấp HIS, nền tảng lâm sàng đến ứng dụng AI, trước hết tìm hiểu hiện trạng và nhu cầu ưu tiên của bệnh viện, rồi thảo luận lộ trình chuyển đổi, phạm vi giải pháp và trách nhiệm hợp tác phù hợp." },
    privacyNote: { zh: "本表單不提供醫療諮詢；請勿填入病歷、身分證號或其他敏感資訊。", en: "This form does not provide medical advice. Please do not enter medical records, ID numbers or other sensitive information.", vi: "Biểu mẫu này không cung cấp tư vấn y tế; vui lòng không điền bệnh án, số căn cước hay thông tin nhạy cảm khác." },
    formTitle: { zh: "預約方案交流", en: "Request a solution discussion", vi: "Đặt lịch trao đổi giải pháp" },
    fields: {
      org: { zh: "醫院／機構", en: "Hospital / organization", vi: "Bệnh viện / tổ chức" },
      name: { zh: "姓名與職務", en: "Name and title", vi: "Họ tên và chức vụ" },
      country: { zh: "國家／地區", en: "Country / region", vi: "Quốc gia / khu vực" },
      email: { zh: "工作信箱", en: "Work email", vi: "Email công việc" },
      topic: { zh: "感興趣的方案", en: "Solution of interest", vi: "Giải pháp quan tâm" },
      topicPlaceholder: { zh: "請選擇合作方向", en: "Select a direction", vi: "Chọn hướng hợp tác" },
      need: { zh: "希望討論的需求", en: "What you would like to discuss", vi: "Nhu cầu muốn thảo luận" }
    },
    topics: [
      { zh: "新一代智慧化 HIS 轉換", en: "Next-generation smart HIS modernization", vi: "Chuyển đổi HIS thông minh thế hệ mới" },
      { zh: "EMR Platform", en: "EMR Platform", vi: "EMR Platform" },
      { zh: "Smart-ICU", en: "Smart-ICU", vi: "Smart-ICU" },
      { zh: "Smart-MDT", en: "Smart-MDT", vi: "Smart-MDT" },
      { zh: "原生 AI", en: "Native AI", vi: "AI nguyên bản" },
      { zh: "AI 輔助", en: "AI assistance", vi: "AI hỗ trợ" },
      { zh: "全院智慧轉型", en: "Hospital-wide smart transformation", vi: "Chuyển đổi thông minh toàn viện" },
      { zh: "資料整合／技術合作", en: "Data integration / technology partnership", vi: "Tích hợp dữ liệu / hợp tác công nghệ" },
      { zh: "其他合作", en: "Other cooperation", vi: "Hợp tác khác" }
    ],
    submit: { zh: "送出", en: "Send", vi: "Gửi" },
    formNote: { zh: "送出後會開啟您的郵件程式，將內容寄到我們的信箱；正式網站將改為線上送出並寄發確認信。", en: "Submitting opens your email client addressed to our inbox; the production site will send online and reply with a confirmation.", vi: "Sau khi gửi, ứng dụng email của bạn sẽ mở với nội dung gửi tới hộp thư của chúng tôi; website chính thức sẽ gửi trực tuyến và phản hồi xác nhận." }
  },

  /* ---------- 公司案例頁 ---------- */
  cases: {
    eyebrow: { zh: "公司案例", en: "Cases", vi: "Trường hợp hợp tác" },
    title: { zh: "讓每個案例都能回答：做了什麼，做到哪裡，如何知道。", en: "Every case answers: what was done, how far it got, and how we know.", vi: "Mỗi trường hợp đều trả lời: đã làm gì, đến đâu, và biết bằng cách nào." },
    lead: { zh: "依證據分為三類。未有核定公開素材的版位先隱藏，不使用虛構案例填補；領導者個人經驗另置於關於頁，不列為公司交付實績。", en: "Cases are grouped into three types by evidence. Slots without approved public material stay hidden rather than filled with fictional cases; the leadership's personal experience sits on the About page and is not counted as company deliveries.", vi: "Phân thành ba loại theo bằng chứng. Vị trí chưa có tài liệu công khai được duyệt sẽ ẩn, không dùng trường hợp hư cấu để lấp; kinh nghiệm cá nhân của lãnh đạo đặt ở trang Giới thiệu, không tính là thành tích bàn giao của công ty." },
    tabs: {
      live: { zh: "已上線案例", en: "Live cases", vi: "Đã vận hành" },
      pilot: { zh: "試點／建置中", en: "Pilot / in progress", vi: "Thí điểm / đang xây dựng" },
      exchange: { zh: "合作交流", en: "Cooperation exchange", vi: "Giao lưu hợp tác" }
    },
    pending: { zh: "此類別的公開素材核定中，核定後發布。", en: "Public material for this category is under review and will be published after approval.", vi: "Tài liệu công khai của nhóm này đang được phê duyệt và sẽ công bố sau khi duyệt." },
    exchangeIntro: { zh: "2025 年 9 月至 2026 年 6 月，台灣與越南的國家級智慧醫療合作交流紀錄：政府拜會、醫院考察、合作備忘錄簽署與雙向參訪。", en: "September 2025 to June 2026: records of national-level smart-healthcare cooperation between Taiwan and Vietnam, including government meetings, hospital visits, MOU signings and reciprocal study visits.", vi: "Từ tháng 9/2025 đến tháng 6/2026: hồ sơ giao lưu hợp tác y tế thông minh cấp quốc gia giữa Đài Loan và Việt Nam, gồm gặp gỡ chính phủ, khảo sát bệnh viện, ký kết MOU và tham quan học tập hai chiều." },
    fields: {
      background: { zh: "背景與範圍", en: "Background and scope", vi: "Bối cảnh và phạm vi" },
      role: { zh: "角色與狀態", en: "Role and status", vi: "Vai trò và trạng thái" },
      result: { zh: "結果與依據", en: "Result and basis", vi: "Kết quả và căn cứ" },
      permission: { zh: "公開許可與更新", en: "Permission and update", vi: "Cấp phép công khai và cập nhật" }
    },
    status: { zh: "合作交流", en: "Cooperation exchange", vi: "Giao lưu hợp tác" },
    roleText: { zh: "醫盾參與規劃與執行。", en: "AegisMed took part in planning and execution.", vi: "AegisMed tham gia hoạch định và triển khai." },
    roleMou: { zh: "合作備忘錄由 TIAI 與 OHDSI Taiwan 與院方簽署；醫盾參與規劃與執行。", en: "The MOU was signed by TIAI and OHDSI Taiwan with the hospital; AegisMed took part in planning and execution.", vi: "MOU do TIAI và OHDSI Taiwan ký kết với bệnh viện; AegisMed tham gia hoạch định và triển khai." },
    resultPhotos: { zh: "現場紀錄照片", en: "on-site photos", vi: "ảnh ghi nhận tại chỗ" },
    resultNews: { zh: "相關報導", en: "Related coverage", vi: "Tin liên quan" },
    permissionText: { zh: "照片與文字公開許可確認中；更新日期 2026-10-19。", en: "Permission for photos and text is being confirmed; updated 2026-10-19.", vi: "Đang xác nhận cấp phép công khai ảnh và nội dung; cập nhật 2026-10-19." },
    viewPhotos: { zh: "查看全部照片", en: "View all photos", vi: "Xem tất cả ảnh" }
  },

  /* ---------- 隱私政策、Cookie、網站使用說明（草稿，上線前依實際服務修訂） ---------- */
  privacy: {
    eyebrow: { zh: "網站說明", en: "Site notices", vi: "Thông báo website" },
    title: { zh: "隱私政策、Cookie 與網站使用說明", en: "Privacy policy, cookies and terms of use", vi: "Chính sách bảo mật, cookie và điều khoản sử dụng" },
    lead: { zh: "以下為草稿，正式上線前應依實際資料蒐集、服務商、Cookie、資料保存與使用地區，制定經審核的版本。", en: "The following is a draft. Before launch it must be finalized and reviewed against actual data collection, service providers, cookies, retention and regions of use.", vi: "Dưới đây là bản nháp. Trước khi vận hành chính thức cần hoàn thiện và rà soát theo thực tế thu thập dữ liệu, nhà cung cấp dịch vụ, cookie, lưu trữ dữ liệu và khu vực sử dụng." },
    sections: [
      { t: { zh: "資料蒐集", en: "Data collection", vi: "Thu thập dữ liệu" }, d: { zh: "本網站不會在您瀏覽時蒐集個人資料。聯絡表單送出的內容（機構、姓名與職務、國家／地區、工作信箱、需求說明）僅用於回覆您的洽詢，不作其他用途。請勿填入病歷、身分證號或其他敏感資訊。", en: "This website does not collect personal data while you browse. Information submitted through the contact form (organization, name and title, country / region, work email, request) is used only to respond to your inquiry. Please do not enter medical records, ID numbers or other sensitive information.", vi: "Website này không thu thập dữ liệu cá nhân khi bạn duyệt web. Thông tin gửi qua biểu mẫu liên hệ (tổ chức, họ tên và chức vụ, quốc gia / khu vực, email công việc, nhu cầu) chỉ dùng để phản hồi yêu cầu của bạn. Vui lòng không điền bệnh án, số căn cước hay thông tin nhạy cảm khác." } },
      { t: { zh: "Cookie 與第三方服務", en: "Cookies and third-party services", vi: "Cookie và dịch vụ bên thứ ba" }, d: { zh: "本網站僅使用瀏覽器本機儲存記住您選擇的語言，不使用追蹤 Cookie。網頁字型由 Google Fonts 提供，載入時您的瀏覽器會向 Google 伺服器發出請求。若日後加入分析或表單服務，將於此更新。", en: "This website uses only your browser's local storage to remember your language choice and does not use tracking cookies. Web fonts are served by Google Fonts, so your browser requests them from Google servers. Any analytics or form services added later will be listed here.", vi: "Website chỉ dùng bộ nhớ cục bộ của trình duyệt để ghi nhớ ngôn ngữ bạn chọn, không dùng cookie theo dõi. Phông chữ web do Google Fonts cung cấp nên trình duyệt sẽ gửi yêu cầu tới máy chủ Google. Nếu sau này bổ sung dịch vụ phân tích hoặc biểu mẫu, sẽ cập nhật tại đây." } },
      { t: { zh: "內容性質", en: "Nature of content", vi: "Tính chất nội dung" }, d: { zh: "所有方案與流程說明均為網站內容及版型示意，非產品功能驗收、醫療建議或合規聲明。功能、版本、案例與數字以公司核定文件為準。", en: "All solution and workflow descriptions are website content and layout illustrations, not product acceptance, medical advice or compliance statements. Functions, versions, cases and figures are governed by the company's approved documents.", vi: "Mọi mô tả giải pháp và quy trình đều là nội dung website và minh họa bố cục, không phải nghiệm thu tính năng sản phẩm, tư vấn y tế hay tuyên bố tuân thủ. Tính năng, phiên bản, trường hợp và con số theo tài liệu đã được công ty phê duyệt." } },
      { t: { zh: "智慧財產與聯絡", en: "Intellectual property and contact", vi: "Sở hữu trí tuệ và liên hệ" }, d: { zh: "網站文字、圖像與標誌屬醫盾人工智慧股份有限公司或其授權人所有。有關本說明的問題，請透過聯絡頁與我們聯繫。", en: "Text, images and marks on this website belong to AegisMed AI co. or their licensors. For questions about these notices, please contact us through the contact page.", vi: "Văn bản, hình ảnh và biểu trưng trên website thuộc sở hữu của AegisMed AI co. hoặc bên cấp phép. Mọi thắc mắc về thông báo này, vui lòng liên hệ qua trang Liên hệ." } }
    ]
  }
};
