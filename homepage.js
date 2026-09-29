'use strict';
const requests = records.map(r=>({...r,kind:r.status==='Request Successful'?'provided':r.status==='Request partially successful'?'partial':r.status==='Awaiting response'?'waiting':'not-held'}));
const agencies = [...new Map(requests.map(r=>[r.agency,{agency:r.agency,jurisdiction:r.jurisdiction}])).values()];
const dialog = document.querySelector('#demo-dialog');
const content = document.querySelector('#dialog-content');
const input = document.querySelector('#search');
let draft = {agency:'',title:'',description:''};
let dialogTrigger = null;
const escapeHtml = value => String(value).replace(/[&<>"']/g, char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
const normalize = value => value.normalize('NFD').replace(/[\u0300-\u036fʻ’']/g,'').toLowerCase();
const agencyOptions = () => agencies.map((a,i)=>`<option value="${i}" ${draft.agency===String(i)?'selected':''}>${escapeHtml(a.agency)} — ${escapeHtml(a.jurisdiction)}</option>`).join('');

function renderRequests(query='') {
  const terms=normalize(query).trim().split(/\s+/).filter(Boolean);
  const matches=requests.filter(r=>terms.every(term=>normalize(`${r.title} ${r.agency} ${r.jurisdiction} ${r.status}`).includes(term)));
  document.querySelector('#request-list').innerHTML=(query.trim()?matches:matches.slice(0,4)).map(r=>`<article class="request-row"><div><h3><button class="request-title" data-request="${requests.indexOf(r)}">${escapeHtml(r.title)}</button></h3><p class="request-agency"><span class="recipient-label">To: </span>${escapeHtml(r.agency)}<span class="separator" aria-hidden="true">·</span><span class="jurisdiction">${escapeHtml(r.jurisdiction)}</span></p></div><div class="request-meta"><span class="status ${r.kind}"><span class="sr-only">Status: </span>${r.status}</span><span class="request-date">Listed date: ${escapeHtml(r.date.split(',').slice(0,2).join(','))}</span></div></article>`).join('');
  document.querySelector('#empty-results').hidden=matches.length>0;
  const summary=document.querySelector('#results-summary');
  summary.hidden=!query.trim();
  summary.innerHTML=query.trim()?`${matches.length} saved ${matches.length===1?'request':'requests'} found for “${escapeHtml(query.trim())}”. <button class="inline-link" data-reset>Clear search</button>`:'';
  document.querySelector('#requests-title').textContent=query.trim()?'Search results':'Recent public requests';
}
function show(html) {
  if(!dialog.open) dialogTrigger = document.activeElement;
  content.innerHTML=html;
  if(!dialog.open) dialog.showModal();
  dialog.scrollTop=0;
  const title=content.querySelector('h2');
  title.tabIndex=-1;
  title.focus();
}
const heading = title => `<h2 id="dialog-title">${title}</h2>`;
const demoNote='<div class="dialog-notice">Nothing is sent to an agency, and no account is created.</div>';
const views = {
  guide:()=>`${heading('New to public records?')}<p>Public records can include government contracts, budgets, reports, and correspondence. UIPA is Hawaiʻi’s Uniform Information Practices Act.</p><h3>Start with a specific record</h3><p>Search existing requests first. When you write your own, describe the records, topic, date range, and agency as clearly as you can.</p><h3>Know what you’re sharing</h3><p>Requests and responses may be published. Avoid including unnecessary personal information. This service is not intended for requesting private records about yourself.</p><h3>Plan for the agency’s response</h3><p>The agency may ask for clarification, assess fees, provide some records, or explain why records cannot be provided. This concept does not promise a response date or outcome.</p><div class="dialog-actions"><button class="button primary" data-view="start">Try a sample request</button><button class="inline-link" data-view="privacy">Privacy information</button></div>`,
  privacy:()=>`${heading('Before you share')}<p>Requests and agency responses on UIPA.org may become public. Do not assume that a request is anonymous or confidential.</p><p>Check your request and any records for personal details before sharing. The live site’s FAQ describes publication settings and eventual release of requests; the project team should confirm that guidance before launch.</p><h3>Privacy in this prototype</h3><p>Your text stays in this page’s memory. It is not saved to browser storage or sent anywhere. Reloading the page clears it. Use fictional information only.</p><div class="dialog-notice">This is a local guidance preview, not a replacement for UIPA.org’s current privacy policy.</div><p class="source-note">Reference reviewed: uipa.org/help/privacy/ and uipa.org/help/faq/.</p>`,
  about:()=>`${heading('Public knowledge, shared')}<p>UIPA.org helps people find, submit, and follow public-records requests to Hawaiʻi state and county agencies. It also lets people learn from requests made by others.</p><p>The service is independent of government. People can also make requests directly to government agencies.</p><div class="dialog-notice">This homepage is a page preview for discussion with Code with Aloha. It is not the live UIPA.org service.</div><button class="inline-link" data-view="credits">Project credits and sources</button>`,
  faq:()=>`${heading('A few common questions')}<h3>Can I search before making a request?</h3><p>Yes. Start with a topic or agency to see what others have asked. Search covers the 20 public requests saved from UIPA.org on September 28, 2026. It is not a live search.</p><h3>Is UIPA.org a government website?</h3><p>No. It is an independent community resource.</p><h3>Can I request federal records here?</h3><p>UIPA.org focuses on Hawaiʻi state and county agencies. Federal records use a separate process.</p><h3>Will processing be free or immediate?</h3><p>Agency fees may apply. Response times and outcomes vary.</p><button class="inline-link" data-view="guide">Read request guidance</button>`,
  terms:()=>`${heading('Terms — preview')}<p>The production Terms destination would provide the current UIPA.org terms of service for review before creating an account or sending a request.</p><p>This prototype does not ask you to accept terms, create an account, or send anything. Its content and workflows are for design discussion only.</p><p class="source-note">Production reference: uipa.org/help/terms/. Final policy text should be supplied and approved by the project team.</p>`,
  credits:()=>`${heading('Project credits')}<p>UIPA.org’s FAQ credits <strong>Code with Aloha</strong> with creating the site and identifies <strong>Public First Law Center</strong> as a collaborator and host.</p><p>The live homepage also credits the open-source Froide project and uses older “Code for Hawaii” wording. Confirm current names, roles, and preferred attribution with the project team before launch.</p><div class="dialog-notice">This is an independent page preview for discussion. It does not imply project-team approval.</div><p class="source-note">Sources reviewed September 28, 2026: uipa.org/ and uipa.org/help/faq/.</p>`,
  login:()=>`${heading('Log In — preview')}<p>On the live service, signing in lets you manage requests and follow correspondence. Account access is not connected in this concept.</p>${demoNote}<div class="dialog-actions"><button class="button primary" data-view="start">Explore a sample request</button><button class="inline-link" data-close>Return to homepage</button></div>`,
  'agency-help':()=>`${heading('Find the agency that holds the record')}<p>Think about who creates or keeps the record, and whether the work happens at the state or county level.</p><ul><li><strong>Local parks or city services:</strong> start with the relevant county department.</li><li><strong>State highways:</strong> start with the state Department of Transportation.</li><li><strong>Unsure where a record is kept?</strong> Ask the agency to confirm before making a detailed request.</li></ul><p>The agency list includes recipients in the saved public requests, not a complete directory. Check the live UIPA agency directory before making a real request.</p><button class="button secondary" data-view="agencies">Browse agencies</button>`,
  agencies:()=>`${heading('Browse agencies')}<p>Agencies named in the saved public requests. No live contacts are connected.</p><ul class="agency-directory">${agencies.map((a,i)=>`<li><button data-agency="${i}">${escapeHtml(a.agency)}</button><small>${escapeHtml(a.jurisdiction)}</small></li>`).join('')}</ul><button class="inline-link" data-view="agency-help">Get help choosing an agency</button>`,
  start:()=>`${heading('Start a request')}<p>Try describing a record using fictional details. You can review a local preview; nothing will be submitted.</p><div class="dialog-notice">Requests and responses may be published on the live service. <button class="inline-link" data-view="privacy">Read privacy information</button> and <button class="inline-link" data-view="guide">request guidance</button> before beginning.</div><form id="draft-form"><div class="form-field"><label for="draft-agency">Choose an agency</label><select id="draft-agency" name="agency" required><option value="">Select an agency</option>${agencyOptions()}</select></div><div class="form-field"><label for="draft-title">Request title</label><input id="draft-title" name="title" maxlength="160" value="${escapeHtml(draft.title)}" placeholder="For example, park maintenance contracts for 2025" required></div><div class="form-field"><label for="draft-description">Which records are you looking for?</label><textarea id="draft-description" name="description" maxlength="3000" placeholder="Include a topic, date range, and the type of record. Use fictional details only." required>${escapeHtml(draft.description)}</textarea></div><div class="dialog-actions"><button class="button primary" type="submit">Preview request</button><button class="inline-link" type="button" data-view="agency-help">Help choosing an agency</button></div></form>`
};
function saveDraft(){const form=document.querySelector('#draft-form');if(form){const data=new FormData(form);draft={agency:data.get('agency'),title:data.get('title'),description:data.get('description')};}}
function showView(name){saveDraft();if(views[name])show(views[name]());}
views.browse=()=>heading('Browse saved requests')+'<p>Public request metadata saved September 28, 2026. Correspondence and documents are not copied here.</p><ul class="agency-directory">'+requests.map((r,i)=>'<li><button data-request="'+i+'">'+escapeHtml(r.title)+'</button><small>'+escapeHtml(r.agency)+' · '+escapeHtml(r.jurisdiction)+'</small><span class="status '+r.kind+'">'+r.status+'</span></li>').join('')+'</ul>';
document.addEventListener('click',event=>{const button=event.target.closest('[data-query]');if(!button)return;input.value=button.dataset.query;renderRequests(input.value);document.querySelector('#requests').scrollIntoView({block:'start'});document.querySelector('#requests-title').focus({preventScroll:true});});
document.addEventListener('click',event=>{
  if(event.target.closest('#mobile-nav a,#mobile-nav button'))closeMenu();
  const view=event.target.closest('[data-view]');if(view){showView(view.dataset.view);return;}
  const close=event.target.closest('[data-close],.close-button');if(close){saveDraft();dialog.close();return;}
  const row=event.target.closest('[data-request]');if(row){const r=requests[Number(row.dataset.request)];show(`${heading(escapeHtml(r.title))}<span class="status ${r.kind}">${escapeHtml(r.status)}</span><dl class="detail-grid"><dt>To</dt><dd>${escapeHtml(r.agency)}</dd><dt>Jurisdiction</dt><dd>${escapeHtml(r.jurisdiction)}</dd><dt>Listed timestamp</dt><dd>${escapeHtml(r.date)}</dd></dl><p>Public directory metadata saved September 28, 2026. Statuses may have changed. Correspondence and attachments are not copied here.</p><a class="inline-link" href="${escapeHtml(r.url)}" target="_blank" rel="noopener">View original request on UIPA.org</a>`);return;}
  const agency=event.target.closest('[data-agency]');if(agency){draft.agency=agency.dataset.agency;showView('start');return;}
  if(event.target.closest('[data-reset],[data-browse]')){input.value='';renderRequests();if(event.target.closest('[data-reset]')){document.querySelector('#requests-title').focus();} }
});
document.querySelector('#search-form').addEventListener('submit',event=>{event.preventDefault();renderRequests(input.value);document.querySelector('#requests').scrollIntoView({block:'start'});document.querySelector('#requests-title').focus({preventScroll:true});});
document.addEventListener('submit',event=>{
  if(event.target.id!=='draft-form')return;
  event.preventDefault();saveDraft();const a=agencies[Number(draft.agency)];
  show(`${heading('Review your request')}<p>Preview only · Not sent or saved.</p><dl class="detail-grid"><dt>To</dt><dd>${escapeHtml(a.agency)}<br>${escapeHtml(a.jurisdiction)}</dd><dt>Title</dt><dd>${escapeHtml(draft.title)}</dd></dl><p class="preview-text">${escapeHtml(draft.description)}</p>${demoNote}<div class="dialog-actions"><button class="button secondary" data-view="start">Edit request</button><button class="inline-link" data-close>Done</button></div>`);
});
dialog.addEventListener('cancel',saveDraft);
dialog.addEventListener('close',()=>{
  // Preserve keyboard position even after several views replace the dialog content.
  if(dialogTrigger?.closest('#mobile-nav') && document.querySelector('#mobile-nav').hidden) menu.focus();
  else if(dialogTrigger?.isConnected) dialogTrigger.focus();
});
dialog.addEventListener('click',event=>{if(event.target===dialog){const bounds=dialog.getBoundingClientRect();if(event.clientX<bounds.left||event.clientX>bounds.right||event.clientY<bounds.top||event.clientY>bounds.bottom){saveDraft();dialog.close();}}});
const menu=document.querySelector('.menu-toggle');
function closeMenu(){menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','Open navigation');document.querySelector('#mobile-nav').hidden=true;}
menu.addEventListener('click',()=>{const isOpen=menu.getAttribute('aria-expanded')==='true';menu.setAttribute('aria-expanded',String(!isOpen));menu.setAttribute('aria-label',isOpen?'Open navigation':'Close navigation');document.querySelector('#mobile-nav').hidden=isOpen;});
document.querySelector('#mobile-nav').addEventListener('keydown',event=>{if(event.key==='Escape'){closeMenu();menu.focus();}});
renderRequests();
