!function($){"use strict";var Affix=function(element,options){this.options=$.extend({},Affix.DEFAULTS,options),this.$target=$(this.options.target).on("scroll.bs.affix.data-api",$.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",$.proxy(this.checkPositionWithEventLoop,this)),this.$element=$(element),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};function Plugin(option){return this.each(function(){var $this=$(this),data=$this.data("bs.affix"),options="object"==typeof option&&option;data||$this.data("bs.affix",data=new Affix(this,options)),"string"==typeof option&&data[option]()})}Affix.VERSION="3.3.6",Affix.RESET="affix affix-top affix-bottom",Affix.DEFAULTS={offset:0,target:window},Affix.prototype.getState=function(scrollHeight,height,offsetTop,offsetBottom){var scrollTop=this.$target.scrollTop(),position=this.$element.offset(),targetHeight=this.$target.height();if(null!=offsetTop&&"top"==this.affixed)return scrollTop<offsetTop&&"top";if("bottom"==this.affixed)return null!=offsetTop?!(scrollTop+this.unpin<=position.top)&&"bottom":!(scrollTop+targetHeight<=scrollHeight-offsetBottom)&&"bottom";var initializing=null==this.affixed,colliderTop=initializing?scrollTop:position.top;return null!=offsetTop&&scrollTop<=offsetTop?"top":null!=offsetBottom&&scrollHeight-offsetBottom<=colliderTop+(initializing?targetHeight:height)&&"bottom"},Affix.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(Affix.RESET).addClass("affix");var scrollTop=this.$target.scrollTop(),position=this.$element.offset();return this.pinnedOffset=position.top-scrollTop},Affix.prototype.checkPositionWithEventLoop=function(){setTimeout($.proxy(this.checkPosition,this),1)},Affix.prototype.checkPosition=function(){if(this.$element.is(":visible")){var height=this.$element.height(),offset=this.options.offset,offsetTop=offset.top,offsetBottom=offset.bottom,scrollHeight=Math.max($(document).height(),$(document.body).height());"object"!=typeof offset&&(offsetBottom=offsetTop=offset),"function"==typeof offsetTop&&(offsetTop=offset.top(this.$element)),"function"==typeof offsetBottom&&(offsetBottom=offset.bottom(this.$element));var affix=this.getState(scrollHeight,height,offsetTop,offsetBottom);if(this.affixed!=affix){null!=this.unpin&&this.$element.css("top","");var affixType="affix"+(affix?"-"+affix:""),e=$.Event(affixType+".bs.affix");if(this.$element.trigger(e),e.isDefaultPrevented())return;this.affixed=affix,this.unpin="bottom"==affix?this.getPinnedOffset():null,this.$element.removeClass(Affix.RESET).addClass(affixType).trigger(affixType.replace("affix","affixed")+".bs.affix")}"bottom"==affix&&this.$element.offset({top:scrollHeight-height-offsetBottom})}};var old=$.fn.affix;$.fn.affix=Plugin,$.fn.affix.Constructor=Affix,$.fn.affix.noConflict=function(){return $.fn.affix=old,this},$(window).on("load",function(){$('[data-spy="affix"]').each(function(){var $spy=$(this),data=$spy.data();data.offset=data.offset||{},null!=data.offsetBottom&&(data.offset.bottom=data.offsetBottom),null!=data.offsetTop&&(data.offset.top=data.offsetTop),Plugin.call($spy,data)})})}(jQuery),$(function(){$(".category-list__open").click(function(e){e.preventDefault(),$(this).closest(".category-list").addClass("is-open")}),$(".category-list__close").click(function(e){e.preventDefault(),$(this).closest(".category-list").removeClass("is-open")}),$(".category-list__link").click(function(e){e.preventDefault(),!0!==$(this).parent().hasClass("active")&&($(".active",$(this).closest(".category-list")).removeClass("active"),$(this).parent().addClass("active"));var target=$(this).attr("href");$(target).scrollTo(72),$(this).closest(".category-list").removeClass("is-open")})}),$(function(){function navbarContentToggle(){$(".navbar__content").toggleClass("is-closed").toggleClass("is-open")}function navbarSearchToggle(){$(".navbar__search").toggleClass("is-open")}$(".navbar__toggler").click(function(){navbarContentToggle()}),$(".navbar__content__close").click(function(){navbarContentToggle()}),$(".navbar__button--search").click(function(){navbarSearchToggle(),$("#navbarSearchField").focus()}),$(".navbar__search__close").click(function(){navbarSearchToggle()})}),$(function(){function setOS(os){var platformClass="platform-"+os;!1===$("body").hasClass(platformClass)&&($("body").removeClass("platform-mac").removeClass("platform-tux").removeClass("platform-win").addClass("platform-"+os),function(name,value,days){if(days){var date=new Date;date.setTime(date.getTime()+24*days*60*60*1e3);var expires="; expires="+date.toGMTString()}else expires="";document.cookie=name+"="+value+expires+"; path=/"}("os",os))}$("a",".platform-switcher").click(function(e){e.preventDefault(),setOS($(this).data("platform"))});var os,platform=function(name){for(var nameEQ=name+"=",ca=document.cookie.split(";"),i=0;i<ca.length;i++){for(var c=ca[i];" "==c.charAt(0);)c=c.substring(1,c.length);if(0==c.indexOf(nameEQ))return c.substring(nameEQ.length,c.length)}return null}("os");null===platform&&(os="unknown",-1!=navigator.appVersion.indexOf("Win")&&(os="win"),-1!=navigator.appVersion.indexOf("Mac")&&(os="mac"),-1!=navigator.appVersion.indexOf("Linux")&&(os="tux"),platform=os),setOS(platform)}),function($){"use strict";function ScrollSpy(element,options){this.$body=$(document.body),this.$scrollElement=$(element).is(document.body)?$(window):$(element),this.options=$.extend({},ScrollSpy.DEFAULTS,options),this.selector=(this.options.target||"")+" ul li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",$.proxy(this.process,this)),this.refresh(),this.process()}function Plugin(option){return this.each(function(){var $this=$(this),data=$this.data("bs.scrollspy"),options="object"==typeof option&&option;data||$this.data("bs.scrollspy",data=new ScrollSpy(this,options)),"string"==typeof option&&data[option]()})}ScrollSpy.VERSION="3.3.6",ScrollSpy.DEFAULTS={offset:10},ScrollSpy.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},ScrollSpy.prototype.refresh=function(){var that=this,offsetMethod="offset",offsetBase=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),$.isWindow(this.$scrollElement[0])||(offsetMethod="position",offsetBase=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var $el=$(this),href=$el.data("target")||$el.attr("href"),$href=/^#./.test(href)&&$(href);return $href&&$href.length&&$href.is(":visible")&&[[$href[offsetMethod]().top+offsetBase,href]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){that.offsets.push(this[0]),that.targets.push(this[1])})},ScrollSpy.prototype.process=function(){var i,scrollTop=this.$scrollElement.scrollTop()+this.options.offset,scrollHeight=this.getScrollHeight(),maxScroll=this.options.offset+scrollHeight-this.$scrollElement.height(),offsets=this.offsets,targets=this.targets,activeTarget=this.activeTarget;if(this.scrollHeight!=scrollHeight&&this.refresh(),maxScroll<=scrollTop)return activeTarget!=(i=targets[targets.length-1])&&this.activate(i);if(activeTarget&&scrollTop<offsets[0])return activeTarget!=(i=targets[0])&&this.activate(i);for(i=offsets.length;i--;)activeTarget!=targets[i]&&scrollTop>=offsets[i]&&(void 0===offsets[i+1]||scrollTop<offsets[i+1])&&this.activate(targets[i])},ScrollSpy.prototype.activate=function(target){this.activeTarget=target,this.clear();var selector=this.selector+'[data-target="'+target+'"],'+this.selector+'[href="'+target+'"]',active=$(selector).parents("li").addClass("active");active.parent(".dropdown-menu").length&&(active=active.closest("li.dropdown").addClass("active")),active.trigger("activate.bs.scrollspy")},ScrollSpy.prototype.clear=function(){$(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var old=$.fn.scrollspy;$.fn.scrollspy=Plugin,$.fn.scrollspy.Constructor=ScrollSpy,$.fn.scrollspy.noConflict=function(){return $.fn.scrollspy=old,this},$(window).on("load.bs.scrollspy.data-api",function(){$('[data-spy="scroll"]').each(function(){var $spy=$(this);Plugin.call($spy,$spy.data())})})}(jQuery),$(".subnav__toggle").click(function(e){e.preventDefault();var target=$(this).attr("href"),$element=$(target);$element.hasClass("in")?($(this).velocity({rotateZ:"0deg"},"fast"),$element.velocity("slideUp",{duration:"fast"}).removeClass("in")):($(this).velocity({rotateZ:"180deg"},"fast"),$element.velocity("slideDown",{duration:"fast"}).addClass("in"))}),$.fn.scrollTo=function(offset){return void 0===offset&&(offset=0),this.each(function(){$("html, body").animate({scrollTop:$(this).offset().top-offset},100)})},$(function(){$("#homeSearch").keypress(function(e){if(13===e.which)return!1}),$("#searchField").on("keyup paste",function(e){var query=$("#searchField").val(),$results=$(".home__search--results");$results.hide().empty(),query.length<3||$.ajax({url:"https://api.swiftype.com/api/v1/public/engines/suggest?q="+query+"&engine_key=Gbki8CUy_fPQKt2Nyea7",dataType:"jsonp",success:function(data){$results.empty(),0<data.record_count?$.each(data.records.page,function(i,result){$results.append('<li><a href="'+result.url+'">'+result.title+"</a></li>")}):$results.append("<li>No results</li>"),$results.show()}})})}),function(w,d,t,u,n,s,e){w.SwiftypeObject=n,w[n]=w[n]||function(){(w[n].q=w[n].q||[]).push(arguments)},s=d.createElement(t),e=d.getElementsByTagName(t)[0],s.async=1,s.src="//s.swiftypecdn.com/install/v2/st.js",e.parentNode.insertBefore(s,e)}(window,document,"script",0,"_st"),_st("install","R7u9eLpPQt8xyPRf_doi","2.0.0");