---
uid: Preparing_the_two_DataMiner_Agents
---

# Preparing the two DataMiner Agents

Before you start the actual configuration, make sure you have the following:

- A [primary DMA](#primary-dataminer-agent)

- A [backup DMA](#backup-dataminer-agent) (newly installed)

- A [pair of additional IP addresses or a hostname](#additional-ip-addresses-or-hostname)

  > [!NOTE]
  > To avoid possible conflicts, make sure these IP addresses are not used anywhere else and that these are reserved for the Failover pair.

In addition, make sure the [required ports are opened](#opening-the-required-ports), and the [database is prepared](#preparing-the-database).

## Primary DataMiner Agent

The primary DMA is a normal DataMiner Agent. In most cases, this will be an existing DMA that is a member of a DMS cluster. It does not require any additional configuration.

## Backup DataMiner Agent

The backup DMA must be a newly installed DataMiner Agent.

- The DataMiner ID of this DMA must be identical to the DataMiner ID of the primary DMA.

  For more information on how to change the DataMiner ID, see [Changing the DataMiner ID of a DMA](xref:Changing_the_DMA_ID).

- The version of the DataMiner software on the backup DMA must be exactly the same as on the primary DMA.

- The backup DMA may not be a member of a DMS cluster.

## Additional IP addresses or hostname

When Failover is configured, one or two additional IP addresses are needed, depending on the number of network interfaces of the DMAs. These will be used as the virtual IP addresses of the primary or the backup DMA, depending on which of the two is online. If the DMAs only have one network interface, only one additional IP address is needed.

Alternatively, from DataMiner 10.2.0/10.1.8 onwards, a shared hostname can be used instead of the virtual IP addresses. This hostname must be configured in the network, i.e. a corresponding DNS record must exist. The hostname must resolve to both primary IP addresses of the Failover Agents. For example, this could be the output of an nslookup of such a hostname:

```txt
Name: ResetPlease.FailoverZone
Addresses: 10.11.5.52
 10.11.4.52
```

> [!IMPORTANT]
>
> - If your system has been configured to use HTTPS, make sure that the virtual IP addresses or shared hostname also have **signed certificates**. For more information, see [Setting up HTTPS on a DMA](xref:Setting_up_HTTPS_on_a_DMA).
>
>   As the setup of the certificates can be highly situational, for example in case proxies are involved, check with your IT services if you are not sure how to generate and deploy TLS/SSL certificates.
>
> - If a DMS already contains a DMA that was added based on its hostname or a Failover pair based on hostname, any Failover pairs you add to that DMS have to be configured based on hostname. Similarly, if a DMS already contains a Failover pair with virtual IP addresses, other Failover pairs in that same DMS also have to be configured with virtual IP addresses. This way you avoid mixing two different environments in one DMS. From DataMiner 10.2.0 [CU21]/10.3.0 [CU9]/10.3.12 onwards, such a mix of environments is not allowed.<!--RN 37075-->

## Opening the required ports

To ensure that the primary and backup DMA can communicate, make sure that both DMAs have the required ports mentioned under [Configuring the IP network ports](xref:Configuring_the_IP_network_ports).

Make sure that packets to and from these ports coming from the virtual IP address or the shared hostname are not dropped by the network.

## Preparing the database

Each [supported system data storage architecture](xref:Supported_system_data_storage_architectures) has a different way of handling the setup of a Failover system. Below you can find the measures that need to be taken for each of the supported architectures.

### Dedicated clustered storage

1. Make sure that the Agents to be added can reach the Cassandra cluster through ports 9042 or 9142 when using TLS.

1. Make sure that the Agents to be added can reach the OpenSearch or Elasticsearch cluster through port 9200.

1. Double-check that there are no elements or alarms on the backup DMA to ensure that no conflicts happen when joining the DMAs. The backup DMA must be a newly installed, blank Agent.

1. Stop the backup DMA, and then copy the database configuration from the primary DMA to the backup DMA:

   1. On the primary DMA, open `C:\Skyline DataMiner\DB.xml`.

   1. Copy the contents of the `DataBases` tag.

   1. Paste this content in the file `C:\Skyline DataMiner\db.xml` on the backup DMA.

      > [!IMPORTANT]
      > If multiple [OpenSearch clusters](xref:Configuring_multiple_OpenSearch_clusters) or [Elasticsearch clusters](xref:Configuring_multiple_Elasticsearch_clusters) are used prior to DataMiner 10.4.0/10.4.2, there is an additional file that needs to be copied from the primary to the backup DMA. You can find this *DBConfiguration.xml* file in the folder `C:\Skyline DataMiner\Databases\`. Make sure you also do this while the backup Agent is stopped.

      > [!NOTE]
      > If multiple [OpenSearch clusters](xref:Configuring_multiple_OpenSearch_clusters) or [Elasticsearch clusters](xref:Configuring_multiple_Elasticsearch_clusters) are used, you may wish to configure the *priorityOrder* attribute differently on the main or backup DMA. You can do this if you want to change which indexing cluster is read from when there is a Failover switch. For more info on the *priorityOrder* attribute, see [OpenSearch clusters](xref:Configuring_multiple_OpenSearch_clusters) or [Elasticsearch clusters](xref:Configuring_multiple_Elasticsearch_clusters).

   1. Restart the backup DMA.

1. If TLS is used, make sure that the required certificates are imported, and this is correctly configured on the backup DMA as well.

   - For Cassandra see [Encryption in Cassandra](xref:Security_Cassandra_TLS).

   - For OpenSearch, see [Securing the OpenSearch database](xref:Security_OpenSearch).

   - For Elasticsearch (deprecated) see [Securing the Elasticsearch database](xref:Security_Elasticsearch).

### Separate Cassandra setup with indexing

We **recommend against this setup** for Failover. With this setup, it is possible that if one node goes down, all data in the indexing database is unavailable.

If you do go ahead with this, take into account that the the indexing database will automatically create a cluster of two nodes: one for the primary DMA and one for the backup DMA. To ensure this can happen, make sure that **ports 9200 and 9300** are open between primary and backup DMA so the databases can communicate. See [Configuring the IP network ports](xref:Configuring_the_IP_network_ports).

For Cassandra, you will need to take the same steps as detailed below for a [separate Cassandra setup without indexing](xref:Preparing_the_two_DataMiner_Agents#separate-cassandra-setup-without-indexing).

### Separate Cassandra setup without indexing

When you set up Failover, DataMiner will automatically attempt to add Cassandra to a cluster of two Cassandra nodes, one for the primary DMA and one for the backup DMA. To make sure this can happen correctly, follow the steps below before you attempt to set up Failover:

1. Make sure that Cassandra is installed and running on both DataMiner Agents, by opening *Windows Services* and checking whether the *cassandra* service exists and is running.

   > [!NOTE]
   > If Cassandra is not installed yet, for instance because you used an older DataMiner installer that still installs MySQL, you will first need to [migrate the database to Cassandra](xref:Migrating_the_general_database_to_Cassandra).

1. If Cassandra is running, open an *elevated command window* and navigate to `C:\Program Files\Cassandra\bin`.

1. In this folder, execute the command *nodetool version*.

1. Make sure the output of this command is the same for both DMAs.

   For example, if the command returns "**ReleaseVersion: 3.7**", the other node must also return "**ReleaseVersion: 3.7**". If one of the DMAs has a lower release version, update the Cassandra node so it uses the same version (see *On Windows* under [Updating Cassandra](xref:Cassandra_updating)).

1. Make sure that between the primary and backup DMA, **port 7000 and port 9042** are open to allow the databases to communicate as mentioned under [Configuring the IP network ports](xref:Configuring_the_IP_network_ports).

### Legacy setup with MySQL or MSSQL database

DataMiner will automatically synchronize the configuration and subsequently its data. No steps are necessary to prepare for this.

To check the data synchronization state after you have set up Failover, see [Synchronizing the DMA databases](xref:Synchronizing_the_DMA_databases).

> [!NOTE]
> From DataMiner 10.3 onwards, this setup is no longer supported. See [Third-party software support life cycle](xref:Software_support_life_cycles#third-party-software-support-life-cycle)
