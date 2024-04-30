---
uid: Creating_a_DaaS_system_FAQ
---

# Frequently asked questions related to DaaS

### What are DataMiner credits?

DataMiner credits are a form of currency used to subscribe to DataMiner software and hosting services.

> [!TIP]
> For more information, see [Usage terms](xref:Pricing_Usage_based_service#usage-terms).

### Where can I check the current DataMiner credit balance of my organization?

The DataMiner credit balance of an organization is displayed in the [Admin app](https://admin.dataminer.services/).

### How can I acquire more DataMiner credits?

You can order DataMiner credits through the Azure Marketplace. See [Order DataMiner Credits](xref:Order_DataMiner_credits).

For more information, contact [your Account Manager](https://community.dataminer.services/get-in-touch/sales-team/).

### When does a DaaS system expire?

A DataMiner Community Edition DaaS system will be scheduled to expire as soon as the organization does not have sufficient DataMiner credits to extend its lifetime.

> [!NOTE]
> When an organization has multiple DaaS systems, they will be extended in chronological order. When your organization does not have enough credits left to extend one of your DaaS systems, that DaaS system will be scheduled to expire. However, at this point, you may still have a number of DataMiner credits left that will be considered reserved for your other DaaS systems.

### What happens when my DaaS system expires or is deleted?

Your DaaS system along with all its associated resources and data will be irreversibly deleted.

> [!NOTE]
> If you are an owner of the organization of a DaaS system or an owner of a DaaS system, you will get an email notification if your system is about to expire, for example because you do not have enough DataMiner credits left. Depending on how many DataMiner credits you use for other purposes, you will get this notification up to 5 days before the system expires. Another email notification will be sent when the system effectively expires.

### How can I manually delete my DaaS system?

You can delete your DaaS system at any time before its expiration. See [Removing a DaaS system](xref:Removing_a_DaaS_system).

### How can I create a new DaaS system?

Follow the instructions under [Creating a new DMS on dataminer.services](xref:Creating_a_DMS_on_dataminer_services).

### What is the expected availability of a DaaS system?

By default, a DaaS system has a target availability of 99.5%. This can be adjusted as part of a Master Service Agreement (MSA).

For more information, please contact <sales@skyline.be>.

### What data redundancy policy does a DaaS system have?

By default, a DaaS system has zone-redundant storage (ZRS). Geo-redundant storage (GRS) is optional at an additional subscription cost.

See also: [Data location and redundancy](xref:STaaS#data-location-and-redundancy).

### What system redundancy policy does a DaaS system have?

As of Q4 of 2024, a DaaS system will be able to use Swarming.

See also: [Swarming](xref:Swarming).

### What backup policy does a DaaS system have?

For more information, see [Data resilience and backups](xref:STaaS#data-resilience-and-backups).

### Is it possible to make a local backup of all data?

You can set up your own offload or "central" database in your DaaS system at no additional subscription cost. That database will contain an offline copy of all (or some of) the data in the general DMA databases.

See also: [Offload database](xref:Offload_database).

### Is it possible to copy data from Azure and store it locally?

You can use the DataMiner API to copy data from Azure at no additional subscription cost.

### How can a DaaS system connect to on-premises and cloud resources?

For more information, see [Connecting to data sources using a DaaS system](xref:DaaS_connecting_to_data_sources)

### Are additional costs due in order to connect to Azure?

All costs related to Azure VPN Gateway are included in your DaaS subscription. When other options are used, your providers may charge additional fees. In that case, note that Skyline will not act as a broker.

Additional query costs may be due when using e.g. Azure ExpressRoute or Amazon CloudWatch to retrieve data from other cloud providers. The costs for retrieving data from Amazon Web Services are usually negligible.

### How are user accounts managed? Where are the passwords stored?

User management on DaaS systems is similar to that on on-premises system. Although local accounts are available by default, user accounts are typically integrated by an identity provider.

See also: [User management](xref:User_management).
