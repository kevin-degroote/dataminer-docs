---
uid: I-DOCSIS_Create_CCAP_CM_pair
---

# Creating a new CCAP/CM pair

To create CCAP/CM pairs, you can either create a single CCAP/CM pair, or create elements in bulk from a CSV file.

## Creating a single CCAP/CM pair

1. In DataMiner Cube, go to *Apps* > *Automation*.

1. In the pane on the left, select the script *EPM_I_DOCSIS_AddNewCcapCmPair*.

1. In the lower right corner, click *Execute*.

   This will open a pop-up window.

1. Click *Create single*.

1. In the **General** step:

   1. Define the **element name** (mandatory field).

      > [!NOTE]
      > The name of the collector element will consist of the defined element name with the suffix "_COLLECTOR".

      > [!IMPORTANT]
      > Make sure the element name does not contain any [forbidden characters](xref:Forbidden_characters).

   1. Select the **host** for the **CCAP**.

   1. Select the **host** for the **collector**.

      > [!NOTE]
      >
      > - Selecting the host for the CCAP and collector is only possible by DMA name, not by DMA ID.
      > - Starting from [EPM I-DOCSIS 6.1.9](xref:EPM_6.1.9_I-DOCSIS#epm_i_docsis_addnewccapcmpair-script-updated-to-allow-installation-of-ccap-and-cm-collector-on-different-dmas-id_37192), it is possible to create the CM collector in a CCAP pair on a different DMA than the CCAP. However, creating the pair on the same DMA is recommended. Creating them on different DMAs should only be done in case of network restrictions.

1. In the **CCAP Details** step:

   1. Select the desired **CCAP protocol**.

      At present, the following protocols are supported:

      - CISCO CMTS CCAP Platform

      - Arris E6000 CCAP Platform

      - Casa Systems CCAP Platform

      - CISCO CBR-8 CCAP Platform

      - Huawei 5688-5800 CCAP Platform

   1. Select the desired **protocol version**. We recommend the production version.

   1. Enter the **IP address** that will be used to monitor the CCAP element (mandatory field).

   1. Enter the **get** community string that will be used by the **CCAP** to poll the device.

   1. Enter the **set** community string that will be used by the **CCAP** to set information in the device.

      > [!NOTE]
      > The solution currently does not support SNMP sets from any CCAP connector/CM collector yet. This field has been added as a placeholder for upcoming SNMP set support.

   1. Enter the **get** community string for the **collector**.

   1. Enter the **set** community string  for the **collector**.

      > [!NOTE]
      > The solution currently supports only one single community string for all the CMs monitored by the CM collector. Therefore, this community string will be used to poll all CMs monitored by the CM collector. The list of CMs polled by this CM collector comes from the associated CCAP (the CCAP pair).

   1. Enter the **user and password** that can be used to access the shared folder where the CSV files created by the CM collector will be stored. Domain accounts are supported.

1. In the **View Details** step, select the location where the CCAP/CM pair will be added in the EPM view structure.

1. Click *Create*.

The elements will be created with the following specifications:

- **CCAP:**

  - **Element name**: The defined element name.

  - **Protocol**: The selected protocol.

  - **Protocol version**: The selected version.

  - **IP address**: The defined IP address.

  - **Alarm template**: The default alarm template.

  - **Trend template**: The default trend template.

  - **Get community string CCAP**: The defined get community string for the CCAP.

  - **Set community string CCAP**: The defined set community string for the CCAP.

  - **Entity export directory**: The same directory as is set in the back end of the host.

  - **Entity import directory**: The same directory as is set in the back end of the host.

  - **Entity import directory type**: Remote.

  - **System username**: The username to access the shared folder.

  - **System password**: The password to access the shared folder.

- **Collector:**

  - **Element name**: The defined element name combined with the suffix "_COLLECTOR".

  - **Protocol** The [Generic DOCSIS CM Collector](https://catalog.dataminer.services/details/connector/4207) protocol.

  - **Protocol version**:The production version.

  - **IP address**: 127.0.0.1.

  - **Alarm template**: public.

  - **Trend template**: private.

  - **Get community string Collector**: The defined get community string for the collector.

  - **Set community string Collector**: The defined set community string for the collector.

  - **Entity import directory**: The same directory as is set in the back end of the host.

  - **Entity import directory type**: Remote.

  - **System username**: The username to access the shared folder.

  - **System password**: The password to access the shared folder.

> [!NOTE]
> It may take some time before the elements are created. The larger the cluster, the longer it will take to create the elements.

## Creating CCAP/CM pairs in bulk from a CSV file

<!-- RN 37262 -->

1. In DataMiner Cube, go to apps > Automation.

1. In the pane on the left, select the script *EPM_I_DOCSIS_AddNewCcapCmPair*.

1. In the lower right corner, click *Execute*.

   This will open a pop-up window.

1. Click *Create bulk*.

1. Below the **Create Bulk** script text, enter the path of the CSV file.

   > [!NOTE]
   >
   > - The CSV file must be present on the server running the DMA.
   > - The CSV file has to have the following structure: ElementName, Ccap_DMA, Collector_DMA, Protocol, IpAddress, GetCommunityString, SetCommunityString,GetCommunityStringColl, SetCommunityStringColl, Network, Market, Hub, SystemUser, SystemPass.

1. Click *Create Bulk*.

The elements will be created with the specifications in the CSV file of each row.

Here is an example of the CSV file with the mandatory headers and the content of each row.

| ElementName | Ccap_DMA | Collector_DMA | Protocol | IpAddress | GetCommunityString | SetCommunityString | GetCommunityStringColl | SetCommunityStringColl | Network | Market | Hub | SystemUser | SystemPass |
|--|--|--|--|--|--|--|--|--|--|--|--|--|--|
| filename1 | EPM-DMA03 | EPM-DMA03 | CISCO CBR-8 CCAP Platform | 10.11.12.11 | getPublic | setprivate | collectorget | collectorset | GLOBAL NETWORK | EAST MARKET 01 | EAST HUB 01 | US1 | 123 |
| filename2 | EPM-DMA04 | EPM-DMA04 | CISCO CBR-8 CCAP Platform | 10.11.12.12 | getprivate | setPublic | collectorget | collectorset | GLOBAL NETWORK | EAST MARKET 01 | EAST HUB 01 | US2 | 123 |

> [!NOTE]
>
> - For the **Protocol** column, only the following values are currently accepted:
>   - CISCO CMTS CCAP Platform
>   - Arris E6000 CCAP Platform
>   - Casa Systems CCAP Platform
>   - CISCO CBR-8 CCAP Platform
>   - Huawei 5688-5800 CCAP Platform
> - Click the *Cancel* button in any window to close the Automation script at any time.
