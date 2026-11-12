/* AEC PRISM · BEP & EIR Studio — optional template SV-08 變更設計圖說及追加減數量查核報告 · Design change drawings and variation quantity check
   Construction supervision (監造) document. Separate file, loaded only when a project uses it. */
PRISM_TPL.add("SV-08", { spec(X) {
  let { code, p, lang, zh, a, sector, TT, std, C, pt, cv, Z, bx, TBD, v, t, title, sub, owner, subKey, subName, st, stN, team, discs, discN, midp, train, trTot, lodOf, reqs, subRev, rev, today, swList, cde, crs, naming, namingFields, namingEx, hard, tol, usesL, blank, num, signPub, signForm, S, sec, T_, statusOpts, okCols } = X;
  switch (0) { default: {
      S.kind = "report";
      const name = v(a.name), client = v(a.client);
      sec(Z("一、目的與範圍", "1 Purpose and scope"), { p: [Z(`本報告就「${name}」查核變更設計圖說及追加減數量，確認變更前後差異、計算正確並有現場佐證。`, `For ${name}: Check change drawings and added/deducted quantities, confirming the before/after difference, the calculations and site evidence.`)], t: [T_([Z("項目", "Item"), Z("內容", "Detail")], [28, 72], [[Z("工程名稱", "Project"), name], [Z("業主／主辦機關", "Client"), client], [Z("審查期間", "Review period"), ""], [Z("報告日期", "Report date"), today || ""], [Z("審查人", "Reviewer"), ""]])] });
      sec(Z("二、審查依據及資料", "2 Basis and documents reviewed"), { t: [T_([Z("資料名稱", "Document"), Z("版次／日期", "Rev. / date"), Z("收到", "Received")], [56, 26, 18], [[Z("變更設計圖說（變更前後）", "Change drawings (before/after)"), "", "□"], [Z("追加減數量計算書", "Variation quantity calculations"), "", "□"], [Z("現場量測及照片", "Site measurements and photos"), "", "□"], [Z("變更協議及會議紀錄", "Change agreements and minutes"), "", "□"]])] });
      sec(Z("三、查核項目", "3 Checks"), { t: [T_([Z("項次", "No."), Z("查核項目", "Check"), Z("結果", "Result"), Z("說明", "Notes")], [8, 47, 18, 27], [["1", Z("變更範圍與核定內容一致", "Scope matches the approval"), Z("□符合 □不符", "□ OK □ Not OK"), ""], ["2", Z("變更前後圖說對照清楚", "Before/after drawings clear"), Z("□符合 □不符", "□ OK □ Not OK"), ""], ["3", Z("數量計算正確", "Quantities correct"), Z("□符合 □不符", "□ OK □ Not OK"), ""], ["4", Z("與現場實作相符", "Matches work on site"), Z("□符合 □不符", "□ OK □ Not OK"), ""], ["5", Z("無重複追加", "No duplicate additions"), Z("□符合 □不符", "□ OK □ Not OK"), ""], ["6", Z("佐證資料齊全", "Evidence complete"), Z("□符合 □不符", "□ OK □ Not OK"), ""]])] });
      sec(Z("四、發現事項及處理", "4 Findings and actions"), { t: [T_([Z("變更項次", "Item"), Z("原數量", "Original"), Z("變更後數量", "Revised"), Z("追加／減", "Add / deduct"), Z("查核意見", "Check comment"), Z("佐證", "Evidence")], [17, 17, 17, 17, 17, 17], blank(6, 6))] });
      sec(Z("五、結論與建議", "5 Conclusion and recommendations"), { list: [Z("審查結論：□ 同意　□ 修正後同意　□ 不同意，請廠商修正後重送。", "Conclusion: □ Accepted □ Accepted with changes □ Rejected — revise and resubmit."), Z("重大事項請於 7 日曆天內提出改善說明，並列入下次會議追蹤。", "Major items need a written response within 7 calendar days and are tracked at the next meeting."), Z("本報告依所提供資料辦理；資料不足部分已列於發現事項。", "This review covers the documents provided; gaps are listed under findings.")] });
      S.sign = [Z("監造人員", "Supervision engineer"), Z("監造主任", "Chief supervisor"), Z(TT.owner || "業主", "Client")];
      break;
  } }
} });
