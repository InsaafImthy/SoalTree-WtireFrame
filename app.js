const STORAGE_KEY = "soaltee-kot-wireframe-state-v1";
const KOT_STEPS = ["Planning Data", "Pax Update", "Meal Calculation", "Special Meals", "Ancillaries", "Review & Summary"];

const seed = {
  screen: "queue",
  selectedFlight: "FZ576",
  kotStep: 0,
  challanLocked: false,
  queueFilters: { status: "All Status", airline: "All Airlines", sector: "All Sectors", search: "" },
  invoice: { status: "draft", number: "", generatedAt: "", sourceChallanNo: "", sourceFlightNo: "", setupAt: "" },
  loadingChart: {
    airline: "FlyDubai",
    aircraftType: "B737-800",
    flightNo: "FZ576",
    sector: "KTM - DXB",
    mealType: "Hot Breakfast",
    mealTime: "05:10",
    chartCode: "MLC-FZ576-15062026-03",
    version: "3",
    effectiveFrom: "15/06/2026",
    effectiveTo: "24/08/2026",
    rotationFrom: "01-FEB-2026",
    rotationTo: "28-FEB-2026",
    notes: "FlyDubai Hot Breakfast MLC",
    capacity: { total: 189, j: 12, w: 0, y: 180, crew: 3 },
    rows: [
      { code: "DS 010187", name: "SEASONAL FRUIT CUT CUBE BOWL 120GM", unit: "Bowl", ratioType: "1 : 1 (Per Pax)", ratioValue: "1:1", remarks: "Per Pax" },
      { code: "DS 010528", name: "MIX YOGHURT GRANOLA APPLE", unit: "Cup", ratioType: "1 : 1 (Per Pax)", ratioValue: "1:1", remarks: "Per Pax" },
      { code: "DS 010523", name: "MUSHROOM AND CHEESE OMELETTE KTM", unit: "Pcs", ratioType: "J (Business)", ratioValue: "JH150", remarks: "JH150 = 6 Pcs" },
      { code: "DS 010150", name: "POTATOES KTM", unit: "Pcs", ratioType: "J (Business)", ratioValue: "JH150", remarks: "JH150 = 7 Pcs" },
      { code: "DS 010186", name: "VERMICELLI UTTAPAM KTM", unit: "Pcs", ratioType: "J (Business)", ratioValue: "JH150", remarks: "JH150 = 7 Pcs" },
      { code: "DS 010122", name: "CROISSANT 30 GM", unit: "Pcs", ratioType: "1 : 1 (Per Pax)", ratioValue: "1:1", remarks: "Per Pax" },
      { code: "DS 010123", name: "SOFT ROLL 35 GM", unit: "Pcs", ratioType: "1 : 1 (Per Pax)", ratioValue: "1:1", remarks: "Per Pax" },
      { code: "DS 010261", name: "BUTTER PORTION JC", unit: "Pcs", ratioType: "1 : 1 (Per Pax)", ratioValue: "1:1", remarks: "Per Pax" },
      { code: "DS 010351", name: "JAM PORTION JC", unit: "Pcs", ratioType: "1 : 1 (Per Pax)", ratioValue: "1:1", remarks: "Per Pax" },
      { code: "TS 090002", name: "JC TSU", unit: "Set", ratioType: "1 : 1 (Per Pax)", ratioValue: "1:1", remarks: "Per Pax" }
    ]
  },
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
const requestedKotStep = new URLSearchParams(window.location.search).get("kotStep");
if (requestedKotStep !== null) {
  state.kotStep = Number(requestedKotStep) || 0;
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
  state.loadingChart = { ...structuredClone(seed.loadingChart), ...(state.loadingChart || {}) };
  state.loadingChart.capacity = { ...structuredClone(seed.loadingChart.capacity), ...(state.loadingChart.capacity || {}) };
  state.loadingChart.rows = Array.isArray(state.loadingChart.rows) && state.loadingChart.rows.length ? state.loadingChart.rows : structuredClone(seed.loadingChart.rows);
  state.kot = { ...structuredClone(seed.kot), ...(state.kot || {}) };
  state.kotStep = Math.min(Math.max(Number(state.kotStep) || 0, 0), KOT_STEPS.length - 1);
  state.flights = Array.isArray(state.flights) && state.flights.length ? state.flights : structuredClone(seed.flights);
  state.flights.forEach(normalizeFlightPlanning);
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

function normalizeFlightPlanning(flight) {
  const template = planningTemplateFor(flight);
  Object.entries(template).forEach(([key, value]) => {
    if (flight[key] === undefined || flight[key] === null) flight[key] = structuredClone(value);
  });
  flight.planningStatus = flight.planningStatus || "active";
  flight.operatingDays = Array.isArray(flight.operatingDays) ? flight.operatingDays : structuredClone(template.operatingDays);
  flight.menuSplit = Array.isArray(flight.menuSplit) && flight.menuSplit.length ? flight.menuSplit : structuredClone(template.menuSplit);
  flight.specialMeals = { ...structuredClone(template.specialMeals), ...(flight.specialMeals || {}) };
  flight.ancillaryRequirements = Array.isArray(flight.ancillaryRequirements) && flight.ancillaryRequirements.length ? flight.ancillaryRequirements : structuredClone(template.ancillaryRequirements);
  flight.auditTrail = Array.isArray(flight.auditTrail) && flight.auditTrail.length ? flight.auditTrail : structuredClone(template.auditTrail);
  flight.capacity = Number(flight.capacity) || Number(flight.j || 0) + Number(flight.y || 0);
  flight.confirmedPax = Math.min(Number(flight.confirmedPax) || 0, flight.allowOverCapacity ? 9999 : flight.capacity);
  flight.additionalPax = Number(flight.additionalPax) || 0;
}

function planningTemplateFor(flight) {
  const isFlyDubai = flight.airline === "FlyDubai";
  const isQatar = flight.airline === "Qatar Airways";
  const baseCapacity = Number(flight.j || 0) + Number(flight.y || 0);
  const defaultConfirmed = flight.flightNo === "FZ576" ? 124 : Math.max(0, baseCapacity - (isFlyDubai ? 35 : isQatar ? 42 : 28));
  return {
    arrivalTime: isFlyDubai ? "15:05" : isQatar ? "17:05" : "18:30",
    operatingDays: isFlyDubai ? ["Mon", "Tue", "Thu", "Sat"] : ["Mon", "Wed", "Fri", "Sun"],
    capacity: baseCapacity,
    confirmedPax: defaultConfirmed,
    additionalPax: flight.flightNo === "FZ576" ? 3 : 0,
    allowOverCapacity: false,
    mealPlan: isFlyDubai ? "Hot Breakfast" : flight.menu,
    ratioRule: isFlyDubai ? "Percentage split: 60 / 20 / 20" : "Class and percentage split",
    roundingRule: "Largest remainder, total must match final pax",
    specialMealRule: "Included inside final passenger count unless approved as extra uplift",
    menuSplit: isFlyDubai
      ? [
          { code: "CHK-60", type: "Chicken", name: "Chicken Hot Meal", ratio: "60%", rateCode: "MEAL-NV", rate: 3.8 },
          { code: "VEG-20", type: "Vegetarian", name: "Vegetarian Hot Meal", ratio: "20%", rateCode: "MEAL-VEG", rate: 3.2 },
          { code: "ALT-20", type: "Alternate", name: "Alternate Meal", ratio: "20%", rateCode: "MEAL-ALT", rate: 3.5 }
        ]
      : [
          { code: "NV-50", type: "Non Veg", name: "Main Meal Non Veg", ratio: "50%", rateCode: "MEAL-NV", rate: 3.8 },
          { code: "VEG-30", type: "Vegetarian", name: "Vegetarian Meal", ratio: "30%", rateCode: "MEAL-VEG", rate: 3.2 },
          { code: "ALT-20", type: "Alternate", name: "Alternate Meal", ratio: "20%", rateCode: "MEAL-ALT", rate: 3.5 }
        ],
    specialMeals: { AVML: 3, CHML: 1, BBML: 0, FPML: 0, GFML: 0, HNML: 0, LCML: 0, LSML: 0, MOML: 0, VGML: 2, VLML: 0 },
    ancillaryRequirements: [
      { item: "Assorted Fresh Juice - 1000 ml", unit: "Pkt", rule: "1 per 65 pax", qtyPerPax: 1 / 65, min: 2 },
      { item: "Paper Cups", unit: "Pcs", rule: "1:1 pax + 5%", qtyPerPax: 1.05, min: 0 },
      { item: "Mineral Water - 500 ml", unit: "Btl", rule: "1:1 pax", qtyPerPax: 1, min: 0 },
      { item: "Ice Cube", unit: "Kg", rule: "Fixed flight uplift", fixedQty: 20 },
      { item: "Top Up Van", unit: "Trip", rule: "Fixed dispatch", fixedQty: 1 }
    ],
    operationalRemarks: flight.airline === "FlyDubai" ? "No peanuts. Cold meal for crew." : "Verify airline message before final dispatch.",
    auditTrail: [
      "Planning loaded airline master, schedule, menu plan, ratio, and rules.",
      "Operations can update pax, additions, SPML, ancillaries, and remarks only."
    ]
  };
}

function updateFlightField(key, value) {
  const flight = selectedFlight();
  if (!flight) return;
  flight[key] = key.includes("Pax") || key === "capacity" ? Number(value) || 0 : value;
  normalizeFlightPlanning(flight);
  syncKotSnapshot(flight);
  if (["confirmedPax", "additionalPax", "operationalRemarks"].includes(key) && flight.kot !== "confirmed") {
    flight.kot = "in progress";
  }
  saveState();
  render();
}

function updateMenuSplit(index, key, value) {
  const flight = selectedFlight();
  if (!flight.menuSplit[index]) return;
  flight.menuSplit[index][key] = key === "rate" ? Number(value) || 0 : value;
  syncKotSnapshot(flight);
  saveState();
  render();
}

function updateAncillary(index, key, value) {
  const flight = selectedFlight();
  const row = flight.ancillaryRequirements[index];
  if (!row) return;
  row[key] = key === "fixedQty" || key === "min" || key === "qtyPerPax" ? Number(value) || 0 : value;
  syncKotSnapshot(flight);
  saveState();
  render();
}

function updateSpecialMeal(code, value) {
  const flight = selectedFlight();
  flight.specialMeals[code] = Number(value) || 0;
  syncKotSnapshot(flight);
  if (flight.kot !== "confirmed") flight.kot = "in progress";
  saveState();
  render();
}

function finalPassengerCount(flight = selectedFlight()) {
  return Number(flight.confirmedPax || 0) + Number(flight.additionalPax || 0);
}

function crewCount(flight = selectedFlight()) {
  return Number(flight.tc || 0) + Number(flight.cc || 0);
}

function specialMealTotal(flight = selectedFlight()) {
  return Object.values(flight.specialMeals || {}).reduce((sum, value) => sum + Number(value || 0), 0);
}

function parseRatioPercent(ratio) {
  const text = String(ratio || "").trim();
  if (text.endsWith("%")) return Number(text.replace("%", "")) / 100;
  if (text.includes(":")) {
    const [base, qty] = text.split(":").map(Number);
    return base && qty ? qty / base : 0;
  }
  return Number(text) || 0;
}

function calculatedMealBreakdown(flight = selectedFlight()) {
  const finalPax = finalPassengerCount(flight);
  const spml = specialMealTotal(flight);
  const standardCount = Math.max(finalPax - spml, 0);
  const rawRows = flight.menuSplit.map((item) => {
    const ratio = parseRatioPercent(item.ratio);
    const raw = String(item.ratio).includes(":") ? Math.ceil(standardCount * ratio) : standardCount * ratio;
    return { ...item, raw, qty: Math.floor(raw), remainder: raw - Math.floor(raw) };
  });
  let remaining = standardCount - rawRows.reduce((sum, row) => sum + row.qty, 0);
  rawRows
    .slice()
    .sort((a, b) => b.remainder - a.remainder)
    .forEach((row) => {
      if (remaining <= 0) return;
      const target = rawRows.find((item) => item.code === row.code);
      target.qty += 1;
      remaining -= 1;
    });
  return rawRows.map(({ remainder, raw, ...row }) => row);
}

function calculatedAncillaries(flight = selectedFlight()) {
  const pax = finalPassengerCount(flight);
  return flight.ancillaryRequirements.map((item) => {
    const qty = item.fixedQty !== undefined ? Number(item.fixedQty) : Math.max(Number(item.min || 0), Math.ceil(pax * Number(item.qtyPerPax || 0)));
    return { ...item, qty };
  });
}

function calculatedKot(flight = selectedFlight()) {
  const meals = calculatedMealBreakdown(flight);
  const ancillaries = calculatedAncillaries(flight);
  const finalPax = finalPassengerCount(flight);
  const spml = specialMealTotal(flight);
  const standardMeals = meals.reduce((sum, item) => sum + item.qty, 0);
  return {
    finalPax,
    crew: crewCount(flight),
    capacity: flight.capacity,
    specialMeals: spml,
    standardMeals,
    totalMeals: standardMeals + spml,
    meals,
    ancillaries,
    deliveredTotal: standardMeals + spml + ancillaries.reduce((sum, item) => sum + item.qty, 0)
  };
}

function validationRows(stage, flight = selectedFlight()) {
  const calc = calculatedKot(flight);
  const ratiosTotal = flight.menuSplit.reduce((sum, item) => sum + (String(item.ratio).endsWith("%") ? Number(String(item.ratio).replace("%", "")) : 0), 0);
  const rows = {
    planning: [
      ["Airline master complete", Boolean(flight.airline && flight.flightNo && flight.sector)],
      ["Schedule has sector, departure, arrival, days", Boolean(flight.sector && flight.std && flight.arrivalTime && flight.operatingDays.length)],
      ["Menu plan and ratio linked", Boolean(flight.menuSplit.length && flight.mealPlan)],
      ["Capacity defined", Number(flight.capacity) > 0],
      ["Duplicate setup prevented", state.flights.filter((item) => item.flightNo === flight.flightNo).length === 1]
    ],
    kot: [
      ["Final pax calculated automatically", calc.finalPax === Number(flight.confirmedPax) + Number(flight.additionalPax)],
      ["Pax within capacity or approved override", calc.finalPax <= flight.capacity || flight.allowOverCapacity],
      ["Additional pax tracked separately", Number(flight.additionalPax) >= 0],
      ["Menu and ratio locked for operations", true],
      ["Special meals match configured meal codes", specialMealTotal(flight) >= 0]
    ],
    calculation: [
      ["Meal split equals final pax after SPML adjustment", calc.totalMeals === calc.finalPax],
      ["Percentage ratios total 100%", ratiosTotal === 100],
      ["Rounding rule applied", true],
      ["Ancillary quantities validated", calc.ancillaries.every((item) => item.qty >= Number(item.min || 0))],
      ["Changes traceable in audit trail", flight.auditTrail.length > 0]
    ],
    document: [
      ["KOT confirmed before kitchen/chalan", flight.kot === "confirmed"],
      ["Chalan generated from confirmed KOT", flight.kot === "confirmed"],
      ["Unique chalan number available", Boolean(state.kot.challanNo)],
      ["Invoice linked to approved chalan", flight.production === "approved" || flight.production === "dispatched" || state.invoice.status === "generated"],
      ["Rates selected from approved master", invoiceItems().every((item) => item.rate > 0)]
    ]
  };
  return rows[stage] || rows.kot;
}

function setSelectedFlight(flightNo, screen = "kot") {
  state.selectedFlight = flightNo;
  if (screen === "kot") state.kotStep = 0;
  saveState();
  render(screen);
  setScreen(screen);
  openFlightModal();
}

function setKotStep(step) {
  state.kotStep = Math.min(Math.max(Number(step) || 0, 0), KOT_STEPS.length - 1);
  saveState();
  render();
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

function updateLoadingRow(index, key, value) {
  const row = state.loadingChart.rows[index];
  if (!row) return;
  row[key] = value;
  if (key === "ratioType" || key === "ratioValue") {
    row.remarks = row.ratioValue === "1:1" ? "Per Pax" : `${row.ratioValue} ratio`;
  }
  saveState();
  render();
}

function syncKotSnapshot(flight = selectedFlight()) {
  const calc = calculatedKot(flight);
  const loadRow = ["Final Pax On Board", flight.j, 0, calc.finalPax, flight.tc, flight.cc];
  state.kot.loads[2] = loadRow;
  state.kot.loads[3] = ["Final Meal On Board", 0, 0, calc.totalMeals, 0, 0];
  state.kot.firstService = calc.meals.map((meal) => [meal.type, 0, 0, meal.qty, 0, 0]);
  state.kot.secondService = structuredClone(state.kot.firstService);
  state.kot.specialMeals = { ...state.kot.specialMeals, ...flight.specialMeals };
  state.kot.ancillaries = calc.ancillaries.map((item) => [item.item, item.unit, item.qty, item.qty]);
  state.kot.remarks = flight.operationalRemarks || state.kot.remarks;
  return calc;
}

function calculateMeals(shouldRender = true) {
  const flight = selectedFlight();
  const calc = syncKotSnapshot(flight);
  flight.kot = "confirmed";
  flight.meal = "calculated";
  flight.production = flight.production === "pending" ? "in progress" : flight.production;
  flight.lastCalculatedAt = "15/06/2026 10:24";
  flight.auditTrail = [...(flight.auditTrail || []), `KOT recalculated for ${calc.finalPax} final pax.`].slice(-8);
  saveState();
  if (shouldRender) {
    showToast(`Meal counts calculated for ${calc.finalPax} final pax.`);
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
  flight.dispatch = "pending";
  saveState();
  setScreen("challan-preview");
}

function lockChallan() {
  state.challanLocked = true;
  selectedFlight().dispatch = "dispatched";
  selectedFlight().production = "dispatched";
  setupInvoiceFromChallan(false);
  saveState();
  render();
  window.print();
}

function setupInvoiceFromChallan(shouldNavigate = true) {
  const flight = selectedFlight();
  if (flight.production !== "approved" && flight.production !== "dispatched") {
    showToast("Prepare or approve the chalan before invoice setup.");
    return;
  }
  state.invoice.status = state.invoice.status === "generated" ? "generated" : "ready";
  state.invoice.sourceChallanNo = state.kot.challanNo;
  state.invoice.sourceFlightNo = flight.flightNo;
  state.invoice.setupAt = "15/06/2026 10:24";
  saveState();
  if (shouldNavigate) {
    showToast(`Invoice setup created from chalan ${state.kot.challanNo}.`);
    setScreen("invoice");
  }
}

function generateInvoice() {
  const flight = selectedFlight();
  if (flight.production !== "approved" && flight.production !== "dispatched") {
    showToast("Approve the chalan before invoice generation.");
    return;
  }
  if (state.invoice.sourceChallanNo !== state.kot.challanNo) {
    setupInvoiceFromChallan(false);
  }
  state.invoice.status = "generated";
  state.invoice.number = state.invoice.number || `INV-${state.kot.challanNo}`;
  state.invoice.generatedAt = "15/06/2026 10:24";
  saveState();
  showToast(`${state.invoice.number} generated from challan ${state.kot.challanNo}.`);
  render();
}

function previewInvoice() {
  const items = invoiceItems();
  const subtotal = items.reduce((sum, item) => sum + item.qty * item.rate, 0);
  const grandTotal = subtotal * 1.1;
  openInfoModal("Invoice Preview", [
    ["Invoice No.", state.invoice.number || "Auto on generation"],
    ["Airline", selectedFlight().airline],
    ["Challan No.", state.kot.challanNo],
    ["Status", badge(state.invoice.status)],
    ["Grand Total (USD)", grandTotal.toFixed(2)],
    ["Grand Total (NPR)", (grandTotal * 150.35).toLocaleString(undefined, { maximumFractionDigits: 2 })]
  ]);
}

function downloadDemoDocument(type) {
  const content = type === "invoice"
    ? `Invoice ${state.invoice.number || "Draft"}\nChallan ${state.kot.challanNo}\nFlight ${selectedFlight().flightNo}\nFinal pax ${calculatedKot().finalPax}`
    : type === "loading-chart"
      ? `Meal Loading Chart ${state.loadingChart.chartCode}\nFlight ${state.loadingChart.flightNo}\nTotal capacity ${chartTotalPax()}\nTotal quantity ${totalLoadingQuantity()}`
      : `Challan ${state.kot.challanNo}\nFlight ${selectedFlight().flightNo}\nStatus ${selectedFlight().dispatch}`;
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
    planning: "Airline Setup",
    queue: "Flight Queue",
    kot: "KOT Entry",
    "kot-list": "KOT List",
    kitchen: "Kitchen Board",
    challan: "Challan",
    "challan-preview": "Challan Preview",
    invoice: "Invoice",
    "loading-maintenance": "MLC Maintenance",
    "loading-preview": "MLC Preview"
  };
  return state.screen === screen && activeLabels[state.screen] === label;
}

function navIcon(label) {
  const icons = {
    Dashboard: "DB",
    "Airline Setup": "AS",
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
    "MLC Maintenance": "LC",
    "MLC Preview": "LP"
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
          <div class="nav-title">Planning</div>
          ${button("Airline Setup", "planning")}
          <div class="nav-title">Operations</div>
          ${button("Flight Queue", "queue")}
          ${button("KOT Entry", "kot")}
          ${button("KOT List", "kot-list")}
          ${button("Challan Preview", "challan-preview")}
          ${button("Kitchen Board", "kitchen")}
          <div class="nav-title">Finance</div>
          ${button("Invoice", "invoice")}
          <div class="nav-title">Loading Charts</div>
          ${button("MLC Maintenance", "loading-maintenance")}
          ${button("MLC Preview", "loading-preview")}
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
    planning: renderPlanning,
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

function renderPlanning() {
  const flight = selectedFlight();
  const calc = calculatedKot(flight);
  const doc = planningDocument(flight);
  const body = `
    <section class="content">
      <div class="toolbar">
        <select class="field" onchange="state.selectedFlight=this.value;saveState();render()">${state.flights.map((item) => `<option value="${item.flightNo}" ${item.flightNo === flight.flightNo ? "selected" : ""}>${item.airline} - ${item.flightNo}</option>`).join("")}</select>
        <button class="btn green" onclick="savePlanningSetup()">Load Chart Into Planning</button>
        <button class="btn" onclick="setScreen('kot')">Open KOT</button>
        <button class="btn" onclick="setScreen('loading-preview')">Preview Matrix</button>
        <span style="flex:1"></span>
        <span class="badge confirmed">${flight.planningStatus}</span>
      </div>
      <div class="planning-document">
        <div class="planning-doc-top">
          <div>
            <h2>Meal Loading Chart</h2>
            <p><b>CUP Name:</b> ${doc.cupName}<br><b>Caterer (Station):</b> ${doc.caterer}<br><b>Effective Period:</b> ${doc.effectivePeriod}</p>
          </div>
          <div class="planning-airline-mark">${flight.airline}</div>
        </div>
        <div class="planning-section-title">Section 1: Service Details - Meal</div>
        <div class="planning-meta-grid">
          ${[
            ["Flight No.", doc.flightNo],
            ["Sector", doc.sector],
            ["STD", doc.std],
            ["STA", doc.sta],
            ["Flight Time", doc.flightTime],
            ["Day Of Ops", doc.dayOfOps],
            ["Aircraft Type", doc.aircraftType],
            ["Flight Effective Period", doc.flightEffectivePeriod],
            ["Meal Type", doc.mealType],
            ["Service Seq", doc.serviceSeq],
            ["Class", doc.class],
            ["Rotation", doc.rotation],
            ["Meal Code", doc.mealCode],
            ["Rotation Effective Period", doc.rotationEffectivePeriod],
            ["Version", doc.version],
            ["Effective Date", doc.effectiveDate]
          ].map(([label, value]) => `<div><span>${label}</span><strong>${value}</strong></div>`).join("")}
        </div>
        <div class="planning-meal-code">
          <div><span>Meal Code</span><b>${doc.mealCode}</b></div>
          <div><span>Meal Name</span><b>${doc.mealName}</b></div>
          <div><span>Planning Output</span><b>${calc.finalPax} pax / ${calc.totalMeals} meals</b></div>
        </div>
        ${planningMatrixTable(doc)}
      </div>
      <div class="grid-2 planning-lower">
        <div>
          <div class="panel">
            <div class="panel-head"><h2>Converted Menu Split For KOT</h2><span class="badge progress">${flight.ratioRule}</span></div>
            ${menuSplitTable(flight)}
          </div>
          <div class="panel">
            <div class="panel-head"><h2>Ancillary Rules</h2><span class="muted">Calculated against final pax after KOT update</span></div>
            ${ancillaryRuleTable(flight)}
          </div>
        </div>
        <aside>
          ${sidePanel("KOT Template Output", [["Final pax now", calc.finalPax], ["Meal plan", flight.mealPlan], ["Total meals", calc.totalMeals], ["Special meals", calc.specialMeals], ["Ancillary lines", calc.ancillaries.length], ["Rounding", flight.roundingRule]])}
          <div class="panel"><h2>Planning Validation</h2>${validationList("planning", flight)}</div>
          <div class="panel"><h2>Audit Trail</h2><div class="status-list">${flight.auditTrail.map((item) => `<div class="check-line"><span class="check">✓</span>${escapeHtml(item)}</div>`).join("")}</div></div>
        </aside>
      </div>
    </section>`;
  return layout("Planning Meal Loading Chart", "Load airline-provided chart into flight-wise KOT setup", body);
}

function planningDocument(flight = selectedFlight()) {
  return {
    cupName: "GATE-KTM-FEB26-23810",
    caterer: "GATE (KTM)",
    effectivePeriod: "Feb-26",
    flightNo: "1134",
    sector: "KTMDXB",
    std: "09:20",
    sta: "12:45",
    flightTime: "05/10",
    dayOfOps: "1234567",
    aircraftType: "7M8",
    flightEffectivePeriod: "01-Feb-2026 - 28-Feb-2026",
    mealType: "Hot Breakfast",
    serviceSeq: "1",
    class: "J",
    rotation: "4",
    mealCode: "ML-JHB0419",
    rotationEffectivePeriod: "01-FEB-2026-28-FEB-2026",
    version: "3",
    effectiveDate: "24-Aug-2025",
    mealName: "JC HB C KTM-DXB C4",
    rows: planningDishRows()
  };
}

function planningDishRows() {
  return [
    { group: "FRUIT", code: "DS.000875", dish: "SEASONAL FRUIT CUBE BOWL 120GM", ratio: "1:1 - N" },
    { group: "YOGURT", code: "DS.001020", dish: "MIX YOGHURT GRANOLA APPLE", ratio: "1:1 - N" },
    { group: "MAIN COURSE", code: "DS.001827", dish: "MUSHROOM AND CHEESE OMELETTE KTM", ratio: "JHM50" },
    { group: "MAIN COURSE", code: "DS.001828", dish: "FRENCH TOAST KTM", ratio: "JHM30" },
    { group: "MAIN COURSE", code: "DS.001829", dish: "VERMICELLI UPMA KTM", ratio: "JHM60" },
    { group: "BREAD", code: "DS.001560", dish: "CROISSANT 30 GM", ratio: "1:1 - N" },
    { group: "BREAD", code: "DS.001520", dish: "SOFT ROLL 35 GM", ratio: "1:1 - N" },
    { group: "ACCOMPANIMENT", code: "DS.008561", dish: "BUTTER PORTION JC", ratio: "1:1 - N" },
    { group: "ACCOMPANIMENT", code: "DS.001021", dish: "JAM PORTION JC", ratio: "1:1 - N" },
    { group: "TRAY SET UP", code: "TS.000002", dish: "JC TSU", ratio: "1:1 - N" }
  ];
}

function planningMatrixTable(doc) {
  const paxPoints = Array.from({ length: 20 }, (_, index) => index + 1);
  return `
    <div class="table-wrap planning-matrix-wrap">
      <table class="planning-matrix">
        <thead>
          <tr><th>Dish Code</th><th>Dish Name</th><th>Ratio</th>${paxPoints.map((point) => `<th class="num">${point}</th>`).join("")}</tr>
        </thead>
        <tbody>
          ${doc.rows.map((row) => `<tr><td><span class="muted">${row.group}</span><br><b>${row.code}</b></td><td>${row.dish}</td><td>${row.ratio}</td>${paxPoints.map((point) => `<td class="num">${planningRatioQty(row.ratio, point)}</td>`).join("")}</tr>`).join("")}
        </tbody>
      </table>
    </div>
  `;
}

function planningRatioQty(ratio, pax) {
  if (ratio === "JHM50") return Math.max(1, Math.ceil(pax * 0.5));
  if (ratio === "JHM30") return Math.max(1, Math.ceil(pax * 0.3));
  if (ratio === "JHM60") return Math.max(1, Math.ceil(pax * 0.6));
  return pax;
}

function toggleOperatingDay(day) {
  const flight = selectedFlight();
  flight.operatingDays = flight.operatingDays.includes(day)
    ? flight.operatingDays.filter((item) => item !== day)
    : [...flight.operatingDays, day];
  saveState();
  render();
}

function savePlanningSetup() {
  const flight = selectedFlight();
  const doc = planningDocument(flight);
  flight.flightNo = doc.flightNo;
  flight.sector = doc.sector;
  flight.std = doc.std;
  flight.arrivalTime = doc.sta;
  flight.aircraft = doc.aircraftType;
  flight.mealPlan = doc.mealType;
  flight.operatingDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  flight.ratioRule = `Meal Loading Chart ${doc.mealCode}`;
  flight.roundingRule = "Use chart pax-point quantities; interpolate by configured ratio when final pax is higher.";
  state.selectedFlight = doc.flightNo;
  state.loadingChart = {
    ...state.loadingChart,
    airline: flight.airline,
    aircraftType: doc.aircraftType,
    flightNo: doc.flightNo,
    sector: doc.sector,
    mealType: doc.mealType,
    mealTime: doc.std,
    chartCode: doc.cupName,
    version: doc.version,
    effectiveFrom: "01/02/2026",
    effectiveTo: "28/02/2026",
    rotationFrom: "01-FEB-2026",
    rotationTo: "28-FEB-2026",
    notes: `${doc.mealCode} ${doc.mealName}`,
    rows: doc.rows.map((row) => ({
      code: row.code,
      name: row.dish,
      unit: row.group === "YOGURT" ? "Cup" : row.group === "FRUIT" ? "Bowl" : row.group === "TRAY SET UP" ? "Set" : "Pcs",
      ratioType: row.ratio.startsWith("JHM") ? "J (Business)" : "1 : 1 (Per Pax)",
      ratioValue: row.ratio,
      remarks: row.group
    }))
  };
  syncKotSnapshot(flight);
  flight.planningStatus = "active";
  flight.auditTrail = [...(flight.auditTrail || []), `Meal Loading Chart ${doc.mealCode} loaded into planning setup.`].slice(-8);
  saveState();
  showToast(`${doc.mealCode} loaded for flight ${doc.flightNo}.`);
  render();
}

function menuSplitTable(flight = selectedFlight()) {
  return `<div class="table-wrap"><table class="compact-table"><thead><tr><th>Code</th><th>Meal Type</th><th>Menu Item</th><th>Ratio</th><th class="num">Rate</th><th class="num">Current Qty</th></tr></thead><tbody>${flight.menuSplit.map((row, index) => `<tr><td><input class="input cell-input" value="${escapeHtml(row.code)}" onchange="updateMenuSplit(${index}, 'code', this.value)"></td><td><input class="input cell-input" value="${escapeHtml(row.type)}" onchange="updateMenuSplit(${index}, 'type', this.value)"></td><td><input class="input cell-input dish-input" value="${escapeHtml(row.name)}" onchange="updateMenuSplit(${index}, 'name', this.value)"></td><td><input class="input cell-input" value="${escapeHtml(row.ratio)}" onchange="updateMenuSplit(${index}, 'ratio', this.value)"></td><td class="num"><input class="mini-input" value="${row.rate}" onchange="updateMenuSplit(${index}, 'rate', this.value)"></td><td class="num"><strong>${calculatedMealBreakdown(flight)[index]?.qty || 0}</strong></td></tr>`).join("")}</tbody></table></div>`;
}

function ancillaryRuleTable(flight = selectedFlight()) {
  const calcRows = calculatedAncillaries(flight);
  return `<div class="table-wrap"><table class="compact-table"><thead><tr><th>Item</th><th>Unit</th><th>Rule</th><th class="num">Min</th><th class="num">Current Qty</th></tr></thead><tbody>${flight.ancillaryRequirements.map((row, index) => `<tr><td><input class="input cell-input dish-input" value="${escapeHtml(row.item)}" onchange="updateAncillary(${index}, 'item', this.value)"></td><td><input class="input cell-input" value="${escapeHtml(row.unit)}" onchange="updateAncillary(${index}, 'unit', this.value)"></td><td><input class="input cell-input" value="${escapeHtml(row.rule)}" onchange="updateAncillary(${index}, 'rule', this.value)"></td><td class="num"><input class="mini-input" value="${row.min || 0}" onchange="updateAncillary(${index}, 'min', this.value)"></td><td class="num"><strong>${calcRows[index]?.qty || 0}</strong></td></tr>`).join("")}</tbody></table></div>`;
}

function validationList(stage, flight = selectedFlight()) {
  return `<div class="status-list">${validationRows(stage, flight).map(([label, ok]) => `<div class="check-line ${ok ? "" : "warning-line"}"><span class="check">${ok ? "✓" : "!"}</span>${label}</div>`).join("")}</div>`;
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
    acc.y += finalPassengerCount(flight);
    acc.tc += flight.tc;
    acc.cc += flight.cc;
    return acc;
  }, { j: 0, y: 0, tc: 0, cc: 0 });
  const totalMeals = state.flights.reduce((sum, flight) => sum + calculatedKot(flight).totalMeals, 0);
  const body = `
    <section class="content">
      <div class="kpi-grid">
        ${kpi("FL", "Total Flights", "18", "Today")}
        ${kpi("PX", "Final Pax", totals.y.toLocaleString(), "Confirmed + addl.", "green")}
        ${kpi("ML", "Calculated Meals", totalMeals.toLocaleString(), "Today", "amber")}
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
      <div class="footer-note">Note: Planning owns airline, schedule, menu and ratio setup. Operations updates confirmed pax, additions, special meals and ancillaries only.</div>
    </section>
  `;
  return layout("Operations Flight Queue", "Manage KOT, Meal Production & Delivery", body);
}

function kpi(icon, label, value, sub, tone = "blue") {
  const color = tone === "green" ? "#159447" : tone === "amber" ? "#e28b16" : tone === "red" ? "#b91c1c" : tone === "purple" ? "#7633bd" : "#0b66bf";
  return `<div class="kpi"><div class="kpi-icon" style="color:${color}">${icon}</div><div><small>${label}</small><strong style="color:${color}">${value}</strong><span>${sub}</span></div></div>`;
}

function queueRow(flight) {
  const calc = calculatedKot(flight);
  return `
    <tr data-search="${`${flight.flightNo} ${flight.airline} ${flight.sector}`.toLowerCase()}">
      <td class="blue-text">${flight.std}</td>
      <td><strong>${flight.flightNo}</strong></td>
      <td><span class="logo-airline ${flight.airlineClass}">${flight.airline}</span></td>
      <td>${flight.sector}</td>
      <td>${flight.aircraft}</td>
      <td class="num">${flight.j}</td><td class="num">${calc.finalPax}</td><td class="num">${flight.tc}</td><td class="num">${flight.cc}</td><td class="num"><strong>${calc.finalPax + flight.tc + flight.cc}</strong></td>
      <td>${flight.mealPlan}</td>
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
  const step = state.kotStep;
  const calc = calculatedKot(flight);
  const body = `
    <div class="flight-header">
      <div><button class="btn" onclick="setScreen('queue')">Back to Flight List</button></div>
      <div><strong>${flight.flightNo}</strong> ${badge(flight.kot)}</div>
      <div><span class="logo-airline ${flight.airlineClass}">${flight.airline}</span></div>
      <div><label>Sector</label><b>${flight.sector}</b></div>
      <div><label>STD</label><b>${flight.std}</b></div>
      <div><label>Aircraft</label><b>${flight.aircraft}</b></div>
      <div><label>Reg. No.</label><b>${flight.reg}</b></div>
      <div><label>Final Pax</label><b>${calc.finalPax}</b></div>
    </div>
    <div class="steps">${KOT_STEPS.map((item, index) => `<button class="step ${index === step ? "active" : ""} ${index < step ? "complete" : ""}" onclick="setKotStep(${index})"><b>${index + 1}</b>${item}</button>`).join("")}</div>
    <section class="content">
      <div class="grid-2">
        <div>${kotStageContent(step, flight)}</div>
        <aside>
          ${sidePanel("Key Timings", [["Hot Meal Dish Out", "13:15"], ["Cold Meal Prep.", "13:00"], ["Dispatch Time", "14:45"]])}
          ${sidePanel("Other Info", [["Loading Bay", "02"], ["Gate Type", "Wide Body"], ["Uplift Type", "Full Uplift"], ["Prepared By", "operations1"], ["Prepared On", "15/06/2026 10:24"]])}
          ${step < 5 ? `<div class="panel">
            <h2>Stage Actions</h2>
            <div class="actions-stack">
              <button class="btn navy" onclick="saveDraft()">Save Draft</button>
              ${step === 4 ? `<button class="btn green" onclick="calculateMeals()">Approve Ancillaries</button>` : ""}
            </div>
          </div>` : ""}
        </aside>
      </div>
      ${kotStageFooter(step)}
      <div class="footer-note">Note: Complete each stage before generating Gate Pass Cum Delivery Challan.</div>
    </section>
  `;
  return layout("KOT Entry", "Flight-wise Kitchen Order Ticket from planning setup", body);
}

function kotStageContent(step, flight) {
  const stages = [
    () => `
      <div class="panel kot-stage">
        <h2>Flight Information</h2>
        <div class="notice compact-notice"><span class="check">✓</span><div><b>Loaded from planning setup</b><br><span class="muted">Operations cannot change airline master, menu plan, ratio or flight schedule from this KOT.</span></div></div>
        <div class="form-grid">
          ${readonlyField("Date", state.kot.date)}
          ${readonlyField("Flight No.", flight.flightNo)}
          ${readonlyField("Airline", flight.airline)}
          ${readonlyField("Registration", flight.reg)}
          ${readonlyField("Aircraft Type", flight.aircraft)}
          ${readonlyField("Aircraft Capacity", flight.capacity)}
          ${readonlyField("Sector", flight.sector)}
          ${readonlyField("Departure / Arrival", `${flight.std} / ${flight.arrivalTime}`)}
          ${readonlyField("Days of Operation", flight.operatingDays.join(", "))}
          ${readonlyField("Menu Plan", flight.mealPlan)}
          ${readonlyField("Meal Ratio", flight.ratioRule)}
          ${readonlyField("Rounding Rule", flight.roundingRule)}
        </div>
        <div class="form-grid two" style="margin-top:14px">
          ${readonlyField("Uplift: 1st Service", state.kot.firstUplift)}
          ${readonlyField("Uplift: 2nd Service", state.kot.secondUplift)}
        </div>
      </div>
    `,
    () => `
      <div class="panel kot-stage">
        <h2>Operations Pax Update</h2>
        <div class="notice compact-notice"><span class="check">✓</span><div><b>Only live load details are edited here</b><br><span class="muted">Confirmed pax, additional pax, special meals, ancillaries and remarks are tracked separately for audit.</span></div></div>
        <div class="form-grid">
          ${readonlyField("Flight Capacity", flight.capacity)}
          ${formField("Confirmed Passenger Count", flight.confirmedPax, "updateFlightField('confirmedPax', this.value)")}
          ${formField("Additional Passenger Count", flight.additionalPax, "updateFlightField('additionalPax', this.value)")}
          ${readonlyField("Final Passenger Count", finalPassengerCount(flight))}
          ${readonlyField("Crew Count", crewCount(flight))}
          ${readonlyField("KOT Source", "Planning template")}
        </div>
        <div style="margin-top:14px">${validationList("kot", flight)}</div>
      </div>
    `,
    () => `
      <div class="panel kot-stage">
        <div class="panel-head"><h2>Automatic Meal Calculation</h2><button class="btn" onclick="setScreen('loading-preview')">Open Chart Preview</button></div>
        <div class="notice compact-notice"><span class="check">✓</span><div><b>Calculated from final pax and planning ratio</b><br><span class="muted">Special meals are included inside final pax by default, then standard meals are split by ratio.</span></div></div>
        ${dynamicMealCalculationTable(flight)}
        <div style="margin-top:14px">${validationList("calculation", flight)}</div>
        <div class="panel-subsection">
          <div class="panel-head"><h2>Special Meals</h2><span class="badge progress">User editable</span></div>
          ${specialMealsTable(true)}
        </div>
      </div>
    `,
    () => `
      <div class="panel kot-stage">
        <h2>Special Meals</h2>
        ${specialMealsTable(true)}
        <label class="muted" style="display:block;margin-top:16px">Remarks / Instructions</label>
        <textarea id="remarks" onchange="updateFlightField('operationalRemarks', this.value)">${escapeHtml(flight.operationalRemarks)}</textarea>
      </div>
    `,
    () => `
      <div class="panel kot-stage">
        <div class="panel-head"><h2>Ancillaries Review & Approval</h2><button class="btn green" onclick="calculateMeals()">Auto Calculate</button></div>
        ${dynamicAncillaryTable(flight, true)}
        <div class="notice" style="margin-top:14px"><span class="check">✓</span><div><b>Review generated ancillary counts</b><br><span class="muted">Approve this stage after validating first and second service quantities.</span></div></div>
      </div>
    `,
    () => `
      <div class="panel kot-stage">
        <h2>Final Review & Summary</h2>
        <div class="chart-header">
          ${[["Flight", flight.flightNo], ["Airline", flight.airline], ["Sector", flight.sector], ["Aircraft", flight.aircraft], ["Final Pax", calculatedKot(flight).finalPax], ["Total Meals", calculatedKot(flight).totalMeals], ["Special Meals", calculatedKot(flight).specialMeals], ["Ancillary Lines", calculatedKot(flight).ancillaries.length], ["KOT Status", badge(flight.kot)], ["Production", badge(flight.production)]].map(([label, value]) => `<div class="mini-card"><span class="muted">${label}</span><br><b>${value}</b></div>`).join("")}
        </div>
        <div class="paper-grid equal" style="margin-top:14px">
          ${dynamicMealCalculationTable(flight)}
          ${specialMealsTable()}
        </div>
        <div style="margin-top:14px">${dynamicAncillaryTable(flight)}</div>
      </div>
    `
  ];
  return stages[step]();
}

function kotStageFooter(step) {
  return `
    <div class="stage-footer">
      <button class="btn" onclick="setKotStep(${step - 1})" ${step === 0 ? "disabled" : ""}>Previous</button>
      <span class="muted">Stage ${step + 1} of ${KOT_STEPS.length}: ${KOT_STEPS[step]}</span>
      ${step < KOT_STEPS.length - 1 ? `<button class="btn green" onclick="setKotStep(${step + 1})">Next Stage</button>` : `<button class="btn blue" onclick="generateChallan()">Generate Challan</button>`}
    </div>
  `;
}

function formField(label, value, changeHandler = "") {
  return `<label><span class="muted">${label}</span><input class="input" value="${escapeHtml(value)}" ${changeHandler ? `onchange="${changeHandler}"` : ""}></label>`;
}

function readonlyField(label, value) {
  return `<label><span class="muted">${label}</span><input class="input readonly-input" value="${escapeHtml(value)}" readonly></label>`;
}

function selectField(label, value) {
  const handler = label.includes("Aircraft") ? "selectedFlight().aircraft=this.value;saveState();render()" : label.includes("Menu") ? "selectedFlight().menu=this.value;saveState();render()" : "";
  const options = label.includes("Aircraft") ? ["B737-800", "A320neo", "A321", "A330", "B777-300ER"] : ["CYCLE-A", "CYCLE-B"];
  return `<label><span class="muted">${label}</span><select class="select" ${handler ? `onchange="${handler}"` : ""}>${options.map((option) => `<option ${option === value ? "selected" : ""}>${option}</option>`).join("")}</select></label>`;
}

function editableLoadTable() {
  return `
    <table class="compact-table load-table">
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
      <table class="compact-table meal-table">
        <thead><tr><th>Food</th><th class="num">BCL</th><th class="num">PYCL</th><th class="num">EYCL</th><th class="num">C/C (TC)</th><th class="num">C/A (CC)</th><th class="num">Total</th></tr></thead>
        <tbody>
          ${rows.map((row, r) => `<tr><td>${row[0]}</td>${row.slice(1).map((value, c) => `<td class="num">${editable ? `<input class="mini-input" value="${value}" onchange="state.kot.${key}[${r}][${c + 1}]=Number(this.value)||0;saveState();render()">` : value}</td>`).join("")}<td class="num"><strong>${total(row)}</strong></td></tr>`).join("")}
          <tr class="total-row"><td>Total</td>${[1,2,3,4,5].map((index) => `<td class="num">${sumColumn(rows, index)}</td>`).join("")}<td class="num">${rows.reduce((sum, row) => sum + total(row), 0)}</td></tr>
        </tbody>
      </table>
    </div>
  `;
}

function dynamicMealCalculationTable(flight = selectedFlight()) {
  const calc = calculatedKot(flight);
  return `
    <div class="table-wrap">
      <table class="compact-table meal-table">
        <thead><tr><th>Meal Code</th><th>Meal Type</th><th>Menu Item</th><th>Ratio</th><th class="num">Calculated Qty</th><th>Rate Master</th></tr></thead>
        <tbody>
          ${calc.meals.map((meal) => `<tr><td>${meal.code}</td><td>${meal.type}</td><td>${meal.name}</td><td>${meal.ratio}</td><td class="num"><strong>${meal.qty}</strong></td><td>${meal.rateCode} @ ${Number(meal.rate).toFixed(2)}</td></tr>`).join("")}
          <tr><td>SPML</td><td>Special Meals</td><td>Airline supplied special meal count</td><td>${flight.specialMealRule}</td><td class="num"><strong>${calc.specialMeals}</strong></td><td>MEAL-SPML @ 8.64</td></tr>
          <tr class="total-row"><td colspan="4">Total Meals To Prepare</td><td class="num">${calc.totalMeals}</td><td>Final pax: ${calc.finalPax}</td></tr>
        </tbody>
      </table>
    </div>
  `;
}

function specialMealsTable(editable = false) {
  const flight = selectedFlight();
  const meals = flight.specialMeals || state.kot.specialMeals;
  const keys = Object.keys(meals);
  const values = Object.values(meals);
  return `
    <table class="compact-table special-meals-table">
      <thead><tr>${keys.map((key) => `<th class="num">${key}</th>`).join("")}<th class="num">Total</th></tr></thead>
      <tbody><tr>${keys.map((key) => `<td class="num">${editable ? `<input class="mini-input" value="${meals[key]}" onchange="updateSpecialMeal('${key}', this.value)">` : meals[key]}</td>`).join("")}<td class="num">${values.reduce((a, b) => a + Number(b), 0)}</td></tr></tbody>
    </table>
  `;
}

function dynamicAncillaryTable(flight = selectedFlight(), editable = false) {
  const rows = calculatedAncillaries(flight);
  return `
    <table class="compact-table ancillary-table">
      <thead><tr><th>Item</th><th>Unit</th><th>Rule</th><th class="num">Quantity</th></tr></thead>
      <tbody>${rows.map((row, index) => `<tr><td>${editable ? `<input class="input cell-input dish-input" value="${escapeHtml(row.item)}" onchange="updateAncillary(${index}, 'item', this.value)">` : row.item}</td><td>${row.unit}</td><td>${row.rule}</td><td class="num"><strong>${row.qty}</strong></td></tr>`).join("")}</tbody>
    </table>
  `;
}

function ancillaryTable(limit = state.kot.ancillaries.length) {
  const rows = state.kot.ancillaries.slice(0, limit);
  return `
    <table class="compact-table ancillary-table">
      <thead><tr><th>Item</th><th>Unit</th><th class="num">1st Service</th><th class="num">2nd Service</th><th class="num">Total</th></tr></thead>
      <tbody>${rows.map((row) => `<tr><td>${row[0]}</td><td>${row[1]}</td><td class="num">${row[2]}</td><td class="num">${row[3]}</td><td class="num">${row[2] + row[3]}</td></tr>`).join("")}</tbody>
    </table>
  `;
}

function chartTotalPax(capacity = state.loadingChart.capacity) {
  return Number(capacity.total) || Number(capacity.j) + Number(capacity.w) + Number(capacity.y) + Number(capacity.crew);
}

function chartPassengerPax(capacity = state.loadingChart.capacity) {
  return chartTotalPax(capacity);
}

function calculateLoadingQty(row, pax, capacity = state.loadingChart.capacity) {
  if (row.ratioValue === "JH150") return Math.max(1, Math.ceil(pax / 25));
  if (row.ratioType.startsWith("J")) return Number(capacity.j || 0);
  if (row.ratioType.startsWith("W")) return Number(capacity.w || 0);
  if (row.ratioType.startsWith("Y")) return Number(capacity.y || 0);
  if (row.ratioType.startsWith("Crew")) return Number(capacity.crew || 0);
  return pax;
}

function totalLoadingQuantity() {
  const pax = chartPassengerPax();
  return state.loadingChart.rows.reduce((sum, row) => sum + calculateLoadingQty(row, pax), 0);
}

function chartHeaderCards() {
  const chart = state.loadingChart;
  return [
    ["Airline", chart.airline],
    ["Aircraft Type", chart.aircraftType],
    ["Chart Code", chart.chartCode],
    ["Effective From", chart.effectiveFrom],
    ["Flight No.", chart.flightNo],
    ["Meal Type", chart.mealType],
    ["Version", chart.version],
    ["Effective To", chart.effectiveTo],
    ["Sector", chart.sector],
    ["Meal Time", chart.mealTime]
  ];
}

function kotLoadedMealChoices(flight) {
  const rows = state.loadingChart.rows;
  const passengerPax = flight.j + flight.y;
  return `
    <div class="table-wrap">
      <table class="compact-table kot-loaded-table">
        <thead><tr><th>Dish Code</th><th>Dish Name</th><th>Unit</th><th>Ratio Source</th><th class="num">J</th><th class="num">Y</th><th class="num">Crew</th><th class="num">Loaded Qty</th></tr></thead>
        <tbody>${rows.map((row) => {
          const loadedQty = calculateLoadingQty(row, passengerPax, { j: flight.j, w: 0, y: flight.y, crew: flight.tc + flight.cc });
          return `<tr><td>${row.code}</td><td>${row.name}</td><td>${row.unit}</td><td>${row.ratioValue}<br><span class="muted">${row.ratioType}</span></td><td class="num">${flight.j}</td><td class="num">${flight.y}</td><td class="num">${flight.tc + flight.cc}</td><td class="num"><strong>${loadedQty}</strong></td></tr>`;
        }).join("")}</tbody>
      </table>
    </div>
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
  const rows = kitchenScheduleRows();
  const highLoadCount = rows.filter(({ calc }) => calc.finalPax >= 220).length;
  const totalPax = rows.reduce((sum, row) => sum + row.calc.finalPax, 0);
  const totalMeals = rows.reduce((sum, row) => sum + row.calc.totalMeals, 0);
  const body = `
    <section class="content">
      <div class="toolbar">
        <button class="btn" onclick="setScreen('queue')">Back to Flight Queue</button>
        <span style="flex:1"></span>
        <button class="btn green" onclick="openDisplayWindow('kitchen')">Open Kitchen Display Window</button>
      </div>
      <div class="panel">
        <div class="panel-head">
          <h2>Production Kitchen Display</h2>
          <span class="badge ${highLoadCount ? "pending" : "confirmed"}">${highLoadCount ? `${highLoadCount} high load alert` : "All loads normal"}</span>
        </div>
        <div class="notice compact-notice"><span class="check">✓</span><div><b>Confirmed KOTs only</b><br><span class="muted">Any KOT update recalculates the shared flight data and refreshes this board.</span></div></div>
        <div class="kitchen-launch-grid">
          ${kpi("FL", "Upcoming Flights", String(rows.length), "Kitchen display")}
          ${kpi("PX", "Final Pax", totalPax.toLocaleString(), "Confirmed KOTs", "green")}
          ${kpi("ML", "Meals To Prepare", totalMeals.toLocaleString(), "Confirmed KOTs", "amber")}
          ${kpi("AL", "High Load Alerts", String(highLoadCount), "Flashes red on display", highLoadCount ? "red" : "green")}
        </div>
      </div>
      <div class="table-wrap">
        <table>
          <thead><tr><th>STD</th><th>Flight No.</th><th>Airline</th><th>Sector</th><th class="num">Total Pax</th><th>Dispatch</th><th>Status</th></tr></thead>
          <tbody>${rows.map(({ flight, plan, calc }) => `<tr><td class="blue-text">${flight.std}</td><td><strong>${flight.flightNo}</strong></td><td>${flight.airline}</td><td>${flight.sector}</td><td class="num"><strong>${calc.finalPax}</strong></td><td>${plan.dispatch}</td><td>${badge(flight.production)}</td></tr>`).join("") || `<tr><td colspan="7" class="empty-state">No confirmed KOTs are ready for kitchen display.</td></tr>`}</tbody>
        </table>
      </div>
    </section>
  `;
  return layout("Kitchen Board", "Launch separate production display", body);
}

function renderKitchenDisplay() {
  return kitchenBoardScreen();
}

function kitchenBoardScreen() {
  const rows = kitchenScheduleRows();
  const totalPax = rows.reduce((sum, row) => sum + row.calc.finalPax, 0);
  const totalMeals = rows.reduce((sum, row) => sum + row.calc.totalMeals, 0);
  const totalCrew = rows.reduce((sum, row) => sum + row.calc.crew, 0);
  return `
    <main class="kitchen-display-board">
      <header class="kitchen-display-head">
        <div class="kitchen-display-brand">
          <img class="kitchen-soaltee-logo" src="659d29fe3627d_1704798718.png" alt="The Soaltee">
          <span></span>
          <img class="kitchen-gate-logo" src="gate-gourmet-logo-vector.svg" alt="Gategourmet">
        </div>
        <div>
          <h1>Production Kitchen - Upcoming Flights</h1>
        </div>
        <div class="kitchen-display-time">
          <b>15 Jun 2026</b><span>| Mon</span><strong>10:24 AM</strong><small><i></i> Live</small>
        </div>
      </header>
      <section class="kitchen-kpis">
        ${kitchenKpi("FL", "Confirmed Flights", String(rows.length), "", "blue")}
        ${kitchenKpi("PX", "Final Pax", totalPax.toLocaleString(), "", "green")}
        ${kitchenKpi("ML", "Meals To Prepare", totalMeals.toLocaleString(), "", "amber")}
        ${kitchenKpi("CR", "Total Crew", String(totalCrew), "(TC + CC)", "purple")}
        ${kitchenKpi("ND", "Next Dispatch", rows[0]?.plan.dispatch || "-", rows[0]?.flight.flightNo || "", "cyan")}
        ${kitchenKpi("OT", "Confirmed", String(rows.filter(({ flight }) => flight.kot === "confirmed").length), "", "cyan")}
        ${kitchenKpi("DL", "Exceptions", String(rows.filter(({ flight }) => finalPassengerCount(flight) > flight.capacity).length), "", "red")}
      </section>
      <section class="kitchen-board-table-wrap">
        <table class="kitchen-board-table">
          <colgroup>
            <col class="col-std"><col class="col-flight"><col class="col-airline"><col class="col-sector">
            <col class="col-small"><col class="col-small"><col class="col-small"><col class="col-small"><col class="col-total">
            <col class="col-meal"><col class="col-qty"><col class="col-meal"><col class="col-qty"><col class="col-crew"><col class="col-qty">
            <col class="col-time"><col class="col-time"><col class="col-time"><col class="col-status">
          </colgroup>
          <thead>
            <tr>
              <th rowspan="2">STD</th><th rowspan="2">Flight No</th><th rowspan="2">Airline</th><th rowspan="2">Sector</th>
              <th colspan="5">Passengers</th><th colspan="6">Meal Codes & Meals Count</th>
              <th>Hot Meal</th><th>Cold Meal</th><th>Dispatch</th><th rowspan="2">Status</th>
            </tr>
            <tr>
              <th>J</th><th>Y</th><th>TC</th><th>CC</th><th>Total</th>
              <th>J Meal Code</th><th>Qty</th><th>Y Meal Code</th><th>Qty</th><th>Crew Meal</th><th>Qty</th>
              <th>Dish Out</th><th>Prep. Time</th><th>Time</th>
            </tr>
          </thead>
          <tbody>${rows.map(kitchenBoardRow).join("") || `<tr><td colspan="19">No confirmed KOTs for kitchen display.</td></tr>`}</tbody>
        </table>
      </section>
      <footer class="kitchen-display-foot">
        <div><b>Notes:</b><span>All times are as per local time (KTM)</span><span>Refer KOT for any changes</span><span>Thank You!</span></div>
        <div><b>Last Updated:</b><span>10:24 AM</span></div>
      </footer>
    </main>
  `;
}

function kitchenScheduleRows() {
  return state.flights
    .filter((flight) => flight.kot === "confirmed")
    .slice(0, 8)
    .map((flight) => ({
      flight,
      calc: calculatedKot(flight),
      plan: { hotMeal: "13:15", coldMeal: "13:00", dispatch: "14:45" }
    }));
}

function kitchenKpi(icon, label, value, sub, tone) {
  return `<div class="kitchen-kpi ${tone}"><span>${icon}</span><div><small>${label}</small><b>${value}</b>${sub ? `<em>${sub}</em>` : ""}</div></div>`;
}

function kitchenBoardRow({ flight, plan, calc }) {
  const isHighLoad = calc.finalPax >= 220;
  const firstMeal = calc.meals[0] || { code: "-", name: "", qty: 0 };
  const secondMeal = calc.meals[1] || { code: "-", name: "", qty: 0 };
  return `
    <tr class="${isHighLoad ? "high-load-flight" : ""}">
      <td class="kitchen-std">${flight.std}</td>
      <td class="kitchen-flight-no">${flight.flightNo.replace(/([A-Z]+)(\\d+)/, "$1 $2")}</td>
      <td><span class="kitchen-airline ${flight.airlineClass}">${flight.airline}</span></td>
      <td>${flight.sector}</td>
      <td>${flight.j}</td><td>${calc.finalPax}</td><td>${flight.tc}</td><td>${flight.cc}</td>
      <td class="kitchen-total-pax">${calc.finalPax + calc.crew}</td>
      <td>${mealCodeBlock(firstMeal.code, firstMeal.name)}</td><td>${firstMeal.qty}</td>
      <td>${mealCodeBlock(secondMeal.code, secondMeal.name)}</td><td>${secondMeal.qty}</td>
      <td>${mealCodeBlock("SPML", "Special Meals")}</td><td>${calc.specialMeals}</td>
      <td class="kitchen-time-cell">${plan.hotMeal}</td>
      <td class="kitchen-time-cell">${plan.coldMeal}</td>
      <td class="kitchen-time-cell">${plan.dispatch}</td>
      <td><span class="kitchen-status ${String(flight.production).replace(/\s+/g, "-")}">${flight.production}</span></td>
    </tr>
  `;
}

function mealCodeBlock(code, name) {
  return `<div class="meal-code">${code}<small>${name || "&nbsp;"}</small></div>`;
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
  const calc = calculatedKot(flight);
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
      <div class="paper-grid challan-flight-grid">
        <table class="compact-table"><tbody>
          ${[["Flight No.", flight.flightNo], ["Registration", flight.reg], ["A/C Type", flight.aircraft], ["Capacity", flight.capacity], ["Sector", flight.sector], ["Operation Date", state.kot.date], ["Meal Plan", flight.mealPlan], ["Final Pax", calc.finalPax]].map(infoRow).join("")}
        </tbody></table>
        ${loadTableReadOnly()}
      </div>
      <div class="paper-grid equal challan-meal-grid">
        ${dynamicMealCalculationTable(flight)}
        ${specialMealsTable()}
      </div>
      <div style="margin-top:12px">${dynamicAncillaryTable(flight)}</div>
      <div class="paper-grid three" style="margin-top:12px">
        <div class="panel"><h3>Remarks / Instructions</h3><p>${escapeHtml(flight.operationalRemarks).replace(/\n/g, "<br>")}</p></div>
        ${sidePanel("Key Timings", [["Hot Meal Dish Out", "13:15"], ["Cold Meal Preparation", "13:00"], ["Dispatch Time", "14:45"]])}
        ${sidePanel("Delivery Totals", [["Meals", calc.totalMeals], ["Special Meals", calc.specialMeals], ["Ancillary Lines", calc.ancillaries.length], ["Total Delivered Qty", calc.deliveredTotal], ["Chalan Status", state.challanLocked ? "Locked" : "Preview"]])}
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
  const flight = selectedFlight();
  const calc = calculatedKot(flight);
  const rows = [
    ["Configured Capacity", flight.j, 0, flight.capacity, flight.tc, flight.cc],
    ["Confirmed Pax", 0, 0, flight.confirmedPax, 0, 0],
    ["Additional Pax", 0, 0, flight.additionalPax, 0, 0],
    ["Final Pax On Board", flight.j, 0, calc.finalPax, flight.tc, flight.cc],
    ["Final Meal On Board", 0, 0, calc.totalMeals, 0, 0]
  ];
  return `
    <table class="compact-table load-table">
      <thead><tr><th colspan="6" class="num">Pax on Board</th></tr><tr><th></th><th>BCL</th><th>PYCL</th><th>EYCL</th><th>C/C (TC)</th><th>C/A (CC)</th></tr></thead>
      <tbody>${rows.map((row) => `<tr><td>${row[0]}</td>${row.slice(1).map((value) => `<td class="num">${value}</td>`).join("")}</tr>`).join("")}</tbody>
    </table>
  `;
}

function renderChallanFull() {
  return layout("Gate Pass Cum Delivery Challan", "Printable meal on board document", `<section class="content">${challanPaper(true)}</section>`);
}

function renderChallanPreview() {
  const flight = selectedFlight();
  const body = `
    <section class="content">
      <div class="toolbar">
        <button class="btn" onclick="setScreen('kot')">Back to KOT Entry</button>
        <span style="flex:1"></span>
        <button class="btn ${state.challanLocked ? "locked" : ""}" onclick="setScreen('kot')">Edit KOT</button>
        <button class="btn" onclick="downloadDemoDocument('challan')">Download PDF</button>
        <button class="btn blue" onclick="setupInvoiceFromChallan()">Set Up Invoice</button>
        <button class="btn green" onclick="lockChallan()">Print Challan</button>
      </div>
      <div class="notice"><span class="check">✓</span><div><b>Preview Generated Successfully</b><br><span class="muted">Please verify all details carefully. ${state.challanLocked ? "This document is locked from editing." : "You can go back and edit KOT if changes are required."}</span></div></div>
      <div class="preview-layout">
        ${challanPaper(false)}
        <aside>
          ${sidePanel("Document Status", [["KOT Status", badge(flight.kot)], ["Meal Status", badge(flight.meal)], ["Ancillary Status", badge("calculated")], ["Last Updated", flight.lastCalculatedAt || "15/06/2026 10:24"], ["Updated By", "operations1"]])}
          <div class="panel"><h2>Validation Checklist</h2>${validationList("document", flight)}</div>
          <div class="notice">After printing, the document cannot be modified. Please ensure all details are correct.</div>
          <div class="panel"><h2>Print Options</h2>${["Paper Size", "Orientation", "Copies"].map((label, index) => `<label><span class="muted">${label}</span><input class="input" value="${index === 0 ? "A4" : index === 1 ? "Portrait" : "1"}"></label><br>`).join("")}<label><input type="checkbox" checked> Fit to Page</label><br><label><input type="checkbox" checked> Show Barcode</label></div>
        </aside>
      </div>
    </section>`;
  return layout("Challan Preview", "Preview Gate Pass Cum Delivery Challan", body);
}

function renderInvoice() {
  const flight = selectedFlight();
  if (!state.invoice.sourceChallanNo && (flight.production === "approved" || flight.production === "dispatched")) {
    setupInvoiceFromChallan(false);
  }
  const items = invoiceItems();
  const subtotal = items.reduce((sum, item) => sum + item.qty * item.rate, 0);
  const tax = subtotal * 0.1;
  const totalValue = subtotal + tax;
  const calc = calculatedKot(flight);
  const sourceReady = state.invoice.sourceChallanNo === state.kot.challanNo;
  const body = `
    <section class="content">
      <div class="toolbar">
        <button class="btn" onclick="setScreen('challan-preview')">Back to Chalan</button>
        <span style="flex:1"></span>
        <button class="btn blue" onclick="setupInvoiceFromChallan()">Refresh from Chalan</button>
        <button class="btn" onclick="showToast('Invoice draft saved locally.')">Save Draft</button>
        <button class="btn" onclick="previewInvoice()">Preview Invoice</button>
        <button class="btn green" onclick="generateInvoice()">Generate Invoice</button>
      </div>
      <div class="notice"><span class="check">${sourceReady ? "✓" : "!"}</span><div><b>${sourceReady ? "Invoice setup linked to prepared chalan" : "Invoice setup requires prepared chalan"}</b><br><span class="muted">Finance billing is based on chalan ${state.kot.challanNo}, flight ${flight.flightNo}, confirmed delivered meals and ancillaries.</span></div></div>
      <div class="invoice-layout">
        <div>
          <div class="panel">
            <div class="panel-head"><h2>Chalan Source Setup</h2>${badge(state.invoice.status)}</div>
            <div class="chart-header">
              ${[
                ["Selected Chalan", state.invoice.sourceChallanNo || "Not setup"],
                ["Source Flight", state.invoice.sourceFlightNo || flight.flightNo],
                ["Chalan Approval", badge(flight.production)],
                ["Setup Time", state.invoice.setupAt || "Pending"],
                ["Final Pax", calc.finalPax],
                ["Meals Delivered", calc.totalMeals],
                ["Ancillary Lines", calc.ancillaries.length],
                ["Total Delivered Qty", calc.deliveredTotal]
              ].map(([a,b]) => `<div class="info-row"><span>${a}</span><strong>${b}</strong></div>`).join("")}
            </div>
          </div>
          <div class="panel"><div class="chart-header">${[
            ["Airline", flight.airline], ["Flight Date", state.kot.date], ["Currency", "USD"], ["Sector", flight.sector], ["Challan No.", state.kot.challanNo], ["Exchange Rate (NPR)", "150.35"], ["Flight No.", flight.flightNo], ["Std. Time (STD)", flight.std], ["Invoice No.", state.invoice.number || "Auto (Will be generated)"]
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
          <div class="panel"><h2>Validation Status</h2><div class="status-list">${[
            ["Chalan Selected", sourceReady],
            ["Chalan Approved", flight.production === "approved" || flight.production === "dispatched"],
            ["Delivered Items Verified", calc.totalMeals > 0],
            ["Rates Available", items.every((item) => item.rate > 0)],
            ["Tax Applied", tax > 0],
            [state.invoice.status === "generated" ? "Invoice Generated" : "Invoice Ready", sourceReady]
          ].map(([item, ok]) => `<div class="check-line ${ok ? "" : "warning-line"}"><span class="check">${ok ? "✓" : "!"}</span>${item}</div>`).join("")}</div></div>
          <div class="panel"><h2>Revenue Check</h2>${sidePanel("", [["Expected Value (USD)", totalValue.toFixed(2)], ["Generated Value (USD)", totalValue.toFixed(2)], ["Variance", "0.00"], ["Status", "✓ Matched"]])}</div>
        </aside>
      </div>
    </section>`;
  return layout("Invoice Generation", "Create Invoice from Delivery Challan", body, "finance");
}

function invoiceItems() {
  const flight = selectedFlight();
  const calc = calculatedKot(flight);
  const mealItems = calc.meals.map((meal) => [meal.rateCode, meal.name, "Pax", meal.qty, Number(meal.rate || 0)]);
  const special = calc.specialMeals ? [["MEAL-SPML", "Special Meals", "Pax", calc.specialMeals, 8.64]] : [];
  const ancillaryItems = calc.ancillaries.map((item) => [`ANC-${item.item.slice(0, 10).toUpperCase().replace(/[^A-Z0-9]/g, "")}`, item.item, item.unit, item.qty, item.item.includes("Van") ? 100 : item.unit === "Kg" ? 2 : 0.08]);
  return [
    ["MEAL-TRAY-SETUP", "Tray Setup", "Pax", calc.finalPax, 2.84],
    ...mealItems,
    ...special,
    ["CREW-MEAL", "Crew Meal", "Pax", calc.crew, 4.17],
    ...ancillaryItems,
    ["HANDLING-CHG", "Handling Charge", "No.", 1, 50.00]
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
  const chart = state.loadingChart;
  const body = `
    <section class="content">
      <div class="toolbar"><button class="btn" onclick="setScreen('queue')">Back to Meal Loading Chart List</button><span style="flex:1"></span><button class="btn" onclick="setScreen('loading-preview')">Preview Loading Matrix</button><button class="btn" onclick="window.print()">Print Loading Chart</button><button class="btn green" onclick="saveState();showToast('Meal loading chart saved locally.')">Save</button><button class="btn" onclick="setScreen('queue')">Cancel</button></div>
      <div class="panel"><h2>Chart Header</h2><div class="chart-header">
        ${formField("Airline *", chart.airline, "state.loadingChart.airline=this.value;saveState()")}
        ${formField("Aircraft Type", chart.aircraftType, "state.loadingChart.aircraftType=this.value;saveState()")}
        <label><span class="muted">Day of Ops</span><div class="day-pills"><b>1</b><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span></div></label>
        ${formField("Effective From", chart.effectiveFrom, "state.loadingChart.effectiveFrom=this.value;saveState()")}
        ${formField("Flight No. *", chart.flightNo, "state.loadingChart.flightNo=this.value;saveState()")}
        ${formField("Meal Time *", chart.mealTime, "state.loadingChart.mealTime=this.value;saveState()")}
        ${formField("Chart Code *", chart.chartCode, "state.loadingChart.chartCode=this.value;saveState()")}
        ${formField("Effective To *", chart.effectiveTo, "state.loadingChart.effectiveTo=this.value;saveState()")}
        ${formField("Sector *", chart.sector, "state.loadingChart.sector=this.value;saveState()")}
        ${formField("Meal Type *", chart.mealType, "state.loadingChart.mealType=this.value;saveState()")}
        ${formField("Version *", chart.version, "state.loadingChart.version=this.value;saveState()")}
        ${formField("Rotation Effective From", chart.rotationFrom, "state.loadingChart.rotationFrom=this.value;saveState()")}
        ${formField("Rotation Effective To", chart.rotationTo, "state.loadingChart.rotationTo=this.value;saveState()")}
        <label><span class="muted">Notes</span><textarea onchange="state.loadingChart.notes=this.value;saveState()">${escapeHtml(chart.notes)}</textarea></label>
      </div></div>
      <div class="panel"><div style="display:flex;justify-content:space-between;align-items:center"><h2>Meal Loading Ratio Details</h2><div><button class="btn">Add Row</button> <button class="btn danger">Delete Row</button> <button class="btn">Import from Template</button></div></div>${ratioTable()}</div>
      <div class="paper-grid">
        <div class="panel"><h2>Ratio Type Guide</h2><p><b>1 : 1 (Per Pax)</b> = Item quantity increases one by one with each passenger.</p><p><b>J (Business)</b> = Quantity based on Business Class ratio.</p><p><b>W / Y</b> = Quantity based on cabin class ratio.</p></div>
        ${sidePanel("Summary", [["Total Items", chart.rows.length], ["Service", "1"], ["Meal Time", chart.mealType], ["Aircraft Capacity", chartTotalPax()], ["Chart Status", badge("confirmed")]])}
      </div>
    </section>`;
  return layout("Meal Loading Chart Maintenance", "Create & maintain meal loading chart ratios", body);
}

function loadingRows() {
  return state.loadingChart.rows;
}

function ratioTable() {
  const ratioTypes = ["1 : 1 (Per Pax)", "J (Business)", "W (Premium Economy)", "Y (Economy)", "Crew"];
  return `<div class="table-wrap"><table><thead><tr><th>Seq. No.</th><th>Service Seq.</th><th>Service Type</th><th>Dish Code</th><th>Dish Name</th><th>Unit</th><th>Ratio Type</th><th>Ratio Value</th><th>Min Pax</th><th>Max Pax</th><th>Remarks</th><th>Actions</th></tr></thead><tbody>${loadingRows().map((row, i) => `<tr><td>${i + 1}</td><td>1</td><td>${state.loadingChart.mealType}</td><td><input class="input cell-input" value="${escapeHtml(row.code)}" onchange="updateLoadingRow(${i}, 'code', this.value)"></td><td><input class="input cell-input dish-input" value="${escapeHtml(row.name)}" onchange="updateLoadingRow(${i}, 'name', this.value)"></td><td><input class="input cell-input" value="${escapeHtml(row.unit)}" onchange="updateLoadingRow(${i}, 'unit', this.value)"></td><td><select class="select cell-input" onchange="updateLoadingRow(${i}, 'ratioType', this.value)">${ratioTypes.map((type) => `<option ${type === row.ratioType ? "selected" : ""}>${type}</option>`).join("")}</select></td><td><input class="input cell-input" value="${escapeHtml(row.ratioValue)}" onchange="updateLoadingRow(${i}, 'ratioValue', this.value)"></td><td>1</td><td>9999</td><td>${escapeHtml(row.remarks)}</td><td><button class="btn icon-btn" title="Edit row">ED</button></td></tr>`).join("")}</tbody></table></div>`;
}

function renderLoadingPreview() {
  const points = [1, 2, 3, 4, 5, 10, 20, 30, 50, 100, 150, 180, 189];
  const chart = state.loadingChart;
  const body = `
    <section class="content">
      <div class="toolbar"><button class="btn" onclick="setScreen('loading-maintenance')">Back to Meal Loading Chart</button><span style="flex:1"></span><button class="btn" onclick="downloadDemoDocument('loading-chart')">Download PDF</button><button class="btn" onclick="window.print()">Print Chart</button><button class="btn">Export to Excel</button></div>
      <div class="panel"><div class="chart-header">${chartHeaderCards().map(([a,b]) => `<div class="info-row"><span>${a}</span><b>${b}</b></div>`).join("")}</div></div>
      <div class="panel chart-capacity-panel"><div><div class="tabs"><button class="active">All Classes</button><button>Business (J)</button><button>Premium Economy (W)</button><button>Economy (Y)</button><button>Crew</button></div></div><div class="capacity-cards"><div><span>Aircraft Capacity</span><b>${chartTotalPax()}</b></div><div><span>Business (J)</span><b>${chart.capacity.j}</b></div><div><span>Premium Economy (W)</span><b>${chart.capacity.w}</b></div><div><span>Economy (Y)</span><b>${chart.capacity.y}</b></div><div><span>Crew</span><b>${chart.capacity.crew}</b></div></div></div>
      <div class="matrix-page">
        <div class="panel"><h2>Loading Matrix (Quantity Per Pax)</h2><div class="table-wrap"><table><thead><tr><th>Dish Code</th><th>Dish Name</th><th>Unit</th><th>Ratio Type / Value</th>${points.map((p) => `<th class="num">${p}</th>`).join("")}</tr></thead><tbody>${loadingRows().map((row) => `<tr><td>${row.code}</td><td>${row.name}</td><td>${row.unit}</td><td>${row.ratioValue}<br><span class="muted">${row.ratioType}</span></td>${points.map((p) => `<td class="num">${calculateLoadingQty(row, p)}</td>`).join("")}</tr>`).join("")}</tbody></table></div></div>
        <aside>
          <div class="panel"><h2>Filter & View Options</h2><label><input type="radio" checked> All Pax (1 to Capacity)</label><br><label><input type="radio"> Selected Range</label><br><label><input type="radio"> Key Pax Points</label><hr>${points.slice(0, 10).map((p) => `<label style="display:inline-block;width:70px"><input type="checkbox" checked> ${p}</label>`).join("")}<hr><label><input type="checkbox" checked> Passenger Items</label><br><label><input type="checkbox" checked> Crew Items</label></div>
          <div class="panel"><h2>Actions</h2><div class="actions-stack"><button class="btn">Print Loading Chart (Full)</button><button class="btn">Download PDF</button><button class="btn" onclick="setScreen('loading-maintenance')">Close</button></div></div>
        </aside>
      </div>
      <div class="paper-grid three">
        ${sidePanel("Matrix Summary", [["Total Items", chart.rows.length], ["Total Pax", chartTotalPax()], ["Meal Type", chart.mealType], ["Total Qty", totalLoadingQuantity().toLocaleString()]])}
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
  const calc = calculatedKot(flight);
  const existing = document.querySelector(".modal-backdrop");
  if (existing) existing.remove();
  document.body.insertAdjacentHTML("beforeend", `
    <div class="modal-backdrop" onclick="closeModal(event)">
      <div class="modal" role="dialog" aria-modal="true">
        <div class="modal-head"><h2 style="margin:0">Flight Operational Review</h2><button class="btn icon-btn" onclick="closeModal()">×</button></div>
        <div class="modal-body">
          <div class="chart-header">
            ${[["Flight Number", flight.flightNo], ["Airline", flight.airline], ["Sector", flight.sector], ["Aircraft", flight.aircraft], ["Registration", flight.reg], ["STD", flight.std], ["Capacity", flight.capacity], ["Final Pax", calc.finalPax], ["Meal Counts", calc.totalMeals], ["Menu Plan", flight.mealPlan], ["Dispatch Timing", "14:45"], ["Approval Status", badge(flight.production)], ["KOT Status", badge(flight.kot)]].map(([label, value]) => `<div class="mini-card"><span class="muted">${label}</span><br><b>${value}</b></div>`).join("")}
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
