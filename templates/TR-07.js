/* AEC PRISM · BEP & EIR Studio — optional template TR-07 訓練成效評估表 · Training evaluation form
   Separate file, loaded only when a project uses this template (08 文件範本庫). */
PRISM_TPL.add("TR-07", { spec(X) {
  let { code, p, lang, zh, a, sector, TT, std, C, pt, cv, Z, bx, TBD, v, t, title, sub, owner, subKey, subName, st, stN, team, discs, discN, midp, train, trTot, lodOf, reqs, subRev, rev, today, swList, cde, crs, naming, namingFields, namingEx, hard, tol, usesL, blank, num, signPub, signForm, S, sec, T_, statusOpts, okCols } = X;
  switch (0) { default: {
      S.meta.push([Z("課程名稱", "Course"), train[0] ? bx(train[0].course) : ""], [Z("日期", "Date"), ""]);
      sec(Z("滿意度評估（1 非常不滿意 — 5 非常滿意）", "Rating (1 very poor — 5 excellent)"), { t: [T_([Z("項次", "No."), Z("評估項目", "Item"), "1", "2", "3", "4", "5"], [8, 52, 8, 8, 8, 8, 8], num([[Z("課程內容符合工作需要", "Content fits my work")], [Z("講師表達清楚", "Trainer was clear")], [Z("教材完整易懂", "Materials were clear")], [Z("實機操作時間足夠", "Enough hands-on time")], [Z("時間安排適當", "Timing was right")], [Z("整體滿意度", "Overall satisfaction")]].map(r => [...r, "□", "□", "□", "□", "□"])))] });
      sec(Z("意見與建議", "Comments"), { t: [T_([Z("最有幫助的內容", "Most useful"), Z("建議改善", "To improve")], [50, 50], [["\n\n\n", "\n\n\n"]])] });
      S.sign = null;
      break;
  } }
} });
