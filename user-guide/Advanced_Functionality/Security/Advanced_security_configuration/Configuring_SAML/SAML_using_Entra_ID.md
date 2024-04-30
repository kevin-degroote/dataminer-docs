---
uid: SAML_using_Entra_ID
---

# Configuring SAML with Microsoft Entra ID as identity provider

From DataMiner 10.1.5 onwards, Microsoft Entra ID (known as Azure Active Directory prior to July 2023) is supported as an identity provider for external authentication via SAML.

To configure external authentication with Entra ID as the identity provider, you will first need to [set up authentication](#configuring-authentication). Once this is done, you will need to [configure how users should be provisioned](#configuring-user-provisioning).

## Configuring authentication

To configure authentication, follow these steps:

1. [Set up a Microsoft Entra ID Enterprise application](#setting-up-a-microsoft-entra-id-enterprise-application)

1. [Create a DataMiner metadata file](#creating-a-dataminer-metadata-file)

1. [Configure DataMiner.xml to use external authentication](#configuring-dataminerxml-to-use-external-authentication)

### Setting up a Microsoft Entra ID Enterprise application

To set up external authentication, you first need to create an enterprise application in Entra ID.

> [!NOTE]
>
> - In DataMiner versions **prior to DataMiner 10.2.0/10.2.1**, using an enterprise application is **not yet supported**, so you should instead register DataMiner on the *App registrations* page. However, note that many features will not be available with such a setup, so we highly recommend upgrading to a more recent DataMiner version and setting up an enterprise application instead.
> - Only a Global Administrator, Application Administrator, Cloud Application Administrator, and Application Developer have the necessary permissions to create enterprise applications.

1. In Entra ID, register DataMiner as an enterprise application:

   1. Navigate to ``portal.azure.com`` and log in.

   1. In the search box at the top, enter *Enterprise applications* to go to the Enterprise Applications page.

   1. At the top, click *New application*.

      ![Adding an enterprise app](~/user-guide/images/SAML_Add_enterprise_app.png)

   1. Click *Create your own application*.

   1. Select *Integrate another application you don’t find in the gallery* and click *Create*.

1. In the pane on the left, go to *Users and groups*.

1. Use the *Add user/group* button to add the necessary users and groups and assign the necessary roles.

   ![Adding users/groups](~/user-guide/images/SAML_Add_users_groups.png)

   > [!NOTE]
   > Make sure the *Email* field is filled in for all users. Azure will not authenticate users with an empty *Email* field.

1. Go to *Single sign-on*, and click *Edit* next to *Basic SAML Configuration*.

   ![Editing the basic SAML configuration](~/user-guide/images/SAML_edit_basic_config.png)

1. Configure the following settings for the basic SAML configuration:

   1. Set *Entity ID* to the IP address or the DNS name of your DataMiner System, for example ``https://dataminer.example.com/``.

   1. Under *Reply URL*, specify the following URL(s), replacing ``dataminer.example.com`` with the IP address or DNS name of your DataMiner System (note the trailing "/"):

      - From DataMiner 10.3.5 onwards:

        - ``https://dataminer.example.com/API/``

      - For older DataMiner versions only:

        - ``https://dataminer.example.com/root/``

        - ``https://dataminer.example.com/ticketing/``

        - ``https://dataminer.example.com/jobs/``

        - ``https://dataminer.example.com/monitoring/``

        - ``https://dataminer.example.com/dashboard/``

        - ``https://dataminer.example.com/API/``

        - ``https://dataminer.example.com/``

      - If the DMA is connected to dataminer.services, also add the following URLs, replacing `<dms-dns-name>` with the DNS name of the DataMiner System and `<organization-name>` with the name of the organization

        - `https://<dms-dns-name>-<organization-name>.on.dataminer.services/API/`

        - `https://<dms-dns-name>-<organization-name>.on.dataminer.services/account-linking`

        - `https://<dms-dns-name>-<organization-name>.on.dataminer.services/account-linking/`

      ![Editing the basic SAML configuration](~/user-guide/images/SAML_Reply_URLs.png)

   1. Set *Sign on URL* to the IP address or DNS name of your DataMiner System, for example ``https://dataminer.example.com/``.

   1. In the top-left corner, click *Save*.

1. Still on the *Single sign-on* page, look for the *SAML Certificates* section and copy the *App Federation Metadata Url*.

   You will need this later, for the *ipMetadata* [configuration in DataMiner.xml](#configuring-dataminerxml-to-use-external-authentication).

### Creating a DataMiner metadata file

1. Create a new XML file named *spMetadata.xml*.

   We recommend placing this file in the `C:\Skyline DataMiner` folder, though it is possible to put it in a different location.

1. Copy the following template into *spMetadata.xml*:

   - From DataMiner 10.3.5 onwards:

     ```xml
     <?xml version="1.0" encoding="UTF-8"?>
     <md:EntityDescriptor xmlns:md="urn:oasis:names:tc:SAML:2.0:metadata" xmlns:ds="http://www.w3.org/2000/09/xmldsig#" entityID="[ENTITYID]" validUntil="2050-01-04T10:00:00.000Z">
       <md:SPSSODescriptor AuthnRequestsSigned="false" WantAssertionsSigned="true" protocolSupportEnumeration="urn:oasis:names:tc:SAML:2.0:protocol">
         <md:AssertionConsumerService Binding="urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST" Location="https://dataminer.example.com/API/" index="0" isDefault="true"/>
       </md:SPSSODescriptor>
     </md:EntityDescriptor>
     ```

   - Older DataMiner versions:

     ```xml
     <?xml version="1.0" encoding="UTF-8"?>
     <md:EntityDescriptor xmlns:md="urn:oasis:names:tc:SAML:2.0:metadata" xmlns:ds="http://www.w3.org/2000/09/xmldsig#" entityID="[ENTITYID]" validUntil="2050-01-04T10:00:00.000Z">
       <md:SPSSODescriptor AuthnRequestsSigned="false" WantAssertionsSigned="true" protocolSupportEnumeration="urn:oasis:names:tc:SAML:2.0:protocol">
         <md:AssertionConsumerService Binding="urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST" Location="https://dataminer.example.com/" index="0" isDefault="true"/>
         <md:AssertionConsumerService Binding="urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST" Location="https://dataminer.example.com/API/" index="1" isDefault="false"/>
         <md:AssertionConsumerService Binding="urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST" Location="https://dataminer.example.com/root/" index="2" isDefault="false"/>
         <md:AssertionConsumerService Binding="urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST" Location="https://dataminer.example.com/dashboard/" index="3" isDefault="false"/>
         <md:AssertionConsumerService Binding="urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST" Location="https://dataminer.example.com/monitoring/" index="4" isDefault="false"/>
         <md:AssertionConsumerService Binding="urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST" Location="https://dataminer.example.com/jobs/" index="5" isDefault="false"/>
         <md:AssertionConsumerService Binding="urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST" Location="https://dataminer.example.com/ticketing/" index="6" isDefault="false"/>
       </md:SPSSODescriptor>
     </md:EntityDescriptor>
     ```

   - For a DMA connected to dataminer.services, add the three following additional bindings within the `<md:SPSSODescriptor>` element:

     ```xml
       <md:SPSSODescriptor AuthnRequestsSigned="false" WantAssertionsSigned="true" protocolSupportEnumeration="urn:oasis:names:tc:SAML:2.0:protocol">
         ...
         <md:AssertionConsumerService Binding="urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST" Location="https://<dms-dns-name>-<organization-name>.on.dataminer.services/API/" index="1" isDefault="true"/>
         <md:AssertionConsumerService Binding="urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST" Location="https://<dms-dns-name>-<organization-name>.on.dataminer.services/account-linking" index="2" isDefault="false"/>
         <md:AssertionConsumerService Binding="urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST" Location="https://<dms-dns-name>-<organization-name>.on.dataminer.services/account-linking/" index="3" isDefault="false"/>
       </md:SPSSODescriptor>
     ```

1. Replace [ENTITYID] with the IP address or the DNS name of your DataMiner System. This URL must be the same as the *Entity ID* you specified while setting up the Microsoft Entra ID Enterprise application.

1. Replace ``https://dataminer.example.com`` with the IP address or the DNS name of your DataMiner System. The specified URL(s) must match the *Reply URL* you specified while setting up the Microsoft Entra ID Enterprise application.

1. If you are configuring this for a DataMiner Agent connected to dataminer.services, replace `<dms-dns-name>` with the DNS name of the DataMiner System and `<organization-name>` with the name of the organization.

   For example, if the DNS name is "dataminer" and the organization name is "skyline", the first URL is `https://dataminer-skyline.on.dataminer.services/API/`.

1. If you are using DataMiner 10.2.1/10.2.0 or higher, make sure ``WantAssertionsSigned`` is set to *true*.

   > [!NOTE]
   > This flag must be set to *true* because SAML responses without signatures can be freely edited to tamper with permissions for the application, leading to severe vulnerabilities. In DataMiner versions prior to DataMiner 10.2.1/10.2.0, setting this flag to true is not yet supported, so we highly recommend upgrading to a more recent DataMiner version.

### Configuring DataMiner.xml to use external authentication

1. Go to the folder `C:\Skyline DataMiner` and open the *DataMiner.xml* file.

1. In *DataMiner.xml*, configure the `<ExternalAuthentication>` tag as illustrated in the example below:

   ```xml
   <DataMiner ...>
     ...
     <ExternalAuthentication
       type="SAML"
       ipMetadata="[Path/URL of the identity provider’s metadata file]"
       spMetadata="[Path/URL of the DataMiner’s metadata file]"
       timeout="300" />
     ...
   </DataMiner>
   ```

   - **type**: `SAML` (Identity federation using SAML assertions)

   - **ipMetadata**: The path to or the URL of the identity provider's metadata file, which you copied while [setting up the Microsoft Entra ID Enterprise application](#setting-up-a-microsoft-entra-id-enterprise-application).

   - **spMetadata**: The path to or the URL of the [DataMiner metadata file](#creating-a-dataminer-metadata-file) you created earlier.

   - **timeout**: Optional. The amount of time DataMiner should wait for the user to be authenticated by the identity provider. If this attribute is not specified, DataMiner will wait 300 seconds (5 minutes).

1. Save and close the file, and restart the DMA.

## Configuring user provisioning

Once authentication has been configured, you need to make sure users are provisioned. There are two ways to do this:

- By [importing users and groups from Microsoft Entra ID into DataMiner](#configuring-dataminer-to-import-users-and-groups-from-microsoft-entra-id).
- By [configuring automatic creation of users](#configuring-automatic-creation-of-users-authenticated-by-entra-id-using-saml). This way, when a user authenticates using SAML, they will automatically be added in DataMiner.

> [!CAUTION]
> If there are two DataMiner users who share the same email address, both users will not be able to log in. To prevent this from happening, we recommended using only one method to add users. For example, do not add Windows domain users if the Entra ID users use the same email address.

### Configuring DataMiner to import users and groups from Microsoft Entra ID

> [!IMPORTANT]
> If you import over 1000 users or groups, it may take some time before the import is complete. Avoid importing over 10,000 users and groups, as this can result in a timeout.

> [!NOTE]
> Prior to DataMiner 10.3.0 [CU12]/10.4.3<!-- RN 38154 -->, the following are not supported: usernames with non-ASCII characters, multiple users with the same first name and surname, and users for which the first name and surname are not provisioned.

#### [From DataMiner 10.1.11/10.2.0 onwards](#tab/tabid-1)

1. Navigate to ``portal.azure.com`` and log in.

1. In the search box at the top, enter *App registrations* to go to the App registrations page.

1. Select *All applications* and use the filter box to find the application you created for DataMiner.

1. Select the application to view a page with more detailed information.

1. Gather the following information from this page:

   - *Application (client) ID*

   - *Object ID* (optional from 10.3.11/10.4.0 onwards<!-- RN 37162 -->)

   - *Tenant ID*

   These GUIDs identify the application (DataMiner) in the Entra ID platform, and identify the users & groups directory on the Azure portal, respectively. You will need these later in this procedure.

   ![SAML application info](~/user-guide/images/SAML_application_info.png)

   > [!NOTE]
   > Do not use the *Object ID* under *Azure Active Directory > Enterprise applications > [your application name]*. This is a different Object ID, which will not work for this procedure.

1. In the pane on the left, select *Certificates & secrets*.

   1. In the *Client secrets* section, select *New client secret*.

      ![New client secret](~/user-guide/images/SAML_New_client_secret.png)

   1. Enter a description and an expiration date for the application secret, and click *Add*.

      ![Add client secret](~/user-guide/images/SAML_Add_client_secret.png)

   1. Copy the secret value for later on. You will need this value later in this procedure.

      > [!IMPORTANT]
      > Once you leave this page, you will no longer be able to access the secret value.

1. Stop the DataMiner Agent for which you want to configure this.

   > [!NOTE]
   > It is possible to configure different methods of authentication for different DMAs in a DataMiner System. You can for example configure one DMA to import users and groups from Entra ID, but use local accounts to log in on a different DMA.

1. On the DataMiner server, go to the folder `C:\Skyline DataMiner` and open the *DataMiner.xml* file.

1. In *DataMiner.xml*, specify the information you previously gathered using the same syntax as in the following example:

   ```xml
   <AzureAD
     tenantId="[GUID]"
     objectId="[GUID]"
     clientId="[GUID]"
     clientSecret="[the DataMiner application secret value]" />
   ```

1. Save the file and restart DataMiner.

   > [!NOTE]
   > After you restart DataMiner, the specified client secret will be replaced by a GUID in the *DataMiner.xml* file.

1. In the Azure portal, go back to the root page for the DataMiner application under *App registrations*.

1. In the pane on the left, select *API Permissions*.

1. Make sure the following permissions are enabled:

   - Microsoft Graph > GroupMember.Read.All – Application – Read groups memberships

   - Microsoft Graph > User.Read.All – Application - Read all users' full profiles

   - Microsoft Graph > User.Read – Delegated – Sign in and read user profile

   - Microsoft Graph > Application.Read.All – Application – Read applications

     > [!NOTE]
     > From DataMiner 10.3.12 onwards, the *Application.Read.All* permission is optional. However, if you do not enable this permission, you will not get a warning if your client secret is about to expire, so we **strongly recommend that you enable this**. If this is enabled, you will get the following notice in the Alarm Console when appropriate: *Your Azure AD application's client secret is expiring soon.*

1. Open DataMiner Cube and log in with an existing Administrator account.

1. Add the users/groups as described under [Adding a user](xref:Adding_a_user) and [Adding a user group](xref:Adding_a_user_group). Select to add an existing user or group in order to add users and groups available on Entra ID.

1. When you have added the necessary users, configure their permissions. See [Configuring a user group](xref:Configuring_a_user_group).

   Users will now be able to log in to DataMiner with any of the Entra ID user accounts you have added, using either the domain and username (DOMAIN\\user) or the email address.

   > [!NOTE]
   > Prior to DataMiner 10.3.0 [CU12]/10.4.3<!-- RN 38154 -->, usernames of imported users have the format `{organization}\{givenName}.{surname}`. From DataMiner 10.3.0 [CU12]/10.4.3 onwards, they have the format `{domain}\{username}`. For example, the username "ZIINE\Björn.Waldegård" in older DataMiner versions becomes "ziine.com\bjorn.waldegard" from DataMiner 10.3.0 [CU12]/10.4.3 onwards.

#### [Older DataMiner versions](#tab/tabid-2)

While it is possible to use DataMiner versions prior to DataMiner 10.1.11/10.2.0 (starting from DataMiner 10.1.5), we do not recommend this. If you do wish to continue using an older DataMiner version, follow the procedure below.

1. Navigate to ``portal.azure.com`` and log in.

1. In the search box at the top, enter *App applications* to go to the App registrations page.

1. Select *All applications* and use the filter box to find the application you created for DataMiner.

1. Select the application to view a page with more detailed information.

1. Gather the following information from this page:

   - *Application (client) ID*

   - *Object ID* (optional from 10.3.11/10.4.0 onwards<!-- RN 37162 -->)

   - *Tenant ID*

   These GUIDs identify the application (DataMiner) in the Entra ID platform, and identify the users & groups directory on the Azure portal, respectively. You will need these later in this procedure.

   > [!NOTE]
   > Do not use the *Object ID* under *Azure Active Directory > Enterprise applications > [your application name]*. This is a different Object ID, which will not work for this procedure.

1. Copy the *Username* and *Password* of the Entra ID user account that DataMiner will use to request data from Azure. Technically this can be any account, but we recommend that you create an account that will be use exclusively for this purpose.

1. Stop the DataMiner Agent for which you want to configure this.

   > [!NOTE]
   > It is possible to configure different methods of authentication for different DMAs in a DataMiner System. You can for example configure one DMA to import users and groups from Entra ID, but use local accounts to log in on a different DMA.

1. On the DataMiner server, go to the folder `C:\Skyline DataMiner` and open the *DataMiner.xml* file.

1. In *DataMiner.xml*, specify the information you previously gathered using the same syntax as in the following example:

   ```xml
   <AzureAD
     tenantId="[GUID]"
     objectId="[GUID]"
     clientId="[GUID]"
     username="[username]"
     password="[password]" />
   ```

1. Save the file and restart DataMiner.

   > [!NOTE]
   > After you restart DataMiner, the specified password will be replaced by a GUID in the *DataMiner.xml* file.

1. In the Azure portal, go back to the root page for the Data Miner application under *App registrations*.

1. In the pane on the left, select *API Permissions*.

1. Make sure the following permissions are enabled:

   - Microsoft Graph > Application.Read.All – Delegated – Read applications

   - Microsoft Graph > GroupMember.Read.All – Delegated – Read groups memberships

   - Microsoft Graph > User.Read – Delegated – Sign in and read user profile

   - Microsoft Graph > User.Read.All – Delegated – Read all users' full profiles

1. Open DataMiner Cube and log in with an existing Administrator account.

1. Add the users/groups as described under [Adding a user](xref:Adding_a_user) and [Adding a user group](xref:Adding_a_user_group). Select to add an existing user or group in order to add users and groups available on Entra ID.

1. When you have added the necessary users, configure their permissions. See [Configuring a user group](xref:Configuring_a_user_group).

   Users will now be able to log in to DataMiner with any of the Entra ID user accounts you have added, using either the domain and username (DOMAIN\\user) or the email address.

***

### Configuring automatic creation of users authenticated by Entra ID using SAML

From DataMiner 10.2.0/10.1.12 onwards, users authenticated by Entra ID using SAML can be automatically created and assigned to groups in DataMiner. This is often referred to as JIT (Just-In-Time) Provisioning.

There are two ways to configure this setup: with or without group claims.

- With group claims, when a user logs in for the first time, they will be added to an existing group that exists both in Entra ID and in DataMiner.

- Without group claims, any user that logs in for the first time will be added to one default security group, which you will need to configure during the setup detailed below. This is easier to configure, but has the disadvantage that user information that is created will not be updated.

#### [With group claims](#tab/tabid-3)

1. Navigate to ``portal.azure.com`` and log in.

1. In the search box at the top, enter *Enterprise applications* to go to the Enterprise Applications page.

1. Select the application you created for DataMiner.

1. In the pane on the left on your DataMiner application page, click *Single sign-on*.

1. Next to *Attributes & Claims*, click *Edit*.

   ![Edit attributes & claims](~/user-guide/images/SAML_Edit_claim.png)

1. Click *Add a group claim*.

   ![Add a group claim](~/user-guide/images/SAML_Add_group_claim.png)

1. Configure the group claim:

   1. Select to include *Groups assigned to the application*.

      With this option, the groups you configured when [setting up the application](#setting-up-a-microsoft-entra-id-enterprise-application) will be included in the group claim.

   1. Under *Source attribute*, select one of the following options from the dropdown list, depending on your setup:

      1. If Entra ID is synced with an on-premises Active Directory, select *sAMAccountName*.

      1. If the groups only exist on Azure, select *Cloud-only group display names*.

   1. Optionally, expand the advanced options to add a filter or customize the name of the group claim.

   1. Click *Save*.

   ![Group claim configuration](~/user-guide/images/SAML_Group_claim_config.png)

   > [!IMPORTANT]
   > Double-check which settings you should use: only select *sAMAccountName* if Entra ID is synced with an on-premises Active Directory. If the groups only exist on Azure, set the *Source attribute* to *Cloud-only group display names*.
   >
   > This is because the account name of the group will only be sent via SAML when the groups are synchronized (from an on-premises AD). Otherwise, the ID of the group will be sent instead.

1. In DataMiner Cube, add the groups corresponding with the groups you included in the group claim in Entra ID. See [Adding a user group](xref:Adding_a_user_group).

1. Stop DataMiner.

1. Go to the `C:\Skyline DataMiner` folder and open the *DataMiner.xml* file.

1. In *DataMiner.xml*, add the `<AutomaticUserCreation>` tag as illustrated in the example below:

   ```xml
   <DataMiner ...>
     ...
     <ExternalAuthentication
       type="SAML"
       ipMetadata="[Path/URL of the identity provider’s metadata file]"
       spMetadata="[Path/URL of DataMiner's metadata file]"
       timeout="300">
       <AutomaticUserCreation enabled="true">
         <EmailClaim>http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress</EmailClaim>
         <Givenname>http://schemas.xmlsoap.org/ws/2005/05/identity/claims/givenname</Givenname>
         <Surname>http://schemas.xmlsoap.org/ws/2005/05/identity/claims/surname</Surname>
         <Groups claims="true">http://schemas.microsoft.com/ws/2008/06/identity/claims/groups</Groups>
       </AutomaticUserCreation>
     </ExternalAuthentication>
     ...
   </DataMiner>
   ```

1. Save the *DataMiner.xml* file.

1. Restart the DataMiner Agent.

#### [Without group claims](#tab/tabid-4)

1. Make sure a group has been added in DataMiner that can be used to automatically add users to. See [Adding a user group](xref:Adding_a_user_group).

1. Stop DataMiner.

1. Go to the `C:\Skyline DataMiner` folder and open the *DataMiner.xml* file.

1. In *DataMiner.xml*, add the `<AutomaticUserCreation>` tag as illustrated in the example below:

   ```xml
   <DataMiner ...>
     ...
     <ExternalAuthentication
       type="SAML"
       ipMetadata="[Path/URL of the identity provider’s metadata file]"
       spMetadata="[Path/URL of DataMiner's metadata file]"
       timeout="300">
       <AutomaticUserCreation enabled="true">
         <EmailClaim>http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress</EmailClaim>
         <Givenname>http://schemas.xmlsoap.org/ws/2005/05/identity/claims/givenname</Givenname>
         <Surname>http://schemas.xmlsoap.org/ws/2005/05/identity/claims/surname</Surname>
         <Groups claims="false">[existing DataMiner group]</Groups>
       </AutomaticUserCreation>
     </ExternalAuthentication>
     ...
   </DataMiner>
   ```

1. Save the *DataMiner.xml* file.

1. Restart the DataMiner Agent.

***
