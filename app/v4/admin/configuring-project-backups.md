---
title: Configuring project backups
category: admin
topic: backup
sortOrder: 500
---

Automatic cloud backup of your Avid Media Composer project files can be configured to run **hourly**, **daily**, or **never**.
You can also control how many versions of each modified file are kept, and to permenantly remove backups of deleted files.

There are three backup frequency options:

- **Never**: Projects will not be automatically backed up. Instead you can [manually backup a project](/v3/admin/manually-backup-project.html).

- **Hourly**: Projects are scanned for changes and backed up on the hour every hour.

- **Daily**: Projects are scanned for changes and backed up once per day, during the [maintenance window](/v3/admin/maintenance-window.html).

You can also set [how many backup versions are kept](/v3/admin/backup-version-settings.html) and when to [remove backups of deleted files](/v3/admin/backup-deleted-file-settings.html).

## Set the backup frequency

1. From DIVA Fusion's **System** menu, click **Settings**.

1. On the left side menu, click **Backup**.

1. Set **Backup frequency** to the desired option.

1. Click **Save settings**.

<p class="tip tip--result">
  <strong>Result</strong>:
  Backups will run at the set frequency. It may take up to 5 minutes for this change to take effect.
</p>

<p class="tip tip--info">
  <strong>Note</strong>: If you see the following message, backup is not enabled for your company.
  Please contact <a href="mailto:support@.group6.co.nz">support@group6.co.nz</a> for options.

  <br/><br/>
  
  <img src="/images/v2/fusion/backup-disabled.png" alt="Backup disabled" />
</p>
