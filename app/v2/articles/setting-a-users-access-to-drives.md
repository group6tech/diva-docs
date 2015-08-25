---
title: Setting a User's access to Drives
category: admin
topic: users
sortOrder: 2
---

You can:

- **deny** the user access to one or more drives
	<div class="text-muted">Note: When new user accounts are set up, access to drives is automatically denied.</div>
- grant **read-only** access to one or more drives
	<div class="text-muted">Note: The user can view, and copy files to another drive, but cannot save this files to read-only drive.</div>
- grant **read/write** access to one or more drives
	<div class="text-muted">Note: The user has full access to the drive and can save this files to it.</div>

<div class="note note--warning note--collapse">
	<h4 class="note__title"><i class="fa fa-exclamation-triangle"></i> Reducing access on Avid Media drives</h4>
	<div class="note__body">
		<p>If you choose to restrict users' access on an Avid Media drive, you will be given the option to move the users' media to another user account. Proceed carefully. Once the media is moved, this cannot be undone.</p>

		<p>You can choose to:</p>

		<ul>
			<li>move the user's media to another user account</li>
			<li>
				leave the user's media where they are, or
				<div class="text-muted">
					Note: If you reduce the user's access to read-only access and leave the files on the drive, the user will be able to view the files and copy them to another drive.
					If you deny the user access to the drive, the user will lose all access to the files.
					You can reinstate access at any time.
				</div>
			</li>
			<li>
				cancel your changes
				<div class="text-muted">
					Note: If you cancel your changes, the changes you made onscreen will not be saved.
					The page will still show your changes, but they are not saved.
					You can continue to make changes before saving them.
				</div>
			</li>
		</ul>
	</div>
</div>

<div class="note note--default note--collapse">
	<h4 class="note__title"><i class="fa fa-hand-stop-o"></i> Before you begin</h4>
	<div class="note__body">
		<p>Before modifying a user's access to one or more drives, ensure:</p>
		<ul>
			<li>The account for the user has been added, and</li>
			<li>You've <a href="/v2/articles/creating-a-new-drive.html">created one or more drives</a>.</li>
		</ul>
	</div>
</div>

## To modify a user's access to one or more drives

1. ![Navigate to Users](/images/v2/users/users-menu.png)
	From DIVA Fusion's **Users** menu, click **Users**.
2. ![Select the user](/images/v2/users/user-select.png)
	From the list, click the relevant user account.
3. ![Click the Drives tab](/images/v2/users/drives-tab.png)
	Click the **Drives** tab.
4. ![Set the permissions](/images/v2/users/drives-permissions.png)
	For the drives in question, select the relevant options.
	<p class="text-muted">Note: You cannot mount a drive for the user from this page. If there is a tick, the user has mounted the drive and you cannot make changes. If there is a cross, the drive is not mounted for that user.</p>
5. ![Click Save Permissions](/images/v2/users/drives-save-btn.png)
	Click **Save Permissions**.

<div class="note note--success">
	<h4 class="note__title"><i class="fa fa-check-circle"></i> Result</h4>
	<p>The new permissions are applied, and a job is created to assign each modified permission.</p>
</div>
