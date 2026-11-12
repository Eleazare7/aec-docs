/* AEC PRISM · BEP & EIR Studio — optional template QA-02 圖說檢核表 · Drawing checklist
   Separate file, loaded only when a project uses this template (08 文件範本庫). */
PRISM_TPL.add("QA-02", { spec(X) {
  let { code, p, lang, zh, a, sector, TT, std, C, pt, cv, Z, bx, TBD, v, t, title, sub, owner, subKey, subName, st, stN, team, discs, discN, midp, train, trTot, lodOf, reqs, subRev, rev, today, swList, cde, crs, naming, namingFields, namingEx, hard, tol, usesL, blank, num, signPub, signForm, S, sec, T_, statusOpts, okCols } = X;
  switch (0) { default: {
      sec(Z("圖說檢核項目", "Drawing checks"), { t: [T_([Z("項次", "No."), Z("檢核項目", "Check"), ...okCols, Z("說明", "Notes")], [6, 54, 8, 8, 6, 18], num([[Z("圖說由模型產出（或依 BEP 允許以 CAD 繪製）", "Drawing produced from the model (or CAD where the BEP allows)")], [Z("圖框、圖號、圖名符合專案標準", "Title block, number and name follow the standard")], [Z("比例、尺寸標註及單位正確", "Scale, dimensions and units correct")], [Z("圖模一致（抽樣比例依 BEP）", "Drawing matches the model (sample rate per BEP)")], [Z("修訂雲線及修訂紀錄完整", "Revision clouds and log complete")], [Z("索引及參考圖號正確", "Callouts and references correct")], [Z("圖例及材料標示一致", "Legend and material tags consistent")]].map(r => [...r, "□", "□", "□", ""])))] });
      sec(Z("圖模一致性抽樣", "Drawing–model sampling"), { t: [T_([Z("圖號", "Drawing No."), Z("圖名", "Title"), Z("產出方式", "Source"), Z("一致性", "Consistent"), Z("結果", "Result")], [18, 36, 16, 14, 16], blank(10, 5))] });
      break;
  } }
} });
