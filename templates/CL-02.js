/* AEC PRISM · BEP & EIR Studio — optional template CL-02 組織／資產／專案資訊需求（OIR／AIR／PIR） · OIR / AIR / PIR
   Separate file, loaded only when a project uses this template (08 文件範本庫). */
PRISM_TPL.add("CL-02", { spec(X) {
  let { code, p, lang, zh, a, sector, TT, std, C, pt, cv, Z, bx, TBD, v, t, title, sub, owner, subKey, subName, st, stN, team, discs, discN, midp, train, trTot, lodOf, reqs, subRev, rev, today, swList, cde, crs, naming, namingFields, namingEx, hard, tol, usesL, blank, num, signPub, signForm, S, sec, T_, statusOpts, okCols } = X;
  switch (0) { default: {
      S.kind = "report";
      sec(Z("組織資訊需求（OIR）", "Organizational information requirements (OIR)"), { p: [Z(`${v(a.client)}為達成資產管理與決策目標，對本案提出下列組織層級資訊需求，作為資產資訊需求（AIR）及專案資訊需求（PIR）之依據。`, `${v(a.client)} sets the following organizational requirements, which drive the AIR and PIR.`)],
        t: [T_([Z("項次", "No."), Z("組織目標", "Organizational goal"), Z("所需資訊", "Information needed"), Z("使用單位", "Used by")], [8, 32, 40, 20],
          num([[Z("資產維護管理", "Asset maintenance"), Z("設備型號、保固、維護週期", "Equipment model, warranty, maintenance interval"), Z("營運管理單位", "Operator")], [Z("空間使用管理", "Space management"), Z("空間名稱、編號、面積、用途", "Space name, number, area, use"), Z("總務單位", "Facilities")], [Z("決策與預算", "Decisions and budget"), Z("數量、成本與時程資訊", "Quantities, cost, schedule"), Z(TT.owner, "Client")], [Z("法規與安全", "Compliance and safety"), Z("消防、避難、無障礙相關屬性", "Fire, egress, accessibility attributes"), Z("管理單位", "Management")]]))] });
      sec(Z("資產資訊需求（AIR）", "Asset information requirements (AIR)"), { p: [Z("下列構件於竣工移交及營運維護階段須具備之文數字資訊，取自本案 LOIN 矩陣之竣工移交及營運維護列；尚未填寫時以空白列表示。", "Alphanumeric data each element needs at handover and in operation, from the handover and O&M rows of the project LOIN matrix; blank rows show where none are set yet.")],
        t: [T_([Z("構件", "Element"), Z("必要屬性", "Required attributes"), Z("文件", "Documents"), Z("用途", "Purpose")], [22, 38, 22, 18], (() => { const air = (p.loin || []).filter(r => r.stage === "handover" || r.stage === "om").slice(0, 30).map(r => [r.el || "", r.props || "", r.docs || "", r.purpose || ""]); return air.length ? air : blank(6, 4); })())] });
      sec(Z("專案資訊需求（PIR）", "Project information requirements (PIR)"), { p: [Z("各階段決策點所需之資訊如下。", "Information needed at each decision point.")],
        t: [T_([Z("階段", "Stage"), Z("決策點", "Decision point"), Z("所需資訊", "Information needed"), Z("預定日期", "Date")], [18, 26, 40, 16], st.map(s => [stN(s.key), Z(`${stN(s.key)}成果核定`, `${stN(s.key)} approval`), usesL.slice(0, 3).join(zh ? "、" : ", ") || TBD, (a.stages[s.key] || {}).date || ""]))] });
      break;
  } }
} });
