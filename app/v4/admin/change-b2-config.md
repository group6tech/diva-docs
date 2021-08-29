---
title: Change Backblaze B2 configuration
category: admin
topic: backup
sortOrder: 1000
---

You can change what B2 bucket is being used to backup your projects.

<p class="tip tip--danger">
  <strong>Warning</strong> If you change the B2 bucket being used you will no longer be able to restore files from the old bucket in DIVA.
</p>

When changing bucket we recommend resetting the backup status within DIVA, and starting your backup from scratch.

## Change B2 bucket and reset backup status

<ol>

  <li>Ensure there are no backups currently running.</li>

  <li>Close <strong>DIVA Node</strong> on any servers which have project drives.</li>

  <li>Close <strong>DIVA Server</strong>.</li>

  <li>Backup the DIVA database using <strong>SQLBackupAndFTP</strong>. Keep this backup in a safe place, as it is the last copy with the backup information before changing bucket.</li>

  <li>In DIVA Fusion, under <strong>System</strong>, <strong>Settings</strong>, <strong>Backup</strong>, enter the new B2 bucket information.</li>

  <li>
    Execute the following <strong>SQL</strong> script against the <strong>DIVA database</strong> to reset the backup information:

    <pre>
      DELETE FROM [FileVersions]
      GO

      DELETE FROM [Files]
      DBCC CHECKIDENT ([Files], RESEED, 0)
      GO

      DELETE FROM [BackupSnapshots]
      DBCC CHECKIDENT ([BackupSnapshots], RESEED, 0)
      GO

      DELETE FROM [BackupSnapshotErrors]
      GO

      DELETE FROM [Statistics]
      WHERE [Name] LIKE 'Restore.%'
      GO

      DELETE FROM [Statistics]
      WHERE [Name] LIKE 'BACKUP.%'
      GO
    </pre>
  </li>

  <li>Using <strong>IIS</strong> recycle the DIVA application pool, and restart the DIVA site.</li>

  <li>Open <strong>DIVA Server</strong>.</li>

  <li>Open <strong>DIVA Node</strong>.</li>

</ol>

<p class="tip tip--result">
  <strong>Result</strong>: At the next scheduled backup time the projects will start to backup again to the new bucket.
</p>
