/* AEC PRISM · BEP & EIR Studio — optional template TR-08 結業證書 · Completion certificate
   Separate file, loaded only when a project uses this template (08 文件範本庫). */
PRISM_TPL.add("TR-08", { spec(X) {
  let { code, p, lang, zh, a, sector, TT, std, C, pt, cv, Z, bx, TBD, v, t, title, sub, owner, subKey, subName, st, stN, team, discs, discN, midp, train, trTot, lodOf, reqs, subRev, rev, today, swList, cde, crs, naming, namingFields, namingEx, hard, tol, usesL, blank, num, signPub, signForm, S, sec, T_, statusOpts, okCols } = X;
  switch (0) { default: {
      S.kind = "cert";
      S.certs = (team.length ? team : [{ contact: "", company: "" }]).map((r, i) => ({ name: r.contact || "　　　　", org: r.company || "", no: `${(a.code || "PRJ").replace(/\s+/g, "")}-TR-${String(i + 1).padStart(3, "0")}`, course: train.map(x => bx(x.course)).join(zh ? "；" : "; ") || TBD, hours: trTot }));
      break;
  } }
} });
