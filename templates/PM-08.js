/* AEC PRISM · BEP & EIR Studio — optional template PM-08 施工計畫、品質計畫及重要送審文件複核意見表 · Review comments on method statements, quality plans and key submittals
   PCM (project management consultant) document. Separate file, loaded only when a project uses it. */
PRISM_TPL.add("PM-08", { spec(X) {
  let { code, p, lang, zh, a, sector, TT, std, C, pt, cv, Z, bx, TBD, v, t, title, sub, owner, subKey, subName, st, stN, team, discs, discN, midp, train, trTot, lodOf, reqs, subRev, rev, today, swList, cde, crs, naming, namingFields, namingEx, hard, tol, usesL, blank, num, signPub, signForm, S, sec, T_, statusOpts, okCols } = X;
  switch (0) { default: {
      S.kind = "report";
      const name = v(a.name), client = v(a.client);
      sec(Z("一、目的與範圍", "1 Purpose and scope"), { p: [Z(`本報告就「${name}」複核施工計畫、品質計畫及重要送審文件之完整性與審查品質，追蹤未結意見至結案。`, `For ${name}: Check the completeness and review quality of method statements, quality plans and key submittals, and track open comments to closure.`)], t: [T_([Z("項目", "Item"), Z("內容", "Detail")], [28, 72], [[Z("工程名稱", "Project"), name], [Z("業主／主辦機關", "Client"), client], [Z("審查期間", "Review period"), ""], [Z("報告日期", "Report date"), today || ""], [Z("審查人", "Reviewer"), ""]])] });
      sec(Z("二、審查依據及資料", "2 Basis and documents reviewed"), { t: [T_([Z("資料名稱", "Document"), Z("版次／日期", "Rev. / date"), Z("收到", "Received")], [56, 26, 18], [[Z("送審文件及版次", "Submittals and revisions"), "", "□"], [Z("監造審查意見", "Supervisor comments"), "", "□"], [Z("契約及規範要求", "Contract and spec requirements"), "", "□"], [Z("前次複核意見回覆", "Replies to previous comments"), "", "□"]])] });
      sec(Z("三、查核項目", "3 Checks"), { t: [T_([Z("項次", "No."), Z("查核項目", "Check"), Z("結果", "Result"), Z("說明", "Notes")], [8, 47, 18, 27], [["1", Z("送審文件項目齊全", "Submittal is complete"), Z("□符合 □不符", "□ OK □ Not OK"), ""], ["2", Z("內容符合契約及規範", "Content meets contract and specs"), Z("□符合 □不符", "□ OK □ Not OK"), ""], ["3", Z("監造審查意見具體", "Supervisor comments are specific"), Z("□符合 □不符", "□ OK □ Not OK"), ""], ["4", Z("前次意見均已回覆", "All previous comments answered"), Z("□符合 □不符", "□ OK □ Not OK"), ""], ["5", Z("未結意見有追蹤期限", "Open comments have deadlines"), Z("□符合 □不符", "□ OK □ Not OK"), ""], ["6", Z("核定版次正確", "Approved revision is correct"), Z("□符合 □不符", "□ OK □ Not OK"), ""]])] });
      sec(Z("四、發現事項及處理", "4 Findings and actions"), { t: [T_([Z("項次", "No."), Z("文件名稱／版次", "Document / rev."), Z("頁次／章節", "Page / clause"), Z("複核意見", "Comment"), Z("回覆", "Reply"), Z("結案", "Closed")], [17, 17, 17, 17, 17, 17], blank(6, 6))] });
      sec(Z("五、結論與建議", "5 Conclusion and recommendations"), { list: [Z("審查結論：□ 同意　□ 修正後同意　□ 不同意，請廠商修正後重送。", "Conclusion: □ Accepted □ Accepted with changes □ Rejected — revise and resubmit."), Z("重大事項請於 7 日曆天內提出改善說明，並列入下次會議追蹤。", "Major items need a written response within 7 calendar days and are tracked at the next meeting."), Z("本報告依所提供資料辦理；資料不足部分已列於發現事項。", "This review covers the documents provided; gaps are listed under findings.")] });
      S.sign = [Z("PCM 審查人", "PCM reviewer"), Z("PCM 計畫主持人", "PCM project lead"), Z(TT.owner || "業主", "Client")];
      break;
  } }
} });
