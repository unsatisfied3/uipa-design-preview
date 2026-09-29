const records = [
  {
    "agency": "University of Hawaii",
    "agencyUrl": "https://uipa.org/entity/university-of-hawaii/",
    "date": "Sept. 27, 2026, 7:13 p.m.",
    "jurisdiction": "State of Hawaii",
    "status": "Awaiting response",
    "title": "Timmy Chang Contract",
    "url": "https://uipa.org/request/timmy-chang-contract-1/"
  },
  {
    "agency": "Department of Community Services",
    "agencyUrl": "https://uipa.org/entity/department-of-community-services/",
    "date": "Sept. 25, 2026, 1:42 p.m.",
    "jurisdiction": "City and County of Honolulu",
    "status": "Request awaits classification",
    "title": "Management Plan for Kahauiki Village",
    "url": "https://uipa.org/request/management-plan-for-kahauiki-village/"
  },
  {
    "agency": "Department of Planning & Permitting",
    "agencyUrl": "https://uipa.org/entity/department-of-planning-permitting/",
    "date": "Sept. 22, 2026, 11:46 a.m.",
    "jurisdiction": "City and County of Honolulu",
    "status": "Request awaits classification",
    "title": "Kahauiki Village Inspections",
    "url": "https://uipa.org/request/kahauiki-village-inspections/"
  },
  {
    "agency": "Hawaii Police Department",
    "agencyUrl": "https://uipa.org/entity/hawaii-police-department/",
    "date": "Sept. 21, 2026, 4:43 p.m.",
    "jurisdiction": "County of Hawaii",
    "status": "Awaiting response",
    "title": "CARS",
    "url": "https://uipa.org/request/cars-2/"
  },
  {
    "agency": "University of Hawaii",
    "agencyUrl": "https://uipa.org/entity/university-of-hawaii/",
    "date": "Sept. 21, 2026, 2:36 p.m.",
    "jurisdiction": "State of Hawaii",
    "status": "Request awaits classification",
    "title": "Athletic Director Search",
    "url": "https://uipa.org/request/athletic-director-search/"
  },
  {
    "agency": "Hawaii County Department of Public Works",
    "agencyUrl": "https://uipa.org/entity/hawaii-county-department-of-public-works/",
    "date": "Sept. 21, 2026, 10:53 a.m.",
    "jurisdiction": "County of Hawaii",
    "status": "Request awaits classification",
    "title": "73-4411 Kakahiaka St, Kailua-Kona, HI 96740 Building and Zoning FOIA requests",
    "url": "https://uipa.org/request/73-4411-kakahiaka-st-kailua-kona-hi-96740-building-and-zoning-foia-requests/"
  },
  {
    "agency": "Hawaii County Planning Department",
    "agencyUrl": "https://uipa.org/entity/hawaii-county-planning-department/",
    "date": "Sept. 20, 2026, 6:28 a.m.",
    "jurisdiction": "County of Hawaii",
    "status": "Awaiting response",
    "title": "All Communications relating to $428,000 grant to study water around Puna Geothermal Venture",
    "url": "https://uipa.org/request/all-communications-relating-to-428000-grant-to-study-water-around-puna-geothermal-venture/"
  },
  {
    "agency": "Honolulu Fire Department",
    "agencyUrl": "https://uipa.org/entity/honolulu-fire-department/",
    "date": "Sept. 17, 2026, 10:18 a.m.",
    "jurisdiction": "City and County of Honolulu",
    "status": "Awaiting response",
    "title": "2026-001552 Fire Request",
    "url": "https://uipa.org/request/2026-001552-fire-request/"
  },
  {
    "agency": "University of Hawaii",
    "agencyUrl": "https://uipa.org/entity/university-of-hawaii/",
    "date": "Sept. 17, 2026, 7:36 a.m.",
    "jurisdiction": "State of Hawaii",
    "status": "Response overdue",
    "title": "UIPA Request Pursuant to HRS Chapter 92F — JABSOM Commencement Ceremony Recording, May 2024",
    "url": "https://uipa.org/request/uipa-request-pursuant-to-hrs-chapter-92f-jabsom-commencement-ceremony-recording-may-2024/"
  },
  {
    "agency": "University of Hawaii",
    "agencyUrl": "https://uipa.org/entity/university-of-hawaii/",
    "date": "Sept. 16, 2026, 7:10 a.m.",
    "jurisdiction": "State of Hawaii",
    "status": "Request awaits classification",
    "title": "Athletics",
    "url": "https://uipa.org/request/athletics-12/"
  },
  {
    "agency": "Hawaii County Planning Department",
    "agencyUrl": "https://uipa.org/entity/hawaii-county-planning-department/",
    "date": "Sept. 15, 2026, 10:54 a.m.",
    "jurisdiction": "County of Hawaii",
    "status": "Request partially successful",
    "title": "Geothermal Relocation and Community Benefits Program \"GRCBP\"",
    "url": "https://uipa.org/request/geothermal-relocation-and-community-benefits-program-grcbp/"
  },
  {
    "agency": "Department of Land & Natural Resources",
    "agencyUrl": "https://uipa.org/entity/department-of-land-natural-resources/",
    "date": "Sept. 14, 2026, 4:19 p.m.",
    "jurisdiction": "State of Hawaii",
    "status": "Request Successful",
    "title": "Puna Geothermal Venture Production & Injection Records for July, 2026",
    "url": "https://uipa.org/request/puna-geothermal-venture-production-injection-records-for-july-2026/"
  },
  {
    "agency": "Honolulu Police Department",
    "agencyUrl": "https://uipa.org/entity/honolulu-police-department/",
    "date": "Sept. 14, 2026, 12:36 p.m.",
    "jurisdiction": "City and County of Honolulu",
    "status": "Request awaits classification",
    "title": "CARS 2015",
    "url": "https://uipa.org/request/cars-2015/"
  },
  {
    "agency": "Honolulu Police Department",
    "agencyUrl": "https://uipa.org/entity/honolulu-police-department/",
    "date": "Sept. 11, 2026, 12:39 p.m.",
    "jurisdiction": "City and County of Honolulu",
    "status": "Request awaits classification",
    "title": "Public Records Request",
    "url": "https://uipa.org/request/public-records-request-24/"
  },
  {
    "agency": "Kauai Department of Public Works",
    "agencyUrl": "https://uipa.org/entity/kauai-department-of-public-works/",
    "date": "Sept. 4, 2026, 12:22 p.m.",
    "jurisdiction": "County of Kauai",
    "status": "Request awaits classification",
    "title": "Speed limit records for Poʻipū Road, Kōloa",
    "url": "https://uipa.org/request/speed-limit-records-for-poipu-road-koloa/"
  },
  {
    "agency": "Department of Agriculture",
    "agencyUrl": "https://uipa.org/entity/department-of-agriculture/",
    "date": "Sept. 3, 2026, 3:21 p.m.",
    "jurisdiction": "State of Hawaii",
    "status": "Request awaits classification",
    "title": "UIPA request for inspection records of interisland shipments of potted plants",
    "url": "https://uipa.org/request/uipa-request-for-inspection-records-of-interisland-shipments-of-potted-plants/"
  },
  {
    "agency": "Kauai Planning Department",
    "agencyUrl": "https://uipa.org/entity/kauai-planning-department/",
    "date": "Sept. 3, 2026, 9:58 a.m.",
    "jurisdiction": "County of Kauai",
    "status": "Request awaits classification",
    "title": "UIPA re: 9/8 Planning Commission documents",
    "url": "https://uipa.org/request/uipa-re-98-planning-commission-documents/"
  },
  {
    "agency": "Kauai Planning Department",
    "agencyUrl": "https://uipa.org/entity/kauai-planning-department/",
    "date": "Sept. 2, 2026, 4:16 p.m.",
    "jurisdiction": "County of Kauai",
    "status": "Response overdue",
    "title": "UIPA request for shoreline setback determination for Magoon, LCA 1233",
    "url": "https://uipa.org/request/uipa-request-for-shoreline-setback-determination-for-magoon-lca-1233/"
  },
  {
    "agency": "Kauai Planning Department",
    "agencyUrl": "https://uipa.org/entity/kauai-planning-department/",
    "date": "Sept. 2, 2026, 3:22 p.m.",
    "jurisdiction": "County of Kauai",
    "status": "Request awaits classification",
    "title": "UIPA request for SSD-2023-5 Monica C. Evslin Trust, TMK 1-3-005:053, Kekaha, Kauai",
    "url": "https://uipa.org/request/uipa-request-for-ssd-2023-5-monica-c-evslin-trust-tmk-1-3-005053-kekaha-kauai/"
  },
  {
    "agency": "Land Use Commission",
    "agencyUrl": "https://uipa.org/entity/land-use-commission/",
    "date": "Sept. 2, 2026, 2:32 p.m.",
    "jurisdiction": "State of Hawaii",
    "status": "Request awaits classification",
    "title": "UIPA request for recent Hokua Place 201H-38 petition (Kaua`i)",
    "url": "https://uipa.org/request/uipa-request-for-recent-hokua-place-201h-38-petition-kauai/"
  }
];