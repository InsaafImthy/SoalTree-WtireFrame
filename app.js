const STORAGE_KEY = "soaltee-kot-wireframe-state-v1";

const seed = {
  screen: "queue",
  selectedFlight: "FZ576",
  challanLocked: false,
  queueFilters: { status: "All Status", airline: "All Airlines", sector: "All Sectors", search: "" },
  invoice: { status: "draft", number: "", generatedAt: "" },
  flights: [
    { std: "11:30", flightNo: "FZ576", airline: "FlyDubai", airlineClass: "flydubai", sector: "DXB - KTM", aircraft: "B737-800", reg: "A6-FDU", config: "182 Y", j: 12, y: 180, tc: 2, cc: 8, menu: "CYCLE-A", kot: "pending", meal: "not started", dispatch: "pending", production: "pending" },
    { std: "13:20", flightNo: "QR647", airline: "Qatar Airways", airlineClass: "qatar", sector: "DOH - KTM", aircraft: "A320neo", reg: "A7-AHL", config: "232 Y", j: 8, y: 232, tc: 2, cc: 10, menu: "CYCLE-B", kot: "pending", meal: "not started", dispatch: "pending", production: "pending" },
    { std: "15:10", flightNo: "SG052", airline: "SpiceJet", airlineClass: "spice", sector: "DEL - KTM", aircraft: "B737-800", reg: "VT-SGY", config: "162 Y", j: 0, y: 162, tc: 2, cc: 6, menu: "CYCLE-A", kot: "confirmed", meal: "in progress", dispatch: "pending", production: "in progress" },
    { std: "17:25", flightNo: "AI213", airline: "Air India", airlineClass: "airindia", sector: "BOM - KTM", aircraft: "A320neo", reg: "VT-EXA", config: "186 Y", j: 10, y: 186, tc: 2, cc: 8, menu: "CYCLE-B", kot: "confirmed", meal: "in progress", dispatch: "pending", production: "prepared" },
    { std: "18:40", flightNo: "FZ540", airline: "FlyDubai", airlineClass: "flydubai", sector: "KTM - DXB", aircraft: "B737-800", reg: "A6-FDV", config: "182 Y", j: 12, y: 180, tc: 2, cc: 8, menu: "CYCLE-A", kot: "in progress", meal: "not started", dispatch: "pending", production: "pending" },
    { std: "20:30", flightNo: "RA402", airline: "Royal Jordanian", airlineClass: "", sector: "AMM - KTM", aircraft: "A321", reg: "JY-AYV", config: "140 Y", j: 6, y: 140, tc: 2, cc: 6, menu: "CYCLE-B", kot: "scheduled", meal: "not started", dispatch: "scheduled", production: "pending" },
    { std: "22:15", flightNo: "6E114", airline: "IndiGo", airlineClass: "", sector: "BLR - KTM", aircraft: "A320neo", reg: "VT-IGQ", config: "150 Y", j: 0, y: 150, tc: 2, cc: 6, menu: "CYCLE-A", kot: "scheduled", meal: "not started", dispatch: "scheduled", production: "pending" },
    { std: "23:50", flightNo: "TK726", airline: "Turkish Airlines", airlineClass: "", sector: "IST - KTM", aircraft: "B737-800", reg: "TC-JHP", config: "200 Y", j: 12, y: 200, tc: 2, cc: 10, menu: "CYCLE-B", kot: "scheduled", meal: "not started", dispatch: "scheduled", production: "pending" },
    { std: "01:25", flightNo: "UL198", airline: "SriLankan", airlineClass: "", sector: "CMB - KTM", aircraft: "A330", reg: "4R-ALA", config: "220 Y", j: 8, y: 220, tc: 2, cc: 10, menu: "CYCLE-A", kot: "scheduled", meal: "not started", dispatch: "scheduled", production: "pending" },
    { std: "03:10", flightNo: "SV753", airline: "Saudia", airlineClass: "", sector: "RUH - KTM", aircraft: "B777-300ER", reg: "HZ-AK28", config: "210 Y", j: 10, y: 210, tc: 2, cc: 10, menu: "CYCLE-B", kot: "scheduled", meal: "not started", dispatch: "scheduled", production: "pending" }
  ],
  kot: {
    date: "15/06/2026",
    challanNo: "32496",
    firstUplift: "HUNT CU, MK, 16/",
    secondUplift: "HUNT JYNK, 3/8",
    remarks: "No peanuts.\nCold meal for crew.",
    loads: [
      ["Initial Load", 12, 0, 180, 2, 8],
      ["Load Passed By Airport", 12, 0, 180, 2, 8],
      ["Final Pax On Board", 12, 0, 180, 2, 8],
      ["Final Meal On Board", 12, 0, 180, 2, 8],
      ["Over Load", 0, 0, 0, 0, 0]
    ],
    firstService: [
      ["Choice 1", 9, 0, 194, 2, 8],
      ["Choice 2", 8, 0, 48, 0, 0],
      ["Choice 3", 2, 0, 10, 0, 0],
      ["Choice 4", 2, 0, 0, 0, 0],
      ["SPML", 0, 0, 0, 0, 0]
    ],
    secondService: [
      ["Choice 1", 5, 0, 194, 2, 8],
      ["Choice 2", 4, 0, 48, 0, 0],
      ["Choice 3", 1, 0, 10, 0, 0],
      ["Choice 4", 1, 0, 0, 0, 0],
      ["SPML", 0, 0, 3, 0, 0]
    ],
    specialMeals: { AVML: 3, CHML: 1, BBML: 0, FPML: 0, GFML: 0, HNML: 0, LCML: 0, LSML: 0, MOML: 0, VGML: 2, VLML: 0 },
    ancillaries: [
      ["Arabic Coffee", "Ltr", 2, 2],
      ["Assorted Fresh Juice - 1000 ml", "Pkt", 2, 2],
      ["Assorted Bread Roll", "Foil", 283, 276],
      ["Assorted Cheese", "Foil", 283, 276],
      ["Butter Chiplet", "Pcs", 559, 544],
      ["Cracker", "Pkt", 283, 276],
      ["Full Cream Milk", "Ltr", 2, 2],
      ["Juice T/P - 1000 ml", "Pkt", 2, 2],
      ["Juice T/P - 200 ml", "Pkt", 0, 0],
      ["Juice T/P Tomato - 1000 ml", "Pkt", 2, 2],
      ["Lemon Slices", "Foil", 6, 6],
      ["Orange Slice", "Foil", 4, 4],
      ["Mint/Garnish", "Foil", 4, 4],
      ["Skimmed Milk", "Ltr", 0, 0],
      ["Soft Roll", "Pcs", 10, 10],
      ["Whole Lemon", "No.", 10, 10],
      ["Ice Cube", "Kg", 20, 20],
      ["Mineral Water - 500 ml", "Ltr", 283, 276],
      ["Mineral Water - 1000 ml", "Ltr", 0, 0]
    ]
  }
};

let state = loadState();
const requestedScreen = new URLSearchParams(window.location.search).get("screen");
if (requestedScreen) {
  state.screen = requestedScreen;
}
normalizeState();
if (state.screen === "kitchen-display") {
  window.setInterval(() => {
    state = loadState();
    normalizeState();
    state.screen = "kitchen-display";
    render();
  }, 4000);
}

function loadState() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return structuredClone(seed);
  try {
    return { ...structuredClone(seed), ...JSON.parse(raw) };
  } catch {
    return structuredClone(seed);
  }
}

