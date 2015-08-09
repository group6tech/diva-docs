---
title: Configuring DIVA Node
category: admin
topic: nodes
sortOrder: 3
---

DIVA Node needs to be told what DIVA Server to connect to.
The first time DIVA Node runs, the **Options** screen is automatically displayed, and will be displayed every time until initial setup is completed.

<div class="note note--collapse">
	<h4 class="note__title"><i class="fa fa-hand-stop-o"></i> Before you begin</h4>
	<div class="note__body">
		Ensure the new node is <a href="/v2/articles/adding-a-new-node-to-the-system.html">registered with DIVA Fusion</a> and <a href="/v2/articles/installing-diva-node.html">installed</a> on the computer.
	</div>
</div>

### To configure DIVA Node

1. ![Config button](/images/v2/fusion/nodes-config-button.png)
	If this is the first time DIVA Node has run, or the initial setup has not been completed, the **Configuration** screen is automatically displayed.
	Otherwise, click the <i class="fa fa-cog"></i> button in the top right corner.
2. ![Enter the hostname](/images/v2/fusion/nodes-config-hostname.png)
	Under **Server**, in the **Hostname** field, type the **hostname** or **IP address** of the DIVA Server.
	<p class="text-muted">Note: Enter the hostname of the <strong>DIVA Server</strong>, and not that of the node you are configuring.</p>
3. Leave the **Port** and **Check In Period** values as their default values.
4. ![Click OK](/images/v2/fusion/nodes-config-ok.png)
	Click the **OK** button.

<div class="note note--success">
	<h4 class="note__title"><i class="fa fa-check-circle"></i> Result</h4>
	<p>DIVA Node will connect to the specified DIVA Server.</p>
	<figure>
		<img src="/images/v2/fusion/nodes-connected.png" alt="DIVA Node connected"/>
		<figcaption>DIVA Node having connected to DIVA Server.</figcaption>
	</figure>
	<p>In the lower left corner you can see the server and port the node is connecting to, and the current connection status.</p>
	<p>In the top right corner you can see the hostname and IP address of the node itself.</p>
</div>

<div class="note note--info">
	<h4 class="note__title"><i class="fa fa-question-circle"></i> What's next?</h4>
	<p>Now that the volumes of the new node have been reported to DIVA Server, they can be <a href="/v2/articles/adding-a-node-volume-to-the-license-pool.html">added to the license pool</a>.</p>
</div>
