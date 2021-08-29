---
title: Set backup version settings
category: admin
topic: backup
sortOrder: 1100
---

Multiple versions of each file are backed up as changes are made over time.
Version snapshots can be [restored](/v4/admin/restoring-projects-bins.html) to revert a file back to a previous moment in time.

You can change the version settings to keep more of the recent versions of your backed up files and less of the older ones. Or you can choose to keep more versions of everything, it just takes up more space in the cloud.

During the [maintenance window](/v4/admin/maintenance-window.html), older backup versions are pruned. This decreases the amount of backup data which is kept in the cloud.
Six months from now you may not need to restore a backup from 11am when a version from the end of the day, or even the week, will do.

The most recent version of each file is always kept - unless that file has been deleted, and you've configured DIVA to [remove backups of deleted files after a certain period of time](/v4/admin/backup-deleted-file-settings.html).
DIVA *never* removes deleted files by default.

## Specifiy versions to retain

You can set how many versions to keep for the last week, month, year, and all previous years.

You cannot set a larger time period to keep more versions than a smaller time period.
E.g. if you are only keeping a backup from every 6 hours over the last week, you cannot keep a backup from each hour over the last month.

<figure>
  <img src="/images/v2/fusion/backup-version-settings.png" alt="Backup version settings"/>
  <figcaption>Set the versions to keep over each time period.</figcaption>
</figure>

1. From DIVA Fusion’s **System** menu, click **Settings**.

1. On the left side menu, click **Backup**.

1. Under **Additional versions**, drag the sliders to the right to keep more versions, or to the left to keep fewer versions.

1. Click **Save settings**.

With the default settings, as per the above screenshot, DIVA retains a version as often as every two hours for the last week. It keeps only one version per day for the last month, only one version per month for the last year, and one version per year for the previous years.

<p class="tip">
  <strong>Tip</strong>: If a version retention is set to every day for example, it does not mean a new backup version is created every day. A new version is created only when the file has changed, which won't happen all the time. DIVA will keep up to one version per day when the file does change.
</p>
