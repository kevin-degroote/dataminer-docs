---
uid: Connecting_your_DataMiner_System_to_the_cloud
---

# Connecting your DataMiner System to dataminer.services

> [!TIP]
> See also: [Kata #9: How to make your DataMiner Agent cloud connected](https://community.dataminer.services/courses/kata-9/) on DataMiner Dojo ![Video](~/user-guide/images/video_Duo.png)

You can [connect a DataMiner Agent to dataminer.services](xref:Connect_to_dataminer_services) (i.e. connect to the cloud) by installing a DataMiner Cloud Gateway on that DMA using the [DataMiner Cloud Pack](https://community.dataminer.services/dataminer-cloud-pack/). DataMiner will communicate using HTTPS via the Gateway. By default, this requires the use of the standard HTTPS port 443. The connection passes through the Windows firewall to reach the endpoint, which also uses port 443.

![Cloud Gateway](~/user-guide/images/Cloud_Gateway.png)

Optionally, you can connect multiple DataMiner Agents to dataminer.services. This has [several advantages](xref:FAQ_DCP#do-all-agents-in-a-dms-have-to-be-connected-to-dataminerservices).

![Multiple_Gateways](~/user-guide/images/Multiple_DMAs_Connected.png)

It is also possible to connect to dataminer.services [via proxy server](xref:Connect_to_cloud_via_proxy) or [with a DMZ setup](xref:Connect_to_cloud_with_DMZ).

![DMZ](~/user-guide/images/DMZ_CloudGateway.png)

Connecting your DataMiner System to dataminer.services will allow you to benefit from a host of additional features. You are free to choose which features you enable or disable in your system.

> [!TIP]
>
> - For an overview of all available dataminer.services features, see [dataminer.services](xref:Overview_DCP).
> - For more information about cloud connectivity and security, see [Cloud connectivity and security](xref:Cloud_connectivity_and_security#connecting-to-dataminerservices).
