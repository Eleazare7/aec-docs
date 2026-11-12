/* AEC PRISM · BEP & EIR Studio — optional template QA-04 監造查證紀錄表 · Supervisor verification record
   Separate file, loaded only when a project uses this template (08 文件範本庫). */
PRISM_TPL.add("QA-04", { spec(X) {
  let { code, p, lang, zh, a, sector, TT, std, C, pt, cv, Z, bx, TBD, v, t, title, sub, owner, subKey, subName, st, stN, team, discs, discN, midp, train, trTot, lodOf, reqs, subRev, rev, today, swList, cde, crs, naming, namingFields, namingEx, hard, tol, usesL, blank, num, signPub, signForm, S, sec, T_, statusOpts, okCols } = X;
  switch (0) { default: {
      S.landscape = true;
      sec(Z("監造查證", "Supervisor verification"), { p: [Z(`監造單位：${v(pt.supervisor)}　抽查比例：依 BEP 品質管理章節`, `Supervisor: ${v(pt.supervisor)}   Sample rate: per the BEP`)],
        t: [T_([Z("項次", "No."), Z("抽查項目", "Item"), Z("廠商自主檢查結果", "Contractor result"), Z("監造查證結果", "Supervisor result"), Z("合格／缺失", "Pass / defect"), Z("改善期限", "Fix by"), Z("複查結果", "Re-check")], [6, 26, 16, 16, 12, 12, 12], num([[Z("命名與座標", "Naming and coordinates")], [Z("LOD 與屬性", "LOD and attributes")], [Z("衝突處理", "Clash resolution")], [Z("圖模一致", "Drawing–model consistency")], [Z("IFC 驗證", "IFC validation")], ...blank(5, 1)].map(r => [...r, "", "", "", "", ""])))] });
      S.sign = [Z("監造人員", "Supervisor"), Z("監造主管", "Supervising lead"), Z("廠商代表", "Contractor")];
      break;
  } }
} });
