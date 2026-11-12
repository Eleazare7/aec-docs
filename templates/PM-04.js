/* AEC PRISM · BEP & EIR Studio — optional template PM-04 跨專業介面整合及施工可行性審查報告 · Interdisciplinary interface and constructability review
   PCM (project management consultant) document. Separate file, loaded only when a project uses it. */
PRISM_TPL.add("PM-04", { spec(X) {
  let { code, p, lang, zh, a, sector, TT, std, C, pt, cv, Z, bx, TBD, v, t, title, sub, owner, subKey, subName, st, stN, team, discs, discN, midp, train, trTot, lodOf, reqs, subRev, rev, today, swList, cde, crs, naming, namingFields, namingEx, hard, tol, usesL, blank, num, signPub, signForm, S, sec, T_, statusOpts, okCols } = X;
  switch (0) { default: {
      S.kind = "report";
      const name = v(a.name), client = v(a.client);
      sec(Z("一、目的與範圍", "1 Purpose and scope"), { p: [Z(`本報告就「${name}」檢討建築、結構及機電等專業之介面問題與施工可行性，追蹤問題解決至結案。`, `For ${name}: Find architectural, structural and MEP interface problems, review constructability and track each issue to closure.`)], t: [T_([Z("項目", "Item"), Z("內容", "Detail")], [28, 72], [[Z("工程名稱", "Project"), name], [Z("業主／主辦機關", "Client"), client], [Z("審查期間", "Review period"), ""], [Z("報告日期", "Report date"), today || ""], [Z("審查人", "Reviewer"), ""]])] });
      sec(Z("二、審查依據及資料", "2 Basis and documents reviewed"), { t: [T_([Z("資料名稱", "Document"), Z("版次／日期", "Rev. / date"), Z("收到", "Received")], [56, 26, 18], [[Z("各專業設計圖說及 BIM 模型", "Discipline drawings and BIM models"), "", "□"], [Z("衝突檢討報告", "Clash reports"), "", "□"], [Z("施工計畫及施工順序", "Method statements and sequence"), "", "□"], [Z("設備規格及安裝需求", "Equipment specs and installation needs"), "", "□"]])] });
      sec(Z("三、查核項目", "3 Checks"), { t: [T_([Z("項次", "No."), Z("查核項目", "Check"), Z("結果", "Result"), Z("說明", "Notes")], [8, 47, 18, 27], [["1", Z("建築與結構介面（開口、梁柱、樓板）", "Architecture–structure interfaces"), Z("□符合 □不符", "□ OK □ Not OK"), ""], ["2", Z("結構與機電介面（穿梁、套管、預留）", "Structure–MEP interfaces"), Z("□符合 □不符", "□ OK □ Not OK"), ""], ["3", Z("機電各系統間空間與維修通道", "MEP clearances and access"), Z("□符合 □不符", "□ OK □ Not OK"), ""], ["4", Z("施工順序及吊裝動線可行", "Sequence and lifting routes feasible"), Z("□符合 □不符", "□ OK □ Not OK"), ""], ["5", Z("淨高及設備搬運路徑", "Headroom and equipment routes"), Z("□符合 □不符", "□ OK □ Not OK"), ""], ["6", Z("問題已指派責任並追蹤", "Issues assigned and tracked"), Z("□符合 □不符", "□ OK □ Not OK"), ""]])] });
      sec(Z("四、發現事項及處理", "4 Findings and actions"), { t: [T_([Z("編號", "No."), Z("位置", "Location"), Z("涉及專業", "Disciplines"), Z("問題說明", "Issue"), Z("解決方案", "Resolution"), Z("狀態", "Status")], [17, 17, 17, 17, 17, 17], blank(6, 6))] });
      sec(Z("五、結論與建議", "5 Conclusion and recommendations"), { list: [Z("審查結論：□ 同意　□ 修正後同意　□ 不同意，請廠商修正後重送。", "Conclusion: □ Accepted □ Accepted with changes □ Rejected — revise and resubmit."), Z("重大事項請於 7 日曆天內提出改善說明，並列入下次會議追蹤。", "Major items need a written response within 7 calendar days and are tracked at the next meeting."), Z("本報告依所提供資料辦理；資料不足部分已列於發現事項。", "This review covers the documents provided; gaps are listed under findings.")] });
      S.sign = [Z("PCM 審查人", "PCM reviewer"), Z("PCM 計畫主持人", "PCM project lead"), Z(TT.owner || "業主", "Client")];
      break;
  } }
} });
