(function(module) {
try { module = angular.module("templates"); }
catch(err) { module = angular.module("templates", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("modules/applications/partial/appcreator/appcreator.html",
    "<div class=\"col-md-12\" ng-controller=\"AppcreatorCtrl\">\n" +
    "    <form>\n" +
    "        <div class=\"form-group\">\n" +
    "            <label for=\"name\">Nombre</label>\n" +
    "            <input type=\"string\" class=\"form-control\" id=\"name\" ng-model=\"app.name\" placeholder=\"Enter email\">\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "            <label for=\"description\">Nombre</label>\n" +
    "            <textarea name=\"\" id=\"\" cols=\"30\" rows=\"10\" class=\"form-control\" id=\"description\"\n" +
    "                      ng-model=\"app.description\"></textarea>\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "            <label for=\"name\">Email</label>\n" +
    "            <input type=\"email\" class=\"form-control\" id=\"email\" ng-model=\"app.email\" placeholder=\"Enter email\">\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "            <label for=\"status\">Status</label>\n" +
    "            <input type=\"string\" class=\"form-control\" id=\"status\" ng-model=\"app.status\" ng-init=\"app.status='sandbox'\"\n" +
    "                   placeholder=\"Enter email\">\n" +
    "        </div>\n" +
    "        <button type=\"submit\" class=\"btn btn-default\" ng-click=\"Apps.Create(app)\">Submit</button>\n" +
    "    </form>\n" +
    "</div>\n" +
    "");
}]);
})();

(function(module) {
try { module = angular.module("templates"); }
catch(err) { module = angular.module("templates", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("modules/applications/partial/appdetail/appdetail.html",
    "<div class=\"col-md-12\" ng-controller=\"AppdetailCtrl\">\n" +
    "    <pre class=\"col-md-6\">{{detail}}</pre>\n" +
    "</div>\n" +
    "");
}]);
})();

