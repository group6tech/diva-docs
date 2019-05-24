---
title: Welcome
layout: structure
bodyClass: home with-jumbo
---

<div class="jumbotron">
  <div class="container">
    <h1>Hey, how can we help?</h1>

    <form class="home__search" id="homeSearch" role="search">
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2">
          <input class="form__control" id="searchField" type="text" placeholder="Search the Help Center" autocomplete="off"/>
          <ul class="home__search--results">
          </ul>
        </div>
      </div>
    </form>

  </div>
</div>

<div class="container">
  <div class="row">

    <div class="col-md-6 card">
      <a href="/v3/editor"><img src="/images/diva-suite.svg" class="card__image" alt="Using DIVA"/></a>
      <h2 class="card__title">Using DIVA</h2>
      <p class="card__description">Everything an editor needs to know to get going with DIVA.</p>
      <a href="/v3/editor" class="btn btn--primary btn--large">Browse all articles</a>
    </div>

    <div class="col-md-6 card">
      <a href="/v3/admin"><img src="/images/diva-admin.svg" class="card__image" alt="DIVA Administration"/></a>
      <h2 class="card__title">DIVA Administration</h2>
      <p class="card__description">How to manage your system and keep it running smoothly.</p>
      <a href="/v3/admin" class="btn btn--primary btn--large">Browse all articles</a>
    </div>

  </div>

  <p class="text-center">Not using DIVA version 4? Get for <a href="/v2">v2</a> or <a href="/v3">v3</a>.</p>
</div>
