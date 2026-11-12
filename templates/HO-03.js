/* AEC PRISM · BEP & EIR Studio — optional template HO-03 移交檢核表 · Handover checklist
   Separate file, loaded only when a project uses this template (08 文件範本庫). */
PRISM_TPL.add("HO-03", { spec(X) {
  let { code, p, lang, zh, a, sector, TT, std, C, pt, cv, Z, bx, TBD, v, t, title, sub, owner, subKey, subName, st, stN, team, discs, discN, midp, train, trTot, lodOf, reqs, subRev, rev, today, swList, cde, crs, naming, namingFields, namingEx, hard, tol, usesL, blank, num, signPub, signForm, S, sec, T_, statusOpts, okCols } = X;
  switch (0) { default: {
      sec(Z("移交檢核", "Handover checks"), { t: [T_([Z("項次", "No."), Z("移交項目", "Item"), Z("確認", "Done"), Z("說明", "Notes")], [6, 60, 10, 24], num([[Z("竣工模型原生檔（各專業）", "Native as-built models (all disciplines)")], [Z("IFC 檔及驗證紀錄", "IFC files and validation record")], [Z("竣工圖 PDF（由模型產出）", "As-built drawings PDF (from the model)")], [Z("COBie／設施資產資料", "COBie / asset data")], [Z("設備型錄、保固書、操作維護手冊", "Catalogs, warranties, O&M manuals")], [Z("CDE 專案封存及匯出", "CDE archive and export")], [Z("帳號關閉及授權移轉", "Accounts closed, licenses transferred")], [Z("教育訓練紀錄及結業證書", "Training records and certificates")], [Z("BIM 竣工成果報告書", "As-built BIM report")]].map(r => [...r, "□", ""])))] });
      S.sign = signPub;
      break;
  } }
} });
