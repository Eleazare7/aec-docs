/* AEC PRISM · BEP & EIR Studio — optional template CL-05 BIM 執行計畫書評選表 · BEP tender evaluation sheet
   Separate file, loaded only when a project uses this template (08 文件範本庫). */
PRISM_TPL.add("CL-05", { spec(X) {
  let { code, p, lang, zh, a, sector, TT, std, C, pt, cv, Z, bx, TBD, v, t, title, sub, owner, subKey, subName, st, stN, team, discs, discN, midp, train, trTot, lodOf, reqs, subRev, rev, today, swList, cde, crs, naming, namingFields, namingEx, hard, tol, usesL, blank, num, signPub, signForm, S, sec, T_, statusOpts, okCols } = X;
  switch (0) { default: {
      S.landscape = true;
      const crit = [[Z("對 EIR 需求之回應完整性", "Completeness of EIR responses"), 20], [Z("BIM 目標與應用執行方式", "BIM goals and uses"), 15], [Z("組織、人員資歷與量能", "Organization, staff and capacity"), 15], [Z("作業流程與協同機制", "Process and collaboration"), 10], [Z("模型標準與 LOIN", "Model standards and LOIN"), 10], [Z("品質管理（三級品管）", "Quality management"), 10], [Z("CDE 與資訊安全", "CDE and security"), 5], [Z("交付時程與里程碑", "Delivery schedule"), 10], [Z("教育訓練", "Training"), 5]];
      sec(Z("評選項目及配分", "Criteria and weights"), { p: [Z(`工程名稱：${v(a.name)}　評選日期：　　年　　月　　日`, `Project: ${v(a.name)}   Date: ____`)],
        t: [T_([Z("項次", "No."), Z("評選項目", "Criterion"), Z("配分", "Weight"), Z("廠商 A", "Bidder A"), Z("廠商 B", "Bidder B"), Z("廠商 C", "Bidder C"), Z("評語", "Comments")], [6, 34, 8, 10, 10, 10, 22], num(crit.map(c => [c[0], String(c[1]), "", "", "", ""])).concat([["", Z("合計", "Total"), "100", "", "", "", ""]]))] });
      S.sign = [Z("評選委員", "Evaluator"), Z("評選委員", "Evaluator"), Z("召集人", "Chair")];
      break;
  } }
} });
