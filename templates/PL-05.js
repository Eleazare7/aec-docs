/* AEC PRISM · BEP & EIR Studio — optional template PL-05 主要／任務資訊交付計畫（MIDP／TIDP） · MIDP / TIDP
   Separate file, loaded only when a project uses this template (08 文件範本庫). */
PRISM_TPL.add("PL-05", { spec(X) {
  let { code, p, lang, zh, a, sector, TT, std, C, pt, cv, Z, bx, TBD, v, t, title, sub, owner, subKey, subName, st, stN, team, discs, discN, midp, train, trTot, lodOf, reqs, subRev, rev, today, swList, cde, crs, naming, namingFields, namingEx, hard, tol, usesL, blank, num, signPub, signForm, S, sec, T_, statusOpts, okCols } = X;
  switch (0) { default: {
      S.landscape = true;
      sec(Z("主要資訊交付計畫（MIDP）", "Master information delivery plan"), { t: [T_([Z("項次", "No."), Z("交付項目", "Deliverable"), Z("階段", "Stage"), Z("負責單位", "Owner"), Z("格式", "Format"), Z("預定日期", "Due"), Z("份數", "Copies")], [6, 34, 12, 18, 14, 10, 6], num(midp.map(m => [bx(m.deliverable), stN(m.stage), bx(m.owner), m.format || "", m.due || "", m.copies || ""])))] });
      sec(Z("任務資訊交付計畫（TIDP）", "Task information delivery plans"), { t: [T_([Z("專業", "Discipline"), Z("階段", "Stage"), Z("交付內容", "Content"), "LOD", Z("負責人", "Owner"), Z("預定日期", "Due")], [16, 14, 32, 12, 14, 12], discs.flatMap(d => st.filter(s => s.key !== "plan" && s.key !== "om").map(s => [discN(d), stN(s.key), Z(`${bx(d.name)}模型及圖說`, `${bx(d.name)} model and drawings`), lodOf(s.key), "", (a.stages[s.key] || {}).date || ""])))] });
      break;
  } }
} });
