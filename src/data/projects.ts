export interface Project {
  id: number;
  name: string;
  type: string;
  category: string;
  year: string;
  location: string;
  scope: string;
  area: string;
  image: string;
  alt: string;
  description: string;
  client: string;
  architect: string;
  duration: string;
  challenges: string[];
  solutions: string[];
  gallery: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    name: 'Indira Gandhi International Airport',
    type: 'Airport Infrastructure',
    category: 'Government',
    year: '2022',
    location: 'New Delhi',
    scope: 'Linear & Baffle Ceiling + Wall Cladding',
    area: '5000+ sqm',
    image: '/assets/images/Delhi T1.jpeg',
    alt: 'Indira Gandhi International Airport T1 — ceiling and cladding execution.',
    description: 'Large-scale airport infrastructure execution involving linear ceilings, baffle ceiling systems, and premium wall cladding solutions designed for high-footfall modern aviation environments.',
    client: 'Airports Authority of India / GMR Group',
    architect: 'Global Aviation Design Consortium',
    duration: '14 Months',
    challenges: [
      'Executing live terminal installations without disrupting ongoing passenger transit operations.',
      'Maintaining precise acoustic compliance across 5,000+ sqm of expansive concourse halls.',
      'Rigorous seismic and wind-load anchoring for heavy baffle ceiling systems.'
    ],
    solutions: [
      'Deployed night-shift specialized rigging crews to ensure zero operational interference.',
      'Integrated custom acoustic fleece-backed metal perforated panels to achieve optimal NRC ratings.',
      'Engineered bespoke primary suspension grids using heavy-gauge structural aluminium.'
    ],
    gallery: [
      '/assets/images/Delhi T1.jpeg',
      '/assets/images/WhatsApp Image 2026-05-11 at 10.01.13 PM.jpeg',
      '/assets/images/WhatsApp Image 2026-05-11 at 10.01.14 PM.jpeg'
    ]
  },
  {
    id: 2,
    name: 'Rajiv Gandhi International Airport',
    type: 'Airport Infrastructure',
    category: 'Government',
    year: '2021',
    location: 'Hyderabad',
    scope: 'Linear Ceiling',
    area: '11000 sqm',
    image: '/assets/images/WhatsApp Image 2026-05-11 at 10.01.13 PM.jpeg',
    alt: 'Rajiv Gandhi International Airport Hyderabad — linear ceiling execution.',
    description: 'Executed extensive linear ceiling systems across airport infrastructure spaces with precision-focused architectural finishing.',
    client: 'GMR Hyderabad International Airport Ltd',
    architect: 'Larsen & Toubro Infrastructure Design',
    duration: '18 Months',
    challenges: [
      'Achieving flawless linear alignment across an 11,000 sqm continuous ceiling expanse.',
      'Coordinating MEP (Mechanical, Electrical, Plumbing) integration within tight ceiling plenums.',
      'Strict adherence to international aviation fire-safety and low-smoke zero-halogen standards.'
    ],
    solutions: [
      'Utilized advanced laser-leveling grid alignment systems for millimeter-perfect installation.',
      'Designed custom modular inspection trapdoors that blend invisibly into the linear panel layout.',
      'Procured non-combustible Class-1 rated architectural aluminium carriers and panels.'
    ],
    gallery: [
      '/assets/images/WhatsApp Image 2026-05-11 at 10.01.13 PM.jpeg',
      '/assets/images/Delhi T1.jpeg',
      '/assets/images/WhatsApp Image 2026-05-11 at 10.01.14 PM (1).jpeg'
    ]
  },
  {
    id: 3,
    name: 'Kempegowda International Airport',
    type: 'Airport Infrastructure',
    category: 'Government',
    year: '2022',
    location: 'Bangalore',
    scope: 'Aluminium Tube Ceiling',
    area: 'Large-scale',
    image: '/assets/images/WhatsApp Image 2026-05-11 at 10.01.14 PM.jpeg',
    alt: 'Kempegowda International Airport Bangalore — aluminium tube ceiling execution.',
    description: 'Modern aluminium tube ceiling execution designed for premium airport interior aesthetics and structural durability.',
    client: 'Bangalore International Airport Limited (BIAL)',
    architect: 'SOM (Skidmore, Owings & Merrill)',
    duration: '16 Months',
    challenges: [
      'Integrating heavy tubular extrusion profiles with complex terminal roof curvatures.',
      'Ensuring anti-glare finishing to complement expansive natural skylight illumination.',
      'Managing high-velocity HVAC airflow dynamics across open tubular ceiling configurations.'
    ],
    solutions: [
      'Fabricated articulated suspension brackets capable of variable-angle locking.',
      'Applied specialized matte-anodized architectural coatings to eliminate direct sunlight reflection.',
      'Conducted computational fluid dynamics (CFD) modeling to optimize baffle spacing.'
    ],
    gallery: [
      '/assets/images/WhatsApp Image 2026-05-11 at 10.01.14 PM.jpeg',
      '/assets/images/WhatsApp Image 2026-05-11 at 10.01.16 PM.jpeg',
      '/assets/images/WhatsApp Image 2026-05-11 at 10.01.17 PM.jpeg'
    ]
  },
  {
    id: 4,
    name: 'Chaudhary Charan Singh International Airport',
    type: 'Airport Infrastructure',
    category: 'Government',
    year: '2023',
    location: 'Lucknow',
    scope: 'Baffle Ceiling',
    area: '2000 sqm',
    image: '/assets/images/lucknow-airport-1.jpeg',
    alt: 'CCS International Airport Lucknow — baffle ceiling execution.',
    description: 'Delivered advanced baffle ceiling systems for airport infrastructure with emphasis on acoustics, design uniformity, and large-scale execution quality.',
    client: 'Adani Airports Holding Limited',
    architect: 'Pascal+Watson Architects',
    duration: '12 Months',
    challenges: [
      'Executing fast-track modular ceiling installation within an accelerated 12-month terminal expansion.',
      'Ensuring acoustic dampening in a high-reverberation check-in hall environment.',
      'Seamless alignment of integrated linear LED lighting luminaires between baffles.'
    ],
    solutions: [
      'Pre-assembled carrier tracks and baffle clips off-site to double on-site installation velocity.',
      'Incorporated internal sound-absorbing mineral wool cores within perforated baffle extrusions.',
      'Engineered dedicated lighting suspension channels independent of the ceiling grid.'
    ],
    gallery: [
      '/assets/images/lucknow-airport-1.jpeg',
      '/assets/images/lucknow-airport-2.jpeg',
      '/assets/images/WhatsApp Image 2026-05-11 at 10.01.14 PM (1).jpeg',
      '/assets/images/Delhi T1.jpeg',
      '/assets/images/WhatsApp Image 2026-05-11 at 10.01.19 PM.jpeg'
    ]
  },
  {
    id: 5,
    name: 'KIIT University',
    type: 'Educational Institution',
    category: 'Institutional',
    year: '2020',
    location: 'Bhubaneswar',
    scope: 'False Ceiling — 600×600 HDI Systems',
    area: '1000 sqm',
    image: '/assets/images/WhatsApp Image 2026-05-11 at 10.01.16 PM.jpeg',
    alt: 'KIIT University Bhubaneswar — HDI false ceiling systems.',
    description: 'Executed high-quality HDI false ceiling systems for KIIT University, delivering clean architectural finishing and durable execution across educational infrastructure spaces.',
    client: 'Kalinga Institute of Industrial Technology',
    architect: 'KIIT Project Engineering Cell',
    duration: '6 Months',
    challenges: [
      'Delivering high-durability ceiling tiles capable of withstanding humid tropical climates.',
      'Ensuring rapid maintenance access for overhead IT and laboratory networking cables.',
      'Meeting strict institutional budgetary constraints without compromising visual quality.'
    ],
    solutions: [
      'Installed moisture-resistant high-density lay-in ceiling panels with sealed edges.',
      'Implemented a fully demountable exposed T-grid suspension system for instant plenum access.',
      'Optimized tile cut-plans to reduce material wastage to under 3%.'
    ],
    gallery: [
      '/assets/images/WhatsApp Image 2026-05-11 at 10.01.16 PM.jpeg',
      '/assets/images/WhatsApp Image 2026-05-11 at 10.01.20 PM.jpeg',
      '/assets/images/WhatsApp Image 2026-05-11 at 10.01.22 PM.jpeg'
    ]
  },
  {
    id: 7,
    name: 'Babasaheb Ambedkar Bus Terminal',
    type: 'Public Infrastructure',
    category: 'Government',
    year: '2023',
    location: 'India',
    scope: 'Baffle Ceiling',
    area: '3000 sqm',
    image: '/assets/images/WhatsApp Image 2026-05-11 at 10.01.19 PM.jpeg',
    alt: 'Babasaheb Ambedkar Bus Terminal — large-scale baffle ceiling execution.',
    description: 'Executed high-scale public infrastructure ceiling systems enhancing passenger environment quality and architectural appeal.',
    client: 'State Transport Infrastructure Development Corp',
    architect: 'Urban Mass Transit Company (UMTC)',
    duration: '11 Months',
    challenges: [
      'Managing high ceiling heights (up to 14 meters) requiring heavy scaffolding and aerial lifts.',
      'Ensuring robust resistance against heavy vehicular exhaust fumes and particulate matter.',
      'Executing within a highly congested urban transit hub with restricted material laydown areas.'
    ],
    solutions: [
      'Deployed motorized mast-climbing work platforms for safe and rapid high-level ceiling installation.',
      'Installed wipe-clean polyester powder-coated baffle extrusions with anti-static properties.',
      'Coordinated just-in-time overnight material delivery schedules directly from off-site warehousing.'
    ],
    gallery: [
      '/assets/images/WhatsApp Image 2026-05-11 at 10.01.19 PM.jpeg',
      '/assets/images/WhatsApp Image 2026-05-11 at 10.01.20 PM.jpeg',
      '/assets/images/WhatsApp Image 2026-05-11 at 10.01.14 PM.jpeg'
    ]
  },
  {
    id: 8,
    name: 'DN Regalia Mall',
    type: 'Commercial',
    category: 'Commercial',
    year: '2023',
    location: 'Bhubaneswar',
    scope: 'Aluminium Facade Work & LED Lighting Facade',
    area: '1000 sqm',
    image: '/assets/images/dn-regalia-1.jpeg',
    alt: 'DN Regalia Mall Bhubaneswar — aluminium facade and LED lighting execution.',
    description: 'Modern aluminium facade execution with integrated LED lighting facade system for commercial infrastructure, creating contemporary architectural identity and dynamic visual appeal.',
    client: 'DN Homes Private Limited',
    architect: 'Innate Architectural Consultants',
    duration: '8 Months',
    challenges: [
      'Engineering exterior aluminium composite panel (ACP) cladding on complex multi-angled building elevations.',
      'Ensuring 100% weather-tightness against torrential monsoon rainfalls.',
      'Integrating dynamic exterior LED media facade lighting within the cladding joints.'
    ],
    solutions: [
      'Utilized 3D total-station surveying to generate precise fabrication drawings for each unique facade cassette.',
      'Implemented a dual-seal structural silicone glazing and flashing system for complete waterproofing.',
      'Designed custom recessed aluminium extrusion channels to securely house linear LED luminaires.'
    ],
    gallery: [
      '/assets/images/dn-regalia-1.jpeg',
      '/assets/images/dn-regalia-2.jpeg',
      '/assets/images/dn-regalia-3.jpeg',
      '/assets/images/dn-regalia-4.jpeg',
      '/assets/images/dn-regalia-5.jpeg',
      '/assets/images/WhatsApp Image 2026-05-11 at 10.01.20 PM.jpeg',
      '/assets/images/WhatsApp Image 2026-05-11 at 10.01.22 PM.jpeg',
      '/assets/images/WhatsApp Image 2026-05-11 at 10.01.16 PM.jpeg'
    ]
  },
  {
    id: 9,
    name: 'Nandankanan Zoological Park',
    type: 'Government Infrastructure',
    category: 'Government',
    year: '2023',
    location: 'Bhubaneswar',
    scope: 'Wall Cladding & Metal Ceiling',
    area: 'Large-scale',
    image: '/assets/images/nandankanan-1.jpeg',
    alt: 'Nandankanan Zoological Park Bhubaneswar — wall cladding and metal ceiling.',
    description: 'Specialized wall cladding and ceiling execution for public infrastructure spaces designed to ensure durability and modern visual appeal.',
    client: 'Forest & Environment Department, Govt of Odisha',
    architect: 'State Bureau of Architecture',
    duration: '9 Months',
    challenges: [
      'Executing construction activities within an eco-sensitive zoological reserve with strict noise limits.',
      'Delivering exterior cladding highly resistant to biological growth, moss, and extreme humidity.',
      'Creating seamless organic curved wall claddings to match the natural landscape design.'
    ],
    solutions: [
      'Mandated the use of low-decibel electric installation tools and restricted heavy machinery timing.',
      'Specified anti-microbial exterior-grade solid aluminium cladding panels with self-cleaning finishes.',
      'Roll-curved structural framing runners on CNC benders to achieve perfect architectural sweeps.'
    ],
    gallery: [
      '/assets/images/nandankanan-1.jpeg',
      '/assets/images/nandankanan-2.jpeg',
      '/assets/images/WhatsApp Image 2026-05-11 at 10.01.22 PM.jpeg',
      '/assets/images/WhatsApp Image 2026-05-11 at 10.01.19 PM.jpeg',
      '/assets/images/WhatsApp Image 2026-05-11 at 10.01.13 PM.jpeg'
    ]
  },
  {
    id: 10,
    name: 'Odisha Mining Corporation',
    type: 'Corporate Office',
    category: 'Commercial',
    year: '2022',
    location: 'Odisha',
    scope: 'Office & Interior Work',
    area: 'Corporate scale',
    image: '/assets/images/WhatsApp Image 2026-05-11 at 10.01.17 PM.jpeg',
    alt: 'Odisha Mining Corporation — premium office interior execution.',
    description: 'Premium office and interior infrastructure execution focused on functional corporate environments and refined interior finishing.',
    client: 'Odisha Mining Corporation Ltd (OMC)',
    architect: 'Kothari Associates',
    duration: '12 Months',
    challenges: [
      'Delivering executive boardroom acoustic ceilings and specialized timber-finish wall panelling.',
      'Integrating state-of-the-art AV (Audio-Visual) conferencing equipment seamlessly into walls and ceilings.',
      'Meeting aggressive corporate occupation deadlines with multi-agency site coordination.'
    ],
    solutions: [
      'Engineered micro-perforated composite acoustic panelling with an authentic natural walnut veneer finish.',
      'Built motorized concealed ceiling drop-down housings for projectors and teleconferencing monitors.',
      'Implemented daily micro-scheduling and dedicated site management teams to ensure timely completion.'
    ],
    gallery: [
      '/assets/images/WhatsApp Image 2026-05-11 at 10.01.17 PM.jpeg',
      '/assets/images/WhatsApp Image 2026-05-11 at 10.01.16 PM.jpeg'
    ]
  },
  {
    id: 11,
    name: 'Mission Shakti Café, Anandvan',
    type: 'Public Hospitality',
    category: 'Commercial',
    year: '2023',
    location: 'Odisha',
    scope: 'Interior & Exterior Work',
    area: 'Full execution',
    image: '/assets/images/WhatsApp Image 2026-05-11 at 10.01.16 PM.jpeg',
    alt: 'Mission Shakti Café Anandvan — complete interior and exterior execution.',
    description: 'Complete interior and exterior execution for a public hospitality initiative, blending functionality with welcoming architectural aesthetics.',
    client: 'Department of Mission Shakti, Govt of Odisha',
    architect: 'Bhubaneswar Development Authority (BDA) Design Cell',
    duration: '5 Months',
    challenges: [
      'Executing a highly aesthetic public café pavilion within an accelerated 5-month target.',
      'Ensuring high-durability interior finishes capable of handling intense daily public footfall.',
      'Integrating sustainable, locally sourced material themes with modern execution standards.'
    ],
    solutions: [
      'Utilized modular prefabricated steel framing and rapid lay-in ceiling systems to compress timelines.',
      'Installed heavy-duty commercial grade vitrified flooring and scrub-resistant wall cladding.',
      'Incorporated biophilic design elements with wood-look aluminium baffle ceilings.'
    ],
    gallery: [
      '/assets/images/WhatsApp Image 2026-05-11 at 10.01.16 PM.jpeg',
      '/assets/images/WhatsApp Image 2026-05-11 at 10.01.20 PM.jpeg',
      '/assets/images/WhatsApp Image 2026-05-11 at 10.01.22 PM.jpeg'
    ]
  },
  {
    id: 12,
    name: 'OPTCL / Tata Power / Power Grid',
    type: 'Power Sector',
    category: 'Government',
    year: '2021',
    location: 'Pan-India',
    scope: 'Civil Construction Works',
    area: 'Multiple sites',
    image: '/assets/images/WhatsApp Image 2026-05-11 at 10.01.22 PM.jpeg',
    alt: 'Civil infrastructure — OPTCL, Tata Power, Power Grid.',
    description: 'Executed civil infrastructure projects for major power and utility organizations with focus on reliability, structural quality, and execution efficiency.',
    client: 'OPTCL / Tata Power / PGCIL',
    architect: 'Central Power Engineering Utility',
    duration: '24 Months (Multi-stage)',
    challenges: [
      'Constructing heavy civil foundations and control room structures in remote, difficult-to-access terrain.',
      'Strict compliance with high-voltage electrical clearance safety regulations during construction.',
      'Ensuring absolute structural stability of control buildings housing critical grid infrastructure.'
    ],
    solutions: [
      'Established mobile on-site concrete batching plants to ensure continuous high-grade mix pouring.',
      'Mandated specialized high-voltage safety training and protective grounding protocols for all civil crews.',
      'Utilized high-strength reinforced concrete framing with specialized damp-proofing and seismic design.'
    ],
    gallery: [
      '/assets/images/WhatsApp Image 2026-05-11 at 10.01.22 PM.jpeg',
      '/assets/images/WhatsApp Image 2026-05-11 at 10.01.19 PM.jpeg',
      '/assets/images/WhatsApp Image 2026-05-11 at 10.01.13 PM.jpeg'
    ]
  },
  {
    id: 13,
    name: 'Tata Steel Jajpur',
    type: 'Industrial Infrastructure',
    category: 'Commercial',
    year: '2024',
    location: 'Jajpur, Odisha',
    scope: 'Industrial Infrastructure Execution',
    area: 'Industrial scale',
    image: '/assets/images/tata-steel-jajpur-1.jpeg',
    alt: 'Tata Steel Jajpur — industrial infrastructure execution.',
    description: 'Comprehensive infrastructure execution for Tata Steel manufacturing facility in Jajpur, delivering high-quality industrial construction solutions for one of India\'s leading steel manufacturers.',
    client: 'Tata Steel Limited',
    architect: 'Tata Consulting Engineers',
    duration: '18 Months',
    challenges: [
      'Executing infrastructure work within an active heavy industrial manufacturing environment with strict safety protocols.',
      'Managing coordination with multiple ongoing industrial processes and production schedules.',
      'Ensuring compliance with rigorous industrial safety standards and quality benchmarks.'
    ],
    solutions: [
      'Implemented dedicated safety management systems with real-time site monitoring and compliance tracking.',
      'Coordinated phased execution schedules to minimize disruption to ongoing manufacturing operations.',
      'Utilized industrial-grade materials and construction techniques designed for extreme operational environments.'
    ],
    gallery: [
      '/assets/images/tata-steel-jajpur-1.jpeg',
      '/assets/images/tata-steel-jajpur-2.jpeg',
      '/assets/images/tata-steel-jajpur-3.jpeg'
    ]
  },
  {
    id: 14,
    name: 'Prameya',
    type: 'Commercial Infrastructure',
    category: 'Commercial',
    year: '2024',
    location: 'Bhubaneswar, Odisha',
    scope: 'Complete Commercial Execution',
    area: 'Large-scale commercial',
    image: '/assets/images/resort-trisulia-1.jpeg',
    alt: 'Prameya Bhubaneswar — complete commercial infrastructure execution.',
    description: 'Comprehensive commercial infrastructure execution for Prameya in Bhubaneswar, delivering premium architectural finishes, modern interiors, and complete civil and finishing works.',
    client: 'Prameya Development Group',
    architect: 'Commercial Design Associates',
    duration: '18 Months',
    challenges: [
      'Creating modern commercial infrastructure with seamless integration of functional spaces and aesthetic design.',
      'Executing multi-phase construction with complex site coordination and logistics management.',
      'Ensuring high-quality architectural finishes and interior detailing meeting contemporary commercial standards.'
    ],
    solutions: [
      'Implemented phased execution approach coordinating civil, interior, and finishing works simultaneously.',
      'Utilized premium materials and specialized commercial-grade finishes for durability and visual appeal.',
      'Established dedicated quality control protocols ensuring consistency across all commercial spaces.'
    ],
    gallery: [
      '/assets/images/resort-trisulia-1.jpeg',
      '/assets/images/resort-trisulia-2.jpeg',
      '/assets/images/resort-trisulia-3.jpeg',
      '/assets/images/resort-trisulia-4.jpeg',
      '/assets/images/resort-trisulia-5.jpeg',
      '/assets/images/resort-trisulia-6.jpeg'
    ]
  },
  {
    id: 15,
    name: 'SUM Ultimate',
    type: 'Educational & Sports Infrastructure',
    category: 'Institutional',
    year: '2023',
    location: 'Bhubaneswar, Odisha',
    scope: 'Interior & Ceiling Execution',
    area: 'Large-scale institutional',
    image: '/assets/images/sum-ultimate-1.jpeg',
    alt: 'SUM Ultimate Bhubaneswar — educational and sports infrastructure execution.',
    description: 'Premium infrastructure execution for SUM Ultimate in Bhubaneswar, delivering high-quality ceiling systems, interior finishes, and architectural solutions for educational and sports facilities.',
    client: 'Siksha O Anusandhan (SOA) University',
    architect: 'SOA Design & Planning Cell',
    duration: '12 Months',
    challenges: [
      'Executing large-scale ceiling and interior works across educational and sports facility spaces.',
      'Ensuring acoustic optimization for multi-purpose auditorium and sports arena environments.',
      'Coordinating construction schedules to minimize disruption to ongoing academic activities.'
    ],
    solutions: [
      'Implemented specialized acoustic ceiling panels with sound-dampening properties for optimal audio performance.',
      'Utilized rapid-installation modular ceiling systems to accelerate project timelines.',
      'Coordinated night and weekend execution shifts to ensure zero academic schedule interference.'
    ],
    gallery: [
      '/assets/images/sum-ultimate-1.jpeg',
      '/assets/images/WhatsApp Image 2026-05-18 at 11.15.24 PM.jpeg',
      '/assets/images/WhatsApp Image 2026-05-18 at 11.15.24 PM (1).jpeg'
    ]
  },
  {
    id: 16,
    name: 'Navi Mumbai Airport',
    type: 'Airport Infrastructure',
    category: 'Government',
    year: '2023',
    location: 'Navi Mumbai, Maharashtra',
    scope: 'Airport Ceiling & Infrastructure',
    area: 'Large-scale airport',
    image: '/assets/images/navi-mumbai-1.jpeg',
    alt: 'Navi Mumbai Airport — large-scale airport infrastructure execution.',
    description: 'Major airport infrastructure execution for Navi Mumbai International Airport, delivering comprehensive ceiling systems, architectural finishes, and infrastructure solutions for modern aviation facilities.',
    client: 'CIDCO / GVK-Airports Authority of India',
    architect: 'International Airport Design Consortium',
    duration: '16 Months',
    challenges: [
      'Executing large-scale airport infrastructure within strict aviation safety and quality compliance standards.',
      'Managing complex coordination across multiple terminal zones with overlapping construction activities.',
      'Ensuring fire-rated, acoustic, and seismic-compliant ceiling installations for critical airport spaces.'
    ],
    solutions: [
      'Deployed specialized aviation-grade ceiling systems meeting international fire safety and acoustic standards.',
      'Implemented phased zone-wise execution to maintain construction flow across terminal areas.',
      'Utilized precision laser-guided installation for seamless alignment across expansive concourse ceilings.'
    ],
    gallery: [
      '/assets/images/navi-mumbai-1.jpeg',
      '/assets/images/navi-mumbai-2.jpeg',
      '/assets/images/WhatsApp Image 2026-05-19 at 11.49.46 PM.jpeg',
      '/assets/images/WhatsApp Image 2026-05-19 at 11.49.45 PM (1).jpeg'
    ]
  },
  {
    id: 17,
    name: 'Lokpriya Gopinath Bordoloi International Airport',
    type: 'Airport Infrastructure',
    category: 'Government',
    year: '2023',
    location: 'Guwahati, Assam',
    scope: 'Airport Ceiling & Infrastructure Systems',
    area: 'Large-scale airport terminal',
    image: '/assets/images/guwahati-airport-1.jpeg',
    alt: 'Guwahati Airport — airport infrastructure and ceiling systems execution.',
    description: 'Comprehensive airport infrastructure execution for Guwahati International Airport, delivering premium ceiling systems, architectural finishes, and modern terminal infrastructure solutions.',
    client: 'Airports Authority of India (AAI)',
    architect: 'AAI Design & Planning Cell',
    duration: '14 Months',
    challenges: [
      'Executing terminal expansion works while maintaining continuous airport operations without passenger disruption.',
      'Installing specialized ceiling systems meeting stringent aviation fire safety and acoustic performance standards.',
      'Managing monsoon-season construction challenges in high-humidity northeastern climate conditions.'
    ],
    solutions: [
      'Coordinated night-shift execution schedules to ensure zero operational interference during peak passenger hours.',
      'Utilized weather-resistant moisture-proof ceiling panels and corrosion-resistant suspension systems.',
      'Implemented modular pre-assembled ceiling components for rapid installation and minimal on-site time.'
    ],
    gallery: [
      '/assets/images/guwahati-airport-1.jpeg',
      '/assets/images/guwahati-airport-2.jpeg',
      '/assets/images/WhatsApp Image 2026-05-19 at 11.49.45 PM.jpeg'
    ]
  },
  {
    id: 18,
    name: 'SUM Hospital',
    type: 'Healthcare Infrastructure',
    category: 'Institutional',
    year: '2024',
    location: 'Phulnakhra, Odisha',
    scope: 'Hospital Ceiling & Interior Systems',
    area: 'Large-scale healthcare facility',
    image: '/assets/images/sum-hospital-1.jpeg',
    alt: 'SUM Hospital Phulnakhra — healthcare infrastructure and ceiling systems execution.',
    description: 'Comprehensive healthcare infrastructure execution for SUM Hospital in Phulnakhra, delivering specialized hospital-grade ceiling systems, hygienic finishes, and complete interior solutions designed for modern medical facilities.',
    client: 'Siksha O Anusandhan (SOA) University - IMS & SUM Hospital',
    architect: 'Healthcare Design Consultants',
    duration: '15 Months',
    challenges: [
      'Executing hospital-grade infrastructure meeting stringent healthcare hygiene and infection control standards.',
      'Installing specialized cleanroom-compatible ceiling systems in critical care and operation theater zones.',
      'Coordinating construction in a partially operational hospital environment without disrupting patient care.'
    ],
    solutions: [
      'Implemented medical-grade antimicrobial ceiling panels with seamless washable surfaces for infection control.',
      'Utilized modular lay-in ceiling systems allowing easy maintenance access to critical MEP infrastructure.',
      'Coordinated phased wing-wise execution to isolate construction zones from operational patient care areas.'
    ],
    gallery: [
      '/assets/images/sum-hospital-1.jpeg',
      '/assets/images/sum-hospital-2.jpeg',
      '/assets/images/sum-hospital-3.jpeg',
      '/assets/images/sum-hospital-4.jpeg'
    ]
  },
  {
    id: 19,
    name: 'Trimetro Garments',
    type: 'Industrial Commercial',
    category: 'Commercial',
    year: '2024',
    location: 'Khurda, Odisha',
    scope: 'Industrial Facade & Ceiling Execution',
    area: 'Industrial facility',
    image: '/assets/images/trimetro-garments-1.jpeg',
    alt: 'Trimetro Garments Khurda — industrial facade and ceiling execution.',
    description: 'Complete industrial infrastructure execution for Trimetro Garments manufacturing facility in Khurda, delivering robust facade systems, ceiling solutions, and architectural finishes designed for industrial operations.',
    client: 'Trimetro Garments Private Limited',
    architect: 'Industrial Design Associates',
    duration: '10 Months',
    challenges: [
      'Executing industrial-grade facade and ceiling systems meeting factory operational requirements.',
      'Ensuring proper ventilation integration and thermal comfort in manufacturing floor spaces.',
      'Coordinating construction alongside active garment production operations.'
    ],
    solutions: [
      'Installed industrial-grade metal facade panels with thermal insulation for climate control.',
      'Utilized high-bay ceiling systems optimized for factory lighting and HVAC distribution.',
      'Implemented phased execution schedules to minimize disruption to production lines.'
    ],
    gallery: [
      '/assets/images/trimetro-garments-1.jpeg',
      '/assets/images/trimetro-garments-2.jpeg'
    ]
  },
  {
    id: 20,
    name: 'Hunter Douglas 84R Facade System',
    type: 'Premium Facade Installation',
    category: 'Commercial',
    year: '2024',
    location: 'Pan-India',
    scope: 'Hunter Douglas 84R Facade Execution',
    area: 'Commercial facade',
    image: '/assets/images/hunterdouglas-84r-1.jpeg',
    alt: 'Hunter Douglas 84R Facade System — premium architectural facade execution.',
    description: 'Specialized installation of Hunter Douglas 84R premium facade system, showcasing exclusive expertise as the only authorized Hunter Douglas dealer and installer in India for high-performance architectural facade solutions.',
    client: 'Various Commercial Clients',
    architect: 'Hunter Douglas Architectural - India',
    duration: 'Ongoing Projects',
    challenges: [
      'Installing precision-engineered Hunter Douglas 84R facade systems requiring specialized technical expertise.',
      'Ensuring perfect alignment and weather-sealing for premium architectural facade performance.',
      'Maintaining Hunter Douglas global quality standards for Indian climate conditions.'
    ],
    solutions: [
      'Certified installation teams trained directly by Hunter Douglas technical specialists.',
      'Utilized specialized Hunter Douglas installation tools and proprietary mounting systems.',
      'Implemented rigorous quality control protocols meeting international Hunter Douglas standards.'
    ],
    gallery: [
      '/assets/images/hunterdouglas-84r-1.jpeg'
    ]
  },
  {
    id: 21,
    name: 'Hotel Angul',
    type: 'Hospitality Facade',
    category: 'Commercial',
    year: '2024',
    location: 'Angul, Odisha',
    scope: 'Architectural Facade Execution',
    area: 'Hotel facade',
    image: '/assets/images/hotel-angul-1.jpeg',
    alt: 'Hotel Angul — architectural facade execution.',
    description: 'Premium architectural facade execution for hotel infrastructure in Angul, delivering modern exterior cladding, weather-resistant finishes, and contemporary aesthetic design for hospitality environments.',
    client: 'Private Hospitality Group',
    architect: 'Hospitality Design Consultants',
    duration: '8 Months',
    challenges: [
      'Creating visually striking hotel facade that stands out in the commercial district of Angul.',
      'Ensuring weather-resistant facade systems capable of withstanding extreme Odisha climate conditions.',
      'Coordinating facade installation with ongoing hotel interior fit-out activities.'
    ],
    solutions: [
      'Installed premium aluminium composite panel (ACP) facade with contemporary design patterns.',
      'Utilized weather-resistant structural silicone glazing ensuring long-term durability.',
      'Implemented phased zone-wise execution coordinating with interior construction schedules.'
    ],
    gallery: [
      '/assets/images/hotel-angul-1.jpeg',
      '/assets/images/hotel-angul-2.jpeg'
    ]
  }
];
