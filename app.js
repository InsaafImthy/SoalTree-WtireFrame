const LEGACY_STORAGE_KEY = "soaltee-kot-wireframe-state-v1";
const STORAGE_KEY = "soaltee-kot-wireframe-state-v2";
const STATE_VERSION = 2;
const KOT_STEPS = ["Master Data", "Pax Update", "Special Meals", "Ancillaries", "Meal Calculation", "Review & Summary"];
const MASTER_SCREENS = ["flight-master", "menu-master", "flight-menu-mapping", "ancillary-master", "loading-sheet-master"];

const seed = {
  screen: "queue",
  selectedFlight: "FZ576",
  kotStep: 0,
  challanLocked: false,
  queueFilters: { status: "All Status", configStatus: "All Config", airline: "All Airlines", sector: "All Sectors", search: "" },
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

function createSeedState() {
  const next = structuredClone(seed);
  next.version = STATE_VERSION;
  next.operatingDate = "2026-06-15";
  next.masters = createSeedMasters(next);
  next.dailyOperations = createDailyOperations(next.flights, next.masters);
  next.challans = [];
  next.invoices = [];
  next.auditTrail = [
    { id: generateId("audit"), at: "2026-06-15 10:24", action: "Seed data initialized", entityType: "System", entityId: "demo" }
  ];
  next.selectedFlightMasterId = next.masters.flights[0]?.id || "";
  next.selectedMenuId = next.masters.menus[0]?.id || "";
  next.selectedMappingId = next.masters.flightMenuMappings[0]?.id || "";
  next.selectedAncillaryId = next.masters.ancillaryItems[0]?.id || "";
  next.selectedLoadingSheetId = next.masters.loadingSheets[0]?.id || "";
  return next;
}

function migrateState(saved) {
  const base = createSeedState();
  const next = { ...base, ...(saved || {}) };
  next.version = STATE_VERSION;
  next.flights = Array.isArray(saved?.flights) && saved.flights.length ? saved.flights : base.flights;
  next.loadingChart = saved?.loadingChart || base.loadingChart;
  next.masters = normalizeMasters(saved?.masters, next);
  next.dailyOperations = Array.isArray(saved?.dailyOperations) && saved.dailyOperations.length
    ? saved.dailyOperations
    : createDailyOperations(next.flights, next.masters);
  next.auditTrail = Array.isArray(saved?.auditTrail) ? saved.auditTrail : base.auditTrail;
  next.challans = Array.isArray(saved?.challans) ? saved.challans.map(normalizeChallanRecord) : base.challans;
  next.invoices = Array.isArray(saved?.invoices) ? saved.invoices : [];
  return next;
}

function normalizeMasters(masters, sourceState = state) {
  const seeded = createSeedMasters(sourceState || seed);
  const normalized = {
    flights: Array.isArray(masters?.flights) && masters.flights.length ? masters.flights : seeded.flights,
    menus: Array.isArray(masters?.menus) && masters.menus.length ? masters.menus : seeded.menus,
    flightMenuMappings: Array.isArray(masters?.flightMenuMappings) && masters.flightMenuMappings.length ? masters.flightMenuMappings : seeded.flightMenuMappings,
    ancillaryItems: Array.isArray(masters?.ancillaryItems) && masters.ancillaryItems.length ? masters.ancillaryItems : seeded.ancillaryItems,
    loadingSheets: Array.isArray(masters?.loadingSheets) && masters.loadingSheets.length ? masters.loadingSheets : seeded.loadingSheets
  };
  normalized.flights = normalized.flights.map(normalizeFlightMasterRecord);
  normalized.menus = normalized.menus.map(normalizeMenuRecord);
  normalized.flightMenuMappings = normalized.flightMenuMappings.map(normalizeMappingRecord);
  normalized.ancillaryItems = normalized.ancillaryItems.map(normalizeAncillaryRecord);
  normalized.loadingSheets = normalized.loadingSheets.map(normalizeLoadingSheetRecord);
  return normalized;
}

function createSeedMasters(sourceState = seed) {
  const sourceFlights = Array.isArray(sourceState.flights) && sourceState.flights.length ? sourceState.flights : seed.flights;
  const flights = sourceFlights.map((flight, index) => makeFlightMasterFromFlight(flight, index));
  const menus = createSeedMenus(sourceState);
  const flightMenuMappings = flights.map((flight, index) => ({
    id: generateId("map", index),
    mappingCode: `MAP-${flight.flightNumber}-${String(index + 1).padStart(2, "0")}`,
    flightMasterId: flight.id,
    menuId: menus[index % Math.max(menus.length - 1, 1)].id,
    serviceSequence: "1",
    serviceType: menus[index % Math.max(menus.length - 1, 1)].serviceType,
    effectiveFrom: "2026-02-01",
    effectiveTo: "2026-08-24",
    priority: index === 0 ? 1 : 5,
    status: "Active",
    notes: index === flights.length - 1 ? "Example for later validation: confirm latest airline rotation before operations." : "Standard active flight-menu assignment."
  }));
  const ancillaryItems = createSeedAncillaryItems(flights);
  const loadingSheets = createSeedLoadingSheets(sourceState, flights, menus);
  return { flights, menus, flightMenuMappings, ancillaryItems, loadingSheets };
}

function makeFlightMasterFromFlight(flight, index = 0) {
  const [origin = "", destination = ""] = String(flight.sector || "").split(" - ").map((part) => part.trim());
  const airlineCode = String(flight.flightNo || `FL${index + 1}`).replace(/[0-9]/g, "") || "FL";
  const economy = Number(flight.y || flight.capacity || 0);
  const business = Number(flight.j || 0);
  const premium = Number(flight.w || 0);
  return {
    id: flight.flightMasterId || generateId("flt", index),
    flightCode: `${airlineCode}-${flight.flightNo || index + 1}-${origin || "KTM"}-${destination || "TBD"}`,
    airline: flight.airline || "",
    flightNumber: flight.flightNo || "",
    description: `${flight.airline || "Airline"} ${flight.flightNo || ""} ${origin || ""}-${destination || ""}`.trim(),
    origin,
    destination,
    sector: `${origin} - ${destination}`.trim(),
    operatingDays: Array.isArray(flight.operatingDays) ? flight.operatingDays : ["Mon", "Wed", "Fri", "Sun"],
    scheduledDeparture: flight.std || "11:30",
    scheduledArrival: flight.arrivalTime || "15:05",
    effectiveFrom: "2026-02-01",
    effectiveTo: "2026-08-24",
    aircraftType: flight.aircraft || "B737-800",
    defaultRegistration: flight.reg || "",
    businessCapacity: business,
    premiumEconomyCapacity: premium,
    economyCapacity: economy,
    totalPassengerCapacity: business + premium + economy,
    technicalCrewCount: Number(flight.tc || 2),
    cabinCrewCount: Number(flight.cc || 6),
    loadingBay: index % 3 === 0 ? "Bay 02" : "Bay 01",
    gateType: flight.aircraft === "B777-300ER" || flight.aircraft === "A330" ? "Wide Body" : "Narrow Body",
    upliftType: "Full Uplift",
    hotMealDishOutTime: "13:15",
    coldMealPreparationTime: "13:00",
    dispatchTime: "14:45",
    remarks: flight.operationalRemarks || "Standard uplift.",
    status: "Active"
  };
}

function createSeedMenus(sourceState = seed) {
  const rows = (sourceState.loadingChart?.rows || seed.loadingChart.rows).map((row, index) => ({
    id: generateId("mlin", index),
    itemCode: row.code,
    itemName: row.name,
    category: categoryFromDish(row.name, row.remarks),
    mealType: index < 5 ? "Hot Breakfast" : "Tray Setup",
    classification: row.name.toLowerCase().includes("veg") || row.name.toLowerCase().includes("uttapam") ? "Vegetarian" : index < 5 ? "Non-Vegetarian" : "Other",
    specialMealCode: "",
    unit: row.unit,
    unitPrice: index < 5 ? 3.8 : index < 9 ? 0.45 : 2.84,
    taxPercentage: 10,
    invoiceItemCode: `INV-${String(row.code).replace(/[^A-Z0-9]/gi, "").slice(0, 10).toUpperCase()}`,
    status: "Active",
    displaySequence: index + 1
  }));
  return [
    {
      id: "menu-cycle-a-hot-breakfast",
      menuCode: "CYCLE-A-HB",
      menuName: "Cycle A Hot Breakfast KTM",
      menuCycle: "Cycle A",
      description: "Primary hot breakfast menu with tray setup and accompaniments.",
      serviceType: "Hot Breakfast",
      serviceSequence: "1",
      cabinClasses: ["Business", "Economy", "Crew"],
      currency: "USD",
      version: "3",
      effectiveFrom: "2026-02-01",
      effectiveTo: "2026-08-24",
      status: "Active",
      lines: rows
    },
    {
      id: "menu-cycle-b-main-meal",
      menuCode: "CYCLE-B-MM",
      menuName: "Cycle B Main Meal KTM",
      menuCycle: "Cycle B",
      description: "Demo main meal cycle used by regional carriers.",
      serviceType: "Main Meal",
      serviceSequence: "1",
      cabinClasses: ["Business", "Economy", "Crew"],
      currency: "USD",
      version: "1",
      effectiveFrom: "2026-02-01",
      effectiveTo: "2026-08-24",
      status: "Active",
      lines: [
        makeMenuLine("MM-NV-01", "Chicken Curry with Rice", "Main Course", "Main Meal", "Non-Vegetarian", "Pax", 4.15, 1),
        makeMenuLine("MM-VG-01", "Vegetable Pulao Meal", "Vegetarian", "Main Meal", "Vegetarian", "Pax", 3.55, 2),
        makeMenuLine("MM-ALT-01", "Pasta Alternate Meal", "Alternate Meal", "Main Meal", "Other", "Pax", 3.7, 3),
        makeMenuLine("CM-001", "Crew Meal Standard", "Crew Meal", "Crew Meal", "Other", "Pax", 4.17, 4)
      ]
    },
    {
      id: "menu-incomplete-demo",
      menuCode: "DRAFT-SPML",
      menuName: "Draft Special Meal Pack",
      menuCycle: "Special",
      description: "Partially configured example for validation demos.",
      serviceType: "Special Meal",
      serviceSequence: "1",
      cabinClasses: ["Economy"],
      currency: "USD",
      version: "0",
      effectiveFrom: "2026-09-01",
      effectiveTo: "2026-12-31",
      status: "Inactive",
      lines: []
    }
  ];
}

function makeMenuLine(code, name, category, mealType, classification, unit, rate, sequence) {
  return {
    id: generateId("mlin", `${code}-${sequence}`),
    itemCode: code,
    itemName: name,
    category,
    mealType,
    classification,
    specialMealCode: "",
    unit,
    unitPrice: rate,
    taxPercentage: 10,
    invoiceItemCode: `INV-${code}`,
    status: "Active",
    displaySequence: sequence
  };
}

function createSeedAncillaryItems(flights) {
  return [
    makeAncillary("ANC-JUICE-1L", "Assorted Fresh Juice - 1000 ml", "Beverage", "Pkt", 1.2, "per_x_pax", { paxDivisor: 65, minimumQuantity: 2 }),
    makeAncillary("ANC-WATER-500", "Mineral Water - 500 ml", "Beverage", "Btl", 0.08, "per_passenger", {}),
    makeAncillary("ANC-ICE", "Ice Cube", "Cold Chain", "Kg", 2, "fixed", { fixedQuantity: 20 }),
    { ...makeAncillary("ANC-CUPS", "Paper Cups", "Service Item", "Pcs", 0.03, "buffer", { bufferPercentage: 5 }), invoiceEnabled: false },
    makeAncillary("ANC-TOPUP-VAN", "Top Up Van", "Logistics", "Trip", 100, "fixed", { fixedQuantity: 1 }),
    {
      ...makeAncillary("ANC-DRAFT", "Draft Airline Amenity", "Other", "Pcs", 0, "manual", {}),
      status: "Inactive",
      applicability: { type: "selected_flight", airline: flights[0]?.airline || "", flightMasterId: flights[0]?.id || "", route: "", aircraftType: "" }
    }
  ];
}

function makeAncillary(code, name, category, unit, rate, calculationType, overrides) {
  return {
    id: generateId("anc", code),
    itemCode: code,
    itemName: name,
    description: `${name} operational ancillary item.`,
    category,
    unit,
    currency: "USD",
    unitRate: rate,
    taxPercentage: 10,
    invoiceItemCode: `INV-${code}`,
    invoiceEnabled: true,
    status: "Active",
    applicability: { type: "all_airlines", airline: "", flightMasterId: "", route: "", aircraftType: "" },
    calculationRule: {
      calculationType,
      quantityPerPax: calculationType === "per_passenger" ? 1 : 0,
      paxDivisor: 0,
      fixedQuantity: 0,
      bufferPercentage: 0,
      minimumQuantity: 0,
      maximumQuantity: null,
      roundingMethod: "ceil",
      allowOperationalOverride: true,
      ...overrides
    }
  };
}

function createSeedLoadingSheets(sourceState, flights, menus) {
  const chart = sourceState.loadingChart || seed.loadingChart;
  const flight = flights.find((item) => item.flightNumber === chart.flightNo) || flights[0];
  const menu = menus[0];
  return [
    {
      id: "loadsheet-fz576-hb-v3",
      loadingSheetCode: chart.chartCode || "MLC-FZ576-15062026-03",
      version: chart.version || "3",
      flightMasterId: flight?.id || "",
      aircraftType: chart.aircraftType || flight?.aircraftType || "",
      menuId: menu.id,
      serviceSequence: "1",
      mealType: chart.mealType || menu.serviceType,
      daysOfOperation: flight?.operatingDays || ["Mon", "Tue", "Thu", "Sat"],
      effectiveFrom: "2026-02-01",
      effectiveTo: "2026-08-24",
      rotation: `${chart.rotationFrom || "01-FEB-2026"} - ${chart.rotationTo || "28-FEB-2026"}`,
      notes: chart.notes || "FlyDubai Hot Breakfast MLC",
      status: "Active",
      lines: chart.rows.map((row, index) => {
        const menuLine = menu.lines.find((line) => line.itemCode === row.code) || menu.lines[index];
        return {
          id: generateId("lsln", index),
          menuLineId: menuLine?.id || "",
          menuItemCode: row.code,
          menuItemName: row.name,
          category: menuLine?.category || categoryFromDish(row.name, row.remarks),
          unit: row.unit,
          cabinClass: row.ratioType?.startsWith("J") ? "Business" : row.ratioType?.startsWith("Crew") ? "Crew" : "All",
          ratioType: normalizeRatioType(row.ratioType),
          ratioValue: row.ratioValue,
          fixedQuantity: 0,
          quantityPerPassenger: row.ratioValue === "1:1" ? 1 : 0,
          minimumQuantity: 0,
          maximumQuantity: "",
          bufferPercentage: 0,
          roundingMethod: "ceil",
          displaySequence: index + 1,
          remarks: row.remarks || ""
        };
      })
    },
    {
      id: "loadsheet-partial-demo",
      loadingSheetCode: "MLC-DRAFT-VALIDATION",
      version: "0",
      flightMasterId: flights[1]?.id || "",
      aircraftType: flights[1]?.aircraftType || "A320neo",
      menuId: "menu-incomplete-demo",
      serviceSequence: "1",
      mealType: "Special Meal",
      daysOfOperation: ["Mon"],
      effectiveFrom: "2026-09-01",
      effectiveTo: "2026-12-31",
      rotation: "Draft",
      notes: "Partially configured example.",
      status: "Inactive",
      lines: []
    }
  ];
}

function createDailyOperations(flights, masters) {
  const tempState = { operatingDate: "2026-06-15", masters, dailyOperations: [], flights: flights || [] };
  return generateDailyOperations(tempState.operatingDate || "2026-06-15", tempState, true);
}

function generateDailyOperations(operationDate = state.operatingDate, sourceState = state, silent = false) {
  const existing = Array.isArray(sourceState.dailyOperations) ? sourceState.dailyOperations : [];
  const day = dayName(operationDate);
  const eligibleFlights = (sourceState.masters?.flights || [])
    .filter((flight) => flight.status === "Active")
    .filter((flight) => flight.operatingDays.includes(day))
    .filter((flight) => isDateWithinRange(operationDate, flight.effectiveFrom, flight.effectiveTo));
  const next = existing.filter((operation) => operation.operatingDate !== operationDate);
  eligibleFlights.forEach((flightMaster, index) => {
    const current = existing.find((operation) => operation.operatingDate === operationDate && operation.flightMasterId === flightMaster.id);
    const operation = current ? normalizeDailyOperation(current, sourceState) : buildDailyOperation(operationDate, flightMaster, sourceState, index);
    if (!current && !silent) logAudit("Daily operation generated", "DailyOperation", operation.id, `${flightMaster.flightNumber} for ${operationDate}`);
    next.push(operation);
  });
  sourceState.dailyOperations = next;
  return next.filter((operation) => operation.operatingDate === operationDate);
}

function buildDailyOperation(operationDate, flightMaster, sourceState = state, index = 0) {
  const operation = {
    id: generateId("op", `${operationDate}-${flightMaster.id}`),
    operationDate,
    operatingDate: operationDate,
    flightMasterId: flightMaster.id,
    mappingId: "",
    menuId: "",
    loadingSheetId: "",
    ancillaryItemIds: [],
    flightSnapshot: createSnapshot(flightMaster),
    mappingSnapshot: null,
    menuSnapshot: null,
    loadingSheetSnapshot: null,
    ancillarySnapshots: [],
    confirmedPax: Math.max(0, Number(flightMaster.totalPassengerCapacity || 0) - (index % 2 ? 42 : 35)),
    additionalPax: 0,
    businessPax: Number(flightMaster.businessCapacity || 0),
    premiumEconomyPax: Number(flightMaster.premiumEconomyCapacity || 0),
    economyPax: Math.max(0, Number(flightMaster.totalPassengerCapacity || 0) - Number(flightMaster.businessCapacity || 0) - Number(flightMaster.premiumEconomyCapacity || 0) - (index % 2 ? 42 : 35)),
    technicalCrew: Number(flightMaster.technicalCrewCount || 0),
    cabinCrew: Number(flightMaster.cabinCrewCount || 0),
    specialPassengerCount: 0,
    specialMeals: defaultSpecialMeals(),
    ancillaryOverrides: {},
    allowOverCapacity: false,
    overCapacityReason: "",
    operationalRemarks: flightMaster.remarks || "",
    kot: "Draft",
    meal: "not started",
    dispatch: "pending",
    production: "pending",
    kitchenStatus: "Pending",
    configurationStatus: "Ready",
    configurationMessages: [],
    productionPlanSnapshot: null,
    invoiceLineSnapshot: [],
    kotSnapshot: null,
    kotConfirmedAt: "",
    lastCalculatedAt: "",
    refreshedAt: "",
    auditTrail: ["Daily operation generated from master data."]
  };
  return refreshOperationFromMasters(operation, sourceState, true);
}

function normalizeDailyOperation(operation, sourceState = state) {
  const flightMaster = sourceState.masters?.flights?.find((flight) => flight.id === operation.flightMasterId);
  const legacyFlight = !flightMaster ? sourceState.flights?.find((flight) => flight.flightNo === operation.flightNo) : null;
  const flightSnapshot = operation.flightSnapshot || (flightMaster ? createSnapshot(flightMaster) : legacyFlight ? createSnapshot(makeFlightMasterFromFlight(legacyFlight)) : {});
  const next = {
    ...operation,
    id: operation.id || operation.operationId || generateId("op"),
    operationDate: operation.operationDate || operation.operatingDate || sourceState.operatingDate || "2026-06-15",
    operatingDate: operation.operatingDate || operation.operationDate || sourceState.operatingDate || "2026-06-15",
    flightMasterId: operation.flightMasterId || flightSnapshot.id || "",
    flightSnapshot,
    mappingSnapshot: operation.mappingSnapshot || null,
    menuSnapshot: operation.menuSnapshot || null,
    loadingSheetSnapshot: operation.loadingSheetSnapshot || null,
    ancillarySnapshots: Array.isArray(operation.ancillarySnapshots) ? operation.ancillarySnapshots : [],
    ancillaryItemIds: Array.isArray(operation.ancillaryItemIds) ? operation.ancillaryItemIds : [],
    specialMeals: { ...defaultSpecialMeals(), ...(operation.specialMeals || {}) },
    ancillaryOverrides: operation.ancillaryOverrides || {},
    confirmedPax: Number(operation.confirmedPax || 0),
    additionalPax: Number(operation.additionalPax || 0),
    businessPax: Number(operation.businessPax ?? flightSnapshot.businessCapacity ?? 0),
    premiumEconomyPax: Number(operation.premiumEconomyPax ?? flightSnapshot.premiumEconomyCapacity ?? 0),
    economyPax: Number(operation.economyPax ?? operation.confirmedPax ?? flightSnapshot.economyCapacity ?? 0),
    technicalCrew: Number(operation.technicalCrew ?? flightSnapshot.technicalCrewCount ?? 0),
    cabinCrew: Number(operation.cabinCrew ?? flightSnapshot.cabinCrewCount ?? 0),
    specialPassengerCount: Number(operation.specialPassengerCount || 0),
    allowOverCapacity: Boolean(operation.allowOverCapacity),
    overCapacityReason: operation.overCapacityReason || "",
    operationalRemarks: operation.operationalRemarks || flightSnapshot.remarks || "",
    kot: operation.kot || operation.status || "Draft",
    meal: operation.meal || "not started",
    dispatch: operation.dispatch || "pending",
    production: operation.production || "pending",
    kitchenStatus: operation.kitchenStatus || "Pending",
    configurationStatus: operation.configurationStatus || "Ready",
    configurationMessages: Array.isArray(operation.configurationMessages) ? operation.configurationMessages : [],
    invoiceLineSnapshot: Array.isArray(operation.invoiceLineSnapshot) ? operation.invoiceLineSnapshot : [],
    auditTrail: Array.isArray(operation.auditTrail) ? operation.auditTrail : []
  };
  return refreshOperationFromMasters(next, sourceState, true, Boolean(next.kotSnapshot));
}

function refreshOperationFromMasters(operationOrId, sourceState = state, silent = false, preserveLocked = false) {
  const operation = typeof operationOrId === "string" ? getDailyOperationById(operationOrId, sourceState) : operationOrId;
  if (!operation || (preserveLocked && isKotLocked(operation))) return operation;
  const flightMaster = sourceState.masters.flights.find((flight) => flight.id === operation.flightMasterId);
  if (!flightMaster) return operation;
  const mapping = resolveMenuMapping(operation.operationDate, flightMaster, sourceState);
  const menu = mapping ? sourceState.masters.menus.find((item) => item.id === mapping.menuId) : null;
  const loadingSheet = resolveLoadingSheet(operation.operationDate, flightMaster, menu, mapping, sourceState);
  const ancillaries = resolveApplicableAncillaries(operation.operationDate, flightMaster, sourceState);
  operation.flightSnapshot = createSnapshot(flightMaster);
  operation.mappingId = mapping?.id || "";
  operation.mappingSnapshot = mapping ? createSnapshot(mapping) : null;
  operation.menuId = menu?.id || "";
  operation.menuSnapshot = menu ? createSnapshot(menu) : null;
  operation.loadingSheetId = loadingSheet?.id || "";
  operation.loadingSheetSnapshot = loadingSheet ? createSnapshot(loadingSheet) : null;
  operation.ancillaryItemIds = ancillaries.map((item) => item.id);
  operation.ancillarySnapshots = ancillaries.map(createSnapshot);
  const validation = validateOperationConfiguration(operation);
  operation.configurationStatus = validation.status;
  operation.configurationMessages = validation.messages;
  operation.refreshedAt = nowStamp();
  if (!silent) {
    operation.auditTrail = [...(operation.auditTrail || []), "Masters refreshed into draft operation."].slice(-10);
    logAudit("Masters refreshed into draft operation", "DailyOperation", operation.id, operation.flightSnapshot.flightNumber);
  }
  hydrateOperationFacade(operation);
  return operation;
}

function resolveMenuMapping(operationDate, flightMaster, sourceState = state) {
  return (sourceState.masters?.flightMenuMappings || [])
    .filter((mapping) => mapping.status === "Active")
    .filter((mapping) => mapping.flightMasterId === flightMaster.id)
    .filter((mapping) => isDateWithinRange(operationDate, mapping.effectiveFrom, mapping.effectiveTo))
    .sort((a, b) => Number(a.priority || 99) - Number(b.priority || 99))[0] || null;
}

function resolveLoadingSheet(operationDate, flightMaster, menu, mapping, sourceState = state) {
  if (!menu) return null;
  const day = dayName(operationDate);
  return (sourceState.masters?.loadingSheets || [])
    .filter((sheet) => sheet.status === "Active")
    .filter((sheet) => sheet.flightMasterId === flightMaster.id)
    .filter((sheet) => sheet.menuId === menu.id)
    .filter((sheet) => !mapping?.serviceSequence || !sheet.serviceSequence || String(sheet.serviceSequence) === String(mapping.serviceSequence))
    .filter((sheet) => !sheet.daysOfOperation?.length || sheet.daysOfOperation.includes(day))
    .filter((sheet) => isDateWithinRange(operationDate, sheet.effectiveFrom, sheet.effectiveTo))
    .sort((a, b) => Number(b.version || 0) - Number(a.version || 0))[0] || null;
}

function resolveApplicableAncillaries(operationDate, flightMaster, sourceState = state) {
  return (sourceState.masters?.ancillaryItems || [])
    .filter((item) => item.status === "Active")
    .filter((item) => isDateWithinRange(operationDate, item.effectiveFrom || "1900-01-01", item.effectiveTo || "2999-12-31"))
    .filter((item) => {
      const app = item.applicability || {};
      if (app.type === "selected_airline") return app.airline === flightMaster.airline;
      if (app.type === "selected_flight") return app.flightMasterId === flightMaster.id;
      if (app.type === "selected_route") return app.route === flightMaster.sector;
      if (app.type === "selected_aircraft_type") return app.aircraftType === flightMaster.aircraftType;
      return true;
    });
}

function validateOperationConfiguration(operation) {
  const messages = [];
  if (!operation.flightSnapshot || operation.flightSnapshot.status !== "Active") messages.push("Inactive Master");
  if (!operation.mappingSnapshot) messages.push("Missing Menu Mapping");
  if (!operation.menuSnapshot) messages.push("Missing Menu");
  if (operation.menuSnapshot && !operation.menuSnapshot.lines?.some((line) => line.status === "Active")) messages.push("No active menu lines");
  if (!operation.loadingSheetSnapshot) messages.push("Missing Loading Sheet");
  if (operation.menuSnapshot?.lines?.some((line) => Number(line.unitPrice || 0) <= 0)) messages.push("Missing Pricing");
  if (operation.loadingSheetSnapshot?.lines?.some((line) => !isValidLoadingLine(line))) messages.push("Invalid Ratios");
  return { status: configStatusFromMessages(messages), messages };
}

function configStatusFromMessages(messages) {
  if (!messages.length) return "Ready";
  if (messages.includes("Inactive Master")) return "Inactive Master";
  if (messages.includes("Missing Menu Mapping")) return "Missing Menu Mapping";
  if (messages.includes("Missing Menu") || messages.includes("No active menu lines")) return "Missing Menu";
  if (messages.includes("Missing Loading Sheet")) return "Missing Loading Sheet";
  if (messages.includes("Missing Pricing")) return "Missing Pricing";
  if (messages.includes("Invalid Ratios")) return "Invalid Ratios";
  return messages[0];
}

function createSnapshot(record) {
  return structuredClone(record);
}

function createOperationSnapshot(operation) {
  const plan = calculateOperationalPlan(operation);
  const kotId = operation.kotId || generateId("kot", `${operation.operationDate}-${operation.id}`);
  const kotNumber = operation.kotNumber || `KOT-${String((state.dailyOperations || []).findIndex((item) => item.id === operation.id) + 1 || 1).padStart(4, "0")}`;
  return {
    kotId,
    kotNumber,
    operationId: operation.id,
    operationDate: operation.operationDate,
    flightMasterId: operation.flightMasterId,
    flightSnapshot: createSnapshot(operation.flightSnapshot),
    mappingId: operation.mappingId,
    mappingSnapshot: createSnapshot(operation.mappingSnapshot),
    menuId: operation.menuId,
    menuSnapshot: createSnapshot(operation.menuSnapshot),
    loadingSheetId: operation.loadingSheetId,
    loadingSheetSnapshot: createSnapshot(operation.loadingSheetSnapshot),
    ancillaryItemIds: [...(operation.ancillaryItemIds || [])],
    ancillarySnapshots: createSnapshot(operation.ancillarySnapshots || []),
    productionPlanSnapshot: createSnapshot(plan),
    invoiceLineSnapshot: createSnapshot(plan.invoiceLines || []),
    confirmedAt: nowStamp(),
    confirmedBy: "operations1"
  };
}

function getDailyOperationById(id, sourceState = state) {
  return sourceState.dailyOperations?.find((operation) => operation.id === id || operation.operationId === id);
}

function normalizeChallanRecord(record) {
  return {
    ...record,
    challanId: record.challanId || record.id || generateId("challan"),
    challanNumber: record.challanNumber || record.number || "",
    status: normalizeChallanStatus(record.status || "Generated"),
    generatedAt: record.generatedAt || nowStamp(),
    mealLinesSnapshot: Array.isArray(record.mealLinesSnapshot) ? record.mealLinesSnapshot : [],
    specialMealLinesSnapshot: Array.isArray(record.specialMealLinesSnapshot) ? record.specialMealLinesSnapshot : [],
    ancillaryLinesSnapshot: Array.isArray(record.ancillaryLinesSnapshot) ? record.ancillaryLinesSnapshot : []
  };
}

function normalizeInvoiceRecord(record) {
  return {
    ...record,
    invoiceId: record.invoiceId || record.id || generateId("invoice"),
    invoiceNumber: record.invoiceNumber || record.number || "",
    status: record.status || "Generated",
    mealInvoiceLinesSnapshot: Array.isArray(record.mealInvoiceLinesSnapshot) ? record.mealInvoiceLinesSnapshot : [],
    ancillaryInvoiceLinesSnapshot: Array.isArray(record.ancillaryInvoiceLinesSnapshot) ? record.ancillaryInvoiceLinesSnapshot : []
  };
}

function getKotById(kotId, sourceState = state) {
  return (sourceState.dailyOperations || []).map((operation) => operation.kotSnapshot).find((snapshot) => snapshot?.kotId === kotId);
}

function getChallanById(challanId, sourceState = state) {
  return (sourceState.challans || []).find((challan) => challan.challanId === challanId || challan.id === challanId);
}

function getChallanForOperation(operationId, sourceState = state) {
  return (sourceState.challans || []).find((challan) => challan.sourceOperationId === operationId);
}

function selectedChallan() {
  const flight = selectedFlight();
  const challan = getChallanById(state.selectedChallanId) || getChallanForOperation(flight?.id);
  if (challan) {
    state.selectedChallanId = challan.challanId;
    state.kot.challanNo = challan.challanNumber;
  }
  return challan || null;
}

function getInvoiceById(invoiceId, sourceState = state) {
  return (sourceState.invoices || []).find((invoice) => invoice.invoiceId === invoiceId || invoice.id === invoiceId);
}

function getInvoiceForChallan(challanId, sourceState = state) {
  return (sourceState.invoices || []).find((invoice) => invoice.sourceChallanId === challanId);
}

function selectedInvoice() {
  const challan = selectedChallan();
  const invoice = getInvoiceById(state.selectedInvoiceId) || (challan ? getInvoiceForChallan(challan.challanId) : null);
  if (invoice) state.selectedInvoiceId = invoice.invoiceId;
  return invoice || null;
}

function normalizeChallanStatus(status) {
  const text = titleCase(status);
  if (["Draft", "Generated", "Checked", "Approved", "Dispatched", "Locked"].includes(text)) return text;
  if (text === "Prepared") return "Checked";
  return text || "Generated";
}

function isChallanInvoiceReady(challan) {
  return ["Approved", "Dispatched", "Locked"].includes(normalizeChallanStatus(challan?.status));
}

function createChallanNumber() {
  return `CH-${state.operatingDate.replace(/-/g, "")}-${String((state.challans || []).length + 1).padStart(4, "0")}`;
}

function createInvoiceNumber(challan) {
  return `INV-${String(challan.challanNumber || "CH").replace(/[^A-Z0-9]/gi, "")}`;
}

function validateChallanGeneration(operation) {
  const errors = [];
  if (!operation) errors.push("No KOT exists for the selected operation.");
  if (operation && !operation.kotSnapshot) errors.push("KOT is not confirmed.");
  if (operation && operation.kotSnapshot && !["Confirmed", "Sent to Kitchen", "In Progress", "Prepared", "Approved", "Dispatched"].includes(operation.kot)) errors.push("KOT status is not ready for challan generation.");
  const plan = operation?.kotSnapshot?.productionPlanSnapshot;
  if (operation?.kotSnapshot && (!plan || !Array.isArray(plan.mealLines) || !plan.mealLines.length)) errors.push("KOT quantity snapshot is incomplete.");
  if (operation && getChallanForOperation(operation.id)) errors.push("Challan already exists for this KOT. Open the existing challan instead.");
  return unique(errors);
}

function generateChallanFromKot(operation) {
  const errors = validateChallanGeneration(operation);
  if (errors.length) return { ok: false, errors };
  const kot = createSnapshot(operation.kotSnapshot);
  const plan = kot.productionPlanSnapshot;
  const challan = normalizeChallanRecord({
    challanId: generateId("challan", kot.kotId || operation.id),
    challanNumber: createChallanNumber(),
    sourceOperationId: operation.id,
    sourceKotId: kot.kotId,
    sourceKotNumber: kot.kotNumber,
    sourceKotSnapshot: kot,
    operationDate: kot.operationDate,
    flightSnapshot: createSnapshot(kot.flightSnapshot),
    menuSnapshot: createSnapshot(kot.menuSnapshot),
    loadingSheetSnapshot: createSnapshot(kot.loadingSheetSnapshot),
    passengerSnapshot: {
      confirmedPax: operation.confirmedPax,
      additionalPax: operation.additionalPax,
      finalPax: plan.finalPax,
      businessPax: operation.businessPax,
      premiumEconomyPax: operation.premiumEconomyPax,
      economyPax: operation.economyPax,
      technicalCrew: operation.technicalCrew,
      cabinCrew: operation.cabinCrew,
      crewCount: plan.crew
    },
    mealLinesSnapshot: createSnapshot(plan.mealLines || []),
    specialMealLinesSnapshot: createSnapshot(plan.specialMealLines || []),
    ancillaryLinesSnapshot: createSnapshot(plan.ancillaryLines || plan.ancillaries || []),
    totalsSnapshot: {
      standardMeals: plan.standardMeals,
      specialMeals: plan.specialMeals,
      crewMeals: plan.crew,
      totalMeals: plan.totalMeals,
      totalAncillaryQuantity: plan.totalAncillaryQuantity,
      deliveredTotal: plan.deliveredTotal
    },
    remarks: operation.operationalRemarks || "",
    preparedBy: "operations1",
    checkedBy: "",
    deliveredBy: "",
    receivedBy: "",
    generatedAt: nowStamp(),
    status: "Generated"
  });
  state.challans.push(challan);
  state.selectedChallanId = challan.challanId;
  state.kot.challanNo = challan.challanNumber;
  operation.challanId = challan.challanId;
  operation.challanNumber = challan.challanNumber;
  operation.dispatch = "pending";
  logAudit("Challan generated", "Delivery Challan", challan.challanId, `${challan.challanNumber} from ${kot.kotNumber}`);
  return { ok: true, challan };
}

function updateChallanStatus(status) {
  const challan = selectedChallan();
  if (!challan) {
    showToast("Generate a challan first.");
    return;
  }
  challan.status = normalizeChallanStatus(status);
  const operation = getDailyOperationById(challan.sourceOperationId);
  if (operation) {
    operation.dispatch = challan.status === "Dispatched" || challan.status === "Locked" ? "dispatched" : operation.dispatch;
    operation.production = challan.status === "Approved" ? "approved" : challan.status === "Dispatched" || challan.status === "Locked" ? "dispatched" : operation.production;
    operation.kot = ["Approved", "Dispatched", "Locked"].includes(challan.status) ? "Sent to Kitchen" : operation.kot;
  }
  const actorField = status === "Checked" ? "checkedBy" : status === "Dispatched" ? "deliveredBy" : "";
  if (actorField) challan[actorField] = "operations1";
  logAudit(`Challan ${challan.status.toLowerCase()}`, "Delivery Challan", challan.challanId, challan.challanNumber);
  saveState();
  render();
  showToast(`${challan.challanNumber} marked ${challan.status}.`);
}

function buildMealInvoiceLines(challan) {
  const menu = challan.menuSnapshot || {};
  const currency = menu.currency || "USD";
  const menuLines = menu.lines || [];
  return (challan.mealLinesSnapshot || []).filter((line) => Number(line.qty || 0) > 0).map((line) => {
    const menuLine = menuLines.find((item) => item.id === line.menuLineId || item.itemCode === line.code) || {};
    const unitRate = Number(menuLine.unitPrice ?? line.rate);
    const taxPercentage = Number(menuLine.taxPercentage ?? line.taxPercentage);
    const quantity = Number(line.qty || 0);
    const lineAmount = quantity * unitRate;
    const taxAmount = lineAmount * taxPercentage / 100;
    return {
      sourceMasterId: menuLine.id || line.menuLineId || line.sourceMasterId,
      itemCode: menuLine.invoiceItemCode || line.rateCode || menuLine.itemCode || line.code,
      description: menuLine.itemName || line.name,
      unit: menuLine.unit || line.unit || "Pax",
      quantity,
      unitRate,
      taxPercentage,
      currency,
      lineAmount,
      taxAmount,
      lineTotal: lineAmount + taxAmount
    };
  });
}

function buildAncillaryInvoiceLines(challan) {
  return (challan.ancillaryLinesSnapshot || []).filter((line) => line.invoiceEnabled).filter((line) => Number(line.finalQuantity ?? line.qty ?? 0) > 0).map((line) => {
    const quantity = Number(line.finalQuantity ?? line.qty ?? 0);
    const unitRate = Number(line.unitRate ?? line.invoiceRate);
    const taxPercentage = Number(line.taxPercentage || 0);
    const lineAmount = quantity * unitRate;
    const taxAmount = lineAmount * taxPercentage / 100;
    return {
      sourceMasterId: line.sourceMasterId,
      itemCode: line.invoiceItemCode || line.itemCode,
      description: line.itemName || line.item,
      unit: line.unit,
      quantity,
      unitRate,
      taxPercentage,
      currency: line.currency || challan.menuSnapshot?.currency || "USD",
      lineAmount,
      taxAmount,
      lineTotal: lineAmount + taxAmount
    };
  });
}

function calculateInvoiceTotals(lines) {
  return {
    subtotal: lines.reduce((sum, line) => sum + Number(line.lineAmount || 0), 0),
    taxTotal: lines.reduce((sum, line) => sum + Number(line.taxAmount || 0), 0),
    grandTotal: lines.reduce((sum, line) => sum + Number(line.lineTotal || 0), 0)
  };
}

function validateInvoiceGeneration(challan) {
  const errors = [];
  if (!challan) errors.push("No delivery challan is selected.");
  if (challan && !isChallanInvoiceReady(challan)) errors.push("Invoice can be generated only from an approved, dispatched, or locked challan.");
  if (challan && getInvoiceForChallan(challan.challanId)) errors.push("Invoice already exists for this challan. Use View Invoice.");
  if (!challan) return errors;
  const lines = [...buildMealInvoiceLines(challan), ...buildAncillaryInvoiceLines(challan)];
  if (!lines.length) errors.push("No billable meal or ancillary lines are available.");
  lines.forEach((line) => {
    if (line.unitRate === undefined || Number.isNaN(line.unitRate)) errors.push(`${line.itemCode} rate is missing.`);
    if (Number(line.unitRate) <= 0) errors.push(`${line.itemCode} rate is missing or zero.`);
    if (Number.isNaN(line.taxPercentage) || line.taxPercentage < 0 || line.taxPercentage > 100) errors.push(`${line.itemCode} tax percentage is invalid.`);
  });
  const currencies = unique(lines.map((line) => line.currency || "USD"));
  if (currencies.length > 1) errors.push("Mixed currencies are present. Keep one currency before invoice generation.");
  return unique(errors);
}

function generateInvoiceFromChallan(challan) {
  const errors = validateInvoiceGeneration(challan);
  if (errors.length) return { ok: false, errors };
  const mealLines = buildMealInvoiceLines(challan);
  const ancillaryLines = buildAncillaryInvoiceLines(challan);
  const allLines = [...mealLines, ...ancillaryLines];
  const totals = calculateInvoiceTotals(allLines);
  const invoice = normalizeInvoiceRecord({
    invoiceId: generateId("invoice", challan.challanId),
    invoiceNumber: createInvoiceNumber(challan),
    invoiceDate: state.operatingDate,
    sourceChallanId: challan.challanId,
    sourceChallanNumber: challan.challanNumber,
    sourceOperationId: challan.sourceOperationId,
    sourceKotId: challan.sourceKotId,
    flightSnapshot: createSnapshot(challan.flightSnapshot),
    menuSnapshot: createSnapshot(challan.menuSnapshot),
    loadingSheetSnapshot: createSnapshot(challan.loadingSheetSnapshot),
    mealInvoiceLinesSnapshot: createSnapshot(mealLines),
    ancillaryInvoiceLinesSnapshot: createSnapshot(ancillaryLines),
    subtotal: totals.subtotal,
    taxTotal: totals.taxTotal,
    grandTotal: totals.grandTotal,
    currency: allLines[0]?.currency || "USD",
    generatedAt: nowStamp(),
    status: "Generated",
    notes: "Generated from delivery challan snapshot."
  });
  state.invoices.push(invoice);
  state.selectedInvoiceId = invoice.invoiceId;
  state.invoice = {
    status: "generated",
    number: invoice.invoiceNumber,
    generatedAt: invoice.generatedAt,
    sourceChallanNo: challan.challanNumber,
    sourceFlightNo: challan.flightSnapshot?.flightNumber || "",
    setupAt: invoice.generatedAt
  };
  logAudit("Invoice generated", "Invoice", invoice.invoiceId, `${invoice.invoiceNumber} from ${challan.challanNumber}`);
  return { ok: true, invoice };
}

function dayName(date) {
  return ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][new Date(`${date}T00:00:00`).getDay()];
}

