/* AEC PRISM · BEP & EIR Studio — optional template QA-09 BIM 協調會議紀錄 · Coordination meeting minutes
   Separate file, loaded only when a project uses this template (08 文件範本庫). */
PRISM_TPL.add("QA-09", { spec(X) {
  let { code, p, lang, zh, a, sector, TT, std, C, pt, cv, Z, bx, TBD, v, t, title, sub, owner, subKey, subName, st, stN, team, discs, discN, midp, train, trTot, lodOf, reqs, subRev, rev, today, swList, cde, crs, naming, namingFields, namingEx, hard, tol, usesL, blank, num, signPub, signForm, S, sec, T_, statusOpts, okCols } = X;
  switch (0) { default: {
      const M = X.rec && X.rec.meeting;
      S.meta.push([Z("會議名稱", "Meeting"), M && M.no ? Z(`BIM 界面協調會議（第 ${M.no} 次）`, `BIM coordination meeting (No. ${M.no})`) : Z("BIM 界面協調會議（第　　次）", "BIM coordination meeting (No. __)")], [Z("時間", "Time"), M && M.date ? `${X.rec.slash(M.date)} ${M.start || ""}${M.end ? "–" + M.end : ""}` : Z("　　年　　月　　日　　時", "____")], [Z("地點", "Venue"), M && M.venue ? M.venue : Z("□實體　□線上", "□ On site □ Online")], [Z("主持人／紀錄", "Chair / minutes"), M ? [M.chair, M.recorder].filter(Boolean).join(" ／ ") : ""]);
      sec(Z("出席人員", "Attendees"), { t: [T_([Z("單位", "Organization"), Z("職稱", "Role"), Z("姓名", "Name"), Z("簽名", "Signature")], [30, 24, 22, 24], (team.length ? team.map(r => [r.company || "", r.role || "", r.contact || "", ""]) : []).concat(blank(4, 4)))] });
      sec(Z("討論事項及決議", "Discussion and decisions"), { t: [T_([Z("項次", "No."), Z("討論事項", "Item"), Z("決議", "Decision")], [8, 46, 46], (M && (M.agenda || []).length ? num(M.agenda.map(a => [[a.topic, a.discussion].filter(Boolean).join("\n"), a.decision || ""])) : num(blank(5, 2))))] });
      sec(Z("列管事項", "Action items"), { t: [T_([Z("項次", "No."), Z("事項", "Action"), Z("辦理單位", "By"), Z("期限", "Due"), Z("列管狀態", "Status"), Z("關聯衝突／RFI", "Clash / RFI")], [7, 37, 16, 12, 12, 16], (M && (M.actions || []).length ? num(M.actions.map(a => [a.item || "", a.owner || "", X.rec.slash(a.due), a.status === "解除列管" ? Z("已解決", "Resolved") : Z("處理中", "In progress"), a.ref || ""])) : num(blank(6, 5))), { status: statusOpts })] });
      S.sign = [Z("主持人", "Chair"), Z("紀錄", "Minutes")];
      break;
  } }
} });
