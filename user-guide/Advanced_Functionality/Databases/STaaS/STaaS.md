---
uid: STaaS
---

# Storage as a Service (STaaS)

With DataMiner Storage as a Service, you can connect your DataMiner System to a scalable, easy-to-use **cloud-native storage platform**, without the effort of setting up and managing your own storage databases.

![STaaS](~/user-guide/images/STaaS.jpg)

Advantages of DataMiner Storage as a Service (STaaS) include:

- Fast, secure, and reliable storage

- Easy and flexible configuration

- Outstanding performance, scalability, and redundancy

- Cost-effectiveness

- Safe and secure data

> [!TIP]
> If you have any questions or need support with the STaaS feature, contact <staas@dataminer.services>.

## Setting up STaaS

For a self-hosted DataMiner System, follow the steps below to set up STaaS.

> [!NOTE]
>
> - This setup is not needed for [DataMiner as a Service (DaaS) systems](xref:Creating_a_DMS_in_the_cloud), as these automatically use STaaS.
> - If you want to add a DMA to an existing DMS that uses STaaS, refer to [Adding a DataMiner Agent to a DMS running STaaS](xref:Adding_a_DMA_to_a_DMS_running_STaaS).

1. [Upgrade your DataMiner System](xref:Upgrading_a_DataMiner_Agent) to version 10.3.10 [CU1] or higher.

   > [!IMPORTANT]
   > We recommend always upgrading DataMiner to the latest available version to get the latest features and performance updates.

1. Make sure your DataMiner System is [connected to dataminer.services](xref:Connecting_your_DataMiner_System_to_the_cloud).

1. Make sure that all Agents in your DataMiner System have internet access.

   > [!NOTE]
   > All communication for STaaS happens through HTTPS. The DataMiner System initiates all outbound connections.

