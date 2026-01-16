
* multi-language version of the page: js-based switch of visibility of containers with each language
* adapted the html manually, which might break future work with editor of the framework used (bootstrap)
* works as long as the page is small and structure doesn't change much 
* ~~JS looks terrible and needs some love~~


* Adding new translation textblocks is easy: just add a div like this
   \<div class="content$$" lang="XX" style="display:none"> Text \</div>

  whereas $$=EN or FR or DE, and XX = EN or FR or DE


