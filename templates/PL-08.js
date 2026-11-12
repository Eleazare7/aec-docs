/* AEC PRISM · BEP & EIR Studio — optional template PL-08 資訊交付風險登錄表 · Information delivery risk register
   Separate file, loaded only when a project uses this template (08 文件範本庫). */
PRISM_TPL.add("PL-08", { spec(X) {
  let { code, p, lang, zh, a, sector, TT, std, C, pt, cv, Z, bx, TBD, v, t, title, sub, owner, subKey, subName, st, stN, team, discs, discN, midp, train, trTot, lodOf, reqs, subRev, rev, today, swList, cde, crs, naming, namingFields, namingEx, hard, tol, usesL, blank, num, signPub, signForm, S, sec, T_, statusOpts, okCols } = X;
  switch (0) { default: {
      S.landscape = true;
      const R = [[Z("模型版本不一致", "Model versions out of step"), Z("CDE 狀態管控、整合前版次確認", "CDE states; check revisions before federation")], [Z("交付延遲", "Late delivery"), Z("TIDP 週追蹤、提前預警", "Weekly TIDP tracking; early warning")], [Z("座標或單位錯誤", "Wrong coordinates or units"), Z("啟動時交換測試、每次交付檢核", "Exchange test at start; check every delivery")], [Z("關鍵人員異動", "Key staff change"), Z("交接重疊期及交接清單", "Overlap period and handover list")], [Z("資訊外洩", "Information leak"), Z("權限最小化、機敏資料分級", "Least privilege; data classification")], [Z("軟體版本不相容", "Software incompatibility"), Z("鎖定版本、升級需經 BIM 經理同意", "Lock versions; upgrades need approval")], [Z("審查期程不足", "Review time too short"), Z("送審前預審、分批提送", "Pre-review; staged submissions")], [Z("需求變更", "Changing requirements"), Z("書面變更並更新 BEP／MIDP", "Written changes; update BEP and MIDP")]];
      sec(Z("風險登錄", "Risk register"), { p: [Z("可能性及影響以 1–5 評分，風險值 = 可能性 × 影響；≥ 12 為高風險，須每次協調會議追蹤。", "Likelihood and impact 1–5; score = L × I; ≥ 12 is high and tracked at every meeting.")],
        t: [T_([Z("編號", "ID"), Z("風險", "Risk"), Z("可能性", "L"), Z("影響", "I"), Z("風險值", "Score"), Z("因應對策", "Mitigation"), Z("負責", "Owner"), Z("狀態", "Status")], [6, 24, 7, 7, 8, 30, 10, 8], R.map((r, i) => ["R" + String(i + 1).padStart(2, "0"), r[0], "", "", "", r[1], "", ""]), { status: statusOpts })] });
      break;
  } }
} });
