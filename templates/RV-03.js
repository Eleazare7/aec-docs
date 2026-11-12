/* AEC PRISM · BEP & EIR Studio — optional template RV-03 審查意見及審查意見回覆表 · Review comments & replies
   Separate file, loaded only when a project uses this template (08 文件範本庫). */
PRISM_TPL.add("RV-03", { spec(X) {
  let { code, p, lang, zh, a, sector, TT, std, C, pt, cv, Z, bx, TBD, v, t, title, sub, owner, subKey, subName, st, stN, team, discs, discN, midp, train, trTot, lodOf, reqs, subRev, rev, today, swList, cde, crs, naming, namingFields, namingEx, hard, tol, usesL, blank, num, signPub, signForm, S, sec, T_, statusOpts, okCols } = X;
  switch (0) { default: {
      S.landscape = true;
      S.meta.push([Z("審查單位", "Reviewer"), sector === "public" ? Z("□監造單位　□專案管理單位　□機關", "□ Supervisor □ PCM □ Client") : Z("□建築師　□業主", "□ Architect □ Owner")], [Z("送審文件", "Document"), zh ? (cv.contractTitle || cv.title || "BIM 工作執行計畫書") : "BIM Execution Plan"], [Z("審查回合", "Round"), Z(`第${subRev}版`, `Submission ${subRev}`)]);
      sec(Z("審查意見及回覆", "Comments and replies"), { p: [Z("處理情形：A 已修正　B 補充說明　C 未同意並說明理由。審查確認：同意／再修正。意見須經審查單位確認後始得結案。", "Action: A revised · B clarified · C not accepted (reason given). Reviewer confirms: agreed / revise again. A comment closes only when the reviewer confirms.")],
        t: [T_([Z("項次", "No."), Z("章節／頁次", "Section / page"), Z("審查意見", "Comment"), Z("回覆說明", "Reply"), Z("修正後頁次", "Revised page"), Z("處理情形", "Action"), Z("審查確認", "Confirmed"), Z("確認日期", "Date")], [5, 11, 26, 26, 9, 8, 8, 7], ((X.rec && X.rec.review && (X.rec.review.comments || []).length) ? num(X.rec.review.comments.map(c => [c.section || "", c.comment || "", c.reply || "", "", c.action || "", c.confirmed || "", ""])) : num(blank(11, 7))), { status: [Z("A 已修正", "A revised"), Z("B 補充說明", "B clarified"), Z("C 未同意", "C not accepted")] })] });
      S.sign = [Z("審查人員", "Reviewer"), Z("回覆人員", "Replied by"), Z("確認人員", "Confirmed by")];
      break;
  } }
} });
