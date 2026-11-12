/* AEC PRISM · BEP & EIR Studio — optional template TR-04 教育訓練簽到表 · Attendance sheet
   Separate file, loaded only when a project uses this template (08 文件範本庫). */
PRISM_TPL.add("TR-04", { spec(X) {
  let { code, p, lang, zh, a, sector, TT, std, C, pt, cv, Z, bx, TBD, v, t, title, sub, owner, subKey, subName, st, stN, team, discs, discN, midp, train, trTot, lodOf, reqs, subRev, rev, today, swList, cde, crs, naming, namingFields, namingEx, hard, tol, usesL, blank, num, signPub, signForm, S, sec, T_, statusOpts, okCols } = X;
  switch (0) { default: {
      S.meta.push([Z("課程名稱", "Course"), train[0] ? bx(train[0].course) : ""], [Z("日期／時間", "Date / time"), ""], [Z("地點", "Venue"), Z("□實體　□線上", "□ On site □ Online")], [Z("講師", "Trainer"), ""]);
      sec(Z("簽到", "Attendance"), { t: [T_([Z("項次", "No."), Z("單位", "Organization"), Z("姓名", "Name"), Z("職稱", "Role"), Z("簽到", "In"), Z("簽退", "Out"), Z("備註", "Notes")], [6, 24, 16, 16, 13, 13, 12], num((team.length ? team.map(r => [r.company || "", r.contact || "", r.role || "", "", "", ""]) : []).concat(blank(Math.max(6, 16 - team.length), 6))))] });
      S.sign = [Z("講師", "Trainer"), Z("承辦人", "Organizer")];
      break;
  } }
} });
