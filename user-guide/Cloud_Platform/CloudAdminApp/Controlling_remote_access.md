---
uid: Controlling_remote_access
---

# Controlling remote access with the Admin app

Remote access can be controlled both on organization level and on DMS level. If remote access is disabled for an organization, it is automatically also disabled for all DataMiner Systems within that organization.

## Controlling the remote access settings of your organization

If you have the Owner or Admin role on dataminer.services for an organization, you can enable or disable the [remote access](xref:Cloud_Remote_Access) features.

1. In the Admin app, check whether the correct organization is mentioned in the header bar.

   > [!TIP]
   > See also: [Accessing the Admin app](xref:Accessing_the_Admin_app)

1. If a different organization should be selected, click the organization selector ![Organization selector](~/user-guide/images/Cloud_Admin_Selector_icon.png) in the top-right corner and select the organization in the list.

1. In the pane on the left, under *Organization*, select the *Settings* page.

1. Toggle the *Remote Access* settings to *On* or *Off*, depending on whether you want this to be allowed or disabled for all the DataMiner Systems in this organization.

> [!NOTE]
>
> - If a setting is disabled on organization level, it will not be possible to enable it for the DataMiner Systems in this organization.
> - When you change a *Remote Access* setting from *On* to *Off*, it can take a minute before the change is applied.
> - Users will only be able to use the remote access features if they have been given access to the DMS on dataminer.services. See [Controlling user access to dataminer.services features](xref:Giving_users_access_to_cloud_features). They also need to have the [General > DataMiner web apps](xref:DataMiner_user_permissions#general--dataminer-web-apps--dataminer-cube-mobile-access) user permission, as well as any other user permissions required to access specific apps.
> - The Remote Access feature can also be disabled locally on a specific server. See [Disabling Remote Access and Live Sharing locally](xref:Disabling_Remote_Access_and_Live_Sharing).

## Controlling the remote access settings of a DMS in your organization

If you have the Owner or Admin role on dataminer.services for a DMS, you can enable or disable the [remote access](xref:Cloud_Remote_Access) features.

1. In the Admin app, check whether the correct organization is mentioned in the header bar.

   > [!TIP]
   > See also: [Accessing the Admin app](xref:Accessing_the_Admin_app)

1. If a different organization should be selected, click the organization selector ![Organization selector](~/user-guide/images/Cloud_Admin_Selector_icon.png) in the top-right corner and select the organization in the list.

1. In the pane on the left, under *DataMiner Systems*, select your DataMiner System and select the *Settings* page.

1. Toggle the *Remote Access* settings to *On* or *Off*, depending on whether you want this to be enabled or not.

> [!NOTE]
>
> - If a setting is disabled on organization level, it will not be possible to enable it for a DataMiner System in that organization.
> - When you change a *Remote Access* setting from *On* to *Off*, it can take a minute before the change is applied.
> - Users will only be able to use the remote access features if they have been given access to the DMS on dataminer.services. See [Controlling user access to dataminer.services features](xref:Giving_users_access_to_cloud_features). They also need to have the [General > DataMiner web apps](xref:DataMiner_user_permissions#general--dataminer-web-apps--dataminer-cube-mobile-access) user permission, as well as any other user permissions required to access specific apps.
> - The Remote Access feature can also be disabled locally on a specific server. See [Disabling Remote Access and Live Sharing locally](xref:Disabling_Remote_Access_and_Live_Sharing).
