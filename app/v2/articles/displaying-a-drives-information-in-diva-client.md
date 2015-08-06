---
title: Displaying a Drive's information
category: editor
topic: drives
sortOrder: 6
---

{% include platform-switcher.html mac=true win=true %}

The following drive information can be displayed:

<ul>
	<li>
		<h3>Status</h3>
		<p>
			If the status is <strong>Online</strong>, the node is online and the drive is enabled. If not already mounted, the drive can be mounted.<br/>
			If the status is <strong>Node Offline</strong>, this means the node which hosts the drive is offline, so the drive cannot be mounted.<br/>
			If the status is <strong>Missing</strong>, this means that the node is online, but the drive is missing.<br/>
			If the status is <strong>Maintenance</strong>, this means that a health check is being performed on the drive, and it cannot be mounted until the health check is completed.
		</p>
	</li>
	<li id="access">
		<h3>Access</h3>
		<p>
			With <strong>Read-Only</strong> access you can copy assets from the drive and view clips.<br/>
			With <strong>Full</strong> access you can copy assets, view clips and save assets to the drive.
		</p>
	</li>
	<li>
		<h3>Drive Type</h3>
		<p><a href="/v2/articles/what-are-the-different-drive-types.html">What are the different Drive types?</a></p>
	</li>
	<li>
		<h3>Space Used</h3>
		<p>This is the space that has been used on the drive. Even when there are no files saved on the drive, there will always be some space used by the system.</p>
	</li>
	<li>
		<h3>Free Space</h3>
		<p>This is the available space on the drive.</p>
	</li>
	<li>
		<h3>Size of Drive</h3>
		<p>This is the total size of the drive that is allowed.</p>
	</li>
</ul>

<div class="note note--collapse">
	<h4 class="note__title"><i class="fa fa-hand-stop-o"></i> Before you begin</h4>
	<div class="note__body">
		<p>Before displaying a drive's information, ensure that the Drives pane is displayed. To do this, on the DIVA Client menu, click <strong>Drives</strong>.</p>
		<p>If you have a long list of drives, <a href="/v2/articles/searching-and-filtering-drives-in-diva-client.html">search for a drive</a>.</p>
	</div>
</div>

### To display a drive's information

<ol class="platform-mac">
	<li>
		<img src="/images/v2/mac/diva-client-drive-information.png" alt="Drive information"/>
		From the list of drives, click the relevant drive.
	</li>
</ol>

<ol class="platform-win">
	<li>
		<img src="/images/v2/win/diva-client-drive-information.png" alt="Drive information"/>
		From the list of drives, click the relevant drive.
	</li>
</ol>
