/* AEC PRISM · BEP & EIR Studio — optional template HO-02 設施資產資料移交表（COBie） · Asset data / COBie handover
   Separate file, loaded only when a project uses this template (08 文件範本庫). */
PRISM_TPL.add("HO-02", { spec(X) {
  let { code, p, lang, zh, a, sector, TT, std, C, pt, cv, Z, bx, TBD, v, t, title, sub, owner, subKey, subName, st, stN, team, discs, discN, midp, train, trTot, lodOf, reqs, subRev, rev, today, swList, cde, crs, naming, namingFields, namingEx, hard, tol, usesL, blank, num, signPub, signForm, S, sec, T_, statusOpts, okCols } = X;
  switch (0) { default: {
      /* v90: COBie 2.4 column sets, with the Contact sheet that every CreatedBy must point to */
      const els = [...new Set((p.loin || []).map(r => r.el).filter(Boolean))];
      const people = (p.bep.team || []).filter(r => r.email);
      const by = (people[0] || {}).email || "";
      const when = today.replace(/\//g, "-") + "T00:00:00";
      const hand = st.find(s => s.key === "handover") || st[st.length - 1];
      const row = (n, cells) => { const r = cells.slice(0, n); while (r.length < n) r.push(""); return r; };
      const H = {
        Contact: ["Email", "CreatedBy", "CreatedOn", "Category", "Company", "Phone", "ExtSystem", "ExtObject", "ExtIdentifier", "Department", "OrganizationCode", "GivenName", "FamilyName", "Street", "PostalBox", "Town", "StateRegion", "PostalCode", "Country"],
        Facility: ["Name", "CreatedBy", "CreatedOn", "Category", "ProjectName", "SiteName", "LinearUnits", "AreaUnits", "VolumeUnits", "CurrencyUnit", "AreaMeasurement", "ExternalSystem", "ExternalProjectObject", "ExternalProjectIdentifier", "ExternalSiteObject", "ExternalSiteIdentifier", "ExternalFacilityObject", "ExternalFacilityIdentifier", "Description", "ProjectDescription", "SiteDescription", "Phase"],
        Floor: ["Name", "CreatedBy", "CreatedOn", "Category", "ExtSystem", "ExtObject", "ExtIdentifier", "Description", "Elevation", "Height"],
        Space: ["Name", "CreatedBy", "CreatedOn", "Category", "FloorName", "Description", "ExtSystem", "ExtObject", "ExtIdentifier", "RoomTag", "UsableHeight", "GrossArea", "NetArea"],
        Type: ["Name", "CreatedBy", "CreatedOn", "Category", "Description", "AssetType", "Manufacturer", "ModelNumber", "WarrantyGuarantorParts", "WarrantyDurationParts", "WarrantyGuarantorLabor", "WarrantyDurationLabor", "WarrantyDurationUnit", "ExtSystem", "ExtObject", "ExtIdentifier", "ReplacementCost", "ExpectedLife", "DurationUnit", "WarrantyDescription", "NominalLength", "NominalWidth", "NominalHeight", "ModelReference", "Shape", "Size", "Color", "Finish", "Grade", "Material", "Constituents", "Features", "AccessibilityPerformance", "CodePerformance", "SustainabilityPerformance"],
        Component: ["Name", "CreatedBy", "CreatedOn", "TypeName", "Space", "Description", "ExtSystem", "ExtObject", "ExtIdentifier", "SerialNumber", "InstallationDate", "WarrantyStartDate", "TagNumber", "BarCode", "AssetIdentifier"],
        System: ["Name", "CreatedBy", "CreatedOn", "Category", "ComponentNames", "ExtSystem", "ExtObject", "ExtIdentifier", "Description"] };
      const contacts = people.length ? people.map(r => row(H.Contact.length, [r.email, by, when, r.role || "", r.company || subName, r.phone || "", "", "", "", "", "", r.contact || ""])) : [row(H.Contact.length, ["", "", when, "", subName])];
      S.sheets = [
        { name: "Contact", head: H.Contact, rows: contacts.concat(blank(3, H.Contact.length)) },
        { name: "Facility", head: H.Facility, rows: [row(H.Facility.length, [a.name || "", by, when, a.type || "", a.name || "", a.location || "", "millimeters", "square meters", "cubic meters", "TWD", "", "", "", "", "", "", "", "", "", "", "", hand ? stN(hand.key) : ""])] },
        { name: "Floor", head: H.Floor, rows: blank(5, H.Floor.length) },
        { name: "Space", head: H.Space, rows: blank(10, H.Space.length) },
        { name: "Type", head: H.Type, rows: els.map(e => row(H.Type.length, [e, by, when, "", "", "Fixed"])).concat(blank(3, H.Type.length)) },
        { name: "Component", head: H.Component, rows: blank(10, H.Component.length) },
        { name: "System", head: H.System, rows: (std.colours || []).map(c => row(H.System.length, [bx(c.system), by, when])).concat(blank(2, H.System.length)) }];
      sec(Z("COBie 工作表說明", "COBie sheets"), { p: [
          Z("Excel 檔依 COBie 2.4 欄位建置 Contact、Facility、Floor、Space、Type、Component、System 工作表；Type 列取自 LOIN 構件，System 列取自色彩計畫系統。", "The Excel file follows the COBie 2.4 columns for the Contact, Facility, Floor, Space, Type, Component and System sheets. Type rows come from the LOIN elements and System rows from the color plan."),
          by ? Z(`各列 CreatedBy 以 ${by} 預填，須與 Contact 工作表之 Email 一致。`, `CreatedBy is prefilled with ${by}, which must match an Email on the Contact sheet.`)
             : Z("專案團隊尚未填寫電子郵件：請先於 Contact 工作表填入 Email，並以該 Email 填寫各列 CreatedBy，否則無法通過 COBie 檢核。", "No team email is set yet. Fill in an Email on the Contact sheet and use it as CreatedBy on every row, or the file will fail a COBie check.")],
        t: [T_([Z("工作表", "Sheet"), Z("欄位數", "Columns"), Z("預填列數", "Prefilled rows")], [40, 30, 30], S.sheets.map(s => [s.name, String(s.head.length), String(s.rows.filter(r => r.some(x => x)).length)]))] });
      break;
  } }
} });
