---
uid: Overview_of_the_Dashboards_app_UI
---

# Overview of the Dashboards app UI

The main page of the Dashboards app consists of a header bar, a sidebar, and a details pane.

- The header bar contains the following items, from left to right:

  - Apps button: The button in the top-left corner provides quick access to other DataMiner web apps.

  - *Dashboards* button: Click this button to return to the main page of the app at any time.

  - Search box: The box in the middle of the header bar allows you to search the app. As soon as you activate the box, a list of suggestions is displayed below it. The list gets updated with new suggestions as you type. Select a suggestion in the list to open the corresponding dashboard or dashboard folder.

  - WebSocket connection status: Available from DataMiner 10.3.0 [CU13]/10.4.0 [CU1]/10.4.4 onwards<!--RN 38676-->. This indicator shows the current status of your WebSocket connection. The available statuses include:

    - ![Successful connection](~/user-guide/images/WebSocket_Success.png) : A stable connection with instant updates.

    - ![Offline](~/user-guide/images/WebSocket_No_Connection.png) : An offline connection.

    - ![No real-time connection](~/user-guide/images/WebSocket_No_Real-Time_Connection.png) : No real-time connection could be established. Updates will happen more slowly than usual.

    - ![Establishing connection](~/user-guide/images/WebSocket_Establishing_Connection.gif) : Re-establishing a WebSocket connection. Updates will happen more slowly than usual.

  - User button: A button with the initials or an image of the current user is displayed in the top-right corner. Click this button to open a menu that provides access to the following options:

    - *Settings*: Allows you to manage any available [dashboard theme](xref:Configuring_the_dashboard_layout) and configure whether specific actions are pinned to the dashboard header bar.

    - *About*: Displays information about the app.

    - *Help*: Opens the DataMiner User Guide.

    - *Sign out*: Logs you out of the app and returns you to the logon screen.

- The sidebar on the left contains icons that can be used to expand different panes:

  | Icon | Description |
  |------|-------------|
  | ![Navigation pane icon](~/user-guide/images/DashboardsX_navigation.png) | Opens the navigation pane, which allows you to navigate through the different dashboard folders in the app. Click a folder or dashboard to view it in the details pane on the right. |
  | ![Recent items icon](~/user-guide/images/DashboardsX_recent.png) | Displays a list of recent items. |
  | ![Private dashboards icon](~/user-guide/images/DashboardsX_private.png) | Displays a list of private dashboards. These are dashboards that can only be accessed by specific users (configured in the [dashboard settings](xref:Changing_dashboard_settings)). This icon is displayed from DataMiner 10.2.7/10.3.0 onwards if there are private dashboards available. |
  | ![Shared dashboards icon](~/user-guide/images/DashboardsX_shared.png) | Displays a list of dashboards that have been shared via dataminer.services. This icon is displayed from DataMiner 10.2.7/10.3.0 onwards if there are shared dashboards available. |

  Right-click in either of the panes or click the ... button to open a menu with the following options:

  - *Open in new tab*: Opens the selected dashboard in a new browser tab.

  - *Create folder* or *New folder*: Adds a new folder in the selected folder.

  - *Create dashboard* or *New dashboard*: Adds a new dashboard. By default, it will be added in the selected folder, but a different folder can be specified. See [Creating a completely new dashboard](xref:Creating_a_completely_new_dashboard).

  - *Import dashboard*: Allows you to import an example dashboard. By default, it will be added in the selected folder, but a different folder can be specified. See [Creating a dashboard based on an example](xref:Creating_a_dashboard_based_on_an_example).

  - *Edit*: Available from DataMiner 10.2.0/10.1.12 up to DataMiner 10.3.0 [CU12]/10.4.3<!--RN 38278-->, if a dashboard folder is selected. Opens a pop-up window where you can rename the folder.

    The pop-up window also contains the option *Preserve feed selections*. When this option is selected, any feed selection you make in a dashboard in the folder is preserved when you navigate to another dashboard in the folder. Note that this only applies to the folder itself, not to any other folders it may contain.

  - *Rename*: Only available if a non-shared dashboard is selected, or if a folder is selected prior to DataMiner 10.2.0/10.1.12. Allows you to rename the dashboard or folder. Obsolete from DataMiner 10.3.0 [CU12]/10.4.3 onwards<!--RN 38278-->.

  - *Settings*: Available from DataMiner 10.3.0 [CU12]/10.4.3 onwards<!--RN 38278-->, if a dashboard or dashboard folder is selected. Opens a pop-up window where you can rename and move a dashboard or folder. See [Managing dashboard folders](xref:Managing_dashboard_folders).

    If a dashboard folder is selected, the pop-up window also contains the option *Preserve feed selections*. When this option is selected, any feed selection you make in a dashboard in the folder is preserved when you navigate to another dashboard in the folder. Note that this only applies to the folder itself, not to any other folders it may contain.

  - *Duplicate* or *Copy*: Only available if a dashboard is selected. See [Duplicating a dashboard](xref:Duplicating_a_dashboard)

  - *Move*: Only available if a dashboard or folder is selected. See [Managing dashboard folders](xref:Managing_dashboard_folders). Obsolete from DataMiner 10.3.0 [CU12]/10.4.3 onwards<!--RN 38278-->.

  - *Delete*: Only available if a dashboard or folder is selected. See [Deleting a dashboard](xref:Deleting_a_dashboard).

- The large pane on the right shows any folder or dashboard selected in the navigation pane.

  If no dashboard is selected, buttons are available that allow you to create a new blank dashboard, to create a dashboard based on an example or to navigate to a recently used dashboard.

  If an empty folder is selected, from DataMiner 10.0.13 onwards, buttons are available that allow you to create or import a dashboard directly in that folder.

  If a dashboard is selected, the header bar of this pane can display a number of buttons, depending on the dashboard and the settings of the app:

  - Refresh button ![Refresh button](~/user-guide/images/DashboardsX_refresh.png) : Loads the most recent data in the displayed dashboard.

  - **Start editing**: Allows you to start editing the dashboard. In edit mode, the navigation pane on the left will be hidden.

  - **Stop editing**: Closes edit mode.

  - **Clear all**: Only displayed if the dashboard contains at least one feed. Clears the selection of all the feeds in the dashboard.

  - **PDF**: Available from DataMiner 10.2.12/10.3.0 onwards. Only displayed in read mode. Allows you to export the dashboard as a PDF file.

  - **Share** or **Start sharing**: Allows you to share the dashboard using dataminer.services. See [Sharing a dashboard](xref:Sharing_a_dashboard). This feature is only available in read mode, if the DataMiner System is connected to dataminer.services. See [Connecting your DataMiner System to dataminer.services](xref:Connecting_your_DataMiner_System_to_the_cloud).

  In the settings of the Dashboards app, you can configure whether the edit mode, clear feeds, export as PDF, and share dashboard buttons are always displayed (i.e. “pinned” to the header bar) or instead accessible via a button in the top-right corner of a dashboard.

> [!NOTE]
> If the app is viewed on a small screen, no options to edit dashboards or dashboard settings will be available.
