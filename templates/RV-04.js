/* AEC PRISM · BEP & EIR Studio — optional template RV-04 EIR 需求對應及規則檢核報告 · EIR compliance & rule-check report
   Separate file, loaded only when a project uses this template (08 文件範本庫). */
PRISM_TPL.add("RV-04", { spec(X) {
  let { code, p, lang, zh, a, sector, TT, std, C, pt, cv, Z, bx, TBD, v, t, title, sub, owner, subKey, subName, st, stN, team, discs, discN, midp, train, trTot, lodOf, reqs, subRev, rev, today, swList, cde, crs, naming, namingFields, namingEx, hard, tol, usesL, blank, num, signPub, signForm, S, sec, T_, statusOpts, okCols } = X;
  switch (0) { default: {
      S.kind = "report";
      const rules = runRules(p, ruleCtx(p)), fail = rules.filter(r => !r.off && !r.ok), blk = fail.filter(r => r.sev === "block");
      const resp = p.bep.responses || {};
      sec(Z("檢核結果摘要", "Summary"), { p: [Z(`共檢核 ${rules.length} 項規則，阻擋項目未通過 ${blk.length} 項、警告 ${fail.filter(r => r.sev === "warn").length} 項、建議 ${fail.filter(r => r.sev === "info").length} 項。${blk.length ? "阻擋項目須修正後方可提送。" : "符合提送條件。"}`, `${rules.length} rules checked: ${blk.length} blocking, ${fail.filter(r => r.sev === "warn").length} warnings, ${fail.filter(r => r.sev === "info").length} info.`)] });
      sec(Z("未通過之規則", "Failing rules"), { t: [T_([Z("規則", "Rule"), Z("名稱", "Title"), Z("嚴重度", "Severity"), Z("說明", "Details")], [14, 36, 12, 38], fail.length ? fail.map(r => [r.id, bi(r.title)[lang] || bi(r.title).en, zh ? ({ block: "阻擋", warn: "警告", info: "建議" })[r.sev] : r.sev, r.items.slice(0, 2).map(it => ruleText(r.message, lang, it)).join("\n")]) : [["—", Z("全部通過", "All passed"), "", ""]])] });
      sec(Z("EIR 需求對應", "EIR mapping"), { t: [T_([Z("EIR 編號", "EIR No."), Z("需求", "Requirement"), Z("BEP 回應狀態", "BEP status")], [16, 60, 24], reqs.map(r => { const x = resp[r.key]; const txt = x ? pick(x.text, lang).trim() : ""; return [r.id, pick(r.title, lang), !txt ? Z("未回應", "Missing") : x.done ? Z("完成", "Complete") : Z("草稿", "Draft")]; }))] });
      break;
  } }
} });
