/* AEC PRISM · BEP & EIR Studio — optional template PL-10 BIM 服務建議書 · BIM service proposal
   Separate file, loaded only when a project uses this template (08 文件範本庫).
   The proposal the BIM consultant sends the client before appointment: understanding, scope, deliverables, method, team, schedule, fee basis. */
PRISM_TPL.add("PL-10", { spec(X) {
  let { code, p, lang, zh, a, sector, TT, std, C, pt, cv, Z, bx, TBD, v, t, title, sub, owner, subKey, subName, st, stN, team, discs, discN, midp, train, trTot, lodOf, reqs, subRev, rev, today, swList, cde, crs, naming, namingFields, namingEx, hard, tol, usesL, blank, num, signPub, signForm, S, sec, T_, statusOpts, okCols } = X;
  switch (0) { default: {
      S.kind = "report";
      const firm = v(a.lap), client = v(a.client), name = v(a.name);
      const secs = [...new Set((reqs || []).map(r => r.sec))];
      sec(Z("一、建議書說明", "1 About this proposal"), { p: [
        Z(`${firm}謹就「${name}」向${client}提出本 BIM 服務建議書，說明本團隊對本案的理解、建議之 BIM 服務範圍、交付成果、作業方法、團隊組織及時程，供${client}評估及洽談。`,
          `${firm} submits this BIM service proposal for ${name} to ${client}. It sets out our understanding of the project, the proposed BIM scope, deliverables, method, team and schedule for your review.`),
        Z("本建議書內容依 ISO 19650 系列標準及我國公共工程 BIM 相關指引撰寫；正式範圍與費用以雙方簽訂之契約為準。", "This proposal follows the ISO 19650 series and Taiwan's public-works BIM guidance; the final scope and fee are those in the signed contract.")] });
      sec(Z("二、專案概要與需求理解", "2 Project summary and our understanding"), {
        t: [T_([Z("項目", "Item"), Z("內容", "Detail")], [28, 72], [
          [Z("工程名稱", "Project"), name], [Z("業主／主辦機關", "Client"), client], [Z("工程類別", "Sector"), sector || TBD],
          [Z("作業階段", "Stages"), st.length ? st.map(s => stN(s.key)).join("、") : TBD],
          [Z("建模專業", "Disciplines"), discs.length ? discs.map(d => bx(d.name)).join("、") : TBD],
          [Z("EIR 需求", "EIR requirements"), (reqs || []).length ? Z(`${reqs.length} 項，涵蓋 ${secs.length} 個章節`, `${reqs.length} requirements in ${secs.length} sections`) : Z("待業主提供", "To be provided by the client")]])],
        list: [Z("本團隊將逐項回應業主 EIR，並於決標後提送 BIM 工作執行計畫書（BEP）。", "We will answer every EIR requirement and submit the post-appointment BEP after award."),
          Z("如業主尚無 EIR，本團隊可協助擬定 EIR 及 BIM 合約規範。", "If there is no EIR yet, we can help draft the EIR and the BIM contract clauses.")] });
      sec(Z("三、BIM 服務目標", "3 BIM objectives"), { list: [
        Z("以模型整合各專業設計，及早發現並解決衝突，減少施工變更。", "Coordinate all disciplines in the model to find and fix clashes early and reduce site changes."),
        Z("由模型產出圖說與數量，提升圖說一致性與估算準確度。", "Produce drawings and quantities from the model for consistent drawings and better estimates."),
        Z("建立可追溯的資訊交付流程，便於機關審查與驗收。", "Run a traceable delivery process that makes client review and acceptance straightforward."),
        Z("竣工時移交完整模型與資產資料，支援後續營運維護。", "Hand over complete models and asset data to support operation and maintenance.")] });
      sec(Z("四、建議服務範圍與 BIM 應用", "4 Proposed scope and BIM uses"), {
        t: [T_([Z("BIM 應用項目", "BIM use"), Z("說明", "Description"), Z("建議", "Proposed")], [30, 52, 18], (usesL.length ? usesL : [Z("模型建置", "Model authoring"), Z("衝突檢討", "Clash review"), Z("圖說產出", "Drawing production"), Z("數量計算", "Quantity take-off")]).map(u => [u, "", Z("✓ 建議", "✓ Yes")]))],
        list: [Z("可依預算與需求調整項目；選用項目於洽談時確認。", "Items can be adjusted to budget and needs; optional items are confirmed during discussion.")] });
      sec(Z("五、交付成果", "5 Deliverables"), {
        t: [T_([Z("階段", "Stage"), Z("主要交付成果", "Main deliverables"), "LOD", Z("格式", "Format")], [20, 48, 12, 20], st.length ? st.map(s => [stN(s.key), bx((midp.find(m => m.stage === s.key) || {}).deliverable || Z("階段模型、圖說及成果報告", "Stage models, drawings and report")), lodOf(s.key), Z("原生檔／IFC／PDF", "Native / IFC / PDF")]) : blank(4, 4))],
        list: [Z("文件類交付：EIR 回應、BEP、MIDP／TIDP、審查回覆表、衝突檢討報告、階段成果報告、竣工模型說明書及 COBie 資產資料。", "Documents: EIR responses, BEP, MIDP/TIDP, review replies, clash reports, stage reports, as-built statement and COBie asset data.")] });
      sec(Z("六、作業方法", "6 Method"), { list: [
        Z(`依 ISO 19650 資訊管理流程辦理：評估與需求 → 投標 → 委任 → 動員 → 協同產製 → 資訊模型交付 → 結案。`, "ISO 19650 information management: assessment and need → tender → appointment → mobilization → collaborative production → delivery → close-out."),
        Z(`共同資料環境（CDE）：${cde}；資訊狀態 S0 → S1–S4 → A → CR。`, `CDE: ${cde}; states S0 → S1–S4 → A → CR.`),
        Z(`命名與座標：檔案命名 ${namingFields}；座標系統 ${crs}。`, `Naming and coordinates: ${namingFields}; ${crs}.`),
        Z(`協調會議：每兩週召開 BIM 協調會議，衝突依嚴重度限期處理（硬衝突容許值 ${tol} mm）。`, `Coordination meetings every two weeks; clashes resolved by severity (hard-clash tolerance ${tol} mm).`),
        Z("品質管理：三級品管（自主檢查、監造查證、機關抽查），每次提送附檢核紀錄。", "Quality: three-tier checks (self-check, supervisor, client), with check records on every submission.")] });
      sec(Z("七、團隊組織", "7 Team"), {
        t: [T_([Z("角色", "Role"), Z("姓名", "Name"), Z("公司", "Company"), Z("年資", "Years"), Z("主要職責", "Duties")], [20, 16, 22, 10, 32], team.length ? team.map(r => [r.role || "", r.contact || "", r.company || "", r.years ? String(r.years) : "", ""]) : [[Z("BIM 經理", "BIM manager"), "", firm, "", Z("BEP、MIDP 及對業主窗口", "BEP, MIDP and client contact")], [Z("BIM 協調人", "BIM coordinator"), "", firm, "", Z("模型整合與衝突檢討", "Federation and clash review")], [Z("建模人員", "Modelers"), "", firm, "", Z("各專業模型建置與圖說", "Discipline models and drawings")]])] });
      sec(Z("八、軟硬體", "8 Software and hardware"), { list: [Z(`建模軟體：${swList}`, `Software: ${swList}`), Z(`檢核軟體：${(a.checkers || []).join("、") || TBD}`, `Checking: ${(a.checkers || []).join(", ") || TBD}`), Z("交換格式：原生檔、IFC（附驗證紀錄）、PDF。", "Exchange: native, IFC (with validation record) and PDF.")] });
      sec(Z("九、預定時程", "9 Schedule"), {
        t: [T_([Z("階段", "Stage"), Z("預定完成日", "Target date"), Z("里程碑", "Milestone")], [25, 25, 50], st.length ? st.map(s => [stN(s.key), (a.stages[s.key] || {}).date || TBD, Z("階段成果提送審查", "Stage submission for review")]) : blank(4, 3))],
        list: [Z("BEP 於決標後 30 日曆天內提送；各階段審查期依契約規定。", "The BEP is submitted within 30 calendar days of award; review periods follow the contract.")] });
      sec(Z("十、教育訓練與技術支援", "10 Training and support"), { list: [Z(`提供業主及相關單位 BIM 教育訓練${trTot ? `合計 ${trTot} 小時` : ""}，含模型瀏覽、CDE 操作及審查流程。`, `BIM training for the client and stakeholders${trTot ? ` (${trTot} hours in total)` : ""}: model viewing, CDE use and the review process.`), Z("履約期間提供電話及電子郵件技術支援。", "Phone and email support throughout the contract.")] });
      sec(Z("十一、服務費用", "11 Fee"), { p: [Z("服務費用依確認之服務範圍、階段及人力另提報價單；本建議書不含價格。", "The fee is quoted separately once the scope, stages and staffing are confirmed; this proposal contains no prices.")],
        t: [T_([Z("計價項目", "Fee item"), Z("計價方式", "Basis"), Z("備註", "Notes")], [40, 30, 30], [[Z("BIM 模型建置與協調", "Modeling and coordination"), Z("依階段計價", "Per stage"), ""], [Z("文件製作（EIR 回應、BEP 等）", "Documents (EIR response, BEP, etc.)"), Z("依份數計價", "Per document"), ""], [Z("教育訓練", "Training"), Z("依時數計價", "Per hour"), ""]])] });
      sec(Z("十二、聯絡窗口", "12 Contact"), { t: [T_([Z("項目", "Item"), Z("內容", "Detail")], [30, 70], [[Z("提案單位", "Proposed by"), firm], [Z("聯絡人", "Contact"), ""], [Z("電話／Email", "Phone / email"), ""], [Z("建議書日期", "Date"), today || ""]])] });
      S.sign = [Z("提案單位", "Proposed by"), Z(TT.owner || "業主", "Client")];
      break;
  } }
} });