(function(module) {
try { module = angular.module("templates"); }
catch(err) { module = angular.module("templates", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("modules/applications/partial/listapps/listapps.html",
    "<div class=\"col-md-12\" ng-controller=\"ListappsCtrl\">\n" +
    "    <div>\n" +
    "        <div class=\"app\" ng-repeat=\"app in Applist.apps\" ng-click=\"Applist.detail(app)\">\n" +
    "            <p>{{app.name}}</p>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);
})();

(function(module) {
try { module = angular.module("templates"); }
catch(err) { module = angular.module("templates", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("modules/dokin/modals/chatmodal/chatmodal.html",
    "<div class=\"dokin\">\n" +
    "	<div class=\"modal-header\">\n" +
    "        <i type=\"button\" class=\"fa fa-times-circle-o pull-right\" ng-click=\"$dismiss()\" aria-hidden=\"true\"></i>\n" +
    "        <i type=\"button\" class=\"fa fa-minus-square-o pull-right\" ng-click=\"$dismiss()\" aria-hidden=\"true\"></i>\n" +
    "		<h4 class=\"modal-title\"><i class=\"fa fa-weixin\"></i> <span>Visitante</span></h4>\n" +
    "	</div>\n" +
    "	<div class=\"modal-body\">\n" +
    "		<div class=\"col-md-9\">\n" +
    "            <div class=\"conversation\" id=\"dk-scroll\">\n" +
    "                <div ng-repeat=\"con in Chat.conversation\" class=\"conv\">\n" +
    "                    <div class=\"user\" ng-if=\"Chat.conversation[$index-1].user.firstName!=con.user.firstName\"><p ng-bind=\"con.user.firstName||'Anonimo'\"></p></div>\n" +
    "                    <div class=\"message\" ng-bind=\"con.text\"></div>\n" +
    "										<div class=\"\" ng-if=\"$last\">\n" +
    "											<div class=\"\" ng-init=\"Chat.scrollDown()\">												\n" +
    "											</div>\n" +
    "										</div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div >\n" +
    "                <textarea name=\"\"  ng-model=\"Chat.message\" ng-keyup=\"Chat.send($event)\" cols=\"30\" rows=\"10\"></textarea>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "		<div class=\"col-md-3\">\n" +
    "            <div class=\"visitor-info\">\n" +
    "                <div class=\"panel panel-default\">\n" +
    "                    <div class=\"panel-body\">\n" +
    "                        <form>\n" +
    "                            <div class=\"form-group\">\n" +
    "                                <div class=\"col-md-3\">\n" +
    "                                    <i class=\"fa fa-user fa-3x\"></i>\n" +
    "                                </div>\n" +
    "                                <div class=\"col-md-9\">\n" +
    "                                    <input type=\"text\" class=\"form-control\" id=\"exampleInputEmail1\" placeholder=\"Nombre\">\n" +
    "                                    <input type=\"text\" class=\"form-control\" id=\"lastname\" placeholder=\"Apellidos\">\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div class=\"form-group\">\n" +
    "                                <div class=\"col-md-12\">\n" +
    "                                    <input type=\"email\" class=\"form-control col-md-12\" id=\"exampleInputEmail1\" placeholder=\"Email\">\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div class=\"form-group\">\n" +
    "                                <div class=\"col-md-12\">\n" +
    "                                    <label for=\"exampleInputEmail1\" >Nota:</label>\n" +
    "                                    <textarea class=\"col-md-12\" name=\"\" id=\"\" cols=\"10\" rows=\"2\"></textarea>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </form>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"panel panel-default panel-desc\">\n" +
    "                    <div class=\"panel-body\">\n" +
    "                        <div class=\"btn-group col-md-12 description\" role=\"group\" aria-label=\"...\">\n" +
    "                            <button type=\"button\" class=\"btn btn-default col-md-4\">\n" +
    "                                <span class=\"badge\">4</span>\n" +
    "                                <p>PAST VISITS</p>\n" +
    "                            </button>\n" +
    "                            <button type=\"button\" class=\"btn btn-default col-md-4\">\n" +
    "                                <span class=\"badge\">4</span>\n" +
    "                                <p>PAST CHATS</p>\n" +
    "                            </button>\n" +
    "                            <button type=\"button\" class=\"btn btn-default col-md-4\">\n" +
    "                                <span class=\"badge\">4</span>\n" +
    "                                <p>ONLINE</p>\n" +
    "                            </button>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"panel panel-default device\">\n" +
    "                    <div class=\"panel-heading\">Dispositivo</div>\n" +
    "                    <div class=\"panel-body\">\n" +
    "                        <div class=\"item\">\n" +
    "                            <span>Ubicacion</span>\n" +
    "                            <p><i class=\"fa fa-long-arrow-right\"></i> <span ng-bind=\"Chat.client.location.country_name\"></span></p>\n" +
    "                        </div>\n" +
    "                        <div class=\"item\">\n" +
    "                            <span>Browser</span>\n" +
    "                            <p><i class=\"fa fa-long-arrow-right\"></i><span ng-bind=\"Chat.client.browser\"></span></p>\n" +
    "                        </div>\n" +
    "                        <div class=\"item\">\n" +
    "                            <span>Plataforma</span>\n" +
    "                            <p><i class=\"fa fa-long-arrow-right\"></i> <span ng-bind=\"Chat.client.device\"></span></p>\n" +
    "                        </div>\n" +
    "                        <div class=\"item\">\n" +
    "                            <span>User Agent</span>\n" +
    "                            <p><i class=\"fa fa-long-arrow-right\"></i> <span ng-bind=\"Chat.client.userAgent\"></span></p>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "	</div>\n" +
    "	<div class=\"modal-footer\">\n" +
    "        <!--<button class=\"btn btn-default\" ng-click=\"$dismiss()\">Cancel</button>-->\n" +
    "		<!--<button type=\"button\" class=\"btn btn-primary\">Save changes</button>-->\n" +
    "	</div>\n" +
    "</div>\n" +
    "");
}]);
})();

(function(module) {
try { module = angular.module("templates"); }
catch(err) { module = angular.module("templates", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("modules/dokin/modals/closeminChat/closeminChat.html",
    "<div>\n" +
    "	<div class=\"modal-header\">\n" +
    "		<button type=\"button\" class=\"close pull-right\" ng-click=\"$dismiss()\" aria-hidden=\"true\">&times;</button>\n" +
    "		<h4 class=\"modal-title\">Confirma que desea abandonar la conversación</h4>\n" +
    "	</div>\n" +
    "	<div class=\"modal-body\">\n" +
    "	</div>\n" +
    "	<div class=\"modal-footer\">\n" +
    "		<button class=\"btn btn-default\" ng-click=\"$dismiss()\">CANCELAR</button>\n" +
    "		<button type=\"button\" class=\"btn btn-primary\" ng-click=\"Closemin.confirm()\">CONFIRMAR</button>\n" +
    "	</div>\n" +
    "</div>\n" +
    "");
}]);
})();

(function(module) {
try { module = angular.module("templates"); }
catch(err) { module = angular.module("templates", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("modules/dokin/partial/dokinaccount/dokinaccount.html",
    "<div class=\"ac_variable\" ng-controller=\"DokinaccountCtrl\">\n" +
    "    <div class=\"col-md-12 dokinaccount\">\n" +
    "        <div class=\"btn-group head\" role=\"group\" aria-label=\"...\">\n" +
    "            <button type=\"button\" class=\"btn btn-default\" ng-click=\"Account.change('account')\">Cuenta</button>\n" +
    "            <button type=\"button\" class=\"btn btn-default\" ng-click=\"Account.change('password')\">Contraseña</button>\n" +
    "            <button type=\"button\" class=\"btn btn-default\" ng-click=\"Account.change('config')\">Configuracion</button>\n" +
    "        </div>\n" +
    "        <div class=\"body-account\" ng-if=\"Account.active=='account'\">\n" +
    "            <form class=\"form-horizontal col-md-6\">\n" +
    "                <div class=\"form-group\">\n" +
    "                    <label for=\"inputname\" class=\"col-sm-2 control-label\">Nombres</label>\n" +
    "                    <div class=\"col-sm-10\">\n" +
    "                        <input type=\"text\" class=\"form-control\" ng-model=\"user.firstName\" id=\"inputname\" placeholder=\"Nombres\">\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"form-group\">\n" +
    "                    <label for=\"inputlastname\" class=\"col-sm-2 control-label\">Apellidos</label>\n" +
    "                    <div class=\"col-sm-10\">\n" +
    "                        <input type=\"text\" class=\"form-control\" ng-model=\"user.lastName\" id=\"inputlastname\" placeholder=\"Apellidos\">\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"form-group\">\n" +
    "                    <label for=\"displayname\" class=\"col-sm-2 control-label\">Alias</label>\n" +
    "                    <div class=\"col-sm-10\">\n" +
    "                        <input type=\"text\" class=\"form-control\" ng-model=\"user.alias\" id=\"displayname\" placeholder=\"Alias\">\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"form-group\">\n" +
    "                    <label for=\"inputEmail3\" class=\"col-sm-2 control-label\">Email</label>\n" +
    "                    <div class=\"col-sm-10\">\n" +
    "                        <input type=\"email\" class=\"form-control\" ng-model=\"user.email\" id=\"inputEmail3\" placeholder=\"Email\">\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"form-group\">\n" +
    "                    <label for=\"inputImg\" class=\"col-sm-2 control-label\">Avatar</label>\n" +
    "                    <div class=\"col-sm-10\">\n" +
    "                        <img src=\"/assets/dokin/images/kodevian.png\" alt=\"\"/>\n" +
    "                        <a href=\"\"  class=\"btn btn-default\">Cambiar</a>\n" +
    "                        <a href=\"\"  class=\"btn btn-default\">Remover</a>\n" +
    "                        <input type=\"file\" id=\"inputImg\" style=\"display: none\"/>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"form-group\">\n" +
    "                    <div class=\"col-sm-offset-2 col-sm-10\">\n" +
    "                        <div class=\"checkbox\">\n" +
    "                            <label>\n" +
    "                                <input type=\"checkbox\" ng-model=\"user.admin\"> Administrador\n" +
    "                            </label>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"form-group\">\n" +
    "                    <div class=\"col-sm-offset-2 col-sm-10\">\n" +
    "                        <button type=\"submit\" class=\"btn btn-default\" ng-click=\"AddAgent.add(user)\">Crear</button>\n" +
    "                        <button type=\"\" class=\"btn btn-default\">Cancelar</button>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </form>\n" +
    "        </div>\n" +
    "        <div ng-if=\"Account.active=='password'\">\n" +
    "            <form class=\"form-horizontal col-md-6\">\n" +
    "                <div class=\"form-group\">\n" +
    "                    <label for=\"inputname\" class=\"col-sm-2 control-label\">Contraseña anterior</label>\n" +
    "                    <div class=\"col-sm-10\">\n" +
    "                        <input type=\"password\" class=\"form-control\" ng-model=\"user.firstName\" id=\"inputname\" placeholder=\"Contraseña anterior\">\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"form-group\">\n" +
    "                    <label for=\"inputlastname\" class=\"col-sm-2 control-label\">Nueva contraseña</label>\n" +
    "                    <div class=\"col-sm-10\">\n" +
    "                        <input type=\"password\" class=\"form-control\" ng-model=\"user.lastName\" id=\"inputlastname\" placeholder=\"Nueva contraseña\">\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"form-group\">\n" +
    "                    <label for=\"displayname\" class=\"col-sm-2 control-label\">Repita Nueva contraseña</label>\n" +
    "                    <div class=\"col-sm-10\">\n" +
    "                        <input type=\"password\" class=\"form-control\" ng-model=\"user.alias\" id=\"displayname\" placeholder=\"Repita Nueva contraseña\">\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"form-group\">\n" +
    "                    <div class=\"col-sm-offset-2 col-sm-10\">\n" +
    "                        <button type=\"submit\" class=\"btn btn-default\" ng-click=\"AddAgent.add(user)\">Crear</button>\n" +
    "                        <button type=\"\" class=\"btn btn-default\">Cancelar</button>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </form>\n" +
    "        </div>\n" +
    "        <div ng-show=\"Account.active=='config'\">\n" +
    "            <div class=\"col-md-3\">\n" +
    "                <input ng-model=\"value\"  type=\"text\" id=\"mySlider1\" slider options=\"options\" />\n" +
    "            </div>\n" +
    "\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);
})();

(function(module) {
try { module = angular.module("templates"); }
catch(err) { module = angular.module("templates", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("modules/dokin/partial/dokinagent/dokinagent.html",
    "<div class=\"ac_variable\" ng-controller=\"DokinagentCtrl\">\n" +
    "    <div class=\"col-md-12 nopad dokinagent dokinagents dokin\">\n" +
    "        <div class=\"panel panel-default\">\n" +
    "            <!-- Default panel contents -->\n" +
    "            <div class=\"panel-heading\">\n" +
    "                <form class=\"form-inline\">\n" +
    "                    <div class=\"form-group\">\n" +
    "                        <input type=\"text\" class=\"form-control\" placeholder=\"Buscar\">\n" +
    "                        <a class=\"btn btn-default\" href=\"#\"\n" +
    "                           ui-sref=\"dokin.agent.add\"\n" +
    "                           role=\"button\">Agregar Agente</a>\n" +
    "                    </div>\n" +
    "                </form>\n" +
    "            </div>\n" +
    "            <!-- Table -->\n" +
    "            <table class=\"table\">\n" +
    "                <thead>\n" +
    "                <tr>\n" +
    "                    <th>Display Name</th>\n" +
    "                    <th>Nombres</th>\n" +
    "                    <th>Apellidos</th>\n" +
    "                    <th>Email</th>\n" +
    "                    <th>Admin</th>\n" +
    "                    <th>Activo</th>\n" +
    "                </tr>\n" +
    "                </thead>\n" +
    "            </table>\n" +
    "            <!-- Table -->\n" +
    "            <table class=\"table\">\n" +
    "                <tbody>\n" +
    "                <tr ng-repeat=\"agent in Agent.list\" ui-sref=\"dokin.agent.prof({id:agent.user.id})\">\n" +
    "                    <th>#{{agent.user.alias}}</th>\n" +
    "                    <th>{{agent.user.firstName}}</th>\n" +
    "                    <th>#{{agent.user.lastName}}</th>\n" +
    "                    <th>#{{agent.user.email}}</th>\n" +
    "                    <th>#{{agent.visits}}</th>\n" +
    "                    <th>#{{agent.visits}}</th>\n" +
    "                </tr>\n" +
    "                </tbody>\n" +
    "            </table>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);
})();

(function(module) {
try { module = angular.module("templates"); }
catch(err) { module = angular.module("templates", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("modules/dokin/partial/dokinagentadd/dokinagentadd.html",
    "<div class=\"ac_variable\" ng-controller=\"DokinagentaddCtrl\">\n" +
    "    <div class=\"col-md-12\">\n" +
    "        <form class=\"form-horizontal col-md-6\">\n" +
    "            <div class=\"form-group\">\n" +
    "                <label for=\"inputname\" class=\"col-sm-2 control-label\">Nombres</label>\n" +
    "                <div class=\"col-sm-10\">\n" +
    "                    <input type=\"text\" class=\"form-control\" ng-model=\"user.firstName\" id=\"inputname\" placeholder=\"Nombres\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <label for=\"inputlastname\" class=\"col-sm-2 control-label\">Apellidos</label>\n" +
    "                <div class=\"col-sm-10\">\n" +
    "                    <input type=\"text\" class=\"form-control\" ng-model=\"user.lastName\" id=\"inputlastname\" placeholder=\"Apellidos\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <label for=\"displayname\" class=\"col-sm-2 control-label\">Alias</label>\n" +
    "                <div class=\"col-sm-10\">\n" +
    "                    <input type=\"text\" class=\"form-control\" ng-model=\"user.alias\" id=\"displayname\" placeholder=\"Alias\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <label for=\"inputEmail3\" class=\"col-sm-2 control-label\">Email</label>\n" +
    "                <div class=\"col-sm-10\">\n" +
    "                    <input type=\"email\" class=\"form-control\" ng-model=\"user.email\" id=\"inputEmail3\" placeholder=\"Email\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <label for=\"inputPassword3\" class=\"col-sm-2 control-label\">Password</label>\n" +
    "                <div class=\"col-sm-10\">\n" +
    "                    <input type=\"password\" class=\"form-control\" ng-model=\"user.password\" id=\"inputPassword3\" placeholder=\"Password\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <div class=\"col-sm-offset-2 col-sm-10\">\n" +
    "                    <div class=\"checkbox\">\n" +
    "                        <label>\n" +
    "                            <input type=\"checkbox\" ng-model=\"user.admin\"> Administrador\n" +
    "                        </label>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <div class=\"col-sm-offset-2 col-sm-10\">\n" +
    "                    <button type=\"submit\" class=\"btn btn-default\" ng-click=\"AddAgent.add(user)\">Crear</button>\n" +
    "                    <button type=\"\" class=\"btn btn-default\">Cancelar</button>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "</div>\n" +
    "");
}]);
})();

(function(module) {
try { module = angular.module("templates"); }
catch(err) { module = angular.module("templates", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("modules/dokin/partial/dokinagentprof/dokinagentprof.html",
    "<div class=\"ac_variable\" ng-controller=\"DokinagentprofCtrl\">\n" +
    "    <div class=\"col-md-12 dokinagentprof\">\n" +
    "\n" +
    "        <div class=\"back-arrow\">\n" +
    "            <i class=\"fa fa-angle-left\" ui-sref=\"dokin.agent\"></i> <span>Configuracion de Agentes</span>\n" +
    "        </div>\n" +
    "        <div class=\"col-md-4\">\n" +
    "            <form class=\"form-horizontal col-md-12\">\n" +
    "                <div class=\"form-group status\">\n" +
    "                    <label for=\"inputname\" class=\"col-sm-4 control-label\">Estado del Agente</label>\n" +
    "                    <div class=\"col-sm-8\">\n" +
    "                        <div class=\"btn-group\" role=\"group\" aria-label=\"...\">\n" +
    "                            <button type=\"button\" class=\"btn btn-default\">Activo</button>\n" +
    "                            <button type=\"button\" class=\"btn btn-default\">Desactivo</button>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </form>\n" +
    "            <form class=\"form-horizontal col-md-12\">\n" +
    "                <div class=\"form-group\">\n" +
    "                    <label for=\"inputname\" class=\"col-sm-4 control-label\">Nombres</label>\n" +
    "                    <div class=\"col-sm-8\">\n" +
    "                        <input type=\"text\" class=\"form-control\" ng-model=\"user.firstName\" id=\"inputname\"\n" +
    "                               placeholder=\"Nombres\">\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"form-group\">\n" +
    "                    <label for=\"inputlastname\" class=\"col-sm-4 control-label\">Apellidos</label>\n" +
    "                    <div class=\"col-sm-8\">\n" +
    "                        <input type=\"text\" class=\"form-control\" ng-model=\"user.lastName\" id=\"inputlastname\"\n" +
    "                               placeholder=\"Apellidos\">\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"form-group\">\n" +
    "                    <label for=\"displayname\" class=\"col-sm-4 control-label\">Alias</label>\n" +
    "                    <div class=\"col-sm-8\">\n" +
    "                        <input type=\"text\" class=\"form-control\" ng-model=\"user.alias\" id=\"displayname\" placeholder=\"Alias\">\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"form-group\">\n" +
    "                    <label for=\"inputEmail3\" class=\"col-sm-4 control-label\">Email</label>\n" +
    "                    <div class=\"col-sm-8\">\n" +
    "                        <input type=\"email\" class=\"form-control\" ng-model=\"user.email\" id=\"inputEmail3\" placeholder=\"Email\">\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"form-group\">\n" +
    "                    <label for=\"inputPassword3\" class=\"col-sm-4 control-label\">Reset Password</label>\n" +
    "                    <div class=\"col-sm-8\">\n" +
    "                        <a href=\"\" class=\"btn btn-primary\">Cambiar</a>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"form-group\">\n" +
    "                    <div class=\"col-sm-offset-4 col-sm-8\">\n" +
    "                        <div class=\"checkbox\">\n" +
    "                            <label>\n" +
    "                                <input type=\"checkbox\" ng-model=\"user.admin\"> Administrador\n" +
    "                            </label>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"form-group\">\n" +
    "                    <div class=\"col-sm-offset-4 col-sm-8\">\n" +
    "                        <button type=\"submit\" class=\"btn btn-default\" ng-click=\"AddAgent.add(user)\">Guardar</button>\n" +
    "                        <button type=\"\" class=\"btn btn-default\">Cancelar</button>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </form>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);
})();

(function(module) {
try { module = angular.module("templates"); }
catch(err) { module = angular.module("templates", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("modules/dokin/partial/dokinanalytics/dokinanalytics.html",
    "<div class=\"ac_variable\" ng-controller=\"DokinanalyticsCtrl\">\n" +
    "    <div class=\"col-md-12\">\n" +
    "        <div class=\"btn-group btn-analytics\" role=\"group\">\n" +
    "            <button type=\"button\" class=\"btn btn-default\" ng-click=\"Analitycs.changeChart('line')\">Visitantes</button>\n" +
    "            <button type=\"button\" class=\"btn btn-default\" ng-click=\"Analitycs.changeChart('hbar')\">Horas/Dias Top</button>\n" +
    "            <button type=\"button\" class=\"btn btn-default\" ng-click=\"Analitycs.changeChart('bar')\">Chats</button>\n" +
    "            <button type=\"button\" class=\"btn btn-default\" ng-click=\"Analitycs.changeChart('donut')\">Agentes</button>\n" +
    "            <button type=\"button\" class=\"btn btn-default\" ng-click=\"Analitycs.changeChart('map')\">Ubicacion</button>\n" +
    "        </div>\n" +
    "        <br/>\n" +
    "        <br/>\n" +
    "        <br/>\n" +
    "\n" +
    "        <div ng-show=\"Analitycs.active=='line'\">\n" +
    "            <div class=\"col-md-6\">\n" +
    "                <div id=\"line\" style=\"width: 900px; height: 500px;\"></div>\n" +
    "                <br/>\n" +
    "                <br/>\n" +
    "                <div>\n" +
    "                    <div class=\"filter-items\">\n" +
    "                        <div class=\"squaredFour\">\n" +
    "                            <input type=\"checkbox\" value=\"None\" id=\"squaredFour\" name=\"check\" checked/>\n" +
    "                            <label for=\"squaredFour\"></label>\n" +
    "                        </div>\n" +
    "                        Total de Visitas\n" +
    "                    </div>\n" +
    "                    <div class=\"filter-items\">\n" +
    "                        <div class=\"squaredFour\">\n" +
    "                            <input type=\"checkbox\" value=\"None\" id=\"squaredFour\" name=\"check\" checked/>\n" +
    "                            <label for=\"squaredFour\"></label>\n" +
    "                        </div>\n" +
    "                        Visitantes Únicos\n" +
    "                    </div>\n" +
    "                    <div class=\"filter-items\">\n" +
    "                        <div class=\"squaredFour\">\n" +
    "                            <input type=\"checkbox\" value=\"None\" id=\"squaredFour\" name=\"check\" checked/>\n" +
    "                            <label for=\"squaredFour\"></label>\n" +
    "                        </div>\n" +
    "                        Chats\n" +
    "                    </div>\n" +
    "                    <div class=\"filter-items\">\n" +
    "                        <div class=\"squaredFour\">\n" +
    "                            <input type=\"checkbox\" value=\"None\" id=\"squaredFour\" name=\"check\" checked/>\n" +
    "                            <label for=\"squaredFour\"></label>\n" +
    "                        </div>\n" +
    "                        Sesiones\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"col-md-6\">\n" +
    "                <div id=\"piechart\" style=\"width: 900px; height: 500px;\"></div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div ng-show=\"Analitycs.active=='map'\">\n" +
    "            <div id=\"regions_div\" style=\"width: 900px; height: 500px;\"></div>\n" +
    "        </div>\n" +
    "        <div ng-show=\"Analitycs.active=='hbar'\">\n" +
    "            <div id=\"dual_x_div\" style=\"width: 900px; height: 500px;\"></div>\n" +
    "        </div>\n" +
    "        <div ng-show=\"Analitycs.active=='donut'\">\n" +
    "            <div id=\"donutchart\" style=\"width: 900px; height: 500px;\"></div>\n" +
    "        </div>\n" +
    "        <div ng-show=\"Analitycs.active=='bar'\">\n" +
    "            <div id=\"bar\" style=\"width: 900px; height: 500px;\"></div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);
})();

(function(module) {
try { module = angular.module("templates"); }
catch(err) { module = angular.module("templates", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("modules/dokin/partial/dokinbenefits/dokinbenefits.html",
    "<div class=\"ac_variable \" ng-controller=\"DokinbenefitsCtrl\">\n" +
    "    <div class=\"col-md-12\">\n" +
    "\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);
})();

(function(module) {
try { module = angular.module("templates"); }
catch(err) { module = angular.module("templates", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("modules/dokin/partial/dokinheader/dokinheader.html",
    "<div class=\"col-md-12 dk-header dokin\" ng-controller=\"DokinheaderCtrl\">\n" +
    "    <div class=\"pull-left\">\n" +
    "        <h3><img src=\"assets/dokin/images/dokinlogo.png\" alt=\"\"/> <strong>Dokin</strong></h3>\n" +
    "    </div>\n" +
    "    <div class=\"pull-right\">\n" +
    "        <h3>¡Welcome Dear!</h3>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);
})();

(function(module) {
try { module = angular.module("templates"); }
catch(err) { module = angular.module("templates", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("modules/dokin/partial/dokinhistory/dokinhistory.html",
    "<div class=\"ac_variable\">\n" +
    "    <div class=\"col-md-12 nopad dokinvisitor dokin dokinhistory\" ng-controller=\"DokinhistoryCtrl\">\n" +
    "        <div class=\"panel panel-default\">\n" +
    "            <!-- Default panel contents -->\n" +
    "            <div class=\"panel-heading\">\n" +
    "                <form class=\"form-inline\">\n" +
    "                    <div class=\"form-group\">\n" +
    "                        <input type=\"text\" class=\"form-control\" placeholder=\"Buscar\">\n" +
    "                    </div>\n" +
    "                </form>\n" +
    "            </div>\n" +
    "            <!-- Table -->\n" +
    "            <table class=\"table\">\n" +
    "                <thead>\n" +
    "                    <tr>\n" +
    "                        <th>Nombre</th>\n" +
    "                        <th>Agente</th>\n" +
    "                        <th>Raiting</th>\n" +
    "                        <th>Fecha</th>\n" +
    "                        <th>Ultimo Mensaje</th>\n" +
    "                    </tr>\n" +
    "                </thead>\n" +
    "            </table>\n" +
    "            <!-- Table -->\n" +
    "            <table class=\"table\">\n" +
    "                <tbody>\n" +
    "                    <tr ng-repeat=\"visitor in History.list\" ng-click=\"History.openChat(visitor)\">\n" +
    "                        <th>#{{visitor.id.toString()}}</th>\n" +
    "                        <th>true</th>\n" +
    "                        <th>#{{visitor.viewing}}</th>\n" +
    "                        <th>#{{visitor.historial}}</th>\n" +
    "                        <th>\n" +
    "                            <p class=\"bubble\">\n" +
    "                                {{visitor.lastMessage}}\n" +
    "                            </p>\n" +
    "                        </th>\n" +
    "                    </tr>\n" +
    "                </tbody>\n" +
    "            </table>\n" +
    "            <div class=\"more-chat col-md-8\" ng-if=\"History.open_chat\">\n" +
    "                <div class=\"head\">\n" +
    "                    <div class=\"btn-group btn-group-chat\" role=\"group\">\n" +
    "                        <button type=\"button\" class=\"btn btn-default\">User Info</button>\n" +
    "                        <button type=\"button\" class=\"btn btn-default\">Chat</button>\n" +
    "                    </div>\n" +
    "                    <div class=\"pull-right\">\n" +
    "                        <i class=\"fa fa-times-circle-o fa-2x\" ng-click=\"History.closeInfo()\"></i>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div>\n" +
    "                    <div>\n" +
    "                        <div class=\"conversation\">\n" +
    "                            <div ng-repeat=\"con in History.actual_chat.thread\" class=\"conv\">\n" +
    "                                <div class=\"user\" ng-if=\"History.actual_chat.thread[$index-1].user.firstName!=con.user.firstName\">\n" +
    "                                    <p ng-bind=\"con.user.firstName||'Anonimo'\"></p>\n" +
    "                                </div>\n" +
    "                                <div class=\"message\" ng-bind=\"con.text\"></div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);
})();

(function(module) {
try { module = angular.module("templates"); }
catch(err) { module = angular.module("templates", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("modules/dokin/partial/dokinhome/dokinhome.html",
    "<div class=\"ac_variable \" ng-controller=\"DokinhomeCtrl\">\n" +
    "    <div class=\"col-md-12 dokinhome\">\n" +
    "        <div class=\"greetings\">\n" +
    "            <i class=\"fa fa-glass icon-greet\"></i><span>¡Bienvenido a tu Dashboard!</span>\n" +
    "        </div>\n" +
    "        <div class=\"intro\">\n" +
    "            Conecta con sus visitante tan solo con un chat\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"col-md-9\">\n" +
    "            <div>\n" +
    "                <div class=\"items-list\">\n" +
    "                    <div class=\"group\">\n" +
    "                        <div class=\"item\">\n" +
    "                            <i class=\"fa fa-home\"></i> Home\n" +
    "                        </div>\n" +
    "                        <div class=\"item\">\n" +
    "                            <i class=\"fa fa-share\"></i> Visualización\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"group\">\n" +
    "                        <div class=\"item\">\n" +
    "                            <i class=\"fa fa-users\"></i> Lista de visitantes\n" +
    "                        </div>\n" +
    "                        <div class=\"item\">\n" +
    "                            <i class=\"fa fa-truck\"></i> Disparadores\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"btn-group right-select\" role=\"group\" aria-label=\"...\">\n" +
    "                <button type=\"button\" class=\"btn btn-default\">Horas</button>\n" +
    "                <button type=\"button\" class=\"btn btn-default\">Días</button>\n" +
    "                <button type=\"button\" class=\"btn btn-default\">Semanal</button>\n" +
    "                <button type=\"button\" class=\"btn btn-default\">Mensual</button>\n" +
    "            </div>\n" +
    "            <div >\n" +
    "                <div id=\"line_top_x\"></div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"col-md-3 section2\">\n" +
    "            <div class=\"news\">\n" +
    "                <div class=\"head\">\n" +
    "                    <i class=\"fa fa-newspaper-o\"></i><span>Novedades</span>\n" +
    "                </div>\n" +
    "                <div class=\"list\">\n" +
    "\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "</div>\n" +
    "");
}]);
})();

(function(module) {
try { module = angular.module("templates"); }
catch(err) { module = angular.module("templates", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("modules/dokin/partial/dokinpanel/dokinpanel.html",
    "<div class=\"dk-panel dokin\" ng-controller=\"DokinpanelCtrl\">\n" +
    "    <div>\n" +
    "        <br/>\n" +
    "        <br/>\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-lg-4\">\n" +
    "                <div class=\"logo\">\n" +
    "                    <img src=\"assets/dokin/images/kodevian.png\" alt=\"\"/>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"col-lg-8\">\n" +
    "                <!-- Single button -->\n" +
    "                <div class=\"btn-group status\" dropdown is-open=\"status.isopen\">\n" +
    "                    <button type=\"button\" class=\"btn btn-inverse dropdown-toggle\" dropdown-toggle ng-disabled=\"disabled\">\n" +
    "                        Estatus <span class=\"caret\"></span>\n" +
    "                    </button>\n" +
    "                    <ul class=\"dropdown-menu\" role=\"menu\">\n" +
    "                        <li><a href=\"#\"><i class=\"fa fa-circle online\"></i> Online</a></li>\n" +
    "                        <li><a href=\"#\"><i class=\"fa fa-circle away\"></i> Away</a></li>\n" +
    "                        <li><a href=\"#\"><i class=\"fa fa-circle invis\"></i> Invisible</a></li>\n" +
    "                        <li><a href=\"#\" ng-click=\"Panel.logout()\"><i class=\"fa fa-circle invis\"></i> Cerrar session</a></li>\n" +
    "                    </ul>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <br/>\n" +
    "        <br/>\n" +
    "        <div>\n" +
    "            <ul class=\"list-group\">\n" +
    "                <li class=\"list-group-item\" ui-sref-active=\"active\" ui-sref=\"dokin.home\"><i class=\"fa fa-home\"></i> Inicio</li>\n" +
    "                <li class=\"list-group-item\" ui-sref-active=\"active\" ui-sref=\"dokin.visitor\"><i class=\"fa fa-user\"></i> Lista de Visitantes</li>\n" +
    "                <li class=\"list-group-item\" ui-sref-active=\"active\" ui-sref=\"dokin.history\" ><i class=\"fa fa-clock-o\"></i> Historial</li>\n" +
    "                <li class=\"list-group-item\" ui-sref-active=\"active\" ui-sref=\"dokin.analytics\"><i class=\"fa fa-pie-chart\"></i> Analitycs</li>\n" +
    "                <!--<li class=\"list-group-item\" ui-sref-active=\"active\" ui-sref=\"dokin.benefits\"><i class=\"fa fa-trophy\"></i> Beneficios</li>-->\n" +
    "            </ul>\n" +
    "        </div>\n" +
    "        <div class=\"sublist\">\n" +
    "            <div class=\"panel-heading\"><i class=\"fa fa-cog\"></i> Configuracion</div>\n" +
    "            <ul class=\"list-group\">\n" +
    "                <li class=\"list-group-item\" ui-sref-active=\"active\" ui-sref=\"dokin.account\">Mi Cuenta</li>\n" +
    "                <li class=\"list-group-item\" ui-sref-active=\"active\" ui-sref=\"dokin.agent\">Agentes</li>\n" +
    "                <!--<li class=\"list-group-item\">Departamentos</li>-->\n" +
    "                <!--<li class=\"list-group-item\" ui-sref-active=\"active\" ui-sref=\"dokin.sub\"> Subscripcion</li>-->\n" +
    "            </ul>\n" +
    "        </div>\n" +
    "        <div class=\"sublist\">\n" +
    "            <div class=\"panel-heading\"><i class=\"fa fa-weixin\"></i>Dokin</div>\n" +
    "            <ul class=\"list-group\">\n" +
    "                <li class=\"list-group-item\" ui-sref-active=\"active\" ui-sref=\"dokin.widget\">Widget</li>\n" +
    "                <!--<li class=\"list-group-item\">Trigers</li>-->\n" +
    "            </ul>\n" +
    "        </div>\n" +
    "        <div class=\"sublist\">\n" +
    "            <div class=\"panel-heading\"><i class=\"fa fa-users\"></i>Agentes Online</div>\n" +
    "            <ul class=\"list-group\">\n" +
    "            </ul>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);
})();

(function(module) {
try { module = angular.module("templates"); }
catch(err) { module = angular.module("templates", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("modules/dokin/partial/dokinsignin/dokinsignin.html",
    "<div class=\"col-md-12 dokin-signin\" ng-controller=\"DokinsigninCtrl\">\n" +
    "    <div class=\"wrapper\">\n" +
    "        <form class=\"form-signin\" novalidate=\"\" name=\"form\">\n" +
    "            <h2 class=\"form-signin-heading\">Ingresar</h2>\n" +
    "            <input type=\"email\" class=\"form-control\" name=\"email\" placeholder=\"Ingrese su correo\" ng-model=\"user.email\" required autofocus=\"\" />\n" +
    "            <div ng-show=\"form.$submitted\" class=\"alert-error\">\n" +
    "                <span ng-show=\"form.email.$error.required\">Escriba su correo por favor.</span>\n" +
    "                <span ng-show=\"form.email.$error.email\">El email ingresado no es correcto.</span>\n" +
    "            </div>\n" +
    "            <input type=\"password\" class=\"form-control\" name=\"password\" placeholder=\"Ingrese su contraseña\" ng-model=\"user.password\" required/>\n" +
    "            <div ng-show=\"form.$submitted\" class=\"alert-error\">\n" +
    "                <span ng-show=\"form.password.$error.required\">Escriba su contraseña.</span>\n" +
    "            </div>\n" +
    "            <div class=\"\" ng-if=\"error\">\n" +
    "                <span class=\"alert-error\">\n" +
    "                {{error.message}}\n" +
    "              </span>\n" +
    "            </div>\n" +
    "            <!-- <label class=\"checkbox\">\n" +
    "                <input type=\"checkbox\" value=\"remember-me\" id=\"rememberMe\" name=\"rememberMe\"> Remember me\n" +
    "            </label> -->\n" +
    "            <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\" ng-click=\"SignIn.signIn(user,form)\">Login</button>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);
})();

(function(module) {
try { module = angular.module("templates"); }
catch(err) { module = angular.module("templates", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("modules/dokin/partial/dokinsignup/dokinsignup.html",
    "<div class=\"landing\" ng-controller=\"DokinsignupCtrl\">\n" +
    "\n" +
    "    <div class=\"container\">\n" +
    "        <div class=\"row\">\n" +
    "            <nav class=\"navheader col-md-12\">\n" +
    "                <ul>\n" +
    "                    <li><a href=\"\">PRODUCTO</a></li>\n" +
    "                    <li><a href=\"\">PRECIOS</a></li>\n" +
    "                    <li><img src=\"assets/dokin/images/dokinlogo.png\" alt=\"\"/></li>\n" +
    "                    <li><a href=\"\">SOPORTE</a></li>\n" +
    "                    <li><a href=\"\" class=\"btn btn-test\">Pruebalo Gratis Hoy</a></li>\n" +
    "                </ul>\n" +
    "            </nav>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"dokin-bg\">\n" +
    "        <div class=\"container\">\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"texts\">\n" +
    "                    <h2>Haga mas efectiva la comunicación entre su empresa y su cliente</h2>\n" +
    "                    <p>Construya una significativa relacion con vuestros clientes, incremente sus ventas utilizando un chat interactivo y amigable, provea un servicio\n" +
    "                    personalizado.\n" +
    "                    </p>\n" +
    "                    <a href=\"\" class=\"btn btn-test promo\">PRUÉBALO GRATIS</a>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"dokin-bg2\">\n" +
    "        <div class=\"container\">\n" +
    "            <div class=\"col-md-3 center\">\n" +
    "                <img src=\"assets/dokin/images/clock.png\" class=\"clock\" alt=\"\"/>\n" +
    "            </div>\n" +
    "            <div class=\"col-md-9 desc\">\n" +
    "                <h3>Efectividad y Operatividad las 24 horas al día, 7 días a la semana.</h3>\n" +
    "                <p>Lorem ipsum domunas Lorem ipsum domunasLorem ipsum domunasLorem ipsum domunasLorem ipsum domunasLorem ipsum domunasLorem ipsum domunas</p>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"dokin-bg3\">\n" +
    "        <div class=\"container\">\n" +
    "            <div>\n" +
    "                <h3 class=\"title\">Planes sumamente económicos</h3>\n" +
    "                <h3 class=\"title\">Elige el que se adapte a tus necesidades</h3>\n" +
    "            </div>\n" +
    "            <div class=\"col-md-4\">\n" +
    "                <div class=\"box-plan\">\n" +
    "                    <div>\n" +
    "                        <div>\n" +
    "                            <h3>GRATIS</h3>\n" +
    "                        </div>\n" +
    "                        <div>\n" +
    "                            <div class=\"price\">$0</div>\n" +
    "                            <div class=\"subprice\">Por mes</div>\n" +
    "                        </div>\n" +
    "                        <div class=\"anual\">Facturado mensualmente</div>\n" +
    "                        <div class=\"centerbtns\">\n" +
    "                            <a href=\"\" class=\"btn test\">PRUEBALO</a>\n" +
    "                            <a href=\"\" class=\"btn  buy\">COMPRALO</a>\n" +
    "                        </div>\n" +
    "                        <div class=\"add-on\">\n" +
    "                            <ul>\n" +
    "                                <li>\n" +
    "                                    2 Agentes\n" +
    "                                </li>\n" +
    "                                <li>\n" +
    "                                    10 días de historial de Usuarios.\n" +
    "                                </li>\n" +
    "                                <li>\n" +
    "                                    Analítica Basica\n" +
    "                                </li>\n" +
    "                                <!--<li>-->\n" +
    "                                    <!--Customización del widget-->\n" +
    "                                <!--</li>-->\n" +
    "                                <li>\n" +
    "                                    Asistencia en la instalación\n" +
    "                                </li>\n" +
    "                            </ul>\n" +
    "\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"col-md-4\">\n" +
    "                <div class=\"box-plan\">\n" +
    "                    <div>\n" +
    "                        <div>\n" +
    "                            <h3>BÁSICO</h3>\n" +
    "                        </div>\n" +
    "                        <div>\n" +
    "                            <div class=\"price\">$10</div>\n" +
    "                            <div class=\"subprice\">Por mes</div>\n" +
    "                        </div>\n" +
    "                        <div class=\"anual\">Facturado mensualmente</div>\n" +
    "                        <div class=\"centerbtns\">\n" +
    "                            <a href=\"\" class=\"btn test\">PRUEBALO</a>\n" +
    "                            <a href=\"\" class=\"btn  buy\">COMPRALO</a>\n" +
    "                        </div>\n" +
    "                        <div class=\"add-on\">\n" +
    "                            <ul>\n" +
    "                                <li>\n" +
    "                                    10 Agentes\n" +
    "                                </li>\n" +
    "                                <!--<li>-->\n" +
    "                                    <!--Creacion de Departamentos-->\n" +
    "                                <!--</li>-->\n" +
    "                                <li>\n" +
    "                                    Multiples chats concurrentes\n" +
    "                                </li>\n" +
    "                                <li>\n" +
    "                                    Historial de Usuarios.\n" +
    "                                </li>\n" +
    "                                <li>\n" +
    "                                    Analítica Completa\n" +
    "                                </li>\n" +
    "                                <li>\n" +
    "                                    Customización del widget\n" +
    "                                </li>\n" +
    "                                <li>\n" +
    "                                    Asistencia en la instalación\n" +
    "                                </li>\n" +
    "                            </ul>\n" +
    "\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"col-md-4\">\n" +
    "                <div class=\"box-plan\">\n" +
    "                    <div>\n" +
    "                        <div>\n" +
    "                            <h3>PREMIUM</h3>\n" +
    "                        </div>\n" +
    "                        <div>\n" +
    "                            <div class=\"price\">$50</div>\n" +
    "                            <div class=\"subprice\">Por mes</div>\n" +
    "                        </div>\n" +
    "                        <div class=\"anual\">Facturado mensualmente</div>\n" +
    "                        <div class=\"centerbtns\">\n" +
    "                            <a href=\"\" class=\"btn test\">PRUEBALO</a>\n" +
    "                            <a href=\"\" class=\"btn  buy\">COMPRALO</a>\n" +
    "                        </div>\n" +
    "                        <div class=\"add-on\">\n" +
    "\n" +
    "                                <ul>\n" +
    "                                    <li>\n" +
    "                                        Agentes\n" +
    "                                    </li>\n" +
    "                                    <!--<li>-->\n" +
    "                                    <!--Creacion de Departamentos-->\n" +
    "                                    <!--</li>-->\n" +
    "                                    <li>\n" +
    "                                        Multiples chats concurrentes\n" +
    "                                    </li>\n" +
    "                                    <li>\n" +
    "                                        Historial de Usuarios.\n" +
    "                                    </li>\n" +
    "                                    <li>\n" +
    "                                        Analítica Completa\n" +
    "                                    </li>\n" +
    "                                    <li>\n" +
    "                                        Customización del widget\n" +
    "                                    </li>\n" +
    "                                    <li>\n" +
    "                                        Asistencia en la instalación\n" +
    "                                    </li>\n" +
    "                                    <li>\n" +
    "                                        Manejo de una alta taza de usuarios concurrentes\n" +
    "                                    </li>\n" +
    "                                </ul>\n" +
    "\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"container\">\n" +
    "        <div id=\"realContent\" class=\"col-xs-12\">\n" +
    "            <div class=\"row\">\n" +
    "                <section class=\"col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 col-xs-12 col-sm-offset-0\">\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"col-sm-4 col-xs-4 col-sm-offset-4\">\n" +
    "                            <div class=\"row\">\n" +
    "                                <div class=\"col-xs-12\">\n" +
    "\n" +
    "                                    <form id=\"signupForm\" accept-charset=\"UTF-8\">\n" +
    "                                        <div class=\"input-group\">\n" +
    "                                            <span class=\"input-group-addon\"><i class=\"icon-envelope icon-2x\"></i></span>\n" +
    "                                            <input type=\"text\" class=\"form-control\" name=\"firstName\"\n" +
    "                                                   placeholder=\"Nombre\" ng-model=\"user.firstName\" required=\"\"\n" +
    "                                                   autofocus=\"\"/>\n" +
    "                                        </div>\n" +
    "                                        <div class=\"input-group\">\n" +
    "                                            <span class=\"input-group-addon\"><i class=\"icon-envelope icon-2x\"></i></span>\n" +
    "                                            <input type=\"text\" class=\"form-control\" name=\"lastName\"\n" +
    "                                                   placeholder=\"Apellidos\" ng-model=\"user.lastName\" required=\"\"\n" +
    "                                                   autofocus=\"\"/>\n" +
    "                                        </div>\n" +
    "                                        <div class=\"input-group\">\n" +
    "                                            <span class=\"input-group-addon\"><i class=\"icon-envelope icon-2x\"></i></span>\n" +
    "                                            <input id=\"email\" ng-model=\"user.email\" class=\"form-control input-lg\"\n" +
    "                                                   placeholder=\"Email\" required=\"required\" maxlength=\"100\" type=\"text\"\n" +
    "                                                   name=\"email\" value=\"\">\n" +
    "                                        </div>\n" +
    "                                        <div class=\"input-group\">\n" +
    "                                            <span class=\"input-group-addon\"><i class=\"icon-asterisk icon-2x\"></i></span>\n" +
    "                                            <input id=\"password\" ng-model=\"user.password\" class=\"form-control input-lg\"\n" +
    "                                                   placeholder=\"Password\" required=\"required\" maxlength=\"60\"\n" +
    "                                                   type=\"password\" name=\"password\">\n" +
    "                                        </div>\n" +
    "                                        <div class=\"input-group\">\n" +
    "                                            <span class=\"input-group-addon\"><i class=\"icon-asterisk icon-2x\"></i></span>\n" +
    "                                            <input id=\"password_confirmation\" ng-model=\"password\"\n" +
    "                                                   class=\"form-control input-lg\" placeholder=\"Confirm Password\"\n" +
    "                                                   required=\"required\" maxlength=\"60\" type=\"password\"\n" +
    "                                                   name=\"password_confirmation\">\n" +
    "                                        </div>\n" +
    "                                        <div ng-if=\"password!=user.password\">\n" +
    "                                            Las contraseñas no coinciden\n" +
    "                                        </div>\n" +
    "                                        <div class=\"form-group\">\n" +
    "                                            <button type=\"submit\" id=\"btn-signup\"\n" +
    "                                                    class=\"btn btn-block btn-primary btn-lg\"\n" +
    "                                                    ng-click=\"dkSignup.signup(user)\">Registrar\n" +
    "                                            </button>\n" +
    "                                        </div>\n" +
    "                                    </form>\n" +
    "                                    <div class=\"form-group\">\n" +
    "                                        <div class=\"topCushion\">Already a member? <a href=\"#login\">Login</a></div>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"form-group\">\n" +
    "                                        <p>By clicking on \"Sign Up\", you agree to the <a href=\"#terms-of-service\"\n" +
    "                                                                                         target=\"_blank\">Terms of\n" +
    "                                            Service</a> and the <a href=\"#privacy\" target=\"_blank\">Privacy Policy</a>.\n" +
    "                                        </p>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                                <!-- end of column -->\n" +
    "                            </div>\n" +
    "                            <!-- end of row -->\n" +
    "                        </div>\n" +
    "                        <!-- end of column 2 -->\n" +
    "                    </div>\n" +
    "                    <!-- end of well row -->\n" +
    "                </section>\n" +
    "            </div>\n" +
    "            <!-- end of row -->\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<script>\n" +
    "    window.dkoAsyncInit = function ($dko) {\n" +
    "        $dko.init({\n" +
    "            appId: 'ba267fc0-78e7-4787-9086-f75a227f6bc5',\n" +
    "            version: 'v1.0'\n" +
    "        });\n" +
    "    };\n" +
    "    (function (d, s, id) {\n" +
    "        var js, fjs = d.getElementsByTagName(s)[0];\n" +
    "        if (d.getElementById(id)) {\n" +
    "            window.dkoReset();\n" +
    "            return;\n" +
    "        }\n" +
    "        js = d.createElement(s);\n" +
    "        js.id = id;\n" +
    "        js.src = \"//localhost:8080/js/index.js\";\n" +
    "        fjs.parentNode.insertBefore(js, fjs);\n" +
    "    }(document, 'script', 'dko-jssdk'));\n" +
    "</script>\n" +
    "\n" +
    "");
}]);
})();

(function(module) {
try { module = angular.module("templates"); }
catch(err) { module = angular.module("templates", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("modules/dokin/partial/dokinsub/dokinsub.html",
    "<div class=\"col-md-12\" ng-controller=\"DokinsubCtrl\">\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-sm-6 col-md-4\">\n" +
    "            <div class=\"thumbnail\">\n" +
    "                <img src=\"...\" alt=\"...\">\n" +
    "                <div class=\"caption\">\n" +
    "                    <h3>Thumbnail label</h3>\n" +
    "                    <p>...</p>\n" +
    "                    <p><a href=\"#\" class=\"btn btn-primary\" role=\"button\">Button</a> <a href=\"#\" class=\"btn btn-default\" role=\"button\">Button</a></p>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);
})();

(function(module) {
try { module = angular.module("templates"); }
catch(err) { module = angular.module("templates", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("modules/dokin/partial/dokinvisitor/dokinvisitor.html",
    "<div class=\"ac_variable\" ng-controller=\"DokinvisitorCtrl\">\n" +
    "    <div class=\"col-md-12 nopad dokinvisitor dokin\">\n" +
    "\n" +
    "        <div class=\"panel panel-default\">\n" +
    "            <!-- Default panel contents -->\n" +
    "            <div class=\"panel-heading\">\n" +
    "                <form class=\"form-inline\">\n" +
    "                    <div class=\"form-group\">\n" +
    "                        <input type=\"text\" class=\"form-control\" placeholder=\"Buscar\">\n" +
    "                    </div>\n" +
    "                </form>\n" +
    "            </div>\n" +
    "            <!-- Table -->\n" +
    "            <table class=\"table\">\n" +
    "                <thead>\n" +
    "                <tr>\n" +
    "                    <th>Visitante</th>\n" +
    "                    <th>Online</th>\n" +
    "                    <th>Viendo</th>\n" +
    "                    <th>Referido</th>\n" +
    "                    <th>Visitas</th>\n" +
    "                </tr>\n" +
    "                </thead>\n" +
    "            </table>\n" +
    "            <!-- Table -->\n" +
    "            <div class=\"filter\"><i class=\"fa fa-filter\"></i> Activos</div>\n" +
    "            <table class=\"table\">\n" +
    "                <tbody>\n" +
    "                <tr ng-repeat=\"visitor in Visitor.list\" ng-click=\"Visitor.openChat(visitor)\">\n" +
    "                    <th>#{{visitor.id.toString()}}</th>\n" +
    "                    <th>true</th>\n" +
    "                    <th>#{{visitor.viewing}}</th>\n" +
    "                    <th>#{{visitor.historial}}</th>\n" +
    "                    <th>#{{visitor.visits}}</th>\n" +
    "                </tr>\n" +
    "                </tbody>\n" +
    "            </table>\n" +
    "        </div>\n" +
    "        <div class=\"minimized-chat\">\n" +
    "            <div ng-repeat=\"min in Visitor.minimized track by $index\" class=\"chat\">\n" +
    "                <div ng-click=\"Visitor.openChat(min)\"><a href=\"\" >{{min.id}}</a></div>\n" +
    "                <i class=\"fa fa-times\" ng-click=\"Visitor.alertClose(min,$index)\"></i>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);
})();

(function(module) {
try { module = angular.module("templates"); }
catch(err) { module = angular.module("templates", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("modules/dokin/partial/dokinwidget/dokinwidget.html",
    "<div class=\"ac_variable\" ng-controller=\"DokinwidgetCtrl\">\n" +
    "    <div class=\"col-md-12 dokinwidget dokin dokinaccount\">\n" +
    "\n" +
    "        <div class=\"col-md-6\">\n" +
    "            <div>\n" +
    "                <div class=\"btn-group head\" role=\"group\" aria-label=\"...\">\n" +
    "                    <button type=\"button\" class=\"btn btn-default\" ng-click=\"tab='code'\" ng-init=\"tab='code'\">Comienza</button>\n" +
    "                    <button type=\"button\" class=\"btn btn-default\" ng-click=\"tab='appearance'\">Apariencia</button>\n" +
    "                    <button type=\"button\" class=\"btn btn-default\" ng-click=\"tab='other'\">Otros</button>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div>\n" +
    "                <hr/>\n" +
    "            </div>\n" +
    "            <div ng-switch=\"tab\">\n" +
    "                <div class=\"col-md-12\" ng-show=\"tab=='code'\">\n" +
    "                    <h5>Inserte el live Chat widget dentro de su sitio</h5>\n" +
    "                    <p>\n" +
    "                        Copie y pegue el siguiente script en el codigo fuente de su sitio web entre los tags <strong>&lt;head&gt; &lt;/head&gt;</strong>\n" +
    "                    </p>\n" +
    "                    <textarea name=\"\" id=\"code\" cols=\"30\"  rows=\"10\" ></textarea>\n" +
    "                </div>\n" +
    "                <div class=\"col-md-6\" ng-show=\"tab=='appearance'\">\n" +
    "                    <form>\n" +
    "                        <div class=\"wgroup\">\n" +
    "                            <h4>1.- Ventana de Chat</h4>\n" +
    "                            <div class=\"form-group\">\n" +
    "                                <label for=\"exampleInputEmail1\">Titulo de cabecera</label>\n" +
    "                                <input type=\"text\" class=\"form-control\" id=\"exampleInputEmail1\"\n" +
    "                                       placeholder=\"Titulo de Cabecera\">\n" +
    "                            </div>\n" +
    "                            <div class=\"form-group\">\n" +
    "                                <label for=\"themecolor\">Color del Tema</label>\n" +
    "                                <input colorpicker class=\"form-control\" id=\"themecolor\" placeholder=\"Color del Tema\" colorpicker-with-input=\"true\" type=\"text\" ng-model=\"your_model\" />\n" +
    "                            </div>\n" +
    "                            <div class=\"form-group\">\n" +
    "                                <label for=\"themecolor\">Posición del widget</label>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"wgroup\">\n" +
    "                            <h4>2.- Burbuja de Chat</h4>\n" +
    "\n" +
    "                            <div class=\"form-group\">\n" +
    "                                <label for=\"bb_bg_color\">Color de Fondo</label>\n" +
    "                                <input type=\"text\" class=\"form-control\" id=\"bb_bg_color\" placeholder=\"Color de fondo\">\n" +
    "                            </div>\n" +
    "                            <div class=\"form-group\">\n" +
    "                                <label for=\"bb_title\">Titulo</label>\n" +
    "                                <input type=\"text\" class=\"form-control\" id=\"bb_title\" placeholder=\"Titulo\">\n" +
    "                            </div>\n" +
    "                            <div class=\"form-group\">\n" +
    "                                <label for=\"bb_text\">Texto</label>\n" +
    "                                <input type=\"text\" class=\"form-control\" id=\"bb_text\" placeholder=\"Texto\">\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"wgroup\">\n" +
    "                            <h4>3.- Mensajes</h4>\n" +
    "\n" +
    "                            <div class=\"form-group\">\n" +
    "                                <label for=\"online_message\">Online</label>\n" +
    "                                <input type=\"text\" class=\"form-control\" id=\"online_message\" placeholder=\"online\">\n" +
    "                            </div>\n" +
    "                            <div class=\"form-group\">\n" +
    "                                <label for=\"offline_message\">Online</label>\n" +
    "                                <input type=\"text\" class=\"form-control\" id=\"offline_message\" placeholder=\"offline\">\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </form>\n" +
    "                </div>\n" +
    "                <div class=\"col-md-6\" ng-show=\"tab=='other'\">\n" +
    "                    <form>\n" +
    "                        <div class=\"wgroup\">\n" +
    "                            <h4>1.- Ventana de Chat</h4>\n" +
    "                            <div class=\"form-group\">\n" +
    "                                <label for=\"exampleInputEmail1\">Titulo de cabecera</label>\n" +
    "                                <input type=\"text\" class=\"form-control\" id=\"exampleInputEmail1\"\n" +
    "                                       placeholder=\"Titulo de Cabecera\">\n" +
    "                            </div>\n" +
    "                            <div class=\"form-group\">\n" +
    "                                <label for=\"themecolor\">Color del Tema</label>\n" +
    "                                <input colorpicker class=\"form-control\" id=\"themecolor\" placeholder=\"Color del Tema\" colorpicker-with-input=\"true\" type=\"text\" ng-model=\"your_model\" />\n" +
    "                            </div>\n" +
    "                            <div class=\"form-group\">\n" +
    "                                <label for=\"themecolor\">Posición del widget</label>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"wgroup\">\n" +
    "                            <h4>2.- Burbuja de Chat</h4>\n" +
    "\n" +
    "                            <div class=\"form-group\">\n" +
    "                                <label for=\"bb_bg_color\">Color de Fondo</label>\n" +
    "                                <input type=\"text\" class=\"form-control\" id=\"bb_bg_color\" placeholder=\"Color de fondo\">\n" +
    "                            </div>\n" +
    "                            <div class=\"form-group\">\n" +
    "                                <label for=\"bb_title\">Titulo</label>\n" +
    "                                <input type=\"text\" class=\"form-control\" id=\"bb_title\" placeholder=\"Titulo\">\n" +
    "                            </div>\n" +
    "                            <div class=\"form-group\">\n" +
    "                                <label for=\"bb_text\">Texto</label>\n" +
    "                                <input type=\"text\" class=\"form-control\" id=\"bb_text\" placeholder=\"Texto\">\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"wgroup\">\n" +
    "                            <h4>3.- Mensajes</h4>\n" +
    "\n" +
    "                            <div class=\"form-group\">\n" +
    "                                <label for=\"online_message\">Online</label>\n" +
    "                                <input type=\"text\" class=\"form-control\" id=\"online_message\" placeholder=\"online\">\n" +
    "                            </div>\n" +
    "                            <div class=\"form-group\">\n" +
    "                                <label for=\"offline_message\">Online</label>\n" +
    "                                <input type=\"text\" class=\"form-control\" id=\"offline_message\" placeholder=\"offline\">\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </form>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"col-md-6 relative\">\n" +
    "            <div class=\"wrap-widget\">\n" +
    "                <div id=\"dokin-widget\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);
})();

(function(module) {
try { module = angular.module("templates"); }
catch(err) { module = angular.module("templates", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("modules/dokin/partial/landing/landing.html",
    "<div class=\"col-md-12\" ng-controller=\"LandingCtrl\">\n" +
    "\n" +
    "\n" +
    "</div>\n" +
    "");
}]);
})();

(function(module) {
try { module = angular.module("templates"); }
catch(err) { module = angular.module("templates", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("modules/fbApps/modals/deleteFbapp/deleteFbapp.html",
    "<div>\n" +
    "	<div class=\"modal-header\">\n" +
    "		<button type=\"button\" class=\"close pull-right\" ng-click=\"$dismiss()\" aria-hidden=\"true\">&times;</button>\n" +
    "		<h4 class=\"modal-title\">Modal title</h4>\n" +
    "	</div>\n" +
    "	<div class=\"modal-body\">\n" +
    "		<p>Confirma que desea eliminar la aplicacion?</p>\n" +
    "	</div>\n" +
    "	<div class=\"modal-footer\">\n" +
    "		<button class=\"btn btn-default\" ng-click=\"$dismiss()\">Cancel</button>\n" +
    "		<button type=\"button\" class=\"btn btn-primary\" ng-click=\"mdFbapp.confirm()\">Eliminar</button>\n" +
    "	</div>\n" +
    "</div>\n" +
    "");
}]);
})();

(function(module) {
try { module = angular.module("templates"); }
catch(err) { module = angular.module("templates", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("modules/fbApps/partial/fbapp/fbapp.html",
    "<div class=\"col-md-12 appiframe\" ng-controller=\"FbappCtrl\">\n" +
    "    <div class=\"col-md-9\">\n" +
    "        <iframe id=\"myiframe\" ng-src='{{Fbapp.trustSrc(Fbapp.iframe)}}' frameborder=\"0\"></iframe>\n" +
    "    </div>\n" +
    "    <div class=\"col-md-3\">\n" +
    "        <a href=\"\" class=\"label label-success\">App detalle:</a>\n" +
    "        <pre>{{Fbapp.appshow}}</pre>\n" +
    "        <br/>\n" +
    "        <br/>\n" +
    "        <a href=\"\" class=\"btn btn-primary\" ng-click=\"Fbapp.tab()\">Configurar Tab</a>\n" +
    "        <br/>\n" +
    "        <br/>\n" +
    "        <a href=\"\" class=\"btn btn-danger\" ng-click=\"Fbapp.deleteTab()\">Eliminar</a>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);
})();

(function(module) {
try { module = angular.module("templates"); }
catch(err) { module = angular.module("templates", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("modules/fbApps/partial/fbapplist/fbapplist.html",
    "<div class=\"col-md-12 fbappslist\" ng-controller=\"FbapplistCtrl\">\n" +
    "    <div class=\"fbapp create\" ui-sref=\"fbcreator\">\n" +
    "        <a href=\"\" ><img src=\"assets/images/fbapp.png\" alt=\"\"/> <span>Crear Nuevo</span></a>\n" +
    "    </div>\n" +
    "    <div class=\"fbapp\" ng-repeat=\"fbapp in Fbapplist.list\" ng-click=\"Fbapplist.Goapp(fbapp)\">\n" +
    "        <div>\n" +
    "            <img src=\"assets/images/fbapp.png\" alt=\"\"/> <span>{{fbapp.name}}</span>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);
})();

(function(module) {
try { module = angular.module("templates"); }
catch(err) { module = angular.module("templates", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("modules/fbApps/partial/fbcreator/fbcreator.html",
    "<div class=\"col-md-12\" ng-controller=\"FbcreatorCtrl\">\n" +
    "    <form class=\"creator\">\n" +
    "        <div class=\"form-group\">\n" +
    "            <label for=\"name\">Nombre</label>\n" +
    "            <input type=\"string\" class=\"form-control\" id=\"name\" ng-model=\"fbapp.name\" placeholder=\"Nombre\">\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "            <label for=\"app_id\">app_id</label>\n" +
    "            <input type=\"string\" class=\"form-control\" id=\"app_id\" ng-model=\"fbapp.app_id\" placeholder=\"App id\">\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "            <label for=\"description\">App .zip</label>\n" +
    "            <input type=\"file\" id=\"description\" ng-model=\"fbapp.file\" ng-file-select/>\n" +
    "        </div>\n" +
    "        <button type=\"submit\" class=\"btn btn-primary\" ng-click=\"FbApps.Create(fbapp)\">Subir</button>\n" +
    "    </form>\n" +
    "</div>\n" +
    "");
}]);
})();

(function(module) {
try { module = angular.module("templates"); }
catch(err) { module = angular.module("templates", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("modules/kourier/partial/kouriercampaign/kouriercampaign.html",
    "<div class=\"col-md-12\" ng-controller=\"KouriercampaignCtrl\">\n" +
    "\n" +
    "\n" +
    "</div>\n" +
    "");
}]);
})();

(function(module) {
try { module = angular.module("templates"); }
catch(err) { module = angular.module("templates", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("modules/kourier/partial/kourierhome/kourierhome.html",
    "<div class=\"col-md-12\" ng-controller=\"KourierhomeCtrl\">\n" +
    "\n" +
    "\n" +
    "</div>\n" +
    "");
}]);
})();

(function(module) {
try { module = angular.module("templates"); }
catch(err) { module = angular.module("templates", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("modules/kourier/partial/kouriermlist/kouriermlist.html",
    "<div class=\"col-md-12\" ng-controller=\"KouriermlistCtrl\">\n" +
    "    <form>\n" +
    "        <div class=\"form-group\">\n" +
    "            <label for=\"exampleInputEmail1\">Nombre</label>\n" +
    "            <input type=\"text\" class=\"form-control\" id=\"exampleInputEmail1\" ng-model=\"list.name\" placeholder=\"Name\">\n" +
    "        </div>\n" +
    "        <button type=\"submit\" class=\"btn btn-default\" ng-click=\"mList.create(list)\">Submit</button>\n" +
    "    </form>\n" +
    "</div>\n" +
    "");
}]);
})();

(function(module) {
try { module = angular.module("templates"); }
catch(err) { module = angular.module("templates", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("modules/kourier/partial/kourierpanel/kourierpanel.html",
    "<div class=\"col-md-12 dokin dk-panel\" ng-controller=\"KourierpanelCtrl\">\n" +
    "    <div>\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-lg-4\">\n" +
    "                <div class=\"logo\">\n" +
    "                    <img src=\"assets/dokin/images/kodevian.png\" alt=\"\"/>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"col-lg-8\">\n" +
    "                <!-- Single button -->\n" +
    "                <div class=\"btn-group status\" dropdown is-open=\"status.isopen\">\n" +
    "                    <button type=\"button\" class=\"btn btn-inverse dropdown-toggle\" dropdown-toggle ng-disabled=\"disabled\">\n" +
    "                        Estatus <span class=\"caret\"></span>\n" +
    "                    </button>\n" +
    "                    <ul class=\"dropdown-menu\" role=\"menu\">\n" +
    "                        <li><a href=\"#\"><i class=\"fa fa-circle online\"></i> Online</a></li>\n" +
    "                        <li><a href=\"#\"><i class=\"fa fa-circle away\"></i> Away</a></li>\n" +
    "                        <li><a href=\"#\"><i class=\"fa fa-circle invis\"></i> Invisible</a></li>\n" +
    "                    </ul>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <br/>\n" +
    "        <br/>\n" +
    "        <div>\n" +
    "            <ul class=\"list-group\">\n" +
    "                <li class=\"list-group-item\" ui-sref-active=\"active\" ui-sref=\"kourier.home\"><i class=\"fa fa-home\"></i> Home</li>\n" +
    "                <li class=\"list-group-item\" ui-sref-active=\"active\" ui-sref=\"kourier.mlist\"><i class=\"fa fa-home\"></i> Mail List</li>\n" +
    "                <li class=\"list-group-item\" ui-sref-active=\"active\" ui-sref=\"kourier.report\"><i class=\"fa fa-user\"></i> Reportes</li>\n" +
    "                <li class=\"list-group-item\" ui-sref-active=\"active\" ui-sref=\"kourier.campaign\"><i class=\"fa fa-pie-chart\"></i> Campañas</li>\n" +
    "                <!--<li class=\"list-group-item\" ui-sref-active=\"active\" ui-sref=\"dokin.benefits\"><i class=\"fa fa-trophy\"></i> Beneficios</li>-->\n" +
    "            </ul>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);
})();

(function(module) {
try { module = angular.module("templates"); }
catch(err) { module = angular.module("templates", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("modules/kourier/partial/kourierreport/kourierreport.html",
    "<div class=\"col-md-12\" ng-controller=\"KourierreportCtrl\">\n" +
    "\n" +
    "\n" +
    "</div>\n" +
    "");
}]);
})();
