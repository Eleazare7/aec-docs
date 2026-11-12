/* AEC PRISM · BEP & EIR Studio — optional template QA-06 衝突檢討報告 · Clash report
   Separate file, loaded only when a project uses this template (08 文件範本庫). */
PRISM_TPL.add("QA-06", { spec(X) {
  let { code, p, lang, zh, a, sector, TT, std, C, pt, cv, Z, bx, TBD, v, t, title, sub, owner, subKey, subName, st, stN, team, discs, discN, midp, train, trTot, lodOf, reqs, subRev, rev, today, swList, cde, crs, naming, namingFields, namingEx, hard, tol, usesL, blank, num, signPub, signForm, S, sec, T_, statusOpts, okCols } = X;
  switch (0) { default: {
      S.kind = "report";
      const codes = discs.map(d => d.code);
      sec(Z("檢討範圍與設定", "Scope and settings"), { list: [Z(`檢核軟體：${(a.checkers || []).join("、") || TBD}`, `Tool: ${(a.checkers || []).join(", ") || TBD}`), Z(`硬衝突容許值：${tol} mm`, `Hard-clash tolerance: ${tol} mm`), ...(std.clash || []).filter(c => c.type !== "hard").map(c => `${bx(c.name)}：${c.mm} mm（${bx(c.insulation)}）`), Z("模型版次：〔填寫〕", "Model revisions: [fill in]")] });
      sec(Z("衝突統計（專業對專業）", "Clash matrix"), { t: [T_(["", ...codes], [16, ...codes.map(() => Math.floor(84 / Math.max(1, codes.length)))], codes.map((c, i) => [c, ...codes.map((x, j) => j < i ? "—" : "")]))] });
      sec(Z("嚴重度統計", "By severity"), { t: [T_([Z("嚴重度", "Severity"), Z("新增", "New"), Z("處理中", "Open"), Z("已解決", "Resolved"), Z("合計", "Total")], [28, 18, 18, 18, 18], [[Z("重大", "Major")], [Z("主要", "Moderate")], [Z("次要", "Minor")], [Z("合計", "Total")]].map(r => [...r, "", "", "", ""]))] });
      sec(Z("待處理事項", "Open items"), { t: [T_([Z("編號", "ID"), Z("位置", "Location"), Z("問題（現況→影響→要求行動）", "Issue (situation → impact → action)"), Z("負責", "Owner"), Z("期限", "Due")], [10, 16, 50, 12, 12], blank(8, 5))] });
      break;
  } }
} });
