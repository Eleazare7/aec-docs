/* AEC PRISM · BEP & EIR Studio — optional template SV-02 材料設備送審文件審查表 · Material and equipment submittal review
   Construction supervision (監造) document. Separate file, loaded only when a project uses it. */
PRISM_TPL.add("SV-02", { spec(X) {
  let { code, p, lang, zh, a, sector, TT, std, C, pt, cv, Z, bx, TBD, v, t, title, sub, owner, subKey, subName, st, stN, team, discs, discN, midp, train, trTot, lodOf, reqs, subRev, rev, today, swList, cde, crs, naming, namingFields, namingEx, hard, tol, usesL, blank, num, signPub, signForm, S, sec, T_, statusOpts, okCols } = X;
  switch (0) { default: {
      S.kind = "report";
      const name = v(a.name), client = v(a.client);
      sec(Z("一、目的與範圍", "1 Purpose and scope"), { p: [Z(`本報告就「${name}」審查材料設備送審資料（型錄、試驗報告、證明文件），確認規格、性能及來源符合契約規範。`, `For ${name}: Review material and equipment submittals (catalogs, test reports, certificates) for specification, performance and origin.`)], t: [T_([Z("項目", "Item"), Z("內容", "Detail")], [28, 72], [[Z("工程名稱", "Project"), name], [Z("業主／主辦機關", "Client"), client], [Z("審查期間", "Review period"), ""], [Z("報告日期", "Report date"), today || ""], [Z("審查人", "Reviewer"), ""]])] });
      sec(Z("二、審查依據及資料", "2 Basis and documents reviewed"), { t: [T_([Z("資料名稱", "Document"), Z("版次／日期", "Rev. / date"), Z("收到", "Received")], [56, 26, 18], [[Z("材料設備送審清單", "Submittal register"), "", "□"], [Z("型錄、規格書及樣品", "Catalogs, data sheets and samples"), "", "□"], [Z("試驗報告及檢驗證明", "Test reports and certificates"), "", "□"], [Z("契約規範及設計圖說", "Contract specs and drawings"), "", "□"]])] });
      sec(Z("三、查核項目", "3 Checks"), { t: [T_([Z("項次", "No."), Z("查核項目", "Check"), Z("結果", "Result"), Z("說明", "Notes")], [8, 47, 18, 27], [["1", Z("規格與契約規範相符", "Matches the specification"), Z("□符合 □不符", "□ OK □ Not OK"), ""], ["2", Z("性能數據有試驗報告佐證", "Performance backed by test reports"), Z("□符合 □不符", "□ OK □ Not OK"), ""], ["3", Z("原產地及出廠證明齊全", "Origin and mill certificates complete"), Z("□符合 □不符", "□ OK □ Not OK"), ""], ["4", Z("與設計圖說尺寸、容量相符", "Size and capacity match the drawings"), Z("□符合 □不符", "□ OK □ Not OK"), ""], ["5", Z("同等品審查程序符合規定", "Equal-product procedure followed"), Z("□符合 □不符", "□ OK □ Not OK"), ""], ["6", Z("送審版次與日期正確", "Revision and date correct"), Z("□符合 □不符", "□ OK □ Not OK"), ""]])] });
      sec(Z("四、發現事項及處理", "4 Findings and actions"), { t: [T_([Z("送審編號", "Submittal no."), Z("材料設備名稱", "Item"), Z("規格要求", "Required"), Z("送審規格", "Submitted"), Z("審查結果", "Result"), Z("備註", "Notes")], [17, 17, 17, 17, 17, 17], blank(6, 6))] });
      sec(Z("五、結論與建議", "5 Conclusion and recommendations"), { list: [Z("審查結論：□ 同意　□ 修正後同意　□ 不同意，請廠商修正後重送。", "Conclusion: □ Accepted □ Accepted with changes □ Rejected — revise and resubmit."), Z("重大事項請於 7 日曆天內提出改善說明，並列入下次會議追蹤。", "Major items need a written response within 7 calendar days and are tracked at the next meeting."), Z("本報告依所提供資料辦理；資料不足部分已列於發現事項。", "This review covers the documents provided; gaps are listed under findings.")] });
      S.sign = [Z("監造人員", "Supervision engineer"), Z("監造主任", "Chief supervisor"), Z(TT.owner || "業主", "Client")];
      break;
  } }
} });
