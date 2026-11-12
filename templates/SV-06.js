/* AEC PRISM · BEP & EIR Studio — optional template SV-06 施工抽查紀錄及品質缺失追蹤報告 · Site inspection records and quality defect tracking
   Construction supervision (監造) document. Separate file, loaded only when a project uses it. */
PRISM_TPL.add("SV-06", { spec(X) {
  let { code, p, lang, zh, a, sector, TT, std, C, pt, cv, Z, bx, TBD, v, t, title, sub, owner, subKey, subName, st, stN, team, discs, discN, midp, train, trTot, lodOf, reqs, subRev, rev, today, swList, cde, crs, naming, namingFields, namingEx, hard, tol, usesL, blank, num, signPub, signForm, S, sec, T_, statusOpts, okCols } = X;
  switch (0) { default: {
      S.kind = "report";
      const name = v(a.name), client = v(a.client);
      sec(Z("一、目的與範圍", "1 Purpose and scope"), { p: [Z(`本報告就「${name}」彙整施工抽查紀錄，追蹤品質缺失之開立、改善及複查，至缺失全部結案。`, `For ${name}: Consolidate site inspection records and track each quality defect from issue to correction, re-check and closure.`)], t: [T_([Z("項目", "Item"), Z("內容", "Detail")], [28, 72], [[Z("工程名稱", "Project"), name], [Z("業主／主辦機關", "Client"), client], [Z("報告期間", "Reporting period"), ""], [Z("報告日期", "Report date"), today || ""], [Z("撰寫人", "Prepared by"), ""]])] });
      sec(Z("二、依據及資料", "2 Basis and source data"), { t: [T_([Z("資料名稱", "Document"), Z("版次／日期", "Rev. / date"), Z("收到", "Received")], [56, 26, 18], [[Z("施工抽查標準表", "Inspection checklists"), "", "□"], [Z("施工抽查紀錄表", "Inspection records"), "", "□"], [Z("品質缺失通知單", "Defect notices"), "", "□"], [Z("改善照片及複查紀錄", "Correction photos and re-check records"), "", "□"]])] });
      sec(Z("三、報告編製檢核", "3 Report preparation checks"), { t: [T_([Z("項次", "No."), Z("查核項目", "Check"), Z("結果", "Result"), Z("說明", "Notes")], [8, 47, 18, 27], [["1", Z("抽查依檢驗停留點執行", "Inspections at hold points"), Z("□符合 □不符", "□ OK □ Not OK"), ""], ["2", Z("抽查紀錄填寫完整並簽認", "Records complete and signed"), Z("□符合 □不符", "□ OK □ Not OK"), ""], ["3", Z("缺失均開立通知並編號", "Defects issued and numbered"), Z("□符合 □不符", "□ OK □ Not OK"), ""], ["4", Z("改善期限明確", "Correction deadlines set"), Z("□符合 □不符", "□ OK □ Not OK"), ""], ["5", Z("複查結果有紀錄", "Re-checks recorded"), Z("□符合 □不符", "□ OK □ Not OK"), ""], ["6", Z("逾期未改善已追蹤", "Overdue defects escalated"), Z("□符合 □不符", "□ OK □ Not OK"), ""]])] });
      sec(Z("四、發現事項及處理", "4 Findings and actions"), { t: [T_([Z("缺失編號", "Defect no."), Z("工項／位置", "Work / location"), Z("缺失說明", "Defect"), Z("開立日期", "Issued"), Z("改善期限", "Due"), Z("狀態", "Status")], [17, 17, 17, 17, 17, 17], blank(6, 6))] });
      sec(Z("五、結論與建議", "5 Conclusion and recommendations"), { list: [Z("彙整結論：□ 符合規定　□ 部分缺失，已限期改善　□ 重大缺失，請業主處理。", "Conclusion: □ Compliant □ Some defects, correction deadlines set □ Major defects, owner action needed."), Z("未結案缺失列於發現事項，並於下次會議追蹤至結案。", "Open defects are listed under findings and tracked at each meeting until closed."), Z("本報告依所提供資料彙整；資料不足部分已註明。", "This report is compiled from the data provided; gaps are noted.")] });
      S.sign = [Z("監造人員", "Supervision engineer"), Z("監造主任", "Chief supervisor"), Z(TT.owner || "業主", "Client")];
      break;
  } }
} });
