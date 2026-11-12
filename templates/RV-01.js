/* AEC PRISM · BEP & EIR Studio — optional template RV-01 計畫書送審核章表 · Submission sign-off sheet
   Separate file, loaded only when a project uses this template (08 文件範本庫). */
PRISM_TPL.add("RV-01", { spec(X) {
  let { code, p, lang, zh, a, sector, TT, std, C, pt, cv, Z, bx, TBD, v, t, title, sub, owner, subKey, subName, st, stN, team, discs, discN, midp, train, trTot, lodOf, reqs, subRev, rev, today, swList, cde, crs, naming, namingFields, namingEx, hard, tol, usesL, blank, num, signPub, signForm, S, sec, T_, statusOpts, okCols } = X;
  switch (0) { default: {
      const REV = { supervisor: [Z("監造單位", "Supervisor"), pt.supervisor, Z("審查結果：□依修正意見重新提報　□審查合格\n日期／文號：", "Result: □ resubmit □ accepted\nDate / ref:")], pcm: [Z("專案管理單位", "PCM"), pt.pcm, Z("審查結果：□依審查意見重新提報　□同意核定\n日期／文號：", "Result: □ resubmit □ approved\nDate / ref:")], client: [Z(TT.owner, "Client"), a.client, Z("□依修正意見重新提報　□准予備查\n日期／文號：", "□ resubmit □ noted\nDate / ref:")] };
      const tiers = [[Z("提報單位", "Submitted by"), subName, Z("提報次數：第　　次\n提報日期：\n提報文號：", "Submission no.:\nDate:\nRef:")], ...["supervisor", "pcm", "client"].filter(k => k !== subKey).map(k => REV[k]).filter(r => r[1])];
      sec(Z("核章", "Sign-off"), { p: [Z(`計畫書名稱：${zh ? (cv.contractTitle || cv.title || "BIM 工作執行計畫書") : "BIM Execution Plan"}（第${subRev}版）`, `Document: BIM Execution Plan (submission ${subRev})`)],
        t: [T_([Z("單位", "Party"), Z("公司", "Company"), Z("內容", "Content"), Z("簽章", "Signature")], [14, 24, 40, 22], tiers.map(r => [r[0], r[1] || "", r[2], ""]))] });
      S.sign = null; S.rowH = 1600;
      break;
  } }
} });
