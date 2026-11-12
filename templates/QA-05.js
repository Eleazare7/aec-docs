/* AEC PRISM · BEP & EIR Studio — optional template QA-05 衝突管制總表 · Clash register
   Separate file, loaded only when a project uses this template (08 文件範本庫). */
PRISM_TPL.add("QA-05", { spec(X) {
  let { code, p, lang, zh, a, sector, TT, std, C, pt, cv, Z, bx, TBD, v, t, title, sub, owner, subKey, subName, st, stN, team, discs, discN, midp, train, trTot, lodOf, reqs, subRev, rev, today, swList, cde, crs, naming, namingFields, namingEx, hard, tol, usesL, blank, num, signPub, signForm, S, sec, T_, statusOpts, okCols } = X;
  switch (0) { default: {
      S.landscape = true;
      sec(Z("衝突管制", "Clash register"), { p: [Z(`硬衝突容許值 ${tol} mm；嚴重度：重大／主要／次要，回覆期限依 BEP。問題說明採「現況 → 影響 → 要求行動」並指定負責單位。`, `Hard-clash tolerance ${tol} mm; severity major / moderate / minor with BEP deadlines. Describe as situation → impact → action, with an owner.`)],
        t: [T_([Z("編號", "ID"), Z("提報日期", "Raised"), Z("樓層／區域", "Level / zone"), Z("專業 A", "Disc. A"), Z("專業 B", "Disc. B"), Z("嚴重度", "Severity"), Z("問題說明", "Issue"), Z("負責單位", "Owner"), Z("期限", "Due"), Z("狀態", "Status"), "BCF"], [7, 8, 9, 7, 7, 8, 22, 10, 8, 8, 6], ((X.rec && X.rec.clashes.length) ? X.rec.clashes.map(r => [r.id || "", X.rec.slash(r.raised), [r.building, r.level, r.grid].filter(Boolean).join(" "), r.type || "", "", r.severity || "", r.description || "", r.owner || "", X.rec.slash(r.due), r.status === "解除列管" ? Z("已解決", "Resolved") : Z("處理中", "In progress"), ""]).concat(blank(Math.max(0, 5 - X.rec.clashes.length), 11)) : blank(20, 11).map((r, i) => { r[0] = "C" + String(i + 1).padStart(3, "0"); return r; })), { status: statusOpts })] });
      break;
  } }
} });
