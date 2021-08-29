---
title: Backing up your DIVA
category: admin
topic: backup
sortOrder: 100
---

The media and projects on your DIVA are not automatically backed up.

Cloud backup of your project files can be enabled for a monthly fee.
This includes automatic versioning of files, and restore of individual bins or complete projects
from specific points in time.
To enable cloud backup of your project files, please contact [support@group6.co.nz](mailto:support@group6.co.nz).
Please also see the guides on [configuring backups](/v4/admin/configuring-project-backups.html) and [restoring projects and bins](/v4/admin/restoring-projects-bins.html).

The internal DIVA database is automatically backed up to a different volume than the system volume, and to Group 6 Technologies private servers over the internet.
In the event of a complete system failure, this database can be used to recreate all the empty DIVA drives, users, and their drive assignments, but not the actual media or project files.

You should follow standard practices to back up your media and project files, including multiple offsite copies.
While all DIVAs use RAID technology, this should never be considered as a backup.

When configuring your backup software for media and project files, it is recommended to:

- backup the entire media or project volume(s) on your DIVA Node(s),
- disable following of symbolic links, junction points, and hard links.

You can use the [project archive](/v4/admin/about-project-archiving.html) system to manually create one-off backups of your Avid projects.
These should not be considered a backup though, until they are copied off the DIVA drive, and preferablly offsite.

Operating system backups are not required, but if your backup systems can support them, there is no harm in doing so.
Group 6 Technologies have system images and recovery tools which can rebuild a corrupt OS, with a recovered copy of your DIVA database.
