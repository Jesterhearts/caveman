chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
   if(sender.tab) {
      return;
   }

   do_minify();
});

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
   return adj.indexOf(word.toLowerCase()) == -1 && adv.indexOf(word.toLowerCase()) == -1 && preps_and_articles.indexOf(word.toLowerCase()) == -1;
}

function do_minify() {
   var paras = document.body.getElementsByTagName('p');

   for(var i = 0; i < paras.length; i++) {
      var para = paras[i].innerHTML;
      var split_para = para.split(/\s+|[[:punct:]]/);
      var tokens = split_para.filter(is_allowed);
      paras[i].innerHTML = tokens.join(' ');
   }
}