function normalizeState() {
  state.queueFilters = { ...structuredClone(seed.queueFilters), ...(state.queueFilters || {}) };
  state.invoice = { ...structuredClone(seed.invoice), ...(state.invoice || {}) };
  state.kot = { ...structuredClone(seed.kot), ...(state.kot || {}) };
  state.flights = Array.isArray(state.flights) && state.flights.length ? state.flights : structuredClone(seed.flights);
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function setScreen(screen) {
  state.screen = screen;
  saveState();
  render();
}

function setQueueFilter(key, value) {
  state.queueFilters[key] = value;
  saveState();
  render();
}

function selectedFlight() {
  return state.flights.find((flight) => flight.flightNo === state.selectedFlight) || state.flights[0];
}

function setSelectedFlight(flightNo, screen = "kot") {
  state.selectedFlight = flightNo;
  saveState();
  render(screen);
  setScreen(screen);
  openFlightModal();
}

function updateProduction(flightNo, status) {
  const flight = state.flights.find((item) => item.flightNo === flightNo);
  if (!flight) return;
  flight.production = status;
  flight.meal = status === "approved" || status === "dispatched" ? "calculated" : status;
  flight.kot = status === "approved" || status === "dispatched" || status === "prepared" ? "confirmed" : flight.kot;
  flight.dispatch = status === "dispatched" ? "dispatched" : flight.dispatch;
  saveState();
  render();
  showToast(`${flight.flightNo} production updated to ${status}.`);
}

function approveKot() {
  calculateMeals(false);
  updateProduction(state.selectedFlight, "approved");
}

function saveDraft() {
  selectedFlight().kot = "in progress";
  saveState();
  showToast("Draft saved locally.");
  render();
}

function copyFirstToSecond() {
  state.kot.secondService = state.kot.firstService.map((row) => [...row]);
  saveState();
  showToast("First service meal choices copied to second service.");
  render();
}

function calculateMeals(shouldRender = true) {
  const flight = selectedFlight();
  flight.kot = "confirmed";
  flight.meal = "calculated";
  flight.production = flight.production === "pending" ? "in progress" : flight.production;
  saveState();
  if (shouldRender) {
    showToast("Meal counts calculated and stored locally.");
    render();
  }
}

function sendToKitchen() {
  calculateMeals(false);
  const flight = selectedFlight();
  flight.production = "pending";
  flight.dispatch = flight.dispatch === "scheduled" ? "pending" : flight.dispatch;
  saveState();
  showToast(`${flight.flightNo} sent to kitchen production board.`);
  setScreen("kitchen");
}

function openDisplayWindow(screen = "kitchen") {
  const url = `${window.location.origin}${window.location.pathname}?screen=${screen === "kitchen" ? "kitchen-display" : screen}`;
  window.open(url, `${screen}-display`, "width=1440,height=900");
  showToast("Separate display window opened.");
}

function generateChallan() {
  calculateMeals(false);
  const flight = selectedFlight();
  flight.kot = "confirmed";
  flight.meal = "calculated";
  flight.production = "approved";
  saveState();
  setScreen("challan-preview");
}

function lockChallan() {
  state.challanLocked = true;
  selectedFlight().dispatch = "dispatched";
  selectedFlight().production = "dispatched";
  saveState();
  render();
  window.print();
}

function generateInvoice() {
  state.invoice.status = "generated";
  state.invoice.number = state.invoice.number || `INV-${state.kot.challanNo}`;
  state.invoice.generatedAt = "15/06/2026 10:24";
  saveState();
  showToast(`${state.invoice.number} generated from challan ${state.kot.challanNo}.`);
  render();
}

function previewInvoice() {
  openInfoModal("Invoice Preview", [
    ["Invoice No.", state.invoice.number || "Auto on generation"],
    ["Airline", selectedFlight().airline],
    ["Challan No.", state.kot.challanNo],
    ["Status", badge(state.invoice.status)],
    ["Grand Total (USD)", "1,557.71"],
    ["Grand Total (NPR)", "233,839.79"]
  ]);
}

function downloadDemoDocument(type) {
  const content = type === "invoice" ? `Invoice ${state.invoice.number || "Draft"}\nChallan ${state.kot.challanNo}\nGrand Total USD 1,557.71` : `Challan ${state.kot.challanNo}\nFlight ${selectedFlight().flightNo}\nStatus ${selectedFlight().dispatch}`;
  const blob = new Blob([content], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${type}-${state.kot.challanNo}.txt`;
  link.click();
  URL.revokeObjectURL(url);
  showToast(`${type === "invoice" ? "Invoice" : "Challan"} demo document downloaded.`);
}

function resetDemo() {
  localStorage.removeItem(STORAGE_KEY);
  state = structuredClone(seed);
  normalizeState();
  render();
  showToast("Demo data reset.");
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function showToast(message) {
  document.querySelector(".toast")?.remove();
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;
  document.body.appendChild(toast);
  window.setTimeout(() => toast.remove(), 2600);
}

function openInfoModal(title, rows) {
  document.querySelector(".modal-backdrop")?.remove();
  document.body.insertAdjacentHTML("beforeend", `
    <div class="modal-backdrop" onclick="closeModal(event)">
      <div class="modal" role="dialog" aria-modal="true">
        <div class="modal-head"><h2 style="margin:0">${escapeHtml(title)}</h2><button class="btn icon-btn" onclick="closeModal()">×</button></div>
        <div class="modal-body">
          <div class="chart-header">
            ${rows.map(([label, value]) => `<div class="mini-card"><span class="muted">${escapeHtml(label)}</span><br><b>${value}</b></div>`).join("")}
          </div>
        </div>
        <div class="modal-foot"><span class="muted">Demo data is stored locally in this browser.</span><button class="btn green" onclick="closeModal()">Done</button></div>
      </div>
    </div>
  `);
}

function total(row) {
  return row.slice(1).reduce((sum, value) => sum + Number(value), 0);
}

function sumColumn(rows, index) {
  return rows.reduce((sum, row) => sum + Number(row[index]), 0);
}

function badge(text) {
  const normalized = String(text).toLowerCase().replace(/\s+/g, "-");
  const className = normalized.includes("progress") ? "progress" : normalized;
  return `<span class="badge ${className}">${text}</span>`;
}

function button(label, screen, extra = "") {
  return `<button class="nav-item ${isActiveNav(label, screen) ? "active" : ""} ${extra}" onclick="setScreen('${screen}')"><span class="nav-icon">${navIcon(label)}</span>${label}</button>`;
}

function isActiveNav(label, screen) {
  const activeLabels = {
    queue: "Flight Queue",
    kot: "KOT Entry",
    "kot-list": "KOT List",
    kitchen: "Kitchen Board",
    challan: "Challan",
    "challan-preview": "Challan Preview",
    invoice: "Invoice",
    "loading-maintenance": "Loading Chart",
    "loading-preview": "Loading Preview"
  };
  return state.screen === screen && activeLabels[state.screen] === label;
}

function navIcon(label) {
  const icons = {
    Dashboard: "DB",
    "Flight Queue": "FQ",
    "KOT Entry": "KE",
    "KOT List": "KL",
    "Challan Preview": "CP",
    Challan: "CH",
    "Dispatch List": "DL",
    "Flight Schedule": "FS",
    "Operational Report": "OR",
    "Meal Report": "MR",
    "Delivery Report": "DR",
    Airlines: "AL",
    Aircraft: "AC",
    "Menu Cycle": "MC",
    Ancillaries: "AN",
    "Special Meals": "SM",
    Users: "US",
    Configurations: "CF",
    "Kitchen Board": "KB",
    "Invoice": "IN",
    "Loading Chart": "LC",
    "Loading Preview": "LP"
  };
  return icons[label] || "--";
}

function layout(title, subtitle, body, mode = "operations") {
  return `
    <div class="app-shell">
      <aside class="sidebar">
        <div class="brand">
          <div class="brand-logos" aria-label="The Soaltee and Gate Gourmet">
            <img class="brand-logo soaltee-logo" src="659d29fe3627d_1704798718.png" alt="The Soaltee logo">
            <span class="brand-divider"></span>
            <img class="brand-logo gate-logo" src="gate-gourmet-logo-vector.svg" alt="Gate Gourmet logo">
          </div>
        </div>
        <div class="nav-scroll">
          <div class="nav-title">Operations</div>
          ${button("Flight Queue", "queue")}
          ${button("KOT Entry", "kot")}
          ${button("KOT List", "kot-list")}
          ${button("Challan Preview", "challan-preview")}
          ${button("Kitchen Board", "kitchen")}
          <div class="nav-title">Finance</div>
          ${button("Invoice", "invoice")}
          <div class="nav-title">Loading Charts</div>
          ${button("Loading Chart", "loading-maintenance")}
          ${button("Loading Preview", "loading-preview")}
        </div>
        <div class="version">Version 1.0.0<br>© 2026 Soaltee Gategourmet</div>
      </aside>
      <main class="main">
        <header class="topbar">
          <div class="title"><h1>${title}</h1><p>${subtitle}</p></div>
          <div class="top-meta">
            <span>15 Jun 2026 (Mon)</span>
            <span>10:24 AM</span>
            <span>Alerts 3</span>
            <span class="user-pill"><span class="avatar">OP</span><span>operations1<br><small>Operations</small></span></span>
          </div>
        </header>
        ${body}
      </main>
    </div>
  `;
}

function render() {
  const routes = {
    queue: renderQueue,
    kot: renderKot,
    "kot-list": renderKotList,
    kitchen: renderKitchen,
    "kitchen-display": renderKitchenDisplay,
    challan: renderChallanFull,
    "challan-preview": renderChallanPreview,
    invoice: renderInvoice,
    "loading-maintenance": renderLoadingMaintenance,
    "loading-preview": renderLoadingPreview
  };
  document.getElementById("app").innerHTML = (routes[state.screen] || renderQueue)();
}

function renderQueue() {
  const filters = state.queueFilters;
  const filteredFlights = state.flights.filter((flight) => {
    const statusMatch = filters.status === "All Status" || [flight.kot, flight.meal, flight.dispatch, flight.production].some((value) => value.toLowerCase() === filters.status.toLowerCase());
    const airlineMatch = filters.airline === "All Airlines" || flight.airline === filters.airline;
    const sectorMatch = filters.sector === "All Sectors" || flight.sector === filters.sector;
    const query = filters.search.trim().toLowerCase();
    const queryMatch = !query || `${flight.flightNo} ${flight.airline} ${flight.sector} ${flight.aircraft}`.toLowerCase().includes(query);
    return statusMatch && airlineMatch && sectorMatch && queryMatch;
  });
  const totals = state.flights.reduce((acc, flight) => {
    acc.j += flight.j;
    acc.y += flight.y;
    acc.tc += flight.tc;
    acc.cc += flight.cc;
    return acc;
  }, { j: 0, y: 0, tc: 0, cc: 0 });
  const body = `
    <section class="content">
      <div class="kpi-grid">
        ${kpi("FL", "Total Flights", "18", "Today")}
        ${kpi("PX", "Total Pax", "2,456", "Today", "green")}
        ${kpi("ML", "Total Meals", "2,812", "Today", "amber")}
        ${kpi("CR", "Total Crew (TC+CC)", "192", "Today", "purple")}
        ${kpi("ND", "Next Dispatch", "00:45", "FZ 576 (11:30)")}
        ${kpi("OT", "On Time", "16", "Flights", "green")}
        ${kpi("DL", "Delayed", "2", "Flights", "red")}
      </div>
      <div class="toolbar">
        <input class="field" value="15/06/2026" aria-label="Date">
        <select class="field" onchange="setQueueFilter('status', this.value)">${["All Status", "Pending", "Confirmed", "In Progress", "Scheduled", "Calculated", "Dispatched"].map((item) => `<option ${filters.status === item ? "selected" : ""}>${item}</option>`).join("")}</select>
        <select class="field" onchange="setQueueFilter('airline', this.value)">${["All Airlines", ...new Set(state.flights.map((flight) => flight.airline))].map((item) => `<option ${filters.airline === item ? "selected" : ""}>${item}</option>`).join("")}</select>
        <select class="field" onchange="setQueueFilter('sector', this.value)">${["All Sectors", ...new Set(state.flights.map((flight) => flight.sector))].map((item) => `<option ${filters.sector === item ? "selected" : ""}>${item}</option>`).join("")}</select>
        <input class="search" value="${escapeHtml(filters.search)}" placeholder="Search flight no, airline, sector..." oninput="state.queueFilters.search=this.value;saveState();filterRows(this.value)">
        <button class="btn" onclick="render()">Refresh</button>
        <button class="btn icon-btn" onclick="resetDemo()" title="Reset local demo data">RS</button>
      </div>
      <div class="table-wrap">
        <table id="flight-table">
          <thead>
            <tr>
              <th>STD</th><th>Flight No.</th><th>Airline</th><th>Sector</th><th>Aircraft</th>
              <th colspan="5" class="num">Pax on Board</th><th>Menu Cycle</th><th>KOT Status</th><th>Meal Status</th><th>Dispatch Status</th><th>Action</th>
            </tr>
            <tr><th></th><th></th><th></th><th></th><th></th><th class="num">J</th><th class="num">Y</th><th class="num">TC</th><th class="num">CC</th><th class="num">Total</th><th></th><th></th><th></th><th></th><th></th></tr>
          </thead>
          <tbody>
            ${filteredFlights.map(queueRow).join("") || `<tr><td colspan="15" class="empty-state">No flights match the selected filters.</td></tr>`}
            <tr class="total-row"><td colspan="5">Total Flights: 18</td><td class="num">${totals.j}</td><td class="num">${totals.y.toLocaleString()}</td><td class="num">${totals.tc}</td><td class="num">${totals.cc}</td><td class="num">${(totals.j + totals.y + totals.tc + totals.cc).toLocaleString()}</td><td colspan="5"></td></tr>
          </tbody>
        </table>
      </div>
      <div class="footer-note">Note: Times are local (KTM). Click Open KOT to enter actual counts and generate Gate Pass Cum Delivery Challan.</div>
    </section>
  `;
  return layout("Operations Flight Queue", "Manage KOT, Meal Production & Delivery", body);
}

function kpi(icon, label, value, sub, tone = "blue") {
  const color = tone === "green" ? "#159447" : tone === "amber" ? "#e28b16" : tone === "red" ? "#b91c1c" : tone === "purple" ? "#7633bd" : "#0b66bf";
  return `<div class="kpi"><div class="kpi-icon" style="color:${color}">${icon}</div><div><small>${label}</small><strong style="color:${color}">${value}</strong><span>${sub}</span></div></div>`;
}

function queueRow(flight) {
  return `
    <tr data-search="${`${flight.flightNo} ${flight.airline} ${flight.sector}`.toLowerCase()}">
      <td class="blue-text">${flight.std}</td>
      <td><strong>${flight.flightNo}</strong></td>
      <td><span class="logo-airline ${flight.airlineClass}">${flight.airline}</span></td>
      <td>${flight.sector}</td>
      <td>${flight.aircraft}</td>
      <td class="num">${flight.j}</td><td class="num">${flight.y}</td><td class="num">${flight.tc}</td><td class="num">${flight.cc}</td><td class="num"><strong>${flight.j + flight.y + flight.tc + flight.cc}</strong></td>
      <td>${flight.menu}</td>
      <td>${badge(flight.kot)}</td>
      <td>${badge(flight.meal)}</td>
      <td>${badge(flight.dispatch)}</td>
      <td><button class="btn green" onclick="setSelectedFlight('${flight.flightNo}', 'kot')">${flight.kot === "confirmed" ? "View KOT" : "Open KOT"}</button> <button class="btn icon-btn" onclick="openFlightModal('${flight.flightNo}')">⋮</button></td>
    </tr>
  `;
}

function filterRows(value) {
  const query = value.toLowerCase();
  document.querySelectorAll("#flight-table tbody tr[data-search]").forEach((row) => {
    row.style.display = row.dataset.search.includes(query) ? "" : "none";
  });
}

function renderKot() {
  const flight = selectedFlight();
  const body = `
    <div class="flight-header">
      <div><button class="btn" onclick="setScreen('queue')">Back to Flight List</button></div>
      <div><strong>${flight.flightNo}</strong> ${badge(flight.kot)}</div>
      <div><span class="logo-airline ${flight.airlineClass}">${flight.airline}</span></div>
      <div><label>Sector</label><b>${flight.sector}</b></div>
      <div><label>STD</label><b>${flight.std}</b></div>
      <div><label>Aircraft</label><b>${flight.aircraft}</b></div>
      <div><label>Reg. No.</label><b>${flight.reg}</b></div>
    </div>
    <div class="steps">${["Flight Info", "Pax Load", "Meal Choices", "Special Meals", "Ancillaries", "Review & Summary"].map((item, index) => `<div class="step ${index === 0 ? "active" : ""}"><b>${index + 1}</b>${item}</div>`).join("")}</div>
    <section class="content">
      <div class="grid-2">
        <div>
          <div class="grid-main">
            <div>
              <div class="panel">
                <h2>Flight Information</h2>
                <div class="form-grid">
                  ${formField("Date *", state.kot.date, "state.kot.date=this.value;saveState()")}
                  ${formField("Flight No. *", flight.flightNo)}
                  ${formField("Airline", flight.airline)}
                  ${formField("Registration", flight.reg, "selectedFlight().reg=this.value;saveState()")}
                  ${selectField("Aircraft Type *", flight.aircraft)}
                  ${formField("Aircraft Configuration", flight.config, "selectedFlight().config=this.value;saveState()")}
                  ${formField("Sector *", flight.sector, "selectedFlight().sector=this.value;saveState()")}
                  ${selectField("Menu Cycle *", flight.menu)}
                </div>
                <div class="form-grid two" style="margin-top:14px">
                  ${formField("Uplift: 1st Service", state.kot.firstUplift, "state.kot.firstUplift=this.value;saveState()")}
                  ${formField("Uplift: 2nd Service", state.kot.secondUplift, "state.kot.secondUplift=this.value;saveState()")}
                </div>
              </div>
              <div class="panel">
                <h2>Passenger Load</h2>
                ${editableLoadTable()}
              </div>
              <div class="panel">
                <h2>Special Meals (If Any)</h2>
                ${specialMealsTable(true)}
                <label class="muted" style="display:block;margin-top:16px">Remarks / Instructions</label>
                <textarea id="remarks" onchange="state.kot.remarks=this.value;saveState()">${state.kot.remarks}</textarea>
              </div>
            </div>
            <div>
              <div class="panel">
                <div style="display:flex;justify-content:space-between;gap:12px;align-items:center"><h2>Meal Choices <span class="muted">(Two Services)</span></h2><button class="btn" onclick="copyFirstToSecond()">Copy 1st to 2nd</button></div>
                ${mealTable("1st Service", state.kot.firstService, true, "firstService")}
                ${mealTable("2nd Service", state.kot.secondService, true, "secondService")}
              </div>
              <div class="panel">
                <div style="display:flex;justify-content:space-between;gap:12px;align-items:center"><h2>Ancillaries <span class="muted">(Auto Calculated)</span></h2><button class="btn green" onclick="calculateMeals()">Auto Calculate</button></div>
                ${ancillaryTable(3)}
                <button class="btn" onclick="openFlightModal()">View All Ancillaries</button>
              </div>
            </div>
          </div>
        </div>
        <aside>
          ${sidePanel("Key Timings", [["Hot Meal Dish Out", "13:15"], ["Cold Meal Prep.", "13:00"], ["Dispatch Time", "14:45"]])}
          ${sidePanel("Other Info", [["Loading Bay", "02"], ["Gate Type", "Wide Body"], ["Uplift Type", "Full Uplift"], ["Prepared By", "operations1"], ["Prepared On", "15/06/2026 10:24"]])}
          <div class="panel">
            <h2>Quick Actions</h2>
            <div class="actions-stack">
              <button class="btn navy" onclick="saveDraft()">Save Draft</button>
              <button class="btn green" onclick="approveKot()">Calculate Meals</button>
              <button class="btn blue" onclick="generateChallan()">Generate Gate Pass Cum Delivery Challan</button>
              <button class="btn green" onclick="setScreen('challan-preview')">Preview Challan</button>
              <button class="btn green" onclick="window.print()">Print Challan</button>
              <button class="btn" onclick="sendToKitchen()">Send To Kitchen</button>
            </div>
          </div>
        </aside>
      </div>
      <div class="footer-note">Note: Please verify all counts before generating Gate Pass Cum Delivery Challan.</div>
    </section>
  `;
  return layout("KOT Entry", "Kitchen Order Ticket", body);
}

function formField(label, value, changeHandler = "") {
  return `<label><span class="muted">${label}</span><input class="input" value="${escapeHtml(value)}" ${changeHandler ? `onchange="${changeHandler}"` : ""}></label>`;
}

function selectField(label, value) {
  const handler = label.includes("Aircraft") ? "selectedFlight().aircraft=this.value;saveState();render()" : label.includes("Menu") ? "selectedFlight().menu=this.value;saveState();render()" : "";
  const options = label.includes("Aircraft") ? ["B737-800", "A320neo", "A321", "A330", "B777-300ER"] : ["CYCLE-A", "CYCLE-B"];
  return `<label><span class="muted">${label}</span><select class="select" ${handler ? `onchange="${handler}"` : ""}>${options.map((option) => `<option ${option === value ? "selected" : ""}>${option}</option>`).join("")}</select></label>`;
}

function editableLoadTable() {
  return `
    <table class="compact-table">
      <thead><tr><th>Pax on Board</th><th class="num">BCL</th><th class="num">PYCL</th><th class="num">EYCL</th><th class="num">C/C (TC)</th><th class="num">C/A (CC)</th><th class="num">Total</th></tr></thead>
      <tbody>
        ${state.kot.loads.map((row, r) => `<tr><td>${row[0]}${r === 2 || r === 3 ? " *" : ""}</td>${row.slice(1).map((value, c) => `<td class="num"><input class="mini-input" value="${value}" onchange="state.kot.loads[${r}][${c + 1}]=Number(this.value)||0;saveState();render()"></td>`).join("")}<td class="num"><strong>${total(row)}</strong></td></tr>`).join("")}
      </tbody>
    </table>
  `;
}

function mealTable(title, rows, editable = false, key = "") {
  return `
    <div style="margin-bottom:14px">
      <div class="badge ${title.includes("1st") ? "confirmed" : "progress"}" style="margin-bottom:8px">${title}</div>
      <table class="compact-table">
        <thead><tr><th>Food</th><th class="num">BCL</th><th class="num">PYCL</th><th class="num">EYCL</th><th class="num">C/C (TC)</th><th class="num">C/A (CC)</th><th class="num">Total</th></tr></thead>
        <tbody>
          ${rows.map((row, r) => `<tr><td>${row[0]}</td>${row.slice(1).map((value, c) => `<td class="num">${editable ? `<input class="mini-input" value="${value}" onchange="state.kot.${key}[${r}][${c + 1}]=Number(this.value)||0;saveState();render()">` : value}</td>`).join("")}<td class="num"><strong>${total(row)}</strong></td></tr>`).join("")}
          <tr class="total-row"><td>Total</td>${[1,2,3,4,5].map((index) => `<td class="num">${sumColumn(rows, index)}</td>`).join("")}<td class="num">${rows.reduce((sum, row) => sum + total(row), 0)}</td></tr>
        </tbody>
      </table>
    </div>
  `;
}

function specialMealsTable(editable = false) {
  const keys = Object.keys(state.kot.specialMeals);
  const values = Object.values(state.kot.specialMeals);
  return `
    <table class="compact-table">
      <thead><tr>${keys.map((key) => `<th class="num">${key}</th>`).join("")}<th class="num">Total</th></tr></thead>
      <tbody><tr>${keys.map((key) => `<td class="num">${editable ? `<input class="mini-input" value="${state.kot.specialMeals[key]}" onchange="state.kot.specialMeals.${key}=Number(this.value)||0;saveState();render()">` : state.kot.specialMeals[key]}</td>`).join("")}<td class="num">${values.reduce((a, b) => a + b, 0)}</td></tr></tbody>
    </table>
  `;
}

function ancillaryTable(limit = state.kot.ancillaries.length) {
  const rows = state.kot.ancillaries.slice(0, limit);
  return `
    <table class="compact-table">
      <thead><tr><th>Item</th><th>Unit</th><th class="num">1st Service</th><th class="num">2nd Service</th><th class="num">Total</th></tr></thead>
      <tbody>${rows.map((row) => `<tr><td>${row[0]}</td><td>${row[1]}</td><td class="num">${row[2]}</td><td class="num">${row[3]}</td><td class="num">${row[2] + row[3]}</td></tr>`).join("")}</tbody>
    </table>
  `;
}

function sidePanel(title, rows) {
  return `<div class="panel"><h2>${title}</h2><div class="info-list">${rows.map(([label, value]) => `<div class="info-row"><span>${label}</span><strong>${value}</strong></div>`).join("")}</div></div>`;
}

function renderKotList() {
  const body = `
    <section class="content">
      <div class="toolbar">
        <input class="search" placeholder="Search KOT, flight, airline...">
        <button class="btn green" onclick="setScreen('kot')">Open Selected KOT</button>
        <button class="btn" onclick="setScreen('kitchen')">Kitchen Board</button>
      </div>
      <div class="table-wrap">
        <table>
          <thead><tr><th>KOT No.</th><th>Flight</th><th>Airline</th><th>Sector</th><th>STD</th><th>Status</th><th>Production</th><th>Action</th></tr></thead>
          <tbody>${state.flights.map((flight, index) => `<tr><td>KOT-${String(index + 1).padStart(4, "0")}</td><td>${flight.flightNo}</td><td>${flight.airline}</td><td>${flight.sector}</td><td>${flight.std}</td><td>${badge(flight.kot)}</td><td>${badge(flight.production)}</td><td><button class="btn green" onclick="setSelectedFlight('${flight.flightNo}', 'kot')">Open</button></td></tr>`).join("")}</tbody>
        </table>
      </div>
    </section>`;
  return layout("KOT List", "Track kitchen order tickets", body);
}

function renderKitchen() {
  const body = `
    <section class="content">
      <div class="toolbar">
        <input class="search" placeholder="Search kitchen tickets..." oninput="filterTickets(this.value)">
        <button class="btn" onclick="render()">Refresh Board</button>
        <button class="btn green" onclick="approveKot()">Approve Current KOT</button>
        <button class="btn" onclick="openDisplayWindow('kitchen')">Open Display Window</button>
      </div>
      <div class="kitchen-board" id="ticket-board">
        ${state.flights.slice(0, 6).map(kitchenTicket).join("")}
      </div>
    </section>
  `;
  return layout("Kitchen Production Board", "Live KOT display for meal preparation", body);
}

function renderKitchenDisplay() {
  const activeFlights = state.flights.filter((flight) => flight.production !== "dispatched").slice(0, 9);
  const body = `
    <main class="display-screen">
      <header class="display-header">
        <div>
          <div class="display-kicker">Soaltee Gategourmet</div>
          <h1>Kitchen Production Display</h1>
        </div>
          <div class="display-clock">15 Jun 2026 · 10:24 AM</div>
      </header>
      <section class="display-summary">
        <div><b>${activeFlights.length}</b><span>Active KOT</span></div>
        <div><b>${activeFlights.filter((flight) => flight.production === "pending").length}</b><span>To Prepare</span></div>
        <div><b>${activeFlights.filter((flight) => flight.production === "in progress").length}</b><span>In Progress</span></div>
        <div><b>${activeFlights.filter((flight) => flight.production === "prepared" || flight.production === "approved").length}</b><span>Ready / Approved</span></div>
      </section>
      <section class="display-work-grid">
        ${activeFlights.map(displayTicket).join("") || `<div class="display-empty">No active tickets</div>`}
      </section>
    </main>
  `;
  return body;
}

function displayTicket(flight) {
  const pax = flight.j + flight.y + flight.tc + flight.cc;
  return `
    <article class="display-ticket">
      <div class="display-ticket-top">
        <div>
          <h2>${flight.flightNo}</h2>
          <p>${flight.airline} · ${flight.sector}</p>
        </div>
        <div class="display-ticket-meta">
          <span class="display-time">${flight.std}</span>
          ${badge(flight.production)}
        </div>
      </div>
      <div class="display-metrics">
        <div><span>Pax</span><b>${pax}</b></div>
        <div><span>Menu</span><b>${flight.menu}</b></div>
        <div><span>Aircraft</span><b>${flight.aircraft}</b></div>
        <div><span>Dispatch</span><b>14:45</b></div>
        <div><span>1st Svc</span><b>283</b></div>
        <div><span>2nd Svc</span><b>276</b></div>
        <div><span>Special</span><b>6</b></div>
      </div>
      <div class="display-actions">
        <button onclick="updateProduction('${flight.flightNo}', 'in progress')">Start</button>
        <button onclick="updateProduction('${flight.flightNo}', 'prepared')">Ready</button>
        <button onclick="updateProduction('${flight.flightNo}', 'approved')">Approve</button>
        <button onclick="updateProduction('${flight.flightNo}', 'dispatched')">Dispatch</button>
      </div>
    </article>
  `;
}

function kitchenTicket(flight) {
  return `
    <article class="ticket" data-search="${`${flight.flightNo} ${flight.airline} ${flight.sector} ${flight.production}`.toLowerCase()}">
      <div class="ticket-head">
        <div><h3>${flight.flightNo}</h3><div class="muted">${flight.airline} · ${flight.sector}</div></div>
        ${badge(flight.production)}
      </div>
      <div class="ticket-grid">
        <div class="mini-card"><b>STD</b><br>${flight.std}</div>
        <div class="mini-card"><b>Aircraft</b><br>${flight.aircraft}</div>
        <div class="mini-card"><b>Pax</b><br>${flight.j + flight.y + flight.tc + flight.cc}</div>
        <div class="mini-card"><b>Menu</b><br>${flight.menu}</div>
      </div>
      <table class="compact-table">
        <tbody>
          <tr><td>First Service Meals</td><td class="num"><b>283</b></td></tr>
          <tr><td>Second Service Meals</td><td class="num"><b>276</b></td></tr>
          <tr><td>Special Meals</td><td class="num"><b>6</b></td></tr>
          <tr><td>Dispatch Time</td><td class="num"><b>14:45</b></td></tr>
        </tbody>
      </table>
      <div class="production-actions" style="margin-top:12px">
        ${["pending", "in progress", "prepared", "approved", "dispatched"].map((status) => `<button class="btn ${status === "approved" ? "green" : ""}" onclick="updateProduction('${flight.flightNo}', '${status}')">${status}</button>`).join("")}
      </div>
    </article>
  `;
}

function filterTickets(value) {
  const query = value.toLowerCase();
  document.querySelectorAll("#ticket-board .ticket").forEach((ticket) => {
    ticket.style.display = ticket.dataset.search.includes(query) ? "" : "none";
  });
}

function challanPaper(full = false) {
  const flight = selectedFlight();
  return `
    <div class="challan-paper">
      <div class="paper-head">
        <div>
          <div class="brand-text" style="font-size:24px">The Soaltee <span class="brand-sub">Gategourmet</span></div>
          <p><b>The Soaltee Hotel Limited</b><br>Tahachal, Kathmandu, Nepal<br>Tel: +977-1-4113671/4/113697<br>VAT No.: 500052786 | PAN No.: 601052900</p>
        </div>
        <div class="paper-title">GATE PASS CUM DELIVERY CHALLAN<br>FOR MEAL ON BOARD</div>
        <div class="serial">S. No.: <strong>${state.kot.challanNo}</strong><div class="barcode"></div><div>Date: ${state.kot.date}</div></div>
      </div>
      <div class="paper-grid">
        <table class="compact-table"><tbody>
          ${[["Flight No.", flight.flightNo], ["Registration", flight.reg], ["A/C Type", flight.aircraft], ["A/C Configuration", flight.config], ["Sector", flight.sector], ["Cycle", flight.menu], ["1st Service Uplift", state.kot.firstUplift], ["2nd Service Uplift", state.kot.secondUplift]].map(infoRow).join("")}
        </tbody></table>
        ${loadTableReadOnly()}
      </div>
      <div class="paper-grid equal">
        ${mealTable("1st Service", state.kot.firstService)}
        ${mealTable("2nd Service", state.kot.secondService)}
      </div>
      ${specialMealsTable()}
      <div style="margin-top:12px">${ancillaryTable(full ? state.kot.ancillaries.length : 10)}</div>
      <div class="paper-grid three" style="margin-top:12px">
        <div class="panel"><h3>Remarks / Instructions</h3><p>${state.kot.remarks.replace(/\n/g, "<br>")}</p></div>
        ${sidePanel("Key Timings", [["Hot Meal Dish Out", "13:15"], ["Cold Meal Preparation", "13:00"], ["Dispatch Time", "14:45"]])}
        ${sidePanel("Other Information", [["Loading Bay", "02"], ["Gate Type", "Wide Body"], ["Uplift Type", "Full Uplift"], ["Dispatch Vehicle", "Top Up Van"], ["Total Trolleys / Carts", "8"], ["Total Gross Weight", "560 KG"]])}
      </div>
      <div class="signature-grid">
        ${["Security Check<br>Soaltee Gategourmet Ktm.", "Sup. Soaltee Gategourmet Ktm.<br>ID No.", "Airline Rep.<br>ID No.", "Purser / Purserette<br>ID No."].map((title) => `<div class="signature-box"><b>${title}</b><br><br>Name: ............................<br><br>Sign: ............................<br><br>Time: ............................</div>`).join("")}
      </div>
      <div class="copy-footer">1. WHITE COPY: BILLING &nbsp;&nbsp; 2. BLUE COPY: ACCOUNT &nbsp;&nbsp; 3. YELLOW COPY: SECURITY &nbsp;&nbsp; 4. PINK COPY: OPERATIONS &nbsp;&nbsp; 5. GREEN COPY: AIR REP. &nbsp;&nbsp; 6. YELLOW COPY: PURSER<br>*** THANK YOU ***</div>
    </div>
  `;
}

function infoRow([label, value]) {
  return `<tr><td><b>${label}</b></td><td>${value}</td></tr>`;
}

function loadTableReadOnly() {
  return `
    <table class="compact-table">
      <thead><tr><th colspan="6" class="num">Pax on Board</th></tr><tr><th></th><th>BCL</th><th>PYCL</th><th>EYCL</th><th>C/C (TC)</th><th>C/A (CC)</th></tr></thead>
      <tbody>${state.kot.loads.map((row) => `<tr><td>${row[0]}</td>${row.slice(1).map((value) => `<td class="num">${value}</td>`).join("")}</tr>`).join("")}</tbody>
    </table>
  `;
}

function renderChallanFull() {
  return layout("Gate Pass Cum Delivery Challan", "Printable meal on board document", `<section class="content">${challanPaper(true)}</section>`);
}

function renderChallanPreview() {
  const body = `
    <section class="content">
      <div class="toolbar">
        <button class="btn" onclick="setScreen('kot')">Back to KOT Entry</button>
        <span style="flex:1"></span>
        <button class="btn ${state.challanLocked ? "locked" : ""}" onclick="setScreen('kot')">Edit KOT</button>
        <button class="btn" onclick="downloadDemoDocument('challan')">Download PDF</button>
        <button class="btn green" onclick="lockChallan()">Print Challan</button>
      </div>
      <div class="notice"><span class="check">✓</span><div><b>Preview Generated Successfully</b><br><span class="muted">Please verify all details carefully. ${state.challanLocked ? "This document is locked from editing." : "You can go back and edit KOT if changes are required."}</span></div></div>
      <div class="preview-layout">
        ${challanPaper(false)}
        <aside>
          ${sidePanel("Document Status", [["KOT Status", badge("confirmed")], ["Meal Status", badge("calculated")], ["Ancillary Status", badge("calculated")], ["Last Updated", "15/06/2026 10:24"], ["Updated By", "operations1"]])}
          <div class="panel"><h2>Validation Checklist</h2><div class="status-list">${["Passenger Count Verified", "Meal Count Verified", "Special Meals Verified", "Ancillary Count Verified", "Dispatch Time Verified", "Uplift Details Verified"].map((item) => `<div class="check-line"><span class="check">✓</span>${item}</div>`).join("")}</div></div>
          <div class="notice">After printing, the document cannot be modified. Please ensure all details are correct.</div>
          <div class="panel"><h2>Print Options</h2>${["Paper Size", "Orientation", "Copies"].map((label, index) => `<label><span class="muted">${label}</span><input class="input" value="${index === 0 ? "A4" : index === 1 ? "Portrait" : "1"}"></label><br>`).join("")}<label><input type="checkbox" checked> Fit to Page</label><br><label><input type="checkbox" checked> Show Barcode</label></div>
        </aside>
      </div>
    </section>`;
  return layout("Challan Preview", "Preview Gate Pass Cum Delivery Challan", body);
}

function renderInvoice() {
  const items = invoiceItems();
  const subtotal = items.reduce((sum, item) => sum + item.qty * item.rate, 0);
  const tax = subtotal * 0.1;
  const totalValue = subtotal + tax;
  const body = `
    <section class="content">
      <div class="toolbar">
        <button class="btn" onclick="setScreen('challan-preview')">Back to Invoice Queue</button>
        <span style="flex:1"></span>
        <button class="btn" onclick="showToast('Invoice draft saved locally.')">Save Draft</button>
        <button class="btn" onclick="previewInvoice()">Preview Invoice</button>
        <button class="btn green" onclick="generateInvoice()">Generate Invoice</button>
      </div>
      <div class="invoice-layout">
        <div>
          <div class="panel"><div class="chart-header">${[
            ["Airline", "FlyDubai"], ["Flight Date", "15/06/2026"], ["Currency", "USD"], ["Sector", "KTM - DXB"], ["Challan No.", "32496"], ["Exchange Rate (NPR)", "150.35"], ["Flight No.", "FZ576"], ["Std. Time (STD)", "11:30"], ["Invoice No.", state.invoice.number || "Auto (Will be generated)"]
          ].map(([a,b]) => `<div class="info-row"><span>${a}</span><strong>${b}</strong></div>`).join("")}</div></div>
          <div class="panel"><div style="display:flex;justify-content:space-between;align-items:center"><h2>Billable Items</h2><div><button class="btn">Add Charge</button> <button class="btn">Edit Rate</button></div></div>${invoiceTable(items)}</div>
          <div class="paper-grid three">
            <div class="panel"><h2>Billing Remarks</h2><textarea>Thank you for your business.</textarea></div>
            <div class="panel"><h2>Tax Details</h2><table class="compact-table"><tbody><tr><td>VAT</td><td>10.00</td><td>${subtotal.toFixed(2)}</td><td>${tax.toFixed(2)}</td></tr><tr class="total-row"><td colspan="3">Total Tax</td><td>${tax.toFixed(2)}</td></tr></tbody></table></div>
            ${sidePanel("Payment Terms", [["Payment Terms", "30 Days"], ["Due Date", "15/07/2026"], ["Payment Currency", "USD"], ["Bank Details", "Soaltee Hotel Ltd.<br>Nabil Bank Limited"]])}
          </div>
          <div class="paper-grid three">
            <div class="panel"><h2>Attachments</h2><div class="notice">Drag and drop files here or click to upload<br><span class="muted">Max file size 5MB, PDF, JPG, PNG</span></div></div>
            <div class="panel"><h2>Internal Notes</h2><textarea placeholder="Write internal note here..."></textarea></div>
            <div class="panel"><h2>Action Buttons</h2><div class="actions-stack"><button class="btn" onclick="showToast('Invoice draft saved locally.')">Save Draft</button><button class="btn" onclick="previewInvoice()">Preview Invoice</button><button class="btn green" onclick="generateInvoice()">Generate Invoice</button><button class="btn" onclick="window.print()">Print Invoice</button><button class="btn" onclick="downloadDemoDocument('invoice')">Download PDF</button><button class="btn" onclick="showToast('Email invoice action queued for demo.')">Email Invoice</button></div></div>
          </div>
        </div>
        <aside>
          <div class="panel"><h2>Invoice Summary</h2><div class="summary-box"><div class="summary-line"><span>Sub Total (USD)</span><b>${subtotal.toFixed(2)}</b></div><div class="summary-line"><span>Taxable Amount (USD)</span><b>${subtotal.toFixed(2)}</b></div><div class="summary-line"><span>Tax (10%)</span><b>${tax.toFixed(2)}</b></div><div class="summary-line summary-total"><span>Grand Total (USD)</span><b>${totalValue.toFixed(2)}</b></div></div></div>
          <div class="panel"><h2>Amount in NPR @ 150.35</h2><div class="summary-total">Grand Total (NPR) <b style="float:right">${(totalValue * 150.35).toLocaleString(undefined, { maximumFractionDigits: 2 })}</b></div></div>
          <div class="panel"><h2>Validation Status</h2><div class="status-list">${["Challan Approved", "Rates Available", "All Billable Items Priced", "Tax Applied", "Currency Converted", state.invoice.status === "generated" ? "Invoice Generated" : "Invoice Ready"].map((item) => `<div class="check-line"><span class="check">✓</span>${item}</div>`).join("")}</div></div>
          <div class="panel"><h2>Revenue Check</h2>${sidePanel("", [["Expected Value (USD)", totalValue.toFixed(2)], ["Generated Value (USD)", totalValue.toFixed(2)], ["Variance", "0.00"], ["Status", "✓ Matched"]])}</div>
        </aside>
      </div>
    </section>`;
  return layout("Invoice Generation", "Create Invoice from Delivery Challan", body, "finance");
}

function invoiceItems() {
  return [
    ["MEAL-TRAY-SETUP", "EYCL Tray Setup", "Pax", 167, 2.84],
    ["MEAL-NV", "EYCL Main Meal - NV", "Pax", 100, 3.80],
    ["MEAL-VEG", "EYCL Main Meal - Veg", "Pax", 67, 3.20],
    ["MEAL-SPML", "EYCL Main Meal - SPML", "Pax", 10, 8.64],
    ["CREW-SALAD", "Crew Salad - CY 2", "Pax", 1, 3.35],
    ["CREW-BREAD", "Crew Bread Selection", "Pax", 4, 1.40],
    ["CREW-MM1-RM", "Crew MM1 (Red Meat) - CY 2", "Pax", 2, 4.40],
    ["CREW-MM2-CHK", "Crew MM2 (Chicken) - CY 2", "Pax", 2, 4.17],
    ["CREW-SANDWICH", "Crew Sandwich - NV CY-2", "Pax", 3, 2.60],
    ["ICE-CUBE", "Ice Cube", "Kg", 10, 2.00],
    ["CLING-WRAP", "Plastic Cling Wrap", "Roll", 177, 0.08],
    ["TRANS-HILOADER", "Transportation Hi-Loader", "Trip", 1, 100.00],
    ["HANDLING-CHG", "Handling Charge", "No.", 1, 50.00],
    ["EQUIP-CLEAN", "Equipment Cleaning Charge", "No.", 1, 50.00]
  ].map(([code, desc, uom, qty, rate]) => ({ code, desc, uom, qty, rate }));
}

function invoiceTable(items) {
  return `<table class="compact-table"><thead><tr><th>S.No.</th><th>Item Code</th><th>Description</th><th>UOM</th><th class="num">Quantity</th><th class="num">Rate (USD)</th><th class="num">Amount (USD)</th><th class="num">Tax %</th><th class="num">Tax Amount</th><th class="num">Total</th></tr></thead><tbody>${items.map((item, i) => {
    const amount = item.qty * item.rate;
    const tax = amount * .1;
    return `<tr><td>${i + 1}</td><td>${item.code}</td><td>${item.desc}</td><td>${item.uom}</td><td class="num">${item.qty}</td><td class="num">${item.rate.toFixed(2)}</td><td class="num">${amount.toFixed(2)}</td><td class="num">10</td><td class="num">${tax.toFixed(2)}</td><td class="num">${(amount + tax).toFixed(2)}</td></tr>`;
  }).join("")}</tbody></table>`;
}

function renderLoadingMaintenance() {
  const body = `
    <section class="content">
      <div class="toolbar"><button class="btn" onclick="setScreen('queue')">Back to Meal Loading Chart List</button><span style="flex:1"></span><button class="btn" onclick="setScreen('loading-preview')">Preview Loading Matrix</button><button class="btn">Print Loading Chart</button><button class="btn green">Save</button><button class="btn">Cancel</button></div>
      <div class="panel"><h2>Chart Header</h2><div class="chart-header">${["Airline *|FlyDubai", "Aircraft Type|B737-800", "Day of Ops|1 2 3 4 5 6 7", "Effective From|15/06/2026", "Flight No. *|FZ576", "Meal Time *|05:10", "Chart Code *|MLC-FZ576-15062026-03", "Effective To *|24/08/2026", "Sector *|KTM - DXB", "Meal Type *|Hot Breakfast", "Version *|3", "Notes|FlyDubai Hot Breakfast MLC"].map((item) => {
        const [label, value] = item.split("|");
        return label === "Day of Ops" ? `<label><span class="muted">${label}</span><div class="day-pills"><b>1</b><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span></div></label>` : formField(label, value);
      }).join("")}</div></div>
      <div class="panel"><div style="display:flex;justify-content:space-between;align-items:center"><h2>Meal Loading Ratio Details</h2><div><button class="btn">Add Row</button> <button class="btn danger">Delete Row</button> <button class="btn">Import from Template</button></div></div>${ratioTable()}</div>
      <div class="paper-grid">
        <div class="panel"><h2>Ratio Type Guide</h2><p><b>1 : 1 (Per Pax)</b> = Item quantity increases one by one with each passenger.</p><p><b>J (Business)</b> = Quantity based on Business Class ratio.</p><p><b>W / Y</b> = Quantity based on cabin class ratio.</p></div>
        ${sidePanel("Summary", [["Total Items", "10"], ["Service", "1"], ["Meal Time", "Hot Breakfast"], ["Aircraft Capacity", "189"], ["Chart Status", badge("confirmed")]])}
      </div>
    </section>`;
  return layout("Meal Loading Chart Maintenance", "Create & maintain meal loading chart ratios", body);
}

function loadingRows() {
  return [
    ["DS 010187", "SEASONAL FRUIT CUT CUBE BOWL 120GM", "Bowl", "1 : 1 (Per Pax)", "1:1"],
    ["DS 010528", "MIX YOGHURT GRANOLA APPLE", "Cup", "1 : 1 (Per Pax)", "1:1"],
    ["DS 010523", "MUSHROOM AND CHEESE OMELETTE KTM", "Pcs", "J (Business)", "JH150"],
    ["DS 010150", "POTATOES KTM", "Pcs", "J (Business)", "JH150"],
    ["DS 010186", "VERMICELLI UTTAPAM KTM", "Pcs", "J (Business)", "JH150"],
    ["DS 010122", "CROISSANT 30 GM", "Pcs", "1 : 1 (Per Pax)", "1:1"],
    ["DS 010123", "SOFT ROLL 35 GM", "Pcs", "1 : 1 (Per Pax)", "1:1"],
    ["DS 010261", "BUTTER PORTION JC", "Pcs", "1 : 1 (Per Pax)", "1:1"],
    ["DS 010351", "JAM PORTION JC", "Pcs", "1 : 1 (Per Pax)", "1:1"],
    ["TS 090002", "JC TSU", "Set", "1 : 1 (Per Pax)", "1:1"]
  ];
}

function ratioTable() {
  return `<table><thead><tr><th>Seq. No.</th><th>Service Seq.</th><th>Service Type</th><th>Dish Code</th><th>Dish Name</th><th>Unit</th><th>Ratio Type</th><th>Ratio Value</th><th>Min Pax</th><th>Max Pax</th><th>Remarks</th><th>Actions</th></tr></thead><tbody>${loadingRows().map((row, i) => `<tr><td>${i + 1}</td><td>1</td><td>Hot Breakfast</td><td>${row[0]}</td><td>${row[1]}</td><td>${row[2]}</td><td><select class="select"><option>${row[3]}</option></select></td><td><input class="input" value="${row[4]}"></td><td>1</td><td>9999</td><td>${row[4] === "JH150" ? "JH150 = 6 Pcs" : "Per Pax"}</td><td><button class="btn">Edit</button></td></tr>`).join("")}</tbody></table>`;
}

function renderLoadingPreview() {
  const points = [1, 2, 3, 4, 5, 10, 20, 30, 50, 100, 150, 180, 189];
  const body = `
    <section class="content">
      <div class="toolbar"><button class="btn" onclick="setScreen('loading-maintenance')">Back to Meal Loading Chart</button><span style="flex:1"></span><button class="btn">Download PDF</button><button class="btn">Print Chart</button><button class="btn">Export to Excel</button></div>
      <div class="panel"><div class="chart-header">${[["Airline", "FlyDubai"], ["Aircraft Type", "B737-800"], ["Chart Code", "MLC-FZ576-15062026-03"], ["Effective From", "15/06/2026"], ["Flight No.", "FZ576"], ["Meal Type", "Hot Breakfast"], ["Version", "3"], ["Effective To", "24/08/2026"], ["Sector", "KTM - DXB"], ["Meal Time", "05:10"]].map(([a,b]) => `<div class="info-row"><span>${a}</span><b>${b}</b></div>`).join("")}</div></div>
      <div class="panel"><div class="tabs"><button class="active">All Classes</button><button>Business (J)</button><button>Premium Economy (W)</button><button>Economy (Y)</button><button>Crew</button></div><div class="info-row"><span>Aircraft Capacity (Total Pax)</span><b>189</b></div></div>
      <div class="matrix-page">
        <div class="panel"><h2>Loading Matrix (Quantity Per Pax)</h2><div class="table-wrap"><table><thead><tr><th>Dish Code</th><th>Dish Name</th><th>Unit</th><th>Ratio Type / Value</th>${points.map((p) => `<th class="num">${p}</th>`).join("")}</tr></thead><tbody>${loadingRows().map((row) => `<tr><td>${row[0]}</td><td>${row[1]}</td><td>${row[2]}</td><td>${row[4]}<br><span class="muted">${row[3]}</span></td>${points.map((p) => `<td class="num">${row[4] === "JH150" ? Math.max(1, Math.ceil(p / 25)) : p}</td>`).join("")}</tr>`).join("")}</tbody></table></div></div>
        <aside>
          <div class="panel"><h2>Filter & View Options</h2><label><input type="radio" checked> All Pax (1 to Capacity)</label><br><label><input type="radio"> Selected Range</label><br><label><input type="radio"> Key Pax Points</label><hr>${points.slice(0, 10).map((p) => `<label style="display:inline-block;width:70px"><input type="checkbox" checked> ${p}</label>`).join("")}<hr><label><input type="checkbox" checked> Passenger Items</label><br><label><input type="checkbox" checked> Crew Items</label></div>
          <div class="panel"><h2>Actions</h2><div class="actions-stack"><button class="btn">Print Loading Chart (Full)</button><button class="btn">Download PDF</button><button class="btn" onclick="setScreen('loading-maintenance')">Close</button></div></div>
        </aside>
      </div>
      <div class="paper-grid three">
        ${sidePanel("Matrix Summary", [["Total Items", "10"], ["Total Pax", "189"], ["Meal Type", "Hot Breakfast"], ["Total Qty", "1,016"]])}
        <div class="panel"><h2>Notes</h2><p>Quantities are calculated based on the defined ratio type and aircraft cabin capacity.</p><p>J = Business Class, W = Premium Economy Pax, Y = Economy Pax.</p></div>
        <div class="panel"><h2>Legend</h2><p>1 : 1 = item quantity increases with each passenger.</p><p>JH150 = business class tier ratio.</p></div>
      </div>
    </section>`;
  return layout("Meal Loading Chart Preview", "Preview calculated quantities per pax", body);
}

function openFlightModal(flightNo = state.selectedFlight) {
  state.selectedFlight = flightNo;
  saveState();
  const flight = selectedFlight();
  const existing = document.querySelector(".modal-backdrop");
  if (existing) existing.remove();
  document.body.insertAdjacentHTML("beforeend", `
    <div class="modal-backdrop" onclick="closeModal(event)">
      <div class="modal" role="dialog" aria-modal="true">
        <div class="modal-head"><h2 style="margin:0">Flight Operational Review</h2><button class="btn icon-btn" onclick="closeModal()">×</button></div>
        <div class="modal-body">
          <div class="chart-header">
            ${[["Flight Number", flight.flightNo], ["Airline", flight.airline], ["Sector", flight.sector], ["Aircraft", flight.aircraft], ["Registration", flight.reg], ["STD", flight.std], ["Passenger Load", flight.j + flight.y + flight.tc + flight.cc], ["Meal Counts", "1st 283 / 2nd 276"], ["Menu Cycle", flight.menu], ["Dispatch Timing", "14:45"], ["Approval Status", badge(flight.production)], ["KOT Status", badge(flight.kot)]].map(([label, value]) => `<div class="mini-card"><span class="muted">${label}</span><br><b>${value}</b></div>`).join("")}
          </div>
        </div>
        <div class="modal-foot"><span class="muted">Stored locally in browser demo data.</span><button class="btn green" onclick="setScreen('kitchen');closeModal()">Open Kitchen Display</button></div>
      </div>
    </div>
  `);
}

function closeModal(event) {
  if (event && !event.target.classList.contains("modal-backdrop")) return;
  document.querySelector(".modal-backdrop")?.remove();
}

render();
