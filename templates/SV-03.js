/* AEC PRISM · BEP & EIR Studio — optional template SV-03 施工圖審查及圖說疑義彙整報告 · Shop drawing review and drawing query summary
   Construction supervision (監造) document. Separate file, loaded only when a project uses it. */
PRISM_TPL.add("SV-03", { spec(X) {
  let { code, p, lang, zh, a, sector, TT, std, C, pt, cv, Z, bx, TBD, v, t, title, sub, owner, subKey, subName, st, stN, team, discs, discN, midp, train, trTot, lodOf, reqs, subRev, rev, today, swList, cde, crs, naming, namingFields, namingEx, hard, tol, usesL, blank, num, signPub, signForm, S, sec, T_, statusOpts, okCols } = X;
  switch (0) { default: {
      S.kind = "report";
      const name = v(a.name), client = v(a.client);
      sec(Z("一、目的與範圍", "1 Purpose and scope"), { p: [Z(`本報告就「${name}」審查施工圖並彙整圖說疑義（RFI），確認疑義已釐清、責任明確並追蹤至結案。`, `For ${name}: Review shop drawings, consolidate drawing queries (RFIs), and track each to a clear answer and closure.`)], t: [T_([Z("項目", "Item"), Z("內容", "Detail")], [28, 72], [[Z("工程名稱", "Project"), name], [Z("業主／主辦機關", "Client"), client], [Z("審查期間", "Review period"), ""], [Z("報告日期", "Report date"), today || ""], [Z("審查人", "Reviewer"), ""]])] });
      sec(Z("二、審查依據及資料", "2 Basis and documents reviewed"), { t: [T_([Z("資料名稱", "Document"), Z("版次／日期", "Rev. / date"), Z("收到", "Received")], [56, 26, 18], [[Z("施工圖及版次清冊", "Shop drawings and revision list"), "", "□"], [Z("設計圖說及規範", "Design drawings and specs"), "", "□"], [Z("疑義澄清單（RFI）", "RFI log"), "", "□"], [Z("BIM 模型及衝突檢討紀錄", "BIM models and clash records"), "", "□"]])] });
      sec(Z("三、查核項目", "3 Checks"), { t: [T_([Z("項次", "No."), Z("查核項目", "Check"), Z("結果", "Result"), Z("說明", "Notes")], [8, 47, 18, 27], [["1", Z("施工圖與設計圖說一致", "Shop drawings match design"), Z("□符合 □不符", "□ OK □ Not OK"), ""], ["2", Z("各專業介面已整合", "Interfaces coordinated"), Z("□符合 □不符", "□ OK □ Not OK"), ""], ["3", Z("尺寸、標高及材料標示完整", "Dimensions, levels and materials shown"), Z("□符合 □不符", "□ OK □ Not OK"), ""], ["4", Z("疑義均已提出並編號", "Queries raised and numbered"), Z("□符合 □不符", "□ OK □ Not OK"), ""], ["5", Z("疑義回覆經設計單位確認", "Answers confirmed by the designer"), Z("□符合 □不符", "□ OK □ Not OK"), ""], ["6", Z("未結疑義已列追蹤期限", "Open queries have deadlines"), Z("□符合 □不符", "□ OK □ Not OK"), ""]])] });
      sec(Z("四、發現事項及處理", "4 Findings and actions"), { t: [T_([Z("疑義編號", "Query no."), Z("圖號／位置", "Drawing / location"), Z("疑義內容", "Query"), Z("回覆單位", "Answered by"), Z("回覆內容", "Answer"), Z("狀態", "Status")], [17, 17, 17, 17, 17, 17], blank(6, 6))] });
      sec(Z("五、結論與建議", "5 Conclusion and recommendations"), { list: [Z("審查結論：□ 同意　□ 修正後同意　□ 不同意，請廠商修正後重送。", "Conclusion: □ Accepted □ Accepted with changes □ Rejected — revise and resubmit."), Z("重大事項請於 7 日曆天內提出改善說明，並列入下次會議追蹤。", "Major items need a written response within 7 calendar days and are tracked at the next meeting."), Z("本報告依所提供資料辦理；資料不足部分已列於發現事項。", "This review covers the documents provided; gaps are listed under findings.")] });
      S.sign = [Z("監造人員", "Supervision engineer"), Z("監造主任", "Chief supervisor"), Z(TT.owner || "業主", "Client")];
      break;
  } }
} });
