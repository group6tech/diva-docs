---
title: Install DIVA Client
category: editor
topic: client
sortOrder: 10
---

{% include platform-switcher.html mac=true win=true %}

### Before you begin

Before installing DIVA Client you'll need to know the **IP address** or **hostname** of your DIVA Server.

## Install DIVA Client

<div class="platform-mac">
  <ol>

    <li>
      Open a browser and navigate to the <strong>IP address</strong> or <strong>hostname</strong> of your DIVA Server.
      <figure>
        <img src="/images/v4/client/dashboard.png" alt="DIVA Dashboard"/>
        <figcaption>The DIVA Dashboard where you can download the Client installer.</figcaption>
      </figure>
    </li>

    <li>
      In the <strong>Installers</strong> panel, click the <strong>DIVA Client .dmg</strong> installer to download it.
    </li>

    <li>
      Open the installer, and drag DIVAClient to Applications as instructed.
      <figure>
        <img src="/images/v4/client/install-dmg.png" alt="DIVA Client installer"/>
        <figcaption>Drag DIVAClient into Applications.</figcaption>
      </figure>
    </li>

    <li>Browse to <strong>Applications</strong>, locate and double click <strong>DIVAClient</strong> to open it.</li>

    <li>
      You may be warned that DIVAClient is an app downloaded from the internet. Click <strong>Open</strong> to open it.
      <figure>
        <img src="/images/v4/client/install-trust-mac.png" alt="Trust DIVA Client"/>
        <figcaption>Click the Open button to allow DIVA Client to run.</figcaption>
      </figure>
    </li>

  </ol>
</div>

<div class="platform-win">
  <ol>
    <li>
      Open a browser and navigate to the <strong>IP address</strong> or <strong>hostname</strong> of your DIVA Server.
      <figure>
        <img src="/images/v4/client/dashboard.png" alt="DIVA Dashboard"/>
        <figcaption>The DIVA Dashboard where you can download the Client installer to download it.</figcaption>
      </figure>
    </li>

    <li>
      In the <strong>Installers</strong> panel, click the <strong>DIVA Client.exe</strong> installer.
    </li>

    <li>
      Once downloaded, run the installer. When the installation has completed DIVA Client will automatically open.
    </li>
  </ol>
</div>

<p class="tip tip--result">
  <strong>Result</strong>:
  You can now continue to <a href="/v4/editor/setup-client.html">setup DIVA Client</a>.
</p>

<div class="platform-win">
  <p>By default DIVA Client is installed once per-user to their AppData directory.</p>
  <p>You can perform a machine wide installation by running the downloaded installer from the command line with the /D switch, for example:</p>
  <code>"DIVA Client.exe" /D="C:\Program Files\DIVA Client"</code>
</div>
