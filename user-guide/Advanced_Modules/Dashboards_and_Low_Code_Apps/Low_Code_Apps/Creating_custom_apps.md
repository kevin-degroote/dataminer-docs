---
uid: Creating_custom_apps
---

# Creating low-code applications

> [!NOTE]
> To view, add, edit, delete, or publish low-code applications, you need to have the necessary user permissions under [Modules > User-definable apps](xref:DataMiner_user_permissions#modules--user-definable-apps) as well as the [DataMiner web apps](xref:DataMiner_user_permissions#general--dataminer-web-apps--dataminer-cube-mobile-access) user permission.

## Creating a new low-code app

1. Go to the DataMiner landing page (see [Accessing the Low-Code Apps module](xref:Accessing_custom_apps)).

1. If no apps exist yet, click *Create a new app*. Otherwise, hover the mouse pointer over the *Other apps* section and click the "+" button next to *Other apps*.

1. Specify the name of your new app in the header bar, instead of the default name "New application".

1. To customize the color and icon for the app, see [Customizing the icon and color of an app](xref:LowCodeApps_Layout#customizing-the-icon-and-color-of-an-app).

1. Add and configure the necessary [pages](xref:LowCodeApps_page_config), [panels](xref:LowCodeApps_panel_config), and [events](xref:LowCodeApps_event_config) for the app.

   > [!TIP]
   > To configure the settings for pages and panels in a low-code app, see [Changing low-code app settings](xref:Changing_low-code_app_settings).

1. To customize who can access or edit the application, see [Configuring security for a low-code app](xref:LowCodeApps_security_config).

1. When your app is ready, click the ![Publish](~/user-guide/images/AppPublishIcon.png) icon in the header bar to save your changes and publish it.

> [!IMPORTANT]
> Once an app has been published, it is not possible to revert it to a draft.

> [!NOTE]
> When you close a draft app you have been working on, it is saved automatically. As such, if you do not want to publish your app immediately, you can just close it to save it as a draft. However, draft apps are not shown by default on the landing page. To view them, click the cogwheel button and activate *Show draft applications*.

> [!TIP]
> See also: [Tutorials - Creating and publishing an app](xref:Tutorial_Apps_Creating_And_Publishing)

## Duplicating an existing low-code app

From DataMiner 10.3.0 [CU10]/10.4.1 onwards<!-- RN 37698+37724 -->, it is possible to duplicate an existing low-code app. You can do so [from the DataMiner landing page](#duplicating-an-app-from-the-dataminer-landing-page) or [from the page of the app itself](#duplicating-an-app-from-the-app-page-itself).

### Duplicating an app from the DataMiner landing page

1. Go to the DataMiner landing page (see [Accessing the Low-Code Apps module](xref:Accessing_custom_apps)).

1. Hover over the app you want to duplicate until you see the ellipsis ("...") button.

1. Click the ellipsis button to open the context menu, and select *Duplicate*.

The most recently published app version will now be duplicated. If the app has not yet been published, its draft version will be duplicated instead.

The newly created duplicate will be assigned a unique name and will automatically be opened in a new browser tab. On the root page, this landing app will be added to the list if the *Show draft applications* option is enabled.

### Duplicating an app from the app page itself

1. Open the version you want to duplicate:

   - To duplicate the most recently published version of the app, open the app.

   - To duplicate the current draft version of an app, open the app and go to edit mode.

   - To duplicate a different version:

     1. In the top-right corner, click the user icon and select *Versions*.

     1. Select the desired version.

     > [!NOTE]
     > You can only duplicate an older version of an app if you have permission to edit the app in question.

1. In the top-right corner, click the user icon, and select *Duplicate* in the user menu.

   The current draft version will be copied and the newly created app will automatically be opened in a new browser tab.
