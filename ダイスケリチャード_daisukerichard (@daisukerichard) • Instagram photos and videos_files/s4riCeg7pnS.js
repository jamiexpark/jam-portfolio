;/*FB_PKG_DELIM*/

__d("PolarisDesktopPostLoadingShimmer.react",["cx","PolarisIGTheme.react","PolarisReactRedux","PolarisSizing","polarisPostModalHelpers","polarisPostSelectors","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");function j(a){var b,c=a.dimensions,e=a.postId,f=a.viewportHeight;a=a.viewportWidth;var g=a!=null&&a>d("PolarisSizing").MEDIUM_SCREEN_MIN;b=(b=d("PolarisReactRedux").useSelector(function(a){return d("polarisPostSelectors").getPostOrNullById(a,(a=e)!=null?a:"")}))==null?void 0:b.isSponsored;b=d("polarisPostModalHelpers").getMediaContainerProps({dimensions:c,hasFooter:b,hasSidebarInRedesign:g,viewportHeight:(b=f)!=null?b:0,viewportWidth:(f=a)!=null?f:0});return i.jsx("div",babelHelpers["extends"]({className:"_aas3"+(g&&c!=null&&c.width>=c.height?" _aas4":"")},b,{children:i.jsx(k,{dimensions:c})}))}j.displayName=j.name+" [from "+f.id+"]";function k(a){a=a.dimensions;var b={},c=d("PolarisIGTheme.react").useTheme();a&&(b.paddingBottom=d("PolarisSizing").getHeightPercent(a)+"%");return i.jsx("div",{className:"_aas5"+(c.getTheme()===d("PolarisIGTheme.react").IGTheme.Dark?" _aas6":""),style:b})}k.displayName=k.name+" [from "+f.id+"]";function l(a){var b=a.dimensions;a.onExitModal;var c=a.postId,d=a.viewportHeight;a=a.viewportWidth;return i.jsx(j,{dimensions:b,postId:c,viewportHeight:d,viewportWidth:a})}l.displayName=l.name+" [from "+f.id+"]";function a(a){a.className;var b=a.dimensions,c=a.onExitModal,d=a.postId,e=a.viewportHeight;a=a.viewportWidth;var f={};b&&(f={flexDirection:"row"});return i.jsxs("div",{className:"_aas7",style:f,children:[i.jsx(l,{dimensions:b,onExitModal:c,postId:d,viewportHeight:e,viewportWidth:a}),i.jsxs("div",{className:"_aas8",children:[i.jsxs("div",{className:"_aas9",children:[i.jsx("div",{className:"_aasa"}),i.jsxs("div",{className:"_aasb",children:[i.jsx("div",{className:"_aasc"}),i.jsx("div",{className:"_aasd"})]})]}),i.jsxs("div",{className:"_aase",children:[i.jsx("div",{className:"_aasf"}),i.jsx("div",{className:"_aasg"}),i.jsx("div",{className:"_aash"})]})]})]})}a.displayName=a.name+" [from "+f.id+"]";g.SIDEBAR_VARIANT_CUTOFF=d("PolarisSizing").MEDIUM_SCREEN_MIN;g.DesktopPostLoadingShimmer=a}),98);
__d("PolarisPostModalLoading.react",["IGDSBox.react","IGDSSpinner.react","PolarisDesktopPostLoadingShimmer.react","PolarisPostConstants","PolarisUA","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){var b=a.dimensions,e=a.onExitModal,f=a.postId,g=a.viewportHeight;a=a.viewportWidth;return d("PolarisUA").isDesktop()&&a>d("PolarisPostConstants").SIDEBAR_VARIANT_CUTOFF?h.jsx(d("PolarisDesktopPostLoadingShimmer.react").DesktopPostLoadingShimmer,{dimensions:b,onExitModal:e,postId:f,viewportHeight:g,viewportWidth:a}):h.jsx(c("IGDSBox.react"),{alignItems:"center",position:"relative",children:h.jsx(c("IGDSSpinner.react"),{color:"light",size:"medium"})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisPostModalPaginationArrow.react",["cx","IGDSChevronIcon","Locale","PolarisGenericStrings","PolarisIGCoreSVGIconButton","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");function a(a){a.arrowRef;var b=a.direction,e=a.onClick;a.title;a=c("Locale").isRTL();var f=b==="back"&&!a||b==="next"&&a;a=b==="next"&&!a||b==="back"&&a;return i.jsx("div",{className:(f?"_aaqf":"")+(a?" _aaqg":"")+" _aaqh",children:i.jsx(c("PolarisIGCoreSVGIconButton"),{onClick:e,children:i.jsx(c("IGDSChevronIcon"),{alt:f?d("PolarisGenericStrings").GO_BACK:d("PolarisGenericStrings").NEXT,color:"web-always-black",direction:b,size:16})})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisPostModalInternal.react",["cx","IGCoreModal","IGCoreModalLocation","PolarisAutoplayViewpointManager.react","PolarisDOMListener.react","PolarisLogger","PolarisPostActionLoadPost","PolarisPostModalLoading.react","PolarisPostModalPaginationArrow.react","PolarisPostModalRenderingContext","PolarisReactRedux","PolarisRoutes","PolarisThreadedCommentActions","getPolarisKeyCommandConfig","nullthrows","polarisIsUserLoggedIn","polarisPostModalHelpers","polarisPostSelectors","react","useGlobalKeyCommands"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");b=d("react");var j=b.useCallback,k=b.useEffect,l=b.useMemo,m=b.useRef,n={isInModal:!0};function a(a){var b=a.analyticsContext,e=a.children,f=a.combinedPostIds,g=f===void 0?[]:f;f=a["data-testid"];f=a.dimensions;var h=a.mediaLinkBuilder,o=a.modalEntryPath;o=o===void 0?d("PolarisRoutes").FEED_PATH:o;var p=a.onClose,q=a.onlyReplaceModalHistory,r=a.onOpen,s=a.postCode,t=a.postId,u=a.showLoadingShimmer,v=a.skipMediaInfo,w=d("PolarisReactRedux").useDispatch(),x=m(null);a=d("PolarisReactRedux").useSelector(function(a){return d("polarisPostSelectors").getAreCommentsFetched(a,t)});var y=d("PolarisReactRedux").useSelector(function(a){return d("polarisPostSelectors").getIsPostDataFetched(a,s)}),z=d("polarisIsUserLoggedIn").isUserLoggedIn()===!0?y:y&&a;y=j(function(){z||(v===!0?w(d("PolarisThreadedCommentActions").requestInitialComments(t)):w(d("PolarisPostActionLoadPost").loadPost(s,t)))},[v,z,w,s,t]);k(y,[y]);var A=g.findIndex(function(a){return a===t}),B=j(function(a){return a>=0&&a<g.length},[g.length]),C=j(function(a){a=A+a;B(a)&&r&&r(c("nullthrows")(g[a]),a)},[g,A,B,r]),D=j(function(a){p(a),x.current!=null&&x.current.returnToEntry()},[p]);a=l(function(){return[d("getPolarisKeyCommandConfig").getPolarisKeyCommandConfig("postModal","navigateLeft",function(){C(d("polarisPostModalHelpers").LEFT_DELTA)}),d("getPolarisKeyCommandConfig").getPolarisKeyCommandConfig("postModal","navigateRight",function(){C(d("polarisPostModalHelpers").RIGHT_DELTA)}),d("getPolarisKeyCommandConfig").getPolarisKeyCommandConfig("postModal","exit",function(){D()})]},[C,D]);c("useGlobalKeyCommands")(a);y=function(a){return function(b){if(b.metaKey||b.ctrlKey)return;b.preventDefault();b.stopPropagation();C(a);d("PolarisLogger").logAction("postModalArrowClick")}};a=j(function(){var a=d("polarisPostModalHelpers").getModalPageIdFromAnalyticsContext(b);a.length>0&&d("PolarisLogger").logPageView(a,{page_id:a,post_id:t})},[b,t]);var E=B(A-1),F=B(A+1);E=i.jsx("div",{className:"_aeap _aeaq",children:i.jsxs("div",{className:"_aear",children:[E&&i.jsx(c("PolarisPostModalPaginationArrow.react"),{direction:"back",onClick:y(d("polarisPostModalHelpers").LEFT_DELTA),title:d("polarisPostModalHelpers").PREVIOUS_ARROW_TITLE}),F&&i.jsx(c("PolarisPostModalPaginationArrow.react"),{direction:"next",onClick:y(d("polarisPostModalHelpers").RIGHT_DELTA),title:d("polarisPostModalHelpers").NEXT_ARROW_TITLE})]})});F=d("PolarisReactRedux").useSelector(function(a){return a.displayProperties.viewportWidth});y=d("PolarisReactRedux").useSelector(function(a){return a.displayProperties.viewportHeight});u=i.jsx(i.Fragment,{children:!z&&u?i.jsx(c("PolarisPostModalLoading.react"),{dimensions:f,postId:t,viewportHeight:y,viewportWidth:F}):e});f=i.jsx(c("IGCoreModal"),{aboveContent:E,backgroundColor:"DEPRECATED_transparent",closeButtonPosition:"background","data-testid":void 0,onClose:D,size:"fullscreenResponsive",children:u});return i.jsxs(i.Fragment,{children:[i.jsx(d("PolarisAutoplayViewpointManager.react").FullscreenAutoplayViewpointClipRegion,{id:"postModal"}),i.jsx(c("IGCoreModalLocation"),{entryPath:o,nativeReplace:!0,onlyReplaceModalHistory:q,onUpdateHistory:a,pageID:"postPage",parentModule:"PolarisPostModal",path:h(s),ref:x}),i.jsx(c("PolarisDOMListener.react"),{event:"popstate",handler:D,once:!0,target:window}),i.jsx(d("PolarisPostModalRenderingContext").PolarisPostModalRenderingContext.Provider,{value:n,children:f})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisInstantPostModal.react",["PolarisPostModalInternal.react","PolarisProfileTabTaggedPhotosConstants","polarisPostModalHelpers","react","usePolarisPost"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){var b,e=!1,f=!1,g=d("polarisPostModalHelpers").getModalPageIdFromAnalyticsContext(a.analyticsContext)==="profilePageModal";b=((b=a.modalEntryPath)==null?void 0:b.endsWith("/"+d("PolarisProfileTabTaggedPhotosConstants").TAGGED_TAB_ID+"/"))===!0;g&&!b&&(e=!0);g=d("usePolarisPost").usePost(a.postId,function(a){return a.isVideo});b&&g===!0&&(f=!0);return h.jsx(c("PolarisPostModalInternal.react"),babelHelpers["extends"]({},a,{showLoadingShimmer:f,skipMediaInfo:e}))}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisDynamicExplorePostModal.react",["PolarisDynamicExploreMediaHelpers","PolarisDynamicExploreTypes","PolarisInstantPostModal.react","PolarisIsLoggedInDesktop","PolarisLinkBuilder","PolarisPost.react","PolarisReactRedux","polarisDynamicExploreSelectors","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){var b=a.analyticsContext,e=a.exploreGridQuery,f=a.exploreGridType,g=a.modalEntryPath,i=a.onClose,j=a.onOpen,k=a.postId;a=d("PolarisReactRedux").useSelector(function(a){return d("polarisDynamicExploreSelectors").getPostModalCompatibleGridItemIds(a,f,e)});var l=d("PolarisReactRedux").useSelector(function(a){return d("polarisDynamicExploreSelectors").getGridItems(a,f,e).find(function(a){return d("PolarisDynamicExploreMediaHelpers").getPostId(a)===k})});return l!=null&&h.jsx(c("PolarisInstantPostModal.react"),{analyticsContext:b,combinedPostIds:a,dimensions:d("PolarisDynamicExploreMediaHelpers").getPostDimensions(l),mediaLinkBuilder:d("PolarisLinkBuilder").buildMediaLink,modalEntryPath:g,onClose:i,onlyReplaceModalHistory:f===d("PolarisDynamicExploreTypes").DYNAMIC_EXPLORE_GRID_TYPES.keyword_grid,onOpen:j,postCode:d("PolarisDynamicExploreMediaHelpers").getPostCode(l),postId:k,children:h.jsx(c("PolarisPost.react"),{analyticsContext:b+"Modal",autoplay:d("PolarisIsLoggedInDesktop").isLoggedInDesktop(),id:k,isVisible:!0,visiblePosition:0})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisMediaBrowserPostModal.react",["invariant","PolarisInstantPostModal.react","PolarisIsLoggedInDesktop","PolarisPost.react","PolarisPostVariants","PolarisReactRedux","PolarisRoutes","isStringNullOrEmpty","nullthrows","polarisPostSelectors","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react"),j=d("react").useEffect;function a(a){var b=a.analyticsContext,e=a.combinedPosts,f=a.mediaLinkBuilder,g=a.modalEntryPath,k=a.onClose,l=a.onImpression,m=a.onOpen,n=a.postId,o=d("PolarisReactRedux").useSelector(function(a){return d("polarisPostSelectors").getDeletedIds(a)});a=e.map(function(a){return a.id});var p=d("PolarisReactRedux").useSelector(function(a){return d("polarisPostSelectors").getPostOrNullById(a,n)});j(function(){p==null&&(o.includes(n)||h(0,51476),k())},[o,k,p,n]);return p==null?null:i.jsx(c("PolarisInstantPostModal.react"),{analyticsContext:b,combinedPostIds:a,dimensions:p.dimensions,mediaLinkBuilder:f,modalEntryPath:c("isStringNullOrEmpty")(g)?d("PolarisRoutes").FEED_PATH:g,onClose:k,onOpen:m,postCode:c("nullthrows")(p.code),postId:n,children:i.jsx(c("PolarisPost.react"),{analyticsContext:b+"Modal",autoplay:d("PolarisIsLoggedInDesktop").isLoggedInDesktop(),id:n,isVisible:!0,onImpression:l,shortcode:p.code,testid:void 0,variant:d("PolarisPostVariants").VARIANTS.flexible,visiblePosition:0})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisPostModal.react",["PolarisPostModalInternal.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){return h.jsx(c("PolarisPostModalInternal.react"),babelHelpers["extends"]({},a,{showLoadingShimmer:!0}))}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisClipsItemModal.react",["IGRouter","PolarisClipsHelpers","PolarisLinkBuilder","PolarisPost.react","PolarisPostModal.react","PolarisPostVariants","nullthrows","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i=d("react").useRef;function a(a){var b=a.analyticsContext,e=a.clips,f=a.history,g=a.onClose,j=a.onOpen;a=a.postId;f=i(f.location.pathname);var k=d("PolarisClipsHelpers").getClipItemFromPostID(e,a);if(!k)return null;e=e.map(function(a){return c("nullthrows")((a=a.media)==null?void 0:a.pk)});return h.jsx(c("PolarisPostModal.react"),{analyticsContext:b,combinedPostIds:e,dimensions:d("PolarisClipsHelpers").getClipDimensionsFromItemDict(k),mediaLinkBuilder:d("PolarisLinkBuilder").buildClipsMediaLink,modalEntryPath:f.current,onClose:g,onOpen:j,postCode:c("nullthrows")((e=k.media)==null?void 0:e.code),postId:a,children:h.jsx(c("PolarisPost.react"),{analyticsContext:b+"Modal",autoplay:!0,id:a,isVisible:!0,variant:d("PolarisPostVariants").VARIANTS.flexible,visiblePosition:0})})}a.displayName=a.name+" [from "+f.id+"]";b=d("IGRouter").withIGRouter(a);g["default"]=b}),98);