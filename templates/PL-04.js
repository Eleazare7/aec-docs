/* AEC PRISM · BEP & EIR Studio — optional template PL-04 權責分工表（RACI） · Responsibility matrix (RACI)
   Separate file, loaded only when a project uses this template (08 文件範本庫). */
PRISM_TPL.add("PL-04", { spec(X) {
  let { code, p, lang, zh, a, sector, TT, std, C, pt, cv, Z, bx, TBD, v, t, title, sub, owner, subKey, subName, st, stN, team, discs, discN, midp, train, trTot, lodOf, reqs, subRev, rev, today, swList, cde, crs, naming, namingFields, namingEx, hard, tol, usesL, blank, num, signPub, signForm, S, sec, T_, statusOpts, okCols } = X;
  switch (0) { default: {
      S.landscape = true;
      const roles = [Z(TT.owner, "Client"), Z("專案管理", "PCM"), Z("監造", "Supervisor"), Z("設計", "Designer"), Z("廠商 BIM 經理", "Contractor BIM manager"), Z("專業團隊", "Task teams")];
      const items = [[Z("BIM 工作執行計畫書", "BEP"), "I,A,C,C,R,C"], [Z("專案資訊標準", "Information standard"), "A,C,C,C,R,I"], ...midp.map(m => [bx(m.deliverable), "I,C,A,C,R,R"]), [Z("衝突檢討報告", "Clash report"), "I,I,C,C,A,R"], [Z("疑義澄清（RFI）", "RFI"), "I,C,A,R,C,R"], [Z("竣工模型及 COBie", "As-built model and COBie"), "A,C,C,I,R,R"]];
      sec(Z("權責分工", "Responsibilities"), { p: [Z("R：負責執行　A：核准／最終負責（每項僅一個 A）　C：諮詢　I：知會", "R responsible · A accountable (one per item) · C consulted · I informed")],
        t: [T_([Z("資訊項目", "Information item"), ...roles], [34, 11, 11, 11, 11, 11, 11], items.map(([n, r]) => [n, ...r.split(",")]))] });
      break;
  } }
} });
