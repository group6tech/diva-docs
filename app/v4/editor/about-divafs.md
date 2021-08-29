---
title: About DIVAFS
category: editor
topic: drives
sortOrder: 15
common: true
---

DIVAFS provides emulation of the Avid NEXIS filesystem.
This allows for native bin locking inside Avid Media Composer.

When DIVAFS is enabled for your site, DIVA Client will install a driver on your edit suites to enable this functionality.

Any new Basic, Media, or Project drive will automatically appear to Avid Media Composer as a NEXIS drive.

With DIVAFS enabled, when a new Avid Media Composer project is created on an Avid Projects type DIVA drive, you no longer have to choose to share the project.
It is automatically shared with all DIVA users who have access to this drive.

The concept of user and the Unprotected folder inside a project no longer exists.
Instead Avid Media Composer automatically handles the locking of bins to prevent other users from overwriting changes while one user has them open.
For further information please see [locking and unlocking bins in Avid Media Composer](/v4/editor/locking-and-unlocking-bins.html).