/* AEC PRISM · BEP & EIR Studio — optional template TR-02 課程大綱 · Course syllabus
   Separate file, loaded only when a project uses this template (08 文件範本庫). */
PRISM_TPL.add("TR-02", { spec(X) {
  let { code, p, lang, zh, a, sector, TT, std, C, pt, cv, Z, bx, TBD, v, t, title, sub, owner, subKey, subName, st, stN, team, discs, discN, midp, train, trTot, lodOf, reqs, subRev, rev, today, swList, cde, crs, naming, namingFields, namingEx, hard, tol, usesL, blank, num, signPub, signForm, S, sec, T_, statusOpts, okCols } = X;
  switch (0) { default: {
      S.kind = "report";
      const R = [[Z("機關審查人員", "Client reviewers"), [[Z("ISO 19650 與本案 EIR／BEP", "ISO 19650 and this project's EIR/BEP"), 1], [Z(`${cde} 查閱與審查意見`, `${cde}: viewing and commenting`), 1.5], [Z("模型查閱與量測", "Model viewing and measuring"), 1.5]]],
        [Z("監造人員", "Supervisors"), [[Z("三級品管與 BIM 查證", "Three-tier QA and BIM verification"), 1], [Z("模型檢核表與抽查方法", "Model checklist and sampling"), 1.5], [Z("衝突報告與 BCF 議題追蹤", "Clash reports and BCF tracking"), 1.5]]],
        [Z("BIM 經理／協調人員", "BIM managers / coordinators"), [[Z("TIDP／MIDP 管理", "TIDP / MIDP management"), 1], [Z(`整合與衝突檢討（${(a.checkers || [])[0] || "Navisworks"}）`, `Federation and clash detection (${(a.checkers || [])[0] || "Navisworks"})`), 2], [Z("CDE 狀態與發行流程", "CDE states and publishing"), 1]]],
        [Z("各專業建模人員", "Modelers"), [[Z(`命名規則（${namingFields}）`, `Naming rule (${namingFields})`), 1], [Z(`${swList} 樣板與 LOD／屬性`, `${swList}: templates, LOD and attributes`), 2], [Z("自主檢查與 IFC 匯出", "Self-check and IFC export"), 1]]],
        [Z("工地人員", "Site staff"), [[Z("行動裝置模型查閱", "Viewing models on mobile"), 1], [Z("現場問題回報與 RFI", "Reporting issues and RFIs"), 1]]]];
      R.forEach(([role, mods]) => sec(role, { t: [T_([Z("單元", "Module"), Z("內容", "Content"), Z("時數", "Hours"), Z("方式", "Method")], [10, 56, 12, 22], mods.map((m, i) => [String(i + 1), m[0], String(m[1]), Z("講授＋實機", "Talk + hands-on")]).concat([["", Z("合計", "Total"), String(mods.reduce((s, m) => s + m[1], 0)), ""]]))] }));
      break;
  } }
} });
