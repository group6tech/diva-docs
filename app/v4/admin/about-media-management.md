---
title: About media management
category: admin
topic: media
sortOrder: 10
---

With DIVAFS enabled, Avid media files are stored in folders organised by the name of the computer under which they were created.
It is no longer associated with the DIVA username of the user creating or managing the media.

If a user has write access to a drive, they will be able to delete **all** media on the drive, and not just media belong to the user or the computer they are using.

## Folder structure

All folders inside the **Avid MediaFiles\MXF** folder on a DIVAFS enabled Avid Media drive must be named for a computer on your network, e.g.

  - EDIT1.1
  - EDIT1.2
  - EDIT1.3
  - EDIT8.1

## Scanning media

For Avid Media Composer to scan media on a DIVAFS enabled Avid Media drive, the media must be an an Avid MXF folder which matches the computer on which you wish to perform the scan.

For example, if the computer you are running Avid Media Composer and are signed into DIVA Client is named **Edit6**, Avid Media Composer will only scan media and recreate the databases for MXF folders which start with **EDIT6.**, e.g.

  - EDIT6.1
  - EDIT6.2
  - EDIT6.3

The folder name must be capitalised, and it is recommended to follow a consistent numbering from 1 onwards.

## Moving media

If you need to re-scan media for any reason, you can [move it all to one computer](/v4/admin/move-media-computer.html).

You do not need to worry about media belonging to users any more while removing a users access from a drive.
