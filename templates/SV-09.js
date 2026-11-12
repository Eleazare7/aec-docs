/* AEC PRISM · BEP & EIR Studio — optional template SV-09 機電設備功能運轉測試及試運轉查驗報告 · MEP functional testing and commissioning inspection
   Construction supervision (監造) document. Separate file, loaded only when a project uses it. */
PRISM_TPL.add("SV-09", { spec(X) {
  let { code, p, lang, zh, a, sector, TT, std, C, pt, cv, Z, bx, TBD, v, t, title, sub, owner, subKey, subName, st, stN, team, discs, discN, midp, train, trTot, lodOf, reqs, subRev, rev, today, swList, cde, crs, naming, namingFields, namingEx, hard, tol, usesL, blank, num, signPub, signForm, S, sec, T_, statusOpts, okCols } = X;
  switch (0) { default: {
      S.kind = "report";
      const name = v(a.name), client = v(a.client);
      sec(Z("一、目的與範圍", "1 Purpose and scope"), { p: [Z(`本報告就「${name}」查驗機電設備之功能測試及系統試運轉，確認性能符合設計與規範，並記錄缺失改善。`, `For ${name}: Inspect MEP functional tests and system commissioning, confirm performance meets the design and specs, and record corrections.`)], t: [T_([Z("項目", "Item"), Z("內容", "Detail")], [28, 72], [[Z("工程名稱", "Project"), name], [Z("業主／主辦機關", "Client"), client], [Z("審查期間", "Review period"), ""], [Z("報告日期", "Report date"), today || ""], [Z("審查人", "Reviewer"), ""]])] });
      sec(Z("二、審查依據及資料", "2 Basis and documents reviewed"), { t: [T_([Z("資料名稱", "Document"), Z("版次／日期", "Rev. / date"), Z("收到", "Received")], [56, 26, 18], [[Z("測試及試運轉計畫", "Test and commissioning plan"), "", "□"], [Z("設備規格及設計參數", "Equipment specs and design data"), "", "□"], [Z("測試紀錄表及量測數據", "Test sheets and readings"), "", "□"], [Z("儀器校正證明", "Instrument calibration certificates"), "", "□"]])] });
      sec(Z("三、查核項目", "3 Checks"), { t: [T_([Z("項次", "No."), Z("查核項目", "Check"), Z("結果", "Result"), Z("說明", "Notes")], [8, 47, 18, 27], [["1", Z("測試計畫經核定", "Test plan approved"), Z("□符合 □不符", "□ OK □ Not OK"), ""], ["2", Z("儀器校正有效", "Instruments calibrated"), Z("□符合 □不符", "□ OK □ Not OK"), ""], ["3", Z("單機功能測試合格", "Individual equipment tests passed"), Z("□符合 □不符", "□ OK □ Not OK"), ""], ["4", Z("系統聯動測試合格", "Integrated system tests passed"), Z("□符合 □不符", "□ OK □ Not OK"), ""], ["5", Z("量測數據符合設計值", "Readings meet design values"), Z("□符合 □不符", "□ OK □ Not OK"), ""], ["6", Z("缺失已改善並複測", "Defects fixed and re-tested"), Z("□符合 □不符", "□ OK □ Not OK"), ""]])] });
      sec(Z("四、發現事項及處理", "4 Findings and actions"), { t: [T_([Z("系統／設備", "System / equipment"), Z("測試項目", "Test"), Z("設計值", "Design value"), Z("實測值", "Measured"), Z("判定", "Result"), Z("備註", "Notes")], [17, 17, 17, 17, 17, 17], blank(6, 6))] });
      sec(Z("五、結論與建議", "5 Conclusion and recommendations"), { list: [Z("審查結論：□ 同意　□ 修正後同意　□ 不同意，請廠商修正後重送。", "Conclusion: □ Accepted □ Accepted with changes □ Rejected — revise and resubmit."), Z("重大事項請於 7 日曆天內提出改善說明，並列入下次會議追蹤。", "Major items need a written response within 7 calendar days and are tracked at the next meeting."), Z("本報告依所提供資料辦理；資料不足部分已列於發現事項。", "This review covers the documents provided; gaps are listed under findings.")] });
      S.sign = [Z("監造人員", "Supervision engineer"), Z("監造主任", "Chief supervisor"), Z(TT.owner || "業主", "Client")];
      break;
  } }
} });
