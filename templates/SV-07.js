/* AEC PRISM · BEP & EIR Studio — optional template SV-07 估驗計價數量查核表及佐證資料 · Payment quantity check sheet and evidence
   Construction supervision (監造) document. Separate file, loaded only when a project uses it. */
PRISM_TPL.add("SV-07", { spec(X) {
  let { code, p, lang, zh, a, sector, TT, std, C, pt, cv, Z, bx, TBD, v, t, title, sub, owner, subKey, subName, st, stN, team, discs, discN, midp, train, trTot, lodOf, reqs, subRev, rev, today, swList, cde, crs, naming, namingFields, namingEx, hard, tol, usesL, blank, num, signPub, signForm, S, sec, T_, statusOpts, okCols } = X;
  switch (0) { default: {
      S.kind = "report";
      const name = v(a.name), client = v(a.client);
      sec(Z("一、目的與範圍", "1 Purpose and scope"), { p: [Z(`本報告就「${name}」查核廠商估驗計價之數量，比對現場查驗及佐證資料，確認可計價數量。`, `For ${name}: Check the quantities in the contractor's payment claim against site verification and evidence, and confirm the payable quantities.`)], t: [T_([Z("項目", "Item"), Z("內容", "Detail")], [28, 72], [[Z("工程名稱", "Project"), name], [Z("業主／主辦機關", "Client"), client], [Z("審查期間", "Review period"), ""], [Z("報告日期", "Report date"), today || ""], [Z("審查人", "Reviewer"), ""]])] });
      sec(Z("二、審查依據及資料", "2 Basis and documents reviewed"), { t: [T_([Z("資料名稱", "Document"), Z("版次／日期", "Rev. / date"), Z("收到", "Received")], [56, 26, 18], [[Z("估驗計價申請書", "Payment claim"), "", "□"], [Z("詳細價目表", "Bill of quantities"), "", "□"], [Z("查驗紀錄、照片及量測資料", "Inspection records, photos and measurements"), "", "□"], [Z("前期估驗資料", "Previous claims"), "", "□"]])] });
      sec(Z("三、查核項目", "3 Checks"), { t: [T_([Z("項次", "No."), Z("查核項目", "Check"), Z("結果", "Result"), Z("說明", "Notes")], [8, 47, 18, 27], [["1", Z("申報工項已完成並經查驗", "Claimed work completed and inspected"), Z("□符合 □不符", "□ OK □ Not OK"), ""], ["2", Z("數量計算與量測相符", "Quantities match measurements"), Z("□符合 □不符", "□ OK □ Not OK"), ""], ["3", Z("累計數量不超過契約", "Cumulative within contract"), Z("□符合 □不符", "□ OK □ Not OK"), ""], ["4", Z("未完成或缺失部分已扣除", "Incomplete or defective work deducted"), Z("□符合 □不符", "□ OK □ Not OK"), ""], ["5", Z("佐證照片與紀錄齊全", "Photos and records complete"), Z("□符合 □不符", "□ OK □ Not OK"), ""], ["6", Z("簽認程序完整", "Sign-offs complete"), Z("□符合 □不符", "□ OK □ Not OK"), ""]])] });
      sec(Z("四、本期計價彙總", "4 This period's summary"), { t: [T_([Z("項目", "Item"), Z("金額（元）", "Amount (NTD)")], [60, 40], [[Z("本期申報金額", "Claimed this period"), ""], [Z("本期複核金額", "Verified this period"), ""], [Z("累計計價金額", "Cumulative certified"), ""], [Z("保留款", "Retention"), ""], [Z("本期應付金額", "Payable this period"), ""]])] });
      sec(Z("五、發現事項及處理", "5 Findings and actions"), { t: [T_([Z("工項", "Item"), Z("契約數量", "Contract qty"), Z("本期申報", "Claimed"), Z("查核數量", "Verified"), Z("差異", "Variance"), Z("佐證編號", "Evidence ref.")], [17, 17, 17, 17, 17, 17], blank(6, 6))] });
      sec(Z("六、結論與建議", "6 Conclusion and recommendations"), { list: [Z("審查結論：□ 同意　□ 修正後同意　□ 不同意，請廠商修正後重送。", "Conclusion: □ Accepted □ Accepted with changes □ Rejected — revise and resubmit."), Z("重大事項請於 7 日曆天內提出改善說明，並列入下次會議追蹤。", "Major items need a written response within 7 calendar days and are tracked at the next meeting."), Z("本報告依所提供資料辦理；資料不足部分已列於發現事項。", "This review covers the documents provided; gaps are listed under findings.")] });
      S.sign = [Z("監造人員", "Supervision engineer"), Z("監造主任", "Chief supervisor"), Z(TT.owner || "業主", "Client")];
      break;
  } }
} });
