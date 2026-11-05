/* Complete corrected practice bank; see CORRECTIONS.md for rewritten source items. */
const QUESTIONS = [
  {
    "id": 3,
    "topic": "Health Dashboard — Correctness",
    "question": "A CMDB Administrator would like to minimize stale Cls in the CMDB. Which CMDB Health Dashboard scorecard displays this information?",
    "options": [
      "Completeness",
      "Correctness",
      "Compliance"
    ],
    "correct": [
      1
    ],
    "explanation": "Correctness measures whether CI records remain trustworthy, including whether they are stale. A stale CI has not been refreshed within the configured period, so this scorecard highlights records that may no longer reflect reality.",
    "status": "practice",
    "issue": "",
    "source": "https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/overview-cmdb-health.html"
  },
  {
    "id": 4,
    "topic": "CMDB Structure — Classes",
    "question": "An organization needs to maintain non-discoverable attributes, such as warranty expiration dates, for hardware Cls. These attributes are not updated by automated discovery tools. What method ensures these attributes are accurately maintained for all Cls?",
    "options": [
      "Use a scheduled data import to update the attributes from an external source",
      "Create a new Cl class specifically for non-discoverable attributes",
      "Use the CMDB Reconciliation Engine to update the attributes"
    ],
    "correct": [
      0
    ],
    "explanation": "A scheduled import from the authoritative asset or warranty system can regularly populate non-discoverable warranty dates on the existing hardware CIs. Creating a new CI class only changes the data model; it does not maintain changing values. IRE reconciles incoming data but is not, by itself, a source of warranty dates.",
    "status": "practice",
    "issue": "",
    "source": "https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/t_CreateCIType.html"
  },
  {
    "id": 5,
    "topic": "Data Manager — Policy Types",
    "question": "A Configuration Manager needs to enable a CMDB Data Manager policy to remove records from a Cl Class while retaining the ability to restore them within a specified period. Which policy type should the Configuration Manager create?",
    "options": [
      "Certification",
      "Delete",
      "Retire",
      "Archive"
    ],
    "correct": [
      3
    ],
    "explanation": "Archive is appropriate because it moves eligible older CI records out of the active dataset while retaining them for a defined retention or recovery period. Delete is intended for permanent removal, while Retire changes lifecycle state without archiving the record.",
    "status": "practice",
    "issue": "",
    "source": "https://www.servicenow.com/docs/r/zurich/servicenow-platform/configuration-management-database-cmdb/cmdb-data-management.html"
  },
  {
    "id": 6,
    "topic": "De-duplication",
    "question": "A CMDB Administrator is asked to clean up CMDB duplicates. What is the preferred way to manage this task?",
    "options": [
      "My Tasks in the Application Navigator",
      "The de-duplication task module",
      "The de-duplication dashboard on the CMDB Workspace"
    ],
    "correct": [
      2
    ],
    "explanation": "The De-duplication Dashboard in CMDB Workspace is the preferred central work area for reviewing duplicate CI tasks, viewing status, and applying templates to remediate similar duplicates in bulk. Individual de-duplication tasks and the Duplicate CI Remediator are also valid for resolving one duplicate set.",
    "status": "practice",
    "issue": "",
    "source": "https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/de-duplication-tasks.html"
  },
  {
    "id": 7,
    "topic": "CSDM — Domains & Structure",
    "question": "A Business Relationship Manager in an organization wants to implement Service Portfolio Management (SPM) and to present offerings to business consumers. Which CSDM Domain does this align with?",
    "options": [
      "Build and Integration (Build)",
      "Service Consumption (Sell/Consume)",
      "Design and Planning (Design)",
      "Service Delivery"
    ],
    "correct": [
      1
    ],
    "explanation": "Service Consumption (Sell/Consume) contains business services, service offerings, service portfolios and the catalogs through which business consumers request offerings. Design and Planning instead describes business applications, capabilities and information objects.",
    "status": "practice",
    "issue": "",
    "source": "https://www.servicenow.com/docs/r/xanadu/servicenow-platform/common-service-data-model-csdm/sell-consume-domain.html"
  },
  {
    "id": 8,
    "topic": "CMDB Workspace",
    "question": "A Service Owner needs to view related items, such as Active Incidents and Planned Changes, directly ‘on the home node of the Unified Map. Which work area would allow the Service Owner to meet this goal?",
    "options": [
      "Tool box",
      "Map",
      "Contextual side panel",
      "Content controls"
    ],
    "correct": [
      2
    ],
    "explanation": "The contextual side panel shows information associated with the selected map node, such as active incidents and planned changes. It lets the service owner inspect operational records without leaving the Unified Map; the map canvas itself primarily displays relationships.",
    "status": "practice",
    "issue": "",
    "source": "https://learning.servicenow.com/kb?id=kb_article_view&sysparm_article=KB0012913"
  },
  {
    "id": 9,
    "topic": "Data Manager —Policy Types",
    "question": "Which are CMDB Data Manager end of life policy types? (Choose 2 options)",
    "options": [
      "Retire",
      "Lost",
      "Decommission",
      "Disposed",
      "Archive"
    ],
    "correct": [
      0,
      4
    ],
    "explanation": "Retire is an end-of-life policy because it changes a CI to a retired lifecycle state when it is no longer in use. Archive is also an end-of-life policy because it moves eligible retired records out of the active CMDB while retaining them according to policy.",
    "status": "practice",
    "issue": "",
    "source": "https://www.servicenow.com/docs/r/zurich/servicenow-platform/configuration-management-database-cmdb/cmdb-data-management.html"
  },
  {
    "id": 10,
    "topic": "CMDB Data Foundations Dashboard",
    "question": "A CMDB Administrator wants to leverage the CMDB Data Foundations Dashboard. What are benefits of using this application? (Choose 2 options)",
    "options": [
      "Has a framework to create custom metrics for the CMDB",
      "Checks that important data is valid and properly configured",
      "Provides playbooks to assist in the remediation of potential risks",
      "Uses automation to remediate potential risks"
    ],
    "correct": [
      1,
      2
    ],
    "explanation": "B is correct: CMDB Data Foundations Dashboard checks whether configuration and integration practices are valid and properly set up. C is correct: its metric-linked remediation playbooks guide administrators in investigating and correcting identified risks. The dashboard is not primarily a custom-metrics development framework, nor does it automatically resolve every problem.",
    "status": "practice",
    "issue": "",
    "source": "https://www.servicenow.com/docs/r/xanadu/servicenow-platform/configuration-management-database-cmdb/csdm-cmdb-foundations-dashboards.html"
  },
  {
    "id": 11,
    "topic": "Data Manager — Policy Types",
    "question": "CMDB Configuration Manager intends to implement CMDB Data Manager delete and archive policies for all server records in the New York datacenter. In which lifecycle state would servers be affected by these new policies?",
    "options": [
      "End of Life - Retired",
      "Missing - Stolen",
      "Inventory - Available",
      "In any lifecycle state"
    ],
    "correct": [
      0
    ],
    "explanation": "The baseline CMDB Data Manager Archive/Delete Policy Processor applies these policies to CIs that have already been retired. Thus the eligible lifecycle state in this question is End of Life – Retired, not Missing – Stolen. Individual policies can add further conditions such as datacenter.",
    "status": "practice",
    "issue": "",
    "source": "https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/components-cmdb-data-manager.html"
  },
  {
    "id": 12,
    "topic": "Usage",
    "question": "Which two CMDB 360 saved-query insights show consolidated CI records and disagreements in attribute values between reporting sources? (Choose 2)",
    "options": [
      "Unique Cls created from different data sources",
      "Gaps in attribute data from different data sources",
      "Different attribute values from different data sources",
      "Orphan Cls created from different data sources",
      "Duplicate configuration items from different data sources"
    ],
    "correct": [
      0,
      2
    ],
    "explanation": "CMDB 360 Get Records queries can display unique reconciled CIs from multiple reporting sources, while Compare Attribute Values queries reveal conflicting values reported for the same CI. The Find Gap query type can additionally identify source-coverage gaps, so this question focuses specifically on unique records and conflicting values.",
    "status": "practice",
    "issue": "",
    "source": "https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/cmdb360-exp-cmdb-workspace.html"
  },
  {
    "id": 13,
    "topic": "De-duplication",
    "question": "Where in CMDB Workspace can the team find de-duplication tasks generated by the IRE?",
    "options": [
      "Total status tile under My Work",
      "CMDB feature adoption tile under Insights",
      "Important actions tile under Home"
    ],
    "correct": [
      2
    ],
    "explanation": "The Home view's Important actions tile includes de-duplication cards generated by IRE. Administrators can select the card to access de-duplication tasks and the dashboard for remediation.",
    "status": "practice",
    "issue": "",
    "source": "https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/cmdb-workspace-home-view.html"
  },
  {
    "id": 14,
    "topic": "CMDB Structure — Classes",
    "question": "A hardware CI has a warranty expiration date that Discovery cannot detect. How should the organization keep that attribute current?",
    "options": [
      "Schedule imports of warranty dates from a trusted asset or vendor source",
      "Create a separate CI class for each warranty date",
      "Rely on IRE to discover warranty dates without an input source"
    ],
    "correct": [
      0
    ],
    "explanation": "A scheduled import from a trusted asset or warranty system updates warranty expiration dates that Discovery cannot obtain. Creating a separate CI class does not keep those attributes current; IRE controls identification and authorized updates but is not itself the source of warranty information.",
    "status": "practice",
    "issue": "",
    "source": "https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/ci-class-manager-landing-page.html"
  },
  {
    "id": 15,
    "topic": "CSDM — Domains & Structure",
    "question": "Which CSDM domain models relationships among infrastructure CIs, Technical Service Offerings, and Application Services?",
    "options": [
      "Foundation",
      "Service Consumption (Sell/Consume)",
      "Service Delivery (Manage Technical Services)",
      "Design and Planning"
    ],
    "correct": [
      2
    ],
    "explanation": "Service Delivery models the technical services, technical service offerings, application services and their supporting infrastructure. Service Consumption concerns services presented to consumers, not the technical dependency structure.",
    "status": "practice",
    "issue": "",
    "source": "https://www.servicenow.com/docs/r/servicenow-platform/common-service-data-model-csdm/csdm-enable-tso.html"
  },
  {
    "id": 17,
    "topic": "CMDB Data Foundations Dashboard",
    "question": "A CMDB administrator sees low scores on the CMDB Data Foundations Dashboard. Which two actions should they take? (Choose 2)",
    "options": [
      "Use the remediation playbooks linked to affected metrics",
      "Prioritize metrics marked Critical or High",
      "Exclude failing CIs solely to increase the score",
      "Delete every non-operational CI without investigating"
    ],
    "correct": [
      0,
      1
    ],
    "explanation": "Remediation playbooks describe concrete steps for investigating and fixing weak foundation metrics. Focusing first on Critical and High priority metrics addresses the greatest risk; excluding bad records merely to raise scores does not improve underlying data quality.",
    "status": "practice",
    "issue": "",
    "source": "https://www.servicenow.com/docs/r/zurich/servicenow-platform/configuration-management-database-cmdb/cmdb-data-foundations-dashboard.html"
  },
  {
    "id": 18,
    "topic": "Ingestion — SGC",
    "question": "AMDB Administrator needs the fastest time to value solution for effectively ingesting, managing, and maintaining Cls and relationships. Which management tool will accomplish this to import Windows computer data from SCCM?",
    "options": [
      "Import set using JDBC data source connection to SCCM using transform maps",
      "SCCM Usage Metering Spoke",
      "SCCM Service Graph Connector",
      "IntegrationHub ETL connection to SCCM using Robust Transform Engine (RTE)"
    ],
    "correct": [
      2
    ],
    "explanation": "The SCCM Service Graph Connector is a prebuilt, supported integration that imports SCCM data about computers, hardware, operating systems and software into the CMDB. SCCM Usage Metering is for usage-related data, not a replacement for CI/relationship ingestion.",
    "status": "practice",
    "issue": "",
    "source": "https://www.servicenow.com/docs/r/servicenow-platform/service-graph-connectors/cmdb-integration-sccm.html"
  },
  {
    "id": 19,
    "topic": "Cl Class Manager — Principal Classes",
    "question": "An organization is updating the CMDB to include new asset types like loT devices. Relevant Cl classes need to be added and outdated ones need to be removed from the Principal Class filter to ensure accurate display in ITSM processes. Which roles are needed to add or remove classes? (Choose 2 options)",
    "options": [
      "cmdb_query_builder",
      "personalize_dictionary",
      "sn_csdm_admin",
      "sn_cmdb_admin"
    ],
    "correct": [
      1,
      3
    ],
    "explanation": "B is correct: personalize_dictionary permissions are required to modify class/dictionary metadata. D is correct: sn_cmdb_admin is an authorized CMDB administrative role for managing Principal Classes. The official prerequisites are sn_cmdb_admin OR itil_admin, plus personalize_dictionary; sn_csdm_admin is not the required CMDB class role.",
    "status": "practice",
    "issue": "",
    "source": "https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/update-principal-class-filter.html"
  },
  {
    "id": 20,
    "topic": "Data Manager — Cert vs Attest",
    "question": "A Configuration Management team wants to confirm that all servers in the CMDB are correctly associated with their location. Which CMDB Data Manager policy type does the team create?",
    "options": [
      "Retire",
      "Delete",
      "Attestation",
      "Certification",
      "Archive"
    ],
    "correct": [
      3
    ],
    "explanation": "Certification is correct because the team needs to validate the accuracy of the Location attribute on server CI records. A Certification policy creates review tasks that allow responsible users to confirm or correct CI field values. Attestation confirms whether a CI exists, while Delete removes records and does not validate their attributes.",
    "status": "practice",
    "issue": "",
    "source": "https://www.servicenow.com/docs/r/zurich/servicenow-platform/configuration-management-database-cmdb/cmdb-data-management.html"
  },
  {
    "id": 21,
    "topic": "IRE Dynamic Reconciliation",
    "question": "The Server class uses lowest Disk Space, while Windows Server uses most reported. Tivoli 75 GB, ServiceNow 75 GB, LANDesk 50 GB, Altiris 80 GB. Which value is used for Windows Server?",
    "options": [
      "80 GB",
      "75 GB",
      "50 GB"
    ],
    "correct": [
      1
    ],
    "explanation": "Windows Server has its own dynamic rule, Most Reported, which is more specific than the Server parent rule, Lowest Value. Two sources report 75 GB, more than any other value, so 75 GB wins even though 50 GB is the smallest reported value.",
    "status": "practice",
    "issue": "",
    "source": "https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/r_ReconciliationRulesPrinciples.html"
  },
  {
    "id": 22,
    "topic": "CMDB Structure —Asset-Cl",
    "question": "An Asset Manager wants to ensure that Asset records and Cl records are kept synchronized automatically. How does the Manager do this? (Choose 2 options)",
    "options": [
      "Ensure one-to-one physical mapping between Asset and Cl",
      "Ensure that the business rule to update Asset fields on change on the CI table is active",
      "Ensure that scheduled jobs are run during off-business hours to ensure that sync happens",
      "Ensure that the business rule to update Cl fields on change on the asset table is active"
    ],
    "correct": [
      1,
      3
    ],
    "explanation": "The CI-to-Asset business rule copies relevant changes from the CI record to its linked asset, and the Asset-to-CI rule performs the reverse synchronization. Both directions are needed because staff may update either record; a scheduled job alone does not provide the same event-driven field synchronization.",
    "status": "practice",
    "issue": "",
    "source": "https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/t_CreateCIType.html"
  },
  {
    "id": 23,
    "topic": "Governance & Business Value",
    "question": "A retail organization needs to ensure that incidents affecting customer-facing services are resolved quickly to reduce potential revenue loss. Which CSDM attribute is used to prioritize these services?",
    "options": [
      "Assignment Group on the Cl record",
      "Affected Cls in the Incident record",
      "Service classification in the Technical Service",
      "Business Criticality in the Service Offering"
    ],
    "correct": [
      3
    ],
    "explanation": "Business Criticality on a Service Offering expresses how important that consumer-facing service is to the business. Incident teams can use it to prioritize disruption to revenue-critical services; an assignment group identifies responders, not business impact.",
    "status": "practice",
    "issue": "",
    "source": "https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/overview-cmdb-health.html"
  },
  {
    "id": 24,
    "topic": "CMDB Structure — Asset-Cl",
    "question": "User endpoint devices are imported into the CMDB and populate the ‘Assigned to’ [assigned_to] field on the Computer [cmdb_ci_computer] Cl. The Asset team puts in a request for the Configuration Analysts to populate the ‘Assigned to’ field on the related Asset. What action does a Configuration Analyst take to achieve this in an automated way?",
    "options": [
      "Use the Asset-Cl Field Mapping module to create a new rule to replicate the ‘Assigned to! value between the asset and associated Cl",
      "Configure a business rule on the computer table to use a script to populate the ‘Assigned to! field on the asset based on insert or update in the computer class ‘Assigned to’ field",
      "Hide the ‘Assigned to’ field on the asset record and create a new field that dot walks to the related Cl to get the ‘Assigned to' value"
    ],
    "correct": [
      0
    ],
    "explanation": "Asset-CI Field Mapping defines which field on the CI should synchronize with which field on the linked Asset. Adding a mapping for Assigned to uses the platform synchronization mechanism instead of creating custom scripts or merely displaying a dot-walked value.",
    "status": "practice",
    "issue": "",
    "source": "https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/t_CreateCIType.html"
  },
  {
    "id": 25,
    "topic": "ITSM Mapping",
    "question": "The Change Management team in an organization wants to implement a Change across multiple Cls at the same time. Which field on the Change Request form needs to be populated with a dynamic Cl group?",
    "options": [
      "Configuration item",
      "Business Service",
      "Service Offering"
    ],
    "correct": [
      0
    ],
    "explanation": "Selecting a dynamic CI group in the Change Request Configuration item field expands its member CIs into the Affected CIs related list, enabling the change to target multiple CIs together.",
    "status": "practice",
    "issue": "",
    "source": "https://www.servicenow.com/docs/r/it-service-management/change-management/t_CreateAChange.html"
  },
  {
    "id": 26,
    "topic": "CSDM — Information Objects",
    "question": "A company wants to track regulatory compliance. ServiceNow has an artifact type called an information object as part of the CSDM framework. What is the purpose of an information object?",
    "options": [
      "Itdescribes data in general on a group of Configuration Items.",
      "It describes the logical data to the Business Applications.",
      "_ Itdescribes data exchanged between an API interface and an Application."
    ],
    "correct": [
      1
    ],
    "explanation": "An Information Object represents a logical category of business information, such as customer or regulated patient data, and can be related to Business Applications that use it. It describes the information independently of a particular database, API payload or server.",
    "status": "practice",
    "issue": "",
    "source": "https://www.servicenow.com/docs/r/servicenow-platform/common-service-data-model-csdm/design-domain.html"
  },
  {
    "id": 27,
    "topic": "CMDB Workspace",
    "question": "Where can an administrator perform Natural Language Queries (NLQ)?",
    "options": [
      "CMDB Data Manager",
      "Cl Class Manager",
      "CMDB Workspace",
      "CMDB Health Dashboard"
    ],
    "correct": [
      2
    ],
    "explanation": "CMDB Workspace provides the user-facing query experience, including Natural Language Queries for finding CI information without building every condition manually. Data Manager handles lifecycle policies, while CI Class Manager defines classes and rules.",
    "status": "practice",
    "issue": "",
    "source": "https://learning.servicenow.com/kb?id=kb_article_view&sysparm_article=KB0012913"
  },
  {
    "id": 28,
    "topic": "IRE — Identification Rules",
    "question": "The following identification rule for a Cl class has been defined: + Serial Number | criterion attributes: serialnumber, serial_number_type | Priority: 100 + Hardware | criterion attributes: serial_number | Priority: 200 + Hardware | criterion attributes: name | Priority: 300 + Network Adapter | criterion attributes: mac_address, name | Priority: 400 Two new Cl records are imported into the hardware class of the CMDB: Cl1: The name of this Cl record matches the name of an existing Cl record in the CMDB. Cl2: The IP address of this Cl record matches the IP address of an existing Cl record in the CMDB. Which is correct based on the identification rule and the imported Cl records?",
    "options": [
      "Cl and Cl2 both will be updated with matching records",
      "C1 will be updated with matching record and C12 will be inserted as new record",
      "C11 will be inserted as new record and Cl2 will be updated with matching record",
      "Cl1 and Cl2 both will be inserted as new records"
    ],
    "correct": [
      1
    ],
    "explanation": "CI1 matches an existing CI by Name because Name is an explicitly configured Hardware identification criterion, so IRE can update the match. CI2 only shares an IP address, which is not listed in the supplied identifier entries, so IRE cannot identify it by IP alone and inserts a new record.",
    "status": "practice",
    "issue": "",
    "source": "https://learning.servicenow.com/kb?id=kb_article_view&sysparm_article=KB0012913"
  },
  {
    "id": 29,
    "topic": "CI Class Manager",
    "question": "How can a class be set as a Principal Class on the Basic Info tab?",
    "options": [
      "Click the Principal Class UI Action button",
      "Check the Principal Class check box",
      "Select Yes from the Principal Class choice list"
    ],
    "correct": [
      1
    ],
    "explanation": "Principal Class is a checkbox on the Basic Info tab of CI Class Manager.",
    "status": "practice",
    "issue": "",
    "source": "https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/t_CreateCIType.html"
  },
  {
    "id": 30,
    "topic": "CSDM Data Foundations Dashboard",
    "question": "A Configuration Manager is implementing end to end service modeling and wants to get help on status and playbooks for improving the quality. What does the Configuration Manager reference to obtain guidance?",
    "options": [
      "CMDB Data Foundations Dashboard",
      "CSDM Data Foundations Dashboard",
      "Service Mapping Data Foundations Dashboard",
      "CMDB Query Builder"
    ],
    "correct": [
      1
    ],
    "explanation": "The CSDM Data Foundations Dashboard measures CSDM model adoption and service relationships and links to recommendations and playbooks. The CMDB dashboard instead concentrates on CMDB configuration and foundational data quality.",
    "status": "practice",
    "issue": "",
    "source": "https://www.servicenow.com/docs/r/servicenow-platform/common-service-data-model-csdm/csdm-data-foundations-dashboard-csdm.html"
  },
  {
    "id": 31,
    "topic": "CSDM—ITSM Mapping",
    "question": "The Incident Process Owner asks which classes of CSDM are used on the Incident form. Which classes are appropriate? (Choose 2 options)",
    "options": [
      "Business Application",
      "Service Offering",
      "Application Service",
      "Service Portfolio"
    ],
    "correct": [
      1,
      2
    ],
    "explanation": "Service Offering identifies the service a user consumes and its agreed support context, while Application Service represents the deployed application supporting the incident. Both help connect the incident to service impact; Business Application is a design-time portfolio record.",
    "status": "practice",
    "issue": "",
    "source": "https://www.servicenow.com/docs/r/servicenow-platform/common-service-data-model-csdm/csdm-implementation-stages.html"
  },
  {
    "id": 32,
    "topic": "IRE— Identification Rules",
    "question": "A CMDB Administrator needs to configure a new application identification rule that considers the potential for the same application installed more than once on the same server. Which is the best choice of a criterion attribute?",
    "options": [
      "Configuration File Name",
      "Configuration File Path",
      "Class",
      "Version",
      "Port"
    ],
    "correct": [
      1
    ],
    "explanation": "Configuration File Path can distinguish two installations of the same application on one server because each installation may have its own directory. Application class or version could be identical for both, and a filename alone might repeat in different directories.",
    "status": "practice",
    "issue": "",
    "source": "https://learning.servicenow.com/kb?id=kb_article_view&sysparm_article=KB0012913"
  },
  {
    "id": 33,
    "topic": "CMDB 360 — Usage",
    "question": "Where can a CMDB 360/Multisource CMDB Saved Query be viewed and created in the CMDB Workspace?",
    "options": [
      "CMDB Query Builder",
      "Coverage window on the CMDB 360 tab",
      "Saved queries window on the CMDB 360 tab",
      "Saved queries window on the Insights tab"
    ],
    "correct": [
      2
    ],
    "explanation": "The CMDB 360 tab in CMDB Workspace includes a Saved queries area where multisource queries are created and reopened. These queries compare values and coverage from different reporting sources; the standard CMDB Query Builder addresses CI relationships instead.",
    "status": "practice",
    "issue": "",
    "source": "https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/components-multisource-cmdb.html"
  },
  {
    "id": 34,
    "topic": "CI Class Manager",
    "question": "Which feature streamlines frequent management of the Windows Server class?",
    "options": [
      "Search CI Classes",
      "Pinned Classes",
      "CI Favorites"
    ],
    "correct": [
      1
    ],
    "explanation": "Pinned Classes lets an administrator keep frequently managed classes, such as Windows Server, readily accessible in CI Class Manager. This avoids repeating navigation or searches each time they need to edit attributes or class rules.",
    "status": "practice",
    "issue": "",
    "source": "https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/t_CreateCIType.html"
  },
  {
    "id": 35,
    "topic": "CSDM — Life Cycle Tables",
    "question": "A Configuration Management Governance team is transitioning from utilizing legacy CMDB status fields to CSDM life cycle status fields. Which table can be modified?",
    "options": [
      "Life Cycle Stages [life_cycle_stage]",
      "Life Cycle Controls [life cycle control]",
      "Life Cycle Stage Status [life_cycle_stage_status]",
      "Life Cycle Mapping [life_cycle_mapping]"
    ],
    "correct": [
      3
    ],
    "explanation": "Life Cycle Mapping links legacy status values to the corresponding CSDM Life Cycle Stage and Stage Status values. Adjusting mappings preserves a consistent translation during migration without redefining the standard lifecycle vocabulary itself.",
    "status": "practice",
    "issue": "",
    "source": "https://www.servicenow.com/docs/r/servicenow-platform/common-service-data-model-csdm/csdm-implementation-stages.html"
  },
  {
    "id": 36,
    "topic": "IRE— Imports",
    "question": "AMDB Administrator needs to prevent duplicate Cl creation from import sets that load data into the CMDB from vendor shipment files containing Cl information. How can the Administrator do this?",
    "options": [
      "Create comparison rules in the IRE",
      "Use the CMDBTransformUtil API in the transform script",
      "Set the system property to utilize the IRE within transform maps",
      "Set the coalesce on two mappings within the transform map"
    ],
    "correct": [
      1
    ],
    "explanation": "CMDBTransformUtil is called from a transform-map script to submit incoming rows to IRE. IRE applies identification and reconciliation rules, helping avoid duplicate CIs and unauthorized attribute overwrites that direct inserts could cause.",
    "status": "practice",
    "issue": "",
    "source": "https://learning.servicenow.com/kb?id=kb_article_view&sysparm_article=KB0012913"
  },
  {
    "id": 37,
    "topic": "CMDB Health",
    "question": "Which submetric belongs to the Completeness KPI?",
    "options": [
      "Required",
      "Audit",
      "Orphan"
    ],
    "correct": [
      0
    ],
    "explanation": "The Required submetric measures whether mandatory or required CI fields have values, so it contributes to Completeness. Audit measures conformity to expected values, while Orphan concerns missing relationships and belongs to Correctness.",
    "status": "practice",
    "issue": "",
    "source": "https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/overview-cmdb-health.html"
  },
  {
    "id": 38,
    "topic": "CMDB Relationships",
    "question": "How can Support Group be automatically populated and maintained on a CI record?",
    "options": [
      "Dynamic CI Group",
      "Technology Management Service",
      "CI Class Manager",
      "Technology Management Service Offering"
    ],
    "correct": [
      3
    ],
    "explanation": "A Technology Management Service Offering can specify the operational Support Group for the CIs associated through its dynamic CI group. This supplies a consistent support owner across the group rather than manually editing each CI.",
    "status": "practice",
    "issue": "",
    "source": "https://learning.servicenow.com/kb?id=kb_article_view&sysparm_article=KB0012913"
  },
  {
    "id": 39,
    "topic": "CMDB 360 — Activation",
    "question": "A CMDB Administrator needs to set up CMDB 360/Multisource CMDB. System properties: + glide.identification_engine.multisource_enabled — Enables CMDB 360 + glide.identification_engine.multisource_cmdb_ci_enabled ~ Enables capturing CMDB 360 data for Cs from CMDB classes + glide.cmdb logger.source.cmdb_multisource — Enables logging for CMDB 360 + glide.identification_engine.multisource.recompute.max.ci.limit + Maximum number of Cls in CMDB 360 recompute operation Which property ‘Enables CMDB 360'?",
    "options": [
      "glide.identification_engine.multisource_enabled",
      "glide.identification_engine.multisource_cmdb_ci_enabled",
      "glide.cmdb.logger.source.cmdb_multisource",
      "glide.identification_engine.multisource.recompute.max.ci.limit"
    ],
    "correct": [
      0
    ],
    "explanation": "The multisource_enabled property is the main switch that turns on CMDB 360/Multisource functionality. The other properties shown concern narrower capture, logging or recomputation settings, so they do not replace the main enablement switch.",
    "status": "practice",
    "issue": "",
    "source": "https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/components-multisource-cmdb.html"
  },
  {
    "id": 40,
    "topic": "Data Manager — Config",
    "question": "Where does a user with the appropriate role(s) review and manage the generated tasks after configuring CMDB Data Manager policies?",
    "options": [
      "CMDB Health Dashboard > Duplicate Cls tab",
      "CMDB Workspace > My Work tab",
      "CMDB Workspace > Management tab",
      "CMDB Health Dashboard > Audit tab"
    ],
    "correct": [
      1
    ],
    "explanation": "Data Manager creates policy tasks for the responsible users or groups. The My Work tab in CMDB Workspace is where assignees review and complete those tasks; the Management area is used for configuring and administering policies.",
    "status": "practice",
    "issue": "",
    "source": "https://www.servicenow.com/docs/r/zurich/servicenow-platform/configuration-management-database-cmdb/cmdb-data-management.html"
  },
  {
    "id": 41,
    "topic": "IRE— Identification Rules",
    "question": "A global enterprise integrates data from multiple discovery sources such as ServiceNow Discovery, SCCM, AWS, and manual uploads to populate its CMDB. However, each discovery source categorizes the same Cls differently, leading to duplicate records and inconsistencies across the system. As a result, the CMDB team is struggling with data accuracy and standardization. What actions does the CMDB team take to resolve the issue? (Choose 2 options)",
    "options": [
      "Use Cl Class Manager to establish standardized Cl classes and attributes across all discovery sources",
      "Allow each discovery source to define its own Cl class, even if it results in inconsistencies",
      "Implement and use identification and reconciliation rules to avoid duplicates and standardize Cl classification",
      "Create a custom script to manually adjust incoming data before storing it in the CMDB"
    ],
    "correct": [
      0,
      2
    ],
    "explanation": "CI Class Manager establishes a shared class hierarchy and consistent attributes so integrations map equivalent devices to the same kinds of records. IRE then matches incoming records to existing CIs and controls which sources may update them, preventing duplicate and conflicting data.",
    "status": "practice",
    "issue": "",
    "source": "https://learning.servicenow.com/kb?id=kb_article_view&sysparm_article=KB0012913"
  },
  {
    "id": 42,
    "topic": "Service Mapping & Visualization",
    "question": "A Configuration Manager working in the CMDB Workspace wants to see how Cls are connected to each other. Which tool can be used?",
    "options": [
      "Relationship Map",
      "Unified Map",
      "Business Service Map"
    ],
    "correct": [
      1
    ],
    "explanation": "Unified Map visualizes a selected CI and the other CIs connected to it, allowing administrators to follow dependencies in CMDB Workspace. It is designed for interactive exploration of the surrounding topology, not just a list of class definitions.",
    "status": "practice",
    "issue": "",
    "source": "https://learning.servicenow.com/kb?id=kb_article_view&sysparm_article=KB0012913"
  },
  {
    "id": 43,
    "topic": "CMDB Data Foundations Dashboard",
    "question": "A CMDB team has noticed that some hardware Cls are missing the serial number information, making it difficult to maintain data accuracy. The team needs a structured approach to identify and address these gaps. Which accomplishes this task?",
    "options": [
      "CMDB Data Foundation Playbook",
      "Cl Class Manager",
      "Service Graph Connectors"
    ],
    "correct": [
      0
    ],
    "explanation": "A CMDB Data Foundations playbook gives a guided process to investigate why serial numbers are missing and how to remediate the affected records or ingestion process. CI Class Manager defines fields, while a connector only supplies data from a source.",
    "status": "practice",
    "issue": "",
    "source": "https://learning.servicenow.com/kb?id=kb_article_view&sysparm_article=KB0012913"
  },
  {
    "id": 44,
    "topic": "Ingestion—SGC",
    "question": "A ServiceNow Administrator wants to implement Service Graph Connectors to provide integrations to many third-party solutions that the company wants integrated into the CMDB. Which categories of connectors are available to the Administrator? (Choose 2 options)",
    "options": [
      "Workflow Automation",
      "Cloud",
      "DevOps",
      "Observability"
    ],
    "correct": [
      1,
      3
    ],
    "explanation": "Cloud connectors integrate inventory from cloud platforms, while Observability connectors ingest configuration context from monitoring and observability systems. Both are common Service Graph Connector source categories for populating the CMDB.",
    "status": "practice",
    "issue": "",
    "source": "https://www.servicenow.com/docs/r/zurich/servicenow-platform/service-graph-connectors/cmdb-sgc-available.html"
  },
  {
    "id": 45,
    "topic": "IRE— Identification Rules",
    "question": "Using Cl Class Manager, the Tomcat identification rule has the following criterion attributes configured: * Class + Install Directory Which identifier entry configuration option must be checked to attempt a match using the Application identification rule if no match is found using the Tomcat identification rule?",
    "options": [
      "Applies to",
      "Independent",
      "Allow fallback to parent's rules",
      "Criterion attributes"
    ],
    "correct": [
      2
    ],
    "explanation": "Allow fallback to parent’s rules tells IRE to try the more general Application identifier if the Tomcat-specific criteria do not find a match. This can recognize an existing application CI rather than creating a duplicate solely because its subclass identifier failed.",
    "status": "practice",
    "issue": "",
    "source": "https://learning.servicenow.com/kb?id=kb_article_view&sysparm_article=KB0012913"
  },
  {
    "id": 46,
    "topic": "CMDB Structure—Classes",
    "question": "A CMDB Administrator needs to create a new Cl class for the Internet of Things (loT) Sensor in ServiceNow. What are the recommended practices for this specific activity? (Choose 2 options)",
    "options": [
      "Add anew class under an appropriate parent class",
      "Modify an existing class",
      "Install or update the CMDB Cl Class Models store application, and verify the class does not already exist",
      "Delete an unused class, and replace it with the new one"
    ],
    "correct": [
      0,
      2
    ],
    "explanation": "First check the CMDB CI Class Models application because the IoT Sensor class may already exist as a supported model. If it does not, create a class beneath the most appropriate parent so it inherits relevant CI attributes and behavior instead of duplicating the schema.",
    "status": "practice",
    "issue": "",
    "source": "https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/t_CreateCIType.html"
  },
  {
    "id": 47,
    "topic": "Ingestion — Discovery/ACC",
    "question": "Drag and drop the product to its description: + ServiceNow Discovery — Automatically identifies devices and applications in the network, populating the CMDB with accurate and up-to-date information + Service Graph Connectors — Facilitates integration between ServiceNow and external systems to import and synchronize data + Service Mapping — Complete topology of the services and shows how they are supported by underlying infrastructure and applications + Agent Client Collector (ACC) — Provides real-time visibility into endpoint configurations, populating the CMDB with accurate and up-to-date information Which product ‘Automatically identifies devices and applications in the network, populating the CMDB with accurate and up-to-date information’?",
    "options": [
      "ServiceNow Discovery",
      "Service Graph Connectors",
      "Service Mapping",
      "Agent Client Collector (ACC)"
    ],
    "correct": [
      0
    ],
    "explanation": "ServiceNow Discovery scans supported infrastructure and applications and uses discovery patterns to identify what exists and its characteristics. Service Graph Connectors import external-source data, while ACC collects from installed agents and Service Mapping focuses on service topology.",
    "status": "practice",
    "issue": "",
    "source": "https://learning.servicenow.com/kb?id=kb_article_view&sysparm_article=KB0012913"
  },
  {
    "id": 48,
    "topic": "IRE— Identification Rules",
    "question": "A Configuration Management team needs to prevent duplicate server records to avoid confusion among users. Server records are identified when they are processed via the Identification and Reconciliation Engine (IRE) using the configured identification rules. Where would these rules be configured?",
    "options": [
      "CMDB Health Dashboard",
      "CMDB Workspace",
      "CMDB Cl Class Manager",
      "CMDB Data Manager"
    ],
    "correct": [
      2
    ],
    "explanation": "CI Class Manager provides the Identification Rules configuration for a selected class. Those rules tell IRE which attribute combinations identify an existing CI; Health Dashboard and Data Manager have different responsibilities.",
    "status": "practice",
    "issue": "",
    "source": "https://learning.servicenow.com/kb?id=kb_article_view&sysparm_article=KB0012913"
  },
  {
    "id": 49,
    "topic": "Governance & Business Value",
    "question": "The CMDB Administrator has been asked to establish Configuration Management with a functional CMDB. Which factor is most critical for successfully operationalizing the CMDB in ServiceNow?",
    "options": [
      "Establish clear governance and continuously monitor CMDB health",
      "Depend only on Discovery and do not define data ownership",
      "Populate as many records as possible regardless of relevance",
      "Let all teams freely edit CI records without controls"
    ],
    "correct": [
      0
    ],
    "explanation": "Clear governance defines who owns CI data, how updates are authorized and how health is monitored. Discovery alone cannot enforce accurate ownership or remediation, while collecting excessive unmanaged data can make CMDB quality worse.",
    "status": "practice",
    "issue": "",
    "source": "https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/overview-cmdb-health.html"
  },
  {
    "id": 50,
    "topic": "Data Manager — Config",
    "question": "A Configuration Management Process Owner needs to configure Data Manager for policy tasks to be correctly assigned and aligned with the group attribute assigned to a class in Cl Class Manager. Whi is the recommended field to be used for a policy task assignment?",
    "options": [
      "Approval group",
      "Managed by group",
      "Change group",
      "Support group"
    ],
    "correct": [
      1
    ],
    "explanation": "Managed by group identifies the group responsible for maintaining the CI or class. Using that group field in Data Manager task assignment routes lifecycle and certification work to the team that owns the records, rather than an unrelated approval or change group.",
    "status": "practice",
    "issue": "",
    "source": "https://www.servicenow.com/docs/r/zurich/servicenow-platform/configuration-management-database-cmdb/cmdb-data-management.html"
  },
  {
    "id": 51,
    "topic": "Cl Class Manager — Navigation",
    "question": "A CMDB Cl Class Owner has been asked to change the icon for the UNIX Server class. Which Cl Class Manager tab can the owner use to change the icon for the class?",
    "options": [
      "Basic Info",
      "Suggested Relationships",
      "ClList",
      "Attributes"
    ],
    "correct": [
      0
    ],
    "explanation": "Basic Info contains the class-level settings and presentation metadata, including the icon shown for the UNIX Server class. Attributes defines fields and Suggested Relationships concerns how the class connects to other classes.",
    "status": "practice",
    "issue": "",
    "source": "https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/t_CreateCIType.html"
  },
  {
    "id": 52,
    "topic": "CMDB Query Builder",
    "question": "Find all application services with databases that have incidents and all related infrastructure. Which steps build the query? (Choose 2)",
    "options": [
      "Add a non-CMDB table to the query",
      "Use Service Mapping Query to include non-CMDB Incident table",
      "Use Service Mapping Query to find incidents related to database",
      "Use CMDB Query to include application services and related infrastructure"
    ],
    "correct": [
      0,
      3
    ],
    "explanation": "We do 'Use CMDB Query to include application services and related infrastructure' because a standard CMDB Query provides the multi-tier canvas needed to map relationships all the way from top-level services down to physical or virtual hardware components. We do 'Add a non-CMDB table to the query' because Incidents are operational task records rather than Configuration Items (CIs) that do not live inside the CMDB, meaning they must be brought onto the canvas from the 'Non-CMDB Tables' panel to link them to the database node.",
    "status": "practice",
    "issue": "",
    "source": "https://learning.servicenow.com/kb?id=kb_article_view&sysparm_article=KB0012913"
  },
  {
    "id": 53,
    "topic": "Ingestion — SGC",
    "question": "A CMDB Administrator has installed a Service Graph Connector (SGC), and then made customizations to the mappings. Which is a consequence of this action?",
    "options": [
      "The customized mappings are not supported by ServiceNow, and the customer is responsible for supporting their own customized SGC.",
      "The customization will prevent the SGC from executing without an approval record attached to the affected mapping record.",
      "Fields populated by a customization will have a special tag associated with them in the CMDB."
    ],
    "correct": [
      0
    ],
    "explanation": "Service Graph Connectors ship with supported standard mappings. Once an administrator customizes those mappings, ServiceNow cannot guarantee or maintain the customized logic as part of standard connector support; the customer must maintain and test it.",
    "status": "practice",
    "issue": "",
    "source": "https://www.servicenow.com/docs/r/servicenow-platform/service-graph-connectors/cmdb-integration-sccm.html"
  },
  {
    "id": 54,
    "topic": "Service Mapping",
    "question": "Which tools automatically create relationships between CIs and applications belonging to an Application Service? (Choose 2)",
    "options": [
      "IntegrationHub ETL",
      "Service Mapping",
      "Data Manager",
      "Event Management",
      "Discovery"
    ],
    "correct": [
      1,
      4
    ],
    "explanation": "Discovery detects infrastructure components and their technical relationships, such as an application running on a host. Service Mapping uses discovered dependencies and mapping methods to assemble the topology of an Application Service, so both contribute automatic CI relationships.",
    "status": "practice",
    "issue": "",
    "source": "https://learning.servicenow.com/kb?id=kb_article_view&sysparm_article=KB0012913"
  },
  {
    "id": 55,
    "topic": "CMDB Health",
    "question": "How can a CMDB administrator view regional CMDB Health scores?",
    "options": [
      "Create CMDB groups with type Health by region",
      "Customize scheduled jobs by region",
      "Activate a region setting"
    ],
    "correct": [
      0
    ],
    "explanation": "A CMDB Group of type Health can define a region-specific population of CIs. Health scores can then be calculated or viewed for those groups, making it possible to compare regions without changing the underlying metric definitions.",
    "status": "practice",
    "issue": "",
    "source": "https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/overview-cmdb-health.html"
  },
  {
    "id": 56,
    "topic": "Health Dashboard — Overview",
    "question": "The CMDB Administrator group seeks to filter specific Cl classes that display on the CMDB Health Dashboard. This ensures that only relevant data is displayed, excluding items that are not ready for management. Which feature can the group util e to achieve this goal?",
    "options": [
      "Health Inclusion Rules",
      "Data Refresh Rules",
      "Reconciliation Rules",
      "Identification Rules"
    ],
    "correct": [
      0
    ],
    "explanation": "Health Inclusion Rules determine which CI classes or records participate in CMDB Health calculations. Excluding unmanaged or out-of-scope CIs prevents their data from distorting the health score; these rules do not govern IRE identification.",
    "status": "practice",
    "issue": "",
    "source": "https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/overview-cmdb-health.html"
  },
  {
    "id": 57,
    "topic": "Discovery and ACC",
    "question": "Which tool is the automated agentless solution running discovery patterns?",
    "options": [
      "Agent Client Collector",
      "Import Sets",
      "Service Graph Connector",
      "ServiceNow Discovery"
    ],
    "correct": [
      3
    ],
    "explanation": "ServiceNow Discovery runs agentless discovery patterns against supported devices and applications, typically through a MID Server. ACC requires an installed agent, while Import Sets and Service Graph Connectors ingest data rather than performing agentless discovery.",
    "status": "practice",
    "issue": "",
    "source": "https://learning.servicenow.com/kb?id=kb_article_view&sysparm_article=KB0012913"
  },
  {
    "id": 58,
    "topic": "Data Manager — Policy Types",
    "question": "Which shows the most complete list of policy types that are provided by the CMDB Data Manager?",
    "options": [
      "Retire, Archive, Attestation, Certification, and Delete",
      "Archive and Delete",
      "Delete, Attestation, Retire, and Certification",
      "Attestation, Retire, and Certification"
    ],
    "correct": [
      0
    ],
    "explanation": "CMDB Data Manager supports Retire, Archive and Delete to manage CI lifecycle and retention, plus Attestation to confirm existence and Certification to validate CI data. The selected option is the only one listing all five policy types.",
    "status": "practice",
    "issue": "",
    "source": "https://www.servicenow.com/docs/r/zurich/servicenow-platform/configuration-management-database-cmdb/cmdb-data-management.html"
  },
  {
    "id": 59,
    "topic": "IRE Dynamic Reconciliation",
    "question": "Which feature must be enabled to leverage dynamic reconciliation rules?",
    "options": [
      "Reconciliation Rules",
      "CMDB Workspace",
      "CMDB Data Manager",
      "CMDB 360/Multisource CMDB"
    ],
    "correct": [
      3
    ],
    "explanation": "Dynamic Reconciliation compares values reported by different sources using rules such as Most Reported or Largest Value. CMDB 360/Multisource retains the source-specific values needed to evaluate those rules, so that capability must be enabled.",
    "status": "practice",
    "issue": "",
    "source": "https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/r_ReconciliationRulesPrinciples.html"
  },
  {
    "id": 60,
    "topic": "Governance & Business Value",
    "question": "How is the CMDB aligned to business processes? (Choose 2 options)",
    "options": [
      "Extends service delivery management to all enterprise departments",
      "Enhances decision-making and operational efficiency across the organization",
      "Enables the CFO/CIO to track software licenses",
      "Provides a centralized view of configuration items and their relationships"
    ],
    "correct": [
      1,
      3
    ],
    "explanation": "A centralized inventory of CIs and their relationships gives teams a shared picture of what supports each service. That context improves decisions and operational efficiency, such as identifying dependencies during incidents or changes; it is broader than software-license tracking alone.",
    "status": "practice",
    "issue": "",
    "source": "https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/overview-cmdb-health.html"
  },
  {
    "id": 61,
    "topic": "Ingestion — SGC",
    "question": "A Configuration Manager needs to ingest third-party Cls into the CMDB. Which method mini izes the risk of technical debt?",
    "options": [
      "Table API",
      "Vendor-provided integration",
      "Service Graph Connector",
      "Import Sets and Transform Maps"
    ],
    "correct": [
      2
    ],
    "explanation": "A Service Graph Connector provides a purpose-built, maintained integration with defined data mappings and IRE-aware ingestion. Using a supported connector avoids much of the custom transform and API maintenance that creates technical debt.",
    "status": "practice",
    "issue": "",
    "source": "https://www.servicenow.com/docs/r/servicenow-platform/service-graph-connectors/cmdb-integration-sccm.html"
  },
  {
    "id": 63,
    "topic": "CMDB Workspace",
    "question": "How does a CMDB Administrator use the ServiceNow Platform to ensure the data quality associated with Cls in the CMDB?",
    "options": [
      "Data Quality Business Rule",
      "CMDB Workspace",
      "Data Quality Scheduled Job",
      "CMDB Audit Business Rule"
    ],
    "correct": [
      1
    ],
    "explanation": "CMDB Workspace brings together data-quality views, class information and remediation actions so administrators can investigate and manage CI quality in one place. A single business rule or scheduled job does not provide the same governance work area.",
    "status": "practice",
    "issue": "",
    "source": "https://learning.servicenow.com/kb?id=kb_article_view&sysparm_article=KB0012913"
  },
  {
    "id": 64,
    "topic": "CSDM Lifecycle",
    "question": "At which CSDM maturity stage are Technical Service Offerings used to populate CI support groups?",
    "options": [
      "Crawl",
      "Run",
      "Fly",
      "Walk",
      "Foundation"
    ],
    "correct": [
      3
    ],
    "explanation": "Walk is the CSDM maturity stage that introduces technical services, technical service offerings and dynamic CI groups. These groups make it possible to synchronize Support Group and other team assignments onto associated CIs. Run focuses on business services, service offerings and their relationships to technology.",
    "status": "practice",
    "issue": "",
    "source": "https://www.servicenow.com/docs/r/servicenow-platform/common-service-data-model-csdm/csdm-implementation-stages.html"
  },
  {
    "id": 65,
    "topic": "CSDM —Life Cycle Tables",
    "question": "A Configuration Manager is reviewing the life cycle of Cls to ensure data accuracy, consistency, and relevance. The manager reviews the legacy status values and their equivalent CSDM life cycle stage and life cycle stage status values. Where are these reviewed?",
    "options": [
      "Life cycle properties",
      "_ Life cycle choice list",
      "Life cycle mappings"
    ],
    "correct": [
      2
    ],
    "explanation": "Life Cycle Mappings show how a legacy status value translates into the CSDM Life Cycle Stage and Stage Status pair. Reviewing these mappings helps avoid inconsistent states when old and new lifecycle fields are synchronized.",
    "status": "practice",
    "issue": "",
    "source": "https://www.servicenow.com/docs/r/servicenow-platform/common-service-data-model-csdm/csdm-implementation-stages.html"
  },
  {
    "id": 66,
    "topic": "De-duplication",
    "question": "A CMDB Administrator is using the Duplicate Cl Remediator to address a de-duplication task. On the first tab of the wizard, the Main Cl is selected. Which attributes are used to identify the Main Cl? (Choose 2 options)",
    "options": [
      "Oldest Created",
      "Newest Created",
      "Least Related Items",
      "Most Related Items"
    ],
    "correct": [
      0,
      3
    ],
    "explanation": "The Duplicate CI Remediator recommends potential main CIs using criteria including Oldest Created and Most Related Items. The goal is to retain a reliable main record and preserve valuable references and relationships; these are two of several recommendation criteria.",
    "status": "practice",
    "issue": "",
    "source": "https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/reconcile-dup-task.html"
  },
  {
    "id": 67,
    "topic": "CMDB Data Foundations Dashboard",
    "question": "How is the CSDM and CMDB Data Foundations Dashboards application offered through the ServiceNow Store?",
    "options": [
      "As a free application on the Innovation Lab",
      "As a paid application on the ServiceNow Store",
      "As a free application on the ServiceNow Store",
      "Only as a separately purchased Discovery license"
    ],
    "correct": [
      2
    ],
    "explanation": "ServiceNow describes the CSDM and CMDB Data Foundations Dashboards as a free ServiceNow Store application. In some releases the related plugin is activated by default, but that does not make the Store app a paid product or an Innovation Lab app.",
    "status": "practice",
    "issue": "",
    "source": "https://www.servicenow.com/content/dam/servicenow-assets/public/en-us/doc-type/resource-center/ebook/cmdb-business-value-6-steps.pdf"
  },
  {
    "id": 68,
    "topic": "CSDM — Lifecycle",
    "question": "Which activity best belongs to the CSDM Foundation domain?",
    "options": [
      "Publish service catalog items to consumers",
      "Map running application services to servers",
      "Plan business application portfolios and capabilities",
      "Standardize foundational reference data such as organizations and locations"
    ],
    "correct": [
      3
    ],
    "explanation": "Foundation establishes the shared reference data and governance needed by the other CSDM domains, including consistent organizational, location and ownership information. This revised question tests the Foundation domain rather than treating the source's questionable role-matching table as an official rule.",
    "status": "practice",
    "issue": "",
    "source": "https://www.servicenow.com/docs/r/servicenow-platform/common-service-data-model-csdm/csdm-implementation-stages.html"
  },
  {
    "id": 69,
    "topic": "CSDM Dashboard",
    "question": "The Unique Locations result is low. What is the recommended playbook action?",
    "options": [
      "Keep standard location and delete duplicate without checking",
      "Keep both locations",
      "Review locations, update affected CIs to correct location, then delete duplicate",
      "Run Duplicate CI Remediator"
    ],
    "correct": [
      2
    ],
    "explanation": "First compare the duplicate location records and identify which is the standard location. Then update CIs and other references to point to that record before deleting the duplicate, so no CI loses its valid location reference.",
    "status": "practice",
    "issue": "",
    "source": "https://www.servicenow.com/docs/r/servicenow-platform/common-service-data-model-csdm/csdm-implementation-stages.html"
  },
  {
    "id": 70,
    "topic": "CSDM Domains",
    "question": "Which CSDM domain helps understand Business Applications, capabilities, redundancy, and costs?",
    "options": [
      "Foundation",
      "Design and Planning",
      "Service Delivery",
      "Service Consumption"
    ],
    "correct": [
      1
    ],
    "explanation": "Design and Planning models Business Applications and Business Capabilities. Comparing applications against capabilities makes overlapping functionality, rationalization opportunities and associated costs visible to enterprise architects.",
    "status": "practice",
    "issue": "",
    "source": "https://www.servicenow.com/docs/r/servicenow-platform/common-service-data-model-csdm/csdm-implementation-stages.html"
  },
  {
    "id": 71,
    "topic": "CSDM Roles",
    "question": "Which two roles are associated with the Design and Planning domain? (Choose 2)",
    "options": [
      "Application Service Owner",
      "Application Owner",
      "Enterprise Architect",
      "Business Relationship Manager"
    ],
    "correct": [
      1,
      2
    ],
    "explanation": "Application Owners know the purpose, ownership and lifecycle of business applications, while Enterprise Architects analyze how those applications support capabilities and strategy. Both are central to the Design and Planning domain.",
    "status": "practice",
    "issue": "",
    "source": "https://www.servicenow.com/docs/r/servicenow-platform/common-service-data-model-csdm/csdm-implementation-stages.html"
  },
  {
    "id": 72,
    "topic": "Technical Service Offerings",
    "question": "Which two CI group fields are synchronized from a Technical Service Offering based on a Dynamic CI Group? (Choose 2)",
    "options": [
      "Approval Group",
      "Managed by Group",
      "Support Group",
      "Owned by Group"
    ],
    "correct": [
      1,
      2
    ],
    "explanation": "Managed by Group identifies who administers the CI, while Support Group identifies who handles operational support. A Technical Service Offering linked to a dynamic CI group can synchronize these group values to its member CIs.",
    "status": "practice",
    "issue": "",
    "source": "https://learning.servicenow.com/kb?id=kb_article_view&sysparm_article=KB0012913"
  },
  {
    "id": 73,
    "topic": "CI Class Manager",
    "question": "Which roles are required to create a custom CI class?",
    "options": [
      "cmdb_inst_admin and personalize_form",
      "itil_admin and personalize_form",
      "data_classification_admin and personalize_dictionary",
      "sn_cmdb_admin and personalize_dictionary"
    ],
    "correct": [
      3
    ],
    "explanation": "sn_cmdb_admin provides CMDB administration capabilities, while personalize_dictionary allows changes to dictionary or schema definitions. Creating a custom CI class needs both the CMDB management authority and the ability to define its table metadata.",
    "status": "practice",
    "issue": "",
    "source": "https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/t_CreateCIType.html"
  },
  {
    "id": 74,
    "topic": "Change Management",
    "question": "Which task field is automatically populated from a CI Change Group after selecting that CI?",
    "options": [
      "Managed by group",
      "Approval group",
      "Assignment group",
      "Change group"
    ],
    "correct": [
      2
    ],
    "explanation": "Assignment Group is the task field populated from the selected CI’s Change Group when ITSM CSDM Best Practice routing is configured. The Populate Assignment Group based on CI/SO business rule must be active and its configuration conditions must match; this automatic behavior is not guaranteed in every unconfigured instance.",
    "status": "practice",
    "issue": "",
    "source": "https://www.servicenow.com/docs/r/it-service-management/service-operations-workspace/create-change-sow.html"
  },
  {
    "id": 75,
    "topic": "CMDB Relationships",
    "question": "One Application Server hosts three different Applications, and each of those Applications is hosted only on that server. What is the cardinality from Application Server to Application?",
    "options": [
      "Many-to-one",
      "One-to-one",
      "One-to-many",
      "Many-to-many"
    ],
    "correct": [
      2
    ],
    "explanation": "From a single Application Server to its hosted Applications, one server can host several applications, giving a one-to-many relationship in that direction. A many-to-many relationship would require the additional fact that an application can be hosted on multiple servers.",
    "status": "practice",
    "issue": "",
    "source": "https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/c_ConfigurationManagementDatabase.html"
  },
  {
    "id": 76,
    "topic": "Data Manager",
    "question": "Which governance tool removes CI data that is no longer useful?",
    "options": [
      "CI Class Manager",
      "Data Foundation Dashboard",
      "Health Inclusion Rules",
      "CMDB Data Manager",
      "De-duplication Templates"
    ],
    "correct": [
      3
    ],
    "explanation": "CMDB Data Manager applies lifecycle policies to records that are no longer useful, including retiring, archiving or deleting them according to criteria. CI Class Manager defines structure and Health Inclusion Rules only affect health measurement scope.",
    "status": "practice",
    "issue": "",
    "source": "https://www.servicenow.com/docs/r/zurich/servicenow-platform/configuration-management-database-cmdb/cmdb-data-management.html"
  },
  {
    "id": 77,
    "topic": "Data Manager",
    "question": "Which two are CMDB Data Manager policy types? (Choose 2)",
    "options": [
      "De-duplication",
      "Archive",
      "Reconciliation",
      "Retire"
    ],
    "correct": [
      1,
      3
    ],
    "explanation": "Archive moves eligible CI records out of the active dataset under retention rules, while Retire marks CIs as no longer operational. Both are Data Manager policy types; reconciliation and de-duplication are handled by other CMDB mechanisms.",
    "status": "practice",
    "issue": "",
    "source": "https://www.servicenow.com/docs/r/zurich/servicenow-platform/configuration-management-database-cmdb/cmdb-data-management.html"
  },
  {
    "id": 78,
    "topic": "CMDB Workspace",
    "question": "Which two actions can be initiated from CMDB Workspace? (Choose 2)",
    "options": [
      "Execute Discovery",
      "Create Data Manager certification policy",
      "Remediate duplicate CIs",
      "Create new CMDB class"
    ],
    "correct": [
      1,
      2
    ],
    "explanation": "CMDB Workspace provides access to Data Manager policy administration and duplicate CI remediation. These actions address governance work; running Discovery and defining a new class are separate configuration workflows.",
    "status": "practice",
    "issue": "",
    "source": "https://learning.servicenow.com/kb?id=kb_article_view&sysparm_article=KB0012913"
  },
  {
    "id": 79,
    "topic": "Service Graph Connector",
    "question": "What happens when an administrator modifies the SCCM Service Graph Connector query during an upgrade?",
    "options": [
      "Data source becomes inactive",
      "Scheduled jobs must be configured",
      "Updates to the customized query are skipped during upgrade"
    ],
    "correct": [
      2
    ],
    "explanation": "An upgrade may include a new vendor version of the SCCM connector query. If the local query was customized, the upgrade protects that local modification by recording a skipped change instead of silently overwriting it, so the admin must review the vendor update.",
    "status": "practice",
    "issue": "",
    "source": "https://www.servicenow.com/docs/r/servicenow-platform/service-graph-connectors/cmdb-integration-sccm.html"
  },
  {
    "id": 80,
    "topic": "Data Manager",
    "question": "What is a prerequisite for archiving/deleting a CI using baseline Data Manager policies?",
    "options": [
      "Marked inactive",
      "Marked critical",
      "Retired and end of life",
      "Operational"
    ],
    "correct": [
      2
    ],
    "explanation": "Baseline Archive and Delete policies generally target CIs already retired and at end of life. This lifecycle condition helps prevent accidental removal of operational infrastructure that still supports active services.",
    "status": "practice",
    "issue": "",
    "source": "https://www.servicenow.com/docs/r/zurich/servicenow-platform/configuration-management-database-cmdb/cmdb-data-management.html"
  },
  {
    "id": 81,
    "topic": "CSDM Dashboard",
    "question": "Which CSDM Data Foundations Dashboard tab measures product models, locations, and business units?",
    "options": [
      "Run",
      "Foundation",
      "Crawl",
      "Walk",
      "Fly"
    ],
    "correct": [
      1
    ],
    "explanation": "Foundation covers foundational reference data such as locations, business units, and product models.",
    "status": "practice",
    "issue": "",
    "source": "https://www.servicenow.com/docs/r/servicenow-platform/common-service-data-model-csdm/csdm-implementation-stages.html"
  },
  {
    "id": 82,
    "topic": "Data Manager",
    "question": "After retiring short-lived CIs not discovered in the past week, what recommended action removes them?",
    "options": [
      "Create a delete policy",
      "Create a scheduled job",
      "Create a business rule"
    ],
    "correct": [
      0
    ],
    "explanation": "CMDB Data Manager Delete policies automate deletion after the appropriate lifecycle conditions are met.",
    "status": "practice",
    "issue": "",
    "source": "https://www.servicenow.com/docs/r/zurich/servicenow-platform/configuration-management-database-cmdb/cmdb-data-management.html"
  },
  {
    "id": 83,
    "topic": "CI Class Manager",
    "question": "Which modules configure recommended fields and generate tasks when operational Linux servers lack Support Group or Managed by Group?",
    "options": [
      "Technical Service Offerings and Dynamic CI Groups",
      "CMDB Workspace and Scheduled Jobs",
      "Dynamic CI groups and CMDB groups",
      "CI Class Manager and Health Preferences"
    ],
    "correct": [
      3
    ],
    "explanation": "CI Class Manager defines which CI fields are recommended for the Linux Server class. CMDB Health Preferences controls whether failed Recommended-field health checks generate remediation tasks, so both areas are needed.",
    "status": "practice",
    "issue": "",
    "source": "https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/overview-cmdb-health.html"
  },
  {
    "id": 84,
    "topic": "CMDB Query Builder",
    "question": "Which query design finds all operational CIs belonging to a specific application service?",
    "options": [
      "Add Business Application, Application Service and CI; filter and connect",
      "Add Application Service and CI; connect, filter service name and operational status, run",
      "Add Application Service and CI; connect, display columns, run"
    ],
    "correct": [
      1
    ],
    "explanation": "Add the relevant CI classes, configure their relationship, and filter by service and operational status. Display columns alone do not filter.",
    "status": "practice",
    "issue": "",
    "source": "https://learning.servicenow.com/kb?id=kb_article_view&sysparm_article=KB0012913"
  },
  {
    "id": 85,
    "topic": "Security Operations",
    "question": "What is the value of using the CMDB in security operations? (Choose 2)",
    "options": [
      "Allows security team to assess and remediate an incident",
      "Enables audits and attestations across CIs",
      "Auto-resolves a vulnerability",
      "Identifies the IT infrastructure with a vulnerability"
    ],
    "correct": [
      0,
      3
    ],
    "explanation": "CI context helps security teams identify affected infrastructure and assess incident or vulnerability impact; it does not automatically fix vulnerabilities.",
    "status": "practice",
    "issue": "",
    "source": "https://learning.servicenow.com/kb?id=kb_article_view&sysparm_article=KB0012913"
  },
  {
    "id": 86,
    "topic": "CI Class Manager",
    "question": "Which CI Class Manager tab is used to set a Principal Class?",
    "options": [
      "Health > Attributes",
      "Class Info > Basic Info",
      "Class Info > Attributes"
    ],
    "correct": [
      1
    ],
    "explanation": "Principal Class is configured in Class Info > Basic Info.",
    "status": "practice",
    "issue": "",
    "source": "https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/t_CreateCIType.html"
  },
  {
    "id": 87,
    "topic": "IRE",
    "question": "Which configuration allows a lower-priority source to update a CI after a higher-priority source becomes inactive?",
    "options": [
      "Data Refresh Rules",
      "Health Inclusion Rules",
      "Identification Rules",
      "Reconciliation Rules"
    ],
    "correct": [
      0
    ],
    "explanation": "Data Refresh Rules specify when stale authoritative-source values may be refreshed by another source.",
    "status": "practice",
    "issue": "",
    "source": "https://learning.servicenow.com/kb?id=kb_article_view&sysparm_article=KB0012913"
  },
  {
    "id": 88,
    "topic": "CMDB Health",
    "question": "What is the default staleness duration on the Correctness scorecard?",
    "options": [
      "24 hours",
      "30 days",
      "7 days",
      "60 days"
    ],
    "correct": [
      3
    ],
    "explanation": "The default staleness threshold is commonly 60 days, though it can be configured.",
    "status": "practice",
    "issue": "",
    "source": "https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/overview-cmdb-health.html"
  },
  {
    "id": 89,
    "topic": "Change Management",
    "question": "How does a healthy service-aware CMDB improve change management? (Choose 2)",
    "options": [
      "Automatically deploys changes without approval",
      "Provides insight into potential change impact",
      "Guarantees no service downtime",
      "Auto-populates assignment group for dynamic routing"
    ],
    "correct": [
      1,
      3
    ],
    "explanation": "Service maps enable impact analysis, while accurate CI group data supports assignment routing.",
    "status": "practice",
    "issue": "",
    "source": "https://learning.servicenow.com/kb?id=kb_article_view&sysparm_article=KB0012913"
  },
  {
    "id": 90,
    "topic": "Governance",
    "question": "Which governance policy prevents services without owners?",
    "options": [
      "Make Managed by mandatory on all CIs",
      "Make Owned by mandatory",
      "Set a default Service Owner value"
    ],
    "correct": [
      1
    ],
    "explanation": "Requiring an accountable owner improves service ownership governance; a placeholder default is not meaningful ownership.",
    "status": "practice",
    "issue": "",
    "source": "https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/overview-cmdb-health.html"
  },
  {
    "id": 91,
    "topic": "CI Class Manager",
    "question": "Where can administrators find class attributes, IRE rules and supported relationships together?",
    "options": [
      "CI Class Manager",
      "CMDB Data Manager",
      "CI Identifiers",
      "CMDB Workspace"
    ],
    "correct": [
      0
    ],
    "explanation": "CI Class Manager centralizes class configuration, attributes, identification rules, and relationship guidance.",
    "status": "practice",
    "issue": "",
    "source": "https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/t_CreateCIType.html"
  },
  {
    "id": 92,
    "topic": "Data Manager",
    "question": "Filter: Operating System contains Server OR contains Linux. Which match? (Choose 2)",
    "options": [
      "AIX",
      "Windows Server 2022 Datacenter",
      "Linux CentOS",
      "Windows 2019 Datacenter"
    ],
    "correct": [
      1,
      2
    ],
    "explanation": "The contains operator matches the literal strings Server and Linux; OR means either condition is sufficient.",
    "status": "practice",
    "issue": "",
    "source": "https://www.servicenow.com/docs/r/zurich/servicenow-platform/configuration-management-database-cmdb/cmdb-data-management.html"
  },
  {
    "id": 93,
    "topic": "CI Class Manager",
    "question": "How are Principal Classes set for CI reference fields?",
    "options": [
      "Principal Class checkbox on Attributes tab",
      "Principal Class checkbox in Workspace",
      "Principal Class attribute on the CI",
      "Principal Class checkbox on Basic Info tab"
    ],
    "correct": [
      3
    ],
    "explanation": "The Principal Class checkbox is on the Basic Info tab for the class.",
    "status": "practice",
    "issue": "",
    "source": "https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/t_CreateCIType.html"
  },
  {
    "id": 94,
    "topic": "Unified Map",
    "question": "Which two Unified Map Content Controls change the scope of CIs shown on the map? (Choose 2)",
    "options": [
      "Export the map to a PDF",
      "Modify the number of relationship levels",
      "Filter visible nodes using preferences or criteria",
      "Zoom in using the map toolbox"
    ],
    "correct": [
      1,
      2
    ],
    "explanation": "Unified Map Content Controls let users set relationship depth (number of levels) and apply filters or saved preferences to decide which CI nodes appear. Zoom is an appearance control in the Toolbox, not a content filter.",
    "status": "practice",
    "issue": "",
    "source": "https://www.servicenow.com/docs/r/servicenow-platform/unified-map/cmdb-workspace-unified-map.html"
  },
  {
    "id": 95,
    "topic": "Data Manager",
    "question": "Which default group fields are available for User Group Field assignment? (Choose 2)",
    "options": [
      "Managed by Group",
      "Support Group",
      "Assignment Group",
      "Owned by Group"
    ],
    "correct": [
      0,
      1
    ],
    "explanation": "Managed by Group and Support Group are standard CI group references available for routing governance tasks.",
    "status": "practice",
    "issue": "",
    "source": "https://www.servicenow.com/docs/r/zurich/servicenow-platform/configuration-management-database-cmdb/cmdb-data-management.html"
  },
  {
    "id": 96,
    "topic": "CSDM Lifecycle",
    "question": "What follows selecting Enable Life Cycle Sync?",
    "options": [
      "Fix Life Cycle Stage values to match legacy",
      "Activate lifecycle mappings",
      "Resolve incomplete mappings in Discrepancy Report"
    ],
    "correct": [
      2
    ],
    "explanation": "Selecting Enable life cycle sync runs a discrepancy check and generates a report of missing or inactive mappings. The administrator must resolve those mapping issues before bulk alignment can complete.",
    "status": "practice",
    "issue": "",
    "source": "https://www.servicenow.com/docs/r/servicenow-platform/common-service-data-model-csdm/csdm-life-cycle-standard-values.html"
  },
  {
    "id": 97,
    "topic": "CMDB 360",
    "question": "What must be true for CMDB 360 to analyze CI data?",
    "options": [
      "Discovery must populate it",
      "Reconciliation priorities must be set",
      "CI data must pass through IRE",
      "Only authorized SGC sources count"
    ],
    "correct": [
      2
    ],
    "explanation": "Multisource tracking depends on data passing through the Identification and Reconciliation Engine.",
    "status": "practice",
    "issue": "",
    "source": "https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/components-multisource-cmdb.html"
  },
  {
    "id": 98,
    "topic": "Principal Classes",
    "question": "Which checkbox limits CI reference selections to relevant managed classes?",
    "options": [
      "Principal Class",
      "Independent",
      "Extensible",
      "Main Record"
    ],
    "correct": [
      0
    ],
    "explanation": "Principal Class marks classes intended to be available in task CI reference selections.",
    "status": "practice",
    "issue": "",
    "source": "https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/t_CreateCIType.html"
  },
  {
    "id": 99,
    "topic": "IRE Class Upgrade",
    "question": "A CI moves from Server to the more specific Windows Server child class. What occurred?",
    "options": [
      "Class Switch",
      "CI Class Change",
      "Class Upgrade",
      "Class Downgrade"
    ],
    "correct": [
      2
    ],
    "explanation": "Moving from a parent class to a more specific child class is a class upgrade.",
    "status": "practice",
    "issue": "",
    "source": "https://learning.servicenow.com/kb?id=kb_article_view&sysparm_article=KB0012913"
  },
  {
    "id": 100,
    "topic": "CMDB Governance",
    "question": "Which benefits arise from CMDB governance? (Choose 2)",
    "options": [
      "Assist integration choices",
      "Gain visibility and control",
      "Enhance Service Management operations",
      "Reduce hardware costs"
    ],
    "correct": [
      1,
      2
    ],
    "explanation": "Governance improves visibility and control over CI data and enables better service-management decisions.",
    "status": "practice",
    "issue": "",
    "source": "https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/overview-cmdb-health.html"
  },
  {
    "id": 101,
    "topic": "Technical Service Offerings",
    "question": "Which group values synchronize to CIs via technical service offerings and dynamic CI groups? (Choose 2)",
    "options": [
      "Change group",
      "CMDB group",
      "Approval group",
      "Support group"
    ],
    "correct": [
      0,
      3
    ],
    "explanation": "Technical service offerings can propagate operational support and change group assignments to associated CIs.",
    "status": "practice",
    "issue": "",
    "source": "https://learning.servicenow.com/kb?id=kb_article_view&sysparm_article=KB0012913"
  },
  {
    "id": 102,
    "topic": "CSDM Dashboard",
    "question": "Which CSDM dashboard tab measures Technical Services and Technical Service Offerings?",
    "options": [
      "Crawl",
      "Walk",
      "Fly",
      "Run"
    ],
    "correct": [
      1
    ],
    "explanation": "The Walk stage introduces more structured technical service and offering modeling.",
    "status": "practice",
    "issue": "",
    "source": "https://www.servicenow.com/docs/r/servicenow-platform/common-service-data-model-csdm/csdm-implementation-stages.html"
  },
  {
    "id": 103,
    "topic": "CMDB Classes",
    "question": "How should a new equipment CI class be created?",
    "options": [
      "Use Service Catalog",
      "Create in CI Class Manager with suitable parent inheritance",
      "Modify an unrelated existing class",
      "Create without inheritance"
    ],
    "correct": [
      1
    ],
    "explanation": "Extend the appropriate existing CI class to inherit its attributes and behavior, avoiding unnecessary technical debt.",
    "status": "practice",
    "issue": "",
    "source": "https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/t_CreateCIType.html"
  },
  {
    "id": 104,
    "topic": "IntegrationHub ETL",
    "question": "What does IntegrationHub ETL do? (Choose 2)",
    "options": [
      "Integrates third-party data into CMDB or non-CMDB tables",
      "Performs network discovery itself",
      "Uses IRE to process and integrate CMDB data",
      "Specifically imports SCCM/Intune data"
    ],
    "correct": [
      0,
      2
    ],
    "explanation": "IntegrationHub ETL transforms incoming data and uses IRE for CMDB identification and reconciliation; it is not a discovery engine.",
    "status": "practice",
    "issue": "",
    "source": "https://learning.servicenow.com/kb?id=kb_article_view&sysparm_article=KB0012913"
  },
  {
    "id": 105,
    "topic": "Service Graph Connectors",
    "question": "What is the fastest time-to-value method for importing Microsoft SCCM CMDB data?",
    "options": [
      "Import Sets",
      "Agent Client Collector",
      "Service Graph Connectors",
      "IntegrationHub ETL"
    ],
    "correct": [
      2
    ],
    "explanation": "Prebuilt Service Graph Connectors offer supported mappings and integration flows for known sources such as SCCM.",
    "status": "practice",
    "issue": "",
    "source": "https://www.servicenow.com/docs/r/servicenow-platform/service-graph-connectors/cmdb-integration-sccm.html"
  },
  {
    "id": 106,
    "topic": "CMDB Dashboard",
    "question": "What is a benefit of the CMDB Data Foundations Dashboard?",
    "options": [
      "Configure health metric definitions",
      "Provides metrics for informed decisions",
      "Resolve certification policy tasks"
    ],
    "correct": [
      1
    ],
    "explanation": "The dashboard exposes recommended-practice metrics and actionable insights.",
    "status": "practice",
    "issue": "",
    "source": "https://learning.servicenow.com/kb?id=kb_article_view&sysparm_article=KB0012913"
  },
  {
    "id": 107,
    "topic": "CMDB 360",
    "question": "Why use CMDB 360/Multisource CMDB?",
    "options": [
      "Identify CI attribute values from multiple sources",
      "Ingest data through connectors",
      "Ingest data through import sets",
      "Populate the CMDB from multiple sources"
    ],
    "correct": [
      0
    ],
    "explanation": "CMDB 360 reveals which sources reported which CI attribute values; it is not itself an ingestion mechanism.",
    "status": "practice",
    "issue": "",
    "source": "https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/components-multisource-cmdb.html"
  },
  {
    "id": 108,
    "topic": "Attestation",
    "question": "Which Data Manager policy confirms that all servers physically exist?",
    "options": [
      "Attestation",
      "Delete",
      "Retire",
      "Archive",
      "Certification"
    ],
    "correct": [
      0
    ],
    "explanation": "Attestation asks assigned people to acknowledge whether a CI exists; certification validates specific field data.",
    "status": "practice",
    "issue": "",
    "source": "https://www.servicenow.com/docs/r/zurich/servicenow-platform/configuration-management-database-cmdb/cmdb-data-management.html"
  },
  {
    "id": 109,
    "topic": "Deduplication",
    "question": "How can similar deduplication tasks be remediated in bulk?",
    "options": [
      "Custom background script",
      "Deduplication template",
      "Manual task-by-task remediation",
      "Duplicate CI Remediator Wizard"
    ],
    "correct": [
      1
    ],
    "explanation": "Deduplication templates let administrators apply a consistent remediation approach to multiple tasks.",
    "status": "practice",
    "issue": "",
    "source": "https://learning.servicenow.com/kb?id=kb_article_view&sysparm_article=KB0012913"
  },
  {
    "id": 110,
    "topic": "CMDB 360",
    "question": "Which property enables multisource CMDB?",
    "options": [
      "glide.identification_engine.multisource_enabled",
      "glide.identification_engine.multisource.recompute.max.ci.limit",
      "glide.identification_engine.multisource_cmdb_ci_enabled",
      "glide.cmdb.logger.source.cmdb_multisource"
    ],
    "correct": [
      0
    ],
    "explanation": "The exact system property glide.identification_engine.multisource_enabled is the main switch enabling CMDB 360/Multisource CMDB. The other properties govern more limited aspects of data capture or processing.",
    "status": "practice",
    "issue": "",
    "source": "https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/components-multisource-cmdb.html"
  },
  {
    "id": 111,
    "topic": "Service Graph Connectors",
    "question": "Where can an admin inspect field-to-field mappings for an SGC import?",
    "options": [
      "Integration Hub",
      "CMDB Integrations Dashboard",
      "IntegrationHub ETL"
    ],
    "correct": [
      2
    ],
    "explanation": "IntegrationHub ETL displays the mapping and transformation steps used by a Service Graph Connector.",
    "status": "practice",
    "issue": "",
    "source": "https://www.servicenow.com/docs/r/servicenow-platform/service-graph-connectors/cmdb-integration-sccm.html"
  },
  {
    "id": 112,
    "topic": "CMDB Playbooks",
    "question": "Why use CMDB Data Foundations Dashboard playbooks? (Choose 2)",
    "options": [
      "Explain downstream impacts of poor metrics",
      "Offer remediation templates",
      "Offer remediation options",
      "Provide automated scripts that fix all metrics"
    ],
    "correct": [
      0,
      2
    ],
    "explanation": "Playbooks explain why a metric matters and guide administrators through recommended remediation actions.",
    "status": "practice",
    "issue": "",
    "source": "https://learning.servicenow.com/kb?id=kb_article_view&sysparm_article=KB0012913"
  },
  {
    "id": 113,
    "topic": "Group Synchronization",
    "question": "CI Class Manager Managed by Group = Enterprise IT Services; TSO Managed by Group = Windows Support. Which is used?",
    "options": [
      "Enterprise IT Services",
      "Change Management Team",
      "Windows Support"
    ],
    "correct": [
      2
    ],
    "explanation": "The Technical Service Offering's Managed by Group value takes precedence for CIs associated through its Dynamic CI Group. Therefore Windows Support is synchronized to those CIs, overriding Enterprise IT Services set in CI Class Manager. The original key incorrectly reversed that precedence.",
    "status": "practice",
    "issue": "",
    "source": "https://www.servicenow.com/docs/r/servicenow-platform/common-service-data-model-csdm/csdm-enable-tso.html"
  },
  {
    "id": 114,
    "topic": "Change Management",
    "question": "What Change Request field is populated from a CI change group?",
    "options": [
      "Managed by Group",
      "Change Group",
      "Assignment Group",
      "Support Group",
      "Assigned to"
    ],
    "correct": [
      2
    ],
    "explanation": "The Change Request Assignment Group can be populated from the selected CI’s Change Group via the ITSM CSDM Best Practice Populate Assignment Group based on CI/SO business rule. This depends on the relevant plugin, rule, and assignment-group field settings; it is not unconditional for every ServiceNow instance.",
    "status": "practice",
    "issue": "",
    "source": "https://www.servicenow.com/docs/r/it-service-management/service-operations-workspace/create-change-sow.html"
  },
  {
    "id": 115,
    "topic": "CMDB Groups",
    "question": "How can CMDB groups be defined? (Choose 2)",
    "options": [
      "Tag-based queries",
      "Encoded queries",
      "Scripted queries",
      "Saved queries"
    ],
    "correct": [
      1,
      3
    ],
    "explanation": "CMDB groups can be built from encoded filters or saved CMDB queries.",
    "status": "practice",
    "issue": "",
    "source": "https://learning.servicenow.com/kb?id=kb_article_view&sysparm_article=KB0012913"
  },
  {
    "id": 116,
    "topic": "Health Inclusion Rules — flawed IRE question",
    "question": "What do Health Inclusion Rules configured in CI Class Manager control?",
    "options": [
      "Which CIs are evaluated by selected CMDB Health metrics",
      "Which CIs are ingested into the CMDB by Discovery",
      "Which data source has reconciliation authority for each attribute"
    ],
    "correct": [
      0
    ],
    "explanation": "Health Inclusion Rules restrict the CIs evaluated by selected CMDB Health metrics, such as stale, orphan, or duplicate checks. They do not control which CIs IRE identifies: Identification Inclusion Rules are a separate feature used for that purpose.",
    "status": "practice",
    "issue": "",
    "source": "https://www.servicenow.com/docs/r/xanadu/servicenow-platform/configuration-management-database-cmdb/create-health-inclusion-rule.html"
  },
  {
    "id": 117,
    "topic": "Information Objects",
    "question": "How should regulated patient information be modeled in relation to business applications?",
    "options": [
      "Classify each database and map manually",
      "Add a custom Boolean field to business application",
      "Create an Information Object and relate it to Business Application"
    ],
    "correct": [
      2
    ],
    "explanation": "CSDM Information Objects model logical information and its relationship to business applications.",
    "status": "practice",
    "issue": "",
    "source": "https://www.servicenow.com/docs/r/servicenow-platform/common-service-data-model-csdm/design-domain.html"
  },
  {
    "id": 118,
    "topic": "Attestation",
    "question": "Which Data Manager policy confirms that servers exist?",
    "options": [
      "Promotion",
      "Verification",
      "Attestation",
      "Certification"
    ],
    "correct": [
      2
    ],
    "explanation": "Attestation confirms CI existence through an acknowledgement task.",
    "status": "practice",
    "issue": "",
    "source": "https://www.servicenow.com/docs/r/zurich/servicenow-platform/configuration-management-database-cmdb/cmdb-data-management.html"
  },
  {
    "id": 119,
    "topic": "Custom CMDB Tables",
    "question": "What prefix starts custom CMDB tables?",
    "options": [
      "cmdb_ci",
      "u_cmdb_ci",
      "u_ci_cmdb",
      "ci_cmdb"
    ],
    "correct": [
      1
    ],
    "explanation": "Custom CI class tables commonly use the u_cmdb_ci prefix.",
    "status": "practice",
    "issue": "",
    "source": "https://learning.servicenow.com/kb?id=kb_article_view&sysparm_article=KB0012913"
  },
  {
    "id": 120,
    "topic": "Event Management",
    "question": "How does CMDB benefit Event Management? (Choose 2)",
    "options": [
      "Mapped services show users consuming the service",
      "Alerts can bind to specific CIs",
      "Alerts correlate to knowledge articles",
      "Mapped services show business impact of alerts"
    ],
    "correct": [
      1,
      3
    ],
    "explanation": "CI binding and service maps enable alert correlation and business impact assessment.",
    "status": "practice",
    "issue": "",
    "source": "https://learning.servicenow.com/kb?id=kb_article_view&sysparm_article=KB0012913"
  },
  {
    "id": 121,
    "topic": "IRE Rules",
    "question": "Where can identification rules be viewed or configured? (Choose 2)",
    "options": [
      "API Integrations",
      "IRE Application",
      "CI Class Manager",
      "CI Identifiers module"
    ],
    "correct": [
      2,
      3
    ],
    "explanation": "Identification rules are maintained in CI Class Manager and CI Identifiers.",
    "status": "practice",
    "issue": "",
    "source": "https://learning.servicenow.com/kb?id=kb_article_view&sysparm_article=KB0012913"
  },
  {
    "id": 122,
    "topic": "CSDM Domains",
    "question": "A catalog item lets doctors schedule patients for CT scans. Which domain contains the catalog item?",
    "options": [
      "Design and Planning",
      "Build and Integration",
      "Service Delivery",
      "Foundation",
      "Service Consumption"
    ],
    "correct": [
      4
    ],
    "explanation": "Catalog items represent consumable offerings and belong to the Service Consumption domain.",
    "status": "practice",
    "issue": "",
    "source": "https://www.servicenow.com/docs/r/servicenow-platform/common-service-data-model-csdm/csdm-implementation-stages.html"
  },
  {
    "id": 123,
    "topic": "CSDM Domains",
    "question": "Which CSDM domain tracks enterprise business capabilities?",
    "options": [
      "Foundation",
      "Build and Integration",
      "Design and Planning",
      "Service Consumption",
      "Service Delivery"
    ],
    "correct": [
      2
    ],
    "explanation": "Business capabilities are modeled in the Design and Planning domain.",
    "status": "practice",
    "issue": "",
    "source": "https://www.servicenow.com/docs/r/servicenow-platform/common-service-data-model-csdm/csdm-implementation-stages.html"
  },
  {
    "id": 124,
    "topic": "CMDB Health",
    "question": "Which field is used for CI staleness duration?",
    "options": [
      "Last modified on",
      "Created",
      "Updated",
      "First discovered",
      "Most recent discovery"
    ],
    "correct": [
      4
    ],
    "explanation": "Staleness is typically based on the most recent discovery timestamp, last_discovered.",
    "status": "practice",
    "issue": "",
    "source": "https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/overview-cmdb-health.html"
  },
  {
    "id": 125,
    "topic": "CSDM Crawl",
    "question": "Which stakeholders should be involved in CSDM Crawl-stage CMDB population?",
    "options": [
      "Business Service Manager and Technology Service Owner",
      "Application Owner and Application Service Owner",
      "Customer Service Manager and Infrastructure Manager"
    ],
    "correct": [
      1
    ],
    "explanation": "Crawl emphasizes identifying and organizing applications and application services with their owners.",
    "status": "practice",
    "issue": "",
    "source": "https://www.servicenow.com/docs/r/servicenow-platform/common-service-data-model-csdm/csdm-implementation-stages.html"
  },
  {
    "id": 126,
    "topic": "CMDB Playbooks",
    "question": "How do Data Foundations Dashboard playbooks help?",
    "options": [
      "Automatically track metrics",
      "Install to automatically fix all issues",
      "Help analyze and fix issues"
    ],
    "correct": [
      2
    ],
    "explanation": "Playbooks provide guided analysis and remediation rather than automatic blanket fixes.",
    "status": "practice",
    "issue": "",
    "source": "https://learning.servicenow.com/kb?id=kb_article_view&sysparm_article=KB0012913"
  },
  {
    "id": 127,
    "topic": "Unified Map",
    "question": "Which Unified Map panel shows incidents and problems for a selected CI?",
    "options": [
      "Overview",
      "Application services",
      "Related items",
      "Attributes"
    ],
    "correct": [
      2
    ],
    "explanation": "Related items provides contextual records associated with a selected CI.",
    "status": "practice",
    "issue": "",
    "source": "https://learning.servicenow.com/kb?id=kb_article_view&sysparm_article=KB0012913"
  },
  {
    "id": 128,
    "topic": "CSDM Maturity",
    "question": "At which stage are Business Service Offerings mapped to dependent Application Services?",
    "options": [
      "Fly",
      "Crawl",
      "Foundation",
      "Run",
      "Walk"
    ],
    "correct": [
      3
    ],
    "explanation": "Run connects technology to the business that sells and consumes it, including relationships between business service offerings and the application service instances that support them. Walk focuses on the technical-services layer, not business offering impact mapping.",
    "status": "practice",
    "issue": "",
    "source": "https://www.servicenow.com/docs/r/servicenow-platform/common-service-data-model-csdm/csdm-implementation-stages.html"
  },
  {
    "id": 129,
    "topic": "CMDB Health",
    "question": "Which health scorecard identifies CIs missing required or recommended data?",
    "options": [
      "Compliance",
      "Correctness",
      "Completeness"
    ],
    "correct": [
      2
    ],
    "explanation": "Completeness checks whether required and recommended fields are populated.",
    "status": "practice",
    "issue": "",
    "source": "https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/overview-cmdb-health.html"
  },
  {
    "id": 130,
    "topic": "CMDB Roles",
    "question": "Who is responsible for CI data accuracy, completeness and resolving discrepancies?",
    "options": [
      "Service Owner",
      "CMDB Architect",
      "Configuration Manager",
      "IT Asset Manager"
    ],
    "correct": [
      2
    ],
    "explanation": "Configuration Managers oversee CI data quality and remediation processes.",
    "status": "practice",
    "issue": "",
    "source": "https://learning.servicenow.com/kb?id=kb_article_view&sysparm_article=KB0012913"
  },
  {
    "id": 131,
    "topic": "CMDB Dashboard",
    "question": "Which tool shows how CMDB configuration aligns with recommended practice?",
    "options": [
      "CMDB Data Foundations Dashboard",
      "CMDB Workspace",
      "CMDB Health Dashboard",
      "CMDB Data Manager"
    ],
    "correct": [
      0
    ],
    "explanation": "The Data Foundations Dashboard measures recommended-practice adoption and guides improvements.",
    "status": "practice",
    "issue": "",
    "source": "https://learning.servicenow.com/kb?id=kb_article_view&sysparm_article=KB0012913"
  },
  {
    "id": 132,
    "topic": "Information Objects",
    "question": "Which class models PII data associated with business applications?",
    "options": [
      "Business Capability",
      "API Component",
      "Information Object",
      "Data Classification"
    ],
    "correct": [
      2
    ],
    "explanation": "Information Objects represent types of information, including sensitive business data.",
    "status": "practice",
    "issue": "",
    "source": "https://www.servicenow.com/docs/r/servicenow-platform/common-service-data-model-csdm/design-domain.html"
  },
  {
    "id": 133,
    "topic": "Data Manager",
    "question": "Where are CMDB Data Manager policies created and managed?",
    "options": [
      "Workspace CMDB 360 tab",
      "Service Operations Workspace",
      "CI Class Manager",
      "CMDB Workspace Management tab"
    ],
    "correct": [
      3
    ],
    "explanation": "The CMDB Workspace Management area provides access to Data Manager policies.",
    "status": "practice",
    "issue": "",
    "source": "https://www.servicenow.com/docs/r/zurich/servicenow-platform/configuration-management-database-cmdb/cmdb-data-management.html"
  },
  {
    "id": 134,
    "topic": "Archive Policies",
    "question": "What keeps CMDB data volume manageable?",
    "options": [
      "Scheduled Jobs",
      "Business Rules",
      "Archive Policies"
    ],
    "correct": [
      2
    ],
    "explanation": "Archive policies remove eligible older CI records from active CMDB datasets.",
    "status": "practice",
    "issue": "",
    "source": "https://www.servicenow.com/docs/r/zurich/servicenow-platform/configuration-management-database-cmdb/cmdb-data-management.html"
  },
  {
    "id": 135,
    "topic": "CMDB Business Value",
    "question": "Which are business values of CMDB? (Choose 2)",
    "options": [
      "Manage financial data",
      "Streamline incident and change management",
      "Strengthen operational resiliency",
      "Automate all CI relationship maintenance"
    ],
    "correct": [
      1,
      2
    ],
    "explanation": "Trusted configuration data improves ITSM efficiency and operational resilience.",
    "status": "practice",
    "issue": "",
    "source": "https://learning.servicenow.com/kb?id=kb_article_view&sysparm_article=KB0012913"
  },
  {
    "id": 136,
    "topic": "Automatic Relationships",
    "question": "Which solutions automatically create CI relationships? (Choose 2)",
    "options": [
      "Discovery",
      "Workflow Studio",
      "Service Mapping",
      "IntegrationHub ETL"
    ],
    "correct": [
      0,
      2
    ],
    "explanation": "Discovery finds infrastructure dependencies, while Service Mapping builds application-service relationships.",
    "status": "practice",
    "issue": "",
    "source": "https://learning.servicenow.com/kb?id=kb_article_view&sysparm_article=KB0012913"
  },
  {
    "id": 137,
    "topic": "IRE Imports",
    "question": "Which transform-map script type is commonly used to invoke IRE processing?",
    "options": [
      "onComplete",
      "onBefore",
      "onStart",
      "onAfter"
    ],
    "correct": [
      1
    ],
    "explanation": "The onBefore transform script can call CMDBTransformUtil to route rows through IRE.",
    "status": "practice",
    "issue": "",
    "source": "https://learning.servicenow.com/kb?id=kb_article_view&sysparm_article=KB0012913"
  },
  {
    "id": 138,
    "topic": "Unified Map",
    "question": "Which filters can a service owner use on Unified Map? (Choose 2)",
    "options": [
      "Discovery source",
      "Managed by group",
      "Business criticality",
      "CI type"
    ],
    "correct": [
      1,
      3
    ],
    "explanation": "Unified Map supports narrowing visible CI nodes by attributes such as type and ownership group.",
    "status": "practice",
    "issue": "",
    "source": "https://learning.servicenow.com/kb?id=kb_article_view&sysparm_article=KB0012913"
  },
  {
    "id": 139,
    "topic": "Information Objects",
    "question": "Which use case requires Information Objects?",
    "options": [
      "Asset lifecycle compliance in a Business Application",
      "Security operational risk in a Business Application",
      "Operational impact of a Business Service"
    ],
    "correct": [
      1
    ],
    "explanation": "Information Objects help identify sensitive information used by business applications for security and risk assessments.",
    "status": "practice",
    "issue": "",
    "source": "https://www.servicenow.com/docs/r/servicenow-platform/common-service-data-model-csdm/design-domain.html"
  },
  {
    "id": 140,
    "topic": "Class Upgrade",
    "question": "A Server CI is reclassified to Linux Server or Windows Server. Which operation?",
    "options": [
      "Class Switch",
      "Class Downgrade",
      "Class Upgrade"
    ],
    "correct": [
      2
    ],
    "explanation": "Reclassification from parent Server to more specific child classes is a class upgrade.",
    "status": "practice",
    "issue": "",
    "source": "https://learning.servicenow.com/kb?id=kb_article_view&sysparm_article=KB0012913"
  },
  {
    "id": 141,
    "topic": "CMDB Playbooks",
    "question": "Which structured guidance helps resolve missing hardware serial numbers?",
    "options": [
      "CSDM Now Create Playbooks",
      "CMDB Data Foundations Dashboard Playbooks",
      "CMDB Health Dashboard Playbooks",
      "CSDM Data Foundations Dashboard Playbooks"
    ],
    "correct": [
      1
    ],
    "explanation": "CMDB Data Foundations Dashboard playbooks offer targeted guidance for data-quality issues.",
    "status": "practice",
    "issue": "",
    "source": "https://learning.servicenow.com/kb?id=kb_article_view&sysparm_article=KB0012913"
  },
  {
    "id": 142,
    "topic": "CSDM Domains",
    "question": "Which domain models production line monitoring systems as operational application services?",
    "options": [
      "Service Delivery",
      "Foundation",
      "Build and Integration",
      "Service Consumption",
      "Design and Planning"
    ],
    "correct": [
      0
    ],
    "explanation": "Deployed operational systems and application services are represented in Service Delivery.",
    "status": "practice",
    "issue": "",
    "source": "https://www.servicenow.com/docs/r/servicenow-platform/common-service-data-model-csdm/csdm-implementation-stages.html"
  },
  {
    "id": 143,
    "topic": "CMDB Dashboard",
    "question": "Which are benefits of the Data Foundations Dashboard? (Choose 2)",
    "options": [
      "Actionable data-quality insights",
      "Monitor CMDB health over time",
      "Automatically approve changes",
      "Automatically eliminate duplicate records"
    ],
    "correct": [
      0,
      1
    ],
    "explanation": "The dashboard supports monitoring and improvement; it does not approve changes or automatically delete duplicates.",
    "status": "practice",
    "issue": "",
    "source": "https://learning.servicenow.com/kb?id=kb_article_view&sysparm_article=KB0012913"
  },
  {
    "id": 144,
    "topic": "CSDM Stages",
    "question": "What is the prescribed CSDM rollout order?",
    "options": [
      "Initiate, Plan, Execute, Deliver, Close",
      "Architecture, Business, Technical, Governance",
      "Foundation, Crawl, Walk, Run, Fly",
      "Initial, Developing, Defined, Managed"
    ],
    "correct": [
      2
    ],
    "explanation": "CSDM implementation maturity proceeds Foundation → Crawl → Walk → Run → Fly.",
    "status": "practice",
    "issue": "",
    "source": "https://www.servicenow.com/docs/r/servicenow-platform/common-service-data-model-csdm/csdm-implementation-stages.html"
  },
  {
    "id": 145,
    "topic": "IRE Ingestion",
    "question": "What is the recommended method to import external data without bypassing IRE?",
    "options": [
      "Import Sets and Transform Maps",
      "IntegrationHub ETL",
      "Table API"
    ],
    "correct": [
      1
    ],
    "explanation": "IntegrationHub ETL uses IRE by design, reducing duplication and unauthorized overwrites.",
    "status": "practice",
    "issue": "",
    "source": "https://learning.servicenow.com/kb?id=kb_article_view&sysparm_article=KB0012913"
  },
  {
    "id": 146,
    "topic": "Data Manager",
    "question": "What is a purpose of CMDB Data Manager?",
    "options": [
      "Enforce all CI relationship rules",
      "Automate archive and deletion via retention policies",
      "Encrypt archived records"
    ],
    "correct": [
      1
    ],
    "explanation": "Data Manager policies govern CI lifecycle tasks such as retire, archive, and delete.",
    "status": "practice",
    "issue": "",
    "source": "https://www.servicenow.com/docs/r/zurich/servicenow-platform/configuration-management-database-cmdb/cmdb-data-management.html"
  },
  {
    "id": 147,
    "topic": "IRE Reconciliation",
    "question": "Priorities: ServiceNow 100, Altiris 200, SCCM 300. Which statements are true? (Choose 2)",
    "options": [
      "ServiceNow may insert but cannot update records created by Altiris/SCCM",
      "Altiris can update records inserted by SCCM",
      "SCCM can insert new records",
      "SCCM has highest priority because 300 is largest"
    ],
    "correct": [
      1,
      2
    ],
    "explanation": "Lower priority numbers mean higher authority. Reconciliation restricts updates, not identification/insertion, so Altiris can supersede SCCM and SCCM may insert.",
    "status": "practice",
    "issue": "",
    "source": "https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/r_ReconciliationRulesPrinciples.html"
  },
  {
    "id": 148,
    "topic": "CMDB Health",
    "question": "Which scorecard includes Duplicate, Orphan and Stale CI metrics?",
    "options": [
      "Correctness",
      "Compliance",
      "Completeness"
    ],
    "correct": [
      0
    ],
    "explanation": "Correctness evaluates duplicates, orphans and stale CI records.",
    "status": "practice",
    "issue": "",
    "source": "https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/overview-cmdb-health.html"
  },
  {
    "id": 149,
    "topic": "CMDB Health",
    "question": "What must happen to generate CMDB Health scores?",
    "options": [
      "Activate CMDB Health scheduled jobs",
      "Nothing; calculated by default",
      "Install an additional calculation plugin"
    ],
    "correct": [
      0
    ],
    "explanation": "Scheduled health jobs must run to calculate and refresh health scores.",
    "status": "practice",
    "issue": "",
    "source": "https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/overview-cmdb-health.html"
  },
  {
    "id": 150,
    "topic": "CMDB Playbooks",
    "question": "Which plays help remediate Services Have Owners Identified? (Choose 2)",
    "options": [
      "Govern Data",
      "Report Data",
      "Fix Data",
      "Analyze Data"
    ],
    "correct": [
      2,
      3
    ],
    "explanation": "Playbooks guide analysis of the cause and fixing affected service records.",
    "status": "practice",
    "issue": "",
    "source": "https://learning.servicenow.com/kb?id=kb_article_view&sysparm_article=KB0012913"
  },
  {
    "id": 151,
    "topic": "CSDM Playbooks",
    "question": "Which playbook supports risk context for Vulnerability or Security Incident Response?",
    "options": [
      "Custom CI lifecycle statuses",
      "Product models without owners",
      "Locations without parents",
      "Application Services with Business Application Relationships"
    ],
    "correct": [
      3
    ],
    "explanation": "Linking application services to business applications provides business context for prioritizing security response.",
    "status": "practice",
    "issue": "",
    "source": "https://www.servicenow.com/docs/r/servicenow-platform/common-service-data-model-csdm/csdm-implementation-stages.html"
  },
  {
    "id": 152,
    "topic": "IRE Identification",
    "question": "Apache identification uses Class, Configuration File, Version. What happens when version changes?",
    "options": [
      "CI reclassified",
      "Duplication error",
      "New Apache Web Server CI created",
      "Existing CI version updated"
    ],
    "correct": [
      2
    ],
    "explanation": "Because Version is part of the identification key, a changed version may no longer match the existing CI and lead to a new record.",
    "status": "practice",
    "issue": "",
    "source": "https://learning.servicenow.com/kb?id=kb_article_view&sysparm_article=KB0012913"
  },
  {
    "id": 153,
    "topic": "CMDB Workspace",
    "question": "Which tool generates class-owner tasks shown under My Work?",
    "options": [
      "CMDB Health Dashboard",
      "Deduplication templates",
      "CMDB Data Manager"
    ],
    "correct": [
      2
    ],
    "explanation": "CMDB Data Manager creates governance tasks assigned to responsible users or groups.",
    "status": "practice",
    "issue": "",
    "source": "https://learning.servicenow.com/kb?id=kb_article_view&sysparm_article=KB0012913"
  },
  {
    "id": 154,
    "topic": "Certification",
    "question": "Which Data Manager policy creates tasks to validate and update CI fields?",
    "options": [
      "Compliance",
      "Audit",
      "Attestation",
      "Certification"
    ],
    "correct": [
      3
    ],
    "explanation": "Certification validates specific CI attributes and lets assignees correct them.",
    "status": "practice",
    "issue": "",
    "source": "https://www.servicenow.com/docs/r/zurich/servicenow-platform/configuration-management-database-cmdb/cmdb-data-management.html"
  },
  {
    "id": 155,
    "topic": "Agent Client Collector",
    "question": "Which are common ACC use cases? (Choose 2)",
    "options": [
      "Network devices in DMZ",
      "Devices in secure environments",
      "Servers in data center",
      "Devices that intermittently connect"
    ],
    "correct": [
      1,
      3
    ],
    "explanation": "An agent can collect data on secure or intermittently connected endpoints without relying solely on agentless scanning.",
    "status": "practice",
    "issue": "",
    "source": "https://learning.servicenow.com/kb?id=kb_article_view&sysparm_article=KB0012913"
  },
  {
    "id": 156,
    "topic": "IRE Reconciliation",
    "question": "How can the authoritative data source be selected for CI attributes?",
    "options": [
      "Data refresh period only",
      "Set source priority in reconciliation rules",
      "Run integrations manually in order",
      "Set run order in identification rules"
    ],
    "correct": [
      1
    ],
    "explanation": "Reconciliation rules assign priorities for each source and attribute scope.",
    "status": "practice",
    "issue": "",
    "source": "https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/r_ReconciliationRulesPrinciples.html"
  },
  {
    "id": 157,
    "topic": "Attestation",
    "question": "Which policy creates tasks to validate CI existence?",
    "options": [
      "Delete",
      "Attestation",
      "Certification",
      "Retire"
    ],
    "correct": [
      1
    ],
    "explanation": "Attestation is an acknowledgement that a CI still exists.",
    "status": "practice",
    "issue": "",
    "source": "https://www.servicenow.com/docs/r/zurich/servicenow-platform/configuration-management-database-cmdb/cmdb-data-management.html"
  },
  {
    "id": 158,
    "topic": "CMDB Query Builder",
    "question": "Find Seattle databases connected to application services and related incidents. What actions? (Choose 2)",
    "options": [
      "Filter database location = Seattle",
      "Add Incident from Non-CMDB Tables",
      "Set relationship level up to second",
      "Add columns to application service"
    ],
    "correct": [
      0,
      1
    ],
    "explanation": "Filter database location and add Incident as a non-CMDB table to include related tasks.",
    "status": "practice",
    "issue": "",
    "source": "https://learning.servicenow.com/kb?id=kb_article_view&sysparm_article=KB0012913"
  },
  {
    "id": 159,
    "topic": "Deduplication",
    "question": "Discovered CI has current IP; imported CI has critical application relationship. Best remediation?",
    "options": [
      "Keep all discovered attributes and ignore relationships",
      "Keep discovered CI and delete imported CI",
      "Keep discovered CI and merge imported relationship",
      "Keep imported CI and delete discovered CI"
    ],
    "correct": [
      2
    ],
    "explanation": "Preserve the current discovered CI while retaining the valuable relationship from the duplicate.",
    "status": "practice",
    "issue": "",
    "source": "https://learning.servicenow.com/kb?id=kb_article_view&sysparm_article=KB0012913"
  },
  {
    "id": 160,
    "topic": "Change Management",
    "question": "How does CSDM help change management? (Choose 2)",
    "options": [
      "Determine root cause of change issues",
      "Identify blackout windows",
      "Understand impact on services",
      "Route changes dynamically"
    ],
    "correct": [
      2,
      3
    ],
    "explanation": "Service relationships enable impact assessment; CI group data enables routing.",
    "status": "practice",
    "issue": "",
    "source": "https://learning.servicenow.com/kb?id=kb_article_view&sysparm_article=KB0012913"
  },
  {
    "id": 161,
    "topic": "Information Objects",
    "question": "Where is regulated customer PII/PCI information modeled?",
    "options": [
      "Customer Service Offerings and Databases",
      "Business Applications and Information Objects",
      "Technical Service Offerings and Dynamic CI Groups"
    ],
    "correct": [
      1
    ],
    "explanation": "Information Objects link data types and regulatory context to Business Applications.",
    "status": "practice",
    "issue": "",
    "source": "https://www.servicenow.com/docs/r/servicenow-platform/common-service-data-model-csdm/design-domain.html"
  },
  {
    "id": 162,
    "topic": "CMDB Dashboard",
    "question": "Which metrics support monitoring the Data Foundations Dashboard? (Choose 2)",
    "options": [
      "CIs Processed by IRE",
      "All orphan CIs",
      "Active CIs updated in last 90 days",
      "All failed health audits"
    ],
    "correct": [
      0,
      2
    ],
    "explanation": "The dashboard tracks adoption of IRE processing and data freshness indicators.",
    "status": "practice",
    "issue": "",
    "source": "https://learning.servicenow.com/kb?id=kb_article_view&sysparm_article=KB0012913"
  },
  {
    "id": 163,
    "topic": "Unified Map",
    "question": "Where is Unified Map accessed?",
    "options": [
      "CI Class Manager",
      "CMDB Workspace",
      "CMDB Data Manager"
    ],
    "correct": [
      1
    ],
    "explanation": "Unified Map is available in CMDB Workspace.",
    "status": "practice",
    "issue": "",
    "source": "https://learning.servicenow.com/kb?id=kb_article_view&sysparm_article=KB0012913"
  },
  {
    "id": 164,
    "topic": "IRE Rules",
    "question": "Can reconciliation rules work without CMDB 360?",
    "options": [
      "CMDB 360 can always be used immediately",
      "ITOM Discovery must be bought for reconciliation",
      "IRE reconciliation rules work regardless of CMDB 360 activation"
    ],
    "correct": [
      2
    ],
    "explanation": "IRE identification and reconciliation are separate core capabilities from multisource visualization.",
    "status": "practice",
    "issue": "",
    "source": "https://learning.servicenow.com/kb?id=kb_article_view&sysparm_article=KB0012913"
  },
  {
    "id": 165,
    "topic": "CSDM Dashboard",
    "question": "Which tool helps improve CSDM-related data quality?",
    "options": [
      "CSDM Data Foundations Dashboard",
      "Default CMDB Health Dashboard",
      "ServiceNow Health Scan"
    ],
    "correct": [
      0
    ],
    "explanation": "The CSDM dashboard focuses on recommended CSDM modeling and adoption metrics.",
    "status": "practice",
    "issue": "",
    "source": "https://www.servicenow.com/docs/r/servicenow-platform/common-service-data-model-csdm/csdm-implementation-stages.html"
  },
  {
    "id": 166,
    "topic": "Attestation vs Certification",
    "question": "What is the difference?",
    "options": [
      "Only attestation can be scheduled",
      "Attestation edits fields; certification confirms existence",
      "Attestation confirms existence; certification validates CI attributes",
      "Only attestation supports group assignment"
    ],
    "correct": [
      2
    ],
    "explanation": "Attestation is an existence acknowledgement; certification checks and updates CI field values.",
    "status": "practice",
    "issue": "",
    "source": "https://www.servicenow.com/docs/r/zurich/servicenow-platform/configuration-management-database-cmdb/cmdb-data-management.html"
  },
  {
    "id": 167,
    "topic": "CSDM Roles",
    "question": "Who initiates requirements for an infrastructure upgrade catalog item?",
    "options": [
      "Enterprise Architect",
      "Application Service Owners",
      "Technology Service Owners"
    ],
    "correct": [
      2
    ],
    "explanation": "Technology Service Owners manage infrastructure-related technical services and their request requirements.",
    "status": "practice",
    "issue": "",
    "source": "https://www.servicenow.com/docs/r/servicenow-platform/common-service-data-model-csdm/csdm-implementation-stages.html"
  },
  {
    "id": 168,
    "topic": "CSDM Walk",
    "question": "What benefit does CSDM Walk provide?",
    "options": [
      "More detailed technical support structure",
      "APM Foundation velocity",
      "Business Service impact assessment for ITSM"
    ],
    "correct": [
      0
    ],
    "explanation": "The Walk stage builds the technical support and delivery model using technical services, technical service offerings and dynamic CI groups. Business service impact analysis across consumer-facing offerings is primarily developed in Run, after those business-facing services are linked to supporting service instances.",
    "status": "practice",
    "issue": "",
    "source": "https://www.servicenow.com/docs/r/servicenow-platform/common-service-data-model-csdm/csdm-implementation-stages.html"
  },
  {
    "id": 169,
    "topic": "Incident Routing",
    "question": "What Incident field is populated from the selected CI Support Group?",
    "options": [
      "Assignment Group",
      "Support Group",
      "Approval Group",
      "Managed by Group",
      "Change Group"
    ],
    "correct": [
      0
    ],
    "explanation": "With the ITSM CSDM Best Practice Populate Assignment Group based on CI/SO rule enabled, the selected CI’s Support Group can populate an Incident’s Assignment Group. The selected CI supplies the routing team, not an Approval Group; the automation depends on instance configuration.",
    "status": "practice",
    "issue": "",
    "source": "https://www.servicenow.com/docs/r/washingtondc/it-service-management/create-incident-from-workspace.html"
  },
  {
    "id": 170,
    "topic": "CI Class Manager",
    "question": "Which Attributes tab shows fields added specifically to Windows Server?",
    "options": [
      "All",
      "Child",
      "Added",
      "Derived"
    ],
    "correct": [
      2
    ],
    "explanation": "Added lists attributes defined on the current class; Derived shows inherited fields.",
    "status": "practice",
    "issue": "",
    "source": "https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/t_CreateCIType.html"
  },
  {
    "id": 171,
    "topic": "CMDB Health",
    "question": "Why might Orphan evaluate 50,000 servers while Duplicate evaluates 60,000?",
    "options": [
      "Orphan has a CMDB group",
      "Duplicate has Health Inclusion rule",
      "Orphan has Health Inclusion rule",
      "Duplicate has CMDB group"
    ],
    "correct": [
      2
    ],
    "explanation": "Health Inclusion Rules can limit the scope evaluated for an individual metric.",
    "status": "practice",
    "issue": "",
    "source": "https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/overview-cmdb-health.html"
  },
  {
    "id": 172,
    "topic": "CSDM Incident",
    "question": "What CSDM data helps identify impacted users during a patient management incident?",
    "options": [
      "Service Offerings by Department or Location",
      "Affected CI task_ci list",
      "Application Service environment",
      "Past incident history"
    ],
    "correct": [
      0
    ],
    "explanation": "Service offerings segmented by location or department help identify the consuming user populations.",
    "status": "practice",
    "issue": "",
    "source": "https://www.servicenow.com/docs/r/servicenow-platform/common-service-data-model-csdm/csdm-implementation-stages.html"
  },
  {
    "id": 173,
    "topic": "Archive Policies",
    "question": "How should Linux servers not updated for six months be removed using Data Manager?",
    "options": [
      "Business rule",
      "Scheduled job",
      "Archive policy"
    ],
    "correct": [
      2
    ],
    "explanation": "Archive policies manage inactive or outdated CI data according to defined criteria.",
    "status": "practice",
    "issue": "",
    "source": "https://www.servicenow.com/docs/r/zurich/servicenow-platform/configuration-management-database-cmdb/cmdb-data-management.html"
  },
  {
    "id": 174,
    "topic": "Dynamic Reconciliation",
    "question": "Server uses largest RAM value: Tivoli 4096, ServiceNow 4096, LANDesk 2048, Altiris 8192. Result?",
    "options": [
      "2048 MB",
      "4096 MB",
      "8192 MB"
    ],
    "correct": [
      2
    ],
    "explanation": "The largest-value rule chooses 8192 MB, regardless of which value was reported most often.",
    "status": "practice",
    "issue": "",
    "source": "https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/r_ReconciliationRulesPrinciples.html"
  },
  {
    "id": 175,
    "topic": "Service Graph Connectors",
    "question": "What happens if a customized script transform changes in a connector upgrade?",
    "options": [
      "Upgrade stops with error",
      "Skipped change is created; custom transform preserved",
      "Connector refuses to start"
    ],
    "correct": [
      1
    ],
    "explanation": "Customized application artifacts commonly produce skipped changes on upgrades to protect local modifications.",
    "status": "practice",
    "issue": "",
    "source": "https://www.servicenow.com/docs/r/servicenow-platform/service-graph-connectors/cmdb-integration-sccm.html"
  },
  {
    "id": 176,
    "topic": "Dynamic Reconciliation",
    "question": "Which are Dynamic Rule Types? (Choose all correct)",
    "options": [
      "Most Reported",
      "Last Created",
      "Last Updated",
      "Smallest Value"
    ],
    "correct": [
      0,
      3
    ],
    "explanation": "Dynamic rules can select the most reported or smallest reported value; Last Created and Last Updated are not these rule types.",
    "status": "practice",
    "issue": "",
    "source": "https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/r_ReconciliationRulesPrinciples.html"
  },
  {
    "id": 177,
    "topic": "CMDB Health",
    "question": "Which correctness measures are used? (Choose 2)",
    "options": [
      "Downgraded CIs",
      "Duplicate CIs",
      "Missing CIs",
      "Stale CIs",
      "Upgraded CIs"
    ],
    "correct": [
      1,
      3
    ],
    "explanation": "Duplicate and stale CIs are correctness measures, along with orphan CIs.",
    "status": "practice",
    "issue": "",
    "source": "https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/overview-cmdb-health.html"
  },
  {
    "id": 178,
    "topic": "Service Mapping",
    "question": "How does Application Service mapping help data center change planning?",
    "options": [
      "Understand business impact of CIs",
      "Find physical locations",
      "Predict device shutdown sequence"
    ],
    "correct": [
      0
    ],
    "explanation": "Mapped service dependencies connect infrastructure changes to affected business services.",
    "status": "practice",
    "issue": "",
    "source": "https://learning.servicenow.com/kb?id=kb_article_view&sysparm_article=KB0012913"
  },
  {
    "id": 179,
    "topic": "CMDB Classes",
    "question": "Which approaches reduce technical debt for custom CI classes? (Choose 2)",
    "options": [
      "Repurpose base CI class and rename fields",
      "Extend Asset table",
      "Extend an existing appropriate CI class",
      "Check CMDB CI Class Models store app for suitable class"
    ],
    "correct": [
      2,
      3
    ],
    "explanation": "Prefer existing class models and extend the appropriate CI hierarchy rather than repurposing unrelated classes.",
    "status": "practice",
    "issue": "",
    "source": "https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/t_CreateCIType.html"
  },
  {
    "id": 180,
    "topic": "Principal Classes",
    "question": "Where are Principal Classes designated?",
    "options": [
      "CMDB Data Manager",
      "CI Class Manager",
      "System Properties",
      "CMDB Workspace"
    ],
    "correct": [
      1
    ],
    "explanation": "The Basic Info tab of CI Class Manager contains the Principal Class checkbox.",
    "status": "practice",
    "issue": "",
    "source": "https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/t_CreateCIType.html"
  },
  {
    "id": 181,
    "topic": "Data Manager",
    "question": "Which group field leverages ownership set in CI Class Manager?",
    "options": [
      "Managed By Group",
      "Approval Group",
      "Support Group",
      "Change Group"
    ],
    "correct": [
      0
    ],
    "explanation": "Managed By Group identifies the responsible group for ownership-related policy tasks.",
    "status": "practice",
    "issue": "",
    "source": "https://www.servicenow.com/docs/r/zurich/servicenow-platform/configuration-management-database-cmdb/cmdb-data-management.html"
  },
  {
    "id": 182,
    "topic": "CMDB Compliance",
    "question": "What configures compliance checks for servers missing patches?",
    "options": [
      "Technical offerings and groups",
      "Certification Filter, Certification Template, Audit",
      "Stale, Orphan, Duplicate",
      "Certification Policies, Filters, Jobs"
    ],
    "correct": [
      1
    ],
    "explanation": "Audit-based compliance compares actual values with expected values configured through templates and filters.",
    "status": "practice",
    "issue": "",
    "source": "https://learning.servicenow.com/kb?id=kb_article_view&sysparm_article=KB0012913"
  },
  {
    "id": 183,
    "topic": "CMDB Terms",
    "question": "What describes CI records missing expected logical or physical relationships?",
    "options": [
      "Duplicate",
      "Required",
      "Orphan",
      "Stale",
      "Recommended",
      "Audit"
    ],
    "correct": [
      2
    ],
    "explanation": "Orphan CIs lack the expected relationships to other CIs.",
    "status": "practice",
    "issue": "",
    "source": "https://learning.servicenow.com/kb?id=kb_article_view&sysparm_article=KB0012913"
  },
  {
    "id": 184,
    "topic": "CSDM Classes",
    "question": "Which class is published to business users and supports business capabilities?",
    "options": [
      "Application Service",
      "Technology Management Service",
      "Business Service"
    ],
    "correct": [
      2
    ],
    "explanation": "Business Services represent capabilities and outcomes offered to business consumers.",
    "status": "practice",
    "issue": "",
    "source": "https://www.servicenow.com/docs/r/servicenow-platform/common-service-data-model-csdm/csdm-implementation-stages.html"
  },
  {
    "id": 185,
    "topic": "CSDM Domains",
    "question": "Which domain contains Business Application?",
    "options": [
      "Design and Planning",
      "Foundation",
      "Service Delivery",
      "Sell / Consume"
    ],
    "correct": [
      0
    ],
    "explanation": "Business Applications are modeled in the Design and Planning domain.",
    "status": "practice",
    "issue": "",
    "source": "https://www.servicenow.com/docs/r/servicenow-platform/common-service-data-model-csdm/csdm-implementation-stages.html"
  },
  {
    "id": 186,
    "topic": "Discovery",
    "question": "Which integration provides operational hardware and application CI data for incident resolution?",
    "options": [
      "Hardware Asset Management",
      "Risk Management",
      "Discovery",
      "Service Portfolio Management"
    ],
    "correct": [
      2
    ],
    "explanation": "Discovery populates operational infrastructure and application CI details.",
    "status": "practice",
    "issue": "",
    "source": "https://learning.servicenow.com/kb?id=kb_article_view&sysparm_article=KB0012913"
  },
  {
    "id": 187,
    "topic": "CMDB Terms",
    "question": "Which CI records are detected during IRE processing and have remediation tools?",
    "options": [
      "Audits",
      "Orphan CIs",
      "Required fields",
      "Recommended fields",
      "Stale CIs",
      "Duplicate CIs"
    ],
    "correct": [
      5
    ],
    "explanation": "Duplicate CIs represent the same entity multiple times and can be addressed using deduplication tools.",
    "status": "practice",
    "issue": "",
    "source": "https://learning.servicenow.com/kb?id=kb_article_view&sysparm_article=KB0012913"
  },
  {
    "id": 188,
    "topic": "CSDM Lifecycle",
    "question": "Which table uses CI type to determine valid sublevel lifecycle states?",
    "options": [
      "life_cycle_mapping",
      "life_cycle_stage",
      "life_cycle_stage_status",
      "life_cycle_control"
    ],
    "correct": [
      3
    ],
    "explanation": "The life_cycle_control table determines which Life Cycle Stage Status values are permitted for a given Life Cycle Stage and type of CI. The Life Cycle Mapping table instead translates legacy status fields into the CSDM lifecycle model.",
    "status": "practice",
    "issue": "",
    "source": "https://www.servicenow.com/docs/r/servicenow-platform/common-service-data-model-csdm/csdm-lifecycle-logical.html"
  },
  {
    "id": 189,
    "topic": "CMDB Roles",
    "question": "Which role is typically responsible for administering CMDB configuration and CI data quality?",
    "options": [
      "CI Analyst",
      "Service or Product Owner",
      "Configuration Manager / CMDB Admin",
      "Business Relationship Manager"
    ],
    "correct": [
      2
    ],
    "explanation": "A Configuration Manager or CMDB administrator is responsible for governing CI data and administering CMDB processes and configurations. A CMDB Process Owner has process accountability but that title does not automatically grant the broadest platform permissions.",
    "status": "practice",
    "issue": "",
    "source": "https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/ci-class-manager-landing-page.html"
  },
  {
    "id": 190,
    "topic": "CMDB Terms",
    "question": "Which term describes useful fields that improve CI accuracy, completeness and troubleshooting?",
    "options": [
      "Duplicate",
      "Required",
      "Orphan",
      "Stale",
      "Recommended",
      "Audit"
    ],
    "correct": [
      4
    ],
    "explanation": "Recommended fields improve data quality and usefulness even when not strictly mandatory.",
    "status": "practice",
    "issue": "",
    "source": "https://learning.servicenow.com/kb?id=kb_article_view&sysparm_article=KB0012913"
  }
];
