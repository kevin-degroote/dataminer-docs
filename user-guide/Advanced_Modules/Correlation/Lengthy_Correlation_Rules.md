---
uid: Lengthy_Correlation_Rules
---

# Lengthy Correlation Rules

## What are lengthy correlation rules

Lengthy correlation rules are rules whose actions take a long time to complete.
While those actions are executing, Correlation cannot perform other tasks. This has a negative impact on the system.

<!-- Run the Lengthy Correlation Rules BPA to check if such rules are present on your system. 
This Best Practise Analyzer is available by default from DataMiner 10.5/10.4.7 onwards. You can [run it in System Center](xref:Running_BPA_tests) on the *Agents > BPA* tab. -->

## Implications of lengthy correlation rules

- It is possible that other correlation rules get the data they find interesting later than they would than without lengthy rules. As a result, these rules are delayed, executing their actions later than expected.
- Correlation rules with actions that take a long time can generate a lot of load on the system.

## Proposed improvements

- When a correlation rule executes an automation script that contains sleeps, check if it is possible to reduce or even remove these. Whether this is possible depends entirely on the context and the purpose of those sleeps.
- When defining a RunScript action in a correlation rule, you have the option to disable "Wait for the script to finish before continuing". If disabled, the rule will not wait before proceeding with other actions. While this may enhance the speed at which actions are scheduled, it's important to note that not all automation scripts or correlation rules are suitable for this adjustment. Disabling this feature could potentially lead to other system issues depending on the setup and the intended purpose of the script. Exercise caution when making this decision. It may be worth tweaking the rule for better overall performance, or considering alternative approaches to achieve your objectives.

[!NOTE]
If you have discovered effective solutions or workarounds while troubleshooting, feel free to [propose your changes](xref:CTB_Quick_Edit) to this guide.