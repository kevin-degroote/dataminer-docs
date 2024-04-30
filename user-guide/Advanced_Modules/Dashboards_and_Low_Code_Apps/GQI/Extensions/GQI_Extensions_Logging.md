---
uid: GQI_Extensions_Logging
---

# Logging

From DataMiner 10.4.5/10.5.0 onwards<!-- RN 39043 -->, [ad hoc data sources](xref:Configuring_an_ad_hoc_data_source_in_a_query) and [custom operators](xref:GQI_Custom_Operator) can log their own messages and exceptions within GQI, complementing the existing [GQI core logging functionality](xref:GQI_Logging) (available from DataMiner 10.4.0/10.4.4).

## Enabling logging

To enable logging, the GQI extension (either an ad hoc data source or a custom operator) must implement the [IGQIOnInit](xref:GQI_IGQIOnInit) interface.

This building block adds the [OnInit](xref:GQI_IGQIOnInit#oninitoutputargs-oninitoninitinputargs-args) life cycle method, granting access to the [IGQILogger](xref:GQI_IGQILogger) object through the [Logger property](xref:GQI_OnInitInputArgs#properties) of the [OnInitInputArgs](xref:GQI_OnInitInputArgs) class.

Throughout its lifespan, the extension can use the [IGQILogger](xref:GQI_IGQILogger) methods to log messages and exceptions.

> [!TIP]
> For a practical example, refer to [Example](#example) below.

## Log files

Log files are created for both types of extensions, each within their respective subfolders:

- For ad hoc data sources: *C:\Skyline DataMiner\Logging\GQI\Ad hoc data sources*

- For custom operators: *C:\Skyline DataMiner\Logging\GQI\Custom operators*

Log file names adhere to the following format: *Script_Library_Type.txt*.

## Log messages

Log messages adhere to the following format:

```log
[Timestamp Level] [Session] [Node] Message
```

By default, a log message consists of the following main parts:

- **Timestamp**: The time of logging, formatted as *yyyy-MM-dd HH:mm:ss.fff*.

- **Level**: An abbreviation of the [log level](xref:GQI_GQILogLevel).

- **Session**: An identifier for the current query session of the extension instance, useful for distinguishing logs from operators used in multiple, possibly concurrent query sessions.

- **Node**: An identifier for the query node of the extension instance, useful for distinguishing logs from operators used more than once in the same query.

- **Message**: Any message intended for logging by GQI or the extension.

Example:

```log
[1993-02-21 12:34:56.789 WRN] [c6a3d4bf] [71ba5588] This is an important warning!
```

> [!NOTE]
> Whenever an extension instance accesses the logger property, the current GQI user is immediately logged as a separate log message, providing additional context that would otherwise not be available for individual log messages. Refer to the logs in the [example](#example) to observe this behavior.

## Example

The following example showcases a custom operator that logs every cell value of a specified column.

```csharp
using Skyline.DataMiner.Analytics.GenericInterface;

[GQIMetaData(Name = "Log cell values")]
public sealed class LogOperator : IGQIRowOperator, IGQIOnInit, IGQIInputArguments
{
    private readonly GQIColumnDropdownArgument _columnToLogArgument = new GQIColumnDropdownArgument("Column to log") { IsRequired = true };

    private IGQILogger _logger;
    private GQIColumn _columnToLog;

    public OnInitOutputArgs OnInit(OnInitInputArgs args)
    {
        _logger = args.Logger;

        // Configure the logger to include logs for the 'Debug' level
        _logger.MinimumLogLevel = GQILogLevel.Debug;

        return default;
    }

    public GQIArgument[] GetInputArguments()
    {
        return new[] { _columnToLogArgument };
    }

    public OnArgumentsProcessedOutputArgs OnArgumentsProcessed(OnArgumentsProcessedInputArgs args)
    {
        _columnToLog = args.GetArgumentValue(_columnToLogArgument);

        // Log the name of the selected column
        _logger.Information($"Column to log: {_columnToLog.Name}");

        return default;
    }

    public void HandleRow(GQIEditableRow row)
    {
        var rowKey = row.Key;
        var cellValue = row.GetValue(_columnToLog.Name);

        // Log the cell value with the 'Debug' log level
        _logger.Debug($"Value for '{rowKey}' is '{cellValue}'");
    }
}
```

Suppose a user named Kevin applies this operator to the following data:

| Row key | Color |
|--|--|
| 1 | Alizarin |
| 2 | Burgundy |
| 3 | Carmine |

Kevin selects the *Color* column as the argument.

He can now access the relevant log messages in the *ExampleScript_ExampleLibrary_LogOperator.txt* file, located in the *C:\Skyline DataMiner\Logging\GQI\Custom operators* directory.

```log
[2024-04-22 10:19:13.143 INF] [c6a3d4bf] [71ba5588] Logs for user Kevin
[2024-04-22 10:19:13.143 INF] [c6a3d4bf] [71ba5588] Column to log: Color
[2024-04-22 10:19:13.184 DBG] [c6a3d4bf] [71ba5588] Value for '1' is 'Alizarin'
[2024-04-22 10:19:13.188 DBG] [c6a3d4bf] [71ba5588] Value for '2' is 'Burgundy'
[2024-04-22 10:19:13.189 DBG] [c6a3d4bf] [71ba5588] Value for '3' is 'Carmine'
```
