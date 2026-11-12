/* AEC PRISM · BEP & EIR Studio — optional template RP-02 BIM 模型驗收紀錄 · Information model acceptance record
   Separate file, loaded only when a project uses this template (08 文件範本庫). */
PRISM_TPL.add("RP-02", { spec(X) {
  let { code, p, lang, zh, a, sector, TT, std, C, pt, cv, Z, bx, TBD, v, t, title, sub, owner, subKey, subName, st, stN, team, discs, discN, midp, train, trTot, lodOf, reqs, subRev, rev, today, swList, cde, crs, naming, namingFields, namingEx, hard, tol, usesL, blank, num, signPub, signForm, S, sec, T_, statusOpts, okCols } = X;
  switch (0) { default: {
      const acc = reqs.filter(r => r.sec === 9);
      S.meta.push([Z("驗收階段", "Stage"), st.map(s => "□" + stN(s.key)).join("　")], [Z("驗收日期", "Date"), ""]);
      sec(Z("驗收項目", "Acceptance items"), { t: [T_([Z("項次", "No."), Z("驗收項目", "Item"), Z("依據", "Basis"), ...okCols.slice(0, 2), Z("說明", "Notes")], [6, 40, 16, 8, 8, 22], num((acc.length ? acc.map(r => [pick(r.title, lang), r.id]) : [[Z("交付成果齊全", "All deliverables received"), "MIDP"], [Z("模型檢核合格", "Model checks passed"), "QA-01"], [Z("衝突已解決或經同意保留", "Clashes resolved or accepted"), "QA-05"], [Z("IFC 驗證通過", "IFC validated"), "EIR"], [Z("圖模一致", "Drawings match the model"), "QA-02"]]).map(r => [...r, "□", "□", ""])))] });
      sec(Z("驗收結論", "Conclusion"), { list: [Z("□ 驗收合格　□ 有條件合格（改善期限：　　）　□ 不合格", "□ Accepted □ Accepted with conditions (by: __) □ Rejected")] });
      S.sign = signPub;
      break;
  } }
} });
