import{V as c}from"./js/_plugin-vue2_normalizer.61652a7c.js";import"./js/index.46447f5c.js";import{T as w}from"./js/index.0d4da42f.js";import"./js/index.4b67d3e2.js";import{s as i}from"./js/index.ec9852b3.js";import{f,m as u}from"./js/attachments.437fe1f4.js";import{i as g}from"./js/isEqual.3cbd4b2b.js";import{i as h}from"./js/isEmpty.5206d750.js";import{s,_ as r}from"./js/default-i18n.3a91e0e5.js";import{A as y}from"./js/App.1e47721b.js";import"./js/client.e62d6c37.js";import"./js/_commonjsHelpers.f84db168.js";import"./js/translations.c394afe3.js";import"./js/index.1edc4884.js";import"./js/helpers.de7566d0.js";import"./js/constants.0d8c074c.js";import"./js/isArrayLikeObject.9b4b678d.js";import"./js/portal-vue.esm.98f2e05b.js";import"./js/Caret.d93b302e.js";import"./js/vuex.esm.8fdeb4b6.js";import"./js/cleanForSlug.51ef7354.js";import"./js/html.14f2a8b9.js";import"./js/_baseIsEqual.7a24c257.js";import"./js/_getTag.7235c98a.js";/* empty css                */import"./js/params.597cd0f5.js";import"./js/WpTable.e2f412d1.js";import"./js/Index.5f7ddb17.js";import"./js/JsonValues.870a4901.js";import"./js/SaveChanges.e40a9083.js";import"./js/SettingsRow.edbb3005.js";import"./js/Row.830f6397.js";import"./js/Checkbox.60ba2f56.js";import"./js/Checkmark.f26f6201.js";import"./js/LicenseKeyBar.f7493613.js";import"./js/LogoGear.16108a75.js";import"./js/Tabs.a309f2c7.js";import"./js/TruSeoScore.339d22e1.js";import"./js/Information.93f80cbf.js";import"./js/Slide.15a07930.js";import"./js/Portal.79020666.js";import"./js/MaxCounts.12b45bab.js";import"./js/Plus.6984df43.js";import"./js/Editor.3e312d73.js";import"./js/Blur.f36c594d.js";import"./js/Tooltip.68a8a92b.js";import"./js/RadioToggle.e6e54396.js";import"./js/GoogleSearchPreview.853cda22.js";import"./js/HtmlTagsEditor.70d3cf0a.js";import"./js/UnfilteredHtml.7bdb1712.js";import"./js/popup.b60b699f.js";import"./js/Index.21aaf27c.js";import"./js/Table.30698570.js";import"./js/PostTypes.9ab32454.js";import"./js/InternalOutbound.e736afb6.js";import"./js/RequiredPlans.3ea0b33e.js";import"./js/Image.d51c3f0f.js";import"./js/Img.c432d837.js";import"./js/FacebookPreview.6ab415ea.js";import"./js/Profile.c44d4735.js";import"./js/TwitterPreview.cb2ad48f.js";import"./js/Book.9dd59972.js";import"./js/Settings.26e66713.js";import"./js/Build.6a71ce0a.js";import"./js/Redirects.3b63a946.js";import"./js/Index.31a9bad1.js";import"./js/strings.aee612e0.js";import"./js/isString.0b99231f.js";import"./js/ProBadge.66f48bdc.js";import"./js/External.4c957e9a.js";import"./js/Exclamation.fd45a7b0.js";import"./js/Gear.184e0c65.js";import"./js/Card.db2ec99d.js";import"./js/Eye.57c925d7.js";class k extends window.$e.modules.hookUI.Base{constructor(o,e,n){super(),this.hook=o,this.id=e,this.callback=n}getCommand(){return this.hook}getId(){return this.id}apply(){return this.callback()}}class _ extends window.$e.modules.hookData.Base{constructor(o,e,n){super(),this.hook=o,this.id=e,this.callback=n}getCommand(){return this.hook}getId(){return this.id}apply(){return this.callback()}}function a(t,o,e){window.$e.hooks.registerUIAfter(new k(t,o,e))}function E(t,o,e){window.$e.hooks.registerDataAfter(new _(t,o,e))}let m={};const p=()=>{const t=window.elementor.documents.getCurrent();if(!["wp-post","wp-page"].includes(t.config.type))return;const o={...m},e=f();g(o,e)||(m=e,u())},$=()=>{h(i.state.currentPost)||window.elementor.config.document.id===window.elementor.config.document.revisions.current_id&&i.dispatch("saveCurrentPost",i.state.currentPost)},b=()=>{window.$e.internal("document/save/set-is-modified",{status:!0})},v=()=>{a("editor/documents/attach-preview","aioseo-content-scraper-attach-preview",p),a("document/save/set-is-modified","aioseo-content-scraper-on-modified",p),E("document/save/save","aioseo-save",$),window.aioseoBus.$on("postSettingsUpdated",b)},A=()=>{if(window.elementor.config.user.introduction["aioseo-introduction"]===!0)return;const t=new window.elementorModules.editor.utils.Introduction({introductionKey:"aioseo-introduction",dialogType:"alert",dialogOptions:{id:"aioseo-introduction",headerMessage:s(r("New: %1$s %2$s integration","all-in-one-seo-pack"),"AIOSEO","Elementor"),message:s(r("You can now manage your SEO settings inside of %1$s via %2$s before you publish your post!","all-in-one-seo-pack"),"Elementor","All in One SEO"),position:{my:"center center",at:"center center"},strings:{confirm:r("Got It!","all-in-one-seo-pack")},hide:{onButtonClick:!1},onConfirm:()=>{t.setViewed(),t.getDialog().hide()}}});t.show()};c.prototype.$truSeo=new w;const I=()=>{let t=window.elementor.getPreferences("ui_theme")||"auto";t==="auto"&&(t=matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),document.body.classList.forEach(o=>{o.startsWith("aioseo-elementor-")&&document.body.classList.remove(o)}),document.body.classList.add("aioseo-elementor-"+t)},C=()=>{window.$e.routes.on("run:after",function(t,o){I(),o==="panel/page-settings/aioseo"&&(new c({store:i,data:{tableContext:window.aioseo.currentPost.context,screenContext:"sidebar"},render:e=>e(y)}).$mount("#elementor-panel-page-settings-controls"),document.getElementById("elementor-panel-page-settings").classList.add("edit-post-sidebar","aioseo-elementor-panel"),u())})},S=()=>{const t=window.elementor.modules.layouts.panel.pages.menu.Menu,o=window.elementor.getPreferences("ui_theme");t.addItem({name:"aioseo",icon:"aioseo aioseo-element-menu-icon aioseo-element-menu-icon-"+o,title:"All in One SEO",type:"page",callback:()=>{try{window.$e.routes.run("panel/page-settings/aioseo")}catch{window.$e.routes.run("panel/page-settings/settings"),window.$e.routes.run("panel/page-settings/aioseo")}}},"more")},d=()=>{S(),C(),A(),v()};let l=!1;window.elementor&&(setTimeout(d),l=!0);(function(t){l||t(window).on("elementor:init",()=>{window.elementor.on("panel:init",()=>{setTimeout(d)})})})(window.jQuery);
