/* AEC PRISM · BEP & EIR Studio — optional template QA-10 模型檔案總表 · Model file register
   Separate file, loaded only when a project uses this template (08 文件範本庫). */
PRISM_TPL.add("QA-10", { spec(X) {
  let { code, p, lang, zh, a, sector, TT, std, C, pt, cv, Z, bx, TBD, v, t, title, sub, owner, subKey, subName, st, stN, team, discs, discN, midp, train, trTot, lodOf, reqs, subRev, rev, today, swList, cde, crs, naming, namingFields, namingEx, hard, tol, usesL, blank, num, signPub, signForm, S, sec, T_, statusOpts, okCols } = X;
  switch (0) { default: {
      S.landscape = true;
      sec(Z("模型檔案總表", "Model file register"), { p: [Z(`命名欄位：${namingFields}　範例：${namingEx}`, `Fields: ${namingFields}   Example: ${namingEx}`)],
        t: [T_([Z("項次", "No."), Z("檔名", "File name"), Z("專業", "Discipline"), Z("內容說明", "Contents"), Z("階段", "Stage"), Z("版次", "Revision"), Z("CDE 狀態", "CDE state"), Z("負責人", "Owner")], [6, 26, 12, 20, 10, 8, 9, 9], ((X.rec && X.rec.models.length) ? num(X.rec.models.flatMap(r => [r.csd_file ? [r.csd_file, "", Z(`${r.level} 綜合設備套繪圖 CSD（${X.rec.slash(r.csd_date)}）`, `${r.level} combined services drawing (CSD, ${X.rec.slash(r.csd_date)})`), "", "", "", r.remark || ""] : null, r.nwd_file ? [r.nwd_file, "", Z(`${r.level} 整合模型 NWD（${X.rec.slash(r.nwd_date)}）`, `${r.level} federated model (NWD, ${X.rec.slash(r.nwd_date)})`), "", "", "", r.remark || ""] : null].filter(Boolean))) : num(discs.flatMap(d => [[Z("〔依命名規則〕", "[per naming rule]"), discN(d), Z(`${bx(d.name)}模型`, `${bx(d.name)} model`), "", "", "S0", ""]]).concat(blank(4, 7)))), { status: ["S0", "S1", "S2", "S3", "S4", "A", "B", "CR"] })] });
      break;
  } }
} });
