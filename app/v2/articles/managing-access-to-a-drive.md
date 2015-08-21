---
title: Managing access to a Drive
category: admin
topic: drives
sortOrder: 2
---

If you have, for example, added a new drive, you can grant a range of users access to the drive from the same page.
This means you don't have to modify user accounts one by one.
At any time, you can select a drive, and change everyones access in one go.

You can:

- deny one or more users access to the drive
	<div class="text-muted">Note: When new drives are set up, access to drives is automatically denied.</div>
- grant one or more users read-only access the drive
	<div class="text-muted">Note: With read-only access, users can view media, but cannot save any files.</div>
- grant one or more users read/write access to the drive
	<div class="text-muted">Note: With full access users can save media to the drive.</div>

<figure>
	<img src="/images/v2/drives/permissions-deny-example.png" alt="Denying access"/>
	<figcaption>Denying a User Access a Drive</figcaption>
</figure>

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
		Before modifying access to a drive for one or more users, ensure you've created a <a href="/v2/articles/creating-a-new-drive.html">drive</a> and one or more <a href="/v2/articles/creating-a-new-user.html">users</a>.
	</div>
</div>

## To modify access to a drive for one or more users

1. ![Click Drives, then Drives](/images/v2/drives/drives-menu.png)
	From DIVA Fusion's **Drives** menu, click **Drives**.
2. Find a click the relevant drive.
3. ![Click Permissions](/images/v2/drives/permissions-tab.png)
	Click **Permissions**.
4. <a name="step4"></a>
	![Set access](/images/v2/drives/permissions-table.png)
	For each user account as relevant, select the relevant access options.
	<p class="text-muted">Options include Denied, Read and Write.</p>
	<p class="text-muted">To apply the same setting to all users in the list, click the column title (click Denied, click Read or click Write).</p>
	<p class="text-muted">If you intend to downgrade more than one user's access, you will be requested to move all the users' files to one user account. If you intend to move the users' files to more than one account, repeat Steps 4 to 6, for each account that you want to move the files to.</p>
	<p class="text-muted">If you lose track of what you have changed, you can click Undo Changes to reinstate the previously saved permissions.</p>
	<p class="text-muted">If you inadvertently select the user's name, the user's account is displayed. Immediately click the browser's back button to redisplay the list of user accounts.</p>
5. ![Click Save Permissions](/images/v2/drives/permissions-save-btn.png)
	Click **Save Permissions**.
	<p class="text-muted">If this is a <strong>Basic Drive</strong> or a <strong>Avid Projects</strong> drive, go to <a href="#whats-next">What's Next</a> below.</p>
	<p class="text-muted">If this is an <strong>Avid Media</strong> drive, and you <strong>did not reduce</strong> anyone's access, your changes are saved. Go to <a href="#whats-next">What's Next</a> below.</p>
	<p class="text-muted">If this is an <strong>Avid Media</strong> drive and you <strong>reduced</strong> one or more users' access to the drive, you will be presented with options for moving the relevant users' files. If this is the case, go to <a href="#step6">Step 6</a>.</p>
6. <a name="step6"></a>
	![Move the users media](/images/v2/drives/permissions-move-media.png)
	Choose how to handle the users' media.
	<p class="text-muted">To move all listed users' files to one user account, from the <strong>Move To</strong> drop down menu, select the user account that you want to move the files to, then click <strong>Move Media</strong>.</p>
	<p class="text-muted">To leave the files where they are, click <strong>Leave in Place</strong>.</p>
	<p class="text-muted">If you don't want to save your changes, click <strong>Cancel</strong>.</p>

<div class="note note--success">
	<h4 class="note__title"><i class="fa fa-check-circle"></i> Result</h4>
	<p>The new access permissions are applied the drive.</p>
	<p>
		If an <strong>Avid Media</strong> drive, on clicking <strong>Move Media</strong>, the media files are moved.<br/>
		On clicking <strong>Leave in Place</strong>, your changes are saved and the media files will remain with the user accounts.<br/>
		On clicking <strong>Cancel</strong>, your changes will not be saved and you can continue to select other options for each user. In this case, go to <a href="#step4">Step 4</a>.
	</p>
</div>

<div class="note note--info">
	<h4 class="note__title"><i class="fa fa-question-circle"></i> What's next?</h4>
	<div class="note__body">
		<p>Any editors signed into DIVA Client affected by the changes in permissions will be notified of the changes.</p>
	</div>
</div>

<div class="note note--info note--collapse">
	<h4 class="note__title"><i class="fa fa-lightbulb-o"></i> Tip</h4>
	<div class="note__body">
		<p>
			At the end of a project, you may want to initially prevent users from modifying files by denying them access to the drive, or by only providing them with Read access.
			Then after a month or so after you have archived off the files, you can delete the drive.
		</p>
	</div>
</div>
