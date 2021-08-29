---
title: Create an external drive
category: admin
topic: drives
sortOrder: 110
---

You can add drives which are external to, and not managed by the DIVA system.

These drives may be either FTP servers, or network shares within your LAN.
DIVA has no control over these drives, and only allows your users to mount them easily in their edit suites.

### Before You Begin

You will also need the details of the external server, such as hostname, username, and password.

## Create an external drive

<ol>

  <li>On DIVA Fusion's menu, click <strong>Drives</strong>.</li>

  <li>Click <strong>New Drive</strong>.</li>

  <li>From the <strong>Drive Type</strong> drop down menu, select either <strong>FTP or </strong>Network.</li>

  <li>
    In the <strong>Name</strong> field, type the name that you want to call this drive.
    <p class="note"><strong>Note</strong>: You cannot use the characters < > : " / \ | ? * </p>
  </li>

  <li>
    Complete the <strong>Hostname/IP</strong>, <strong>Path</strong>, <strong>Username</strong>, <strong>Password</strong>, and <strong>Port</strong> fields, using the remote server details.
    <p class="note"><strong>Note</strong>: Port is only presented for FTP drives, and defaults to 21 if not specified.</p>
    <p class="note"><strong>Note</strong>: Use Path to specify a sub-directory on the remote server which you want to be the root of the mounted drive on the edit suite.</p>
  </li>

  <li>
    Ensure the <strong>Enabled</strong> checkbox is checked.
    <p class="note"><strong>Note</strong>: If you deselect this option, users will not be able to access the drive.</p>
  </li>

  <li>Click <strong>Save Drive</strong>.</li>

</ol>

### What's next?

- [Set drive access](/v4/admin/set-drive-access.html)
- [Set user's drive access](/v4/admin/set-user-drive-access.html)
