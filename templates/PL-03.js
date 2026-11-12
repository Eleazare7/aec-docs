/* AEC PRISM · BEP & EIR Studio — optional template PL-03 團隊能力及量能評估表 · Capability & capacity assessment
   Separate file, loaded only when a project uses this template (08 文件範本庫). */
PRISM_TPL.add("PL-03", { spec(X) {
  let { code, p, lang, zh, a, sector, TT, std, C, pt, cv, Z, bx, TBD, v, t, title, sub, owner, subKey, subName, st, stN, team, discs, discN, midp, train, trTot, lodOf, reqs, subRev, rev, today, swList, cde, crs, naming, namingFields, namingEx, hard, tol, usesL, blank, num, signPub, signForm, S, sec, T_, statusOpts, okCols } = X;
  switch (0) { default: {
      sec(Z("人員資歷", "Staff"), { t: [T_([Z("角色", "Role"), Z("姓名", "Name"), Z("公司", "Company"), Z("年資", "Years"), Z("證照／訓練", "Certificates"), Z("評估", "Assessment")], [18, 16, 20, 10, 20, 16], team.length ? team.map(r => [r.role || "", r.contact || "", r.company || "", r.years ? String(r.years) : "", "", ""]) : blank(6, 6))] });
      sec(Z("軟體", "Software"), { t: [T_([Z("軟體", "Software"), Z("版本", "Version"), Z("授權數", "Licenses"), Z("用途", "Use")], [35, 20, 15, 30], (a.software || []).concat(a.checkers || []).map(s => [s, "", "", ""]))] });
      sec(Z("硬體", "Hardware"), { p: [std.hardware ? String(std.hardware) : TBD], t: [T_([Z("設備", "Item"), Z("規格", "Specification"), Z("數量", "Qty")], [30, 55, 15], [[Z("建模工作站", "Modeling workstation"), "", ""], [Z("整合／檢核工作站", "Coordination workstation"), "", ""], [Z("會議顯示設備", "Meeting display"), "", ""]])] });
      sec(Z("類似工程實績", "Relevant experience"), { t: [T_([Z("工程名稱", "Project"), Z("業主", "Client"), Z("期間", "Period"), Z("BIM 應用", "BIM uses")], [35, 20, 15, 30], blank(5, 4))] });
      sec(Z("人力投入量能", "Resource capacity"), { t: [T_([Z("階段", "Stage"), Z("BIM 經理", "BIM manager"), Z("協調人員", "Coordinator"), Z("建模人員", "Modelers"), Z("合計人月", "Person-months")], [24, 19, 19, 19, 19], st.map(s => [stN(s.key), "", "", "", ""]))] });
      break;
  } }
} });
