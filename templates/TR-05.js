/* AEC PRISM · BEP & EIR Studio — optional template TR-05 教育訓練紀錄表 · Training record
   Separate file, loaded only when a project uses this template (08 文件範本庫). */
PRISM_TPL.add("TR-05", { spec(X) {
  let { code, p, lang, zh, a, sector, TT, std, C, pt, cv, Z, bx, TBD, v, t, title, sub, owner, subKey, subName, st, stN, team, discs, discN, midp, train, trTot, lodOf, reqs, subRev, rev, today, swList, cde, crs, naming, namingFields, namingEx, hard, tol, usesL, blank, num, signPub, signForm, S, sec, T_, statusOpts, okCols } = X;
  switch (0) { default: {
      S.landscape = true;
      sec(Z("訓練紀錄", "Training record"), { t: [T_([Z("項次", "No."), Z("姓名", "Name"), Z("單位", "Organization"), Z("課程", "Course"), Z("日期", "Date"), Z("時數", "Hours"), Z("累計時數", "Cumulative"), Z("測驗成績", "Score"), Z("結果", "Result")], [5, 12, 16, 25, 9, 7, 8, 8, 10], num((team.length ? team : [{}, {}, {}]).flatMap(r => train.length ? train.map(x => [r.contact || "", r.company || "", bx(x.course), "", String(x.hours), "", "", ""]) : [[r.contact || "", r.company || "", "", "", "", "", "", ""]])), { status: [Z("合格", "Pass"), Z("不合格", "Fail"), Z("缺席", "Absent")] })] });
      break;
  } }
} });