function nowStamp() {
  return new Date().toISOString().slice(0, 16).replace("T", " ");
}

function defaultSpecialMeals() {
  return { AVML: 0, BBML: 0, CHML: 0, FPML: 0, GFML: 0, HNML: 0, LCML: 0, LSML: 0, MOML: 0, VGML: 0, VLML: 0 };
}

function isKotLocked(operation) {
  return ["Confirmed", "Sent to Kitchen", "In Progress", "Prepared", "Approved", "Dispatched"].includes(operation.kot) || Boolean(operation.kotSnapshot);
}

function hydrateOperationFacade(operation) {
  const flight = operation.flightSnapshot || {};
  const menu = operation.menuSnapshot || {};
  operation.flightNo = flight.flightNumber || operation.flightNo || "";
  operation.airline = flight.airline || "";
  operation.airlineClass = String(flight.airline || "").toLowerCase().replace(/[^a-z0-9]/g, "");
  operation.sector = flight.sector || "";
  operation.origin = flight.origin || "";
  operation.destination = flight.destination || "";
  operation.std = flight.scheduledDeparture || "";
  operation.arrivalTime = flight.scheduledArrival || "";
  operation.aircraft = flight.aircraftType || "";
  operation.reg = flight.defaultRegistration || "";
  operation.capacity = Number(flight.totalPassengerCapacity || 0);
  operation.j = Number(operation.businessPax || 0);
  operation.w = Number(operation.premiumEconomyPax || 0);
  operation.y = Number(operation.economyPax || 0);
  operation.tc = Number(operation.technicalCrew || 0);
  operation.cc = Number(operation.cabinCrew || 0);
  operation.menu = menu.menuCycle || menu.menuCode || "-";
  operation.mealPlan = menu.menuName || menu.menuCode || "Unassigned";
  operation.ratioRule = operation.loadingSheetSnapshot?.loadingSheetCode || "Master loading sheet";
  operation.roundingRule = "Largest remainder for percentage splits; configured rounding for loading lines.";
  operation.specialMealRule = "Replacement special meals are included inside final pax unless marked as additional uplift.";
  operation.operatingDays = flight.operatingDays || [];
  operation.status = operation.kot;
  return operation;
}

function normalizeFlightMasterRecord(record) {
  const next = { ...record };
  next.id = next.id || generateId("flt");
  next.operatingDays = Array.isArray(next.operatingDays) ? next.operatingDays : [];
  next.sector = next.sector || `${next.origin || ""} - ${next.destination || ""}`.trim();
  next.status = next.status || "Active";
  next.businessCapacity = Number(next.businessCapacity || 0);
  next.premiumEconomyCapacity = Number(next.premiumEconomyCapacity || 0);
  next.economyCapacity = Number(next.economyCapacity || 0);
  next.totalPassengerCapacity = Number(next.totalPassengerCapacity || next.businessCapacity + next.premiumEconomyCapacity + next.economyCapacity);
  next.technicalCrewCount = Number(next.technicalCrewCount || 0);
  next.cabinCrewCount = Number(next.cabinCrewCount || 0);
  return next;
}

function normalizeMenuRecord(record) {
  const next = { ...record };
  next.id = next.id || generateId("menu");
  next.cabinClasses = Array.isArray(next.cabinClasses) ? next.cabinClasses : String(next.cabinClasses || "").split(",").map((item) => item.trim()).filter(Boolean);
  next.lines = Array.isArray(next.lines) ? next.lines.map((line, index) => ({ ...line, id: line.id || generateId("mlin", index), status: line.status || "Active", displaySequence: Number(line.displaySequence || index + 1), unitPrice: Number(line.unitPrice || 0), taxPercentage: Number(line.taxPercentage || 0) })) : [];
  next.status = next.status || "Active";
  return next;
}

function normalizeMappingRecord(record) {
  return { ...record, id: record.id || generateId("map"), priority: Number(record.priority || 1), status: record.status || "Active" };
}

function normalizeAncillaryRecord(record) {
  return {
    ...record,
    id: record.id || generateId("anc"),
    unitRate: Number(record.unitRate || 0),
    taxPercentage: Number(record.taxPercentage || 0),
    invoiceEnabled: Boolean(record.invoiceEnabled),
    status: record.status || "Active",
    applicability: record.applicability || { type: "all_airlines", airline: "", flightMasterId: "", route: "", aircraftType: "" },
    calculationRule: {
      calculationType: "manual",
      quantityPerPax: 0,
      paxDivisor: 0,
      fixedQuantity: 0,
      bufferPercentage: 0,
      minimumQuantity: 0,
      maximumQuantity: null,
      roundingMethod: "ceil",
      allowOperationalOverride: true,
      ...(record.calculationRule || {})
    }
  };
}

function normalizeLoadingSheetRecord(record) {
  const next = { ...record };
  next.id = next.id || generateId("load");
  next.daysOfOperation = Array.isArray(next.daysOfOperation) ? next.daysOfOperation : [];
  next.lines = Array.isArray(next.lines) ? next.lines.map((line, index) => ({ ...line, id: line.id || generateId("lsln", index), displaySequence: Number(line.displaySequence || index + 1) })) : [];
  next.status = next.status || "Active";
  return next;
}

function loadState() {
  const raw = localStorage.getItem(STORAGE_KEY);
  const legacyRaw = !raw ? localStorage.getItem(LEGACY_STORAGE_KEY) : null;
  if (!raw && !legacyRaw) return createSeedState();
  try {
    return migrateState(JSON.parse(raw || legacyRaw));
  } catch {
    return createSeedState();
  }
}

function normalizeState() {
  state.version = STATE_VERSION;
  state.queueFilters = { ...structuredClone(seed.queueFilters), ...(state.queueFilters || {}) };
  state.invoice = { ...structuredClone(seed.invoice), ...(state.invoice || {}) };
  state.loadingChart = { ...structuredClone(seed.loadingChart), ...(state.loadingChart || {}) };
  state.loadingChart.capacity = { ...structuredClone(seed.loadingChart.capacity), ...(state.loadingChart.capacity || {}) };
  state.loadingChart.rows = Array.isArray(state.loadingChart.rows) && state.loadingChart.rows.length ? state.loadingChart.rows : structuredClone(seed.loadingChart.rows);
  state.kot = { ...structuredClone(seed.kot), ...(state.kot || {}) };
  state.kotStep = Math.min(Math.max(Number(state.kotStep) || 0, 0), KOT_STEPS.length - 1);
  state.flights = Array.isArray(state.flights) && state.flights.length ? state.flights : structuredClone(seed.flights);
  state.flights.forEach(normalizeFlightPlanning);
  state.operatingDate = state.operatingDate || "2026-06-15";
  state.selectedFlightMasterId = state.selectedFlightMasterId || "";
  state.selectedOperationId = state.selectedOperationId || "";
  state.selectedMenuId = state.selectedMenuId || "";
  state.selectedMappingId = state.selectedMappingId || "";
  state.selectedAncillaryId = state.selectedAncillaryId || "";
  state.selectedLoadingSheetId = state.selectedLoadingSheetId || "";
  state.masters = normalizeMasters(state.masters, state);
  state.dailyOperations = Array.isArray(state.dailyOperations) ? state.dailyOperations.map((operation) => normalizeDailyOperation(operation, state)) : createDailyOperations(state.flights, state.masters);
  generateDailyOperations(state.operatingDate, state, true);
  state.selectedOperationId = state.selectedOperationId || operationsForSelectedDate()[0]?.id || "";
  state.challans = Array.isArray(state.challans) ? state.challans.map(normalizeChallanRecord) : [];
  state.invoices = Array.isArray(state.invoices) ? state.invoices.map(normalizeInvoiceRecord) : [];
  state.selectedChallanId = state.selectedChallanId || "";
  state.selectedInvoiceId = state.selectedInvoiceId || "";
  state.auditTrail = Array.isArray(state.auditTrail) ? state.auditTrail : [];
  syncLegacyLoadingChart();
}

function saveState() {
  state.version = STATE_VERSION;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function setScreen(screen) {
  state.screen = screen;
  if (screen === "menu-master") state.menuMasterView = "list";
  if (screen === "loading-sheet-master") state.loadingSheetView = "list";
  saveState();
  render();
}

function setQueueFilter(key, value) {
  state.queueFilters[key] = value;
  saveState();
  render();
}

function setOperatingDate(value) {
  state.operatingDate = value || state.operatingDate;
  generateDailyOperations(state.operatingDate);
  state.selectedOperationId = operationsForSelectedDate()[0]?.id || state.selectedOperationId;
  saveState();
  render();
}

function operationsForSelectedDate() {
  return (state.dailyOperations || [])
    .filter((operation) => operation.operationDate === state.operatingDate)
    .map((operation) => hydrateOperationFacade(operation))
    .sort((a, b) => String(a.std).localeCompare(String(b.std)));
}

function selectedFlight() {
  const operation = getDailyOperationById(state.selectedOperationId);
  if (operation) return hydrateOperationFacade(operation);
  const byFlight = operationsForSelectedDate().find((item) => item.flightNo === state.selectedFlight);
  if (byFlight) {
    state.selectedOperationId = byFlight.id;
    return hydrateOperationFacade(byFlight);
  }
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
  const numericKeys = ["confirmedPax", "additionalPax", "businessPax", "premiumEconomyPax", "economyPax", "technicalCrew", "cabinCrew", "specialPassengerCount"];
  flight[key] = numericKeys.includes(key) || key.includes("Pax") || key === "capacity" ? Number(value) || 0 : value;
  if (flight.flightSnapshot) hydrateOperationFacade(flight);
  else normalizeFlightPlanning(flight);
  syncKotSnapshot(flight);
  if (["confirmedPax", "additionalPax", "businessPax", "premiumEconomyPax", "economyPax", "technicalCrew", "cabinCrew", "specialPassengerCount", "operationalRemarks"].includes(key) && !isKotLocked(flight)) {
    flight.kot = flight.flightSnapshot ? "Draft" : "in progress";
  }
  if (flight.flightSnapshot) logAudit("Passenger count updated", "DailyOperation", flight.id, key);
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
  if (flight?.flightSnapshot) {
    const item = flight.ancillarySnapshots[index];
    if (!item) return;
    flight.ancillaryOverrides[item.id] = {
      ...(flight.ancillaryOverrides[item.id] || {}),
      [key]: key === "overrideQuantity" ? Number(value) || 0 : value,
      updatedBy: "operations1",
      updatedAt: nowStamp()
    };
    logAudit("Ancillary overridden", "DailyOperation", flight.id, item.itemCode);
    saveState();
    render();
    return;
  }
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
  if (flight.kot !== "confirmed" && flight.kot !== "Confirmed") flight.kot = flight.flightSnapshot ? "Draft" : "in progress";
  if (flight.flightSnapshot) logAudit("Special meal updated", "DailyOperation", flight.id, code);
  saveState();
  render();
}

function finalPassengerCount(flight = selectedFlight()) {
  if (flight?.flightSnapshot) return Number(flight.confirmedPax || 0) + Number(flight.additionalPax || 0);
  return Number(flight.confirmedPax || 0) + Number(flight.additionalPax || 0);
}

function crewCount(flight = selectedFlight()) {
  return Number(flight.technicalCrew ?? flight.tc ?? 0) + Number(flight.cabinCrew ?? flight.cc ?? 0);
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

function largestRemainderRound(lines, targetTotal) {
  const rawRows = lines.map((line, index) => {
    const raw = Number(line.raw || 0);
    return { ...line, index, qty: Math.floor(raw), remainder: raw - Math.floor(raw) };
  });
  let remaining = Math.max(0, Number(targetTotal || 0) - rawRows.reduce((sum, row) => sum + row.qty, 0));
  rawRows
    .slice()
    .sort((a, b) => b.remainder - a.remainder || a.index - b.index)
    .forEach((row) => {
      if (remaining <= 0) return;
      rawRows[row.index].qty += 1;
      remaining -= 1;
    });
  return rawRows.map(({ remainder, raw, index, ...row }) => row);
}

function calculateOperationalPlan(operation = selectedFlight()) {
  if (!operation?.flightSnapshot) return legacyOperationalPlan(operation);
  const finalPax = finalPassengerCount(operation);
  const replacementSpecialMealCount = specialMealEntries(operation).filter((row) => !row.additionalUplift).reduce((sum, row) => sum + row.quantity, 0);
  const additionalUpliftCount = specialMealEntries(operation).filter((row) => row.additionalUplift).reduce((sum, row) => sum + row.quantity, 0);
  const standardMealPassengerCount = Math.max(0, finalPax - replacementSpecialMealCount);
  const loadingLines = operation.loadingSheetSnapshot?.lines || [];
  const percentageLines = loadingLines.filter((line) => line.ratioType === "percentage_split");
  const mealLines = loadingLines.map((line) => {
    const menuLine = operation.menuSnapshot?.lines?.find((item) => item.id === line.menuLineId || item.itemCode === line.menuItemCode) || {};
    const calculatedQuantity = percentageLines.includes(line)
      ? 0
      : calculateLoadingSheetLine(line, operation, standardMealPassengerCount);
    return {
      sourceMasterId: line.id,
      menuLineId: line.menuLineId,
      code: line.menuItemCode || menuLine.itemCode || "-",
      type: line.category || menuLine.category || operation.menuSnapshot?.serviceType || "Meal",
      name: line.menuItemName || menuLine.itemName || "-",
      unit: line.unit || menuLine.unit || "Pax",
      ratio: line.ratioValue || loadingRatioLabel(line.ratioType),
      ratioType: line.ratioType,
      qty: calculatedQuantity,
      rateCode: menuLine.invoiceItemCode || menuLine.itemCode || line.menuItemCode || "-",
      rate: Number(menuLine.unitPrice || 0),
      taxPercentage: Number(menuLine.taxPercentage || 0),
      calculationRule: createSnapshot(line)
    };
  });
  if (percentageLines.length) {
    const rounded = largestRemainderRound(percentageLines.map((line) => ({
      sourceMasterId: line.id,
      raw: standardMealPassengerCount * (Number(line.ratioValue || 0) / 100)
    })), standardMealPassengerCount);
    rounded.forEach((roundedLine) => {
      const target = mealLines.find((line) => line.sourceMasterId === roundedLine.sourceMasterId);
      if (target) target.qty = roundedLine.qty;
    });
  }
  const specialMealLines = specialMealEntries(operation).filter((row) => row.quantity > 0);
  const ancillaryLines = (operation.ancillarySnapshots || []).map((item) => calculateAncillaryQuantity(item, operation));
  const validations = operationValidationMessages(operation, { finalPax, replacementSpecialMealCount, ancillaryLines });
  const totalMealQuantity = mealLines.reduce((sum, line) => sum + Number(line.qty || 0), 0) + specialMealLines.reduce((sum, line) => sum + line.quantity, 0);
  const totalAncillaryQuantity = ancillaryLines.reduce((sum, line) => sum + Number(line.finalQuantity || 0), 0);
  const invoiceLines = [
    ...mealLines.map((line) => ({ code: line.rateCode, desc: line.name, uom: line.unit, qty: line.qty, rate: line.rate, taxPercentage: line.taxPercentage, sourceMasterId: line.menuLineId })),
    ...specialMealLines.map((line) => ({ code: `SPML-${line.code}`, desc: `${line.code} ${line.description}`, uom: "Pax", qty: line.quantity, rate: 8.64, taxPercentage: 10, sourceMasterId: line.code })),
    ...ancillaryLines.filter((line) => line.invoiceEnabled).map((line) => ({ code: line.invoiceItemCode || line.itemCode, desc: line.itemName, uom: line.unit, qty: line.finalQuantity, rate: line.unitRate, taxPercentage: line.taxPercentage, sourceMasterId: line.sourceMasterId }))
  ];
  return {
    finalPassengerCount: finalPax,
    finalPax,
    standardMealPassengerCount,
    specialMealCount: replacementSpecialMealCount,
    additionalUpliftCount,
    crewCount: crewCount(operation),
    crew: crewCount(operation),
    mealLines,
    meals: mealLines,
    specialMealLines,
    ancillaryLines,
    ancillaries: ancillaryLines.map((line) => ({ item: line.itemName, unit: line.unit, rule: line.masterCalculationRule, qty: line.finalQuantity, ...line })),
    totalMealQuantity,
    totalAncillaryQuantity,
    totalMeals: totalMealQuantity,
    specialMeals: replacementSpecialMealCount + additionalUpliftCount,
    standardMeals: mealLines.reduce((sum, line) => sum + Number(line.qty || 0), 0),
    deliveredTotal: totalMealQuantity + totalAncillaryQuantity,
    validations,
    invoiceLines,
    calculatedAt: nowStamp()
  };
}

function legacyOperationalPlan(flight) {
  const meals = calculatedMealBreakdown(flight);
  const ancillaries = calculatedAncillaries(flight);
  const finalPax = finalPassengerCount(flight);
  const spml = specialMealTotal(flight);
  const standardMeals = meals.reduce((sum, item) => sum + item.qty, 0);
  return {
    finalPassengerCount: finalPax,
    finalPax,
    standardMealPassengerCount: Math.max(finalPax - spml, 0),
    specialMealCount: spml,
    additionalUpliftCount: 0,
    crewCount: crewCount(flight),
    crew: crewCount(flight),
    mealLines: meals,
    meals,
    specialMealLines: [],
    ancillaryLines: ancillaries,
    ancillaries,
    totalMealQuantity: standardMeals + spml,
    totalAncillaryQuantity: ancillaries.reduce((sum, item) => sum + item.qty, 0),
    totalMeals: standardMeals + spml,
    specialMeals: spml,
    standardMeals,
    deliveredTotal: standardMeals + spml + ancillaries.reduce((sum, item) => sum + item.qty, 0),
    validations: [],
    invoiceLines: [],
    calculatedAt: nowStamp()
  };
}

function calculateLoadingSheetLine(line, operation, standardMealPassengerCount) {
  const capacity = {
    business: Number(operation.businessPax || 0),
    premium: Number(operation.premiumEconomyPax || 0),
    economy: Number(operation.economyPax || 0),
    crew: crewCount(operation)
  };
  let quantity = 0;
  const value = Number(String(line.ratioValue || "").replace(/[^0-9.]/g, "")) || 0;
  switch (line.ratioType) {
    case "one_to_one":
      quantity = standardMealPassengerCount * Number(line.quantityPerPassenger || 1);
      break;
    case "per_x_pax":
      quantity = value > 0 ? standardMealPassengerCount / value : 0;
      break;
    case "fixed":
      quantity = Number(line.fixedQuantity || value || 0);
      break;
    case "business_quantity":
      quantity = value && String(line.ratioValue).startsWith("JH") ? Math.ceil(capacity.business / Math.max(1, value / 6)) : capacity.business || value;
      break;
    case "premium_economy_quantity":
      quantity = capacity.premium || value;
      break;
    case "economy_quantity":
      quantity = capacity.economy || value;
      break;
    case "crew_quantity":
      quantity = capacity.crew || value;
      break;
    case "cabin_class_percentage":
      quantity = Math.max(0, Math.ceil((capacity[String(line.cabinClass || "").toLowerCase()] || standardMealPassengerCount) * (value / 100)));
      break;
    case "minimum_plus_calculated":
      quantity = Number(line.minimumQuantity || 0) + standardMealPassengerCount * Number(line.quantityPerPassenger || 0);
      break;
    case "manual_matrix":
      quantity = value || Number(line.fixedQuantity || 0);
      break;
    default:
      quantity = standardMealPassengerCount;
  }
  return applyQuantityBounds(quantity, line);
}

function calculateAncillaryQuantity(item, operation) {
  const rule = item.calculationRule || {};
  const finalPax = finalPassengerCount(operation);
  const crew = crewCount(operation);
  let calculatedQuantity = 0;
  switch (rule.calculationType) {
    case "fixed":
      calculatedQuantity = Number(rule.fixedQuantity || 0);
      break;
    case "per_passenger":
      calculatedQuantity = finalPax * Number(rule.quantityPerPax || 1);
      break;
    case "per_crew":
      calculatedQuantity = crew;
      break;
    case "per_business_pax":
      calculatedQuantity = Number(operation.businessPax || 0);
      break;
    case "per_premium_pax":
      calculatedQuantity = Number(operation.premiumEconomyPax || 0);
      break;
    case "per_economy_pax":
      calculatedQuantity = Number(operation.economyPax || 0);
      break;
    case "per_x_pax":
      calculatedQuantity = finalPax / Math.max(1, Number(rule.paxDivisor || 1));
      break;
    case "buffer":
      calculatedQuantity = finalPax * (1 + Number(rule.bufferPercentage || 0) / 100);
      break;
    case "minimum":
      calculatedQuantity = Number(rule.minimumQuantity || 0);
      break;
    case "fixed_plus_per_pax":
      calculatedQuantity = Number(rule.fixedQuantity || 0) + finalPax * Number(rule.quantityPerPax || 0);
      break;
    case "manual":
    default:
      calculatedQuantity = Number(rule.fixedQuantity || 0);
  }
  calculatedQuantity = applyQuantityBounds(calculatedQuantity, rule);
  const override = operation.ancillaryOverrides?.[item.id] || {};
  const overrideAllowed = Boolean(rule.allowOperationalOverride);
  const finalQuantity = overrideAllowed && override.overrideQuantity !== undefined && override.overrideQuantity !== "" ? Number(override.overrideQuantity || 0) : calculatedQuantity;
  return {
    sourceMasterId: item.id,
    itemCode: item.itemCode,
    itemName: item.itemName,
    unit: item.unit,
    masterCalculationRule: ruleLabel(rule),
    calculatedQuantity,
    overrideAllowed,
    overrideQuantity: override.overrideQuantity ?? "",
    overrideReason: override.overrideReason || "",
    finalQuantity,
    qty: finalQuantity,
    currency: item.currency || operation.menuSnapshot?.currency || "USD",
    unitRate: Number(item.unitRate || 0),
    taxPercentage: Number(item.taxPercentage || 0),
    invoiceRate: Number(item.unitRate || 0),
    invoiceEnabled: Boolean(item.invoiceEnabled),
    invoiceItemCode: item.invoiceItemCode,
    updatedBy: override.updatedBy || "",
    updatedAt: override.updatedAt || ""
  };
}

function applyQuantityBounds(quantity, rule = {}) {
  const rounded = roundQuantity(quantity, rule.roundingMethod || "ceil");
  const withMin = Math.max(Number(rule.minimumQuantity || 0), rounded);
  return rule.maximumQuantity !== null && rule.maximumQuantity !== "" && rule.maximumQuantity !== undefined ? Math.min(Number(rule.maximumQuantity), withMin) : withMin;
}

function roundQuantity(value, method = "ceil") {
  if (method === "floor") return Math.floor(value);
  if (method === "round") return Math.round(value);
  return Math.ceil(value);
}

function specialMealEntries(operation = selectedFlight()) {
  const descriptions = {
    AVML: "Asian vegetarian meal", BBML: "Baby meal", CHML: "Child meal", FPML: "Fruit platter meal", GFML: "Gluten free meal", HNML: "Hindu meal", LCML: "Low calorie meal", LSML: "Low sodium meal", MOML: "Muslim meal", VGML: "Vegetarian vegan meal", VLML: "Vegetarian lacto-ovo meal"
  };
  const available = { ...defaultSpecialMeals(), ...(operation.specialMeals || {}) };
  return Object.entries(available).map(([code, quantity]) => ({ code, description: descriptions[code] || "Special meal", quantity: Number(quantity || 0), includedInPassengerCount: true, additionalUplift: false, remarks: "" }));
}

function operationValidationMessages(operation, calc = {}) {
  const messages = [...(operation.configurationMessages || [])];
  const finalPax = calc.finalPax ?? finalPassengerCount(operation);
  const replacementSpecialMealCount = calc.replacementSpecialMealCount ?? specialMealTotal(operation);
  if (finalPax > Number(operation.capacity || 0) && !operation.allowOverCapacity) messages.push("Passenger count exceeds capacity");
  if (finalPax > Number(operation.capacity || 0) && operation.allowOverCapacity && !operation.overCapacityReason) messages.push("Passenger override reason is required");
  if (replacementSpecialMealCount > finalPax) messages.push("Special meals exceed passenger count");
  (calc.ancillaryLines || []).forEach((line) => {
    if (line.overrideAllowed && line.overrideQuantity !== "" && !line.overrideReason) messages.push(`${line.itemCode} override requires reason`);
  });
  return unique(messages);
}

function isValidLoadingLine(line) {
  if (!line.menuItemCode && !line.menuLineId) return false;
  if (["per_x_pax", "percentage_split", "cabin_class_percentage"].includes(line.ratioType) && Number(line.ratioValue || 0) <= 0) return false;
  return true;
}

function calculatedMealBreakdown(flight = selectedFlight()) {
  if (flight?.flightSnapshot) return calculateOperationalPlan(flight).mealLines;
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
  if (flight?.flightSnapshot) return calculateOperationalPlan(flight).ancillaries;
  const pax = finalPassengerCount(flight);
  return flight.ancillaryRequirements.map((item) => {
    const qty = item.fixedQty !== undefined ? Number(item.fixedQty) : Math.max(Number(item.min || 0), Math.ceil(pax * Number(item.qtyPerPax || 0)));
    return { ...item, qty };
  });
}

function calculatedKot(flight = selectedFlight()) {
  if (flight?.flightSnapshot) return calculateOperationalPlan(flight);
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
  if (flight?.flightSnapshot) {
    const calc = calculatedKot(flight);
    const rows = {
      planning: [
        ["Flight Master snapshot stored", Boolean(flight.flightSnapshot?.id)],
        ["Flight-Menu Mapping resolved", Boolean(flight.mappingSnapshot)],
        ["Menu Master snapshot stored", Boolean(flight.menuSnapshot)],
        ["Loading Sheet snapshot stored", Boolean(flight.loadingSheetSnapshot)],
        ["Ancillary snapshots stored", Array.isArray(flight.ancillarySnapshots)]
      ],
      kot: [
        ["Final pax calculated automatically", calc.finalPax === Number(flight.confirmedPax) + Number(flight.additionalPax)],
        ["Class-wise pax does not exceed final pax", Number(flight.businessPax || 0) + Number(flight.premiumEconomyPax || 0) + Number(flight.economyPax || 0) <= calc.finalPax],
        ["Pax within capacity or approved override", calc.finalPax <= flight.capacity || flight.allowOverCapacity],
        ["Crew count calculated", calc.crew >= 0],
        ["Configuration allows KOT confirmation", flight.configurationStatus === "Ready"]
      ],
      special: [
        ["Replacement special meals within final pax", specialMealTotal(flight) <= calc.finalPax],
        ["Supported special meal codes present", Object.keys(flight.specialMeals || {}).length >= 11],
        ["Additional uplift requires explicit justification", !calc.validations.some((item) => item.includes("Special meals exceed"))]
      ],
      ancillary: [
        ["Ancillaries resolved from master", flight.ancillarySnapshots.length > 0],
        ["Overrides limited to permitted items", calc.ancillaryLines.every((line) => line.overrideAllowed || line.overrideQuantity === "")],
        ["Override reason provided where used", !calc.validations.some((item) => item.includes("override requires reason"))]
      ],
      calculation: [
        ["Meal plan calculated from stored snapshot", calc.mealLines.length > 0],
        ["Required pricing is present", !calc.validations.includes("Missing Pricing")],
        ["Loading ratios are valid", !calc.validations.includes("Invalid Ratios")],
        ["Validation checklist clear", calc.validations.length === 0]
      ],
      document: [
        ["KOT confirmed before kitchen/challan", flight.kot === "Confirmed" || flight.kot === "Sent to Kitchen"],
        ["Confirmed KOT has frozen snapshot", Boolean(flight.kotSnapshot)],
        ["Challan generated from confirmed KOT snapshot", Boolean(getChallanForOperation(flight.id))],
        ["Invoice lines can use stored rates", Boolean(flight.kotSnapshot?.menuSnapshot?.lines?.length)],
        ["Production quantities preserved", Boolean(flight.productionPlanSnapshot || flight.kotSnapshot?.productionPlanSnapshot)]
      ]
    };
    return rows[stage] || rows.kot;
  }
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
      ["KOT confirmed before kitchen/challan", flight.kot === "confirmed"],
      ["Challan generated from confirmed KOT", flight.kot === "confirmed"],
      ["Unique challan number available", Boolean(state.kot.challanNo)],
      ["Invoice linked to approved challan", flight.production === "approved" || flight.production === "dispatched" || state.invoice.status === "generated"],
      ["Rates selected from approved master", invoiceItems().every((item) => item.rate > 0)]
    ]
  };
  return rows[stage] || rows.kot;
}

