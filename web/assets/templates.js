angular.module("templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("customcontent.html","");
$templateCache.put("navigation.html","<nav>\r\n	<div class=\"nav-wrapper yellow darken-2\">\r\n		 <a href=\"\" class=\"brand-logo\">TODO Application</a>\r\n	</div>\r\n</nav>\r\n");
$templateCache.put("new-note.html","<div class=\"card\">\r\n	<div class=\"card-content\" ng-hide=blankNote ng-click=\"createNote()\" style=\"cursor: pointer;\">\r\n		Add note\r\n	</div>\r\n	<div class=\"card-content\" ng-if=blankNote>\r\n		<div class=\"input-field\">\r\n			<input id=\"new-note-title\" type=\"text\" ng-model=\"blankNote.title\" />\r\n			<label for=\"new-note-title\">Note title</label>\r\n		</div>\r\n		<div class=\"input-field\">\r\n			<textarea id=\"new-note-content\" class=\"materialize-textarea\" ng-model=\"blankNote.content\"></textarea>\r\n			<label for=\"new-note-content\">Note content</label>\r\n		</div>\r\n		<div class=\"card-action\">\r\n			<a href=\"#\" ng-click=\"saveNote()\">Done</a>\r\n		</div>\r\n	</div>\r\n</div>\r\n");
$templateCache.put("note.html","<li class=\"collection-item avatar\">\r\n	<i class=\"material-icons\" ng-bind=note.done></i>\r\n	<span class=\"title\" ng-bind=note.title></span>\r\n	<p ng-bind=note.content></p>\r\n	<a href=\"#\" class=\"secondary-content\"><i class=\"material-icons\" ng-click=\"edit();\">edit</i><i class=\"material-icons\" ng-click=\"del();\">delete</i></a>\r\n</li>\r\n\r\n<!--div class=\"card hoverable\">\r\n	<div class=\"card-content\">\r\n		<span class=\"card-title\" ng-bind=note.title></span>\r\n		<p ng-bind=note.content></p>\r\n	</div>\r\n</div-->\r\n");}]);