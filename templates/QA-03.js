/* AEC PRISM · BEP & EIR Studio — optional template QA-03 自主檢查表 · Self-check record
   Separate file, loaded only when a project uses this template (08 文件範本庫). */
PRISM_TPL.add("QA-03", { spec(X) {
  let { code, p, lang, zh, a, sector, TT, std, C, pt, cv, Z, bx, TBD, v, t, title, sub, owner, subKey, subName, st, stN, team, discs, discN, midp, train, trTot, lodOf, reqs, subRev, rev, today, swList, cde, crs, naming, namingFields, namingEx, hard, tol, usesL, blank, num, signPub, signForm, S, sec, T_, statusOpts, okCols } = X;
  switch (0) { default: {
      S.meta.push([Z("階段", "Stage"), st.map(s => "□" + stN(s.key)).join("　")], [Z("專業／模型", "Discipline / model"), ""]);
      const sc = std.selfcheck || [];
      sec(Z("自主檢查", "Self-check"), { p: [Z("量測項目須填寫實際數值及單位，不得僅勾選。", "Measured items need the actual value and unit, not just a tick.")],
        t: [T_([Z("項次", "No."), Z("檢核重點", "Check"), Z("實測值", "Measured"), Z("單位", "Unit"), Z("是", "Yes"), Z("否", "No"), "N/A", Z("檢核意見", "Comment")], [6, 40, 12, 10, 6, 6, 6, 14], num([...sc.map(s => [bx(s.item), "", bx(s.unit)]), [Z("命名符合規則", "Naming follows the rule"), "—", ""], [Z("座標與高程正確", "Coordinates and levels correct"), "—", ""], [Z("硬衝突已處理", "Hard clashes resolved"), "", Z("件", "count")], [Z("屬性資訊完整", "Attributes complete"), "", "%"]].map(r => [...r, "□", "□", "□", ""])))] });
      S.sign = sector === "public" ? [Z("建模人員", "Modeler"), Z("BIM 協調人員", "Coordinator"), Z("BIM 經理", "BIM manager")] : signForm;
      break;
  } }
} });
