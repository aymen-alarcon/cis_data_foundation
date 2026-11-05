const RAW = [
  [
    116,
    "IRE Identification Rules",
    "A CMDB Administrator opens CI Class Manager and sees the Health Inclusion Rules tab under a CI Class. How are these rules utilized by the IRE?",
    [
      "To narrow the scope of CIs included in the identification process",
      "To reduce the data ingested into the CMDB",
      "To reconcile specific attributes based on data sources"
    ],
    [
      0
    ],
    "Correct choice: A (To narrow the scope of CIs included in the identification process). Question wording is technically misleading: Health Inclusion Rules control the scope of CMDB Health metric evaluations, not IRE identification or reconciliation. None of these options accurately describes their actual function; A is only the closest in wording. Treat this question as flawed."
  ],
  [
    3,
    "Health Dashboard — Correctness",
    "A CMDB Administrator would like to minimize stale Cls in the CMDB. Which CMDB Health Dashboard scorecard displays this information?",
    [
      "Completeness",
      "Correctness",
      "Compliance"
    ],
    [
      1
    ],
    "Correctness measures whether CI records remain trustworthy, including whether they are stale. A stale CI has not been refreshed within the configured period, so this scorecard highlights records that may no longer reflect reality."
  ],
  [
    4,
    "CMDB Structure — Classes",
    "An organization needs to maintain non-discoverable attributes, such as warranty expiration dates, for hardware Cls. These attributes are not updated by automated discovery tools. What method ensures these attributes are accurately maintained for all Cls?",
    [
      "Use a scheduled data import to update the attributes from an external source",
      "Create a new Cl class specifically for non-discoverable attributes",
      "Use the CMDB Reconciliation Engine to update the attributes"
    ],
    [
      1
    ],
    "The supplied key selects a new CI class, but that does not by itself keep warranty dates accurate: classes define types of CIs, not the process that updates their attributes. A scheduled import from a trusted warranty or asset system would normally maintain those non-discoverable values. This question/key needs verification."
  ],
  [
    5,
    "Data Manager — Policy Types",
    "A Configuration Manager needs to enable a CMDB Data Manager policy to remove records from a Cl Class while retaining the ability to restore them within a specified period. Which policy type should the Configuration Manager create?",
    [
      "Certification",
      "Delete",
      "Retire",
      "Archive"
    ],
    [
      3
    ],
    "Archive is appropriate because it moves eligible older CI records out of the active dataset while retaining them for a defined retention or recovery period. Delete is intended for permanent removal, while Retire changes lifecycle state without archiving the record."
  ],
  [
    6,
    "De-duplication",
    "A CMDB Administrator is asked to clean up CMDB duplicates. What is the preferred way to manage this task?",
    [
      "My Tasks in the Application Navigator",
      "The de-duplication task module",
      "The de-duplication dashboard on the CMDB Workspace"
    ],
    [
      1
    ],
    "The de-duplication task module lists records identified as potential duplicates and provides a workflow to review and resolve them. Working from these tasks lets an administrator choose a main CI and preserve important attributes and relationships rather than deleting lookalike records blindly."
  ],
  [
    7,
    "CSDM — Domains & Structure",
    "A Business Relationship Manager in an organization wants to implement Service Portfolio Management (SPM) and to present offerings to business consumers. Which CSDM Domain does this align with?",
    [
      "Build and Integration (Build)",
      "Service Consumption (Sell/Consume)",
      "Design and Planning (Design)",
      "Service Delivery"
    ],
    [
      2
    ],
    "The supplied key says Design and Planning, but offerings published for business consumers are modeled in Service Consumption (Sell/Consume). Design and Planning focuses on business applications and capabilities, not the catalog-facing consumption of services. The saved key appears inconsistent with the question."
  ],
  [
    8,
    "CMDB Workspace",
    "A Service Owner needs to view related items, such as Active Incidents and Planned Changes, directly ‘on the home node of the Unified Map. Which work area would allow the Service Owner to meet this goal?",
    [
      "Tool box",
      "Map",
      "Contextual side panel",
      "Content controls"
    ],
    [
      2
    ],
    "The contextual side panel shows information associated with the selected map node, such as active incidents and planned changes. It lets the service owner inspect operational records without leaving the Unified Map; the map canvas itself primarily displays relationships."
  ],
  [
    9,
    "Data Manager —Policy Types",
    "Which are CMDB Data Manager end of life policy types? (Choose 2 options)",
    [
      "Retire",
      "Lost",
      "Decommission",
      "Disposed",
      "Archive"
    ],
    [
      0,
      4
    ],
    "Retire is an end-of-life policy because it changes a CI to a retired lifecycle state when it is no longer in use. Archive is also an end-of-life policy because it moves eligible retired records out of the active CMDB while retaining them according to policy."
  ],
  [
    10,
    "CMDB Data Foundations Dashboard",
    "A CMDB Administrator wants to leverage the CMDB Data Foundations Dashboard. What are benefits of using this application? (Choose 2 options)",
    [
      "Has a framework to create custom metrics for the CMDB",
      "Checks that important data is valid and properly configured",
      "Provides playbooks to assist in the remediation of potential risks",
      "_ Uses automation to remediate potential risks"
    ],
    [
      0,
      2
    ],
    "The dashboard provides measurements that help administrators identify departures from recommended CMDB practices; its playbooks then explain the risk and give guided remediation steps. The saved key also selects a custom-metric framework, but that capability should be checked against the dashboard version rather than assumed."
  ],
  [
    11,
    ", Data Manager — Policy Types",
    "CMDB Configuration Manager intends to implement CMDB Data Manager delete and archive policies for all server records in the New York datacenter. In which lifecycle state would servers be affected by these new policies?",
    [
      "End of Life - Retired",
      "Missing - Stolen",
      "Inventory - Available",
      "_ Inany lifecycle state"
    ],
    [
      1
    ],
    "The saved answer, Missing - Stolen, conflicts with the usual baseline Archive/Delete policy prerequisites: these policies generally target retired/end-of-life CIs. A stolen/missing asset status is not automatically equivalent to an eligible retired CI. Verify this key before using it to grade."
  ],
  [
    12,
    "Usage",
    "A Configuration Manager wants to explore ServiceNow CMDB 360 saved queries to see if the reports can assist with managing of CMDB data. What insights are gained from CMDB 360 queries? (Choose 2 options)",
    [
      "Unique Cls created from different data sources",
      "Gaps in attribute data from different data sources",
      "_ Different attribute values from different data sources",
      "Orphan Cls created from different data sources",
      "Duplicate configuration items from different data sources"
    ],
    [
      0,
      2
    ],
    "CMDB 360 keeps source-specific reports for CI data processed through IRE. It can show which sources contributed a CI and expose different values those sources reported for the same attribute, helping the administrator identify disagreements rather than treating the current CMDB value as the whole story."
  ],
  [
    13,
    "De-duplication",
    "Where in CMDB Workspace can the team find de-duplication tasks generated by the IRE?",
    [
      "Total status tile under My Work",
      "CMDB feature adoption tile under Insights",
      "Important actions tile under Home"
    ],
    [
      2
    ],
    "The Important actions tile on the CMDB Workspace Home page surfaces remediation work requiring attention, including de-duplication tasks. Selecting the task takes the team into the duplicate-resolution workflow instead of merely viewing a health metric."
  ],
  [
    14,
    "CMDB Structure — Classes",
    "An organization needs to maintain non-discoverable attributes, such as warranty expiration dates, for hardware Cls. These attributes are not updated by automated discovery tools. What method ensures these attributes are accurately maintained for all Cls?",
    [
      "Use a scheduled data import to update the attributes from an external source",
      "Create a new Cl class specifically for non-discoverable attributes",
      "Use the CMDB Reconciliation Engine to update the attributes"
    ],
    [
      1
    ],
    "The saved key proposes creating a new CI class, but a class alone cannot keep warranty expiration dates current. Non-discoverable values generally require a maintained authoritative source, an import, or a defined manual stewardship process. A scheduled trusted import is more directly aligned with the stated goal; verify the key."
  ],
  [
    15,
    "CSDM — Domains & Structure",
    "‘A Manager needs information on how to correctly establish relationships between Infrastructure Cls, Technology Management Offerings (Technical Service Offerings), and Application Services within the CMDB. Which CSDM domain would provide this information? ‘A. Build and Integration (Build)",
    [
      "Foundation . Design and Planning (Design)",
      "Service Consumption (Sell / Consume)",
      "Service Delivery (Manage Technical Services)"
    ],
    [
      1
    ],
    "The saved key selects Service Consumption, but the question asks about relationships among infrastructure CIs, technical offerings and application services, which belong to technical service modeling in Service Delivery. Service Consumption describes what business consumers request or receive. The key needs verification."
  ],
  [
    17,
    "CMDB Data Foundations Dashboard",
    "A CMDB Administrator uses the CMDB Data Foundations Dashboard to gain insights into the CMDB. The results display low scores for several metrics. Which actions can the CMDB Administrator take to improve the CMDB Health? (Choose 2 options)",
    [
      "Use the Remediation Playbooks linked beside each metric |",
      "Focus on metric(s) with Critical and High priorities | Remove non-operational and retired Cls i",
      "Adjust the metrics using exclusion rules to improve the scores XV X Mauvaise réponse. Correct : A. Use the Remediation Playbooks linked beside each metric, B. Focus on metric(s) with Critical and High priorities"
    ],
    [
      1
    ],
    "Remediation playbooks are useful because they connect a weak dashboard metric to concrete investigation and correction steps. Prioritizing Critical and High metrics addresses the greatest data-quality risk first, rather than hiding problems through exclusions or removing records without investigation."
  ],
  [
    18,
    "Ingestion — SGC",
    "AMDB Administrator needs the fastest time to value solution for effectively ingesting, managing, and maintaining Cls and relationships. Which management tool will accomplish this to import Windows computer data from SCCM?",
    [
      "Import set using JDBC data source connection to SCCM using transform maps",
      "SCCM Usage Metering Spoke",
      "SCCM Service Graph Connector",
      "IntegrationHub ETL connection to SCCM using Robust Transform Engine (RTE)"
    ],
    [
      1
    ],
    "The saved key selects SCCM Usage Metering Spoke, but the SCCM Service Graph Connector is the purpose-built integration for bringing SCCM computer CIs and relationships into the CMDB with supported mappings. Usage metering is not a replacement for the connector. Verify the key."
  ],
  [
    19,
    "Cl Class Manager — Principal Classes",
    "An organization is updating the CMDB to include new asset types like loT devices. Relevant Cl classes need to be added and outdated ones need to be removed from the Principal Class filter to ensure accurate display in ITSM processes. Which roles are needed to add or remove classes? (Choose 2 options) ‘A. cmdb_query_builder",
    [
      "_ personalize dictionary",
      "sn_csdm_admin",
      "sn_cmdb_admin"
    ],
    [
      0,
      2
    ],
    "Managing the Principal Class designation requires CMDB administration permissions to change class settings and dictionary personalization rights for the underlying class metadata. The two selected permissions enable these distinct responsibilities."
  ],
  [
    20,
    "Data Manager — Cert vs Attest",
    "A Configuration Management team wants to confirm that all servers in the CMDB are correctly associated with their location. Which CMDB Data Manager policy type does the team create?",
    [
      "Retire",
      "Delete",
      "Attestation",
      "Certification",
      "Archive"
    ],
    [
      1
    ],
    "The saved key selects Delete, but the scenario asks staff to verify the accuracy of a CI field (Location). A Certification policy creates field-validation tasks; Delete would remove records rather than confirm their locations. The saved key needs correction or verification."
  ],
  [
    21,
    "IRE Dynamic Reconciliation",
    "The Server class uses lowest Disk Space, while Windows Server uses most reported. Tivoli 75 GB, ServiceNow 75 GB, LANDesk 50 GB, Altiris 80 GB. Which value is used for Windows Server?",
    [
      "80 GB",
      "75 GB",
      "50 GB"
    ],
    [
      1
    ],
    "Windows Server has its own dynamic rule, Most Reported, which is more specific than the Server parent rule, Lowest Value. Two sources report 75 GB, more than any other value, so 75 GB wins even though 50 GB is the smallest reported value."
  ],
  [
    22,
    "CMDB Structure —Asset-Cl",
    "An Asset Manager wants to ensure that Asset records and Cl records are kept synchronized automatically. How does the Manager do this? (Choose 2 options)",
    [
      "Ensure one-to-one physical mapping between Asset and Cl",
      "Ensure that the business rule to update Asset fields on change on the CI table is active",
      "Ensure that scheduled jobs are run during off-business hours to ensure that sync happens",
      "Ensure that the business rule to update Cl fields on change on the asset table is active"
    ],
    [
      1,
      3
    ],
    "The CI-to-Asset business rule copies relevant changes from the CI record to its linked asset, and the Asset-to-CI rule performs the reverse synchronization. Both directions are needed because staff may update either record; a scheduled job alone does not provide the same event-driven field synchronization."
  ],
  [
    23,
    "Governance & Business Value",
    "A retail organization needs to ensure that incidents affecting customer-facing services are resolved quickly to reduce potential revenue loss. Which CSDM attribute is used to prioritize these services?",
    [
      "Assignment Group on the Cl record",
      "Affected Cls in the Incident record",
      "Service classification in the Technical Service",
      "Business Criticality in the Service Offering"
    ],
    [
      3
    ],
    "Business Criticality on a Service Offering expresses how important that consumer-facing service is to the business. Incident teams can use it to prioritize disruption to revenue-critical services; an assignment group identifies responders, not business impact."
  ],
  [
    24,
    "CMDB Structure — Asset-Cl",
    "User endpoint devices are imported into the CMDB and populate the ‘Assigned to’ [assigned_to] field on the Computer [cmdb_ci_computer] Cl. The Asset team puts in a request for the Configuration Analysts to populate the ‘Assigned to’ field on the related Asset. What action does a Configuration Analyst take to achieve this in an automated way?",
    [
      "Use the Asset-Cl Field Mapping module to create a new rule to replicate the ‘Assigned to! value between the asset and associated Cl",
      "Configure a business rule on the computer table to use a script to populate the ‘Assigned to! field on the asset based on insert or update in the computer class ‘Assigned to’ field",
      "Hide the ‘Assigned to’ field on the asset record and create a new field that dot walks to the related Cl to get the ‘Assigned to' value"
    ],
    [
      0
    ],
    "Asset-CI Field Mapping defines which field on the CI should synchronize with which field on the linked Asset. Adding a mapping for Assigned to uses the platform synchronization mechanism instead of creating custom scripts or merely displaying a dot-walked value."
  ],
  [
    25,
    "ITSM Mapping",
    "The Change Management team in an organization wants to implement a Change across multiple Cls at the same time. Which field on the Change Request form needs to be populated with a dynamic Cl group?",
    [
      "Configuration item",
      "Business Service",
      "Service Offering"
    ],
    [
      0
    ],
    "The Configuration item field on the Change Request can reference a dynamic CI group so the change targets the relevant collection of CIs. Business Service and Service Offering describe services, not the dynamic CI selection used for this request."
  ],
  [
    26,
    "CSDM — Information Objects",
    "A company wants to track regulatory compliance. ServiceNow has an artifact type called an information object as part of the CSDM framework. What is the purpose of an information object?",
    [
      "Itdescribes data in general on a group of Configuration Items.",
      "It describes the logical data to the Business Applications.",
      "_ Itdescribes data exchanged between an API interface and an Application."
    ],
    [
      1
    ],
    "An Information Object represents a logical category of business information, such as customer or regulated patient data, and can be related to Business Applications that use it. It describes the information independently of a particular database, API payload or server."
  ],
  [
    27,
    "CMDB Workspace",
    "Where can an administrator perform Natural Language Queries (NLQ)?",
    [
      "CMDB Data Manager",
      "Cl Class Manager",
      "CMDB Workspace",
      "CMDB Health Dashboard"
    ],
    [
      2
    ],
    "CMDB Workspace provides the user-facing query experience, including Natural Language Queries for finding CI information without building every condition manually. Data Manager handles lifecycle policies, while CI Class Manager defines classes and rules."
  ],
  [
    28,
    "IRE — Identification Rules",
    "The following identification rule for a Cl class has been defined: + Serial Number | criterion attributes: serialnumber, serial_number_type | Priority: 100 + Hardware | criterion attributes: serial_number | Priority: 200 + Hardware | criterion attributes: name | Priority: 300 + Network Adapter | criterion attributes: mac_address, name | Priority: 400 Two new Cl records are imported into the hardware class of the CMDB: Cl1: The name of this Cl record matches the name of an existing Cl record in the CMDB. Cl2: The IP address of this Cl record matches the IP address of an existing Cl record in the CMDB. Which is correct based on the identification rule and the imported Cl records?",
    [
      "Cl and Cl2 both will be updated with matching records",
      "C1 will be updated with matching record and C12 will be inserted as new record",
      "C11 will be inserted as new record and Cl2 will be updated with matching record",
      "Cl1 and Cl2 both will be inserted as new records"
    ],
    [
      1
    ],
    "CI1 matches an existing CI by Name because Name is an explicitly configured Hardware identification criterion, so IRE can update the match. CI2 only shares an IP address, which is not listed in the supplied identifier entries, so IRE cannot identify it by IP alone and inserts a new record."
  ],
  [
    30,
    "CSDM Data Foundations Dashboard",
    "A Configuration Manager is implementing end to end service modeling and wants to get help on status and playbooks for improving the quality. What does the Configuration Manager reference to obtain guidance?",
    [
      "CMDB Data Foundation Dashboard",
      "CMDB Workspace cc. CSDM Data Foundation Dashboard",
      "_ Service Mapping Data Foundation Dashboard"
    ],
    [
      2
    ],
    "The CSDM Data Foundations Dashboard checks how service-model data aligns with CSDM guidance and provides playbooks for improving it. The CMDB Data Foundations Dashboard focuses on broader CMDB foundation metrics, not the full CSDM service-modeling maturity view."
  ],
  [
    31,
    "CSDM—ITSM Mapping",
    "The Incident Process Owner asks which classes of CSDM are used on the Incident form. Which classes are appropriate? (Choose 2 options)",
    [
      "Business Application",
      "Service Offering",
      "Application Service",
      "Service Portfolio"
    ],
    [
      1,
      2
    ],
    "Service Offering identifies the service a user consumes and its agreed support context, while Application Service represents the deployed application supporting the incident. Both help connect the incident to service impact; Business Application is a design-time portfolio record."
  ],
  [
    32,
    "IRE— Identification Rules",
    "A CMDB Administrator needs to configure a new application identification rule that considers the potential for the same application installed more than once on the same server. Which is the best choice of a criterion attribute?",
    [
      "Configuration File Name",
      "Configuration File Path",
      "Class",
      "Version",
      "Port"
    ],
    [
      1
    ],
    "Configuration File Path can distinguish two installations of the same application on one server because each installation may have its own directory. Application class or version could be identical for both, and a filename alone might repeat in different directories."
  ],
  [
    33,
    "CMDB 360 — Usage",
    "Where can a CMDB 360/Multisource CMDB Saved Query be viewed and created in the CMDB Workspace?",
    [
      "CMDB Query Builder",
      "Coverage window on the CMDB 360 tab",
      "Saved queries window on the CMDB 360 tab",
      "Saved queries window on the Insights tab"
    ],
    [
      2
    ],
    "The CMDB 360 tab in CMDB Workspace includes a Saved queries area where multisource queries are created and reopened. These queries compare values and coverage from different reporting sources; the standard CMDB Query Builder addresses CI relationships instead."
  ],
  [
    34,
    "CI Class Manager",
    "Which feature streamlines frequent management of the Windows Server class?",
    [
      "Search CI Classes",
      "Pinned Classes",
      "CI Favorites"
    ],
    [
      1
    ],
    "Pinned Classes lets an administrator keep frequently managed classes, such as Windows Server, readily accessible in CI Class Manager. This avoids repeating navigation or searches each time they need to edit attributes or class rules."
  ],
  [
    35,
    "CSDM — Life Cycle Tables",
    "A Configuration Management Governance team is transitioning from utilizing legacy CMDB status fields to CSDM life cycle status fields. Which table can be modified?",
    [
      "Life Cycle Stages [life_cycle_stage]",
      "Life Cycle Controls [life cycle control]",
      "Life Cycle Stage Status [life_cycle_stage_status]",
      "Life Cycle Mapping [life_cycle_mapping]"
    ],
    [
      3
    ],
    "Life Cycle Mapping links legacy status values to the corresponding CSDM Life Cycle Stage and Stage Status values. Adjusting mappings preserves a consistent translation during migration without redefining the standard lifecycle vocabulary itself."
  ],
  [
    36,
    "IRE— Imports",
    "AMDB Administrator needs to prevent duplicate Cl creation from import sets that load data into the CMDB from vendor shipment files containing Cl information. How can the Administrator do this?",
    [
      "Create comparison rules in the IRE",
      "Use the CMDBTransformUtil API in the transform script",
      "Set the system property to utilize the IRE within transform maps",
      "Set the coalesce on two mappings within the transform map"
    ],
    [
      1
    ],
    "CMDBTransformUtil is called from a transform-map script to submit incoming rows to IRE. IRE applies identification and reconciliation rules, helping avoid duplicate CIs and unauthorized attribute overwrites that direct inserts could cause."
  ],
  [
    37,
    "CMDB Health",
    "Which submetric belongs to the Completeness KPI?",
    [
      "Required",
      "Audit",
      "Orphan"
    ],
    [
      0
    ],
    "The Required submetric measures whether mandatory or required CI fields have values, so it contributes to Completeness. Audit measures conformity to expected values, while Orphan concerns missing relationships and belongs to Correctness."
  ],
  [
    38,
    "CMDB Relationships",
    "How can Support Group be automatically populated and maintained on a CI record?",
    [
      "Dynamic CI Group",
      "Technology Management Service",
      "CI Class Manager",
      "Technology Management Service Offering"
    ],
    [
      3
    ],
    "A Technology Management Service Offering can specify the operational Support Group for the CIs associated through its dynamic CI group. This supplies a consistent support owner across the group rather than manually editing each CI."
  ],
  [
    39,
    "CMDB 360 — Activation",
    "A CMDB Administrator needs to set up CMDB 360/Multisource CMDB. System properties: + glide.identification_engine.multisource_enabled — Enables CMDB 360 + glide.identification_engine.multisource_cmdb_ci_enabled ~ Enables capturing CMDB 360 data for Cs from CMDB classes + glide.cmdb logger.source.cmdb_multisource — Enables logging for CMDB 360 + glide.identification_engine.multisource.recompute.max.ci.limit + Maximum number of Cls in CMDB 360 recompute operation Which property ‘Enables CMDB 360'?",
    [
      "glide.identification_engine.multisource_enabled",
      "_ glide.identification_engine.multisource_cmdb_ci_enabled",
      "glide.cmdb.logger.source.cmdb_multisource",
      "_glide.identification_engine.multisource.recompute.max.ci.limit"
    ],
    [
      0
    ],
    "The multisource_enabled property is the main switch that turns on CMDB 360/Multisource functionality. The other properties shown concern narrower capture, logging or recomputation settings, so they do not replace the main enablement switch."
  ],
  [
    40,
    "Data Manager — Config",
    "Where does a user with the appropriate role(s) review and manage the generated tasks after configuring CMDB Data Manager policies?",
    [
      "CMDB Health Dashboard > Duplicate Cls tab",
      "CMDB Workspace > My Work tab",
      "CMDB Workspace > Management tab",
      "CMDB Health Dashboard > Audit tab"
    ],
    [
      1
    ],
    "Data Manager creates policy tasks for the responsible users or groups. The My Work tab in CMDB Workspace is where assignees review and complete those tasks; the Management area is used for configuring and administering policies."
  ],
  [
    41,
    "IRE— Identification Rules",
    "A global enterprise integrates data from multiple discovery sources such as ServiceNow Discovery, SCCM, AWS, and manual uploads to populate its CMDB. However, each discovery source categorizes the same Cls differently, leading to duplicate records and inconsistencies across the system. As a result, the CMDB team is struggling with data accuracy and standardization. What actions does the CMDB team take to resolve the issue? (Choose 2 options)",
    [
      "Use Cl Class Manager to establish standardized Cl classes and attributes across all discovery sources",
      "Allow each discovery source to define its own Cl class, even if it results in inconsistencies",
      "Implement and use identification and reconciliation rules to avoid duplicates and standardize Cl classification",
      "Create a custom script to manually adjust incoming data before storing it in the CMDB"
    ],
    [
      0,
      2
    ],
    "CI Class Manager establishes a shared class hierarchy and consistent attributes so integrations map equivalent devices to the same kinds of records. IRE then matches incoming records to existing CIs and controls which sources may update them, preventing duplicate and conflicting data."
  ],
  [
    42,
    "Service Mapping & Visualization",
    "A Configuration Manager working in the CMDB Workspace wants to see how Cls are connected to each other. Which tool can be used?",
    [
      "Relationship Map",
      "Unified Map",
      "Business Service Map"
    ],
    [
      1
    ],
    "Unified Map visualizes a selected CI and the other CIs connected to it, allowing administrators to follow dependencies in CMDB Workspace. It is designed for interactive exploration of the surrounding topology, not just a list of class definitions."
  ],
  [
    43,
    "CMDB Data Foundations Dashboard",
    "A CMDB team has noticed that some hardware Cls are missing the serial number information, making it difficult to maintain data accuracy. The team needs a structured approach to identify and address these gaps. Which accomplishes this task?",
    [
      "CMDB Data Foundation Playbook",
      "Cl Class Manager",
      "Service Graph Connectors"
    ],
    [
      0
    ],
    "A CMDB Data Foundations playbook gives a guided process to investigate why serial numbers are missing and how to remediate the affected records or ingestion process. CI Class Manager defines fields, while a connector only supplies data from a source."
  ],
  [
    44,
    "Ingestion—SGC",
    "A ServiceNow Administrator wants to implement Service Graph Connectors to provide integrations to many third-party solutions that the company wants integrated into the CMDB. Which categories of connectors are available to the Administrator? (Choose 2 options)",
    [
      "Workflow Automation",
      "Cloud",
      "DevOps",
      "Observability"
    ],
    [
      1,
      3
    ],
    "Cloud connectors integrate inventory from cloud platforms, while Observability connectors ingest configuration context from monitoring and observability systems. Both are common Service Graph Connector source categories for populating the CMDB."
  ],
  [
    45,
    "IRE— Identification Rules",
    "Using Cl Class Manager, the Tomcat identification rule has the following criterion attributes configured: * Class + Install Directory Which identifier entry configuration option must be checked to attempt a match using the Application identification rule if no match is found using the Tomcat identification rule?",
    [
      "Applies to",
      "Independent",
      "Allow fallback to parent's rules",
      "Criterion attributes"
    ],
    [
      2
    ],
    "Allow fallback to parent’s rules tells IRE to try the more general Application identifier if the Tomcat-specific criteria do not find a match. This can recognize an existing application CI rather than creating a duplicate solely because its subclass identifier failed."
  ],
  [
    46,
    "CMDB Structure—Classes",
    "A CMDB Administrator needs to create a new Cl class for the Internet of Things (loT) Sensor in ServiceNow. What are the recommended practices for this specific activity? (Choose 2 options)",
    [
      "Add anew class under an appropriate parent class",
      "Modify an existing class",
      "Install or update the CMDB Cl Class Models store application, and verify the class does not already exist",
      "Delete an unused class, and replace it with the new one"
    ],
    [
      0,
      2
    ],
    "First check the CMDB CI Class Models application because the IoT Sensor class may already exist as a supported model. If it does not, create a class beneath the most appropriate parent so it inherits relevant CI attributes and behavior instead of duplicating the schema."
  ],
  [
    47,
    "Ingestion — Discovery/ACC",
    "Drag and drop the product to its description: + ServiceNow Discovery — Automatically identifies devices and applications in the network, populating the CMDB with accurate and up-to-date information + Service Graph Connectors — Facilitates integration between ServiceNow and external systems to import and synchronize data + Service Mapping — Complete topology of the services and shows how they are supported by underlying infrastructure and applications + Agent Client Collector (ACC) — Provides real-time visibility into endpoint configurations, populating the CMDB with accurate and up-to-date information Which product ‘Automatically identifies devices and applications in the network, populating the CMDB with accurate and up-to-date information’?",
    [
      "ServiceNow Discovery",
      "Service Graph Connectors",
      "Service Mapping",
      "Agent Client Collector (ACC)"
    ],
    [
      0
    ],
    "ServiceNow Discovery scans supported infrastructure and applications and uses discovery patterns to identify what exists and its characteristics. Service Graph Connectors import external-source data, while ACC collects from installed agents and Service Mapping focuses on service topology."
  ],
  [
    48,
    "IRE— Identification Rules",
    "A Configuration Management team needs to prevent duplicate server records to avoid confusion among users. Server records are identified when they are processed via the Identification and Reconciliation Engine (IRE) using the configured identification rules. Where would these rules be configured?",
    [
      "CMDB Health Dashboard",
      "CMDB Workspace",
      "CMDB Cl Class Manager",
      "CMDB Data Manager"
    ],
    [
      2
    ],
    "CI Class Manager provides the Identification Rules configuration for a selected class. Those rules tell IRE which attribute combinations identify an existing CI; Health Dashboard and Data Manager have different responsibilities."
  ],
  [
    49,
    "Governance & Business Value",
    "The CMDB Administrator has been asked to establish Configuration Management with a functional CMDB. Which factor is most critical for successfully operationalizing the CMDB in ServiceNow?",
    [
      "_ Establishing clear governance and continuously monitoring CMDB health",
      "_ Relying on automated discovery tools to maintain and update CMDB records . Populating the CMDB with as much data as possible to ensure a comprehensive inventory of Cls",
      "Allowing IT teams to modify CMDB records as needed to promote flexibility in data management"
    ],
    [
      0
    ],
    "Governance defines who owns CI data, which sources may update it, and how quality is monitored and corrected. Discovery alone cannot guarantee accurate ownership, class consistency or trusted relationships, so ongoing governance is essential to a usable CMDB."
  ],
  [
    50,
    "Data Manager — Config",
    "A Configuration Management Process Owner needs to configure Data Manager for policy tasks to be correctly assigned and aligned with the group attribute assigned to a class in Cl Class Manager. Whi is the recommended field to be used for a policy task assignment?",
    [
      "Approval group",
      "Managed by group",
      "Change group",
      "Support group"
    ],
    [
      1
    ],
    "Managed by group identifies the group responsible for maintaining the CI or class. Using that group field in Data Manager task assignment routes lifecycle and certification work to the team that owns the records, rather than an unrelated approval or change group."
  ],
  [
    51,
    ", Cl Class Manager — Navigation",
    "A CMDB Cl Class Owner has been asked to change the icon for the UNIX Server class. Which Cl Class Manager tab can the owner use to change the icon for the class?",
    [
      "Basic Info",
      "Suggested Relationships",
      "ClList",
      "Attributes"
    ],
    [
      0
    ],
    "Basic Info contains the class-level settings and presentation metadata, including the icon shown for the UNIX Server class. Attributes defines fields and Suggested Relationships concerns how the class connects to other classes."
  ],
  [
    52,
    "CMDB Query Builder",
    "Find all application services with databases that have incidents and all related infrastructure. Which steps build the query? (Choose 2)",
    [
      "Add a non-CMDB table to the query",
      "Use Service Mapping Query to include non-CMDB Incident table",
      "Use Service Mapping Query to find incidents related to database",
      "Use CMDB Query to include application services and related infrastructure"
    ],
    [
      0,
      3
    ],
    "Correct choices: A (Add a non-CMDB table to the query), D (Use CMDB Query to include application services and related infrastructure). We do 'Use CMDB Query to include application services and related infrastructure' because a standard CMDB Query provides the multi-tier canvas needed to map relationships all the way from top-level services down to physical or virtual hardware components. We do 'Add a non-CMDB table to the query' because Incidents are operational task records rather than Configuration Items (CIs) that do not live inside the CMDB, meaning they must be brought onto the canvas from the 'Non-CMDB Tables' panel to link them to the database node."
  ],
  [
    53,
    "Ingestion — SGC",
    "A CMDB Administrator has installed a Service Graph Connector (SGC), and then made customizations to the mappings. Which is a consequence of this action?",
    [
      "The customized mappings are not supported by ServiceNow, and the customer is responsible for supporting their own customized SGC.",
      "The customization will prevent the SGC from executing without an approval record attached to the affected mapping record.",
      "Fields populated by a customization will have a special tag associated with them in the CMDB."
    ],
    [
      0
    ],
    "Service Graph Connectors ship with supported standard mappings. Once an administrator customizes those mappings, ServiceNow cannot guarantee or maintain the customized logic as part of standard connector support; the customer must maintain and test it."
  ],
  [
    54,
    "Service Mapping",
    "Which tools automatically create relationships between CIs and applications belonging to an Application Service? (Choose 2)",
    [
      "IntegrationHub ETL",
      "Service Mapping",
      "Data Manager",
      "Event Management",
      "Discovery"
    ],
    [
      1,
      4
    ],
    "Discovery detects infrastructure components and their technical relationships, such as an application running on a host. Service Mapping uses discovered dependencies and mapping methods to assemble the topology of an Application Service, so both contribute automatic CI relationships."
  ],
  [
    55,
    "CMDB Health",
    "How can a CMDB administrator view regional CMDB Health scores?",
    [
      "Create CMDB groups with type Health by region",
      "Customize scheduled jobs by region",
      "Activate a region setting"
    ],
    [
      0
    ],
    "A CMDB Group of type Health can define a region-specific population of CIs. Health scores can then be calculated or viewed for those groups, making it possible to compare regions without changing the underlying metric definitions."
  ],
  [
    56,
    "Health Dashboard — Overview",
    "The CMDB Administrator group seeks to filter specific Cl classes that display on the CMDB Health Dashboard. This ensures that only relevant data is displayed, excluding items that are not ready for management. Which feature can the group util e to achieve this goal?",
    [
      "Health Inclusion Rules",
      "Data Refresh Rules",
      "Reconciliation Rules",
      "Identification Rules"
    ],
    [
      0
    ],
    "Health Inclusion Rules determine which CI classes or records participate in CMDB Health calculations. Excluding unmanaged or out-of-scope CIs prevents their data from distorting the health score; these rules do not govern IRE identification."
  ],
  [
    57,
    "Discovery and ACC",
    "Which tool is the automated agentless solution running discovery patterns?",
    [
      "Agent Client Collector",
      "Import Sets",
      "Service Graph Connector",
      "ServiceNow Discovery"
    ],
    [
      3
    ],
    "ServiceNow Discovery runs agentless discovery patterns against supported devices and applications, typically through a MID Server. ACC requires an installed agent, while Import Sets and Service Graph Connectors ingest data rather than performing agentless discovery."
  ],
  [
    58,
    "Data Manager — Policy Types",
    "Which shows the most complete list of policy types that are provided by the CMDB Data Manager?",
    [
      "Retire, Archive, Attestation, Certification, and Delete",
      "Archive and Delete",
      "Delete, Attestation, Retire, and Certification",
      "Attestation, Retire, and Certification"
    ],
    [
      0
    ],
    "CMDB Data Manager supports Retire, Archive and Delete to manage CI lifecycle and retention, plus Attestation to confirm existence and Certification to validate CI data. The selected option is the only one listing all five policy types."
  ],
  [
    59,
    "IRE Dynamic Reconciliation",
    "Which feature must be enabled to leverage dynamic reconciliation rules?",
    [
      "Reconciliation Rules",
      "CMDB Workspace",
      "CMDB Data Manager",
      "CMDB 360/Multisource CMDB"
    ],
    [
      3
    ],
    "Dynamic Reconciliation compares values reported by different sources using rules such as Most Reported or Largest Value. CMDB 360/Multisource retains the source-specific values needed to evaluate those rules, so that capability must be enabled."
  ],
  [
    60,
    "Governance & Business Value",
    "How is the CMDB aligned to business processes? (Choose 2 options)",
    [
      "_ Extends service delivery management to all enterprise departments",
      "Enhances decision-making and operational efficiency across the organization",
      "Enables the CFO/CIO to track software licenses",
      "Provides a centralized view of configuration items and their relationships"
    ],
    [
      1,
      3
    ],
    "A centralized inventory of CIs and their relationships gives teams a shared picture of what supports each service. That context improves decisions and operational efficiency, such as identifying dependencies during incidents or changes; it is broader than software-license tracking alone."
  ],
  [
    61,
    "Ingestion — SGC",
    "A Configuration Manager needs to ingest third-party Cls into the CMDB. Which method mini izes the risk of technical debt?",
    [
      "Table API",
      "Vendor-provided integration",
      "Service Graph Connector",
      "Import Sets and Transform Maps"
    ],
    [
      2
    ],
    "A Service Graph Connector provides a purpose-built, maintained integration with defined data mappings and IRE-aware ingestion. Using a supported connector avoids much of the custom transform and API maintenance that creates technical debt."
  ],
  [
    63,
    "CMDB Workspace",
    "How does a CMDB Administrator use the ServiceNow Platform to ensure the data quality associated with Cls in the CMDB?",
    [
      "Data Quality Business Rule",
      "CMDB Workspace",
      "Data Quality Scheduled Job",
      "CMDB Audit Business Rule"
    ],
    [
      1
    ],
    "CMDB Workspace brings together data-quality views, class information and remediation actions so administrators can investigate and manage CI quality in one place. A single business rule or scheduled job does not provide the same governance work area."
  ],
  [
    64,
    "CSDM Lifecycle",
    "At which CSDM maturity stage are Technical Service Offerings used to populate CI support groups?",
    [
      "Crawl",
      "Run",
      "Fly",
      "Walk",
      "Foundation"
    ],
    [
      1
    ],
    "The selected Run stage represents more mature operational service management, where technical offerings and CI group associations can be used to standardize support ownership. The exact stage classification should be checked against the CSDM release used by the exam."
  ],
  [
    65,
    "CSDM —Life Cycle Tables",
    "A Configuration Manager is reviewing the life cycle of Cls to ensure data accuracy, consistency, and relevance. The manager reviews the legacy status values and their equivalent CSDM life cycle stage and life cycle stage status values. Where are these reviewed?",
    [
      "Life cycle properties",
      "_ Life cycle choice list",
      "Life cycle mappings"
    ],
    [
      2
    ],
    "Life Cycle Mappings show how a legacy status value translates into the CSDM Life Cycle Stage and Stage Status pair. Reviewing these mappings helps avoid inconsistent states when old and new lifecycle fields are synchronized."
  ],
  [
    66,
    "De-duplication",
    "A CMDB Administrator is using the Duplicate Cl Remediator to address a de-duplication task. On the first tab of the wizard, the Main Cl is selected. Which attributes are used to identify the Main Cl? (Choose 2 options)",
    [
      "Oldest Created",
      "Newest Created",
      "Least Related Items",
      "Most Related Items"
    ],
    [
      0,
      3
    ],
    "Oldest Created favors the established CI record as the main record, while Most Related Items favors the record that already carries the richest relationships. Both help preserve history and dependencies when duplicate records are merged."
  ],
  [
    67,
    "CMDB Data Foundations Dashboard",
    "A CMDB Administrator wants to use the CMDB and CSDM Data Foundations Dashboard. Where can the Administrator obtain the dashboard?",
    [
      "It is a free application on the ServiceNow Innovation Lab.",
      "It is a paid application on the ServiceNow Store.",
      "It is a free application on the ServiceNow Store.",
      "It is active by default."
    ],
    [
      2
    ],
    "The CMDB and CSDM Data Foundations Dashboards are distributed as free ServiceNow Store applications. Installing the Store application makes the dashboard available; it is not necessarily active by default in every instance."
  ],
  [
    68,
    "CSDM — Lifecycle",
    "‘A Platform Owner is building the governance team to support the CSDM. Matching: + Foundation Domain ~ Service Owner(s), Platform Owner + Portfolio Domain ~ Technology Service Owner(s), Application Service Owner(s), Platform Owner + Design Domain — Enterprise Architect(s), Platform Owner + Technical Domain = Enterprise Architect(s), Data Steward(s), Process Owner(s), Platform Owner Which roles make up the Foundation Domain?",
    [
      "Service Owner(s), Platform Owner",
      "Technology Service Owner(s), Application Service Owner(s), Platform Owner",
      "Enterprise Architect(s), Platform Owner",
      "_ Enterprise Architect(s), Data Steward(s), Process Owner(s), Platform Owner"
    ],
    [
      0
    ],
    "In the supplied CSDM role mapping, the Foundation domain involves Service Owners and the Platform Owner. They establish accountability for foundational records and platform-level governance before later modeling stages expand the stakeholders."
  ],
  [
    69,
    "CSDM Dashboard",
    "The Unique Locations result is low. What is the recommended playbook action?",
    [
      "Keep standard location and delete duplicate without checking",
      "Keep both locations",
      "Review locations, update affected CIs to correct location, then delete duplicate",
      "Run Duplicate CI Remediator"
    ],
    [
      2
    ],
    "First compare the duplicate location records and identify which is the standard location. Then update CIs and other references to point to that record before deleting the duplicate, so no CI loses its valid location reference."
  ],
  [
    70,
    "CSDM Domains",
    "Which CSDM domain helps understand Business Applications, capabilities, redundancy, and costs?",
    [
      "Foundation",
      "Design and Planning",
      "Service Delivery",
      "Service Consumption"
    ],
    [
      1
    ],
    "Design and Planning models Business Applications and Business Capabilities. Comparing applications against capabilities makes overlapping functionality, rationalization opportunities and associated costs visible to enterprise architects."
  ],
  [
    71,
    "CSDM Roles",
    "Which two roles are associated with the Design and Planning domain? (Choose 2)",
    [
      "Application Service Owner",
      "Application Owner",
      "Enterprise Architect",
      "Business Relationship Manager"
    ],
    [
      1,
      2
    ],
    "Application Owners know the purpose, ownership and lifecycle of business applications, while Enterprise Architects analyze how those applications support capabilities and strategy. Both are central to the Design and Planning domain."
  ],
  [
    72,
    "Technical Service Offerings",
    "Which two CI group fields are synchronized from a Technical Service Offering based on a Dynamic CI Group? (Choose 2)",
    [
      "Approval Group",
      "Managed by Group",
      "Support Group",
      "Owned by Group"
    ],
    [
      1,
      2
    ],
    "Managed by Group identifies who administers the CI, while Support Group identifies who handles operational support. A Technical Service Offering linked to a dynamic CI group can synchronize these group values to its member CIs."
  ],
  [
    73,
    "CI Class Manager",
    "Which roles are required to create a custom CI class?",
    [
      "cmdb_inst_admin and personalize_form",
      "itil_admin and personalize_form",
      "data_classification_admin and personalize_dictionary",
      "sn_cmdb_admin and personalize_dictionary"
    ],
    [
      3
    ],
    "sn_cmdb_admin provides CMDB administration capabilities, while personalize_dictionary allows changes to dictionary or schema definitions. Creating a custom CI class needs both the CMDB management authority and the ability to define its table metadata."
  ],
  [
    74,
    "Change Management",
    "Which task field is automatically populated from a CI Change Group after selecting that CI?",
    [
      "Managed by group",
      "Approval group",
      "Assignment group",
      "Change group"
    ],
    [
      2
    ],
    "When a CI is selected, its Change Group can be used to populate the task Assignment Group so the change reaches the team responsible for that CI. The target task field is Assignment Group, even though the source field on the CI is Change Group."
  ],
  [
    75,
    "CMDB Relationships",
    "Multiple application servers each host one or more applications. What relationship cardinality is represented from Application Server to Application?",
    [
      "Many-to-one",
      "One-to-one",
      "One-to-many",
      "Many-to-many"
    ],
    [
      2
    ],
    "From one Application Server to its hosted Applications, one server can connect to multiple applications, which is a one-to-many relationship in the stated direction. Cardinality describes how many records on the target side can relate to one source record."
  ],
  [
    76,
    "Data Manager",
    "Which governance tool removes CI data that is no longer useful?",
    [
      "CI Class Manager",
      "Data Foundation Dashboard",
      "Health Inclusion Rules",
      "CMDB Data Manager",
      "De-duplication Templates"
    ],
    [
      3
    ],
    "CMDB Data Manager applies lifecycle policies to records that are no longer useful, including retiring, archiving or deleting them according to criteria. CI Class Manager defines structure and Health Inclusion Rules only affect health measurement scope."
  ],
  [
    77,
    "Data Manager",
    "Which two are CMDB Data Manager policy types? (Choose 2)",
    [
      "De-duplication",
      "Archive",
      "Reconciliation",
      "Retire"
    ],
    [
      1,
      3
    ],
    "Archive moves eligible CI records out of the active dataset under retention rules, while Retire marks CIs as no longer operational. Both are Data Manager policy types; reconciliation and de-duplication are handled by other CMDB mechanisms."
  ],
  [
    78,
    "CMDB Workspace",
    "Which two actions can be initiated from CMDB Workspace? (Choose 2)",
    [
      "Execute Discovery",
      "Create Data Manager certification policy",
      "Remediate duplicate CIs",
      "Create new CMDB class"
    ],
    [
      1,
      2
    ],
    "CMDB Workspace provides access to Data Manager policy administration and duplicate CI remediation. These actions address governance work; running Discovery and defining a new class are separate configuration workflows."
  ],
  [
    79,
    "Service Graph Connector",
    "What happens when an administrator modifies the SCCM Service Graph Connector query during an upgrade?",
    [
      "Data source becomes inactive",
      "Scheduled jobs must be configured",
      "Updates to the customized query are skipped during upgrade"
    ],
    [
      2
    ],
    "An upgrade may include a new vendor version of the SCCM connector query. If the local query was customized, the upgrade protects that local modification by recording a skipped change instead of silently overwriting it, so the admin must review the vendor update."
  ],
  [
    80,
    "Data Manager",
    "What is a prerequisite for archiving/deleting a CI using baseline Data Manager policies?",
    [
      "Marked inactive",
      "Marked critical",
      "Retired and end of life",
      "Operational"
    ],
    [
      2
    ],
    "Baseline Archive and Delete policies generally target CIs already retired and at end of life. This lifecycle condition helps prevent accidental removal of operational infrastructure that still supports active services."
  ],
  [
    29,
    "CI Class Manager",
    "How can a class be set as a Principal Class on the Basic Info tab?",
    [
      "Click the Principal Class UI Action button",
      "Check the Principal Class check box",
      "Select Yes from the Principal Class choice list"
    ],
    [
      1
    ],
    "Correct choice: B (Check the Principal Class check box). Principal Class is a checkbox on the Basic Info tab of CI Class Manager."
  ],
  [
    81,
    "CSDM Dashboard",
    "Which CSDM Data Foundations Dashboard tab measures product models, locations, and business units?",
    [
      "Run",
      "Foundation",
      "Crawl",
      "Walk",
      "Fly"
    ],
    [
      1
    ],
    "Correct choice: B (Foundation). Foundation covers foundational reference data such as locations, business units, and product models."
  ],
  [
    82,
    "Data Manager",
    "After retiring short-lived CIs not discovered in the past week, what recommended action removes them?",
    [
      "Create a delete policy",
      "Create a scheduled job",
      "Create a business rule"
    ],
    [
      0
    ],
    "Correct choice: A (Create a delete policy). CMDB Data Manager Delete policies automate deletion after the appropriate lifecycle conditions are met."
  ],
  [
    83,
    "CI Class Manager",
    "Which modules configure recommended fields and generate tasks when operational Linux servers lack Support Group or Managed by Group?",
    [
      "Technical Service Offerings and Dynamic CI Groups",
      "CMDB Workspace and Scheduled Jobs",
      "Dynamic CI groups and CMDB groups",
      "CI Class Manager and Health Preferences"
    ],
    [
      3
    ],
    "Correct choice: D (CI Class Manager and Health Preferences). CI Class Manager configures recommended attributes, while CMDB Health evaluates completeness and can drive remediation."
  ],
  [
    84,
    "CMDB Query Builder",
    "Which query design finds all operational CIs belonging to a specific application service?",
    [
      "Add Business Application, Application Service and CI; filter and connect",
      "Add Application Service and CI; connect, filter service name and operational status, run",
      "Add Application Service and CI; connect, display columns, run"
    ],
    [
      1
    ],
    "Correct choice: B (Add Application Service and CI; connect, filter service name and operational status, run). Add the relevant CI classes, configure their relationship, and filter by service and operational status. Display columns alone do not filter."
  ],
  [
    85,
    "Security Operations",
    "What is the value of using the CMDB in security operations? (Choose 2)",
    [
      "Allows security team to assess and remediate an incident",
      "Enables audits and attestations across CIs",
      "Auto-resolves a vulnerability",
      "Identifies the IT infrastructure with a vulnerability"
    ],
    [
      0,
      3
    ],
    "Correct choices: A (Allows security team to assess and remediate an incident), D (Identifies the IT infrastructure with a vulnerability). CI context helps security teams identify affected infrastructure and assess incident or vulnerability impact; it does not automatically fix vulnerabilities."
  ],
  [
    86,
    "CI Class Manager",
    "Which CI Class Manager tab is used to set a Principal Class?",
    [
      "Health > Attributes",
      "Class Info > Basic Info",
      "Class Info > Attributes"
    ],
    [
      1
    ],
    "Correct choice: B (Class Info > Basic Info). Principal Class is configured in Class Info > Basic Info."
  ],
  [
    87,
    "IRE",
    "Which configuration allows a lower-priority source to update a CI after a higher-priority source becomes inactive?",
    [
      "Data Refresh Rules",
      "Health Inclusion Rules",
      "Identification Rules",
      "Reconciliation Rules"
    ],
    [
      0
    ],
    "Correct choice: A (Data Refresh Rules). Data Refresh Rules specify when stale authoritative-source values may be refreshed by another source."
  ],
  [
    88,
    "CMDB Health",
    "What is the default staleness duration on the Correctness scorecard?",
    [
      "24 hours",
      "30 days",
      "7 days",
      "60 days"
    ],
    [
      3
    ],
    "Correct choice: D (60 days). The default staleness threshold is commonly 60 days, though it can be configured."
  ],
  [
    89,
    "Change Management",
    "How does a healthy service-aware CMDB improve change management? (Choose 2)",
    [
      "Automatically deploys changes without approval",
      "Provides insight into potential change impact",
      "Guarantees no service downtime",
      "Auto-populates assignment group for dynamic routing"
    ],
    [
      1,
      3
    ],
    "Correct choices: B (Provides insight into potential change impact), D (Auto-populates assignment group for dynamic routing). Service maps enable impact analysis, while accurate CI group data supports assignment routing."
  ],
  [
    90,
    "Governance",
    "Which governance policy prevents services without owners?",
    [
      "Make Managed by mandatory on all CIs",
      "Make Owned by mandatory",
      "Set a default Service Owner value"
    ],
    [
      1
    ],
    "Correct choice: B (Make Owned by mandatory). Requiring an accountable owner improves service ownership governance; a placeholder default is not meaningful ownership."
  ],
  [
    91,
    "CI Class Manager",
    "Where can administrators find class attributes, IRE rules and supported relationships together?",
    [
      "CI Class Manager",
      "CMDB Data Manager",
      "CI Identifiers",
      "CMDB Workspace"
    ],
    [
      0
    ],
    "Correct choice: A (CI Class Manager). CI Class Manager centralizes class configuration, attributes, identification rules, and relationship guidance."
  ],
  [
    92,
    "Data Manager",
    "Filter: Operating System contains Server OR contains Linux. Which match? (Choose 2)",
    [
      "AIX",
      "Windows Server 2022 Datacenter",
      "Linux CentOS",
      "Windows 2019 Datacenter"
    ],
    [
      1,
      2
    ],
    "Correct choices: B (Windows Server 2022 Datacenter), C (Linux CentOS). The contains operator matches the literal strings Server and Linux; OR means either condition is sufficient."
  ],
  [
    93,
    "CI Class Manager",
    "How are Principal Classes set for CI reference fields?",
    [
      "Principal Class checkbox on Attributes tab",
      "Principal Class checkbox in Workspace",
      "Principal Class attribute on the CI",
      "Principal Class checkbox on Basic Info tab"
    ],
    [
      3
    ],
    "Correct choice: D (Principal Class checkbox on Basic Info tab). The Principal Class checkbox is on the Basic Info tab for the class."
  ],
  [
    94,
    "Unified Map",
    "What additional capabilities does Unified Map offer? (Choose 2)",
    [
      "Visibility to an application and its host",
      "Number of levels can be modified",
      "Nodes can be filtered by user preferences",
      "Map can be zoomed"
    ],
    [
      1,
      2
    ],
    "Correct choices: B (Number of levels can be modified), C (Nodes can be filtered by user preferences). Unified Map provides flexible depth and filtering controls for exploring CI dependencies."
  ],
  [
    95,
    "Data Manager",
    "Which default group fields are available for User Group Field assignment? (Choose 2)",
    [
      "Managed by Group",
      "Support Group",
      "Assignment Group",
      "Owned by Group"
    ],
    [
      0,
      1
    ],
    "Correct choices: A (Managed by Group), B (Support Group). Managed by Group and Support Group are standard CI group references available for routing governance tasks."
  ],
  [
    96,
    "CSDM Lifecycle",
    "What follows selecting Enable Life Cycle Sync?",
    [
      "Fix Life Cycle Stage values to match legacy",
      "Activate lifecycle mappings",
      "Resolve incomplete mappings in Discrepancy Report"
    ],
    [
      2
    ],
    "Correct choice: C (Resolve incomplete mappings in Discrepancy Report). Review and resolve incomplete mappings before relying on lifecycle synchronization."
  ],
  [
    97,
    "CMDB 360",
    "What must be true for CMDB 360 to analyze CI data?",
    [
      "Discovery must populate it",
      "Reconciliation priorities must be set",
      "CI data must pass through IRE",
      "Only authorized SGC sources count"
    ],
    [
      2
    ],
    "Correct choice: C (CI data must pass through IRE). Multisource tracking depends on data passing through the Identification and Reconciliation Engine."
  ],
  [
    98,
    "Principal Classes",
    "Which checkbox limits CI reference selections to relevant managed classes?",
    [
      "Principal Class",
      "Independent",
      "Extensible",
      "Main Record"
    ],
    [
      0
    ],
    "Correct choice: A (Principal Class). Principal Class marks classes intended to be available in task CI reference selections."
  ],
  [
    99,
    "IRE Class Upgrade",
    "A CI moves from Server to the more specific Windows Server child class. What occurred?",
    [
      "Class Switch",
      "CI Class Change",
      "Class Upgrade",
      "Class Downgrade"
    ],
    [
      2
    ],
    "Correct choice: C (Class Upgrade). Moving from a parent class to a more specific child class is a class upgrade."
  ],
  [
    100,
    "CMDB Governance",
    "Which benefits arise from CMDB governance? (Choose 2)",
    [
      "Assist integration choices",
      "Gain visibility and control",
      "Enhance Service Management operations",
      "Reduce hardware costs"
    ],
    [
      1,
      2
    ],
    "Correct choices: B (Gain visibility and control), C (Enhance Service Management operations). Governance improves visibility and control over CI data and enables better service-management decisions."
  ],
  [
    101,
    "Technical Service Offerings",
    "Which group values synchronize to CIs via technical service offerings and dynamic CI groups? (Choose 2)",
    [
      "Change group",
      "CMDB group",
      "Approval group",
      "Support group"
    ],
    [
      0,
      3
    ],
    "Correct choices: A (Change group), D (Support group). Technical service offerings can propagate operational support and change group assignments to associated CIs."
  ],
  [
    102,
    "CSDM Dashboard",
    "Which CSDM dashboard tab measures Technical Services and Technical Service Offerings?",
    [
      "Crawl",
      "Walk",
      "Fly",
      "Run"
    ],
    [
      1
    ],
    "Correct choice: B (Walk). The Walk stage introduces more structured technical service and offering modeling."
  ],
  [
    103,
    "CMDB Classes",
    "How should a new equipment CI class be created?",
    [
      "Use Service Catalog",
      "Create in CI Class Manager with suitable parent inheritance",
      "Modify an unrelated existing class",
      "Create without inheritance"
    ],
    [
      1
    ],
    "Correct choice: B (Create in CI Class Manager with suitable parent inheritance). Extend the appropriate existing CI class to inherit its attributes and behavior, avoiding unnecessary technical debt."
  ],
  [
    104,
    "IntegrationHub ETL",
    "What does IntegrationHub ETL do? (Choose 2)",
    [
      "Integrates third-party data into CMDB or non-CMDB tables",
      "Performs network discovery itself",
      "Uses IRE to process and integrate CMDB data",
      "Specifically imports SCCM/Intune data"
    ],
    [
      0,
      2
    ],
    "Correct choices: A (Integrates third-party data into CMDB or non-CMDB tables), C (Uses IRE to process and integrate CMDB data). IntegrationHub ETL transforms incoming data and uses IRE for CMDB identification and reconciliation; it is not a discovery engine."
  ],
  [
    105,
    "Service Graph Connectors",
    "What is the fastest time-to-value method for importing Microsoft SCCM CMDB data?",
    [
      "Import Sets",
      "Agent Client Collector",
      "Service Graph Connectors",
      "IntegrationHub ETL"
    ],
    [
      2
    ],
    "Correct choice: C (Service Graph Connectors). Prebuilt Service Graph Connectors offer supported mappings and integration flows for known sources such as SCCM."
  ],
  [
    106,
    "CMDB Dashboard",
    "What is a benefit of the CMDB Data Foundations Dashboard?",
    [
      "Configure health metric definitions",
      "Provides metrics for informed decisions",
      "Resolve certification policy tasks"
    ],
    [
      1
    ],
    "Correct choice: B (Provides metrics for informed decisions). The dashboard exposes recommended-practice metrics and actionable insights."
  ],
  [
    107,
    "CMDB 360",
    "Why use CMDB 360/Multisource CMDB?",
    [
      "Identify CI attribute values from multiple sources",
      "Ingest data through connectors",
      "Ingest data through import sets",
      "Populate the CMDB from multiple sources"
    ],
    [
      0
    ],
    "Correct choice: A (Identify CI attribute values from multiple sources). CMDB 360 reveals which sources reported which CI attribute values; it is not itself an ingestion mechanism."
  ],
  [
    108,
    "Attestation",
    "Which Data Manager policy confirms that all servers physically exist?",
    [
      "Attestation",
      "Delete",
      "Retire",
      "Archive",
      "Certification"
    ],
    [
      0
    ],
    "Correct choice: A (Attestation). Attestation asks assigned people to acknowledge whether a CI exists; certification validates specific field data."
  ],
  [
    109,
    "Deduplication",
    "How can similar deduplication tasks be remediated in bulk?",
    [
      "Custom background script",
      "Deduplication template",
      "Manual task-by-task remediation",
      "Duplicate CI Remediator Wizard"
    ],
    [
      1
    ],
    "Correct choice: B (Deduplication template). Deduplication templates let administrators apply a consistent remediation approach to multiple tasks."
  ],
  [
    110,
    "CMDB 360",
    "Which property enables multisource CMDB?",
    [
      "glide.identification_engine.multisource.enable",
      "glide.identification_engine.multisource.query.max.limit",
      "glide.identification_engine.multisource.cmdb_ci.enabled",
      "glide.identification_engine.multisource.non_cmdb_ci.enabled"
    ],
    [
      0
    ],
    "Correct choice: A (glide.identification_engine.multisource.enable). The multisource enable property activates CMDB 360 data collection capabilities."
  ],
  [
    111,
    "Service Graph Connectors",
    "Where can an admin inspect field-to-field mappings for an SGC import?",
    [
      "Integration Hub",
      "CMDB Integrations Dashboard",
      "IntegrationHub ETL"
    ],
    [
      2
    ],
    "Correct choice: C (IntegrationHub ETL). IntegrationHub ETL displays the mapping and transformation steps used by a Service Graph Connector."
  ],
  [
    112,
    "CMDB Playbooks",
    "Why use CMDB Data Foundations Dashboard playbooks? (Choose 2)",
    [
      "Explain downstream impacts of poor metrics",
      "Offer remediation templates",
      "Offer remediation options",
      "Provide automated scripts that fix all metrics"
    ],
    [
      0,
      2
    ],
    "Correct choices: A (Explain downstream impacts of poor metrics), C (Offer remediation options). Playbooks explain why a metric matters and guide administrators through recommended remediation actions."
  ],
  [
    113,
    "Group Synchronization",
    "CI Class Manager Managed by Group = Enterprise IT Services; TSO Managed by Group = Windows Support. Which is used?",
    [
      "Enterprise IT Services",
      "Change Management Team",
      "Windows Support"
    ],
    [
      0
    ],
    "Correct choice: A (Enterprise IT Services). Class-level group management can take precedence for class-managed ownership fields."
  ],
  [
    114,
    "Change Management",
    "What Change Request field is populated from a CI change group?",
    [
      "Managed by Group",
      "Change Group",
      "Assignment Group",
      "Support Group",
      "Assigned to"
    ],
    [
      2
    ],
    "Correct choice: C (Assignment Group). The CI change group can be used to populate the Change Request assignment group."
  ],
  [
    115,
    "CMDB Groups",
    "How can CMDB groups be defined? (Choose 2)",
    [
      "Tag-based queries",
      "Encoded queries",
      "Scripted queries",
      "Saved queries"
    ],
    [
      1,
      3
    ],
    "Correct choices: B (Encoded queries), D (Saved queries). CMDB groups can be built from encoded filters or saved CMDB queries."
  ],
  [
    116,
    "Health Inclusion Rules",
    "What is the purpose of Health Inclusion Rules?",
    [
      "Limit CIs included in identification",
      "Reduce data ingestion",
      "Reconcile attributes based on source"
    ],
    [],
    "No answer is valid as written. Health Inclusion Rules only determine which CIs are included when CMDB Health calculates scores; they do not control identification, ingestion or reconciliation in IRE. This question should not be scored without a corrected option."
  ],
  [
    117,
    "Information Objects",
    "How should regulated patient information be modeled in relation to business applications?",
    [
      "Classify each database and map manually",
      "Add a custom Boolean field to business application",
      "Create an Information Object and relate it to Business Application"
    ],
    [
      2
    ],
    "Correct choice: C (Create an Information Object and relate it to Business Application). CSDM Information Objects model logical information and its relationship to business applications."
  ],
  [
    118,
    "Attestation",
    "Which Data Manager policy confirms that servers exist?",
    [
      "Promotion",
      "Verification",
      "Attestation",
      "Certification"
    ],
    [
      2
    ],
    "Correct choice: C (Attestation). Attestation confirms CI existence through an acknowledgement task."
  ],
  [
    119,
    "Custom CMDB Tables",
    "What prefix starts custom CMDB tables?",
    [
      "cmdb_ci",
      "u_cmdb_ci",
      "u_ci_cmdb",
      "ci_cmdb"
    ],
    [
      1
    ],
    "Correct choice: B (u_cmdb_ci). Custom CI class tables commonly use the u_cmdb_ci prefix."
  ],
  [
    120,
    "Event Management",
    "How does CMDB benefit Event Management? (Choose 2)",
    [
      "Mapped services show users consuming the service",
      "Alerts can bind to specific CIs",
      "Alerts correlate to knowledge articles",
      "Mapped services show business impact of alerts"
    ],
    [
      1,
      3
    ],
    "Correct choices: B (Alerts can bind to specific CIs), D (Mapped services show business impact of alerts). CI binding and service maps enable alert correlation and business impact assessment."
  ],
  [
    121,
    "IRE Rules",
    "Where can identification rules be viewed or configured? (Choose 2)",
    [
      "API Integrations",
      "IRE Application",
      "CI Class Manager",
      "CI Identifiers module"
    ],
    [
      2,
      3
    ],
    "Correct choices: C (CI Class Manager), D (CI Identifiers module). Identification rules are maintained in CI Class Manager and CI Identifiers."
  ],
  [
    122,
    "CSDM Domains",
    "A catalog item lets doctors schedule patients for CT scans. Which domain contains the catalog item?",
    [
      "Design and Planning",
      "Build and Integration",
      "Service Delivery",
      "Foundation",
      "Service Consumption"
    ],
    [
      4
    ],
    "Correct choice: E (Service Consumption). Catalog items represent consumable offerings and belong to the Service Consumption domain."
  ],
  [
    123,
    "CSDM Domains",
    "Which CSDM domain tracks enterprise business capabilities?",
    [
      "Foundation",
      "Build and Integration",
      "Design and Planning",
      "Service Consumption",
      "Service Delivery"
    ],
    [
      2
    ],
    "Correct choice: C (Design and Planning). Business capabilities are modeled in the Design and Planning domain."
  ],
  [
    124,
    "CMDB Health",
    "Which field is used for CI staleness duration?",
    [
      "Last modified on",
      "Created",
      "Updated",
      "First discovered",
      "Most recent discovery"
    ],
    [
      4
    ],
    "Correct choice: E (Most recent discovery). Staleness is typically based on the most recent discovery timestamp, last_discovered."
  ],
  [
    125,
    "CSDM Crawl",
    "Which stakeholders should be involved in CSDM Crawl-stage CMDB population?",
    [
      "Business Service Manager and Technology Service Owner",
      "Application Owner and Application Service Owner",
      "Customer Service Manager and Infrastructure Manager"
    ],
    [
      1
    ],
    "Correct choice: B (Application Owner and Application Service Owner). Crawl emphasizes identifying and organizing applications and application services with their owners."
  ],
  [
    126,
    "CMDB Playbooks",
    "How do Data Foundations Dashboard playbooks help?",
    [
      "Automatically track metrics",
      "Install to automatically fix all issues",
      "Help analyze and fix issues"
    ],
    [
      2
    ],
    "Correct choice: C (Help analyze and fix issues). Playbooks provide guided analysis and remediation rather than automatic blanket fixes."
  ],
  [
    127,
    "Unified Map",
    "Which Unified Map panel shows incidents and problems for a selected CI?",
    [
      "Overview",
      "Application services",
      "Related items",
      "Attributes"
    ],
    [
      2
    ],
    "Correct choice: C (Related items). Related items provides contextual records associated with a selected CI."
  ],
  [
    128,
    "CSDM Maturity",
    "At which stage are Business Service Offerings mapped to dependent Application Services?",
    [
      "Fly",
      "Crawl",
      "Foundation",
      "Run",
      "Walk"
    ],
    [
      4
    ],
    "Correct choice: E (Walk). Walk-stage service modeling connects business service offerings to the application services supporting them."
  ],
  [
    129,
    "CMDB Health",
    "Which health scorecard identifies CIs missing required or recommended data?",
    [
      "Compliance",
      "Correctness",
      "Completeness"
    ],
    [
      2
    ],
    "Correct choice: C (Completeness). Completeness checks whether required and recommended fields are populated."
  ],
  [
    130,
    "CMDB Roles",
    "Who is responsible for CI data accuracy, completeness and resolving discrepancies?",
    [
      "Service Owner",
      "CMDB Architect",
      "Configuration Manager",
      "IT Asset Manager"
    ],
    [
      2
    ],
    "Correct choice: C (Configuration Manager). Configuration Managers oversee CI data quality and remediation processes."
  ],
  [
    131,
    "CMDB Dashboard",
    "Which tool shows how CMDB configuration aligns with recommended practice?",
    [
      "CMDB Data Foundations Dashboard",
      "CMDB Workspace",
      "CMDB Health Dashboard",
      "CMDB Data Manager"
    ],
    [
      0
    ],
    "Correct choice: A (CMDB Data Foundations Dashboard). The Data Foundations Dashboard measures recommended-practice adoption and guides improvements."
  ],
  [
    132,
    "Information Objects",
    "Which class models PII data associated with business applications?",
    [
      "Business Capability",
      "API Component",
      "Information Object",
      "Data Classification"
    ],
    [
      2
    ],
    "Correct choice: C (Information Object). Information Objects represent types of information, including sensitive business data."
  ],
  [
    133,
    "Data Manager",
    "Where are CMDB Data Manager policies created and managed?",
    [
      "Workspace CMDB 360 tab",
      "Service Operations Workspace",
      "CI Class Manager",
      "CMDB Workspace Management tab"
    ],
    [
      3
    ],
    "Correct choice: D (CMDB Workspace Management tab). The CMDB Workspace Management area provides access to Data Manager policies."
  ],
  [
    134,
    "Archive Policies",
    "What keeps CMDB data volume manageable?",
    [
      "Scheduled Jobs",
      "Business Rules",
      "Archive Policies"
    ],
    [
      2
    ],
    "Correct choice: C (Archive Policies). Archive policies remove eligible older CI records from active CMDB datasets."
  ],
  [
    135,
    "CMDB Business Value",
    "Which are business values of CMDB? (Choose 2)",
    [
      "Manage financial data",
      "Streamline incident and change management",
      "Strengthen operational resiliency",
      "Automate all CI relationship maintenance"
    ],
    [
      1,
      2
    ],
    "Correct choices: B (Streamline incident and change management), C (Strengthen operational resiliency). Trusted configuration data improves ITSM efficiency and operational resilience."
  ],
  [
    136,
    "Automatic Relationships",
    "Which solutions automatically create CI relationships? (Choose 2)",
    [
      "Discovery",
      "Workflow Studio",
      "Service Mapping",
      "IntegrationHub ETL"
    ],
    [
      0,
      2
    ],
    "Correct choices: A (Discovery), C (Service Mapping). Discovery finds infrastructure dependencies, while Service Mapping builds application-service relationships."
  ],
  [
    137,
    "IRE Imports",
    "Which transform-map script type is commonly used to invoke IRE processing?",
    [
      "onComplete",
      "onBefore",
      "onStart",
      "onAfter"
    ],
    [
      1
    ],
    "Correct choice: B (onBefore). The onBefore transform script can call CMDBTransformUtil to route rows through IRE."
  ],
  [
    138,
    "Unified Map",
    "Which filters can a service owner use on Unified Map? (Choose 2)",
    [
      "Discovery source",
      "Managed by group",
      "Business criticality",
      "CI type"
    ],
    [
      1,
      3
    ],
    "Correct choices: B (Managed by group), D (CI type). Unified Map supports narrowing visible CI nodes by attributes such as type and ownership group."
  ],
  [
    139,
    "Information Objects",
    "Which use case requires Information Objects?",
    [
      "Asset lifecycle compliance in a Business Application",
      "Security operational risk in a Business Application",
      "Operational impact of a Business Service"
    ],
    [
      1
    ],
    "Correct choice: B (Security operational risk in a Business Application). Information Objects help identify sensitive information used by business applications for security and risk assessments."
  ],
  [
    140,
    "Class Upgrade",
    "A Server CI is reclassified to Linux Server or Windows Server. Which operation?",
    [
      "Class Switch",
      "Class Downgrade",
      "Class Upgrade"
    ],
    [
      2
    ],
    "Correct choice: C (Class Upgrade). Reclassification from parent Server to more specific child classes is a class upgrade."
  ],
  [
    141,
    "CMDB Playbooks",
    "Which structured guidance helps resolve missing hardware serial numbers?",
    [
      "CSDM Now Create Playbooks",
      "CMDB Data Foundations Dashboard Playbooks",
      "CMDB Health Dashboard Playbooks",
      "CSDM Data Foundations Dashboard Playbooks"
    ],
    [
      1
    ],
    "Correct choice: B (CMDB Data Foundations Dashboard Playbooks). CMDB Data Foundations Dashboard playbooks offer targeted guidance for data-quality issues."
  ],
  [
    142,
    "CSDM Domains",
    "Which domain models production line monitoring systems as operational application services?",
    [
      "Service Delivery",
      "Foundation",
      "Build and Integration",
      "Service Consumption",
      "Design and Planning"
    ],
    [
      0
    ],
    "Correct choice: A (Service Delivery). Deployed operational systems and application services are represented in Service Delivery."
  ],
  [
    143,
    "CMDB Dashboard",
    "Which are benefits of the Data Foundations Dashboard? (Choose 2)",
    [
      "Actionable data-quality insights",
      "Monitor CMDB health over time",
      "Automatically approve changes",
      "Automatically eliminate duplicate records"
    ],
    [
      0,
      1
    ],
    "Correct choices: A (Actionable data-quality insights), B (Monitor CMDB health over time). The dashboard supports monitoring and improvement; it does not approve changes or automatically delete duplicates."
  ],
  [
    144,
    "CSDM Stages",
    "What is the prescribed CSDM rollout order?",
    [
      "Initiate, Plan, Execute, Deliver, Close",
      "Architecture, Business, Technical, Governance",
      "Foundation, Crawl, Walk, Run, Fly",
      "Initial, Developing, Defined, Managed"
    ],
    [
      2
    ],
    "Correct choice: C (Foundation, Crawl, Walk, Run, Fly). CSDM implementation maturity proceeds Foundation → Crawl → Walk → Run → Fly."
  ],
  [
    145,
    "IRE Ingestion",
    "What is the recommended method to import external data without bypassing IRE?",
    [
      "Import Sets and Transform Maps",
      "IntegrationHub ETL",
      "Table API"
    ],
    [
      1
    ],
    "Correct choice: B (IntegrationHub ETL). IntegrationHub ETL uses IRE by design, reducing duplication and unauthorized overwrites."
  ],
  [
    146,
    "Data Manager",
    "What is a purpose of CMDB Data Manager?",
    [
      "Enforce all CI relationship rules",
      "Automate archive and deletion via retention policies",
      "Encrypt archived records"
    ],
    [
      1
    ],
    "Correct choice: B (Automate archive and deletion via retention policies). Data Manager policies govern CI lifecycle tasks such as retire, archive, and delete."
  ],
  [
    147,
    "IRE Reconciliation",
    "Priorities: ServiceNow 100, Altiris 200, SCCM 300. Which statements are true? (Choose 2)",
    [
      "ServiceNow may insert but cannot update records created by Altiris/SCCM",
      "Altiris can update records inserted by SCCM",
      "SCCM can insert new records",
      "SCCM has highest priority because 300 is largest"
    ],
    [
      1,
      2
    ],
    "Correct choices: B (Altiris can update records inserted by SCCM), C (SCCM can insert new records). Lower priority numbers mean higher authority. Reconciliation restricts updates, not identification/insertion, so Altiris can supersede SCCM and SCCM may insert."
  ],
  [
    148,
    "CMDB Health",
    "Which scorecard includes Duplicate, Orphan and Stale CI metrics?",
    [
      "Correctness",
      "Compliance",
      "Completeness"
    ],
    [
      0
    ],
    "Correct choice: A (Correctness). Correctness evaluates duplicates, orphans and stale CI records."
  ],
  [
    149,
    "CMDB Health",
    "What must happen to generate CMDB Health scores?",
    [
      "Activate CMDB Health scheduled jobs",
      "Nothing; calculated by default",
      "Install an additional calculation plugin"
    ],
    [
      0
    ],
    "Correct choice: A (Activate CMDB Health scheduled jobs). Scheduled health jobs must run to calculate and refresh health scores."
  ],
  [
    150,
    "CMDB Playbooks",
    "Which plays help remediate Services Have Owners Identified? (Choose 2)",
    [
      "Govern Data",
      "Report Data",
      "Fix Data",
      "Analyze Data"
    ],
    [
      2,
      3
    ],
    "Correct choices: C (Fix Data), D (Analyze Data). Playbooks guide analysis of the cause and fixing affected service records."
  ],
  [
    151,
    "CSDM Playbooks",
    "Which playbook supports risk context for Vulnerability or Security Incident Response?",
    [
      "Custom CI lifecycle statuses",
      "Product models without owners",
      "Locations without parents",
      "Application Services with Business Application Relationships"
    ],
    [
      3
    ],
    "Correct choice: D (Application Services with Business Application Relationships). Linking application services to business applications provides business context for prioritizing security response."
  ],
  [
    152,
    "IRE Identification",
    "Apache identification uses Class, Configuration File, Version. What happens when version changes?",
    [
      "CI reclassified",
      "Duplication error",
      "New Apache Web Server CI created",
      "Existing CI version updated"
    ],
    [
      2
    ],
    "Correct choice: C (New Apache Web Server CI created). Because Version is part of the identification key, a changed version may no longer match the existing CI and lead to a new record."
  ],
  [
    153,
    "CMDB Workspace",
    "Which tool generates class-owner tasks shown under My Work?",
    [
      "CMDB Health Dashboard",
      "Deduplication templates",
      "CMDB Data Manager"
    ],
    [
      2
    ],
    "Correct choice: C (CMDB Data Manager). CMDB Data Manager creates governance tasks assigned to responsible users or groups."
  ],
  [
    154,
    "Certification",
    "Which Data Manager policy creates tasks to validate and update CI fields?",
    [
      "Compliance",
      "Audit",
      "Attestation",
      "Certification"
    ],
    [
      3
    ],
    "Correct choice: D (Certification). Certification validates specific CI attributes and lets assignees correct them."
  ],
  [
    155,
    "Agent Client Collector",
    "Which are common ACC use cases? (Choose 2)",
    [
      "Network devices in DMZ",
      "Devices in secure environments",
      "Servers in data center",
      "Devices that intermittently connect"
    ],
    [
      1,
      3
    ],
    "Correct choices: B (Devices in secure environments), D (Devices that intermittently connect). An agent can collect data on secure or intermittently connected endpoints without relying solely on agentless scanning."
  ],
  [
    156,
    "IRE Reconciliation",
    "How can the authoritative data source be selected for CI attributes?",
    [
      "Data refresh period only",
      "Set source priority in reconciliation rules",
      "Run integrations manually in order",
      "Set run order in identification rules"
    ],
    [
      1
    ],
    "Correct choice: B (Set source priority in reconciliation rules). Reconciliation rules assign priorities for each source and attribute scope."
  ],
  [
    157,
    "Attestation",
    "Which policy creates tasks to validate CI existence?",
    [
      "Delete",
      "Attestation",
      "Certification",
      "Retire"
    ],
    [
      1
    ],
    "Correct choice: B (Attestation). Attestation is an acknowledgement that a CI still exists."
  ],
  [
    158,
    "CMDB Query Builder",
    "Find Seattle databases connected to application services and related incidents. What actions? (Choose 2)",
    [
      "Filter database location = Seattle",
      "Add Incident from Non-CMDB Tables",
      "Set relationship level up to second",
      "Add columns to application service"
    ],
    [
      0,
      1
    ],
    "Correct choices: A (Filter database location = Seattle), B (Add Incident from Non-CMDB Tables). Filter database location and add Incident as a non-CMDB table to include related tasks."
  ],
  [
    159,
    "Deduplication",
    "Discovered CI has current IP; imported CI has critical application relationship. Best remediation?",
    [
      "Keep all discovered attributes and ignore relationships",
      "Keep discovered CI and delete imported CI",
      "Keep discovered CI and merge imported relationship",
      "Keep imported CI and delete discovered CI"
    ],
    [
      2
    ],
    "Correct choice: C (Keep discovered CI and merge imported relationship). Preserve the current discovered CI while retaining the valuable relationship from the duplicate."
  ],
  [
    160,
    "Change Management",
    "How does CSDM help change management? (Choose 2)",
    [
      "Determine root cause of change issues",
      "Identify blackout windows",
      "Understand impact on services",
      "Route changes dynamically"
    ],
    [
      2,
      3
    ],
    "Correct choices: C (Understand impact on services), D (Route changes dynamically). Service relationships enable impact assessment; CI group data enables routing."
  ],
  [
    161,
    "Information Objects",
    "Where is regulated customer PII/PCI information modeled?",
    [
      "Customer Service Offerings and Databases",
      "Business Applications and Information Objects",
      "Technical Service Offerings and Dynamic CI Groups"
    ],
    [
      1
    ],
    "Correct choice: B (Business Applications and Information Objects). Information Objects link data types and regulatory context to Business Applications."
  ],
  [
    162,
    "CMDB Dashboard",
    "Which metrics support monitoring the Data Foundations Dashboard? (Choose 2)",
    [
      "CIs Processed by IRE",
      "All orphan CIs",
      "Active CIs updated in last 90 days",
      "All failed health audits"
    ],
    [
      0,
      2
    ],
    "Correct choices: A (CIs Processed by IRE), C (Active CIs updated in last 90 days). The dashboard tracks adoption of IRE processing and data freshness indicators."
  ],
  [
    163,
    "Unified Map",
    "Where is Unified Map accessed?",
    [
      "CI Class Manager",
      "CMDB Workspace",
      "CMDB Data Manager"
    ],
    [
      1
    ],
    "Correct choice: B (CMDB Workspace). Unified Map is available in CMDB Workspace."
  ],
  [
    164,
    "IRE Rules",
    "Can reconciliation rules work without CMDB 360?",
    [
      "CMDB 360 can always be used immediately",
      "ITOM Discovery must be bought for reconciliation",
      "IRE reconciliation rules work regardless of CMDB 360 activation"
    ],
    [
      2
    ],
    "Correct choice: C (IRE reconciliation rules work regardless of CMDB 360 activation). IRE identification and reconciliation are separate core capabilities from multisource visualization."
  ],
  [
    165,
    "CSDM Dashboard",
    "Which tool helps improve CSDM-related data quality?",
    [
      "CSDM Data Foundations Dashboard",
      "Default CMDB Health Dashboard",
      "ServiceNow Health Scan"
    ],
    [
      0
    ],
    "Correct choice: A (CSDM Data Foundations Dashboard). The CSDM dashboard focuses on recommended CSDM modeling and adoption metrics."
  ],
  [
    166,
    "Attestation vs Certification",
    "What is the difference?",
    [
      "Only attestation can be scheduled",
      "Attestation edits fields; certification confirms existence",
      "Attestation confirms existence; certification validates CI attributes",
      "Only attestation supports group assignment"
    ],
    [
      2
    ],
    "Correct choice: C (Attestation confirms existence; certification validates CI attributes). Attestation is an existence acknowledgement; certification checks and updates CI field values."
  ],
  [
    167,
    "CSDM Roles",
    "Who initiates requirements for an infrastructure upgrade catalog item?",
    [
      "Enterprise Architect",
      "Application Service Owners",
      "Technology Service Owners"
    ],
    [
      2
    ],
    "Correct choice: C (Technology Service Owners). Technology Service Owners manage infrastructure-related technical services and their request requirements."
  ],
  [
    168,
    "CSDM Walk",
    "What benefit does CSDM Walk provide?",
    [
      "More detailed technical support structure",
      "APM Foundation velocity",
      "Business Service impact assessment for ITSM"
    ],
    [
      2
    ],
    "Correct choice: C (Business Service impact assessment for ITSM). Walk develops service dependencies used to understand business impact of incidents, problems and changes."
  ],
  [
    169,
    "Incident Routing",
    "What Incident field is populated from the selected CI Support Group?",
    [
      "Assignment Group",
      "Support Group",
      "Approval Group",
      "Managed by Group",
      "Change Group"
    ],
    [
      0
    ],
    "Correct choice: A (Assignment Group). CI support group can populate the Incident Assignment Group for correct routing."
  ],
  [
    170,
    "CI Class Manager",
    "Which Attributes tab shows fields added specifically to Windows Server?",
    [
      "All",
      "Child",
      "Added",
      "Derived"
    ],
    [
      2
    ],
    "Correct choice: C (Added). Added lists attributes defined on the current class; Derived shows inherited fields."
  ],
  [
    171,
    "CMDB Health",
    "Why might Orphan evaluate 50,000 servers while Duplicate evaluates 60,000?",
    [
      "Orphan has a CMDB group",
      "Duplicate has Health Inclusion rule",
      "Orphan has Health Inclusion rule",
      "Duplicate has CMDB group"
    ],
    [
      2
    ],
    "Correct choice: C (Orphan has Health Inclusion rule). Health Inclusion Rules can limit the scope evaluated for an individual metric."
  ],
  [
    172,
    "CSDM Incident",
    "What CSDM data helps identify impacted users during a patient management incident?",
    [
      "Service Offerings by Department or Location",
      "Affected CI task_ci list",
      "Application Service environment",
      "Past incident history"
    ],
    [
      0
    ],
    "Correct choice: A (Service Offerings by Department or Location). Service offerings segmented by location or department help identify the consuming user populations."
  ],
  [
    173,
    "Archive Policies",
    "How should Linux servers not updated for six months be removed using Data Manager?",
    [
      "Business rule",
      "Scheduled job",
      "Archive policy"
    ],
    [
      2
    ],
    "Correct choice: C (Archive policy). Archive policies manage inactive or outdated CI data according to defined criteria."
  ],
  [
    174,
    "Dynamic Reconciliation",
    "Server uses largest RAM value: Tivoli 4096, ServiceNow 4096, LANDesk 2048, Altiris 8192. Result?",
    [
      "2048 MB",
      "4096 MB",
      "8192 MB"
    ],
    [
      2
    ],
    "Correct choice: C (8192 MB). The largest-value rule chooses 8192 MB, regardless of which value was reported most often."
  ],
  [
    175,
    "Service Graph Connectors",
    "What happens if a customized script transform changes in a connector upgrade?",
    [
      "Upgrade stops with error",
      "Skipped change is created; custom transform preserved",
      "Connector refuses to start"
    ],
    [
      1
    ],
    "Correct choice: B (Skipped change is created; custom transform preserved). Customized application artifacts commonly produce skipped changes on upgrades to protect local modifications."
  ],
  [
    176,
    "Dynamic Reconciliation",
    "Which are Dynamic Rule Types? (Choose all correct)",
    [
      "Most Reported",
      "Last Created",
      "Last Updated",
      "Smallest Value"
    ],
    [
      0,
      3
    ],
    "Correct choices: A (Most Reported), D (Smallest Value). Dynamic rules can select the most reported or smallest reported value; Last Created and Last Updated are not these rule types."
  ],
  [
    177,
    "CMDB Health",
    "Which correctness measures are used? (Choose 2)",
    [
      "Downgraded CIs",
      "Duplicate CIs",
      "Missing CIs",
      "Stale CIs",
      "Upgraded CIs"
    ],
    [
      1,
      3
    ],
    "Correct choices: B (Duplicate CIs), D (Stale CIs). Duplicate and stale CIs are correctness measures, along with orphan CIs."
  ],
  [
    178,
    "Service Mapping",
    "How does Application Service mapping help data center change planning?",
    [
      "Understand business impact of CIs",
      "Find physical locations",
      "Predict device shutdown sequence"
    ],
    [
      0
    ],
    "Correct choice: A (Understand business impact of CIs). Mapped service dependencies connect infrastructure changes to affected business services."
  ],
  [
    179,
    "CMDB Classes",
    "Which approaches reduce technical debt for custom CI classes? (Choose 2)",
    [
      "Repurpose base CI class and rename fields",
      "Extend Asset table",
      "Extend an existing appropriate CI class",
      "Check CMDB CI Class Models store app for suitable class"
    ],
    [
      2,
      3
    ],
    "Correct choices: C (Extend an existing appropriate CI class), D (Check CMDB CI Class Models store app for suitable class). Prefer existing class models and extend the appropriate CI hierarchy rather than repurposing unrelated classes."
  ],
  [
    180,
    "Principal Classes",
    "Where are Principal Classes designated?",
    [
      "CMDB Data Manager",
      "CI Class Manager",
      "System Properties",
      "CMDB Workspace"
    ],
    [
      1
    ],
    "Correct choice: B (CI Class Manager). The Basic Info tab of CI Class Manager contains the Principal Class checkbox."
  ],
  [
    181,
    "Data Manager",
    "Which group field leverages ownership set in CI Class Manager?",
    [
      "Managed By Group",
      "Approval Group",
      "Support Group",
      "Change Group"
    ],
    [
      0
    ],
    "Correct choice: A (Managed By Group). Managed By Group identifies the responsible group for ownership-related policy tasks."
  ],
  [
    182,
    "CMDB Compliance",
    "What configures compliance checks for servers missing patches?",
    [
      "Technical offerings and groups",
      "Certification Filter, Certification Template, Audit",
      "Stale, Orphan, Duplicate",
      "Certification Policies, Filters, Jobs"
    ],
    [
      1
    ],
    "Correct choice: B (Certification Filter, Certification Template, Audit). Audit-based compliance compares actual values with expected values configured through templates and filters."
  ],
  [
    183,
    "CMDB Terms",
    "What describes CI records missing expected logical or physical relationships?",
    [
      "Duplicate",
      "Required",
      "Orphan",
      "Stale",
      "Recommended",
      "Audit"
    ],
    [
      2
    ],
    "Correct choice: C (Orphan). Orphan CIs lack the expected relationships to other CIs."
  ],
  [
    184,
    "CSDM Classes",
    "Which class is published to business users and supports business capabilities?",
    [
      "Application Service",
      "Technology Management Service",
      "Business Service"
    ],
    [
      2
    ],
    "Correct choice: C (Business Service). Business Services represent capabilities and outcomes offered to business consumers."
  ],
  [
    185,
    "CSDM Domains",
    "Which domain contains Business Application?",
    [
      "Design and Planning",
      "Foundation",
      "Service Delivery",
      "Sell / Consume"
    ],
    [
      0
    ],
    "Correct choice: A (Design and Planning). Business Applications are modeled in the Design and Planning domain."
  ],
  [
    186,
    "Discovery",
    "Which integration provides operational hardware and application CI data for incident resolution?",
    [
      "Hardware Asset Management",
      "Risk Management",
      "Discovery",
      "Service Portfolio Management"
    ],
    [
      2
    ],
    "Correct choice: C (Discovery). Discovery populates operational infrastructure and application CI details."
  ],
  [
    187,
    "CMDB Terms",
    "Which CI records are detected during IRE processing and have remediation tools?",
    [
      "Audits",
      "Orphan CIs",
      "Required fields",
      "Recommended fields",
      "Stale CIs",
      "Duplicate CIs"
    ],
    [
      5
    ],
    "Correct choice: F (Duplicate CIs). Duplicate CIs represent the same entity multiple times and can be addressed using deduplication tools."
  ],
  [
    188,
    "CSDM Lifecycle",
    "Which table uses CI type to determine valid sublevel lifecycle states?",
    [
      "life_cycle_mapping",
      "life_cycle_stage",
      "life_cycle_stage_status",
      "life_cycle_object"
    ],
    [
      3
    ],
    "Correct choice: D (life_cycle_object). life_cycle_object associates lifecycle options with object types."
  ],
  [
    189,
    "CMDB Roles",
    "Which role has the highest-level CMDB privileges?",
    [
      "CI Analyst",
      "Service or Product Owner",
      "Configuration Manager / CMDB Admin",
      "CMDB Process Owner"
    ],
    [
      3
    ],
    "Correct choice: D (CMDB Process Owner). The CMDB Process Owner is accountable for CMDB governance and holds the highest privileges in this role mapping."
  ],
  [
    190,
    "CMDB Terms",
    "Which term describes useful fields that improve CI accuracy, completeness and troubleshooting?",
    [
      "Duplicate",
      "Required",
      "Orphan",
      "Stale",
      "Recommended",
      "Audit"
    ],
    [
      4
    ],
    "Correct choice: E (Recommended). Recommended fields improve data quality and usefulness even when not strictly mandatory."
  ]
];
const QUESTIONS=RAW.filter(q=>q[4].length>0).map(([id,topic,question,options,correct,explanation])=>({id,topic,question,options,correct,explanation}));
