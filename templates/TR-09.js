/* AEC PRISM · BEP & EIR Studio — optional template TR-09 快速參考卡 · Quick-reference cards
   Separate file, loaded only when a project uses this template (08 文件範本庫). */
PRISM_TPL.add("TR-09", { spec(X) {
  let { code, p, lang, zh, a, sector, TT, std, C, pt, cv, Z, bx, TBD, v, t, title, sub, owner, subKey, subName, st, stN, team, discs, discN, midp, train, trTot, lodOf, reqs, subRev, rev, today, swList, cde, crs, naming, namingFields, namingEx, hard, tol, usesL, blank, num, signPub, signForm, S, sec, T_, statusOpts, okCols } = X;
  switch (0) { default: {
      sec(Z("檔案命名", "File naming"), { p: [Z(`欄位：${namingFields}`, `Fields: ${namingFields}`), Z(`範例：${namingEx}`, `Example: ${namingEx}`)], t: [T_([Z("代碼", "Code"), Z("專業", "Discipline")], [25, 75], discs.map(d => [d.code, bx(d.name)]))] });
      sec(Z("CDE 狀態", "CDE states"), { t: [T_([Z("狀態", "State"), Z("意義", "Meaning")], [25, 75], [["S0", Z("工作中（僅任務團隊可見）", "Work in progress (task team only)")], ["S1–S4", Z("共享（協調、審查、核准用）", "Shared (coordination, review, authorization)")], ["A", Z("發行（契約交付）", "Published (contractual)")], ["B", Z("部分發行", "Partial")], ["CR", Z("竣工紀錄", "As-built record")]])] });
      sec(Z("系統顏色", "System colors"), { t: [T_([Z("系統", "System"), "RGB", Z("色塊", "Swatch")], [55, 25, 20], (std.colours || []).map(c => [bx(c.system), c.rgb, ""]), { fills: (std.colours || []).map(c => [null, null, rgbHex(c.rgb)]) })] });
      sec(Z("衝突處理流程", "Clash workflow"), { list: [Z("1. 整合模型並執行衝突檢查", "1. Federate and run clash tests"), Z("2. 依「現況→影響→要求行動」建立議題並指定負責人", "2. Raise issues as situation → impact → action with an owner"), Z("3. 協調會議決議並更新模型", "3. Decide at the meeting and update models"), Z("4. 重新檢查，無新衝突後結案", "4. Re-run; close when no new clashes")] });
      S.sign = null;
      break;
  } }
} });
