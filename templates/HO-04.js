/* AEC PRISM · BEP & EIR Studio — optional template HO-04 專案經驗回饋報告 · Lessons learned report
   Separate file, loaded only when a project uses this template (08 文件範本庫). */
PRISM_TPL.add("HO-04", { spec(X) {
  let { code, p, lang, zh, a, sector, TT, std, C, pt, cv, Z, bx, TBD, v, t, title, sub, owner, subKey, subName, st, stN, team, discs, discN, midp, train, trTot, lodOf, reqs, subRev, rev, today, swList, cde, crs, naming, namingFields, namingEx, hard, tol, usesL, blank, num, signPub, signForm, S, sec, T_, statusOpts, okCols } = X;
  switch (0) { default: {
      S.kind = "report";
      const rules = runRules(p, ruleCtx(p));
      sec(Z("專案概述", "Project overview"), { p: [Z(`${v(a.name)}；${TT.owner}：${v(a.client)}；${TT.lap}：${v(a.lap)}。`, `${v(a.name)}; client ${v(a.client)}; contractor ${v(a.lap)}.`)] });
      sec(Z("做得好的地方", "What went well"), { t: [T_([Z("項目", "Topic"), Z("說明", "Description"), Z("建議沿用", "Keep doing")], [24, 50, 26], blank(4, 3))] });
      sec(Z("待改善事項", "What to improve"), { t: [T_([Z("項目", "Topic"), Z("問題", "Problem"), Z("根本原因", "Root cause"), Z("改善建議", "Recommendation")], [18, 30, 24, 28], blank(4, 4))] });
      sec(Z("規則與議題回顧", "Rules and issues review"), { p: [Z(`專案規則庫共 ${rules.length} 項規則；建議將重複發生之問題新增為公司規則範本。`, `${rules.length} project rules; add recurring problems to the company rules template.`)] });
      break;
  } }
} });
