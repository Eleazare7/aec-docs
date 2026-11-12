/* AEC PRISM · BEP & EIR Studio — optional template QA-07 疑義澄清單（RFI） · RFI log
   Separate file, loaded only when a project uses this template (08 文件範本庫). */
PRISM_TPL.add("QA-07", { spec(X) {
  let { code, p, lang, zh, a, sector, TT, std, C, pt, cv, Z, bx, TBD, v, t, title, sub, owner, subKey, subName, st, stN, team, discs, discN, midp, train, trTot, lodOf, reqs, subRev, rev, today, swList, cde, crs, naming, namingFields, namingEx, hard, tol, usesL, blank, num, signPub, signForm, S, sec, T_, statusOpts, okCols } = X;
  switch (0) { default: {
      S.landscape = true;
      sec(Z("疑義澄清", "RFI log"), { t: [T_([Z("編號", "No."), Z("提出日期", "Raised"), Z("相關圖號／模型", "Drawing / model"), Z("現況", "Situation"), Z("影響", "Impact"), Z("要求行動", "Action requested"), Z("提出單位", "From"), Z("回覆內容", "Answer"), Z("回覆日期", "Answered"), Z("狀態", "Status")], [6, 8, 11, 14, 11, 14, 8, 14, 7, 7], ((X.rec && X.rec.rfis.length) ? X.rec.rfis.map(r => [r.no || "", X.rec.slash(r.raised), [r.zone, r.level, r.grid].filter(Boolean).join(" "), r.question || "", "", "", r.from || "", r.answer || "", X.rec.slash(r.answered), r.status === "解除列管" ? Z("已解決", "Resolved") : Z("處理中", "In progress")]).concat(blank(Math.max(0, 5 - X.rec.rfis.length), 10)) : blank(15, 10).map((r, i) => { r[0] = "RFI-" + String(i + 1).padStart(3, "0"); return r; })), { status: statusOpts })] });
      break;
  } }
} });
