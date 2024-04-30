---
uid: DashboardMaps
---

# Maps

> [!IMPORTANT]
> At present, this component is only available in preview, if the soft-launch option *ReportsAndDashboardsGQIMaps* is enabled. For more information, see [Soft-launch options](xref:SoftLaunchOptions).

This component is used to display markers and/or lines on a map. It uses one or more GQI queries as data input.

> [!NOTE]
>
> - To use the Maps component, the host servers for DataMiner Maps have to be configured in the file *C:\Skyline DataMiner\Maps\ServerConfig.xml*. If this file does not exist, it will be created automatically when you use a Maps component for the first time. To change the configuration, see [Configuring the DataMiner Maps host servers](xref:Configuring_the_DataMiner_Maps_host_servers).
> - This component currently only supports **Google Maps** ("gmaps") as the [Maps provider](xref:Configuring_the_DataMiner_Maps_host_servers).

## Adding data

Add one or multiple GQI data sources to the component. See [Applying a data feed](xref:Apply_Data_Feed).

The data is visualized as a set of markers by default, but it can also be configured as a set of lines. In both cases, the component will try to automatically apply the dimensions needed to show the visualization of the data.

For markers, the process of applying the dimensions works as follows:

1. As a marker needs an ID, a latitude, and a longitude value to be visualized, the component will look for columns named "ID", "Latitude"/"Lat", and "Longitude"/"Lng" in your query result.

1. If these columns exist, a marker is configured for each query row in the result, taking the values of the ID, latitude, and longitude columns for that row.

1. If no match is found, the component will take the first column containing string values for the ID and the first two columns containing numbers for latitude and longitude while taking into account the columns that are already assigned to other dimensions.

1. The chosen column values are displayed for each query. If a dimension is set incorrectly, you can still change it manually at any point.

This process is similar for the configuration of lines, but instead of one latitude and longitude value, two pairs of coordinates need to be configured, one for the starting point and one for the end point of the line.

## Configuring layer settings

On the *Component > Layout* tab, you can configure the following settings under *Layer settings*:

- **Weight**: Determines which marker is put in the foreground and which in the background in case markers or lines from different layers overlap with each other. The higher the weight of the layer, the more it will be pushed to the foreground. The default weight is 1.

- **Circle or line icon**: By default, each query is configured as a set of markers, which is indicated with a circle icon to the right of the name of the query. If you hover the mouse pointer over the query name, a line icon will also become visible. Click this icon to change the visualization of the data from a set of markers to a set of lines and to reconfigure the dimensions so they can be visualized as lines.

- **Identifier**/**Latitude**/**Longitude**: For each dimension, a dropdown box is shown where the column used for that dimension can be changed. You can only select valid options for each dimension. For markers, you need to select string-valued columns for the ID and numeric-valued columns for the latitude and longitude. For lines, you need to select a latitude and longitude for both the source and the destination.

- **Template**: Only available when the query is configured as a set of markers. Allows you to change the appearance of the markers. When you click *Edit*, an editor window opens where you can make changes to the template.

  > [!NOTE]
  > The center of the marker template is determined by the latitude and longitude values for that marker.

  > [!TIP]
  > For more information on how to use the Template Editor to customize the appearance of the markers, see [Using the Template Editor](xref:Template_Editor).

- **Style**: When the query is configured as a set of lines, you can use these settings to change the appearance of the lines. You can change the color, direction visualization, type, and width of the lines.

- **Advanced settings**: Expand the advanced settings section to access the following settings:

  - *Show in zoom level*: Determines in which range of zoom levels the query should be visible.

  - *Weight*: Similar to the weight setting on layer level, this setting determines which markers or lines are pushed to the foreground when two markers or lines from the same layer overlap with each other.

## Configuring map settings

On the *Component > Layout* tab, you can configure the following settings under *Map settings*:

- *Save current view*: After you have panned and/or zoomed to a certain location, click the *Save current view* button to set the center and zoom settings to the current center and zoom level of the component.

- *Map center* > *Latitude*/*Longitude*: Determines the default center of the map by means of the latitude and longitude of the center location.

  > [!NOTE]
  > To easily get the coordinates of a point on the map, right-click the component and select the latitude and/or longitude value to copy it to the clipboard.

- *Map zoom* > *Zoom range*: Allows you to select the minimum and maximum zoom level

- *Map zoom* > *Default zoom*: Allows you to specify the default zoom level of the map.

- *Map bounds* > *Enable bounds*: Enable this option to configure the north, east, south, and west bounds of the map.

- *Default Map Type* > *Map type*: Allows you to select the type of the map. The available types depend on the map provider. At present, only Google Maps is supported, with the following map types: *roadmap*, *satellite*, *hybrid*, and *terrain*.

- *Default Map Type* > *Show map type control*: Makes the map type setting visible in the component itself.

In addition, in the *Settings* tab for this component, you can further customize the map behavior:

- *Update data*: If you want the data in the map to be refreshed automatically (provided this is supported by the data source), set this setting to *On*.

  > [!NOTE]
  > This is currently only applicable for the markers on the map. Real-time updates are not yet supported for lines.

## Adding actions

When a maps component is used in a [low-code app](xref:Application_framework), a set of different component actions can be configured (see [Configuring low-code app events](xref:LowCodeApps_event_config)).

The following actions are available:

- *Fetch the data*: This action fetches the data from the component again.

- *Pan to view*: This action pans to a certain location. The coordinates for this action can be static or dynamic (using a feed).

- *Set zoom level*: This action zooms to a certain level on the map. The zoom level can be static or dynamic (using a feed).

- *Overlay actions*: Using app actions, different types of overlays can be shown on the map. The supported overlay types are .kml, .kmz and .geoJSON. The source of the overlay needs to be specified in an input (which can also be received from a feed ), and it can be either a local source, specified by a relative path in the *C:\Skyline DataMiner\Maps* folder, or a web source, specified by a public URL that hosts the overlay. The following overlay actions are available:

  - *Open overlay*

  - *Close overlay*

  - *Toggle overlay*

  - *Close all overlays*

  > [!NOTE]
  > While local sources are more secure and not openly accessible like public sources on the internet, you do have to make sure the route to the *GetSecureFile* API method (`https://DMA/API/v1/GetSecureFile.aspx`) is openly accessible in order to use the local overlay files.

  > [!TIP]
  > For more information about the different types of overlays, see [Layer types](xref:Layer_types#layers-of-sourcetype-overlay)
