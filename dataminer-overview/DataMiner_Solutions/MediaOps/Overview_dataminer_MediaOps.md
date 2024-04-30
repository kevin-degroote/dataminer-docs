---
uid: Overview_dataminer_MediaOps
---

# dataminer.MediaOps

## Harmonizing ICT and media

dataminer.MediaOps transforms the media supply chain with data-driven automation. Built on the renowned DataMiner platform, the product harmonizes deep media expertise with ICT tech. Experience a seamless process from planning productions, and scheduling people, technical resources, or bandwidth, to running live media operations and automating file workflows. dataminer.MediaOps supports any vendor, and any video and transport format, including SDI, SRT, and SMPTE ST 2110. It streamlines media operations, reduces complexity and cost, and improves efficiency in the evolving media supply chain.

## Deliver content faster, better, and cheaper

dataminer.MediaOps seamlessly blends information and communication technology (ICT) with media technology and workflows, introducing a new era of data-driven, automated, and simplified media operations. Central to its architecture is the concept of the digital twin of the media operation—housing all network statistics, metrics, counters and configurations, coupled with vital business information like event schedules, asset inventory, playlists, electronic program guide (EPG) data, and more. This digital twin allows for unprecedented opportunity for resource planning and management, live media operations and automation of file and asset workflows.

While dataminer.MediaOps encompasses the entire media operation, it allows each tenant — whether within the organization or external stakeholders like customers, contractors, network providers, rental companies, and reporters — to work independently within their designated area, while maintaining seamless harmony with other teams.

![MediaOps for planned, live, and file-based operations](~/dataminer-overview/images/mediaops_plan_live_file.png)

## Who can benefit from dataminer.MediaOps?

Many users rely on dataminer.MediaOps for their specific needs:

- Booking teams schedule resources spanning staffing, transponder slots, IP network capacity, and technical resources.
- MCR and Tx room operators perform ad hoc and scheduled processor control and connection management, smart monitoring, and redundancy switching.
- Engineering teams design, automate, and test media workflows running on-premises, in the cloud, or in a hybrid setup.
- Media asset teams automate asset and file workflows, from ingest to distribution, publication, and archiving.
- IT and SecOps teams manage ICT infrastructure, automate security workflows, and track IP multicast flows.
- Media and ICT cloud teams dynamically deploy and undeploy workloads on demand or according to the master event schedule.
- Finance and procurement teams analyze resource utilization and costs, and generate billing records.
- ...

In essence, dataminer.MediaOps revolutionizes media operations by combining modern ICT practices with deep media domain knowledge for any tenant in the organization and outside. With dataminer.MediaOps, M&E companies deliver better service quality and user experience, responding faster to business needs and technology innovations while increasing productivity and cost-effectiveness.

## What can you do with dataminer.MediaOps?

dataminer.MediaOps simplifies and automates your media supply chain. It comes with a [set of ready-made applications](xref:Overview_MediaOps_Apps), which will soon be available in the DataMiner Catalog<!-- TBD: update when available -->. These can be extended with your own customized applications to tailor the UEx (User Experience) to the user's role. It can also be extended with workflows, automation, and even user-defined APIs to integrate with your existing systems.

The use cases offered by dataminer.MediaOps are listed below. The solution's focus spans from inventory management to planning and reservation, to live operations, up to finishing events and managing costs and billing.

This list will continue to grow over time as new releases become available for dataminer.MediaOps. As a user, you can pick and choose the functions of interest to you at any given moment. A MediaOps solution can be highly focused on a single use case, but it can also address multiple use cases, delivering value to multiple teams and tenants. The choice is yours. Over time, more functions will be added to the solution roadmap, and more use cases will be supported.

- **Inventory**: The management of various inventories includes the creation and oversight of technical resources and pools, facility and personnel resource management, and satellite transponder slot resource management. Media operations also involve the management of incoming and outgoing signals (signal database), which can optionally sync with IS-04 registries, the management of IP multicast address ranges (integrated with IPAM systems), and general asset management including asset discovery and integration with CMDBs, among other tasks.

- **Plan**: Every operation requires planning functions. Examples include planning production events, news events, OU lines over satellite, fiber, or internet (SRT – RIST), and planning asset and file ingest. Planning is essential not only on the content creation and ingest side but also on the content delivery side of the business, encompassing multi-platform channel delivery for OTT, IPTV, cable TV, DTH, DTT, and more. Beyond media teams, ICT teams also require planning tools for maintenance such as software updates, repairs, infrastructure setup, remote field installation, and commissioning. Every team plans workflows, and all teams access the same resources. dataminer.MediaOps is here to share inventory information in a collaborative manner, but also to ensure that no resource conflicts arise.

