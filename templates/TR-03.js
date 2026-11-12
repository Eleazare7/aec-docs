/* AEC PRISM · BEP & EIR Studio — optional template TR-03 訓練教材範本 · Training slide templates
   Separate file, loaded only when a project uses this template (08 文件範本庫). */
PRISM_TPL.add("TR-03", { async pptx(p, S0) {
  try { await loadScript("https://cdn.jsdelivr.net/npm/pptxgenjs@3.12.0/dist/pptxgen.bundle.js"); } catch (e) {}
  if (!window.PptxGenJS) { try { await loadScript("https://unpkg.com/pptxgenjs@3.12.0/dist/pptxgen.bundle.js"); } catch (e) {} }
  if (!window.PptxGenJS) throw { code: "lib" };
  const zh = p.docLang === "zh", a = p.a, std = scopedStd(p), cde = a.cde ? (zh ? (CDES_ZH[a.cde] || a.cde) : a.cde) : "CDE";
  const nf = ((std.naming || {}).fields || []).join("-");
  const crsL = a.crs ? (zh ? (CRS_ZH[a.crs] || a.crs) : a.crs) : "TWD97";
  const pp = new window.PptxGenJS(); pp.layout = "LAYOUT_WIDE"; pp.title = `TR-03 ${a.name || ""}`;
  const F = zh ? "Microsoft JhengHei" : "Arial", NV = "02294F";
  const decks = [
    [zh ? "ISO 19650 與本案 EIR／BEP" : "ISO 19650 and this project's EIR / BEP", zh ? ["資訊管理流程：需求 → 回應 → 交付 → 驗收", `本案 EIR 共 ${(p.eir.reqs || []).length} 項需求`, "BEP 回應原則：誰、何時、以何種成果", "送審版次與審查流程"] : ["Information management: requirement → response → delivery → acceptance", `This EIR has ${(p.eir.reqs || []).length} requirements`, "BEP responses: who, when, what", "Submission revisions and review"]],
    [zh ? `${cde} 平台操作` : `Using ${cde}`, zh ? ["登入與權限", "資料夾結構與 S0–S4／A／B／CR 狀態", "上傳、版次與發行流程", "審查意見與議題追蹤"] : ["Login and permissions", "Folders and S0–S4 / A / B / CR states", "Upload, revisions and publishing", "Review comments and issues"]],
    [zh ? "命名與檔案管理" : "Naming and file management", zh ? [`命名欄位：${nf || "〔依命名規則〕"}`, "專業代碼與單元代號", "模型檔案總表維護", "常見錯誤與自主檢查"] : [`Fields: ${nf || "[per naming rule]"}`, "Discipline and unit codes", "Keeping the file register", "Common mistakes and self-check"]],
    [zh ? "模型檢核與衝突檢討" : "Model checking and clash review", zh ? [`整合模型與共用座標（${crsL}）`, "衝突測試設定與容許值", "現況 → 影響 → 要求行動", "BCF 議題與結案條件"] : [`Federation and shared coordinates (${crsL})`, "Clash tests and tolerances", "Situation → impact → action", "BCF issues and closure"]],
    [zh ? "竣工模型與設施資料" : "As-built model and asset data", zh ? ["竣工模型範圍與容許誤差", "COBie 工作表", "設備型錄、保固與維護手冊連結", "移交檢核"] : ["As-built scope and tolerances", "COBie sheets", "Linking catalogs, warranties and O&M", "Handover checklist"]]];
  const title = pp.addSlide(); title.background = { color: NV };
  title.addImage({ data: "data:image/png;base64," + SFR_IMG.mark, x: 0.6, y: 0.5, w: 0.45, h: 0.58 }); title.addImage({ data: "data:image/png;base64," + SFR_IMG.word, x: 1.2, y: 0.7, w: 2.6, h: 0.21 });
  title.addText(zh ? "BIM 教育訓練" : "BIM Training", { x: 0.6, y: 2.4, w: 11, h: 1, fontFace: F, fontSize: 40, bold: true, color: "FFFFFF" });
  title.addText(a.name || "", { x: 0.6, y: 3.4, w: 11, h: 0.6, fontFace: F, fontSize: 20, color: "D5DEEA" });
  title.addText("FROM DATA TO A SMARTER BUILT ENVIRONMENT", { x: 0.6, y: 6.6, w: 11, h: 0.4, fontFace: "Arial", fontSize: 10, color: "A9B8CE", charSpacing: 4 });
  const agenda = pp.addSlide(); agenda.addText(zh ? "課程單元" : "Modules", { x: 0.6, y: 0.4, w: 11, h: 0.7, fontFace: F, fontSize: 28, bold: true, color: NV });
  agenda.addText(decks.map((d, i) => ({ text: `${String(i + 1).padStart(2, "0")}　${d[0]}`, options: { breakLine: true } })), { x: 0.8, y: 1.4, w: 11, h: 4.5, fontFace: F, fontSize: 20, color: "14161A", paraSpaceAfter: 12 });
  decks.forEach((d, i) => {
    const s = pp.addSlide(); s.background = { color: NV };
    s.addText(`${String(i + 1).padStart(2, "0")}`, { x: 0.6, y: 2.0, w: 3, h: 0.6, fontFace: "Arial", fontSize: 18, color: "A9B8CE" });
    s.addText(d[0], { x: 0.6, y: 2.6, w: 11.5, h: 1.2, fontFace: F, fontSize: 36, bold: true, color: "FFFFFF" });
    const c = pp.addSlide();
    c.addShape(pp.ShapeType.rect, { x: 0, y: 0, w: 13.33, h: 0.9, fill: { color: NV } });
    c.addText(d[0], { x: 0.5, y: 0.12, w: 12, h: 0.66, fontFace: F, fontSize: 22, bold: true, color: "FFFFFF" });
    c.addText(d[1].map(x => ({ text: x, options: { bullet: true, breakLine: true } })), { x: 0.8, y: 1.4, w: 11.5, h: 4.8, fontFace: F, fontSize: 22, color: "14161A", paraSpaceAfter: 14 });
    c.addText(`AEC PRISM · TR-03 · ${a.name || ""}`, { x: 0.5, y: 7.0, w: 12, h: 0.3, fontFace: "Arial", fontSize: 9, color: "5C5F66" });
    const ex = pp.addSlide(); ex.addText(zh ? "實機練習" : "Hands-on exercise", { x: 0.6, y: 0.4, w: 11, h: 0.7, fontFace: F, fontSize: 26, bold: true, color: NV });
    ex.addText(zh ? "〔於此放入本案平台畫面截圖（紅色虛線框標示操作位置）〕" : "[Insert a screenshot of this project's platform, marking the step with a red dashed frame]", { x: 0.8, y: 1.6, w: 11.5, h: 4.5, fontFace: F, fontSize: 18, color: "5C5F66", align: "center", valign: "middle", line: { color: "C0392B", dashType: "dash", width: 1.5 } });
  });
  return pp.write({ outputType: "blob" });
} });
