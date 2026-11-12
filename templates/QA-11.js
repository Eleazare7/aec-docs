/* AEC PRISM · BEP & EIR Studio — optional template QA-11 色彩計畫表 · Color plan
   Separate file, loaded only when a project uses this template (08 文件範本庫). */
PRISM_TPL.add("QA-11", { spec(X) {
  let { code, p, lang, zh, a, sector, TT, std, C, pt, cv, Z, bx, TBD, v, t, title, sub, owner, subKey, subName, st, stN, team, discs, discN, midp, train, trTot, lodOf, reqs, subRev, rev, today, swList, cde, crs, naming, namingFields, namingEx, hard, tol, usesL, blank, num, signPub, signForm, S, sec, T_, statusOpts, okCols } = X;
  switch (0) { default: {
      sec(Z("系統顏色", "System colors"), { p: [Z("同一 RGB 不得對應兩個系統；系統間色差（RGB 距離）應 ≥ 80。", "No RGB value is used twice; keep RGB distance ≥ 80 between systems.")],
        t: [T_([Z("項次", "No."), Z("系統", "System"), "RGB", Z("色塊", "Swatch"), Z("備註", "Notes")], [8, 44, 18, 14, 16], num((std.colours || []).map(c => [bx(c.system), c.rgb, "", ""])), { fills: (std.colours || []).map(c => [null, null, null, rgbHex(c.rgb), null]) })] });
      break;
  } }
} });
