---
title: Checking the backup status
category: admin
topic: backup
sortOrder: 200
---

You're probably going to want to keep an eye on if your backups are working.

The most immediate way is to check the backup status on the dashboard.

<figure>
  <img src="/images/v2/fusion/backup-status.png" alt="Backup status" />
  <figcaption>Backup status on the dashboard</figcaption>
</figure>

Here you can see:

- the total amount of data backed up
- the most recently backed up project and file
- how many files were backed up for that project
- when that backup completed

<p class="tip">
  <strong>Tip</strong>
  You never really know if a backup is working until you've tested you can <a href="/v4/admin/restoring-projects-bins.html">restore it</a>!
</p>


## Backup totals and graphs

You can view total figures of all backup statistics, and graphs of the last 24 hours and month.

1. From DIVA Fusion’s **System** menu, click **Backup Status**.

<figure>
  <img src="/images/v2/fusion/backup-totals.png" alt="Backup statistics" />
  <figcaption>Total backup statistics</figcaption>
</figure>

Here you can see the total amount of data and files for all time which have been:

 - uploaded
 - deleted
 - pruned
 - restored

<p class="tip">
  <strong>Tip</strong>
  "Pruned" indicates versions of files which have been removed, as per the <a href="/v4/admin/backup-version-settings.html">backup version settings</a>.
</p>

There are also graphs which track these activities over the last 24 hours, and the last month.

<figure>
  <img src="/images/v2/fusion/backup-graph-day.png" alt="Last day" />
  <figcaption>Hourly backup activity over 24 hours.</figcaption>
</figure>

<figure>
  <img src="/images/v2/fusion/backup-graph-month.png" alt="Last month" />
  <figcaption>Daily backup activity over 1 month.</figcaption>
</figure>
