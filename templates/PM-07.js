/* AEC PRISM · BEP & EIR Studio — optional template PM-07 品質督導及監造執行查核報告 · Quality oversight and supervision audit
   PCM (project management consultant) document. Separate file, loaded only when a project uses it. */
PRISM_TPL.add("PM-07", { spec(X) {
  let { code, p, lang, zh, a, sector, TT, std, C, pt, cv, Z, bx, TBD, v, t, title, sub, owner, subKey, subName, st, stN, team, discs, discN, midp, train, trTot, lodOf, reqs, subRev, rev, today, swList, cde, crs, naming, namingFields, namingEx, hard, tol, usesL, blank, num, signPub, signForm, S, sec, T_, statusOpts, okCols } = X;
  switch (0) { default: {
      S.kind = "report";
      const name = v(a.name), client = v(a.client);
      sec(Z("一、目的與範圍", "1 Purpose and scope"), { p: [Z(`本報告就「${name}」查核監造單位之檢驗、抽驗及缺失改正追蹤是否落實，並確認相關紀錄完整。`, `For ${name}: Review whether supervision, inspections and correction tracking are carried out and backed by complete records.`)], t: [T_([Z("項目", "Item"), Z("內容", "Detail")], [28, 72], [[Z("工程名稱", "Project"), name], [Z("業主／主辦機關", "Client"), client], [Z("審查期間", "Review period"), ""], [Z("報告日期", "Report date"), today || ""], [Z("審查人", "Reviewer"), ""]])] });
      sec(Z("二、審查依據及資料", "2 Basis and documents reviewed"), { t: [T_([Z("資料名稱", "Document"), Z("版次／日期", "Rev. / date"), Z("收到", "Received")], [56, 26, 18], [[Z("監造計畫及品質計畫", "Supervision and quality plans"), "", "□"], [Z("檢驗停留點紀錄", "Hold-point inspection records"), "", "□"], [Z("材料抽驗及試驗報告", "Material sampling and test reports"), "", "□"], [Z("缺失改正追蹤表", "Non-conformance tracking log"), "", "□"]])] });
      sec(Z("三、查核項目", "3 Checks"), { t: [T_([Z("項次", "No."), Z("查核項目", "Check"), Z("結果", "Result"), Z("說明", "Notes")], [8, 47, 18, 27], [["1", Z("監造計畫內容符合契約", "Supervision plan meets the contract"), Z("□符合 □不符", "□ OK □ Not OK"), ""], ["2", Z("檢驗停留點均有紀錄", "Every hold point recorded"), Z("□符合 □不符", "□ OK □ Not OK"), ""], ["3", Z("材料抽驗頻率符合規定", "Sampling frequency as required"), Z("□符合 □不符", "□ OK □ Not OK"), ""], ["4", Z("缺失已限期改正並複查", "Defects corrected and re-inspected"), Z("□符合 □不符", "□ OK □ Not OK"), ""], ["5", Z("監造日報填寫完整", "Daily supervision reports complete"), Z("□符合 □不符", "□ OK □ Not OK"), ""], ["6", Z("品質文件保存完整可追溯", "Quality records complete and traceable"), Z("□符合 □不符", "□ OK □ Not OK"), ""]])] });
      sec(Z("四、發現事項及處理", "4 Findings and actions"), { t: [T_([Z("編號", "No."), Z("查核項目", "Audit item"), Z("發現事項", "Finding"), Z("缺失等級", "Severity"), Z("改正期限", "Due"), Z("複查結果", "Re-check")], [17, 17, 17, 17, 17, 17], blank(6, 6))] });
      sec(Z("五、結論與建議", "5 Conclusion and recommendations"), { list: [Z("查核結論：□ 符合　□ 部分符合，請監造單位限期改善　□ 不符合，提報業主處理。", "Conclusion: □ Compliant □ Partly compliant; supervisor to correct by the deadline □ Non-compliant; reported to the owner."), Z("監造單位應於 7 日曆天內提出改善說明，並列入下次會議追蹤。", "The supervisor responds in writing within 7 calendar days; tracked at the next meeting."), Z("本報告依所提供資料辦理；資料不足部分已列於發現事項。", "This audit covers the documents provided; gaps are listed under findings.")] });
      S.sign = [Z("PCM 審查人", "PCM reviewer"), Z("PCM 計畫主持人", "PCM project lead"), Z(TT.owner || "業主", "Client")];
      break;
  } }
} });
