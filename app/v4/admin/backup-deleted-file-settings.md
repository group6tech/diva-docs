---
title: Specify deleted file retention
category: admin
topic: backup
sortOrder: 1200
---

With DIVA's default settings, deleted files are never removed from your backups.
This allows you to always restore previously backed up files, no matter how long it has been since they were removed.

This includes when an entire [project](/v4/admin/delete-project.html) or [drive](/v4/admin/delete-drive.html) is deleted.

<p class="tip tip--warning">
  <strong>Warning</strong>
  There is a chance that a project might not have been backed up yet, depending on when you have <a href="/v4/admin/configuring-project-backups.html">configured your backups to run</a>.
  If the automatic backup has not yet run, and you are deleting an entire project or drive, consider <a href="/v4/admin/manually-backup-project.html">manually backing up the project(s)</a>.
</p>

## Set how often to remove deleted files from backups

You can however choose to remove deleted files from the backup after a set period in time.

1. From DIVA Fusion’s **System** menu, click **Settings**.

1. On the left side menu, click **Backup**.

1. Under **Deleted Files**, drag the **Remove deleted files** slider to the *left* to remove deleted files *more* often, or to the *right* to remove deleted files *less* often.

1. Click **Save settings**.

## Remove backups of deleted projects

On it's own, this will still not delete backups of entire projects which have been deleted, or projects on entire drives which have been deleted.

Once you've completed a project, you'll likely want to fully [archive the project](/v4/admin/about-project-archiving.html), and no longer require point-in-time backups of the project files.
If your workflow is like this, then you can choose to remove backups of projects once they are deleted.

1. From DIVA Fusion’s **System** menu, click **Settings**.

1. On the left side menu, click **Backup**.

1. Under **Deleted Files**, check **Include deleted projects** to remove backups of projects which have been deleted.

1. Under **Deleted Files**, check **Include files on deleted drives** to remove backups of any file on a drive which has been deleted.

1. Click **Save settings**.

<p class="tip">
  <strong>Tip</strong>
  If <strong>Remove deleted files</strong> is set to <strong>never</strong>, then neither of these checkboxes will have any effect.
</p>
