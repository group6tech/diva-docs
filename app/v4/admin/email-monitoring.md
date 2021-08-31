---
title: Email monitoring
category: admin
topic: fusion
sortOrder: 1000
---

Not only does DIVA send email notifications, but so do a number of applications installed on the servers which provide hardware monitoring.

It is important that these emails are working correctly, and you regularly send test emails to ensure they are getting through.

These applications include but are not limited to:

- 3DM2/MegaRAID/LSI Storage Authority (RAID)
- Intel Rapid Storage Technology (system RAID)
- SuperDoctor (motherboard and power supplies)
- UPS software (the specific software in use varies greatly, check with your UPS manufacturer)
- SQLBackupAndFTP (DIVA database backups)

## Configuring where emails are sent

Each application individual controls where email notifications are sent to.

1. Open the applications
1. Location the email configuration settings
1. Change the recipient email address

## Configuring how emails are sent

To save having to reconfigure each application, the **IIS SMTP** service is installed on each server, and configured as an SMTP relay.

This means that each application can be configured to use the following SMTP settings:

- **Address** 127.0.0.1
- **Port** 25
- **Authentication** None

You will still need to know your actual SMTP settings to configure IIS. Talk to your email or IT provider to acquire this information.

To change the IIS SMTP configuration:

1. Open **Internet Information Services (IIS) 6.0 Manager**.
1. Click on the **(local computer)**.
1. Right click on the **SMTP Virtual Server #1** and click **Properties**.
1. Click the **Access** tab then the **Relay** button.
1. Ensure **Only the list below** is selected, and **127.0.0.1** is in the computers list as **Granted**. Click **OK**.
1. Click the **Delivery** tab.
1. Click the **Outbound Security** button, enter your **Authentication** settings, and check **TLS** as required. Click **OK**.
1. Click the **Outbound Connections** button, set your **TCP Port**, and click **OK**.
1. Click the **Advanced** button, set the **Smart host** to your SMTP server address, and click **OK**.

<p class="tip tip--result">
  <strong>Result</strong>: Your SMTP configuration is now set, and test emails should be sent to confirm.
</p>
