---
tags:
  - 전공
  - contents
---
%% jQuery script %%
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
%% html2canvas script %%
<script src="script/html2canvas.js"></script>
%% Webcam script %%
<script src="script/cam.js"></script>
%% md-editor script %%
<script src="script/simplemde.min.js"></script>
<script src="script/md-editor.js"></script>
%% tts script %%
<script src="script/tts.js"></script>
%% progressbar script %%
<script>
function getCurrentProgress(){
  const firstDateOfYear = new Date(new Date().getFullYear(), 0, 1);
  const currentDate = new Date();
  return ((((currentDate - firstDateOfYear) / (1000 * 60 * 60 * 24)) * 100) / 365).toFixed(1);}
function updateUI() {const percent = getCurrentProgress();
  const barItem = document.getElementsByClassName('bar')[0];barItem.style.width = `${percent}%`;
  const counterItem = document.getElementsByClassName('value')[0];
  if (percent>100){counterItem.textContent = `100%`}else{counterItem.textContent = `${percent}%`;}}
setInterval(function() {updateUI();return arguments.callee;}(), 1000);
</script>
%% Links script %%
<script type="text/javascript">
var url = document.getElementById( 'linkshare' );
url.onchange = function() {window.open( this.options[ this.selectedIndex ].value, '_blank');
$('#linkshare').prop('selectedIndex',0);};
</script>
%% Translator script%%
<script>window.ResetTranslate = () => jQuery('#\\:1\\.container').contents().find('#\\:1\\.restore').click();</script>
<script>
    function googleTranslateElementInit() {
        new google.translate.TranslateElement({pageLanguage: 'en'},'google_translate_element');}
</script>
<script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>
%% share&fullcreen button script %%
<script src="script/full-share.js"></script>
%% WhiteNoise Script %%
<script type="text/javascript" src="script/WN.js"></script>
%% Preview Script %%
<script src="script/preview.js"></script>
%% Excalidraw Script %%
<script src="script/excalidraw.js"></script>
%% Excalidraw Script %%
<script src="script/graph.js"></script>
%% Study with me Script %%
<script src="script/study.js"></script>
%% Food Script %%
<script src="script/meal.js"></script>
%% Schedule Script %%
<script src="script/scheduler.js"></script>
%% Navigation bar Script %%
<script src="script/navbar.js"></script>



# 수학 (A3)
%% link button %%
<span>
<button id=”Link” onclick=" window.open('download/edu-prob.pdf','_blank')" >교육학 문제</button>
<span></span>
<button id=”Link” onclick=" window.open('download/edu-sol.pdf','_blank')" >교육학 해설</button>
<span></span>
<button id=”Link” onclick=" window.open('download/math-prob.pdf','_blank')" >내용학 문제</button>
<span></span>
<button id=”Link” onclick=" window.open('download/math-sol.pdf','_blank')" >내용학 해설</button>
<br>
<button id=”Link” onclick=" window.open('download/yby-prob.pdf','_blank')" >연도별 문제</button>
<span></span>
<button id=”Link” onclick=" window.open('download/yby-sol.pdf','_blank')" >연도별 해설</button>
<span></span>
<button id=”Link” onclick=" window.open('download/type-prob.pdf','_blank')" >유형화 문제</button>
<span></span>
<button id=”Link” onclick=" window.open('download/type-sol.pdf','_blank')" >유형화 해설</button>
<br>
<button id=”Link” onclick=" window.open('download/22curri.pdf','_blank')" >22교육과정</button>
<span></span>
<button id=”Link” onclick=" window.open('download/omr-EDU.pdf','_blank')">교육학 OMR</button>
<span></span>
<button id=”Link” onclick=" window.open('download/omr-A.pdf','_blank')" >전공A OMR</button>
<span></span>
<button id=”Link” onclick=" window.open('download/omr-B.pdf','_blank')" >전공B OMR</button>
<span></span>
</span>

---
# Templates (A3, 80 pages)
%% link button %%
<span>
<button id=”Link” onclick=" window.open('download/note-1.pdf','_blank')" >Note 1</button>
<span></span>
<button id=”Link” onclick=" window.open('download/note-2.pdf','_blank')" >Note 2</button>
<span></span>
<button id=”Link” onclick=" window.open('download/note-3.pdf','_blank')" >Note 3</button>
<span></span>
<button id=”Link” onclick=" window.open('download/note-4.pdf','_blank')" >Note 4</button>
<span></span>
<button id=”Link” onclick=" window.open('download/note-5.pdf','_blank')" >Note 5</button>
</span>
<br>


<h3>Previews</h3>
<span>
<button id="Link" onClick="document.getElementById('downloads').src = 'download/note-1.pdf'"> Note 1</button>
<span></span>
<button id="Link" onClick="document.getElementById('downloads').src = 'download/note-2.pdf'"  > Note 2</button>
<span></span>
<button id="Link" onClick="document.getElementById('downloads').src = 'download/note-3.pdf'"  > Note 3</button>
<span></span>
<button id="Link" onClick="document.getElementById('downloads').src = 'download/note-4.pdf'"  > Note 4</button>
<span></span>
<button id="Link" onClick="document.getElementById('downloads').src = 'download/note-5.pdf'"  > Note 5</button>
<span></span>
</span>


%% note previews %%
<div> <iframe id="downloads" src="iframe/blank.pdf" width="100%" height="1200"  frameborder="0" allowtransparency="true" marginwidth="0" marginheight="0"></iframe> </div>




















