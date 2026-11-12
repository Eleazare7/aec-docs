/* AEC PRISM · BEP & EIR Studio — optional template TR-01 BIM 教育訓練計畫書 · Training plan
   Separate file, loaded only when a project uses this template (08 文件範本庫). */
PRISM_TPL.add("TR-01", { spec(X) {
  let { code, p, lang, zh, a, sector, TT, std, C, pt, cv, Z, bx, TBD, v, t, title, sub, owner, subKey, subName, st, stN, team, discs, discN, midp, train, trTot, lodOf, reqs, subRev, rev, today, swList, cde, crs, naming, namingFields, namingEx, hard, tol, usesL, blank, num, signPub, signForm, S, sec, T_, statusOpts, okCols } = X;
  switch (0) { default: {
      S.kind = "report";
      sec(Z("訓練目標", "Objectives"), { list: [Z(`使${v(a.client)}及相關單位能操作 ${cde}、查閱模型並執行審查。`, `Enable ${v(a.client)} and parties to use ${cde}, view models and review.`), Z("使營運管理單位能使用竣工模型及設施資料。", "Enable the operator to use the as-built model and asset data.")] });
      sec(Z("課程規劃", "Courses"), { p: [Z(`合計 ${trTot} 小時${C.trainingMin ? `（契約最低 ${C.trainingMin} 小時${trTot < C.trainingMin ? "，尚不足" : "，符合"}）` : ""}。`, `Total ${trTot} hours${C.trainingMin ? ` (minimum ${C.trainingMin}${trTot < C.trainingMin ? ", short" : ", met"})` : ""}.`)],
        t: [T_([Z("項次", "No."), Z("階段", "Stage"), Z("對象", "Audience"), Z("課程內容", "Course"), Z("時數", "Hours"), Z("講師", "Trainer"), Z("日期", "Date")], [6, 12, 18, 34, 8, 11, 11], num(train.map(x => [stN(x.stage), bx(x.audience), bx(x.course), `${x.hours}`, "", ""])).concat([["", Z("合計", "Total"), "", "", String(trTot), "", ""]]))] });
      sec(Z("執行方式與紀錄", "Delivery and records"), { list: [Z("採實機操作，每人一台電腦；線上課程須錄影存檔。", "Hands-on with one computer per person; online sessions are recorded."), Z("每場次填寫簽到表（TR-04）、訓練紀錄（TR-05）及成效評估（TR-07）；測驗合格者核發結業證書（TR-08）。", "Each session uses TR-04, TR-05 and TR-07; passing attendees receive TR-08.")] });
      break;
  } }
} });