1. Make sure you have at least **DataMiner CloudGateway 2.8.0** installed on the system. See [Upgrading nodes to the latest DxM versions](xref:Managing_cloud-connected_nodes#upgrading-nodes-to-the-latest-dxm-versions).

1. Contact your Skyline representative or <staas@dataminer.services> to register your system to use STaaS.

   > [!NOTE]
   > If you have a specific preference with respect to the [data location and redundancy setup](#data-location-and-redundancy), let us know when you register your system.

1. Wait until you receive confirmation that the registration is completed.

1. **Optionally**, contact your Skyline representative or <staas@dataminer.services> to migrate your existing data to STaaS.

1. On each DataMiner Agent in the cluster, in the `C:\Skyline DataMiner` folder, open *DB.xml* and edit it corresponding to your setup:

   - For setups **without proxy**, use the following configuration:

      ```xml
      <?xml version="1.0"?>
      <DataBases xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns="http://www.skyline.be/config/db">
         <DataBase active="true" local="true" search="true" cloud="true" type="CloudStorage"/>
      </DataBases>
      ```

   - For setups **with proxy** (this **requires DataMiner 10.4.5 or higher**<!-- RN 39221 -->), use the following configuration, filling in the fields as required:

      ```xml
      <?xml version="1.0"?>
      <DataBases xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns="http://www.skyline.be/config/db">
         <DataBase active="true" local="true" search="true" cloud="true" type="CloudStorage">
            <Proxy>
               <Address>[Enter Address Here]</Address>
               <Port>[Enter Port Here]</Port>
               <UserName>[Enter UserName Here]</UserName>
               <Password>[Enter Password Here]</Password>
            </Proxy>
         </DataBase>
      </DataBases>
      ```

      > [!NOTE]
      > If the proxy does not require authentication, you can leave the *UserName* and *Password* fields blank or remove them.

1. Restart DataMiner to begin using STaaS.

## Data location and redundancy

DataMiner STaaS relies on Azure Storage, which stores multiple copies of your data to make sure it is always available even in case outages or disasters occur. Different storage redundancy setups are possible. STaaS supports zone-redundant storage and geo-redundant storage. When you contact Skyline to register your system to use STaaS, you can include your preferences as to the region(s) where your data should be stored and the type of storage redundancy that should be used.

> [!NOTE]
> DataMiner STaaS's standard supported regions are West Europe (The Netherlands), UK South, North Central US, UAE North, Southeast Asia (Singapore), and Australia East. Choosing regions outside this standard list will incur additional charges.

- **Zone-redundant storage (ZRS)** copies your data synchronously across three Azure availability zones in one region. Each availability zone is a separate physical location with independent power, cooling, and networking. By **default**, DataMiner STaaS uses ZRS.

- **Geo-redundant storage (GRS)** copies your data synchronously three times within a single physical location in the primary region and then also copies your data asynchronously to a single physical location in the secondary region. Only specific regions can be combined in such a setup, e.g. if the primary region is Switzerland North, the secondary region can only be Switzerland West. For an overview of the supported regions, see [Azure paired regions](https://learn.microsoft.com/en-us/azure/reliability/cross-region-replication-azure#azure-paired-regions). GRS is **available upon request**, but will result in additional charges. If you wish to use DataMiner STaaS with GRS, contact <staas@dataminer.services>.

> [!TIP]
> For detailed information, see [Azure Storage redundancy on learn.microsoft.com](https://learn.microsoft.com/en-us/azure/storage/common/storage-redundancy)

## Data resilience and backups

To ensure data resilience for potential recovery scenarios, protecting against user errors and accidental changes, your data is backed up with a **granularity of 1 day**. Backups are stored for **30 days**.

- **Daily backups**: STaaS performs backups with a granularity of 1 day and maintains a 30-day rolling snapshot of your data.

- **Data restoration and support**: In the event a rollback is necessary, our support team will assist you. To submit a rollback request, contact the support team by sending an email to <staas@dataminer.services>. They will guide you through the necessary steps to ensure a successful data restoration.

## Data security and availability

With STaaS, the data for a specific DMS is isolated in a logical partition. You can only ever access the logical partition dedicated to your own DMS, and all partitions are strictly isolated from each other.

To access your data, you use a connection authenticated with a [Service Principal](https://learn.microsoft.com/en-us/entra/identity-platform/app-objects-and-service-principals?tabs=browser#service-principal-object). With this connection, you can only access the logical partition dedicated to a specific DMS, which means that all data of a DMS is strictly isolated.

The data is encrypted both at rest and in transit.

If [ZRS](#data-location-and-redundancy) is used, STaaS has an expected availability of 99.90%. With [GRS](#data-location-and-redundancy), it has an expected availability of 99.95%. For more information, please contact <sales@skyline.be>.

## TTL

It is not yet possible to configure time-to-live (TTL) values for STaaS. In the table below, you can find the default TTL values for each data type.

| Data type                | TTL          |
|--------------------------|:------------:|
| Real-time trending       | 7 days       |
| Average trending (short) | 3 months     |
| Average trending (medium)| 2 years      |
| Average trending (long)  | 10 years     |
| State changes            | 5 years      |
| Spectrum traces          | 1 year       |

## Limitations

To **migrate existing data** to STaaS, the following limitations apply:

- Migration is supported in 10.4.0 and the latest available 10.4.x feature release.

- Migration of a setup with multiple OpenSearch/Elasticsearch clusters is not yet supported.

- Migration from a MySQL setup is not yet supported.

- Migration using a proxy is supported from DataMiner 10.4.6 onwards<!-- RN 39313 -->.

- If you start the migration while an element with a logger table is stopped, the data of that element will not be migrated.

In addition, the following **other limitations** currently apply:

- [Jobs](xref:jobs), [Ticketing](xref:ticketing), and [API Deployment](xref:Overview_of_Soft_Launch_Options#apideployment) data are not supported.

- The following indexing engine functionality is not supported: Alarm Console search tab, search suggestions in the Alarm Console, aliases, and aggregation.

- Custom configuration of TTL values is not yet supported.

- Direct queries from DataMiner Cube to the database are not supported.

- The [SLReset tool](xref:Factory_reset_tool) is not supported.

- [Exporting trend data](xref:Exporting_elements_services_etc_to_a_dmimport_file) to a .dmimport file is not supported.

- DMZ setups are currently not supported.

- The [autoincrement](xref:Protocol.Params.Param.ArrayOptions.ColumnOption-type#autoincrement) tag on logger tables is not supported.

- DOM queries can be slower depending on the number of DOM records and the complexity of the query. This limitation will be removed in the near future.

## Troubleshooting

For troubleshooting information related to STaaS, see [Troubleshooting STaaS issues](xref:Troubleshooting_STaaS_Issues).

> [!NOTE]
> If you experience any issues during setup or while using Storage as a Service, and you cannot resolve these using the available troubleshooting information, contact <staas@dataminer.services>.