function setSelectedFlight(flightNo, screen = "kot") {
  const operation = operationsForSelectedDate().find((item) => item.flightNo === flightNo || item.id === flightNo);
  state.selectedOperationId = operation?.id || state.selectedOperationId;
  state.selectedFlight = operation?.flightNo || flightNo;
  if (screen === "kot") state.kotStep = 0;
  saveState();
  render(screen);
  setScreen(screen);
  openFlightModal();
}

function setSelectedOperation(operationId, screen = "kot") {
  const operation = getDailyOperationById(operationId);
  if (!operation) return;
  state.selectedOperationId = operation.id;
  state.selectedFlight = operation.flightNo || operation.flightSnapshot?.flightNumber || "";
  if (screen === "kot") state.kotStep = 0;
  saveState();
  setScreen(screen);
}

function setKotStep(step) {
  state.kotStep = Math.min(Math.max(Number(step) || 0, 0), KOT_STEPS.length - 1);
  saveState();
  render();
}

function updateProduction(flightNo, status) {
  const flight = getDailyOperationById(flightNo) || operationsForSelectedDate().find((item) => item.flightNo === flightNo) || state.flights.find((item) => item.flightNo === flightNo);
  if (!flight) return;
  flight.production = status;
  flight.meal = status === "approved" || status === "dispatched" ? "calculated" : status;
  flight.kot = flight.flightSnapshot && (status === "approved" || status === "dispatched" || status === "prepared") ? "Sent to Kitchen" : status === "approved" || status === "dispatched" || status === "prepared" ? "confirmed" : flight.kot;
  flight.kitchenStatus = titleCase(status);
  flight.dispatch = status === "dispatched" ? "dispatched" : flight.dispatch;
  if (flight.flightSnapshot) logAudit("Kitchen status updated", "DailyOperation", flight.id, status);
  saveState();
  render();
  showToast(`${flight.flightNo || flight.flightSnapshot?.flightNumber} production updated to ${status}.`);
}

function approveKot() {
  confirmKot(false);
  updateProduction(state.selectedOperationId || state.selectedFlight, "approved");
}

function saveDraft() {
  const operation = selectedFlight();
  operation.kot = operation.flightSnapshot ? "Draft" : "in progress";
  if (operation.flightSnapshot) logAudit("Draft saved", "DailyOperation", operation.id, operation.flightNo);
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
  const loadingSheet = getLoadingSheetById(state.selectedLoadingSheetId);
  const line = loadingSheet?.lines?.[index];
  if (!line) return;
  const menu = getMenuById(loadingSheet.menuId);
  if (key === "menuLineId") {
    const menuLine = menu?.lines?.find((item) => item.id === value);
    if (!menuLine) {
      showToast("Select an active menu item from this Loading Sheet's Menu Master.");
      return;
    }
    line.menuLineId = menuLine.id;
    line.menuItemCode = menuLine.itemCode;
    line.menuItemName = menuLine.itemName;
    line.category = menuLine.category;
    line.unit = menuLine.unit;
  } else if (key === "ratioType") {
    line.ratioType = value;
  } else if (["fixedQuantity", "quantityPerPassenger", "minimumQuantity", "bufferPercentage", "displaySequence"].includes(key)) {
    line[key] = Number(value || 0);
  } else {
    line[key] = value;
  }
  if (line.ratioType === "one_to_one" && !line.ratioValue) {
    line.ratioValue = "1:1";
    line.quantityPerPassenger = 1;
  }
  if (row) {
    row.code = line.menuItemCode;
    row.name = line.menuItemName;
    row.unit = line.unit;
    row.ratioType = loadingRatioLabel(line.ratioType);
    row.ratioValue = line.ratioValue || "";
    row.remarks = line.remarks || line.category || "";
  }
  logAudit("Master edited", "Loading Sheet Master", loadingSheet.id, `Updated loading line ${line.menuItemCode || index + 1}`);
  saveState();
  render();
}

function addLoadingRow() {
  const loadingSheet = getLoadingSheetById(state.selectedLoadingSheetId);
  const menu = getMenuById(loadingSheet?.menuId);
  if (!loadingSheet || !menu) {
    showToast("Select a menu loading sheet before adding rows.");
    return;
  }
  const usedIds = new Set((loadingSheet.lines || []).map((line) => line.menuLineId).filter(Boolean));
  const menuLine = (menu.lines || []).find((line) => line.status === "Active" && !usedIds.has(line.id))
    || (menu.lines || []).find((line) => line.status === "Active");
  if (!menuLine) {
    showToast("Selected Menu Master has no active items to add.");
    return;
  }
  const sequence = Math.max(0, ...loadingSheet.lines.map((line) => Number(line.displaySequence || 0))) + 1;
  loadingSheet.lines.push({
    id: generateId("lsln", `${loadingSheet.id}-${sequence}`),
    menuLineId: menuLine.id,
    menuItemCode: menuLine.itemCode,
    menuItemName: menuLine.itemName,
    category: menuLine.category,
    unit: menuLine.unit,
    cabinClass: "All",
    ratioType: "one_to_one",
    ratioValue: "1:1",
    fixedQuantity: 0,
    quantityPerPassenger: 1,
    minimumQuantity: 0,
    maximumQuantity: "",
    bufferPercentage: 0,
    roundingMethod: "ceil",
    displaySequence: sequence,
    remarks: "Per Pax"
  });
  syncLegacyLoadingChart();
  logAudit("Master edited", "Loading Sheet Master", loadingSheet.id, `Added loading line for ${menuLine.itemCode}`);
  saveState();
  render();
}

function deleteLastLoadingRow() {
  deleteLoadingRow(state.loadingChart.rows.length - 1);
}

function deleteLoadingRow(index) {
  const loadingSheet = getLoadingSheetById(state.selectedLoadingSheetId);
  if (!loadingSheet || index < 0) return;
  if (loadingSheet.lines.length <= 1) {
    showToast("At least one loading row is required.");
    return;
  }
  const removedLoadingLine = loadingSheet.lines.splice(index, 1)[0];
  syncLegacyLoadingChart();
  logAudit("Master edited", "Loading Sheet Master", loadingSheet.id, `Removed loading line for ${removedLoadingLine?.menuItemCode || index + 1}`);
  saveState();
  render();
}

function importLoadingRowsFromMenu() {
  const loadingSheet = getLoadingSheetById(state.selectedLoadingSheetId);
  const menu = getMenuById(loadingSheet?.menuId);
  if (!loadingSheet || !menu) return;
  if ((loadingSheet.lines || []).length) {
    openConfirmModal("Import Menu Items", "Replace existing Loading Sheet lines with active items from the selected Menu Master?", "confirmImportLoadingRowsFromMenu()");
    return;
  }
  confirmImportLoadingRowsFromMenu();
}

function confirmImportLoadingRowsFromMenu() {
  const loadingSheet = getLoadingSheetById(state.selectedLoadingSheetId);
  const menu = getMenuById(loadingSheet?.menuId);
  if (!loadingSheet || !menu) return;
  const activeLines = (menu.lines || []).filter((line) => line.status === "Active");
  loadingSheet.lines = activeLines.map((line, index) => ({
    id: generateId("lsln", `${loadingSheet.id}-${line.id}-${index}`),
    menuLineId: line.id,
    menuItemCode: line.itemCode,
    menuItemName: line.itemName,
    category: line.category,
    unit: line.unit,
    cabinClass: "All",
    ratioType: "one_to_one",
    ratioValue: "1:1",
    fixedQuantity: 0,
    quantityPerPassenger: 1,
    minimumQuantity: 0,
    maximumQuantity: "",
    bufferPercentage: 0,
    roundingMethod: "ceil",
    displaySequence: index + 1,
    remarks: line.category || "Per Pax"
  }));
  syncLegacyLoadingChart();
  logAudit("Master edited", "Loading Sheet Master", loadingSheet.id, `Imported ${loadingSheet.lines.length} active menu items from ${menu.menuCode}`);
  saveState();
  closeModal();
  render();
}

function nextMenuItemCode(menu, sequence) {
  let counter = sequence;
  let code = `ITEM-${String(counter).padStart(3, "0")}`;
  const existing = new Set((menu.lines || []).map((line) => line.itemCode));
  while (existing.has(code)) {
    counter += 1;
    code = `ITEM-${String(counter).padStart(3, "0")}`;
  }
  return code;
}

