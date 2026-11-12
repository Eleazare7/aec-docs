/* AEC PRISM · BEP & EIR Studio — optional template QA-08 建模日誌 · Modeling log
   Separate file, loaded only when a project uses this template (08 文件範本庫). */
PRISM_TPL.add("QA-08", { spec(X) {
  let { code, p, lang, zh, a, sector, TT, std, C, pt, cv, Z, bx, TBD, v, t, title, sub, owner, subKey, subName, st, stN, team, discs, discN, midp, train, trTot, lodOf, reqs, subRev, rev, today, swList, cde, crs, naming, namingFields, namingEx, hard, tol, usesL, blank, num, signPub, signForm, S, sec, T_, statusOpts, okCols } = X;
  switch (0) { default: {
      S.landscape = true;
      sec(Z("建模日誌", "Modeling log"), { t: [T_([Z("日期", "Date"), Z("模型檔名", "Model file"), Z("專業", "Discipline"), Z("版次", "Revision"), Z("工作內容", "Work done"), Z("人員", "By"), Z("工時", "Hours"), Z("備註", "Notes")], [9, 20, 9, 7, 30, 9, 6, 10], blank(20, 8))] });
      break;
  } }
} });