- **Reserve**: Reservation closely aligns with planning and involves making reservations on resources as per the plans to avoid conflicts. This includes both instant reservations and future reservations to ensure resource availability and suitability, thereby creating a predictable and deterministic operation. Reservations can be made on various technical resources, technical capacities, personnel, facilities and rooms, satellite transponder slots, file transcoders in the cloud, file quality analysis functions in the cloud, and more.

- **Deploy**: As infrastructure becomes virtualized or is delivered as a service, dynamic deployment becomes crucial for any technical workflow. Examples include loading the right FPGA image on a media gateway, deploying the appropriate appliance, virtual machine, or K8S workload in the data center, and initiating cloud deployments or activating cloud inventory and SaaS services on demand, in accordance with the plan. dataminer.MediaOps facilitates automation, reduces human error, and saves costs in these deployment processes.

- **Configure**: At the onset of an event and after the initial deployment of cloud platforms and media functions, initial configurations need to be loaded or set manually. dataminer.MediaOps provides full access to configure media functions, IP network functions, ICT functions (DNS, DHCP, etc.), file recorders, vision mixers, intercoms, cloud transcoders, etc.

- **Connect**: Making connections is fundamental in any media operation, involving the acquisition, aggregation, processing, and delivery of content to the audience. dataminer.MediaOps facilitates setting up connections across various technologies, including SMPTE ST 2110, SMPTE ST 2022, SDI, ASI, L-Band, and over the internet (SRT and RIST). dataminer.MediaOps is here to set up the connections across any technology.

- **Control**: Ad hoc (parameter) control is like the gear shift in your car. You always need it, and it should be conveniently at hand. It is essential for any media function workflow, allowing for adjustments such as audio shuffling, audio delays, video gain, etc.

- **Monitor**: DataMiner intelligently monitors infrastructure, cloud inventory, precision time protocol (PTP), IP flows, services, and service level agreements (SLA), filtering out devices that are not in use or under maintenance to prevent unnecessary alarms.

- **QoS/QoE**: Tracking end-user experience and service quality is crucial. DataMiner collects metrics from the network and end-user CPE devices, utilizing key performance indicators (KPIs) and key quality indicators (KQIs) to enhance service offerings based on solid data sets.

- **Finish**: Cleaning up the network post-event is essential, involving tasks such as removing multicast routes from switches, deactivating cloud infrastructure (eliminating excess cost), and adjusting host and flow policies to enhance network security.

- **Cost & billing**: At the end of the day, M&E enterprises need to manage costs and income. dataminer.MediaOps provides reports on resource utilization, cost, and sales billing prices for each event, enabling M&E companies to understand their costs and allocate them to shows, channels, categories, content providers, customers, and more. dataminer.MediaOps can also generate raw billing information and integrate it into your billing system.

## What do you need to get started with dataminer.MediaOps?

The easiest way to get started is by deploying the MediaOps package to a DaaS system:

1. If you do not have a DaaS system available yet, [spin up a new DaaS system](xref:Creating_a_DMS_on_dataminer_services).

1. [Install the DataMiner SRM framework](xref:deploying_srm) on the system. This must be installed before MediaOps is deployed.

1. Deploy the MediaOps package from the DataMiner Catalog. Note that this is currently not yet available.<!-- TBD: update when package is available -->

If you want to try out the apps using demo data, you can then run the *Generate Demo Data* script in the Automation module in DataMiner Cube. This script is included in the MediaOps package. Keep in mind that this script will generate a significant amount of data and will take some time to complete. It will also generate a number of elements in the system. If you no longer want these later, you will need to remove them manually.

> [!NOTE]
> It is also possible to install MediaOps on a self-hosted DMS, provided DataMiner 10.4.4 or higher is installed and the DMS is [connected to dataminer.services](xref:Connecting_your_DataMiner_System_to_the_cloud).

> [!TIP]
> If you have any questions or need assistance to get started with dataminer.mediaOps, contact <support.mediaops@skyline.be>.

## MediaOps apps

dataminer.MediaOps comes with a set of low-code apps that expose the MediaOps functionality to end users. You can use these apps as they are, or use them as a starting point to develop a custom user interfaces for specific projects.

For an overview of the different applications available in the package, see [MediaOps apps](xref:Overview_MediaOps_Apps).
