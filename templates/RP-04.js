/* AEC PRISM · BEP & EIR Studio — optional template RP-04 模型數量計算書 · Model quantity (QTO) report
   Separate file, loaded only when a project uses this template (08 文件範本庫). */
PRISM_TPL.add("RP-04", { spec(X) {
  let { code, p, lang, zh, a, sector, TT, std, C, pt, cv, Z, bx, TBD, v, t, title, sub, owner, subKey, subName, st, stN, team, discs, discN, midp, train, trTot, lodOf, reqs, subRev, rev, today, swList, cde, crs, naming, namingFields, namingEx, hard, tol, usesL, blank, num, signPub, signForm, S, sec, T_, statusOpts, okCols } = X;
  switch (0) { default: {
      S.landscape = true;
      const q = std.qto || {};
      sec(Z("計量原則", "Measurement rules"), { list: [bx(q.rules || ""), Z(`容許誤差：混凝土 ${q.concrete ?? "—"}%、模板 ${q.formwork ?? "—"}%、面積 ${q.area ?? "—"}%、管線 ${q.pipe ?? "—"}%`, `Tolerances: concrete ${q.concrete ?? "—"}%, formwork ${q.formwork ?? "—"}%, area ${q.area ?? "—"}%, pipe ${q.pipe ?? "—"}%`), Z("模型數量僅供參考，契約計價以契約約定為準。", "Model quantities are for reference; payment follows the contract.")].filter(Boolean) });
      sec(Z("數量表", "Quantities"), { t: [T_([Z("項次", "No."), Z("項目（構件）", "Item"), Z("PCCES 編碼", "PCCES code"), Z("單位", "Unit"), Z("模型數量", "Model qty"), Z("計量規則", "Rule"), Z("備註", "Notes")], [6, 30, 14, 8, 12, 18, 12], num([...new Set((p.loin || []).map(r => r.el).filter(Boolean))].map(el => [el, "", "", "", "", ""]).concat(blank(4, 6))))] });
      break;
  } }
} });
