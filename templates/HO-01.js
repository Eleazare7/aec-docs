/* AEC PRISM · BEP & EIR Studio — optional template HO-01 竣工模型說明書 · As-built model statement
   Separate file, loaded only when a project uses this template (08 文件範本庫). */
PRISM_TPL.add("HO-01", { spec(X) {
  let { code, p, lang, zh, a, sector, TT, std, C, pt, cv, Z, bx, TBD, v, t, title, sub, owner, subKey, subName, st, stN, team, discs, discN, midp, train, trTot, lodOf, reqs, subRev, rev, today, swList, cde, crs, naming, namingFields, namingEx, hard, tol, usesL, blank, num, signPub, signForm, S, sec, T_, statusOpts, okCols } = X;
  switch (0) { default: {
      S.kind = "report";
      const ab = std.asbuilt || {}, tolT = x => (x ?? "") === "" ? Z("〔待確認〕", "[to be confirmed]") : `±${x} mm`;
      sec(Z("竣工模型範圍", "As-built model scope"), { p: [Z(`竣工模型依實際外型、尺寸、位置、高程、材料及數量建置，與驗收合格之竣工圖一致；容許誤差土建 ${tolT(ab.civil)}、機電 ${tolT(ab.mep)}。`, `As-built models match the accepted as-built drawings within ${tolT(ab.civil)} (civil) and ${tolT(ab.mep)} (MEP).`)],
        t: [T_([Z("專業", "Discipline"), Z("模型檔名", "Model file"), Z("版次", "Revision"), Z("說明", "Notes")], [20, 36, 12, 32], discs.map(d => [discN(d), "", "CR", ""]))] });
      sec(Z("已知差異", "Known deviations"), { t: [T_([Z("位置", "Location"), Z("差異說明", "Deviation"), Z("原因", "Reason"), Z("處理", "Treatment")], [20, 36, 22, 22], blank(5, 4))] });
      sec(Z("設施資訊", "Asset information"), { list: [Z("設施資料依 COBie 欄位建置，詳設施資產資料移交表（HO-02）。", "Asset data follows COBie; see HO-02."), Z("設備型錄、保固及維護手冊以連結或附件方式提供。", "Catalogs, warranties and O&M manuals are linked or attached.")] });
      break;
  } }
} });
