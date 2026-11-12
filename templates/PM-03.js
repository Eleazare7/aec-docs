/* AEC PRISM · BEP & EIR Studio — optional template PM-03 變更設計及追加減預算審查報告 · Design change and variation budget review
   PCM (project management consultant) document. Separate file, loaded only when a project uses it. */
PRISM_TPL.add("PM-03", { spec(X) {
  let { code, p, lang, zh, a, sector, TT, std, C, pt, cv, Z, bx, TBD, v, t, title, sub, owner, subKey, subName, st, stN, team, discs, discN, midp, train, trTot, lodOf, reqs, subRev, rev, today, swList, cde, crs, naming, namingFields, namingEx, hard, tol, usesL, blank, num, signPub, signForm, S, sec, T_, statusOpts, okCols } = X;
  switch (0) { default: {
      S.kind = "report";
      const name = v(a.name), client = v(a.client);
      sec(Z("一、目的與範圍", "1 Purpose and scope"), { p: [Z(`本報告就「${name}」核對變更圖說、數量、契約單價與佐證資料，審查變更必要性及追加減金額之合理性。`, `For ${name}: Reconcile revised drawings, quantities, contract rates and evidence, and review the need for each change and the amount added or deducted.`)], t: [T_([Z("項目", "Item"), Z("內容", "Detail")], [28, 72], [[Z("工程名稱", "Project"), name], [Z("業主／主辦機關", "Client"), client], [Z("審查期間", "Review period"), ""], [Z("報告日期", "Report date"), today || ""], [Z("審查人", "Reviewer"), ""]])] });
      sec(Z("二、審查依據及資料", "2 Basis and documents reviewed"), { t: [T_([Z("資料名稱", "Document"), Z("版次／日期", "Rev. / date"), Z("收到", "Received")], [56, 26, 18], [[Z("變更設計圖說及變更前後對照", "Revised drawings with before/after comparison"), "", "□"], [Z("數量計算書", "Quantity calculations"), "", "□"], [Z("契約單價及新增單價分析", "Contract rates and new rate analyses"), "", "□"], [Z("變更事由及會議紀錄", "Change reasons and meeting minutes"), "", "□"]])] });
      sec(Z("三、查核項目", "3 Checks"), { t: [T_([Z("項次", "No."), Z("查核項目", "Check"), Z("結果", "Result"), Z("說明", "Notes")], [8, 47, 18, 27], [["1", Z("變更事由明確且符合契約規定", "Change reason is clear and contractual"), Z("□符合 □不符", "□ OK □ Not OK"), ""], ["2", Z("變更前後數量差異正確", "Quantity difference is correct"), Z("□符合 □不符", "□ OK □ Not OK"), ""], ["3", Z("適用契約單價或新單價合理", "Rates applied are contractual or reasonable"), Z("□符合 □不符", "□ OK □ Not OK"), ""], ["4", Z("無重複計價", "No double counting"), Z("□符合 □不符", "□ OK □ Not OK"), ""], ["5", Z("對工期之影響已評估", "Time impact assessed"), Z("□符合 □不符", "□ OK □ Not OK"), ""], ["6", Z("佐證資料齊全", "Supporting evidence complete"), Z("□符合 □不符", "□ OK □ Not OK"), ""]])] });
      sec(Z("四、發現事項及處理", "4 Findings and actions"), { t: [T_([Z("變更項次", "Item"), Z("原數量", "Original qty"), Z("變更後數量", "Revised qty"), Z("單價", "Rate"), Z("追加／減", "Add / deduct"), Z("審查意見", "Review comment")], [17, 17, 17, 17, 17, 17], blank(6, 6))] });
      sec(Z("五、結論與建議", "5 Conclusion and recommendations"), { list: [Z("審查結論：□ 同意　□ 修正後同意　□ 不同意，請廠商修正後重送。", "Conclusion: □ Accepted □ Accepted with changes □ Rejected — revise and resubmit."), Z("重大事項請於 7 日曆天內提出改善說明，並列入下次會議追蹤。", "Major items need a written response within 7 calendar days and are tracked at the next meeting."), Z("本報告依所提供資料辦理；資料不足部分已列於發現事項。", "This review covers the documents provided; gaps are listed under findings.")] });
      S.sign = [Z("PCM 審查人", "PCM reviewer"), Z("PCM 計畫主持人", "PCM project lead"), Z(TT.owner || "業主", "Client")];
      break;
  } }
} });
