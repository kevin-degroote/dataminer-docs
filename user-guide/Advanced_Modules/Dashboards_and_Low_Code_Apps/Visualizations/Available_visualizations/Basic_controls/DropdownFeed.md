---
uid: DashboardDropdown
---

# Dropdown

This basic control allows the user to select an item in a dropdown list. The selectable items can be based on any data feed.

> [!NOTE]
> Prior to DataMiner 10.3.5/10.4.0<!--  RN 35902 -->, this component is available under *Feeds*.

To configure the component:

1. Apply the necessary data feeds. See [Applying a data feed](xref:Apply_Data_Feed).

   > [!NOTE]
   > From DataMiner 10.3.0 [CU13]/10.4.0 [CU1]/10.4.4 onwards<!--RN 38811-->, when you apply a single query data feed, the resulting rows from that query are listed instead of the query itself. Additionally, if you want to use this dropdown feed component as a data feed, the entry will be listed as *Query rows* in the *Data* pane. When you apply multiple query data feeds, the queries themselves are listed as data. From DataMiner 10.0.8 up to DataMiner 10.3.0 [CU13]/10.4.0 [CU1]/10.4.4, when you apply a single query data feed, the query itself is listed as data. If you use this dropdown feed component as a data feed, the entry will be listed as *Queries* in the *Data* pane.

1. Optionally, fine-tune the component layout. In the *Component* > *Layout* tab, the following options are available:

   - The default options available for all components. See [Customizing the component layout](xref:Customize_Component_Layout).

   - *Display column*: Available from DataMiner 10.3.0 [CU13]/10.4.0 [CU1]/10.4.4 onwards<!--RN 38811-->. Allows you to select a column that should be picked to display the name of an item in the dropdown box. This setting is only available when a single query data feed was applied.

   - *Label*: Allows you to specify text that should be displayed next to the dropdown box.

1. Optionally, customize the following component options in the *Component* > *Settings* tab:

   - *WebSocket settings*: Allows you to customize the polling interval for this component. To do so, clear the checkbox in this section and specify the custom polling interval.

   - *Initial Selection > Select first item by default*: Available from DataMiner 10.3.0 [CU13]/10.4.0 [CU1]/10.4.4 onwards<!--RN 38775-->. Sets the first item as the value that will be applied in the feed when the dashboard is opened, unless a custom URL is used specifying a different value. This setting is enabled by default.

   - *Initial Selection > Select item by default*: Allows you to specify a default value. This is the value that will be applied in the feed when the dashboard is opened, unless a custom URL is used specifying a different value. From DataMiner 10.3.0 [CU13]/10.4.0 [CU1]/10.4.4 onwards<!--RN 38775-->, this setting is only available when the *Select first item by default* setting is disabled.

     > [!NOTE]
     >
     > - Prior to DataMiner 10.3.0 [CU13]/10.4.0 [CU1]/10.4.4<!--RN 38775-->, this setting is called *Initial Selection* instead.
     > - Prior to DataMiner 10.3.6/10.4.0<!--  RN 35984 -->, this setting is called *Feed Defaults* instead.

   - *Clear selection*: Available from DataMiner 10.3.0 [CU13]/10.4.0 [CU1]/10.4.4 onwards<!--RN 38758-->. Allows you to clear the selected values in the component by clicking the X button in the top-right corner of the filter box. This setting is disabled by default.

   - *Data retrieval > Update data*: Available from DataMiner 10.3.0 [CU13]/10.4.0 [CU1]/10.4.4 onwards<!--RN 38811-->. Allows the values displayed in the component to be updated in real time, if the data supports this (see [Query updates](xref:Query_updates)). This setting is only available when a single query data feed or an indices data set was applied. This setting is disabled by default.
