---
title: Configure a node
category: admin
topic: nodes
sortOrder: 40
---

### Before you begin

Before you can connect DIVA Node to DIVA Server, ensure:

- the [Node has been registered](/v2/articles/create-node.html), and DIVA Node is [installed on the computer](/v2/articles/install-node.html).


## Configure DIVA Node

<ol>

  <li>Open <strong>DIVA Node</strong>.</li>

  <li>
    If the <strong>DIVA Node Configuration window</strong> is not displayed, on the DIVA Node window, click the <strong>Configuration</strong> button.
    <br/>
    <img src="/images/v2/fusion/diva-node-configuration-button.png"/>
  </li>

  <li>In the <strong>Hostname</strong> field, enter the hostname or IP address of the computer running DIVA Server.</li>

  <li>Leave the <strong>Port</strong> field as is unless you know it has changed.</li>

  <li>Leave the <strong>Check In Period</strong> field as is.</li>

  <li>Click the <strong>OK</strong> button.</li>

</ol>

<p class="tip tip--result">
  <strong>Result</strong>: The new configuration is applied and the node will reconnect to the server, and the DIVA Node window is displayed.
</p>

### What's next?

On the DIVA Node window check the following:

- The new node's host name and IP address should be displayed next to the Configuration button.
- The server host name and server status should be displayed at the bottom-left of the window.

Return to DIVA Fusion and using the browser's Refresh button, refresh the node's Properties page. This will populate the following fields:

- Hostname
- IP Address
- Processor
- Physical Memory
- Enabled
- Online
- Last Seen

The Volumes tab displays all the physical drives on the node; not the DIVA drives.
