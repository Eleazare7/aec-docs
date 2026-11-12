/* AEC PRISM · BEP & EIR Studio — optional template SV-10 竣工圖、結算及驗收文件審查報告 · As-built drawings, final account and acceptance document review
   Construction supervision (監造) document. Separate file, loaded only when a project uses it. */
PRISM_TPL.add("SV-10", { spec(X) {
  let { code, p, lang, zh, a, sector, TT, std, C, pt, cv, Z, bx, TBD, v, t, title, sub, owner, subKey, subName, st, stN, team, discs, discN, midp, train, trTot, lodOf, reqs, subRev, rev, today, swList, cde, crs, naming, namingFields, namingEx, hard, tol, usesL, blank, num, signPub, signForm, S, sec, T_, statusOpts, okCols } = X;
  switch (0) { default: {
      S.kind = "report";
      const name = v(a.name), client = v(a.client);
      sec(Z("一、目的與範圍", "1 Purpose and scope"), { p: [Z(`本報告就「${name}」審查竣工圖、結算資料及驗收文件，確認與現況及契約一致，具備辦理驗收條件。`, `For ${name}: Review as-built drawings, the final account and acceptance documents for consistency with the site and contract, and confirm readiness for acceptance.`)], t: [T_([Z("項目", "Item"), Z("內容", "Detail")], [28, 72], [[Z("工程名稱", "Project"), name], [Z("業主／主辦機關", "Client"), client], [Z("審查期間", "Review period"), ""], [Z("報告日期", "Report date"), today || ""], [Z("審查人", "Reviewer"), ""]])] });
      sec(Z("二、審查依據及資料", "2 Basis and documents reviewed"), { t: [T_([Z("資料名稱", "Document"), Z("版次／日期", "Rev. / date"), Z("收到", "Received")], [56, 26, 18], [[Z("竣工圖及竣工模型", "As-built drawings and model"), "", "□"], [Z("結算書及數量明細", "Final account and quantities"), "", "□"], [Z("驗收文件及缺失改善紀錄", "Acceptance documents and correction records"), "", "□"], [Z("保固書及操作維護手冊", "Warranties and O&M manuals"), "", "□"]])] });
      sec(Z("三、查核項目", "3 Checks"), { t: [T_([Z("項次", "No."), Z("查核項目", "Check"), Z("結果", "Result"), Z("說明", "Notes")], [8, 47, 18, 27], [["1", Z("竣工圖與現況一致", "As-built drawings match site"), Z("□符合 □不符", "□ OK □ Not OK"), ""], ["2", Z("結算數量與竣工圖相符", "Final quantities match as-built"), Z("□符合 □不符", "□ OK □ Not OK"), ""], ["3", Z("變更設計已納入結算", "Variations included in the account"), Z("□符合 □不符", "□ OK □ Not OK"), ""], ["4", Z("驗收缺失均已改善", "Acceptance defects corrected"), Z("□符合 □不符", "□ OK □ Not OK"), ""], ["5", Z("保固及手冊文件齊全", "Warranties and manuals complete"), Z("□符合 □不符", "□ OK □ Not OK"), ""], ["6", Z("文件簽認完整", "Sign-offs complete"), Z("□符合 □不符", "□ OK □ Not OK"), ""]])] });
      sec(Z("四、發現事項及處理", "4 Findings and actions"), { t: [T_([Z("文件類別", "Document type"), Z("應交項目", "Required"), Z("已交", "Received"), Z("審查意見", "Comment"), Z("改正期限", "Due"), Z("狀態", "Status")], [17, 17, 17, 17, 17, 17], blank(6, 6))] });
      sec(Z("五、結論與建議", "5 Conclusion and recommendations"), { list: [Z("審查結論：□ 同意　□ 修正後同意　□ 不同意，請廠商修正後重送。", "Conclusion: □ Accepted □ Accepted with changes □ Rejected — revise and resubmit."), Z("重大事項請於 7 日曆天內提出改善說明，並列入下次會議追蹤。", "Major items need a written response within 7 calendar days and are tracked at the next meeting."), Z("本報告依所提供資料辦理；資料不足部分已列於發現事項。", "This review covers the documents provided; gaps are listed under findings.")] });
      S.sign = [Z("監造人員", "Supervision engineer"), Z("監造主任", "Chief supervisor"), Z(TT.owner || "業主", "Client")];
      break;
  } }
} });
