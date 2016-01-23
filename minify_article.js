chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
   if(sender.tab) {
      return;
   }

   minify_page();
});

allowed_nodes = ["P", "LI"];
old_node = null
old_text = null

window.onmouseout = function(e) {
   if(!old_text || !old_node) {
      return;
   }

   old_node.innerHTML = old_text;
   old_node = null;
   old_text = null;
}

window.onmouseover = function(e) {
   if(allowed_nodes.indexOf(e.target.nodeName) == -1) {
      return;
   }

   old_node = e.target;
   old_text = old_node.innerHTML;
   old_node.innerHTML = do_minify(old_node);
};

preps_and_articles = [
   "a",
   "an",
   "aboard",
   "about",
   "'bout",
   "bout",
   "above",
   "bove",
   "abreast",
   "abroad",
   "absent",
   "across",
   "cross",
   "adjacent",
   "after",
   "against",
   "'gainst",
   "gainst",
   "gain",
   "along",
   "'long",
   "alongst",
   "alongside",
   "amid",
   "amidst",
   "mid",
   "midst",
   "among",
   "amongst",
   "'mong",
   "mong",
   "'mongst",
   "apropos",
   "apud",
   "around",
   "'round",
   "round",
   "am",
   "as",
   "astride",
   "at",
   "atop",
   "ontop",
   "bar",
   "before",
   "afore",
   "tofore",
   "B4",
   "be",
   "behind",
   "ahind",
   "below",
   "ablow",
   "alow",
   "beneath",
   "'neath",
   "neath",
   "beside",
   "besides",
   "between",
   "atween",
   "beyond",
   "ayond",
   "but",
   "by",
   "chez",
   "circa",
   "c.",
   "ca.",
   "come",
   "dehors",
   "despite",
   "spite",
   "down",
   "during",
   "except",
   "for",
   "4",
   "from",
   "in",
   "is",
   "inside",
   "into",
   "less",
   "like",
   "minus",
   "near",
   "nearer",
   "nearest",
   "anear",
   "notwithstanding",
   "of",
   "o'",
   "off",
   "on",
   "onto",
   "opposite",
   "out",
   "outen",
   "outside",
   "over",
   "o'er",
   "pace",
   "past",
   "per",
   "post",
   "pre",
   "pro",
   "qua",
   "re",
   "sans",
   "save",
   "sauf",
   "short",
   "since",
   "sithence",
   "than",
   "the",
   "through",
   "throughout",
   "thruout",
   "to",
   "toward",
   "towards",
   "under",
   "underneath",
   "unlike",
   "until",
   "'til",
   "til",
   "till",
   "up",
   "upon",
   "'pon",
   "pon",
   "upside",
   "versus",
   "vs.",
   "v.",
   "via",
   "vice",
   "vis-a-vis",
   "was",
   "with",
   "w/",
   "c",
   "within",
   "w/i",
   "without",
   "w/o",
   "worth"
];

function is_allowed(word) {
   return (adj.indexOf(word) == -1
      && adv.indexOf(word) == -1
      && preps_and_articles.indexOf(word) == -1
   ) || nouns.indexOf(word) != -1
   || verbs.indexOf(word) != -1;
}

function do_minify(node) {
   var text = node.innerHTML;
   var split_para = text.split(/(\s+|[.,!;:~()])/);
   var tokens = split_para.filter(is_allowed);
   return tokens.join('');
}

function minify_page() {
   var paras = document.body.getElementsByTagName('p');

   for(var i = 0; i < paras.length; i++) {
      paras[i].innerHTML = do_minify(paras[i]);
   }
}


