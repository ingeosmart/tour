(function(){
var translateObjs = {};
function trans(c, d) {
    var e = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    translateObjs[e[0x0]] = e;
    return '';
}
function regTextVar(f, g) {
    var h = ![];
    g = g['toLowerCase']();
    var i = function () {
        var r = this['get']('data');
        r['updateText'](r['translateObjs'][f]);
    };
    var j = function (s) {
        var t = s['data']['nextSelectedIndex'];
        if (t >= 0x0) {
            var u = s['source']['get']('items')[t];
            var v = function () {
                u['unbind']('start', v, this);
                i['call'](this);
            };
            u['bind']('start', v, this);
        } else
            i['call'](this);
    };
    var k = function (w) {
        return function (x) {
            if (w in x) {
                i['call'](this);
            }
        }['bind'](this);
    };
    var l = function (y, z) {
        return function (A, B) {
            if (y == A && z in B) {
                i['call'](this);
            }
        }['bind'](this);
    };
    var m = function (C, D, E) {
        for (var F = 0x0; F < C['length']; ++F) {
            var G = C[F];
            var H = G['get']('selectedIndex');
            if (H >= 0x0) {
                var I = D['split']('.');
                var J = G['get']('items')[H];
                if (E !== undefined && !E['call'](this, J))
                    continue;
                for (var K = 0x0; K < I['length']; ++K) {
                    if (J == undefined)
                        return '';
                    J = 'get' in J ? J['get'](I[K]) : J[I[K]];
                }
                return J;
            }
        }
        return '';
    };
    var n = function (L) {
        var M = L['get']('player');
        return M !== undefined && M['get']('viewerArea') == this['getMainViewer']();
    };
    switch (g) {
    case 'title':
    case 'subtitle':
        var p = function () {
            switch (g) {
            case 'title':
                return 'media.label';
            case 'subtitle':
                return 'media.data.subtitle';
            }
        }();
        if (p) {
            return function () {
                var N = this['_getPlayListsWithViewer'](this['getMainViewer']());
                if (!h) {
                    for (var O = 0x0; O < N['length']; ++O) {
                        N[O]['bind']('changing', j, this);
                    }
                    h = !![];
                }
                return m['call'](this, N, p, n);
            };
        }
        break;
    default:
        if (g['startsWith']('quiz.') && 'Quiz' in TDV) {
            var q = undefined;
            var p = function () {
                switch (g) {
                case 'quiz.questions.answered':
                    return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                case 'quiz.question.count':
                    return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                case 'quiz.items.found':
                    return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                case 'quiz.item.count':
                    return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                case 'quiz.score':
                    return TDV['Quiz']['PROPERTY']['SCORE'];
                case 'quiz.score.total':
                    return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                case 'quiz.time.remaining':
                    return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                case 'quiz.time.elapsed':
                    return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                case 'quiz.time.limit':
                    return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                case 'quiz.media.items.found':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                case 'quiz.media.item.count':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                case 'quiz.media.questions.answered':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                case 'quiz.media.question.count':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                case 'quiz.media.score':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                case 'quiz.media.score.total':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                case 'quiz.media.index':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                case 'quiz.media.count':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                case 'quiz.media.visited':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                default:
                    var P = /quiz\.([\w_]+)\.(.+)/['exec'](g);
                    if (P) {
                        q = P[0x1];
                        switch ('quiz.' + P[0x2]) {
                        case 'quiz.score':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                        case 'quiz.score.total':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                        case 'quiz.media.items.found':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                        case 'quiz.media.item.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                        case 'quiz.media.questions.answered':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                        case 'quiz.media.question.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                        case 'quiz.questions.answered':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                        case 'quiz.question.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                        case 'quiz.items.found':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                        case 'quiz.item.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                        case 'quiz.media.score':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                        case 'quiz.media.score.total':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                        }
                    }
                }
            }();
            if (p) {
                return function () {
                    var Q = this['get']('data')['quiz'];
                    if (Q) {
                        if (!h) {
                            if (q != undefined)
                                if (q == 'global') {
                                    var S = this['get']('data')['quizConfig'];
                                    var U = S['objectives'];
                                    for (var W = 0x0, Y = U['length']; W < Y; ++W) {
                                        Q['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], l['call'](this, U[W]['id'], p), this);
                                    }
                                } else {
                                    Q['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], l['call'](this, q, p), this);
                                }
                            else
                                Q['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], k['call'](this, p), this);
                            h = !![];
                        }
                        try {
                            var Z = 0x0;
                            if (q != undefined) {
                                if (q == 'global') {
                                    var S = this['get']('data')['quizConfig'];
                                    var U = S['objectives'];
                                    for (var W = 0x0, Y = U['length']; W < Y; ++W) {
                                        Z += Q['getObjective'](U[W]['id'], p);
                                    }
                                } else {
                                    Z = Q['getObjective'](q, p);
                                }
                            } else {
                                Z = Q['get'](p);
                                if (p == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                    Z += 0x1;
                            }
                            return Z;
                        } catch (a0) {
                            return undefined;
                        }
                    }
                };
            }
        }
        break;
    }
    return '';
}
function createQuizConfig(player, a1) {
    var a2 = {};
    a2['player'] = player;
    a2['playList'] = a1;
    function a3(a6) {
        for (var a7 = 0x0; a7 < a6['length']; ++a7) {
            var a8 = a6[a7];
            if ('id' in a8)
                player[a8['id']] = a8;
        }
    }
    if (a2['questions']) {
        a3(a2['questions']);
        for (var a4 = 0x0; a4 < a2['questions']['length']; ++a4) {
            var a5 = a2['questions'][a4];
            a3(a5['options']);
        }
    }
    if (a2['objectives']) {
        a3(a2['objectives']);
    }
    if (a2['califications']) {
        a3(a2['califications']);
    }
    if (a2['score']) {
        player[a2['score']['id']] = a2['score'];
    }
    if (a2['question']) {
        player[a2['question']['id']] = a2['question'];
    }
    if (a2['timeout']) {
        player[a2['timeout']['id']] = a2['timeout'];
    }
    player['get']('data')['translateObjs'] = translateObjs;
    return a2;
}
var script = {"backgroundColorRatios":[0],"overflow":"hidden","borderRadius":0,"borderSize":0,"scrollBarMargin":2,"scrollBarWidth":10,"children":["this.MainViewer"],"width":"100%","defaultVRPointer":"laser","minWidth":0,"minHeight":0,"paddingTop":0,"id":"rootPlayer","class":"Player","scripts":{"resumePlayers":TDV.Tour.Script.resumePlayers,"translate":TDV.Tour.Script.translate,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"shareSocial":TDV.Tour.Script.shareSocial,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"initAnalytics":TDV.Tour.Script.initAnalytics,"historyGoBack":TDV.Tour.Script.historyGoBack,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"showWindow":TDV.Tour.Script.showWindow,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"cloneBindings":TDV.Tour.Script.cloneBindings,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"getMainViewer":TDV.Tour.Script.getMainViewer,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"openLink":TDV.Tour.Script.openLink,"isPanorama":TDV.Tour.Script.isPanorama,"clone":TDV.Tour.Script.clone,"getKey":TDV.Tour.Script.getKey,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"cloneCamera":TDV.Tour.Script.cloneCamera,"showPopupImage":TDV.Tour.Script.showPopupImage,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"init":TDV.Tour.Script.init,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"getMediaByName":TDV.Tour.Script.getMediaByName,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"historyGoForward":TDV.Tour.Script.historyGoForward,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"quizShowScore":TDV.Tour.Script.quizShowScore,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"registerKey":TDV.Tour.Script.registerKey,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"unregisterKey":TDV.Tour.Script.unregisterKey,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"downloadFile":TDV.Tour.Script.downloadFile,"playAudioList":TDV.Tour.Script.playAudioList,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"quizStart":TDV.Tour.Script.quizStart,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"textToSpeech":TDV.Tour.Script.textToSpeech,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"existsKey":TDV.Tour.Script.existsKey,"getComponentByName":TDV.Tour.Script.getComponentByName,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"executeJS":TDV.Tour.Script.executeJS,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"initQuiz":TDV.Tour.Script.initQuiz,"getPixels":TDV.Tour.Script.getPixels,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"mixObject":TDV.Tour.Script.mixObject,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"setLocale":TDV.Tour.Script.setLocale,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"quizFinish":TDV.Tour.Script.quizFinish,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"getOverlays":TDV.Tour.Script.getOverlays,"setMapLocation":TDV.Tour.Script.setMapLocation,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"setValue":TDV.Tour.Script.setValue,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay},"shadow":false,"paddingBottom":0,"backgroundOpacity":1,"scrollBarOpacity":0.5,"mouseWheelEnabled":true,"desktopMipmappingEnabled":false,"definitions": [{"class":"PlayList","items":[{"camera":"this.panorama_7D796535_7170_13AA_41D0_7B6B1A8CFC46_camera","media":"this.panorama_7D796535_7170_13AA_41D0_7B6B1A8CFC46","class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","end":"this.trigger('tourEnded')"}],"id":"mainPlayList"},{"class":"Panorama","label":trans('panorama_7D796535_7170_13AA_41D0_7B6B1A8CFC46.label'),"data":{"label":"IMG_20220924_163028_00_merged"},"hfov":360,"frames":[{"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_7D796535_7170_13AA_41D0_7B6B1A8CFC46_t.jpg","cube":{"class":"ImageResource","levels":[{"height":2048,"width":12288,"colCount":24,"url":"media/panorama_7D796535_7170_13AA_41D0_7B6B1A8CFC46_0/{face}/0/{row}_{column}.jpg","class":"TiledImageResourceLevel","tags":"ondemand","rowCount":4},{"height":1024,"width":6144,"colCount":12,"url":"media/panorama_7D796535_7170_13AA_41D0_7B6B1A8CFC46_0/{face}/1/{row}_{column}.jpg","class":"TiledImageResourceLevel","tags":"ondemand","rowCount":2},{"height":512,"width":3072,"colCount":6,"url":"media/panorama_7D796535_7170_13AA_41D0_7B6B1A8CFC46_0/{face}/2/{row}_{column}.jpg","class":"TiledImageResourceLevel","tags":["ondemand","preload"],"rowCount":1},{"height":2048,"width":12288,"colCount":6,"url":"media/panorama_7D796535_7170_13AA_41D0_7B6B1A8CFC46_0/{face}/vr2gen/0.jpg","class":"TiledImageResourceLevel","tags":"mobilevr2gen","rowCount":1}]}}],"partial":false,"hfovMin":"135%","thumbnailUrl":"media/panorama_7D796535_7170_13AA_41D0_7B6B1A8CFC46_t.jpg","hfovMax":130,"vfov":180,"pitch":0,"id":"panorama_7D796535_7170_13AA_41D0_7B6B1A8CFC46"},{"progressBackgroundOpacity":1,"vrPointerSelectionColor":"#FF6600","borderSize":0,"playbackBarBottom":5,"playbackBarProgressBackgroundColorDirection":"vertical","toolTipShadowBlurRadius":3,"vrPointerSelectionTime":2000,"playbackBarBorderSize":0,"subtitlesFontFamily":"Arial","progressLeft":0,"toolTipDisplayTime":600,"id":"MainViewer","toolTipFontFamily":"Arial","width":"100%","shadow":false,"progressBorderColor":"#000000","surfaceReticleColor":"#FFFFFF","progressBarBackgroundColor":["#3399FF"],"toolTipOpacity":1,"toolTipFontStyle":"normal","playbackBarBackgroundColor":["#FFFFFF"],"subtitlesShadow":false,"toolTipFontWeight":"normal","subtitlesTop":0,"playbackBarHeight":10,"surfaceReticleOpacity":0.6,"toolTipPaddingRight":6,"playbackBarHeadBackgroundColorDirection":"vertical","displayTooltipInTouchScreens":true,"playbackBarProgressBorderSize":0,"toolTipBorderColor":"#767676","subtitlesPaddingTop":5,"playbackBarHeadWidth":6,"playbackBarBackgroundColorDirection":"vertical","subtitlesOpacity":1,"paddingLeft":0,"toolTipPaddingTop":4,"height":"100%","paddingRight":0,"subtitlesTextShadowColor":"#000000","subtitlesGap":0,"playbackBarRight":0,"playbackBarProgressBorderRadius":0,"toolTipTextShadowBlurRadius":3,"toolTipBorderSize":1,"displayTooltipInSurfaceSelection":true,"subtitlesBackgroundColor":"#000000","playbackBarHeadShadowHorizontalLength":0,"progressBottom":0,"toolTipBorderRadius":3,"toolTipHorizontalAlign":"center","translationTransitionDuration":1000,"surfaceReticleSelectionOpacity":1,"playbackBarBackgroundOpacity":1,"surfaceReticleSelectionColor":"#FFFFFF","progressBarOpacity":1,"transitionDuration":500,"toolTipShadowOpacity":1,"subtitlesPaddingLeft":5,"subtitlesVerticalAlign":"bottom","subtitlesFontWeight":"normal","toolTipBackgroundColor":"#F6F6F6","playbackBarProgressBackgroundColor":["#3399FF"],"progressBackgroundColor":["#FFFFFF"],"subtitlesPaddingBottom":5,"subtitlesFontSize":"3vmin","subtitlesHorizontalAlign":"center","subtitlesBottom":50,"borderRadius":0,"subtitlesBackgroundOpacity":0.2,"progressHeight":10,"vrPointerColor":"#FFFFFF","playbackBarHeadShadowOpacity":0.7,"playbackBarHeadShadowBlurRadius":3,"subtitlesTextShadowOpacity":1,"toolTipPaddingBottom":4,"minWidth":100,"doubleClickAction":"toggle_fullscreen","minHeight":50,"paddingTop":0,"playbackBarLeft":0,"progressBorderSize":0,"class":"ViewerArea","progressBarBorderRadius":0,"toolTipTextShadowColor":"#000000","progressBackgroundColorRatios":[0],"paddingBottom":0,"subtitlesPaddingRight":5,"firstTransitionDuration":0,"playbackBarProgressBackgroundColorRatios":[0],"toolTipPaddingLeft":6,"playbackBarBorderColor":"#FFFFFF","playbackBarHeadHeight":15,"playbackBarHeadShadowVerticalLength":0,"progressBarBorderSize":0,"toolTipShadowVerticalLength":0,"playbackBarHeadShadowColor":"#000000","subtitlesBorderColor":"#FFFFFF","subtitlesEnabled":true,"toolTipTextShadowOpacity":0,"subtitlesBorderSize":0,"propagateClick":false,"toolTipShadowHorizontalLength":0,"playbackBarHeadBackgroundColorRatios":[0,1],"toolTipShadowSpread":0,"toolTipFontColor":"#606060","subtitlesTextShadowVerticalLength":1,"progressRight":0,"progressOpacity":1,"playbackBarHeadBorderSize":0,"playbackBarProgressBorderColor":"#000000","progressBarBackgroundColorDirection":"vertical","playbackBarBorderRadius":0,"transitionMode":"blending","toolTipShadowColor":"#333138","progressBarBorderColor":"#000000","playbackBarHeadOpacity":1,"progressBarBackgroundColorRatios":[0],"playbackBarHeadShadow":true,"toolTipFontSize":"1.11vmin","subtitlesTextDecoration":"none","subtitlesFontColor":"#FFFFFF","progressBorderRadius":0,"subtitlesTextShadowHorizontalLength":1,"playbackBarHeadBorderRadius":0,"playbackBarOpacity":1,"playbackBarProgressOpacity":1,"playbackBarHeadBackgroundColor":["#111111","#666666"],"progressBackgroundColorDirection":"vertical","playbackBarHeadBorderColor":"#000000","subtitlesTextShadowBlurRadius":0,"data":{"name":"Main Viewer"}},{"hoverFactor":0,"initialPosition":{"class":"PanoramaCameraPosition","yaw":0,"pitch":0},"class":"PanoramaCamera","automaticZoomSpeed":10,"initialSequence":"this.sequence_7BF58F6F_7170_2FB5_41D4_2E3D31F60CB8","id":"panorama_7D796535_7170_13AA_41D0_7B6B1A8CFC46_camera"},{"viewerArea":"this.MainViewer","aaEnabled":true,"touchControlMode":"drag_rotation","gyroscopeVerticalDraggingEnabled":true,"displayPlaybackBar":true,"zoomEnabled":true,"mouseControlMode":"drag_rotation","class":"PanoramaPlayer","surfaceSelectionEnabled":false,"arrowKeysAction":"translate","id":"MainViewerPanoramaPlayer"},{"restartMovementOnUserInteraction":false,"id":"sequence_7BF58F6F_7170_2FB5_41D4_2E3D31F60CB8","class":"PanoramaCameraSequence","movements":[{"class":"DistancePanoramaCameraMovement","yawDelta":18.5,"yawSpeed":7.96,"easing":"cubic_in"},{"class":"DistancePanoramaCameraMovement","yawDelta":323,"yawSpeed":7.96,"easing":"linear"},{"class":"DistancePanoramaCameraMovement","yawDelta":18.5,"yawSpeed":7.96,"easing":"cubic_out"}]}],"horizontalAlign":"left","scrollBarColor":"#000000","verticalAlign":"top","paddingLeft":0,"propagateClick":false,"height":"100%","scrollBarVisible":"rollOver","paddingRight":0,"contentOpaque":false,"backgroundColor":["#FFFFFF"],"backgroundPreloadEnabled":true,"mediaActivationMode":"window","defaultMenu":["fullscreen","mute","rotation"],"downloadEnabled":false,"toolTipHorizontalAlign":"center","vrPolyfillScale":0.75,"mobileMipmappingEnabled":false,"layout":"absolute","data":{"textToSpeechConfig":{"stopBackgroundAudio":false,"volume":1,"speechOnQuizQuestion":false,"speechOnInfoWindow":false,"speechOnTooltip":false,"pitch":1,"rate":1},"locales":{"es":"locale/es.txt"},"defaultLocale":"es","name":"Player531"},"start":"this.init()","backgroundColorDirection":"vertical","gap":10};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['history'] = {};
script['scripts']['createQuizConfig'] = createQuizConfig;
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device_v2022.1.23.js.map
})();
//Generated with v2022.1.23, Sat Sep 24 2022