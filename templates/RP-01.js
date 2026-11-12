/* AEC PRISM · BEP & EIR Studio — optional template RP-01 階段 BIM 成果報告書 · Stage BIM results report
   Separate file, loaded only when a project uses this template (08 文件範本庫). */
PRISM_TPL.add("RP-01", { spec(X) {
  let { code, p, lang, zh, a, sector, TT, std, C, pt, cv, Z, bx, TBD, v, t, title, sub, owner, subKey, subName, st, stN, team, discs, discN, midp, train, trTot, lodOf, reqs, subRev, rev, today, swList, cde, crs, naming, namingFields, namingEx, hard, tol, usesL, blank, num, signPub, signForm, S, sec, T_, statusOpts, okCols } = X;
  switch (0) { default: {
      S.kind = "report";
      const rules = runRules(p, ruleCtx(p)), fail = rules.filter(r => !r.off && !r.ok);
      sec(Z("階段概要", "Stage summary"), { p: [Z(`本報告為${v(a.name)}之階段 BIM 成果報告，說明本階段交付成果、品質檢核、衝突檢討及後續工作。`, `This report covers deliverables, QA, clashes and next steps for the current stage.`)],
        t: [T_([Z("階段", "Stage"), Z("預定日期", "Date"), "LOD", Z("本報告", "This report")], [30, 22, 26, 22], st.map(s => [stN(s.key), (a.stages[s.key] || {}).date || "", lodOf(s.key), "□"]))] });
      sec(Z("交付成果", "Deliverables"), { t: [T_([Z("交付項目", "Deliverable"), Z("格式", "Format"), Z("完成度", "Progress"), Z("說明", "Notes")], [44, 18, 14, 24], midp.map(m => [bx(m.deliverable), m.format || "", "　　%", ""]))] });
      sec(Z("品質檢核結果", "QA results"), { t: [T_([Z("檢核項目", "Check"), Z("限值", "Limit"), Z("實測值", "Measured"), Z("結果", "Result")], [40, 20, 20, 20], (std.selfcheck || []).map(s => [bx(s.item), bx(s.unit), "", ""]).concat([[Z("硬衝突", "Hard clashes"), `${tol} mm`, "", ""]]))] });
      sec(Z("衝突檢討及疑義統計", "Clashes and RFIs"), { t: [T_([Z("類別", "Type"), Z("新增", "New"), Z("已解決", "Resolved"), Z("未結", "Open")], [40, 20, 20, 20], [[Z("衝突", "Clashes"), "", "", ""], [Z("疑義（RFI）", "RFIs"), "", "", ""]])] });
      sec(Z("規則檢核", "Rule check"), { p: [Z(`規則檢核：共 ${rules.length} 項，未通過 ${fail.length} 項（阻擋 ${fail.filter(r => r.sev === "block").length} 項）。`, `Rule check: ${rules.length} rules, ${fail.length} failing (${fail.filter(r => r.sev === "block").length} blocking).`)] });
      sec(Z("下階段工作", "Next steps"), { list: [Z("〔填寫〕", "[fill in]")] });
      break;
  } }
} });
