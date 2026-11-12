/* AEC PRISM · BEP & EIR Studio — optional template RV-02 送審管制表 · Submission log
   Separate file, loaded only when a project uses this template (08 文件範本庫). */
PRISM_TPL.add("RV-02", { spec(X) {
  let { code, p, lang, zh, a, sector, TT, std, C, pt, cv, Z, bx, TBD, v, t, title, sub, owner, subKey, subName, st, stN, team, discs, discN, midp, train, trTot, lodOf, reqs, subRev, rev, today, swList, cde, crs, naming, namingFields, namingEx, hard, tol, usesL, blank, num, signPub, signForm, S, sec, T_, statusOpts, okCols } = X;
  switch (0) { default: {
      const hist = (p.bep.history || []).length ? p.bep.history : [{ subRev, date: today, desc: Z("第一次提送", "First submission") }];
      sec(Z("送審紀錄", "Submission record"), { t: [T_([Z("送審版次", "Submission"), Z("提送日期及文號", "Submitted (date, ref)"), Z("審查日期及文號", "Reviewed (date, ref)"), Z("審查結果", "Result"), Z("說明", "Notes")], [14, 22, 22, 18, 24], ((X.rec && X.rec.submissions.length) ? X.rec.submissions.map(r => [[r.title, r.rev ? (zh ? `第${r.rev}版` : r.rev) : ""].filter(Boolean).join(" "), [r.submitted, r.sub_no].filter(Boolean).join(" "), [r.approved, r.approval_ref].filter(Boolean).join(" "), (["免審驗","准予備查","准予備查但應依審查意見修正辦理","部分不合格再行送審","退回重新修正後再送審"].find(x => r.result === x)) || "", r.remark || ""]).concat(blank(Math.max(0, 5 - X.rec.submissions.length), 5)) : hist.map(r => [zh ? `第${r.subRev || subRev}版` : (r.subRev || subRev), r.date || "", "", "", r.desc || ""]).concat(blank(Math.max(0, 10 - hist.length), 5))))] });
      break;
  } }
} });
