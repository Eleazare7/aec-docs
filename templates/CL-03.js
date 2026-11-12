/* AEC PRISM · BEP & EIR Studio — optional template CL-03 BIM 契約附件（資訊協定） · Information protocol
   Separate file, loaded only when a project uses this template (08 文件範本庫). */
PRISM_TPL.add("CL-03", { spec(X) {
  let { code, p, lang, zh, a, sector, TT, std, C, pt, cv, Z, bx, TBD, v, t, title, sub, owner, subKey, subName, st, stN, team, discs, discN, midp, train, trTot, lodOf, reqs, subRev, rev, today, swList, cde, crs, naming, namingFields, namingEx, hard, tol, usesL, blank, num, signPub, signForm, S, sec, T_, statusOpts, okCols } = X;
  switch (0) { default: {
      S.kind = "report";
      sec(Z("適用範圍與文件優先順序", "Scope and order of precedence"), { list: [Z(`本附件適用於${v(a.name)}（以下簡稱本案）之 BIM 資訊交付，為契約之一部分。`, `This annex applies to BIM information delivery on ${v(a.name)} and forms part of the contract.`), Z("文件適用順序：契約條款 → 本附件 → 資訊交換需求（EIR）→ 經核定之 BIM 工作執行計畫書（BEP）。", "Order of precedence: contract terms → this annex → EIR → approved BEP."), Z("本附件為範本，正式使用前應經雙方法務審閱。", "This annex is a template; legal review is required before use.")] });
      sec(Z("資訊所有權與使用授權", "Ownership and license"), { list: [Z(`本案交付之模型及資訊，其所有權依契約約定歸屬${v(a.client)}；${v(a.lap)}保有既有智慧財產。`, `Ownership of delivered information follows the contract in favor of ${v(a.client)}; ${v(a.lap)} keeps its pre-existing IP.`), Z(`${v(a.client)}得於本案設計、施工、營運及維護範圍內使用、修改及重製交付資訊。`, `${v(a.client)} may use, modify and copy delivered information for design, construction, operation and maintenance of the project.`), Z("第三方軟體元件、族群及樣板之授權依原授權條件辦理。", "Third-party content follows its own license.")] });
      sec(Z("共同資料環境（CDE）", "Common data environment"), { list: [Z(`本案以 ${cde} 為共同資料環境，資訊狀態依 S0（工作中）、S1–S4（共享）、A（發行）、B（部分核定）、CR（竣工紀錄）管理。`, `${cde} is the project CDE; states follow S0 (WIP), S1–S4 (shared), A (published), B (partial sign-off), CR (as-built).`), Z("各方應依權限矩陣存取資訊，帳號由 BIM 經理開設並於專案結束時關閉。", "Access follows the permission matrix; the BIM manager opens and closes accounts.")] });
      sec(Z("資訊安全", "Information security"), { list: [Z("機敏資訊依機關資通安全規定分級存放，不得上傳未經核准之公有雲。", "Sensitive information is classified and stored per the client's security rules."), Z("發生資安事件時，應於發現後立即通報並配合調查。", "Security incidents are reported immediately.")] });
      sec(Z("交付、審查與驗收", "Delivery, review and acceptance"), { list: [Z(`審查期限為收件完整日起 ${std.reviewDays || 14} 日；驗收依 EIR 驗收標準辦理。`, `Review period: ${std.reviewDays || 14} days from a complete submission; acceptance per the EIR criteria.`), Z("交付格式含原生檔、IFC 及 PDF；IFC 須附驗證紀錄。", "Deliver native files, IFC and PDF, with an IFC validation record.")] });
      sec(Z("責任、變更與移交", "Liability, change and handover"), { list: [Z("模型資訊與契約圖說不一致時，以契約約定之優先順序為準。", "Where model and contract drawings differ, the contract order of precedence applies."), Z("資訊需求變更應以書面為之，並調整 BEP 及交付計畫。", "Changes to information requirements are made in writing and update the BEP and delivery plan."), Z("契約終止或完成時，應移交全部資訊並關閉帳號。", "On completion or termination, all information is handed over and accounts closed.")] });
      S.sign = [Z(TT.owner, "Client"), Z("廠商", "Contractor")];
      break;
  } }
} });
