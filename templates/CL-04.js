/* AEC PRISM · BEP & EIR Studio — optional template CL-04 專案資訊標準 · Project information standard
   Separate file, loaded only when a project uses this template (08 文件範本庫). */
PRISM_TPL.add("CL-04", { spec(X) {
  let { code, p, lang, zh, a, sector, TT, std, C, pt, cv, Z, bx, TBD, v, t, title, sub, owner, subKey, subName, st, stN, team, discs, discN, midp, train, trTot, lodOf, reqs, subRev, rev, today, swList, cde, crs, naming, namingFields, namingEx, hard, tol, usesL, blank, num, signPub, signForm, S, sec, T_, statusOpts, okCols } = X;
  switch (0) { default: {
      S.kind = "report";
      sec(Z("座標與單位", "Coordinates and units"), { p: [crs, Z("各專業以共用座標整合，不得原點對原點或縮放。", "Shared coordinates; no origin-to-origin or scaling.")],
        t: [T_([Z("專業", "Discipline"), Z("長度", "Length"), Z("面積", "Area"), Z("體積", "Volume")], [16, 34, 25, 25], (std.units || []).map(u => [u.disc, bx(u.length), u.area, u.volume]))] });
      sec(Z("檔案命名規則", "File naming"), { p: [Z(`命名欄位：${namingFields}`, `Fields: ${namingFields}`), Z(`範例：${namingEx}`, `Example: ${namingEx}`), naming.typeCodes ? Z(`資訊類型代碼：${naming.typeCodes}`, `Type codes: ${naming.typeCodes}`) : ""].filter(Boolean),
        t: [T_([Z("代碼", "Code"), Z("專業", "Discipline")], [20, 80], discs.map(d => [d.code, bx(d.name)]), { cap: Z("專業代碼表", "Discipline codes") })] });
      sec(Z("CDE 狀態與版次", "CDE states and revisions"), { p: [Z(`狀態碼：${std.statusCodes || "S0–S4／A／B／CR"}`, `Status: ${std.statusCodes || "S0–S4 / A / B / CR"}`), Z(`版次碼：${std.revCodes || "P01／C01"}`, `Revisions: ${std.revCodes || "P01 / C01"}`), Z(`送審版次：第${subRev}版起，依第0-A版 → 0-B → 0 → 1 編號，與模型版次分開管理。`, `Submission revisions start at ${subRev} and are tracked separately from model revisions.`)] });
      sec(Z("軟體與交換格式", "Software and exchange formats"), { p: [Z(`建模軟體：${swList}`, `Software: ${swList}`), Z(`交換格式：${(a.formats || []).join("、") || TBD}`, `Formats: ${(a.formats || []).join(", ") || TBD}`), Z("IFC 匯出須附驗證紀錄，IfcBuildingElementProxy 比例不超過 5%。", "IFC exports carry a validation record; proxies ≤ 5%.")] });
      sec(Z("色彩計畫", "Color plan"), { t: [T_([Z("系統", "System"), "RGB", Z("色塊", "Swatch")], [50, 25, 25], (std.colours || []).map(c => [bx(c.system), c.rgb, ""]), { fills: (std.colours || []).map(c => rgbHex(c.rgb)) })] });
      break;
  } }
} });
