/* AEC PRISM · BEP & EIR Studio — optional template SV-05 材料設備抽驗及試驗結果彙整分析報告 · Material sampling and test result analysis
   Construction supervision (監造) document. Separate file, loaded only when a project uses it. */
PRISM_TPL.add("SV-05", { spec(X) {
  let { code, p, lang, zh, a, sector, TT, std, C, pt, cv, Z, bx, TBD, v, t, title, sub, owner, subKey, subName, st, stN, team, discs, discN, midp, train, trTot, lodOf, reqs, subRev, rev, today, swList, cde, crs, naming, namingFields, namingEx, hard, tol, usesL, blank, num, signPub, signForm, S, sec, T_, statusOpts, okCols } = X;
  switch (0) { default: {
      S.kind = "report";
      const name = v(a.name), client = v(a.client);
      sec(Z("一、目的與範圍", "1 Purpose and scope"), { p: [Z(`本報告就「${name}」彙整材料設備抽驗及試驗結果，統計合格率並分析不合格原因與處置。`, `For ${name}: Consolidate material sampling and test results, compute pass rates and analyze failures and their disposition.`)], t: [T_([Z("項目", "Item"), Z("內容", "Detail")], [28, 72], [[Z("工程名稱", "Project"), name], [Z("業主／主辦機關", "Client"), client], [Z("報告期間", "Reporting period"), ""], [Z("報告日期", "Report date"), today || ""], [Z("撰寫人", "Prepared by"), ""]])] });
      sec(Z("二、依據及資料", "2 Basis and source data"), { t: [T_([Z("資料名稱", "Document"), Z("版次／日期", "Rev. / date"), Z("收到", "Received")], [56, 26, 18], [[Z("抽驗計畫及頻率表", "Sampling plan and frequencies"), "", "□"], [Z("試驗報告（TAF 認證實驗室）", "Test reports (accredited lab)"), "", "□"], [Z("抽驗紀錄及取樣照片", "Sampling records and photos"), "", "□"], [Z("不合格處理紀錄", "Non-conformance records"), "", "□"]])] });
      sec(Z("三、報告編製檢核", "3 Report preparation checks"), { t: [T_([Z("項次", "No."), Z("查核項目", "Check"), Z("結果", "Result"), Z("說明", "Notes")], [8, 47, 18, 27], [["1", Z("抽驗頻率符合規定", "Sampling frequency as required"), Z("□符合 □不符", "□ OK □ Not OK"), ""], ["2", Z("試驗由認證實驗室辦理", "Tests by an accredited lab"), Z("□符合 □不符", "□ OK □ Not OK"), ""], ["3", Z("試驗結果與規範比對正確", "Results compared correctly with specs"), Z("□符合 □不符", "□ OK □ Not OK"), ""], ["4", Z("不合格品已標示隔離", "Failed items tagged and isolated"), Z("□符合 □不符", "□ OK □ Not OK"), ""], ["5", Z("不合格處置及複驗完成", "Disposition and re-tests complete"), Z("□符合 □不符", "□ OK □ Not OK"), ""], ["6", Z("統計數據與紀錄一致", "Statistics match the records"), Z("□符合 □不符", "□ OK □ Not OK"), ""]])] });
      sec(Z("四、發現事項及處理", "4 Findings and actions"), { t: [T_([Z("材料／設備", "Material / equipment"), Z("抽驗次數", "Samples"), Z("合格", "Passed"), Z("不合格", "Failed"), Z("合格率 %", "Pass rate %"), Z("處置", "Disposition")], [17, 17, 17, 17, 17, 17], blank(6, 6))] });
      sec(Z("五、結論與建議", "5 Conclusion and recommendations"), { list: [Z("彙整結論：□ 符合規定　□ 部分缺失，已限期改善　□ 重大缺失，請業主處理。", "Conclusion: □ Compliant □ Some defects, correction deadlines set □ Major defects, owner action needed."), Z("未結案缺失列於發現事項，並於下次會議追蹤至結案。", "Open defects are listed under findings and tracked at each meeting until closed."), Z("本報告依所提供資料彙整；資料不足部分已註明。", "This report is compiled from the data provided; gaps are noted.")] });
      S.sign = [Z("監造人員", "Supervision engineer"), Z("監造主任", "Chief supervisor"), Z(TT.owner || "業主", "Client")];
      break;
  } }
} });
