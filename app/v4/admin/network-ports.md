---
title: Network Ports
category: admin
topic: fusion
sortOrder: 100
---

The following network ports are required for DIVA to correctly operate and be monitored for errors.

## DIVA Server/Fusion

### Incoming

 - 80
 - 443
 - 8006

### Outgoing

 - api.createsend.com:443
 - api.mailgun.net:443
 - api.raygun.com:443
 - backblazeb2.com:443
 - backblaze.com:443
 - divafocus.blob.core.windows.net:443
 - focus.group6.co.nz:443
 - smtp.mailgun.org:25
 - smtp.mailgun.org:587
 - teamviewer.com:443
 - teamviewer.com:5938 TCP + UDP

## DIVA Node

### Incoming

 - 137-139 (NETBIOS)
 - 445 (SMB)

### Outgoing

 - backblazeb2.com:443
 - backblaze.com:443
 - smtp.mailgun.org:25
 - smtp.mailgun.org:587
 - teamviewer.com:443
 - teamviewer.com:5938 TCP + UDP