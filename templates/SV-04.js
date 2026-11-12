/* AEC PRISM · BEP & EIR Studio — optional template SV-04 工程查核準備資料及缺失改善成果報告 · Inspection preparation and defect correction report
   Construction supervision (監造) document. Separate file, loaded only when a project uses it. */
PRISM_TPL.add("SV-04", { spec(X) {
  let { code, p, lang, zh, a, sector, TT, std, C, pt, cv, Z, bx, TBD, v, t, title, sub, owner, subKey, subName, st, stN, team, discs, discN, midp, train, trTot, lodOf, reqs, subRev, rev, today, swList, cde, crs, naming, namingFields, namingEx, hard, tol, usesL, blank, num, signPub, signForm, S, sec, T_, statusOpts, okCols } = X;
  switch (0) { default: {
      S.kind = "report";
      const name = v(a.name), client = v(a.client);
      sec(Z("一、目的與範圍", "1 Purpose and scope"), { p: [Z(`本報告就「${name}」整理工程查核所需資料，並彙整查核缺失之改善情形與佐證照片，提報改善成果。`, `For ${name}: Prepare the documents for a government works inspection and report how each finding was corrected, with photos.`)], t: [T_([Z("項目", "Item"), Z("內容", "Detail")], [28, 72], [[Z("工程名稱", "Project"), name], [Z("業主／主辦機關", "Client"), client], [Z("審查期間", "Review period"), ""], [Z("報告日期", "Report date"), today || ""], [Z("審查人", "Reviewer"), ""]])] });
      sec(Z("二、審查依據及資料", "2 Basis and documents reviewed"), { t: [T_([Z("資料名稱", "Document"), Z("版次／日期", "Rev. / date"), Z("收到", "Received")], [56, 26, 18], [[Z("查核通知及查核項目表", "Inspection notice and checklist"), "", "□"], [Z("品質計畫、監造計畫", "Quality and supervision plans"), "", "□"], [Z("檢驗及抽驗紀錄", "Inspection and sampling records"), "", "□"], [Z("查核缺失清單", "Inspection findings"), "", "□"]])] });
      sec(Z("三、查核項目", "3 Checks"), { t: [T_([Z("項次", "No."), Z("查核項目", "Check"), Z("結果", "Result"), Z("說明", "Notes")], [8, 47, 18, 27], [["1", Z("查核資料依項目備齊", "Inspection documents ready by item"), Z("□符合 □不符", "□ OK □ Not OK"), ""], ["2", Z("缺失均有改善措施", "Every finding has a corrective action"), Z("□符合 □不符", "□ OK □ Not OK"), ""], ["3", Z("改善前後照片齊全", "Before/after photos complete"), Z("□符合 □不符", "□ OK □ Not OK"), ""], ["4", Z("改善於期限內完成", "Completed by the deadline"), Z("□符合 □不符", "□ OK □ Not OK"), ""], ["5", Z("監造複查並簽認", "Re-checked and signed by supervision"), Z("□符合 □不符", "□ OK □ Not OK"), ""], ["6", Z("預防再發措施已說明", "Prevention of recurrence explained"), Z("□符合 □不符", "□ OK □ Not OK"), ""]])] });
      sec(Z("四、發現事項及處理", "4 Findings and actions"), { t: [T_([Z("缺失編號", "Finding no."), Z("缺失內容", "Finding"), Z("改善措施", "Corrective action"), Z("完成日期", "Completed"), Z("佐證", "Evidence"), Z("複查", "Re-check")], [17, 17, 17, 17, 17, 17], blank(6, 6))] });
      sec(Z("五、結論與建議", "5 Conclusion and recommendations"), { list: [Z("審查結論：□ 同意　□ 修正後同意　□ 不同意，請廠商修正後重送。", "Conclusion: □ Accepted □ Accepted with changes □ Rejected — revise and resubmit."), Z("重大事項請於 7 日曆天內提出改善說明，並列入下次會議追蹤。", "Major items need a written response within 7 calendar days and are tracked at the next meeting."), Z("本報告依所提供資料辦理；資料不足部分已列於發現事項。", "This review covers the documents provided; gaps are listed under findings.")] });
      S.sign = [Z("監造人員", "Supervision engineer"), Z("監造主任", "Chief supervisor"), Z(TT.owner || "業主", "Client")];
      break;
  } }
} });
