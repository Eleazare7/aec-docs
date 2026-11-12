/* AEC PRISM · BEP & EIR Studio — optional template PL-02 投標 BIM 執行計畫書（決標前） · Pre-appointment BEP
   Separate file, loaded only when a project uses this template (08 文件範本庫). */
PRISM_TPL.add("PL-02", { spec(X) {
  let { code, p, lang, zh, a, sector, TT, std, C, pt, cv, Z, bx, TBD, v, t, title, sub, owner, subKey, subName, st, stN, team, discs, discN, midp, train, trTot, lodOf, reqs, subRev, rev, today, swList, cde, crs, naming, namingFields, namingEx, hard, tol, usesL, blank, num, signPub, signForm, S, sec, T_, statusOpts, okCols } = X;
  switch (0) { default: {
      S.kind = "report";
      const secs = [...new Set(reqs.map(r => r.sec))];
      sec(Z("對本案 EIR 之理解", "Our understanding of the EIR"), { p: [Z(`本團隊已詳閱${v(a.client)}提出之資訊交換需求，共 ${reqs.length} 項需求，涵蓋 ${secs.length} 個章節。本團隊將依 ISO 19650 程序逐項回應，並於決標後提送 BIM 工作執行計畫書。`, `We have reviewed the ${reqs.length} requirements across ${secs.length} sections and will answer each one in the post-appointment BEP.`)],
        t: [T_([Z("章節", "Section"), Z("需求數", "Requirements"), Z("本團隊之執行方式", "Our approach")], [40, 15, 45], secs.map(n => { const s = SECTIONS.find(x => x.n === n); return [s ? (zh ? s.tc : s.en) : String(n), String(reqs.filter(r => r.sec === n).length), ""]; }))] });
      sec(Z("BIM 應用與執行方式", "BIM uses and approach"), { list: usesL.length ? usesL.map(u => Z(`${u}：本團隊將於各階段執行並於協調會議提出成果。`, `${u}: delivered at each stage and presented at coordination meetings.`)) : [TBD] });
      sec(Z("團隊組織與關鍵人員", "Team and key staff"), { t: [T_([Z("角色", "Role"), Z("公司", "Company"), Z("姓名", "Name"), Z("年資", "Years")], [28, 30, 26, 16], team.length ? team.map(r => [r.role || "", r.company || "", r.contact || "", r.years ? String(r.years) : ""]) : blank(5, 4))] });
      sec(Z("作業時程與交付", "Schedule and deliverables"), { t: [T_([Z("階段", "Stage"), Z("預定日期", "Date"), Z("主要交付成果", "Main deliverable"), "LOD"], [20, 18, 47, 15], st.map(s => [stN(s.key), (a.stages[s.key] || {}).date || "", bx((midp.find(m => m.stage === s.key) || {}).deliverable || ""), lodOf(s.key)]))] });
      sec(Z("軟硬體與 CDE", "Software, hardware and CDE"), { list: [Z(`建模軟體：${swList}`, `Software: ${swList}`), Z(`共同資料環境：${cde}`, `CDE: ${cde}`), Z(`檢核軟體：${(a.checkers || []).join("、") || TBD}`, `Checking: ${(a.checkers || []).join(", ") || TBD}`)] });
      sec(Z("品質管理與教育訓練承諾", "Quality and training commitments"), { list: [Z("依三級品管執行模型自主檢查、監造查證及機關抽查。", "Three-tier QA: self-check, supervisor verification, client audit."), Z(`提供教育訓練合計 ${trTot || TBD} 小時。`, `Training totals ${trTot || TBD} hours.`)] });
      break;
  } }
} });
