---
title: About drives
category: admin
topic: drives
sortOrder: 10
---

If mounted on user's computer and the user has been granted full access to a drive, the drive is available to save files and work on. If the user has only been granted read-only access to the drive, the user can only view files and copy files from the read-only drive to another drive.

<p class="tip">
  <strong>Tip</strong>: These drives are not physical storage devices; they are virtual drives that reside on the volume (storage device).
</p>

## Drive Types

The picture to the right shows a volume (hard disk). In this example, the volume has been assigned to an Avid Pool and three drives have been set up; one of each type.

There are three types of DIVA drive:

- [Basic Drive](#basic)
- [Avid Media Drive](#media)
- [Avid Projects Drive](#project)

There are also two types of external drives:

- [FTP Drive](#ftp)
- [Network Drive](#network)

### <a name="basic"></a> Basic Drives

If a user has full access to a Basic drive, the user can add files of any type.

<p class="tip">
  <strong>Tip</strong>: Avid Media Composer cannot create Avid MXF files on a Basic drive.
</p>

### <a name="media"></a> Avid Media Drives

Media drives are optimised exclusively for Avid MFX files. To share Avid MXF media files, the media has to be created on a Media drive.

Users can only save and work with Avid MXF files on this drive.

### <a name="project"></a> Avid Project Drives

Projects drives are optimised exclusively for Avid Media Composer projects and bins. To share an Avid project, it has to be created on a Projects drive.

<p class="tip">
  <strong>Tip</strong>: Avid Media Composer cannot create Avid MXF files on a Avid Project drive.
</p>

### <a name="ftp"></a> FTP Drives

FTP drives allow DIVA users to connect to FTP servers through DIVA Client. FTP drives do not mount as normal drives on the edit suite, and may require third-party software to work correctly.

<p class="tip tip--warning">
  <strong>Warning</strong>: Passwords stored for FTP drives may be seen in clear text by users.
</p>

### <a name="network"></a> Network Drives

Network drives are shares which exist within your LAN, and you want DIVA users to be able to easily mount on their suites.

<p class="tip tip--warning">
  <strong>Warning</strong>: Passwords stored for Network drives may be seen in clear text by users.
</p>
