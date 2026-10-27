/* ============================================================
   醫盾官網 — 內容資料檔（三語）
   更新新聞、里程碑、相簿、專家時，只需修改這個檔案。
   每個欄位用 { zh: "...", en: "...", vi: "..." } 表示三種語言。
   ============================================================ */
window.SITE_DATA = {

  /* ---------- 公司基本資料（佔位，待補） ---------- */
  company: {
    name: { zh: "醫盾", en: "AegisMed AI co.", vi: "AegisMed AI co." },
    fullName: { zh: "醫盾人工智慧股份有限公司", en: "AegisMed AI co.", vi: "AegisMed AI co." },
    tagline: { zh: "從 HIS 升級，邁向 AI 原生的智慧醫院。", en: "From HIS upgrade to the AI-native smart hospital.", vi: "Từ nâng cấp HIS đến bệnh viện thông minh AI-native." },
    email: "contact@example.com",
    phone: "+886-2-0000-0000",
    address: { zh: "台北市（地址待補）", en: "Taipei, Taiwan (address to be confirmed)", vi: "Đài Bắc, Đài Loan (địa chỉ sẽ cập nhật)" },
    videoUrl: "https://drive.google.com/file/d/1nBwjhi7T4c_Fplk3-6ogJo2Nlpz9KW42/view?usp=sharing"
  },

  /* ---------- 解決方案 ---------- */
  services: [
    {
      id: "smart-icu",
      icon: "monitor",
      photo: "assets/photos/s18-4.jpg",
      title: { zh: "Smart ICU 智慧加護病房", en: "Smart ICU", vi: "Smart ICU – Hồi sức tích cực thông minh" },
      tagline: {
        zh: "整合監測數據與 AI 預警，讓重症照護更早一步。",
        en: "Integrated monitoring and AI early warning for critical care.",
        vi: "Tích hợp dữ liệu theo dõi và cảnh báo sớm bằng AI cho hồi sức tích cực."
      },
      desc: {
        zh: "將床邊監視器、呼吸器、檢驗與護理紀錄整合成單一視圖，透過 AI 模型即時評估病人惡化風險，協助加護團隊在黃金時間做出決策，並以品質指標持續改善 ICU 運作。",
        en: "We bring bedside monitors, ventilators, laboratory results and nursing records into one view. AI models continuously assess deterioration risk so ICU teams can act within the golden hour, while quality indicators drive ongoing improvement.",
        vi: "Chúng tôi tích hợp dữ liệu từ monitor đầu giường, máy thở, xét nghiệm và hồ sơ điều dưỡng thành một màn hình duy nhất. Các mô hình AI liên tục đánh giá nguy cơ diễn tiến nặng để đội ngũ ICU can thiệp kịp thời, đồng thời các chỉ số chất lượng giúp cải tiến liên tục."
      },
      features: [
        { zh: "多來源生理數據即時整合與視覺化儀表板", en: "Real-time integration of multi-source vital signs with visual dashboards", vi: "Tích hợp dữ liệu sinh hiệu đa nguồn theo thời gian thực với bảng điều khiển trực quan" },
        { zh: "敗血症、呼吸衰竭等惡化風險 AI 早期預警", en: "AI early warning for sepsis, respiratory failure and other deterioration", vi: "Cảnh báo sớm bằng AI đối với nhiễm khuẩn huyết, suy hô hấp và các diễn tiến nặng" },
        { zh: "跨院遠距重症會診與專家支援", en: "Tele-ICU consultation and remote expert support", vi: "Hội chẩn hồi sức từ xa và hỗ trợ của chuyên gia" },
        { zh: "ICU 品質指標、床位與人力管理分析", en: "ICU quality indicators, bed and staffing analytics", vi: "Phân tích chỉ số chất lượng ICU, giường bệnh và nhân lực" }
      ],
      audience: {
        zh: "醫學中心與區域醫院的加護病房、重症醫學部門。",
        en: "ICUs and critical care departments in medical centers and regional hospitals.",
        vi: "Khoa Hồi sức tích cực tại các bệnh viện tuyến trung ương và tuyến tỉnh."
      }
    },
    {
      id: "smart-mdt",
      icon: "users",
      photo: "assets/photos/s09-3.jpg",
      title: { zh: "Smart MDT 智慧多專科團隊會診", en: "Smart MDT", vi: "Smart MDT – Hội chẩn đa chuyên khoa thông minh" },
      tagline: {
        zh: "把病歷、影像與專家意見整合在同一個會議桌上。",
        en: "Records, images and expert opinions on one virtual table.",
        vi: "Hồ sơ, hình ảnh và ý kiến chuyên gia trên cùng một bàn hội chẩn."
      },
      desc: {
        zh: "為癌症等複雜病人建立數位化多專科會診流程：自動彙整病歷與影像、AI 產生病例摘要、跨院遠距連線，並追蹤治療決策的執行與成效，讓每位病人都能獲得團隊共識的最佳治療計畫。",
        en: "A digital multidisciplinary workflow for cancer and other complex cases: automatic case compilation, AI-generated summaries, cross-hospital video conferencing, and tracking of decisions and outcomes, so every patient receives a consensus-based treatment plan.",
        vi: "Quy trình hội chẩn đa chuyên khoa số hóa cho ung thư và các ca bệnh phức tạp: tự động tổng hợp hồ sơ, AI tạo bản tóm tắt ca bệnh, kết nối trực tuyến liên viện và theo dõi việc thực hiện quyết định điều trị, để mỗi bệnh nhân nhận được phác đồ tối ưu dựa trên đồng thuận của đội ngũ."
      },
      features: [
        { zh: "病歷、病理與醫學影像自動彙整", en: "Automatic compilation of records, pathology and imaging", vi: "Tự động tổng hợp hồ sơ bệnh án, giải phẫu bệnh và hình ảnh y khoa" },
        { zh: "AI 輔助病例摘要與治療指引比對", en: "AI-assisted case summaries and guideline matching", vi: "Tóm tắt ca bệnh bằng AI và đối chiếu với hướng dẫn điều trị" },
        { zh: "跨院、跨國遠距 MDT 會議平台", en: "Cross-hospital and cross-border virtual MDT meetings", vi: "Nền tảng hội chẩn MDT trực tuyến liên viện và xuyên quốc gia" },
        { zh: "治療決策追蹤與成效回饋", en: "Decision tracking and outcome feedback", vi: "Theo dõi quyết định điều trị và phản hồi kết quả" }
      ],
      audience: {
        zh: "癌症中心、腫瘤科與需要跨科協作的專科團隊。",
        en: "Cancer centers, oncology departments and specialty teams that rely on cross-disciplinary collaboration.",
        vi: "Trung tâm ung bướu, khoa ung bướu và các đội ngũ chuyên khoa cần phối hợp liên khoa."
      }
    },
    {
      id: "talent-exchange",
      icon: "globe",
      photo: "assets/photos/s17-1.jpg",
      title: { zh: "醫療人才交流與培訓", en: "Medical Talent Exchange & Training", vi: "Trao đổi và đào tạo nhân lực y tế" },
      tagline: {
        zh: "連結台灣醫學中心，為合作醫院量身設計參訪與培訓。",
        en: "Tailored study visits and training with Taiwan's leading medical centers.",
        vi: "Chương trình tham quan học tập và đào tạo được thiết kế riêng cùng các trung tâm y khoa hàng đầu Đài Loan."
      },
      desc: {
        zh: "我們規劃並執行醫療代表團的參訪與培訓行程，從衛生主管機關、健保制度到醫學中心的智慧醫療場域，安排主題明確的交流；並協助合作醫院建立長期的院際夥伴關係與臨床觀摩機制。",
        en: "We design and run study visits and training programs for medical delegations, from health authorities and insurance systems to smart-hospital sites at leading medical centers, and help partner hospitals build long-term institutional partnerships and clinical observerships.",
        vi: "Chúng tôi thiết kế và tổ chức các chuyến tham quan học tập và chương trình đào tạo cho các đoàn y tế, từ cơ quan quản lý y tế, hệ thống bảo hiểm đến các mô hình bệnh viện thông minh tại các trung tâm y khoa hàng đầu, đồng thời hỗ trợ bệnh viện đối tác xây dựng quan hệ hợp tác lâu dài và cơ chế thực tập lâm sàng."
      },
      features: [
        { zh: "主題式代表團參訪行程規劃與全程陪同", en: "Theme-based delegation programs with end-to-end coordination", vi: "Thiết kế chương trình tham quan theo chủ đề và đồng hành xuyên suốt" },
        { zh: "與台灣醫學中心的院際合作與臨床觀摩", en: "Institutional partnerships and clinical observerships with Taiwan's medical centers", vi: "Hợp tác liên viện và thực tập lâm sàng tại các trung tâm y khoa Đài Loan" },
        { zh: "智慧醫院建置、醫院管理與專科主題課程", en: "Courses on smart-hospital development, hospital management and clinical specialties", vi: "Khóa học về xây dựng bệnh viện thông minh, quản lý bệnh viện và chuyên khoa" },
        { zh: "雙向專家互訪、研討會與論壇", en: "Two-way expert visits, seminars and forums", vi: "Trao đổi chuyên gia hai chiều, hội thảo và diễn đàn" }
      ],
      audience: {
        zh: "衛生主管機關、醫院管理階層與臨床醫護團隊。",
        en: "Health authorities, hospital leadership and clinical teams.",
        vi: "Cơ quan quản lý y tế, lãnh đạo bệnh viện và đội ngũ lâm sàng."
      }
    },
    {
      id: "data-training",
      icon: "database",
      photo: "assets/photos/s22-3.jpg",
      title: { zh: "醫療數據應用培訓", en: "Healthcare Data Application Training", vi: "Đào tạo ứng dụng dữ liệu y tế" },
      tagline: {
        zh: "從資料標準化到 AI 模型，培養醫院自己的數據團隊。",
        en: "From data standards to AI models: building the hospital's own data team.",
        vi: "Từ chuẩn hóa dữ liệu đến mô hình AI: xây dựng đội ngũ dữ liệu của chính bệnh viện."
      },
      desc: {
        zh: "以 OHDSI 共通資料模型（OMOP CDM）為基礎，提供醫療資料標準化、資料治理、觀察性研究與 AI 模型開發的系統化培訓，結合台灣健保資料庫與醫學中心的實務經驗，讓合作醫院的數據真正產生臨床與管理價值。",
        en: "Built on the OHDSI common data model (OMOP CDM), our programs cover data standardization, governance, observational research and AI model development, drawing on Taiwan's National Health Insurance database and medical-center experience so partner hospitals can turn their data into clinical and managerial value.",
        vi: "Dựa trên mô hình dữ liệu chung OHDSI (OMOP CDM), chương trình bao gồm chuẩn hóa dữ liệu y tế, quản trị dữ liệu, nghiên cứu quan sát và phát triển mô hình AI, kết hợp kinh nghiệm từ cơ sở dữ liệu Bảo hiểm Y tế Quốc gia Đài Loan và các trung tâm y khoa, giúp dữ liệu của bệnh viện đối tác tạo ra giá trị lâm sàng và quản lý thực sự."
      },
      features: [
        { zh: "OMOP CDM 資料轉換與品質檢核工作坊", en: "OMOP CDM conversion and data-quality workshops", vi: "Hội thảo chuyển đổi dữ liệu sang OMOP CDM và kiểm tra chất lượng dữ liệu" },
        { zh: "醫療資料治理、隱私保護與法規遵循", en: "Data governance, privacy protection and regulatory compliance", vi: "Quản trị dữ liệu y tế, bảo vệ quyền riêng tư và tuân thủ pháp quy" },
        { zh: "觀察性研究設計與跨國多中心分析", en: "Observational study design and multi-center, multi-country analytics", vi: "Thiết kế nghiên cứu quan sát và phân tích đa trung tâm xuyên quốc gia" },
        { zh: "臨床 AI 模型開發、驗證與導入實作", en: "Hands-on development, validation and deployment of clinical AI models", vi: "Thực hành phát triển, kiểm định và triển khai mô hình AI lâm sàng" }
      ],
      audience: {
        zh: "醫院資訊部門、臨床研究團隊與數據科學人員。",
        en: "Hospital IT departments, clinical research teams and data scientists.",
        vi: "Phòng công nghệ thông tin bệnh viện, nhóm nghiên cứu lâm sàng và nhân sự khoa học dữ liệu."
      }
    }
  ],

  /* ---------- 里程碑：四個階段 ---------- */
  phases: [
    { id: "p1", period: "2025.09 – 2025.10",
      title: { zh: "台灣專家團赴越南考察", en: "Taiwan expert delegation to Vietnam", vi: "Đoàn chuyên gia Đài Loan khảo sát tại Việt Nam" },
      summary: { zh: "從衛生部、副總理到五家指標醫院，建立國家級合作的起點。", en: "From the Ministry of Health and the Deputy Prime Minister to five leading hospitals: the starting point of a national-level partnership.", vi: "Từ Bộ Y tế, Phó Thủ tướng đến năm bệnh viện đầu ngành: khởi đầu cho hợp tác cấp quốc gia." } },
    { id: "p2", period: "2026.01",
      title: { zh: "越南醫療代表團訪台", en: "Vietnamese medical delegation visits Taiwan", vi: "Đoàn y tế Việt Nam thăm Đài Loan" },
      summary: { zh: "越南衛生部與指標醫院組團來台，走訪健保署、衛福部與四家醫學中心。", en: "The Ministry of Health and leading hospitals toured the NHIA, the MOHW and four medical centers in Taiwan.", vi: "Bộ Y tế và các bệnh viện đầu ngành Việt Nam thăm Cục Bảo hiểm Y tế, Bộ Y tế và Phúc lợi cùng bốn trung tâm y khoa Đài Loan." } },
    { id: "p3", period: "2026.03",
      title: { zh: "合作備忘錄簽署", en: "Memoranda of Understanding signed", vi: "Ký kết Biên bản ghi nhớ hợp tác" },
      summary: { zh: "與白梅醫院、K 醫院、國家兒童醫院三家國家級醫院正式簽署合作文件。", en: "Formal agreements with three national hospitals: Bạch Mai, K Hospital and the National Children's Hospital.", vi: "Ký kết chính thức với ba bệnh viện tuyến trung ương: Bạch Mai, Bệnh viện K và Bệnh viện Nhi Trung ương." } },
    { id: "p4", period: "2026.06",
      title: { zh: "國家兒童醫院代表團訪台", en: "National Children's Hospital delegation visits Taiwan", vi: "Đoàn Bệnh viện Nhi Trung ương thăm Đài Loan" },
      summary: { zh: "從河內第二院區開幕到台灣五家醫院與大學的深度交流。", en: "From the opening of Campus 2 in Hanoi to in-depth exchanges with five hospitals and universities in Taiwan.", vi: "Từ lễ khai trương cơ sở 2 tại Hà Nội đến trao đổi chuyên sâu với năm bệnh viện và trường đại học tại Đài Loan." } }
  ],

  /* ---------- 里程碑：行程 ---------- */
  events: [
    { id: "e01", phase: "p1", date: "2025-09-28", slides: [2], featured: false,
      title: { zh: "採訪台灣資深專家並錄製影片", en: "Interviews and video recording with senior Taiwanese experts", vi: "Phỏng vấn và ghi hình các chuyên gia y tế kỳ cựu Đài Loan" },
      place: { zh: "台灣", en: "Taiwan", vi: "Đài Loan" },
      desc: { zh: "邀請台灣資深醫療專家分享智慧醫療與健保數據經驗，製作合作啟動的對外影片。", en: "Senior Taiwanese healthcare experts shared their experience in smart healthcare and health-insurance data for the partnership's launch video.", vi: "Mời các chuyên gia y tế kỳ cựu Đài Loan chia sẻ kinh nghiệm về y tế thông minh và dữ liệu bảo hiểm y tế để thực hiện video khởi động hợp tác." } },
    { id: "e02", phase: "p1", date: "2025-09-29", slides: [3], featured: false, news: [10],
      title: { zh: "拜會越南衛生部陳文順副部長", en: "Meeting with Deputy Minister of Health Trần Văn Thuấn", vi: "Chào xã giao Thứ trưởng Bộ Y tế Trần Văn Thuấn" },
      place: { zh: "河內", en: "Hanoi", vi: "Hà Nội" },
      desc: { zh: "向越南衛生部說明台越智慧醫院合作構想，取得主管機關支持。", en: "Presented the Taiwan–Vietnam smart-hospital initiative to the Ministry of Health and secured its support.", vi: "Trình bày sáng kiến hợp tác bệnh viện thông minh Việt Nam – Đài Loan với Bộ Y tế và nhận được sự ủng hộ." } },
    { id: "e03", phase: "p1", date: "2025-09-29", slides: [4], featured: false, news: [10],
      title: { zh: "拜訪國家醫療健康資訊中心", en: "Visit to the National Health Information Center", vi: "Làm việc với Trung tâm Thông tin Y tế Quốc gia" },
      place: { zh: "河內", en: "Hanoi", vi: "Hà Nội" },
      desc: { zh: "交流醫療資訊基礎建設、數據標準化與互通的推動方向。", en: "Exchanged views on health-information infrastructure, data standardization and interoperability.", vi: "Trao đổi về hạ tầng thông tin y tế, chuẩn hóa dữ liệu và khả năng liên thông." } },
    { id: "e04", phase: "p1", date: "2025-09-30", slides: [5], featured: false, news: [10],
      title: { zh: "考察興安省綜合醫院", en: "Site visit to Hưng Yên Provincial General Hospital", vi: "Khảo sát Bệnh viện Đa khoa tỉnh Hưng Yên" },
      place: { zh: "興安省", en: "Hưng Yên Province", vi: "Tỉnh Hưng Yên" },
      desc: { zh: "了解省級醫院的病歷管理與資訊化現況，評估智慧醫院導入需求。", en: "Reviewed medical-record management and digitalization at a provincial hospital to assess smart-hospital needs.", vi: "Tìm hiểu hiện trạng quản lý hồ sơ bệnh án và tin học hóa tại bệnh viện tuyến tỉnh để đánh giá nhu cầu triển khai bệnh viện thông minh." } },
    { id: "e05", phase: "p1", date: "2025-09-30", slides: [6], featured: true, news: [10],
      title: { zh: "拜會越南政府黎成龍副總理", en: "Meeting with Deputy Prime Minister Lê Thành Long", vi: "Chào xã giao Phó Thủ tướng Chính phủ Lê Thành Long" },
      place: { zh: "河內", en: "Hanoi", vi: "Hà Nội" },
      desc: { zh: "在政府層級確認推動智慧醫療合作的方向與支持。", en: "Confirmed government-level direction and support for the smart-healthcare partnership.", vi: "Khẳng định định hướng và sự ủng hộ ở cấp Chính phủ đối với hợp tác y tế thông minh." } },
    { id: "e06", phase: "p1", date: "2025-10-01", slides: [7], featured: false, news: [10],
      title: { zh: "考察國家癌症醫院（K 醫院）", en: "Site visit to Vietnam National Cancer Hospital (K Hospital)", vi: "Khảo sát Bệnh viện K" },
      place: { zh: "河內", en: "Hanoi", vi: "Hà Nội" },
      desc: { zh: "討論腫瘤多專科團隊會診（MDT）與 AI 輔助診療的合作可能。", en: "Discussed cooperation on oncology multidisciplinary team (MDT) meetings and AI-assisted care.", vi: "Thảo luận hợp tác về hội chẩn đa chuyên khoa (MDT) trong ung bướu và chẩn đoán, điều trị có hỗ trợ của AI." } },
    { id: "e07", phase: "p1", date: "2025-10-01", slides: [8], featured: false, news: [10],
      title: { zh: "考察越德醫院", en: "Site visit to Việt Đức University Hospital", vi: "Khảo sát Bệnh viện Hữu nghị Việt Đức" },
      place: { zh: "河內", en: "Hanoi", vi: "Hà Nội" },
      desc: { zh: "參觀外科與重症單位，交流 Smart ICU 的導入需求。", en: "Toured surgical and critical-care units and discussed Smart ICU requirements.", vi: "Tham quan các đơn vị ngoại khoa, hồi sức và trao đổi nhu cầu triển khai Smart ICU." } },
    { id: "e08", phase: "p1", date: "2025-10-03", slides: [9], featured: false, news: [10],
      title: { zh: "考察國家兒童醫院", en: "Site visit to Vietnam National Children's Hospital", vi: "Khảo sát Bệnh viện Nhi Trung ương" },
      place: { zh: "河內", en: "Hanoi", vi: "Hà Nội" },
      desc: { zh: "參觀遠距會診中心，討論兒科智慧醫療與人才培訓合作。", en: "Visited the telehealth consultation center and discussed pediatric smart healthcare and training cooperation.", vi: "Tham quan Trung tâm hội chẩn, tư vấn khám chữa bệnh từ xa và thảo luận hợp tác về y tế thông minh nhi khoa và đào tạo nhân lực." } },
    { id: "e09", phase: "p1", date: "2025-10-03", slides: [10], featured: false, news: [10],
      title: { zh: "考察白梅醫院", en: "Site visit to Bạch Mai Hospital", vi: "Khảo sát Bệnh viện Bạch Mai" },
      place: { zh: "河內", en: "Hanoi", vi: "Hà Nội" },
      desc: { zh: "與院方交流 Smart ICU 與智慧醫院建設藍圖。", en: "Exchanged views with hospital leadership on the Smart ICU and smart-hospital roadmap.", vi: "Trao đổi với lãnh đạo bệnh viện về lộ trình Smart ICU và xây dựng bệnh viện thông minh." } },

    { id: "e10", phase: "p2", date: "2026-01-22", slides: [11], featured: false,
      title: { zh: "拜會中央健康保險署", en: "Visit to the National Health Insurance Administration", vi: "Thăm Cục Bảo hiểm Y tế Quốc gia Đài Loan (NHIA)" },
      place: { zh: "台北", en: "Taipei", vi: "Đài Bắc" },
      desc: { zh: "了解台灣全民健保制度與健保資料庫的數據應用經驗。", en: "Learned about Taiwan's National Health Insurance system and the data applications of its database.", vi: "Tìm hiểu hệ thống Bảo hiểm Y tế toàn dân của Đài Loan và kinh nghiệm ứng dụng cơ sở dữ liệu bảo hiểm." } },
    { id: "e11", phase: "p2", date: "2026-01-22", slides: [12], featured: false,
      title: { zh: "拜會衛生福利部", en: "Visit to the Ministry of Health and Welfare", vi: "Thăm Bộ Y tế và Phúc lợi Đài Loan" },
      place: { zh: "台北", en: "Taipei", vi: "Đài Bắc" },
      desc: { zh: "雙方就醫療數位轉型政策與跨境合作交換意見。", en: "Both sides exchanged views on digital-health policy and cross-border cooperation.", vi: "Hai bên trao đổi về chính sách chuyển đổi số y tế và hợp tác xuyên biên giới." } },
    { id: "e12", phase: "p2", date: "2026-01-22", slides: [13, 14], featured: true, news: [8, 9],
      title: { zh: "參訪臺北榮民總醫院", en: "Visit to Taipei Veterans General Hospital", vi: "Thăm Bệnh viện Đa khoa Cựu chiến binh Đài Bắc" },
      place: { zh: "台北", en: "Taipei", vi: "Đài Bắc" },
      desc: { zh: "參觀智慧醫院場域，包括手術機器人、遠距醫療與智慧病房應用。", en: "Toured smart-hospital sites including surgical robotics, telemedicine and smart wards.", vi: "Tham quan các mô hình bệnh viện thông minh gồm robot phẫu thuật, y tế từ xa và phòng bệnh thông minh." } },
    { id: "e13", phase: "p2", date: "2026-01-25", slides: [15], featured: false, news: [7],
      title: { zh: "參訪輔仁大學與輔大醫院", en: "Visit to Fu Jen Catholic University and Fu Jen University Hospital", vi: "Thăm Đại học Công giáo Phụ Nhân và Bệnh viện Đại học Phụ Nhân" },
      place: { zh: "新北", en: "New Taipei", vi: "Tân Bắc" },
      desc: { zh: "交流醫學教育與跨境數位醫療合作。", en: "Exchanged on medical education and cross-border digital-health cooperation.", vi: "Trao đổi về đào tạo y khoa và hợp tác y tế số xuyên biên giới." } },
    { id: "e14", phase: "p2", date: "2026-01-26", slides: [16], featured: false, news: [6],
      title: { zh: "參訪台北慈濟醫院", en: "Visit to Taipei Tzu Chi Hospital", vi: "Thăm Bệnh viện Từ Tế Đài Bắc" },
      place: { zh: "新北", en: "New Taipei", vi: "Tân Bắc" },
      desc: { zh: "參觀智慧醫療科技與臨床應用場域。", en: "Toured smart-healthcare technologies and their clinical applications.", vi: "Tham quan công nghệ y tế thông minh và các ứng dụng lâm sàng." } },
    { id: "e15", phase: "p2", date: "2026-01-27", slides: [17], featured: false, news: [5],
      title: { zh: "參訪高雄醫學大學附設中和紀念醫院", en: "Visit to Kaohsiung Medical University Chung-Ho Memorial Hospital", vi: "Thăm Bệnh viện Tưởng niệm Chung-Ho, Đại học Y Cao Hùng" },
      place: { zh: "高雄", en: "Kaohsiung", vi: "Cao Hùng" },
      desc: { zh: "交流醫療 AI 研究與臨床導入經驗。", en: "Exchanged on medical-AI research and clinical deployment experience.", vi: "Trao đổi kinh nghiệm nghiên cứu AI y tế và triển khai lâm sàng." } },

    { id: "e16", phase: "p3", date: "2026-03-22", slides: [18], featured: false, news: [4], mou: true,
      title: { zh: "白梅醫院合作簽署與交流", en: "Cooperation signing and exchange at Bạch Mai Hospital", vi: "Ký kết hợp tác và trao đổi tại Bệnh viện Bạch Mai" },
      place: { zh: "河內", en: "Hanoi", vi: "Hà Nội" },
      desc: { zh: "參訪放射影像中心，並就 Smart ICU 合作交換文件。", en: "Visited the radiology center and exchanged cooperation documents on Smart ICU.", vi: "Tham quan Trung tâm Điện quang và trao đổi văn kiện hợp tác về Smart ICU." } },
    { id: "e17", phase: "p3", date: "2026-03-24", slides: [19], featured: true, news: [0], mou: true,
      title: { zh: "與 K 醫院簽署合作備忘錄", en: "MOU signed with K Hospital", vi: "Ký kết Biên bản ghi nhớ với Bệnh viện K" },
      place: { zh: "河內", en: "Hanoi", vi: "Hà Nội" },
      desc: { zh: "以 AI 推動智慧醫院，聚焦腫瘤 MDT 與醫療數據應用。", en: "Advancing the smart hospital with AI, focusing on oncology MDT and healthcare data applications.", vi: "Thúc đẩy bệnh viện thông minh bằng AI, tập trung vào hội chẩn MDT ung bướu và ứng dụng dữ liệu y tế." } },
    { id: "e18", phase: "p3", date: "2026-03-25", slides: [20], featured: true, news: [1, 2], mou: true,
      title: { zh: "與國家兒童醫院簽署合作備忘錄", en: "MOU signed with Vietnam National Children's Hospital", vi: "Ký kết Biên bản ghi nhớ với Bệnh viện Nhi Trung ương" },
      place: { zh: "河內", en: "Hanoi", vi: "Hà Nội" },
      desc: { zh: "連結全球醫療數據網絡（OHDSI），推動兒童智慧醫院建設。", en: "Connecting to the global OHDSI data network and building a smart children's hospital.", vi: "Kết nối mạng lưới dữ liệu y tế toàn cầu OHDSI và xây dựng bệnh viện nhi thông minh." } },
    { id: "e19", phase: "p3", date: "2026-03-26", slides: [21], featured: true, news: [3], mou: true,
      title: { zh: "與白梅醫院正式簽署合作協議", en: "Formal cooperation agreement signed with Bạch Mai Hospital", vi: "Lễ ký kết thỏa thuận hợp tác với Bệnh viện Bạch Mai" },
      place: { zh: "河內", en: "Hanoi", vi: "Hà Nội" },
      desc: { zh: "上午於白梅醫院舉行簽署儀式，確立 Smart ICU 與智慧醫院合作框架。", en: "A morning signing ceremony at Bạch Mai Hospital established the framework for Smart ICU and smart-hospital cooperation.", vi: "Lễ ký kết buổi sáng tại Bệnh viện Bạch Mai xác lập khung hợp tác về Smart ICU và bệnh viện thông minh." } },
    { id: "e20", phase: "p3", date: "2026-03-26", slides: [22], featured: false, news: [3],
      title: { zh: "白梅醫院智慧醫療研討會", en: "Smart-healthcare seminar at Bạch Mai Hospital", vi: "Hội thảo y tế thông minh tại Bệnh viện Bạch Mai" },
      place: { zh: "河內", en: "Hanoi", vi: "Hà Nội" },
      desc: { zh: "下午舉辦研討會，台灣專家分享智慧醫院與數據應用經驗。", en: "In the afternoon seminar, Taiwanese experts shared smart-hospital and data-application experience.", vi: "Tại hội thảo buổi chiều, các chuyên gia Đài Loan chia sẻ kinh nghiệm về bệnh viện thông minh và ứng dụng dữ liệu." } },

    { id: "e21", phase: "p4", date: "2026-06-01", slides: [23], featured: false,
      title: { zh: "出席國家兒童醫院第二院區開幕", en: "Opening ceremony of National Children's Hospital Campus 2", vi: "Lễ khai trương Bệnh viện Nhi Trung ương cơ sở 2" },
      place: { zh: "河內", en: "Hanoi", vi: "Hà Nội" },
      desc: { zh: "受邀出席開幕典禮，見證合作夥伴的重要里程碑。", en: "Invited to the opening ceremony to witness a key milestone of our partner hospital.", vi: "Tham dự lễ khai trương theo lời mời, chứng kiến cột mốc quan trọng của bệnh viện đối tác." } },
    { id: "e22", phase: "p4", date: "2026-06-08", slides: [24], featured: false,
      title: { zh: "兒童醫院代表團訪台歡迎晚宴", en: "Welcome dinner for the Children's Hospital delegation", vi: "Tiệc chào mừng đoàn Bệnh viện Nhi Trung ương tại Đài Loan" },
      place: { zh: "台北", en: "Taipei", vi: "Đài Bắc" },
      desc: { zh: "為來台參訪的國家兒童醫院代表團舉辦歡迎晚宴。", en: "A welcome dinner opened the delegation's study visit to Taiwan.", vi: "Tiệc chào mừng mở đầu chuyến tham quan học tập của đoàn tại Đài Loan." } },
    { id: "e23", phase: "p4", date: "2026-06-09", slides: [25, 26], featured: false,
      title: { zh: "參訪馬偕兒童醫院", en: "Visit to MacKay Children's Hospital", vi: "Thăm Bệnh viện Nhi MacKay" },
      place: { zh: "台北", en: "Taipei", vi: "Đài Bắc" },
      desc: { zh: "觀摩兒科智慧醫療、藥事與病房管理。", en: "Observed pediatric smart healthcare, pharmacy and ward management.", vi: "Tham quan y tế thông minh nhi khoa, dược và quản lý phòng bệnh." } },
    { id: "e24", phase: "p4", date: "2026-06-10", slides: [27], featured: false,
      title: { zh: "參訪臺大兒童醫院", en: "Visit to National Taiwan University Children's Hospital", vi: "Thăm Bệnh viện Nhi Đại học Quốc gia Đài Loan" },
      place: { zh: "台北", en: "Taipei", vi: "Đài Bắc" },
      desc: { zh: "交流兒童重症照護與智慧醫療應用。", en: "Exchanged on pediatric critical care and smart-healthcare applications.", vi: "Trao đổi về hồi sức nhi khoa và ứng dụng y tế thông minh." } },
    { id: "e25", phase: "p4", date: "2026-06-11", slides: [28], featured: false,
      title: { zh: "參訪長庚紀念醫院", en: "Visit to Chang Gung Memorial Hospital", vi: "Thăm Bệnh viện Tưởng niệm Chang Gung" },
      place: { zh: "桃園", en: "Taoyuan", vi: "Đào Viên" },
      desc: { zh: "參觀先進醫療設施與智慧醫療應用。", en: "Toured advanced medical facilities and smart-healthcare applications.", vi: "Tham quan cơ sở y tế hiện đại và các ứng dụng y tế thông minh." } },
    { id: "e26", phase: "p4", date: "2026-06-11", slides: [29], featured: false,
      title: { zh: "參訪長庚大學", en: "Visit to Chang Gung University", vi: "Thăm Đại học Chang Gung" },
      place: { zh: "桃園", en: "Taoyuan", vi: "Đào Viên" },
      desc: { zh: "交流醫學教育與人才培訓合作。", en: "Exchanged on medical education and talent-training cooperation.", vi: "Trao đổi về đào tạo y khoa và hợp tác bồi dưỡng nhân lực." } },
    { id: "e27", phase: "p4", date: "2026-06-12", slides: [30, 31], featured: false,
      title: { zh: "參訪花蓮慈濟醫院", en: "Visit to Hualien Tzu Chi Hospital", vi: "Thăm Bệnh viện Từ Tế Hoa Liên" },
      place: { zh: "花蓮", en: "Hualien", vi: "Hoa Liên" },
      desc: { zh: "參觀智慧醫療與遠距照護應用，為交流行程畫下句點。", en: "Toured smart-healthcare and telecare applications, concluding the study visit.", vi: "Tham quan ứng dụng y tế thông minh và chăm sóc từ xa, khép lại chuyến tham quan học tập." } }
  ],

  /* ---------- 相簿：每張投影片的照片（由簡報自動產生） ---------- */
  photos: {
    2: ["s02-1.jpg"],
    3: ["s03-1.jpg", "s03-2.jpg", "s03-3.jpg", "s03-4.jpg", "s03-5.jpg"],
    4: ["s04-1.jpg", "s04-2.jpg", "s04-3.jpg", "s04-4.jpg"],
    5: ["s05-3.jpg", "s05-4.jpg", "s05-5.jpg"],
    6: ["s06-1.jpg", "s06-2.jpg"],
    7: ["s07-1.jpg", "s07-2.jpg", "s07-3.jpg"],
    8: ["s08-1.jpg", "s08-2.jpg", "s08-3.jpg", "s08-4.jpg"],
    9: ["s09-1.jpg", "s09-2.jpg", "s09-3.jpg", "s09-4.jpg"],
    10: ["s10-1.jpg", "s10-2.jpg", "s10-3.jpg"],
    11: ["s11-1.jpg", "s11-2.jpg"],
    12: ["s12-1.jpg", "s12-2.jpg", "s12-3.jpg"],
    13: ["s13-1.jpg", "s13-2.jpg"],
    14: ["s14-1.jpg"],
    15: ["s15-1.jpg"],
    16: ["s16-1.jpg", "s16-2.jpg"],
    17: ["s17-1.jpg", "s17-2.jpg", "s17-3.jpg"],
    18: ["s18-1.jpg", "s18-2.jpg", "s18-3.jpg", "s18-4.jpg"],
    19: ["s19-1.jpg", "s19-2.jpg", "s19-3.jpg", "s19-4.jpg"],
    20: ["s20-1.jpg", "s20-2.jpg", "s20-3.jpg"],
    21: ["s21-1.jpg", "s21-2.jpg", "s21-3.jpg"],
    22: ["s22-1.jpg", "s22-2.jpg", "s22-3.jpg", "s22-4.jpg"],
    23: ["s23-1.jpg", "s23-2.jpg", "s23-3.jpg"],
    24: ["s24-1.jpg", "s24-2.jpg"],
    25: ["s25-1.jpg", "s25-2.jpg"],
    26: ["s26-1.jpg", "s26-2.jpg", "s26-3.jpg"],
    27: ["s27-1.jpg", "s27-2.jpg"],
    28: ["s28-1.jpg", "s28-2.jpg", "s28-3.jpg"],
    29: ["s29-1.jpg", "s29-2.jpg"],
    30: ["s30-1.jpg", "s30-2.jpg", "s30-3.jpg"],
    31: ["s31-1.jpg", "s31-2.jpg"]
  },
  /* 不顯示的照片清單（目前為空；疑涉隱私與專家字卡的照片已自素材中移除） */
  excludePhotos: [],
  /* 每個行程使用的代表照片 */
  cover: {
    e01: "s02-1.jpg", e02: "s03-3.jpg", e03: "s04-2.jpg", e04: "s05-5.jpg", e05: "s06-1.jpg", e06: "s07-3.jpg", e07: "s08-2.jpg",
    e08: "s09-3.jpg", e09: "s10-1.jpg", e10: "s11-2.jpg", e11: "s12-1.jpg", e12: "s13-1.jpg", e13: "s15-1.jpg", e14: "s16-1.jpg",
    e15: "s17-1.jpg", e16: "s18-3.jpg", e17: "s19-3.jpg", e18: "s20-1.jpg", e19: "s21-2.jpg", e20: "s22-3.jpg", e21: "s23-1.jpg",
    e22: "s24-2.jpg", e23: "s25-1.jpg", e24: "s27-2.jpg", e25: "s28-2.jpg", e26: "s29-2.jpg", e27: "s30-1.jpg"
  },

  /* ---------- 合作組織 ---------- */
  organizations: [
    { abbr: "TIAI",
      name: { zh: "台灣人工智慧發展協會", en: "Taiwan Institute of Artificial Intelligence (TIAI)", vi: "Hiệp hội Phát triển Trí tuệ Nhân tạo Đài Loan (TIAI)" },
      desc: { zh: "推動人工智慧在醫療領域的研究與應用，為台越 Smart ICU 與智慧醫院合作的簽署方之一。", en: "Advances AI research and application in healthcare; a signatory to the Taiwan–Vietnam Smart ICU and smart-hospital agreements.", vi: "Thúc đẩy nghiên cứu và ứng dụng trí tuệ nhân tạo trong y tế; là một bên ký kết các thỏa thuận Smart ICU và bệnh viện thông minh Việt Nam – Đài Loan." } },
    { abbr: "OHDSI Taiwan",
      name: { zh: "OHDSI Taiwan", en: "OHDSI Taiwan Chapter", vi: "Hiệp hội OHDSI Đài Loan" },
      desc: { zh: "國際觀察性健康資料科學與資訊學（OHDSI）社群的台灣分會，推動 OMOP 共通資料模型與跨國多中心研究。", en: "The Taiwan chapter of the Observational Health Data Sciences and Informatics (OHDSI) community, promoting the OMOP common data model and multi-center international research.", vi: "Chi hội Đài Loan của cộng đồng Khoa học và Tin học Dữ liệu Sức khỏe Quan sát (OHDSI), thúc đẩy mô hình dữ liệu chung OMOP và nghiên cứu đa trung tâm quốc tế." } }
  ],

  /* ---------- 合作夥伴（依國家） ---------- */
  partners: {
    vn: [
      { zh: "越南衛生部", en: "Ministry of Health, Vietnam", vi: "Bộ Y tế Việt Nam" },
      { zh: "國家醫療健康資訊中心", en: "National Health Information Center", vi: "Trung tâm Thông tin Y tế Quốc gia" },
      { zh: "白梅醫院", en: "Bạch Mai Hospital", vi: "Bệnh viện Bạch Mai" },
      { zh: "國家癌症醫院（K 醫院）", en: "Vietnam National Cancer Hospital (K Hospital)", vi: "Bệnh viện K" },
      { zh: "國家兒童醫院", en: "Vietnam National Children's Hospital", vi: "Bệnh viện Nhi Trung ương" },
      { zh: "越德醫院", en: "Việt Đức University Hospital", vi: "Bệnh viện Hữu nghị Việt Đức" },
      { zh: "興安省綜合醫院", en: "Hưng Yên Provincial General Hospital", vi: "Bệnh viện Đa khoa tỉnh Hưng Yên" }
    ],
    tw: [
      { zh: "衛生福利部", en: "Ministry of Health and Welfare", vi: "Bộ Y tế và Phúc lợi Đài Loan" },
      { zh: "中央健康保險署", en: "National Health Insurance Administration", vi: "Cục Bảo hiểm Y tế Quốc gia Đài Loan" },
      { zh: "臺北榮民總醫院", en: "Taipei Veterans General Hospital", vi: "Bệnh viện Đa khoa Cựu chiến binh Đài Bắc" },
      { zh: "輔仁大學與輔大醫院", en: "Fu Jen Catholic University & Hospital", vi: "Đại học Công giáo Phụ Nhân và Bệnh viện Đại học Phụ Nhân" },
      { zh: "台北慈濟醫院", en: "Taipei Tzu Chi Hospital", vi: "Bệnh viện Từ Tế Đài Bắc" },
      { zh: "高雄醫學大學附設中和紀念醫院", en: "Kaohsiung Medical University Chung-Ho Memorial Hospital", vi: "Bệnh viện Tưởng niệm Chung-Ho, Đại học Y Cao Hùng" },
      { zh: "馬偕兒童醫院", en: "MacKay Children's Hospital", vi: "Bệnh viện Nhi MacKay" },
      { zh: "臺大兒童醫院", en: "National Taiwan University Children's Hospital", vi: "Bệnh viện Nhi Đại học Quốc gia Đài Loan" },
      { zh: "長庚紀念醫院、長庚大學", en: "Chang Gung Memorial Hospital & Chang Gung University", vi: "Bệnh viện Tưởng niệm Chang Gung và Đại học Chang Gung" },
      { zh: "花蓮慈濟醫院", en: "Hualien Tzu Chi Hospital", vi: "Bệnh viện Từ Tế Hoa Liên" }
    ]
  },

  /* ---------- 新聞與媒體報導 ---------- */
  news: [
    { date: "2026-03-31", lang: "vi", url: "https://hanoimoi.vn/benh-vien-k-hop-tac-quoc-te-thuc-day-benh-vien-thong-minh-bang-ai-740796.html",
      source: { zh: "新河內報 Hà Nội Mới", en: "Hà Nội Mới", vi: "Báo Hànộimới" },
      original: "Bệnh viện K hợp tác quốc tế, thúc đẩy bệnh viện thông minh bằng AI",
      title: { zh: "K 醫院推動國際合作，以 AI 打造智慧醫院", en: "K Hospital pursues international cooperation to build a smart hospital with AI", vi: "Bệnh viện K hợp tác quốc tế, thúc đẩy bệnh viện thông minh bằng AI" } },
    { date: "2026-03-26", lang: "vi", url: "https://benhviennhitrunguong.gov.vn/ky-ket-bien-ban-ghi-nho-hop-tac-mou-voi-hai-hiep-hoi-ohdsi-va-tiai-dai-loan-trung-quoc.html",
      source: { zh: "越南國家兒童醫院", en: "Vietnam National Children's Hospital", vi: "Bệnh viện Nhi Trung ương" },
      original: "Ký kết Biên bản ghi nhớ hợp tác (MOU) với hai hiệp hội OHDSI và TIAI: Kết nối dữ liệu y tế toàn cầu, thúc đẩy phát triển bệnh viện thông minh",
      title: { zh: "與 OHDSI、TIAI 兩協會簽署合作備忘錄：連結全球醫療數據，推動智慧醫院發展", en: "MOU signed with OHDSI and TIAI: connecting global health data and advancing the smart hospital", vi: "Ký kết Biên bản ghi nhớ hợp tác (MOU) với hai hiệp hội OHDSI và TIAI: Kết nối dữ liệu y tế toàn cầu, thúc đẩy phát triển bệnh viện thông minh" } },
    { date: "2026-03-26", lang: "vi", url: "https://suckhoedoisong.vn/hop-tac-quoc-te-thuc-day-chuyen-doi-so-y-te-huong-toi-benh-vien-dieu-tri-cham-soc-tre-em-thong-minh-169260325214620341.htm",
      source: { zh: "健康與生活報 Sức khỏe & Đời sống", en: "Sức khỏe & Đời sống", vi: "Báo Sức khỏe & Đời sống" },
      original: "Hợp tác quốc tế thúc đẩy chuyển đổi số y tế tại Bệnh viện Nhi Trung ương",
      title: { zh: "國際合作推動國家兒童醫院的醫療數位轉型", en: "International cooperation drives digital health transformation at the National Children's Hospital", vi: "Hợp tác quốc tế thúc đẩy chuyển đổi số y tế tại Bệnh viện Nhi Trung ương" } },
    { date: "2026-03-26", lang: "vi", url: "https://hanoionline.vn/hop-tac-xay-dung-mo-hinh-benh-vien-thong-minh-391385.htm",
      source: { zh: "河內電視台 Hanoi Online", en: "Hanoi Online", vi: "Đài Hà Nội" },
      original: "Hợp tác xây dựng mô hình bệnh viện thông minh",
      title: { zh: "合作建構智慧醫院模式", en: "Cooperation to build a smart-hospital model", vi: "Hợp tác xây dựng mô hình bệnh viện thông minh" } },
    { date: "2026-03-02", lang: "vi", url: "https://bachmai.gov.vn/bai-viet/benh-vien-bach-mai-lam-viec-voi-hiep-hoi-phat-trien-tri-tue-nhan-tao-dai-loan-thuc-day-hop-tac-xay-dung-smart-icu-va-benh-vien-thong-minh?id=20abc638-8879-4d47-b916-1e1a87155305",
      source: { zh: "白梅醫院", en: "Bạch Mai Hospital", vi: "Bệnh viện Bạch Mai" },
      original: "Bệnh viện Bạch Mai làm việc với Hiệp hội Phát triển Trí tuệ Nhân tạo Đài Loan: Thúc đẩy hợp tác xây dựng Smart ICU và bệnh viện thông minh",
      title: { zh: "白梅醫院與台灣人工智慧發展協會會談：推動 Smart ICU 與智慧醫院合作", en: "Bạch Mai Hospital meets the Taiwan Institute of Artificial Intelligence: advancing Smart ICU and smart-hospital cooperation", vi: "Bệnh viện Bạch Mai làm việc với Hiệp hội Phát triển Trí tuệ Nhân tạo Đài Loan: Thúc đẩy hợp tác xây dựng Smart ICU và bệnh viện thông minh" } },
    { date: "2026-01-26", lang: "zh", url: "https://www.facebook.com/KMUH.org.1957/posts/pfbid02bo9MBEmZt4q2x9nW19r6ywBz6gM2WoZ2zJbj4v9HCKBtVXMprtWgk4nsnZNRfKhBl?rdid=4vi0HH86cEgJDDA5",
      source: { zh: "高雄醫學大學附設中和紀念醫院 Facebook", en: "Kaohsiung Medical University Chung-Ho Memorial Hospital (Facebook)", vi: "Bệnh viện Tưởng niệm Chung-Ho, Đại học Y Cao Hùng (Facebook)" },
      original: "當醫療沒有國界，智慧成為共同語言",
      title: { zh: "當醫療沒有國界，智慧成為共同語言：越南醫療代表團參訪高醫", en: "When healthcare knows no borders, intelligence becomes the common language: Vietnamese delegation visits KMUH", vi: "Khi y tế không có biên giới, trí tuệ trở thành ngôn ngữ chung: Đoàn y tế Việt Nam thăm KMUH" } },
    { date: "2026-01-26", lang: "zh", url: "https://tw.news.yahoo.com/%E8%B7%A8%E5%9C%8B%E4%BA%A4%E6%B5%81%E6%99%BA%E6%85%A7%E9%86%AB%E7%99%82%E7%A7%91%E6%8A%80-%E8%B6%8A%E5%8D%97%E8%A1%9B%E7%94%9F%E7%A6%8F%E5%88%A9%E9%83%A8%E7%8E%87%E5%9C%98%E5%8F%83%E8%A8%AA%E5%8F%B0%E5%8C%97%E6%85%88%E9%99%A2-082458486.html",
      source: { zh: "Yahoo 奇摩新聞", en: "Yahoo News Taiwan", vi: "Yahoo News Đài Loan" },
      original: "跨國交流智慧醫療科技 越南衛生福利部率團參訪台北慈院",
      title: { zh: "跨國交流智慧醫療科技　越南衛生福利部率團參訪台北慈院", en: "Cross-border exchange on smart-healthcare technology: Vietnam's Ministry of Health leads delegation to Taipei Tzu Chi Hospital", vi: "Giao lưu công nghệ y tế thông minh xuyên quốc gia: Bộ Y tế Việt Nam dẫn đoàn thăm Bệnh viện Từ Tế Đài Bắc" } },
    { date: "2026-01-26", lang: "zh", url: "https://www.fju.edu.tw/focusDetail.jsp?focusID=2862&focusClassID=1",
      source: { zh: "輔仁大學全球資訊網", en: "Fu Jen Catholic University", vi: "Đại học Công giáo Phụ Nhân" },
      original: "台越智慧醫療新篇章 越南衛福部與指標醫院組團訪輔大及輔醫 深耕跨境數位醫療合作",
      title: { zh: "台越智慧醫療新篇章　越南衛福部與指標醫院組團訪輔大及輔醫", en: "A new chapter in Taiwan–Vietnam smart healthcare: Vietnam's Ministry of Health and leading hospitals visit Fu Jen University and Hospital", vi: "Chương mới trong y tế thông minh Việt Nam – Đài Loan: Bộ Y tế và các bệnh viện đầu ngành thăm Đại học và Bệnh viện Phụ Nhân" } },
    { date: "2026-01-23", lang: "zh", url: "https://wd.vghtpe.gov.tw/News!one.action?nid=15546",
      source: { zh: "臺北榮民總醫院", en: "Taipei Veterans General Hospital", vi: "Bệnh viện Đa khoa Cựu chiến binh Đài Bắc" },
      original: "深化國際合作　越南醫療代表團蒞院交流智慧醫療",
      title: { zh: "深化國際合作　越南醫療代表團蒞院交流智慧醫療", en: "Deepening international cooperation: Vietnamese medical delegation visits to exchange on smart healthcare", vi: "Tăng cường hợp tác quốc tế: Đoàn y tế Việt Nam đến thăm và trao đổi về y tế thông minh" } },
    { date: "2026-01-23", lang: "zh", url: "https://www.facebook.com/vghtpe/posts/pfbid02LiUsjJjgQfxcrLBJgMRQQ8tf93E5hfx7GMJ6repAn1aTg4aVTJ4tsu7ry3R45s7wl?rdid=1uVFJ4pwZxIN1euS",
      source: { zh: "臺北榮民總醫院 Facebook", en: "Taipei Veterans General Hospital (Facebook)", vi: "Bệnh viện Đa khoa Cựu chiến binh Đài Bắc (Facebook)" },
      original: "深化國際合作　越南醫療代表團蒞院交流智慧醫療",
      title: { zh: "深化國際合作　越南醫療代表團蒞院交流智慧醫療（Facebook）", en: "Deepening international cooperation: Vietnamese medical delegation visits (Facebook post)", vi: "Tăng cường hợp tác quốc tế: Đoàn y tế Việt Nam đến thăm (bài đăng Facebook)" } },
    { date: "2025-10-15", lang: "vi", url: "https://benhviennhitrunguong.gov.vn/hop-tac-viet-nam-dai-loan-thuc-day-xay-dung-benh-vien-thong-minh-ung-dung-tri-tue-nhan-tao-trong-y-khoa.html",
      source: { zh: "越南國家兒童醫院", en: "Vietnam National Children's Hospital", vi: "Bệnh viện Nhi Trung ương" },
      original: "Hợp tác Việt Nam - Đài Loan: Thúc đẩy xây dựng bệnh viện thông minh, ứng dụng Trí tuệ nhân tạo trong Y khoa",
      title: { zh: "越台合作：推動智慧醫院建設與醫療人工智慧應用", en: "Vietnam–Taiwan cooperation: advancing smart hospitals and AI in medicine", vi: "Hợp tác Việt Nam – Đài Loan: Thúc đẩy xây dựng bệnh viện thông minh, ứng dụng Trí tuệ nhân tạo trong Y khoa" } }
  ]
};
