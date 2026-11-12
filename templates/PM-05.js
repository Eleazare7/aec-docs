/* AEC PRISM · BEP & EIR Studio — optional template PM-05 BIM 成果審查及模型／圖說一致性檢核報告 · BIM deliverable review and model–drawing consistency check
   PCM (project management consultant) document. Separate file, loaded only when a project uses it. */
PRISM_TPL.add("PM-05", { spec(X) {
  let { code, p, lang, zh, a, sector, TT, std, C, pt, cv, Z, bx, TBD, v, t, title, sub, owner, subKey, subName, st, stN, team, discs, discN, midp, train, trTot, lodOf, reqs, subRev, rev, today, swList, cde, crs, naming, namingFields, namingEx, hard, tol, usesL, blank, num, signPub, signForm, S, sec, T_, statusOpts, okCols } = X;
  switch (0) { default: {
      S.kind = "report";
      const name = v(a.name), client = v(a.client);
      sec(Z("一、目的與範圍", "1 Purpose and scope"), { p: [Z(`本報告就「${name}」依專案 EIR／BEP 要求審查 BIM 交付成果，檢核模型與圖說、協調結果之一致性。`, `For ${name}: Review BIM deliverables against the EIR/BEP and check the models agree with the drawings and coordination results.`)], t: [T_([Z("項目", "Item"), Z("內容", "Detail")], [28, 72], [[Z("工程名稱", "Project"), name], [Z("業主／主辦機關", "Client"), client], [Z("審查期間", "Review period"), ""], [Z("報告日期", "Report date"), today || ""], [Z("審查人", "Reviewer"), ""]])] });
      sec(Z("二、審查依據及資料", "2 Basis and documents reviewed"), { t: [T_([Z("資料名稱", "Document"), Z("版次／日期", "Rev. / date"), Z("收到", "Received")], [56, 26, 18], [[Z("EIR 及核定之 BEP", "EIR and approved BEP"), "", "□"], [Z("各階段 BIM 模型（原生檔／IFC）", "Stage models (native / IFC)"), "", "□"], [Z("模型產出圖說", "Drawings produced from the model"), "", "□"], [Z("衝突檢討及協調紀錄", "Clash and coordination records"), "", "□"]])] });
      sec(Z("三、查核項目", "3 Checks"), { t: [T_([Z("項次", "No."), Z("查核項目", "Check"), Z("結果", "Result"), Z("說明", "Notes")], [8, 47, 18, 27], [["1", Z("交付項目與 MIDP 一致", "Deliverables match the MIDP"), Z("□符合 □不符", "□ OK □ Not OK"), ""], ["2", Z("命名、座標及 LOD 符合 BEP", "Naming, coordinates and LOD follow the BEP"), Z("□符合 □不符", "□ OK □ Not OK"), ""], ["3", Z("模型與圖說尺寸、標示一致", "Model and drawings agree"), Z("□符合 □不符", "□ OK □ Not OK"), ""], ["4", Z("重大衝突已解決或有處置", "Major clashes resolved or dispositioned"), Z("□符合 □不符", "□ OK □ Not OK"), ""], ["5", Z("IFC 驗證通過", "IFC validation passed"), Z("□符合 □不符", "□ OK □ Not OK"), ""], ["6", Z("資訊屬性（LOI）完整", "Information (LOI) complete"), Z("□符合 □不符", "□ OK □ Not OK"), ""]])] });
      sec(Z("四、發現事項及處理", "4 Findings and actions"), { t: [T_([Z("編號", "No."), Z("模型／圖號", "Model / drawing"), Z("檢核項目", "Check"), Z("不一致說明", "Inconsistency"), Z("要求改正", "Correction required"), Z("狀態", "Status")], [17, 17, 17, 17, 17, 17], blank(6, 6))] });
      sec(Z("五、結論與建議", "5 Conclusion and recommendations"), { list: [Z("審查結論：□ 同意　□ 修正後同意　□ 不同意，請廠商修正後重送。", "Conclusion: □ Accepted □ Accepted with changes □ Rejected — revise and resubmit."), Z("重大事項請於 7 日曆天內提出改善說明，並列入下次會議追蹤。", "Major items need a written response within 7 calendar days and are tracked at the next meeting."), Z("本報告依所提供資料辦理；資料不足部分已列於發現事項。", "This review covers the documents provided; gaps are listed under findings.")] });
      S.sign = [Z("PCM 審查人", "PCM reviewer"), Z("PCM 計畫主持人", "PCM project lead"), Z(TT.owner || "業主", "Client")];
      break;
  } }
} });
