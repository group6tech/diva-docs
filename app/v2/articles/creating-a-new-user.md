---
title: Creating a new User
category: admin
topic: users
sortOrder: 1
---

When adding a DIVA user account, the user automatically has access to DIVA Fusion, and can optionally be granted access to use DIVA Client.

<div class="note note--default note--collapse">
	<h4 class="note__title"><i class="fa fa-hand-stop-o"></i> Before you begin</h4>
	<div class="note__body">
		<p>Before creating a new user account, ensure:</p>
		<ul>
			<li>You have the new user's first name and last name, and</li>
			<li>the user has chosen or been assigned a username for the account.</li>
		</ul>
	</div>
</div>

## To create a new DIVA user account

1. ![Navigate to Users](/images/v2/users/users-menu.png)
	From DIVA Fusion's **Users** menu, click **Users**.
2. ![Click New User](/images/v2/users/new-btn.png)
	Click **New User**.
3. ![Complete the User Information section](/images/v2/users/new-user-info.png)
	Complete the required **User Information** fields, including **Username**, **First Name**, and **Last Name**.
	You can optionally complete the **Email** field.
4. ![Check Create Member](/images/v2/users/new-create-member.png)
	If you wish to allow the new user account access to either DIVA Fusion or DIVA Client, check **Create Member**.
5. ![Check DIVA User](/images/v2/users/new-diva-user.png)
	If you wish to allow the new user account access to DIVA Client, check **DIVA User**.
6. ![Enter and confirm the password](/images/v2/users/new-password.png)
	If **Create Member** is checked, complete the **New Password** and **Confirm Password** fields.
	<p class="text-muted">Note: The two password fields must contain the same password.</p>
7. ![Click Save User](/images/v2/users/new-save-btn.png)
	Click **Save User**.

<div class="note note--success">
	<h4 class="note__title"><i class="fa fa-check-circle"></i> Result</i></h4>
	<p>The new user account is created.</p>
	<p>A job is created for each node in the system to create the user account on that node and assign the password.</p>
</div>

<div class="note note--info">
	<h4 class="note__title"><i class="fa fa-question-circle"></i> What's next?</h4>
	<p>The user can now sign into DIVA Fusion or DIVA Client, depending on the options you selected.</p>
	<p>Before signing them into DIVA Client though, you should <a href="/v2/articles/setting-a-users-access-to-drives.html">grant the user access to one or more drives</a>.</p>
</div>
