// Language dictionary. Elements with data-i18n="key" get their innerHTML
// replaced when the language changes. Keys missing from a language keep
// whatever is currently rendered, so always define both en and ja.
const I18N = {
    en: {
        'publications.naloma.desc': "Neural DTS combines hyperbolic lexical relation learning with logic-based natural language inference. I trained models in Python and integrated an oracle into the Haskell inference system.",
        'education.bs.date': "04/2022 — 03/2026",
        'education.ms.desc': "Expected graduation: March 2028.",
        'nav.skills': 'Skills',
        'nav.awards': 'Awards',
        'nav.education': 'Education',
        'nav.publications': 'Publications',
        'nav.experience': 'Experience',
        'nav.teaching': 'Teaching',

        'hero.title': "1st-year Master's Student&ensp;/&ensp;Software Engineer",
        'hero.affiliation': 'Graduate School of Humanities and Sciences,<br>Ochanomizu University (Bekki Lab)',
        'hero.bio': "I research Neural DTS, integrating hyperbolic lexical relation learning with logic-based natural language inference. I use Python for model training and Haskell to integrate an oracle into the inference system. My engineering experience includes C++ development at Google Search and Google Maps, and ongoing genomic analysis development at Rhelixa Inc.",

        'skills.title': 'Skills',
        'skills.languages': 'Programming Languages',
        'skills.tools': 'Tools &amp; Frameworks',
        'skills.interests': 'Research Interests',
        'skills.interests.nlp': 'Natural Language Processing',
        'skills.interests.ml': 'Machine Learning',
        'skills.interests.cl': 'Computational Linguistics',
        'skills.interests.bio': 'Bioinformatics',

        'awards.title': 'Awards &amp; Certificates',
        'awards.academic': 'Academic Awards &amp; Scholarships',
        'awards.certifications': 'Certifications',
        'awards.shoshisha.date': '2026 — Present',
        'awards.shoshisha.name': 'Shoshisha Foundation Scholarship',
        'awards.shoshisha.desc': 'Selected as a scholarship recipient of the Shoshisha Foundation, a prestigious merit-based scholarship supporting outstanding students in Japan.',
        'awards.student.name': 'University Student Award',
        'awards.student.desc': 'Awarded for outstanding academic achievement at Ochanomizu University.',
        'awards.ocha.name': 'Ochanomizu University Undergraduate Scholarship',
        'awards.ocha.desc': 'Merit-based scholarship at Ochanomizu University for top-performing students based on academic excellence.',
        'awards.yoshikawa.name': 'Toru Yoshikawa Foundation Scholarship',
        'awards.yoshikawa.desc': 'Selected as a recipient of a merit-based scholarship from a foundation dedicated to cultivating the next generation of IT leaders and innovators in Japan.',
        'awards.english.name': 'English Proficiency',
        'awards.english.desc': 'EIKEN Grade 1 (2025)&ensp;/&ensp;TOEIC 910 (2024)',
        'awards.cgarts.name': 'CG-ARTS Certifications',
        'awards.cgarts.desc': 'CG Engineer Expert (2024)&ensp;/&ensp;Multimedia Expert (2023)',
        'badge.scholarship': 'Scholarship',
        'badge.language': 'Language',
        'badge.technical': 'Technical',

        'education.title': 'Education',
        'education.ms.date': "04/2026 — Present",
        'education.ms.name': 'M.S. in Information Sciences',
        'education.ms.place': 'Graduate School of Humanities and Sciences, Ochanomizu University, Japan',
        'education.bs.name': 'B.S. in Information Sciences',
        'education.bs.place': 'School of Science, Ochanomizu University, Japan',
        'education.bs.desc': "GPA 3.45/4.0. Received several awards and scholarships for academic excellence.",
        'education.hs.name': 'High School Diploma',
        'education.hs.place': 'Chiba Prefectural Higashi Katsushika High School',
        'education.hs.desc': 'Graduated with an outstanding academic record (GPA 4.6/5.0). Achieved perfect marks (5/5) in all advanced Mathematics and Information Science courses.',

        'publications.title': 'Publications',
        'publications.international': 'International',
        'publications.domestic': 'Domestic',
        'publications.naloma.meta': "Honoka Kobayashi, Hinari Daido, and Daisuke Bekki. Proceedings of the 6th Workshop on Natural Language Meets Logic and Machine Learning (NALOMA), pp. 9–18, August 2026.",
        'publications.brigap.meta': 'H. Kobayashi, H. Daido and D. Bekki, BriGap Workshop 2026 (non-archival), 2026.',
        'publications.dom.meta': 'H. Kobayashi et al., The 32nd Annual Meeting of the Association for Natural Language Processing (NLP2026), Poster Presentation, March 2026.',
        'pubtag.international': 'International',
        'pubtag.workshop': 'Workshop',
        'pubtag.domestic': 'Domestic',
        'btn.paper': 'Paper',
        'btn.slides': 'Slides',
        'btn.poster': 'Poster',
        'btn.abstract': 'Abstract',

        'experience.title': 'Experience',
        'experience.swe.date': "08/24/2026 — Present",
        'experience.swe.name': "Google — Software Engineering Intern (Search)",
        'experience.swe.li1': "Developing software in C++ on the Google Search team.",
        'experience.step.name': 'Google LLC — STEP Intern',
        'experience.step.li1': "Developed tools to analyze destination accuracy on the Google Maps team using C++ and SQL.",
        'experience.step.li2': 'Delivered a 20-minute final technical presentation and Q&amp;A session entirely in English.',
        'experience.rhelixa.date': '02/2023 — Present',
        'experience.rhelixa.name': "Rhelixa Inc — Software Engineer",
        'experience.rhelixa.li1': 'Developing automated genomic analysis pipelines using Python and R.',
        'experience.rhelixa.li2': 'Adding new features to a specialized tool for DNA methylation analysis.',
        'experience.rhelixa.li3': 'Collaborating with a team of researchers and engineers to optimize data processing workflows.',
        'place.tokyo': 'Tokyo, Japan',

        'teaching.title': 'Teaching',
        'teaching.ta.name': 'Teaching Assistant — Fundamentals of Mathematics',
        'teaching.ta.place': 'Ochanomizu University'
    },
    ja: {
        'publications.naloma.desc': "Neural DTS は双曲空間上での語彙関係学習と論理ベースの自然言語推論を統合する研究です。Python でモデルを学習し、Haskell の推論システムに oracle を組み込みました。",
        'education.bs.date': "2022/04 — 2026/03",
        'education.ms.desc': "2028年3月修了予定。",
        'nav.skills': 'スキル',
        'nav.awards': '受賞・資格',
        'nav.education': '学歴',
        'nav.publications': '研究業績',
        'nav.experience': '職務経歴',
        'nav.teaching': '教育活動',

        'hero.title': '修士1年&ensp;/&ensp;ソフトウェアエンジニア',
        'hero.affiliation': 'お茶の水女子大学大学院 人間文化創成科学研究科<br>(戸次研究室)',
        'hero.bio': "双曲空間上での語彙関係学習と論理ベースの自然言語推論を統合する Neural DTS を研究しています。Python でモデルを学習し、Haskell の推論システムに oracle を組み込んでいます。Google Search と Google Maps での C++ 開発経験があり、株式会社Rhelixa では現在もゲノム解析の開発に取り組んでいます。",

        'skills.title': 'スキル',
        'skills.languages': 'プログラミング言語',
        'skills.tools': 'ツール・フレームワーク',
        'skills.interests': '研究分野',
        'skills.interests.nlp': '自然言語処理',
        'skills.interests.ml': '機械学習',
        'skills.interests.cl': '計算言語学',
        'skills.interests.bio': 'バイオインフォマティクス',

        'awards.title': '受賞・奨学金・資格',
        'awards.academic': '受賞・奨学金',
        'awards.certifications': '資格',
        'awards.shoshisha.date': '2026 — 現在',
        'awards.shoshisha.name': '尚志社奨学金',
        'awards.shoshisha.desc': '公益財団法人尚志社の奨学生に採用。成績優秀者を対象とした給付型奨学金。',
        'awards.student.name': 'お茶の水女子大学 学生表彰',
        'awards.student.desc': '学業成績分野における優秀な成績により表彰。',
        'awards.ocha.name': 'お茶の水女子大学 学部生成績優秀者奨学金',
        'awards.ocha.desc': '学業成績優秀者を対象とした、お茶の水女子大学の給付型奨学金。',
        'awards.yoshikawa.name': '吉川徹財団奨学金',
        'awards.yoshikawa.desc': '次世代のIT人材育成を目的とする財団による給付型奨学金に採用。',
        'awards.english.name': '語学',
        'awards.english.desc': '実用英語技能検定1級(2025)&ensp;/&ensp;TOEIC 910点(2024)',
        'awards.cgarts.name': 'CG-ARTS検定',
        'awards.cgarts.desc': 'CGエンジニア検定エキスパート(2024)&ensp;/&ensp;マルチメディア検定エキスパート(2023)',
        'badge.scholarship': '奨学金',
        'badge.language': '語学',
        'badge.technical': '技術',

        'education.title': '学歴',
        'education.ms.date': "2026/04 — 現在",
        'education.ms.name': '修士課程(情報科学)',
        'education.ms.place': 'お茶の水女子大学大学院 人間文化創成科学研究科 理学専攻 情報科学コース',
        'education.bs.name': '学士課程(情報科学)',
        'education.bs.place': 'お茶の水女子大学 理学部 情報科学科',
        'education.bs.desc': "GPA 3.45/4.0。学業成績優秀により複数の表彰・奨学金を受ける。",
        'education.hs.name': '高等学校卒業',
        'education.hs.place': '千葉県立東葛飾高等学校',
        'education.hs.desc': '優秀な成績で卒業(評定平均 4.6/5.0)。数学・情報科学の発展科目すべてで満点評価(5/5)を取得。',

        'publications.title': '研究業績',
        'publications.international': '国際会議・ワークショップ',
        'publications.domestic': '国内会議',
        'publications.naloma.meta': "Honoka Kobayashi, Hinari Daido, and Daisuke Bekki. Proceedings of the 6th Workshop on Natural Language Meets Logic and Machine Learning (NALOMA), pp. 9–18, 2026年8月.",
        'publications.brigap.meta': '小林ほのか 他, BriGap Workshop 2026 (non-archival), 2026.',
        'publications.dom.meta': '小林ほのか 他, 言語処理学会 第32回年次大会(NLP2026), ポスター発表, 2026年3月.',
        'pubtag.international': '国際',
        'pubtag.workshop': 'ワークショップ',
        'pubtag.domestic': '国内',
        'btn.paper': '論文',
        'btn.slides': 'スライド',
        'btn.poster': 'ポスター',
        'btn.abstract': '概要',

        'experience.title': '職務経歴',
        'experience.swe.date': "2026/08/24 — 現在",
        'experience.swe.name': "Google — ソフトウェアエンジニアリング インターン (Search)",
        'experience.swe.li1': "Google Search チームで C++ による開発に従事。",
        'experience.step.name': 'Google 合同会社 — STEP インターン',
        'experience.step.li1': "Google Maps チームで、C++ と SQL を用いた目的地精度の分析ツールを開発。",
        'experience.step.li2': 'インターン終了時に、20分間の技術プレゼンテーションと質疑応答をすべて英語で実施。',
        'experience.rhelixa.date': '2023/02 — 現在',
        'experience.rhelixa.name': "株式会社Rhelixa — ソフトウェアエンジニア",
        'experience.rhelixa.li1': 'Python と R を用いた自動化ゲノム解析パイプラインの開発。',
        'experience.rhelixa.li2': 'DNA メチル化解析ツールの新機能を実装。',
        'experience.rhelixa.li3': '研究者・エンジニアのチームと協働し、データ処理ワークフローを最適化。',
        'place.tokyo': '東京',

        'teaching.title': '教育活動',
        'teaching.ta.name': 'ティーチングアシスタント — 数理基礎論',
        'teaching.ta.place': 'お茶の水女子大学'
    }
};

function setLang(lang) {
    const dict = I18N[lang] || I18N.en;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const value = dict[el.dataset.i18n];
        if (value !== undefined) el.innerHTML = value;
    });
    document.documentElement.lang = lang;
    document.documentElement.classList.toggle('lang-ja', lang === 'ja');
    try { localStorage.setItem('lang', lang); } catch (e) { /* private mode */ }
    const btn = document.getElementById('langToggle');
    if (btn) btn.textContent = lang === 'ja' ? 'EN' : '日本語';
}

(function initI18n() {
    let lang = 'en';
    try { lang = localStorage.getItem('lang') || 'en'; } catch (e) { /* private mode */ }
    if (lang !== 'en') setLang(lang);
    else setLang('en');
    const btn = document.getElementById('langToggle');
    if (btn) btn.addEventListener('click', () => {
        setLang(document.documentElement.lang === 'ja' ? 'en' : 'ja');
    });
})();
