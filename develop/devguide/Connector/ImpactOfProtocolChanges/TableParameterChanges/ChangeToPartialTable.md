---
uid: ChangeToPartialTable
---

# Change to partial table

Changing a table to a partial table is considered a major change.

## Impact

Existing custom reports may no longer work.

*GetTable* via Automation scripts will only be able to retrieve the displayed content.

*DIS MCC*

| Full ID | Error message  | Description                                            |
|---------|----------------|--------------------------------------------------------|
| 2.26.1  | EnabledPartial | Partial Table option was enabled on table '{paramId}'. |
