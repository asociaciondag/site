import $ from "npm:jquery@3.5.1";
import * as header from "./_modules/header.js";
import cookies from "./_modules/cookies.js";
import share from "./_modules/share.js";
// import imageViewer from './_modules/image-viewer.js';

header.menuLanguage($(".ui-menu-lang"));
header.menuMobile($(".ui-menu-mobile"));
header.sticky($("#main-header"));

cookies($(".cookies-advise"));
// imageViewer();
share(".share a");
