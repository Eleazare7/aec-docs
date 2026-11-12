/* AEC PRISM · BEP & EIR Studio — optional template PL-07 BIM 作業啟動計畫 · Mobilization plan
   Separate file, loaded only when a project uses this template (08 文件範本庫). */
PRISM_TPL.add("PL-07", { spec(X) {
  let { code, p, lang, zh, a, sector, TT, std, C, pt, cv, Z, bx, TBD, v, t, title, sub, owner, subKey, subName, st, stN, team, discs, discN, midp, train, trTot, lodOf, reqs, subRev, rev, today, swList, cde, crs, naming, namingFields, namingEx, hard, tol, usesL, blank, num, signPub, signForm, S, sec, T_, statusOpts, okCols } = X;
  switch (0) { default: {
      S.kind = "report";
      sec(Z("啟動工作項目", "Mobilization tasks"), { t: [T_([Z("項次", "No."), Z("工作項目", "Task"), Z("內容", "Details"), Z("負責", "Owner"), Z("預定完成", "Due"), Z("狀態", "Status")], [6, 20, 38, 14, 12, 10],
        num([[Z("CDE 建置", "CDE setup"), Z(`於 ${cde} 建立專案、資料夾結構及狀態流程`, `Set up the project, folders and workflow in ${cde}`)], [Z("帳號與權限", "Accounts and permissions"), Z("依權限矩陣開設帳號", "Open accounts per the permission matrix")], [Z("樣板與標準", "Templates and standards"), Z("發布專案樣板、命名規則、色彩計畫", "Issue templates, naming rule and color plan")], [Z("軟硬體測試", "Software and hardware tests"), Z(`確認 ${swList} 版本一致`, `Confirm versions of ${swList}`)], [Z("資訊交換測試", "Exchange tests"), Z("IFC／BCF 往返測試及座標驗證", "IFC/BCF round-trip and coordinate check")], [Z("人員訓練", "Training"), Z("CDE 操作及命名規則說明", "CDE use and naming rule briefing")], [Z("BIM 啟始會議", "BIM kick-off meeting"), Z("確認 BEP、時程及權責", "Confirm BEP, schedule and responsibilities")]].map(r => [...r, "", "", ""])), { status: statusOpts })] });
      sec(Z("啟動完成確認", "Mobilization sign-off"), { list: [Z("□ 所有成員可登入 CDE 並具正確權限", "□ Everyone can log in with the right permissions"), Z("□ 座標、單位、樣板經測試確認", "□ Coordinates, units and templates tested"), Z("□ 交換測試紀錄已上傳", "□ Exchange test record uploaded")] });
      break;
  } }
} });
