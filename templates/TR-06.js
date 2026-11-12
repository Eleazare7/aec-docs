/* AEC PRISM · BEP & EIR Studio — optional template TR-06 測驗卷及評分表 · Quiz & score sheet
   Separate file, loaded only when a project uses this template (08 文件範本庫). */
PRISM_TPL.add("TR-06", { spec(X) {
  let { code, p, lang, zh, a, sector, TT, std, C, pt, cv, Z, bx, TBD, v, t, title, sub, owner, subKey, subName, st, stN, team, discs, discN, midp, train, trTot, lodOf, reqs, subRev, rev, today, swList, cde, crs, naming, namingFields, namingEx, hard, tol, usesL, blank, num, signPub, signForm, S, sec, T_, statusOpts, okCols } = X;
  switch (0) { default: {
      const Q = [
        [Z("本案模型之平面座標系統為何？", "What is the project's horizontal coordinate system?"), [(a.crs && a.crs !== CRS[0]) ? (zh ? (CRS_ZH[a.crs] || a.crs) : a.crs) : "TWD97 TM2", "WGS84", Z("原點對原點", "Origin to origin"), "TWD67"], 0],
        [Z("本案高程系統為何？", "Which height datum does the project use?"), [std.heightDatum || (p.std || {}).heightDatum || "TWVD2001", Z("相對高程", "Relative"), Z("樓層高程", "Story level"), "MSL"], 0],
        [Z(`本案檔案命名欄位順序為何？`, `What is the file-naming field order?`), [namingFields, Z("專案-日期-版次", "Project-Date-Revision"), Z("任意命名", "Free naming"), Z("專業-樓層", "Discipline-Level")], 0],
        [Z(`本案共同資料環境為何？`, `Which CDE does the project use?`), [cde, Z("電子郵件", "Email"), Z("隨身碟", "USB drive"), Z("個人雲端", "Personal cloud")], 0],
        [Z("CDE 狀態 S0 代表？", "What does CDE state S0 mean?"), [Z("工作中（WIP）", "Work in progress"), Z("已發行", "Published"), Z("竣工紀錄", "As-built"), Z("已作廢", "Void")], 0],
        [Z(`硬衝突容許值為多少 mm？`, `What is the hard-clash tolerance (mm)?`), [String(tol), "100", "200", "500"], 0],
        [Z("IfcBuildingElementProxy 比例上限？", "Maximum share of IfcBuildingElementProxy?"), ["5%", "20%", "50%", Z("無限制", "No limit")], 0],
        [Z("衝突問題描述應採何種格式？", "How should a clash issue be written?"), [Z("現況→影響→要求行動", "Situation → impact → action"), Z("一句話", "One sentence"), Z("只附截圖", "Screenshot only"), Z("口頭說明", "Verbal")], 0],
        [Z("送審版次第0-A版之後為？", "Which submission follows 0-A?"), ["0-B", "P02", "C01", "A2"], 0],
        [Z("自主檢查之量測項目應如何填寫？", "How are measured self-check items recorded?"), [Z("填寫實際數值及單位", "Actual value and unit"), Z("只打勾", "Tick only"), Z("留空", "Leave blank"), Z("填寫「符合」", "Write \"OK\"")], 0]];
      const L = ["A", "B", "C", "D"];
      S.meta.push([Z("姓名", "Name"), ""], [Z("單位", "Organization"), ""], [Z("成績", "Score"), Z("　　　／100（70 分合格）", "____ / 100 (pass 70)")]);
      sec(Z("選擇題（每題 10 分）", "Multiple choice (10 points each)"), { list: Q.map((q, i) => `${i + 1}. ${q[0]}　` + q[1].map((o, j) => `(${L[j]}) ${o}`).join("　")) });
      sec(Z("答案卷（講師用）", "Answer key (trainer)"), { t: [T_([Z("題號", "No."), Z("答案", "Answer")], [30, 70], Q.map((q, i) => [String(i + 1), `(${L[q[2]]}) ${q[1][q[2]]}`]))] });
      sec(Z("評分表", "Score sheet"), { t: [T_([Z("項次", "No."), Z("姓名", "Name"), Z("單位", "Organization"), Z("成績", "Score"), Z("結果", "Result")], [8, 26, 30, 16, 20], num((team.length ? team.map(r => [r.contact || "", r.company || "", "", ""]) : []).concat(blank(6, 4))), { status: [Z("合格", "Pass"), Z("不合格", "Fail")] })] });
      S.sign = [Z("講師", "Trainer")];
      break;
  } }
} });
