/* AEC PRISM · BEP & EIR Studio — optional template PL-06 BIM 成果預定工作進度表 · BIM schedule (Gantt)
   Separate file, loaded only when a project uses this template (08 文件範本庫). */
PRISM_TPL.add("PL-06", { spec(X) {
  let { code, p, lang, zh, a, sector, TT, std, C, pt, cv, Z, bx, TBD, v, t, title, sub, owner, subKey, subName, st, stN, team, discs, discN, midp, train, trTot, lodOf, reqs, subRev, rev, today, swList, cde, crs, naming, namingFields, namingEx, hard, tol, usesL, blank, num, signPub, signForm, S, sec, T_, statusOpts, okCols } = X;
  switch (0) { default: {
      S.landscape = true;
      const sched = (C.schedule || []).length ? C.schedule : null, rd = +std.reviewDays || 14;
      const tasks = []; let prev = C.start || "";
      if (sched) sched.forEach(x => tasks.push({ name: x.task, s: x.start, e: x.end || x.start, gate: x.kind === "gate" }));
      else st.forEach(s => { const d = (a.stages[s.key] || {}).date || ""; if (!d) return; const start = prev || addDays(d, -90); tasks.push({ name: Z(`${stN(s.key)} BIM 作業`, `${stN(s.key)} BIM work`), s: start, e: d }); tasks.push({ name: Z(`${stN(s.key)}成果送審`, `${stN(s.key)} submission`), s: d, e: d, gate: true }); tasks.push({ name: Z(`審查（${rd} 日）`, `Review (${rd} days)`), s: d, e: addDays(d, rd) }); prev = addDays(d, rd + 1); });
      S.gantt = { tasks };
      sec(Z("工作進度", "Schedule"), { p: tasks.length ? [Z("甘特圖之日期取自各階段預定日期及審查期限，修改專案日期後重新產出即可更新。", "Dates come from the stage dates and review period; regenerate after changing them.")] : [Z("尚未設定階段日期，請於 EIR 步驟「階段」填寫各階段預定日期。", "No stage dates yet — set them in the EIR Stages step.")],
        t: [T_([Z("項次", "No."), Z("工作項目", "Task"), Z("開始", "Start"), Z("完成", "Finish"), Z("類型", "Type")], [8, 46, 16, 16, 14], num(tasks.map(x => [x.name, x.s, x.e, x.gate ? Z("里程碑", "Gate") : Z("作業", "Work")])))] });
      break;
  } }
} });
