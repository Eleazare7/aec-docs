/* AEC PRISM · BEP & EIR Studio — optional template CL-06 BIM 合約規範（契約 BIM 條款） · BIM contract specification
   Separate file, loaded only when a project uses this template (08 文件範本庫).
   The BIM clauses an agency adds to a design / supervision or works contract, so the EIR and BEP have a contractual basis. */
PRISM_TPL.add("CL-06", { spec(X) {
  let { code, p, lang, zh, a, sector, TT, std, C, pt, cv, Z, bx, TBD, v, t, title, sub, owner, subKey, subName, st, stN, team, discs, discN, midp, train, trTot, lodOf, reqs, subRev, rev, today, swList, cde, crs, naming, namingFields, namingEx, hard, tol, usesL, blank, num, signPub, signForm, S, sec, T_, statusOpts, okCols } = X;
  switch (0) { default: {
      S.kind = "report";
      const rd = std.reviewDays || 14, bepDays = (C.bepDays || 30), trH = (C.trainHours || 6);
      const stRows = (st.length ? st : []).map(s => [stN(s.key), lodOf(s.key), (a.stages[s.key] || {}).date || TBD, ""]);
      sec(Z("第一條　通則", "1 General"), { list: [
        Z(`本規範為${v(a.name)}（以下簡稱本案）契約之一部分，${owner}得依本規範要求${v(a.lap)}（以下簡稱廠商）辦理建築資訊建模（BIM）工作。`, `This specification forms part of the contract for ${v(a.name)}. The ${owner.toLowerCase()} may require ${v(a.lap)} (the contractor) to carry out BIM work under it.`),
        Z("文件適用順序：契約條款 → 本規範 → BIM 資訊交換需求書（EIR）→ 經核定之 BIM 工作執行計畫書（BEP）。", "Order of precedence: contract terms → this specification → EIR → approved BEP."),
        Z("本規範用語依 ISO 19650 及機關 BIM 作業指引；未規定事項依 EIR 辦理。", "Terms follow ISO 19650 and the client's BIM guidelines; anything not stated follows the EIR."),
        Z("本規範為範本，正式納入契約前應經機關法務審閱。", "This is a template; the client's legal review is required before it is added to a contract.")] });
      sec(Z("第二條　BIM 工作範圍", "2 Scope of BIM work"), { list: [
        Z(`BIM 應用項目：${usesL.length ? usesL.join("、") : TBD}。`, `BIM uses: ${usesL.length ? usesL.join(", ") : TBD}.`),
        Z(`建模專業：${discs.length ? discs.map(d => bx(d.name)).join("、") : TBD}。`, `Disciplines modeled: ${discs.length ? discs.map(d => bx(d.name)).join(", ") : TBD}.`),
        Z("廠商應依各階段需求建置模型、產製圖說、辦理衝突檢討並配合機關審查。", "The contractor builds the models for each stage, produces drawings from them, runs clash reviews and supports the client's reviews.")],
        t: [T_([Z("階段", "Stage"), Z("模型精度（LOD）", "LOD"), Z("預定交付日", "Due"), Z("備註", "Notes")], [26, 22, 22, 30], stRows.length ? stRows : blank(4, 4))] });
      sec(Z("第三條　BIM 工作執行計畫書（BEP）", "3 BIM execution plan (BEP)"), { list: [
        Z(`廠商應於簽約後 ${bepDays} 日曆天內提送 BEP，經${owner}核定後據以執行。`, `The contractor submits the BEP within ${bepDays} calendar days of signing; work follows the BEP once the ${owner.toLowerCase()} approves it.`),
        Z("BEP 內容至少包括：專案資訊、BIM 目標與應用、組織與權責、技術標準（軟體、命名、座標、LOD／LOI）、協同作業（CDE）、色彩計畫、交付計畫（MIDP／TIDP）、品質管制及教育訓練。", "The BEP covers at least: project information, BIM goals and uses, organization and responsibilities, technical standards (software, naming, coordinates, LOD/LOI), collaboration (CDE), color plan, delivery plan (MIDP/TIDP), quality control and training."),
        Z("BEP 應逐項回應 EIR 之需求，並於需求變更時更新版次。", "The BEP answers every EIR requirement and is revised when requirements change.")] });
      sec(Z("第四條　技術標準", "4 Technical standards"), { list: [
        Z(`座標系統：${crs}。`, `Coordinates: ${crs}.`),
        Z(`檔案命名：${namingFields}（例：${namingEx}）。`, `File naming: ${namingFields} (e.g. ${namingEx}).`),
        Z(`建模軟體：${swList}；交換格式為原生檔、IFC 及 PDF，IFC 應附驗證紀錄。`, `Software: ${swList}. Exchange formats: native, IFC and PDF, with an IFC validation record.`),
        Z(`硬衝突容許值 ${tol} mm；衝突應依嚴重度於期限內處理並記錄。`, `Hard-clash tolerance ${tol} mm; clashes are resolved by severity within the set deadlines and recorded.`)] });
      sec(Z("第五條　共同資料環境（CDE）與資訊安全", "5 CDE and information security"), { list: [
        Z(`本案以 ${cde} 為共同資料環境，資訊狀態依 S0（工作中）、S1–S4（共享）、A（發行）、B（部分核定）、CR（竣工紀錄）管理。`, `${cde} is the CDE; states follow S0 (WIP), S1–S4 (shared), A (published), B (partial sign-off) and CR (as-built).`),
        Z("機敏資訊依機關資通安全規定分級存放；發生資安事件時應立即通報。", "Sensitive information is classified and stored per the client's security rules; incidents are reported at once.")] });
      sec(Z("第六條　提送、審查及修正", "6 Submission, review and correction"), { list: [
        Z(`${owner}應於收件完整日起 ${rd} 日曆天內完成審查；審查意見應以審查意見表記錄。`, `The ${owner.toLowerCase()} completes each review within ${rd} calendar days of a complete submission and records comments on the review form.`),
        Z("廠商應依審查意見修正並於期限內重新提送，修正情形以回覆表說明。", "The contractor corrects and resubmits within the deadline and explains each change on the reply form."),
        Z("模型與契約圖說不一致時，以契約約定之優先順序為準，並由廠商提出澄清。", "Where model and contract drawings differ, the contract order of precedence applies and the contractor raises a clarification.")] });
      sec(Z("第七條　人員與教育訓練", "7 Staff and training"), { list: [
        Z("廠商應指派 BIM 經理及各專業建模人員，人員異動應事先書面通知。", "The contractor appoints a BIM manager and modelers for each discipline and notifies staff changes in writing beforehand."),
        Z(`廠商應於各階段辦理 BIM 教育訓練，每階段至少 ${trH} 小時，並提送訓練紀錄。`, `The contractor runs BIM training in each stage, at least ${trH} hours per stage, and submits the training records.`)] });
      sec(Z("第八條　成果交付與移交", "8 Deliverables and handover"), { list: [
        Z("各階段成果依交付計畫提送，竣工階段提送竣工紀錄模型及設施資產資料（COBie）。", "Each stage's deliverables follow the delivery plan; at handover the contractor delivers the as-built record model and asset data (COBie)."),
        Z("交付成果應通過機關驗收，驗收標準依 EIR 辦理。", "Deliverables pass the client's acceptance against the EIR criteria."),
        Z("契約完成或終止時，廠商應移交全部資訊並關閉 CDE 帳號。", "On completion or termination, the contractor hands over all information and closes the CDE accounts.")] });
      sec(Z("第九條　智慧財產權", "9 Intellectual property"), { list: [
        Z(`本案交付之模型及資訊，其所有權依契約約定歸屬${v(a.client)}；廠商保有既有智慧財產。`, `Delivered models and information belong to ${v(a.client)} as the contract states; the contractor keeps its pre-existing IP.`),
        Z(`${v(a.client)}得於本案設計、施工、營運及維護範圍內使用、修改及重製交付資訊。`, `${v(a.client)} may use, modify and copy the delivered information for the project's design, construction, operation and maintenance.`)] });
      sec(Z("第十條　未依規定之處理", "10 Non-compliance"), { list: [
        Z("廠商未依本規範或核定之 BEP 辦理時，機關得限期改善；逾期未改善者，依契約相關規定辦理。", "If the contractor does not follow this specification or the approved BEP, the client may set a deadline to correct it; after that, the contract's provisions apply.")] });
      S.sign = [Z(TT.owner, "Client"), Z("廠商", "Contractor")];
      break;
  } }
} });
