;/*FB_PKG_DELIM*/

__d("PolarisIGCoreBorderedIcon",["cx","PolarisIGCoreIcon","joinClasses","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");function a(a){var b=a.alt,d=a.color;d=d===void 0?"dark":d;var e=a.dangerouslySetClassName,f=a.icon,g=a.onClick,h=a.size;h=h===void 0?44:h;a=a.weight;a=a===void 0?"normal":a;d=c("joinClasses")("_ab5c"+(d==="dark"?" _ab5d":"")+(d==="light"?" _ab5e":"")+(d==="facebook"?" _ab5f":"")+(d==="white"?" _ab5g":"")+(a==="thin"?" _ab5h":"")+(a==="normal"?" _ab5i":"")+(a==="thick"?" _ab5j":""),e==null?void 0:e.__className);a=g!=null?"button":"div";e={height:h,width:h};return i.jsx(a,{className:d,onClick:g,style:e,children:i.jsx(c("PolarisIGCoreIcon"),{alt:b,icon:f})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisNewUserActivatorsStrings",["fbt"],(function(a,b,c,d,e,f,g,h){"use strict";a=h._("__JHASH__YnSM3bgpqaJ__JHASH__");b=h._("__JHASH__OEPhwEIlGG8__JHASH__");c=h._("__JHASH__zBjuiTb0-1T__JHASH__");d=h._("__JHASH__oCgU5mZtLmu__JHASH__");e=h._("__JHASH__o4Cuc3Ya2xx__JHASH__");f=h._("__JHASH__oOcs-M-S6N6__JHASH__");var i=h._("__JHASH__C_sKrwBKXs5__JHASH__"),j=h._("__JHASH__KoaulgvehX2__JHASH__"),k=h._("__JHASH__o6Ga_-Jgw67__JHASH__"),l=h._("__JHASH__HJwQ6RqSve4__JHASH__"),m=h._("__JHASH__byq6zzeYEpV__JHASH__"),n=h._("__JHASH__towgtz8D8V5__JHASH__"),o=h._("__JHASH__qIzzesIzPSi__JHASH__"),p=h._("__JHASH__XLKCQZelGuu__JHASH__"),q=h._("__JHASH__1V8vx8TkUwm__JHASH__"),r=h._("__JHASH__dpmh60S2_cm__JHASH__");h=h._("__JHASH__amlzPZjjX67__JHASH__");g.GETTING_STARTED=a;g.FIRST_PHOTO_HEADER=b;g.FIRST_PHOTO_BODY=c;g.FIRST_PHOTO_CTA=d;g.FACEBOOK_BODY=e;g.FACEBOOK_COMPLETED=f;g.FACEBOOK_CTA=i;g.FACEBOOK_HEADER=j;g.PROFILE_PHOTO_BODY=k;g.PROFILE_PHOTO_CTA=l;g.PROFILE_PHOTO_HEADER=m;g.PHONE_BODY=n;g.PHONE_CTA=o;g.PHONE_HEADER=p;g.EDIT_PROFILE_BODY=q;g.EDIT_PROFILE_CTA=r;g.EDIT_PROFILE_HEADER=h}),98);
__d("PolarisFacebookConnectUserListItem.react",["fbt","IGDSListItem.react","PolarisAssetManagerGlyphMapping","PolarisFBConnectHelpers","PolarisIGCoreBorderedIcon","PolarisIGCoreButton","PolarisIGCoreConstants","PolarisIGCoreToast","PolarisNewUserActivatorsStrings","PolarisQueryParams","PolarisReactRedux","browserHistory","polarisSuggestedUserSelectors","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");b=d("react");var j=b.useCallback,k=b.useState,l="connect_to_facebook",m=h._("__JHASH__ExSSuOfINmE__JHASH__"),n=h._("__JHASH__8MbaCWQ3sz9__JHASH__"),o=h._("__JHASH__qAbG2vDJ1DE__JHASH__");function a(a){var b=a.analyticsContext;a=d("PolarisReactRedux").useSelector(j(function(a){return{canFBConnect:d("polarisSuggestedUserSelectors").shouldDisplayFacebookConnect(a),isLoading:d("polarisSuggestedUserSelectors").isInitialLoad(a)}},[]),d("PolarisReactRedux").shallowEqual);var e=a.canFBConnect;a=a.isLoading;var f=k(!1),g=f[0],h=f[1];f=d("PolarisQueryParams").parseQueryParams();f[l]!=null&&f[l].length>0&&(d("browserHistory").browserHistory.replace(d("browserHistory").browserHistory.location.pathname),h(!0));return g?i.jsx(c("PolarisIGCoreToast"),{duration:1500,onClose:function(){return h(!1)},children:d("PolarisNewUserActivatorsStrings").FACEBOOK_COMPLETED}):e&&i.jsx(c("IGDSListItem.react"),{addOnEnd:i.jsx(c("PolarisIGCoreButton"),{disabled:a,loading:a,onClick:function(){return d("PolarisFBConnectHelpers").redirectToFBOAuth(d("browserHistory").browserHistory.location.pathname+"?"+l+"=true",b)},children:o}),addOnStart:i.jsx(c("PolarisIGCoreBorderedIcon"),{alt:m,color:"facebook",icon:d("PolarisAssetManagerGlyphMapping").ICONS.FACEBOOK_CIRCLE_FILLED_24,size:c("PolarisIGCoreConstants").AVATAR_SIZES.medium}),overlayDisabled:!1,subtitle:n,title:m})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisCard.react",["IGDSBox.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){var b=a.button,d=a.children,e=a.context,f=a.icon,g=a.onClick,i=a.padding,j=a.width;a=a.xstyle;return h.jsx("div",{onClick:g,role:"button",tabIndex:"-1",children:h.jsxs(c("IGDSBox.react"),{alignItems:"center",border:!0,color:"primaryBackground",padding:i,shape:"rounded",width:j,xstyle:a,children:[f,d,b,e]})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisActivatorCard.react",["IGDSBox.react","IGDSButton.react","IGDSText.react","PolarisCard.react","PolarisIGCoreBorderedIcon","PolarisIGCoreConstants","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){var b=a.bodyText,d=a.buttonText,e=a.headerText,f=a.icon,g=a.iconAlt,i=a.loading,j=a.onClick;a=a.width;return h.jsxs(c("PolarisCard.react"),{button:h.jsx(c("IGDSButton.react"),{isLoading:i,label:d,onClick:j}),icon:h.jsx(c("PolarisIGCoreBorderedIcon"),{alt:g,icon:f,size:c("PolarisIGCoreConstants").AVATAR_SIZES.large}),padding:3,width:a,children:[h.jsx(c("IGDSBox.react"),{marginTop:4,position:"relative",children:h.jsx(c("IGDSText.react").BodyEmphasized,{children:e})}),h.jsx(c("IGDSBox.react"),{height:65,marginBottom:4,marginTop:4,position:"relative",children:h.jsx(c("IGDSText.react").Body2,{color:"secondaryText",children:b})})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisPeopleCard.react",["fbt","IGDSBox.react","IGDSText.react","PolarisAssetManagerGlyphMapping","PolarisCard.react","PolarisGenericStrings","PolarisIGCoreBorderedIcon","PolarisIGCoreConstants","PolarisIGCoreSVGIconButton","PolarisIGCoreText","PolarisIGCoreXPanoFilledIcon","PolarisUA","PolarisUserAvatar.react","PolarisUserLink.react","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react"),j=d("PolarisUA").isMobile()?76:86,k={desktopRoot:{height:"x1gvj3kd",$$css:!0},mobileRoot:{borderTopStartRadius:"x1ke7ulo",borderTopEndRadius:"x3jqge",borderBottomEndRadius:"x1i7howy",borderBottomStartRadius:"x4y8mfe",borderTopWidth:"x972fbf",borderEndWidth:"xcfux6l",borderBottomWidth:"x1qhh985",borderStartWidth:"xm0m39n",boxShadow:"xqu6day",height:"x2gs1ea",$$css:!0}};function l(a){a=a.children;return i.jsx(c("IGDSText.react").Body2,{color:"secondaryText",textAlign:"center",children:a})}l.displayName=l.name+" [from "+f.id+"]";function m(a){var b=a.context,d=a.icon;a=a.title;return i.jsxs(c("IGDSBox.react"),{direction:"row",height:j,justifyContent:"center",paddingY:2,position:"relative",width:"100%",children:[i.jsx(c("IGDSBox.react"),{marginEnd:2,position:"relative",children:d}),i.jsxs(c("IGDSBox.react"),{flex:"grow",position:"relative",children:[i.jsx(c("IGDSBox.react"),{marginBottom:3,position:"relative",children:i.jsx(c("IGDSText.react").BodyEmphasized,{children:a})}),i.jsx(c("IGDSBox.react"),{position:"relative",children:i.jsx(c("IGDSText.react").Body2,{color:"secondaryText",children:b})})]})]})}m.displayName=m.name+" [from "+f.id+"]";function n(a){var b=a.children,e=a.isPrivate;a=a.username;var f=0;b=i.Children.map(b,function(a){if(typeof a==="boolean")return null;f++;return i.cloneElement(a,{dimension:j})});var g=j*f+(f-1);switch(!0){case e:return i.jsx(m,{context:h._("__JHASH__nlQanDWDp3o__JHASH__"),icon:i.jsx(c("PolarisIGCoreBorderedIcon"),{alt:h._("__JHASH__SxmGjI4qLOh__JHASH__"),icon:d("PolarisAssetManagerGlyphMapping").ICONS.LOCK_OUTLINE_24_GREY9}),title:h._("__JHASH__oUvUoLRyEfx__JHASH__")});case f===0:return i.jsx(m,{context:h._("__JHASH__jO5E13aqhGA__JHASH__",[h._param("Username of current user",a)]),icon:i.jsx(c("PolarisIGCoreBorderedIcon"),{alt:h._("__JHASH__SxmGjI4qLOh__JHASH__"),icon:d("PolarisAssetManagerGlyphMapping").ICONS.CAMERA_OUTLINE_24_GREY9}),title:h._("__JHASH__v5sJwK_tp5Y__JHASH__")});default:return i.jsx(c("IGDSBox.react"),{direction:"row",flex:"grow",justifyContent:"between",marginTop:d("PolarisUA").isMobile()?0:1,position:"relative",width:g,children:b})}}function a(a){var b=a.button,e=a.children,f=a.context,g=a.isPrivate,h=a.onClick,j=a.onDismissClick,m=a.onUsernameClick,o=a.src,p=a.subtitle,q=a.username;a=a.width;return i.jsxs(c("PolarisCard.react"),{button:b,context:d("PolarisUA").isMobile()?null:i.jsx(c("IGDSBox.react"),{marginTop:4,position:"relative",children:i.jsx(l,{children:f})}),icon:i.jsx(c("IGDSBox.react"),{marginBottom:d("PolarisUA").isMobile()?2:4,marginTop:d("PolarisUA").isMobile()?0:1,position:"relative",children:i.jsx(c("PolarisUserAvatar.react"),{isLink:!1,profilePictureUrl:o,size:c("PolarisIGCoreConstants").AVATAR_SIZES.XL,username:q})}),onClick:h,padding:4,width:a,xstyle:d("PolarisUA").isMobile()?k.mobileRoot:k.desktopRoot,children:[i.jsx(c("PolarisUserLink.react"),{onClick:m,username:q,children:i.jsx(c("PolarisIGCoreText").BodyEmphasized,{display:"truncated",textAlign:"center",zeroMargin:!0,children:q})}),j!=null&&i.jsx(c("IGDSBox.react"),{padding:1,position:"absolute",right:!0,children:i.jsx(c("PolarisIGCoreSVGIconButton"),{onClick:j,children:i.jsx(c("PolarisIGCoreXPanoFilledIcon"),{alt:d("PolarisGenericStrings").DISMISS_TEXT,color:"ig-secondary-text",size:11})})}),i.jsx(c("IGDSBox.react"),{marginBottom:p!==null?2:5,paddingY:2,position:"relative",children:i.jsx(c("IGDSText.react").Body,{color:"secondaryText",textAlign:"center",children:p})}),i.jsxs(c("IGDSBox.react"),{alignItems:"center",flex:"grow",justifyContent:"center",position:"relative",children:[i.jsx(n,{isPrivate:g,username:q,children:e}),d("PolarisUA").isMobile()&&f!=null&&i.jsx(c("IGDSBox.react"),{alignItems:"center",flex:"grow",justifyContent:"center",marginBottom:1,position:"relative",children:i.jsx(l,{children:f})})]})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisUserCard.react",["IGDSBox.react","IGDSText.react","IGDSVerifiedBadge.react","PolarisCard.react","PolarisIGCoreConstants","PolarisUserAvatar.react","PolarisUserLink.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function i(a){var b=33;return a.length<b?a:a.substr(0,b-3)+"\u2026"}function a(a){var b=a.button,d=a.isVerified;d=d===void 0?!1:d;var e=a.onClick,f=a.onUsernameClick,g=a.src,j=a.subtitle,k=a.username;a=a.width;return h.jsxs(c("PolarisCard.react"),{button:b,icon:h.jsx(c("PolarisUserAvatar.react"),{canTabFocus:!1,profilePictureUrl:g,size:c("PolarisIGCoreConstants").AVATAR_SIZES.large,username:k}),onClick:e,padding:4,width:a,children:[h.jsx(c("IGDSBox.react"),{marginBottom:2,marginTop:4,position:"relative",width:"100%",children:h.jsx(c("PolarisUserLink.react"),{onClick:f,username:k,children:h.jsxs(c("IGDSBox.react"),{alignItems:"center",direction:"row",justifyContent:"center",position:"relative",width:"100%",children:[h.jsx(c("IGDSBox.react"),{flex:"shrink",overflow:"hidden",position:"relative",children:h.jsx(c("IGDSText.react").BodyEmphasized,{maxLines:1,zeroMargin:!0,children:k})}),d&&h.jsx(c("IGDSBox.react"),{marginStart:1,position:"relative",children:h.jsx(c("IGDSVerifiedBadge.react"),{})})]})})}),h.jsx(c("IGDSBox.react"),{height:28,marginBottom:2,position:"relative",children:h.jsx(c("IGDSText.react").Body2,{color:"secondaryText",textAlign:"center",children:i(j)})})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisDeck.react",["cx","IGDSBox.react","IGDSText.react","PolarisActivatorCard.react","PolarisIGCoreConstants","PolarisPeopleCard.react","PolarisUA","PolarisUserCard.react","PolarisVirtualHSnapScrollCollapsibleList.react","clamp","polarisWithForwardRef","react","useWindowSize"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");b=d("react");var j=b.useImperativeHandle,k=b.useRef;function l(a){switch(a.type){case c("PolarisActivatorCard.react"):return"ACTIVATOR";case c("PolarisPeopleCard.react"):return"PEOPLE";case c("PolarisUserCard.react"):return"USER"}return"USER"}var m=d("PolarisUA").isMobile()?"MOBILE":"DESKTOP",n;function a(a){var b=a.cardBoxDirection,e=b===void 0?"column":b,f=a.cardType;b=a.children;var g=a.color;g=g===void 0?"ig-secondary-background":g;var h=a.forwardedRef,o=a.hasBlur,p=a.headerText,q=a.onVisibilityChange;a=a.suffix;var r=k(null);j(h,function(){return{scrollToNext:function(){var a=r.current;a!=null&&a.snapToNext()}}});h=c("useWindowSize")();h=h.innerWidth;var s=k({first:null,last:null});if(i.Children.count(b)===0)return null;var t=i.Children.map(b,function(b){n=f||l(b);var a=c("PolarisIGCoreConstants").CARD_SIZES[n][m];return i.jsx(c("IGDSBox.react"),{alignItems:"center",direction:e,position:"relative",width:a.CARD_WIDTH+a.GAP_WIDTH,children:i.jsx(c("IGDSBox.react"),{height:a.HEIGHT,justifyContent:"center",position:"relative",width:a.CARD_WIDTH,children:i.cloneElement(b,{width:a.CARD_WIDTH})})},b.key)});b=function(a){var b=a.endPct;a=a.startPct;if(q==null)return;var d=t.length;a=c("clamp")(Math.floor(a),0,d-1);b=c("clamp")(Math.floor(b),0,d-1);d=s.current;(d.first!==a||d.last!==b)&&(s.current={first:a,last:b},q(a,b))};var u=c("PolarisIGCoreConstants").CARD_SIZES[n][m],v=d("PolarisUA").isMobile()&&n==="PEOPLE";v=v?(h-u.CARD_WIDTH)/2:u.GUTTER_WIDTH;return i.jsxs(c("IGDSBox.react"),{color:g,position:"relative",children:[p!=null&&i.jsxs(c("IGDSBox.react"),{direction:"row",marginTop:3,paddingX:4,position:"relative",children:[i.jsx(c("IGDSBox.react"),{justifyContent:"around",position:"relative",children:i.jsx(c("IGDSText.react").BodyEmphasized,{children:p})}),a!=null&&i.jsx(c("IGDSBox.react"),{alignItems:"end",flex:"grow",position:"relative",children:a})]}),i.jsx("div",{className:o?"_any7":"",children:i.jsx(c("IGDSBox.react"),{height:u.HEIGHT,marginBottom:4,marginTop:4,position:"relative",children:i.jsx(c("PolarisVirtualHSnapScrollCollapsibleList.react"),{gutterWidth:Math.max(0,v-u.GAP_WIDTH/2),itemWidth:u.CARD_WIDTH+u.GAP_WIDTH,onVisibilityChange:b,scrollRef:r,children:t})})})]})}a.displayName=a.name+" [from "+f.id+"]";e=c("polarisWithForwardRef")(a);g["default"]=e}),98);
__d("PolarisUserGridItem.react",["PolarisFollowButtonContainer.react","PolarisReactRedux","PolarisUserCard.react","polarisRelationshipSelectors","polarisUserSelectors","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i=d("react").useCallback;function a(a){var b=a.analyticsContext,e=a.id,f=a.onFollowClick,g=a.position,j=d("PolarisReactRedux").useSelector(i(function(b){return{relationship:d("polarisRelationshipSelectors").getRelationship(b.relationships,a.id),user:d("polarisUserSelectors").getUserById(b,a.id)}},[a.id]),d("PolarisReactRedux").shallowEqual),k=j.relationship;j=j.user;var l=function(){f!=null&&k&&f({followedByViewer:d("polarisRelationshipSelectors").followedByViewer(k),index:g,userId:e})},m=function(){a.onUsernameClick({index:g,userId:e})},n=j.profilePictureUrl,o=j.suggestionDescription,p=j.username;return n==null||o==null||p==null?null:h.jsx(c("PolarisUserCard.react"),{button:h.jsx(c("PolarisFollowButtonContainer.react"),{analyticsContext:(b=b)!=null?b:"UNKNOWN__POLARIS_USER_GRID_ITEM",onClick:l,userId:j.id,username:p}),isVerified:j.isVerified,onUsernameClick:m,src:n,subtitle:o,username:p})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisUserGrid.react",["IGDSBox.react","IGDSSpinner.react","PolarisDeck.react","PolarisUserGridItem.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){var b=a.isLoading,d=a.onFollowClick,e=a.onUsernameClick,f=a.onVisibilityChange,g=a.subHeader,i=a.suffix;a=a.userIds;var j=function(a){d&&d(a)},k=function(a,b){f&&f(a,b)},l=function(a){e&&e(a)};return b?h.jsx(c("IGDSBox.react"),{alignItems:"center",marginTop:4,position:"relative",width:"100%",children:h.jsx(c("IGDSSpinner.react"),{})}):h.jsx(c("PolarisDeck.react"),{cardType:"USER",hasBlur:!0,headerText:g,onVisibilityChange:k,suffix:i,children:a.map(function(a,b){return h.jsx(c("PolarisUserGridItem.react"),{id:a,onFollowClick:j,onUsernameClick:l,position:b},b)})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisSuggestedUserList.react",["fbt","IGDSBox.react","IGDSDivider.react","IGDSText.react","PolarisConnectionsLogger","PolarisFBConnectHelpers","PolarisFacebookConnectUserListItem.react","PolarisReactRedux","PolarisRoutes","PolarisSeeAllLink.react","PolarisUserActionLoadSULV2","PolarisUserGrid.react","PolarisUserList.react","polarisSuggestedUserSelectors","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react"),j=d("react").useCallback;b=h._("__JHASH__8Ni-gczuLH5__JHASH__");e=h._("__JHASH__8Ni-gczuLH5__JHASH__");var k=h._("__JHASH__DefkXbHxh-M__JHASH__");h=h._("__JHASH__XuMu6gViKc___JHASH__");function l(a){switch(a){case d("PolarisConnectionsLogger").CONNECTIONS_CONTAINER_MODULES.top_accounts:return!1;default:return!0}}function a(a){var b=a.adjustScrollAfterRender;b=b===void 0?!0:b;var e=a.analyticsContext,f=a.avatarSize;f=f===void 0?"large":f;var g=a.borderlessFollowButton;g=g===void 0?!1:g;a.children;var h=a.footer,k=a.hideName;k=k===void 0?!1:k;var m=a.hideStoryRings;m=m===void 0?!1:m;var n=a.hideUpsells;n=n===void 0?!1:n;var o=a.initialRenderCount;o=o===void 0?d("PolarisUserActionLoadSULV2").SUL_FETCH_SUGGESTED_COUNT_DEFAULT:o;var p=a.isLoading,q=a.onDismiss,r=a.showFollowerCount,s=a.subHeader,t=a.userIds,u=a.variant;u=u===void 0?"LIST":u;var v=a.viewModule,w={};a=d("PolarisReactRedux").useSelector(j(function(a){return{canFBConnect:d("polarisSuggestedUserSelectors").shouldDisplayFacebookConnect(a)}},[]),d("PolarisReactRedux").shallowEqual);a=a.canFBConnect;var x=function(a){var b=a.followedByViewer,c=a.index;a=a.userId;if(!l(e))return;if(b)return;B("recommended_follow_button_tapped",a,c)},y=function(a){var b=a.index;a=a.userId;if(!l(e))return;B("recommended_username_tapped",a,b)},z=function(a,b){if(!l(e))return;if(t==null)return;for(a=a;a<=b-1;++a){var c=t[a];w[c]||(B("recommended_user_impression",c,a),w[c]=!0)}},A=function(a){var b=a.index;a=a.userId;if(!l(e))return;w[a]||(B("recommended_user_impression",a,b),w[a]=!0)},B=function(a,b,c){d("PolarisConnectionsLogger").logConnectionAction({containerModule:e,eventName:a,position:c,targetId:b,viewModule:v})};return u==="GRID"?i.jsx(c("PolarisUserGrid.react"),{avatarSize:f,isLoading:p,onFollowClick:x,onUsernameClick:y,onVisibilityChange:z,subHeader:s,suffix:i.jsx(c("PolarisSeeAllLink.react"),{href:d("PolarisRoutes").DISCOVER_PEOPLE_PATH}),userIds:t||[]}):i.jsxs(i.Fragment,{children:[s!=null&&i.jsx(c("IGDSBox.react"),{alignItems:"start",marginBottom:3,marginTop:4,paddingX:3,children:i.jsx(c("IGDSText.react").Section,{children:s})}),i.jsxs(c("IGDSBox.react"),{paddingY:2,children:[!n&&i.jsxs(i.Fragment,{children:[d("PolarisFBConnectHelpers").checkGraphDifferentiationQE()&&i.jsx(c("PolarisFacebookConnectUserListItem.react"),{analyticsContext:d("PolarisConnectionsLogger").CONNECTIONS_CONTAINER_MODULES.discover_people}),a&&d("PolarisFBConnectHelpers").checkGraphDifferentiationQE()&&i.jsx(c("IGDSBox.react"),{paddingY:2,children:i.jsx(c("IGDSDivider.react"),{})})]}),i.jsx(c("PolarisUserList.react"),{adjustScrollAfterRender:b,analyticsContext:e,avatarSize:f,avatarTriggerAnalyticsContext:"suggested_user_avatar",borderlessFollowButton:g,"data-testid":void 0,hideName:k,hideStoryRings:m,hoverPositionType:"fixed",initialRenderCount:o,isLoading:Boolean(p),onDismiss:q,onFollowClick:x,onScrollChange:A,onUsernameClick:y,showFollowerCount:r,userIds:t||[],usernameTriggerAnalyticsContext:"suggested_user"}),h]})]})}a.displayName=a.name+" [from "+f.id+"]";g.HEADER_TEXT=b;g.HEADER_TEXT_V2=e;g.SEE_ALL_TEXT=k;g.SEE_ALL_TEXT_V2=h;g.SuggestedUserList=a}),98);/*FB_PKG_DELIM*/
__d("polarisSuggestedUserSelectors",["nullthrows","polarisFBConnectSelectors","polarisUserSelectors","reselect"],(function(a,b,c,d,e,f,g){"use strict";function a(a){return!a.suggestedUsers.viewerHasFBConnect}a=d("reselect").createSelector(a,d("polarisFBConnectSelectors").isFBConnectEligible,function(a,b){return a?!1:b});var h=d("reselect").createSelector(function(a){return a.suggestedUsers.ids},function(a){return a.suggestedUsers.dismissedAysfIds},function(a,b){return a.filter(function(a){return!b.includes(a)})});function b(a,b){return!!a.suggestedUsers.profileChainingFailures[b]}function e(a,b){return a.suggestedUsers.profileChainingSuggestions[b]}var i=d("reselect").createSelector(function(a){return a.suggestedUsers.dismissedAysfIds},function(a,b){return c("nullthrows")(b.userIds).map(function(b){return d("polarisUserSelectors").getUserById(a,b)})},function(a,b){return b.filter(function(b){return!a.includes(b.id)})}),j=d("reselect").createSelector(function(a){return a.suggestedUsers.ids},function(a){return a});function f(a){return a.suggestedUsers.isLoadingSuggestions&&a.suggestedUsers.ids.length===0}g.shouldDisplayFacebookConnect=a;g.getNonDismissedAysfIds=h;g.getProfileChainingFailure=b;g.getProfileChainingSuggestions=e;g.getFeedAysfUsers=i;g.getSuggestions=j;g.isInitialLoad=f}),98);
__d("PolarisUserList.react",["IGDSBox.react","IGDSListItemPlaceholder","IGDSSpinner.react","PolarisErrorBoundary.react","PolarisIGVirtualList.react","PolarisUserListItem.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");a=10;var i=65;b=function(a){babelHelpers.inheritsLoose(b,a);function b(){var b,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(b=d=a.call.apply(a,[this].concat(f))||this,d.$1=h.createRef(),d.$2=function(a){var b=d.props.onFollowClick;b&&b(a)},d.$3=function(a){var b=a.index;a=a.isVisible;var e=d.props,f=e.analyticsContext,g=e.avatarSize,i=e.avatarTriggerAnalyticsContext,j=e.borderlessFollowButton,k=e.entryPoint,l=e.hideName,m=e.hoverPositionType,n=e.isLoading,o=e.likers,p=e.primaryActionButton,q=e.secondaryActionButton,r=e.showFollowerCount,s=e.topComponent,t=e.userIds;e=e.usernameTriggerAnalyticsContext;return t.length===0?n?h.jsx(c("IGDSListItemPlaceholder"),{size:g},b):null:h.jsxs(c("PolarisErrorBoundary.react"),{children:[b===0&&s!=null&&s,h.jsx(c("PolarisUserListItem.react"),{analyticsContext:f,avatarSize:g,avatarTriggerAnalyticsContext:i,borderlessFollowButton:j,entryPoint:k,hasLiked:o==null?void 0:o.has(t[b]),hideFollowButton:d.props.hideFollowButton,hideName:l,hideStoryRings:d.props.hideStoryRings,hoverPositionType:m||"absolute",id:t[b],isVisible:a,onDismiss:d.props.onDismiss,onFollowClick:d.$2,onScrollEnter:d.$4,onUsernameClick:d.$5,position:b,primaryActionButton:p,secondaryActionButton:q,showFollowerCount:r,usernameTriggerAnalyticsContext:e})]},t[b])},d.$4=function(a){var b=d.props.onScrollChange;b&&b(a)},d.$5=function(a){var b=d.props.onUsernameClick;b&&b(a)},b)||babelHelpers.assertThisInitialized(d)}var d=b.prototype;d.componentDidUpdate=function(a){this.$1.current!=null&&this.props.userIds.length===this.props.initialRenderCount&&a.userIds.length===0&&this.$1.current.forceUpdate()};d.render=function(){var a=this.props,b=a.containerSize,d=a["data-testid"];d=a.initialRenderCount;var e=a.isLoading,f=a.onScroll;a=a.userIds;return h.jsxs(h.Fragment,{children:[h.jsx(c("PolarisIGVirtualList.react"),{containerSize:b,"data-testid":void 0,estimatedItemSize:i,initialRenderCount:d,itemCount:a.length||d,onScroll:f,pageletName:"user_list",ref:this.$1,renderer:this.$3,skipChildMeasurement:!this.props.adjustScrollAfterRender,style:e&&a.length===0?{overflowY:"hidden"}:{}}),a.length>0&&e&&h.jsx(c("IGDSBox.react"),{alignItems:"center",marginTop:4,children:h.jsx(c("IGDSSpinner.react"),{size:"medium"})})]})};return b}(h.PureComponent);b.defaultProps={adjustScrollAfterRender:!0,avatarTriggerAnalyticsContext:null,borderlessFollowButton:!1,containerSize:"auto",entryPoint:"unknown",hideFollowButton:!1,hideName:!1,hideStoryRings:!1,hoverPositionType:null,initialRenderCount:a,isLoading:!1,showFollowerCount:!1,usernameTriggerAnalyticsContext:null};g["default"]=b}),98);/*FB_PKG_DELIM*/
__d("IGDSCircleAddPanoFilledIcon",["IGDSSVGIconBase.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){return h.jsx(c("IGDSSVGIconBase.react"),babelHelpers["extends"]({},a,{viewBox:"0 0 24 24",children:h.jsx("path",{d:"M12.001.504a11.5 11.5 0 1 0 11.5 11.5 11.513 11.513 0 0 0-11.5-11.5Zm5 12.5h-4v4a1 1 0 0 1-2 0v-4h-4a1 1 0 1 1 0-2h4v-4a1 1 0 1 1 2 0v4h4a1 1 0 0 1 0 2Z"})}))}a.displayName=a.name+" [from "+f.id+"]";b=h.memo(a);g["default"]=b}),98);
__d("polarisFBConnectSelectors",["PolarisFBConnectStatus"],(function(a,b,c,d,e,f,g){"use strict";function a(a){return a.fb.status!==d("PolarisFBConnectStatus").STATUS.ineligible}function b(a){return a.fb.status===d("PolarisFBConnectStatus").STATUS.connected}function c(a){return a.fb.igLinked===!0||a.fb.igSSODisabled===!0}g.isFBConnectEligible=a;g.isConnected=b;g.isIGLinked=c}),98);/*FB_PKG_DELIM*/
__d("PolarisYourActivityRoot.entrypoint",["JSResourceForInteraction"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){return{queries:{}}},root:c("JSResourceForInteraction")("PolarisYourActivityRoot.react").__setRef("PolarisYourActivityRoot.entrypoint")};g["default"]=a}),98);
__d("PolarisQRRoot.entrypoint",["JSResourceForInteraction"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){return{queries:{}}},root:c("JSResourceForInteraction")("PolarisQRRoot.react").__setRef("PolarisQRRoot.entrypoint")};g["default"]=a}),98);
__d("sortBy",[],(function(a,b,c,d,e,f){"use strict";function a(a,b){a=a.map(function(a,c){return{index:c,sortValue:b(a),value:a}});a.sort(function(a,b){var c=a.sortValue,d=b.sortValue;if(c>d)return 1;return c<d?-1:a.index-b.index});return a.map(function(a){return a.value})}f["default"]=a}),66);