function syncKotSnapshot(flight = selectedFlight()) {
  if (flight?.flightSnapshot) {
    const calc = calculateOperationalPlan(flight);
    state.kot.loads[2] = ["Final Pax On Board", flight.businessPax, flight.premiumEconomyPax, calc.finalPax, flight.technicalCrew, flight.cabinCrew];
    state.kot.loads[3] = ["Final Meal On Board", 0, 0, calc.totalMeals, 0, 0];
    state.kot.firstService = calc.meals.map((meal) => [meal.name, 0, 0, meal.qty, 0, 0]);
    state.kot.secondService = structuredClone(state.kot.firstService);
    state.kot.specialMeals = { ...state.kot.specialMeals, ...flight.specialMeals };
    state.kot.ancillaries = calc.ancillaries.map((item) => [item.itemName || item.item, item.unit, item.finalQuantity || item.qty, item.finalQuantity || item.qty]);
    state.kot.remarks = flight.operationalRemarks || state.kot.remarks;
    return calc;
  }
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

function confirmKot(shouldRender = true) {
  const operation = selectedFlight();
  const calc = calculateOperationalPlan(operation);
  if (operation.flightSnapshot) {
    const blockers = calc.validations;
    if (blockers.length) {
      showToast(`KOT blocked: ${blockers[0]}`);
      if (shouldRender) render();
      return false;
    }
    operation.productionPlanSnapshot = createSnapshot(calc);
    operation.invoiceLineSnapshot = createSnapshot(calc.invoiceLines || []);
    operation.kotSnapshot = createOperationSnapshot(operation);
    operation.kotId = operation.kotSnapshot.kotId;
    operation.kotNumber = operation.kotSnapshot.kotNumber;
    operation.kot = "Confirmed";
    operation.meal = "calculated";
    operation.kotConfirmedAt = operation.kotSnapshot.confirmedAt;
    operation.lastCalculatedAt = calc.calculatedAt;
    operation.auditTrail = [...(operation.auditTrail || []), `KOT confirmed at ${operation.kotConfirmedAt}.`].slice(-10);
    logAudit("KOT confirmed", "DailyOperation", operation.id, `${operation.flightNo} ${operation.operationDate}`);
  } else {
    calculateMeals(false);
  }
  saveState();
  if (shouldRender) {
    showToast(`${operation.flightNo} KOT confirmed.`);
    render();
  }
  return true;
}

function titleCase(value) {
  return String(value || "").replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function calculateMeals(shouldRender = true) {
  const flight = selectedFlight();
  const calc = syncKotSnapshot(flight);
  if (flight.flightSnapshot) {
    flight.kot = "Calculated";
    flight.meal = "calculated";
    flight.productionPlanSnapshot = createSnapshot(calc);
    flight.invoiceLineSnapshot = createSnapshot(calc.invoiceLines || []);
    flight.lastCalculatedAt = calc.calculatedAt;
    flight.auditTrail = [...(flight.auditTrail || []), `Meal plan calculated for ${calc.finalPax} final pax.`].slice(-10);
    logAudit("Meal plan calculated", "DailyOperation", flight.id, `${calc.totalMeals} meal qty`);
  } else {
    flight.kot = "confirmed";
    flight.meal = "calculated";
    flight.production = flight.production === "pending" ? "in progress" : flight.production;
    flight.lastCalculatedAt = "15/06/2026 10:24";
    flight.auditTrail = [...(flight.auditTrail || []), `KOT recalculated for ${calc.finalPax} final pax.`].slice(-8);
  }
  saveState();
  if (shouldRender) {
    showToast(`Meal counts calculated for ${calc.finalPax} final pax.`);
    render();
  }
}

function sendToKitchen() {
  const flight = selectedFlight();
  if (!confirmKot(false)) return;
  flight.production = "pending";
  flight.kot = flight.flightSnapshot ? "Sent to Kitchen" : flight.kot;
  flight.dispatch = flight.dispatch === "scheduled" ? "pending" : flight.dispatch;
  if (flight.flightSnapshot) logAudit("KOT sent to kitchen", "DailyOperation", flight.id, flight.flightNo);
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
  const flight = selectedFlight();
  const existing = getChallanForOperation(flight.id);
  if (existing) {
    state.selectedChallanId = existing.challanId;
    state.kot.challanNo = existing.challanNumber;
    saveState();
    showToast(`${existing.challanNumber} already exists. Opening challan.`);
    setScreen("challan-preview");
    return;
  }
  const result = generateChallanFromKot(flight);
  if (!result.ok) {
    showToast(`Challan blocked: ${result.errors[0]}`);
    render();
    return;
  }
  saveState();
  showToast(`${result.challan.challanNumber} generated from confirmed KOT snapshot.`);
  setScreen("challan-preview");
}

function lockChallan() {
  updateChallanStatus("Locked");
  saveState();
  window.print();
}

function setupInvoiceFromChallan(shouldNavigate = true) {
  const challan = selectedChallan();
  if (!challan) {
    showToast("Generate a challan first.");
    return;
  }
  if (!isChallanInvoiceReady(challan)) {
    showToast("Approve, dispatch, or lock the challan before invoice setup.");
    return;
  }
  const existingInvoice = getInvoiceForChallan(challan.challanId);
  if (existingInvoice) {
    state.selectedInvoiceId = existingInvoice.invoiceId;
    state.invoice.status = existingInvoice.status.toLowerCase();
    state.invoice.number = existingInvoice.invoiceNumber;
    state.invoice.sourceChallanNo = challan.challanNumber;
    state.invoice.sourceFlightNo = challan.flightSnapshot?.flightNumber || "";
    saveState();
    if (shouldNavigate) {
      showToast(`Invoice already exists. Opening ${existingInvoice.invoiceNumber}.`);
      setScreen("invoice");
    }
    return;
  }
  state.invoice.status = state.invoice.status === "generated" ? "generated" : "ready";
  state.invoice.sourceChallanNo = challan.challanNumber;
  state.invoice.sourceFlightNo = challan.flightSnapshot?.flightNumber || "";
  state.invoice.setupAt = nowStamp();
  saveState();
  if (shouldNavigate) {
    showToast(`Invoice setup created from challan ${challan.challanNumber}.`);
    setScreen("invoice");
  }
}

function generateInvoice() {
  const challan = selectedChallan();
  const existingInvoice = challan ? getInvoiceForChallan(challan.challanId) : null;
  if (existingInvoice) {
    state.selectedInvoiceId = existingInvoice.invoiceId;
    saveState();
    showToast(`Invoice already exists. Opening ${existingInvoice.invoiceNumber}.`);
    render();
    return;
  }
  const result = generateInvoiceFromChallan(challan);
  if (!result.ok) {
    showToast(`Invoice blocked: ${result.errors[0]}`);
    render();
    return;
  }
  saveState();
  showToast(`${result.invoice.invoiceNumber} generated from challan ${challan.challanNumber}.`);
  render();
}

function previewInvoice() {
  const invoice = selectedInvoice();
  const challan = selectedChallan();
  const lines = invoice ? [...invoice.mealInvoiceLinesSnapshot, ...invoice.ancillaryInvoiceLinesSnapshot] : challan ? [...buildMealInvoiceLines(challan), ...buildAncillaryInvoiceLines(challan)] : [];
  const totals = invoice || calculateInvoiceTotals(lines);
  openInfoModal("Invoice Preview", [
    ["Invoice No.", invoice?.invoiceNumber || "Auto on generation"],
    ["Airline", invoice?.flightSnapshot?.airline || challan?.flightSnapshot?.airline || "-"],
    ["Challan No.", invoice?.sourceChallanNumber || challan?.challanNumber || "-"],
    ["Status", badge(invoice?.status || state.invoice.status)],
    ["Grand Total", `${invoice?.currency || lines[0]?.currency || "USD"} ${Number(totals.grandTotal || 0).toFixed(2)}`]
  ]);
}

function downloadDemoDocument(type) {
  const challan = selectedChallan();
  const invoice = selectedInvoice();
  const content = type === "invoice"
    ? `Invoice ${invoice?.invoiceNumber || state.invoice.number || "Draft"}\nChallan ${invoice?.sourceChallanNumber || challan?.challanNumber || "-"}\nFlight ${invoice?.flightSnapshot?.flightNumber || selectedFlight().flightNo}\nGrand total ${Number(invoice?.grandTotal || 0).toFixed(2)}`
    : type === "loading-chart"
      ? `Meal Loading Chart ${state.loadingChart.chartCode}\nFlight ${state.loadingChart.flightNo}\nTotal capacity ${chartTotalPax()}\nTotal quantity ${totalLoadingQuantity()}`
      : `Challan ${challan?.challanNumber || state.kot.challanNo}\nFlight ${challan?.flightSnapshot?.flightNumber || selectedFlight().flightNo}\nStatus ${challan?.status || selectedFlight().dispatch}`;
  const blob = new Blob([content], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${type}-${challan?.challanNumber || state.kot.challanNo}.txt`;
  link.click();
  URL.revokeObjectURL(url);
  showToast(`${type === "invoice" ? "Invoice" : "Challan"} demo document downloaded.`);
}

function resetDemo() {
  localStorage.removeItem(STORAGE_KEY);
  localStorage.removeItem(LEGACY_STORAGE_KEY);
  state = createSeedState();
  normalizeState();
  saveState();
  render();
  showToast("Demo data reset.");
}

function generateId(prefix = "id", seedValue = "") {
  const source = seedValue === "" || seedValue === undefined || seedValue === null ? `${Date.now()}-${Math.random()}` : seedValue;
  const base = String(source).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
  return `${prefix}-${base || Math.random().toString(36).slice(2, 9)}`;
}

function logAudit(action, entityType, entityId, details = "") {
  state.auditTrail = Array.isArray(state.auditTrail) ? state.auditTrail : [];
  state.auditTrail.unshift({
    id: generateId("audit"),
    at: nowStamp(),
    action,
    entityType,
    entityId,
    details,
    user: "operations1"
  });
  state.auditTrail = state.auditTrail.slice(0, 80);
}

function isDateWithinRange(date, from, to) {
  if (!date || !from || !to) return false;
  const value = new Date(date).getTime();
  return value >= new Date(from).getTime() && value <= new Date(to).getTime();
}

function periodsOverlap(aFrom, aTo, bFrom, bTo) {
  if (!aFrom || !aTo || !bFrom || !bTo) return false;
  return new Date(aFrom) <= new Date(bTo) && new Date(bFrom) <= new Date(aTo);
}

function getFlightMasterById(id) {
  return state.masters?.flights?.find((item) => item.id === id);
}

function flightLabel(flight) {
  if (!flight) return "-";
  return `${flight.airline || ""} ${flight.flightNumber || ""} ${flight.sector || ""}`.trim() || "-";
}

function getMenuById(id) {
  return state.masters?.menus?.find((item) => item.id === id);
}

function getMenuLineById(menuId, lineId) {
  return getMenuById(menuId)?.lines?.find((item) => item.id === lineId);
}

function getMappingById(id) {
  return state.masters?.flightMenuMappings?.find((item) => item.id === id);
}

function getAncillaryById(id) {
  return state.masters?.ancillaryItems?.find((item) => item.id === id);
}

function getLoadingSheetById(id) {
  return state.masters?.loadingSheets?.find((item) => item.id === id);
}

function categoryFromDish(name, fallback = "") {
  const text = `${name} ${fallback}`.toLowerCase();
  if (text.includes("fruit")) return "Breakfast";
  if (text.includes("yoghurt") || text.includes("yogurt")) return "Snack";
  if (text.includes("omelette") || text.includes("uttapam") || text.includes("potato")) return "Main Course";
  if (text.includes("roll") || text.includes("croissant") || text.includes("bread")) return "Bread";
  if (text.includes("butter") || text.includes("jam")) return "Accompaniment";
  if (text.includes("tsu") || text.includes("tray")) return "Tray Setup";
  return "Other";
}

function normalizeRatioType(value) {
  const text = String(value || "").toLowerCase();
  if (text.includes("1 : 1") || text.includes("per pax")) return "one_to_one";
  if (text.startsWith("j")) return "business_quantity";
  if (text.startsWith("w")) return "premium_economy_quantity";
  if (text.startsWith("y")) return "economy_quantity";
  if (text.includes("crew")) return "crew_quantity";
  if (text.includes("fixed")) return "fixed";
  return "manual_matrix";
}

function syncLegacyLoadingChart() {
  const loadingSheet = getLoadingSheetById(state.selectedLoadingSheetId) || state.masters.loadingSheets[0];
  if (!loadingSheet) return;
  const flight = getFlightMasterById(loadingSheet.flightMasterId);
  const menu = getMenuById(loadingSheet.menuId);
  state.selectedLoadingSheetId = loadingSheet.id;
  state.loadingChart = {
    ...state.loadingChart,
    airline: flight?.airline || state.loadingChart.airline,
    aircraftType: loadingSheet.aircraftType || flight?.aircraftType || state.loadingChart.aircraftType,
    flightNo: flight?.flightNumber || state.loadingChart.flightNo,
    sector: flight?.sector || state.loadingChart.sector,
    mealType: loadingSheet.mealType || menu?.serviceType || state.loadingChart.mealType,
    mealTime: flight?.scheduledDeparture || state.loadingChart.mealTime,
    chartCode: loadingSheet.loadingSheetCode || state.loadingChart.chartCode,
    version: loadingSheet.version || state.loadingChart.version,
    effectiveFrom: loadingSheet.effectiveFrom || state.loadingChart.effectiveFrom,
    effectiveTo: loadingSheet.effectiveTo || state.loadingChart.effectiveTo,
    rotationFrom: loadingSheet.rotation || state.loadingChart.rotationFrom,
    rotationTo: loadingSheet.rotation || state.loadingChart.rotationTo,
    notes: loadingSheet.notes || "",
    capacity: {
      total: flight?.totalPassengerCapacity || state.loadingChart.capacity.total,
      j: flight?.businessCapacity || 0,
      w: flight?.premiumEconomyCapacity || 0,
      y: flight?.economyCapacity || 0,
      crew: Number(flight?.technicalCrewCount || 0) + Number(flight?.cabinCrewCount || 0)
    },
    rows: loadingSheet.lines.map((line) => ({
      code: line.menuItemCode,
      name: line.menuItemName,
      unit: line.unit,
      ratioType: loadingRatioLabel(line.ratioType),
      ratioValue: line.ratioValue || (Number(line.quantityPerPassenger) === 1 ? "1:1" : String(line.ratioValue || "")),
      remarks: line.remarks || line.category
    }))
  };
}

function loadingRatioLabel(type) {
  const labels = {
    percentage_split: "Percentage Split",
    one_to_one: "1 : 1 (Per Pax)",
    per_x_pax: "One unit per X passengers",
    fixed: "Fixed Quantity",
    business_quantity: "J (Business)",
    premium_economy_quantity: "W (Premium Economy)",
    economy_quantity: "Y (Economy)",
    crew_quantity: "Crew",
    cabin_class_percentage: "Cabin Class Percentage",
    manual_matrix: "Manual Matrix",
    minimum_plus_calculated: "Minimum + Calculated"
  };
  return labels[type] || "Manual Matrix";
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
        <div class="modal-head"><h2 style="margin:0">${escapeHtml(title)}</h2><button type="button" class="btn icon-btn" onclick="closeModal()" aria-label="Close dialog" title="Close">×</button></div>
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
    "flight-master": "Flight Master",
    "menu-master": "Menu Master",
    "flight-menu-mapping": "Flight–Menu Mapping",
    "ancillary-master": "Ancillary Item Master",
    "loading-sheet-master": "Loading Sheet Master",
    audit: "Audit Trail",
    planning: "Airline Setup",
    queue: "Flight Queue",
    kot: "KOT Entry",
    "kot-list": "KOT List",
    kitchen: "Kitchen Board",
    challan: "Challan",
    "challan-preview": "Challan Preview",
    invoice: "Invoice",
    "loading-maintenance": "Loading Sheet Master",
    "loading-preview": "Loading Sheet Master"
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
    "Flight Master": "FM",
    "Menu Master": "MM",
    "Flight–Menu Mapping": "MP",
    "Ancillary Item Master": "AI",
    "Loading Sheet Master": "LS",
    Users: "US",
    Configurations: "CF",
    "Kitchen Board": "KB",
    "Invoice": "IN",
    "MLC Maintenance": "LC",
    "MLC Preview": "LP",
    "Audit Trail": "AT"
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
          <div class="nav-title">Master Data</div>
          ${button("Flight Master", "flight-master")}
          ${button("Menu Master", "menu-master")}
          ${button("Flight–Menu Mapping", "flight-menu-mapping")}
          ${button("Ancillary Item Master", "ancillary-master")}
          ${button("Loading Sheet Master", "loading-sheet-master")}
          <div class="nav-title">Operations</div>
          ${button("Flight Queue", "queue")}
          ${button("KOT Entry", "kot")}
          ${button("KOT List", "kot-list")}
          ${button("Kitchen Board", "kitchen")}
          ${button("Challan Preview", "challan-preview")}
          <div class="nav-title">Finance</div>
          ${button("Invoice", "invoice")}
          <div class="nav-title">Admin</div>
          ${button("Audit Trail", "audit")}
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
    "flight-master": renderFlightMaster,
    "menu-master": renderMenuMaster,
    "flight-menu-mapping": renderMappingMaster,
    "ancillary-master": renderAncillaryMaster,
    "loading-sheet-master": renderLoadingSheetMaster,
    planning: renderPlanning,
    queue: renderQueue,
    kot: renderKot,
    "kot-list": renderKotList,
    kitchen: renderKitchen,
    "kitchen-display": renderKitchenDisplay,
    challan: renderChallanFull,
    "challan-preview": renderChallanPreview,
    invoice: renderInvoice,
    audit: renderAuditTrail,
    "loading-maintenance": renderLoadingMaintenance,
    "loading-preview": renderLoadingPreview
  };
  document.getElementById("app").innerHTML = (routes[state.screen] || renderQueue)();
}

function renderFlightMaster() {
  return renderMasterScreen(masterConfigs().flights);
}

function renderMenuMaster() {
  const config = masterConfigs().menus;
  if (state.menuMasterView !== "detail") return renderMasterScreen(config);

  const menus = masterRows(config);
  const selectedMenu = getMenuById(state.selectedMenuId) || menus[0] || emptyMenuMaster();
  state.selectedMenuId = selectedMenu.id;
  const body = `
    <section class="content menu-master-content">
      <div class="toolbar master-toolbar menu-master-toolbar">
        <div class="toolbar-group toolbar-group--start">
          <button type="button" class="btn" onclick="showMenuMasterTable()">Back to Table</button>
          <select class="field menu-master-select" onchange="state.selectedMenuId=this.value;saveState();render()">
            ${menus.map((menu) => `<option value="${escapeHtml(menu.id)}" ${menu.id === selectedMenu.id ? "selected" : ""}>${escapeHtml(menu.menuCode)} - ${escapeHtml(menu.menuName)}</option>`).join("")}
          </select>
          <span class="badge ${selectedMenu.status.toLowerCase()}">${escapeHtml(selectedMenu.status)}</span>
        </div>
        <div class="toolbar-group toolbar-group--end">
          <button type="button" class="btn green" onclick="openMasterModal('menus')">Add Menu</button>
          <button type="button" class="btn green" onclick="openMenuMasterEditor('${selectedMenu.id}')">Edit Menu</button>
          <button type="button" class="btn" onclick="cloneMasterRecord('menus','${selectedMenu.id}')">Clone Menu</button>
          <button type="button" class="btn" onclick="window.print()">Print</button>
        </div>
      </div>
      ${menuMasterDetailDocument(selectedMenu)}
      <div class="footer-note">Menu Master stores reusable menu definitions, dish pricing, tax, and billing codes. Flight loading rules are maintained in Loading Sheet Master.</div>
    </section>
  `;
  return layout("Menu Master", "View menu definition, dishes, pricing, and billing information", body);
}

function openMenuMasterDetails(id) {
  state.screen = "menu-master";
  state.selectedMenuId = id;
  state.menuMasterView = "detail";
  saveState();
  render();
}

function openMenuMasterChart(id) {
  openMenuMasterDetails(id);
}

function showMenuMasterTable() {
  state.menuMasterView = "list";
  saveState();
  render();
}

function openMenuMasterEditor(id = "") {
  openMasterModal("menus", id, "edit");
}

function openMenuMasterLoadingEdit(id) {
  openMenuMasterEditor(id);
}

function renderMappingMaster() {
  return renderMasterScreen(masterConfigs().mappings);
}

function renderAncillaryMaster() {
  return renderMasterScreen(masterConfigs().ancillaries);
}

function renderLoadingSheetMaster() {
  const config = masterConfigs().loadingSheets;
  if (state.loadingSheetView !== "detail") return renderMasterScreen(config);

  const loadingSheets = masterRows(config);
  const selectedSheet = getLoadingSheetById(state.selectedLoadingSheetId) || loadingSheets[0] || emptyLoadingSheet();
  state.selectedLoadingSheetId = selectedSheet.id;
  const flight = getFlightMasterById(selectedSheet.flightMasterId);
  const menu = getMenuById(selectedSheet.menuId);
  const body = `
    <section class="content menu-master-content">
      <div class="toolbar master-toolbar menu-master-toolbar">
        <div class="toolbar-group toolbar-group--start">
          <button type="button" class="btn" onclick="showLoadingSheetTable()">Back to Table</button>
          <select class="field menu-master-select" onchange="openLoadingSheetDetails(this.value)">
            ${loadingSheets.map((sheet) => `<option value="${escapeHtml(sheet.id)}" ${sheet.id === selectedSheet.id ? "selected" : ""}>${escapeHtml(sheet.loadingSheetCode)} - ${escapeHtml(flightLabel(getFlightMasterById(sheet.flightMasterId)))}</option>`).join("")}
          </select>
          <span class="badge ${selectedSheet.status.toLowerCase()}">${escapeHtml(selectedSheet.status)}</span>
        </div>
        <div class="toolbar-group toolbar-group--end">
          <button type="button" class="btn green" onclick="openMasterModal('loadingSheets')">Add Loading Sheet</button>
          <button type="button" class="btn" onclick="openMasterModal('loadingSheets','${selectedSheet.id}','view')">Record Details</button>
          <button type="button" class="btn green" onclick="openLoadingMaintenance('${selectedSheet.id}')">Edit Loading Sheet</button>
          <button type="button" class="btn" onclick="cloneMasterRecord('loadingSheets','${selectedSheet.id}')">Clone Version</button>
          <button type="button" class="btn" onclick="previewLoadingSheet('${selectedSheet.id}')">Preview Matrix</button>
          <button type="button" class="btn" onclick="window.print()">Print</button>
        </div>
      </div>
      ${loadingSheetReferenceDocument(selectedSheet, flight, menu)}
      <div class="footer-note">Loading Sheet Master owns the operational loading chart, menu association, ratios, quantity matrix, and print-ready meal loading document.</div>
    </section>
  `;
  return layout("Loading Sheet Master", "Formal meal loading chart, ratios, and calculated quantities by flight and menu", body);
}

function openLoadingSheetDetails(id) {
  state.screen = "loading-sheet-master";
  state.selectedLoadingSheetId = id;
  state.loadingSheetView = "detail";
  syncLegacyLoadingChart();
  saveState();
  render();
}

function showLoadingSheetTable() {
  state.loadingSheetView = "list";
  saveState();
  render();
}

function findFlightForMenu(menu, loadingSheet) {
  const fromSheet = loadingSheet ? getFlightMasterById(loadingSheet.flightMasterId) : null;
  if (fromSheet) return fromSheet;
  const mapping = state.masters.flightMenuMappings.find((item) => item.menuId === menu?.id && item.status === "Active")
    || state.masters.flightMenuMappings.find((item) => item.menuId === menu?.id);
  return mapping ? getFlightMasterById(mapping.flightMasterId) : state.masters.flights[0];
}

function createLoadingSheetForMenu(menu) {
  const mapping = state.masters.flightMenuMappings.find((item) => item.menuId === menu.id && item.status === "Active")
    || state.masters.flightMenuMappings.find((item) => item.menuId === menu.id);
  const flight = mapping ? getFlightMasterById(mapping.flightMasterId) : state.masters.flights[0];
  return normalizeLoadingSheetRecord({
    id: generateId("load", menu.id),
    loadingSheetCode: `MLC-${menu.menuCode || "MENU"}-${menu.version || "1"}`,
    version: menu.version || "1",
    flightMasterId: flight?.id || "",
    aircraftType: flight?.aircraftType || "",
    menuId: menu.id,
    serviceSequence: menu.serviceSequence || mapping?.serviceSequence || "1",
    mealType: menu.serviceType || mapping?.serviceType || "Hot Breakfast",
    daysOfOperation: flight?.operatingDays || [],
    effectiveFrom: menu.effectiveFrom || "2026-06-15",
    effectiveTo: menu.effectiveTo || "2026-12-31",
    rotation: "",
    notes: menu.description || "",
    status: menu.status || "Active",
    lines: (menu.lines || []).map((line, index) => ({
      id: generateId("lsln", `${menu.id}-${index}`),
      menuLineId: line.id,
      menuItemCode: line.itemCode,
      menuItemName: line.itemName,
      category: line.category,
      unit: line.unit,
      cabinClass: "All",
      ratioType: "one_to_one",
      ratioValue: "1:1",
      fixedQuantity: 0,
      quantityPerPassenger: 1,
      minimumQuantity: 0,
      maximumQuantity: "",
      bufferPercentage: 0,
      roundingMethod: "ceil",
      displaySequence: index + 1,
      remarks: line.category || ""
    }))
  });
}

function menuMasterDetailDocument(menu) {
  const rows = [...(menu?.lines || [])].sort((a, b) => Number(a.displaySequence || 0) - Number(b.displaySequence || 0));
  return `
    <div class="master-detail-card">
      <div class="detail-title-row">
        <div>
          <h2>${escapeHtml(menu.menuCode || "Untitled Menu")}</h2>
          <p>${escapeHtml(menu.menuName || "Menu definition")}</p>
        </div>
        <span class="badge ${menu.status.toLowerCase()}">${escapeHtml(menu.status)}</span>
      </div>
      <div class="detail-grid">
        ${detailItem("Menu Cycle", menu.menuCycle)}
        ${detailItem("Service Type", menu.serviceType)}
        ${detailItem("Service Sequence", menu.serviceSequence)}
        ${detailItem("Cabin Classes", (menu.cabinClasses || []).join(", "))}
        ${detailItem("Currency", menu.currency)}
        ${detailItem("Version", menu.version)}
        ${detailItem("Effective From", menu.effectiveFrom)}
        ${detailItem("Effective To", menu.effectiveTo)}
        ${detailItem("Description", menu.description || "-", "wide")}
      </div>
      <div class="panel-head detail-panel-head"><h2>Menu Items</h2><span class="muted">${rows.length} configured lines</span></div>
      <div class="table-wrap">
        <table class="data-table menu-items-table">
          <thead><tr><th>Sequence</th><th>Dish Code</th><th>Dish Name</th><th>Category</th><th>Meal Type</th><th>Classification</th><th>Special Meal Code</th><th>Unit</th><th class="num">Unit Price</th><th class="num">Tax %</th><th>Invoice Item Code</th><th>Status</th></tr></thead>
          <tbody>
            ${rows.map((line) => `<tr>
              <td class="num">${Number(line.displaySequence || 0)}</td>
              <td class="cell-code">${escapeHtml(line.itemCode)}</td>
              <td class="cell-name">${escapeHtml(line.itemName)}</td>
              <td>${escapeHtml(line.category)}</td>
              <td>${escapeHtml(line.mealType)}</td>
              <td>${escapeHtml(line.classification)}</td>
              <td>${escapeHtml(line.specialMealCode || "-")}</td>
              <td>${escapeHtml(line.unit)}</td>
              <td class="num">${Number(line.unitPrice || 0).toFixed(2)}</td>
              <td class="num">${Number(line.taxPercentage || 0).toFixed(2)}</td>
              <td>${escapeHtml(line.invoiceItemCode || "-")}</td>
              <td>${badge(line.status || "Active")}</td>
            </tr>`).join("") || `<tr><td colspan="12" class="empty-state">No dish lines configured for this menu.</td></tr>`}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function detailItem(label, value, className = "") {
  return `<div class="detail-item ${className}"><span>${escapeHtml(label)}</span><b>${escapeHtml(value || "-")}</b></div>`;
}

function loadingSheetReferenceDocument(loadingSheet, flight, menu) {
  const rows = loadingSheetDocumentRows(loadingSheet, menu);
  const points = Array.from({ length: 20 }, (_, index) => index + 1);
  const effectiveFrom = loadingSheet?.effectiveFrom || "";
  const effectiveTo = loadingSheet?.effectiveTo || "";
  const rotation = parseRotationRange(loadingSheet?.rotation);
  const mealCode = loadingSheet?.loadingSheetCode || "-";
  const serviceSeq = loadingSheet?.serviceSequence || menu?.serviceSequence || "1";
  const mealType = loadingSheet?.mealType || menu?.serviceType || "-";
  const sector = compactSector(flight?.sector || "-");
  const dayOps = dayOpsDigits(flight?.operatingDays);
  const aircraftType = loadingSheet?.aircraftType || flight?.aircraftType || "-";
  const classLabel = cabinClassShort(menu?.cabinClasses?.[0] || loadingSheet?.lines?.[0]?.cabinClass);
  return `
    <div class="menu-document-scroll">
      <article class="menu-master-paper">
        <div class="menu-doc-top">
          <div>
            <h2>Meal Loading Chart</h2>
            <p><b>CUP Name :</b> ${escapeHtml(`GATE-KTM-${effectivePeriodCode(effectiveFrom)}-23810`)}</p>
            <p><b>Caterer (Station) :</b> GATE (KTM)</p>
            <p><b>Effective Period :</b> ${escapeHtml(effectivePeriodLabel(effectiveFrom))}</p>
          </div>
          <div class="menu-doc-airline">${escapeHtml((flight?.airline || "flydubai").toLowerCase())}</div>
        </div>

        <div class="menu-section-title">Section 1: Service Details - Meal</div>
        <table class="menu-detail-table">
          <tbody>
            <tr>
              <th>Leg</th><th>Sector</th><th>STD</th><th>STA</th><th>Flight Time</th><th>Day of Ops</th><th>Aircraft Type</th><th>Flight Effective Period</th>
            </tr>
            <tr>
              <td>1</td><td>${escapeHtml(sector)}</td><td>${escapeHtml(flight?.scheduledDeparture || "-")}</td><td>${escapeHtml(flight?.scheduledArrival || "-")}</td><td>${escapeHtml(flightTime(flight))}</td><td>${escapeHtml(dayOps)}</td><td>${escapeHtml(aircraftType)}</td><td>${escapeHtml(`${formatDocDate(effectiveFrom)} - ${formatDocDate(effectiveTo)}`)}</td>
            </tr>
            <tr>
              <th>Leg</th><th>Class</th><th>Service Seq</th><th>Meal Type</th><th>Rotation</th><th>Meal Code</th><th colspan="2">Rotation Effective Period</th>
            </tr>
            <tr>
              <td>1</td><td>${escapeHtml(classLabel)}</td><td>${escapeHtml(serviceSeq)}</td><td>${escapeHtml(mealType)}</td><td>${escapeHtml(rotation.label || "4")}</td><td>${escapeHtml(mealCode)}</td><td colspan="2">${escapeHtml(rotation.period || `${formatDocDate(effectiveFrom)}-${formatDocDate(effectiveTo)}`)}</td>
            </tr>
          </tbody>
        </table>

        <table class="menu-summary-table">
          <tbody>
            <tr><th>Class</th><th>Meal Code</th><th>Meal Name</th><th>Meal Type</th><th>Version</th><th>Effective Date</th></tr>
            <tr><td>${escapeHtml(classLabel)}</td><td>${escapeHtml(mealCode)}</td><td>${escapeHtml(menu?.menuName || "-")}</td><td>${escapeHtml(mealType)}</td><td>${escapeHtml(loadingSheet?.version || menu?.version || "-")}</td><td>${escapeHtml(formatDocDate(effectiveFrom))}</td></tr>
          </tbody>
        </table>

        <div class="menu-matrix-wrap">
          <table class="menu-reference-matrix">
            <thead>
              <tr><th>Class</th><th>Dish Code</th><th>Dish Name</th><th>Ratio</th>${points.map((point) => `<th class="num">${point}</th>`).join("")}</tr>
            </thead>
            <tbody>
              ${rows.map((row, index) => `
                <tr>
                  <td>${index === 0 ? escapeHtml(classLabel) : ""}</td>
                  <td><span>${escapeHtml(row.group)}</span><b>${escapeHtml(row.code)}</b></td>
                  <td>${escapeHtml(row.name)}</td>
                  <td>${escapeHtml(row.ratio)}</td>
                  ${points.map((point) => `<td class="num">${menuReferenceQty(row, point)}</td>`).join("")}
                </tr>
              `).join("") || `<tr><td colspan="${points.length + 4}" class="empty-state">No menu lines configured.</td></tr>`}
            </tbody>
          </table>
        </div>
      </article>
    </div>
  `;
}

function loadingSheetDocumentRows(loadingSheet, menu) {
  return [...(loadingSheet?.lines || [])]
    .sort((a, b) => Number(a.displaySequence || 0) - Number(b.displaySequence || 0))
    .map((line, index) => {
      const menuLine = menu?.lines?.find((item) => item.id === line.menuLineId || item.itemCode === line.menuItemCode) || {};
      return {
        code: line.menuItemCode || menuLine.itemCode || `ITEM-${index + 1}`,
        name: line.menuItemName || menuLine.itemName || "",
        group: String(line.category || menuLine.category || "Meal").toUpperCase(),
        ratio: menuReferenceRatioLabel(line),
        ratioType: line.ratioType || "one_to_one",
        ratioValue: line.ratioValue || "1:1"
      };
    });
}

function menuMasterReferenceDocument(menu, loadingSheet, flight) {
  return loadingSheetReferenceDocument(loadingSheet || findLoadingSheetForMenu(menu), flight || findFlightForMenu(menu, loadingSheet), menu);
}

function menuMasterReferenceRows(menu, loadingSheet) {
  return loadingSheetDocumentRows(loadingSheet || findLoadingSheetForMenu(menu), menu);
}

function findLoadingSheetForMenu(menu) {
  if (!menu) return null;
  const selected = getLoadingSheetById(state.selectedLoadingSheetId);
  if (selected?.menuId === menu.id) return selected;
  return state.masters.loadingSheets.find((sheet) => sheet.menuId === menu.id && sheet.status === "Active")
    || state.masters.loadingSheets.find((sheet) => sheet.menuId === menu.id)
    || null;
}

function menuReferenceRatioLabel(line = {}) {
  if (!line.ratioValue && !line.ratioType) return "1:1 - N";
  if (line.ratioValue === "1:1" || line.ratioType === "one_to_one") return "1:1 - N";
  return line.ratioValue || line.ratioType || "1:1 - N";
}

function menuReferenceQty(row, pax) {
  if (/^JHM?50$/i.test(row.ratio)) return Math.max(1, Math.ceil(pax * .5));
  if (/^JHM?30$/i.test(row.ratio)) return Math.max(1, Math.ceil(pax * .3));
  if (/^JHM?60$/i.test(row.ratio)) return Math.max(1, Math.ceil(pax * .6));
  if (row.ratio === "JH150") return Math.max(1, Math.ceil(pax / 25));
  if (row.ratioType === "fixed") return Number(row.ratioValue || 0);
  return pax;
}

function parseRotationRange(rotation = "") {
  const text = String(rotation || "").trim();
  if (!text) return { label: "", period: "" };
  const match = text.match(/^(.+?)\s+-\s+(.+)$/);
  if (match) return { label: "4", period: `${match[1].trim()}-${match[2].trim()}` };
  return { label: "4", period: text };
}

function compactSector(value = "") {
  return String(value || "").replace(/\s+-\s+/g, "-") || "-";
}

function cabinClassShort(value = "") {
  const text = String(value || "").toLowerCase();
  if (text.includes("business")) return "J";
  if (text.includes("premium")) return "W";
  if (text.includes("economy")) return "Y";
  if (text.includes("crew")) return "C";
  return "J";
}

function dayOpsDigits(days = []) {
  const map = { Mon: "1", Tue: "2", Wed: "3", Thu: "4", Fri: "5", Sat: "6", Sun: "7" };
  const digits = (days || []).map((day) => map[day]).filter(Boolean).join("");
  return digits || "1234567";
}

function effectivePeriodLabel(value) {
  if (!value) return "-";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleString("en-US", { month: "short", year: "2-digit" }).replace(" ", "-");
}

function effectivePeriodCode(value) {
  return effectivePeriodLabel(value).toUpperCase();
}

function formatDocDate(value) {
  if (!value) return "-";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  const day = String(date.getDate()).padStart(2, "0");
  const month = date.toLocaleString("en-US", { month: "short" });
  return `${day}-${month}-${date.getFullYear()}`;
}

function flightTime(flight) {
  if (!flight?.scheduledDeparture || !flight?.scheduledArrival) return state.loadingChart.mealTime || "-";
  const [fromH, fromM] = String(flight.scheduledDeparture).split(":").map(Number);
  const [toH, toM] = String(flight.scheduledArrival).split(":").map(Number);
  if ([fromH, fromM, toH, toM].some((value) => Number.isNaN(value))) return state.loadingChart.mealTime || "-";
  let minutes = (toH * 60 + toM) - (fromH * 60 + fromM);
  if (minutes < 0) minutes += 24 * 60;
  return `${String(Math.floor(minutes / 60)).padStart(2, "0")}:${String(minutes % 60).padStart(2, "0")}`;
}

function renderAuditTrail() {
  const rows = state.auditTrail || [];
  const body = `
    <section class="content">
      <div class="toolbar">
        <div class="toolbar-group toolbar-group--start">
          <input class="search" placeholder="Search audit..." oninput="filterAuditRows(this.value)">
        </div>
        <div class="toolbar-group toolbar-group--end">
          <button type="button" class="btn icon-btn" onclick="resetDemo()" title="Reset demo data" aria-label="Reset demo data">RS</button>
        </div>
      </div>
      <div class="table-wrap">
        <table id="audit-table">
          <thead><tr><th>Date / Time</th><th>Action</th><th>Entity Type</th><th>Entity ID</th><th>Description</th><th>Demo User</th></tr></thead>
          <tbody>${rows.map((row) => `<tr data-search="${escapeHtml(`${row.at} ${row.action} ${row.entityType} ${row.entityId} ${row.details} ${row.user || "operations1"}`.toLowerCase())}"><td>${escapeHtml(row.at)}</td><td>${escapeHtml(row.action)}</td><td>${escapeHtml(row.entityType)}</td><td>${escapeHtml(row.entityId)}</td><td>${escapeHtml(row.details || "")}</td><td>${escapeHtml(row.user || "operations1")}</td></tr>`).join("") || `<tr><td colspan="6" class="empty-state">No audit entries yet.</td></tr>`}</tbody>
        </table>
      </div>
      <div class="footer-note">Audit trail is stored in localStorage for the demo and records major master, KOT, kitchen, challan, and invoice actions.</div>
    </section>`;
  return layout("Audit Trail", "Local transaction and master change history", body);
}

function filterAuditRows(value) {
  const query = value.toLowerCase();
  document.querySelectorAll("#audit-table tbody tr[data-search]").forEach((row) => {
    row.style.display = row.dataset.search.includes(query) ? "" : "none";
  });
}

function masterConfigs() {
  return {
    flights: {
      key: "flights",
      tableClass: "master-table master-table--flights",
      screen: "flight-master",
      title: "Flight Master",
      subtitle: "Configure airline flight definitions, routes, schedules, capacity, and operational defaults",
      addLabel: "Add Flight",
      idField: "selectedFlightMasterId",
      columns: [
        ["Flight code", (row) => row.flightCode, "cell-code"],
        ["Airline", (row) => row.airline, "cell-name"],
        ["Flight number", (row) => row.flightNumber, "cell-code"],
        ["Origin", (row) => row.origin, "cell-sector"],
        ["Destination", (row) => row.destination, "cell-sector"],
        ["Sector", (row) => row.sector, "cell-code"],
        ["Days", (row) => row.operatingDays.join(", "), "cell-wrap"],
        ["STD", (row) => row.scheduledDeparture, "cell-code"],
        ["STA", (row) => row.scheduledArrival, "cell-code"],
        ["Aircraft", (row) => row.aircraftType, "cell-nowrap"],
        ["Capacity", (row) => row.totalPassengerCapacity, "num cell-num"],
        ["Effective", (row) => `${row.effectiveFrom} to ${row.effectiveTo}`, "cell-date"],
        ["Status", (row) => badge(row.status), "cell-status"]
      ],
      fields: flightMasterFields,
      create: emptyFlightMaster,
      validate: validateFlightMaster,
      search: (row) => `${row.flightCode} ${row.airline} ${row.flightNumber} ${row.origin} ${row.destination} ${row.sector}`,
      filters: [
        ["Airline", "airline", (rows) => unique(rows.map((row) => row.airline))],
        ["Origin", "origin", (rows) => unique(rows.map((row) => row.origin))],
        ["Destination", "destination", (rows) => unique(rows.map((row) => row.destination))],
        ["Operating day", "operatingDay", () => ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]],
        ["Status", "status", () => ["Active", "Inactive"]]
      ]
    },
    menus: {
      key: "menus",
      tableClass: "master-table master-table--menus",
      screen: "menu-master",
      title: "Menu Master",
      subtitle: "Maintain menu headers, menu line items, pricing, tax, and invoice item codes",
      addLabel: "Add Menu",
      idField: "selectedMenuId",
      columns: [
        ["Menu code", (row) => row.menuCode, "cell-code"],
        ["Menu name", (row) => row.menuName, "cell-name"],
        ["Cycle", (row) => row.menuCycle, "cell-nowrap"],
        ["Service type", (row) => row.serviceType, "cell-nowrap"],
        ["Meal category", (row) => row.lines[0]?.category || "-", "cell-wrap"],
        ["Currency", (row) => row.currency, "cell-nowrap"],
        ["Items", (row) => row.lines.length, "num cell-num"],
        ["Effective", (row) => `${row.effectiveFrom} to ${row.effectiveTo}`, "cell-date"],
        ["Version", (row) => row.version, "cell-code"],
        ["Status", (row) => badge(row.status), "cell-status"]
      ],
      fields: menuMasterFields,
      create: emptyMenuMaster,
      validate: validateMenuMaster,
      search: (row) => `${row.menuCode} ${row.menuName} ${row.menuCycle} ${row.serviceType}`
    },
    mappings: {
      key: "flightMenuMappings",
      tableClass: "master-table master-table--mappings",
      screen: "flight-menu-mapping",
      title: "Flight–Menu Mapping",
      subtitle: "Map active flights and sectors to menu cycles for operations and billing",
      addLabel: "Add Mapping",
      idField: "selectedMappingId",
      columns: [
        ["Mapping code", (row) => row.mappingCode, "cell-code"],
        ["Airline", (row) => getFlightMasterById(row.flightMasterId)?.airline || "-", "cell-name"],
        ["Flight number", (row) => getFlightMasterById(row.flightMasterId)?.flightNumber || "-", "cell-code"],
        ["Sector", (row) => getFlightMasterById(row.flightMasterId)?.sector || "-", "cell-code"],
        ["Menu code", (row) => getMenuById(row.menuId)?.menuCode || "-", "cell-code"],
        ["Menu name", (row) => getMenuById(row.menuId)?.menuName || "-", "cell-name"],
        ["Service type", (row) => row.serviceType, "cell-nowrap"],
        ["Effective", (row) => `${row.effectiveFrom} to ${row.effectiveTo}`, "cell-date"],
        ["Priority", (row) => row.priority, "num cell-num"],
        ["Status", (row) => badge(row.status), "cell-status"]
      ],
      fields: mappingFields,
      create: emptyMapping,
      validate: validateMapping,
      search: (row) => `${row.mappingCode} ${getFlightMasterById(row.flightMasterId)?.airline || ""} ${getFlightMasterById(row.flightMasterId)?.flightNumber || ""} ${getFlightMasterById(row.flightMasterId)?.sector || ""} ${getMenuById(row.menuId)?.menuCode || ""}`,
      filters: [
        ["Airline", "airline", () => unique(state.masters.flights.map((row) => row.airline))],
        ["Flight", "flightMasterId", () => state.masters.flights.map((row) => ({ label: `${row.flightNumber} ${row.sector}`, value: row.id }))],
        ["Menu", "menuId", () => state.masters.menus.map((row) => ({ label: row.menuCode, value: row.id }))],
        ["Status", "status", () => ["Active", "Inactive"]]
      ]
    },
    ancillaries: {
      key: "ancillaryItems",
      tableClass: "master-table master-table--ancillaries",
      screen: "ancillary-master",
      title: "Ancillary Item Master",
      subtitle: "Configure billable and operational ancillary items with calculation rules",
      addLabel: "Add Ancillary",
      idField: "selectedAncillaryId",
      columns: [
        ["Item code", (row) => row.itemCode, "cell-code"],
        ["Item name", (row) => row.itemName, "cell-name"],
        ["Category", (row) => row.category, "cell-nowrap"],
        ["Unit", (row) => row.unit, "cell-nowrap"],
        ["Rule", (row) => ruleLabel(row.calculationRule), "cell-rule"],
        ["Rate", (row) => Number(row.unitRate).toFixed(2), "num cell-num"],
        ["Currency", (row) => row.currency, "cell-nowrap"],
        ["Invoice", (row) => row.invoiceEnabled ? "Yes" : "No", "cell-status"],
        ["Status", (row) => badge(row.status), "cell-status"]
      ],
      fields: ancillaryFields,
      create: emptyAncillary,
      validate: validateAncillary,
      search: (row) => `${row.itemCode} ${row.itemName} ${row.category} ${row.unit}`
    },
    loadingSheets: {
      key: "loadingSheets",
      tableClass: "master-table master-table--loading-sheets",
      screen: "loading-sheet-master",
      title: "Loading Sheet Master",
      subtitle: "Reusable loading sheet versions linked to flight, menu, aircraft, and menu line items",
      addLabel: "Add Loading Sheet",
      idField: "selectedLoadingSheetId",
      columns: [
        ["Loading Sheet code", (row) => row.loadingSheetCode, "cell-code"],
        ["Version", (row) => row.version, "cell-code"],
        ["Airline", (row) => getFlightMasterById(row.flightMasterId)?.airline || "-", "cell-name"],
        ["Flight number", (row) => getFlightMasterById(row.flightMasterId)?.flightNumber || "-", "cell-code"],
        ["Sector", (row) => getFlightMasterById(row.flightMasterId)?.sector || "-", "cell-code"],
        ["Aircraft", (row) => row.aircraftType, "cell-nowrap"],
        ["Menu", (row) => getMenuById(row.menuId)?.menuCode || "-", "cell-code"],
        ["Meal type", (row) => row.mealType, "cell-nowrap"],
        ["Effective", (row) => `${row.effectiveFrom} to ${row.effectiveTo}`, "cell-date"],
        ["Lines", (row) => row.lines.length, "num cell-num"],
        ["Status", (row) => badge(row.status), "cell-status"]
      ],
      fields: loadingSheetFields,
      create: emptyLoadingSheet,
      validate: validateLoadingSheet,
      search: (row) => `${row.loadingSheetCode} ${getFlightMasterById(row.flightMasterId)?.airline || ""} ${getFlightMasterById(row.flightMasterId)?.flightNumber || ""} ${getMenuById(row.menuId)?.menuCode || ""} ${row.mealType}`,
      extraActions: (row) => `<button type="button" class="btn" onclick="previewLoadingSheet('${row.id}')">Preview Matrix</button><button type="button" class="btn" onclick="cloneMasterRecord('loadingSheets','${row.id}')">Clone Version</button>`
    }
  };
}

function renderMasterScreen(config) {
  const rows = masterRows(config);
  const filteredRows = applyMasterFilters(rows, config);
  const activeCount = rows.filter((row) => row.status === "Active").length;
  const warnings = rows.reduce((sum, row) => sum + config.validate(row, row.id).length, 0);
  const body = `
    <section class="content">
      <div class="kpi-grid master-kpi-grid">
        ${kpi("MD", "Total Records", rows.length, config.title)}
        ${kpi("AC", "Active", activeCount, "Available to operations", "green")}
        ${kpi("IN", "Inactive", rows.length - activeCount, "Retained for history", "amber")}
        ${kpi("VA", "Validation Flags", warnings, "Current saved records", warnings ? "red" : "green")}
      </div>
      <div class="toolbar toolbar--master master-toolbar ${config.filters?.length ? "toolbar--master-filtered" : "toolbar--master-simple"}">
        <div class="toolbar-group toolbar-group--start">
          <input class="search" value="${escapeHtml(masterFilter(config.screen, "search"))}" placeholder="Search..." oninput="setMasterFilter('${config.screen}', 'search', this.value)">
          ${renderMasterFilters(config, rows)}
        </div>
        <div class="toolbar-group toolbar-group--end">
          <button type="button" class="btn green" onclick="openMasterModal('${config.key}')">${config.addLabel}</button>
          <button type="button" class="btn icon-btn" onclick="resetDemo()" title="Reset demo data" aria-label="Reset demo data">RS</button>
        </div>
      </div>
      <div class="table-wrap master-table-wrap">
        <table class="data-table ${config.tableClass || `master-table--${config.key}`}">
          <thead><tr>${config.columns.map(([label, getter, className]) => `<th class="${className || ""}">${label}</th>`).join("")}<th class="cell-actions">Actions</th></tr></thead>
          <tbody>
            ${filteredRows.map((row) => masterTableRow(config, row)).join("") || `<tr><td colspan="${config.columns.length + 1}" class="empty-state">No master records match the current filters.</td></tr>`}
          </tbody>
        </table>
      </div>
      <div class="footer-note">Master data is stored in localStorage with stable internal IDs. Daily operations continue to use these records as their source setup.</div>
    </section>
  `;
  return layout(config.title, config.subtitle, body);
}

function masterRows(config) {
  return state.masters?.[config.key] || [];
}

function masterTableRow(config, row) {
  const viewHandler = config.key === "menus"
    ? `openMenuMasterDetails('${row.id}')`
    : config.key === "loadingSheets"
      ? `openLoadingSheetDetails('${row.id}')`
      : `openMasterModal('${config.key}','${row.id}','view')`;
  const editHandler = config.key === "menus"
    ? `openMenuMasterEditor('${row.id}')`
    : config.key === "loadingSheets"
      ? `openLoadingMaintenance('${row.id}')`
      : `openMasterModal('${config.key}','${row.id}','edit')`;
  return `
    <tr>
      ${config.columns.map(([label, getter, className]) => masterTableCell(getter(row), className)).join("")}
      <td class="cell-actions">
        <div class="row-actions">
          <button type="button" class="btn" onclick="${viewHandler}">View</button>
          <button type="button" class="btn green" onclick="${editHandler}">Edit</button>
          ${config.key === "menus" ? `<button type="button" class="btn" onclick="cloneMasterRecord('${config.key}','${row.id}')">Clone Menu</button>` : ""}
          ${config.extraActions ? config.extraActions(row) : ""}
          <button type="button" class="btn" onclick="toggleMasterStatus('${config.key}','${row.id}')">${row.status === "Active" ? "Deactivate" : "Activate"}</button>
          <button type="button" class="btn danger" onclick="requestDeleteMaster('${config.key}','${row.id}')">Delete</button>
        </div>
      </td>
    </tr>
  `;
}

function masterTableCell(value, className = "") {
  const text = String(value ?? "");
  const title = /<[^>]+>/.test(text) ? "" : ` title="${escapeHtml(text)}"`;
  return `<td class="${className || ""}"${title}>${text}</td>`;
}

function renderMasterFilters(config, rows) {
  return (config.filters || []).map(([label, key, valuesGetter]) => {
    const values = valuesGetter(rows);
    return `<select class="field" onchange="setMasterFilter('${config.screen}', '${key}', this.value)">
      <option value="">All ${label}</option>
      ${values.map((item) => {
        const option = typeof item === "object" ? item : { label: item, value: item };
        return `<option value="${escapeHtml(option.value)}" ${masterFilter(config.screen, key) === option.value ? "selected" : ""}>${escapeHtml(option.label)}</option>`;
      }).join("")}
    </select>`;
  }).join("");
}

function setMasterFilter(screen, key, value) {
  state.queueFilters.master = state.queueFilters.master || {};
  state.queueFilters.master[screen] = state.queueFilters.master[screen] || {};
  state.queueFilters.master[screen][key] = value;
  saveState();
  render();
}

function masterFilter(screen, key) {
  return state.queueFilters?.master?.[screen]?.[key] || "";
}

function applyMasterFilters(rows, config) {
  const query = masterFilter(config.screen, "search").trim().toLowerCase();
  return rows.filter((row) => {
    const searchMatch = !query || config.search(row).toLowerCase().includes(query);
    if (!searchMatch) return false;
    return (config.filters || []).every(([, key]) => {
      const value = masterFilter(config.screen, key);
      if (!value) return true;
      if (key === "operatingDay") return row.operatingDays?.includes(value);
      if (key === "airline" && config.key === "flightMenuMappings") return getFlightMasterById(row.flightMasterId)?.airline === value;
      return String(row[key] || "") === value;
    });
  });
}

function unique(values) {
  return [...new Set(values.filter(Boolean))].sort();
}

function configForKey(key) {
  return Object.values(masterConfigs()).find((config) => config.key === key);
}

function openMasterModal(key, id = "", mode = "edit") {
  const config = configForKey(key);
  const existing = id ? masterRows(config).find((row) => row.id === id) : null;
  const record = structuredClone(existing || config.create());
  const readonly = mode === "view";
  document.querySelector(".modal-backdrop")?.remove();
  document.body.insertAdjacentHTML("beforeend", `
    <div class="modal-backdrop" onclick="closeModal(event)">
      <div class="modal wide-modal" role="dialog" aria-modal="true">
        <div class="modal-head"><h2 style="margin:0">${readonly ? "View" : existing ? "Edit" : "Add"} ${config.title}</h2><button type="button" class="btn icon-btn" onclick="closeModal()" aria-label="Close dialog" title="Close">×</button></div>
        <form id="master-form" onsubmit="saveMasterForm(event, '${key}', '${id}')">
          <div class="modal-body">
            ${config.fields(record, readonly)}
          </div>
          <div class="modal-foot">
            <span class="muted">${readonly ? "Read only view." : "Changes are saved only when Save is clicked."}</span>
            <button type="button" class="btn" onclick="closeModal()">Cancel</button>
            ${readonly ? "" : `<button type="submit" class="btn green">Save</button>`}
          </div>
        </form>
      </div>
    </div>
  `);
  const form = document.getElementById("master-form");
  if (key === "ancillaryItems" && form) {
    updateAncillaryApplicabilityUi(form);
    updateAncillaryRuleUi(form);
  }
}

function saveMasterForm(event, key, id = "") {
  event.preventDefault();
  const config = configForKey(key);
  const form = event.target;
  const existing = id ? masterRows(config).find((row) => row.id === id) : null;
  const record = readMasterForm(key, form, existing || config.create());
  const errors = config.validate(record, id);
  if (errors.length) {
    showFormErrors(errors);
    return;
  }
  if (existing) {
    Object.assign(existing, record);
    logAudit("Master edited", config.title, existing.id);
  } else {
    state.masters[key].push(record);
    state[config.idField] = record.id;
    logAudit("Master created", config.title, record.id);
  }
  if (key === "loadingSheets") syncLegacyLoadingChart();
  saveState();
  closeModal();
  showToast(`${config.title} saved.`);
  render();
}

function showFormErrors(errors) {
  document.querySelector(".form-errors")?.remove();
  document.querySelector(".modal-body")?.insertAdjacentHTML("afterbegin", `<div class="notice form-errors"><span class="check">!</span><div><b>Fix before saving</b><br>${errors.map((item) => `<span>${escapeHtml(item)}</span>`).join("<br>")}</div></div>`);
}

function toggleMasterStatus(key, id) {
  const config = configForKey(key);
  const row = masterRows(config).find((item) => item.id === id);
  if (!row) return;
  row.status = row.status === "Active" ? "Inactive" : "Active";
  logAudit(row.status === "Active" ? "Master activated" : "Master deactivated", config.title, id);
  saveState();
  showToast(`${config.title} ${row.status.toLowerCase()}.`);
  render();
}

function requestDeleteMaster(key, id) {
  const config = configForKey(key);
  const row = masterRows(config).find((item) => item.id === id);
  if (!row) return;
  const reason = deleteBlockReason(key, id);
  const message = reason || "This will remove the unreferenced demo master record from localStorage.";
  openConfirmModal(`Delete ${config.title}`, message, reason ? "" : `deleteMasterRecord('${key}','${id}')`);
}

function openConfirmModal(title, message, confirmHandler) {
  document.querySelector(".modal-backdrop")?.remove();
  document.body.insertAdjacentHTML("beforeend", `
    <div class="modal-backdrop" onclick="closeModal(event)">
      <div class="modal" role="dialog" aria-modal="true">
        <div class="modal-head"><h2 style="margin:0">${escapeHtml(title)}</h2><button type="button" class="btn icon-btn" onclick="closeModal()" aria-label="Close dialog" title="Close">×</button></div>
        <div class="modal-body"><div class="notice"><span class="check">${confirmHandler ? "!" : "✓"}</span><div>${escapeHtml(message)}</div></div></div>
        <div class="modal-foot"><span class="muted">${confirmHandler ? "Hard delete is allowed only when no references exist." : "Deactivate this record instead if operations still reference it."}</span><button class="btn" onclick="closeModal()">Close</button>${confirmHandler ? `<button class="btn danger" onclick="${confirmHandler};closeModal()">Delete</button>` : ""}</div>
      </div>
    </div>
  `);
}

function deleteMasterRecord(key, id) {
  const config = configForKey(key);
  state.masters[key] = masterRows(config).filter((item) => item.id !== id);
  logAudit("Master deleted", config.title, id);
  saveState();
  showToast(`${config.title} deleted.`);
  render();
}

function cloneMasterRecord(key, id) {
  const config = configForKey(key);
  const source = masterRows(config).find((item) => item.id === id);
  if (!source) return;
  const clone = structuredClone(source);
  clone.id = generateId(key.slice(0, 4));
  clone.status = "Inactive";
  if (key === "menus") {
    clone.menuCode = `${clone.menuCode}-COPY`;
    clone.menuName = `${clone.menuName} Copy`;
    clone.version = String(Number(clone.version || 0) + 1);
    clone.lines = clone.lines.map((line, index) => ({ ...line, id: generateId("mlin", `${clone.id}-${index}`) }));
  }
  if (key === "loadingSheets") {
    clone.loadingSheetCode = `${clone.loadingSheetCode}-COPY`;
    clone.version = String(Number(clone.version || 0) + 1);
    clone.lines = clone.lines.map((line, index) => ({ ...line, id: generateId("lsln", `${clone.id}-${index}`) }));
  }
  state.masters[key].push(clone);
  state[config.idField] = clone.id;
  logAudit("Master cloned", config.title, clone.id, `From ${id}`);
  saveState();
  showToast(`${config.title} cloned as inactive version.`);
  render();
}

function previewLoadingSheet(id) {
  state.selectedLoadingSheetId = id;
  syncLegacyLoadingChart();
  saveState();
  setScreen("loading-preview");
}

function openLoadingMaintenance(id, returnScreen = "loading-sheet-master") {
  state.selectedLoadingSheetId = id;
  state.loadingMaintenanceReturn = "loading-sheet-master";
  syncLegacyLoadingChart();
  saveState();
  setScreen("loading-maintenance");
}

function saveLoadingSheetFromChart() {
  const loadingSheet = getLoadingSheetById(state.selectedLoadingSheetId);
  if (!loadingSheet) {
    showToast("Select a loading sheet before saving.");
    return;
  }
  const flight = state.masters.flights.find((item) => item.flightNumber === state.loadingChart.flightNo && item.airline === state.loadingChart.airline);
  const menu = getMenuById(loadingSheet.menuId);
  loadingSheet.loadingSheetCode = state.loadingChart.chartCode;
  loadingSheet.version = state.loadingChart.version;
  loadingSheet.flightMasterId = flight?.id || loadingSheet.flightMasterId;
  loadingSheet.aircraftType = state.loadingChart.aircraftType;
  loadingSheet.mealType = state.loadingChart.mealType;
  loadingSheet.effectiveFrom = state.loadingChart.effectiveFrom;
  loadingSheet.effectiveTo = state.loadingChart.effectiveTo;
  loadingSheet.rotation = `${state.loadingChart.rotationFrom || ""} ${state.loadingChart.rotationTo || ""}`.trim();
  loadingSheet.notes = state.loadingChart.notes;
  loadingSheet.lines = (loadingSheet.lines || []).map((line, index) => {
    const menuLine = menu?.lines?.find((item) => item.id === line.menuLineId);
    return {
      ...line,
      menuItemCode: menuLine?.itemCode || line.menuItemCode,
      menuItemName: menuLine?.itemName || line.menuItemName,
      category: menuLine?.category || line.category,
      unit: menuLine?.unit || line.unit,
      displaySequence: Number(line.displaySequence || index + 1)
    };
  });
  const errors = validateLoadingSheet(loadingSheet, loadingSheet.id);
  if (errors.length) {
    showToast(errors[0]);
    return;
  }
  logAudit("Master edited", "Loading Sheet Master", loadingSheet.id, "Saved from maintenance screen");
  saveState();
  showToast("Loading Sheet Master saved locally.");
  render();
}

function flightMasterFields(row, readonly) {
  return formGrid([
    inputSpec("Internal ID", "id", row.id, true),
    inputSpec("Flight code *", "flightCode", row.flightCode),
    inputSpec("Airline *", "airline", row.airline),
    inputSpec("Flight number *", "flightNumber", row.flightNumber),
    inputSpec("Flight description", "description", row.description),
    inputSpec("Origin airport code *", "origin", row.origin),
    inputSpec("Destination airport code *", "destination", row.destination),
    inputSpec("Derived sector", "sector", row.sector, true),
    inputSpec("Days of operation *", "operatingDays", row.operatingDays.join(", ")),
    inputSpec("Scheduled departure time *", "scheduledDeparture", row.scheduledDeparture, false, "time"),
    inputSpec("Scheduled arrival time *", "scheduledArrival", row.scheduledArrival, false, "time"),
    inputSpec("Effective from *", "effectiveFrom", row.effectiveFrom, false, "date"),
    inputSpec("Effective to *", "effectiveTo", row.effectiveTo, false, "date"),
    inputSpec("Aircraft type", "aircraftType", row.aircraftType),
    inputSpec("Default registration number", "defaultRegistration", row.defaultRegistration),
    inputSpec("Business Class capacity", "businessCapacity", row.businessCapacity, false, "number"),
    inputSpec("Premium Economy capacity", "premiumEconomyCapacity", row.premiumEconomyCapacity, false, "number"),
    inputSpec("Economy Class capacity", "economyCapacity", row.economyCapacity, false, "number"),
    inputSpec("Technical crew count", "technicalCrewCount", row.technicalCrewCount, false, "number"),
    inputSpec("Cabin crew count", "cabinCrewCount", row.cabinCrewCount, false, "number"),
    inputSpec("Loading bay", "loadingBay", row.loadingBay),
    selectSpec("Gate type", "gateType", row.gateType, ["Narrow Body", "Wide Body", "Remote Stand"]),
    selectSpec("Uplift type", "upliftType", row.upliftType, ["Full Uplift", "Top Up", "Transit", "No Uplift"]),
    inputSpec("Hot meal dish-out time", "hotMealDishOutTime", row.hotMealDishOutTime, false, "time"),
    inputSpec("Cold meal preparation time", "coldMealPreparationTime", row.coldMealPreparationTime, false, "time"),
    inputSpec("Dispatch time", "dispatchTime", row.dispatchTime, false, "time"),
    selectSpec("Status", "status", row.status, ["Active", "Inactive"])
  ], readonly) + textareaSpec("Default remarks", "remarks", row.remarks, readonly);
}

function menuMasterFields(row, readonly) {
  return hiddenInput("id", row.id) + formGrid([
    inputSpec("Menu code *", "menuCode", row.menuCode),
    inputSpec("Menu name *", "menuName", row.menuName),
    inputSpec("Menu cycle", "menuCycle", row.menuCycle),
    selectSpec("Meal/service type", "serviceType", row.serviceType, ["Hot Breakfast", "Main Meal", "Snack", "Beverage", "Special Meal", "Crew Meal"]),
    inputSpec("Service sequence", "serviceSequence", row.serviceSequence),
    inputSpec("Cabin class applicability", "cabinClasses", row.cabinClasses.join(", ")),
    selectSpec("Currency", "currency", row.currency, ["USD", "NPR", "INR"]),
    inputSpec("Version", "version", row.version),
    inputSpec("Effective from", "effectiveFrom", row.effectiveFrom, false, "date"),
    inputSpec("Effective to", "effectiveTo", row.effectiveTo, false, "date"),
    selectSpec("Status", "status", row.status, ["Active", "Inactive"])
  ], readonly) + textareaSpec("Description", "description", row.description, readonly) + menuLinesEditor(row, readonly);
}

function mappingFields(row, readonly) {
  return formGrid([
    inputSpec("Internal mapping ID", "id", row.id, true),
    inputSpec("Mapping code *", "mappingCode", row.mappingCode),
    selectSpec("Flight Master *", "flightMasterId", row.flightMasterId, state.masters.flights.map((flight) => ({ label: `${flight.airline} ${flight.flightNumber} ${flight.sector}`, value: flight.id }))),
    selectSpec("Menu Master *", "menuId", row.menuId, state.masters.menus.map((menu) => ({ label: `${menu.menuCode} - ${menu.menuName}`, value: menu.id }))),
    inputSpec("Service sequence", "serviceSequence", row.serviceSequence),
    selectSpec("Meal/service type", "serviceType", row.serviceType, ["Hot Breakfast", "Main Meal", "Snack", "Beverage", "Special Meal", "Crew Meal"]),
    inputSpec("Effective from", "effectiveFrom", row.effectiveFrom, false, "date"),
    inputSpec("Effective to", "effectiveTo", row.effectiveTo, false, "date"),
    inputSpec("Priority", "priority", row.priority, false, "number"),
    selectSpec("Status", "status", row.status, ["Active", "Inactive"])
  ], readonly) + derivedFlightPreview(row.flightMasterId) + textareaSpec("Notes", "notes", row.notes, readonly);
}

function ancillaryFields(row, readonly) {
  return hiddenInput("id", row.id) + formGrid([
    inputSpec("Item code *", "itemCode", row.itemCode),
    inputSpec("Item name *", "itemName", row.itemName),
    inputSpec("Category", "category", row.category),
    inputSpec("Unit of measure *", "unit", row.unit),
    selectSpec("Currency", "currency", row.currency, ["USD", "NPR", "INR"]),
    inputSpec("Unit rate", "unitRate", row.unitRate, false, "number"),
    inputSpec("Tax percentage", "taxPercentage", row.taxPercentage, false, "number"),
    inputSpec("Invoice item code", "invoiceItemCode", row.invoiceItemCode),
    selectSpec("Invoice enabled", "invoiceEnabled", row.invoiceEnabled ? "true" : "false", [{ label: "Yes", value: "true" }, { label: "No", value: "false" }]),
    selectSpec("Status", "status", row.status, ["Active", "Inactive"]),
    selectSpec("Applicability", "applicabilityType", row.applicability?.type || "all_airlines", [
      { label: "All airlines", value: "all_airlines" },
      { label: "Selected airline", value: "selected_airline" },
      { label: "Selected flight", value: "selected_flight" },
      { label: "Selected route", value: "selected_route" },
      { label: "Selected aircraft type", value: "selected_aircraft_type" }
    ])
  ], readonly).replace('name="applicabilityType"', `name="applicabilityType" onchange="updateAncillaryApplicabilityUi(this.form)"`)
    + ancillaryApplicabilityFields(row, readonly)
    + textareaSpec("Description", "description", row.description, readonly)
    + ancillaryCalculationEditor(row, readonly);
}

function loadingSheetFields(row, readonly) {
  return hiddenInput("id", row.id) + formGrid([
    inputSpec("Loading Sheet code *", "loadingSheetCode", row.loadingSheetCode),
    inputSpec("Version", "version", row.version),
    selectSpec("Flight Master *", "flightMasterId", row.flightMasterId, state.masters.flights.map((flight) => ({ label: `${flight.airline} ${flight.flightNumber} ${flight.sector}`, value: flight.id }))),
    inputSpec("Aircraft type", "aircraftType", row.aircraftType),
    selectSpec("Menu Master *", "menuId", row.menuId, state.masters.menus.map((menu) => ({ label: `${menu.menuCode} - ${menu.menuName}`, value: menu.id }))),
    inputSpec("Service sequence", "serviceSequence", row.serviceSequence),
    selectSpec("Meal type", "mealType", row.mealType, ["Hot Breakfast", "Main Meal", "Snack", "Beverage", "Special Meal", "Crew Meal"]),
    inputSpec("Days of operation", "daysOfOperation", row.daysOfOperation.join(", ")),
    inputSpec("Effective from", "effectiveFrom", row.effectiveFrom, false, "date"),
    inputSpec("Effective to", "effectiveTo", row.effectiveTo, false, "date"),
    inputSpec("Rotation", "rotation", row.rotation),
    selectSpec("Status", "status", row.status, ["Active", "Inactive"])
  ], readonly).replace('name="menuId"', `name="menuId" onchange="refreshLoadingSheetMenuWarning(this.form)"`)
    + derivedFlightPreview(row.flightMasterId)
    + loadingSheetMenuWarning(row)
    + textareaSpec("Notes", "notes", row.notes, readonly)
    + loadingSheetLinesEditor(row, readonly);
}

function hiddenInput(name, value) {
  return `<input type="hidden" name="${escapeHtml(name)}" value="${escapeHtml(value)}">`;
}

function inputSpec(label, name, value, readonly = false, type = "text") {
  return { type: "input", label, name, value, readonly, inputType: type };
}

function selectSpec(label, name, value, options) {
  return { type: "select", label, name, value, options };
}

function formGrid(specs, readonly = false) {
  return `<div class="form-grid">${specs.map((spec) => {
    if (spec.type === "select") {
      return `<label><span class="muted">${escapeHtml(spec.label)}</span><select class="select" name="${spec.name}" ${readonly ? "disabled" : ""}>${spec.options.map((item) => {
        const option = typeof item === "object" ? item : { label: item, value: item };
        return `<option value="${escapeHtml(option.value)}" ${String(option.value) === String(spec.value) ? "selected" : ""}>${escapeHtml(option.label)}</option>`;
      }).join("")}</select></label>`;
    }
    return `<label><span class="muted">${escapeHtml(spec.label)}</span><input class="input ${spec.readonly ? "readonly-input" : ""}" type="${spec.inputType}" name="${spec.name}" value="${escapeHtml(spec.value)}" ${spec.readonly || readonly ? "readonly" : ""}></label>`;
  }).join("")}</div>`;
}

function textareaSpec(label, name, value, readonly = false) {
  return `<label class="full-field"><span class="muted">${escapeHtml(label)}</span><textarea name="${name}" ${readonly ? "readonly" : ""}>${escapeHtml(value)}</textarea></label>`;
}

function menuLinesEditor(menu, readonly) {
  const rows = [...(menu.lines || [])].sort((a, b) => Number(a.displaySequence || 0) - Number(b.displaySequence || 0));
  return `
    <div class="structured-editor">
      <div class="panel-head detail-panel-head">
        <h2>Menu Items</h2>
        ${readonly ? "" : `<button type="button" class="btn" onclick="addMenuEditorLine(this)">Add Dish</button>`}
      </div>
      <div class="table-wrap">
        <table class="data-table editable-master-table">
          <thead><tr><th>Seq</th><th>Dish Code</th><th>Dish Name</th><th>Category</th><th>Meal Type</th><th>Classification</th><th>SPML</th><th>Unit</th><th>Unit Price</th><th>Tax %</th><th>Invoice Item Code</th><th>Status</th>${readonly ? "" : "<th>Actions</th>"}</tr></thead>
          <tbody>${rows.map((line, index) => menuLineEditorRow(line, index, readonly, menu.id)).join("") || `<tr class="empty-editor-row"><td colspan="${readonly ? 12 : 13}" class="empty-state">No dish lines yet. Use Add Dish to build the menu.</td></tr>`}</tbody>
        </table>
      </div>
    </div>
  `;
}

function menuLineEditorRow(line = {}, index = 0, readonly = false, menuId = "") {
  const used = menuId && line.id ? isMenuLineUsedInTransactions(menuId, line) : false;
  const status = line.status || "Active";
  const control = (name, value, type = "text", className = "") => readonly
    ? escapeHtml(value || "")
    : `<input class="input cell-input ${className}" type="${type}" name="${name}[]" value="${escapeHtml(value)}">`;
  const select = (name, value, options) => readonly
    ? escapeHtml(value || "")
    : `<select class="select cell-input" name="${name}[]">${options.map((option) => `<option value="${escapeHtml(option)}" ${String(option) === String(value) ? "selected" : ""}>${escapeHtml(option)}</option>`).join("")}</select>`;
  return `<tr data-menu-line-row>
    <td>${hiddenInput("menuLineId[]", line.id || generateId("mlin"))}${control("menuLineSequence", Number(line.displaySequence || index + 1), "number")}</td>
    <td>${control("menuLineItemCode", line.itemCode || "", "text", "code-input")}</td>
    <td>${control("menuLineItemName", line.itemName || "", "text", "dish-input")}</td>
    <td>${control("menuLineCategory", line.category || "", "text")}</td>
    <td>${select("menuLineMealType", line.mealType || "Hot Breakfast", ["Hot Breakfast", "Main Meal", "Snack", "Beverage", "Special Meal", "Crew Meal"])}</td>
    <td>${control("menuLineClassification", line.classification || "", "text")}</td>
    <td>${control("menuLineSpecialMealCode", line.specialMealCode || "", "text")}</td>
    <td>${control("menuLineUnit", line.unit || "Pcs", "text")}</td>
    <td>${control("menuLineUnitPrice", Number(line.unitPrice || 0), "number")}</td>
    <td>${control("menuLineTaxPercentage", Number(line.taxPercentage || 0), "number")}</td>
    <td>${control("menuLineInvoiceItemCode", line.invoiceItemCode || "", "text")}</td>
    <td>${select("menuLineStatus", status, ["Active", "Inactive"])}</td>
    ${readonly ? "" : `<td><div class="row-actions"><button type="button" class="btn icon-btn" onclick="moveEditorRow(this,-1)" title="Move up">UP</button><button type="button" class="btn icon-btn" onclick="moveEditorRow(this,1)" title="Move down">DN</button><button type="button" class="btn ${used ? "" : "danger"}" onclick="${used ? "inactivateMenuEditorLine(this)" : "removeEditorRow(this)"}">${used ? "Inactive" : "Delete"}</button></div></td>`}
  </tr>`;
}

function addMenuEditorLine(button) {
  const tbody = button.closest(".structured-editor").querySelector("tbody");
  tbody.querySelector(".empty-editor-row")?.remove();
  tbody.insertAdjacentHTML("beforeend", menuLineEditorRow({ id: generateId("mlin"), displaySequence: tbody.querySelectorAll("[data-menu-line-row]").length + 1, status: "Active" }, tbody.querySelectorAll("[data-menu-line-row]").length, false, ""));
}

function removeEditorRow(button) {
  button.closest("tr")?.remove();
}

function inactivateMenuEditorLine(button) {
  const row = button.closest("tr");
  const status = row?.querySelector('[name="menuLineStatus[]"]');
  if (status) status.value = "Inactive";
  showToast("Referenced menu item marked inactive instead of deleted.");
}

function moveEditorRow(button, direction) {
  const row = button.closest("tr");
  const sibling = direction < 0 ? row?.previousElementSibling : row?.nextElementSibling;
  if (!row || !sibling || sibling.classList.contains("empty-editor-row")) return;
  if (direction < 0) row.parentNode.insertBefore(row, sibling);
  else row.parentNode.insertBefore(sibling, row);
}

function ancillaryApplicabilityFields(row, readonly) {
  const app = row.applicability || {};
  const type = app.type || "all_airlines";
  const style = (key) => key === type ? "" : "display:none";
  return `<div class="form-grid applicability-grid">
    <label data-applicability-field="selected_airline" style="${style("selected_airline")}"><span class="muted">Airline</span><input class="input" name="applicabilityAirline" value="${escapeHtml(app.airline || "")}" ${readonly ? "readonly" : ""}></label>
    <label data-applicability-field="selected_flight" style="${style("selected_flight")}"><span class="muted">Flight Master</span><select class="select" name="applicabilityFlightMasterId" ${readonly ? "disabled" : ""}><option value="">None</option>${state.masters.flights.map((flight) => `<option value="${escapeHtml(flight.id)}" ${flight.id === app.flightMasterId ? "selected" : ""}>${escapeHtml(`${flight.flightNumber} ${flight.sector}`)}</option>`).join("")}</select></label>
    <label data-applicability-field="selected_route" style="${style("selected_route")}"><span class="muted">Route</span><input class="input" name="applicabilityRoute" value="${escapeHtml(app.route || "")}" ${readonly ? "readonly" : ""}></label>
    <label data-applicability-field="selected_aircraft_type" style="${style("selected_aircraft_type")}"><span class="muted">Aircraft Type</span><input class="input" name="applicabilityAircraftType" value="${escapeHtml(app.aircraftType || "")}" ${readonly ? "readonly" : ""}></label>
  </div>${readonly ? `<div class="notice compact-notice"><span class="check">✓</span><div><b>Applicability</b><br><span class="muted">${escapeHtml(applicabilitySummary(app))}</span></div></div>` : ""}`;
}

function updateAncillaryApplicabilityUi(form) {
  const type = form.querySelector('[name="applicabilityType"]')?.value || "all_airlines";
  form.querySelectorAll("[data-applicability-field]").forEach((field) => {
    field.style.display = field.dataset.applicabilityField === type ? "" : "none";
  });
}

function ancillaryCalculationEditor(row, readonly) {
  const rule = row.calculationRule || {};
  return `<div class="structured-editor">
    <div class="panel-head detail-panel-head"><h2>Calculation Rule</h2></div>
    <div class="form-grid">
      <label><span class="muted">Calculation Method</span><select class="select" name="calculationType" ${readonly ? "disabled" : ""} onchange="updateAncillaryRuleUi(this.form)">${calculationTypeOptions().map((option) => `<option value="${option.value}" ${option.value === rule.calculationType ? "selected" : ""}>${option.label}</option>`).join("")}</select></label>
      ${ruleInput("fixedQuantity", "Fixed Quantity", rule.fixedQuantity, readonly, ["fixed", "fixed_plus_per_pax"])}
      ${ruleInput("quantityPerPax", "Quantity per Passenger", rule.quantityPerPax, readonly, ["per_passenger", "per_business_pax", "per_premium_pax", "per_economy_pax", "fixed_plus_per_pax"])}
      ${ruleInput("paxDivisor", "Passenger Divisor", rule.paxDivisor, readonly, ["per_x_pax"])}
      ${ruleInput("bufferPercentage", "Buffer Percentage", rule.bufferPercentage, readonly, ["buffer"])}
      ${ruleInput("minimumQuantity", "Minimum Quantity", rule.minimumQuantity, readonly, ["fixed", "per_passenger", "per_crew", "per_business_pax", "per_premium_pax", "per_economy_pax", "per_x_pax", "buffer", "minimum", "fixed_plus_per_pax", "manual"])}
      ${ruleInput("maximumQuantity", "Maximum Quantity", rule.maximumQuantity ?? "", readonly, ["fixed", "per_passenger", "per_crew", "per_business_pax", "per_premium_pax", "per_economy_pax", "per_x_pax", "buffer", "minimum", "fixed_plus_per_pax", "manual"])}
      <label data-rule-field="fixed per_passenger per_crew per_business_pax per_premium_pax per_economy_pax per_x_pax buffer minimum fixed_plus_per_pax manual"><span class="muted">Rounding Method</span><select class="select" name="roundingMethod" ${readonly ? "disabled" : ""}>${roundingOptions().map((option) => `<option value="${option.value}" ${option.value === rule.roundingMethod ? "selected" : ""}>${option.label}</option>`).join("")}</select></label>
      <label data-rule-field="fixed per_passenger per_crew per_business_pax per_premium_pax per_economy_pax per_x_pax buffer minimum fixed_plus_per_pax manual"><span class="muted">Operational Override</span><select class="select" name="allowOperationalOverride" ${readonly ? "disabled" : ""}><option value="true" ${rule.allowOperationalOverride ? "selected" : ""}>Allowed</option><option value="false" ${!rule.allowOperationalOverride ? "selected" : ""}>Not Allowed</option></select></label>
    </div>
    <div class="table-wrap rule-summary"><table class="data-table compact-table"><tbody>${calculationRuleSummaryRows(rule).map(([label, value]) => `<tr><th>${escapeHtml(label)}</th><td>${escapeHtml(value)}</td></tr>`).join("")}</tbody></table></div>
  </div>`;
}

function ruleInput(name, label, value, readonly, visibleFor) {
  return `<label data-rule-field="${visibleFor.join(" ")}"><span class="muted">${escapeHtml(label)}</span><input class="input" type="number" name="${name}" value="${escapeHtml(value ?? "")}" ${readonly ? "readonly" : ""}></label>`;
}

function updateAncillaryRuleUi(form) {
  const type = form.querySelector('[name="calculationType"]')?.value || "manual";
  form.querySelectorAll("[data-rule-field]").forEach((field) => {
    field.style.display = String(field.dataset.ruleField || "").split(/\s+/).includes(type) ? "" : "none";
  });
}

function calculationTypeOptions() {
  return [
    { value: "fixed", label: "Fixed Quantity" },
    { value: "per_passenger", label: "Per Passenger" },
    { value: "per_crew", label: "Per Crew" },
    { value: "per_business_pax", label: "Per Business Class Passenger" },
    { value: "per_premium_pax", label: "Per Premium Economy Passenger" },
    { value: "per_economy_pax", label: "Per Economy Passenger" },
    { value: "per_x_pax", label: "One Unit per X Passengers" },
    { value: "buffer", label: "Percentage Buffer" },
    { value: "minimum", label: "Minimum Quantity" },
    { value: "fixed_plus_per_pax", label: "Fixed Quantity plus Per Passenger" },
    { value: "manual", label: "Manual Quantity" }
  ];
}

function roundingOptions() {
  return [
    { value: "ceil", label: "Round Up" },
    { value: "floor", label: "Round Down" },
    { value: "round", label: "Nearest Whole Number" }
  ];
}

function calculationRuleSummaryRows(rule = {}) {
  const rounding = roundingOptions().find((item) => item.value === rule.roundingMethod)?.label || "Round Up";
  return [
    ["Calculation Method", ruleLabel(rule)],
    ["Fixed Quantity", rule.fixedQuantity || "0"],
    ["Quantity per Passenger", rule.quantityPerPax || "0"],
    ["Passenger Divisor", rule.paxDivisor || "Not applicable"],
    ["Minimum Quantity", rule.minimumQuantity || "0"],
    ["Maximum Quantity", rule.maximumQuantity === null || rule.maximumQuantity === "" || rule.maximumQuantity === undefined ? "No Maximum" : rule.maximumQuantity],
    ["Rounding", rounding],
    ["Operational Override", rule.allowOperationalOverride ? "Allowed" : "Not Allowed"]
  ];
}

function applicabilitySummary(app = {}) {
  const labels = {
    all_airlines: "All Airlines",
    selected_airline: `Selected Airline: ${app.airline || "-"}`,
    selected_flight: `Selected Flight: ${flightLabel(getFlightMasterById(app.flightMasterId))}`,
    selected_route: `Selected Route: ${app.route || "-"}`,
    selected_aircraft_type: `Selected Aircraft Type: ${app.aircraftType || "-"}`
  };
  return labels[app.type] || "All Airlines";
}

function loadingSheetMenuWarning(row) {
  const menu = getMenuById(row.menuId);
  const validLineIds = new Set((menu?.lines || []).map((line) => line.id));
  const invalid = (row.lines || []).filter((line) => line.menuLineId && !validLineIds.has(line.menuLineId));
  return `<div class="notice compact-notice loading-menu-warning" style="${invalid.length ? "" : "display:none"}"><span class="check">!</span><div><b>Menu item references need review</b><br><span class="muted">${invalid.length ? `${invalid.length} loading line(s) do not belong to the selected Menu Master. Use Import Items from Menu or choose valid menu items before saving.` : ""}</span></div></div>`;
}

function loadingSheetLinesEditor(sheet, readonly) {
  const rows = [...(sheet.lines || [])].sort((a, b) => Number(a.displaySequence || 0) - Number(b.displaySequence || 0));
  return `<div class="structured-editor">
    <div class="panel-head detail-panel-head">
      <h2>Loading Sheet Lines</h2>
      ${readonly ? "" : `<div class="toolbar-group toolbar-group--end"><button type="button" class="btn" onclick="importEditorLoadingRowsFromMenu(this)">Import Items from Menu</button><button type="button" class="btn" onclick="addLoadingEditorLine(this)">Add Menu Item</button></div>`}
    </div>
    <div class="table-wrap">
      <table class="data-table editable-master-table loading-lines-editor">
        <thead><tr><th>Seq</th><th>Menu Item</th><th>Dish Code</th><th>Dish Name</th><th>Category</th><th>Unit</th><th>Cabin Class</th><th>Ratio Type</th><th>Ratio Value</th><th>Fixed</th><th>Per Pax</th><th>Min</th><th>Max</th><th>Buffer %</th><th>Rounding</th><th>Remarks</th>${readonly ? "" : "<th>Actions</th>"}</tr></thead>
        <tbody>${rows.map((line, index) => loadingSheetLineEditorRow(line, index, sheet.menuId, readonly)).join("") || `<tr class="empty-editor-row"><td colspan="${readonly ? 16 : 17}" class="empty-state">No loading lines yet. Import active menu items or add selected menu items.</td></tr>`}</tbody>
      </table>
    </div>
  </div>`;
}

function loadingSheetLineEditorRow(line = {}, index = 0, menuId = "", readonly = false) {
  const menu = getMenuById(menuId);
  const selectedLine = menu?.lines?.find((item) => item.id === line.menuLineId) || {};
  const dish = {
    id: line.menuLineId || selectedLine.id || "",
    code: selectedLine.itemCode || line.menuItemCode || "",
    name: selectedLine.itemName || line.menuItemName || "",
    category: selectedLine.category || line.category || "",
    unit: selectedLine.unit || line.unit || ""
  };
  const input = (name, value, type = "text") => readonly ? escapeHtml(value || "") : `<input class="input cell-input" type="${type}" name="${name}[]" value="${escapeHtml(value ?? "")}">`;
  const select = (name, value, options) => readonly
    ? escapeHtml(options.find((item) => String(item.value) === String(value))?.label || value || "")
    : `<select class="select cell-input" name="${name}[]">${options.map((item) => `<option value="${escapeHtml(item.value)}" ${String(item.value) === String(value) ? "selected" : ""}>${escapeHtml(item.label)}</option>`).join("")}</select>`;
  const menuOptions = menuLineOptions(menu, dish.id);
  return `<tr data-loading-line-row>
    <td>${hiddenInput("loadingLineId[]", line.id || generateId("lsln"))}${input("loadingLineSequence", Number(line.displaySequence || index + 1), "number")}</td>
    <td>${readonly ? escapeHtml(`${dish.code} ${dish.name}`.trim()) : `<select class="select cell-input dish-select" name="loadingLineMenuLineId[]" onchange="applyLoadingMenuLineSelection(this)">${menuOptions}</select>`}</td>
    <td data-derived="code">${escapeHtml(dish.code)}</td>
    <td data-derived="name">${escapeHtml(dish.name)}</td>
    <td data-derived="category">${escapeHtml(dish.category)}</td>
    <td data-derived="unit">${escapeHtml(dish.unit)}</td>
    <td>${select("loadingLineCabinClass", line.cabinClass || "All", ["All", "Business", "Premium Economy", "Economy", "Crew"].map((value) => ({ label: value, value })))}</td>
    <td>${select("loadingLineRatioType", line.ratioType || "one_to_one", loadingRatioOptions())}</td>
    <td>${input("loadingLineRatioValue", line.ratioValue || "1:1")}</td>
    <td>${input("loadingLineFixedQuantity", Number(line.fixedQuantity || 0), "number")}</td>
    <td>${input("loadingLineQuantityPerPassenger", Number(line.quantityPerPassenger || 0), "number")}</td>
    <td>${input("loadingLineMinimumQuantity", Number(line.minimumQuantity || 0), "number")}</td>
    <td>${input("loadingLineMaximumQuantity", line.maximumQuantity ?? "", "number")}</td>
    <td>${input("loadingLineBufferPercentage", Number(line.bufferPercentage || 0), "number")}</td>
    <td>${select("loadingLineRoundingMethod", line.roundingMethod || "ceil", roundingOptions())}</td>
    <td>${input("loadingLineRemarks", line.remarks || "")}</td>
    ${readonly ? "" : `<td><button type="button" class="btn danger" onclick="removeEditorRow(this)">Delete</button></td>`}
  </tr>`;
}

function menuLineOptions(menu, selectedId = "") {
  const lines = (menu?.lines || []).filter((line) => line.status === "Active" || line.id === selectedId);
  return `<option value="">Select item</option>${lines.map((line) => `<option value="${escapeHtml(line.id)}" data-code="${escapeHtml(line.itemCode)}" data-name="${escapeHtml(line.itemName)}" data-category="${escapeHtml(line.category)}" data-unit="${escapeHtml(line.unit)}" ${line.id === selectedId ? "selected" : ""}>${escapeHtml(`${line.itemCode} - ${line.itemName}`)}</option>`).join("")}`;
}

function loadingRatioOptions() {
  return [
    { value: "one_to_one", label: "1 : 1 (Per Passenger)" },
    { value: "per_x_pax", label: "One Unit per X Passengers" },
    { value: "fixed", label: "Fixed Quantity" },
    { value: "business_quantity", label: "Business Class Quantity" },
    { value: "premium_economy_quantity", label: "Premium Economy Quantity" },
    { value: "economy_quantity", label: "Economy Quantity" },
    { value: "crew_quantity", label: "Crew Quantity" },
    { value: "manual_matrix", label: "Manual Matrix" },
    { value: "percentage_split", label: "Percentage Split" }
  ];
}

function addLoadingEditorLine(button) {
  const form = button.closest("form");
  const menuId = form.querySelector('[name="menuId"]')?.value || "";
  const tbody = button.closest(".structured-editor").querySelector("tbody");
  tbody.querySelector(".empty-editor-row")?.remove();
  const used = new Set([...tbody.querySelectorAll('[name="loadingLineMenuLineId[]"]')].map((select) => select.value).filter(Boolean));
  const menu = getMenuById(menuId);
  const nextMenuLine = (menu?.lines || []).find((line) => line.status === "Active" && !used.has(line.id)) || (menu?.lines || []).find((line) => line.status === "Active");
  if (!nextMenuLine) {
    showToast("Select a menu with active items before adding a loading line.");
    return;
  }
  const row = {
    id: generateId("lsln"),
    menuLineId: nextMenuLine.id,
    menuItemCode: nextMenuLine.itemCode,
    menuItemName: nextMenuLine.itemName,
    category: nextMenuLine.category,
    unit: nextMenuLine.unit,
    cabinClass: "All",
    ratioType: "one_to_one",
    ratioValue: "1:1",
    fixedQuantity: 0,
    quantityPerPassenger: 1,
    minimumQuantity: 0,
    maximumQuantity: "",
    bufferPercentage: 0,
    roundingMethod: "ceil",
    displaySequence: tbody.querySelectorAll("[data-loading-line-row]").length + 1,
    remarks: nextMenuLine.category || ""
  };
  tbody.insertAdjacentHTML("beforeend", loadingSheetLineEditorRow(row, row.displaySequence - 1, menuId, false));
}

function importEditorLoadingRowsFromMenu(button) {
  const form = button.closest("form");
  const menuId = form.querySelector('[name="menuId"]')?.value || "";
  const menu = getMenuById(menuId);
  const tbody = button.closest(".structured-editor").querySelector("tbody");
  const lines = (menu?.lines || []).filter((line) => line.status === "Active");
  if (!lines.length) {
    showToast("Selected menu has no active items to import.");
    return;
  }
  if (tbody.querySelectorAll("[data-loading-line-row]").length && !window.confirm("Replace existing draft loading lines with active items from the selected menu?")) return;
  tbody.innerHTML = lines.map((line, index) => loadingSheetLineEditorRow({
    id: generateId("lsln", `${menuId}-${line.id}-${index}`),
    menuLineId: line.id,
    menuItemCode: line.itemCode,
    menuItemName: line.itemName,
    category: line.category,
    unit: line.unit,
    cabinClass: "All",
    ratioType: "one_to_one",
    ratioValue: "1:1",
    quantityPerPassenger: 1,
    displaySequence: index + 1,
    remarks: line.category || ""
  }, index, menuId, false)).join("");
}

function applyLoadingMenuLineSelection(select) {
  const option = select.selectedOptions[0];
  const row = select.closest("tr");
  if (!row || !option) return;
  ["code", "name", "category", "unit"].forEach((field) => {
    const cell = row.querySelector(`[data-derived="${field}"]`);
    if (cell) cell.textContent = option.dataset[field] || "";
  });
}

function refreshLoadingSheetMenuWarning(form) {
  const menuId = form.querySelector('[name="menuId"]')?.value || "";
  const menu = getMenuById(menuId);
  let invalidCount = 0;
  form.querySelectorAll('[name="loadingLineMenuLineId[]"]').forEach((select) => {
    const previous = select.value;
    select.innerHTML = menuLineOptions(menu, previous);
    if (previous && select.value !== previous) invalidCount += 1;
    applyLoadingMenuLineSelection(select);
  });
  const warning = form.querySelector(".loading-menu-warning");
  if (warning) {
    warning.style.display = invalidCount ? "" : "none";
    warning.querySelector(".muted").textContent = invalidCount
      ? `${invalidCount} loading line(s) no longer reference an item from the selected Menu Master. Import items from menu or choose valid menu items before saving.`
      : "";
  }
}

function derivedFlightPreview(flightMasterId) {
  const flight = getFlightMasterById(flightMasterId);
  if (!flight) return `<div class="notice compact-notice"><span class="check">!</span><div><b>No flight selected</b><br><span class="muted">Airline, flight number, and route derive from Flight Master after save.</span></div></div>`;
  return `<div class="notice compact-notice"><span class="check">✓</span><div><b>Derived from Flight Master</b><br><span class="muted">${escapeHtml(flight.airline)} / ${escapeHtml(flight.flightNumber)} / ${escapeHtml(flight.sector)}</span></div></div>`;
}

function readMasterForm(key, form, base) {
  const data = Object.fromEntries(new FormData(form).entries());
  if (key === "flights") {
    const origin = String(data.origin || "").trim().toUpperCase();
    const destination = String(data.destination || "").trim().toUpperCase();
    return normalizeFlightMasterRecord({
      ...base,
      ...data,
      origin,
      destination,
      sector: `${origin} - ${destination}`,
      operatingDays: splitList(data.operatingDays),
      businessCapacity: Number(data.businessCapacity || 0),
      premiumEconomyCapacity: Number(data.premiumEconomyCapacity || 0),
      economyCapacity: Number(data.economyCapacity || 0),
      totalPassengerCapacity: Number(data.businessCapacity || 0) + Number(data.premiumEconomyCapacity || 0) + Number(data.economyCapacity || 0),
      technicalCrewCount: Number(data.technicalCrewCount || 0),
      cabinCrewCount: Number(data.cabinCrewCount || 0)
    });
  }
  if (key === "menus") {
    return normalizeMenuRecord({
      ...base,
      ...data,
      cabinClasses: splitList(data.cabinClasses),
      lines: readMenuLineRows(form, base)
    });
  }
  if (key === "flightMenuMappings") {
    const menu = getMenuById(data.menuId);
    return normalizeMappingRecord({ ...base, ...data, serviceType: data.serviceType || menu?.serviceType || "", priority: Number(data.priority || 1) });
  }
  if (key === "ancillaryItems") {
    return normalizeAncillaryRecord({
      ...base,
      ...data,
      invoiceEnabled: data.invoiceEnabled === "true",
      unitRate: Number(data.unitRate || 0),
      taxPercentage: Number(data.taxPercentage || 0),
      applicability: {
        type: data.applicabilityType,
        airline: data.applicabilityType === "selected_airline" ? data.applicabilityAirline || "" : "",
        flightMasterId: data.applicabilityType === "selected_flight" ? data.applicabilityFlightMasterId || "" : "",
        route: data.applicabilityType === "selected_route" ? data.applicabilityRoute || "" : "",
        aircraftType: data.applicabilityType === "selected_aircraft_type" ? data.applicabilityAircraftType || "" : ""
      },
      calculationRule: {
        calculationType: data.calculationType || "manual",
        quantityPerPax: Number(data.quantityPerPax || 0),
        paxDivisor: Number(data.paxDivisor || 0),
        fixedQuantity: Number(data.fixedQuantity || 0),
        bufferPercentage: Number(data.bufferPercentage || 0),
        minimumQuantity: Number(data.minimumQuantity || 0),
        maximumQuantity: data.maximumQuantity === "" || data.maximumQuantity === undefined ? null : Number(data.maximumQuantity),
        roundingMethod: data.roundingMethod || "ceil",
        allowOperationalOverride: data.allowOperationalOverride === "true"
      }
    });
  }
  if (key === "loadingSheets") {
    const flight = getFlightMasterById(data.flightMasterId);
    return normalizeLoadingSheetRecord({
      ...base,
      ...data,
      aircraftType: data.aircraftType || flight?.aircraftType || "",
      daysOfOperation: splitList(data.daysOfOperation),
      lines: readLoadingSheetLineRows(form, data.menuId)
    });
  }
  return { ...base, ...data };
}

function readMenuLineRows(form) {
  return [...form.querySelectorAll("[data-menu-line-row]")].map((row, index) => ({
    id: row.querySelector('[name="menuLineId[]"]')?.value || generateId("mlin", index),
    itemCode: row.querySelector('[name="menuLineItemCode[]"]')?.value.trim() || "",
    itemName: row.querySelector('[name="menuLineItemName[]"]')?.value.trim() || "",
    category: row.querySelector('[name="menuLineCategory[]"]')?.value.trim() || "",
    mealType: row.querySelector('[name="menuLineMealType[]"]')?.value || "",
    classification: row.querySelector('[name="menuLineClassification[]"]')?.value.trim() || "",
    specialMealCode: row.querySelector('[name="menuLineSpecialMealCode[]"]')?.value.trim() || "",
    unit: row.querySelector('[name="menuLineUnit[]"]')?.value.trim() || "",
    unitPrice: Number(row.querySelector('[name="menuLineUnitPrice[]"]')?.value || 0),
    taxPercentage: Number(row.querySelector('[name="menuLineTaxPercentage[]"]')?.value || 0),
    invoiceItemCode: row.querySelector('[name="menuLineInvoiceItemCode[]"]')?.value.trim() || "",
    status: row.querySelector('[name="menuLineStatus[]"]')?.value || "Active",
    displaySequence: Number(row.querySelector('[name="menuLineSequence[]"]')?.value || index + 1)
  })).filter((line) => line.itemCode || line.itemName);
}

function readLoadingSheetLineRows(form, menuId) {
  const menu = getMenuById(menuId);
  return [...form.querySelectorAll("[data-loading-line-row]")].map((row, index) => {
    const menuLineId = row.querySelector('[name="loadingLineMenuLineId[]"]')?.value || "";
    const menuLine = menu?.lines?.find((line) => line.id === menuLineId);
    return {
      id: row.querySelector('[name="loadingLineId[]"]')?.value || generateId("lsln", index),
      menuLineId,
      menuItemCode: menuLine?.itemCode || row.querySelector('[data-derived="code"]')?.textContent || "",
      menuItemName: menuLine?.itemName || row.querySelector('[data-derived="name"]')?.textContent || "",
      category: menuLine?.category || row.querySelector('[data-derived="category"]')?.textContent || "",
      unit: menuLine?.unit || row.querySelector('[data-derived="unit"]')?.textContent || "",
      cabinClass: row.querySelector('[name="loadingLineCabinClass[]"]')?.value || "All",
      ratioType: row.querySelector('[name="loadingLineRatioType[]"]')?.value || "one_to_one",
      ratioValue: row.querySelector('[name="loadingLineRatioValue[]"]')?.value || "",
      fixedQuantity: Number(row.querySelector('[name="loadingLineFixedQuantity[]"]')?.value || 0),
      quantityPerPassenger: Number(row.querySelector('[name="loadingLineQuantityPerPassenger[]"]')?.value || 0),
      minimumQuantity: Number(row.querySelector('[name="loadingLineMinimumQuantity[]"]')?.value || 0),
      maximumQuantity: row.querySelector('[name="loadingLineMaximumQuantity[]"]')?.value || "",
      bufferPercentage: Number(row.querySelector('[name="loadingLineBufferPercentage[]"]')?.value || 0),
      roundingMethod: row.querySelector('[name="loadingLineRoundingMethod[]"]')?.value || "ceil",
      displaySequence: Number(row.querySelector('[name="loadingLineSequence[]"]')?.value || index + 1),
      remarks: row.querySelector('[name="loadingLineRemarks[]"]')?.value || ""
    };
  }).filter((line) => line.menuLineId);
}

function splitList(value) {
  return String(value || "").split(",").map((item) => item.trim()).filter(Boolean);
}

function emptyFlightMaster() {
  return normalizeFlightMasterRecord({
    id: generateId("flt"),
    flightCode: "",
    airline: "",
    flightNumber: "",
    description: "",
    origin: "KTM",
    destination: "",
    sector: "",
    operatingDays: [],
    scheduledDeparture: "",
    scheduledArrival: "",
    effectiveFrom: "2026-06-15",
    effectiveTo: "2026-12-31",
    aircraftType: "",
    defaultRegistration: "",
    businessCapacity: 0,
    premiumEconomyCapacity: 0,
    economyCapacity: 0,
    technicalCrewCount: 2,
    cabinCrewCount: 6,
    loadingBay: "",
    gateType: "Narrow Body",
    upliftType: "Full Uplift",
    hotMealDishOutTime: "",
    coldMealPreparationTime: "",
    dispatchTime: "",
    remarks: "",
    status: "Active"
  });
}

function emptyMenuMaster() {
  return normalizeMenuRecord({
    id: generateId("menu"),
    menuCode: "",
    menuName: "",
    menuCycle: "",
    description: "",
    serviceType: "Hot Breakfast",
    serviceSequence: "1",
    cabinClasses: ["Economy"],
    currency: "USD",
    version: "1",
    effectiveFrom: "2026-06-15",
    effectiveTo: "2026-12-31",
    status: "Active",
    lines: []
  });
}

function emptyMapping() {
  return normalizeMappingRecord({
    id: generateId("map"),
    mappingCode: "",
    flightMasterId: state.masters.flights[0]?.id || "",
    menuId: state.masters.menus[0]?.id || "",
    serviceSequence: "1",
    serviceType: state.masters.menus[0]?.serviceType || "Hot Breakfast",
    effectiveFrom: "2026-06-15",
    effectiveTo: "2026-12-31",
    priority: 1,
    status: "Active",
    notes: ""
  });
}

function emptyAncillary() {
  return normalizeAncillaryRecord(makeAncillary("", "", "Other", "", 0, "manual", {}));
}

function emptyLoadingSheet() {
  const flight = state.masters.flights[0];
  const menu = state.masters.menus.find((item) => item.lines.length) || state.masters.menus[0];
  return normalizeLoadingSheetRecord({
    id: generateId("load"),
    loadingSheetCode: "",
    version: "1",
    flightMasterId: flight?.id || "",
    aircraftType: flight?.aircraftType || "",
    menuId: menu?.id || "",
    serviceSequence: "1",
    mealType: menu?.serviceType || "Hot Breakfast",
    daysOfOperation: flight?.operatingDays || [],
    effectiveFrom: "2026-06-15",
    effectiveTo: "2026-12-31",
    rotation: "",
    notes: "",
    status: "Active",
    lines: []
  });
}

function validateFlightMaster(record, existingId = "") {
  const errors = [];
  if (!record.airline) errors.push("Airline is required.");
  if (!record.flightNumber) errors.push("Flight number is required.");
  if (!record.origin || !record.destination) errors.push("Origin and destination are required.");
  if (record.origin && record.destination && record.origin === record.destination) errors.push("Origin and destination cannot be identical.");
  if (!record.operatingDays.length) errors.push("At least one operating day is required.");
  if (!record.scheduledDeparture || !record.scheduledArrival) errors.push("Departure and arrival times are required.");
  if (record.effectiveFrom && record.effectiveTo && new Date(record.effectiveFrom) > new Date(record.effectiveTo)) errors.push("Effective-from date cannot be after effective-to date.");
  ["businessCapacity", "premiumEconomyCapacity", "economyCapacity", "technicalCrewCount", "cabinCrewCount"].forEach((field) => {
    if (Number(record[field]) < 0) errors.push("Capacity and crew counts cannot be negative.");
  });
  const duplicate = state.masters.flights.some((item) => item.id !== existingId && item.status === "Active" && record.status === "Active" && item.airline === record.airline && item.flightNumber === record.flightNumber && item.origin === record.origin && item.destination === record.destination && periodsOverlap(item.effectiveFrom, item.effectiveTo, record.effectiveFrom, record.effectiveTo));
  if (duplicate) errors.push("An overlapping active flight definition already exists.");
  return unique(errors);
}

function validateMenuMaster(record, existingId = "") {
  const errors = [];
  if (!record.menuCode) errors.push("Menu code is required.");
  if (!record.menuName) errors.push("Menu name is required.");
  if (state.masters.menus.some((item) => item.id !== existingId && item.menuCode === record.menuCode)) errors.push("Menu code must be unique.");
  if (record.effectiveFrom && record.effectiveTo && new Date(record.effectiveFrom) > new Date(record.effectiveTo)) errors.push("Effective dates are invalid.");
  if (!record.lines.some((line) => line.status === "Active")) errors.push("At least one active menu line is required.");
  const itemCodes = record.lines.map((line) => line.itemCode).filter(Boolean);
  if (new Set(itemCodes).size !== itemCodes.length) errors.push("Item code must be unique inside a menu.");
  if (record.lines.some((line) => Number(line.unitPrice) < 0)) errors.push("Rates cannot be negative.");
  const existing = existingId ? getMenuById(existingId) : null;
  if (existing) {
    const nextLineIds = new Set(record.lines.map((line) => line.id));
    const removedUsedLine = (existing.lines || []).find((line) => !nextLineIds.has(line.id) && isMenuLineUsedInTransactions(existingId, line));
    if (removedUsedLine) errors.push(`${removedUsedLine.itemCode} is used by loading sheets or transaction snapshots. Deactivate the line instead of removing it.`);
  }
  return unique(errors);
}

function validateMapping(record, existingId = "") {
  const errors = [];
  const flight = getFlightMasterById(record.flightMasterId);
  const menu = getMenuById(record.menuId);
  if (!flight) errors.push("Flight Master is required.");
  if (!menu) errors.push("Menu Master is required.");
  if (flight && flight.status !== "Active") errors.push("Mapping must reference an active Flight Master.");
  if (menu && menu.status !== "Active") errors.push("Mapping must reference an active Menu Master.");
  if (record.effectiveFrom && record.effectiveTo && new Date(record.effectiveFrom) > new Date(record.effectiveTo)) errors.push("Effective dates are invalid.");
  const overlap = state.masters.flightMenuMappings.some((item) => item.id !== existingId && item.status === "Active" && record.status === "Active" && item.flightMasterId === record.flightMasterId && item.serviceType === record.serviceType && periodsOverlap(item.effectiveFrom, item.effectiveTo, record.effectiveFrom, record.effectiveTo));
  if (overlap) errors.push("An overlapping active mapping exists for this flight, route, service, and period.");
  return unique(errors);
}

function validateAncillary(record, existingId = "") {
  const errors = [];
  if (!record.itemCode) errors.push("Item code is required.");
  if (!record.itemName) errors.push("Item name is required.");
  if (!record.unit) errors.push("Unit is required.");
  if (state.masters.ancillaryItems.some((item) => item.id !== existingId && item.itemCode === record.itemCode)) errors.push("Item code must be unique.");
  if (Number(record.unitRate) < 0) errors.push("Rate cannot be negative.");
  const rule = record.calculationRule || {};
  ["quantityPerPax", "paxDivisor", "fixedQuantity", "bufferPercentage", "minimumQuantity"].forEach((field) => {
    if (Number(rule[field] || 0) < 0) errors.push("Rule values cannot be negative.");
  });
  if (rule.calculationType === "per_x_pax" && Number(rule.paxDivisor || 0) <= 0) errors.push("One unit per X passengers requires a positive paxDivisor.");
  return unique(errors);
}

function validateLoadingSheet(record, existingId = "") {
  const errors = [];
  const flight = getFlightMasterById(record.flightMasterId);
  const menu = getMenuById(record.menuId);
  if (!flight) errors.push("Flight Master is required.");
  if (!menu) errors.push("Menu Master is required.");
  if (!record.lines.length) errors.push("At least one active loading line is required.");
  if (record.effectiveFrom && record.effectiveTo && new Date(record.effectiveFrom) > new Date(record.effectiveTo)) errors.push("Effective dates are invalid.");
  const validLineIds = new Set((menu?.lines || []).map((line) => line.id));
  if (record.lines.some((line) => !validLineIds.has(line.menuLineId))) errors.push("Every loading line must reference a valid menu line from the selected menu.");
  const percentageTotal = record.lines.filter((line) => line.ratioType === "percentage_split").reduce((sum, line) => sum + Number(line.ratioValue || 0), 0);
  if (percentageTotal && percentageTotal !== 100) errors.push("Percentage-based standard meal splits must total 100%.");
  const overlap = state.masters.loadingSheets.some((item) => item.id !== existingId && item.status === "Active" && record.status === "Active" && item.flightMasterId === record.flightMasterId && item.menuId === record.menuId && item.mealType === record.mealType && periodsOverlap(item.effectiveFrom, item.effectiveTo, record.effectiveFrom, record.effectiveTo));
  if (overlap) errors.push("Only one active Loading Sheet can apply to the same flight, menu, service, and date range.");
  return unique(errors);
}

function isMenuLineUsedInTransactions(menuId, line) {
  return state.masters.loadingSheets.some((sheet) => sheet.menuId === menuId && sheet.lines?.some((sheetLine) => sheetLine.menuLineId === line.id || sheetLine.menuItemCode === line.itemCode))
    || state.dailyOperations.some((operation) => operation.menuId === menuId && (
      operation.kotSnapshot?.productionPlanSnapshot?.mealLines?.some((meal) => meal.menuLineId === line.id || meal.code === line.itemCode)
      || operation.productionPlanSnapshot?.mealLines?.some((meal) => meal.menuLineId === line.id || meal.code === line.itemCode)
    ))
    || state.challans.some((challan) => challan.menuSnapshot?.id === menuId && challan.mealLinesSnapshot?.some((meal) => meal.menuLineId === line.id || meal.code === line.itemCode))
    || state.invoices.some((invoice) => invoice.menuSnapshot?.id === menuId && invoice.mealInvoiceLinesSnapshot?.some((meal) => meal.sourceMasterId === line.id || meal.itemCode === line.invoiceItemCode || meal.itemCode === line.itemCode));
}

function checkEntityDependencies(key, id) {
  const deps = [];
  if (key === "flights") {
    if (state.masters.flightMenuMappings.some((item) => item.flightMasterId === id)) deps.push("Flight-Menu Mapping");
    if (state.masters.loadingSheets.some((item) => item.flightMasterId === id)) deps.push("Loading Sheet Master");
    if (state.dailyOperations.some((item) => item.flightMasterId === id || item.flightSnapshot?.id === id || item.kotSnapshot?.flightMasterId === id)) deps.push("Daily Operation / KOT");
    if (state.challans.some((item) => item.flightSnapshot?.id === id || item.sourceKotSnapshot?.flightMasterId === id)) deps.push("Delivery Challan");
    if (state.invoices.some((item) => item.flightSnapshot?.id === id)) deps.push("Invoice");
  }
  if (key === "menus") {
    if (state.masters.flightMenuMappings.some((item) => item.menuId === id)) deps.push("Flight-Menu Mapping");
    if (state.masters.loadingSheets.some((item) => item.menuId === id)) deps.push("Loading Sheet Master");
    if (state.dailyOperations.some((item) => item.menuId === id || item.menuSnapshot?.id === id || item.kotSnapshot?.menuId === id)) deps.push("Daily Operation / KOT");
    if (state.challans.some((item) => item.menuSnapshot?.id === id || item.sourceKotSnapshot?.menuId === id)) deps.push("Delivery Challan");
    if (state.invoices.some((item) => item.menuSnapshot?.id === id)) deps.push("Invoice");
  }
  if (key === "flightMenuMappings") {
    if (state.dailyOperations.some((item) => item.mappingId === id || item.mappingSnapshot?.id === id || item.kotSnapshot?.mappingId === id)) deps.push("Daily Operation / KOT");
    if (state.challans.some((item) => item.sourceKotSnapshot?.mappingId === id)) deps.push("Delivery Challan");
    if (state.invoices.some((item) => item.sourceKotSnapshot?.mappingId === id)) deps.push("Invoice");
  }
  if (key === "ancillaryItems") {
    const item = getAncillaryById(id);
    if (state.dailyOperations.some((operation) => operation.ancillaryItemIds?.includes(id) || operation.ancillarySnapshots?.some((row) => row.id === id) || operation.kotSnapshot?.ancillaryItemIds?.includes(id))) deps.push("Daily Operation / KOT");
    if (state.challans.some((challan) => challan.ancillaryLinesSnapshot?.some((row) => row.sourceMasterId === id || row.itemCode === item?.itemCode))) deps.push("Delivery Challan");
    if (state.invoices.some((invoice) => invoice.ancillaryInvoiceLinesSnapshot?.some((row) => row.sourceMasterId === id || row.itemCode === item?.invoiceItemCode))) deps.push("Invoice");
  }
  if (key === "loadingSheets") {
    if (state.dailyOperations.some((item) => item.loadingSheetId === id || item.loadingSheetSnapshot?.id === id || item.kotSnapshot?.loadingSheetId === id)) deps.push("Daily Operation / KOT");
    if (state.challans.some((item) => item.loadingSheetSnapshot?.id === id || item.sourceKotSnapshot?.loadingSheetId === id)) deps.push("Delivery Challan");
    if (state.invoices.some((item) => item.loadingSheetSnapshot?.id === id)) deps.push("Invoice");
  }
  return unique(deps);
}

function deleteBlockReason(key, id) {
  const deps = checkEntityDependencies(key, id);
  if (deps.length) return `This record is referenced by ${deps.join(", ")}. Deactivate it instead.`;
  return "";
}

function ruleLabel(rule = {}) {
  const labels = {
    fixed: "Fixed quantity",
    per_passenger: "Per passenger",
    per_crew: "Per crew member",
    per_business_pax: "Per Business pax",
    per_premium_pax: "Per Premium pax",
    per_economy_pax: "Per Economy pax",
    per_x_pax: "One unit per X pax",
    buffer: "Percentage buffer",
    minimum: "Minimum quantity",
    manual: "Manual quantity",
    fixed_plus_per_pax: "Fixed plus per pax"
  };
  return labels[rule.calculationType] || rule.calculationType || "Manual quantity";
}

function renderPlanning() {
  const flight = selectedFlight();
  const calc = calculatedKot(flight);
  const doc = planningDocument(flight);
  const body = `
    <section class="content">
      <div class="toolbar">
        <div class="toolbar-group toolbar-group--start">
          <select class="field" onchange="state.selectedFlight=this.value;saveState();render()">${state.flights.map((item) => `<option value="${item.flightNo}" ${item.flightNo === flight.flightNo ? "selected" : ""}>${item.airline} - ${item.flightNo}</option>`).join("")}</select>
        </div>
        <div class="toolbar-group toolbar-group--end">
          <button type="button" class="btn green" onclick="savePlanningSetup()">Load Chart Into Planning</button>
          <button type="button" class="btn" onclick="setScreen('kot')">Open KOT</button>
          <button type="button" class="btn" onclick="setScreen('loading-preview')">Preview Matrix</button>
          <span class="badge confirmed">${flight.planningStatus}</span>
        </div>
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
  generateDailyOperations(state.operatingDate, state, true);
  const operations = operationsForSelectedDate();
  const filteredFlights = operations.filter((flight) => {
    const statusMatch = filters.status === "All Status" || [flight.kot, flight.meal, flight.dispatch, flight.production].some((value) => String(value).toLowerCase() === filters.status.toLowerCase());
    const configMatch = filters.configStatus === "All Config" || flight.configurationStatus === filters.configStatus;
    const airlineMatch = filters.airline === "All Airlines" || flight.airline === filters.airline;
    const sectorMatch = filters.sector === "All Sectors" || flight.sector === filters.sector;
    const query = filters.search.trim().toLowerCase();
    const queryMatch = !query || `${flight.flightNo} ${flight.airline} ${flight.sector} ${flight.aircraft} ${flight.configurationStatus}`.toLowerCase().includes(query);
    return statusMatch && configMatch && airlineMatch && sectorMatch && queryMatch;
  });
  const totals = operations.reduce((acc, flight) => {
    acc.flights += 1;
    acc.ready += flight.configurationStatus === "Ready" ? 1 : 0;
    acc.j += Number(flight.businessPax || 0);
    acc.y += finalPassengerCount(flight);
    acc.tc += Number(flight.technicalCrew || 0);
    acc.cc += Number(flight.cabinCrew || 0);
    return acc;
  }, { flights: 0, ready: 0, j: 0, y: 0, tc: 0, cc: 0 });
  const totalMeals = operations.reduce((sum, flight) => sum + calculatedKot(flight).totalMeals, 0);
  const nextDispatch = operations[0]?.flightSnapshot?.dispatchTime || operations[0]?.std || "-";
  const body = `
    <section class="content">
      <div class="kpi-grid">
        ${kpi("FL", "Total Flights", totals.flights, state.operatingDate)}
        ${kpi("PX", "Final Pax", totals.y.toLocaleString(), "Confirmed + addl.", "green")}
        ${kpi("ML", "Calculated Qty", totalMeals.toLocaleString(), "From loading sheets", "amber")}
        ${kpi("CR", "Total Crew (TC+CC)", String(totals.tc + totals.cc), "Selected date", "purple")}
        ${kpi("RD", "Config Ready", totals.ready, "Can confirm KOT", totals.ready === totals.flights ? "green" : "amber")}
        ${kpi("ND", "Next Dispatch", nextDispatch, operations[0]?.flightNo || "-")}
        ${kpi("EX", "Config Warnings", totals.flights - totals.ready, "Blocks confirmation", totals.ready === totals.flights ? "green" : "red")}
      </div>
      <div class="toolbar toolbar--queue">
        <div class="toolbar-group toolbar-group--start">
          <input class="field" type="date" value="${escapeHtml(state.operatingDate)}" aria-label="Operating date" onchange="setOperatingDate(this.value)">
          <select class="field" onchange="setQueueFilter('configStatus', this.value)">${["All Config", "Ready", "Missing Menu Mapping", "Missing Menu", "Missing Loading Sheet", "Missing Pricing", "Invalid Ratios", "Inactive Master"].map((item) => `<option ${filters.configStatus === item ? "selected" : ""}>${item}</option>`).join("")}</select>
          <select class="field" onchange="setQueueFilter('status', this.value)">${["All Status", "Draft", "Calculated", "Confirmed", "Sent to Kitchen", "In Progress", "Prepared", "Approved", "Dispatched", "Pending"].map((item) => `<option ${filters.status === item ? "selected" : ""}>${item}</option>`).join("")}</select>
          <select class="field" onchange="setQueueFilter('airline', this.value)">${["All Airlines", ...new Set(operations.map((flight) => flight.airline))].map((item) => `<option ${filters.airline === item ? "selected" : ""}>${item}</option>`).join("")}</select>
          <select class="field" onchange="setQueueFilter('sector', this.value)">${["All Sectors", ...new Set(operations.map((flight) => flight.sector))].map((item) => `<option ${filters.sector === item ? "selected" : ""}>${item}</option>`).join("")}</select>
          <input class="search" value="${escapeHtml(filters.search)}" placeholder="Search flight no, airline, sector..." oninput="state.queueFilters.search=this.value;saveState();filterRows(this.value)">
        </div>
        <div class="toolbar-group toolbar-group--end">
          <button type="button" class="btn" onclick="generateDailyOperations(state.operatingDate);saveState();render()">Generate / Refresh</button>
          <button type="button" class="btn icon-btn" onclick="resetDemo()" title="Reset local demo data" aria-label="Reset local demo data">RS</button>
        </div>
      </div>
      <div class="table-wrap">
        <table id="flight-table" class="data-table data-table--queue">
          <thead>
            <tr>
              <th class="cell-code">STD</th><th class="cell-code">Flight No.</th><th class="cell-name">Airline</th><th class="cell-code">Sector</th><th>Aircraft</th>
              <th class="num cell-num">Capacity</th><th class="num cell-num">Confirmed</th><th class="num cell-num">Special</th><th class="num cell-num">Final</th><th class="cell-code">Assigned Menu</th><th class="cell-code">Loading Sheet</th><th class="cell-status">KOT Status</th><th class="cell-status">Kitchen</th><th class="cell-status">Dispatch</th><th class="cell-status">Configuration</th><th class="cell-actions">Action</th>
            </tr>
          </thead>
          <tbody>
            ${filteredFlights.map(queueRow).join("") || `<tr><td colspan="16" class="empty-state">No daily operations match the selected filters.</td></tr>`}
            <tr class="total-row"><td colspan="6">Total Operations: ${totals.flights}</td><td class="num">${totals.y.toLocaleString()}</td><td class="num">${operations.reduce((sum, item) => sum + specialMealTotal(item), 0)}</td><td class="num">${totals.y.toLocaleString()}</td><td colspan="7"></td></tr>
          </tbody>
        </table>
      </div>
      <div class="footer-note">Daily operations are unique by operating date and Flight Master. Draft operations can refresh from masters; confirmed KOT snapshots stay frozen.</div>
    </section>
  `;
  return layout("Operations Flight Queue", "Manage KOT, Meal Production & Delivery", body);
}

function kpi(icon, label, value, sub, tone = "blue") {
  const safeTone = ["blue", "green", "amber", "red", "purple"].includes(tone) ? tone : "blue";
  return `<div class="kpi kpi--${safeTone}"><div class="kpi-icon">${icon}</div><div><small>${label}</small><strong>${value}</strong><span>${sub}</span></div></div>`;
}

function queueRow(flight) {
  const calc = calculatedKot(flight);
  return `
    <tr data-search="${`${flight.flightNo} ${flight.airline} ${flight.sector} ${flight.configurationStatus}`.toLowerCase()}">
      <td class="blue-text">${flight.std}</td>
      <td class="cell-code"><strong>${flight.flightNo}</strong></td>
      <td class="cell-name" title="${escapeHtml(flight.airline)}"><span class="logo-airline ${flight.airlineClass}">${flight.airline}</span></td>
      <td class="cell-code">${flight.sector}</td>
      <td>${flight.aircraft}</td>
      <td class="num cell-num">${flight.capacity}</td>
      <td class="num cell-num">${flight.confirmedPax}</td>
      <td class="num cell-num">${specialMealTotal(flight)}</td>
      <td class="num cell-num"><strong>${calc.finalPax}</strong></td>
      <td class="cell-code">${flight.menuSnapshot?.menuCode || "-"}</td>
      <td class="cell-code" title="${escapeHtml(flight.loadingSheetSnapshot?.loadingSheetCode || "-")}">${flight.loadingSheetSnapshot?.loadingSheetCode || "-"}</td>
      <td class="cell-status">${badge(flight.kot)}</td>
      <td class="cell-status">${badge(flight.kitchenStatus || flight.production)}</td>
      <td class="cell-status">${badge(flight.dispatch)}</td>
      <td class="cell-status">${badge(flight.configurationStatus)}</td>
      <td class="cell-actions"><div class="row-actions"><button type="button" class="btn green" onclick="setSelectedOperation('${flight.id}', 'kot')">${isKotLocked(flight) ? "View KOT" : "Open KOT"}</button><button type="button" class="btn icon-btn" onclick="openFlightModal('${flight.id}')" aria-label="Open flight details for ${escapeHtml(flight.flightNo)}" title="Open flight details">...</button></div></td>
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
  const canRefresh = flight.flightSnapshot && !isKotLocked(flight);
  const body = `
    <div class="flight-header kot-flight-header">
      <div class="flight-header-action"><button type="button" class="btn" onclick="setScreen('queue')">Back to Flight List</button></div>
      <div class="flight-summary">
        <div class="flight-identity"><strong>${flight.flightNo}</strong> ${badge(flight.kot)}</div>
        <div><label>Airline</label><span class="logo-airline ${flight.airlineClass}">${flight.airline}</span></div>
        <div><label>Sector</label><b>${flight.sector}</b></div>
        <div><label>STD</label><b>${flight.std}</b></div>
        <div><label>Aircraft</label><b>${flight.aircraft}</b></div>
        <div><label>Reg. No.</label><b>${flight.reg}</b></div>
        <div><label>Final Pax</label><b>${calc.finalPax}</b></div>
      </div>
    </div>
    <div class="steps kot-steps">${KOT_STEPS.map((item, index) => `<button type="button" class="step ${index === step ? "active" : ""} ${index < step ? "complete" : ""}" onclick="setKotStep(${index})"><b>${index + 1}</b><span>${item}</span></button>`).join("")}</div>
    <section class="content kot-content">
      <div class="grid-2 kot-layout">
        <div class="kot-main">${kotStageContent(step, flight)}</div>
        <aside class="kot-aside">
          ${sidePanel("Configuration", [["Status", badge(flight.configurationStatus || "Ready")], ["Messages", (flight.configurationMessages || []).join("<br>") || "Ready"], ["Menu", flight.menuSnapshot?.menuCode || "-"], ["Loading Sheet", flight.loadingSheetSnapshot?.loadingSheetCode || "-"]])}
          ${sidePanel("Key Timings", [["Hot Meal Dish Out", flight.flightSnapshot?.hotMealDishOutTime || "13:15"], ["Cold Meal Prep.", flight.flightSnapshot?.coldMealPreparationTime || "13:00"], ["Dispatch Time", flight.flightSnapshot?.dispatchTime || "14:45"]])}
          ${sidePanel("Other Info", [["Loading Bay", flight.flightSnapshot?.loadingBay || "02"], ["Gate Type", flight.flightSnapshot?.gateType || "Wide Body"], ["Uplift Type", flight.flightSnapshot?.upliftType || "Full Uplift"], ["Prepared By", "operations1"], ["Prepared On", nowStamp()]])}
          ${step < 5 ? `<div class="panel">
            <h2>Stage Actions</h2>
            <div class="actions-stack">
              <button class="btn navy" onclick="saveDraft()">Save Draft</button>
              ${canRefresh ? `<button class="btn" onclick="refreshOperationFromMasters('${flight.id}');saveState();showToast('Draft refreshed from masters.');render()">Refresh from Masters</button>` : ""}
              ${step === 4 ? `<button class="btn green" onclick="calculateMeals()">Recalculate</button>` : ""}
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
        <h2>Master Data and Flight Information</h2>
        <div class="notice compact-notice"><span class="check">${flight.configurationStatus === "Ready" ? "✓" : "!"}</span><div><b>${escapeHtml(flight.configurationStatus || "Ready")}</b><br><span class="muted">Operations cannot change airline, schedule, menu, mapping, loading sheet, or master rates inside KOT.</span></div></div>
        <div class="form-grid">
          ${readonlyField("Operation Date", flight.operationDate || state.operatingDate)}
          ${readonlyField("Flight No.", flight.flightNo)}
          ${readonlyField("Airline", flight.airline)}
          ${readonlyField("Origin", flight.origin)}
          ${readonlyField("Destination", flight.destination)}
          ${readonlyField("Registration", flight.reg)}
          ${readonlyField("Aircraft Type", flight.aircraft)}
          ${readonlyField("Aircraft Capacity", flight.capacity)}
          ${readonlyField("Sector", flight.sector)}
          ${readonlyField("Departure / Arrival", `${flight.std} / ${flight.arrivalTime}`)}
          ${readonlyField("Days of Operation", flight.operatingDays.join(", "))}
          ${readonlyField("Menu Code", flight.menuSnapshot?.menuCode || "-")}
          ${readonlyField("Menu Name", flight.menuSnapshot?.menuName || "-")}
          ${readonlyField("Mapping Code", flight.mappingSnapshot?.mappingCode || "-")}
          ${readonlyField("Loading Sheet Code", flight.loadingSheetSnapshot?.loadingSheetCode || "-")}
          ${readonlyField("Loading Sheet Version", flight.loadingSheetSnapshot?.version || "-")}
          ${readonlyField("Service Type", flight.mappingSnapshot?.serviceType || flight.menuSnapshot?.serviceType || "-")}
        </div>
        <div class="paper-grid three kot-related-panels">
          ${sidePanel("Flight Master", [["Effective", `${flight.flightSnapshot?.effectiveFrom || "-"} to ${flight.flightSnapshot?.effectiveTo || "-"}`], ["Capacity by class", `J ${flight.flightSnapshot?.businessCapacity || 0} / W ${flight.flightSnapshot?.premiumEconomyCapacity || 0} / Y ${flight.flightSnapshot?.economyCapacity || 0}`]])}
          ${sidePanel("Menu and Mapping", [["Mapping", flight.mappingSnapshot?.mappingCode || "-"], ["Menu", flight.menuSnapshot?.menuCode || "-"], ["Effective", `${flight.mappingSnapshot?.effectiveFrom || "-"} to ${flight.mappingSnapshot?.effectiveTo || "-"}`]])}
          ${sidePanel("Loading and Ancillary", [["Loading Sheet", flight.loadingSheetSnapshot?.loadingSheetCode || "-"], ["Version", flight.loadingSheetSnapshot?.version || "-"], ["Ancillary Items", flight.ancillarySnapshots?.length || 0]])}
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
          ${formField("Business Class Pax", flight.businessPax || 0, "updateFlightField('businessPax', this.value)")}
          ${formField("Premium Economy Pax", flight.premiumEconomyPax || 0, "updateFlightField('premiumEconomyPax', this.value)")}
          ${formField("Economy Class Pax", flight.economyPax || 0, "updateFlightField('economyPax', this.value)")}
          ${formField("Technical Crew", flight.technicalCrew || flight.tc || 0, "updateFlightField('technicalCrew', this.value)")}
          ${formField("Cabin Crew", flight.cabinCrew || flight.cc || 0, "updateFlightField('cabinCrew', this.value)")}
          ${formField("Special Passenger Count", flight.specialPassengerCount || 0, "updateFlightField('specialPassengerCount', this.value)")}
          ${readonlyField("Final Passenger Count", finalPassengerCount(flight))}
          ${readonlyField("Crew Count", crewCount(flight))}
          ${readonlyField("Total Persons on Board", finalPassengerCount(flight) + crewCount(flight))}
          ${readonlyField("Remaining Capacity", Number(flight.capacity || 0) - finalPassengerCount(flight))}
        </div>
        <label class="muted stage-label">Operational Remarks</label>
        <textarea onchange="updateFlightField('operationalRemarks', this.value)">${escapeHtml(flight.operationalRemarks || "")}</textarea>
        <div class="stage-block">${validationList("kot", flight)}</div>
      </div>
    `,
    () => `
      <div class="panel kot-stage">
        <h2>Special Meals</h2>
        ${specialMealsTable(true)}
        <div class="stage-block">${validationList("special", flight)}</div>
        <label class="muted stage-label">Remarks / Instructions</label>
        <textarea id="remarks" onchange="updateFlightField('operationalRemarks', this.value)">${escapeHtml(flight.operationalRemarks)}</textarea>
      </div>
    `,
    () => `
      <div class="panel kot-stage">
        <div class="panel-head"><h2>Ancillary Review and Overrides</h2><button class="btn green" onclick="calculateMeals()">Recalculate</button></div>
        ${dynamicAncillaryTable(flight, true)}
        <div class="stage-block">${validationList("ancillary", flight)}</div>
      </div>
    `,
    () => `
      <div class="panel kot-stage">
        <div class="panel-head"><h2>Automatic Meal Calculation</h2><button class="btn" onclick="setScreen('loading-preview')">Open Chart Preview</button></div>
        <div class="notice compact-notice"><span class="check">✓</span><div><b>Calculated from operation snapshot</b><br><span class="muted">Loading sheet, menu pricing, special meals, cabin counts, and ancillaries are calculated together.</span></div></div>
        ${dynamicMealCalculationTable(flight)}
        <div class="stage-block">${validationList("calculation", flight)}</div>
      </div>
    `,
    () => `
      <div class="panel kot-stage">
        <h2>Final Review & Summary</h2>
        <div class="chart-header">
          ${[["Flight", flight.flightNo], ["Airline", flight.airline], ["Sector", flight.sector], ["Aircraft", flight.aircraft], ["Final Pax", calculatedKot(flight).finalPax], ["Total Meals", calculatedKot(flight).totalMeals], ["Special Meals", calculatedKot(flight).specialMeals], ["Ancillary Lines", calculatedKot(flight).ancillaries.length], ["KOT Status", badge(flight.kot)], ["Production", badge(flight.production)]].map(([label, value]) => `<div class="mini-card"><span class="muted">${label}</span><br><b>${value}</b></div>`).join("")}
        </div>
        <div class="review-stack">
          <section class="review-section">
            <h3>Meal Calculation</h3>
            ${dynamicMealCalculationTable(flight)}
          </section>
          <section class="review-section">
            <h3>Special Meals</h3>
            ${specialMealsTable()}
          </section>
          <section class="review-section">
            <h3>Ancillary Items</h3>
            ${dynamicAncillaryTable(flight)}
          </section>
          <section class="review-section">
            <h3>Validation Checklist</h3>
            ${validationList("calculation", flight)}
          </section>
        </div>
      </div>
    `
  ];
  return stages[step]();
}

function kotStageFooter(step) {
  return `
    <div class="stage-footer">
      <button type="button" class="btn" onclick="setKotStep(${step - 1})" ${step === 0 ? "disabled" : ""}>Previous</button>
      <span class="muted">Stage ${step + 1} of ${KOT_STEPS.length}: ${KOT_STEPS[step]}</span>
      ${step < KOT_STEPS.length - 1 ? `<button type="button" class="btn green" onclick="setKotStep(${step + 1})">Next Stage</button>` : `<span class="stage-footer-actions"><button type="button" class="btn green" onclick="confirmKot()">Confirm KOT</button><button type="button" class="btn blue" onclick="sendToKitchen()">Send to Kitchen</button><button type="button" class="btn" onclick="generateChallan()">Generate Challan</button></span>`}
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
  return mealSnapshotTable(calc.meals, calc.specialMealLines || [], flight.specialMealRule, calc.totalMeals, calc.finalPax);
}

function mealSnapshotTable(meals = [], specialMealLines = [], specialMealRule = "", totalMeals = 0, finalPax = 0) {
  const specialTotal = specialMealLines.reduce((sum, line) => sum + Number(line.quantity || 0), 0);
  return `
    <div class="table-wrap kot-table-wrap meal-calc-wrap">
      <table class="compact-table meal-table meal-calc-table">
        <thead><tr><th>Meal Code</th><th>Meal Type</th><th>Menu Item</th><th>Ratio</th><th class="num">Calculated Qty</th><th>Rate Master</th></tr></thead>
        <tbody>
          ${meals.map((meal) => `<tr><td>${escapeHtml(meal.code)}</td><td>${escapeHtml(meal.type)}</td><td>${escapeHtml(meal.name)}</td><td>${escapeHtml(meal.ratio)}</td><td class="num"><strong>${meal.qty}</strong></td><td>${escapeHtml(meal.rateCode || meal.code)} @ ${Number(meal.rate || 0).toFixed(2)}</td></tr>`).join("")}
          <tr><td>SPML</td><td>Special Meals</td><td>Airline supplied special meal count</td><td>${escapeHtml(specialMealRule || "Replacement special meals")}</td><td class="num"><strong>${specialTotal}</strong></td><td>Menu snapshot only</td></tr>
          <tr class="total-row"><td colspan="4">Total Meals To Prepare</td><td class="num">${totalMeals}</td><td>Final pax: ${finalPax}</td></tr>
        </tbody>
      </table>
    </div>
  `;
}

function specialMealsTable(editable = false) {
  const flight = selectedFlight();
  const rows = specialMealEntries(flight);
  if (flight?.flightSnapshot) {
    return `
      <div class="table-wrap kot-table-wrap special-meals-wrap">
        <table class="compact-table special-meals-table kot-special-meals-table">
          <thead><tr><th>Code</th><th>Description</th><th class="num">Quantity</th><th>Included in Pax</th><th>Additional Uplift</th><th>Remarks</th></tr></thead>
          <tbody>
            ${rows.map((row) => `<tr><td><strong>${row.code}</strong></td><td>${row.description}</td><td class="num">${editable ? `<input class="mini-input" value="${row.quantity}" onchange="updateSpecialMeal('${row.code}', this.value)">` : row.quantity}</td><td>Yes</td><td>No</td><td>${escapeHtml(row.remarks || "")}</td></tr>`).join("")}
            <tr class="total-row"><td colspan="2">Total Special Meals</td><td class="num">${rows.reduce((sum, row) => sum + row.quantity, 0)}</td><td colspan="3">Replacement meals reduce standard meal passenger count.</td></tr>
          </tbody>
        </table>
      </div>
    `;
  }
  const meals = flight.specialMeals || state.kot.specialMeals;
  const keys = Object.keys(meals);
  const values = Object.values(meals);
  return `
    <table class="compact-table special-meals-table kot-special-meals-table">
      <thead><tr>${keys.map((key) => `<th class="num">${key}</th>`).join("")}<th class="num">Total</th></tr></thead>
      <tbody><tr>${keys.map((key) => `<td class="num">${editable ? `<input class="mini-input" value="${meals[key]}" onchange="updateSpecialMeal('${key}', this.value)">` : meals[key]}</td>`).join("")}<td class="num">${values.reduce((a, b) => a + Number(b), 0)}</td></tr></tbody>
    </table>
  `;
}

function specialMealsSnapshotTable(rows = []) {
  return `
      <div class="table-wrap kot-table-wrap special-meals-wrap">
      <table class="compact-table special-meals-table kot-special-meals-table">
        <thead><tr><th>Code</th><th>Description</th><th class="num">Quantity</th><th>Included in Pax</th><th>Additional Uplift</th><th>Remarks</th></tr></thead>
        <tbody>
          ${rows.map((row) => `<tr><td><strong>${escapeHtml(row.code)}</strong></td><td>${escapeHtml(row.description)}</td><td class="num">${Number(row.quantity || 0)}</td><td>${row.includedInPassengerCount ? "Yes" : "No"}</td><td>${row.additionalUplift ? "Yes" : "No"}</td><td>${escapeHtml(row.remarks || "")}</td></tr>`).join("") || `<tr><td colspan="6" class="empty-state">No special meals in this snapshot.</td></tr>`}
          <tr class="total-row"><td colspan="2">Total Special Meals</td><td class="num">${rows.reduce((sum, row) => sum + Number(row.quantity || 0), 0)}</td><td colspan="3">Stored from confirmed KOT snapshot.</td></tr>
        </tbody>
      </table>
    </div>
  `;
}

function dynamicAncillaryTable(flight = selectedFlight(), editable = false) {
  const rows = calculatedAncillaries(flight);
  return ancillarySnapshotTable(rows, editable);
}

function ancillarySnapshotTable(rows = [], editable = false) {
  if (rows.length && rows[0].itemCode) {
    return `
      <div class="table-wrap kot-table-wrap ancillary-wrap">
        <table class="compact-table ancillary-table kot-ancillary-table">
          <thead><tr><th>Item Code</th><th>Item Name</th><th>Unit</th><th>Master Rule</th><th class="num">Calculated</th><th>Override</th><th class="num">Final Qty</th><th class="num">Rate</th><th>Invoice</th></tr></thead>
          <tbody>${rows.map((row, index) => `<tr>
            <td>${escapeHtml(row.itemCode)}</td>
            <td>${escapeHtml(row.itemName || row.item)}</td>
            <td>${escapeHtml(row.unit)}</td>
            <td>${escapeHtml(row.masterCalculationRule || row.rule || "")}</td>
            <td class="num">${row.calculatedQuantity ?? row.qty}</td>
            <td>${row.overrideAllowed && editable ? `<div class="override-fields"><input class="mini-input override-qty" value="${escapeHtml(row.overrideQuantity)}" placeholder="Qty" onchange="updateAncillary(${index}, 'overrideQuantity', this.value)"><input class="input cell-input override-reason" value="${escapeHtml(row.overrideReason)}" placeholder="Reason" onchange="updateAncillary(${index}, 'overrideReason', this.value)"></div>` : row.overrideReason ? escapeHtml(row.overrideReason) : row.overrideAllowed ? "Allowed" : "Locked"}</td>
            <td class="num"><strong>${row.finalQuantity ?? row.qty}</strong></td>
            <td class="num">${Number(row.invoiceRate || row.unitRate || 0).toFixed(2)}</td>
            <td>${row.invoiceEnabled ? "Yes" : "No"}</td>
          </tr>`).join("")}</tbody>
        </table>
      </div>
    `;
  }
  return `
    <table class="compact-table ancillary-table kot-ancillary-table">
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
  const filters = state.queueFilters;
  const rows = operationsForSelectedDate().filter((operation) => ["Calculated", "Confirmed", "Sent to Kitchen", "In Progress", "Prepared", "Approved", "Dispatched"].includes(operation.kot) || operation.kotSnapshot);
  const body = `
    <section class="content">
      <div class="toolbar">
        <div class="toolbar-group toolbar-group--start">
          <input class="field" type="date" value="${escapeHtml(state.operatingDate)}" onchange="setOperatingDate(this.value)">
          <select class="field" onchange="setQueueFilter('status', this.value)">${["All Status", "Calculated", "Confirmed", "Sent to Kitchen", "In Progress", "Prepared", "Approved", "Dispatched"].map((item) => `<option ${filters.status === item ? "selected" : ""}>${item}</option>`).join("")}</select>
          <select class="field" onchange="setQueueFilter('airline', this.value)">${["All Airlines", ...new Set(operationsForSelectedDate().map((flight) => flight.airline))].map((item) => `<option ${filters.airline === item ? "selected" : ""}>${item}</option>`).join("")}</select>
          <input class="search" value="${escapeHtml(filters.search)}" placeholder="Search KOT, flight, airline..." oninput="state.queueFilters.search=this.value;saveState();render()">
        </div>
        <div class="toolbar-group toolbar-group--end">
          <button type="button" class="btn" onclick="setScreen('kitchen')">Kitchen Board</button>
        </div>
      </div>
      <div class="table-wrap">
        <table>
          <thead><tr><th>KOT No.</th><th>Date</th><th>Flight</th><th>Airline</th><th>Sector</th><th>STD</th><th>Menu</th><th>Status</th><th>Kitchen</th><th>Action</th></tr></thead>
          <tbody>${rows.filter((flight) => {
            const query = filters.search.trim().toLowerCase();
            const queryMatch = !query || `${flight.flightNo} ${flight.airline} ${flight.sector} ${flight.kot}`.toLowerCase().includes(query);
            const airlineMatch = filters.airline === "All Airlines" || flight.airline === filters.airline;
            const statusMatch = filters.status === "All Status" || flight.kot === filters.status || flight.production === String(filters.status).toLowerCase();
            return queryMatch && airlineMatch && statusMatch;
          }).map((flight, index) => `<tr><td>KOT-${String(index + 1).padStart(4, "0")}</td><td>${flight.operationDate}</td><td>${flight.flightNo}</td><td>${flight.airline}</td><td>${flight.sector}</td><td>${flight.std}</td><td>${flight.kotSnapshot?.menuSnapshot?.menuCode || flight.menuSnapshot?.menuCode || "-"}</td><td>${badge(flight.kot)}</td><td>${badge(flight.kitchenStatus || flight.production)}</td><td><button class="btn green" onclick="setSelectedOperation('${flight.id}', 'kot')">Open</button></td></tr>`).join("") || `<tr><td colspan="10" class="empty-state">No KOT records match the current filters.</td></tr>`}</tbody>
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
        <div class="toolbar-group toolbar-group--start">
          <button type="button" class="btn" onclick="setScreen('queue')">Back to Flight Queue</button>
        </div>
        <div class="toolbar-group toolbar-group--end">
          <button type="button" class="btn green" onclick="openDisplayWindow('kitchen')">Open Kitchen Display Window</button>
        </div>
      </div>
      <div class="panel">
        <div class="panel-head">
          <h2>Production Kitchen Display</h2>
          <span class="badge ${highLoadCount ? "pending" : "confirmed"}">${highLoadCount ? `${highLoadCount} high load alert` : "All loads normal"}</span>
        </div>
        <div class="notice compact-notice"><span class="check">✓</span><div><b>Confirmed KOT snapshots only</b><br><span class="muted">Kitchen quantities remain frozen even if master data changes later.</span></div></div>
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
        ${kitchenKpi("OT", "Confirmed", String(rows.filter(({ flight }) => flight.kot === "Confirmed" || flight.kot === "Sent to Kitchen").length), "", "cyan")}
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
  return operationsForSelectedDate()
    .filter((flight) => ["Confirmed", "Sent to Kitchen", "In Progress", "Prepared", "Approved", "Dispatched"].includes(flight.kot) || flight.kotSnapshot)
    .slice(0, 8)
    .map((flight) => ({
      flight,
      calc: flight.kotSnapshot?.productionPlanSnapshot || flight.productionPlanSnapshot || calculatedKot(flight),
      plan: { hotMeal: flight.flightSnapshot?.hotMealDishOutTime || "13:15", coldMeal: flight.flightSnapshot?.coldMealPreparationTime || "13:00", dispatch: flight.flightSnapshot?.dispatchTime || "14:45" }
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
  const challan = selectedChallan();
  const source = challan || {};
  const flightSnapshot = source.flightSnapshot || flight.flightSnapshot || {};
  const menuSnapshot = source.menuSnapshot || flight.menuSnapshot || {};
  const loadingSheetSnapshot = source.loadingSheetSnapshot || flight.loadingSheetSnapshot || {};
  const passengerSnapshot = source.passengerSnapshot || {};
  const calc = challan ? {
    finalPax: passengerSnapshot.finalPax || source.sourceKotSnapshot?.productionPlanSnapshot?.finalPax || 0,
    totalMeals: source.totalsSnapshot?.totalMeals || 0,
    specialMeals: source.totalsSnapshot?.specialMeals || 0,
    ancillaries: source.ancillaryLinesSnapshot || [],
    deliveredTotal: source.totalsSnapshot?.deliveredTotal || 0
  } : calculatedKot(flight);
  return `
    <div class="challan-paper">
      <div class="paper-head">
        <div>
          <div class="brand-text" style="font-size:24px">The Soaltee <span class="brand-sub">Gategourmet</span></div>
          <p><b>The Soaltee Hotel Limited</b><br>Tahachal, Kathmandu, Nepal<br>Tel: +977-1-4113671/4/113697<br>VAT No.: 500052786 | PAN No.: 601052900</p>
        </div>
        <div class="paper-title">GATE PASS CUM DELIVERY CHALLAN<br>FOR MEAL ON BOARD</div>
        <div class="serial">S. No.: <strong>${source.challanNumber || state.kot.challanNo}</strong><div class="barcode"></div><div>Date: ${source.operationDate || state.kot.date}</div></div>
      </div>
      <div class="paper-grid challan-flight-grid">
        <table class="compact-table"><tbody>
          ${[
            ["Flight No.", flightSnapshot.flightNumber || flight.flightNo],
            ["Airline", flightSnapshot.airline || flight.airline],
            ["Origin", flightSnapshot.origin || flight.origin],
            ["Destination", flightSnapshot.destination || flight.destination],
            ["Registration", flightSnapshot.defaultRegistration || flight.reg],
            ["A/C Type", flightSnapshot.aircraftType || flight.aircraft],
            ["Capacity", flightSnapshot.totalPassengerCapacity || flight.capacity],
            ["Sector", flightSnapshot.sector || flight.sector],
            ["STD", flightSnapshot.scheduledDeparture || flight.std],
            ["Operation Date", source.operationDate || state.kot.date],
            ["Menu", `${menuSnapshot.menuCode || "-"} / ${menuSnapshot.menuName || "-"}`],
            ["Loading Sheet", `${loadingSheetSnapshot.loadingSheetCode || "-"} / v${loadingSheetSnapshot.version || "-"}`],
            ["Final Pax", calc.finalPax]
          ].map(infoRow).join("")}
        </tbody></table>
        ${loadTableReadOnly(challan)}
      </div>
      <div class="paper-grid equal challan-meal-grid">
        ${challan ? mealSnapshotTable(challan.mealLinesSnapshot, challan.specialMealLinesSnapshot, "Stored KOT replacement meal rules", challan.totalsSnapshot?.totalMeals || 0, calc.finalPax) : dynamicMealCalculationTable(flight)}
        ${challan ? specialMealsSnapshotTable(challan.specialMealLinesSnapshot) : specialMealsTable()}
      </div>
      <div style="margin-top:12px">${challan ? ancillarySnapshotTable(challan.ancillaryLinesSnapshot) : dynamicAncillaryTable(flight)}</div>
      <div class="paper-grid three" style="margin-top:12px">
        <div class="panel"><h3>Remarks / Instructions</h3><p>${escapeHtml(source.remarks || flight.operationalRemarks).replace(/\n/g, "<br>")}</p></div>
        ${sidePanel("Key Timings", [["Hot Meal Dish Out", flightSnapshot.hotMealDishOutTime || "13:15"], ["Cold Meal Preparation", flightSnapshot.coldMealPreparationTime || "13:00"], ["Dispatch Time", flightSnapshot.dispatchTime || "14:45"]])}
        ${sidePanel("Delivery Totals", [["Meals", calc.totalMeals], ["Special Meals", calc.specialMeals], ["Ancillary Lines", calc.ancillaries.length], ["Total Delivered Qty", calc.deliveredTotal], ["Challan Status", badge(source.status || "Preview")]])}
      </div>
      <div class="signature-grid">
        ${["Prepared by", "Checked by", "Delivered by", "Received by"].map((title) => `<div class="signature-box"><b>${title}</b><br><br>Name: ${escapeHtml(source[title.toLowerCase().replace(/ by/g, "By").replace("received", "received")] || "............................")}<br><br>Sign: ............................<br><br>Time: ............................</div>`).join("")}
      </div>
      <div class="copy-footer">1. WHITE COPY: BILLING &nbsp;&nbsp; 2. BLUE COPY: ACCOUNT &nbsp;&nbsp; 3. YELLOW COPY: SECURITY &nbsp;&nbsp; 4. PINK COPY: OPERATIONS &nbsp;&nbsp; 5. GREEN COPY: AIR REP. &nbsp;&nbsp; 6. YELLOW COPY: PURSER<br>*** THANK YOU ***</div>
    </div>
  `;
}

function infoRow([label, value]) {
  return `<tr><td><b>${label}</b></td><td>${value}</td></tr>`;
}

function loadTableReadOnly(challan = null) {
  const flight = selectedFlight();
  const calc = challan ? challan.sourceKotSnapshot?.productionPlanSnapshot || {} : calculatedKot(flight);
  const passenger = challan?.passengerSnapshot || {};
  const rows = [
    ["Configured Capacity", passenger.businessPax ?? flight.j, passenger.premiumEconomyPax ?? 0, flight.capacity, passenger.technicalCrew ?? flight.tc, passenger.cabinCrew ?? flight.cc],
    ["Confirmed Pax", 0, 0, passenger.confirmedPax ?? flight.confirmedPax, 0, 0],
    ["Additional Pax", 0, 0, passenger.additionalPax ?? flight.additionalPax, 0, 0],
    ["Final Pax On Board", passenger.businessPax ?? flight.j, passenger.premiumEconomyPax ?? 0, passenger.finalPax ?? calc.finalPax, passenger.technicalCrew ?? flight.tc, passenger.cabinCrew ?? flight.cc],
    ["Final Meal On Board", 0, 0, calc.totalMeals, 0, 0]
  ];
  return `
    <table class="compact-table load-table">
      <thead><tr><th colspan="6" class="num">Pax on Board</th></tr><tr><th></th><th>BCL</th><th>PYCL</th><th>EYCL</th><th>C/C (TC)</th><th>C/A (CC)</th></tr></thead>
      <tbody>${rows.map((row) => `<tr><td>${row[0]}</td>${row.slice(1).map((value) => `<td class="num">${value}</td>`).join("")}</tr>`).join("")}</tbody>
    </table>
  `;
}

function invoicePaper(items, subtotal, tax, totalValue, invoice = null, challan = null) {
  const flight = selectedFlight();
  const flightSnapshot = invoice?.flightSnapshot || challan?.flightSnapshot || flight.flightSnapshot || {};
  const menuSnapshot = invoice?.menuSnapshot || challan?.menuSnapshot || flight.menuSnapshot || {};
  const currency = invoice?.currency || items[0]?.currency || menuSnapshot.currency || "USD";
  return `
    <div class="invoice-paper">
      <div class="invoice-header">
        <div class="invoice-company">
          <div class="invoice-logo">🛫</div>
          <div>
            <div class="invoice-brand">The Soaltee <span class="invoice-brand-sub">Gategourmet</span></div>
            <p>PO Box 97, Tilganga, Gaushala (Airport Road)<br>Kathmandu, Nepal<br>Telephone: 977-1-4113671, 4113697<br>Fax: 977-1-4113662</p>
          </div>
        </div>
        <div class="invoice-title">
          <div class="invoice-title-main">INFORMATION INVOICE</div>
          <div class="invoice-number">TPIN 300047697<br>Page 1 of 1</div>
        </div>
      </div>
      <div class="invoice-meta">
        <div><strong>Name of Airline:</strong> ${flightSnapshot.airline || flight.airline}</div>
        <div><strong>Flt. No.:</strong> ${flightSnapshot.flightNumber || flight.flightNo}</div>
        <div style="text-align:right"><strong>S. No.:</strong> ${invoice?.invoiceNumber || state.invoice.number || "AUTO"}</div>
      </div>
      <div class="invoice-meta">
        <div><strong>Flight Details:</strong> ${flightSnapshot.sector || flight.sector}</div>
        <div><strong>Date:</strong> ${invoice?.invoiceDate || challan?.operationDate || state.kot.date}</div>
        <div><strong>Source Challan:</strong> ${invoice?.sourceChallanNumber || challan?.challanNumber || "-"}</div>
      </div>
      <div class="invoice-meta">
        <div><strong>Menu:</strong> ${menuSnapshot.menuCode || "-"} / ${menuSnapshot.menuName || "-"}</div>
        <div><strong>Passenger Count:</strong> ${challan?.passengerSnapshot?.finalPax || invoice?.sourceKotSnapshot?.productionPlanSnapshot?.finalPax || calculatedKot(flight).finalPax}</div>
        <div><strong>Status:</strong> ${badge(invoice?.status || state.invoice.status || "Draft")}</div>
      </div>
      <div class="invoice-items">
        <table class="invoice-table">
          <thead>
            <tr>
              <th>S.No.</th>
              <th>Item Code</th>
              <th>Description</th>
              <th>Unit</th>
              <th class="invoice-num">Qty</th>
              <th class="invoice-num">Rate</th>
              <th class="invoice-num">Tax %</th>
              <th class="invoice-num">Amount</th>
              <th class="invoice-num">Tax</th>
              <th class="invoice-num">Total</th>
            </tr>
          </thead>
          <tbody>
            ${items.map((item, i) => {
              return `<tr>
                <td>${i + 1}</td>
                <td>${escapeHtml(item.itemCode || item.code)}</td>
                <td>${escapeHtml(item.description || item.desc)}</td>
                <td>${escapeHtml(item.unit || item.uom)}</td>
                <td class="invoice-num">${Number(item.quantity ?? item.qty).toLocaleString()}</td>
                <td class="invoice-num">${Number(item.unitRate ?? item.rate).toFixed(2)}</td>
                <td class="invoice-num">${Number(item.taxPercentage || 0).toFixed(2)}</td>
                <td class="invoice-num">${Number(item.lineAmount ?? ((item.quantity ?? item.qty) * (item.unitRate ?? item.rate))).toFixed(2)}</td>
                <td class="invoice-num">${Number(item.taxAmount || 0).toFixed(2)}</td>
                <td class="invoice-num">${Number(item.lineTotal ?? 0).toFixed(2)}</td>
              </tr>`;
            }).join("")}
          </tbody>
          <tfoot>
            <tr class="invoice-subtotal">
              <td colspan="9"><strong>SUB TOTAL</strong></td>
              <td class="invoice-num"><strong>${subtotal.toFixed(2)}</strong></td>
            </tr>
            <tr class="invoice-tax">
              <td colspan="9"><strong>TAX TOTAL</strong></td>
              <td class="invoice-num"><strong>${tax.toFixed(2)}</strong></td>
            </tr>
            <tr class="invoice-total">
              <td colspan="9"><strong>TOTAL</strong></td>
              <td class="invoice-num"><strong>${currency}&nbsp;${totalValue.toFixed(2)}</strong></td>
            </tr>
          </tfoot>
        </table>
      </div>
      <div class="invoice-footer">
        <div class="invoice-remarks">
          <p><small><strong>Notes:</strong> Thank you for your business. Please make payment within 30 days of invoice date.</small></p>
        </div>
        <div class="invoice-sign">
          <p><small>Name & Sign of Flt. Cat. Representative:</small></p>
        </div>
      </div>
    </div>
  `;
}

function renderChallanFull() {
  return layout("Gate Pass Cum Delivery Challan", "Printable meal on board document", `<section class="content">${challanPaper(true)}</section>`);
}

function renderChallanPreview() {
  const flight = selectedFlight();
  const challan = selectedChallan();
  const existingInvoice = challan ? getInvoiceForChallan(challan.challanId) : null;
  const invoiceReady = isChallanInvoiceReady(challan);
  const body = `
    <section class="content">
      <div class="toolbar">
        <div class="toolbar-group toolbar-group--start">
          <button type="button" class="btn" onclick="setScreen('kot')">Back to KOT Entry</button>
        </div>
        <div class="toolbar-group toolbar-group--end">
          ${challan ? `<button type="button" class="btn" onclick="setScreen('challan')">View Challan</button>` : `<button type="button" class="btn green" onclick="generateChallan()">Generate Challan</button>`}
          <button type="button" class="btn ${challan && isChallanInvoiceReady(challan) ? "locked" : ""}" onclick="setScreen('kot')" ${challan && isChallanInvoiceReady(challan) ? "disabled" : ""}>Edit KOT</button>
          <button type="button" class="btn" onclick="downloadDemoDocument('challan')">Download PDF</button>
          ${challan ? `<button type="button" class="btn" onclick="updateChallanStatus('Checked')">Mark Checked</button><button type="button" class="btn green" onclick="updateChallanStatus('Approved')">Mark Approved</button><button type="button" class="btn blue" onclick="updateChallanStatus('Dispatched')">Mark Dispatched</button><button type="button" class="btn navy" onclick="lockChallan()">Lock Challan</button>` : ""}
          ${invoiceReady ? `<button type="button" class="btn green" onclick="${existingInvoice ? "setupInvoiceFromChallan()" : "generateInvoice()"}">${existingInvoice ? "View Invoice" : "Generate Invoice"}</button>` : ""}
          <button type="button" class="btn" onclick="window.print()">Print</button>
        </div>
      </div>
      <div class="notice"><span class="check">${challan ? "✓" : "!"}</span><div><b>${challan ? "Snapshot Preview Loaded" : "No Challan Generated"}</b><br><span class="muted">${challan ? `This preview uses stored transaction snapshot data from ${escapeHtml(challan.challanNumber)}.` : "Confirm the KOT, then generate a Delivery Challan from the frozen KOT snapshot."}</span></div></div>
      <div class="preview-layout">
        ${challanPaper(false)}
        <aside>
          ${sidePanel("Document Status", [["Challan No.", challan?.challanNumber || "-"], ["Challan Status", badge(challan?.status || "Not Generated")], ["KOT Status", badge(flight.kot)], ["Meal Status", badge(flight.meal)], ["Ancillary Status", badge("calculated")], ["Generated At", challan?.generatedAt || "-"], ["Updated By", "operations1"]])}
          <div class="panel"><h2>Validation Checklist</h2>${validationList("document", flight)}</div>
          <div class="notice">${challan && invoiceReady ? "Invoice can be generated from this approved, dispatched, or locked challan." : "Approve, dispatch, or lock the challan before invoice generation."}</div>
          <div class="panel"><h2>Print Options</h2>${["Paper Size", "Orientation", "Copies"].map((label, index) => `<label><span class="muted">${label}</span><input class="input" value="${index === 0 ? "A4" : index === 1 ? "Portrait" : "1"}"></label><br>`).join("")}<label><input type="checkbox" checked> Fit to Page</label><br><label><input type="checkbox" checked> Show Barcode</label></div>
        </aside>
      </div>
    </section>`;
  return layout("Challan Preview", "Preview Gate Pass Cum Delivery Challan", body);
}

function renderInvoice() {
  const challan = selectedChallan();
  if (challan && isChallanInvoiceReady(challan) && !state.invoice.sourceChallanNo) setupInvoiceFromChallan(false);
  const invoice = selectedInvoice();
  const items = invoice ? [...invoice.mealInvoiceLinesSnapshot, ...invoice.ancillaryInvoiceLinesSnapshot] : challan ? [...buildMealInvoiceLines(challan), ...buildAncillaryInvoiceLines(challan)] : [];
  const totals = invoice || calculateInvoiceTotals(items);
  const existingInvoice = challan ? getInvoiceForChallan(challan.challanId) : null;
  const body = `
    <section class="content">
      <div class="toolbar">
        <div class="toolbar-group toolbar-group--start">
          <button type="button" class="btn" onclick="setScreen('challan-preview')">Back to Challan</button>
        </div>
        <div class="toolbar-group toolbar-group--end">
          <button type="button" class="btn blue" onclick="setupInvoiceFromChallan()">Load from Challan</button>
          <button type="button" class="btn" onclick="showToast('Invoice draft saved locally.')">Save Draft</button>
          <button type="button" class="btn" onclick="window.print()">Print Invoice</button>
          <button type="button" class="btn green" onclick="generateInvoice()">${existingInvoice ? "View Invoice" : "Generate Invoice"}</button>
        </div>
      </div>
      ${!challan ? `<div class="notice"><span class="check">!</span><div><b>No approved challan selected</b><br><span class="muted">Generate and approve a Delivery Challan before invoicing.</span></div></div>` : ""}
      ${invoicePaper(items, Number(totals.subtotal || 0), Number(totals.taxTotal || 0), Number(totals.grandTotal || 0), invoice, challan)}
    </section>`;
  return layout("Invoice Generation", "Create Invoice from Delivery Challan", body, "finance");
}

function invoiceItems() {
  const invoice = selectedInvoice();
  if (invoice) return [...invoice.mealInvoiceLinesSnapshot, ...invoice.ancillaryInvoiceLinesSnapshot];
  const challan = selectedChallan();
  if (challan) return [...buildMealInvoiceLines(challan), ...buildAncillaryInvoiceLines(challan)];
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
  const returnScreen = "loading-sheet-master";
  const returnLabel = "Back to Loading Sheet Master";
  const body = `
    <section class="content">
      <div class="toolbar">
        <div class="toolbar-group toolbar-group--start">
          <button type="button" class="btn" onclick="setScreen('${returnScreen}')">${returnLabel}</button>
        </div>
        <div class="toolbar-group toolbar-group--end">
          <button type="button" class="btn" onclick="setScreen('loading-preview')">Preview Loading Matrix</button>
          <button type="button" class="btn" onclick="window.print()">Print Loading Chart</button>
          <button type="button" class="btn green" onclick="saveLoadingSheetFromChart()">Save</button>
          <button type="button" class="btn" onclick="setScreen('${returnScreen}')">Cancel</button>
        </div>
      </div>
      <div class="panel"><h2>Chart Header</h2><div class="chart-header">
        ${formField("Airline *", chart.airline, "state.loadingChart.airline=this.value;saveState()")}
        ${formField("Flight No. *", chart.flightNo, "state.loadingChart.flightNo=this.value;saveState()")}
        ${formField("Sector *", chart.sector, "state.loadingChart.sector=this.value;saveState()")}
        ${formField("Aircraft Type", chart.aircraftType, "state.loadingChart.aircraftType=this.value;saveState()")}
        ${formField("Meal Type *", chart.mealType, "state.loadingChart.mealType=this.value;saveState()")}
        ${formField("Meal Time *", chart.mealTime, "state.loadingChart.mealTime=this.value;saveState()")}
        <label><span class="muted">Day of Ops</span><div class="day-pills"><b>1</b><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span></div></label>
        ${formField("Version *", chart.version, "state.loadingChart.version=this.value;saveState()")}
        ${formField("Chart Code *", chart.chartCode, "state.loadingChart.chartCode=this.value;saveState()")}
        ${formField("Effective From", chart.effectiveFrom, "state.loadingChart.effectiveFrom=this.value;saveState()")}
        ${formField("Effective To *", chart.effectiveTo, "state.loadingChart.effectiveTo=this.value;saveState()")}
        <span class="chart-placeholder" aria-hidden="true"></span>
        ${formField("Rotation Effective From", chart.rotationFrom, "state.loadingChart.rotationFrom=this.value;saveState()")}
        ${formField("Rotation Effective To", chart.rotationTo, "state.loadingChart.rotationTo=this.value;saveState()")}
        <label class="chart-field--span-2"><span class="muted">Notes</span><textarea onchange="state.loadingChart.notes=this.value;saveState()">${escapeHtml(chart.notes)}</textarea></label>
      </div></div>
      <div class="panel"><div class="panel-head"><h2>Meal Loading Ratio Details</h2><div class="toolbar-group toolbar-group--end"><button type="button" class="btn" onclick="addLoadingRow()">Add Row</button><button type="button" class="btn danger" onclick="deleteLastLoadingRow()">Delete Row</button><button type="button" class="btn" onclick="importLoadingRowsFromMenu()">Import from Template</button></div></div>${ratioTable()}</div>
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
  const loadingSheet = getLoadingSheetById(state.selectedLoadingSheetId);
  const menu = getMenuById(loadingSheet?.menuId);
  const rows = loadingSheet?.lines || [];
  return `<div class="table-wrap"><table class="ratio-table"><thead><tr><th>Seq</th><th>Service Seq</th><th>Service Type</th><th>Menu Item</th><th>Dish Code</th><th>Dish Name</th><th>Category</th><th>Unit</th><th>Cabin Class</th><th>Ratio Type</th><th>Ratio Value</th><th>Fixed</th><th>Per Pax</th><th>Min</th><th>Max</th><th>Buffer %</th><th>Rounding</th><th>Remarks</th><th>Actions</th></tr></thead><tbody>${rows.map((line, i) => `<tr>
    <td><input class="input cell-input" type="number" value="${Number(line.displaySequence || i + 1)}" onchange="updateLoadingRow(${i}, 'displaySequence', this.value)"></td>
    <td>${escapeHtml(loadingSheet?.serviceSequence || "1")}</td>
    <td>${escapeHtml(loadingSheet?.mealType || state.loadingChart.mealType)}</td>
    <td><select class="select cell-input dish-select" onchange="updateLoadingRow(${i}, 'menuLineId', this.value)">${menuLineOptions(menu, line.menuLineId)}</select></td>
    <td>${escapeHtml(line.menuItemCode)}</td>
    <td class="cell-wrap">${escapeHtml(line.menuItemName)}</td>
    <td>${escapeHtml(line.category)}</td>
    <td>${escapeHtml(line.unit)}</td>
    <td><select class="select cell-input" onchange="updateLoadingRow(${i}, 'cabinClass', this.value)">${["All", "Business", "Premium Economy", "Economy", "Crew"].map((value) => `<option value="${escapeHtml(value)}" ${value === line.cabinClass ? "selected" : ""}>${escapeHtml(value)}</option>`).join("")}</select></td>
    <td><select class="select cell-input" onchange="updateLoadingRow(${i}, 'ratioType', this.value)">${loadingRatioOptions().map((type) => `<option value="${escapeHtml(type.value)}" ${type.value === line.ratioType ? "selected" : ""}>${escapeHtml(type.label)}</option>`).join("")}</select></td>
    <td><input class="input cell-input" value="${escapeHtml(line.ratioValue || "")}" onchange="updateLoadingRow(${i}, 'ratioValue', this.value)"></td>
    <td><input class="input cell-input" type="number" value="${Number(line.fixedQuantity || 0)}" onchange="updateLoadingRow(${i}, 'fixedQuantity', this.value)"></td>
    <td><input class="input cell-input" type="number" value="${Number(line.quantityPerPassenger || 0)}" onchange="updateLoadingRow(${i}, 'quantityPerPassenger', this.value)"></td>
    <td><input class="input cell-input" type="number" value="${Number(line.minimumQuantity || 0)}" onchange="updateLoadingRow(${i}, 'minimumQuantity', this.value)"></td>
    <td><input class="input cell-input" type="number" value="${escapeHtml(line.maximumQuantity ?? "")}" onchange="updateLoadingRow(${i}, 'maximumQuantity', this.value)"></td>
    <td><input class="input cell-input" type="number" value="${Number(line.bufferPercentage || 0)}" onchange="updateLoadingRow(${i}, 'bufferPercentage', this.value)"></td>
    <td><select class="select cell-input" onchange="updateLoadingRow(${i}, 'roundingMethod', this.value)">${roundingOptions().map((option) => `<option value="${escapeHtml(option.value)}" ${option.value === line.roundingMethod ? "selected" : ""}>${escapeHtml(option.label)}</option>`).join("")}</select></td>
    <td><input class="input cell-input" value="${escapeHtml(line.remarks || "")}" onchange="updateLoadingRow(${i}, 'remarks', this.value)"></td>
    <td><button type="button" class="btn icon-btn" onclick="deleteLoadingRow(${i})" title="Delete loading row" aria-label="Delete loading row ${i + 1}">DL</button></td>
  </tr>`).join("") || `<tr><td colspan="19" class="empty-state">No loading lines configured. Import active items from the linked Menu Master.</td></tr>`}</tbody></table></div>`;
}

function renderLoadingPreview() {
  const points = [1, 2, 3, 4, 5, 10, 20, 30, 50, 100, 150, 180, 189];
  const chart = state.loadingChart;
  const body = `
    <section class="content">
      <div class="toolbar">
        <div class="toolbar-group toolbar-group--start">
          <button type="button" class="btn" onclick="setScreen('loading-maintenance')">Back to Meal Loading Chart</button>
        </div>
        <div class="toolbar-group toolbar-group--end">
          <button type="button" class="btn" onclick="downloadDemoDocument('loading-chart')">Download PDF</button>
          <button type="button" class="btn" onclick="window.print()">Print Chart</button>
          <button type="button" class="btn">Export to Excel</button>
        </div>
      </div>
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

function openFlightModal(flightNo = state.selectedOperationId || state.selectedFlight) {
  const operation = getDailyOperationById(flightNo) || operationsForSelectedDate().find((item) => item.flightNo === flightNo);
  if (operation) {
    state.selectedOperationId = operation.id;
    state.selectedFlight = operation.flightNo || operation.flightSnapshot?.flightNumber || "";
  } else {
    state.selectedFlight = flightNo;
  }
  saveState();
  const flight = selectedFlight();
  const calc = calculatedKot(flight);
  const existing = document.querySelector(".modal-backdrop");
  if (existing) existing.remove();
  document.body.insertAdjacentHTML("beforeend", `
    <div class="modal-backdrop" onclick="closeModal(event)">
      <div class="modal" role="dialog" aria-modal="true">
        <div class="modal-head"><h2 style="margin:0">Flight Operational Review</h2><button type="button" class="btn icon-btn" onclick="closeModal()" aria-label="Close dialog" title="Close">×</button></div>
        <div class="modal-body">
          <div class="chart-header">
            ${[["Flight Number", flight.flightNo], ["Airline", flight.airline], ["Sector", flight.sector], ["Aircraft", flight.aircraft], ["Registration", flight.reg], ["STD", flight.std], ["Capacity", flight.capacity], ["Final Pax", calc.finalPax], ["Meal Counts", calc.totalMeals], ["Menu Plan", flight.mealPlan], ["Loading Sheet", flight.loadingSheetSnapshot?.loadingSheetCode || "-"], ["Configuration", badge(flight.configurationStatus || "Ready")], ["KOT Status", badge(flight.kot)]].map(([label, value]) => `<div class="mini-card"><span class="muted">${label}</span><br><b>${value}</b></div>`).join("")}
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
