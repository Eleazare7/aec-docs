/* AEC PRISM · BEP & EIR Studio — optional template RP-03 BIM 月報／季報 · Monthly / quarterly BIM report
   Separate file, loaded only when a project uses this template (08 文件範本庫). */
PRISM_TPL.add("RP-03", { spec(X) {
  let { code, p, lang, zh, a, sector, TT, std, C, pt, cv, Z, bx, TBD, v, t, title, sub, owner, subKey, subName, st, stN, team, discs, discN, midp, train, trTot, lodOf, reqs, subRev, rev, today, swList, cde, crs, naming, namingFields, namingEx, hard, tol, usesL, blank, num, signPub, signForm, S, sec, T_, statusOpts, okCols } = X;
  switch (0) { default: {
      S.kind = "report";
      S.meta.push([Z("報告期間", "Period"), Z("　　年　　月", "____")]);
      sec(Z("本期進度", "Progress this period"), { t: [T_([Z("交付項目", "Deliverable"), Z("預定日期", "Due"), Z("完成度", "Progress"), Z("落後原因", "Reason if late")], [44, 16, 14, 26], midp.map(m => [bx(m.deliverable), m.due || "", "　　%", ""]))] });
      sec(Z("品質與衝突趨勢", "Quality and clash trend"), { t: [T_([Z("指標", "Indicator"), Z("上期", "Last"), Z("本期", "This"), Z("目標", "Target")], [40, 20, 20, 20], [[Z("未結衝突", "Open clashes")], [Z("未結疑義", "Open RFIs")], [Z("模型警告數", "Model warnings")], [Z("審查意見未結", "Open review comments")]].map(r => [...r, "", "", ""]))] });
      sec(Z("重要議題", "Key issues"), { list: [Z("〔填寫〕", "[fill in]")] });
      sec(Z("下期計畫", "Next period"), { list: [Z("〔填寫〕", "[fill in]")] });
      break;
  } }
} });
