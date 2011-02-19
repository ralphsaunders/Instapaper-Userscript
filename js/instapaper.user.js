// ==UserScript==
// @name         Instapaper Userscript 
// @namespace    http://ralphsaunders.co.uk/blogged-about/his-instapaper-userscript
// @match        http://*.instapaper.com/*
// @description  For a better Instapaper
// @version      0.0.1
// ==/UserScript==

/*
 *   "I think that when a user decides to run a GM script they are pretty much saying
 *   'yes, I am about to run a huge hack that will make this site look like what I 
 *   want it to, do whatever you want'."
 *   
*/

/*
 * Planned Structure of Document:
 * |- Layout
 *   |- Navigation
 *   |- Sidebar
 *   |- Text View
 *                                                                                                                                  
*/

//--Link to CSS
var style = document.createElement('style');
style.innerText = "@import url('http://localhost/24hr-instapaper-userscript/css/styles.compressed.css');";
document.getElementsByTagName("head")[0].appendChild(style);

// Change navigation, innerHTML replaces contents of the element.
var accountMenu = document.getElementById("userpanel");
var strapline = document.getElementById("header");
accountMenu.innerHTML = '<nav><ul><li><a href="/extras">Extras</a></li><li><a href="/user">Account</a></li><li><a href="/user/logout">Log out</a></li></ul></nav>';

// hide strapline
strapline.lastChild.previousSibling.setAttribute('class', 'hide');

document.getElementById('categoryHeader').innerHTML = '<nav id="main-menu"><ul class="border-top border-on"><li><a id="unread" href="/u">Unread<span class="icon"></span></a><ul id="drop" class="border-bottom"><li><a href="/browse">Browse</a></li><li><a href="/starred">Starred</a></li><li><a href="/archive">Archive</a></li></ul></li></ul></nav>';
                                                      
document.getElementById('paginationTop').innerHTML = '<a id="add" href="/edit">Add<span class="icon"></span></a>'
