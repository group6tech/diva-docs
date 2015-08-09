---
title: Adding a new Node to the system
category: admin
topic: nodes
sortOrder: 1
---

Before you can install DIVA Node on a new computer and attempt to connect it with the system, it must be pre-registered.

1. ![Navigate to Nodes](/images/v2/fusion/nodes-nav-button.png)
	From the **Server** menu, click **Nodes**.
2. ![Click New Server Node](/images/v2/fusion/nodes-new-server-node.png)
	Click **New Server Node**.
3. ![Enter the hostname](/images/v2/fusion/nodes-new-node-hostname.png)
	In the **Hostname** field, type the hostname of the new node.
	<p class="text-muted">This must match the computer name as configured in Windows on the new Node.
4. ![Enter the IP](/images/v2/fusion/nodes-new-node-ip.png)
	In the **IP Address** field, type the IP address of the new node.
	If you don't know the IP address, leave this field blank, and it will be automatically completed the first time the new node connects.
5. ![Check enabled](/images/v2/fusion/nodes-new-node-enabled.png)
	Ensure **Enabled** is checked.
6. ![Click create](/images/v2/fusion/nodes-new-node-create.png)
	Click **Create Server Node**.

<div class="note note--success">
	<h4 class="note__title"><i class="fa fa-check-circle"></i> Result</h4>
	<p>The new node is registered with DIVA, and the node properties page is displayed.</p>
	<p>
		Most of the node properties will be empty, and will remain so until the node connects for the first time.</br>
		If you have made a mistake with the hostname or IP address, click <strong>Edit Server Node</strong> and correct them now.
	</p>
</div>

<div class="note note--info">
	<h4 class="note__title"><i class="fa fa-question-circle"></i> What's next?</h4>
	<p>Now that the node is registered, you can <a href="/v2/articles/installing-diva-node.html">install DIVA Node</a> on the new computer.</p>
</div>
