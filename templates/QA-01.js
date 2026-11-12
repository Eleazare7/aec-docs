/* AEC PRISM · BEP & EIR Studio — optional template QA-01 BIM 模型檢核表 · Model checklist
   Separate file, loaded only when a project uses this template (08 文件範本庫). */
PRISM_TPL.add("QA-01", { spec(X) {
  let { code, p, lang, zh, a, sector, TT, std, C, pt, cv, Z, bx, TBD, v, t, title, sub, owner, subKey, subName, st, stN, team, discs, discN, midp, train, trTot, lodOf, reqs, subRev, rev, today, swList, cde, crs, naming, namingFields, namingEx, hard, tol, usesL, blank, num, signPub, signForm, S, sec, T_, statusOpts, okCols } = X;
  switch (0) { default: {
      S.meta.push([Z("階段", "Stage"), st.map(s => "□" + stN(s.key)).join("　")], [Z("模型檔名", "Model file"), ""], [Z("模型版次", "Revision"), ""]);
      const sc = std.selfcheck || [];
      const items = d => [[Z("檔案命名符合命名規則", "File name follows the naming rule"), namingFields, ""], [Z("座標系統與共用座標", "Coordinate system and shared coordinates"), crs, ""], [Z("單位設定", "Units"), bx(((std.units || []).find(u => u.disc === d.code) || {}).length || ""), ""], [Z("模型發展程度符合階段要求", "LOD meets the stage requirement"), st.map(s => `${stN(s.key)} ${lodOf(s.key)}`).join(zh ? "；" : "; "), ""], [Z("LOIN 屬性資訊完整", "LOIN attributes complete"), Z("依 LOIN 矩陣", "Per LOIN matrix"), "%"], [Z("無未解決之硬衝突", "No unresolved hard clashes"), Z(`容許值 ${tol} mm`, `Tolerance ${tol} mm`), Z("件", "count")], [Z("IFC 匯出驗證及 Proxy 比例", "IFC validation and proxy share"), "≤ 5%", "%"], ...sc.map(s => [bx(s.item), Z("依 BEP 限值", "Per BEP limit"), bx(s.unit)]), [Z("構件顏色符合色彩計畫", "Element colors follow the color plan"), Z("色彩計畫表", "Color plan"), ""], [Z("已清除未使用元件及暫存檢視", "Unused content and temporary views purged"), "—", ""]];
      (discs.length ? discs : [{ code: "—", name: Z("全部專業", "All disciplines") }]).forEach(d => sec(Z(`${discN(d)} 模型檢核`, `${discN(d)} model check`), { t: [T_([Z("項次", "No."), Z("檢核項目", "Check"), Z("標準／依據", "Criterion"), Z("實測值", "Measured"), Z("單位", "Unit"), ...okCols, Z("備註", "Remarks")], [6, 28, 22, 10, 7, 6, 6, 5, 10], num(items(d).map(r => [r[0], r[1], "", r[2], "□", "□", "□", ""])))] }));
      break;
  } }
} });
