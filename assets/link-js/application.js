/*
Turbolinks 5.2.0
Copyright Â© 2018 Basecamp, LLC
 */
function replaceUrlParam(e, t, n) {
    null == n && (n = "");
    var i = new RegExp("\\b(" + t + "=).*?(&|$)");
    return e.search(i) >= 0 ? e.replace(i, "$1" + n + "$2") : e + (e.indexOf("?") > 0 ? "&" : "?") + t + "=" + n
}

function removeParam(e, t) {
    var n = t.split("?")[0],
        i = [],
        r = -1 !== t.indexOf("?") ? t.split("?")[1] : "";
    if ("" !== r) {
        for (var a = (i = r.split("&")).length - 1; a >= 0; a -= 1) i[a].split("=")[0] === e && i.splice(a, 1);
        n = n + "?" + i.join("&")
    }
    return n
}

function secure_url_params() {
    return "undefined" != typeof chmac && null !== chmac ? "?chmac=" + chmac : ""
}

function __guard__(e, t) {
    return null != e ? t(e) : undefined
}

function __guardMethod__(e, t, n) {
    return null != e && "function" == typeof e[t] ? n(e, t) : undefined
}(function () {
    var e = this;
    (function () {
        (function () {
            this.Turbolinks = {
                supported: null != window.history.pushState && null != window.requestAnimationFrame && null != window.addEventListener,
                visit: function (e, n) {
                    return t.controller.visit(e, n)
                },
                clearCache: function () {
                    return t.controller.clearCache()
                },
                setProgressBarDelay: function (e) {
                    return t.controller.setProgressBarDelay(e)
                }
            }
        }).call(this)
    }).call(e);
    var t = e.Turbolinks;
    (function () {
        (function () {
            var e, n, i, r = [].slice;
            t.copyObject = function (e) {
                var t, n, i;
                for (t in n = {}, e) i = e[t], n[t] = i;
                return n
            }, t.closest = function (t, n) {
                return e.call(t, n)
            }, e = function () {
                var e;
                return null != (e = document.documentElement.closest) ? e : function (e) {
                    var t;
                    for (t = this; t;) {
                        if (t.nodeType === Node.ELEMENT_NODE && n.call(t, e)) return t;
                        t = t.parentNode
                    }
                }
            }(), t.defer = function (e) {
                return setTimeout(e, 1)
            }, t.throttle = function (e) {
                var t;
                return t = null,
                    function () {
                        var n, i;
                        return n = 1 <= arguments.length ? r.call(arguments, 0) : [], null != t ? t : t = requestAnimationFrame((i = this, function () {
                            return t = null, e.apply(i, n)
                        }))
                    }
            }, t.dispatch = function (e, t) {
                var n, r, a, o, s, l;
                return l = (s = null != t ? t : {}).target, n = s.cancelable, r = s.data, (a = document.createEvent("Events")).initEvent(e, !0, !0 === n), a.data = null != r ? r : {}, a.cancelable && !i && (o = a.preventDefault, a.preventDefault = function () {
                    return this.defaultPrevented || Object.defineProperty(this, "defaultPrevented", {
                        get: function () {
                            return !0
                        }
                    }), o.call(this)
                }), (null != l ? l : document).dispatchEvent(a), a
            }, i = function () {
                var e;
                return (e = document.createEvent("Events")).initEvent("test", !0, !0), e.preventDefault(), e.defaultPrevented
            }(), t.match = function (e, t) {
                return n.call(e, t)
            }, n = function () {
                var e, t, n, i;
                return null != (t = null != (n = null != (i = (e = document.documentElement).matchesSelector) ? i : e.webkitMatchesSelector) ? n : e.msMatchesSelector) ? t : e.mozMatchesSelector
            }(), t.uuid = function () {
                var e, t, n;
                for (n = "", e = t = 1; 36 >= t; e = ++t) n += 9 === e || 14 === e || 19 === e || 24 === e ? "-" : 15 === e ? "4" : 20 === e ? (Math.floor(4 * Math.random()) + 8).toString(16) : Math.floor(15 * Math.random()).toString(16);
                return n
            }
        }).call(this),
            function () {
                t.Location = function () {
                    function e(e) {
                        var t, n;
                        null == e && (e = ""), (n = document.createElement("a")).href = e.toString(), this.absoluteURL = n.href, 2 > (t = n.hash.length) ? this.requestURL = this.absoluteURL : (this.requestURL = this.absoluteURL.slice(0, -t), this.anchor = n.hash.slice(1))
                    }
                    var t, n, i, r;
                    return e.wrap = function (e) {
                        return e instanceof this ? e : new this(e)
                    }, e.prototype.getOrigin = function () {
                        return this.absoluteURL.split("/", 3).join("/")
                    }, e.prototype.getPath = function () {
                        var e, t;
                        return null != (e = null != (t = this.requestURL.match(/\/\/[^\/]*(\/[^?;]*)/)) ? t[1] : void 0) ? e : "/"
                    }, e.prototype.getPathComponents = function () {
                        return this.getPath().split("/").slice(1)
                    }, e.prototype.getLastPathComponent = function () {
                        return this.getPathComponents().slice(-1)[0]
                    }, e.prototype.getExtension = function () {
                        var e, t;
                        return null != (e = null != (t = this.getLastPathComponent().match(/\.[^.]*$/)) ? t[0] : void 0) ? e : ""
                    }, e.prototype.isHTML = function () {
                        return this.getExtension().match(/^(?:|\.(?:htm|html|xhtml))$/)
                    }, e.prototype.isPrefixedBy = function (e) {
                        var t;
                        return t = n(e), this.isEqualTo(e) || r(this.absoluteURL, t)
                    }, e.prototype.isEqualTo = function (e) {
                        return this.absoluteURL === (null != e ? e.absoluteURL : void 0)
                    }, e.prototype.toCacheKey = function () {
                        return this.requestURL
                    }, e.prototype.toJSON = function () {
                        return this.absoluteURL
                    }, e.prototype.toString = function () {
                        return this.absoluteURL
                    }, e.prototype.valueOf = function () {
                        return this.absoluteURL
                    }, n = function (e) {
                        return t(e.getOrigin() + e.getPath())
                    }, t = function (e) {
                        return i(e, "/") ? e : e + "/"
                    }, r = function (e, t) {
                        return e.slice(0, t.length) === t
                    }, i = function (e, t) {
                        return e.slice(-t.length) === t
                    }, e
                }()
            }.call(this),
            function () {
                var e = function (e, t) {
                    return function () {
                        return e.apply(t, arguments)
                    }
                };
                t.HttpRequest = function () {
                    function n(n, i, r) {
                        this.delegate = n, this.requestCanceled = e(this.requestCanceled, this), this.requestTimedOut = e(this.requestTimedOut, this), this.requestFailed = e(this.requestFailed, this), this.requestLoaded = e(this.requestLoaded, this), this.requestProgressed = e(this.requestProgressed, this), this.url = t.Location.wrap(i).requestURL, this.referrer = t.Location.wrap(r).absoluteURL, this.createXHR()
                    }
                    return n.NETWORK_FAILURE = 0, n.TIMEOUT_FAILURE = -1, n.timeout = 60, n.prototype.send = function () {
                        var e;
                        return this.xhr && !this.sent ? (this.notifyApplicationBeforeRequestStart(), this.setProgress(0), this.xhr.send(), this.sent = !0, "function" == typeof (e = this.delegate).requestStarted ? e.requestStarted() : void 0) : void 0
                    }, n.prototype.cancel = function () {
                        return this.xhr && this.sent ? this.xhr.abort() : void 0
                    }, n.prototype.requestProgressed = function (e) {
                        return e.lengthComputable ? this.setProgress(e.loaded / e.total) : void 0
                    }, n.prototype.requestLoaded = function () {
                        return this.endRequest((e = this, function () {
                            var t;
                            return 200 <= (t = e.xhr.status) && 300 > t ? e.delegate.requestCompletedWithResponse(e.xhr.responseText, e.xhr.getResponseHeader("Turbolinks-Location")) : (e.failed = !0, e.delegate.requestFailedWithStatusCode(e.xhr.status, e.xhr.responseText))
                        }));
                        var e
                    }, n.prototype.requestFailed = function () {
                        return this.endRequest((e = this, function () {
                            return e.failed = !0, e.delegate.requestFailedWithStatusCode(e.constructor.NETWORK_FAILURE)
                        }));
                        var e
                    }, n.prototype.requestTimedOut = function () {
                        return this.endRequest((e = this, function () {
                            return e.failed = !0, e.delegate.requestFailedWithStatusCode(e.constructor.TIMEOUT_FAILURE)
                        }));
                        var e
                    }, n.prototype.requestCanceled = function () {
                        return this.endRequest()
                    }, n.prototype.notifyApplicationBeforeRequestStart = function () {
                        return t.dispatch("turbolinks:request-start", {
                            data: {
                                url: this.url,
                                xhr: this.xhr
                            }
                        })
                    }, n.prototype.notifyApplicationAfterRequestEnd = function () {
                        return t.dispatch("turbolinks:request-end", {
                            data: {
                                url: this.url,
                                xhr: this.xhr
                            }
                        })
                    }, n.prototype.createXHR = function () {
                        return this.xhr = new XMLHttpRequest, this.xhr.open("GET", this.url, !0), this.xhr.timeout = 1e3 * this.constructor.timeout, this.xhr.setRequestHeader("Accept", "text/html, application/xhtml+xml"), this.xhr.setRequestHeader("Turbolinks-Referrer", this.referrer), this.xhr.onprogress = this.requestProgressed, this.xhr.onload = this.requestLoaded, this.xhr.onerror = this.requestFailed, this.xhr.ontimeout = this.requestTimedOut, this.xhr.onabort = this.requestCanceled
                    }, n.prototype.endRequest = function (e) {
                        return this.xhr ? (this.notifyApplicationAfterRequestEnd(), null != e && e.call(this), this.destroy()) : void 0
                    }, n.prototype.setProgress = function (e) {
                        var t;
                        return this.progress = e, "function" == typeof (t = this.delegate).requestProgressed ? t.requestProgressed(this.progress) : void 0
                    }, n.prototype.destroy = function () {
                        var e;
                        return this.setProgress(1), "function" == typeof (e = this.delegate).requestFinished && e.requestFinished(), this.delegate = null, this.xhr = null
                    }, n
                }()
            }.call(this),
            function () {
                var e = function (e, t) {
                    return function () {
                        return e.apply(t, arguments)
                    }
                };
                t.ProgressBar = function () {
                    function t() {
                        this.trickle = e(this.trickle, this), this.stylesheetElement = this.createStylesheetElement(), this.progressElement = this.createProgressElement()
                    }
                    var n;
                    return n = 300, t.defaultCSS = ".turbolinks-progress-bar {\n  position: fixed;\n  display: block;\n  top: 0;\n  left: 0;\n  height: 3px;\n  background: #0076ff;\n  z-index: 9999;\n  transition: width " + n + "ms ease-out, opacity " + n / 2 + "ms " + n / 2 + "ms ease-in;\n  transform: translate3d(0, 0, 0);\n}", t.prototype.show = function () {
                        return this.visible ? void 0 : (this.visible = !0, this.installStylesheetElement(), this.installProgressElement(), this.startTrickling())
                    }, t.prototype.hide = function () {
                        return this.visible && !this.hiding ? (this.hiding = !0, this.fadeProgressElement((e = this, function () {
                            return e.uninstallProgressElement(), e.stopTrickling(), e.visible = !1, e.hiding = !1
                        }))) : void 0;
                        var e
                    }, t.prototype.setValue = function (e) {
                        return this.value = e, this.refresh()
                    }, t.prototype.installStylesheetElement = function () {
                        return document.head.insertBefore(this.stylesheetElement, document.head.firstChild)
                    }, t.prototype.installProgressElement = function () {
                        return this.progressElement.style.width = 0, this.progressElement.style.opacity = 1, document.documentElement.insertBefore(this.progressElement, document.body), this.refresh()
                    }, t.prototype.fadeProgressElement = function (e) {
                        return this.progressElement.style.opacity = 0, setTimeout(e, 1.5 * n)
                    }, t.prototype.uninstallProgressElement = function () {
                        return this.progressElement.parentNode ? document.documentElement.removeChild(this.progressElement) : void 0
                    }, t.prototype.startTrickling = function () {
                        return null != this.trickleInterval ? this.trickleInterval : this.trickleInterval = setInterval(this.trickle, n)
                    }, t.prototype.stopTrickling = function () {
                        return clearInterval(this.trickleInterval), this.trickleInterval = null
                    }, t.prototype.trickle = function () {
                        return this.setValue(this.value + Math.random() / 100)
                    }, t.prototype.refresh = function () {
                        return requestAnimationFrame((e = this, function () {
                            return e.progressElement.style.width = 10 + 90 * e.value + "%"
                        }));
                        var e
                    }, t.prototype.createStylesheetElement = function () {
                        var e;
                        return (e = document.createElement("style")).type = "text/css", e.textContent = this.constructor.defaultCSS, e
                    }, t.prototype.createProgressElement = function () {
                        var e;
                        return (e = document.createElement("div")).className = "turbolinks-progress-bar", e
                    }, t
                }()
            }.call(this),
            function () {
                var e = function (e, t) {
                    return function () {
                        return e.apply(t, arguments)
                    }
                };
                t.BrowserAdapter = function () {
                    function n(n) {
                        this.controller = n, this.showProgressBar = e(this.showProgressBar, this), this.progressBar = new t.ProgressBar
                    }
                    var i, r, a;
                    return a = t.HttpRequest, i = a.NETWORK_FAILURE, r = a.TIMEOUT_FAILURE, n.prototype.visitProposedToLocationWithAction = function (e, t) {
                        return this.controller.startVisitToLocationWithAction(e, t)
                    }, n.prototype.visitStarted = function (e) {
                        return e.issueRequest(), e.changeHistory(), e.loadCachedSnapshot()
                    }, n.prototype.visitRequestStarted = function (e) {
                        return this.progressBar.setValue(0), e.hasCachedSnapshot() || "restore" !== e.action ? this.showProgressBarAfterDelay() : this.showProgressBar()
                    }, n.prototype.visitRequestProgressed = function (e) {
                        return this.progressBar.setValue(e.progress)
                    }, n.prototype.visitRequestCompleted = function (e) {
                        return e.loadResponse()
                    }, n.prototype.visitRequestFailedWithStatusCode = function (e, t) {
                        switch (t) {
                            case i:
                            case r:
                                return this.reload();
                            default:
                                return e.loadResponse()
                        }
                    }, n.prototype.visitRequestFinished = function () {
                        return this.hideProgressBar()
                    }, n.prototype.visitCompleted = function (e) {
                        return e.followRedirect()
                    }, n.prototype.pageInvalidated = function () {
                        return this.reload()
                    }, n.prototype.showProgressBarAfterDelay = function () {
                        return this.progressBarTimeout = setTimeout(this.showProgressBar, this.controller.progressBarDelay)
                    }, n.prototype.showProgressBar = function () {
                        return this.progressBar.show()
                    }, n.prototype.hideProgressBar = function () {
                        return this.progressBar.hide(), clearTimeout(this.progressBarTimeout)
                    }, n.prototype.reload = function () {
                        return window.location.reload()
                    }, n
                }()
            }.call(this),
            function () {
                var e = function (e, t) {
                    return function () {
                        return e.apply(t, arguments)
                    }
                };
                t.History = function () {
                    function n(t) {
                        this.delegate = t, this.onPageLoad = e(this.onPageLoad, this), this.onPopState = e(this.onPopState, this)
                    }
                    return n.prototype.start = function () {
                        return this.started ? void 0 : (addEventListener("popstate", this.onPopState, !1), addEventListener("load", this.onPageLoad, !1), this.started = !0)
                    }, n.prototype.stop = function () {
                        return this.started ? (removeEventListener("popstate", this.onPopState, !1), removeEventListener("load", this.onPageLoad, !1), this.started = !1) : void 0
                    }, n.prototype.push = function (e, n) {
                        return e = t.Location.wrap(e), this.update("push", e, n)
                    }, n.prototype.replace = function (e, n) {
                        return e = t.Location.wrap(e), this.update("replace", e, n)
                    }, n.prototype.onPopState = function (e) {
                        var n, i, r, a;
                        return this.shouldHandlePopState() && (a = null != (i = e.state) ? i.turbolinks : void 0) ? (n = t.Location.wrap(window.location), r = a.restorationIdentifier, this.delegate.historyPoppedToLocationWithRestorationIdentifier(n, r)) : void 0
                    }, n.prototype.onPageLoad = function () {
                        return t.defer(function (e) {
                            return function () {
                                return e.pageLoaded = !0
                            }
                        }(this))
                    }, n.prototype.shouldHandlePopState = function () {
                        return this.pageIsLoaded()
                    }, n.prototype.pageIsLoaded = function () {
                        return this.pageLoaded || "complete" === document.readyState
                    }, n.prototype.update = function (e, t, n) {
                        var i;
                        return i = {
                            turbolinks: {
                                restorationIdentifier: n
                            }
                        }, history[e + "State"](i, null, t)
                    }, n
                }()
            }.call(this),
            function () {
                t.HeadDetails = function () {
                    function e(e) {
                        var t, n, i, o, s;
                        for (this.elements = {}, n = 0, o = e.length; o > n; n++)(s = e[n]).nodeType === Node.ELEMENT_NODE && (i = s.outerHTML, (null != (t = this.elements)[i] ? t[i] : t[i] = {
                            type: a(s),
                            tracked: r(s),
                            elements: []
                        }).elements.push(s))
                    }
                    var t, n, i, r, a;
                    return e.fromHeadElement = function (e) {
                        var t;
                        return new this(null != (t = null != e ? e.childNodes : void 0) ? t : [])
                    }, e.prototype.hasElementWithKey = function (e) {
                        return e in this.elements
                    }, e.prototype.getTrackedElementSignature = function () {
                        var e;
                        return function () {
                            var t, n;
                            for (e in n = [], t = this.elements) t[e].tracked && n.push(e);
                            return n
                        }.call(this).join("")
                    }, e.prototype.getScriptElementsNotInDetails = function (e) {
                        return this.getElementsMatchingTypeNotInDetails("script", e)
                    }, e.prototype.getStylesheetElementsNotInDetails = function (e) {
                        return this.getElementsMatchingTypeNotInDetails("stylesheet", e)
                    }, e.prototype.getElementsMatchingTypeNotInDetails = function (e, t) {
                        var n, i, r, a, o, s;
                        for (i in o = [], r = this.elements) s = (a = r[i]).type, n = a.elements, s !== e || t.hasElementWithKey(i) || o.push(n[0]);
                        return o
                    }, e.prototype.getProvisionalElements = function () {
                        var e, t, n, i, r, a, o;
                        for (t in n = [], i = this.elements) o = (r = i[t]).type, a = r.tracked, e = r.elements, null != o || a ? e.length > 1 && n.push.apply(n, e.slice(1)) : n.push.apply(n, e);
                        return n
                    }, e.prototype.getMetaValue = function (e) {
                        var t;
                        return null != (t = this.findMetaElementByName(e)) ? t.getAttribute("content") : void 0
                    }, e.prototype.findMetaElementByName = function (e) {
                        var n, i, r, a;
                        for (r in n = void 0, a = this.elements) i = a[r].elements, t(i[0], e) && (n = i[0]);
                        return n
                    }, a = function (e) {
                        return n(e) ? "script" : i(e) ? "stylesheet" : void 0
                    }, r = function (e) {
                        return "reload" === e.getAttribute("data-turbolinks-track")
                    }, n = function (e) {
                        return "script" === e.tagName.toLowerCase()
                    }, i = function (e) {
                        var t;
                        return "style" === (t = e.tagName.toLowerCase()) || "link" === t && "stylesheet" === e.getAttribute("rel")
                    }, t = function (e, t) {
                        return "meta" === e.tagName.toLowerCase() && e.getAttribute("name") === t
                    }, e
                }()
            }.call(this),
            function () {
                t.Snapshot = function () {
                    function e(e, t) {
                        this.headDetails = e, this.bodyElement = t
                    }
                    return e.wrap = function (e) {
                        return e instanceof this ? e : "string" == typeof e ? this.fromHTMLString(e) : this.fromHTMLElement(e)
                    }, e.fromHTMLString = function (e) {
                        var t;
                        return (t = document.createElement("html")).innerHTML = e, this.fromHTMLElement(t)
                    }, e.fromHTMLElement = function (e) {
                        var n, i, r;
                        return i = e.querySelector("head"), n = null != (r = e.querySelector("body")) ? r : document.createElement("body"), new this(t.HeadDetails.fromHeadElement(i), n)
                    }, e.prototype.clone = function () {
                        return new this.constructor(this.headDetails, this.bodyElement.cloneNode(!0))
                    }, e.prototype.getRootLocation = function () {
                        var e, n;
                        return n = null != (e = this.getSetting("root")) ? e : "/", new t.Location(n)
                    }, e.prototype.getCacheControlValue = function () {
                        return this.getSetting("cache-control")
                    }, e.prototype.getElementForAnchor = function (e) {
                        try {
                            return this.bodyElement.querySelector("[id='" + e + "'], a[name='" + e + "']")
                        } catch (t) {}
                    }, e.prototype.getPermanentElements = function () {
                        return this.bodyElement.querySelectorAll("[id][data-turbolinks-permanent]")
                    }, e.prototype.getPermanentElementById = function (e) {
                        return this.bodyElement.querySelector("#" + e + "[data-turbolinks-permanent]")
                    }, e.prototype.getPermanentElementsPresentInSnapshot = function (e) {
                        var t, n, i, r, a;
                        for (a = [], n = 0, i = (r = this.getPermanentElements()).length; i > n; n++) t = r[n], e.getPermanentElementById(t.id) && a.push(t);
                        return a
                    }, e.prototype.findFirstAutofocusableElement = function () {
                        return this.bodyElement.querySelector("[autofocus]")
                    }, e.prototype.hasAnchor = function (e) {
                        return null != this.getElementForAnchor(e)
                    }, e.prototype.isPreviewable = function () {
                        return "no-preview" !== this.getCacheControlValue()
                    }, e.prototype.isCacheable = function () {
                        return "no-cache" !== this.getCacheControlValue()
                    }, e.prototype.isVisitable = function () {
                        return "reload" !== this.getSetting("visit-control")
                    }, e.prototype.getSetting = function (e) {
                        return this.headDetails.getMetaValue("turbolinks-" + e)
                    }, e
                }()
            }.call(this),
            function () {
                var e = [].slice;
                t.Renderer = function () {
                    function t() {}
                    var n;
                    return t.render = function () {
                        var t, n, i;
                        return n = arguments[0], t = arguments[1], (i = function (e, t, n) {
                            n.prototype = e.prototype;
                            var i = new n,
                                r = e.apply(i, t);
                            return Object(r) === r ? r : i
                        }(this, 3 <= arguments.length ? e.call(arguments, 2) : [], function () {})).delegate = n, i.render(t), i
                    }, t.prototype.renderView = function (e) {
                        return this.delegate.viewWillRender(this.newBody), e(), this.delegate.viewRendered(this.newBody)
                    }, t.prototype.invalidateView = function () {
                        return this.delegate.viewInvalidated()
                    }, t.prototype.createScriptElement = function (e) {
                        var t;
                        return "false" === e.getAttribute("data-turbolinks-eval") ? e : ((t = document.createElement("script")).textContent = e.textContent, t.async = !1, n(t, e), t)
                    }, n = function (e, t) {
                        var n, i, r, a, o, s, l;
                        for (s = [], n = 0, i = (a = t.attributes).length; i > n; n++) r = (o = a[n]).name, l = o.value, s.push(e.setAttribute(r, l));
                        return s
                    }, t
                }()
            }.call(this),
            function () {
                var e, n, i = function (e, t) {
                        function n() {
                            this.constructor = e
                        }
                        for (var i in t) r.call(t, i) && (e[i] = t[i]);
                        return n.prototype = t.prototype, e.prototype = new n, e.__super__ = t.prototype, e
                    },
                    r = {}.hasOwnProperty;
                t.SnapshotRenderer = function (t) {
                    function r(e, t, n) {
                        this.currentSnapshot = e, this.newSnapshot = t, this.isPreview = n, this.currentHeadDetails = this.currentSnapshot.headDetails, this.newHeadDetails = this.newSnapshot.headDetails, this.currentBody = this.currentSnapshot.bodyElement, this.newBody = this.newSnapshot.bodyElement
                    }
                    return i(r, t), r.prototype.render = function (e) {
                        return this.shouldRender() ? (this.mergeHead(), this.renderView((t = this, function () {
                            return t.replaceBody(), t.isPreview || t.focusFirstAutofocusableElement(), e()
                        }))) : this.invalidateView();
                        var t
                    }, r.prototype.mergeHead = function () {
                        return this.copyNewHeadStylesheetElements(), this.copyNewHeadScriptElements(), this.removeCurrentHeadProvisionalElements(), this.copyNewHeadProvisionalElements()
                    }, r.prototype.replaceBody = function () {
                        var e;
                        return e = this.relocateCurrentBodyPermanentElements(), this.activateNewBodyScriptElements(), this.assignNewBody(), this.replacePlaceholderElementsWithClonedPermanentElements(e)
                    }, r.prototype.shouldRender = function () {
                        return this.newSnapshot.isVisitable() && this.trackedElementsAreIdentical()
                    }, r.prototype.trackedElementsAreIdentical = function () {
                        return this.currentHeadDetails.getTrackedElementSignature() === this.newHeadDetails.getTrackedElementSignature()
                    }, r.prototype.copyNewHeadStylesheetElements = function () {
                        var e, t, n, i, r;
                        for (r = [], t = 0, n = (i = this.getNewHeadStylesheetElements()).length; n > t; t++) e = i[t], r.push(document.head.appendChild(e));
                        return r
                    }, r.prototype.copyNewHeadScriptElements = function () {
                        var e, t, n, i, r;
                        for (r = [], t = 0, n = (i = this.getNewHeadScriptElements()).length; n > t; t++) e = i[t], r.push(document.head.appendChild(this.createScriptElement(e)));
                        return r
                    }, r.prototype.removeCurrentHeadProvisionalElements = function () {
                        var e, t, n, i, r;
                        for (r = [], t = 0, n = (i = this.getCurrentHeadProvisionalElements()).length; n > t; t++) e = i[t], r.push(document.head.removeChild(e));
                        return r
                    }, r.prototype.copyNewHeadProvisionalElements = function () {
                        var e, t, n, i, r;
                        for (r = [], t = 0, n = (i = this.getNewHeadProvisionalElements()).length; n > t; t++) e = i[t], r.push(document.head.appendChild(e));
                        return r
                    }, r.prototype.relocateCurrentBodyPermanentElements = function () {
                        var t, i, r, a, o, s, l;
                        for (l = [], t = 0, i = (s = this.getCurrentBodyPermanentElements()).length; i > t; t++) a = s[t], o = e(a), r = this.newSnapshot.getPermanentElementById(a.id), n(a, o.element), n(r, a), l.push(o);
                        return l
                    }, r.prototype.replacePlaceholderElementsWithClonedPermanentElements = function (e) {
                        var t, i, r, a, o, s;
                        for (s = [], r = 0, a = e.length; a > r; r++) i = (o = e[r]).element, t = o.permanentElement.cloneNode(!0), s.push(n(i, t));
                        return s
                    }, r.prototype.activateNewBodyScriptElements = function () {
                        var e, t, i, r, a, o;
                        for (o = [], t = 0, r = (a = this.getNewBodyScriptElements()).length; r > t; t++) i = a[t], e = this.createScriptElement(i), o.push(n(i, e));
                        return o
                    }, r.prototype.assignNewBody = function () {
                        return document.body = this.newBody
                    }, r.prototype.focusFirstAutofocusableElement = function () {
                        var e;
                        return null != (e = this.newSnapshot.findFirstAutofocusableElement()) ? e.focus() : void 0
                    }, r.prototype.getNewHeadStylesheetElements = function () {
                        return this.newHeadDetails.getStylesheetElementsNotInDetails(this.currentHeadDetails)
                    }, r.prototype.getNewHeadScriptElements = function () {
                        return this.newHeadDetails.getScriptElementsNotInDetails(this.currentHeadDetails)
                    }, r.prototype.getCurrentHeadProvisionalElements = function () {
                        return this.currentHeadDetails.getProvisionalElements()
                    }, r.prototype.getNewHeadProvisionalElements = function () {
                        return this.newHeadDetails.getProvisionalElements()
                    }, r.prototype.getCurrentBodyPermanentElements = function () {
                        return this.currentSnapshot.getPermanentElementsPresentInSnapshot(this.newSnapshot)
                    }, r.prototype.getNewBodyScriptElements = function () {
                        return this.newBody.querySelectorAll("script")
                    }, r
                }(t.Renderer), e = function (e) {
                    var t;
                    return (t = document.createElement("meta")).setAttribute("name", "turbolinks-permanent-placeholder"), t.setAttribute("content", e.id), {
                        element: t,
                        permanentElement: e
                    }
                }, n = function (e, t) {
                    var n;
                    return (n = e.parentNode) ? n.replaceChild(t, e) : void 0
                }
            }.call(this),
            function () {
                var e = function (e, t) {
                        function i() {
                            this.constructor = e
                        }
                        for (var r in t) n.call(t, r) && (e[r] = t[r]);
                        return i.prototype = t.prototype, e.prototype = new i, e.__super__ = t.prototype, e
                    },
                    n = {}.hasOwnProperty;
                t.ErrorRenderer = function (t) {
                    function n(e) {
                        var t;
                        (t = document.createElement("html")).innerHTML = e, this.newHead = t.querySelector("head"), this.newBody = t.querySelector("body")
                    }
                    return e(n, t), n.prototype.render = function (e) {
                        return this.renderView((t = this, function () {
                            return t.replaceHeadAndBody(), t.activateBodyScriptElements(), e()
                        }));
                        var t
                    }, n.prototype.replaceHeadAndBody = function () {
                        var e, t;
                        return t = document.head, e = document.body, t.parentNode.replaceChild(this.newHead, t), e.parentNode.replaceChild(this.newBody, e)
                    }, n.prototype.activateBodyScriptElements = function () {
                        var e, t, n, i, r, a;
                        for (a = [], t = 0, n = (i = this.getScriptElements()).length; n > t; t++) r = i[t], e = this.createScriptElement(r), a.push(r.parentNode.replaceChild(e, r));
                        return a
                    }, n.prototype.getScriptElements = function () {
                        return document.documentElement.querySelectorAll("script")
                    }, n
                }(t.Renderer)
            }.call(this),
            function () {
                t.View = function () {
                    function e(e) {
                        this.delegate = e, this.htmlElement = document.documentElement
                    }
                    return e.prototype.getRootLocation = function () {
                        return this.getSnapshot().getRootLocation()
                    }, e.prototype.getElementForAnchor = function (e) {
                        return this.getSnapshot().getElementForAnchor(e)
                    }, e.prototype.getSnapshot = function () {
                        return t.Snapshot.fromHTMLElement(this.htmlElement)
                    }, e.prototype.render = function (e, t) {
                        var n, i, r;
                        return r = e.snapshot, n = e.error, i = e.isPreview, this.markAsPreview(i), null != r ? this.renderSnapshot(r, i, t) : this.renderError(n, t)
                    }, e.prototype.markAsPreview = function (e) {
                        return e ? this.htmlElement.setAttribute("data-turbolinks-preview", "") : this.htmlElement.removeAttribute("data-turbolinks-preview")
                    }, e.prototype.renderSnapshot = function (e, n, i) {
                        return t.SnapshotRenderer.render(this.delegate, i, this.getSnapshot(), t.Snapshot.wrap(e), n)
                    }, e.prototype.renderError = function (e, n) {
                        return t.ErrorRenderer.render(this.delegate, n, e)
                    }, e
                }()
            }.call(this),
            function () {
                var e = function (e, t) {
                    return function () {
                        return e.apply(t, arguments)
                    }
                };
                t.ScrollManager = function () {
                    function n(n) {
                        this.delegate = n, this.onScroll = e(this.onScroll, this), this.onScroll = t.throttle(this.onScroll)
                    }
                    return n.prototype.start = function () {
                        return this.started ? void 0 : (addEventListener("scroll", this.onScroll, !1), this.onScroll(), this.started = !0)
                    }, n.prototype.stop = function () {
                        return this.started ? (removeEventListener("scroll", this.onScroll, !1), this.started = !1) : void 0
                    }, n.prototype.scrollToElement = function (e) {
                        return e.scrollIntoView()
                    }, n.prototype.scrollToPosition = function (e) {
                        var t, n;
                        return t = e.x, n = e.y, window.scrollTo(t, n)
                    }, n.prototype.onScroll = function () {
                        return this.updatePosition({
                            x: window.pageXOffset,
                            y: window.pageYOffset
                        })
                    }, n.prototype.updatePosition = function (e) {
                        var t;
                        return this.position = e, null != (t = this.delegate) ? t.scrollPositionChanged(this.position) : void 0
                    }, n
                }()
            }.call(this),
            function () {
                t.SnapshotCache = function () {
                    function e(e) {
                        this.size = e, this.keys = [], this.snapshots = {}
                    }
                    var n;
                    return e.prototype.has = function (e) {
                        return n(e) in this.snapshots
                    }, e.prototype.get = function (e) {
                        var t;
                        if (this.has(e)) return t = this.read(e), this.touch(e), t
                    }, e.prototype.put = function (e, t) {
                        return this.write(e, t), this.touch(e), t
                    }, e.prototype.read = function (e) {
                        var t;
                        return t = n(e), this.snapshots[t]
                    }, e.prototype.write = function (e, t) {
                        var i;
                        return i = n(e), this.snapshots[i] = t
                    }, e.prototype.touch = function (e) {
                        var t, i;
                        return i = n(e), (t = this.keys.indexOf(i)) > -1 && this.keys.splice(t, 1), this.keys.unshift(i), this.trim()
                    }, e.prototype.trim = function () {
                        var e, t, n, i, r;
                        for (r = [], e = 0, n = (i = this.keys.splice(this.size)).length; n > e; e++) t = i[e], r.push(delete this.snapshots[t]);
                        return r
                    }, n = function (e) {
                        return t.Location.wrap(e).toCacheKey()
                    }, e
                }()
            }.call(this),
            function () {
                var e = function (e, t) {
                    return function () {
                        return e.apply(t, arguments)
                    }
                };
                t.Visit = function () {
                    function n(n, i, r) {
                        this.controller = n, this.action = r, this.performScroll = e(this.performScroll, this), this.identifier = t.uuid(), this.location = t.Location.wrap(i), this.adapter = this.controller.adapter, this.state = "initialized", this.timingMetrics = {}
                    }
                    var i;
                    return n.prototype.start = function () {
                        return "initialized" === this.state ? (this.recordTimingMetric("visitStart"), this.state = "started", this.adapter.visitStarted(this)) : void 0
                    }, n.prototype.cancel = function () {
                        var e;
                        return "started" === this.state ? (null != (e = this.request) && e.cancel(), this.cancelRender(), this.state = "canceled") : void 0
                    }, n.prototype.complete = function () {
                        var e;
                        return "started" === this.state ? (this.recordTimingMetric("visitEnd"), this.state = "completed", "function" == typeof (e = this.adapter).visitCompleted && e.visitCompleted(this), this.controller.visitCompleted(this)) : void 0
                    }, n.prototype.fail = function () {
                        var e;
                        return "started" === this.state ? (this.state = "failed", "function" == typeof (e = this.adapter).visitFailed ? e.visitFailed(this) : void 0) : void 0
                    }, n.prototype.changeHistory = function () {
                        var e, t;
                        return this.historyChanged ? void 0 : (e = this.location.isEqualTo(this.referrer) ? "replace" : this.action, t = i(e), this.controller[t](this.location, this.restorationIdentifier), this.historyChanged = !0)
                    }, n.prototype.issueRequest = function () {
                        return this.shouldIssueRequest() && null == this.request ? (this.progress = 0, this.request = new t.HttpRequest(this, this.location, this.referrer), this.request.send()) : void 0
                    }, n.prototype.getCachedSnapshot = function () {
                        var e;
                        return !(e = this.controller.getCachedSnapshotForLocation(this.location)) || null != this.location.anchor && !e.hasAnchor(this.location.anchor) || "restore" !== this.action && !e.isPreviewable() ? void 0 : e
                    }, n.prototype.hasCachedSnapshot = function () {
                        return null != this.getCachedSnapshot()
                    }, n.prototype.loadCachedSnapshot = function () {
                        var e, t;
                        return (t = this.getCachedSnapshot()) ? (e = this.shouldIssueRequest(), this.render(function () {
                            var n;
                            return this.cacheSnapshot(), this.controller.render({
                                snapshot: t,
                                isPreview: e
                            }, this.performScroll), "function" == typeof (n = this.adapter).visitRendered && n.visitRendered(this), e ? void 0 : this.complete()
                        })) : void 0
                    }, n.prototype.loadResponse = function () {
                        return null != this.response ? this.render(function () {
                            var e, t;
                            return this.cacheSnapshot(), this.request.failed ? (this.controller.render({
                                error: this.response
                            }, this.performScroll), "function" == typeof (e = this.adapter).visitRendered && e.visitRendered(this), this.fail()) : (this.controller.render({
                                snapshot: this.response
                            }, this.performScroll), "function" == typeof (t = this.adapter).visitRendered && t.visitRendered(this), this.complete())
                        }) : void 0
                    }, n.prototype.followRedirect = function () {
                        return this.redirectedToLocation && !this.followedRedirect ? (this.location = this.redirectedToLocation, this.controller.replaceHistoryWithLocationAndRestorationIdentifier(this.redirectedToLocation, this.restorationIdentifier), this.followedRedirect = !0) : void 0
                    }, n.prototype.requestStarted = function () {
                        var e;
                        return this.recordTimingMetric("requestStart"), "function" == typeof (e = this.adapter).visitRequestStarted ? e.visitRequestStarted(this) : void 0
                    }, n.prototype.requestProgressed = function (e) {
                        var t;
                        return this.progress = e, "function" == typeof (t = this.adapter).visitRequestProgressed ? t.visitRequestProgressed(this) : void 0
                    }, n.prototype.requestCompletedWithResponse = function (e, n) {
                        return this.response = e, null != n && (this.redirectedToLocation = t.Location.wrap(n)), this.adapter.visitRequestCompleted(this)
                    }, n.prototype.requestFailedWithStatusCode = function (e, t) {
                        return this.response = t, this.adapter.visitRequestFailedWithStatusCode(this, e)
                    }, n.prototype.requestFinished = function () {
                        var e;
                        return this.recordTimingMetric("requestEnd"), "function" == typeof (e = this.adapter).visitRequestFinished ? e.visitRequestFinished(this) : void 0
                    }, n.prototype.performScroll = function () {
                        return this.scrolled ? void 0 : ("restore" === this.action ? this.scrollToRestoredPosition() || this.scrollToTop() : this.scrollToAnchor() || this.scrollToTop(), this.scrolled = !0)
                    }, n.prototype.scrollToRestoredPosition = function () {
                        var e, t;
                        return null != (e = null != (t = this.restorationData) ? t.scrollPosition : void 0) ? (this.controller.scrollToPosition(e), !0) : void 0
                    }, n.prototype.scrollToAnchor = function () {
                        return null != this.location.anchor ? (this.controller.scrollToAnchor(this.location.anchor), !0) : void 0
                    }, n.prototype.scrollToTop = function () {
                        return this.controller.scrollToPosition({
                            x: 0,
                            y: 0
                        })
                    }, n.prototype.recordTimingMetric = function (e) {
                        var t;
                        return null != (t = this.timingMetrics)[e] ? t[e] : t[e] = (new Date).getTime()
                    }, n.prototype.getTimingMetrics = function () {
                        return t.copyObject(this.timingMetrics)
                    }, i = function (e) {
                        switch (e) {
                            case "replace":
                                return "replaceHistoryWithLocationAndRestorationIdentifier";
                            case "advance":
                            case "restore":
                                return "pushHistoryWithLocationAndRestorationIdentifier"
                        }
                    }, n.prototype.shouldIssueRequest = function () {
                        return "restore" !== this.action || !this.hasCachedSnapshot()
                    }, n.prototype.cacheSnapshot = function () {
                        return this.snapshotCached ? void 0 : (this.controller.cacheSnapshot(), this.snapshotCached = !0)
                    }, n.prototype.render = function (e) {
                        return this.cancelRender(), this.frame = requestAnimationFrame((t = this, function () {
                            return t.frame = null, e.call(t)
                        }));
                        var t
                    }, n.prototype.cancelRender = function () {
                        return this.frame ? cancelAnimationFrame(this.frame) : void 0
                    }, n
                }()
            }.call(this),
            function () {
                var e = function (e, t) {
                    return function () {
                        return e.apply(t, arguments)
                    }
                };
                t.Controller = function () {
                    function n() {
                        this.clickBubbled = e(this.clickBubbled, this), this.clickCaptured = e(this.clickCaptured, this), this.pageLoaded = e(this.pageLoaded, this), this.history = new t.History(this), this.view = new t.View(this), this.scrollManager = new t.ScrollManager(this), this.restorationData = {}, this.clearCache(), this.setProgressBarDelay(500)
                    }
                    return n.prototype.start = function () {
                        return t.supported && !this.started ? (addEventListener("click", this.clickCaptured, !0), addEventListener("DOMContentLoaded", this.pageLoaded, !1), this.scrollManager.start(), this.startHistory(), this.started = !0, this.enabled = !0) : void 0
                    }, n.prototype.disable = function () {
                        return this.enabled = !1
                    }, n.prototype.stop = function () {
                        return this.started ? (removeEventListener("click", this.clickCaptured, !0), removeEventListener("DOMContentLoaded", this.pageLoaded, !1), this.scrollManager.stop(), this.stopHistory(), this.started = !1) : void 0
                    }, n.prototype.clearCache = function () {
                        return this.cache = new t.SnapshotCache(10)
                    }, n.prototype.visit = function (e, n) {
                        var i, r;
                        return null == n && (n = {}), e = t.Location.wrap(e), this.applicationAllowsVisitingLocation(e) ? this.locationIsVisitable(e) ? (i = null != (r = n.action) ? r : "advance", this.adapter.visitProposedToLocationWithAction(e, i)) : window.location = e : void 0
                    }, n.prototype.startVisitToLocationWithAction = function (e, n, i) {
                        var r;
                        return t.supported ? (r = this.getRestorationDataForIdentifier(i), this.startVisit(e, n, {
                            restorationData: r
                        })) : window.location = e
                    }, n.prototype.setProgressBarDelay = function (e) {
                        return this.progressBarDelay = e
                    }, n.prototype.startHistory = function () {
                        return this.location = t.Location.wrap(window.location), this.restorationIdentifier = t.uuid(), this.history.start(), this.history.replace(this.location, this.restorationIdentifier)
                    }, n.prototype.stopHistory = function () {
                        return this.history.stop()
                    }, n.prototype.pushHistoryWithLocationAndRestorationIdentifier = function (e, n) {
                        return this.restorationIdentifier = n, this.location = t.Location.wrap(e), this.history.push(this.location, this.restorationIdentifier)
                    }, n.prototype.replaceHistoryWithLocationAndRestorationIdentifier = function (e, n) {
                        return this.restorationIdentifier = n, this.location = t.Location.wrap(e), this.history.replace(this.location, this.restorationIdentifier)
                    }, n.prototype.historyPoppedToLocationWithRestorationIdentifier = function (e, n) {
                        var i;
                        return this.restorationIdentifier = n,
                            this.enabled ? (i = this.getRestorationDataForIdentifier(this.restorationIdentifier), this.startVisit(e, "restore", {
                                restorationIdentifier: this.restorationIdentifier,
                                restorationData: i,
                                historyChanged: !0
                            }), this.location = t.Location.wrap(e)) : this.adapter.pageInvalidated()
                    }, n.prototype.getCachedSnapshotForLocation = function (e) {
                        var t;
                        return null != (t = this.cache.get(e)) ? t.clone() : void 0
                    }, n.prototype.shouldCacheSnapshot = function () {
                        return this.view.getSnapshot().isCacheable()
                    }, n.prototype.cacheSnapshot = function () {
                        var e, n;
                        return this.shouldCacheSnapshot() ? (this.notifyApplicationBeforeCachingSnapshot(), n = this.view.getSnapshot(), e = this.lastRenderedLocation, t.defer(function (t) {
                            return function () {
                                return t.cache.put(e, n.clone())
                            }
                        }(this))) : void 0
                    }, n.prototype.scrollToAnchor = function (e) {
                        var t;
                        return (t = this.view.getElementForAnchor(e)) ? this.scrollToElement(t) : this.scrollToPosition({
                            x: 0,
                            y: 0
                        })
                    }, n.prototype.scrollToElement = function (e) {
                        return this.scrollManager.scrollToElement(e)
                    }, n.prototype.scrollToPosition = function (e) {
                        return this.scrollManager.scrollToPosition(e)
                    }, n.prototype.scrollPositionChanged = function (e) {
                        return this.getCurrentRestorationData().scrollPosition = e
                    }, n.prototype.render = function (e, t) {
                        return this.view.render(e, t)
                    }, n.prototype.viewInvalidated = function () {
                        return this.adapter.pageInvalidated()
                    }, n.prototype.viewWillRender = function (e) {
                        return this.notifyApplicationBeforeRender(e)
                    }, n.prototype.viewRendered = function () {
                        return this.lastRenderedLocation = this.currentVisit.location, this.notifyApplicationAfterRender()
                    }, n.prototype.pageLoaded = function () {
                        return this.lastRenderedLocation = this.location, this.notifyApplicationAfterPageLoad()
                    }, n.prototype.clickCaptured = function () {
                        return removeEventListener("click", this.clickBubbled, !1), addEventListener("click", this.clickBubbled, !1)
                    }, n.prototype.clickBubbled = function (e) {
                        var t, n, i;
                        return this.enabled && this.clickEventIsSignificant(e) && (n = this.getVisitableLinkForNode(e.target)) && (i = this.getVisitableLocationForLink(n)) && this.applicationAllowsFollowingLinkToLocation(n, i) ? (e.preventDefault(), t = this.getActionForLink(n), this.visit(i, {
                            action: t
                        })) : void 0
                    }, n.prototype.applicationAllowsFollowingLinkToLocation = function (e, t) {
                        return !this.notifyApplicationAfterClickingLinkToLocation(e, t).defaultPrevented
                    }, n.prototype.applicationAllowsVisitingLocation = function (e) {
                        return !this.notifyApplicationBeforeVisitingLocation(e).defaultPrevented
                    }, n.prototype.notifyApplicationAfterClickingLinkToLocation = function (e, n) {
                        return t.dispatch("turbolinks:click", {
                            target: e,
                            data: {
                                url: n.absoluteURL
                            },
                            cancelable: !0
                        })
                    }, n.prototype.notifyApplicationBeforeVisitingLocation = function (e) {
                        return t.dispatch("turbolinks:before-visit", {
                            data: {
                                url: e.absoluteURL
                            },
                            cancelable: !0
                        })
                    }, n.prototype.notifyApplicationAfterVisitingLocation = function (e) {
                        return t.dispatch("turbolinks:visit", {
                            data: {
                                url: e.absoluteURL
                            }
                        })
                    }, n.prototype.notifyApplicationBeforeCachingSnapshot = function () {
                        return t.dispatch("turbolinks:before-cache")
                    }, n.prototype.notifyApplicationBeforeRender = function (e) {
                        return t.dispatch("turbolinks:before-render", {
                            data: {
                                newBody: e
                            }
                        })
                    }, n.prototype.notifyApplicationAfterRender = function () {
                        return t.dispatch("turbolinks:render")
                    }, n.prototype.notifyApplicationAfterPageLoad = function (e) {
                        return null == e && (e = {}), t.dispatch("turbolinks:load", {
                            data: {
                                url: this.location.absoluteURL,
                                timing: e
                            }
                        })
                    }, n.prototype.startVisit = function (e, t, n) {
                        var i;
                        return null != (i = this.currentVisit) && i.cancel(), this.currentVisit = this.createVisit(e, t, n), this.currentVisit.start(), this.notifyApplicationAfterVisitingLocation(e)
                    }, n.prototype.createVisit = function (e, n, i) {
                        var r, a, o, s, l;
                        return s = (a = null != i ? i : {}).restorationIdentifier, o = a.restorationData, r = a.historyChanged, (l = new t.Visit(this, e, n)).restorationIdentifier = null != s ? s : t.uuid(), l.restorationData = t.copyObject(o), l.historyChanged = r, l.referrer = this.location, l
                    }, n.prototype.visitCompleted = function (e) {
                        return this.notifyApplicationAfterPageLoad(e.getTimingMetrics())
                    }, n.prototype.clickEventIsSignificant = function (e) {
                        return !(e.defaultPrevented || e.target.isContentEditable || e.which > 1 || e.altKey || e.ctrlKey || e.metaKey || e.shiftKey)
                    }, n.prototype.getVisitableLinkForNode = function (e) {
                        return this.nodeIsVisitable(e) ? t.closest(e, "a[href]:not([target]):not([download])") : void 0
                    }, n.prototype.getVisitableLocationForLink = function (e) {
                        var n;
                        return n = new t.Location(e.getAttribute("href")), this.locationIsVisitable(n) ? n : void 0
                    }, n.prototype.getActionForLink = function (e) {
                        var t;
                        return null != (t = e.getAttribute("data-turbolinks-action")) ? t : "advance"
                    }, n.prototype.nodeIsVisitable = function (e) {
                        var n;
                        return !(n = t.closest(e, "[data-turbolinks]")) || "false" !== n.getAttribute("data-turbolinks")
                    }, n.prototype.locationIsVisitable = function (e) {
                        return e.isPrefixedBy(this.view.getRootLocation()) && e.isHTML()
                    }, n.prototype.getCurrentRestorationData = function () {
                        return this.getRestorationDataForIdentifier(this.restorationIdentifier)
                    }, n.prototype.getRestorationDataForIdentifier = function (e) {
                        var t;
                        return null != (t = this.restorationData)[e] ? t[e] : t[e] = {}
                    }, n
                }()
            }.call(this),
            function () {
                ! function () {
                    var e, t;
                    if ((e = t = document.currentScript) && !t.hasAttribute("data-turbolinks-suppress-warning"))
                        for (; e = e.parentNode;)
                            if (e === document.body) return console.warn("You are loading Turbolinks from a <script> element inside the <body> element. This is probably not what you meant to do!\n\nLoad your application\u2019s JavaScript bundle inside the <head> element instead. <script> elements in <body> are evaluated with each page change.\n\nFor more information, see: https://github.com/turbolinks/turbolinks#working-with-script-elements\n\n\u2014\u2014\nSuppress this warning by adding a `data-turbolinks-suppress-warning` attribute to: %s", t.outerHTML)
                }()
            }.call(this),
            function () {
                var e, n, i;
                t.start = function () {
                    return n() ? (null == t.controller && (t.controller = e()), t.controller.start()) : void 0
                }, n = function () {
                    return null == window.Turbolinks && (window.Turbolinks = t), i()
                }, e = function () {
                    var e;
                    return (e = new t.Controller).adapter = new t.BrowserAdapter(e), e
                }, (i = function () {
                    return window.Turbolinks === t
                })() && t.start()
            }.call(this)
    }).call(this), "object" == typeof module && module.exports ? module.exports = t : "function" == typeof define && define.amd && define(t)
}).call(this),
    /*!
     * jQuery JavaScript Library v1.12.4
     * http://jquery.com/
     *
     * Includes Sizzle.js
     * http://sizzlejs.com/
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license
     * http://jquery.org/license
     *
     * Date: 2016-05-20T17:17Z
     */
    function (e, t) {
        "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
            if (!e.document) throw new Error("jQuery requires a window with a document");
            return t(e)
        } : t(e)
    }("undefined" != typeof window ? window : this, function (e, t) {
        function n(e) {
            var t = !!e && "length" in e && e.length,
                n = pe.type(e);
            return "function" !== n && !pe.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
        }

        function i(e, t, n) {
            if (pe.isFunction(t)) return pe.grep(e, function (e, i) {
                return !!t.call(e, i, e) !== n
            });
            if (t.nodeType) return pe.grep(e, function (e) {
                return e === t !== n
            });
            if ("string" == typeof t) {
                if (Ce.test(t)) return pe.filter(t, e, n);
                t = pe.filter(t, e)
            }
            return pe.grep(e, function (e) {
                return pe.inArray(e, t) > -1 !== n
            })
        }

        function r(e, t) {
            do {
                e = e[t]
            } while (e && 1 !== e.nodeType);
            return e
        }

        function a(e) {
            var t = {};
            return pe.each(e.match(je) || [], function (e, n) {
                t[n] = !0
            }), t
        }

        function o() {
            ie.addEventListener ? (ie.removeEventListener("DOMContentLoaded", s), e.removeEventListener("load", s)) : (ie.detachEvent("onreadystatechange", s), e.detachEvent("onload", s))
        }

        function s() {
            (ie.addEventListener || "load" === e.event.type || "complete" === ie.readyState) && (o(), pe.ready())
        }

        function l(e, t, n) {
            if (n === undefined && 1 === e.nodeType) {
                var i = "data-" + t.replace($e, "-$1").toLowerCase();
                if ("string" == typeof (n = e.getAttribute(i))) {
                    try {
                        n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : Ie.test(n) ? pe.parseJSON(n) : n)
                    } catch (r) {}
                    pe.data(e, t, n)
                } else n = undefined
            }
            return n
        }

        function u(e) {
            var t;
            for (t in e)
                if (("data" !== t || !pe.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
            return !0
        }

        function c(e, t, n, i) {
            if (Ne(e)) {
                var r, a, o = pe.expando,
                    s = e.nodeType,
                    l = s ? pe.cache : e,
                    u = s ? e[o] : e[o] && o;
                if (u && l[u] && (i || l[u].data) || n !== undefined || "string" != typeof t) return u || (u = s ? e[o] = ne.pop() || pe.guid++ : o), l[u] || (l[u] = s ? {} : {
                    toJSON: pe.noop
                }), "object" != typeof t && "function" != typeof t || (i ? l[u] = pe.extend(l[u], t) : l[u].data = pe.extend(l[u].data, t)), a = l[u], i || (a.data || (a.data = {}), a = a.data), n !== undefined && (a[pe.camelCase(t)] = n), "string" == typeof t ? null == (r = a[t]) && (r = a[pe.camelCase(t)]) : r = a, r
            }
        }

        function d(e, t, n) {
            if (Ne(e)) {
                var i, r, a = e.nodeType,
                    o = a ? pe.cache : e,
                    s = a ? e[pe.expando] : pe.expando;
                if (o[s]) {
                    if (t && (i = n ? o[s] : o[s].data)) {
                        r = (t = pe.isArray(t) ? t.concat(pe.map(t, pe.camelCase)) : t in i ? [t] : (t = pe.camelCase(t)) in i ? [t] : t.split(" ")).length;
                        for (; r--;) delete i[t[r]];
                        if (n ? !u(i) : !pe.isEmptyObject(i)) return
                    }(n || (delete o[s].data, u(o[s]))) && (a ? pe.cleanData([e], !0) : de.deleteExpando || o != o.window ? delete o[s] : o[s] = undefined)
                }
            }
        }

        function h(e, t, n, i) {
            var r, a = 1,
                o = 20,
                s = i ? function () {
                    return i.cur()
                } : function () {
                    return pe.css(e, t, "")
                },
                l = s(),
                u = n && n[3] || (pe.cssNumber[t] ? "" : "px"),
                c = (pe.cssNumber[t] || "px" !== u && +l) && qe.exec(pe.css(e, t));
            if (c && c[3] !== u) {
                u = u || c[3], n = n || [], c = +l || 1;
                do {
                    c /= a = a || ".5", pe.style(e, t, c + u)
                } while (a !== (a = s() / l) && 1 !== a && --o)
            }
            return n && (c = +c || +l || 0, r = n[1] ? c + (n[1] + 1) * n[2] : +n[2], i && (i.unit = u, i.start = c, i.end = r)), r
        }

        function p(e) {
            var t = Ye.split("|"),
                n = e.createDocumentFragment();
            if (n.createElement)
                for (; t.length;) n.createElement(t.pop());
            return n
        }

        function f(e, t) {
            var n, i, r = 0,
                a = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : undefined;
            if (!a)
                for (a = [], n = e.childNodes || e; null != (i = n[r]); r++) !t || pe.nodeName(i, t) ? a.push(i) : pe.merge(a, f(i, t));
            return t === undefined || t && pe.nodeName(e, t) ? pe.merge([e], a) : a
        }

        function m(e, t) {
            for (var n, i = 0; null != (n = e[i]); i++) pe._data(n, "globalEval", !t || pe._data(t[i], "globalEval"))
        }

        function g(e) {
            He.test(e.type) && (e.defaultChecked = e.checked)
        }

        function v(e, t, n, i, r) {
            for (var a, o, s, l, u, c, d, h = e.length, v = p(t), y = [], b = 0; b < h; b++)
                if ((o = e[b]) || 0 === o)
                    if ("object" === pe.type(o)) pe.merge(y, o.nodeType ? [o] : o);
                    else if (Ke.test(o)) {
                for (l = l || v.appendChild(t.createElement("div")), u = (Ue.exec(o) || ["", ""])[1].toLowerCase(), d = Ve[u] || Ve._default, l.innerHTML = d[1] + pe.htmlPrefilter(o) + d[2], a = d[0]; a--;) l = l.lastChild;
                if (!de.leadingWhitespace && We.test(o) && y.push(t.createTextNode(We.exec(o)[0])), !de.tbody)
                    for (a = (o = "table" !== u || Xe.test(o) ? "<table>" !== d[1] || Xe.test(o) ? 0 : l : l.firstChild) && o.childNodes.length; a--;) pe.nodeName(c = o.childNodes[a], "tbody") && !c.childNodes.length && o.removeChild(c);
                for (pe.merge(y, l.childNodes), l.textContent = ""; l.firstChild;) l.removeChild(l.firstChild);
                l = v.lastChild
            } else y.push(t.createTextNode(o));
            for (l && v.removeChild(l), de.appendChecked || pe.grep(f(y, "input"), g), b = 0; o = y[b++];)
                if (i && pe.inArray(o, i) > -1) r && r.push(o);
                else if (s = pe.contains(o.ownerDocument, o), l = f(v.appendChild(o), "script"), s && m(l), n)
                for (a = 0; o = l[a++];) Be.test(o.type || "") && n.push(o);
            return l = null, v
        }

        function y() {
            return !0
        }

        function b() {
            return !1
        }

        function _() {
            try {
                return ie.activeElement
            } catch (e) {}
        }

        function w(e, t, n, i, r, a) {
            var o, s;
            if ("object" == typeof t) {
                for (s in "string" != typeof n && (i = i || n, n = undefined), t) w(e, s, n, i, t[s], a);
                return e
            }
            if (null == i && null == r ? (r = n, i = n = undefined) : null == r && ("string" == typeof n ? (r = i, i = undefined) : (r = i, i = n, n = undefined)), !1 === r) r = b;
            else if (!r) return e;
            return 1 === a && (o = r, (r = function (e) {
                return pe().off(e), o.apply(this, arguments)
            }).guid = o.guid || (o.guid = pe.guid++)), e.each(function () {
                pe.event.add(this, t, r, i, n)
            })
        }

        function k(e, t) {
            return pe.nodeName(e, "table") && pe.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
        }

        function C(e) {
            return e.type = (null !== pe.find.attr(e, "type")) + "/" + e.type, e
        }

        function x(e) {
            var t = st.exec(e.type);
            return t ? e.type = t[1] : e.removeAttribute("type"), e
        }

        function D(e, t) {
            if (1 === t.nodeType && pe.hasData(e)) {
                var n, i, r, a = pe._data(e),
                    o = pe._data(t, a),
                    s = a.events;
                if (s)
                    for (n in delete o.handle, o.events = {}, s)
                        for (i = 0, r = s[n].length; i < r; i++) pe.event.add(t, n, s[n][i]);
                o.data && (o.data = pe.extend({}, o.data))
            }
        }

        function E(e, t) {
            var n, i, r;
            if (1 === t.nodeType) {
                if (n = t.nodeName.toLowerCase(), !de.noCloneEvent && t[pe.expando]) {
                    for (i in (r = pe._data(t)).events) pe.removeEvent(t, i, r.handle);
                    t.removeAttribute(pe.expando)
                }
                "script" === n && t.text !== e.text ? (C(t).text = e.text, x(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), de.html5Clone && e.innerHTML && !pe.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && He.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
            }
        }

        function T(e, t, n, i) {
            t = ae.apply([], t);
            var r, a, o, s, l, u, c = 0,
                d = e.length,
                h = d - 1,
                p = t[0],
                m = pe.isFunction(p);
            if (m || d > 1 && "string" == typeof p && !de.checkClone && ot.test(p)) return e.each(function (r) {
                var a = e.eq(r);
                m && (t[0] = p.call(this, r, a.html())), T(a, t, n, i)
            });
            if (d && (r = (u = v(t, e[0].ownerDocument, !1, e, i)).firstChild, 1 === u.childNodes.length && (u = r), r || i)) {
                for (o = (s = pe.map(f(u, "script"), C)).length; c < d; c++) a = u, c !== h && (a = pe.clone(a, !0, !0), o && pe.merge(s, f(a, "script"))), n.call(e[c], a, c);
                if (o)
                    for (l = s[s.length - 1].ownerDocument, pe.map(s, x), c = 0; c < o; c++) a = s[c], Be.test(a.type || "") && !pe._data(a, "globalEval") && pe.contains(l, a) && (a.src ? pe._evalUrl && pe._evalUrl(a.src) : pe.globalEval((a.text || a.textContent || a.innerHTML || "").replace(lt, "")));
                u = r = null
            }
            return e
        }

        function S(e, t, n) {
            for (var i, r = t ? pe.filter(t, e) : e, a = 0; null != (i = r[a]); a++) n || 1 !== i.nodeType || pe.cleanData(f(i)), i.parentNode && (n && pe.contains(i.ownerDocument, i) && m(f(i, "script")), i.parentNode.removeChild(i));
            return e
        }

        function F(e, t) {
            var n = pe(t.createElement(e)).appendTo(t.body),
                i = pe.css(n[0], "display");
            return n.detach(), i
        }

        function j(e) {
            var t = ie,
                n = dt[e];
            return n || ("none" !== (n = F(e, t)) && n || ((t = ((ct = (ct || pe("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement))[0].contentWindow || ct[0].contentDocument).document).write(), t.close(), n = F(e, t), ct.detach()), dt[e] = n), n
        }

        function A(e, t) {
            return {
                get: function () {
                    if (!e()) return (this.get = t).apply(this, arguments);
                    delete this.get
                }
            }
        }

        function N(e) {
            if (e in Et) return e;
            for (var t = e.charAt(0).toUpperCase() + e.slice(1), n = Dt.length; n--;)
                if ((e = Dt[n] + t) in Et) return e
        }

        function I(e, t) {
            for (var n, i, r, a = [], o = 0, s = e.length; o < s; o++)(i = e[o]).style && (a[o] = pe._data(i, "olddisplay"), n = i.style.display, t ? (a[o] || "none" !== n || (i.style.display = ""), "" === i.style.display && Re(i) && (a[o] = pe._data(i, "olddisplay", j(i.nodeName)))) : (r = Re(i), (n && "none" !== n || !r) && pe._data(i, "olddisplay", r ? n : pe.css(i, "display"))));
            for (o = 0; o < s; o++)(i = e[o]).style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? a[o] || "" : "none"));
            return e
        }

        function $(e, t, n) {
            var i = kt.exec(t);
            return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
        }

        function M(e, t, n, i, r) {
            for (var a = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, o = 0; a < 4; a += 2) "margin" === n && (o += pe.css(e, n + Qe[a], !0, r)), i ? ("content" === n && (o -= pe.css(e, "padding" + Qe[a], !0, r)), "margin" !== n && (o -= pe.css(e, "border" + Qe[a] + "Width", !0, r))) : (o += pe.css(e, "padding" + Qe[a], !0, r), "padding" !== n && (o += pe.css(e, "border" + Qe[a] + "Width", !0, r)));
            return o
        }

        function L(e, t, n) {
            var i = !0,
                r = "width" === t ? e.offsetWidth : e.offsetHeight,
                a = gt(e),
                o = de.boxSizing && "border-box" === pe.css(e, "boxSizing", !1, a);
            if (r <= 0 || null == r) {
                if (((r = vt(e, t, a)) < 0 || null == r) && (r = e.style[t]), pt.test(r)) return r;
                i = o && (de.boxSizingReliable() || r === e.style[t]), r = parseFloat(r) || 0
            }
            return r + M(e, t, n || (o ? "border" : "content"), i, a) + "px"
        }

        function O(e, t, n, i, r) {
            return new O.prototype.init(e, t, n, i, r)
        }

        function P() {
            return e.setTimeout(function () {
                Tt = undefined
            }), Tt = pe.now()
        }

        function q(e, t) {
            var n, i = {
                    height: e
                },
                r = 0;
            for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = Qe[r])] = i["padding" + n] = e;
            return t && (i.opacity = i.width = e), i
        }

        function Q(e, t, n) {
            for (var i, r = (H.tweeners[t] || []).concat(H.tweeners["*"]), a = 0, o = r.length; a < o; a++)
                if (i = r[a].call(n, t, e)) return i
        }

        function R(e, t, n) {
            var i, r, a, o, s, l, u, c = this,
                d = {},
                h = e.style,
                p = e.nodeType && Re(e),
                f = pe._data(e, "fxshow");
            for (i in n.queue || (null == (s = pe._queueHooks(e, "fx")).unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function () {
                    s.unqueued || l()
                }), s.unqueued++, c.always(function () {
                    c.always(function () {
                        s.unqueued--, pe.queue(e, "fx").length || s.empty.fire()
                    })
                })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [h.overflow, h.overflowX, h.overflowY], "inline" === ("none" === (u = pe.css(e, "display")) ? pe._data(e, "olddisplay") || j(e.nodeName) : u) && "none" === pe.css(e, "float") && (de.inlineBlockNeedsLayout && "inline" !== j(e.nodeName) ? h.zoom = 1 : h.display = "inline-block")), n.overflow && (h.overflow = "hidden", de.shrinkWrapBlocks() || c.always(function () {
                    h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
                })), t)
                if (r = t[i], Ft.exec(r)) {
                    if (delete t[i], a = a || "toggle" === r, r === (p ? "hide" : "show")) {
                        if ("show" !== r || !f || f[i] === undefined) continue;
                        p = !0
                    }
                    d[i] = f && f[i] || pe.style(e, i)
                } else u = undefined;
            if (pe.isEmptyObject(d)) "inline" === ("none" === u ? j(e.nodeName) : u) && (h.display = u);
            else
                for (i in f ? "hidden" in f && (p = f.hidden) : f = pe._data(e, "fxshow", {}), a && (f.hidden = !p), p ? pe(e).show() : c.done(function () {
                        pe(e).hide()
                    }), c.done(function () {
                        var t;
                        for (t in pe._removeData(e, "fxshow"), d) pe.style(e, t, d[t])
                    }), d) o = Q(p ? f[i] : 0, i, c), i in f || (f[i] = o.start, p && (o.end = o.start, o.start = "width" === i || "height" === i ? 1 : 0))
        }

        function z(e, t) {
            var n, i, r, a, o;
            for (n in e)
                if (r = t[i = pe.camelCase(n)], a = e[n], pe.isArray(a) && (r = a[1], a = e[n] = a[0]), n !== i && (e[i] = a, delete e[n]), (o = pe.cssHooks[i]) && "expand" in o)
                    for (n in a = o.expand(a), delete e[i], a) n in e || (e[n] = a[n], t[n] = r);
                else t[i] = r
        }

        function H(e, t, n) {
            var i, r, a = 0,
                o = H.prefilters.length,
                s = pe.Deferred().always(function () {
                    delete l.elem
                }),
                l = function () {
                    if (r) return !1;
                    for (var t = Tt || P(), n = Math.max(0, u.startTime + u.duration - t), i = 1 - (n / u.duration || 0), a = 0, o = u.tweens.length; a < o; a++) u.tweens[a].run(i);
                    return s.notifyWith(e, [u, i, n]), i < 1 && o ? n : (s.resolveWith(e, [u]), !1)
                },
                u = s.promise({
                    elem: e,
                    props: pe.extend({}, t),
                    opts: pe.extend(!0, {
                        specialEasing: {},
                        easing: pe.easing._default
                    }, n),
                    originalProperties: t,
                    originalOptions: n,
                    startTime: Tt || P(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function (t, n) {
                        var i = pe.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                        return u.tweens.push(i), i
                    },
                    stop: function (t) {
                        var n = 0,
                            i = t ? u.tweens.length : 0;
                        if (r) return this;
                        for (r = !0; n < i; n++) u.tweens[n].run(1);
                        return t ? (s.notifyWith(e, [u, 1, 0]), s.resolveWith(e, [u, t])) : s.rejectWith(e, [u, t]), this
                    }
                }),
                c = u.props;
            for (z(c, u.opts.specialEasing); a < o; a++)
                if (i = H.prefilters[a].call(u, e, c, u.opts)) return pe.isFunction(i.stop) && (pe._queueHooks(u.elem, u.opts.queue).stop = pe.proxy(i.stop, i)), i;
            return pe.map(c, Q, u), pe.isFunction(u.opts.start) && u.opts.start.call(e, u), pe.fx.timer(pe.extend(l, {
                elem: e,
                anim: u,
                queue: u.opts.queue
            })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
        }

        function U(e) {
            return pe.attr(e, "class") || ""
        }

        function B(e) {
            return function (t, n) {
                "string" != typeof t && (n = t, t = "*");
                var i, r = 0,
                    a = t.toLowerCase().match(je) || [];
                if (pe.isFunction(n))
                    for (; i = a[r++];) "+" === i.charAt(0) ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
            }
        }

        function W(e, t, n, i) {
            function r(s) {
                var l;
                return a[s] = !0, pe.each(e[s] || [], function (e, s) {
                    var u = s(t, n, i);
                    return "string" != typeof u || o || a[u] ? o ? !(l = u) : void 0 : (t.dataTypes.unshift(u), r(u), !1)
                }), l
            }
            var a = {},
                o = e === en;
            return r(t.dataTypes[0]) || !a["*"] && r("*")
        }

        function Y(e, t) {
            var n, i, r = pe.ajaxSettings.flatOptions || {};
            for (i in t) t[i] !== undefined && ((r[i] ? e : n || (n = {}))[i] = t[i]);
            return n && pe.extend(!0, e, n), e
        }

        function V(e, t, n) {
            for (var i, r, a, o, s = e.contents, l = e.dataTypes;
                "*" === l[0];) l.shift(), r === undefined && (r = e.mimeType || t.getResponseHeader("Content-Type"));
            if (r)
                for (o in s)
                    if (s[o] && s[o].test(r)) {
                        l.unshift(o);
                        break
                    } if (l[0] in n) a = l[0];
            else {
                for (o in n) {
                    if (!l[0] || e.converters[o + " " + l[0]]) {
                        a = o;
                        break
                    }
                    i || (i = o)
                }
                a = a || i
            }
            if (a) return a !== l[0] && l.unshift(a), n[a]
        }

        function K(e, t, n, i) {
            var r, a, o, s, l, u = {},
                c = e.dataTypes.slice();
            if (c[1])
                for (o in e.converters) u[o.toLowerCase()] = e.converters[o];
            for (a = c.shift(); a;)
                if (e.responseFields[a] && (n[e.responseFields[a]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = a, a = c.shift())
                    if ("*" === a) a = l;
                    else if ("*" !== l && l !== a) {
                if (!(o = u[l + " " + a] || u["* " + a]))
                    for (r in u)
                        if ((s = r.split(" "))[1] === a && (o = u[l + " " + s[0]] || u["* " + s[0]])) {
                            !0 === o ? o = u[r] : !0 !== u[r] && (a = s[0], c.unshift(s[1]));
                            break
                        } if (!0 !== o)
                    if (o && e.throws) t = o(t);
                    else try {
                        t = o(t)
                    } catch (d) {
                        return {
                            state: "parsererror",
                            error: o ? d : "No conversion from " + l + " to " + a
                        }
                    }
            }
            return {
                state: "success",
                data: t
            }
        }

        function X(e) {
            return e.style && e.style.display || pe.css(e, "display")
        }

        function G(e) {
            if (!pe.contains(e.ownerDocument || ie, e)) return !0;
            for (; e && 1 === e.nodeType;) {
                if ("none" === X(e) || "hidden" === e.type) return !0;
                e = e.parentNode
            }
            return !1
        }

        function J(e, t, n, i) {
            var r;
            if (pe.isArray(t)) pe.each(t, function (t, r) {
                n || on.test(e) ? i(e, r) : J(e + "[" + ("object" == typeof r && null != r ? t : "") + "]", r, n, i)
            });
            else if (n || "object" !== pe.type(t)) i(e, t);
            else
                for (r in t) J(e + "[" + r + "]", t[r], n, i)
        }

        function Z() {
            try {
                return new e.XMLHttpRequest
            } catch (t) {}
        }

        function ee() {
            try {
                return new e.ActiveXObject("Microsoft.XMLHTTP")
            } catch (t) {}
        }

        function te(e) {
            return pe.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow)
        }
        var ne = [],
            ie = e.document,
            re = ne.slice,
            ae = ne.concat,
            oe = ne.push,
            se = ne.indexOf,
            le = {},
            ue = le.toString,
            ce = le.hasOwnProperty,
            de = {},
            he = "1.12.4",
            pe = function (e, t) {
                return new pe.fn.init(e, t)
            },
            fe = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            me = /^-ms-/,
            ge = /-([\da-z])/gi,
            ve = function (e, t) {
                return t.toUpperCase()
            };
        pe.fn = pe.prototype = {
            jquery: he,
            constructor: pe,
            selector: "",
            length: 0,
            toArray: function () {
                return re.call(this)
            },
            get: function (e) {
                return null != e ? e < 0 ? this[e + this.length] : this[e] : re.call(this)
            },
            pushStack: function (e) {
                var t = pe.merge(this.constructor(), e);
                return t.prevObject = this, t.context = this.context, t
            },
            each: function (e) {
                return pe.each(this, e)
            },
            map: function (e) {
                return this.pushStack(pe.map(this, function (t, n) {
                    return e.call(t, n, t)
                }))
            },
            slice: function () {
                return this.pushStack(re.apply(this, arguments))
            },
            first: function () {
                return this.eq(0)
            },
            last: function () {
                return this.eq(-1)
            },
            eq: function (e) {
                var t = this.length,
                    n = +e + (e < 0 ? t : 0);
                return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
            },
            end: function () {
                return this.prevObject || this.constructor()
            },
            push: oe,
            sort: ne.sort,
            splice: ne.splice
        }, pe.extend = pe.fn.extend = function () {
            var e, t, n, i, r, a, o = arguments[0] || {},
                s = 1,
                l = arguments.length,
                u = !1;
            for ("boolean" == typeof o && (u = o, o = arguments[s] || {}, s++), "object" == typeof o || pe.isFunction(o) || (o = {}), s === l && (o = this, s--); s < l; s++)
                if (null != (r = arguments[s]))
                    for (i in r) e = o[i], o !== (n = r[i]) && (u && n && (pe.isPlainObject(n) || (t = pe.isArray(n))) ? (t ? (t = !1, a = e && pe.isArray(e) ? e : []) : a = e && pe.isPlainObject(e) ? e : {}, o[i] = pe.extend(u, a, n)) : n !== undefined && (o[i] = n));
            return o
        }, pe.extend({
            expando: "jQuery" + (he + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function (e) {
                throw new Error(e)
            },
            noop: function () {},
            isFunction: function (e) {
                return "function" === pe.type(e)
            },
            isArray: Array.isArray || function (e) {
                return "array" === pe.type(e)
            },
            isWindow: function (e) {
                return null != e && e == e.window
            },
            isNumeric: function (e) {
                var t = e && e.toString();
                return !pe.isArray(e) && t - parseFloat(t) + 1 >= 0
            },
            isEmptyObject: function (e) {
                var t;
                for (t in e) return !1;
                return !0
            },
            isPlainObject: function (e) {
                var t;
                if (!e || "object" !== pe.type(e) || e.nodeType || pe.isWindow(e)) return !1;
                try {
                    if (e.constructor && !ce.call(e, "constructor") && !ce.call(e.constructor.prototype, "isPrototypeOf")) return !1
                } catch (n) {
                    return !1
                }
                if (!de.ownFirst)
                    for (t in e) return ce.call(e, t);
                for (t in e);
                return t === undefined || ce.call(e, t)
            },
            type: function (e) {
                return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? le[ue.call(e)] || "object" : typeof e
            },
            globalEval: function (t) {
                t && pe.trim(t) && (e.execScript || function (t) {
                    e.eval.call(e, t)
                })(t)
            },
            camelCase: function (e) {
                return e.replace(me, "ms-").replace(ge, ve)
            },
            nodeName: function (e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
            },
            each: function (e, t) {
                var i, r = 0;
                if (n(e))
                    for (i = e.length; r < i && !1 !== t.call(e[r], r, e[r]); r++);
                else
                    for (r in e)
                        if (!1 === t.call(e[r], r, e[r])) break;
                return e
            },
            trim: function (e) {
                return null == e ? "" : (e + "").replace(fe, "")
            },
            makeArray: function (e, t) {
                var i = t || [];
                return null != e && (n(Object(e)) ? pe.merge(i, "string" == typeof e ? [e] : e) : oe.call(i, e)), i
            },
            inArray: function (e, t, n) {
                var i;
                if (t) {
                    if (se) return se.call(t, e, n);
                    for (i = t.length, n = n ? n < 0 ? Math.max(0, i + n) : n : 0; n < i; n++)
                        if (n in t && t[n] === e) return n
                }
                return -1
            },
            merge: function (e, t) {
                for (var n = +t.length, i = 0, r = e.length; i < n;) e[r++] = t[i++];
                if (n != n)
                    for (; t[i] !== undefined;) e[r++] = t[i++];
                return e.length = r, e
            },
            grep: function (e, t, n) {
                for (var i = [], r = 0, a = e.length, o = !n; r < a; r++) !t(e[r], r) !== o && i.push(e[r]);
                return i
            },
            map: function (e, t, i) {
                var r, a, o = 0,
                    s = [];
                if (n(e))
                    for (r = e.length; o < r; o++) null != (a = t(e[o], o, i)) && s.push(a);
                else
                    for (o in e) null != (a = t(e[o], o, i)) && s.push(a);
                return ae.apply([], s)
            },
            guid: 1,
            proxy: function (e, t) {
                var n, i, r;
                return "string" == typeof t && (r = e[t], t = e, e = r), pe.isFunction(e) ? (n = re.call(arguments, 2), (i = function () {
                    return e.apply(t || this, n.concat(re.call(arguments)))
                }).guid = e.guid = e.guid || pe.guid++, i) : undefined
            },
            now: function () {
                return +new Date
            },
            support: de
        }), "function" == typeof Symbol && (pe.fn[Symbol.iterator] = ne[Symbol.iterator]), pe.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
            le["[object " + t + "]"] = t.toLowerCase()
        });
        var ye =
            /*!
             * Sizzle CSS Selector Engine v2.2.1
             * http://sizzlejs.com/
             *
             * Copyright jQuery Foundation and other contributors
             * Released under the MIT license
             * http://jquery.org/license
             *
             * Date: 2015-10-17
             */
            function (e) {
                function t(e, t, n, i) {
                    var r, a, o, s, l, u, d, p, f = t && t.ownerDocument,
                        m = t ? t.nodeType : 9;
                    if (n = n || [], "string" != typeof e || !e || 1 !== m && 9 !== m && 11 !== m) return n;
                    if (!i && ((t ? t.ownerDocument || t : Q) !== N && A(t), t = t || N, $)) {
                        if (11 !== m && (u = ve.exec(e)))
                            if (r = u[1]) {
                                if (9 === m) {
                                    if (!(o = t.getElementById(r))) return n;
                                    if (o.id === r) return n.push(o), n
                                } else if (f && (o = f.getElementById(r)) && P(t, o) && o.id === r) return n.push(o), n
                            } else {
                                if (u[2]) return J.apply(n, t.getElementsByTagName(e)), n;
                                if ((r = u[3]) && w.getElementsByClassName && t.getElementsByClassName) return J.apply(n, t.getElementsByClassName(r)), n
                            } if (w.qsa && !B[e + " "] && (!M || !M.test(e))) {
                            if (1 !== m) f = t, p = e;
                            else if ("object" !== t.nodeName.toLowerCase()) {
                                for ((s = t.getAttribute("id")) ? s = s.replace(be, "\\$&") : t.setAttribute("id", s = q), a = (d = D(e)).length, l = he.test(s) ? "#" + s : "[id='" + s + "']"; a--;) d[a] = l + " " + h(d[a]);
                                p = d.join(","), f = ye.test(e) && c(t.parentNode) || t
                            }
                            if (p) try {
                                return J.apply(n, f.querySelectorAll(p)), n
                            } catch (g) {} finally {
                                s === q && t.removeAttribute("id")
                            }
                        }
                    }
                    return T(e.replace(se, "$1"), t, n, i)
                }

                function n() {
                    function e(n, i) {
                        return t.push(n + " ") > k.cacheLength && delete e[t.shift()], e[n + " "] = i
                    }
                    var t = [];
                    return e
                }

                function i(e) {
                    return e[q] = !0, e
                }

                function r(e) {
                    var t = N.createElement("div");
                    try {
                        return !!e(t)
                    } catch (n) {
                        return !1
                    } finally {
                        t.parentNode && t.parentNode.removeChild(t), t = null
                    }
                }

                function a(e, t) {
                    for (var n = e.split("|"), i = n.length; i--;) k.attrHandle[n[i]] = t
                }

                function o(e, t) {
                    var n = t && e,
                        i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || Y) - (~e.sourceIndex || Y);
                    if (i) return i;
                    if (n)
                        for (; n = n.nextSibling;)
                            if (n === t) return -1;
                    return e ? 1 : -1
                }

                function s(e) {
                    return function (t) {
                        return "input" === t.nodeName.toLowerCase() && t.type === e
                    }
                }

                function l(e) {
                    return function (t) {
                        var n = t.nodeName.toLowerCase();
                        return ("input" === n || "button" === n) && t.type === e
                    }
                }

                function u(e) {
                    return i(function (t) {
                        return t = +t, i(function (n, i) {
                            for (var r, a = e([], n.length, t), o = a.length; o--;) n[r = a[o]] && (n[r] = !(i[r] = n[r]))
                        })
                    })
                }

                function c(e) {
                    return e && "undefined" != typeof e.getElementsByTagName && e
                }

                function d() {}

                function h(e) {
                    for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
                    return i
                }

                function p(e, t, n) {
                    var i = t.dir,
                        r = n && "parentNode" === i,
                        a = z++;
                    return t.first ? function (t, n, a) {
                        for (; t = t[i];)
                            if (1 === t.nodeType || r) return e(t, n, a)
                    } : function (t, n, o) {
                        var s, l, u, c = [R, a];
                        if (o) {
                            for (; t = t[i];)
                                if ((1 === t.nodeType || r) && e(t, n, o)) return !0
                        } else
                            for (; t = t[i];)
                                if (1 === t.nodeType || r) {
                                    if ((s = (l = (u = t[q] || (t[q] = {}))[t.uniqueID] || (u[t.uniqueID] = {}))[i]) && s[0] === R && s[1] === a) return c[2] = s[2];
                                    if (l[i] = c, c[2] = e(t, n, o)) return !0
                                }
                    }
                }

                function f(e) {
                    return e.length > 1 ? function (t, n, i) {
                        for (var r = e.length; r--;)
                            if (!e[r](t, n, i)) return !1;
                        return !0
                    } : e[0]
                }

                function m(e, n, i) {
                    for (var r = 0, a = n.length; r < a; r++) t(e, n[r], i);
                    return i
                }

                function g(e, t, n, i, r) {
                    for (var a, o = [], s = 0, l = e.length, u = null != t; s < l; s++)(a = e[s]) && (n && !n(a, i, r) || (o.push(a), u && t.push(s)));
                    return o
                }

                function v(e, t, n, r, a, o) {
                    return r && !r[q] && (r = v(r)), a && !a[q] && (a = v(a, o)), i(function (i, o, s, l) {
                        var u, c, d, h = [],
                            p = [],
                            f = o.length,
                            v = i || m(t || "*", s.nodeType ? [s] : s, []),
                            y = !e || !i && t ? v : g(v, h, e, s, l),
                            b = n ? a || (i ? e : f || r) ? [] : o : y;
                        if (n && n(y, b, s, l), r)
                            for (u = g(b, p), r(u, [], s, l), c = u.length; c--;)(d = u[c]) && (b[p[c]] = !(y[p[c]] = d));
                        if (i) {
                            if (a || e) {
                                if (a) {
                                    for (u = [], c = b.length; c--;)(d = b[c]) && u.push(y[c] = d);
                                    a(null, b = [], u, l)
                                }
                                for (c = b.length; c--;)(d = b[c]) && (u = a ? ee(i, d) : h[c]) > -1 && (i[u] = !(o[u] = d))
                            }
                        } else b = g(b === o ? b.splice(f, b.length) : b), a ? a(null, o, b, l) : J.apply(o, b)
                    })
                }

                function y(e) {
                    for (var t, n, i, r = e.length, a = k.relative[e[0].type], o = a || k.relative[" "], s = a ? 1 : 0, l = p(function (e) {
                            return e === t
                        }, o, !0), u = p(function (e) {
                            return ee(t, e) > -1
                        }, o, !0), c = [function (e, n, i) {
                            var r = !a && (i || n !== S) || ((t = n).nodeType ? l(e, n, i) : u(e, n, i));
                            return t = null, r
                        }]; s < r; s++)
                        if (n = k.relative[e[s].type]) c = [p(f(c), n)];
                        else {
                            if ((n = k.filter[e[s].type].apply(null, e[s].matches))[q]) {
                                for (i = ++s; i < r && !k.relative[e[i].type]; i++);
                                return v(s > 1 && f(c), s > 1 && h(e.slice(0, s - 1).concat({
                                    value: " " === e[s - 2].type ? "*" : ""
                                })).replace(se, "$1"), n, s < i && y(e.slice(s, i)), i < r && y(e = e.slice(i)), i < r && h(e))
                            }
                            c.push(n)
                        } return f(c)
                }

                function b(e, n) {
                    var r = n.length > 0,
                        a = e.length > 0,
                        o = function (i, o, s, l, u) {
                            var c, d, h, p = 0,
                                f = "0",
                                m = i && [],
                                v = [],
                                y = S,
                                b = i || a && k.find.TAG("*", u),
                                _ = R += null == y ? 1 : Math.random() || .1,
                                w = b.length;
                            for (u && (S = o === N || o || u); f !== w && null != (c = b[f]); f++) {
                                if (a && c) {
                                    for (d = 0, o || c.ownerDocument === N || (A(c), s = !$); h = e[d++];)
                                        if (h(c, o || N, s)) {
                                            l.push(c);
                                            break
                                        } u && (R = _)
                                }
                                r && ((c = !h && c) && p--, i && m.push(c))
                            }
                            if (p += f, r && f !== p) {
                                for (d = 0; h = n[d++];) h(m, v, o, s);
                                if (i) {
                                    if (p > 0)
                                        for (; f--;) m[f] || v[f] || (v[f] = X.call(l));
                                    v = g(v)
                                }
                                J.apply(l, v), u && !i && v.length > 0 && p + n.length > 1 && t.uniqueSort(l)
                            }
                            return u && (R = _, S = y), m
                        };
                    return r ? i(o) : o
                }
                var _, w, k, C, x, D, E, T, S, F, j, A, N, I, $, M, L, O, P, q = "sizzle" + 1 * new Date,
                    Q = e.document,
                    R = 0,
                    z = 0,
                    H = n(),
                    U = n(),
                    B = n(),
                    W = function (e, t) {
                        return e === t && (j = !0), 0
                    },
                    Y = 1 << 31,
                    V = {}.hasOwnProperty,
                    K = [],
                    X = K.pop,
                    G = K.push,
                    J = K.push,
                    Z = K.slice,
                    ee = function (e, t) {
                        for (var n = 0, i = e.length; n < i; n++)
                            if (e[n] === t) return n;
                        return -1
                    },
                    te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                    ne = "[\\x20\\t\\r\\n\\f]",
                    ie = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                    re = "\\[" + ne + "*(" + ie + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ie + "))|)" + ne + "*\\]",
                    ae = ":(" + ie + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + re + ")*)|.*)\\)|)",
                    oe = new RegExp(ne + "+", "g"),
                    se = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
                    le = new RegExp("^" + ne + "*," + ne + "*"),
                    ue = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
                    ce = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
                    de = new RegExp(ae),
                    he = new RegExp("^" + ie + "$"),
                    pe = {
                        ID: new RegExp("^#(" + ie + ")"),
                        CLASS: new RegExp("^\\.(" + ie + ")"),
                        TAG: new RegExp("^(" + ie + "|[*])"),
                        ATTR: new RegExp("^" + re),
                        PSEUDO: new RegExp("^" + ae),
                        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
                        bool: new RegExp("^(?:" + te + ")$", "i"),
                        needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
                    },
                    fe = /^(?:input|select|textarea|button)$/i,
                    me = /^h\d$/i,
                    ge = /^[^{]+\{\s*\[native \w/,
                    ve = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                    ye = /[+~]/,
                    be = /'|\\/g,
                    _e = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
                    we = function (e, t, n) {
                        var i = "0x" + t - 65536;
                        return i != i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
                    },
                    ke = function () {
                        A()
                    };
                try {
                    J.apply(K = Z.call(Q.childNodes), Q.childNodes), K[Q.childNodes.length].nodeType
                } catch (Ce) {
                    J = {
                        apply: K.length ? function (e, t) {
                            G.apply(e, Z.call(t))
                        } : function (e, t) {
                            for (var n = e.length, i = 0; e[n++] = t[i++];);
                            e.length = n - 1
                        }
                    }
                }
                for (_ in w = t.support = {}, x = t.isXML = function (e) {
                        var t = e && (e.ownerDocument || e).documentElement;
                        return !!t && "HTML" !== t.nodeName
                    }, A = t.setDocument = function (e) {
                        var t, n, i = e ? e.ownerDocument || e : Q;
                        return i !== N && 9 === i.nodeType && i.documentElement ? (I = (N = i).documentElement, $ = !x(N), (n = N.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", ke, !1) : n.attachEvent && n.attachEvent("onunload", ke)), w.attributes = r(function (e) {
                            return e.className = "i", !e.getAttribute("className")
                        }), w.getElementsByTagName = r(function (e) {
                            return e.appendChild(N.createComment("")), !e.getElementsByTagName("*").length
                        }), w.getElementsByClassName = ge.test(N.getElementsByClassName), w.getById = r(function (e) {
                            return I.appendChild(e).id = q, !N.getElementsByName || !N.getElementsByName(q).length
                        }), w.getById ? (k.find.ID = function (e, t) {
                            if ("undefined" != typeof t.getElementById && $) {
                                var n = t.getElementById(e);
                                return n ? [n] : []
                            }
                        }, k.filter.ID = function (e) {
                            var t = e.replace(_e, we);
                            return function (e) {
                                return e.getAttribute("id") === t
                            }
                        }) : (delete k.find.ID, k.filter.ID = function (e) {
                            var t = e.replace(_e, we);
                            return function (e) {
                                var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                                return n && n.value === t
                            }
                        }), k.find.TAG = w.getElementsByTagName ? function (e, t) {
                            return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : w.qsa ? t.querySelectorAll(e) : void 0
                        } : function (e, t) {
                            var n, i = [],
                                r = 0,
                                a = t.getElementsByTagName(e);
                            if ("*" === e) {
                                for (; n = a[r++];) 1 === n.nodeType && i.push(n);
                                return i
                            }
                            return a
                        }, k.find.CLASS = w.getElementsByClassName && function (e, t) {
                            if ("undefined" != typeof t.getElementsByClassName && $) return t.getElementsByClassName(e)
                        }, L = [], M = [], (w.qsa = ge.test(N.querySelectorAll)) && (r(function (e) {
                            I.appendChild(e).innerHTML = "<a id='" + q + "'></a><select id='" + q + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && M.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || M.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + q + "-]").length || M.push("~="), e.querySelectorAll(":checked").length || M.push(":checked"), e.querySelectorAll("a#" + q + "+*").length || M.push(".#.+[+~]")
                        }), r(function (e) {
                            var t = N.createElement("input");
                            t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && M.push("name" + ne + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || M.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), M.push(",.*:")
                        })), (w.matchesSelector = ge.test(O = I.matches || I.webkitMatchesSelector || I.mozMatchesSelector || I.oMatchesSelector || I.msMatchesSelector)) && r(function (e) {
                            w.disconnectedMatch = O.call(e, "div"), O.call(e, "[s!='']:x"), L.push("!=", ae)
                        }), M = M.length && new RegExp(M.join("|")), L = L.length && new RegExp(L.join("|")), t = ge.test(I.compareDocumentPosition), P = t || ge.test(I.contains) ? function (e, t) {
                            var n = 9 === e.nodeType ? e.documentElement : e,
                                i = t && t.parentNode;
                            return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
                        } : function (e, t) {
                            if (t)
                                for (; t = t.parentNode;)
                                    if (t === e) return !0;
                            return !1
                        }, W = t ? function (e, t) {
                            if (e === t) return j = !0, 0;
                            var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                            return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !w.sortDetached && t.compareDocumentPosition(e) === n ? e === N || e.ownerDocument === Q && P(Q, e) ? -1 : t === N || t.ownerDocument === Q && P(Q, t) ? 1 : F ? ee(F, e) - ee(F, t) : 0 : 4 & n ? -1 : 1)
                        } : function (e, t) {
                            if (e === t) return j = !0, 0;
                            var n, i = 0,
                                r = e.parentNode,
                                a = t.parentNode,
                                s = [e],
                                l = [t];
                            if (!r || !a) return e === N ? -1 : t === N ? 1 : r ? -1 : a ? 1 : F ? ee(F, e) - ee(F, t) : 0;
                            if (r === a) return o(e, t);
                            for (n = e; n = n.parentNode;) s.unshift(n);
                            for (n = t; n = n.parentNode;) l.unshift(n);
                            for (; s[i] === l[i];) i++;
                            return i ? o(s[i], l[i]) : s[i] === Q ? -1 : l[i] === Q ? 1 : 0
                        }, N) : N
                    }, t.matches = function (e, n) {
                        return t(e, null, null, n)
                    }, t.matchesSelector = function (e, n) {
                        if ((e.ownerDocument || e) !== N && A(e), n = n.replace(ce, "='$1']"), w.matchesSelector && $ && !B[n + " "] && (!L || !L.test(n)) && (!M || !M.test(n))) try {
                            var i = O.call(e, n);
                            if (i || w.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
                        } catch (Ce) {}
                        return t(n, N, null, [e]).length > 0
                    }, t.contains = function (e, t) {
                        return (e.ownerDocument || e) !== N && A(e), P(e, t)
                    }, t.attr = function (e, t) {
                        (e.ownerDocument || e) !== N && A(e);
                        var n = k.attrHandle[t.toLowerCase()],
                            i = n && V.call(k.attrHandle, t.toLowerCase()) ? n(e, t, !$) : undefined;
                        return i !== undefined ? i : w.attributes || !$ ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
                    }, t.error = function (e) {
                        throw new Error("Syntax error, unrecognized expression: " + e)
                    }, t.uniqueSort = function (e) {
                        var t, n = [],
                            i = 0,
                            r = 0;
                        if (j = !w.detectDuplicates, F = !w.sortStable && e.slice(0), e.sort(W), j) {
                            for (; t = e[r++];) t === e[r] && (i = n.push(r));
                            for (; i--;) e.splice(n[i], 1)
                        }
                        return F = null, e
                    }, C = t.getText = function (e) {
                        var t, n = "",
                            i = 0,
                            r = e.nodeType;
                        if (r) {
                            if (1 === r || 9 === r || 11 === r) {
                                if ("string" == typeof e.textContent) return e.textContent;
                                for (e = e.firstChild; e; e = e.nextSibling) n += C(e)
                            } else if (3 === r || 4 === r) return e.nodeValue
                        } else
                            for (; t = e[i++];) n += C(t);
                        return n
                    }, (k = t.selectors = {
                        cacheLength: 50,
                        createPseudo: i,
                        match: pe,
                        attrHandle: {},
                        find: {},
                        relative: {
                            ">": {
                                dir: "parentNode",
                                first: !0
                            },
                            " ": {
                                dir: "parentNode"
                            },
                            "+": {
                                dir: "previousSibling",
                                first: !0
                            },
                            "~": {
                                dir: "previousSibling"
                            }
                        },
                        preFilter: {
                            ATTR: function (e) {
                                return e[1] = e[1].replace(_e, we), e[3] = (e[3] || e[4] || e[5] || "").replace(_e, we), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                            },
                            CHILD: function (e) {
                                return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                            },
                            PSEUDO: function (e) {
                                var t, n = !e[6] && e[2];
                                return pe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && de.test(n) && (t = D(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                            }
                        },
                        filter: {
                            TAG: function (e) {
                                var t = e.replace(_e, we).toLowerCase();
                                return "*" === e ? function () {
                                    return !0
                                } : function (e) {
                                    return e.nodeName && e.nodeName.toLowerCase() === t
                                }
                            },
                            CLASS: function (e) {
                                var t = H[e + " "];
                                return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && H(e, function (e) {
                                    return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                                })
                            },
                            ATTR: function (e, n, i) {
                                return function (r) {
                                    var a = t.attr(r, e);
                                    return null == a ? "!=" === n : !n || (a += "", "=" === n ? a === i : "!=" === n ? a !== i : "^=" === n ? i && 0 === a.indexOf(i) : "*=" === n ? i && a.indexOf(i) > -1 : "$=" === n ? i && a.slice(-i.length) === i : "~=" === n ? (" " + a.replace(oe, " ") + " ").indexOf(i) > -1 : "|=" === n && (a === i || a.slice(0, i.length + 1) === i + "-"))
                                }
                            },
                            CHILD: function (e, t, n, i, r) {
                                var a = "nth" !== e.slice(0, 3),
                                    o = "last" !== e.slice(-4),
                                    s = "of-type" === t;
                                return 1 === i && 0 === r ? function (e) {
                                    return !!e.parentNode
                                } : function (t, n, l) {
                                    var u, c, d, h, p, f, m = a !== o ? "nextSibling" : "previousSibling",
                                        g = t.parentNode,
                                        v = s && t.nodeName.toLowerCase(),
                                        y = !l && !s,
                                        b = !1;
                                    if (g) {
                                        if (a) {
                                            for (; m;) {
                                                for (h = t; h = h[m];)
                                                    if (s ? h.nodeName.toLowerCase() === v : 1 === h.nodeType) return !1;
                                                f = m = "only" === e && !f && "nextSibling"
                                            }
                                            return !0
                                        }
                                        if (f = [o ? g.firstChild : g.lastChild], o && y) {
                                            for (b = (p = (u = (c = (d = (h = g)[q] || (h[q] = {}))[h.uniqueID] || (d[h.uniqueID] = {}))[e] || [])[0] === R && u[1]) && u[2], h = p && g.childNodes[p]; h = ++p && h && h[m] || (b = p = 0) || f.pop();)
                                                if (1 === h.nodeType && ++b && h === t) {
                                                    c[e] = [R, p, b];
                                                    break
                                                }
                                        } else if (y && (b = p = (u = (c = (d = (h = t)[q] || (h[q] = {}))[h.uniqueID] || (d[h.uniqueID] = {}))[e] || [])[0] === R && u[1]), !1 === b)
                                            for (;
                                                (h = ++p && h && h[m] || (b = p = 0) || f.pop()) && ((s ? h.nodeName.toLowerCase() !== v : 1 !== h.nodeType) || !++b || (y && ((c = (d = h[q] || (h[q] = {}))[h.uniqueID] || (d[h.uniqueID] = {}))[e] = [R, b]), h !== t)););
                                        return (b -= r) === i || b % i == 0 && b / i >= 0
                                    }
                                }
                            },
                            PSEUDO: function (e, n) {
                                var r, a = k.pseudos[e] || k.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                                return a[q] ? a(n) : a.length > 1 ? (r = [e, e, "", n], k.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function (e, t) {
                                    for (var i, r = a(e, n), o = r.length; o--;) e[i = ee(e, r[o])] = !(t[i] = r[o])
                                }) : function (e) {
                                    return a(e, 0, r)
                                }) : a
                            }
                        },
                        pseudos: {
                            not: i(function (e) {
                                var t = [],
                                    n = [],
                                    r = E(e.replace(se, "$1"));
                                return r[q] ? i(function (e, t, n, i) {
                                    for (var a, o = r(e, null, i, []), s = e.length; s--;)(a = o[s]) && (e[s] = !(t[s] = a))
                                }) : function (e, i, a) {
                                    return t[0] = e, r(t, null, a, n), t[0] = null, !n.pop()
                                }
                            }),
                            has: i(function (e) {
                                return function (n) {
                                    return t(e, n).length > 0
                                }
                            }),
                            contains: i(function (e) {
                                return e = e.replace(_e, we),
                                    function (t) {
                                        return (t.textContent || t.innerText || C(t)).indexOf(e) > -1
                                    }
                            }),
                            lang: i(function (e) {
                                return he.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(_e, we).toLowerCase(),
                                    function (t) {
                                        var n;
                                        do {
                                            if (n = $ ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                                        } while ((t = t.parentNode) && 1 === t.nodeType);
                                        return !1
                                    }
                            }),
                            target: function (t) {
                                var n = e.location && e.location.hash;
                                return n && n.slice(1) === t.id
                            },
                            root: function (e) {
                                return e === I
                            },
                            focus: function (e) {
                                return e === N.activeElement && (!N.hasFocus || N.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                            },
                            enabled: function (e) {
                                return !1 === e.disabled
                            },
                            disabled: function (e) {
                                return !0 === e.disabled
                            },
                            checked: function (e) {
                                var t = e.nodeName.toLowerCase();
                                return "input" === t && !!e.checked || "option" === t && !!e.selected
                            },
                            selected: function (e) {
                                return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                            },
                            empty: function (e) {
                                for (e = e.firstChild; e; e = e.nextSibling)
                                    if (e.nodeType < 6) return !1;
                                return !0
                            },
                            parent: function (e) {
                                return !k.pseudos.empty(e)
                            },
                            header: function (e) {
                                return me.test(e.nodeName)
                            },
                            input: function (e) {
                                return fe.test(e.nodeName)
                            },
                            button: function (e) {
                                var t = e.nodeName.toLowerCase();
                                return "input" === t && "button" === e.type || "button" === t
                            },
                            text: function (e) {
                                var t;
                                return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                            },
                            first: u(function () {
                                return [0]
                            }),
                            last: u(function (e, t) {
                                return [t - 1]
                            }),
                            eq: u(function (e, t, n) {
                                return [n < 0 ? n + t : n]
                            }),
                            even: u(function (e, t) {
                                for (var n = 0; n < t; n += 2) e.push(n);
                                return e
                            }),
                            odd: u(function (e, t) {
                                for (var n = 1; n < t; n += 2) e.push(n);
                                return e
                            }),
                            lt: u(function (e, t, n) {
                                for (var i = n < 0 ? n + t : n; --i >= 0;) e.push(i);
                                return e
                            }),
                            gt: u(function (e, t, n) {
                                for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
                                return e
                            })
                        }
                    }).pseudos.nth = k.pseudos.eq, {
                        radio: !0,
                        checkbox: !0,
                        file: !0,
                        password: !0,
                        image: !0
                    }) k.pseudos[_] = s(_);
                for (_ in {
                        submit: !0,
                        reset: !0
                    }) k.pseudos[_] = l(_);
                return d.prototype = k.filters = k.pseudos, k.setFilters = new d, D = t.tokenize = function (e, n) {
                    var i, r, a, o, s, l, u, c = U[e + " "];
                    if (c) return n ? 0 : c.slice(0);
                    for (s = e, l = [], u = k.preFilter; s;) {
                        for (o in i && !(r = le.exec(s)) || (r && (s = s.slice(r[0].length) || s), l.push(a = [])), i = !1, (r = ue.exec(s)) && (i = r.shift(), a.push({
                                value: i,
                                type: r[0].replace(se, " ")
                            }), s = s.slice(i.length)), k.filter) !(r = pe[o].exec(s)) || u[o] && !(r = u[o](r)) || (i = r.shift(), a.push({
                            value: i,
                            type: o,
                            matches: r
                        }), s = s.slice(i.length));
                        if (!i) break
                    }
                    return n ? s.length : s ? t.error(e) : U(e, l).slice(0)
                }, E = t.compile = function (e, t) {
                    var n, i = [],
                        r = [],
                        a = B[e + " "];
                    if (!a) {
                        for (t || (t = D(e)), n = t.length; n--;)(a = y(t[n]))[q] ? i.push(a) : r.push(a);
                        (a = B(e, b(r, i))).selector = e
                    }
                    return a
                }, T = t.select = function (e, t, n, i) {
                    var r, a, o, s, l, u = "function" == typeof e && e,
                        d = !i && D(e = u.selector || e);
                    if (n = n || [], 1 === d.length) {
                        if ((a = d[0] = d[0].slice(0)).length > 2 && "ID" === (o = a[0]).type && w.getById && 9 === t.nodeType && $ && k.relative[a[1].type]) {
                            if (!(t = (k.find.ID(o.matches[0].replace(_e, we), t) || [])[0])) return n;
                            u && (t = t.parentNode), e = e.slice(a.shift().value.length)
                        }
                        for (r = pe.needsContext.test(e) ? 0 : a.length; r-- && (o = a[r], !k.relative[s = o.type]);)
                            if ((l = k.find[s]) && (i = l(o.matches[0].replace(_e, we), ye.test(a[0].type) && c(t.parentNode) || t))) {
                                if (a.splice(r, 1), !(e = i.length && h(a))) return J.apply(n, i), n;
                                break
                            }
                    }
                    return (u || E(e, d))(i, t, !$, n, !t || ye.test(e) && c(t.parentNode) || t), n
                }, w.sortStable = q.split("").sort(W).join("") === q, w.detectDuplicates = !!j, A(), w.sortDetached = r(function (e) {
                    return 1 & e.compareDocumentPosition(N.createElement("div"))
                }), r(function (e) {
                    return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
                }) || a("type|href|height|width", function (e, t, n) {
                    if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
                }), w.attributes && r(function (e) {
                    return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
                }) || a("value", function (e, t, n) {
                    if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
                }), r(function (e) {
                    return null == e.getAttribute("disabled")
                }) || a(te, function (e, t, n) {
                    var i;
                    if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
                }), t
            }(e);
        pe.find = ye, pe.expr = ye.selectors, pe.expr[":"] = pe.expr.pseudos, pe.uniqueSort = pe.unique = ye.uniqueSort, pe.text = ye.getText, pe.isXMLDoc = ye.isXML, pe.contains = ye.contains;
        var be = function (e, t, n) {
                for (var i = [], r = n !== undefined;
                    (e = e[t]) && 9 !== e.nodeType;)
                    if (1 === e.nodeType) {
                        if (r && pe(e).is(n)) break;
                        i.push(e)
                    } return i
            },
            _e = function (e, t) {
                for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                return n
            },
            we = pe.expr.match.needsContext,
            ke = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
            Ce = /^.[^:#\[\.,]*$/;
        pe.filter = function (e, t, n) {
            var i = t[0];
            return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? pe.find.matchesSelector(i, e) ? [i] : [] : pe.find.matches(e, pe.grep(t, function (e) {
                return 1 === e.nodeType
            }))
        }, pe.fn.extend({
            find: function (e) {
                var t, n = [],
                    i = this,
                    r = i.length;
                if ("string" != typeof e) return this.pushStack(pe(e).filter(function () {
                    for (t = 0; t < r; t++)
                        if (pe.contains(i[t], this)) return !0
                }));
                for (t = 0; t < r; t++) pe.find(e, i[t], n);
                return (n = this.pushStack(r > 1 ? pe.unique(n) : n)).selector = this.selector ? this.selector + " " + e : e, n
            },
            filter: function (e) {
                return this.pushStack(i(this, e || [], !1))
            },
            not: function (e) {
                return this.pushStack(i(this, e || [], !0))
            },
            is: function (e) {
                return !!i(this, "string" == typeof e && we.test(e) ? pe(e) : e || [], !1).length
            }
        });
        var xe, De = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
        (pe.fn.init = function (e, t, n) {
            var i, r;
            if (!e) return this;
            if (n = n || xe, "string" == typeof e) {
                if (!(i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : De.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                if (i[1]) {
                    if (t = t instanceof pe ? t[0] : t, pe.merge(this, pe.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : ie, !0)), ke.test(i[1]) && pe.isPlainObject(t))
                        for (i in t) pe.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                    return this
                }
                if ((r = ie.getElementById(i[2])) && r.parentNode) {
                    if (r.id !== i[2]) return xe.find(e);
                    this.length = 1, this[0] = r
                }
                return this.context = ie, this.selector = e, this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : pe.isFunction(e) ? "undefined" != typeof n.ready ? n.ready(e) : e(pe) : (e.selector !== undefined && (this.selector = e.selector, this.context = e.context), pe.makeArray(e, this))
        }).prototype = pe.fn, xe = pe(ie);
        var Ee = /^(?:parents|prev(?:Until|All))/,
            Te = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        pe.fn.extend({
            has: function (e) {
                var t, n = pe(e, this),
                    i = n.length;
                return this.filter(function () {
                    for (t = 0; t < i; t++)
                        if (pe.contains(this, n[t])) return !0
                })
            },
            closest: function (e, t) {
                for (var n, i = 0, r = this.length, a = [], o = we.test(e) || "string" != typeof e ? pe(e, t || this.context) : 0; i < r; i++)
                    for (n = this[i]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (o ? o.index(n) > -1 : 1 === n.nodeType && pe.find.matchesSelector(n, e))) {
                            a.push(n);
                            break
                        } return this.pushStack(a.length > 1 ? pe.uniqueSort(a) : a)
            },
            index: function (e) {
                return e ? "string" == typeof e ? pe.inArray(this[0], pe(e)) : pe.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function (e, t) {
                return this.pushStack(pe.uniqueSort(pe.merge(this.get(), pe(e, t))))
            },
            addBack: function (e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
            }
        }), pe.each({
            parent: function (e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null
            },
            parents: function (e) {
                return be(e, "parentNode")
            },
            parentsUntil: function (e, t, n) {
                return be(e, "parentNode", n)
            },
            next: function (e) {
                return r(e, "nextSibling")
            },
            prev: function (e) {
                return r(e, "previousSibling")
            },
            nextAll: function (e) {
                return be(e, "nextSibling")
            },
            prevAll: function (e) {
                return be(e, "previousSibling")
            },
            nextUntil: function (e, t, n) {
                return be(e, "nextSibling", n)
            },
            prevUntil: function (e, t, n) {
                return be(e, "previousSibling", n)
            },
            siblings: function (e) {
                return _e((e.parentNode || {}).firstChild, e)
            },
            children: function (e) {
                return _e(e.firstChild)
            },
            contents: function (e) {
                return pe.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : pe.merge([], e.childNodes)
            }
        }, function (e, t) {
            pe.fn[e] = function (n, i) {
                var r = pe.map(this, t, n);
                return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (r = pe.filter(i, r)), this.length > 1 && (Te[e] || (r = pe.uniqueSort(r)), Ee.test(e) && (r = r.reverse())), this.pushStack(r)
            }
        });
        var Se, Fe, je = /\S+/g;
        for (Fe in pe.Callbacks = function (e) {
                e = "string" == typeof e ? a(e) : pe.extend({}, e);
                var t, n, i, r, o = [],
                    s = [],
                    l = -1,
                    u = function () {
                        for (r = e.once, i = t = !0; s.length; l = -1)
                            for (n = s.shift(); ++l < o.length;) !1 === o[l].apply(n[0], n[1]) && e.stopOnFalse && (l = o.length, n = !1);
                        e.memory || (n = !1), t = !1, r && (o = n ? [] : "")
                    },
                    c = {
                        add: function () {
                            return o && (n && !t && (l = o.length - 1, s.push(n)), function i(t) {
                                pe.each(t, function (t, n) {
                                    pe.isFunction(n) ? e.unique && c.has(n) || o.push(n) : n && n.length && "string" !== pe.type(n) && i(n)
                                })
                            }(arguments), n && !t && u()), this
                        },
                        remove: function () {
                            return pe.each(arguments, function (e, t) {
                                for (var n;
                                    (n = pe.inArray(t, o, n)) > -1;) o.splice(n, 1), n <= l && l--
                            }), this
                        },
                        has: function (e) {
                            return e ? pe.inArray(e, o) > -1 : o.length > 0
                        },
                        empty: function () {
                            return o && (o = []), this
                        },
                        disable: function () {
                            return r = s = [], o = n = "", this
                        },
                        disabled: function () {
                            return !o
                        },
                        lock: function () {
                            return r = !0, n || c.disable(), this
                        },
                        locked: function () {
                            return !!r
                        },
                        fireWith: function (e, n) {
                            return r || (n = [e, (n = n || []).slice ? n.slice() : n], s.push(n), t || u()), this
                        },
                        fire: function () {
                            return c.fireWith(this, arguments), this
                        },
                        fired: function () {
                            return !!i
                        }
                    };
                return c
            }, pe.extend({
                Deferred: function (e) {
                    var t = [
                            ["resolve", "done", pe.Callbacks("once memory"), "resolved"],
                            ["reject", "fail", pe.Callbacks("once memory"), "rejected"],
                            ["notify", "progress", pe.Callbacks("memory")]
                        ],
                        n = "pending",
                        i = {
                            state: function () {
                                return n
                            },
                            always: function () {
                                return r.done(arguments).fail(arguments), this
                            },
                            then: function () {
                                var e = arguments;
                                return pe.Deferred(function (n) {
                                    pe.each(t, function (t, a) {
                                        var o = pe.isFunction(e[t]) && e[t];
                                        r[a[1]](function () {
                                            var e = o && o.apply(this, arguments);
                                            e && pe.isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[a[0] + "With"](this === i ? n.promise() : this, o ? [e] : arguments)
                                        })
                                    }), e = null
                                }).promise()
                            },
                            promise: function (e) {
                                return null != e ? pe.extend(e, i) : i
                            }
                        },
                        r = {};
                    return i.pipe = i.then, pe.each(t, function (e, a) {
                        var o = a[2],
                            s = a[3];
                        i[a[1]] = o.add, s && o.add(function () {
                            n = s
                        }, t[1 ^ e][2].disable, t[2][2].lock), r[a[0]] = function () {
                            return r[a[0] + "With"](this === r ? i : this, arguments), this
                        }, r[a[0] + "With"] = o.fireWith
                    }), i.promise(r), e && e.call(r, r), r
                },
                when: function (e) {
                    var t, n, i, r = 0,
                        a = re.call(arguments),
                        o = a.length,
                        s = 1 !== o || e && pe.isFunction(e.promise) ? o : 0,
                        l = 1 === s ? e : pe.Deferred(),
                        u = function (e, n, i) {
                            return function (r) {
                                n[e] = this, i[e] = arguments.length > 1 ? re.call(arguments) : r, i === t ? l.notifyWith(n, i) : --s || l.resolveWith(n, i)
                            }
                        };
                    if (o > 1)
                        for (t = new Array(o), n = new Array(o), i = new Array(o); r < o; r++) a[r] && pe.isFunction(a[r].promise) ? a[r].promise().progress(u(r, n, t)).done(u(r, i, a)).fail(l.reject) : --s;
                    return s || l.resolveWith(i, a), l.promise()
                }
            }), pe.fn.ready = function (e) {
                return pe.ready.promise().done(e), this
            }, pe.extend({
                isReady: !1,
                readyWait: 1,
                holdReady: function (e) {
                    e ? pe.readyWait++ : pe.ready(!0)
                },
                ready: function (e) {
                    (!0 === e ? --pe.readyWait : pe.isReady) || (pe.isReady = !0, !0 !== e && --pe.readyWait > 0 || (Se.resolveWith(ie, [pe]), pe.fn.triggerHandler && (pe(ie).triggerHandler("ready"), pe(ie).off("ready"))))
                }
            }), pe.ready.promise = function (t) {
                if (!Se)
                    if (Se = pe.Deferred(), "complete" === ie.readyState || "loading" !== ie.readyState && !ie.documentElement.doScroll) e.setTimeout(pe.ready);
                    else if (ie.addEventListener) ie.addEventListener("DOMContentLoaded", s), e.addEventListener("load", s);
                else {
                    ie.attachEvent("onreadystatechange", s), e.attachEvent("onload", s);
                    var n = !1;
                    try {
                        n = null == e.frameElement && ie.documentElement
                    } catch (i) {}
                    n && n.doScroll && function t() {
                        if (!pe.isReady) {
                            try {
                                n.doScroll("left")
                            } catch (i) {
                                return e.setTimeout(t, 50)
                            }
                            o(), pe.ready()
                        }
                    }()
                }
                return Se.promise(t)
            }, pe.ready.promise(), pe(de)) break;
        de.ownFirst = "0" === Fe, de.inlineBlockNeedsLayout = !1, pe(function () {
                var e, t, n, i;
                (n = ie.getElementsByTagName("body")[0]) && n.style && (t = ie.createElement("div"), (i = ie.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), "undefined" != typeof t.style.zoom && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", de.inlineBlockNeedsLayout = e = 3 === t.offsetWidth, e && (n.style.zoom = 1)), n.removeChild(i))
            }),
            function () {
                var e = ie.createElement("div");
                de.deleteExpando = !0;
                try {
                    delete e.test
                } catch (t) {
                    de.deleteExpando = !1
                }
                e = null
            }();
        var Ae, Ne = function (e) {
                var t = pe.noData[(e.nodeName + " ").toLowerCase()],
                    n = +e.nodeType || 1;
                return (1 === n || 9 === n) && (!t || !0 !== t && e.getAttribute("classid") === t)
            },
            Ie = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            $e = /([A-Z])/g;
        pe.extend({
            cache: {},
            noData: {
                "applet ": !0,
                "embed ": !0,
                "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
            },
            hasData: function (e) {
                return !!(e = e.nodeType ? pe.cache[e[pe.expando]] : e[pe.expando]) && !u(e)
            },
            data: function (e, t, n) {
                return c(e, t, n)
            },
            removeData: function (e, t) {
                return d(e, t)
            },
            _data: function (e, t, n) {
                return c(e, t, n, !0)
            },
            _removeData: function (e, t) {
                return d(e, t, !0)
            }
        }), pe.fn.extend({
            data: function (e, t) {
                var n, i, r, a = this[0],
                    o = a && a.attributes;
                if (e === undefined) {
                    if (this.length && (r = pe.data(a), 1 === a.nodeType && !pe._data(a, "parsedAttrs"))) {
                        for (n = o.length; n--;) o[n] && 0 === (i = o[n].name).indexOf("data-") && l(a, i = pe.camelCase(i.slice(5)), r[i]);
                        pe._data(a, "parsedAttrs", !0)
                    }
                    return r
                }
                return "object" == typeof e ? this.each(function () {
                    pe.data(this, e)
                }) : arguments.length > 1 ? this.each(function () {
                    pe.data(this, e, t)
                }) : a ? l(a, e, pe.data(a, e)) : undefined
            },
            removeData: function (e) {
                return this.each(function () {
                    pe.removeData(this, e)
                })
            }
        }), pe.extend({
            queue: function (e, t, n) {
                var i;
                if (e) return t = (t || "fx") + "queue", i = pe._data(e, t), n && (!i || pe.isArray(n) ? i = pe._data(e, t, pe.makeArray(n)) : i.push(n)), i || []
            },
            dequeue: function (e, t) {
                t = t || "fx";
                var n = pe.queue(e, t),
                    i = n.length,
                    r = n.shift(),
                    a = pe._queueHooks(e, t),
                    o = function () {
                        pe.dequeue(e, t)
                    };
                "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete a.stop, r.call(e, o, a)), !i && a && a.empty.fire()
            },
            _queueHooks: function (e, t) {
                var n = t + "queueHooks";
                return pe._data(e, n) || pe._data(e, n, {
                    empty: pe.Callbacks("once memory").add(function () {
                        pe._removeData(e, t + "queue"), pe._removeData(e, n)
                    })
                })
            }
        }), pe.fn.extend({
            queue: function (e, t) {
                var n = 2;
                return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? pe.queue(this[0], e) : t === undefined ? this : this.each(function () {
                    var n = pe.queue(this, e, t);
                    pe._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && pe.dequeue(this, e)
                })
            },
            dequeue: function (e) {
                return this.each(function () {
                    pe.dequeue(this, e)
                })
            },
            clearQueue: function (e) {
                return this.queue(e || "fx", [])
            },
            promise: function (e, t) {
                var n, i = 1,
                    r = pe.Deferred(),
                    a = this,
                    o = this.length,
                    s = function () {
                        --i || r.resolveWith(a, [a])
                    };
                for ("string" != typeof e && (t = e, e = undefined), e = e || "fx"; o--;)(n = pe._data(a[o], e + "queueHooks")) && n.empty && (i++, n.empty.add(s));
                return s(), r.promise(t)
            }
        }), de.shrinkWrapBlocks = function () {
            return null != Ae ? Ae : (Ae = !1, (t = ie.getElementsByTagName("body")[0]) && t.style ? (e = ie.createElement("div"), (n = ie.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", t.appendChild(n).appendChild(e), "undefined" != typeof e.style.zoom && (e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", e.appendChild(ie.createElement("div")).style.width = "5px", Ae = 3 !== e.offsetWidth), t.removeChild(n), Ae) : void 0);
            var e, t, n
        };
        var Me, Le, Oe, Pe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            qe = new RegExp("^(?:([+-])=|)(" + Pe + ")([a-z%]*)$", "i"),
            Qe = ["Top", "Right", "Bottom", "Left"],
            Re = function (e, t) {
                return e = t || e, "none" === pe.css(e, "display") || !pe.contains(e.ownerDocument, e)
            },
            ze = function (e, t, n, i, r, a, o) {
                var s = 0,
                    l = e.length,
                    u = null == n;
                if ("object" === pe.type(n))
                    for (s in r = !0, n) ze(e, t, s, n[s], !0, a, o);
                else if (i !== undefined && (r = !0, pe.isFunction(i) || (o = !0), u && (o ? (t.call(e, i), t = null) : (u = t, t = function (e, t, n) {
                        return u.call(pe(e), n)
                    })), t))
                    for (; s < l; s++) t(e[s], n, o ? i : i.call(e[s], s, t(e[s], n)));
                return r ? e : u ? t.call(e) : l ? t(e[0], n) : a
            },
            He = /^(?:checkbox|radio)$/i,
            Ue = /<([\w:-]+)/,
            Be = /^$|\/(?:java|ecma)script/i,
            We = /^\s+/,
            Ye = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
        Me = ie.createElement("div"), Le = ie.createDocumentFragment(), Oe = ie.createElement("input"), Me.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", de.leadingWhitespace = 3 === Me.firstChild.nodeType, de.tbody = !Me.getElementsByTagName("tbody").length, de.htmlSerialize = !!Me.getElementsByTagName("link").length, de.html5Clone = "<:nav></:nav>" !== ie.createElement("nav").cloneNode(!0).outerHTML, Oe.type = "checkbox", Oe.checked = !0, Le.appendChild(Oe), de.appendChecked = Oe.checked, Me.innerHTML = "<textarea>x</textarea>", de.noCloneChecked = !!Me.cloneNode(!0).lastChild.defaultValue, Le.appendChild(Me), (Oe = ie.createElement("input")).setAttribute("type", "radio"), Oe.setAttribute("checked", "checked"), Oe.setAttribute("name", "t"), Me.appendChild(Oe), de.checkClone = Me.cloneNode(!0).cloneNode(!0).lastChild.checked, de.noCloneEvent = !!Me.addEventListener, Me[pe.expando] = 1, de.attributes = !Me.getAttribute(pe.expando);
        var Ve = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: de.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        };
        Ve.optgroup = Ve.option, Ve.tbody = Ve.tfoot = Ve.colgroup = Ve.caption = Ve.thead, Ve.th = Ve.td;
        var Ke = /<|&#?\w+;/,
            Xe = /<tbody/i;
        ! function () {
            var t, n, i = ie.createElement("div");
            for (t in {
                    submit: !0,
                    change: !0,
                    focusin: !0
                }) n = "on" + t, (de[t] = n in e) || (i.setAttribute(n, "t"), de[t] = !1 === i.attributes[n].expando);
            i = null
        }();
        var Ge = /^(?:input|select|textarea)$/i,
            Je = /^key/,
            Ze = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            et = /^(?:focusinfocus|focusoutblur)$/,
            tt = /^([^.]*)(?:\.(.+)|)/;
        pe.event = {
            global: {},
            add: function (e, t, n, i, r) {
                var a, o, s, l, u, c, d, h, p, f, m, g = pe._data(e);
                if (g) {
                    for (n.handler && (n = (l = n).handler, r = l.selector), n.guid || (n.guid = pe.guid++), (o = g.events) || (o = g.events = {}), (c = g.handle) || ((c = g.handle = function (e) {
                            return void 0 === pe || e && pe.event.triggered === e.type ? undefined : pe.event.dispatch.apply(c.elem, arguments)
                        }).elem = e), s = (t = (t || "").match(je) || [""]).length; s--;) p = m = (a = tt.exec(t[s]) || [])[1], f = (a[2] || "").split(".").sort(), p && (u = pe.event.special[p] || {}, p = (r ? u.delegateType : u.bindType) || p, u = pe.event.special[p] || {}, d = pe.extend({
                        type: p,
                        origType: m,
                        data: i,
                        handler: n,
                        guid: n.guid,
                        selector: r,
                        needsContext: r && pe.expr.match.needsContext.test(r),
                        namespace: f.join(".")
                    }, l), (h = o[p]) || ((h = o[p] = []).delegateCount = 0, u.setup && !1 !== u.setup.call(e, i, f, c) || (e.addEventListener ? e.addEventListener(p, c, !1) : e.attachEvent && e.attachEvent("on" + p, c))), u.add && (u.add.call(e, d), d.handler.guid || (d.handler.guid = n.guid)), r ? h.splice(h.delegateCount++, 0, d) : h.push(d), pe.event.global[p] = !0);
                    e = null
                }
            },
            remove: function (e, t, n, i, r) {
                var a, o, s, l, u, c, d, h, p, f, m, g = pe.hasData(e) && pe._data(e);
                if (g && (c = g.events)) {
                    for (u = (t = (t || "").match(je) || [""]).length; u--;)
                        if (p = m = (s = tt.exec(t[u]) || [])[1], f = (s[2] || "").split(".").sort(), p) {
                            for (d = pe.event.special[p] || {}, h = c[p = (i ? d.delegateType : d.bindType) || p] || [], s = s[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = a = h.length; a--;) o = h[a], !r && m !== o.origType || n && n.guid !== o.guid || s && !s.test(o.namespace) || i && i !== o.selector && ("**" !== i || !o.selector) || (h.splice(a, 1), o.selector && h.delegateCount--, d.remove && d.remove.call(e, o));
                            l && !h.length && (d.teardown && !1 !== d.teardown.call(e, f, g.handle) || pe.removeEvent(e, p, g.handle), delete c[p])
                        } else
                            for (p in c) pe.event.remove(e, p + t[u], n, i, !0);
                    pe.isEmptyObject(c) && (delete g.handle, pe._removeData(e, "events"))
                }
            },
            trigger: function (t, n, i, r) {
                var a, o, s, l, u, c, d, h = [i || ie],
                    p = ce.call(t, "type") ? t.type : t,
                    f = ce.call(t, "namespace") ? t.namespace.split(".") : [];
                if (s = c = i = i || ie, 3 !== i.nodeType && 8 !== i.nodeType && !et.test(p + pe.event.triggered) && (p.indexOf(".") > -1 && (p = (f = p.split(".")).shift(), f.sort()), o = p.indexOf(":") < 0 && "on" + p, (t = t[pe.expando] ? t : new pe.Event(p, "object" == typeof t && t)).isTrigger = r ? 2 : 3, t.namespace = f.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = undefined, t.target || (t.target = i), n = null == n ? [t] : pe.makeArray(n, [t]), u = pe.event.special[p] || {}, r || !u.trigger || !1 !== u.trigger.apply(i, n))) {
                    if (!r && !u.noBubble && !pe.isWindow(i)) {
                        for (l = u.delegateType || p, et.test(l + p) || (s = s.parentNode); s; s = s.parentNode) h.push(s), c = s;
                        c === (i.ownerDocument || ie) && h.push(c.defaultView || c.parentWindow || e)
                    }
                    for (d = 0;
                        (s = h[d++]) && !t.isPropagationStopped();) t.type = d > 1 ? l : u.bindType || p, (a = (pe._data(s, "events") || {})[t.type] && pe._data(s, "handle")) && a.apply(s, n), (a = o && s[o]) && a.apply && Ne(s) && (t.result = a.apply(s, n), !1 === t.result && t.preventDefault());
                    if (t.type = p, !r && !t.isDefaultPrevented() && (!u._default || !1 === u._default.apply(h.pop(), n)) && Ne(i) && o && i[p] && !pe.isWindow(i)) {
                        (c = i[o]) && (i[o] = null), pe.event.triggered = p;
                        try {
                            i[p]()
                        } catch (m) {}
                        pe.event.triggered = undefined, c && (i[o] = c)
                    }
                    return t.result
                }
            },
            dispatch: function (e) {
                e = pe.event.fix(e);
                var t, n, i, r, a, o = [],
                    s = re.call(arguments),
                    l = (pe._data(this, "events") || {})[e.type] || [],
                    u = pe.event.special[e.type] || {};
                if (s[0] = e, e.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, e)) {
                    for (o = pe.event.handlers.call(this, e, l), t = 0;
                        (r = o[t++]) && !e.isPropagationStopped();)
                        for (e.currentTarget = r.elem, n = 0;
                            (a = r.handlers[n++]) && !e.isImmediatePropagationStopped();) e.rnamespace && !e.rnamespace.test(a.namespace) || (e.handleObj = a, e.data = a.data, (i = ((pe.event.special[a.origType] || {}).handle || a.handler).apply(r.elem, s)) !== undefined && !1 === (e.result = i) && (e.preventDefault(), e.stopPropagation()));
                    return u.postDispatch && u.postDispatch.call(this, e), e.result
                }
            },
            handlers: function (e, t) {
                var n, i, r, a, o = [],
                    s = t.delegateCount,
                    l = e.target;
                if (s && l.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1))
                    for (; l != this; l = l.parentNode || this)
                        if (1 === l.nodeType && (!0 !== l.disabled || "click" !== e.type)) {
                            for (i = [], n = 0; n < s; n++) i[r = (a = t[n]).selector + " "] === undefined && (i[r] = a.needsContext ? pe(r, this).index(l) > -1 : pe.find(r, this, null, [l]).length), i[r] && i.push(a);
                            i.length && o.push({
                                elem: l,
                                handlers: i
                            })
                        } return s < t.length && o.push({
                    elem: this,
                    handlers: t.slice(s)
                }), o
            },
            fix: function (e) {
                if (e[pe.expando]) return e;
                var t, n, i, r = e.type,
                    a = e,
                    o = this.fixHooks[r];
                for (o || (this.fixHooks[r] = o = Ze.test(r) ? this.mouseHooks : Je.test(r) ? this.keyHooks : {}), i = o.props ? this.props.concat(o.props) : this.props, e = new pe.Event(a), t = i.length; t--;) e[n = i[t]] = a[n];
                return e.target || (e.target = a.srcElement || ie), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, o.filter ? o.filter(e, a) : e
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function (e, t) {
                    return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function (e, t) {
                    var n, i, r, a = t.button,
                        o = t.fromElement;
                    return null == e.pageX && null != t.clientX && (r = (i = e.target.ownerDocument || ie).documentElement, n = i.body, e.pageX = t.clientX + (r && r.scrollLeft || n && n.scrollLeft || 0) - (r && r.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || n && n.scrollTop || 0) - (r && r.clientTop || n && n.clientTop || 0)), !e.relatedTarget && o && (e.relatedTarget = o === e.target ? t.toElement : o), e.which || a === undefined || (e.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0), e
                }
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function () {
                        if (this !== _() && this.focus) try {
                            return this.focus(), !1
                        } catch (e) {}
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function () {
                        if (this === _() && this.blur) return this.blur(), !1
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function () {
                        if (pe.nodeName(this, "input") && "checkbox" === this.type && this.click) return this.click(), !1
                    },
                    _default: function (e) {
                        return pe.nodeName(e.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function (e) {
                        e.result !== undefined && e.originalEvent && (e.originalEvent.returnValue = e.result)
                    }
                }
            },
            simulate: function (e, t, n) {
                var i = pe.extend(new pe.Event, n, {
                    type: e,
                    isSimulated: !0
                });
                pe.event.trigger(i, null, t), i.isDefaultPrevented() && n.preventDefault()
            }
        }, pe.removeEvent = ie.removeEventListener ? function (e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n)
        } : function (e, t, n) {
            var i = "on" + t;
            e.detachEvent && ("undefined" == typeof e[i] && (e[i] = null), e.detachEvent(i, n))
        }, pe.Event = function (e, t) {
            if (!(this instanceof pe.Event)) return new pe.Event(e, t);
            e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.defaultPrevented === undefined && !1 === e.returnValue ? y : b) : this.type = e, t && pe.extend(this, t), this.timeStamp = e && e.timeStamp || pe.now(), this[pe.expando] = !0
        }, pe.Event.prototype = {
            constructor: pe.Event,
            isDefaultPrevented: b,
            isPropagationStopped: b,
            isImmediatePropagationStopped: b,
            preventDefault: function () {
                var e = this.originalEvent;
                this.isDefaultPrevented = y, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
            },
            stopPropagation: function () {
                var e = this.originalEvent;
                this.isPropagationStopped = y, e && !this.isSimulated && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
            },
            stopImmediatePropagation: function () {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = y, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
            }
        }, pe.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function (e, t) {
            pe.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function (e) {
                    var n, i = this,
                        r = e.relatedTarget,
                        a = e.handleObj;
                    return r && (r === i || pe.contains(i, r)) || (e.type = a.origType, n = a.handler.apply(this, arguments), e.type = t), n
                }
            }
        }), de.submit || (pe.event.special.submit = {
            setup: function () {
                if (pe.nodeName(this, "form")) return !1;
                pe.event.add(this, "click._submit keypress._submit", function (e) {
                    var t = e.target,
                        n = pe.nodeName(t, "input") || pe.nodeName(t, "button") ? pe.prop(t, "form") : undefined;
                    n && !pe._data(n, "submit") && (pe.event.add(n, "submit._submit", function (e) {
                        e._submitBubble = !0
                    }), pe._data(n, "submit", !0))
                })
            },
            postDispatch: function (e) {
                e._submitBubble && (delete e._submitBubble, this.parentNode && !e.isTrigger && pe.event.simulate("submit", this.parentNode, e))
            },
            teardown: function () {
                if (pe.nodeName(this, "form")) return !1;
                pe.event.remove(this, "._submit")
            }
        }), de.change || (pe.event.special.change = {
            setup: function () {
                if (Ge.test(this.nodeName)) return "checkbox" !== this.type && "radio" !== this.type || (pe.event.add(this, "propertychange._change", function (e) {
                    "checked" === e.originalEvent.propertyName && (this._justChanged = !0)
                }), pe.event.add(this, "click._change", function (e) {
                    this._justChanged && !e.isTrigger && (this._justChanged = !1), pe.event.simulate("change", this, e)
                })), !1;
                pe.event.add(this, "beforeactivate._change", function (e) {
                    var t = e.target;
                    Ge.test(t.nodeName) && !pe._data(t, "change") && (pe.event.add(t, "change._change", function (e) {
                        !this.parentNode || e.isSimulated || e.isTrigger || pe.event.simulate("change", this.parentNode, e)
                    }), pe._data(t, "change", !0))
                })
            },
            handle: function (e) {
                var t = e.target;
                if (this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type) return e.handleObj.handler.apply(this, arguments)
            },
            teardown: function () {
                return pe.event.remove(this, "._change"), !Ge.test(this.nodeName)
            }
        }), de.focusin || pe.each({
            focus: "focusin",
            blur: "focusout"
        }, function (e, t) {
            var n = function (e) {
                pe.event.simulate(t, e.target, pe.event.fix(e))
            };
            pe.event.special[t] = {
                setup: function () {
                    var i = this.ownerDocument || this,
                        r = pe._data(i, t);
                    r || i.addEventListener(e, n, !0), pe._data(i, t, (r || 0) + 1)
                },
                teardown: function () {
                    var i = this.ownerDocument || this,
                        r = pe._data(i, t) - 1;
                    r ? pe._data(i, t, r) : (i.removeEventListener(e, n, !0), pe._removeData(i, t))
                }
            }
        }), pe.fn.extend({
            on: function (e, t, n, i) {
                return w(this, e, t, n, i)
            },
            one: function (e, t, n, i) {
                return w(this, e, t, n, i, 1)
            },
            off: function (e, t, n) {
                var i, r;
                if (e && e.preventDefault && e.handleObj) return i = e.handleObj, pe(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                if ("object" == typeof e) {
                    for (r in e) this.off(r, t, e[r]);
                    return this
                }
                return !1 !== t && "function" != typeof t || (n = t, t = undefined), !1 === n && (n = b), this.each(function () {
                    pe.event.remove(this, e, n, t)
                })
            },
            trigger: function (e, t) {
                return this.each(function () {
                    pe.event.trigger(e, t, this)
                })
            },
            triggerHandler: function (e, t) {
                var n = this[0];
                if (n) return pe.event.trigger(e, t, n, !0)
            }
        });
        var nt = / jQuery\d+="(?:null|\d+)"/g,
            it = new RegExp("<(?:" + Ye + ")[\\s/>]", "i"),
            rt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
            at = /<script|<style|<link/i,
            ot = /checked\s*(?:[^=]|=\s*.checked.)/i,
            st = /^true\/(.*)/,
            lt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
            ut = p(ie).appendChild(ie.createElement("div"));
        pe.extend({
            htmlPrefilter: function (e) {
                return e.replace(rt, "<$1></$2>")
            },
            clone: function (e, t, n) {
                var i, r, a, o, s, l = pe.contains(e.ownerDocument, e);
                if (de.html5Clone || pe.isXMLDoc(e) || !it.test("<" + e.nodeName + ">") ? a = e.cloneNode(!0) : (ut.innerHTML = e.outerHTML, ut.removeChild(a = ut.firstChild)), !(de.noCloneEvent && de.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || pe.isXMLDoc(e)))
                    for (i = f(a), s = f(e), o = 0; null != (r = s[o]); ++o) i[o] && E(r, i[o]);
                if (t)
                    if (n)
                        for (s = s || f(e), i = i || f(a), o = 0; null != (r = s[o]); o++) D(r, i[o]);
                    else D(e, a);
                return (i = f(a, "script")).length > 0 && m(i, !l && f(e, "script")), i = s = r = null, a
            },
            cleanData: function (e, t) {
                for (var n, i, r, a, o = 0, s = pe.expando, l = pe.cache, u = de.attributes, c = pe.event.special; null != (n = e[o]); o++)
                    if ((t || Ne(n)) && (a = (r = n[s]) && l[r])) {
                        if (a.events)
                            for (i in a.events) c[i] ? pe.event.remove(n, i) : pe.removeEvent(n, i, a.handle);
                        l[r] && (delete l[r], u || "undefined" == typeof n.removeAttribute ? n[s] = undefined : n.removeAttribute(s), ne.push(r))
                    }
            }
        }), pe.fn.extend({
            domManip: T,
            detach: function (e) {
                return S(this, e, !0)
            },
            remove: function (e) {
                return S(this, e)
            },
            text: function (e) {
                return ze(this, function (e) {
                    return e === undefined ? pe.text(this) : this.empty().append((this[0] && this[0].ownerDocument || ie).createTextNode(e))
                }, null, e, arguments.length)
            },
            append: function () {
                return T(this, arguments, function (e) {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || k(this, e).appendChild(e)
                })
            },
            prepend: function () {
                return T(this, arguments, function (e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = k(this, e);
                        t.insertBefore(e, t.firstChild)
                    }
                })
            },
            before: function () {
                return T(this, arguments, function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this)
                })
            },
            after: function () {
                return T(this, arguments, function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                })
            },
            empty: function () {
                for (var e, t = 0; null != (e = this[t]); t++) {
                    for (1 === e.nodeType && pe.cleanData(f(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                    e.options && pe.nodeName(e, "select") && (e.options.length = 0)
                }
                return this
            },
            clone: function (e, t) {
                return e = null != e && e, t = null == t ? e : t, this.map(function () {
                    return pe.clone(this, e, t)
                })
            },
            html: function (e) {
                return ze(this, function (e) {
                    var t = this[0] || {},
                        n = 0,
                        i = this.length;
                    if (e === undefined) return 1 === t.nodeType ? t.innerHTML.replace(nt, "") : undefined;
                    if ("string" == typeof e && !at.test(e) && (de.htmlSerialize || !it.test(e)) && (de.leadingWhitespace || !We.test(e)) && !Ve[(Ue.exec(e) || ["", ""])[1].toLowerCase()]) {
                        e = pe.htmlPrefilter(e);
                        try {
                            for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && (pe.cleanData(f(t, !1)), t.innerHTML = e);
                            t = 0
                        } catch (r) {}
                    }
                    t && this.empty().append(e)
                }, null, e, arguments.length)
            },
            replaceWith: function () {
                var e = [];
                return T(this, arguments, function (t) {
                    var n = this.parentNode;
                    pe.inArray(this, e) < 0 && (pe.cleanData(f(this)), n && n.replaceChild(t, this))
                }, e)
            }
        }), pe.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function (e, t) {
            pe.fn[e] = function (e) {
                for (var n, i = 0, r = [], a = pe(e), o = a.length - 1; i <= o; i++) n = i === o ? this : this.clone(!0), pe(a[i])[t](n), oe.apply(r, n.get());
                return this.pushStack(r)
            }
        });
        var ct, dt = {
                HTML: "block",
                BODY: "block"
            },
            ht = /^margin/,
            pt = new RegExp("^(" + Pe + ")(?!px)[a-z%]+$", "i"),
            ft = function (e, t, n, i) {
                var r, a, o = {};
                for (a in t) o[a] = e.style[a], e.style[a] = t[a];
                for (a in r = n.apply(e, i || []), t) e.style[a] = o[a];
                return r
            },
            mt = ie.documentElement;
        ! function () {
            function t() {
                var t, c, d = ie.documentElement;
                d.appendChild(l), u.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", n = r = s = !1, i = o = !0, e.getComputedStyle && (c = e.getComputedStyle(u), n = "1%" !== (c || {}).top, s = "2px" === (c || {}).marginLeft, r = "4px" === (c || {
                    width: "4px"
                }).width, u.style.marginRight = "50%", i = "4px" === (c || {
                    marginRight: "4px"
                }).marginRight, (t = u.appendChild(ie.createElement("div"))).style.cssText = u.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", t.style.marginRight = t.style.width = "0", u.style.width = "1px", o = !parseFloat((e.getComputedStyle(t) || {}).marginRight), u.removeChild(t)), u.style.display = "none", (a = 0 === u.getClientRects().length) && (u.style.display = "", u.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", u.childNodes[0].style.borderCollapse = "separate", (t = u.getElementsByTagName("td"))[0].style.cssText = "margin:0;border:0;padding:0;display:none", (a = 0 === t[0].offsetHeight) && (t[0].style.display = "", t[1].style.display = "none", a = 0 === t[0].offsetHeight)), d.removeChild(l)
            }
            var n, i, r, a, o, s, l = ie.createElement("div"),
                u = ie.createElement("div");
            u.style && (u.style.cssText = "float:left;opacity:.5", de.opacity = "0.5" === u.style.opacity, de.cssFloat = !!u.style.cssFloat, u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", de.clearCloneStyle = "content-box" === u.style.backgroundClip, (l = ie.createElement("div")).style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", u.innerHTML = "", l.appendChild(u), de.boxSizing = "" === u.style.boxSizing || "" === u.style.MozBoxSizing || "" === u.style.WebkitBoxSizing, pe.extend(de, {
                reliableHiddenOffsets: function () {
                    return null == n && t(), a
                },
                boxSizingReliable: function () {
                    return null == n && t(), r
                },
                pixelMarginRight: function () {
                    return null == n && t(), i
                },
                pixelPosition: function () {
                    return null == n && t(), n
                },
                reliableMarginRight: function () {
                    return null == n && t(), o
                },
                reliableMarginLeft: function () {
                    return null == n && t(), s
                }
            }))
        }();
        var gt, vt, yt = /^(top|right|bottom|left)$/;
        e.getComputedStyle ? (gt = function (t) {
            var n = t.ownerDocument.defaultView;
            return n && n.opener || (n = e), n.getComputedStyle(t)
        }, vt = function (e, t, n) {
            var i, r, a, o, s = e.style;
            return "" !== (o = (n = n || gt(e)) ? n.getPropertyValue(t) || n[t] : undefined) && o !== undefined || pe.contains(e.ownerDocument, e) || (o = pe.style(e, t)), n && !de.pixelMarginRight() && pt.test(o) && ht.test(t) && (i = s.width, r = s.minWidth, a = s.maxWidth, s.minWidth = s.maxWidth = s.width = o, o = n.width, s.width = i, s.minWidth = r, s.maxWidth = a), o === undefined ? o : o + ""
        }) : mt.currentStyle && (gt = function (e) {
            return e.currentStyle
        }, vt = function (e, t, n) {
            var i, r, a, o, s = e.style;
            return null == (o = (n = n || gt(e)) ? n[t] : undefined) && s && s[t] && (o = s[t]), pt.test(o) && !yt.test(t) && (i = s.left, (a = (r = e.runtimeStyle) && r.left) && (r.left = e.currentStyle.left), s.left = "fontSize" === t ? "1em" : o, o = s.pixelLeft + "px", s.left = i, a && (r.left = a)), o === undefined ? o : o + "" || "auto"
        });
        var bt = /alpha\([^)]*\)/i,
            _t = /opacity\s*=\s*([^)]*)/i,
            wt = /^(none|table(?!-c[ea]).+)/,
            kt = new RegExp("^(" + Pe + ")(.*)$", "i"),
            Ct = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            xt = {
                letterSpacing: "0",
                fontWeight: "400"
            },
            Dt = ["Webkit", "O", "Moz", "ms"],
            Et = ie.createElement("div").style;
        pe.extend({
            cssHooks: {
                opacity: {
                    get: function (e, t) {
                        if (t) {
                            var n = vt(e, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                float: de.cssFloat ? "cssFloat" : "styleFloat"
            },
            style: function (e, t, n, i) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var r, a, o, s = pe.camelCase(t),
                        l = e.style;
                    if (t = pe.cssProps[s] || (pe.cssProps[s] = N(s) || s), o = pe.cssHooks[t] || pe.cssHooks[s], n === undefined) return o && "get" in o && (r = o.get(e, !1, i)) !== undefined ? r : l[t];
                    if ("string" === (a = typeof n) && (r = qe.exec(n)) && r[1] && (n = h(e, t, r), a = "number"), null != n && n == n && ("number" === a && (n += r && r[3] || (pe.cssNumber[s] ? "" : "px")), de.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), !(o && "set" in o && (n = o.set(e, n, i)) === undefined))) try {
                        l[t] = n
                    } catch (u) {}
                }
            },
            css: function (e, t, n, i) {
                var r, a, o, s = pe.camelCase(t);
                return t = pe.cssProps[s] || (pe.cssProps[s] = N(s) || s), (o = pe.cssHooks[t] || pe.cssHooks[s]) && "get" in o && (a = o.get(e, !0, n)), a === undefined && (a = vt(e, t, i)), "normal" === a && t in xt && (a = xt[t]), "" === n || n ? (r = parseFloat(a), !0 === n || isFinite(r) ? r || 0 : a) : a
            }
        }), pe.each(["height", "width"], function (e, t) {
            pe.cssHooks[t] = {
                get: function (e, n, i) {
                    if (n) return wt.test(pe.css(e, "display")) && 0 === e.offsetWidth ? ft(e, Ct, function () {
                        return L(e, t, i)
                    }) : L(e, t, i)
                },
                set: function (e, n, i) {
                    var r = i && gt(e);
                    return $(e, n, i ? M(e, t, i, de.boxSizing && "border-box" === pe.css(e, "boxSizing", !1, r), r) : 0)
                }
            }
        }), de.opacity || (pe.cssHooks.opacity = {
            get: function (e, t) {
                return _t.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
            },
            set: function (e, t) {
                var n = e.style,
                    i = e.currentStyle,
                    r = pe.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                    a = i && i.filter || n.filter || "";
                n.zoom = 1, (t >= 1 || "" === t) && "" === pe.trim(a.replace(bt, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || i && !i.filter) || (n.filter = bt.test(a) ? a.replace(bt, r) : a + " " + r)
            }
        }), pe.cssHooks.marginRight = A(de.reliableMarginRight, function (e, t) {
            if (t) return ft(e, {
                display: "inline-block"
            }, vt, [e, "marginRight"])
        }), pe.cssHooks.marginLeft = A(de.reliableMarginLeft, function (e, t) {
            if (t) return (parseFloat(vt(e, "marginLeft")) || (pe.contains(e.ownerDocument, e) ? e.getBoundingClientRect().left - ft(e, {
                marginLeft: 0
            }, function () {
                return e.getBoundingClientRect().left
            }) : 0)) + "px"
        }), pe.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function (e, t) {
            pe.cssHooks[e + t] = {
                expand: function (n) {
                    for (var i = 0, r = {}, a = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) r[e + Qe[i] + t] = a[i] || a[i - 2] || a[0];
                    return r
                }
            }, ht.test(e) || (pe.cssHooks[e + t].set = $)
        }), pe.fn.extend({
            css: function (e, t) {
                return ze(this, function (e, t, n) {
                    var i, r, a = {},
                        o = 0;
                    if (pe.isArray(t)) {
                        for (i = gt(e), r = t.length; o < r; o++) a[t[o]] = pe.css(e, t[o], !1, i);
                        return a
                    }
                    return n !== undefined ? pe.style(e, t, n) : pe.css(e, t)
                }, e, t, arguments.length > 1)
            },
            show: function () {
                return I(this, !0)
            },
            hide: function () {
                return I(this)
            },
            toggle: function (e) {
                return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                    Re(this) ? pe(this).show() : pe(this).hide()
                })
            }
        }), pe.Tween = O, O.prototype = {
            constructor: O,
            init: function (e, t, n, i, r, a) {
                this.elem = e, this.prop = n, this.easing = r || pe.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = a || (pe.cssNumber[n] ? "" : "px")
            },
            cur: function () {
                var e = O.propHooks[this.prop];
                return e && e.get ? e.get(this) : O.propHooks._default.get(this)
            },
            run: function (e) {
                var t, n = O.propHooks[this.prop];
                return this.options.duration ? this.pos = t = pe.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : O.propHooks._default.set(this), this
            }
        }, O.prototype.init.prototype = O.prototype, O.propHooks = {
            _default: {
                get: function (e) {
                    var t;
                    return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = pe.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
                },
                set: function (e) {
                    pe.fx.step[e.prop] ? pe.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[pe.cssProps[e.prop]] && !pe.cssHooks[e.prop] ? e.elem[e.prop] = e.now : pe.style(e.elem, e.prop, e.now + e.unit)
                }
            }
        }, O.propHooks.scrollTop = O.propHooks.scrollLeft = {
            set: function (e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        }, pe.easing = {
            linear: function (e) {
                return e
            },
            swing: function (e) {
                return .5 - Math.cos(e * Math.PI) / 2
            },
            _default: "swing"
        }, pe.fx = O.prototype.init, pe.fx.step = {};
        var Tt, St, Ft = /^(?:toggle|show|hide)$/,
            jt = /queueHooks$/;
        pe.Animation = pe.extend(H, {
                tweeners: {
                    "*": [function (e, t) {
                        var n = this.createTween(e, t);
                        return h(n.elem, e, qe.exec(t), n), n
                    }]
                },
                tweener: function (e, t) {
                    pe.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(je);
                    for (var n, i = 0, r = e.length; i < r; i++) n = e[i], H.tweeners[n] = H.tweeners[n] || [], H.tweeners[n].unshift(t)
                },
                prefilters: [R],
                prefilter: function (e, t) {
                    t ? H.prefilters.unshift(e) : H.prefilters.push(e)
                }
            }), pe.speed = function (e, t, n) {
                var i = e && "object" == typeof e ? pe.extend({}, e) : {
                    complete: n || !n && t || pe.isFunction(e) && e,
                    duration: e,
                    easing: n && t || t && !pe.isFunction(t) && t
                };
                return i.duration = pe.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in pe.fx.speeds ? pe.fx.speeds[i.duration] : pe.fx.speeds._default, null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function () {
                    pe.isFunction(i.old) && i.old.call(this), i.queue && pe.dequeue(this, i.queue)
                }, i
            }, pe.fn.extend({
                fadeTo: function (e, t, n, i) {
                    return this.filter(Re).css("opacity", 0).show().end().animate({
                        opacity: t
                    }, e, n, i)
                },
                animate: function (e, t, n, i) {
                    var r = pe.isEmptyObject(e),
                        a = pe.speed(t, n, i),
                        o = function () {
                            var t = H(this, pe.extend({}, e), a);
                            (r || pe._data(this, "finish")) && t.stop(!0)
                        };
                    return o.finish = o, r || !1 === a.queue ? this.each(o) : this.queue(a.queue, o)
                },
                stop: function (e, t, n) {
                    var i = function (e) {
                        var t = e.stop;
                        delete e.stop, t(n)
                    };
                    return "string" != typeof e && (n = t, t = e, e = undefined), t && !1 !== e && this.queue(e || "fx", []), this.each(function () {
                        var t = !0,
                            r = null != e && e + "queueHooks",
                            a = pe.timers,
                            o = pe._data(this);
                        if (r) o[r] && o[r].stop && i(o[r]);
                        else
                            for (r in o) o[r] && o[r].stop && jt.test(r) && i(o[r]);
                        for (r = a.length; r--;) a[r].elem !== this || null != e && a[r].queue !== e || (a[r].anim.stop(n), t = !1, a.splice(r, 1));
                        !t && n || pe.dequeue(this, e)
                    })
                },
                finish: function (e) {
                    return !1 !== e && (e = e || "fx"), this.each(function () {
                        var t, n = pe._data(this),
                            i = n[e + "queue"],
                            r = n[e + "queueHooks"],
                            a = pe.timers,
                            o = i ? i.length : 0;
                        for (n.finish = !0, pe.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = a.length; t--;) a[t].elem === this && a[t].queue === e && (a[t].anim.stop(!0), a.splice(t, 1));
                        for (t = 0; t < o; t++) i[t] && i[t].finish && i[t].finish.call(this);
                        delete n.finish
                    })
                }
            }), pe.each(["toggle", "show", "hide"], function (e, t) {
                var n = pe.fn[t];
                pe.fn[t] = function (e, i, r) {
                    return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(q(t, !0), e, i, r)
                }
            }), pe.each({
                slideDown: q("show"),
                slideUp: q("hide"),
                slideToggle: q("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, function (e, t) {
                pe.fn[e] = function (e, n, i) {
                    return this.animate(t, e, n, i)
                }
            }), pe.timers = [], pe.fx.tick = function () {
                var e, t = pe.timers,
                    n = 0;
                for (Tt = pe.now(); n < t.length; n++)(e = t[n])() || t[n] !== e || t.splice(n--, 1);
                t.length || pe.fx.stop(), Tt = undefined
            }, pe.fx.timer = function (e) {
                pe.timers.push(e), e() ? pe.fx.start() : pe.timers.pop()
            }, pe.fx.interval = 13, pe.fx.start = function () {
                St || (St = e.setInterval(pe.fx.tick, pe.fx.interval))
            }, pe.fx.stop = function () {
                e.clearInterval(St), St = null
            }, pe.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, pe.fn.delay = function (t, n) {
                return t = pe.fx && pe.fx.speeds[t] || t, n = n || "fx", this.queue(n, function (n, i) {
                    var r = e.setTimeout(n, t);
                    i.stop = function () {
                        e.clearTimeout(r)
                    }
                })
            },
            function () {
                var e, t = ie.createElement("input"),
                    n = ie.createElement("div"),
                    i = ie.createElement("select"),
                    r = i.appendChild(ie.createElement("option"));
                (n = ie.createElement("div")).setAttribute("className", "t"), n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", e = n.getElementsByTagName("a")[0], t.setAttribute("type", "checkbox"), n.appendChild(t), (e = n.getElementsByTagName("a")[0]).style.cssText = "top:1px", de.getSetAttribute = "t" !== n.className, de.style = /top/.test(e.getAttribute("style")), de.hrefNormalized = "/a" === e.getAttribute("href"), de.checkOn = !!t.value, de.optSelected = r.selected, de.enctype = !!ie.createElement("form").enctype, i.disabled = !0, de.optDisabled = !r.disabled, (t = ie.createElement("input")).setAttribute("value", ""), de.input = "" === t.getAttribute("value"), t.value = "t", t.setAttribute("type", "radio"), de.radioValue = "t" === t.value
            }();
        var At = /\r/g,
            Nt = /[\x20\t\r\n\f]+/g;
        pe.fn.extend({
            val: function (e) {
                var t, n, i, r = this[0];
                return arguments.length ? (i = pe.isFunction(e), this.each(function (n) {
                    var r;
                    1 === this.nodeType && (null == (r = i ? e.call(this, n, pe(this).val()) : e) ? r = "" : "number" == typeof r ? r += "" : pe.isArray(r) && (r = pe.map(r, function (e) {
                        return null == e ? "" : e + ""
                    })), (t = pe.valHooks[this.type] || pe.valHooks[this.nodeName.toLowerCase()]) && "set" in t && t.set(this, r, "value") !== undefined || (this.value = r))
                })) : r ? (t = pe.valHooks[r.type] || pe.valHooks[r.nodeName.toLowerCase()]) && "get" in t && (n = t.get(r, "value")) !== undefined ? n : "string" == typeof (n = r.value) ? n.replace(At, "") : null == n ? "" : n : void 0
            }
        }), pe.extend({
            valHooks: {
                option: {
                    get: function (e) {
                        var t = pe.find.attr(e, "value");
                        return null != t ? t : pe.trim(pe.text(e)).replace(Nt, " ")
                    }
                },
                select: {
                    get: function (e) {
                        for (var t, n, i = e.options, r = e.selectedIndex, a = "select-one" === e.type || r < 0, o = a ? null : [], s = a ? r + 1 : i.length, l = r < 0 ? s : a ? r : 0; l < s; l++)
                            if (((n = i[l]).selected || l === r) && (de.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !pe.nodeName(n.parentNode, "optgroup"))) {
                                if (t = pe(n).val(), a) return t;
                                o.push(t)
                            } return o
                    },
                    set: function (e, t) {
                        for (var n, i, r = e.options, a = pe.makeArray(t), o = r.length; o--;)
                            if (i = r[o], pe.inArray(pe.valHooks.option.get(i), a) > -1) try {
                                i.selected = n = !0
                            } catch (s) {
                                i.scrollHeight
                            } else i.selected = !1;
                        return n || (e.selectedIndex = -1), r
                    }
                }
            }
        }), pe.each(["radio", "checkbox"], function () {
            pe.valHooks[this] = {
                set: function (e, t) {
                    if (pe.isArray(t)) return e.checked = pe.inArray(pe(e).val(), t) > -1
                }
            }, de.checkOn || (pe.valHooks[this].get = function (e) {
                return null === e.getAttribute("value") ? "on" : e.value
            })
        });
        var It, $t, Mt = pe.expr.attrHandle,
            Lt = /^(?:checked|selected)$/i,
            Ot = de.getSetAttribute,
            Pt = de.input;
        pe.fn.extend({
            attr: function (e, t) {
                return ze(this, pe.attr, e, t, arguments.length > 1)
            },
            removeAttr: function (e) {
                return this.each(function () {
                    pe.removeAttr(this, e)
                })
            }
        }), pe.extend({
            attr: function (e, t, n) {
                var i, r, a = e.nodeType;
                if (3 !== a && 8 !== a && 2 !== a) return "undefined" == typeof e.getAttribute ? pe.prop(e, t, n) : (1 === a && pe.isXMLDoc(e) || (t = t.toLowerCase(), r = pe.attrHooks[t] || (pe.expr.match.bool.test(t) ? $t : It)), n !== undefined ? null === n ? void pe.removeAttr(e, t) : r && "set" in r && (i = r.set(e, n, t)) !== undefined ? i : (e.setAttribute(t, n + ""), n) : r && "get" in r && null !== (i = r.get(e, t)) ? i : null == (i = pe.find.attr(e, t)) ? undefined : i)
            },
            attrHooks: {
                type: {
                    set: function (e, t) {
                        if (!de.radioValue && "radio" === t && pe.nodeName(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t), n && (e.value = n), t
                        }
                    }
                }
            },
            removeAttr: function (e, t) {
                var n, i, r = 0,
                    a = t && t.match(je);
                if (a && 1 === e.nodeType)
                    for (; n = a[r++];) i = pe.propFix[n] || n, pe.expr.match.bool.test(n) ? Pt && Ot || !Lt.test(n) ? e[i] = !1 : e[pe.camelCase("default-" + n)] = e[i] = !1 : pe.attr(e, n, ""), e.removeAttribute(Ot ? n : i)
            }
        }), $t = {
            set: function (e, t, n) {
                return !1 === t ? pe.removeAttr(e, n) : Pt && Ot || !Lt.test(n) ? e.setAttribute(!Ot && pe.propFix[n] || n, n) : e[pe.camelCase("default-" + n)] = e[n] = !0, n
            }
        }, pe.each(pe.expr.match.bool.source.match(/\w+/g), function (e, t) {
            var n = Mt[t] || pe.find.attr;
            Pt && Ot || !Lt.test(t) ? Mt[t] = function (e, t, i) {
                var r, a;
                return i || (a = Mt[t], Mt[t] = r, r = null != n(e, t, i) ? t.toLowerCase() : null, Mt[t] = a), r
            } : Mt[t] = function (e, t, n) {
                if (!n) return e[pe.camelCase("default-" + t)] ? t.toLowerCase() : null
            }
        }), Pt && Ot || (pe.attrHooks.value = {
            set: function (e, t, n) {
                if (!pe.nodeName(e, "input")) return It && It.set(e, t, n);
                e.defaultValue = t
            }
        }), Ot || (It = {
            set: function (e, t, n) {
                var i = e.getAttributeNode(n);
                if (i || e.setAttributeNode(i = e.ownerDocument.createAttribute(n)), i.value = t += "", "value" === n || t === e.getAttribute(n)) return t
            }
        }, Mt.id = Mt.name = Mt.coords = function (e, t, n) {
            var i;
            if (!n) return (i = e.getAttributeNode(t)) && "" !== i.value ? i.value : null
        }, pe.valHooks.button = {
            get: function (e, t) {
                var n = e.getAttributeNode(t);
                if (n && n.specified) return n.value
            },
            set: It.set
        }, pe.attrHooks.contenteditable = {
            set: function (e, t, n) {
                It.set(e, "" !== t && t, n)
            }
        }, pe.each(["width", "height"], function (e, t) {
            pe.attrHooks[t] = {
                set: function (e, n) {
                    if ("" === n) return e.setAttribute(t, "auto"), n
                }
            }
        })), de.style || (pe.attrHooks.style = {
            get: function (e) {
                return e.style.cssText || undefined
            },
            set: function (e, t) {
                return e.style.cssText = t + ""
            }
        });
        var qt = /^(?:input|select|textarea|button|object)$/i,
            Qt = /^(?:a|area)$/i;
        pe.fn.extend({
            prop: function (e, t) {
                return ze(this, pe.prop, e, t, arguments.length > 1)
            },
            removeProp: function (e) {
                return e = pe.propFix[e] || e, this.each(function () {
                    try {
                        this[e] = undefined, delete this[e]
                    } catch (t) {}
                })
            }
        }), pe.extend({
            prop: function (e, t, n) {
                var i, r, a = e.nodeType;
                if (3 !== a && 8 !== a && 2 !== a) return 1 === a && pe.isXMLDoc(e) || (t = pe.propFix[t] || t, r = pe.propHooks[t]), n !== undefined ? r && "set" in r && (i = r.set(e, n, t)) !== undefined ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t]
            },
            propHooks: {
                tabIndex: {
                    get: function (e) {
                        var t = pe.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : qt.test(e.nodeName) || Qt.test(e.nodeName) && e.href ? 0 : -1
                    }
                }
            },
            propFix: {
                "for": "htmlFor",
                "class": "className"
            }
        }), de.hrefNormalized || pe.each(["href", "src"], function (e, t) {
            pe.propHooks[t] = {
                get: function (e) {
                    return e.getAttribute(t, 4)
                }
            }
        }), de.optSelected || (pe.propHooks.selected = {
            get: function (e) {
                var t = e.parentNode;
                return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
            },
            set: function (e) {
                var t = e.parentNode;
                t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
            }
        }), pe.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
            pe.propFix[this.toLowerCase()] = this
        }), de.enctype || (pe.propFix.enctype = "encoding");
        var Rt = /[\t\r\n\f]/g;
        pe.fn.extend({
            addClass: function (e) {
                var t, n, i, r, a, o, s, l = 0;
                if (pe.isFunction(e)) return this.each(function (t) {
                    pe(this).addClass(e.call(this, t, U(this)))
                });
                if ("string" == typeof e && e)
                    for (t = e.match(je) || []; n = this[l++];)
                        if (r = U(n), i = 1 === n.nodeType && (" " + r + " ").replace(Rt, " ")) {
                            for (o = 0; a = t[o++];) i.indexOf(" " + a + " ") < 0 && (i += a + " ");
                            r !== (s = pe.trim(i)) && pe.attr(n, "class", s)
                        } return this
            },
            removeClass: function (e) {
                var t, n, i, r, a, o, s, l = 0;
                if (pe.isFunction(e)) return this.each(function (t) {
                    pe(this).removeClass(e.call(this, t, U(this)))
                });
                if (!arguments.length) return this.attr("class", "");
                if ("string" == typeof e && e)
                    for (t = e.match(je) || []; n = this[l++];)
                        if (r = U(n), i = 1 === n.nodeType && (" " + r + " ").replace(Rt, " ")) {
                            for (o = 0; a = t[o++];)
                                for (; i.indexOf(" " + a + " ") > -1;) i = i.replace(" " + a + " ", " ");
                            r !== (s = pe.trim(i)) && pe.attr(n, "class", s)
                        } return this
            },
            toggleClass: function (e, t) {
                var n = typeof e;
                return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : pe.isFunction(e) ? this.each(function (n) {
                    pe(this).toggleClass(e.call(this, n, U(this), t), t)
                }) : this.each(function () {
                    var t, i, r, a;
                    if ("string" === n)
                        for (i = 0, r = pe(this), a = e.match(je) || []; t = a[i++];) r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
                    else e !== undefined && "boolean" !== n || ((t = U(this)) && pe._data(this, "__className__", t), pe.attr(this, "class", t || !1 === e ? "" : pe._data(this, "__className__") || ""))
                })
            },
            hasClass: function (e) {
                var t, n, i = 0;
                for (t = " " + e + " "; n = this[i++];)
                    if (1 === n.nodeType && (" " + U(n) + " ").replace(Rt, " ").indexOf(t) > -1) return !0;
                return !1
            }
        }), pe.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
            pe.fn[t] = function (e, n) {
                return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
            }
        }), pe.fn.extend({
            hover: function (e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            }
        });
        var zt = e.location,
            Ht = pe.now(),
            Ut = /\?/,
            Bt = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
        pe.parseJSON = function (t) {
            if (e.JSON && e.JSON.parse) return e.JSON.parse(t + "");
            var n, i = null,
                r = pe.trim(t + "");
            return r && !pe.trim(r.replace(Bt, function (e, t, r, a) {
                return n && t && (i = 0), 0 === i ? e : (n = r || t, i += !a - !r, "")
            })) ? Function("return " + r)() : pe.error("Invalid JSON: " + t)
        }, pe.parseXML = function (t) {
            var n;
            if (!t || "string" != typeof t) return null;
            try {
                e.DOMParser ? n = (new e.DOMParser).parseFromString(t, "text/xml") : ((n = new e.ActiveXObject("Microsoft.XMLDOM")).async = "false", n.loadXML(t))
            } catch (i) {
                n = undefined
            }
            return n && n.documentElement && !n.getElementsByTagName("parsererror").length || pe.error("Invalid XML: " + t), n
        };
        var Wt = /#.*$/,
            Yt = /([?&])_=[^&]*/,
            Vt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
            Kt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            Xt = /^(?:GET|HEAD)$/,
            Gt = /^\/\//,
            Jt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
            Zt = {},
            en = {},
            tn = "*/".concat("*"),
            nn = zt.href,
            rn = Jt.exec(nn.toLowerCase()) || [];
        pe.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: nn,
                type: "GET",
                isLocal: Kt.test(rn[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": tn,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /\bxml\b/,
                    html: /\bhtml/,
                    json: /\bjson\b/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": pe.parseJSON,
                    "text xml": pe.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function (e, t) {
                return t ? Y(Y(e, pe.ajaxSettings), t) : Y(pe.ajaxSettings, e)
            },
            ajaxPrefilter: B(Zt),
            ajaxTransport: B(en),
            ajax: function (t, n) {
                function i(t, n, i, r) {
                    var a, d, y, b, w, C = n;
                    2 !== _ && (_ = 2, l && e.clearTimeout(l), c = undefined, s = r || "", k.readyState = t > 0 ? 4 : 0, a = t >= 200 && t < 300 || 304 === t, i && (b = V(h, k, i)), b = K(h, b, k, a), a ? (h.ifModified && ((w = k.getResponseHeader("Last-Modified")) && (pe.lastModified[o] = w), (w = k.getResponseHeader("etag")) && (pe.etag[o] = w)), 204 === t || "HEAD" === h.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = b.state, d = b.data, a = !(y = b.error))) : (y = C, !t && C || (C = "error", t < 0 && (t = 0))), k.status = t, k.statusText = (n || C) + "", a ? m.resolveWith(p, [d, C, k]) : m.rejectWith(p, [k, C, y]), k.statusCode(v), v = undefined, u && f.trigger(a ? "ajaxSuccess" : "ajaxError", [k, h, a ? d : y]), g.fireWith(p, [k, C]), u && (f.trigger("ajaxComplete", [k, h]), --pe.active || pe.event.trigger("ajaxStop")))
                }
                "object" == typeof t && (n = t, t = undefined), n = n || {};
                var r, a, o, s, l, u, c, d, h = pe.ajaxSetup({}, n),
                    p = h.context || h,
                    f = h.context && (p.nodeType || p.jquery) ? pe(p) : pe.event,
                    m = pe.Deferred(),
                    g = pe.Callbacks("once memory"),
                    v = h.statusCode || {},
                    y = {},
                    b = {},
                    _ = 0,
                    w = "canceled",
                    k = {
                        readyState: 0,
                        getResponseHeader: function (e) {
                            var t;
                            if (2 === _) {
                                if (!d)
                                    for (d = {}; t = Vt.exec(s);) d[t[1].toLowerCase()] = t[2];
                                t = d[e.toLowerCase()]
                            }
                            return null == t ? null : t
                        },
                        getAllResponseHeaders: function () {
                            return 2 === _ ? s : null
                        },
                        setRequestHeader: function (e, t) {
                            var n = e.toLowerCase();
                            return _ || (e = b[n] = b[n] || e, y[e] = t), this
                        },
                        overrideMimeType: function (e) {
                            return _ || (h.mimeType = e), this
                        },
                        statusCode: function (e) {
                            var t;
                            if (e)
                                if (_ < 2)
                                    for (t in e) v[t] = [v[t], e[t]];
                                else k.always(e[k.status]);
                            return this
                        },
                        abort: function (e) {
                            var t = e || w;
                            return c && c.abort(t), i(0, t), this
                        }
                    };
                if (m.promise(k).complete = g.add, k.success = k.done, k.error = k.fail, h.url = ((t || h.url || nn) + "").replace(Wt, "").replace(Gt, rn[1] + "//"), h.type = n.method || n.type || h.method || h.type, h.dataTypes = pe.trim(h.dataType || "*").toLowerCase().match(je) || [""], null == h.crossDomain && (r = Jt.exec(h.url.toLowerCase()), h.crossDomain = !(!r || r[1] === rn[1] && r[2] === rn[2] && (r[3] || ("http:" === r[1] ? "80" : "443")) === (rn[3] || ("http:" === rn[1] ? "80" : "443")))), h.data && h.processData && "string" != typeof h.data && (h.data = pe.param(h.data, h.traditional)), W(Zt, h, n, k), 2 === _) return k;
                for (a in (u = pe.event && h.global) && 0 == pe.active++ && pe.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Xt.test(h.type), o = h.url, h.hasContent || (h.data && (o = h.url += (Ut.test(o) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (h.url = Yt.test(o) ? o.replace(Yt, "$1_=" + Ht++) : o + (Ut.test(o) ? "&" : "?") + "_=" + Ht++)), h.ifModified && (pe.lastModified[o] && k.setRequestHeader("If-Modified-Since", pe.lastModified[o]), pe.etag[o] && k.setRequestHeader("If-None-Match", pe.etag[o])), (h.data && h.hasContent && !1 !== h.contentType || n.contentType) && k.setRequestHeader("Content-Type", h.contentType), k.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + tn + "; q=0.01" : "") : h.accepts["*"]), h.headers) k.setRequestHeader(a, h.headers[a]);
                if (h.beforeSend && (!1 === h.beforeSend.call(p, k, h) || 2 === _)) return k.abort();
                for (a in w = "abort", {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) k[a](h[a]);
                if (c = W(en, h, n, k)) {
                    if (k.readyState = 1, u && f.trigger("ajaxSend", [k, h]), 2 === _) return k;
                    h.async && h.timeout > 0 && (l = e.setTimeout(function () {
                        k.abort("timeout")
                    }, h.timeout));
                    try {
                        _ = 1, c.send(y, i)
                    } catch (C) {
                        if (!(_ < 2)) throw C;
                        i(-1, C)
                    }
                } else i(-1, "No Transport");
                return k
            },
            getJSON: function (e, t, n) {
                return pe.get(e, t, n, "json")
            },
            getScript: function (e, t) {
                return pe.get(e, undefined, t, "script")
            }
        }), pe.each(["get", "post"], function (e, t) {
            pe[t] = function (e, n, i, r) {
                return pe.isFunction(n) && (r = r || i, i = n, n = undefined), pe.ajax(pe.extend({
                    url: e,
                    type: t,
                    dataType: r,
                    data: n,
                    success: i
                }, pe.isPlainObject(e) && e))
            }
        }), pe._evalUrl = function (e) {
            return pe.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                throws: !0
            })
        }, pe.fn.extend({
            wrapAll: function (e) {
                if (pe.isFunction(e)) return this.each(function (t) {
                    pe(this).wrapAll(e.call(this, t))
                });
                if (this[0]) {
                    var t = pe(e, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                        for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                        return e
                    }).append(this)
                }
                return this
            },
            wrapInner: function (e) {
                return pe.isFunction(e) ? this.each(function (t) {
                    pe(this).wrapInner(e.call(this, t))
                }) : this.each(function () {
                    var t = pe(this),
                        n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e)
                })
            },
            wrap: function (e) {
                var t = pe.isFunction(e);
                return this.each(function (n) {
                    pe(this).wrapAll(t ? e.call(this, n) : e)
                })
            },
            unwrap: function () {
                return this.parent().each(function () {
                    pe.nodeName(this, "body") || pe(this).replaceWith(this.childNodes)
                }).end()
            }
        }), pe.expr.filters.hidden = function (e) {
            return de.reliableHiddenOffsets() ? e.offsetWidth <= 0 && e.offsetHeight <= 0 && !e.getClientRects().length : G(e)
        }, pe.expr.filters.visible = function (e) {
            return !pe.expr.filters.hidden(e)
        };
        var an = /%20/g,
            on = /\[\]$/,
            sn = /\r?\n/g,
            ln = /^(?:submit|button|image|reset|file)$/i,
            un = /^(?:input|select|textarea|keygen)/i;
        pe.param = function (e, t) {
            var n, i = [],
                r = function (e, t) {
                    t = pe.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
                };
            if (t === undefined && (t = pe.ajaxSettings && pe.ajaxSettings.traditional), pe.isArray(e) || e.jquery && !pe.isPlainObject(e)) pe.each(e, function () {
                r(this.name, this.value)
            });
            else
                for (n in e) J(n, e[n], t, r);
            return i.join("&").replace(an, "+")
        }, pe.fn.extend({
            serialize: function () {
                return pe.param(this.serializeArray())
            },
            serializeArray: function () {
                return this.map(function () {
                    var e = pe.prop(this, "elements");
                    return e ? pe.makeArray(e) : this
                }).filter(function () {
                    var e = this.type;
                    return this.name && !pe(this).is(":disabled") && un.test(this.nodeName) && !ln.test(e) && (this.checked || !He.test(e))
                }).map(function (e, t) {
                    var n = pe(this).val();
                    return null == n ? null : pe.isArray(n) ? pe.map(n, function (e) {
                        return {
                            name: t.name,
                            value: e.replace(sn, "\r\n")
                        }
                    }) : {
                        name: t.name,
                        value: n.replace(sn, "\r\n")
                    }
                }).get()
            }
        }), pe.ajaxSettings.xhr = e.ActiveXObject !== undefined ? function () {
            return this.isLocal ? ee() : ie.documentMode > 8 ? Z() : /^(get|post|head|put|delete|options)$/i.test(this.type) && Z() || ee()
        } : Z;
        var cn = 0,
            dn = {},
            hn = pe.ajaxSettings.xhr();
        e.attachEvent && e.attachEvent("onunload", function () {
            for (var e in dn) dn[e](undefined, !0)
        }), de.cors = !!hn && "withCredentials" in hn, (hn = de.ajax = !!hn) && pe.ajaxTransport(function (t) {
            var n;
            if (!t.crossDomain || de.cors) return {
                send: function (i, r) {
                    var a, o = t.xhr(),
                        s = ++cn;
                    if (o.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                        for (a in t.xhrFields) o[a] = t.xhrFields[a];
                    for (a in t.mimeType && o.overrideMimeType && o.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest"), i) i[a] !== undefined && o.setRequestHeader(a, i[a] + "");
                    o.send(t.hasContent && t.data || null), n = function (e, i) {
                        var a, l, u;
                        if (n && (i || 4 === o.readyState))
                            if (delete dn[s], n = undefined, o.onreadystatechange = pe.noop, i) 4 !== o.readyState && o.abort();
                            else {
                                u = {}, a = o.status, "string" == typeof o.responseText && (u.text = o.responseText);
                                try {
                                    l = o.statusText
                                } catch (c) {
                                    l = ""
                                }
                                a || !t.isLocal || t.crossDomain ? 1223 === a && (a = 204) : a = u.text ? 200 : 404
                            } u && r(a, l, u, o.getAllResponseHeaders())
                    }, t.async ? 4 === o.readyState ? e.setTimeout(n) : o.onreadystatechange = dn[s] = n : n()
                },
                abort: function () {
                    n && n(undefined, !0)
                }
            }
        }), pe.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function (e) {
                    return pe.globalEval(e), e
                }
            }
        }), pe.ajaxPrefilter("script", function (e) {
            e.cache === undefined && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
        }), pe.ajaxTransport("script", function (e) {
            if (e.crossDomain) {
                var t, n = ie.head || pe("head")[0] || ie.documentElement;
                return {
                    send: function (i, r) {
                        (t = ie.createElement("script")).async = !0, e.scriptCharset && (t.charset = e.scriptCharset), t.src = e.url, t.onload = t.onreadystatechange = function (e, n) {
                            (n || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, n || r(200, "success"))
                        }, n.insertBefore(t, n.firstChild)
                    },
                    abort: function () {
                        t && t.onload(undefined, !0)
                    }
                }
            }
        });
        var pn = [],
            fn = /(=)\?(?=&|$)|\?\?/;
        pe.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function () {
                var e = pn.pop() || pe.expando + "_" + Ht++;
                return this[e] = !0, e
            }
        }), pe.ajaxPrefilter("json jsonp", function (t, n, i) {
            var r, a, o, s = !1 !== t.jsonp && (fn.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && fn.test(t.data) && "data");
            if (s || "jsonp" === t.dataTypes[0]) return r = t.jsonpCallback = pe.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(fn, "$1" + r) : !1 !== t.jsonp && (t.url += (Ut.test(t.url) ? "&" : "?") + t.jsonp + "=" + r), t.converters["script json"] = function () {
                return o || pe.error(r + " was not called"), o[0]
            }, t.dataTypes[0] = "json", a = e[r], e[r] = function () {
                o = arguments
            }, i.always(function () {
                a === undefined ? pe(e).removeProp(r) : e[r] = a, t[r] && (t.jsonpCallback = n.jsonpCallback, pn.push(r)), o && pe.isFunction(a) && a(o[0]), o = a = undefined
            }), "script"
        }), pe.parseHTML = function (e, t, n) {
            if (!e || "string" != typeof e) return null;
            "boolean" == typeof t && (n = t, t = !1), t = t || ie;
            var i = ke.exec(e),
                r = !n && [];
            return i ? [t.createElement(i[1])] : (i = v([e], t, r), r && r.length && pe(r).remove(), pe.merge([], i.childNodes))
        };
        var mn = pe.fn.load;
        pe.fn.load = function (e, t, n) {
            if ("string" != typeof e && mn) return mn.apply(this, arguments);
            var i, r, a, o = this,
                s = e.indexOf(" ");
            return s > -1 && (i = pe.trim(e.slice(s, e.length)), e = e.slice(0, s)), pe.isFunction(t) ? (n = t, t = undefined) : t && "object" == typeof t && (r = "POST"), o.length > 0 && pe.ajax({
                url: e,
                type: r || "GET",
                dataType: "html",
                data: t
            }).done(function (e) {
                a = arguments, o.html(i ? pe("<div>").append(pe.parseHTML(e)).find(i) : e)
            }).always(n && function (e, t) {
                o.each(function () {
                    n.apply(this, a || [e.responseText, t, e])
                })
            }), this
        }, pe.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
            pe.fn[t] = function (e) {
                return this.on(t, e)
            }
        }), pe.expr.filters.animated = function (e) {
            return pe.grep(pe.timers, function (t) {
                return e === t.elem
            }).length
        }, pe.offset = {
            setOffset: function (e, t, n) {
                var i, r, a, o, s, l, u = pe.css(e, "position"),
                    c = pe(e),
                    d = {};
                "static" === u && (e.style.position = "relative"), s = c.offset(), a = pe.css(e, "top"), l = pe.css(e, "left"), ("absolute" === u || "fixed" === u) && pe.inArray("auto", [a, l]) > -1 ? (o = (i = c.position()).top, r = i.left) : (o = parseFloat(a) || 0, r = parseFloat(l) || 0), pe.isFunction(t) && (t = t.call(e, n, pe.extend({}, s))), null != t.top && (d.top = t.top - s.top + o), null != t.left && (d.left = t.left - s.left + r), "using" in t ? t.using.call(e, d) : c.css(d)
            }
        }, pe.fn.extend({
            offset: function (e) {
                if (arguments.length) return e === undefined ? this : this.each(function (t) {
                    pe.offset.setOffset(this, e, t)
                });
                var t, n, i = {
                        top: 0,
                        left: 0
                    },
                    r = this[0],
                    a = r && r.ownerDocument;
                return a ? (t = a.documentElement, pe.contains(t, r) ? ("undefined" != typeof r.getBoundingClientRect && (i = r.getBoundingClientRect()), n = te(a), {
                    top: i.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                    left: i.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
                }) : i) : void 0
            },
            position: function () {
                if (this[0]) {
                    var e, t, n = {
                            top: 0,
                            left: 0
                        },
                        i = this[0];
                    return "fixed" === pe.css(i, "position") ? t = i.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), pe.nodeName(e[0], "html") || (n = e.offset()), n.top += pe.css(e[0], "borderTopWidth", !0), n.left += pe.css(e[0], "borderLeftWidth", !0)), {
                        top: t.top - n.top - pe.css(i, "marginTop", !0),
                        left: t.left - n.left - pe.css(i, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function () {
                return this.map(function () {
                    for (var e = this.offsetParent; e && !pe.nodeName(e, "html") && "static" === pe.css(e, "position");) e = e.offsetParent;
                    return e || mt
                })
            }
        }), pe.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function (e, t) {
            var n = /Y/.test(t);
            pe.fn[e] = function (i) {
                return ze(this, function (e, i, r) {
                    var a = te(e);
                    if (r === undefined) return a ? t in a ? a[t] : a.document.documentElement[i] : e[i];
                    a ? a.scrollTo(n ? pe(a).scrollLeft() : r, n ? r : pe(a).scrollTop()) : e[i] = r
                }, e, i, arguments.length, null)
            }
        }), pe.each(["top", "left"], function (e, t) {
            pe.cssHooks[t] = A(de.pixelPosition, function (e, n) {
                if (n) return n = vt(e, t), pt.test(n) ? pe(e).position()[t] + "px" : n
            })
        }), pe.each({
            Height: "height",
            Width: "width"
        }, function (e, t) {
            pe.each({
                padding: "inner" + e,
                content: t,
                "": "outer" + e
            }, function (n, i) {
                pe.fn[i] = function (i, r) {
                    var a = arguments.length && (n || "boolean" != typeof i),
                        o = n || (!0 === i || !0 === r ? "margin" : "border");
                    return ze(this, function (t, n, i) {
                        var r;
                        return pe.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (r = t.documentElement, Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : i === undefined ? pe.css(t, n, o) : pe.style(t, n, i, o)
                    }, t, a ? i : undefined, a, null)
                }
            })
        }), pe.fn.extend({
            bind: function (e, t, n) {
                return this.on(e, null, t, n)
            },
            unbind: function (e, t) {
                return this.off(e, null, t)
            },
            delegate: function (e, t, n, i) {
                return this.on(t, e, n, i)
            },
            undelegate: function (e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
            }
        }), pe.fn.size = function () {
            return this.length
        }, pe.fn.andSelf = pe.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
            return pe
        });
        var gn = e.jQuery,
            vn = e.$;
        return pe.noConflict = function (t) {
            return e.$ === pe && (e.$ = vn), t && e.jQuery === pe && (e.jQuery = gn), pe
        }, t || (e.jQuery = e.$ = pe), pe
    }),
    function (e, t) {
        "use strict";
        var n;
        e.rails !== t && e.error("jquery-ujs has already been loaded!");
        var i = e(document);
        e.rails = n = {
            linkClickSelector: "a[data-confirm], a[data-method], a[data-remote]:not([disabled]), a[data-disable-with], a[data-disable]",
            buttonClickSelector: "button[data-remote]:not([form]):not(form button), button[data-confirm]:not([form]):not(form button)",
            inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]",
            formSubmitSelector: "form",
            formInputClickSelector: "form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])",
            disableSelector: "input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled",
            enableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled",
            requiredInputSelector: "input[name][required]:not([disabled]), textarea[name][required]:not([disabled])",
            fileInputSelector: "input[name][type=file]:not([disabled])",
            linkDisableSelector: "a[data-disable-with], a[data-disable]",
            buttonDisableSelector: "button[data-remote][data-disable-with], button[data-remote][data-disable]",
            csrfToken: function () {
                return e("meta[name=csrf-token]").attr("content")
            },
            csrfParam: function () {
                return e("meta[name=csrf-param]").attr("content")
            },
            CSRFProtection: function (e) {
                var t = n.csrfToken();
                t && e.setRequestHeader("X-CSRF-Token", t)
            },
            refreshCSRFTokens: function () {
                e('form input[name="' + n.csrfParam() + '"]').val(n.csrfToken())
            },
            fire: function (t, n, i) {
                var r = e.Event(n);
                return t.trigger(r, i), !1 !== r.result
            },
            confirm: function (e) {
                return confirm(e)
            },
            ajax: function (t) {
                return e.ajax(t)
            },
            href: function (e) {
                return e[0].href
            },
            isRemote: function (e) {
                return e.data("remote") !== t && !1 !== e.data("remote")
            },
            handleRemote: function (i) {
                var r, a, o, s, l, u;
                if (n.fire(i, "ajax:before")) {
                    if (s = i.data("with-credentials") || null, l = i.data("type") || e.ajaxSettings && e.ajaxSettings.dataType, i.is("form")) {
                        r = i.data("ujs:submit-button-formmethod") || i.attr("method"), a = i.data("ujs:submit-button-formaction") || i.attr("action"), o = e(i[0]).serializeArray();
                        var c = i.data("ujs:submit-button");
                        c && (o.push(c), i.data("ujs:submit-button", null)), i.data("ujs:submit-button-formmethod", null), i.data("ujs:submit-button-formaction", null)
                    } else i.is(n.inputChangeSelector) ? (r = i.data("method"), a = i.data("url"), o = i.serialize(), i.data("params") && (o = o + "&" + i.data("params"))) : i.is(n.buttonClickSelector) ? (r = i.data("method") || "get", a = i.data("url"), o = i.serialize(), i.data("params") && (o = o + "&" + i.data("params"))) : (r = i.data("method"), a = n.href(i), o = i.data("params") || null);
                    return u = {
                        type: r || "GET",
                        data: o,
                        dataType: l,
                        beforeSend: function (e, r) {
                            if (r.dataType === t && e.setRequestHeader("accept", "*/*;q=0.5, " + r.accepts.script), !n.fire(i, "ajax:beforeSend", [e, r])) return !1;
                            i.trigger("ajax:send", e)
                        },
                        success: function (e, t, n) {
                            i.trigger("ajax:success", [e, t, n])
                        },
                        complete: function (e, t) {
                            i.trigger("ajax:complete", [e, t])
                        },
                        error: function (e, t, n) {
                            i.trigger("ajax:error", [e, t, n])
                        },
                        crossDomain: n.isCrossDomain(a)
                    }, s && (u.xhrFields = {
                        withCredentials: s
                    }), a && (u.url = a), n.ajax(u)
                }
                return !1
            },
            isCrossDomain: function (e) {
                var t = document.createElement("a");
                t.href = location.href;
                var n = document.createElement("a");
                try {
                    return n.href = e, n.href = n.href, !((!n.protocol || ":" === n.protocol) && !n.host || t.protocol + "//" + t.host == n.protocol + "//" + n.host)
                } catch (i) {
                    return !0
                }
            },
            handleMethod: function (i) {
                var r = n.href(i),
                    a = i.data("method"),
                    o = i.attr("target"),
                    s = n.csrfToken(),
                    l = n.csrfParam(),
                    u = e('<form method="post" action="' + r + '"></form>'),
                    c = '<input name="_method" value="' + a + '" type="hidden" />';
                l === t || s === t || n.isCrossDomain(r) || (c += '<input name="' + l + '" value="' + s + '" type="hidden" />'), o && u.attr("target", o), u.hide().append(c).appendTo("body"), u.submit()
            },
            formElements: function (t, n) {
                return t.is("form") ? e(t[0].elements).filter(n) : t.find(n)
            },
            disableFormElements: function (t) {
                n.formElements(t, n.disableSelector).each(function () {
                    n.disableFormElement(e(this))
                })
            },
            disableFormElement: function (e) {
                var n, i;
                n = e.is("button") ? "html" : "val", (i = e.data("disable-with")) !== t && (e.data("ujs:enable-with", e[n]()), e[n](i)), e.prop("disabled", !0), e.data("ujs:disabled", !0)
            },
            enableFormElements: function (t) {
                n.formElements(t, n.enableSelector).each(function () {
                    n.enableFormElement(e(this))
                })
            },
            enableFormElement: function (e) {
                var n = e.is("button") ? "html" : "val";
                e.data("ujs:enable-with") !== t && (e[n](e.data("ujs:enable-with")), e.removeData("ujs:enable-with")), e.prop("disabled", !1), e.removeData("ujs:disabled")
            },
            allowAction: function (e) {
                var t, i = e.data("confirm"),
                    r = !1;
                if (!i) return !0;
                if (n.fire(e, "confirm")) {
                    try {
                        r = n.confirm(i)
                    } catch (a) {
                        (console.error || console.log).call(console, a.stack || a)
                    }
                    t = n.fire(e, "confirm:complete", [r])
                }
                return r && t
            },
            blankInputs: function (t, n, i) {
                var r, a, o, s = e(),
                    l = n || "input,textarea",
                    u = t.find(l),
                    c = {};
                return u.each(function () {
                    (r = e(this)).is("input[type=radio]") ? (o = r.attr("name"), c[o] || (0 === t.find('input[type=radio]:checked[name="' + o + '"]').length && (a = t.find('input[type=radio][name="' + o + '"]'), s = s.add(a)), c[o] = o)) : (r.is("input[type=checkbox],input[type=radio]") ? r.is(":checked") : !!r.val()) === i && (s = s.add(r))
                }), !!s.length && s
            },
            nonBlankInputs: function (e, t) {
                return n.blankInputs(e, t, !0)
            },
            stopEverything: function (t) {
                return e(t.target).trigger("ujs:everythingStopped"), t.stopImmediatePropagation(), !1
            },
            disableElement: function (e) {
                var i = e.data("disable-with");
                i !== t && (e.data("ujs:enable-with", e.html()), e.html(i)), e.bind("click.railsDisable", function (e) {
                    return n.stopEverything(e)
                }), e.data("ujs:disabled", !0)
            },
            enableElement: function (e) {
                e.data("ujs:enable-with") !== t && (e.html(e.data("ujs:enable-with")), e.removeData("ujs:enable-with")), e.unbind("click.railsDisable"), e.removeData("ujs:disabled")
            }
        }, n.fire(i, "rails:attachBindings") && (e.ajaxPrefilter(function (e, t, i) {
            e.crossDomain || n.CSRFProtection(i)
        }), e(window).on("pageshow.rails", function () {
            e(e.rails.enableSelector).each(function () {
                var t = e(this);
                t.data("ujs:disabled") && e.rails.enableFormElement(t)
            }), e(e.rails.linkDisableSelector).each(function () {
                var t = e(this);
                t.data("ujs:disabled") && e.rails.enableElement(t)
            })
        }), i.on("ajax:complete", n.linkDisableSelector, function () {
            n.enableElement(e(this))
        }), i.on("ajax:complete", n.buttonDisableSelector, function () {
            n.enableFormElement(e(this))
        }), i.on("click.rails", n.linkClickSelector, function (t) {
            var i = e(this),
                r = i.data("method"),
                a = i.data("params"),
                o = t.metaKey || t.ctrlKey;
            if (!n.allowAction(i)) return n.stopEverything(t);
            if (!o && i.is(n.linkDisableSelector) && n.disableElement(i), n.isRemote(i)) {
                if (o && (!r || "GET" === r) && !a) return !0;
                var s = n.handleRemote(i);
                return !1 === s ? n.enableElement(i) : s.fail(function () {
                    n.enableElement(i)
                }), !1
            }
            return r ? (n.handleMethod(i), !1) : void 0
        }), i.on("click.rails", n.buttonClickSelector, function (t) {
            var i = e(this);
            if (!n.allowAction(i) || !n.isRemote(i)) return n.stopEverything(t);
            i.is(n.buttonDisableSelector) && n.disableFormElement(i);
            var r = n.handleRemote(i);
            return !1 === r ? n.enableFormElement(i) : r.fail(function () {
                n.enableFormElement(i)
            }), !1
        }), i.on("change.rails", n.inputChangeSelector, function (t) {
            var i = e(this);
            return n.allowAction(i) && n.isRemote(i) ? (n.handleRemote(i), !1) : n.stopEverything(t)
        }), i.on("submit.rails", n.formSubmitSelector, function (i) {
            var r, a, o = e(this),
                s = n.isRemote(o);
            if (!n.allowAction(o)) return n.stopEverything(i);
            if (o.attr("novalidate") === t)
                if (o.data("ujs:formnovalidate-button") === t) {
                    if ((r = n.blankInputs(o, n.requiredInputSelector, !1)) && n.fire(o, "ajax:aborted:required", [r])) return n.stopEverything(i)
                } else o.data("ujs:formnovalidate-button", t);
            if (s) {
                if (a = n.nonBlankInputs(o, n.fileInputSelector)) {
                    setTimeout(function () {
                        n.disableFormElements(o)
                    }, 13);
                    var l = n.fire(o, "ajax:aborted:file", [a]);
                    return l || setTimeout(function () {
                        n.enableFormElements(o)
                    }, 13), l
                }
                return n.handleRemote(o), !1
            }
            setTimeout(function () {
                n.disableFormElements(o)
            }, 13)
        }), i.on("click.rails", n.formInputClickSelector, function (t) {
            var i = e(this);
            if (!n.allowAction(i)) return n.stopEverything(t);
            var r = i.attr("name"),
                a = r ? {
                    name: r,
                    value: i.val()
                } : null,
                o = i.closest("form");
            0 === o.length && (o = e("#" + i.attr("form"))), o.data("ujs:submit-button", a), o.data("ujs:formnovalidate-button", i.attr("formnovalidate")), o.data("ujs:submit-button-formaction", i.attr("formaction")), o.data("ujs:submit-button-formmethod", i.attr("formmethod"))
        }), i.on("ajax:send.rails", n.formSubmitSelector, function (t) {
            this === t.target && n.disableFormElements(e(this))
        }), i.on("ajax:complete.rails", n.formSubmitSelector, function (t) {
            this === t.target && n.enableFormElements(e(this))
        }), e(function () {
            n.refreshCSRFTokens()
        }))
    }(jQuery),
    /*
     Copyright (C) Federico Zivolo 2020
     Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
     */
    function (e, t) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.Popper = t()
    }(this, function () {
        "use strict";

        function e(e) {
            return e && "[object Function]" === {}.toString.call(e)
        }

        function t(e, t) {
            if (1 !== e.nodeType) return [];
            var n = e.ownerDocument.defaultView.getComputedStyle(e, null);
            return t ? n[t] : n
        }

        function n(e) {
            return "HTML" === e.nodeName ? e : e.parentNode || e.host
        }

        function i(e) {
            if (!e) return document.body;
            switch (e.nodeName) {
                case "HTML":
                case "BODY":
                    return e.ownerDocument.body;
                case "#document":
                    return e.body
            }
            var r = t(e),
                a = r.overflow,
                o = r.overflowX,
                s = r.overflowY;
            return /(auto|scroll|overlay)/.test(a + s + o) ? e : i(n(e))
        }

        function r(e) {
            return e && e.referenceNode ? e.referenceNode : e
        }

        function a(e) {
            return 11 === e ? re : 10 === e ? ae : re || ae
        }

        function o(e) {
            if (!e) return document.documentElement;
            for (var n = a(10) ? document.body : null, i = e.offsetParent || null; i === n && e.nextElementSibling;) i = (e = e.nextElementSibling).offsetParent;
            var r = i && i.nodeName;
            return r && "BODY" !== r && "HTML" !== r ? -1 !== ["TH", "TD", "TABLE"].indexOf(i.nodeName) && "static" === t(i, "position") ? o(i) : i : e ? e.ownerDocument.documentElement : document.documentElement
        }

        function s(e) {
            var t = e.nodeName;
            return "BODY" !== t && ("HTML" === t || o(e.firstElementChild) === e)
        }

        function l(e) {
            return null === e.parentNode ? e : l(e.parentNode)
        }

        function u(e, t) {
            if (!(e && e.nodeType && t && t.nodeType)) return document.documentElement;
            var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
                i = n ? e : t,
                r = n ? t : e,
                a = document.createRange();
            a.setStart(i, 0), a.setEnd(r, 0);
            var c = a.commonAncestorContainer;
            if (e !== c && t !== c || i.contains(r)) return s(c) ? c : o(c);
            var d = l(e);
            return d.host ? u(d.host, t) : u(e, l(t).host)
        }

        function c(e) {
            var t = "top" === (1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "top") ? "scrollTop" : "scrollLeft",
                n = e.nodeName;
            if ("BODY" === n || "HTML" === n) {
                var i = e.ownerDocument.documentElement;
                return (e.ownerDocument.scrollingElement || i)[t]
            }
            return e[t]
        }

        function d(e, t) {
            var n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
                i = c(t, "top"),
                r = c(t, "left"),
                a = n ? -1 : 1;
            return e.top += i * a, e.bottom += i * a, e.left += r * a, e.right += r * a, e
        }

        function h(e, t) {
            var n = "x" === t ? "Left" : "Top",
                i = "Left" == n ? "Right" : "Bottom";
            return parseFloat(e["border" + n + "Width"]) + parseFloat(e["border" + i + "Width"])
        }

        function p(e, t, n, i) {
            return ee(t["offset" + e], t["scroll" + e], n["client" + e], n["offset" + e], n["scroll" + e], a(10) ? parseInt(n["offset" + e]) + parseInt(i["margin" + ("Height" === e ? "Top" : "Left")]) + parseInt(i["margin" + ("Height" === e ? "Bottom" : "Right")]) : 0)
        }

        function f(e) {
            var t = e.body,
                n = e.documentElement,
                i = a(10) && getComputedStyle(n);
            return {
                height: p("Height", t, n, i),
                width: p("Width", t, n, i)
            }
        }

        function m(e) {
            return ue({}, e, {
                right: e.left + e.width,
                bottom: e.top + e.height
            })
        }

        function g(e) {
            var n = {};
            try {
                if (a(10)) {
                    n = e.getBoundingClientRect();
                    var i = c(e, "top"),
                        r = c(e, "left");
                    n.top += i, n.left += r, n.bottom += i, n.right += r
                } else n = e.getBoundingClientRect()
            } catch (t) {}
            var o = {
                    left: n.left,
                    top: n.top,
                    width: n.right - n.left,
                    height: n.bottom - n.top
                },
                s = "HTML" === e.nodeName ? f(e.ownerDocument) : {},
                l = s.width || e.clientWidth || o.width,
                u = s.height || e.clientHeight || o.height,
                d = e.offsetWidth - l,
                p = e.offsetHeight - u;
            if (d || p) {
                var g = t(e);
                d -= h(g, "x"), p -= h(g, "y"), o.width -= d, o.height -= p
            }
            return m(o)
        }

        function v(e, n) {
            var r = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
                o = a(10),
                s = "HTML" === n.nodeName,
                l = g(e),
                u = g(n),
                c = i(e),
                h = t(n),
                p = parseFloat(h.borderTopWidth),
                f = parseFloat(h.borderLeftWidth);
            r && s && (u.top = ee(u.top, 0), u.left = ee(u.left, 0));
            var v = m({
                top: l.top - u.top - p,
                left: l.left - u.left - f,
                width: l.width,
                height: l.height
            });
            if (v.marginTop = 0, v.marginLeft = 0, !o && s) {
                var y = parseFloat(h.marginTop),
                    b = parseFloat(h.marginLeft);
                v.top -= p - y, v.bottom -= p - y, v.left -= f - b, v.right -= f - b, v.marginTop = y, v.marginLeft = b
            }
            return (o && !r ? n.contains(c) : n === c && "BODY" !== c.nodeName) && (v = d(v, n)), v
        }

        function y(e) {
            var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
                n = e.ownerDocument.documentElement,
                i = v(e, n),
                r = ee(n.clientWidth, window.innerWidth || 0),
                a = ee(n.clientHeight, window.innerHeight || 0),
                o = t ? 0 : c(n),
                s = t ? 0 : c(n, "left");
            return m({
                top: o - i.top + i.marginTop,
                left: s - i.left + i.marginLeft,
                width: r,
                height: a
            })
        }

        function b(e) {
            var i = e.nodeName;
            if ("BODY" === i || "HTML" === i) return !1;
            if ("fixed" === t(e, "position")) return !0;
            var r = n(e);
            return !!r && b(r)
        }

        function _(e) {
            if (!e || !e.parentElement || a()) return document.documentElement;
            for (var n = e.parentElement; n && "none" === t(n, "transform");) n = n.parentElement;
            return n || document.documentElement
        }

        function w(e, t, a, o) {
            var s = 4 < arguments.length && void 0 !== arguments[4] && arguments[4],
                l = {
                    top: 0,
                    left: 0
                },
                c = s ? _(e) : u(e, r(t));
            if ("viewport" === o) l = y(c, s);
            else {
                var d;
                "scrollParent" === o ? "BODY" === (d = i(n(t))).nodeName && (d = e.ownerDocument.documentElement) : d = "window" === o ? e.ownerDocument.documentElement : o;
                var h = v(d, c, s);
                if ("HTML" !== d.nodeName || b(c)) l = h;
                else {
                    var p = f(e.ownerDocument),
                        m = p.height,
                        g = p.width;
                    l.top += h.top - h.marginTop, l.bottom = m + h.top, l.left += h.left - h.marginLeft, l.right = g + h.left
                }
            }
            var w = "number" == typeof (a = a || 0);
            return l.left += w ? a : a.left || 0, l.top += w ? a : a.top || 0, l.right -= w ? a : a.right || 0, l.bottom -= w ? a : a.bottom || 0, l
        }

        function k(e) {
            return e.width * e.height
        }

        function C(e, t, n, i, r) {
            var a = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
            if (-1 === e.indexOf("auto")) return e;
            var o = w(n, i, a, r),
                s = {
                    top: {
                        width: o.width,
                        height: t.top - o.top
                    },
                    right: {
                        width: o.right - t.right,
                        height: o.height
                    },
                    bottom: {
                        width: o.width,
                        height: o.bottom - t.bottom
                    },
                    left: {
                        width: t.left - o.left,
                        height: o.height
                    }
                },
                l = Object.keys(s).map(function (e) {
                    return ue({
                        key: e
                    }, s[e], {
                        area: k(s[e])
                    })
                }).sort(function (e, t) {
                    return t.area - e.area
                }),
                u = l.filter(function (e) {
                    var t = e.width,
                        i = e.height;
                    return t >= n.clientWidth && i >= n.clientHeight
                }),
                c = 0 < u.length ? u[0].key : l[0].key,
                d = e.split("-")[1];
            return c + (d ? "-" + d : "")
        }

        function x(e, t, n) {
            var i = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
            return v(n, i ? _(t) : u(t, r(n)), i)
        }

        function D(e) {
            var t = e.ownerDocument.defaultView.getComputedStyle(e),
                n = parseFloat(t.marginTop || 0) + parseFloat(t.marginBottom || 0),
                i = parseFloat(t.marginLeft || 0) + parseFloat(t.marginRight || 0);
            return {
                width: e.offsetWidth + i,
                height: e.offsetHeight + n
            }
        }

        function E(e) {
            var t = {
                left: "right",
                right: "left",
                bottom: "top",
                top: "bottom"
            };
            return e.replace(/left|right|bottom|top/g, function (e) {
                return t[e]
            })
        }

        function T(e, t, n) {
            n = n.split("-")[0];
            var i = D(e),
                r = {
                    width: i.width,
                    height: i.height
                },
                a = -1 !== ["right", "left"].indexOf(n),
                o = a ? "top" : "left",
                s = a ? "left" : "top",
                l = a ? "height" : "width",
                u = a ? "width" : "height";
            return r[o] = t[o] + t[l] / 2 - i[l] / 2, r[s] = n === s ? t[s] - i[u] : t[E(s)], r
        }

        function S(e, t) {
            return Array.prototype.find ? e.find(t) : e.filter(t)[0]
        }

        function F(e, t, n) {
            if (Array.prototype.findIndex) return e.findIndex(function (e) {
                return e[t] === n
            });
            var i = S(e, function (e) {
                return e[t] === n
            });
            return e.indexOf(i)
        }

        function j(t, n, i) {
            return (void 0 === i ? t : t.slice(0, F(t, "name", i))).forEach(function (t) {
                t["function"] && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
                var i = t["function"] || t.fn;
                t.enabled && e(i) && (n.offsets.popper = m(n.offsets.popper), n.offsets.reference = m(n.offsets.reference), n = i(n, t))
            }), n
        }

        function A() {
            if (!this.state.isDestroyed) {
                var e = {
                    instance: this,
                    styles: {},
                    arrowStyles: {},
                    attributes: {},
                    flipped: !1,
                    offsets: {}
                };
                e.offsets.reference = x(this.state, this.popper, this.reference, this.options.positionFixed), e.placement = C(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.positionFixed = this.options.positionFixed, e.offsets.popper = T(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", e = j(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e))
            }
        }

        function N(e, t) {
            return e.some(function (e) {
                var n = e.name;
                return e.enabled && n === t
            })
        }

        function I(e) {
            for (var t = [!1, "ms", "Webkit", "Moz", "O"], n = e.charAt(0).toUpperCase() + e.slice(1), i = 0; i < t.length; i++) {
                var r = t[i],
                    a = r ? "" + r + n : e;
                if ("undefined" != typeof document.body.style[a]) return a
            }
            return null
        }

        function $() {
            return this.state.isDestroyed = !0, N(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[I("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
        }

        function M(e) {
            var t = e.ownerDocument;
            return t ? t.defaultView : window
        }

        function L(e, t, n, r) {
            var a = "BODY" === e.nodeName,
                o = a ? e.ownerDocument.defaultView : e;
            o.addEventListener(t, n, {
                passive: !0
            }), a || L(i(o.parentNode), t, n, r), r.push(o)
        }

        function O(e, t, n, r) {
            n.updateBound = r, M(e).addEventListener("resize", n.updateBound, {
                passive: !0
            });
            var a = i(e);
            return L(a, "scroll", n.updateBound, n.scrollParents), n.scrollElement = a, n.eventsEnabled = !0, n
        }

        function P() {
            this.state.eventsEnabled || (this.state = O(this.reference, this.options, this.state, this.scheduleUpdate))
        }

        function q(e, t) {
            return M(e).removeEventListener("resize", t.updateBound), t.scrollParents.forEach(function (e) {
                e.removeEventListener("scroll", t.updateBound)
            }), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t
        }

        function Q() {
            this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = q(this.reference, this.state))
        }

        function R(e) {
            return "" !== e && !isNaN(parseFloat(e)) && isFinite(e)
        }

        function z(e, t) {
            Object.keys(t).forEach(function (n) {
                var i = ""; - 1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(n) && R(t[n]) && (i = "px"), e.style[n] = t[n] + i
            })
        }

        function H(e, t) {
            Object.keys(t).forEach(function (n) {
                !1 === t[n] ? e.removeAttribute(n) : e.setAttribute(n, t[n])
            })
        }

        function U(e, t) {
            var n = e.offsets,
                i = n.popper,
                r = n.reference,
                a = Z,
                o = function (e) {
                    return e
                },
                s = a(r.width),
                l = a(i.width),
                u = -1 !== ["left", "right"].indexOf(e.placement),
                c = -1 !== e.placement.indexOf("-"),
                d = t ? u || c || s % 2 == l % 2 ? a : J : o,
                h = t ? a : o;
            return {
                left: d(1 == s % 2 && 1 == l % 2 && !c && t ? i.left - 1 : i.left),
                top: h(i.top),
                bottom: h(i.bottom),
                right: d(i.right)
            }
        }

        function B(e, t, n) {
            var i = S(e, function (e) {
                    return e.name === t
                }),
                r = !!i && e.some(function (e) {
                    return e.name === n && e.enabled && e.order < i.order
                });
            if (!r) {
                var a = "`" + t + "`";
                console.warn("`" + n + "` modifier is required by " + a + " modifier in order to work, be sure to include it before " + a + "!")
            }
            return r
        }

        function W(e) {
            return "end" === e ? "start" : "start" === e ? "end" : e
        }

        function Y(e) {
            var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
                n = he.indexOf(e),
                i = he.slice(n + 1).concat(he.slice(0, n));
            return t ? i.reverse() : i
        }

        function V(e, t, n, i) {
            var r = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                a = +r[1],
                o = r[2];
            if (!a) return e;
            if (0 === o.indexOf("%")) {
                var s;
                switch (o) {
                    case "%p":
                        s = n;
                        break;
                    case "%":
                    case "%r":
                    default:
                        s = i
                }
                return m(s)[t] / 100 * a
            }
            return "vh" === o || "vw" === o ? ("vh" === o ? ee(document.documentElement.clientHeight, window.innerHeight || 0) : ee(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * a : a
        }

        function K(e, t, n, i) {
            var r = [0, 0],
                a = -1 !== ["right", "left"].indexOf(i),
                o = e.split(/(\+|\-)/).map(function (e) {
                    return e.trim()
                }),
                s = o.indexOf(S(o, function (e) {
                    return -1 !== e.search(/,|\s/)
                }));
            o[s] && -1 === o[s].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
            var l = /\s*,\s*|\s+/,
                u = -1 === s ? [o] : [o.slice(0, s).concat([o[s].split(l)[0]]), [o[s].split(l)[1]].concat(o.slice(s + 1))];
            return (u = u.map(function (e, i) {
                var r = (1 === i ? !a : a) ? "height" : "width",
                    o = !1;
                return e.reduce(function (e, t) {
                    return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t) ? (e[e.length - 1] = t, o = !0, e) : o ? (e[e.length - 1] += t, o = !1, e) : e.concat(t)
                }, []).map(function (e) {
                    return V(e, r, t, n)
                })
            })).forEach(function (e, t) {
                e.forEach(function (n, i) {
                    R(n) && (r[t] += n * ("-" === e[i - 1] ? -1 : 1))
                })
            }), r
        }

        function X(e, t) {
            var n, i = t.offset,
                r = e.placement,
                a = e.offsets,
                o = a.popper,
                s = a.reference,
                l = r.split("-")[0];
            return n = R(+i) ? [+i, 0] : K(i, o, s, l), "left" === l ? (o.top += n[0], o.left -= n[1]) : "right" === l ? (o.top += n[0], o.left += n[1]) : "top" === l ? (o.left += n[0], o.top -= n[1]) : "bottom" === l && (o.left += n[0], o.top += n[1]), e.popper = o, e
        }
        var G = Math.min,
            J = Math.floor,
            Z = Math.round,
            ee = Math.max,
            te = "undefined" != typeof window && "undefined" != typeof document && "undefined" != typeof navigator,
            ne = function () {
                for (var e = ["Edge", "Trident", "Firefox"], t = 0; t < e.length; t += 1)
                    if (te && 0 <= navigator.userAgent.indexOf(e[t])) return 1;
                return 0
            }(),
            ie = te && window.Promise ? function (e) {
                var t = !1;
                return function () {
                    t || (t = !0, window.Promise.resolve().then(function () {
                        t = !1, e()
                    }))
                }
            } : function (e) {
                var t = !1;
                return function () {
                    t || (t = !0, setTimeout(function () {
                        t = !1, e()
                    }, ne))
                }
            },
            re = te && !(!window.MSInputMethodContext || !document.documentMode),
            ae = te && /MSIE 10/.test(navigator.userAgent),
            oe = function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            },
            se = function () {
                function e(e, t) {
                    for (var n, i = 0; i < t.length; i++)(n = t[i]).enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
                return function (t, n, i) {
                    return n && e(t.prototype, n), i && e(t, i), t
                }
            }(),
            le = function (e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            },
            ue = Object.assign || function (e) {
                for (var t, n = 1; n < arguments.length; n++)
                    for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e
            },
            ce = te && /Firefox/i.test(navigator.userAgent),
            de = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
            he = de.slice(3),
            pe = {
                FLIP: "flip",
                CLOCKWISE: "clockwise",
                COUNTERCLOCKWISE: "counterclockwise"
            },
            fe = function () {
                function t(n, i) {
                    var r = this,
                        a = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
                    oe(this, t), this.scheduleUpdate = function () {
                        return requestAnimationFrame(r.update)
                    }, this.update = ie(this.update.bind(this)), this.options = ue({}, t.Defaults, a), this.state = {
                        isDestroyed: !1,
                        isCreated: !1,
                        scrollParents: []
                    }, this.reference = n && n.jquery ? n[0] : n, this.popper = i && i.jquery ? i[0] : i, this.options.modifiers = {}, Object.keys(ue({}, t.Defaults.modifiers, a.modifiers)).forEach(function (e) {
                        r.options.modifiers[e] = ue({}, t.Defaults.modifiers[e] || {}, a.modifiers ? a.modifiers[e] : {})
                    }), this.modifiers = Object.keys(this.options.modifiers).map(function (e) {
                        return ue({
                            name: e
                        }, r.options.modifiers[e])
                    }).sort(function (e, t) {
                        return e.order - t.order
                    }), this.modifiers.forEach(function (t) {
                        t.enabled && e(t.onLoad) && t.onLoad(r.reference, r.popper, r.options, t, r.state)
                    }), this.update();
                    var o = this.options.eventsEnabled;
                    o && this.enableEventListeners(), this.state.eventsEnabled = o
                }
                return se(t, [{
                    key: "update",
                    value: function () {
                        return A.call(this)
                    }
                }, {
                    key: "destroy",
                    value: function () {
                        return $.call(this)
                    }
                }, {
                    key: "enableEventListeners",
                    value: function () {
                        return P.call(this)
                    }
                }, {
                    key: "disableEventListeners",
                    value: function () {
                        return Q.call(this)
                    }
                }]), t
            }();
        return fe.Utils = ("undefined" == typeof window ? global : window).PopperUtils, fe.placements = de, fe.Defaults = {
            placement: "bottom",
            positionFixed: !1,
            eventsEnabled: !0,
            removeOnDestroy: !1,
            onCreate: function () {},
            onUpdate: function () {},
            modifiers: {
                shift: {
                    order: 100,
                    enabled: !0,
                    fn: function (e) {
                        var t = e.placement,
                            n = t.split("-")[0],
                            i = t.split("-")[1];
                        if (i) {
                            var r = e.offsets,
                                a = r.reference,
                                o = r.popper,
                                s = -1 !== ["bottom", "top"].indexOf(n),
                                l = s ? "left" : "top",
                                u = s ? "width" : "height",
                                c = {
                                    start: le({}, l, a[l]),
                                    end: le({}, l, a[l] + a[u] - o[u])
                                };
                            e.offsets.popper = ue({}, o, c[i])
                        }
                        return e
                    }
                },
                offset: {
                    order: 200,
                    enabled: !0,
                    fn: X,
                    offset: 0
                },
                preventOverflow: {
                    order: 300,
                    enabled: !0,
                    fn: function (e, t) {
                        var n = t.boundariesElement || o(e.instance.popper);
                        e.instance.reference === n && (n = o(n));
                        var i = I("transform"),
                            r = e.instance.popper.style,
                            a = r.top,
                            s = r.left,
                            l = r[i];
                        r.top = "", r.left = "", r[i] = "";
                        var u = w(e.instance.popper, e.instance.reference, t.padding, n, e.positionFixed);
                        r.top = a, r.left = s, r[i] = l, t.boundaries = u;
                        var c = t.priority,
                            d = e.offsets.popper,
                            h = {
                                primary: function (e) {
                                    var n = d[e];
                                    return d[e] < u[e] && !t.escapeWithReference && (n = ee(d[e], u[e])), le({}, e, n)
                                },
                                secondary: function (e) {
                                    var n = "right" === e ? "left" : "top",
                                        i = d[n];
                                    return d[e] > u[e] && !t.escapeWithReference && (i = G(d[n], u[e] - ("right" === e ? d.width : d.height))), le({}, n, i)
                                }
                            };
                        return c.forEach(function (e) {
                            var t = -1 === ["left", "top"].indexOf(e) ? "secondary" : "primary";
                            d = ue({}, d, h[t](e))
                        }), e.offsets.popper = d, e
                    },
                    priority: ["left", "right", "top", "bottom"],
                    padding: 5,
                    boundariesElement: "scrollParent"
                },
                keepTogether: {
                    order: 400,
                    enabled: !0,
                    fn: function (e) {
                        var t = e.offsets,
                            n = t.popper,
                            i = t.reference,
                            r = e.placement.split("-")[0],
                            a = J,
                            o = -1 !== ["top", "bottom"].indexOf(r),
                            s = o ? "right" : "bottom",
                            l = o ? "left" : "top",
                            u = o ? "width" : "height";
                        return n[s] < a(i[l]) && (e.offsets.popper[l] = a(i[l]) - n[u]), n[l] > a(i[s]) && (e.offsets.popper[l] = a(i[s])), e
                    }
                },
                arrow: {
                    order: 500,
                    enabled: !0,
                    fn: function (e, n) {
                        var i;
                        if (!B(e.instance.modifiers, "arrow", "keepTogether")) return e;
                        var r = n.element;
                        if ("string" == typeof r) {
                            if (!(r = e.instance.popper.querySelector(r))) return e
                        } else if (!e.instance.popper.contains(r)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), e;
                        var a = e.placement.split("-")[0],
                            o = e.offsets,
                            s = o.popper,
                            l = o.reference,
                            u = -1 !== ["left", "right"].indexOf(a),
                            c = u ? "height" : "width",
                            d = u ? "Top" : "Left",
                            h = d.toLowerCase(),
                            p = u ? "left" : "top",
                            f = u ? "bottom" : "right",
                            g = D(r)[c];
                        l[f] - g < s[h] && (e.offsets.popper[h] -= s[h] - (l[f] - g)), l[h] + g > s[f] && (e.offsets.popper[h] += l[h] + g - s[f]), e.offsets.popper = m(e.offsets.popper);
                        var v = l[h] + l[c] / 2 - g / 2,
                            y = t(e.instance.popper),
                            b = parseFloat(y["margin" + d]),
                            _ = parseFloat(y["border" + d + "Width"]),
                            w = v - e.offsets.popper[h] - b - _;
                        return w = ee(G(s[c] - g, w), 0), e.arrowElement = r, e.offsets.arrow = (le(i = {}, h, Z(w)), le(i, p, ""), i), e
                    },
                    element: "[x-arrow]"
                },
                flip: {
                    order: 600,
                    enabled: !0,
                    fn: function (e, t) {
                        if (N(e.instance.modifiers, "inner")) return e;
                        if (e.flipped && e.placement === e.originalPlacement) return e;
                        var n = w(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement, e.positionFixed),
                            i = e.placement.split("-")[0],
                            r = E(i),
                            a = e.placement.split("-")[1] || "",
                            o = [];
                        switch (t.behavior) {
                            case pe.FLIP:
                                o = [i, r];
                                break;
                            case pe.CLOCKWISE:
                                o = Y(i);
                                break;
                            case pe.COUNTERCLOCKWISE:
                                o = Y(i, !0);
                                break;
                            default:
                                o = t.behavior
                        }
                        return o.forEach(function (s, l) {
                            if (i !== s || o.length === l + 1) return e;
                            i = e.placement.split("-")[0], r = E(i);
                            var u = e.offsets.popper,
                                c = e.offsets.reference,
                                d = J,
                                h = "left" === i && d(u.right) > d(c.left) || "right" === i && d(u.left) < d(c.right) || "top" === i && d(u.bottom) > d(c.top) || "bottom" === i && d(u.top) < d(c.bottom),
                                p = d(u.left) < d(n.left),
                                f = d(u.right) > d(n.right),
                                m = d(u.top) < d(n.top),
                                g = d(u.bottom) > d(n.bottom),
                                v = "left" === i && p || "right" === i && f || "top" === i && m || "bottom" === i && g,
                                y = -1 !== ["top", "bottom"].indexOf(i),
                                b = !!t.flipVariations && (y && "start" === a && p || y && "end" === a && f || !y && "start" === a && m || !y && "end" === a && g),
                                _ = !!t.flipVariationsByContent && (y && "start" === a && f || y && "end" === a && p || !y && "start" === a && g || !y && "end" === a && m),
                                w = b || _;
                            (h || v || w) && (e.flipped = !0, (h || v) && (i = o[l + 1]), w && (a = W(a)), e.placement = i + (a ? "-" + a : ""), e.offsets.popper = ue({}, e.offsets.popper, T(e.instance.popper, e.offsets.reference, e.placement)), e = j(e.instance.modifiers, e, "flip"))
                        }), e
                    },
                    behavior: "flip",
                    padding: 5,
                    boundariesElement: "viewport",
                    flipVariations: !1,
                    flipVariationsByContent: !1
                },
                inner: {
                    order: 700,
                    enabled: !1,
                    fn: function (e) {
                        var t = e.placement,
                            n = t.split("-")[0],
                            i = e.offsets,
                            r = i.popper,
                            a = i.reference,
                            o = -1 !== ["left", "right"].indexOf(n),
                            s = -1 === ["top", "left"].indexOf(n);
                        return r[o ? "left" : "top"] = a[n] - (s ? r[o ? "width" : "height"] : 0), e.placement = E(t), e.offsets.popper = m(r), e
                    }
                },
                hide: {
                    order: 800,
                    enabled: !0,
                    fn: function (e) {
                        if (!B(e.instance.modifiers, "hide", "preventOverflow")) return e;
                        var t = e.offsets.reference,
                            n = S(e.instance.modifiers, function (e) {
                                return "preventOverflow" === e.name
                            }).boundaries;
                        if (t.bottom < n.top || t.left > n.right || t.top > n.bottom || t.right < n.left) {
                            if (!0 === e.hide) return e;
                            e.hide = !0, e.attributes["x-out-of-boundaries"] = ""
                        } else {
                            if (!1 === e.hide) return e;
                            e.hide = !1, e.attributes["x-out-of-boundaries"] = !1
                        }
                        return e
                    }
                },
                computeStyle: {
                    order: 850,
                    enabled: !0,
                    fn: function (e, t) {
                        var n = t.x,
                            i = t.y,
                            r = e.offsets.popper,
                            a = S(e.instance.modifiers, function (e) {
                                return "applyStyle" === e.name
                            }).gpuAcceleration;
                        void 0 !== a && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                        var s, l, u = void 0 === a ? t.gpuAcceleration : a,
                            c = o(e.instance.popper),
                            d = g(c),
                            h = {
                                position: r.position
                            },
                            p = U(e, 2 > window.devicePixelRatio || !ce),
                            f = "bottom" === n ? "top" : "bottom",
                            m = "right" === i ? "left" : "right",
                            v = I("transform");
                        if (l = "bottom" == f ? "HTML" === c.nodeName ? -c.clientHeight + p.bottom : -d.height + p.bottom : p.top, s = "right" == m ? "HTML" === c.nodeName ? -c.clientWidth + p.right : -d.width + p.right : p.left, u && v) h[v] = "translate3d(" + s + "px, " + l + "px, 0)", h[f] = 0, h[m] = 0, h.willChange = "transform";
                        else {
                            var y = "bottom" == f ? -1 : 1,
                                b = "right" == m ? -1 : 1;
                            h[f] = l * y, h[m] = s * b, h.willChange = f + ", " + m
                        }
                        var _ = {
                            "x-placement": e.placement
                        };
                        return e.attributes = ue({}, _, e.attributes), e.styles = ue({}, h, e.styles), e.arrowStyles = ue({}, e.offsets.arrow, e.arrowStyles), e
                    },
                    gpuAcceleration: !0,
                    x: "bottom",
                    y: "right"
                },
                applyStyle: {
                    order: 900,
                    enabled: !0,
                    fn: function (e) {
                        return z(e.instance.popper, e.styles), H(e.instance.popper, e.attributes), e.arrowElement && Object.keys(e.arrowStyles).length && z(e.arrowElement, e.arrowStyles), e
                    },
                    onLoad: function (e, t, n, i, r) {
                        var a = x(r, t, e, n.positionFixed),
                            o = C(n.placement, a, t, e, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
                        return t.setAttribute("x-placement", o), z(t, {
                            position: n.positionFixed ? "fixed" : "absolute"
                        }), n
                    },
                    gpuAcceleration: void 0
                }
            }
        }, fe
    }),
    /*!
     * Bootstrap v4.6.2 (https://getbootstrap.com/)
     * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
     */
    function (e, t) {
        "object" == typeof exports && "undefined" != typeof module ? t(exports, require("jquery"), require("popper.js")) : "function" == typeof define && define.amd ? define(["exports", "jquery", "popper.js"], t) : t((e = "undefined" != typeof globalThis ? globalThis : e || self).bootstrap = {}, e.jQuery, e.Popper)
    }(this, function (e, t, n) {
        "use strict";

        function i(e) {
            return e && "object" == typeof e && "default" in e ? e : {
                "default": e
            }
        }

        function r(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }

        function a(e, t, n) {
            return t && r(e.prototype, t), n && r(e, n), Object.defineProperty(e, "prototype", {
                writable: !1
            }), e
        }

        function o() {
            return (o = Object.assign ? Object.assign.bind() : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
                }
                return e
            }).apply(this, arguments)
        }

        function s(e, t) {
            e.prototype = Object.create(t.prototype), e.prototype.constructor = e, l(e, t)
        }

        function l(e, t) {
            return (l = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function u(e) {
            return null == e ? "" + e : {}.toString.call(e).match(/\s([a-z]+)/i)[1].toLowerCase()
        }

        function c() {
            return {
                bindType: v,
                delegateType: v,
                handle: function (e) {
                    return m["default"](e.target).is(this) ? e.handleObj.handler.apply(this, arguments) : undefined
                }
            }
        }

        function d(e) {
            var t = this,
                n = !1;
            return m["default"](this).one(_.TRANSITION_END, function () {
                n = !0
            }), setTimeout(function () {
                n || _.triggerTransitionEnd(t)
            }, e), this
        }

        function h() {
            m["default"].fn.emulateTransitionEnd = d, m["default"].event.special[_.TRANSITION_END] = c()
        }

        function p(e, t) {
            var n = e.nodeName.toLowerCase();
            if (-1 !== t.indexOf(n)) return -1 === Qn.indexOf(n) || Boolean(zn.test(e.nodeValue) || Hn.test(e.nodeValue));
            for (var i = t.filter(function (e) {
                    return e instanceof RegExp
                }), r = 0, a = i.length; r < a; r++)
                if (i[r].test(n)) return !0;
            return !1
        }

        function f(e, t, n) {
            if (0 === e.length) return e;
            if (n && "function" == typeof n) return n(e);
            for (var i = (new window.DOMParser).parseFromString(e, "text/html"), r = Object.keys(t), a = [].slice.call(i.body.querySelectorAll("*")), o = function (e) {
                    var n = a[e],
                        i = n.nodeName.toLowerCase();
                    if (-1 === r.indexOf(n.nodeName.toLowerCase())) return n.parentNode.removeChild(n), "continue";
                    var o = [].slice.call(n.attributes),
                        s = [].concat(t["*"] || [], t[i] || []);
                    o.forEach(function (e) {
                        p(e, s) || n.removeAttribute(e.nodeName)
                    })
                }, s = 0, l = a.length; s < l; s++) o(s);
            return i.body.innerHTML
        }
        var m = i(t),
            g = i(n),
            v = "transitionend",
            y = 1e6,
            b = 1e3,
            _ = {
                TRANSITION_END: "bsTransitionEnd",
                getUID: function (e) {
                    do {
                        e += ~~(Math.random() * y)
                    } while (document.getElementById(e));
                    return e
                },
                getSelectorFromElement: function (e) {
                    var t = e.getAttribute("data-target");
                    if (!t || "#" === t) {
                        var n = e.getAttribute("href");
                        t = n && "#" !== n ? n.trim() : ""
                    }
                    try {
                        return document.querySelector(t) ? t : null
                    } catch (i) {
                        return null
                    }
                },
                getTransitionDurationFromElement: function (e) {
                    if (!e) return 0;
                    var t = m["default"](e).css("transition-duration"),
                        n = m["default"](e).css("transition-delay"),
                        i = parseFloat(t),
                        r = parseFloat(n);
                    return i || r ? (t = t.split(",")[0], n = n.split(",")[0], (parseFloat(t) + parseFloat(n)) * b) : 0
                },
                reflow: function (e) {
                    return e.offsetHeight
                },
                triggerTransitionEnd: function (e) {
                    m["default"](e).trigger(v)
                },
                supportsTransitionEnd: function () {
                    return Boolean(v)
                },
                isElement: function (e) {
                    return (e[0] || e).nodeType
                },
                typeCheckConfig: function (e, t, n) {
                    for (var i in n)
                        if (Object.prototype.hasOwnProperty.call(n, i)) {
                            var r = n[i],
                                a = t[i],
                                o = a && _.isElement(a) ? "element" : u(a);
                            if (!new RegExp(r).test(o)) throw new Error(e.toUpperCase() + ': Option "' + i + '" provided type "' + o + '" but expected type "' + r + '".')
                        }
                },
                findShadowRoot: function (e) {
                    if (!document.documentElement.attachShadow) return null;
                    if ("function" == typeof e.getRootNode) {
                        var t = e.getRootNode();
                        return t instanceof ShadowRoot ? t : null
                    }
                    return e instanceof ShadowRoot ? e : e.parentNode ? _.findShadowRoot(e.parentNode) : null
                },
                jQueryDetection: function () {
                    if ("undefined" == typeof m["default"]) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
                    var e = m["default"].fn.jquery.split(" ")[0].split("."),
                        t = 1,
                        n = 2,
                        i = 9,
                        r = 1,
                        a = 4;
                    if (e[0] < n && e[1] < i || e[0] === t && e[1] === i && e[2] < r || e[0] >= a) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
                }
            };
        _.jQueryDetection(), h();
        var w = "alert",
            k = "4.6.2",
            C = "bs.alert",
            x = "." + C,
            D = ".data-api",
            E = m["default"].fn[w],
            T = "alert",
            S = "fade",
            F = "show",
            j = "close" + x,
            A = "closed" + x,
            N = "click" + x + D,
            I = '[data-dismiss="alert"]',
            $ = function () {
                function e(e) {
                    this._element = e
                }
                var t = e.prototype;
                return t.close = function (e) {
                    var t = this._element;
                    e && (t = this._getRootElement(e)), this._triggerCloseEvent(t).isDefaultPrevented() || this._removeElement(t)
                }, t.dispose = function () {
                    m["default"].removeData(this._element, C), this._element = null
                }, t._getRootElement = function (e) {
                    var t = _.getSelectorFromElement(e),
                        n = !1;
                    return t && (n = document.querySelector(t)), n || (n = m["default"](e).closest("." + T)[0]), n
                }, t._triggerCloseEvent = function (e) {
                    var t = m["default"].Event(j);
                    return m["default"](e).trigger(t), t
                }, t._removeElement = function (e) {
                    var t = this;
                    if (m["default"](e).removeClass(F), m["default"](e).hasClass(S)) {
                        var n = _.getTransitionDurationFromElement(e);
                        m["default"](e).one(_.TRANSITION_END, function (n) {
                            return t._destroyElement(e, n)
                        }).emulateTransitionEnd(n)
                    } else this._destroyElement(e)
                }, t._destroyElement = function (e) {
                    m["default"](e).detach().trigger(A).remove()
                }, e._jQueryInterface = function (t) {
                    return this.each(function () {
                        var n = m["default"](this),
                            i = n.data(C);
                        i || (i = new e(this), n.data(C, i)), "close" === t && i[t](this)
                    })
                }, e._handleDismiss = function (e) {
                    return function (t) {
                        t && t.preventDefault(), e.close(this)
                    }
                }, a(e, null, [{
                    key: "VERSION",
                    get: function () {
                        return k
                    }
                }]), e
            }();
        m["default"](document).on(N, I, $._handleDismiss(new $)), m["default"].fn[w] = $._jQueryInterface, m["default"].fn[w].Constructor = $, m["default"].fn[w].noConflict = function () {
            return m["default"].fn[w] = E, $._jQueryInterface
        };
        var M = "button",
            L = "4.6.2",
            O = "bs.button",
            P = "." + O,
            q = ".data-api",
            Q = m["default"].fn[M],
            R = "active",
            z = "btn",
            H = "focus",
            U = "click" + P + q,
            B = "focus" + P + q + " blur" + P + q,
            W = "load" + P + q,
            Y = '[data-toggle^="button"]',
            V = '[data-toggle="buttons"]',
            K = '[data-toggle="button"]',
            X = '[data-toggle="buttons"] .btn',
            G = 'input:not([type="hidden"])',
            J = ".active",
            Z = ".btn",
            ee = function () {
                function e(e) {
                    this._element = e, this.shouldAvoidTriggerChange = !1
                }
                var t = e.prototype;
                return t.toggle = function () {
                    var e = !0,
                        t = !0,
                        n = m["default"](this._element).closest(V)[0];
                    if (n) {
                        var i = this._element.querySelector(G);
                        if (i) {
                            if ("radio" === i.type)
                                if (i.checked && this._element.classList.contains(R)) e = !1;
                                else {
                                    var r = n.querySelector(J);
                                    r && m["default"](r).removeClass(R)
                                } e && ("checkbox" !== i.type && "radio" !== i.type || (i.checked = !this._element.classList.contains(R)), this.shouldAvoidTriggerChange || m["default"](i).trigger("change")), i.focus(), t = !1
                        }
                    }
                    this._element.hasAttribute("disabled") || this._element.classList.contains("disabled") || (t && this._element.setAttribute("aria-pressed", !this._element.classList.contains(R)), e && m["default"](this._element).toggleClass(R))
                }, t.dispose = function () {
                    m["default"].removeData(this._element, O), this._element = null
                }, e._jQueryInterface = function (t, n) {
                    return this.each(function () {
                        var i = m["default"](this),
                            r = i.data(O);
                        r || (r = new e(this), i.data(O, r)), r.shouldAvoidTriggerChange = n, "toggle" === t && r[t]()
                    })
                }, a(e, null, [{
                    key: "VERSION",
                    get: function () {
                        return L
                    }
                }]), e
            }();
        m["default"](document).on(U, Y, function (e) {
            var t = e.target,
                n = t;
            if (m["default"](t).hasClass(z) || (t = m["default"](t).closest(Z)[0]), !t || t.hasAttribute("disabled") || t.classList.contains("disabled")) e.preventDefault();
            else {
                var i = t.querySelector(G);
                if (i && (i.hasAttribute("disabled") || i.classList.contains("disabled"))) return void e.preventDefault();
                "INPUT" !== n.tagName && "LABEL" === t.tagName || ee._jQueryInterface.call(m["default"](t), "toggle", "INPUT" === n.tagName)
            }
        }).on(B, Y, function (e) {
            var t = m["default"](e.target).closest(Z)[0];
            m["default"](t).toggleClass(H, /^focus(in)?$/.test(e.type))
        }), m["default"](window).on(W, function () {
            for (var e = [].slice.call(document.querySelectorAll(X)), t = 0, n = e.length; t < n; t++) {
                var i = e[t],
                    r = i.querySelector(G);
                r.checked || r.hasAttribute("checked") ? i.classList.add(R) : i.classList.remove(R)
            }
            for (var a = 0, o = (e = [].slice.call(document.querySelectorAll(K))).length; a < o; a++) {
                var s = e[a];
                "true" === s.getAttribute("aria-pressed") ? s.classList.add(R) : s.classList.remove(R)
            }
        }), m["default"].fn[M] = ee._jQueryInterface, m["default"].fn[M].Constructor = ee, m["default"].fn[M].noConflict = function () {
            return m["default"].fn[M] = Q, ee._jQueryInterface
        };
        var te = "carousel",
            ne = "4.6.2",
            ie = "bs.carousel",
            re = "." + ie,
            ae = ".data-api",
            oe = m["default"].fn[te],
            se = 37,
            le = 39,
            ue = 500,
            ce = 40,
            de = "carousel",
            he = "active",
            pe = "slide",
            fe = "carousel-item-right",
            me = "carousel-item-left",
            ge = "carousel-item-next",
            ve = "carousel-item-prev",
            ye = "pointer-event",
            be = "next",
            _e = "prev",
            we = "left",
            ke = "right",
            Ce = "slide" + re,
            xe = "slid" + re,
            De = "keydown" + re,
            Ee = "mouseenter" + re,
            Te = "mouseleave" + re,
            Se = "touchstart" + re,
            Fe = "touchmove" + re,
            je = "touchend" + re,
            Ae = "pointerdown" + re,
            Ne = "pointerup" + re,
            Ie = "dragstart" + re,
            $e = "load" + re + ae,
            Me = "click" + re + ae,
            Le = ".active",
            Oe = ".active.carousel-item",
            Pe = ".carousel-item",
            qe = ".carousel-item img",
            Qe = ".carousel-item-next, .carousel-item-prev",
            Re = ".carousel-indicators",
            ze = "[data-slide], [data-slide-to]",
            He = '[data-ride="carousel"]',
            Ue = {
                interval: 5e3,
                keyboard: !0,
                slide: !1,
                pause: "hover",
                wrap: !0,
                touch: !0
            },
            Be = {
                interval: "(number|boolean)",
                keyboard: "boolean",
                slide: "(boolean|string)",
                pause: "(string|boolean)",
                wrap: "boolean",
                touch: "boolean"
            },
            We = {
                TOUCH: "touch",
                PEN: "pen"
            },
            Ye = function () {
                function e(e, t) {
                    this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(t), this._element = e, this._indicatorsElement = this._element.querySelector(Re), this._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0, this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent), this._addEventListeners()
                }
                var t = e.prototype;
                return t.next = function () {
                    this._isSliding || this._slide(be)
                }, t.nextWhenVisible = function () {
                    var e = m["default"](this._element);
                    !document.hidden && e.is(":visible") && "hidden" !== e.css("visibility") && this.next()
                }, t.prev = function () {
                    this._isSliding || this._slide(_e)
                }, t.pause = function (e) {
                    e || (this._isPaused = !0), this._element.querySelector(Qe) && (_.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
                }, t.cycle = function (e) {
                    e || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._updateInterval(), this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
                }, t.to = function (e) {
                    var t = this;
                    this._activeElement = this._element.querySelector(Oe);
                    var n = this._getItemIndex(this._activeElement);
                    if (!(e > this._items.length - 1 || e < 0))
                        if (this._isSliding) m["default"](this._element).one(xe, function () {
                            return t.to(e)
                        });
                        else {
                            if (n === e) return this.pause(), void this.cycle();
                            var i = e > n ? be : _e;
                            this._slide(i, this._items[e])
                        }
                }, t.dispose = function () {
                    m["default"](this._element).off(re), m["default"].removeData(this._element, ie), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
                }, t._getConfig = function (e) {
                    return e = o({}, Ue, e), _.typeCheckConfig(te, e, Be), e
                }, t._handleSwipe = function () {
                    var e = Math.abs(this.touchDeltaX);
                    if (!(e <= ce)) {
                        var t = e / this.touchDeltaX;
                        this.touchDeltaX = 0, t > 0 && this.prev(), t < 0 && this.next()
                    }
                }, t._addEventListeners = function () {
                    var e = this;
                    this._config.keyboard && m["default"](this._element).on(De, function (t) {
                        return e._keydown(t)
                    }), "hover" === this._config.pause && m["default"](this._element).on(Ee, function (t) {
                        return e.pause(t)
                    }).on(Te, function (t) {
                        return e.cycle(t)
                    }), this._config.touch && this._addTouchEventListeners()
                }, t._addTouchEventListeners = function () {
                    var e = this;
                    if (this._touchSupported) {
                        var t = function (t) {
                                e._pointerEvent && We[t.originalEvent.pointerType.toUpperCase()] ? e.touchStartX = t.originalEvent.clientX : e._pointerEvent || (e.touchStartX = t.originalEvent.touches[0].clientX)
                            },
                            n = function (t) {
                                e.touchDeltaX = t.originalEvent.touches && t.originalEvent.touches.length > 1 ? 0 : t.originalEvent.touches[0].clientX - e.touchStartX
                            },
                            i = function (t) {
                                e._pointerEvent && We[t.originalEvent.pointerType.toUpperCase()] && (e.touchDeltaX = t.originalEvent.clientX - e.touchStartX), e._handleSwipe(), "hover" === e._config.pause && (e.pause(), e.touchTimeout && clearTimeout(e.touchTimeout), e.touchTimeout = setTimeout(function (t) {
                                    return e.cycle(t)
                                }, ue + e._config.interval))
                            };
                        m["default"](this._element.querySelectorAll(qe)).on(Ie, function (e) {
                            return e.preventDefault()
                        }), this._pointerEvent ? (m["default"](this._element).on(Ae, function (e) {
                            return t(e)
                        }), m["default"](this._element).on(Ne, function (e) {
                            return i(e)
                        }), this._element.classList.add(ye)) : (m["default"](this._element).on(Se, function (e) {
                            return t(e)
                        }), m["default"](this._element).on(Fe, function (e) {
                            return n(e)
                        }), m["default"](this._element).on(je, function (e) {
                            return i(e)
                        }))
                    }
                }, t._keydown = function (e) {
                    if (!/input|textarea/i.test(e.target.tagName)) switch (e.which) {
                        case se:
                            e.preventDefault(), this.prev();
                            break;
                        case le:
                            e.preventDefault(), this.next()
                    }
                }, t._getItemIndex = function (e) {
                    return this._items = e && e.parentNode ? [].slice.call(e.parentNode.querySelectorAll(Pe)) : [], this._items.indexOf(e)
                }, t._getItemByDirection = function (e, t) {
                    var n = e === be,
                        i = e === _e,
                        r = this._getItemIndex(t),
                        a = this._items.length - 1;
                    if ((i && 0 === r || n && r === a) && !this._config.wrap) return t;
                    var o = (r + (e === _e ? -1 : 1)) % this._items.length;
                    return -1 === o ? this._items[this._items.length - 1] : this._items[o]
                }, t._triggerSlideEvent = function (e, t) {
                    var n = this._getItemIndex(e),
                        i = this._getItemIndex(this._element.querySelector(Oe)),
                        r = m["default"].Event(Ce, {
                            relatedTarget: e,
                            direction: t,
                            from: i,
                            to: n
                        });
                    return m["default"](this._element).trigger(r), r
                }, t._setActiveIndicatorElement = function (e) {
                    if (this._indicatorsElement) {
                        var t = [].slice.call(this._indicatorsElement.querySelectorAll(Le));
                        m["default"](t).removeClass(he);
                        var n = this._indicatorsElement.children[this._getItemIndex(e)];
                        n && m["default"](n).addClass(he)
                    }
                }, t._updateInterval = function () {
                    var e = this._activeElement || this._element.querySelector(Oe);
                    if (e) {
                        var t = parseInt(e.getAttribute("data-interval"), 10);
                        t ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = t) : this._config.interval = this._config.defaultInterval || this._config.interval
                    }
                }, t._slide = function (e, t) {
                    var n, i, r, a = this,
                        o = this._element.querySelector(Oe),
                        s = this._getItemIndex(o),
                        l = t || o && this._getItemByDirection(e, o),
                        u = this._getItemIndex(l),
                        c = Boolean(this._interval);
                    if (e === be ? (n = me, i = ge, r = we) : (n = fe, i = ve, r = ke), l && m["default"](l).hasClass(he)) this._isSliding = !1;
                    else if (!this._triggerSlideEvent(l, r).isDefaultPrevented() && o && l) {
                        this._isSliding = !0, c && this.pause(), this._setActiveIndicatorElement(l), this._activeElement = l;
                        var d = m["default"].Event(xe, {
                            relatedTarget: l,
                            direction: r,
                            from: s,
                            to: u
                        });
                        if (m["default"](this._element).hasClass(pe)) {
                            m["default"](l).addClass(i), _.reflow(l), m["default"](o).addClass(n), m["default"](l).addClass(n);
                            var h = _.getTransitionDurationFromElement(o);
                            m["default"](o).one(_.TRANSITION_END, function () {
                                m["default"](l).removeClass(n + " " + i).addClass(he), m["default"](o).removeClass(he + " " + i + " " + n), a._isSliding = !1, setTimeout(function () {
                                    return m["default"](a._element).trigger(d)
                                }, 0)
                            }).emulateTransitionEnd(h)
                        } else m["default"](o).removeClass(he), m["default"](l).addClass(he), this._isSliding = !1, m["default"](this._element).trigger(d);
                        c && this.cycle()
                    }
                }, e._jQueryInterface = function (t) {
                    return this.each(function () {
                        var n = m["default"](this).data(ie),
                            i = o({}, Ue, m["default"](this).data());
                        "object" == typeof t && (i = o({}, i, t));
                        var r = "string" == typeof t ? t : i.slide;
                        if (n || (n = new e(this, i), m["default"](this).data(ie, n)), "number" == typeof t) n.to(t);
                        else if ("string" == typeof r) {
                            if ("undefined" == typeof n[r]) throw new TypeError('No method named "' + r + '"');
                            n[r]()
                        } else i.interval && i.ride && (n.pause(), n.cycle())
                    })
                }, e._dataApiClickHandler = function (t) {
                    var n = _.getSelectorFromElement(this);
                    if (n) {
                        var i = m["default"](n)[0];
                        if (i && m["default"](i).hasClass(de)) {
                            var r = o({}, m["default"](i).data(), m["default"](this).data()),
                                a = this.getAttribute("data-slide-to");
                            a && (r.interval = !1), e._jQueryInterface.call(m["default"](i), r), a && m["default"](i).data(ie).to(a), t.preventDefault()
                        }
                    }
                }, a(e, null, [{
                    key: "VERSION",
                    get: function () {
                        return ne
                    }
                }, {
                    key: "Default",
                    get: function () {
                        return Ue
                    }
                }]), e
            }();
        m["default"](document).on(Me, ze, Ye._dataApiClickHandler), m["default"](window).on($e, function () {
            for (var e = [].slice.call(document.querySelectorAll(He)), t = 0, n = e.length; t < n; t++) {
                var i = m["default"](e[t]);
                Ye._jQueryInterface.call(i, i.data())
            }
        }), m["default"].fn[te] = Ye._jQueryInterface, m["default"].fn[te].Constructor = Ye, m["default"].fn[te].noConflict = function () {
            return m["default"].fn[te] = oe, Ye._jQueryInterface
        };
        var Ve = "collapse",
            Ke = "4.6.2",
            Xe = "bs.collapse",
            Ge = "." + Xe,
            Je = ".data-api",
            Ze = m["default"].fn[Ve],
            et = "show",
            tt = "collapse",
            nt = "collapsing",
            it = "collapsed",
            rt = "width",
            at = "height",
            ot = "show" + Ge,
            st = "shown" + Ge,
            lt = "hide" + Ge,
            ut = "hidden" + Ge,
            ct = "click" + Ge + Je,
            dt = ".show, .collapsing",
            ht = '[data-toggle="collapse"]',
            pt = {
                toggle: !0,
                parent: ""
            },
            ft = {
                toggle: "boolean",
                parent: "(string|element)"
            },
            mt = function () {
                function e(e, t) {
                    this._isTransitioning = !1, this._element = e, this._config = this._getConfig(t), this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'));
                    for (var n = [].slice.call(document.querySelectorAll(ht)), i = 0, r = n.length; i < r; i++) {
                        var a = n[i],
                            o = _.getSelectorFromElement(a),
                            s = [].slice.call(document.querySelectorAll(o)).filter(function (t) {
                                return t === e
                            });
                        null !== o && s.length > 0 && (this._selector = o, this._triggerArray.push(a))
                    }
                    this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
                }
                var t = e.prototype;
                return t.toggle = function () {
                    m["default"](this._element).hasClass(et) ? this.hide() : this.show()
                }, t.show = function () {
                    var t, n, i = this;
                    if (!this._isTransitioning && !m["default"](this._element).hasClass(et) && (this._parent && 0 === (t = [].slice.call(this._parent.querySelectorAll(dt)).filter(function (e) {
                            return "string" == typeof i._config.parent ? e.getAttribute("data-parent") === i._config.parent : e.classList.contains(tt)
                        })).length && (t = null), !(t && (n = m["default"](t).not(this._selector).data(Xe)) && n._isTransitioning))) {
                        var r = m["default"].Event(ot);
                        if (m["default"](this._element).trigger(r), !r.isDefaultPrevented()) {
                            t && (e._jQueryInterface.call(m["default"](t).not(this._selector), "hide"), n || m["default"](t).data(Xe, null));
                            var a = this._getDimension();
                            m["default"](this._element).removeClass(tt).addClass(nt), this._element.style[a] = 0, this._triggerArray.length && m["default"](this._triggerArray).removeClass(it).attr("aria-expanded", !0), this.setTransitioning(!0);
                            var o = function () {
                                    m["default"](i._element).removeClass(nt).addClass(tt + " " + et), i._element.style[a] = "", i.setTransitioning(!1), m["default"](i._element).trigger(st)
                                },
                                s = "scroll" + (a[0].toUpperCase() + a.slice(1)),
                                l = _.getTransitionDurationFromElement(this._element);
                            m["default"](this._element).one(_.TRANSITION_END, o).emulateTransitionEnd(l), this._element.style[a] = this._element[s] + "px"
                        }
                    }
                }, t.hide = function () {
                    var e = this;
                    if (!this._isTransitioning && m["default"](this._element).hasClass(et)) {
                        var t = m["default"].Event(lt);
                        if (m["default"](this._element).trigger(t), !t.isDefaultPrevented()) {
                            var n = this._getDimension();
                            this._element.style[n] = this._element.getBoundingClientRect()[n] + "px", _.reflow(this._element), m["default"](this._element).addClass(nt).removeClass(tt + " " + et);
                            var i = this._triggerArray.length;
                            if (i > 0)
                                for (var r = 0; r < i; r++) {
                                    var a = this._triggerArray[r],
                                        o = _.getSelectorFromElement(a);
                                    if (null !== o) m["default"]([].slice.call(document.querySelectorAll(o))).hasClass(et) || m["default"](a).addClass(it).attr("aria-expanded", !1)
                                }
                            this.setTransitioning(!0);
                            var s = function () {
                                e.setTransitioning(!1), m["default"](e._element).removeClass(nt).addClass(tt).trigger(ut)
                            };
                            this._element.style[n] = "";
                            var l = _.getTransitionDurationFromElement(this._element);
                            m["default"](this._element).one(_.TRANSITION_END, s).emulateTransitionEnd(l)
                        }
                    }
                }, t.setTransitioning = function (e) {
                    this._isTransitioning = e
                }, t.dispose = function () {
                    m["default"].removeData(this._element, Xe), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
                }, t._getConfig = function (e) {
                    return (e = o({}, pt, e)).toggle = Boolean(e.toggle), _.typeCheckConfig(Ve, e, ft), e
                }, t._getDimension = function () {
                    return m["default"](this._element).hasClass(rt) ? rt : at
                }, t._getParent = function () {
                    var t, n = this;
                    _.isElement(this._config.parent) ? (t = this._config.parent, "undefined" != typeof this._config.parent.jquery && (t = this._config.parent[0])) : t = document.querySelector(this._config.parent);
                    var i = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
                        r = [].slice.call(t.querySelectorAll(i));
                    return m["default"](r).each(function (t, i) {
                        n._addAriaAndCollapsedClass(e._getTargetFromElement(i), [i])
                    }), t
                }, t._addAriaAndCollapsedClass = function (e, t) {
                    var n = m["default"](e).hasClass(et);
                    t.length && m["default"](t).toggleClass(it, !n).attr("aria-expanded", n)
                }, e._getTargetFromElement = function (e) {
                    var t = _.getSelectorFromElement(e);
                    return t ? document.querySelector(t) : null
                }, e._jQueryInterface = function (t) {
                    return this.each(function () {
                        var n = m["default"](this),
                            i = n.data(Xe),
                            r = o({}, pt, n.data(), "object" == typeof t && t ? t : {});
                        if (!i && r.toggle && "string" == typeof t && /show|hide/.test(t) && (r.toggle = !1), i || (i = new e(this, r), n.data(Xe, i)), "string" == typeof t) {
                            if ("undefined" == typeof i[t]) throw new TypeError('No method named "' + t + '"');
                            i[t]()
                        }
                    })
                }, a(e, null, [{
                    key: "VERSION",
                    get: function () {
                        return Ke
                    }
                }, {
                    key: "Default",
                    get: function () {
                        return pt
                    }
                }]), e
            }();
        m["default"](document).on(ct, ht, function (e) {
            "A" === e.currentTarget.tagName && e.preventDefault();
            var t = m["default"](this),
                n = _.getSelectorFromElement(this),
                i = [].slice.call(document.querySelectorAll(n));
            m["default"](i).each(function () {
                var e = m["default"](this),
                    n = e.data(Xe) ? "toggle" : t.data();
                mt._jQueryInterface.call(e, n)
            })
        }), m["default"].fn[Ve] = mt._jQueryInterface, m["default"].fn[Ve].Constructor = mt, m["default"].fn[Ve].noConflict = function () {
            return m["default"].fn[Ve] = Ze, mt._jQueryInterface
        };
        var gt = "dropdown",
            vt = "4.6.2",
            yt = "bs.dropdown",
            bt = "." + yt,
            _t = ".data-api",
            wt = m["default"].fn[gt],
            kt = 27,
            Ct = 32,
            xt = 9,
            Dt = 38,
            Et = 40,
            Tt = 3,
            St = new RegExp(Dt + "|" + Et + "|" + kt),
            Ft = "disabled",
            jt = "show",
            At = "dropup",
            Nt = "dropright",
            It = "dropleft",
            $t = "dropdown-menu-right",
            Mt = "position-static",
            Lt = "hide" + bt,
            Ot = "hidden" + bt,
            Pt = "show" + bt,
            qt = "shown" + bt,
            Qt = "click" + bt,
            Rt = "click" + bt + _t,
            zt = "keydown" + bt + _t,
            Ht = "keyup" + bt + _t,
            Ut = '[data-toggle="dropdown"]',
            Bt = ".dropdown form",
            Wt = ".dropdown-menu",
            Yt = ".navbar-nav",
            Vt = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
            Kt = "top-start",
            Xt = "top-end",
            Gt = "bottom-start",
            Jt = "bottom-end",
            Zt = "right-start",
            en = "left-start",
            tn = {
                offset: 0,
                flip: !0,
                boundary: "scrollParent",
                reference: "toggle",
                display: "dynamic",
                popperConfig: null
            },
            nn = {
                offset: "(number|string|function)",
                flip: "boolean",
                boundary: "(string|element)",
                reference: "(string|element)",
                display: "string",
                popperConfig: "(null|object)"
            },
            rn = function () {
                function e(e, t) {
                    this._element = e, this._popper = null, this._config = this._getConfig(t), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners()
                }
                var t = e.prototype;
                return t.toggle = function () {
                    if (!this._element.disabled && !m["default"](this._element).hasClass(Ft)) {
                        var t = m["default"](this._menu).hasClass(jt);
                        e._clearMenus(), t || this.show(!0)
                    }
                }, t.show = function (t) {
                    if (void 0 === t && (t = !1), !(this._element.disabled || m["default"](this._element).hasClass(Ft) || m["default"](this._menu).hasClass(jt))) {
                        var n = {
                                relatedTarget: this._element
                            },
                            i = m["default"].Event(Pt, n),
                            r = e._getParentFromElement(this._element);
                        if (m["default"](r).trigger(i), !i.isDefaultPrevented()) {
                            if (!this._inNavbar && t) {
                                if ("undefined" == typeof g["default"]) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
                                var a = this._element;
                                "parent" === this._config.reference ? a = r : _.isElement(this._config.reference) && (a = this._config.reference, "undefined" != typeof this._config.reference.jquery && (a = this._config.reference[0])), "scrollParent" !== this._config.boundary && m["default"](r).addClass(Mt), this._popper = new g["default"](a, this._menu, this._getPopperConfig())
                            }
                            "ontouchstart" in document.documentElement && 0 === m["default"](r).closest(Yt).length && m["default"](document.body).children().on("mouseover", null, m["default"].noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), m["default"](this._menu).toggleClass(jt), m["default"](r).toggleClass(jt).trigger(m["default"].Event(qt, n))
                        }
                    }
                }, t.hide = function () {
                    if (!this._element.disabled && !m["default"](this._element).hasClass(Ft) && m["default"](this._menu).hasClass(jt)) {
                        var t = {
                                relatedTarget: this._element
                            },
                            n = m["default"].Event(Lt, t),
                            i = e._getParentFromElement(this._element);
                        m["default"](i).trigger(n), n.isDefaultPrevented() || (this._popper && this._popper.destroy(), m["default"](this._menu).toggleClass(jt), m["default"](i).toggleClass(jt).trigger(m["default"].Event(Ot, t)))
                    }
                }, t.dispose = function () {
                    m["default"].removeData(this._element, yt), m["default"](this._element).off(bt), this._element = null, this._menu = null, null !== this._popper && (this._popper.destroy(), this._popper = null)
                }, t.update = function () {
                    this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate()
                }, t._addEventListeners = function () {
                    var e = this;
                    m["default"](this._element).on(Qt, function (t) {
                        t.preventDefault(), t.stopPropagation(), e.toggle()
                    })
                }, t._getConfig = function (e) {
                    return e = o({}, this.constructor.Default, m["default"](this._element).data(), e), _.typeCheckConfig(gt, e, this.constructor.DefaultType), e
                }, t._getMenuElement = function () {
                    if (!this._menu) {
                        var t = e._getParentFromElement(this._element);
                        t && (this._menu = t.querySelector(Wt))
                    }
                    return this._menu
                }, t._getPlacement = function () {
                    var e = m["default"](this._element.parentNode),
                        t = Gt;
                    return e.hasClass(At) ? t = m["default"](this._menu).hasClass($t) ? Xt : Kt : e.hasClass(Nt) ? t = Zt : e.hasClass(It) ? t = en : m["default"](this._menu).hasClass($t) && (t = Jt), t
                }, t._detectNavbar = function () {
                    return m["default"](this._element).closest(".navbar").length > 0
                }, t._getOffset = function () {
                    var e = this,
                        t = {};
                    return "function" == typeof this._config.offset ? t.fn = function (t) {
                        return t.offsets = o({}, t.offsets, e._config.offset(t.offsets, e._element)), t
                    } : t.offset = this._config.offset, t
                }, t._getPopperConfig = function () {
                    var e = {
                        placement: this._getPlacement(),
                        modifiers: {
                            offset: this._getOffset(),
                            flip: {
                                enabled: this._config.flip
                            },
                            preventOverflow: {
                                boundariesElement: this._config.boundary
                            }
                        }
                    };
                    return "static" === this._config.display && (e.modifiers.applyStyle = {
                        enabled: !1
                    }), o({}, e, this._config.popperConfig)
                }, e._jQueryInterface = function (t) {
                    return this.each(function () {
                        var n = m["default"](this).data(yt);
                        if (n || (n = new e(this, "object" == typeof t ? t : null), m["default"](this).data(yt, n)), "string" == typeof t) {
                            if ("undefined" == typeof n[t]) throw new TypeError('No method named "' + t + '"');
                            n[t]()
                        }
                    })
                }, e._clearMenus = function (t) {
                    if (!t || t.which !== Tt && ("keyup" !== t.type || t.which === xt))
                        for (var n = [].slice.call(document.querySelectorAll(Ut)), i = 0, r = n.length; i < r; i++) {
                            var a = e._getParentFromElement(n[i]),
                                o = m["default"](n[i]).data(yt),
                                s = {
                                    relatedTarget: n[i]
                                };
                            if (t && "click" === t.type && (s.clickEvent = t), o) {
                                var l = o._menu;
                                if (m["default"](a).hasClass(jt) && !(t && ("click" === t.type && /input|textarea/i.test(t.target.tagName) || "keyup" === t.type && t.which === xt) && m["default"].contains(a, t.target))) {
                                    var u = m["default"].Event(Lt, s);
                                    m["default"](a).trigger(u), u.isDefaultPrevented() || ("ontouchstart" in document.documentElement && m["default"](document.body).children().off("mouseover", null, m["default"].noop), n[i].setAttribute("aria-expanded", "false"), o._popper && o._popper.destroy(), m["default"](l).removeClass(jt), m["default"](a).removeClass(jt).trigger(m["default"].Event(Ot, s)))
                                }
                            }
                        }
                }, e._getParentFromElement = function (e) {
                    var t, n = _.getSelectorFromElement(e);
                    return n && (t = document.querySelector(n)), t || e.parentNode
                }, e._dataApiKeydownHandler = function (t) {
                    if ((/input|textarea/i.test(t.target.tagName) ? !(t.which === Ct || t.which !== kt && (t.which !== Et && t.which !== Dt || m["default"](t.target).closest(Wt).length)) : St.test(t.which)) && !this.disabled && !m["default"](this).hasClass(Ft)) {
                        var n = e._getParentFromElement(this),
                            i = m["default"](n).hasClass(jt);
                        if (i || t.which !== kt) {
                            if (t.preventDefault(), t.stopPropagation(), !i || t.which === kt || t.which === Ct) return t.which === kt && m["default"](n.querySelector(Ut)).trigger("focus"), void m["default"](this).trigger("click");
                            var r = [].slice.call(n.querySelectorAll(Vt)).filter(function (e) {
                                return m["default"](e).is(":visible")
                            });
                            if (0 !== r.length) {
                                var a = r.indexOf(t.target);
                                t.which === Dt && a > 0 && a--, t.which === Et && a < r.length - 1 && a++, a < 0 && (a = 0), r[a].focus()
                            }
                        }
                    }
                }, a(e, null, [{
                    key: "VERSION",
                    get: function () {
                        return vt
                    }
                }, {
                    key: "Default",
                    get: function () {
                        return tn
                    }
                }, {
                    key: "DefaultType",
                    get: function () {
                        return nn
                    }
                }]), e
            }();
        m["default"](document).on(zt, Ut, rn._dataApiKeydownHandler).on(zt, Wt, rn._dataApiKeydownHandler).on(Rt + " " + Ht, rn._clearMenus).on(Rt, Ut, function (e) {
            e.preventDefault(), e.stopPropagation(), rn._jQueryInterface.call(m["default"](this), "toggle")
        }).on(Rt, Bt, function (e) {
            e.stopPropagation()
        }), m["default"].fn[gt] = rn._jQueryInterface, m["default"].fn[gt].Constructor = rn, m["default"].fn[gt].noConflict = function () {
            return m["default"].fn[gt] = wt, rn._jQueryInterface
        };
        var an = "modal",
            on = "4.6.2",
            sn = "bs.modal",
            ln = "." + sn,
            un = ".data-api",
            cn = m["default"].fn[an],
            dn = 27,
            hn = "modal-dialog-scrollable",
            pn = "modal-scrollbar-measure",
            fn = "modal-backdrop",
            mn = "modal-open",
            gn = "fade",
            vn = "show",
            yn = "modal-static",
            bn = "hide" + ln,
            _n = "hidePrevented" + ln,
            wn = "hidden" + ln,
            kn = "show" + ln,
            Cn = "shown" + ln,
            xn = "focusin" + ln,
            Dn = "resize" + ln,
            En = "click.dismiss" + ln,
            Tn = "keydown.dismiss" + ln,
            Sn = "mouseup.dismiss" + ln,
            Fn = "mousedown.dismiss" + ln,
            jn = "click" + ln + un,
            An = ".modal-dialog",
            Nn = ".modal-body",
            In = '[data-toggle="modal"]',
            $n = '[data-dismiss="modal"]',
            Mn = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
            Ln = ".sticky-top",
            On = {
                backdrop: !0,
                keyboard: !0,
                focus: !0,
                show: !0
            },
            Pn = {
                backdrop: "(boolean|string)",
                keyboard: "boolean",
                focus: "boolean",
                show: "boolean"
            },
            qn = function () {
                function e(e, t) {
                    this._config = this._getConfig(t), this._element = e, this._dialog = e.querySelector(An), this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollbarWidth = 0
                }
                var t = e.prototype;
                return t.toggle = function (e) {
                        return this._isShown ? this.hide() : this.show(e)
                    }, t.show = function (e) {
                        var t = this;
                        if (!this._isShown && !this._isTransitioning) {
                            var n = m["default"].Event(kn, {
                                relatedTarget: e
                            });
                            m["default"](this._element).trigger(n), n.isDefaultPrevented() || (this._isShown = !0, m["default"](this._element).hasClass(gn) && (this._isTransitioning = !0), this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), m["default"](this._element).on(En, $n, function (e) {
                                return t.hide(e)
                            }), m["default"](this._dialog).on(Fn, function () {
                                m["default"](t._element).one(Sn, function (e) {
                                    m["default"](e.target).is(t._element) && (t._ignoreBackdropClick = !0)
                                })
                            }), this._showBackdrop(function () {
                                return t._showElement(e)
                            }))
                        }
                    }, t.hide = function (e) {
                        var t = this;
                        if (e && e.preventDefault(), this._isShown && !this._isTransitioning) {
                            var n = m["default"].Event(bn);
                            if (m["default"](this._element).trigger(n), this._isShown && !n.isDefaultPrevented()) {
                                this._isShown = !1;
                                var i = m["default"](this._element).hasClass(gn);
                                if (i && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), m["default"](document).off(xn), m["default"](this._element).removeClass(vn), m["default"](this._element).off(En), m["default"](this._dialog).off(Fn), i) {
                                    var r = _.getTransitionDurationFromElement(this._element);
                                    m["default"](this._element).one(_.TRANSITION_END, function (e) {
                                        return t._hideModal(e)
                                    }).emulateTransitionEnd(r)
                                } else this._hideModal()
                            }
                        }
                    }, t.dispose = function () {
                        [window, this._element, this._dialog].forEach(function (e) {
                            return m["default"](e).off(ln)
                        }), m["default"](document).off(xn), m["default"].removeData(this._element, sn), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._isTransitioning = null, this._scrollbarWidth = null
                    }, t.handleUpdate = function () {
                        this._adjustDialog()
                    }, t._getConfig = function (e) {
                        return e = o({}, On, e), _.typeCheckConfig(an, e, Pn), e
                    }, t._triggerBackdropTransition = function () {
                        var e = this,
                            t = m["default"].Event(_n);
                        if (m["default"](this._element).trigger(t), !t.isDefaultPrevented()) {
                            var n = this._element.scrollHeight > document.documentElement.clientHeight;
                            n || (this._element.style.overflowY = "hidden"), this._element.classList.add(yn);
                            var i = _.getTransitionDurationFromElement(this._dialog);
                            m["default"](this._element).off(_.TRANSITION_END), m["default"](this._element).one(_.TRANSITION_END, function () {
                                e._element.classList.remove(yn), n || m["default"](e._element).one(_.TRANSITION_END, function () {
                                    e._element.style.overflowY = ""
                                }).emulateTransitionEnd(e._element, i)
                            }).emulateTransitionEnd(i), this._element.focus()
                        }
                    },
                    t._showElement = function (e) {
                        var t = this,
                            n = m["default"](this._element).hasClass(gn),
                            i = this._dialog ? this._dialog.querySelector(Nn) : null;
                        this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), m["default"](this._dialog).hasClass(hn) && i ? i.scrollTop = 0 : this._element.scrollTop = 0, n && _.reflow(this._element), m["default"](this._element).addClass(vn), this._config.focus && this._enforceFocus();
                        var r = m["default"].Event(Cn, {
                                relatedTarget: e
                            }),
                            a = function () {
                                t._config.focus && t._element.focus(), t._isTransitioning = !1, m["default"](t._element).trigger(r)
                            };
                        if (n) {
                            var o = _.getTransitionDurationFromElement(this._dialog);
                            m["default"](this._dialog).one(_.TRANSITION_END, a).emulateTransitionEnd(o)
                        } else a()
                    }, t._enforceFocus = function () {
                        var e = this;
                        m["default"](document).off(xn).on(xn, function (t) {
                            document !== t.target && e._element !== t.target && 0 === m["default"](e._element).has(t.target).length && e._element.focus()
                        })
                    }, t._setEscapeEvent = function () {
                        var e = this;
                        this._isShown ? m["default"](this._element).on(Tn, function (t) {
                            e._config.keyboard && t.which === dn ? (t.preventDefault(), e.hide()) : e._config.keyboard || t.which !== dn || e._triggerBackdropTransition()
                        }) : this._isShown || m["default"](this._element).off(Tn)
                    }, t._setResizeEvent = function () {
                        var e = this;
                        this._isShown ? m["default"](window).on(Dn, function (t) {
                            return e.handleUpdate(t)
                        }) : m["default"](window).off(Dn)
                    }, t._hideModal = function () {
                        var e = this;
                        this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._showBackdrop(function () {
                            m["default"](document.body).removeClass(mn), e._resetAdjustments(), e._resetScrollbar(), m["default"](e._element).trigger(wn)
                        })
                    }, t._removeBackdrop = function () {
                        this._backdrop && (m["default"](this._backdrop).remove(), this._backdrop = null)
                    }, t._showBackdrop = function (e) {
                        var t = this,
                            n = m["default"](this._element).hasClass(gn) ? gn : "";
                        if (this._isShown && this._config.backdrop) {
                            if (this._backdrop = document.createElement("div"), this._backdrop.className = fn, n && this._backdrop.classList.add(n), m["default"](this._backdrop).appendTo(document.body), m["default"](this._element).on(En, function (e) {
                                    t._ignoreBackdropClick ? t._ignoreBackdropClick = !1 : e.target === e.currentTarget && ("static" === t._config.backdrop ? t._triggerBackdropTransition() : t.hide())
                                }), n && _.reflow(this._backdrop), m["default"](this._backdrop).addClass(vn), !e) return;
                            if (!n) return void e();
                            var i = _.getTransitionDurationFromElement(this._backdrop);
                            m["default"](this._backdrop).one(_.TRANSITION_END, e).emulateTransitionEnd(i)
                        } else if (!this._isShown && this._backdrop) {
                            m["default"](this._backdrop).removeClass(vn);
                            var r = function () {
                                t._removeBackdrop(), e && e()
                            };
                            if (m["default"](this._element).hasClass(gn)) {
                                var a = _.getTransitionDurationFromElement(this._backdrop);
                                m["default"](this._backdrop).one(_.TRANSITION_END, r).emulateTransitionEnd(a)
                            } else r()
                        } else e && e()
                    }, t._adjustDialog = function () {
                        var e = this._element.scrollHeight > document.documentElement.clientHeight;
                        !this._isBodyOverflowing && e && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !e && (this._element.style.paddingRight = this._scrollbarWidth + "px")
                    }, t._resetAdjustments = function () {
                        this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
                    }, t._checkScrollbar = function () {
                        var e = document.body.getBoundingClientRect();
                        this._isBodyOverflowing = Math.round(e.left + e.right) < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
                    }, t._setScrollbar = function () {
                        var e = this;
                        if (this._isBodyOverflowing) {
                            var t = [].slice.call(document.querySelectorAll(Mn)),
                                n = [].slice.call(document.querySelectorAll(Ln));
                            m["default"](t).each(function (t, n) {
                                var i = n.style.paddingRight,
                                    r = m["default"](n).css("padding-right");
                                m["default"](n).data("padding-right", i).css("padding-right", parseFloat(r) + e._scrollbarWidth + "px")
                            }), m["default"](n).each(function (t, n) {
                                var i = n.style.marginRight,
                                    r = m["default"](n).css("margin-right");
                                m["default"](n).data("margin-right", i).css("margin-right", parseFloat(r) - e._scrollbarWidth + "px")
                            });
                            var i = document.body.style.paddingRight,
                                r = m["default"](document.body).css("padding-right");
                            m["default"](document.body).data("padding-right", i).css("padding-right", parseFloat(r) + this._scrollbarWidth + "px")
                        }
                        m["default"](document.body).addClass(mn)
                    }, t._resetScrollbar = function () {
                        var e = [].slice.call(document.querySelectorAll(Mn));
                        m["default"](e).each(function (e, t) {
                            var n = m["default"](t).data("padding-right");
                            m["default"](t).removeData("padding-right"), t.style.paddingRight = n || ""
                        });
                        var t = [].slice.call(document.querySelectorAll("" + Ln));
                        m["default"](t).each(function (e, t) {
                            var n = m["default"](t).data("margin-right");
                            void 0 !== n && m["default"](t).css("margin-right", n).removeData("margin-right")
                        });
                        var n = m["default"](document.body).data("padding-right");
                        m["default"](document.body).removeData("padding-right"), document.body.style.paddingRight = n || ""
                    }, t._getScrollbarWidth = function () {
                        var e = document.createElement("div");
                        e.className = pn, document.body.appendChild(e);
                        var t = e.getBoundingClientRect().width - e.clientWidth;
                        return document.body.removeChild(e), t
                    }, e._jQueryInterface = function (t, n) {
                        return this.each(function () {
                            var i = m["default"](this).data(sn),
                                r = o({}, On, m["default"](this).data(), "object" == typeof t && t ? t : {});
                            if (i || (i = new e(this, r), m["default"](this).data(sn, i)), "string" == typeof t) {
                                if ("undefined" == typeof i[t]) throw new TypeError('No method named "' + t + '"');
                                i[t](n)
                            } else r.show && i.show(n)
                        })
                    }, a(e, null, [{
                        key: "VERSION",
                        get: function () {
                            return on
                        }
                    }, {
                        key: "Default",
                        get: function () {
                            return On
                        }
                    }]), e
            }();
        m["default"](document).on(jn, In, function (e) {
            var t, n = this,
                i = _.getSelectorFromElement(this);
            i && (t = document.querySelector(i));
            var r = m["default"](t).data(sn) ? "toggle" : o({}, m["default"](t).data(), m["default"](this).data());
            "A" !== this.tagName && "AREA" !== this.tagName || e.preventDefault();
            var a = m["default"](t).one(kn, function (e) {
                e.isDefaultPrevented() || a.one(wn, function () {
                    m["default"](n).is(":visible") && n.focus()
                })
            });
            qn._jQueryInterface.call(m["default"](t), r, this)
        }), m["default"].fn[an] = qn._jQueryInterface, m["default"].fn[an].Constructor = qn, m["default"].fn[an].noConflict = function () {
            return m["default"].fn[an] = cn, qn._jQueryInterface
        };
        var Qn = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"],
            Rn = {
                "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
                a: ["target", "href", "title", "rel"],
                area: [],
                b: [],
                br: [],
                col: [],
                code: [],
                div: [],
                em: [],
                hr: [],
                h1: [],
                h2: [],
                h3: [],
                h4: [],
                h5: [],
                h6: [],
                i: [],
                img: ["src", "srcset", "alt", "title", "width", "height"],
                li: [],
                ol: [],
                p: [],
                pre: [],
                s: [],
                small: [],
                span: [],
                sub: [],
                sup: [],
                strong: [],
                u: [],
                ul: []
            },
            zn = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,
            Hn = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,
            Un = "tooltip",
            Bn = "4.6.2",
            Wn = "bs.tooltip",
            Yn = "." + Wn,
            Vn = m["default"].fn[Un],
            Kn = "bs-tooltip",
            Xn = new RegExp("(^|\\s)" + Kn + "\\S+", "g"),
            Gn = ["sanitize", "whiteList", "sanitizeFn"],
            Jn = "fade",
            Zn = "show",
            ei = "show",
            ti = "out",
            ni = ".tooltip-inner",
            ii = ".arrow",
            ri = "hover",
            ai = "focus",
            oi = "click",
            si = "manual",
            li = {
                AUTO: "auto",
                TOP: "top",
                RIGHT: "right",
                BOTTOM: "bottom",
                LEFT: "left"
            },
            ui = {
                animation: !0,
                template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
                trigger: "hover focus",
                title: "",
                delay: 0,
                html: !1,
                selector: !1,
                placement: "top",
                offset: 0,
                container: !1,
                fallbackPlacement: "flip",
                boundary: "scrollParent",
                customClass: "",
                sanitize: !0,
                sanitizeFn: null,
                whiteList: Rn,
                popperConfig: null
            },
            ci = {
                animation: "boolean",
                template: "string",
                title: "(string|element|function)",
                trigger: "string",
                delay: "(number|object)",
                html: "boolean",
                selector: "(string|boolean)",
                placement: "(string|function)",
                offset: "(number|string|function)",
                container: "(string|element|boolean)",
                fallbackPlacement: "(string|array)",
                boundary: "(string|element)",
                customClass: "(string|function)",
                sanitize: "boolean",
                sanitizeFn: "(null|function)",
                whiteList: "object",
                popperConfig: "(null|object)"
            },
            di = {
                HIDE: "hide" + Yn,
                HIDDEN: "hidden" + Yn,
                SHOW: "show" + Yn,
                SHOWN: "shown" + Yn,
                INSERTED: "inserted" + Yn,
                CLICK: "click" + Yn,
                FOCUSIN: "focusin" + Yn,
                FOCUSOUT: "focusout" + Yn,
                MOUSEENTER: "mouseenter" + Yn,
                MOUSELEAVE: "mouseleave" + Yn
            },
            hi = function () {
                function e(e, t) {
                    if ("undefined" == typeof g["default"]) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
                    this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = e, this.config = this._getConfig(t), this.tip = null, this._setListeners()
                }
                var t = e.prototype;
                return t.enable = function () {
                    this._isEnabled = !0
                }, t.disable = function () {
                    this._isEnabled = !1
                }, t.toggleEnabled = function () {
                    this._isEnabled = !this._isEnabled
                }, t.toggle = function (e) {
                    if (this._isEnabled)
                        if (e) {
                            var t = this.constructor.DATA_KEY,
                                n = m["default"](e.currentTarget).data(t);
                            n || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), m["default"](e.currentTarget).data(t, n)), n._activeTrigger.click = !n._activeTrigger.click, n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n)
                        } else {
                            if (m["default"](this.getTipElement()).hasClass(Zn)) return void this._leave(null, this);
                            this._enter(null, this)
                        }
                }, t.dispose = function () {
                    clearTimeout(this._timeout), m["default"].removeData(this.element, this.constructor.DATA_KEY), m["default"](this.element).off(this.constructor.EVENT_KEY), m["default"](this.element).closest(".modal").off("hide.bs.modal", this._hideModalHandler), this.tip && m["default"](this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null
                }, t.show = function () {
                    var e = this;
                    if ("none" === m["default"](this.element).css("display")) throw new Error("Please use show on visible elements");
                    var t = m["default"].Event(this.constructor.Event.SHOW);
                    if (this.isWithContent() && this._isEnabled) {
                        m["default"](this.element).trigger(t);
                        var n = _.findShadowRoot(this.element),
                            i = m["default"].contains(null !== n ? n : this.element.ownerDocument.documentElement, this.element);
                        if (t.isDefaultPrevented() || !i) return;
                        var r = this.getTipElement(),
                            a = _.getUID(this.constructor.NAME);
                        r.setAttribute("id", a), this.element.setAttribute("aria-describedby", a), this.setContent(), this.config.animation && m["default"](r).addClass(Jn);
                        var o = "function" == typeof this.config.placement ? this.config.placement.call(this, r, this.element) : this.config.placement,
                            s = this._getAttachment(o);
                        this.addAttachmentClass(s);
                        var l = this._getContainer();
                        m["default"](r).data(this.constructor.DATA_KEY, this), m["default"].contains(this.element.ownerDocument.documentElement, this.tip) || m["default"](r).appendTo(l), m["default"](this.element).trigger(this.constructor.Event.INSERTED), this._popper = new g["default"](this.element, r, this._getPopperConfig(s)), m["default"](r).addClass(Zn), m["default"](r).addClass(this.config.customClass), "ontouchstart" in document.documentElement && m["default"](document.body).children().on("mouseover", null, m["default"].noop);
                        var u = function () {
                            e.config.animation && e._fixTransition();
                            var t = e._hoverState;
                            e._hoverState = null, m["default"](e.element).trigger(e.constructor.Event.SHOWN), t === ti && e._leave(null, e)
                        };
                        if (m["default"](this.tip).hasClass(Jn)) {
                            var c = _.getTransitionDurationFromElement(this.tip);
                            m["default"](this.tip).one(_.TRANSITION_END, u).emulateTransitionEnd(c)
                        } else u()
                    }
                }, t.hide = function (e) {
                    var t = this,
                        n = this.getTipElement(),
                        i = m["default"].Event(this.constructor.Event.HIDE),
                        r = function () {
                            t._hoverState !== ei && n.parentNode && n.parentNode.removeChild(n), t._cleanTipClass(), t.element.removeAttribute("aria-describedby"), m["default"](t.element).trigger(t.constructor.Event.HIDDEN), null !== t._popper && t._popper.destroy(), e && e()
                        };
                    if (m["default"](this.element).trigger(i), !i.isDefaultPrevented()) {
                        if (m["default"](n).removeClass(Zn), "ontouchstart" in document.documentElement && m["default"](document.body).children().off("mouseover", null, m["default"].noop), this._activeTrigger[oi] = !1, this._activeTrigger[ai] = !1, this._activeTrigger[ri] = !1, m["default"](this.tip).hasClass(Jn)) {
                            var a = _.getTransitionDurationFromElement(n);
                            m["default"](n).one(_.TRANSITION_END, r).emulateTransitionEnd(a)
                        } else r();
                        this._hoverState = ""
                    }
                }, t.update = function () {
                    null !== this._popper && this._popper.scheduleUpdate()
                }, t.isWithContent = function () {
                    return Boolean(this.getTitle())
                }, t.addAttachmentClass = function (e) {
                    m["default"](this.getTipElement()).addClass(Kn + "-" + e)
                }, t.getTipElement = function () {
                    return this.tip = this.tip || m["default"](this.config.template)[0], this.tip
                }, t.setContent = function () {
                    var e = this.getTipElement();
                    this.setElementContent(m["default"](e.querySelectorAll(ni)), this.getTitle()), m["default"](e).removeClass(Jn + " " + Zn)
                }, t.setElementContent = function (e, t) {
                    "object" != typeof t || !t.nodeType && !t.jquery ? this.config.html ? (this.config.sanitize && (t = f(t, this.config.whiteList, this.config.sanitizeFn)), e.html(t)) : e.text(t) : this.config.html ? m["default"](t).parent().is(e) || e.empty().append(t) : e.text(m["default"](t).text())
                }, t.getTitle = function () {
                    var e = this.element.getAttribute("data-original-title");
                    return e || (e = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), e
                }, t._getPopperConfig = function (e) {
                    var t = this;
                    return o({}, {
                        placement: e,
                        modifiers: {
                            offset: this._getOffset(),
                            flip: {
                                behavior: this.config.fallbackPlacement
                            },
                            arrow: {
                                element: ii
                            },
                            preventOverflow: {
                                boundariesElement: this.config.boundary
                            }
                        },
                        onCreate: function (e) {
                            e.originalPlacement !== e.placement && t._handlePopperPlacementChange(e)
                        },
                        onUpdate: function (e) {
                            return t._handlePopperPlacementChange(e)
                        }
                    }, this.config.popperConfig)
                }, t._getOffset = function () {
                    var e = this,
                        t = {};
                    return "function" == typeof this.config.offset ? t.fn = function (t) {
                        return t.offsets = o({}, t.offsets, e.config.offset(t.offsets, e.element)), t
                    } : t.offset = this.config.offset, t
                }, t._getContainer = function () {
                    return !1 === this.config.container ? document.body : _.isElement(this.config.container) ? m["default"](this.config.container) : m["default"](document).find(this.config.container)
                }, t._getAttachment = function (e) {
                    return li[e.toUpperCase()]
                }, t._setListeners = function () {
                    var e = this;
                    this.config.trigger.split(" ").forEach(function (t) {
                        if ("click" === t) m["default"](e.element).on(e.constructor.Event.CLICK, e.config.selector, function (t) {
                            return e.toggle(t)
                        });
                        else if (t !== si) {
                            var n = t === ri ? e.constructor.Event.MOUSEENTER : e.constructor.Event.FOCUSIN,
                                i = t === ri ? e.constructor.Event.MOUSELEAVE : e.constructor.Event.FOCUSOUT;
                            m["default"](e.element).on(n, e.config.selector, function (t) {
                                return e._enter(t)
                            }).on(i, e.config.selector, function (t) {
                                return e._leave(t)
                            })
                        }
                    }), this._hideModalHandler = function () {
                        e.element && e.hide()
                    }, m["default"](this.element).closest(".modal").on("hide.bs.modal", this._hideModalHandler), this.config.selector ? this.config = o({}, this.config, {
                        trigger: "manual",
                        selector: ""
                    }) : this._fixTitle()
                }, t._fixTitle = function () {
                    var e = typeof this.element.getAttribute("data-original-title");
                    (this.element.getAttribute("title") || "string" !== e) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
                }, t._enter = function (e, t) {
                    var n = this.constructor.DATA_KEY;
                    (t = t || m["default"](e.currentTarget).data(n)) || (t = new this.constructor(e.currentTarget, this._getDelegateConfig()), m["default"](e.currentTarget).data(n, t)), e && (t._activeTrigger["focusin" === e.type ? ai : ri] = !0), m["default"](t.getTipElement()).hasClass(Zn) || t._hoverState === ei ? t._hoverState = ei : (clearTimeout(t._timeout), t._hoverState = ei, t.config.delay && t.config.delay.show ? t._timeout = setTimeout(function () {
                        t._hoverState === ei && t.show()
                    }, t.config.delay.show) : t.show())
                }, t._leave = function (e, t) {
                    var n = this.constructor.DATA_KEY;
                    (t = t || m["default"](e.currentTarget).data(n)) || (t = new this.constructor(e.currentTarget, this._getDelegateConfig()), m["default"](e.currentTarget).data(n, t)), e && (t._activeTrigger["focusout" === e.type ? ai : ri] = !1), t._isWithActiveTrigger() || (clearTimeout(t._timeout), t._hoverState = ti, t.config.delay && t.config.delay.hide ? t._timeout = setTimeout(function () {
                        t._hoverState === ti && t.hide()
                    }, t.config.delay.hide) : t.hide())
                }, t._isWithActiveTrigger = function () {
                    for (var e in this._activeTrigger)
                        if (this._activeTrigger[e]) return !0;
                    return !1
                }, t._getConfig = function (e) {
                    var t = m["default"](this.element).data();
                    return Object.keys(t).forEach(function (e) {
                        -1 !== Gn.indexOf(e) && delete t[e]
                    }), "number" == typeof (e = o({}, this.constructor.Default, t, "object" == typeof e && e ? e : {})).delay && (e.delay = {
                        show: e.delay,
                        hide: e.delay
                    }), "number" == typeof e.title && (e.title = e.title.toString()), "number" == typeof e.content && (e.content = e.content.toString()), _.typeCheckConfig(Un, e, this.constructor.DefaultType), e.sanitize && (e.template = f(e.template, e.whiteList, e.sanitizeFn)), e
                }, t._getDelegateConfig = function () {
                    var e = {};
                    if (this.config)
                        for (var t in this.config) this.constructor.Default[t] !== this.config[t] && (e[t] = this.config[t]);
                    return e
                }, t._cleanTipClass = function () {
                    var e = m["default"](this.getTipElement()),
                        t = e.attr("class").match(Xn);
                    null !== t && t.length && e.removeClass(t.join(""))
                }, t._handlePopperPlacementChange = function (e) {
                    this.tip = e.instance.popper, this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(e.placement))
                }, t._fixTransition = function () {
                    var e = this.getTipElement(),
                        t = this.config.animation;
                    null === e.getAttribute("x-placement") && (m["default"](e).removeClass(Jn), this.config.animation = !1, this.hide(), this.show(), this.config.animation = t)
                }, e._jQueryInterface = function (t) {
                    return this.each(function () {
                        var n = m["default"](this),
                            i = n.data(Wn),
                            r = "object" == typeof t && t;
                        if ((i || !/dispose|hide/.test(t)) && (i || (i = new e(this, r), n.data(Wn, i)), "string" == typeof t)) {
                            if ("undefined" == typeof i[t]) throw new TypeError('No method named "' + t + '"');
                            i[t]()
                        }
                    })
                }, a(e, null, [{
                    key: "VERSION",
                    get: function () {
                        return Bn
                    }
                }, {
                    key: "Default",
                    get: function () {
                        return ui
                    }
                }, {
                    key: "NAME",
                    get: function () {
                        return Un
                    }
                }, {
                    key: "DATA_KEY",
                    get: function () {
                        return Wn
                    }
                }, {
                    key: "Event",
                    get: function () {
                        return di
                    }
                }, {
                    key: "EVENT_KEY",
                    get: function () {
                        return Yn
                    }
                }, {
                    key: "DefaultType",
                    get: function () {
                        return ci
                    }
                }]), e
            }();
        m["default"].fn[Un] = hi._jQueryInterface, m["default"].fn[Un].Constructor = hi, m["default"].fn[Un].noConflict = function () {
            return m["default"].fn[Un] = Vn, hi._jQueryInterface
        };
        var pi = "popover",
            fi = "4.6.2",
            mi = "bs.popover",
            gi = "." + mi,
            vi = m["default"].fn[pi],
            yi = "bs-popover",
            bi = new RegExp("(^|\\s)" + yi + "\\S+", "g"),
            _i = "fade",
            wi = "show",
            ki = ".popover-header",
            Ci = ".popover-body",
            xi = o({}, hi.Default, {
                placement: "right",
                trigger: "click",
                content: "",
                template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
            }),
            Di = o({}, hi.DefaultType, {
                content: "(string|element|function)"
            }),
            Ei = {
                HIDE: "hide" + gi,
                HIDDEN: "hidden" + gi,
                SHOW: "show" + gi,
                SHOWN: "shown" + gi,
                INSERTED: "inserted" + gi,
                CLICK: "click" + gi,
                FOCUSIN: "focusin" + gi,
                FOCUSOUT: "focusout" + gi,
                MOUSEENTER: "mouseenter" + gi,
                MOUSELEAVE: "mouseleave" + gi
            },
            Ti = function (e) {
                function t() {
                    return e.apply(this, arguments) || this
                }
                s(t, e);
                var n = t.prototype;
                return n.isWithContent = function () {
                    return this.getTitle() || this._getContent()
                }, n.addAttachmentClass = function (e) {
                    m["default"](this.getTipElement()).addClass(yi + "-" + e)
                }, n.getTipElement = function () {
                    return this.tip = this.tip || m["default"](this.config.template)[0], this.tip
                }, n.setContent = function () {
                    var e = m["default"](this.getTipElement());
                    this.setElementContent(e.find(ki), this.getTitle());
                    var t = this._getContent();
                    "function" == typeof t && (t = t.call(this.element)), this.setElementContent(e.find(Ci), t), e.removeClass(_i + " " + wi)
                }, n._getContent = function () {
                    return this.element.getAttribute("data-content") || this.config.content
                }, n._cleanTipClass = function () {
                    var e = m["default"](this.getTipElement()),
                        t = e.attr("class").match(bi);
                    null !== t && t.length > 0 && e.removeClass(t.join(""))
                }, t._jQueryInterface = function (e) {
                    return this.each(function () {
                        var n = m["default"](this).data(mi),
                            i = "object" == typeof e ? e : null;
                        if ((n || !/dispose|hide/.test(e)) && (n || (n = new t(this, i), m["default"](this).data(mi, n)), "string" == typeof e)) {
                            if ("undefined" == typeof n[e]) throw new TypeError('No method named "' + e + '"');
                            n[e]()
                        }
                    })
                }, a(t, null, [{
                    key: "VERSION",
                    get: function () {
                        return fi
                    }
                }, {
                    key: "Default",
                    get: function () {
                        return xi
                    }
                }, {
                    key: "NAME",
                    get: function () {
                        return pi
                    }
                }, {
                    key: "DATA_KEY",
                    get: function () {
                        return mi
                    }
                }, {
                    key: "Event",
                    get: function () {
                        return Ei
                    }
                }, {
                    key: "EVENT_KEY",
                    get: function () {
                        return gi
                    }
                }, {
                    key: "DefaultType",
                    get: function () {
                        return Di
                    }
                }]), t
            }(hi);
        m["default"].fn[pi] = Ti._jQueryInterface, m["default"].fn[pi].Constructor = Ti, m["default"].fn[pi].noConflict = function () {
            return m["default"].fn[pi] = vi, Ti._jQueryInterface
        };
        var Si = "scrollspy",
            Fi = "4.6.2",
            ji = "bs.scrollspy",
            Ai = "." + ji,
            Ni = ".data-api",
            Ii = m["default"].fn[Si],
            $i = "dropdown-item",
            Mi = "active",
            Li = "activate" + Ai,
            Oi = "scroll" + Ai,
            Pi = "load" + Ai + Ni,
            qi = "offset",
            Qi = "position",
            Ri = '[data-spy="scroll"]',
            zi = ".nav, .list-group",
            Hi = ".nav-link",
            Ui = ".nav-item",
            Bi = ".list-group-item",
            Wi = ".dropdown",
            Yi = ".dropdown-item",
            Vi = ".dropdown-toggle",
            Ki = {
                offset: 10,
                method: "auto",
                target: ""
            },
            Xi = {
                offset: "number",
                method: "string",
                target: "(string|element)"
            },
            Gi = function () {
                function e(e, t) {
                    var n = this;
                    this._element = e, this._scrollElement = "BODY" === e.tagName ? window : e, this._config = this._getConfig(t), this._selector = this._config.target + " " + Hi + "," + this._config.target + " " + Bi + "," + this._config.target + " " + Yi, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, m["default"](this._scrollElement).on(Oi, function (e) {
                        return n._process(e)
                    }), this.refresh(), this._process()
                }
                var t = e.prototype;
                return t.refresh = function () {
                    var e = this,
                        t = this._scrollElement === this._scrollElement.window ? qi : Qi,
                        n = "auto" === this._config.method ? t : this._config.method,
                        i = n === Qi ? this._getScrollTop() : 0;
                    this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), [].slice.call(document.querySelectorAll(this._selector)).map(function (e) {
                        var t, r = _.getSelectorFromElement(e);
                        if (r && (t = document.querySelector(r)), t) {
                            var a = t.getBoundingClientRect();
                            if (a.width || a.height) return [m["default"](t)[n]().top + i, r]
                        }
                        return null
                    }).filter(Boolean).sort(function (e, t) {
                        return e[0] - t[0]
                    }).forEach(function (t) {
                        e._offsets.push(t[0]), e._targets.push(t[1])
                    })
                }, t.dispose = function () {
                    m["default"].removeData(this._element, ji), m["default"](this._scrollElement).off(Ai), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
                }, t._getConfig = function (e) {
                    if ("string" != typeof (e = o({}, Ki, "object" == typeof e && e ? e : {})).target && _.isElement(e.target)) {
                        var t = m["default"](e.target).attr("id");
                        t || (t = _.getUID(Si), m["default"](e.target).attr("id", t)), e.target = "#" + t
                    }
                    return _.typeCheckConfig(Si, e, Xi), e
                }, t._getScrollTop = function () {
                    return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
                }, t._getScrollHeight = function () {
                    return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
                }, t._getOffsetHeight = function () {
                    return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
                }, t._process = function () {
                    var e = this._getScrollTop() + this._config.offset,
                        t = this._getScrollHeight(),
                        n = this._config.offset + t - this._getOffsetHeight();
                    if (this._scrollHeight !== t && this.refresh(), e >= n) {
                        var i = this._targets[this._targets.length - 1];
                        this._activeTarget !== i && this._activate(i)
                    } else {
                        if (this._activeTarget && e < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();
                        for (var r = this._offsets.length; r--;) {
                            this._activeTarget !== this._targets[r] && e >= this._offsets[r] && ("undefined" == typeof this._offsets[r + 1] || e < this._offsets[r + 1]) && this._activate(this._targets[r])
                        }
                    }
                }, t._activate = function (e) {
                    this._activeTarget = e, this._clear();
                    var t = this._selector.split(",").map(function (t) {
                            return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]'
                        }),
                        n = m["default"]([].slice.call(document.querySelectorAll(t.join(","))));
                    n.hasClass($i) ? (n.closest(Wi).find(Vi).addClass(Mi), n.addClass(Mi)) : (n.addClass(Mi), n.parents(zi).prev(Hi + ", " + Bi).addClass(Mi), n.parents(zi).prev(Ui).children(Hi).addClass(Mi)), m["default"](this._scrollElement).trigger(Li, {
                        relatedTarget: e
                    })
                }, t._clear = function () {
                    [].slice.call(document.querySelectorAll(this._selector)).filter(function (e) {
                        return e.classList.contains(Mi)
                    }).forEach(function (e) {
                        return e.classList.remove(Mi)
                    })
                }, e._jQueryInterface = function (t) {
                    return this.each(function () {
                        var n = m["default"](this).data(ji);
                        if (n || (n = new e(this, "object" == typeof t && t), m["default"](this).data(ji, n)), "string" == typeof t) {
                            if ("undefined" == typeof n[t]) throw new TypeError('No method named "' + t + '"');
                            n[t]()
                        }
                    })
                }, a(e, null, [{
                    key: "VERSION",
                    get: function () {
                        return Fi
                    }
                }, {
                    key: "Default",
                    get: function () {
                        return Ki
                    }
                }]), e
            }();
        m["default"](window).on(Pi, function () {
            for (var e = [].slice.call(document.querySelectorAll(Ri)), t = e.length; t--;) {
                var n = m["default"](e[t]);
                Gi._jQueryInterface.call(n, n.data())
            }
        }), m["default"].fn[Si] = Gi._jQueryInterface, m["default"].fn[Si].Constructor = Gi, m["default"].fn[Si].noConflict = function () {
            return m["default"].fn[Si] = Ii, Gi._jQueryInterface
        };
        var Ji = "tab",
            Zi = "4.6.2",
            er = "bs.tab",
            tr = "." + er,
            nr = ".data-api",
            ir = m["default"].fn[Ji],
            rr = "dropdown-menu",
            ar = "active",
            or = "disabled",
            sr = "fade",
            lr = "show",
            ur = "hide" + tr,
            cr = "hidden" + tr,
            dr = "show" + tr,
            hr = "shown" + tr,
            pr = "click" + tr + nr,
            fr = ".dropdown",
            mr = ".nav, .list-group",
            gr = ".active",
            vr = "> li > .active",
            yr = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
            br = ".dropdown-toggle",
            _r = "> .dropdown-menu .active",
            wr = function () {
                function e(e) {
                    this._element = e
                }
                var t = e.prototype;
                return t.show = function () {
                    var e = this;
                    if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && m["default"](this._element).hasClass(ar) || m["default"](this._element).hasClass(or) || this._element.hasAttribute("disabled"))) {
                        var t, n, i = m["default"](this._element).closest(mr)[0],
                            r = _.getSelectorFromElement(this._element);
                        if (i) {
                            var a = "UL" === i.nodeName || "OL" === i.nodeName ? vr : gr;
                            n = (n = m["default"].makeArray(m["default"](i).find(a)))[n.length - 1]
                        }
                        var o = m["default"].Event(ur, {
                                relatedTarget: this._element
                            }),
                            s = m["default"].Event(dr, {
                                relatedTarget: n
                            });
                        if (n && m["default"](n).trigger(o), m["default"](this._element).trigger(s), !s.isDefaultPrevented() && !o.isDefaultPrevented()) {
                            r && (t = document.querySelector(r)), this._activate(this._element, i);
                            var l = function () {
                                var t = m["default"].Event(cr, {
                                        relatedTarget: e._element
                                    }),
                                    i = m["default"].Event(hr, {
                                        relatedTarget: n
                                    });
                                m["default"](n).trigger(t), m["default"](e._element).trigger(i)
                            };
                            t ? this._activate(t, t.parentNode, l) : l()
                        }
                    }
                }, t.dispose = function () {
                    m["default"].removeData(this._element, er), this._element = null
                }, t._activate = function (e, t, n) {
                    var i = this,
                        r = (!t || "UL" !== t.nodeName && "OL" !== t.nodeName ? m["default"](t).children(gr) : m["default"](t).find(vr))[0],
                        a = n && r && m["default"](r).hasClass(sr),
                        o = function () {
                            return i._transitionComplete(e, r, n)
                        };
                    if (r && a) {
                        var s = _.getTransitionDurationFromElement(r);
                        m["default"](r).removeClass(lr).one(_.TRANSITION_END, o).emulateTransitionEnd(s)
                    } else o()
                }, t._transitionComplete = function (e, t, n) {
                    if (t) {
                        m["default"](t).removeClass(ar);
                        var i = m["default"](t.parentNode).find(_r)[0];
                        i && m["default"](i).removeClass(ar), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !1)
                    }
                    m["default"](e).addClass(ar), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0), _.reflow(e), e.classList.contains(sr) && e.classList.add(lr);
                    var r = e.parentNode;
                    if (r && "LI" === r.nodeName && (r = r.parentNode), r && m["default"](r).hasClass(rr)) {
                        var a = m["default"](e).closest(fr)[0];
                        if (a) {
                            var o = [].slice.call(a.querySelectorAll(br));
                            m["default"](o).addClass(ar)
                        }
                        e.setAttribute("aria-expanded", !0)
                    }
                    n && n()
                }, e._jQueryInterface = function (t) {
                    return this.each(function () {
                        var n = m["default"](this),
                            i = n.data(er);
                        if (i || (i = new e(this), n.data(er, i)), "string" == typeof t) {
                            if ("undefined" == typeof i[t]) throw new TypeError('No method named "' + t + '"');
                            i[t]()
                        }
                    })
                }, a(e, null, [{
                    key: "VERSION",
                    get: function () {
                        return Zi
                    }
                }]), e
            }();
        m["default"](document).on(pr, yr, function (e) {
            e.preventDefault(), wr._jQueryInterface.call(m["default"](this), "show")
        }), m["default"].fn[Ji] = wr._jQueryInterface, m["default"].fn[Ji].Constructor = wr, m["default"].fn[Ji].noConflict = function () {
            return m["default"].fn[Ji] = ir, wr._jQueryInterface
        };
        var kr = "toast",
            Cr = "4.6.2",
            xr = "bs.toast",
            Dr = "." + xr,
            Er = m["default"].fn[kr],
            Tr = "fade",
            Sr = "hide",
            Fr = "show",
            jr = "showing",
            Ar = "click.dismiss" + Dr,
            Nr = "hide" + Dr,
            Ir = "hidden" + Dr,
            $r = "show" + Dr,
            Mr = "shown" + Dr,
            Lr = '[data-dismiss="toast"]',
            Or = {
                animation: !0,
                autohide: !0,
                delay: 500
            },
            Pr = {
                animation: "boolean",
                autohide: "boolean",
                delay: "number"
            },
            qr = function () {
                function e(e, t) {
                    this._element = e, this._config = this._getConfig(t), this._timeout = null, this._setListeners()
                }
                var t = e.prototype;
                return t.show = function () {
                    var e = this,
                        t = m["default"].Event($r);
                    if (m["default"](this._element).trigger(t), !t.isDefaultPrevented()) {
                        this._clearTimeout(), this._config.animation && this._element.classList.add(Tr);
                        var n = function () {
                            e._element.classList.remove(jr), e._element.classList.add(Fr), m["default"](e._element).trigger(Mr), e._config.autohide && (e._timeout = setTimeout(function () {
                                e.hide()
                            }, e._config.delay))
                        };
                        if (this._element.classList.remove(Sr), _.reflow(this._element), this._element.classList.add(jr), this._config.animation) {
                            var i = _.getTransitionDurationFromElement(this._element);
                            m["default"](this._element).one(_.TRANSITION_END, n).emulateTransitionEnd(i)
                        } else n()
                    }
                }, t.hide = function () {
                    if (this._element.classList.contains(Fr)) {
                        var e = m["default"].Event(Nr);
                        m["default"](this._element).trigger(e), e.isDefaultPrevented() || this._close()
                    }
                }, t.dispose = function () {
                    this._clearTimeout(), this._element.classList.contains(Fr) && this._element.classList.remove(Fr), m["default"](this._element).off(Ar), m["default"].removeData(this._element, xr), this._element = null, this._config = null
                }, t._getConfig = function (e) {
                    return e = o({}, Or, m["default"](this._element).data(), "object" == typeof e && e ? e : {}), _.typeCheckConfig(kr, e, this.constructor.DefaultType), e
                }, t._setListeners = function () {
                    var e = this;
                    m["default"](this._element).on(Ar, Lr, function () {
                        return e.hide()
                    })
                }, t._close = function () {
                    var e = this,
                        t = function () {
                            e._element.classList.add(Sr), m["default"](e._element).trigger(Ir)
                        };
                    if (this._element.classList.remove(Fr), this._config.animation) {
                        var n = _.getTransitionDurationFromElement(this._element);
                        m["default"](this._element).one(_.TRANSITION_END, t).emulateTransitionEnd(n)
                    } else t()
                }, t._clearTimeout = function () {
                    clearTimeout(this._timeout), this._timeout = null
                }, e._jQueryInterface = function (t) {
                    return this.each(function () {
                        var n = m["default"](this),
                            i = n.data(xr);
                        if (i || (i = new e(this, "object" == typeof t && t), n.data(xr, i)), "string" == typeof t) {
                            if ("undefined" == typeof i[t]) throw new TypeError('No method named "' + t + '"');
                            i[t](this)
                        }
                    })
                }, a(e, null, [{
                    key: "VERSION",
                    get: function () {
                        return Cr
                    }
                }, {
                    key: "DefaultType",
                    get: function () {
                        return Pr
                    }
                }, {
                    key: "Default",
                    get: function () {
                        return Or
                    }
                }]), e
            }();
        m["default"].fn[kr] = qr._jQueryInterface, m["default"].fn[kr].Constructor = qr, m["default"].fn[kr].noConflict = function () {
            return m["default"].fn[kr] = Er, qr._jQueryInterface
        }, e.Alert = $, e.Button = ee, e.Carousel = Ye, e.Collapse = mt, e.Dropdown = rn, e.Modal = qn, e.Popover = Ti, e.Scrollspy = Gi, e.Tab = wr, e.Toast = qr, e.Tooltip = hi, e.Util = _, Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }),
    /*! X-editable - v1.5.1 
     * In-place editing with Twitter Bootstrap, jQuery UI or pure jQuery
     * http://github.com/vitalets/x-editable
     * Copyright (c) 2013 Vitaliy Potapov; Licensed MIT */
    function (e) {
        "use strict";
        var t = function (t, n) {
            this.options = e.extend({}, e.fn.editableform.defaults, n), this.$div = e(t), this.options.scope || (this.options.scope = this)
        };
        t.prototype = {
            constructor: t,
            initInput: function () {
                this.input = this.options.input, this.value = this.input.str2value(this.options.value), this.input.prerender()
            },
            initTemplate: function () {
                this.$form = e(e.fn.editableform.template)
            },
            initButtons: function () {
                var t = this.$form.find(".editable-buttons");
                t.append(e.fn.editableform.buttons), "bottom" === this.options.showbuttons && t.addClass("editable-buttons-bottom")
            },
            render: function () {
                this.$loading = e(e.fn.editableform.loading), this.$div.empty().append(this.$loading), this.initTemplate(), this.options.showbuttons ? this.initButtons() : this.$form.find(".editable-buttons").remove(), this.showLoading(), this.isSaving = !1, this.$div.triggerHandler("rendering"), this.initInput(), this.$form.find("div.editable-input").append(this.input.$tpl), this.$div.append(this.$form), e.when(this.input.render()).then(e.proxy(function () {
                    if (this.options.showbuttons || this.input.autosubmit(), this.$form.find(".editable-cancel").click(e.proxy(this.cancel, this)), this.input.error) this.error(this.input.error), this.$form.find(".editable-submit").attr("disabled", !0), this.input.$input.attr("disabled", !0), this.$form.submit(function (e) {
                        e.preventDefault()
                    });
                    else {
                        this.error(!1), this.input.$input.removeAttr("disabled"), this.$form.find(".editable-submit").removeAttr("disabled");
                        var t = null === this.value || this.value === undefined || "" === this.value ? this.options.defaultValue : this.value;
                        this.input.value2input(t), this.$form.submit(e.proxy(this.submit, this))
                    }
                    this.$div.triggerHandler("rendered"), this.showForm(), this.input.postrender && this.input.postrender()
                }, this))
            },
            cancel: function () {
                this.$div.triggerHandler("cancel")
            },
            showLoading: function () {
                var e, t;
                this.$form ? (e = this.$form.outerWidth(), t = this.$form.outerHeight(), e && this.$loading.width(e), t && this.$loading.height(t), this.$form.hide()) : (e = this.$loading.parent().width()) && this.$loading.width(e), this.$loading.show()
            },
            showForm: function (e) {
                this.$loading.hide(), this.$form.show(), !1 !== e && this.input.activate(), this.$div.triggerHandler("show")
            },
            error: function (t) {
                var n, i = this.$form.find(".control-group"),
                    r = this.$form.find(".editable-error-block");
                if (!1 === t) i.removeClass(e.fn.editableform.errorGroupClass), r.removeClass(e.fn.editableform.errorBlockClass).empty().hide();
                else {
                    if (t) {
                        n = ("" + t).split("\n");
                        for (var a = 0; a < n.length; a++) n[a] = e("<div>").text(n[a]).html();
                        t = n.join("<br>")
                    }
                    i.addClass(e.fn.editableform.errorGroupClass), r.addClass(e.fn.editableform.errorBlockClass).html(t).show()
                }
            },
            submit: function (t) {
                t.stopPropagation(), t.preventDefault();
                var n = this.input.input2value(),
                    i = this.validate(n);
                if ("object" === e.type(i) && i.newValue !== undefined) {
                    if (n = i.newValue, this.input.value2input(n), "string" == typeof i.msg) return this.error(i.msg), void this.showForm()
                } else if (i) return this.error(i), void this.showForm();
                if (this.options.savenochange || this.input.value2str(n) != this.input.value2str(this.value)) {
                    var r = this.input.value2submit(n);
                    this.isSaving = !0, e.when(this.save(r)).done(e.proxy(function (e) {
                        this.isSaving = !1;
                        var t = "function" == typeof this.options.success ? this.options.success.call(this.options.scope, e, n) : null;
                        return !1 === t ? (this.error(!1), void this.showForm(!1)) : "string" == typeof t ? (this.error(t), void this.showForm()) : (t && "object" == typeof t && t.hasOwnProperty("newValue") && (n = t.newValue), this.error(!1), this.value = n, void this.$div.triggerHandler("save", {
                            newValue: n,
                            submitValue: r,
                            response: e
                        }))
                    }, this)).fail(e.proxy(function (e) {
                        var t;
                        this.isSaving = !1, t = "function" == typeof this.options.error ? this.options.error.call(this.options.scope, e, n) : "string" == typeof e ? e : e.responseText || e.statusText || "Unknown error!", this.error(t), this.showForm()
                    }, this))
                } else this.$div.triggerHandler("nochange")
            },
            save: function (t) {
                this.options.pk = e.fn.editableutils.tryParseJson(this.options.pk, !0);
                var n, i = "function" == typeof this.options.pk ? this.options.pk.call(this.options.scope) : this.options.pk;
                if (!!("function" == typeof this.options.url || this.options.url && ("always" === this.options.send || "auto" === this.options.send && null !== i && i !== undefined))) return this.showLoading(), n = {
                    name: this.options.name || "",
                    value: t,
                    pk: i
                }, "function" == typeof this.options.params ? n = this.options.params.call(this.options.scope, n) : (this.options.params = e.fn.editableutils.tryParseJson(this.options.params, !0), e.extend(n, this.options.params)), "function" == typeof this.options.url ? this.options.url.call(this.options.scope, n) : e.ajax(e.extend({
                    url: this.options.url,
                    data: n,
                    type: "POST"
                }, this.options.ajaxOptions))
            },
            validate: function (e) {
                if (e === undefined && (e = this.value), "function" == typeof this.options.validate) return this.options.validate.call(this.options.scope, e)
            },
            option: function (e, t) {
                e in this.options && (this.options[e] = t), "value" === e && this.setValue(t)
            },
            setValue: function (e, t) {
                this.value = t ? this.input.str2value(e) : e, this.$form && this.$form.is(":visible") && this.input.value2input(this.value)
            }
        }, e.fn.editableform = function (n) {
            var i = arguments;
            return this.each(function () {
                var r = e(this),
                    a = r.data("editableform"),
                    o = "object" == typeof n && n;
                a || r.data("editableform", a = new t(this, o)), "string" == typeof n && a[n].apply(a, Array.prototype.slice.call(i, 1))
            })
        }, e.fn.editableform.Constructor = t, e.fn.editableform.defaults = {
            type: "text",
            url: null,
            params: null,
            name: null,
            pk: null,
            value: null,
            defaultValue: null,
            send: "auto",
            validate: null,
            success: null,
            error: null,
            ajaxOptions: null,
            showbuttons: !0,
            scope: null,
            savenochange: !1
        }, e.fn.editableform.template = '<form class="form-inline editableform"><div class="control-group"><div><div class="editable-input"></div><div class="editable-buttons"></div></div><div class="editable-error-block"></div></div></form>', e.fn.editableform.loading = '<div class="editableform-loading"></div>', e.fn.editableform.buttons = '<button type="submit" class="editable-submit">ok</button><button type="button" class="editable-cancel">cancel</button>', e.fn.editableform.errorGroupClass = null, e.fn.editableform.errorBlockClass = "editable-error", e.fn.editableform.engine = "jquery"
    }(window.jQuery),
    function (e) {
        "use strict";
        e.fn.editableutils = {
            inherit: function (e, t) {
                var n = function () {};
                n.prototype = t.prototype, e.prototype = new n, e.prototype.constructor = e, e.superclass = t.prototype
            },
            setCursorPosition: function (e, t) {
                if (e.setSelectionRange) e.setSelectionRange(t, t);
                else if (e.createTextRange) {
                    var n = e.createTextRange();
                    n.collapse(!0), n.moveEnd("character", t), n.moveStart("character", t), n.select()
                }
            },
            tryParseJson: function (e, t) {
                if ("string" == typeof e && e.length && e.match(/^[\{\[].*[\}\]]$/))
                    if (t) try {
                        e = new Function("return " + e)()
                    } catch (n) {} finally {
                        return e
                    } else e = new Function("return " + e)();
                return e
            },
            sliceObj: function (t, n, i) {
                var r, a, o = {};
                if (!e.isArray(n) || !n.length) return o;
                for (var s = 0; s < n.length; s++) r = n[s], t.hasOwnProperty(r) && (o[r] = t[r]), !0 !== i && (a = r.toLowerCase(), t.hasOwnProperty(a) && (o[r] = t[a]));
                return o
            },
            getConfigData: function (t) {
                var n = {};
                return e.each(t.data(), function (e, t) {
                    ("object" != typeof t || t && "object" == typeof t && (t.constructor === Object || t.constructor === Array)) && (n[e] = t)
                }), n
            },
            objectKeys: function (e) {
                if (Object.keys) return Object.keys(e);
                if (e !== Object(e)) throw new TypeError("Object.keys called on a non-object");
                var t, n = [];
                for (t in e) Object.prototype.hasOwnProperty.call(e, t) && n.push(t);
                return n
            },
            escape: function (t) {
                return e("<div>").text(t).html()
            },
            itemsByValue: function (t, n, i) {
                if (!n || null === t) return [];
                if ("function" != typeof i) {
                    var r = i || "value";
                    i = function (e) {
                        return e[r]
                    }
                }
                var a = e.isArray(t),
                    o = [],
                    s = this;
                return e.each(n, function (n, r) {
                    if (r.children) o = o.concat(s.itemsByValue(t, r.children, i));
                    else if (a) e.grep(t, function (e) {
                        return e == (r && "object" == typeof r ? i(r) : r)
                    }).length && o.push(r);
                    else {
                        var l = r && "object" == typeof r ? i(r) : r;
                        t == l && o.push(r)
                    }
                }), o
            },
            createInput: function (t) {
                var n, i = t.type;
                return "date" === i && ("inline" === t.mode ? e.fn.editabletypes.datefield ? i = "datefield" : e.fn.editabletypes.dateuifield && (i = "dateuifield") : e.fn.editabletypes.date ? i = "date" : e.fn.editabletypes.dateui && (i = "dateui"), "date" !== i || e.fn.editabletypes.date || (i = "combodate")), "datetime" === i && "inline" === t.mode && (i = "datetimefield"), "wysihtml5" !== i || e.fn.editabletypes[i] || (i = "textarea"), "function" == typeof e.fn.editabletypes[i] ? new(n = e.fn.editabletypes[i])(this.sliceObj(t, this.objectKeys(n.defaults))) : (e.error("Unknown type: " + i), !1)
            },
            supportsTransitions: function () {
                var e = (document.body || document.documentElement).style,
                    t = "transition",
                    n = ["Moz", "Webkit", "Khtml", "O", "ms"];
                if ("string" == typeof e[t]) return !0;
                t = t.charAt(0).toUpperCase() + t.substr(1);
                for (var i = 0; i < n.length; i++)
                    if ("string" == typeof e[n[i] + t]) return !0;
                return !1
            }
        }
    }(window.jQuery),
    function (e) {
        "use strict";
        var t = function (e, t) {
                this.init(e, t)
            },
            n = function (e, t) {
                this.init(e, t)
            };
        t.prototype = {
            containerName: null,
            containerDataName: null,
            innerCss: null,
            containerClass: "editable-container editable-popup",
            defaults: {},
            init: function (n, i) {
                this.$element = e(n), this.options = e.extend({}, e.fn.editableContainer.defaults, i), this.splitOptions(), this.formOptions.scope = this.$element[0], this.initContainer(), this.delayedHide = !1, this.$element.on("destroyed", e.proxy(function () {
                    this.destroy()
                }, this)), e(document).data("editable-handlers-attached") || (e(document).on("keyup.editable", function (t) {
                    27 === t.which && e(".editable-open").editableContainer("hide")
                }), e(document).on("click.editable", function (n) {
                    var i, r = e(n.target),
                        a = [".editable-container", ".ui-datepicker-header", ".datepicker", ".modal-backdrop", ".bootstrap-wysihtml5-insert-image-modal", ".bootstrap-wysihtml5-insert-link-modal"];
                    if (e.contains(document.documentElement, n.target) && !r.is(document)) {
                        for (i = 0; i < a.length; i++)
                            if (r.is(a[i]) || r.parents(a[i]).length) return;
                        t.prototype.closeOthers(n.target)
                    }
                }), e(document).data("editable-handlers-attached", !0))
            },
            splitOptions: function () {
                if (this.containerOptions = {}, this.formOptions = {}, !e.fn[this.containerName]) throw new Error(this.containerName + " not found. Have you included corresponding js file?");
                for (var t in this.options) t in this.defaults ? this.containerOptions[t] = this.options[t] : this.formOptions[t] = this.options[t]
            },
            tip: function () {
                return this.container() ? this.container().$tip : null
            },
            container: function () {
                var e;
                return this.containerDataName && (e = this.$element.data(this.containerDataName)) ? e : e = this.$element.data(this.containerName)
            },
            call: function () {
                this.$element[this.containerName].apply(this.$element, arguments)
            },
            initContainer: function () {
                this.call(this.containerOptions)
            },
            renderForm: function () {
                this.$form.editableform(this.formOptions).on({
                    save: e.proxy(this.save, this),
                    nochange: e.proxy(function () {
                        this.hide("nochange")
                    }, this),
                    cancel: e.proxy(function () {
                        this.hide("cancel")
                    }, this),
                    show: e.proxy(function () {
                        this.delayedHide ? (this.hide(this.delayedHide.reason), this.delayedHide = !1) : this.setPosition()
                    }, this),
                    rendering: e.proxy(this.setPosition, this),
                    resize: e.proxy(this.setPosition, this),
                    rendered: e.proxy(function () {
                        this.$element.triggerHandler("shown", e(this.options.scope).data("editable"))
                    }, this)
                }).editableform("render")
            },
            show: function (t) {
                this.$element.addClass("editable-open"), !1 !== t && this.closeOthers(this.$element[0]), this.innerShow(), this.tip().addClass(this.containerClass), this.$form, this.$form = e("<div>"), this.tip().is(this.innerCss) ? this.tip().append(this.$form) : this.tip().find(this.innerCss).append(this.$form), this.renderForm()
            },
            hide: function (e) {
                this.tip() && this.tip().is(":visible") && this.$element.hasClass("editable-open") && (this.$form.data("editableform").isSaving ? this.delayedHide = {
                    reason: e
                } : (this.delayedHide = !1, this.$element.removeClass("editable-open"), this.innerHide(), this.$element.triggerHandler("hidden", e || "manual")))
            },
            innerShow: function () {},
            innerHide: function () {},
            toggle: function (e) {
                this.container() && this.tip() && this.tip().is(":visible") ? this.hide() : this.show(e)
            },
            setPosition: function () {},
            save: function (e, t) {
                this.$element.triggerHandler("save", t), this.hide("save")
            },
            option: function (e, t) {
                this.options[e] = t, e in this.containerOptions ? (this.containerOptions[e] = t, this.setContainerOption(e, t)) : (this.formOptions[e] = t, this.$form && this.$form.editableform("option", e, t))
            },
            setContainerOption: function (e, t) {
                this.call("option", e, t)
            },
            destroy: function () {
                this.hide(), this.innerDestroy(), this.$element.off("destroyed"), this.$element.removeData("editableContainer")
            },
            innerDestroy: function () {},
            closeOthers: function (t) {
                e(".editable-open").each(function (n, i) {
                    if (i !== t && !e(i).find(t).length) {
                        var r = e(i),
                            a = r.data("editableContainer");
                        a && ("cancel" === a.options.onblur ? r.data("editableContainer").hide("onblur") : "submit" === a.options.onblur && r.data("editableContainer").tip().find("form").submit())
                    }
                })
            },
            activate: function () {
                this.tip && this.tip().is(":visible") && this.$form && this.$form.data("editableform").input.activate()
            }
        }, e.fn.editableContainer = function (i) {
            var r = arguments;
            return this.each(function () {
                var a = e(this),
                    o = "editableContainer",
                    s = a.data(o),
                    l = "object" == typeof i && i,
                    u = "inline" === l.mode ? n : t;
                s || a.data(o, s = new u(this, l)), "string" == typeof i && s[i].apply(s, Array.prototype.slice.call(r, 1))
            })
        }, e.fn.editableContainer.Popup = t, e.fn.editableContainer.Inline = n, e.fn.editableContainer.defaults = {
            value: null,
            placement: "top",
            autohide: !0,
            onblur: "cancel",
            anim: !1,
            mode: "popup"
        }, jQuery.event.special.destroyed = {
            remove: function (e) {
                e.handler && e.handler()
            }
        }
    }(window.jQuery),
    function (e) {
        "use strict";
        e.extend(e.fn.editableContainer.Inline.prototype, e.fn.editableContainer.Popup.prototype, {
            containerName: "editableform",
            innerCss: ".editable-inline",
            containerClass: "editable-container editable-inline",
            initContainer: function () {
                this.$tip = e("<span></span>"), this.options.anim || (this.options.anim = 0)
            },
            splitOptions: function () {
                this.containerOptions = {}, this.formOptions = this.options
            },
            tip: function () {
                return this.$tip
            },
            innerShow: function () {
                this.$element.hide(), this.tip().insertAfter(this.$element).show()
            },
            innerHide: function () {
                this.$tip.hide(this.options.anim, e.proxy(function () {
                    this.$element.show(), this.innerDestroy()
                }, this))
            },
            innerDestroy: function () {
                this.tip() && this.tip().empty().remove()
            }
        })
    }(window.jQuery),
    function (e) {
        "use strict";
        var t = function (t, n) {
            this.$element = e(t), this.options = e.extend({}, e.fn.editable.defaults, n, e.fn.editableutils.getConfigData(this.$element)), this.options.selector ? this.initLive() : this.init(), this.options.highlight && !e.fn.editableutils.supportsTransitions() && (this.options.highlight = !1)
        };
        t.prototype = {
            constructor: t,
            init: function () {
                var t, n = !1;
                if (this.options.name = this.options.name || this.$element.attr("id"), this.options.scope = this.$element[0], this.input = e.fn.editableutils.createInput(this.options), this.input) {
                    switch (this.options.value === undefined || null === this.options.value ? (this.value = this.input.html2value(e.trim(this.$element.html())), n = !0) : (this.options.value = e.fn.editableutils.tryParseJson(this.options.value, !0), "string" == typeof this.options.value ? this.value = this.input.str2value(this.options.value) : this.value = this.options.value), this.$element.addClass("editable"), "textarea" === this.input.type && this.$element.addClass("editable-pre-wrapped"), "manual" !== this.options.toggle ? (this.$element.addClass("editable-click"), this.$element.on(this.options.toggle + ".editable", e.proxy(function (e) {
                        if (this.options.disabled || e.preventDefault(), "mouseenter" === this.options.toggle) this.show();
                        else {
                            var t = "click" !== this.options.toggle;
                            this.toggle(t)
                        }
                    }, this))) : this.$element.attr("tabindex", -1), "function" == typeof this.options.display && (this.options.autotext = "always"), this.options.autotext) {
                        case "always":
                            t = !0;
                            break;
                        case "auto":
                            t = !e.trim(this.$element.text()).length && null !== this.value && this.value !== undefined && !n;
                            break;
                        default:
                            t = !1
                    }
                    e.when(!t || this.render()).then(e.proxy(function () {
                        this.options.disabled ? this.disable() : this.enable(), this.$element.triggerHandler("init", this)
                    }, this))
                }
            },
            initLive: function () {
                var t = this.options.selector;
                this.options.selector = !1, this.options.autotext = "never", this.$element.on(this.options.toggle + ".editable", t, e.proxy(function (t) {
                    var n = e(t.target);
                    n.data("editable") || (n.hasClass(this.options.emptyclass) && n.empty(), n.editable(this.options).trigger(t))
                }, this))
            },
            render: function (e) {
                if (!1 !== this.options.display) return this.input.value2htmlFinal ? this.input.value2html(this.value, this.$element[0], this.options.display, e) : "function" == typeof this.options.display ? this.options.display.call(this.$element[0], this.value, e) : this.input.value2html(this.value, this.$element[0])
            },
            enable: function () {
                this.options.disabled = !1, this.$element.removeClass("editable-disabled"), this.handleEmpty(this.isEmpty), "manual" !== this.options.toggle && "-1" === this.$element.attr("tabindex") && this.$element.removeAttr("tabindex")
            },
            disable: function () {
                this.options.disabled = !0, this.hide(), this.$element.addClass("editable-disabled"), this.handleEmpty(this.isEmpty), this.$element.attr("tabindex", -1)
            },
            toggleDisabled: function () {
                this.options.disabled ? this.enable() : this.disable()
            },
            option: function (t, n) {
                if (t && "object" == typeof t) e.each(t, e.proxy(function (t, n) {
                    this.option(e.trim(t), n)
                }, this));
                else {
                    if (this.options[t] = n, "disabled" === t) return n ? this.disable() : this.enable();
                    "value" === t && this.setValue(n), this.container && this.container.option(t, n), this.input.option && this.input.option(t, n)
                }
            },
            handleEmpty: function (t) {
                !1 !== this.options.display && (t !== undefined ? this.isEmpty = t : "function" == typeof this.input.isEmpty ? this.isEmpty = this.input.isEmpty(this.$element) : this.isEmpty = "" === e.trim(this.$element.html()), this.options.disabled ? this.isEmpty && (this.$element.empty(), this.options.emptyclass && this.$element.removeClass(this.options.emptyclass)) : this.isEmpty ? (this.$element.html(this.options.emptytext), this.options.emptyclass && this.$element.addClass(this.options.emptyclass)) : this.options.emptyclass && this.$element.removeClass(this.options.emptyclass))
            },
            show: function (t) {
                if (!this.options.disabled) {
                    if (this.container) {
                        if (this.container.tip().is(":visible")) return
                    } else {
                        var n = e.extend({}, this.options, {
                            value: this.value,
                            input: this.input
                        });
                        this.$element.editableContainer(n), this.$element.on("save.internal", e.proxy(this.save, this)), this.container = this.$element.data("editableContainer")
                    }
                    this.container.show(t)
                }
            },
            hide: function () {
                this.container && this.container.hide()
            },
            toggle: function (e) {
                this.container && this.container.tip().is(":visible") ? this.hide() : this.show(e)
            },
            save: function (e, t) {
                if (this.options.unsavedclass) {
                    var n = !1;
                    (n = (n = (n = (n = n || "function" == typeof this.options.url) || !1 === this.options.display) || t.response !== undefined) || this.options.savenochange && this.input.value2str(this.value) !== this.input.value2str(t.newValue)) ? this.$element.removeClass(this.options.unsavedclass): this.$element.addClass(this.options.unsavedclass)
                }
                if (this.options.highlight) {
                    var i = this.$element,
                        r = i.css("background-color");
                    i.css("background-color", this.options.highlight), setTimeout(function () {
                        "transparent" === r && (r = ""), i.css("background-color", r), i.addClass("editable-bg-transition"), setTimeout(function () {
                            i.removeClass("editable-bg-transition")
                        }, 1700)
                    }, 10)
                }
                this.setValue(t.newValue, !1, t.response)
            },
            validate: function () {
                if ("function" == typeof this.options.validate) return this.options.validate.call(this, this.value)
            },
            setValue: function (t, n, i) {
                this.value = n ? this.input.str2value(t) : t, this.container && this.container.option("value", this.value), e.when(this.render(i)).then(e.proxy(function () {
                    this.handleEmpty()
                }, this))
            },
            activate: function () {
                this.container && this.container.activate()
            },
            destroy: function () {
                this.disable(), this.container && this.container.destroy(), this.input.destroy(), "manual" !== this.options.toggle && (this.$element.removeClass("editable-click"), this.$element.off(this.options.toggle + ".editable")), this.$element.off("save.internal"), this.$element.removeClass("editable editable-open editable-disabled"), this.$element.removeData("editable")
            }
        }, e.fn.editable = function (n) {
            var i = {},
                r = arguments,
                a = "editable";
            switch (n) {
                case "validate":
                    return this.each(function () {
                        var t, n = e(this).data(a);
                        n && (t = n.validate()) && (i[n.options.name] = t)
                    }), i;
                case "getValue":
                    return 2 === arguments.length && !0 === arguments[1] ? i = this.eq(0).data(a).value : this.each(function () {
                        var t = e(this).data(a);
                        t && t.value !== undefined && null !== t.value && (i[t.options.name] = t.input.value2submit(t.value))
                    }), i;
                case "submit":
                    var o = arguments[1] || {},
                        s = this,
                        l = this.editable("validate");
                    if (e.isEmptyObject(l)) {
                        var u = {};
                        if (1 === s.length) {
                            var c = s.data("editable"),
                                d = {
                                    name: c.options.name || "",
                                    value: c.input.value2submit(c.value),
                                    pk: "function" == typeof c.options.pk ? c.options.pk.call(c.options.scope) : c.options.pk
                                };
                            "function" == typeof c.options.params ? d = c.options.params.call(c.options.scope, d) : (c.options.params = e.fn.editableutils.tryParseJson(c.options.params, !0), e.extend(d, c.options.params)), u = {
                                url: c.options.url,
                                data: d,
                                type: "POST"
                            }, o.success = o.success || c.options.success, o.error = o.error || c.options.error
                        } else {
                            var h = this.editable("getValue");
                            u = {
                                url: o.url,
                                data: h,
                                type: "POST"
                            }
                        }
                        u.success = "function" == typeof o.success ? function (e) {
                            o.success.call(s, e, o)
                        } : e.noop, u.error = "function" == typeof o.error ? function () {
                            o.error.apply(s, arguments)
                        } : e.noop, o.ajaxOptions && e.extend(u, o.ajaxOptions), o.data && e.extend(u.data, o.data), e.ajax(u)
                    } else "function" == typeof o.error && o.error.call(s, l);
                    return this
            }
            return this.each(function () {
                var i = e(this),
                    o = i.data(a),
                    s = "object" == typeof n && n;
                s && s.selector ? o = new t(this, s) : (o || i.data(a, o = new t(this, s)), "string" == typeof n && o[n].apply(o, Array.prototype.slice.call(r, 1)))
            })
        }, e.fn.editable.defaults = {
            type: "text",
            disabled: !1,
            toggle: "click",
            emptytext: "Empty",
            autotext: "auto",
            value: null,
            display: null,
            emptyclass: "editable-empty",
            unsavedclass: "editable-unsaved",
            selector: null,
            highlight: "#FFFF80"
        }
    }(window.jQuery),
    function (e) {
        "use strict";
        e.fn.editabletypes = {};
        var t = function () {};
        t.prototype = {
            init: function (t, n, i) {
                this.type = t, this.options = e.extend({}, i, n)
            },
            prerender: function () {
                this.$tpl = e(this.options.tpl), this.$input = this.$tpl, this.$clear = null, this.error = null
            },
            render: function () {},
            value2html: function (t, n) {
                e(n)[this.options.escape ? "text" : "html"](e.trim(t))
            },
            html2value: function (t) {
                return e("<div>").html(t).text()
            },
            value2str: function (e) {
                return e
            },
            str2value: function (e) {
                return e
            },
            value2submit: function (e) {
                return e
            },
            value2input: function (e) {
                this.$input.val(e)
            },
            input2value: function () {
                return this.$input.val()
            },
            activate: function () {
                this.$input.is(":visible") && this.$input.focus()
            },
            clear: function () {
                this.$input.val(null)
            },
            escape: function (t) {
                return e("<div>").text(t).html()
            },
            autosubmit: function () {},
            destroy: function () {},
            setClass: function () {
                this.options.inputclass && this.$input.addClass(this.options.inputclass)
            },
            setAttr: function (e) {
                this.options[e] !== undefined && null !== this.options[e] && this.$input.attr(e, this.options[e])
            },
            option: function (e, t) {
                this.options[e] = t
            }
        }, t.defaults = {
            tpl: "",
            inputclass: null,
            escape: !0,
            scope: null,
            showbuttons: !0
        }, e.extend(e.fn.editabletypes, {
            abstractinput: t
        })
    }(window.jQuery),
    function (e) {
        "use strict";
        var t = function () {};
        e.fn.editableutils.inherit(t, e.fn.editabletypes.abstractinput), e.extend(t.prototype, {
            render: function () {
                var t = e.Deferred();
                return this.error = null, this.onSourceReady(function () {
                    this.renderList(), t.resolve()
                }, function () {
                    this.error = this.options.sourceError, t.resolve()
                }), t.promise()
            },
            html2value: function () {
                return null
            },
            value2html: function (t, n, i, r) {
                var a = e.Deferred(),
                    o = function () {
                        "function" == typeof i ? i.call(n, t, this.sourceData, r) : this.value2htmlFinal(t, n), a.resolve()
                    };
                return null === t ? o.call(this) : this.onSourceReady(o, function () {
                    a.resolve()
                }), a.promise()
            },
            onSourceReady: function (t, n) {
                var i;
                if (e.isFunction(this.options.source) ? (i = this.options.source.call(this.options.scope), this.sourceData = null) : i = this.options.source, this.options.sourceCache && e.isArray(this.sourceData)) t.call(this);
                else {
                    try {
                        i = e.fn.editableutils.tryParseJson(i, !1)
                    } catch (s) {
                        return void n.call(this)
                    }
                    if ("string" == typeof i) {
                        if (this.options.sourceCache) {
                            var r, a = i;
                            if (e(document).data(a) || e(document).data(a, {}), !1 === (r = e(document).data(a)).loading && r.sourceData) return this.sourceData = r.sourceData, this.doPrepend(), void t.call(this);
                            if (!0 === r.loading) return r.callbacks.push(e.proxy(function () {
                                this.sourceData = r.sourceData, this.doPrepend(), t.call(this)
                            }, this)), void r.err_callbacks.push(e.proxy(n, this));
                            r.loading = !0, r.callbacks = [], r.err_callbacks = []
                        }
                        var o = e.extend({
                            url: i,
                            type: "get",
                            cache: !1,
                            dataType: "json",
                            success: e.proxy(function (i) {
                                r && (r.loading = !1), this.sourceData = this.makeArray(i), e.isArray(this.sourceData) ? (r && (r.sourceData = this.sourceData, e.each(r.callbacks, function () {
                                    this.call()
                                })), this.doPrepend(), t.call(this)) : (n.call(this), r && e.each(r.err_callbacks, function () {
                                    this.call()
                                }))
                            }, this),
                            error: e.proxy(function () {
                                n.call(this), r && (r.loading = !1, e.each(r.err_callbacks, function () {
                                    this.call()
                                }))
                            }, this)
                        }, this.options.sourceOptions);
                        e.ajax(o)
                    } else this.sourceData = this.makeArray(i), e.isArray(this.sourceData) ? (this.doPrepend(), t.call(this)) : n.call(this)
                }
            },
            doPrepend: function () {
                null !== this.options.prepend && this.options.prepend !== undefined && (e.isArray(this.prependData) || (e.isFunction(this.options.prepend) && (this.options.prepend = this.options.prepend.call(this.options.scope)), this.options.prepend = e.fn.editableutils.tryParseJson(this.options.prepend, !0), "string" == typeof this.options.prepend && (this.options.prepend = {
                    "": this.options.prepend
                }), this.prependData = this.makeArray(this.options.prepend)), e.isArray(this.prependData) && e.isArray(this.sourceData) && (this.sourceData = this.prependData.concat(this.sourceData)))
            },
            renderList: function () {},
            value2htmlFinal: function () {},
            makeArray: function (t) {
                var n, i, r, a, o = [];
                if (!t || "string" == typeof t) return null;
                if (e.isArray(t)) {
                    a = function (e, t) {
                        if (i = {
                                value: e,
                                text: t
                            }, n++ >= 2) return !1
                    };
                    for (var s = 0; s < t.length; s++) "object" == typeof (r = t[s]) ? (n = 0, e.each(r, a), 1 === n ? o.push(i) : n > 1 && (r.children && (r.children = this.makeArray(r.children)), o.push(r))) : o.push({
                        value: r,
                        text: r
                    })
                } else e.each(t, function (e, t) {
                    o.push({
                        value: e,
                        text: t
                    })
                });
                return o
            },
            option: function (e, t) {
                this.options[e] = t, "source" === e && (this.sourceData = null), "prepend" === e && (this.prependData = null)
            }
        }), t.defaults = e.extend({}, e.fn.editabletypes.abstractinput.defaults, {
            source: null,
            prepend: !1,
            sourceError: "Error when loading list",
            sourceCache: !0,
            sourceOptions: null
        }), e.fn.editabletypes.list = t
    }(window.jQuery),
    function (e) {
        "use strict";
        var t = function (e) {
            this.init("text", e, t.defaults)
        };
        e.fn.editableutils.inherit(t, e.fn.editabletypes.abstractinput), e.extend(t.prototype, {
            render: function () {
                this.renderClear(), this.setClass(), this.setAttr("placeholder")
            },
            activate: function () {
                this.$input.is(":visible") && (this.$input.focus(), e.fn.editableutils.setCursorPosition(this.$input.get(0), this.$input.val().length), this.toggleClear && this.toggleClear())
            },
            renderClear: function () {
                this.options.clear && (this.$clear = e('<span class="editable-clear-x"></span>'), this.$input.after(this.$clear).css("padding-right", 24).keyup(e.proxy(function (t) {
                    if (!~e.inArray(t.keyCode, [40, 38, 9, 13, 27])) {
                        clearTimeout(this.t);
                        var n = this;
                        this.t = setTimeout(function () {
                            n.toggleClear(t)
                        }, 100)
                    }
                }, this)).parent().css("position", "relative"), this.$clear.click(e.proxy(this.clear, this)))
            },
            postrender: function () {},
            toggleClear: function () {
                if (this.$clear) {
                    var e = this.$input.val().length,
                        t = this.$clear.is(":visible");
                    e && !t && this.$clear.show(), !e && t && this.$clear.hide()
                }
            },
            clear: function () {
                this.$clear.hide(), this.$input.val("").focus()
            }
        }), t.defaults = e.extend({}, e.fn.editabletypes.abstractinput.defaults, {
            tpl: '<input type="text">',
            placeholder: null,
            clear: !0
        }), e.fn.editabletypes.text = t
    }(window.jQuery),
    function (e) {
        "use strict";
        var t = function (e) {
            this.init("textarea", e, t.defaults)
        };
        e.fn.editableutils.inherit(t, e.fn.editabletypes.abstractinput), e.extend(t.prototype, {
            render: function () {
                this.setClass(), this.setAttr("placeholder"), this.setAttr("rows"), this.$input.keydown(function (t) {
                    t.ctrlKey && 13 === t.which && e(this).closest("form").submit()
                })
            },
            activate: function () {
                e.fn.editabletypes.text.prototype.activate.call(this)
            }
        }), t.defaults = e.extend({}, e.fn.editabletypes.abstractinput.defaults, {
            tpl: "<textarea></textarea>",
            inputclass: "input-large",
            placeholder: null,
            rows: 7
        }), e.fn.editabletypes.textarea = t
    }(window.jQuery),
    function (e) {
        "use strict";
        var t = function (e) {
            this.init("select", e, t.defaults)
        };
        e.fn.editableutils.inherit(t, e.fn.editabletypes.list), e.extend(t.prototype, {
            renderList: function () {
                this.$input.empty();
                var t = function (n, i) {
                    var r;
                    if (e.isArray(i))
                        for (var a = 0; a < i.length; a++) r = {}, i[a].children ? (r.label = i[a].text, n.append(t(e("<optgroup>", r), i[a].children))) : (r.value = i[a].value, i[a].disabled && (r.disabled = !0), n.append(e("<option>", r).text(i[a].text)));
                    return n
                };
                t(this.$input, this.sourceData), this.setClass(), this.$input.on("keydown.editable", function (t) {
                    13 === t.which && e(this).closest("form").submit()
                })
            },
            value2htmlFinal: function (t, n) {
                var i = "",
                    r = e.fn.editableutils.itemsByValue(t, this.sourceData);
                r.length && (i = r[0].text), e.fn.editabletypes.abstractinput.prototype.value2html.call(this, i, n)
            },
            autosubmit: function () {
                this.$input.off("keydown.editable").on("change.editable", function () {
                    e(this).closest("form").submit()
                })
            }
        }), t.defaults = e.extend({}, e.fn.editabletypes.list.defaults, {
            tpl: "<select></select>"
        }), e.fn.editabletypes.select = t
    }(window.jQuery),
    function (e) {
        "use strict";
        var t = function (e) {
            this.init("checklist", e, t.defaults)
        };
        e.fn.editableutils.inherit(t, e.fn.editabletypes.list), e.extend(t.prototype, {
            renderList: function () {
                var t;
                if (this.$tpl.empty(), e.isArray(this.sourceData)) {
                    for (var n = 0; n < this.sourceData.length; n++) t = e("<label>").append(e("<input>", {
                        type: "checkbox",
                        value: this.sourceData[n].value
                    })).append(e("<span>").text(" " + this.sourceData[n].text)), e("<div>").append(t).appendTo(this.$tpl);
                    this.$input = this.$tpl.find('input[type="checkbox"]'), this.setClass()
                }
            },
            value2str: function (t) {
                return e.isArray(t) ? t.sort().join(e.trim(this.options.separator)) : ""
            },
            str2value: function (t) {
                var n, i = null;
                return "string" == typeof t && t.length ? (n = new RegExp("\\s*" + e.trim(this.options.separator) + "\\s*"), i = t.split(n)) : i = e.isArray(t) ? t : [t], i
            },
            value2input: function (t) {
                this.$input.prop("checked", !1), e.isArray(t) && t.length && this.$input.each(function (n, i) {
                    var r = e(i);
                    e.each(t, function (e, t) {
                        r.val() == t && r.prop("checked", !0)
                    })
                })
            },
            input2value: function () {
                var t = [];
                return this.$input.filter(":checked").each(function (n, i) {
                    t.push(e(i).val())
                }), t
            },
            value2htmlFinal: function (t, n) {
                var i = [],
                    r = e.fn.editableutils.itemsByValue(t, this.sourceData),
                    a = this.options.escape;
                r.length ? (e.each(r, function (t, n) {
                    var r = a ? e.fn.editableutils.escape(n.text) : n.text;
                    i.push(r)
                }), e(n).html(i.join("<br>"))) : e(n).empty()
            },
            activate: function () {
                this.$input.first().focus()
            },
            autosubmit: function () {
                this.$input.on("keydown", function (t) {
                    13 === t.which && e(this).closest("form").submit()
                })
            }
        }), t.defaults = e.extend({}, e.fn.editabletypes.list.defaults, {
            tpl: '<div class="editable-checklist"></div>',
            inputclass: null,
            separator: ","
        }), e.fn.editabletypes.checklist = t
    }(window.jQuery),
    function (e) {
        "use strict";
        var t = function (e) {
            this.init("password", e, t.defaults)
        };
        e.fn.editableutils.inherit(t, e.fn.editabletypes.text), e.extend(t.prototype, {
            value2html: function (t, n) {
                t ? e(n).text("[hidden]") : e(n).empty()
            },
            html2value: function () {
                return null
            }
        }), t.defaults = e.extend({}, e.fn.editabletypes.text.defaults, {
            tpl: '<input type="password">'
        }), e.fn.editabletypes.password = t
    }(window.jQuery),
    function (e) {
        "use strict";
        var t = function (e) {
            this.init("email", e, t.defaults)
        };
        e.fn.editableutils.inherit(t, e.fn.editabletypes.text), t.defaults = e.extend({}, e.fn.editabletypes.text.defaults, {
            tpl: '<input type="email">'
        }), e.fn.editabletypes.email = t
    }(window.jQuery),
    function (e) {
        "use strict";
        var t = function (e) {
            this.init("url", e, t.defaults)
        };
        e.fn.editableutils.inherit(t, e.fn.editabletypes.text), t.defaults = e.extend({}, e.fn.editabletypes.text.defaults, {
            tpl: '<input type="url">'
        }), e.fn.editabletypes.url = t
    }(window.jQuery),
    function (e) {
        "use strict";
        var t = function (e) {
            this.init("tel", e, t.defaults)
        };
        e.fn.editableutils.inherit(t, e.fn.editabletypes.text), t.defaults = e.extend({}, e.fn.editabletypes.text.defaults, {
            tpl: '<input type="tel">'
        }), e.fn.editabletypes.tel = t
    }(window.jQuery),
    function (e) {
        "use strict";
        var t = function (e) {
            this.init("number", e, t.defaults)
        };
        e.fn.editableutils.inherit(t, e.fn.editabletypes.text), e.extend(t.prototype, {
            render: function () {
                t.superclass.render.call(this), this.setAttr("min"), this.setAttr("max"), this.setAttr("step")
            },
            postrender: function () {
                this.$clear && this.$clear.css({
                    right: 24
                })
            }
        }), t.defaults = e.extend({}, e.fn.editabletypes.text.defaults, {
            tpl: '<input type="number">',
            inputclass: "input-mini",
            min: null,
            max: null,
            step: null
        }), e.fn.editabletypes.number = t
    }(window.jQuery),
    function (e) {
        "use strict";
        var t = function (e) {
            this.init("range", e, t.defaults)
        };
        e.fn.editableutils.inherit(t, e.fn.editabletypes.number), e.extend(t.prototype, {
            render: function () {
                this.$input = this.$tpl.filter("input"), this.setClass(), this.setAttr("min"), this.setAttr("max"), this.setAttr("step"), this.$input.on("input", function () {
                    e(this).siblings("output").text(e(this).val())
                })
            },
            activate: function () {
                this.$input.focus()
            }
        }), t.defaults = e.extend({}, e.fn.editabletypes.number.defaults, {
            tpl: '<input type="range"><output style="width: 30px; display: inline-block"></output>',
            inputclass: "input-medium"
        }), e.fn.editabletypes.range = t
    }(window.jQuery),
    function (e) {
        "use strict";
        var t = function (e) {
            this.init("time", e, t.defaults)
        };
        e.fn.editableutils.inherit(t, e.fn.editabletypes.abstractinput), e.extend(t.prototype, {
            render: function () {
                this.setClass()
            }
        }), t.defaults = e.extend({}, e.fn.editabletypes.abstractinput.defaults, {
            tpl: '<input type="time">'
        }), e.fn.editabletypes.time = t
    }(window.jQuery),
    function (e) {
        "use strict";
        var t = function (n) {
            if (this.init("select2", n, t.defaults), n.select2 = n.select2 || {}, this.sourceData = null, n.placeholder && (n.select2.placeholder = n.placeholder), !n.select2.tags && n.source) {
                var i = n.source;
                e.isFunction(n.source) && (i = n.source.call(n.scope)), "string" == typeof i ? (n.select2.ajax = n.select2.ajax || {}, n.select2.ajax.data || (n.select2.ajax.data = function (e) {
                    return {
                        query: e
                    }
                }), n.select2.ajax.results || (n.select2.ajax.results = function (e) {
                    return {
                        results: e
                    }
                }), n.select2.ajax.url = i) : (this.sourceData = this.convertSource(i), n.select2.data = this.sourceData)
            }
            if (this.options.select2 = e.extend({}, t.defaults.select2, n.select2), this.isMultiple = this.options.select2.tags || this.options.select2.multiple, this.isRemote = "ajax" in this.options.select2, this.idFunc = this.options.select2.id, "function" != typeof this.idFunc) {
                var r = this.idFunc || "id";
                this.idFunc = function (e) {
                    return e[r]
                }
            }
            this.formatSelection = this.options.select2.formatSelection, "function" != typeof this.formatSelection && (this.formatSelection = function (e) {
                return e.text
            })
        };
        e.fn.editableutils.inherit(t, e.fn.editabletypes.abstractinput), e.extend(t.prototype, {
            render: function () {
                this.setClass(), this.isRemote && this.$input.on("select2-loaded", e.proxy(function (e) {
                    this.sourceData = e.items.results
                }, this)), this.isMultiple && this.$input.on("change", function () {
                    e(this).closest("form").parent().triggerHandler("resize")
                })
            },
            value2html: function (n, i) {
                var r, a = "",
                    o = this;
                this.options.select2.tags ? r = n : this.sourceData && (r = e.fn.editableutils.itemsByValue(n, this.sourceData, this.idFunc)), e.isArray(r) ? (a = [], e.each(r, function (e, t) {
                    a.push(t && "object" == typeof t ? o.formatSelection(t) : t)
                })) : r && (a = o.formatSelection(r)), a = e.isArray(a) ? a.join(this.options.viewseparator) : a, t.superclass.value2html.call(this, a, i)
            },
            html2value: function (e) {
                return this.options.select2.tags ? this.str2value(e, this.options.viewseparator) : null
            },
            value2input: function (t) {
                if (e.isArray(t) && (t = t.join(this.getSeparator())), this.$input.data("select2") ? this.$input.val(t).trigger("change", !0) : (this.$input.val(t), this.$input.select2(this.options.select2)), this.isRemote && !this.isMultiple && !this.options.select2.initSelection) {
                    var n = this.options.select2.id,
                        i = this.options.select2.formatSelection;
                    if (!n && !i) {
                        var r = e(this.options.scope);
                        if (!r.data("editable").isEmpty) {
                            var a = {
                                id: t,
                                text: r.text()
                            };
                            this.$input.select2("data", a)
                        }
                    }
                }
            },
            input2value: function () {
                return this.$input.select2("val")
            },
            str2value: function (t, n) {
                if ("string" != typeof t || !this.isMultiple) return t;
                var i, r, a;
                if (n = n || this.getSeparator(), null === t || t.length < 1) return null;
                for (r = 0, a = (i = t.split(n)).length; r < a; r += 1) i[r] = e.trim(i[r]);
                return i
            },
            autosubmit: function () {
                this.$input.on("change", function (t, n) {
                    n || e(this).closest("form").submit()
                })
            },
            getSeparator: function () {
                return this.options.select2.separator || e.fn.select2.defaults.separator
            },
            convertSource: function (t) {
                if (e.isArray(t) && t.length && t[0].value !== undefined)
                    for (var n = 0; n < t.length; n++) t[n].value !== undefined && (t[n].id = t[n].value, delete t[n].value);
                return t
            },
            destroy: function () {
                this.$input.data("select2") && this.$input.select2("destroy")
            }
        }), t.defaults = e.extend({}, e.fn.editabletypes.abstractinput.defaults, {
            tpl: '<input type="hidden">',
            select2: null,
            placeholder: null,
            source: null,
            viewseparator: ", "
        }), e.fn.editabletypes.select2 = t
    }(window.jQuery),
    /**
     * Combodate - 1.0.5
     * Dropdown date and time picker.
     * Converts text input into dropdowns to pick day, month, year, hour, minute and second.
     * Uses momentjs as datetime library http://momentjs.com.
     * For i18n include corresponding file from https://github.com/timrwood/moment/tree/master/lang 
     *
     * Confusion at noon and midnight - see http://en.wikipedia.org/wiki/12-hour_clock#Confusion_at_noon_and_midnight
     * In combodate: 
     * 12:00 pm --> 12:00 (24-h format, midday)
     * 12:00 am --> 00:00 (24-h format, midnight, start of day)
     * 
     * Differs from momentjs parse rules:
     * 00:00 pm, 12:00 pm --> 12:00 (24-h format, day not change)
     * 00:00 am, 12:00 am --> 00:00 (24-h format, day not change)
     * 
     * 
     * Author: Vitaliy Potapov
     * Project page: http://github.com/vitalets/combodate
     * Copyright (c) 2012 Vitaliy Potapov. Released under MIT License.
     **/
    function (e) {
        var t = function (t, n) {
            this.$element = e(t), this.$element.is("input") ? (this.options = e.extend({}, e.fn.combodate.defaults, n, this.$element.data()), this.init()) : e.error("Combodate should be applied to INPUT element")
        };
        t.prototype = {
            constructor: t,
            init: function () {
                this.map = {
                    day: ["D", "date"],
                    month: ["M", "month"],
                    year: ["Y", "year"],
                    hour: ["[Hh]", "hours"],
                    minute: ["m", "minutes"],
                    second: ["s", "seconds"],
                    ampm: ["[Aa]", ""]
                }, this.$widget = e('<span class="combodate"></span>').html(this.getTemplate()), this.initCombos(), this.$widget.on("change", "select", e.proxy(function (t) {
                    this.$element.val(this.getValue()).change(), this.options.smartDays && (e(t.target).is(".month") || e(t.target).is(".year")) && this.fillCombo("day")
                }, this)), this.$widget.find("select").css("width", "auto"), this.$element.hide().after(this.$widget), this.setValue(this.$element.val() || this.options.value)
            },
            getTemplate: function () {
                var t = this.options.template;
                return e.each(this.map, function (e, n) {
                    n = n[0];
                    var i = new RegExp(n + "+"),
                        r = n.length > 1 ? n.substring(1, 2) : n;
                    t = t.replace(i, "{" + r + "}")
                }), t = t.replace(/ /g, "&nbsp;"), e.each(this.map, function (e, n) {
                    var i = (n = n[0]).length > 1 ? n.substring(1, 2) : n;
                    t = t.replace("{" + i + "}", '<select class="' + e + '"></select>')
                }), t
            },
            initCombos: function () {
                for (var e in this.map) {
                    var t = this.$widget.find("." + e);
                    this["$" + e] = t.length ? t : null, this.fillCombo(e)
                }
            },
            fillCombo: function (e) {
                var t = this["$" + e];
                if (t) {
                    var n = this["fill" + e.charAt(0).toUpperCase() + e.slice(1)](),
                        i = t.val();
                    t.empty();
                    for (var r = 0; r < n.length; r++) t.append('<option value="' + n[r][0] + '">' + n[r][1] + "</option>");
                    t.val(i)
                }
            },
            fillCommon: function (e) {
                var t, n = [];
                if ("name" === this.options.firstItem) {
                    var i = "function" == typeof (t = moment.relativeTime || moment.langData()._relativeTime)[e] ? t[e](1, !0, e, !1) : t[e];
                    i = i.split(" ").reverse()[0], n.push(["", i])
                } else "empty" === this.options.firstItem && n.push(["", ""]);
                return n
            },
            fillDay: function () {
                var e, t, n = this.fillCommon("d"),
                    i = -1 !== this.options.template.indexOf("DD"),
                    r = 31;
                if (this.options.smartDays && this.$month && this.$year) {
                    var a = parseInt(this.$month.val(), 10),
                        o = parseInt(this.$year.val(), 10);
                    isNaN(a) || isNaN(o) || (r = moment([o, a]).daysInMonth())
                }
                for (t = 1; t <= r; t++) e = i ? this.leadZero(t) : t, n.push([t, e]);
                return n
            },
            fillMonth: function () {
                var e, t, n = this.fillCommon("M"),
                    i = -1 !== this.options.template.indexOf("MMMM"),
                    r = -1 !== this.options.template.indexOf("MMM"),
                    a = -1 !== this.options.template.indexOf("MM");
                for (t = 0; t <= 11; t++) e = i ? moment().date(1).month(t).format("MMMM") : r ? moment().date(1).month(t).format("MMM") : a ? this.leadZero(t + 1) : t + 1, n.push([t, e]);
                return n
            },
            fillYear: function () {
                var e, t, n = [],
                    i = -1 !== this.options.template.indexOf("YYYY");
                for (t = this.options.maxYear; t >= this.options.minYear; t--) e = i ? t : (t + "").substring(2), n[this.options.yearDescending ? "push" : "unshift"]([t, e]);
                return n = this.fillCommon("y").concat(n)
            },
            fillHour: function () {
                var e, t, n = this.fillCommon("h"),
                    i = -1 !== this.options.template.indexOf("h"),
                    r = (this.options.template.indexOf("H"), -1 !== this.options.template.toLowerCase().indexOf("hh")),
                    a = i ? 12 : 23;
                for (t = i ? 1 : 0; t <= a; t++) e = r ? this.leadZero(t) : t, n.push([t, e]);
                return n
            },
            fillMinute: function () {
                var e, t, n = this.fillCommon("m"),
                    i = -1 !== this.options.template.indexOf("mm");
                for (t = 0; t <= 59; t += this.options.minuteStep) e = i ? this.leadZero(t) : t, n.push([t, e]);
                return n
            },
            fillSecond: function () {
                var e, t, n = this.fillCommon("s"),
                    i = -1 !== this.options.template.indexOf("ss");
                for (t = 0; t <= 59; t += this.options.secondStep) e = i ? this.leadZero(t) : t, n.push([t, e]);
                return n
            },
            fillAmpm: function () {
                var e = -1 !== this.options.template.indexOf("a");
                this.options.template.indexOf("A");
                return [
                    ["am", e ? "am" : "AM"],
                    ["pm", e ? "pm" : "PM"]
                ]
            },
            getValue: function (t) {
                var n, i = {},
                    r = this,
                    a = !1;
                return e.each(this.map, function (e) {
                    if ("ampm" !== e) {
                        var t = "day" === e ? 1 : 0;
                        return i[e] = r["$" + e] ? parseInt(r["$" + e].val(), 10) : t, isNaN(i[e]) ? (a = !0, !1) : void 0
                    }
                }), a ? "" : (this.$ampm && (12 === i.hour ? i.hour = "am" === this.$ampm.val() ? 0 : 12 : i.hour = "am" === this.$ampm.val() ? i.hour : i.hour + 12), n = moment([i.year, i.month, i.day, i.hour, i.minute, i.second]), this.highlight(n), null === (t = t === undefined ? this.options.format : t) ? n.isValid() ? n : null : n.isValid() ? n.format(t) : "")
            },
            setValue: function (t) {
                function n(t, n) {
                    var i = {};
                    return t.children("option").each(function (t, r) {
                        var a, o = e(r).attr("value");
                        "" !== o && (a = Math.abs(o - n), ("undefined" == typeof i.distance || a < i.distance) && (i = {
                            value: o,
                            distance: a
                        }))
                    }), i.value
                }
                if (t) {
                    var i = "string" == typeof t ? moment(t, this.options.format) : moment(t),
                        r = this,
                        a = {};
                    i.isValid() && (e.each(this.map, function (e, t) {
                        "ampm" !== e && (a[e] = i[t[1]]())
                    }), this.$ampm && (a.hour >= 12 ? (a.ampm = "pm", a.hour > 12 && (a.hour -= 12)) : (a.ampm = "am", 0 === a.hour && (a.hour = 12))), e.each(a, function (e, t) {
                        r["$" + e] && ("minute" === e && r.options.minuteStep > 1 && r.options.roundTime && (t = n(r["$" + e], t)), "second" === e && r.options.secondStep > 1 && r.options.roundTime && (t = n(r["$" + e], t)), r["$" + e].val(t))
                    }), this.options.smartDays && this.fillCombo("day"), this.$element.val(i.format(this.options.format)).change())
                }
            },
            highlight: function (e) {
                e.isValid() ? this.options.errorClass ? this.$widget.removeClass(this.options.errorClass) : this.$widget.find("select").css("border-color", this.borderColor) : this.options.errorClass ? this.$widget.addClass(this.options.errorClass) : (this.borderColor || (this.borderColor = this.$widget.find("select").css("border-color")), this.$widget.find("select").css("border-color", "red"))
            },
            leadZero: function (e) {
                return e <= 9 ? "0" + e : e
            },
            destroy: function () {
                this.$widget.remove(), this.$element.removeData("combodate").show()
            }
        }, e.fn.combodate = function (n) {
            var i, r = Array.apply(null, arguments);
            return r.shift(), "getValue" === n && this.length && (i = this.eq(0).data("combodate")) ? i.getValue.apply(i, r) : this.each(function () {
                var i = e(this),
                    a = i.data("combodate"),
                    o = "object" == typeof n && n;
                a || i.data("combodate", a = new t(this, o)), "string" == typeof n && "function" == typeof a[n] && a[n].apply(a, r)
            })
        }, e.fn.combodate.defaults = {
            format: "DD-MM-YYYY HH:mm",
            template: "D / MMM / YYYY   H : mm",
            value: null,
            minYear: 1970,
            maxYear: 2015,
            yearDescending: !0,
            minuteStep: 5,
            secondStep: 1,
            firstItem: "empty",
            errorClass: null,
            roundTime: !0,
            smartDays: !1
        }
    }(window.jQuery),
    function (e) {
        "use strict";
        var t = function (n) {
            this.init("combodate", n, t.defaults), this.options.viewformat || (this.options.viewformat = this.options.format), n.combodate = e.fn.editableutils.tryParseJson(n.combodate, !0), this.options.combodate = e.extend({}, t.defaults.combodate, n.combodate, {
                format: this.options.format,
                template: this.options.template
            })
        };
        e.fn.editableutils.inherit(t, e.fn.editabletypes.abstractinput), e.extend(t.prototype, {
            render: function () {
                this.$input.combodate(this.options.combodate), "bs3" === e.fn.editableform.engine && this.$input.siblings().find("select").addClass("form-control"), this.options.inputclass && this.$input.siblings().find("select").addClass(this.options.inputclass)
            },
            value2html: function (e, n) {
                var i = e ? e.format(this.options.viewformat) : "";
                t.superclass.value2html.call(this, i, n)
            },
            html2value: function (e) {
                return e ? moment(e, this.options.viewformat) : null
            },
            value2str: function (e) {
                return e ? e.format(this.options.format) : ""
            },
            str2value: function (e) {
                return e ? moment(e, this.options.format) : null
            },
            value2submit: function (e) {
                return this.value2str(e)
            },
            value2input: function (e) {
                this.$input.combodate("setValue", e)
            },
            input2value: function () {
                return this.$input.combodate("getValue", null)
            },
            activate: function () {
                this.$input.siblings(".combodate").find("select").eq(0).focus()
            },
            autosubmit: function () {}
        }), t.defaults = e.extend({}, e.fn.editabletypes.abstractinput.defaults, {
            tpl: '<input type="text">',
            inputclass: null,
            format: "YYYY-MM-DD",
            viewformat: null,
            template: "D / MMM / YYYY",
            combodate: null
        }), e.fn.editabletypes.combodate = t
    }(window.jQuery),
    function (e) {
        "use strict";
        var t = e.fn.editableform.Constructor.prototype.initInput;
        e.extend(e.fn.editableform.Constructor.prototype, {
            initTemplate: function () {
                this.$form = e(e.fn.editableform.template), this.$form.find(".control-group").addClass("form-group"), this.$form.find(".editable-error-block").addClass("help-block")
            },
            initInput: function () {
                t.apply(this);
                var n = null === this.input.options.inputclass || !1 === this.input.options.inputclass,
                    i = "input-sm",
                    r = "text,select,textarea,password,email,url,tel,number,range,time,typeaheadjs".split(",");
                ~e.inArray(this.input.type, r) && (this.input.$input.addClass("form-control"), n && (this.input.options.inputclass = i, this.input.$input.addClass(i)));
                for (var a = this.$form.find(".editable-buttons"), o = n ? [i] : this.input.options.inputclass.split(" "), s = 0; s < o.length; s++) "input-lg" === o[s].toLowerCase() && a.find("button").removeClass("btn-sm").addClass("btn-lg")
            }
        }), e.fn.editableform.buttons = '<button type="submit" class="btn btn-primary btn-sm editable-submit"><i class="icon-check"></i></button><button type="button" class="btn btn-default btn-sm editable-cancel"><i class="icon-cross"></i></button>', e.fn.editableform.errorGroupClass = "has-error", e.fn.editableform.errorBlockClass = null, e.fn.editableform.engine = "bs3"
    }(window.jQuery),
    function (e) {
        "use strict";
        e.extend(e.fn.editableContainer.Popup.prototype, {
            containerName: "popover",
            containerDataName: "bs.popover",
            innerCss: ".popover-body",
            defaults: e.fn.popover.Constructor.DEFAULTS,
            initContainer: function () {
                var t;
                e.extend(this.containerOptions, {
                    trigger: "manual",
                    selector: !1,
                    content: " ",
                    template: this.defaults.template
                }), this.$element.data("template") && (t = this.$element.data("template"), this.$element.removeData("template")), this.call(this.containerOptions), t && this.$element.data("template", t)
            },
            innerShow: function () {
                this.call("show")
            },
            innerHide: function () {
                this.call("hide")
            },
            innerDestroy: function () {
                this.call("destroy")
            },
            setContainerOption: function (e, t) {
                this.container().options[e] = t
            },
            setPosition: function () {
                (function () {}).call(this.container())
            }
        })
    }(window.jQuery),
    /* =========================================================
     * bootstrap-datepicker.js
     * http://www.eyecon.ro/bootstrap-datepicker
     * =========================================================
     * Copyright 2012 Stefan Petre
     * Improvements by Andrew Rowls
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * ========================================================= */
    function (e) {
        function t() {
            return new Date(Date.UTC.apply(Date, arguments))
        }

        function n(t, n) {
            var i = e(t).data(),
                r = {},
                a = new RegExp("^" + n.toLowerCase() + "([A-Z])");
            n = new RegExp("^" + n.toLowerCase());
            for (var o in i) n.test(o) && (r[o.replace(a, function (e, t) {
                return t.toLowerCase()
            })] = i[o]);
            return r
        }

        function i(t) {
            var n = {};
            if (c[t] || (t = t.split("-")[0], c[t])) {
                var i = c[t];
                return e.each(u, function (e, t) {
                    t in i && (n[t] = i[t])
                }), n
            }
        }
        var r = function (t, n) {
            this._process_options(n), this.element = e(t), this.isInline = !1, this.isInput = this.element.is("input"), this.component = !!this.element.is(".date") && this.element.find(".add-on, .btn"), this.hasInput = this.component && this.element.find("input").length, this.component && 0 === this.component.length && (this.component = !1), this.picker = e(d.template), this._buildEvents(), this._attachEvents(), this.isInline ? this.picker.addClass("datepicker-inline").appendTo(this.element) : this.picker.addClass("datepicker-dropdown dropdown-menu"), this.o.rtl && (this.picker.addClass("datepicker-rtl"), this.picker.find(".prev i, .next i").toggleClass("icon-arrow-left icon-arrow-right")), this.viewMode = this.o.startView, this.o.calendarWeeks && this.picker.find("tfoot th.today").attr("colspan", function (e, t) {
                return parseInt(t) + 1
            }), this._allow_update = !1, this.setStartDate(this.o.startDate), this.setEndDate(this.o.endDate), this.setDaysOfWeekDisabled(this.o.daysOfWeekDisabled), this.fillDow(), this.fillMonths(), this._allow_update = !0, this.update(), this.showMode(), this.isInline && this.show()
        };
        r.prototype = {
            constructor: r,
            _process_options: function (t) {
                this._o = e.extend({}, this._o, t);
                var n = this.o = e.extend({}, this._o),
                    i = n.language;
                switch (c[i] || (i = i.split("-")[0], c[i] || (i = l.language)), n.language = i, n.startView) {
                    case 2:
                    case "decade":
                        n.startView = 2;
                        break;
                    case 1:
                    case "year":
                        n.startView = 1;
                        break;
                    default:
                        n.startView = 0
                }
                switch (n.minViewMode) {
                    case 1:
                    case "months":
                        n.minViewMode = 1;
                        break;
                    case 2:
                    case "years":
                        n.minViewMode = 2;
                        break;
                    default:
                        n.minViewMode = 0
                }
                n.startView = Math.max(n.startView, n.minViewMode), n.weekStart %= 7, n.weekEnd = (n.weekStart + 6) % 7;
                var r = d.parseFormat(n.format);
                n.startDate !== -Infinity && (n.startDate = d.parseDate(n.startDate, r, n.language)), n.endDate !== Infinity && (n.endDate = d.parseDate(n.endDate, r, n.language)), n.daysOfWeekDisabled = n.daysOfWeekDisabled || [], e.isArray(n.daysOfWeekDisabled) || (n.daysOfWeekDisabled = n.daysOfWeekDisabled.split(/[,\s]*/)), n.daysOfWeekDisabled = e.map(n.daysOfWeekDisabled, function (e) {
                    return parseInt(e, 10)
                })
            },
            _events: [],
            _secondaryEvents: [],
            _applyEvents: function (e) {
                for (var t, n, i = 0; i < e.length; i++) t = e[i][0], n = e[i][1], t.on(n)
            },
            _unapplyEvents: function (e) {
                for (var t, n, i = 0; i < e.length; i++) t = e[i][0], n = e[i][1], t.off(n)
            },
            _buildEvents: function () {
                this.isInput ? this._events = [
                    [this.element, {
                        focus: e.proxy(this.show, this),
                        keyup: e.proxy(this.update, this),
                        keydown: e.proxy(this.keydown, this)
                    }]
                ] : this.component && this.hasInput ? this._events = [
                    [this.element.find("input"), {
                        focus: e.proxy(this.show, this),
                        keyup: e.proxy(this.update, this),
                        keydown: e.proxy(this.keydown, this)
                    }],
                    [this.component, {
                        click: e.proxy(this.show, this)
                    }]
                ] : this.element.is("div") ? this.isInline = !0 : this._events = [
                    [this.element, {
                        click: e.proxy(this.show, this)
                    }]
                ], this._secondaryEvents = [
                    [this.picker, {
                        click: e.proxy(this.click, this)
                    }],
                    [e(window), {
                        resize: e.proxy(this.place, this)
                    }],
                    [e(document), {
                        mousedown: e.proxy(function (e) {
                            this.element.is(e.target) || this.element.find(e.target).size() || this.picker.is(e.target) || this.picker.find(e.target).size() || this.hide()
                        }, this)
                    }]
                ]
            },
            _attachEvents: function () {
                this._detachEvents(), this._applyEvents(this._events)
            },
            _detachEvents: function () {
                this._unapplyEvents(this._events)
            },
            _attachSecondaryEvents: function () {
                this._detachSecondaryEvents(), this._applyEvents(this._secondaryEvents)
            },
            _detachSecondaryEvents: function () {
                this._unapplyEvents(this._secondaryEvents)
            },
            _trigger: function (t, n) {
                var i = n || this.date,
                    r = new Date(i.getTime() + 6e4 * i.getTimezoneOffset());
                this.element.trigger({
                    type: t,
                    date: r,
                    format: e.proxy(function (e) {
                        var t = e || this.o.format;
                        return d.formatDate(i, t, this.o.language)
                    }, this)
                })
            },
            show: function (e) {
                this.isInline || this.picker.appendTo("body"), this.picker.show(), this.height = this.component ? this.component.outerHeight() : this.element.outerHeight(), this.place(), this._attachSecondaryEvents(), e && e.preventDefault(), this._trigger("show")
            },
            hide: function () {
                this.isInline || this.picker.is(":visible") && (this.picker.hide().detach(), this._detachSecondaryEvents(), this.viewMode = this.o.startView, this.showMode(), this.o.forceParse && (this.isInput && this.element.val() || this.hasInput && this.element.find("input").val()) && this.setValue(), this._trigger("hide"))
            },
            remove: function () {
                this.hide(), this._detachEvents(), this._detachSecondaryEvents(), this.picker.remove(), delete this.element.data().datepicker, this.isInput || delete this.element.data().date
            },
            getDate: function () {
                var e = this.getUTCDate();
                return new Date(e.getTime() + 6e4 * e.getTimezoneOffset())
            },
            getUTCDate: function () {
                return this.date
            },
            setDate: function (e) {
                this.setUTCDate(new Date(e.getTime() - 6e4 * e.getTimezoneOffset()))
            },
            setUTCDate: function (e) {
                this.date = e, this.setValue()
            },
            setValue: function () {
                var e = this.getFormattedDate();
                this.isInput ? this.element.val(e) : this.component && this.element.find("input").val(e)
            },
            getFormattedDate: function (e) {
                return e === undefined && (e = this.o.format), d.formatDate(this.date, e, this.o.language)
            },
            setStartDate: function (e) {
                this._process_options({
                    startDate: e
                }), this.update(), this.updateNavArrows()
            },
            setEndDate: function (e) {
                this._process_options({
                    endDate: e
                }), this.update(), this.updateNavArrows()
            },
            setDaysOfWeekDisabled: function (e) {
                this._process_options({
                    daysOfWeekDisabled: e
                }), this.update(), this.updateNavArrows()
            },
            place: function () {
                if (!this.isInline) {
                    var t = parseInt(this.element.parents().filter(function () {
                            return "auto" != e(this).css("z-index")
                        }).first().css("z-index")) + 10,
                        n = this.component ? this.component.parent().offset() : this.element.offset(),
                        i = this.component ? this.component.outerHeight(!0) : this.element.outerHeight(!0);
                    this.picker.css({
                        top: n.top + i,
                        left: n.left,
                        zIndex: t
                    })
                }
            },
            _allow_update: !0,
            update: function () {
                if (this._allow_update) {
                    var e, t = !1;
                    arguments && arguments.length && ("string" == typeof arguments[0] || arguments[0] instanceof Date) ? (e = arguments[0], t = !0) : (e = this.isInput ? this.element.val() : this.element.data("date") || this.element.find("input").val(), delete this.element.data().date), this.date = d.parseDate(e, this.o.format, this.o.language), t && this.setValue(), this.date < this.o.startDate ? this.viewDate = new Date(this.o.startDate) : this.date > this.o.endDate ? this.viewDate = new Date(this.o.endDate) : this.viewDate = new Date(this.date), this.fill()
                }
            },
            fillDow: function () {
                var e = this.o.weekStart,
                    t = "<tr>";
                if (this.o.calendarWeeks) {
                    var n = '<th class="cw">&nbsp;</th>';
                    t += n, this.picker.find(".datepicker-days thead tr:first-child").prepend(n)
                }
                for (; e < this.o.weekStart + 7;) t += '<th class="dow">' + c[this.o.language].daysMin[e++ % 7] + "</th>";
                t += "</tr>", this.picker.find(".datepicker-days thead").append(t)
            },
            fillMonths: function () {
                for (var e = "", t = 0; t < 12;) e += '<span class="month">' + c[this.o.language].monthsShort[t++] + "</span>";
                this.picker.find(".datepicker-months td").html(e)
            },
            setRange: function (t) {
                t && t.length ? this.range = e.map(t, function (e) {
                    return e.valueOf()
                }) : delete this.range, this.fill()
            },
            getClassNames: function (t) {
                var n = [],
                    i = this.viewDate.getUTCFullYear(),
                    r = this.viewDate.getUTCMonth(),
                    a = this.date.valueOf(),
                    o = new Date;
                return t.getUTCFullYear() < i || t.getUTCFullYear() == i && t.getUTCMonth() < r ? n.push("old") : (t.getUTCFullYear() > i || t.getUTCFullYear() == i && t.getUTCMonth() > r) && n.push("new"), this.o.todayHighlight && t.getUTCFullYear() == o.getFullYear() && t.getUTCMonth() == o.getMonth() && t.getUTCDate() == o.getDate() && n.push("today"), a && t.valueOf() == a && n.push("active"), (t.valueOf() < this.o.startDate || t.valueOf() > this.o.endDate || -1 !== e.inArray(t.getUTCDay(), this.o.daysOfWeekDisabled)) && n.push("disabled"), this.range && (t > this.range[0] && t < this.range[this.range.length - 1] && n.push("range"), -1 != e.inArray(t.valueOf(), this.range) && n.push("selected")), n
            },
            fill: function () {
                var n, i = new Date(this.viewDate),
                    r = i.getUTCFullYear(),
                    a = i.getUTCMonth(),
                    o = this.o.startDate !== -Infinity ? this.o.startDate.getUTCFullYear() : -Infinity,
                    s = this.o.startDate !== -Infinity ? this.o.startDate.getUTCMonth() : -Infinity,
                    l = this.o.endDate !== Infinity ? this.o.endDate.getUTCFullYear() : Infinity,
                    u = this.o.endDate !== Infinity ? this.o.endDate.getUTCMonth() : Infinity;
                this.date && this.date.valueOf();
                this.picker.find(".datepicker-days thead th.datepicker-switch").text(c[this.o.language].months[a] + " " + r), this.picker.find("tfoot th.today").text(c[this.o.language].today).toggle(!1 !== this.o.todayBtn), this.picker.find("tfoot th.clear").text(c[this.o.language].clear).toggle(!1 !== this.o.clearBtn), this.updateNavArrows(), this.fillMonths();
                var h = t(r, a - 1, 28, 0, 0, 0, 0),
                    p = d.getDaysInMonth(h.getUTCFullYear(), h.getUTCMonth());
                h.setUTCDate(p), h.setUTCDate(p - (h.getUTCDay() - this.o.weekStart + 7) % 7);
                var f = new Date(h);
                f.setUTCDate(f.getUTCDate() + 42), f = f.valueOf();
                for (var m, g = []; h.valueOf() < f;) {
                    if (h.getUTCDay() == this.o.weekStart && (g.push("<tr>"), this.o.calendarWeeks)) {
                        var v = new Date(+h + (this.o.weekStart - h.getUTCDay() - 7) % 7 * 864e5),
                            y = new Date(+v + (11 - v.getUTCDay()) % 7 * 864e5),
                            b = new Date(+(b = t(y.getUTCFullYear(), 0, 1)) + (11 - b.getUTCDay()) % 7 * 864e5),
                            _ = (y - b) / 864e5 / 7 + 1;
                        g.push('<td class="cw">' + _ + "</td>")
                    }(m = this.getClassNames(h)).push("day");
                    var w = this.o.beforeShowDay(h);
                    w === undefined ? w = {} : "boolean" == typeof w ? w = {
                        enabled: w
                    } : "string" == typeof w && (w = {
                        classes: w
                    }), !1 === w.enabled && m.push("disabled"), w.classes && (m = m.concat(w.classes.split(/\s+/))), w.tooltip && (n = w.tooltip), m = e.unique(m), g.push('<td class="' + m.join(" ") + '"' + (n ? ' title="' + n + '"' : "") + ">" + h.getUTCDate() + "</td>"), h.getUTCDay() == this.o.weekEnd && g.push("</tr>"), h.setUTCDate(h.getUTCDate() + 1)
                }
                this.picker.find(".datepicker-days tbody").empty().append(g.join(""));
                var k = this.date && this.date.getUTCFullYear(),
                    C = this.picker.find(".datepicker-months").find("th:eq(1)").text(r).end().find("span").removeClass("active");
                k && k == r && C.eq(this.date.getUTCMonth()).addClass("active"), (r < o || r > l) && C.addClass("disabled"), r == o && C.slice(0, s).addClass("disabled"), r == l && C.slice(u + 1).addClass("disabled"), g = "", r = 10 * parseInt(r / 10, 10);
                var x = this.picker.find(".datepicker-years").find("th:eq(1)").text(r + "-" + (r + 9)).end().find("td");
                r -= 1;
                for (var D = -1; D < 11; D++) g += '<span class="year' + (-1 == D ? " old" : 10 == D ? " new" : "") + (k == r ? " active" : "") + (r < o || r > l ? " disabled" : "") + '">' + r + "</span>", r += 1;
                x.html(g)
            },
            updateNavArrows: function () {
                if (this._allow_update) {
                    var e = new Date(this.viewDate),
                        t = e.getUTCFullYear(),
                        n = e.getUTCMonth();
                    switch (this.viewMode) {
                        case 0:
                            this.o.startDate !== -Infinity && t <= this.o.startDate.getUTCFullYear() && n <= this.o.startDate.getUTCMonth() ? this.picker.find(".prev").css({
                                visibility: "hidden"
                            }) : this.picker.find(".prev").css({
                                visibility: "visible"
                            }), this.o.endDate !== Infinity && t >= this.o.endDate.getUTCFullYear() && n >= this.o.endDate.getUTCMonth() ? this.picker.find(".next").css({
                                visibility: "hidden"
                            }) : this.picker.find(".next").css({
                                visibility: "visible"
                            });
                            break;
                        case 1:
                        case 2:
                            this.o.startDate !== -Infinity && t <= this.o.startDate.getUTCFullYear() ? this.picker.find(".prev").css({
                                visibility: "hidden"
                            }) : this.picker.find(".prev").css({
                                visibility: "visible"
                            }), this.o.endDate !== Infinity && t >= this.o.endDate.getUTCFullYear() ? this.picker.find(".next").css({
                                visibility: "hidden"
                            }) : this.picker.find(".next").css({
                                visibility: "visible"
                            })
                    }
                }
            },
            click: function (n) {
                n.preventDefault();
                var i = e(n.target).closest("span, td, th");
                if (1 == i.length) switch (i[0].nodeName.toLowerCase()) {
                    case "th":
                        switch (i[0].className) {
                            case "datepicker-switch":
                                this.showMode(1);
                                break;
                            case "prev":
                            case "next":
                                var r = d.modes[this.viewMode].navStep * ("prev" == i[0].className ? -1 : 1);
                                switch (this.viewMode) {
                                    case 0:
                                        this.viewDate = this.moveMonth(this.viewDate, r);
                                        break;
                                    case 1:
                                    case 2:
                                        this.viewDate = this.moveYear(this.viewDate, r)
                                }
                                this.fill();
                                break;
                            case "today":
                                var a = new Date;
                                a = t(a.getFullYear(), a.getMonth(), a.getDate(), 0, 0, 0), this.showMode(-2);
                                var o = "linked" == this.o.todayBtn ? null : "view";
                                this._setDate(a, o);
                                break;
                            case "clear":
                                var s;
                                this.isInput ? s = this.element : this.component && (s = this.element.find("input")), s && s.val("").change(), this._trigger("changeDate"), this.update(), this.o.autoclose && this.hide()
                        }
                        break;
                    case "span":
                        if (!i.is(".disabled")) {
                            if (this.viewDate.setUTCDate(1), i.is(".month")) {
                                var l = 1,
                                    u = i.parent().find("span").index(i),
                                    c = this.viewDate.getUTCFullYear();
                                this.viewDate.setUTCMonth(u), this._trigger("changeMonth", this.viewDate), 1 === this.o.minViewMode && this._setDate(t(c, u, l, 0, 0, 0, 0))
                            } else {
                                c = parseInt(i.text(), 10) || 0, l = 1, u = 0;
                                this.viewDate.setUTCFullYear(c), this._trigger("changeYear", this.viewDate), 2 === this.o.minViewMode && this._setDate(t(c, u, l, 0, 0, 0, 0))
                            }
                            this.showMode(-1), this.fill()
                        }
                        break;
                    case "td":
                        if (i.is(".day") && !i.is(".disabled")) {
                            l = parseInt(i.text(), 10) || 1, c = this.viewDate.getUTCFullYear(), u = this.viewDate.getUTCMonth();
                            i.is(".old") ? 0 === u ? (u = 11, c -= 1) : u -= 1 : i.is(".new") && (11 == u ? (u = 0, c += 1) : u += 1), this._setDate(t(c, u, l, 0, 0, 0, 0))
                        }
                }
            },
            _setDate: function (e, t) {
                var n;
                t && "date" != t || (this.date = new Date(e)), t && "view" != t || (this.viewDate = new Date(e)), this.fill(), this.setValue(), this._trigger("changeDate"), this.isInput ? n = this.element : this.component && (n = this.element.find("input")), n && (n.change(), !this.o.autoclose || t && "date" != t || this.hide())
            },
            moveMonth: function (e, t) {
                if (!t) return e;
                var n, i, r = new Date(e.valueOf()),
                    a = r.getUTCDate(),
                    o = r.getUTCMonth(),
                    s = Math.abs(t);
                if (t = t > 0 ? 1 : -1, 1 == s) i = -1 == t ? function () {
                    return r.getUTCMonth() == o
                } : function () {
                    return r.getUTCMonth() != n
                }, n = o + t, r.setUTCMonth(n), (n < 0 || n > 11) && (n = (n + 12) % 12);
                else {
                    for (var l = 0; l < s; l++) r = this.moveMonth(r, t);
                    n = r.getUTCMonth(), r.setUTCDate(a), i = function () {
                        return n != r.getUTCMonth()
                    }
                }
                for (; i();) r.setUTCDate(--a), r.setUTCMonth(n);
                return r
            },
            moveYear: function (e, t) {
                return this.moveMonth(e, 12 * t)
            },
            dateWithinRange: function (e) {
                return e >= this.o.startDate && e <= this.o.endDate
            },
            keydown: function (e) {
                if (this.picker.is(":not(:visible)")) 27 == e.keyCode && this.show();
                else {
                    var t, n, i, r, a = !1;
                    switch (e.keyCode) {
                        case 27:
                            this.hide(), e.preventDefault();
                            break;
                        case 37:
                        case 39:
                            if (!this.o.keyboardNavigation) break;
                            t = 37 == e.keyCode ? -1 : 1, e.ctrlKey ? (n = this.moveYear(this.date, t), i = this.moveYear(this.viewDate, t)) : e.shiftKey ? (n = this.moveMonth(this.date, t), i = this.moveMonth(this.viewDate, t)) : ((n = new Date(this.date)).setUTCDate(this.date.getUTCDate() + t), (i = new Date(this.viewDate)).setUTCDate(this.viewDate.getUTCDate() + t)), this.dateWithinRange(n) && (this.date = n, this.viewDate = i, this.setValue(), this.update(), e.preventDefault(), a = !0);
                            break;
                        case 38:
                        case 40:
                            if (!this.o.keyboardNavigation) break;
                            t = 38 == e.keyCode ? -1 : 1, e.ctrlKey ? (n = this.moveYear(this.date, t), i = this.moveYear(this.viewDate, t)) : e.shiftKey ? (n = this.moveMonth(this.date, t), i = this.moveMonth(this.viewDate, t)) : ((n = new Date(this.date)).setUTCDate(this.date.getUTCDate() + 7 * t), (i = new Date(this.viewDate)).setUTCDate(this.viewDate.getUTCDate() + 7 * t)), this.dateWithinRange(n) && (this.date = n, this.viewDate = i, this.setValue(), this.update(), e.preventDefault(), a = !0);
                            break;
                        case 13:
                            this.hide(), e.preventDefault();
                            break;
                        case 9:
                            this.hide()
                    }
                    if (a) this._trigger("changeDate"), this.isInput ? r = this.element : this.component && (r = this.element.find("input")), r && r.change()
                }
            },
            showMode: function (e) {
                e && (this.viewMode = Math.max(this.o.minViewMode, Math.min(2, this.viewMode + e))), this.picker.find(">div").hide().filter(".datepicker-" + d.modes[this.viewMode].clsName).css("display", "block"), this.updateNavArrows()
            }
        };
        var a = function (t, n) {
            this.element = e(t), this.inputs = e.map(n.inputs, function (e) {
                return e.jquery ? e[0] : e
            }), delete n.inputs, e(this.inputs).datepicker(n).bind("changeDate", e.proxy(this.dateUpdated, this)), this.pickers = e.map(this.inputs, function (t) {
                return e(t).data("datepicker")
            }), this.updateDates()
        };
        a.prototype = {
            updateDates: function () {
                this.dates = e.map(this.pickers, function (e) {
                    return e.date
                }), this.updateRanges()
            },
            updateRanges: function () {
                var t = e.map(this.dates, function (e) {
                    return e.valueOf()
                });
                e.each(this.pickers, function (e, n) {
                    n.setRange(t)
                })
            },
            dateUpdated: function (t) {
                var n = e(t.target).data("datepicker").getUTCDate(),
                    i = e.inArray(t.target, this.inputs),
                    r = this.inputs.length;
                if (-1 != i) {
                    if (n < this.dates[i])
                        for (; i >= 0 && n < this.dates[i];) this.pickers[i--].setUTCDate(n);
                    else if (n > this.dates[i])
                        for (; i < r && n > this.dates[i];) this.pickers[i++].setUTCDate(n);
                    this.updateDates()
                }
            },
            remove: function () {
                e.map(this.pickers, function (e) {
                    e.remove()
                }), delete this.element.data().datepicker
            }
        };
        var o = e.fn.datepicker,
            s = e.fn.datepicker = function (t) {
                var o, s = Array.apply(null, arguments);
                return s.shift(), this.each(function () {
                    var u = e(this),
                        c = u.data("datepicker"),
                        d = "object" == typeof t && t;
                    if (!c) {
                        var h = n(this, "date"),
                            p = i(e.extend({}, l, h, d).language),
                            f = e.extend({}, l, p, h, d);
                        if (u.is(".input-daterange") || f.inputs) {
                            var m = {
                                inputs: f.inputs || u.find("input").toArray()
                            };
                            u.data("datepicker", c = new a(this, e.extend(f, m)))
                        } else u.data("datepicker", c = new r(this, f))
                    }
                    if ("string" == typeof t && "function" == typeof c[t] && (o = c[t].apply(c, s)) !== undefined) return !1
                }), o !== undefined ? o : this
            },
            l = e.fn.datepicker.defaults = {
                autoclose: !1,
                beforeShowDay: e.noop,
                calendarWeeks: !1,
                clearBtn: !1,
                daysOfWeekDisabled: [],
                endDate: Infinity,
                forceParse: !0,
                format: "mm/dd/yyyy",
                keyboardNavigation: !0,
                language: "en",
                minViewMode: 0,
                rtl: !1,
                startDate: -Infinity,
                startView: 0,
                todayBtn: !1,
                todayHighlight: !1,
                weekStart: 0
            },
            u = e.fn.datepicker.locale_opts = ["format", "rtl", "weekStart"];
        e.fn.datepicker.Constructor = r;
        var c = e.fn.datepicker.dates = {
                en: {
                    days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                    daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                    daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
                    months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                    monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                    today: "Today",
                    clear: "Clear"
                }
            },
            d = {
                modes: [{
                    clsName: "days",
                    navFnc: "Month",
                    navStep: 1
                }, {
                    clsName: "months",
                    navFnc: "FullYear",
                    navStep: 1
                }, {
                    clsName: "years",
                    navFnc: "FullYear",
                    navStep: 10
                }],
                isLeapYear: function (e) {
                    return e % 4 == 0 && e % 100 != 0 || e % 400 == 0
                },
                getDaysInMonth: function (e, t) {
                    return [31, d.isLeapYear(e) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][t]
                },
                validParts: /dd?|DD?|mm?|MM?|yy(?:yy)?/g,
                nonpunctuation: /[^ -\/:-@\[\u3400-\u9fff-`{-~\t\n\r]+/g,
                parseFormat: function (e) {
                    var t = e.replace(this.validParts, "\0").split("\0"),
                        n = e.match(this.validParts);
                    if (!t || !t.length || !n || 0 === n.length) throw new Error("Invalid date format.");
                    return {
                        separators: t,
                        parts: n
                    }
                },
                parseDate: function (n, i, a) {
                    if (n instanceof Date) return n;
                    if ("string" == typeof i && (i = d.parseFormat(i)), /^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/.test(n)) {
                        var o, s = /([\-+]\d+)([dmwy])/,
                            l = n.match(/([\-+]\d+)([dmwy])/g);
                        n = new Date;
                        for (var u = 0; u < l.length; u++) switch (f = s.exec(l[u]), o = parseInt(f[1]), f[2]) {
                            case "d":
                                n.setUTCDate(n.getUTCDate() + o);
                                break;
                            case "m":
                                n = r.prototype.moveMonth.call(r.prototype, n, o);
                                break;
                            case "w":
                                n.setUTCDate(n.getUTCDate() + 7 * o);
                                break;
                            case "y":
                                n = r.prototype.moveYear.call(r.prototype, n, o)
                        }
                        return t(n.getUTCFullYear(), n.getUTCMonth(), n.getUTCDate(), 0, 0, 0)
                    }
                    l = n && n.match(this.nonpunctuation) || [], n = new Date;
                    var h, p, f, m = {},
                        g = ["yyyy", "yy", "M", "MM", "m", "mm", "d", "dd"],
                        v = {
                            yyyy: function (e, t) {
                                return e.setUTCFullYear(t)
                            },
                            yy: function (e, t) {
                                return e.setUTCFullYear(2e3 + t)
                            },
                            m: function (e, t) {
                                for (t -= 1; t < 0;) t += 12;
                                for (t %= 12, e.setUTCMonth(t); e.getUTCMonth() != t;) e.setUTCDate(e.getUTCDate() - 1);
                                return e
                            },
                            d: function (e, t) {
                                return e.setUTCDate(t)
                            }
                        };
                    v.M = v.MM = v.mm = v.m, v.dd = v.d, n = t(n.getFullYear(), n.getMonth(), n.getDate(), 0, 0, 0);
                    var y = i.parts.slice();
                    if (l.length != y.length && (y = e(y).filter(function (t, n) {
                            return -1 !== e.inArray(n, g)
                        }).toArray()), l.length == y.length) {
                        u = 0;
                        for (var b = y.length; u < b; u++) {
                            if (h = parseInt(l[u], 10), f = y[u], isNaN(h)) switch (f) {
                                case "MM":
                                    p = e(c[a].months).filter(function () {
                                        var e = this.slice(0, l[u].length);
                                        return e == l[u].slice(0, e.length)
                                    }), h = e.inArray(p[0], c[a].months) + 1;
                                    break;
                                case "M":
                                    p = e(c[a].monthsShort).filter(function () {
                                        var e = this.slice(0, l[u].length);
                                        return e == l[u].slice(0, e.length)
                                    }), h = e.inArray(p[0], c[a].monthsShort) + 1
                            }
                            m[f] = h
                        }
                        var _;
                        for (u = 0; u < g.length; u++)(_ = g[u]) in m && !isNaN(m[_]) && v[_](n, m[_])
                    }
                    return n
                },
                formatDate: function (t, n, i) {
                    "string" == typeof n && (n = d.parseFormat(n));
                    var r = {
                        d: t.getUTCDate(),
                        D: c[i].daysShort[t.getUTCDay()],
                        DD: c[i].days[t.getUTCDay()],
                        m: t.getUTCMonth() + 1,
                        M: c[i].monthsShort[t.getUTCMonth()],
                        MM: c[i].months[t.getUTCMonth()],
                        yy: t.getUTCFullYear().toString().substring(2),
                        yyyy: t.getUTCFullYear()
                    };
                    r.dd = (r.d < 10 ? "0" : "") + r.d, r.mm = (r.m < 10 ? "0" : "") + r.m;
                    t = [];
                    for (var a = e.extend([], n.separators), o = 0, s = n.parts.length; o <= s; o++) a.length && t.push(a.shift()), t.push(r[n.parts[o]]);
                    return t.join("")
                },
                headTemplate: '<thead><tr><th class="prev"><i class="icon-arrow-left"/></th><th colspan="5" class="datepicker-switch"></th><th class="next"><i class="icon-arrow-right"/></th></tr></thead>',
                contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>',
                footTemplate: '<tfoot><tr><th colspan="7" class="today"></th></tr><tr><th colspan="7" class="clear"></th></tr></tfoot>'
            };
        d.template = '<div class="datepicker"><div class="datepicker-days"><table class=" table-condensed">' + d.headTemplate + "<tbody></tbody>" + d.footTemplate + '</table></div><div class="datepicker-months"><table class="table-condensed">' + d.headTemplate + d.contTemplate + d.footTemplate + '</table></div><div class="datepicker-years"><table class="table-condensed">' + d.headTemplate + d.contTemplate + d.footTemplate + "</table></div></div>", e.fn.datepicker.DPGlobal = d, e.fn.datepicker.noConflict = function () {
            return e.fn.datepicker = o, this
        }, e(document).on("focus.datepicker.data-api click.datepicker.data-api", '[data-provide="datepicker"]', function (t) {
            var n = e(this);
            n.data("datepicker") || (t.preventDefault(), s.call(n, "show"))
        }), e(function () {
            s.call(e('[data-provide="datepicker-inline"]'))
        })
    }(window.jQuery),
    function (e) {
        "use strict";
        e.fn.bdatepicker = e.fn.datepicker.noConflict(), e.fn.datepicker || (e.fn.datepicker = e.fn.bdatepicker);
        var t = function (e) {
            this.init("date", e, t.defaults), this.initPicker(e, t.defaults)
        };
        e.fn.editableutils.inherit(t, e.fn.editabletypes.abstractinput), e.extend(t.prototype, {
            initPicker: function (t, n) {
                this.options.viewformat || (this.options.viewformat = this.options.format), t.datepicker = e.fn.editableutils.tryParseJson(t.datepicker, !0), this.options.datepicker = e.extend({}, n.datepicker, t.datepicker, {
                    format: this.options.viewformat
                }), this.options.datepicker.language = this.options.datepicker.language || "en", this.dpg = e.fn.bdatepicker.DPGlobal, this.parsedFormat = this.dpg.parseFormat(this.options.format), this.parsedViewFormat = this.dpg.parseFormat(this.options.viewformat)
            },
            render: function () {
                this.$input.bdatepicker(this.options.datepicker), this.options.clear && (this.$clear = e('<a href="#"></a>').html(this.options.clear).click(e.proxy(function (e) {
                    e.preventDefault(), e.stopPropagation(), this.clear()
                }, this)), this.$tpl.parent().append(e('<div class="editable-clear">').append(this.$clear)))
            },
            value2html: function (e, n) {
                var i = e ? this.dpg.formatDate(e, this.parsedViewFormat, this.options.datepicker.language) : "";
                t.superclass.value2html.call(this, i, n)
            },
            html2value: function (e) {
                return this.parseDate(e, this.parsedViewFormat)
            },
            value2str: function (e) {
                return e ? this.dpg.formatDate(e, this.parsedFormat, this.options.datepicker.language) : ""
            },
            str2value: function (e) {
                return this.parseDate(e, this.parsedFormat)
            },
            value2submit: function (e) {
                return this.value2str(e)
            },
            value2input: function (e) {
                this.$input.bdatepicker("update", e)
            },
            input2value: function () {
                return this.$input.data("datepicker").date
            },
            activate: function () {},
            clear: function () {
                this.$input.data("datepicker").date = null, this.$input.find(".active").removeClass("active"), this.options.showbuttons || this.$input.closest("form").submit()
            },
            autosubmit: function () {
                this.$input.on("mouseup", ".day", function (t) {
                    if (!e(t.currentTarget).is(".old") && !e(t.currentTarget).is(".new")) {
                        var n = e(this).closest("form");
                        setTimeout(function () {
                            n.submit()
                        }, 200)
                    }
                })
            },
            parseDate: function (e, t) {
                var n = null;
                return e && (n = this.dpg.parseDate(e, t, this.options.datepicker.language), "string" == typeof e && e !== this.dpg.formatDate(n, t, this.options.datepicker.language) && (n = null)), n
            }
        }), t.defaults = e.extend({}, e.fn.editabletypes.abstractinput.defaults, {
            tpl: '<div class="editable-date well"></div>',
            inputclass: null,
            format: "yyyy-mm-dd",
            viewformat: null,
            datepicker: {
                weekStart: 0,
                startView: 0,
                minViewMode: 0,
                autoclose: !1
            },
            clear: "&times; clear"
        }), e.fn.editabletypes.date = t
    }(window.jQuery),
    function (e) {
        "use strict";
        var t = function (e) {
            this.init("datefield", e, t.defaults), this.initPicker(e, t.defaults)
        };
        e.fn.editableutils.inherit(t, e.fn.editabletypes.date), e.extend(t.prototype, {
            render: function () {
                this.$input = this.$tpl.find("input"), this.setClass(), this.setAttr("placeholder"), this.$tpl.bdatepicker(this.options.datepicker), this.$input.off("focus keydown"), this.$input.keyup(e.proxy(function () {
                    this.$tpl.removeData("date"), this.$tpl.bdatepicker("update")
                }, this))
            },
            value2input: function (e) {
                this.$input.val(e ? this.dpg.formatDate(e, this.parsedViewFormat, this.options.datepicker.language) : ""), this.$tpl.bdatepicker("update")
            },
            input2value: function () {
                return this.html2value(this.$input.val())
            },
            activate: function () {
                e.fn.editabletypes.text.prototype.activate.call(this)
            },
            autosubmit: function () {}
        }), t.defaults = e.extend({}, e.fn.editabletypes.date.defaults, {
            tpl: '<div class="input-append date"><input type="text"/><span class="add-on"><i class="icon-th"></i></span></div>',
            inputclass: "input-small",
            datepicker: {
                weekStart: 0,
                startView: 0,
                minViewMode: 0,
                autoclose: !0
            }
        }), e.fn.editabletypes.datefield = t
    }(window.jQuery),
    function (e) {
        "use strict";
        var t = function (e) {
            this.init("datetime", e, t.defaults), this.initPicker(e, t.defaults)
        };
        e.fn.editableutils.inherit(t, e.fn.editabletypes.abstractinput), e.extend(t.prototype, {
            initPicker: function (t, n) {
                this.options.viewformat || (this.options.viewformat = this.options.format), t.datetimepicker = e.fn.editableutils.tryParseJson(t.datetimepicker, !0), this.options.datetimepicker = e.extend({}, n.datetimepicker, t.datetimepicker, {
                    format: this.options.viewformat
                }), this.options.datetimepicker.language = this.options.datetimepicker.language || "en", this.dpg = e.fn.datetimepicker.DPGlobal, this.parsedFormat = this.dpg.parseFormat(this.options.format, this.options.formatType), this.parsedViewFormat = this.dpg.parseFormat(this.options.viewformat, this.options.formatType)
            },
            render: function () {
                this.$input.datetimepicker(this.options.datetimepicker), this.$input.on("changeMode", function () {
                    var t = e(this).closest("form").parent();
                    setTimeout(function () {
                        t.triggerHandler("resize")
                    }, 0)
                }), this.options.clear && (this.$clear = e('<a href="#"></a>').html(this.options.clear).click(e.proxy(function (e) {
                    e.preventDefault(), e.stopPropagation(), this.clear()
                }, this)), this.$tpl.parent().append(e('<div class="editable-clear">').append(this.$clear)))
            },
            value2html: function (e, n) {
                var i = e ? this.dpg.formatDate(this.toUTC(e), this.parsedViewFormat, this.options.datetimepicker.language, this.options.formatType) : "";
                if (!n) return i;
                t.superclass.value2html.call(this, i, n)
            },
            html2value: function (e) {
                var t = this.parseDate(e, this.parsedViewFormat);
                return t ? this.fromUTC(t) : null
            },
            value2str: function (e) {
                return e ? this.dpg.formatDate(this.toUTC(e), this.parsedFormat, this.options.datetimepicker.language, this.options.formatType) : ""
            },
            str2value: function (e) {
                var t = this.parseDate(e, this.parsedFormat);
                return t ? this.fromUTC(t) : null
            },
            value2submit: function (e) {
                return this.value2str(e)
            },
            value2input: function (e) {
                e && this.$input.data("datetimepicker").setDate(e)
            },
            input2value: function () {
                var e = this.$input.data("datetimepicker");
                return e.date ? e.getDate() : null
            },
            activate: function () {},
            clear: function () {
                this.$input.data("datetimepicker").date = null, this.$input.find(".active").removeClass("active"), this.options.showbuttons || this.$input.closest("form").submit()
            },
            autosubmit: function () {
                this.$input.on("mouseup", ".minute", function () {
                    var t = e(this).closest("form");
                    setTimeout(function () {
                        t.submit()
                    }, 200)
                })
            },
            toUTC: function (e) {
                return e ? new Date(e.valueOf() - 6e4 * e.getTimezoneOffset()) : e
            },
            fromUTC: function (e) {
                return e ? new Date(e.valueOf() + 6e4 * e.getTimezoneOffset()) : e
            },
            parseDate: function (e, t) {
                var n = null;
                return e && (n = this.dpg.parseDate(e, t, this.options.datetimepicker.language, this.options.formatType), "string" == typeof e && e !== this.dpg.formatDate(n, t, this.options.datetimepicker.language, this.options.formatType) && (n = null)), n
            }
        }), t.defaults = e.extend({}, e.fn.editabletypes.abstractinput.defaults, {
            tpl: '<div class="editable-date well"></div>',
            inputclass: null,
            format: "yyyy-mm-dd hh:ii",
            formatType: "standard",
            viewformat: null,
            datetimepicker: {
                todayHighlight: !1,
                autoclose: !1
            },
            clear: "&times; clear"
        }), e.fn.editabletypes.datetime = t
    }(window.jQuery),
    function (e) {
        "use strict";
        var t = function (e) {
            this.init("datetimefield", e, t.defaults), this.initPicker(e, t.defaults)
        };
        e.fn.editableutils.inherit(t, e.fn.editabletypes.datetime), e.extend(t.prototype, {
            render: function () {
                this.$input = this.$tpl.find("input"), this.setClass(), this.setAttr("placeholder"), this.$tpl.datetimepicker(this.options.datetimepicker), this.$input.off("focus keydown"), this.$input.keyup(e.proxy(function () {
                    this.$tpl.removeData("date"), this.$tpl.datetimepicker("update")
                }, this))
            },
            value2input: function (e) {
                this.$input.val(this.value2html(e)), this.$tpl.datetimepicker("update")
            },
            input2value: function () {
                return this.html2value(this.$input.val())
            },
            activate: function () {
                e.fn.editabletypes.text.prototype.activate.call(this)
            },
            autosubmit: function () {}
        }), t.defaults = e.extend({}, e.fn.editabletypes.datetime.defaults, {
            tpl: '<div class="input-append date"><input type="text"/><span class="add-on"><i class="icon-th"></i></span></div>',
            inputclass: "input-medium",
            datetimepicker: {
                todayHighlight: !1,
                autoclose: !0
            }
        }), e.fn.editabletypes.datetimefield = t
    }(window.jQuery),
    function () {
        jQuery(document).on("turbolinks:load", function () {
            return window.clearCart = function () {
                return jQuery.ajax("/cart/clear.js", {
                    type: "POST",
                    dataType: "json",
                    async: !1,
                    success: function () {
                        var e;
                        return e = {
                            file_format_id: "",
                            background_option_id: "",
                            custom_background_color: "",
                            custom_background_image: "",
                            layer_option: "",
                            return_file_format: "",
                            set_margin: "",
                            resize_image: "",
                            image_width: "",
                            image_height: "",
                            additional_comment: "",
                            exchange_rate_gbp: "",
                            source_url: "",
                            quotation_id: "",
                            template_id: "",
                            sample_image: "",
                            order_type: ""
                        }, jQuery.ajax({
                            type: "POST",
                            url: "/cart/update.js",
                            data: {
                                attributes: e
                            },
                            dataType: "json",
                            async: !1
                        })
                    }
                })
            }, window.sleep = function (e) {
                var t, n;
                for (n = (new Date).getTime(), t = [];
                    (new Date).getTime() - n < e;);
                return t
            }, window.log = function (e) {
                return console.log(e)
            }, String.prototype.capitalize = function () {
                return this.charAt(0).toUpperCase() + this.slice(1)
            }, String.prototype.humanize = function () {
                return this.replace("_", " ").capitalize()
            }, window.waitForEl = function (e, t) {
                $(e).length ? t() : setTimeout(function () {
                    waitForEl(e, t)
                }, 100)
            }
        })
    }.call(this), jQuery(document).on("turbolinks:load", function () {
        if ("undefined" != typeof chmac && null !== chmac) {
            var e = document.getElementsByTagName("a");
            for (i = 0; i < e.length; i++)
                if (obj = e[i], !obj.dataset.skipAutosuffix && (href = obj.getAttribute("href"), null != href)) {
                    var t = href.match(/\/a\//gi);
                    null != t && t.length > 0 && (new_href = replaceUrlParam(href, "chmac", chmac), new_href = removeParam("path_prefix", new_href), new_href = removeParam("shop", new_href), new_href = removeParam("signature", new_href), new_href = removeParam("timestamp", new_href), obj.setAttribute("href", new_href))
                }
        }
    }),
    /*! jQuery Validation Plugin - v1.11.1 - 3/22/2013\n* https://github.com/jzaefferer/jquery-validation
     * Copyright (c) 2013 JÃƒÂ¶rn Zaefferer; Licensed MIT */
    function (e) {
        e.extend(e.fn, {
            validate: function (t) {
                if (this.length) {
                    var n = e.data(this[0], "validator");
                    return n || (this.attr("novalidate", "novalidate"), n = new e.validator(t, this[0]), e.data(this[0], "validator", n), n.settings.onsubmit && (this.validateDelegate(":submit", "click", function (t) {
                        n.settings.submitHandler && (n.submitButton = t.target), e(t.target).hasClass("cancel") && (n.cancelSubmit = !0), void 0 !== e(t.target).attr("formnovalidate") && (n.cancelSubmit = !0)
                    }), this.submit(function (t) {
                        function i() {
                            var i;
                            return !n.settings.submitHandler || (n.submitButton && (i = e("<input type='hidden'/>").attr("name", n.submitButton.name).val(e(n.submitButton).val()).appendTo(n.currentForm)), n.settings.submitHandler.call(n, n.currentForm, t), n.submitButton && i.remove(), !1)
                        }
                        return n.settings.debug && t.preventDefault(), n.cancelSubmit ? (n.cancelSubmit = !1, i()) : n.form() ? n.pendingRequest ? (n.formSubmitted = !0, !1) : i() : (n.focusInvalid(), !1)
                    })), n)
                }
                t && t.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing.")
            },
            valid: function () {
                if (e(this[0]).is("form")) return this.validate().form();
                var t = !0,
                    n = e(this[0].form).validate();
                return this.each(function () {
                    t = t && n.element(this)
                }), t
            },
            removeAttrs: function (t) {
                var n = {},
                    i = this;
                return e.each(t.split(/\s/), function (e, t) {
                    n[t] = i.attr(t), i.removeAttr(t)
                }), n
            },
            rules: function (t, n) {
                var i = this[0];
                if (t) {
                    var r = e.data(i.form, "validator").settings,
                        a = r.rules,
                        o = e.validator.staticRules(i);
                    switch (t) {
                        case "add":
                            e.extend(o, e.validator.normalizeRule(n)), delete o.messages, a[i.name] = o, n.messages && (r.messages[i.name] = e.extend(r.messages[i.name], n.messages));
                            break;
                        case "remove":
                            if (!n) return delete a[i.name], o;
                            var s = {};
                            return e.each(n.split(/\s/), function (e, t) {
                                s[t] = o[t], delete o[t]
                            }), s
                    }
                }
                var l = e.validator.normalizeRules(e.extend({}, e.validator.classRules(i), e.validator.attributeRules(i), e.validator.dataRules(i), e.validator.staticRules(i)), i);
                if (l.required) {
                    var u = l.required;
                    delete l.required, l = e.extend({
                        required: u
                    }, l)
                }
                return l
            }
        }), e.extend(e.expr[":"], {
            blank: function (t) {
                return !e.trim("" + e(t).val())
            },
            filled: function (t) {
                return !!e.trim("" + e(t).val())
            },
            unchecked: function (t) {
                return !e(t).prop("checked")
            }
        }), e.validator = function (t, n) {
            this.settings = e.extend(!0, {}, e.validator.defaults, t), this.currentForm = n, this.init()
        }, e.validator.format = function (t, n) {
            return 1 === arguments.length ? function () {
                var n = e.makeArray(arguments);
                return n.unshift(t), e.validator.format.apply(this, n)
            } : (arguments.length > 2 && n.constructor !== Array && (n = e.makeArray(arguments).slice(1)), n.constructor !== Array && (n = [n]), e.each(n, function (e, n) {
                t = t.replace(RegExp("\\{" + e + "\\}", "g"), function () {
                    return n
                })
            }), t)
        }, e.extend(e.validator, {
            defaults: {
                messages: {},
                groups: {},
                rules: {},
                errorClass: "error",
                validClass: "valid",
                errorElement: "label",
                focusInvalid: !0,
                errorContainer: e([]),
                errorLabelContainer: e([]),
                onsubmit: !0,
                ignore: ":hidden",
                ignoreTitle: !1,
                onfocusin: function (e) {
                    this.lastActive = e, this.settings.focusCleanup && !this.blockFocusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, e, this.settings.errorClass, this.settings.validClass), this.addWrapper(this.errorsFor(e)).hide())
                },
                onfocusout: function (e) {
                    this.checkable(e) || !(e.name in this.submitted) && this.optional(e) || this.element(e)
                },
                onkeyup: function (e, t) {
                    (9 !== t.which || "" !== this.elementValue(e)) && (e.name in this.submitted || e === this.lastElement) && this.element(e)
                },
                onclick: function (e) {
                    e.name in this.submitted ? this.element(e) : e.parentNode.name in this.submitted && this.element(e.parentNode)
                },
                highlight: function (t, n, i) {
                    "radio" === t.type ? this.findByName(t.name).addClass(n).removeClass(i) : e(t).addClass(n).removeClass(i)
                },
                unhighlight: function (t, n, i) {
                    "radio" === t.type ? this.findByName(t.name).removeClass(n).addClass(i) : e(t).removeClass(n).addClass(i)
                }
            },
            setDefaults: function (t) {
                e.extend(e.validator.defaults, t)
            },
            messages: {
                required: "This field is required.",
                remote: "Please fix this field.",
                email: "Please enter a valid email address.",
                url: "Please enter a valid URL.",
                date: "Please enter a valid date.",
                dateISO: "Please enter a valid date (ISO).",
                number: "Please enter a valid number.",
                digits: "Please enter only digits.",
                creditcard: "Please enter a valid credit card number.",
                equalTo: "Please enter the same value again.",
                maxlength: e.validator.format("Please enter no more than {0} characters."),
                minlength: e.validator.format("Please enter at least {0} characters."),
                rangelength: e.validator.format("Please enter a value between {0} and {1} characters long."),
                range: e.validator.format("Please enter a value between {0} and {1}."),
                max: e.validator.format("Please enter a value less than or equal to {0}."),
                min: e.validator.format("Please enter a value greater than or equal to {0}.")
            },
            autoCreateRanges: !1,
            prototype: {
                init: function () {
                    function t(t) {
                        var n = e.data(this[0].form, "validator"),
                            i = "on" + t.type.replace(/^validate/, "");
                        n.settings[i] && n.settings[i].call(n, this[0], t)
                    }
                    this.labelContainer = e(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || e(this.currentForm), this.containers = e(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
                    var n = this.groups = {};
                    e.each(this.settings.groups, function (t, i) {
                        "string" == typeof i && (i = i.split(/\s/)), e.each(i, function (e, i) {
                            n[i] = t
                        })
                    });
                    var i = this.settings.rules;
                    e.each(i, function (t, n) {
                        i[t] = e.validator.normalizeRule(n)
                    }), e(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ", "focusin focusout keyup", t).validateDelegate("[type='radio'], [type='checkbox'], select, option", "click", t), this.settings.invalidHandler && e(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler)
                },
                form: function () {
                    return this.checkForm(), e.extend(this.submitted, this.errorMap), this.invalid = e.extend({}, this.errorMap), this.valid() || e(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
                },
                checkForm: function () {
                    this.prepareForm();
                    for (var e = 0, t = this.currentElements = this.elements(); t[e]; e++) this.check(t[e]);
                    return this.valid()
                },
                element: function (t) {
                    t = this.validationTargetFor(this.clean(t)), this.lastElement = t, this.prepareElement(t), this.currentElements = e(t);
                    var n = !1 !== this.check(t);
                    return n ? delete this.invalid[t.name] : this.invalid[t.name] = !0, this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), n
                },
                showErrors: function (t) {
                    if (t) {
                        for (var n in e.extend(this.errorMap, t), this.errorList = [], t) this.errorList.push({
                            message: t[n],
                            element: this.findByName(n)[0]
                        });
                        this.successList = e.grep(this.successList, function (e) {
                            return !(e.name in t)
                        })
                    }
                    this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
                },
                resetForm: function () {
                    e.fn.resetForm && e(this.currentForm).resetForm(), this.submitted = {}, this.lastElement = null, this.prepareForm(), this.hideErrors(), this.elements().removeClass(this.settings.errorClass).removeData("previousValue")
                },
                numberOfInvalids: function () {
                    return this.objectLength(this.invalid)
                },
                objectLength: function (e) {
                    var t = 0;
                    for (var n in e) t++;
                    return t
                },
                hideErrors: function () {
                    this.addWrapper(this.toHide).hide()
                },
                valid: function () {
                    return 0 === this.size()
                },
                size: function () {
                    return this.errorList.length
                },
                focusInvalid: function () {
                    if (this.settings.focusInvalid) try {
                        e(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
                    } catch (t) {}
                },
                findLastActive: function () {
                    var t = this.lastActive;
                    return t && 1 === e.grep(this.errorList, function (e) {
                        return e.element.name === t.name
                    }).length && t
                },
                elements: function () {
                    var t = this,
                        n = {};
                    return e(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function () {
                        return !this.name && t.settings.debug && window.console && console.error("%o has no name assigned", this), !(this.name in n || !t.objectLength(e(this).rules())) && (n[this.name] = !0, !0)
                    })
                },
                clean: function (t) {
                    return e(t)[0]
                },
                errors: function () {
                    var t = this.settings.errorClass.replace(" ", ".");
                    return e(this.settings.errorElement + "." + t, this.errorContext)
                },
                reset: function () {
                    this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = e([]), this.toHide = e([]), this.currentElements = e([])
                },
                prepareForm: function () {
                    this.reset(), this.toHide = this.errors().add(this.containers)
                },
                prepareElement: function (e) {
                    this.reset(), this.toHide = this.errorsFor(e)
                },
                elementValue: function (t) {
                    var n = e(t).attr("type"),
                        i = e(t).val();
                    return "radio" === n || "checkbox" === n ? e("input[name='" + e(t).attr("name") + "']:checked").val() : "string" == typeof i ? i.replace(/\r/g, "") : i
                },
                check: function (t) {
                    t = this.validationTargetFor(this.clean(t));
                    var n, i = e(t).rules(),
                        r = !1,
                        a = this.elementValue(t);
                    for (var o in i) {
                        var s = {
                            method: o,
                            parameters: i[o]
                        };
                        try {
                            if ("dependency-mismatch" === (n = e.validator.methods[o].call(this, a, t, s.parameters))) {
                                r = !0;
                                continue
                            }
                            if (r = !1, "pending" === n) return void(this.toHide = this.toHide.not(this.errorsFor(t)));
                            if (!n) return this.formatAndAdd(t, s), !1
                        } catch (l) {
                            throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + t.id + ", check the '" + s.method + "' method.", l), l
                        }
                    }
                    return r ? void 0 : (this.objectLength(i) && this.successList.push(t), !0)
                },
                customDataMessage: function (t, n) {
                    return e(t).data("msg-" + n.toLowerCase()) || t.attributes && e(t).attr("data-msg-" + n.toLowerCase())
                },
                customMessage: function (e, t) {
                    var n = this.settings.messages[e];
                    return n && (n.constructor === String ? n : n[t])
                },
                findDefined: function () {
                    for (var e = 0; arguments.length > e; e++)
                        if (void 0 !== arguments[e]) return arguments[e]
                },
                defaultMessage: function (t, n) {
                    return this.findDefined(this.customMessage(t.name, n), this.customDataMessage(t, n), !this.settings.ignoreTitle && t.title || void 0, e.validator.messages[n], "<strong>Warning: No message defined for " + t.name + "</strong>")
                },
                formatAndAdd: function (t, n) {
                    var i = this.defaultMessage(t, n.method),
                        r = /\$?\{(\d+)\}/g;
                    "function" == typeof i ? i = i.call(this, n.parameters, t) : r.test(i) && (i = e.validator.format(i.replace(r, "{$1}"), n.parameters)), this.errorList.push({
                        message: i,
                        element: t
                    }), this.errorMap[t.name] = i, this.submitted[t.name] = i
                },
                addWrapper: function (e) {
                    return this.settings.wrapper && (e = e.add(e.parent(this.settings.wrapper))), e
                },
                defaultShowErrors: function () {
                    var e, t;
                    for (e = 0; this.errorList[e]; e++) {
                        var n = this.errorList[e];
                        this.settings.highlight && this.settings.highlight.call(this, n.element, this.settings.errorClass, this.settings.validClass), this.showLabel(n.element, n.message)
                    }
                    if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)
                        for (e = 0; this.successList[e]; e++) this.showLabel(this.successList[e]);
                    if (this.settings.unhighlight)
                        for (e = 0, t = this.validElements(); t[e]; e++) this.settings.unhighlight.call(this, t[e], this.settings.errorClass, this.settings.validClass);
                    this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
                },
                validElements: function () {
                    return this.currentElements.not(this.invalidElements())
                },
                invalidElements: function () {
                    return e(this.errorList).map(function () {
                        return this.element
                    })
                },
                showLabel: function (t, n) {
                    var i = this.errorsFor(t);
                    i.length ? (i.removeClass(this.settings.validClass).addClass(this.settings.errorClass), i.html(n)) : (i = e("<" + this.settings.errorElement + ">").attr("for", this.idOrName(t)).addClass(this.settings.errorClass).html(n || ""), this.settings.wrapper && (i = i.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.append(i).length || (this.settings.errorPlacement ? this.settings.errorPlacement(i, e(t)) : i.insertAfter(t))), !n && this.settings.success && (i.text(""), "string" == typeof this.settings.success ? i.addClass(this.settings.success) : this.settings.success(i, t)), this.toShow = this.toShow.add(i)
                },
                errorsFor: function (t) {
                    var n = this.idOrName(t);
                    return this.errors().filter(function () {
                        return e(this).attr("for") === n
                    })
                },
                idOrName: function (e) {
                    return this.groups[e.name] || (this.checkable(e) ? e.name : e.id || e.name)
                },
                validationTargetFor: function (e) {
                    return this.checkable(e) && (e = this.findByName(e.name).not(this.settings.ignore)[0]), e
                },
                checkable: function (e) {
                    return /radio|checkbox/i.test(e.type)
                },
                findByName: function (t) {
                    return e(this.currentForm).find("[name='" + t + "']")
                },
                getLength: function (t, n) {
                    switch (n.nodeName.toLowerCase()) {
                        case "select":
                            return e("option:selected", n).length;
                        case "input":
                            if (this.checkable(n)) return this.findByName(n.name).filter(":checked").length
                    }
                    return t.length
                },
                depend: function (e, t) {
                    return !this.dependTypes[typeof e] || this.dependTypes[typeof e](e, t)
                },
                dependTypes: {
                    boolean: function (e) {
                        return e
                    },
                    string: function (t, n) {
                        return !!e(t, n.form).length
                    },
                    "function": function (e, t) {
                        return e(t)
                    }
                },
                optional: function (t) {
                    var n = this.elementValue(t);
                    return !e.validator.methods.required.call(this, n, t) && "dependency-mismatch"
                },
                startRequest: function (e) {
                    this.pending[e.name] || (this.pendingRequest++, this.pending[e.name] = !0)
                },
                stopRequest: function (t, n) {
                    this.pendingRequest--, 0 > this.pendingRequest && (this.pendingRequest = 0), delete this.pending[t.name], n && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (e(this.currentForm).submit(), this.formSubmitted = !1) : !n && 0 === this.pendingRequest && this.formSubmitted && (e(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
                },
                previousValue: function (t) {
                    return e.data(t, "previousValue") || e.data(t, "previousValue", {
                        old: null,
                        valid: !0,
                        message: this.defaultMessage(t, "remote")
                    })
                }
            },
            classRuleSettings: {
                required: {
                    required: !0
                },
                email: {
                    email: !0
                },
                url: {
                    url: !0
                },
                date: {
                    date: !0
                },
                dateISO: {
                    dateISO: !0
                },
                number: {
                    number: !0
                },
                digits: {
                    digits: !0
                },
                creditcard: {
                    creditcard: !0
                }
            },
            addClassRules: function (t, n) {
                t.constructor === String ? this.classRuleSettings[t] = n : e.extend(this.classRuleSettings, t)
            },
            classRules: function (t) {
                var n = {},
                    i = e(t).attr("class");
                return i && e.each(i.split(" "), function () {
                    this in e.validator.classRuleSettings && e.extend(n, e.validator.classRuleSettings[this])
                }), n
            },
            attributeRules: function (t) {
                var n = {},
                    i = e(t),
                    r = i[0].getAttribute("type");
                for (var a in e.validator.methods) {
                    var o;
                    "required" === a ? ("" === (o = i.get(0).getAttribute(a)) && (o = !0), o = !!o) : o = i.attr(a), /min|max/.test(a) && (null === r || /number|range|text/.test(r)) && (o = Number(o)), o ? n[a] = o : r === a && "range" !== r && (n[a] = !0)
                }
                return n.maxlength && /-1|2147483647|524288/.test(n.maxlength) && delete n.maxlength, n
            },
            dataRules: function (t) {
                var n, i, r = {},
                    a = e(t);
                for (n in e.validator.methods) void 0 !== (i = a.data("rule-" + n.toLowerCase())) && (r[n] = i);
                return r
            },
            staticRules: function (t) {
                var n = {},
                    i = e.data(t.form, "validator");
                return i.settings.rules && (n = e.validator.normalizeRule(i.settings.rules[t.name]) || {}), n
            },
            normalizeRules: function (t, n) {
                return e.each(t, function (i, r) {
                    if (!1 !== r) {
                        if (r.param || r.depends) {
                            var a = !0;
                            switch (typeof r.depends) {
                                case "string":
                                    a = !!e(r.depends, n.form).length;
                                    break;
                                case "function":
                                    a = r.depends.call(n, n)
                            }
                            a ? t[i] = void 0 === r.param || r.param : delete t[i]
                        }
                    } else delete t[i]
                }), e.each(t, function (i, r) {
                    t[i] = e.isFunction(r) ? r(n) : r
                }), e.each(["minlength", "maxlength"], function () {
                    t[this] && (t[this] = Number(t[this]))
                }), e.each(["rangelength", "range"], function () {
                    var n;
                    t[this] && (e.isArray(t[this]) ? t[this] = [Number(t[this][0]), Number(t[this][1])] : "string" == typeof t[this] && (n = t[this].split(/[\s,]+/), t[this] = [Number(n[0]), Number(n[1])]))
                }), e.validator.autoCreateRanges && (t.min && t.max && (t.range = [t.min, t.max], delete t.min, delete t.max), t.minlength && t.maxlength && (t.rangelength = [t.minlength, t.maxlength], delete t.minlength, delete t.maxlength)), t
            },
            normalizeRule: function (t) {
                if ("string" == typeof t) {
                    var n = {};
                    e.each(t.split(/\s/), function () {
                        n[this] = !0
                    }), t = n
                }
                return t
            },
            addMethod: function (t, n, i) {
                e.validator.methods[t] = n, e.validator.messages[t] = void 0 !== i ? i : e.validator.messages[t], 3 > n.length && e.validator.addClassRules(t, e.validator.normalizeRule(t))
            },
            methods: {
                required: function (t, n, i) {
                    if (!this.depend(i, n)) return "dependency-mismatch";
                    if ("select" === n.nodeName.toLowerCase()) {
                        var r = e(n).val();
                        return r && r.length > 0
                    }
                    return this.checkable(n) ? this.getLength(t, n) > 0 : e.trim(t).length > 0
                },
                email: function (e, t) {
                    return this.optional(t) || /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(e)
                },
                url: function (e, t) {
                    return this.optional(t) || /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(e)
                },
                date: function (e, t) {
                    return this.optional(t) || !/Invalid|NaN/.test("" + new Date(e))
                },
                dateISO: function (e, t) {
                    return this.optional(t) || /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/.test(e)
                },
                number: function (e, t) {
                    return this.optional(t) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(e)
                },
                digits: function (e, t) {
                    return this.optional(t) || /^\d+$/.test(e)
                },
                creditcard: function (e, t) {
                    if (this.optional(t)) return "dependency-mismatch";
                    if (/[^0-9 \-]+/.test(e)) return !1;
                    for (var n = 0, i = 0, r = !1, a = (e = e.replace(/\D/g, "")).length - 1; a >= 0; a--) {
                        var o = e.charAt(a);
                        i = parseInt(o, 10), r && (i *= 2) > 9 && (i -= 9), n += i, r = !r
                    }
                    return 0 == n % 10
                },
                minlength: function (t, n, i) {
                    var r = e.isArray(t) ? t.length : this.getLength(e.trim(t), n);
                    return this.optional(n) || r >= i
                },
                maxlength: function (t, n, i) {
                    var r = e.isArray(t) ? t.length : this.getLength(e.trim(t), n);
                    return this.optional(n) || i >= r
                },
                rangelength: function (t, n, i) {
                    var r = e.isArray(t) ? t.length : this.getLength(e.trim(t), n);
                    return this.optional(n) || r >= i[0] && i[1] >= r
                },
                min: function (e, t, n) {
                    return this.optional(t) || e >= n
                },
                max: function (e, t, n) {
                    return this.optional(t) || n >= e
                },
                range: function (e, t, n) {
                    return this.optional(t) || e >= n[0] && n[1] >= e
                },
                equalTo: function (t, n, i) {
                    var r = e(i);
                    return this.settings.onfocusout && r.unbind(".validate-equalTo").bind("blur.validate-equalTo", function () {
                        e(n).valid()
                    }), t === r.val()
                },
                remote: function (t, n, i) {
                    if (this.optional(n)) return "dependency-mismatch";
                    var r = this.previousValue(n);
                    if (this.settings.messages[n.name] || (this.settings.messages[n.name] = {}), r.originalMessage = this.settings.messages[n.name].remote, this.settings.messages[n.name].remote = r.message, i = "string" == typeof i && {
                            url: i
                        } || i, r.old === t) return r.valid;
                    r.old = t;
                    var a = this;
                    this.startRequest(n);
                    var o = {};
                    return o[n.name] = t, e.ajax(e.extend(!0, {
                        url: i,
                        mode: "abort",
                        port: "validate" + n.name,
                        dataType: "json",
                        data: o,
                        success: function (i) {
                            a.settings.messages[n.name].remote = r.originalMessage;
                            var o = !0 === i || "true" === i;
                            if (o) {
                                var s = a.formSubmitted;
                                a.prepareElement(n), a.formSubmitted = s, a.successList.push(n), delete a.invalid[n.name], a.showErrors()
                            } else {
                                var l = {},
                                    u = i || a.defaultMessage(n, "remote");
                                l[n.name] = r.message = e.isFunction(u) ? u(t) : u, a.invalid[n.name] = !0, a.showErrors(l)
                            }
                            r.valid = o, a.stopRequest(n, o)
                        }
                    }, i)), "pending"
                }
            }
        }), e.format = e.validator.format
    }(jQuery),
    function (e) {
        var t = {};
        if (e.ajaxPrefilter) e.ajaxPrefilter(function (e, n, i) {
            var r = e.port;
            "abort" === e.mode && (t[r] && t[r].abort(), t[r] = i)
        });
        else {
            var n = e.ajax;
            e.ajax = function (i) {
                var r = ("mode" in i ? i : e.ajaxSettings).mode,
                    a = ("port" in i ? i : e.ajaxSettings).port;
                return "abort" === r ? (t[a] && t[a].abort(), t[a] = n.apply(this, arguments), t[a]) : n.apply(this, arguments)
            }
        }
    }(jQuery),
    function (e) {
        e.extend(e.fn, {
            validateDelegate: function (t, n, i) {
                return this.bind(n, function (n) {
                    var r = e(n.target);
                    return r.is(t) ? i.apply(r, arguments) : void 0
                })
            }
        })
    }(jQuery);
/*
 *
 * More info at [www.dropzonejs.com](http://www.dropzonejs.com)
 *
 * Copyright (c) 2012, Matias Meno
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *
 */
class Emitter {
    on(e, t) {
        return this._callbacks = this._callbacks || {}, this._callbacks[e] || (this._callbacks[e] = []), this._callbacks[e].push(t), this
    }
    emit(e, ...t) {
        this._callbacks = this._callbacks || {};
        let n = this._callbacks[e];
        if (n)
            for (let e of n) e.apply(this, t);
        return this
    }
    off(e, t) {
        if (!this._callbacks || 0 === arguments.length) return this._callbacks = {}, this;
        let n = this._callbacks[e];
        if (!n) return this;
        if (1 === arguments.length) return delete this._callbacks[e], this;
        for (let e = 0; e < n.length; e++) {
            if (n[e] === t) {
                n.splice(e, 1);
                break
            }
        }
        return this
    }
}
class Dropzone extends Emitter {
    static initClass() {
        this.prototype.Emitter = Emitter, this.prototype.events = ["drop", "dragstart", "dragend", "dragenter", "dragover", "dragleave", "addedfile", "addedfiles", "removedfile", "thumbnail", "error", "errormultiple", "processing", "processingmultiple", "uploadprogress", "totaluploadprogress", "sending", "sendingmultiple", "success", "successmultiple", "canceled", "canceledmultiple", "complete", "completemultiple", "reset", "maxfilesexceeded", "maxfilesreached", "queuecomplete"], this.prototype.defaultOptions = {
            url: null,
            method: "post",
            withCredentials: !1,
            timeout: 3e4,
            parallelUploads: 2,
            uploadMultiple: !1,
            chunking: !1,
            forceChunking: !1,
            chunkSize: 2e6,
            parallelChunkUploads: !1,
            retryChunks: !1,
            retryChunksLimit: 3,
            maxFilesize: 256,
            paramName: "file",
            createImageThumbnails: !0,
            maxThumbnailFilesize: 10,
            thumbnailWidth: 120,
            thumbnailHeight: 120,
            thumbnailMethod: "crop",
            resizeWidth: null,
            resizeHeight: null,
            resizeMimeType: null,
            resizeQuality: .8,
            resizeMethod: "contain",
            filesizeBase: 1e3,
            maxFiles: null,
            headers: null,
            clickable: !0,
            ignoreHiddenFiles: !0,
            acceptedFiles: null,
            acceptedMimeTypes: null,
            autoProcessQueue: !0,
            autoQueue: !0,
            addRemoveLinks: !1,
            previewsContainer: null,
            hiddenInputContainer: "body",
            capture: null,
            renameFilename: null,
            renameFile: null,
            forceFallback: !1,
            dictDefaultMessage: "Drop files here to upload",
            dictFallbackMessage: "Your browser does not support drag'n'drop file uploads.",
            dictFallbackText: "Please use the fallback form below to upload your files like in the olden days.",
            dictFileTooBig: "File is too big ({{filesize}}MiB). Max filesize: {{maxFilesize}}MiB.",
            dictInvalidFileType: "You can't upload files of this type.",
            dictResponseError: "Server responded with {{statusCode}} code.",
            dictCancelUpload: "Cancel upload",
            dictUploadCanceled: "Upload canceled.",
            dictCancelUploadConfirmation: "Are you sure you want to cancel this upload?",
            dictRemoveFile: "Remove file",
            dictRemoveFileConfirmation: null,
            dictMaxFilesExceeded: "You can not upload any more files.",
            dictFileSizeUnits: {
                tb: "TB",
                gb: "GB",
                mb: "MB",
                kb: "KB",
                b: "b"
            },
            init() {},
            params(e, t, n) {
                if (n) return {
                    dzuuid: n.file.upload.uuid,
                    dzchunkindex: n.index,
                    dztotalfilesize: n.file.size,
                    dzchunksize: this.options.chunkSize,
                    dztotalchunkcount: n.file.upload.totalChunkCount,
                    dzchunkbyteoffset: n.index * this.options.chunkSize
                }
            },
            accept: (e, t) => t(),
            chunksUploaded: function (e, t) {
                t()
            },
            fallback() {
                let e;
                this.element.className = `${this.element.className} dz-browser-not-supported`;
                for (let t of this.element.getElementsByTagName("div"))
                    if (/(^| )dz-message($| )/.test(t.className)) {
                        e = t, t.className = "dz-message";
                        break
                    } e || (e = Dropzone.createElement('<div class="dz-message"><span></span></div>'), this.element.appendChild(e));
                let t = e.getElementsByTagName("span")[0];
                return t && (null != t.textContent ? t.textContent = this.options.dictFallbackMessage : null != t.innerText && (t.innerText = this.options.dictFallbackMessage)), this.element.appendChild(this.getFallbackForm())
            },
            resize(e, t, n, i) {
                let r = {
                        srcX: 0,
                        srcY: 0,
                        srcWidth: e.width,
                        srcHeight: e.height
                    },
                    a = e.width / e.height;
                null == t && null == n ? (t = r.srcWidth, n = r.srcHeight) : null == t ? t = n * a : null == n && (n = t / a);
                let o = (t = Math.min(t, r.srcWidth)) / (n = Math.min(n, r.srcHeight));
                if (r.srcWidth > t || r.srcHeight > n)
                    if ("crop" === i) a > o ? (r.srcHeight = e.height, r.srcWidth = r.srcHeight * o) : (r.srcWidth = e.width, r.srcHeight = r.srcWidth / o);
                    else {
                        if ("contain" !== i) throw new Error(`Unknown resizeMethod '${i}'`);
                        a > o ? n = t / a : t = n * a
                    } return r.srcX = (e.width - r.srcWidth) / 2, r.srcY = (e.height - r.srcHeight) / 2, r.trgWidth = t, r.trgHeight = n, r
            },
            transformFile(e, t) {
                return (this.options.resizeWidth || this.options.resizeHeight) && e.type.match(/image.*/) ? this.resizeImage(e, this.options.resizeWidth, this.options.resizeHeight, this.options.resizeMethod, t) : t(e)
            },
            previewTemplate: '<div class="dz-preview dz-file-preview">\n  <div class="dz-image"><img data-dz-thumbnail /></div>\n  <div class="dz-details">\n    <div class="dz-size"><span data-dz-size></span></div>\n    <div class="dz-filename"><span data-dz-name></span></div>\n  </div>\n  <div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress></span></div>\n  <div class="dz-error-message"><span data-dz-errormessage></span></div>\n  <div class="dz-success-mark">\n    <svg width="54px" height="54px" viewBox="0 0 54 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">\n      <title>Check</title>\n      <defs></defs>\n      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">\n        <path d="M23.5,31.8431458 L17.5852419,25.9283877 C16.0248253,24.3679711 13.4910294,24.366835 11.9289322,25.9289322 C10.3700136,27.4878508 10.3665912,30.0234455 11.9283877,31.5852419 L20.4147581,40.0716123 C20.5133999,40.1702541 20.6159315,40.2626649 20.7218615,40.3488435 C22.2835669,41.8725651 24.794234,41.8626202 26.3461564,40.3106978 L43.3106978,23.3461564 C44.8771021,21.7797521 44.8758057,19.2483887 43.3137085,17.6862915 C41.7547899,16.1273729 39.2176035,16.1255422 37.6538436,17.6893022 L23.5,31.8431458 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z" id="Oval-2" stroke-opacity="0.198794158" stroke="#747474" fill-opacity="0.816519475" fill="#FFFFFF" sketch:type="MSShapeGroup"></path>\n      </g>\n    </svg>\n  </div>\n  <div class="dz-error-mark">\n    <svg width="54px" height="54px" viewBox="0 0 54 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">\n      <title>Error</title>\n      <defs></defs>\n      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">\n        <g id="Check-+-Oval-2" sketch:type="MSLayerGroup" stroke="#747474" stroke-opacity="0.198794158" fill="#FFFFFF" fill-opacity="0.816519475">\n          <path d="M32.6568542,29 L38.3106978,23.3461564 C39.8771021,21.7797521 39.8758057,19.2483887 38.3137085,17.6862915 C36.7547899,16.1273729 34.2176035,16.1255422 32.6538436,17.6893022 L27,23.3431458 L21.3461564,17.6893022 C19.7823965,16.1255422 17.2452101,16.1273729 15.6862915,17.6862915 C14.1241943,19.2483887 14.1228979,21.7797521 15.6893022,23.3461564 L21.3431458,29 L15.6893022,34.6538436 C14.1228979,36.2202479 14.1241943,38.7516113 15.6862915,40.3137085 C17.2452101,41.8726271 19.7823965,41.8744578 21.3461564,40.3106978 L27,34.6568542 L32.6538436,40.3106978 C34.2176035,41.8744578 36.7547899,41.8726271 38.3137085,40.3137085 C39.8758057,38.7516113 39.8771021,36.2202479 38.3106978,34.6538436 L32.6568542,29 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z" id="Oval-2" sketch:type="MSShapeGroup"></path>\n        </g>\n      </g>\n    </svg>\n  </div>\n</div>',
            drop(e) {
                return this.element.classList.remove("dz-drag-hover")
            },
            dragstart(e) {},
            dragend(e) {
                return this.element.classList.remove("dz-drag-hover")
            },
            dragenter(e) {
                return this.element.classList.add("dz-drag-hover")
            },
            dragover(e) {
                return this.element.classList.add("dz-drag-hover")
            },
            dragleave(e) {
                return this.element.classList.remove("dz-drag-hover")
            },
            paste(e) {},
            reset() {
                return this.element.classList.remove("dz-started")
            },
            addedfile(e) {
                if (this.element === this.previewsContainer && this.element.classList.add("dz-started"), this.previewsContainer) {
                    for (var t of (e.previewElement = Dropzone.createElement(this.options.previewTemplate.trim()), e.previewTemplate = e.previewElement, this.previewsContainer.appendChild(e.previewElement), e.previewElement.querySelectorAll("[data-dz-name]"))) t.textContent = e.name;
                    for (t of e.previewElement.querySelectorAll("[data-dz-size]")) t.innerHTML = this.filesize(e.size);
                    this.options.addRemoveLinks && (e._removeLink = Dropzone.createElement(`<a class="dz-remove" href="javascript:undefined;" data-dz-remove>${this.options.dictRemoveFile}</a>`), e.previewElement.appendChild(e._removeLink));
                    let n = t => (t.preventDefault(), t.stopPropagation(), e.status === Dropzone.UPLOADING ? Dropzone.confirm(this.options.dictCancelUploadConfirmation, () => this.removeFile(e)) : this.options.dictRemoveFileConfirmation ? Dropzone.confirm(this.options.dictRemoveFileConfirmation, () => this.removeFile(e)) : this.removeFile(e));
                    for (let t of e.previewElement.querySelectorAll("[data-dz-remove]")) t.addEventListener("click", n)
                }
            },
            removedfile(e) {
                return null != e.previewElement && null != e.previewElement.parentNode && e.previewElement.parentNode.removeChild(e.previewElement), this._updateMaxFilesReachedClass()
            },
            thumbnail(e, t) {
                if (e.previewElement) {
                    e.previewElement.classList.remove("dz-file-preview");
                    for (let n of e.previewElement.querySelectorAll("[data-dz-thumbnail]")) n.alt = e.name, n.src = t;
                    return setTimeout(() => e.previewElement.classList.add("dz-image-preview"), 1)
                }
            },
            error(e, t) {
                if (e.previewElement) {
                    e.previewElement.classList.add("dz-error"), "String" != typeof t && t.error && (t = t.error);
                    for (let n of e.previewElement.querySelectorAll("[data-dz-errormessage]")) n.textContent = t
                }
            },
            errormultiple() {},
            processing(e) {
                if (e.previewElement && (e.previewElement.classList.add("dz-processing"), e._removeLink)) return e._removeLink.innerHTML = this.options.dictCancelUpload
            },
            processingmultiple() {},
            uploadprogress(e, t, n) {
                if (e.previewElement)
                    for (let n of e.previewElement.querySelectorAll("[data-dz-uploadprogress]")) "PROGRESS" === n.nodeName ? n.value = t : n.style.width = `${t}%`
            },
            totaluploadprogress() {},
            sending() {},
            sendingmultiple() {},
            success(e) {
                if (e.previewElement) return e.previewElement.classList.add("dz-success")
            },
            successmultiple() {},
            canceled(e) {
                return this.emit("error", e, this.options.dictUploadCanceled)
            },
            canceledmultiple() {},
            complete(e) {
                if (e._removeLink && (e._removeLink.innerHTML = this.options.dictRemoveFile), e.previewElement) return e.previewElement.classList.add("dz-complete")
            },
            completemultiple() {},
            maxfilesexceeded() {},
            maxfilesreached() {},
            queuecomplete() {},
            addedfiles() {}
        }, this.prototype._thumbnailQueue = [], this.prototype._processingThumbnail = !1
    }
    static extend(e, ...t) {
        for (let n of t)
            for (let t in n) {
                let i = n[t];
                e[t] = i
            }
        return e
    }
    constructor(e, t) {
        let n, i;
        if (super(), this.element = e, this.version = Dropzone.version, this.defaultOptions.previewTemplate = this.defaultOptions.previewTemplate.replace(/\n*/g, ""), this.clickableElements = [], this.listeners = [], this.files = [], "string" == typeof this.element && (this.element = document.querySelector(this.element)), !this.element || null == this.element.nodeType) throw new Error("Invalid dropzone element.");
        if (this.element.dropzone) throw new Error("Dropzone already attached.");
        Dropzone.instances.push(this), this.element.dropzone = this;
        let r = null != (i = Dropzone.optionsForElement(this.element)) ? i : {};
        if (this.options = Dropzone.extend({}, this.defaultOptions, r, null != t ? t : {}), this.options.forceFallback || !Dropzone.isBrowserSupported()) return this.options.fallback.call(this);
        if (null == this.options.url && (this.options.url = this.element.getAttribute("action")), !this.options.url) throw new Error("No URL provided.");
        if (this.options.acceptedFiles && this.options.acceptedMimeTypes) throw new Error("You can't provide both 'acceptedFiles' and 'acceptedMimeTypes'. 'acceptedMimeTypes' is deprecated.");
        if (this.options.uploadMultiple && this.options.chunking) throw new Error("You cannot set both: uploadMultiple and chunking.");
        this.options.acceptedMimeTypes && (this.options.acceptedFiles = this.options.acceptedMimeTypes, delete this.options.acceptedMimeTypes), null != this.options.renameFilename && (this.options.renameFile = (e => this.options.renameFilename.call(this, e.name, e))), this.options.method = this.options.method.toUpperCase(), (n = this.getExistingFallback()) && n.parentNode && n.parentNode.removeChild(n), !1 !== this.options.previewsContainer && (this.options.previewsContainer ? this.previewsContainer = Dropzone.getElement(this.options.previewsContainer, "previewsContainer") : this.previewsContainer = this.element), this.options.clickable && (!0 === this.options.clickable ? this.clickableElements = [this.element] : this.clickableElements = Dropzone.getElements(this.options.clickable, "clickable")), this.init()
    }
    getAcceptedFiles() {
        return this.files.filter(e => e.accepted).map(e => e)
    }
    getRejectedFiles() {
        return this.files.filter(e => !e.accepted).map(e => e)
    }
    getFilesWithStatus(e) {
        return this.files.filter(t => t.status === e).map(e => e)
    }
    getQueuedFiles() {
        return this.getFilesWithStatus(Dropzone.QUEUED)
    }
    getUploadingFiles() {
        return this.getFilesWithStatus(Dropzone.UPLOADING)
    }
    getAddedFiles() {
        return this.getFilesWithStatus(Dropzone.ADDED)
    }
    getActiveFiles() {
        return this.files.filter(e => e.status === Dropzone.UPLOADING || e.status === Dropzone.QUEUED).map(e => e)
    }
    init() {
        if ("form" === this.element.tagName && this.element.setAttribute("enctype", "multipart/form-data"), this.element.classList.contains("dropzone") && !this.element.querySelector(".dz-message") && this.element.appendChild(Dropzone.createElement(`<div class="dz-default dz-message"><span>${this.options.dictDefaultMessage}</span></div>`)), this.clickableElements.length) {
            let e = () => (this.hiddenFileInput && this.hiddenFileInput.parentNode.removeChild(this.hiddenFileInput), this.hiddenFileInput = document.createElement("input"), this.hiddenFileInput.setAttribute("type", "file"), (null === this.options.maxFiles || this.options.maxFiles > 1) && this.hiddenFileInput.setAttribute("multiple", "multiple"), this.hiddenFileInput.className = "dz-hidden-input", null !== this.options.acceptedFiles && this.hiddenFileInput.setAttribute("accept", this.options.acceptedFiles), null !== this.options.capture && this.hiddenFileInput.setAttribute("capture", this.options.capture), this.hiddenFileInput.style.visibility = "hidden", this.hiddenFileInput.style.position = "absolute", this.hiddenFileInput.style.top = "0", this.hiddenFileInput.style.left = "0", this.hiddenFileInput.style.height = "0", this.hiddenFileInput.style.width = "0", Dropzone.getElement(this.options.hiddenInputContainer, "hiddenInputContainer").appendChild(this.hiddenFileInput), this.hiddenFileInput.addEventListener("change", () => {
                let {
                    files: t
                } = this.hiddenFileInput;
                if (t.length)
                    for (let e of t) this.addFile(e);
                return this.emit("addedfiles", t), e()
            }));
            e()
        }
        this.URL = null !== window.URL ? window.URL : window.webkitURL;
        for (let e of this.events) this.on(e, this.options[e]);
        this.on("uploadprogress", () => this.updateTotalUploadProgress()), this.on("removedfile", () => this.updateTotalUploadProgress()), this.on("canceled", e => this.emit("complete", e)), this.on("complete", () => {
            if (0 === this.getAddedFiles().length && 0 === this.getUploadingFiles().length && 0 === this.getQueuedFiles().length) return setTimeout(() => this.emit("queuecomplete"), 0)
        });
        let e = function (e) {
            return e.stopPropagation(), e.preventDefault ? e.preventDefault() : e.returnValue = !1
        };
        return this.listeners = [{
            element: this.element,
            events: {
                dragstart: e => this.emit("dragstart", e),
                dragenter: t => (e(t), this.emit("dragenter", t)),
                dragover: t => {
                    let n;
                    try {
                        n = t.dataTransfer.effectAllowed
                    } catch (i) {}
                    return t.dataTransfer.dropEffect = "move" === n || "linkMove" === n ? "move" : "copy", e(t), this.emit("dragover", t)
                },
                dragleave: e => this.emit("dragleave", e),
                drop: t => (e(t), this.drop(t)),
                dragend: e => this.emit("dragend", e)
            }
        }], this.clickableElements.forEach(e => this.listeners.push({
            element: e,
            events: {
                click: t => ((e !== this.element || t.target === this.element || Dropzone.elementInside(t.target, this.element.querySelector(".dz-message"))) && this.hiddenFileInput.click(), !0)
            }
        })), this.enable(), this.options.init.call(this)
    }
    destroy() {
        return this.disable(), this.removeAllFiles(!0), (null != this.hiddenFileInput ? this.hiddenFileInput.parentNode : undefined) && (this.hiddenFileInput.parentNode.removeChild(this.hiddenFileInput), this.hiddenFileInput = null), delete this.element.dropzone, Dropzone.instances.splice(Dropzone.instances.indexOf(this), 1)
    }
    updateTotalUploadProgress() {
        let e, t = 0,
            n = 0;
        if (this.getActiveFiles().length) {
            for (let e of this.getActiveFiles()) t += e.upload.bytesSent, n += e.upload.total;
            e = 100 * t / n
        } else e = 100;
        return this.emit("totaluploadprogress", e, n, t)
    }
    _getParamName(e) {
        return "function" == typeof this.options.paramName ? this.options.paramName(e) : `${this.options.paramName}${this.options.uploadMultiple?`[${e}]`:""}`
    }
    _renameFile(e) {
        return "function" != typeof this.options.renameFile ? e.name : this.options.renameFile(e)
    }
    getFallbackForm() {
        let e, t;
        if (e = this.getExistingFallback()) return e;
        let n = '<div class="dz-fallback">';
        this.options.dictFallbackText && (n += `<p>${this.options.dictFallbackText}</p>`), n += `<input type="file" name="${this._getParamName(0)}" ${this.options.uploadMultiple?'multiple="multiple"':undefined} /><input type="submit" value="Upload!"></div>`;
        let i = Dropzone.createElement(n);
        return "FORM" !== this.element.tagName ? (t = Dropzone.createElement(`<form action="${this.options.url}" enctype="multipart/form-data" method="${this.options.method}"></form>`)).appendChild(i) : (this.element.setAttribute("enctype", "multipart/form-data"), this.element.setAttribute("method", this.options.method)), null != t ? t : i
    }
    getExistingFallback() {
        let e = function (e) {
            for (let t of e)
                if (/(^| )fallback($| )/.test(t.className)) return t
        };
        for (let n of ["div", "form"]) {
            var t;
            if (t = e(this.element.getElementsByTagName(n))) return t
        }
    }
    setupEventListeners() {
        return this.listeners.map(e => (() => {
            let t = [];
            for (let n in e.events) {
                let i = e.events[n];
                t.push(e.element.addEventListener(n, i, !1))
            }
            return t
        })())
    }
    removeEventListeners() {
        return this.listeners.map(e => (() => {
            let t = [];
            for (let n in e.events) {
                let i = e.events[n];
                t.push(e.element.removeEventListener(n, i, !1))
            }
            return t
        })())
    }
    disable() {
        return this.clickableElements.forEach(e => e.classList.remove("dz-clickable")), this.removeEventListeners(), this.disabled = !0, this.files.map(e => this.cancelUpload(e))
    }
    enable() {
        return delete this.disabled, this.clickableElements.forEach(e => e.classList.add("dz-clickable")), this.setupEventListeners()
    }
    filesize(e) {
        let t = 0,
            n = "b";
        if (e > 0) {
            let i = ["tb", "gb", "mb", "kb", "b"];
            for (let r = 0; r < i.length; r++) {
                let a = i[r];
                if (e >= Math.pow(this.options.filesizeBase, 4 - r) / 10) {
                    t = e / Math.pow(this.options.filesizeBase, 4 - r), n = a;
                    break
                }
            }
            t = Math.round(10 * t) / 10
        }
        return `<strong>${t}</strong> ${this.options.dictFileSizeUnits[n]}`
    }
    _updateMaxFilesReachedClass() {
        return null != this.options.maxFiles && this.getAcceptedFiles().length >= this.options.maxFiles ? (this.getAcceptedFiles().length === this.options.maxFiles && this.emit("maxfilesreached", this.files), this.element.classList.add("dz-max-files-reached")) : this.element.classList.remove("dz-max-files-reached")
    }
    drop(e) {
        if (!e.dataTransfer) return;
        this.emit("drop", e);
        let t = [];
        for (let n = 0; n < e.dataTransfer.files.length; n++) t[n] = e.dataTransfer.files[n];
        if (this.emit("addedfiles", t), t.length) {
            let {
                items: n
            } = e.dataTransfer;
            n && n.length && null != n[0].webkitGetAsEntry ? this._addFilesFromItems(n) : this.handleFiles(t)
        }
    }
    paste(e) {
        if (null == __guard__(null != e ? e.clipboardData : undefined, e => e.items)) return;
        this.emit("paste", e);
        let {
            items: t
        } = e.clipboardData;
        return t.length ? this._addFilesFromItems(t) : void 0
    }
    handleFiles(e) {
        for (let t of e) this.addFile(t)
    }
    _addFilesFromItems(e) {
        return (() => {
            let t = [];
            for (let i of e) {
                var n;
                null != i.webkitGetAsEntry && (n = i.webkitGetAsEntry()) ? n.isFile ? t.push(this.addFile(i.getAsFile())) : n.isDirectory ? t.push(this._addFilesFromDirectory(n, n.name)) : t.push(undefined) : null != i.getAsFile && (null == i.kind || "file" === i.kind) ? t.push(this.addFile(i.getAsFile())) : t.push(undefined)
            }
            return t
        })()
    }
    _addFilesFromDirectory(e, t) {
        let n = e.createReader(),
            i = e => __guardMethod__(console, "log", t => t.log(e));
        var r = () => n.readEntries(e => {
            if (e.length > 0) {
                for (let n of e) n.isFile ? n.file(e => {
                    if (!this.options.ignoreHiddenFiles || "." !== e.name.substring(0, 1)) return e.fullPath = `${t}/${e.name}`, this.addFile(e)
                }) : n.isDirectory && this._addFilesFromDirectory(n, `${t}/${n.name}`);
                r()
            }
            return null
        }, i);
        return r()
    }
    accept(e, t) {
        return this.options.maxFilesize && e.size > 1024 * this.options.maxFilesize * 1024 ? t(this.options.dictFileTooBig.replace("{{filesize}}", Math.round(e.size / 1024 / 10.24) / 100).replace("{{maxFilesize}}", this.options.maxFilesize)) : Dropzone.isValidFile(e, this.options.acceptedFiles) ? null != this.options.maxFiles && this.getAcceptedFiles().length >= this.options.maxFiles ? (t(this.options.dictMaxFilesExceeded.replace("{{maxFiles}}", this.options.maxFiles)), this.emit("maxfilesexceeded", e)) : this.options.accept.call(this, e, t) : t(this.options.dictInvalidFileType)
    }
    addFile(e) {
        return e.upload = {
            uuid: Dropzone.uuidv4(),
            progress: 0,
            total: e.size,
            bytesSent: 0,
            filename: this._renameFile(e),
            chunked: this.options.chunking && (this.options.forceChunking || e.size > this.options.chunkSize),
            totalChunkCount: Math.ceil(e.size / this.options.chunkSize)
        }, this.files.push(e), e.status = Dropzone.ADDED, this.emit("addedfile", e), this._enqueueThumbnail(e), this.accept(e, t => (t ? (e.accepted = !1, this._errorProcessing([e], t)) : (e.accepted = !0, this.options.autoQueue && this.enqueueFile(e)), this._updateMaxFilesReachedClass()))
    }
    enqueueFiles(e) {
        for (let t of e) this.enqueueFile(t);
        return null
    }
    enqueueFile(e) {
        if (e.status !== Dropzone.ADDED || !0 !== e.accepted) throw new Error("This file can't be queued because it has already been processed or was rejected.");
        if (e.status = Dropzone.QUEUED, this.options.autoProcessQueue) return setTimeout(() => this.processQueue(), 0)
    }
    _enqueueThumbnail(e) {
        if (this.options.createImageThumbnails && e.type.match(/image.*/) && e.size <= 1024 * this.options.maxThumbnailFilesize * 1024) return this._thumbnailQueue.push(e), setTimeout(() => this._processThumbnailQueue(), 0)
    }
    _processThumbnailQueue() {
        if (this._processingThumbnail || 0 === this._thumbnailQueue.length) return;
        this._processingThumbnail = !0;
        let e = this._thumbnailQueue.shift();
        return this.createThumbnail(e, this.options.thumbnailWidth, this.options.thumbnailHeight, this.options.thumbnailMethod, !0, t => (this.emit("thumbnail", e, t), this._processingThumbnail = !1, this._processThumbnailQueue()))
    }
    removeFile(e) {
        if (e.status === Dropzone.UPLOADING && this.cancelUpload(e), this.files = without(this.files, e), this.emit("removedfile", e), 0 === this.files.length) return this.emit("reset")
    }
    removeAllFiles(e) {
        null == e && (e = !1);
        for (let t of this.files.slice())(t.status !== Dropzone.UPLOADING || e) && this.removeFile(t);
        return null
    }
    resizeImage(e, t, n, i, r) {
        return this.createThumbnail(e, t, n, i, !0, (t, n) => {
            if (null == n) return r(e); {
                let {
                    resizeMimeType: t
                } = this.options;
                null == t && (t = e.type);
                let i = n.toDataURL(t, this.options.resizeQuality);
                return "image/jpeg" !== t && "image/jpg" !== t || (i = ExifRestore.restore(e.dataURL, i)), r(Dropzone.dataURItoBlob(i))
            }
        })
    }
    createThumbnail(e, t, n, i, r, a) {
        let o = new FileReader;
        return o.onload = (() => {
            if (e.dataURL = o.result, "image/svg+xml" !== e.type) return this.createThumbnailFromUrl(e, t, n, i, r, a);
            null != a && a(o.result)
        }), o.readAsDataURL(e)
    }
    createThumbnailFromUrl(e, t, n, i, r, a, o) {
        let s = document.createElement("img");
        return o && (s.crossOrigin = o), s.onload = (() => {
            let o = e => e(1);
            return "undefined" != typeof EXIF && null !== EXIF && r && (o = (e => EXIF.getData(s, function () {
                return e(EXIF.getTag(this, "Orientation"))
            }))), o(r => {
                e.width = s.width, e.height = s.height;
                let o = this.options.resize.call(this, e, t, n, i),
                    l = document.createElement("canvas"),
                    u = l.getContext("2d");
                switch (l.width = o.trgWidth, l.height = o.trgHeight, r > 4 && (l.width = o.trgHeight, l.height = o.trgWidth), r) {
                    case 2:
                        u.translate(l.width, 0), u.scale(-1, 1);
                        break;
                    case 3:
                        u.translate(l.width, l.height), u.rotate(Math.PI);
                        break;
                    case 4:
                        u.translate(0, l.height), u.scale(1, -1);
                        break;
                    case 5:
                        u.rotate(.5 * Math.PI), u.scale(1, -1);
                        break;
                    case 6:
                        u.rotate(.5 * Math.PI), u.translate(0, -l.width);
                        break;
                    case 7:
                        u.rotate(.5 * Math.PI), u.translate(l.height, -l.width), u.scale(-1, 1);
                        break;
                    case 8:
                        u.rotate(-.5 * Math.PI), u.translate(-l.height, 0)
                }
                drawImageIOSFix(u, s, null != o.srcX ? o.srcX : 0, null != o.srcY ? o.srcY : 0, o.srcWidth, o.srcHeight, null != o.trgX ? o.trgX : 0, null != o.trgY ? o.trgY : 0, o.trgWidth, o.trgHeight);
                let c = l.toDataURL("image/png");
                if (null != a) return a(c, l)
            })
        }), null != a && (s.onerror = a), s.src = e.dataURL
    }
    processQueue() {
        let {
            parallelUploads: e
        } = this.options, t = this.getUploadingFiles().length, n = t;
        if (t >= e) return;
        let i = this.getQueuedFiles();
        if (i.length > 0) {
            if (this.options.uploadMultiple) return this.processFiles(i.slice(0, e - t));
            for (; n < e;) {
                if (!i.length) return;
                this.processFile(i.shift()), n++
            }
        }
    }
    processFile(e) {
        return this.processFiles([e])
    }
    processFiles(e) {
        for (let t of e) t.processing = !0, t.status = Dropzone.UPLOADING, this.emit("processing", t);
        return this.options.uploadMultiple && this.emit("processingmultiple", e), this.uploadFiles(e)
    }
    _getFilesWithXhr(e) {
        return this.files.filter(t => t.xhr === e).map(e => e)
    }
    cancelUpload(e) {
        if (e.status === Dropzone.UPLOADING) {
            let t = this._getFilesWithXhr(e.xhr);
            for (let e of t) e.status = Dropzone.CANCELED;
            "undefined" != typeof e.xhr && e.xhr.abort();
            for (let e of t) this.emit("canceled", e);
            this.options.uploadMultiple && this.emit("canceledmultiple", t)
        } else e.status !== Dropzone.ADDED && e.status !== Dropzone.QUEUED || (e.status = Dropzone.CANCELED, this.emit("canceled", e), this.options.uploadMultiple && this.emit("canceledmultiple", [e]));
        if (this.options.autoProcessQueue) return this.processQueue()
    }
    resolveOption(e, ...t) {
        return "function" == typeof e ? e.apply(this, t) : e
    }
    uploadFile(e) {
        return this.uploadFiles([e])
    }
    uploadFiles(e) {
        this._transformFiles(e, t => {
            if (e[0].upload.chunked) {
                let n = e[0],
                    i = t[0],
                    r = 0;
                n.upload.chunks = [];
                let a = () => {
                    let t = 0;
                    for (; n.upload.chunks[t] !== undefined;) t++;
                    if (t >= n.upload.totalChunkCount) return;
                    r++;
                    let a = t * this.options.chunkSize,
                        o = Math.min(a + this.options.chunkSize, n.size),
                        s = {
                            name: this._getParamName(0),
                            data: i.webkitSlice ? i.webkitSlice(a, o) : i.slice(a, o),
                            filename: n.upload.filename,
                            chunkIndex: t
                        };
                    n.upload.chunks[t] = {
                        file: n,
                        index: t,
                        dataBlock: s,
                        status: Dropzone.UPLOADING,
                        progress: 0,
                        retries: 0
                    }, this._uploadData(e, [s])
                };
                if (n.upload.finishedChunkUpload = (t => {
                        let i = !0;
                        t.status = Dropzone.SUCCESS, t.dataBlock = null, t.xhr = null;
                        for (let e = 0; e < n.upload.totalChunkCount; e++) {
                            if (n.upload.chunks[e] === undefined) return a();
                            n.upload.chunks[e].status !== Dropzone.SUCCESS && (i = !1)
                        }
                        i && this.options.chunksUploaded(n, () => {
                            this._finished(e, "", null)
                        })
                    }), this.options.parallelChunkUploads)
                    for (let e = 0; e < n.upload.totalChunkCount; e++) a();
                else a()
            } else {
                let n = [];
                for (let i = 0; i < e.length; i++) n[i] = {
                    name: this._getParamName(i),
                    data: t[i],
                    filename: e[i].upload.filename
                };
                this._uploadData(e, n)
            }
        })
    }
    _getChunk(e, t) {
        for (let n = 0; n < e.upload.totalChunkCount; n++)
            if (e.upload.chunks[n] !== undefined && e.upload.chunks[n].xhr === t) return e.upload.chunks[n]
    }
    _uploadData(e, t) {
        let n = new XMLHttpRequest;
        for (let t of e) t.xhr = n;
        e[0].upload.chunked && (e[0].upload.chunks[t[0].chunkIndex].xhr = n);
        let i = this.resolveOption(this.options.method, e),
            r = this.resolveOption(this.options.url, e);
        n.open(i, r, !0), n.timeout = this.resolveOption(this.options.timeout, e), n.withCredentials = !!this.options.withCredentials, n.onload = (t => {
            this._finishedUploading(e, n, t)
        }), n.onerror = (() => {
            this._handleUploadError(e, n)
        }), (null != n.upload ? n.upload : n).onprogress = (t => this._updateFilesUploadProgress(e, n, t));
        let a = {
            Accept: "application/json",
            "Cache-Control": "no-cache",
            "X-Requested-With": "XMLHttpRequest"
        };
        this.options.headers && Dropzone.extend(a, this.options.headers);
        for (let e in a) {
            let t = a[e];
            t && n.setRequestHeader(e, t)
        }
        let o = new FormData;
        if (this.options.params) {
            let t = this.options.params;
            "function" == typeof t && (t = t.call(this, e, n, e[0].upload.chunked ? this._getChunk(e[0], n) : null));
            for (let e in t) {
                let n = t[e];
                o.append(e, n)
            }
        }
        for (let t of e) this.emit("sending", t, n, o);
        this.options.uploadMultiple && this.emit("sendingmultiple", e, n, o), this._addFormElementData(o);
        for (let e = 0; e < t.length; e++) {
            let n = t[e];
            o.append(n.name, n.data, n.filename)
        }
        this.submitRequest(n, o, e)
    }
    _transformFiles(e, t) {
        let n = [],
            i = 0;
        for (let r = 0; r < e.length; r++) this.options.transformFile.call(this, e[r], a => {
            n[r] = a, ++i === e.length && t(n)
        })
    }
    _addFormElementData(e) {
        if ("FORM" === this.element.tagName)
            for (let t of this.element.querySelectorAll("input, textarea, select, button")) {
                let n = t.getAttribute("name"),
                    i = t.getAttribute("type");
                if (i && (i = i.toLowerCase()), null != n)
                    if ("SELECT" === t.tagName && t.hasAttribute("multiple"))
                        for (let i of t.options) i.selected && e.append(n, i.value);
                    else(!i || "checkbox" !== i && "radio" !== i || t.checked) && e.append(n, t.value)
            }
    }
    _updateFilesUploadProgress(e, t, n) {
        let i;
        if (void 0 !== n) {
            if (i = 100 * n.loaded / n.total, e[0].upload.chunked) {
                let r = e[0],
                    a = this._getChunk(r, t);
                a.progress = i, a.total = n.total, a.bytesSent = n.loaded;
                r.upload.progress = 0, r.upload.total = 0, r.upload.bytesSent = 0;
                for (let e = 0; e < r.upload.totalChunkCount; e++) r.upload.chunks[e] !== undefined && r.upload.chunks[e].progress !== undefined && (r.upload.progress += r.upload.chunks[e].progress, r.upload.total += r.upload.chunks[e].total, r.upload.bytesSent += r.upload.chunks[e].bytesSent);
                r.upload.progress = r.upload.progress / r.upload.totalChunkCount
            } else
                for (let t of e) t.upload.progress = i, t.upload.total = n.total, t.upload.bytesSent = n.loaded;
            for (let t of e) this.emit("uploadprogress", t, t.upload.progress, t.upload.bytesSent)
        } else {
            let t = !0;
            i = 100;
            for (let n of e) 100 === n.upload.progress && n.upload.bytesSent === n.upload.total || (t = !1), n.upload.progress = i, n.upload.bytesSent = n.upload.total;
            if (t) return;
            for (let t of e) this.emit("uploadprogress", t, i, t.upload.bytesSent)
        }
    }
    _finishedUploading(e, t, n) {
        let i;
        if (e[0].status !== Dropzone.CANCELED && 4 === t.readyState) {
            if ("arraybuffer" !== t.responseType && "blob" !== t.responseType && (i = t.responseText, t.getResponseHeader("content-type") && ~t.getResponseHeader("content-type").indexOf("application/json"))) try {
                i = JSON.parse(i)
            } catch (r) {
                n = r, i = "Invalid JSON response from server."
            }
            this._updateFilesUploadProgress(e), 200 <= t.status && t.status < 300 ? e[0].upload.chunked ? e[0].upload.finishedChunkUpload(this._getChunk(e[0], t)) : this._finished(e, i, n) : this._handleUploadError(e, t, i)
        }
    }
    _handleUploadError(e, t, n) {
        if (e[0].status !== Dropzone.CANCELED) {
            if (e[0].upload.chunked && this.options.retryChunks) {
                let n = this._getChunk(e[0], t);
                if (n.retries++ < this.options.retryChunksLimit) return void this._uploadData(e, [n.dataBlock]);
                console.warn("Retried this chunk too often. Giving up.")
            }
            for (let i of e) this._errorProcessing(e, n || this.options.dictResponseError.replace("{{statusCode}}", t.status), t)
        }
    }
    submitRequest(e, t, n) {
        e.send(t)
    }
    _finished(e, t, n) {
        for (let i of e) i.status = Dropzone.SUCCESS, this.emit("success", i, t, n), this.emit("complete", i);
        if (this.options.uploadMultiple && (this.emit("successmultiple", e, t, n), this.emit("completemultiple", e)), this.options.autoProcessQueue) return this.processQueue()
    }
    _errorProcessing(e, t, n) {
        for (let i of e) i.status = Dropzone.ERROR, this.emit("error", i, t, n), this.emit("complete", i);
        if (this.options.uploadMultiple && (this.emit("errormultiple", e, t, n), this.emit("completemultiple", e)), this.options.autoProcessQueue) return this.processQueue()
    }
    static uuidv4() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (e) {
            let t = 16 * Math.random() | 0;
            return ("x" === e ? t : 3 & t | 8).toString(16)
        })
    }
}
Dropzone.initClass(), Dropzone.version = "5.5.0", Dropzone.options = {}, Dropzone.optionsForElement = function (e) {
    return e.getAttribute("id") ? Dropzone.options[camelize(e.getAttribute("id"))] : undefined
}, Dropzone.instances = [], Dropzone.forElement = function (e) {
    if ("string" == typeof e && (e = document.querySelector(e)), null == (null != e ? e.dropzone : undefined)) throw new Error("No Dropzone found for given element. This is probably because you're trying to access it before Dropzone had the time to initialize. Use the `init` option to setup any additional observers on your Dropzone.");
    return e.dropzone
}, Dropzone.autoDiscover = !0, Dropzone.discover = function () {
    let e;
    if (document.querySelectorAll) e = document.querySelectorAll(".dropzone");
    else {
        e = [];
        let t = t => (() => {
            let n = [];
            for (let i of t) /(^| )dropzone($| )/.test(i.className) ? n.push(e.push(i)) : n.push(undefined);
            return n
        })();
        t(document.getElementsByTagName("div")), t(document.getElementsByTagName("form"))
    }
    return (() => {
        let t = [];
        for (let n of e) !1 !== Dropzone.optionsForElement(n) ? t.push(new Dropzone(n)) : t.push(undefined);
        return t
    })()
}, Dropzone.blacklistedBrowsers = [/opera.*(Macintosh|Windows Phone).*version\/12/i], Dropzone.isBrowserSupported = function () {
    let e = !0;
    if (window.File && window.FileReader && window.FileList && window.Blob && window.FormData && document.querySelector)
        if ("classList" in document.createElement("a"))
            for (let t of Dropzone.blacklistedBrowsers) t.test(navigator.userAgent) && (e = !1);
        else e = !1;
    else e = !1;
    return e
}, Dropzone.dataURItoBlob = function (e) {
    let t = atob(e.split(",")[1]),
        n = e.split(",")[0].split(":")[1].split(";")[0],
        i = new ArrayBuffer(t.length),
        r = new Uint8Array(i);
    for (let e = 0, n = t.length, i = 0 <= n; i ? e <= n : e >= n; i ? e++ : e--) r[e] = t.charCodeAt(e);
    return new Blob([i], {
        type: n
    })
};
const without = (e, t) => e.filter(e => e !== t).map(e => e),
    camelize = e => e.replace(/[\-_](\w)/g, e => e.charAt(1).toUpperCase());
Dropzone.createElement = function (e) {
    let t = document.createElement("div");
    return t.innerHTML = e, t.childNodes[0]
}, Dropzone.elementInside = function (e, t) {
    if (e === t) return !0;
    for (; e = e.parentNode;)
        if (e === t) return !0;
    return !1
}, Dropzone.getElement = function (e, t) {
    let n;
    if ("string" == typeof e ? n = document.querySelector(e) : null != e.nodeType && (n = e),
        null == n) throw new Error(`Invalid \`${t}\` option provided. Please provide a CSS selector or a plain HTML element.`);
    return n
}, Dropzone.getElements = function (e, t) {
    let n, i;
    if (e instanceof Array) {
        i = [];
        try {
            for (n of e) i.push(this.getElement(n, t))
        } catch (r) {
            i = null
        }
    } else if ("string" == typeof e)
        for (n of (i = [], document.querySelectorAll(e))) i.push(n);
    else null != e.nodeType && (i = [e]);
    if (null == i || !i.length) throw new Error(`Invalid \`${t}\` option provided. Please provide a CSS selector, a plain HTML element or a list of those.`);
    return i
}, Dropzone.confirm = function (e, t, n) {
    return window.confirm(e) ? t() : null != n ? n() : void 0
}, Dropzone.isValidFile = function (e, t) {
    if (!t) return !0;
    t = t.split(",");
    let n = e.type,
        i = n.replace(/\/.*$/, "");
    for (let r of t)
        if ("." === (r = r.trim()).charAt(0)) {
            if (-1 !== e.name.toLowerCase().indexOf(r.toLowerCase(), e.name.length - r.length)) return !0
        } else if (/\/\*$/.test(r)) {
        if (i === r.replace(/\/.*$/, "")) return !0
    } else if (n === r) return !0;
    return !1
}, "undefined" != typeof jQuery && null !== jQuery && (jQuery.fn.dropzone = function (e) {
    return this.each(function () {
        return new Dropzone(this, e)
    })
}), "undefined" != typeof module && null !== module ? module.exports = Dropzone : window.Dropzone = Dropzone, Dropzone.ADDED = "added", Dropzone.QUEUED = "queued", Dropzone.ACCEPTED = Dropzone.QUEUED, Dropzone.UPLOADING = "uploading", Dropzone.PROCESSING = Dropzone.UPLOADING, Dropzone.CANCELED = "canceled", Dropzone.ERROR = "error", Dropzone.SUCCESS = "success";
let detectVerticalSquash = function (e) {
    e.naturalWidth;
    let t = e.naturalHeight,
        n = document.createElement("canvas");
    n.width = 1, n.height = t;
    let i = n.getContext("2d");
    i.drawImage(e, 0, 0);
    let {
        data: r
    } = i.getImageData(1, 0, 1, t), a = 0, o = t, s = t;
    for (; s > a;) {
        0 === r[4 * (s - 1) + 3] ? o = s : a = s, s = o + a >> 1
    }
    let l = s / t;
    return 0 === l ? 1 : l
};
var drawImageIOSFix = function (e, t, n, i, r, a, o, s, l, u) {
    let c = detectVerticalSquash(t);
    return e.drawImage(t, n, i, r, a, o, s, l, u / c)
};
class ExifRestore {
    static initClass() {
        this.KEY_STR = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
    }
    static encode64(e) {
        let t = "",
            n = undefined,
            i = undefined,
            r = "",
            a = undefined,
            o = undefined,
            s = undefined,
            l = "",
            u = 0;
        for (; a = (n = e[u++]) >> 2, o = (3 & n) << 4 | (i = e[u++]) >> 4, s = (15 & i) << 2 | (r = e[u++]) >> 6, l = 63 & r, isNaN(i) ? s = l = 64 : isNaN(r) && (l = 64), t = t + this.KEY_STR.charAt(a) + this.KEY_STR.charAt(o) + this.KEY_STR.charAt(s) + this.KEY_STR.charAt(l), n = i = r = "", a = o = s = l = "", u < e.length;);
        return t
    }
    static restore(e, t) {
        if (!e.match("data:image/jpeg;base64,")) return t;
        let n = this.decode64(e.replace("data:image/jpeg;base64,", "")),
            i = this.slice2Segments(n),
            r = this.exifManipulation(t, i);
        return `data:image/jpeg;base64,${this.encode64(r)}`
    }
    static exifManipulation(e, t) {
        let n = this.getExifArray(t),
            i = this.insertExif(e, n);
        return new Uint8Array(i)
    }
    static getExifArray(e) {
        let t = undefined,
            n = 0;
        for (; n < e.length;) {
            if (255 === (t = e[n])[0] & 225 === t[1]) return t;
            n++
        }
        return []
    }
    static insertExif(e, t) {
        let n = e.replace("data:image/jpeg;base64,", ""),
            i = this.decode64(n),
            r = i.indexOf(255, 3),
            a = i.slice(0, r),
            o = i.slice(r),
            s = a;
        return s = (s = s.concat(t)).concat(o)
    }
    static slice2Segments(e) {
        let t = 0,
            n = [];
        for (;;) {
            if (255 === e[t] & 218 === e[t + 1]) break;
            if (255 === e[t] & 216 === e[t + 1]) t += 2;
            else {
                let i = t + (256 * e[t + 2] + e[t + 3]) + 2,
                    r = e.slice(t, i);
                n.push(r), t = i
            }
            if (t > e.length) break
        }
        return n
    }
    static decode64(e) {
        let t = undefined,
            n = undefined,
            i = "",
            r = undefined,
            a = undefined,
            o = undefined,
            s = "",
            l = 0,
            u = [];
        for (/[^A-Za-z0-9\+\/\=]/g.exec(e) && console.warn("There were invalid base64 characters in the input text.\nValid base64 characters are A-Z, a-z, 0-9, '+', '/',and '='\nExpect errors in decoding."), e = e.replace(/[^A-Za-z0-9\+\/\=]/g, ""); t = (r = this.KEY_STR.indexOf(e.charAt(l++))) << 2 | (a = this.KEY_STR.indexOf(e.charAt(l++))) >> 4, n = (15 & a) << 4 | (o = this.KEY_STR.indexOf(e.charAt(l++))) >> 2, i = (3 & o) << 6 | (s = this.KEY_STR.indexOf(e.charAt(l++))), u.push(t), 64 !== o && u.push(n), 64 !== s && u.push(i), t = n = i = "", r = a = o = s = "", l < e.length;);
        return u
    }
}
ExifRestore.initClass();
let contentLoaded = function (e, t) {
    let n = !1,
        i = !0,
        r = e.document,
        a = r.documentElement,
        o = r.addEventListener ? "addEventListener" : "attachEvent",
        s = r.addEventListener ? "removeEventListener" : "detachEvent",
        l = r.addEventListener ? "" : "on";
    var u = function (i) {
            if ("readystatechange" !== i.type || "complete" === r.readyState) return ("load" === i.type ? e : r)[s](l + i.type, u, !1), !n && (n = !0) ? t.call(e, i.type || i) : void 0
        },
        c = function () {
            try {
                a.doScroll("left")
            } catch (e) {
                return void setTimeout(c, 50)
            }
            return u("poll")
        };
    if ("complete" !== r.readyState) {
        if (r.createEventObject && a.doScroll) {
            try {
                i = !e.frameElement
            } catch (d) {}
            i && c()
        }
        return r[o](l + "DOMContentLoaded", u, !1), r[o](l + "readystatechange", u, !1), e[o](l + "load", u, !1)
    }
};
Dropzone._autoDiscoverFunction = function () {
        if (Dropzone.autoDiscover) return Dropzone.discover()
    }, contentLoaded(window, Dropzone._autoDiscoverFunction),
    function (e, t) {
        function n(e, t) {
            f(e).push(t)
        }

        function i(i, r, a) {
            var o = i.children(r.headerTag),
                s = i.children(r.bodyTag);
            o.length > s.length ? H(G, "contents") : o.length < s.length && H(G, "titles");
            var l = r.startIndex;
            if (a.stepCount = o.length, r.saveState && e.cookie) {
                var u = e.cookie(W + g(i)),
                    c = parseInt(u, 0);
                !isNaN(c) && c < a.stepCount && (l = c)
            }
            a.currentIndex = l, o.each(function (r) {
                var a = e(this),
                    o = s.eq(r),
                    l = o.data("mode"),
                    u = null == l ? J.html : v(J, /^\s*$/.test(l) || isNaN(l) ? l : parseInt(l, 0)),
                    c = u === J.html || o.data("url") === t ? "" : o.data("url"),
                    d = u !== J.html && "1" === o.data("loaded"),
                    h = e.extend({}, te, {
                        title: a.html(),
                        content: u === J.html ? o.html() : "",
                        contentUrl: c,
                        contentMode: u,
                        contentLoaded: d
                    });
                n(i, h)
            })
        }

        function r(e) {
            e.triggerHandler("canceled")
        }

        function a(e, t) {
            return e.currentIndex - t
        }

        function o(t, n) {
            var i = l(t);
            t.unbind(i).removeData("uid").removeData("options").removeData("state").removeData("steps").removeData("eventNamespace").find(".actions a").unbind(i), t.removeClass(n.clearFixCssClass + " vertical");
            var r = t.find(".content > *");
            r.removeData("loaded").removeData("mode").removeData("url"), r.removeAttr("id").removeAttr("role").removeAttr("tabindex").removeAttr("class").removeAttr("style")._removeAria("labelledby")._removeAria("hidden"), t.find(".content > [data-mode='async'],.content > [data-mode='iframe']").empty();
            var a = e('<{0} class="{1}"></{0}>'.format(t.get(0).tagName, t.attr("class"))),
                o = t._id();
            return null != o && "" !== o && a._id(o), a.html(t.find(".content").html()), t.after(a), t.remove(), a
        }

        function s(e, t) {
            var n = e.find(".steps li").eq(t.currentIndex);
            e.triggerHandler("finishing", [t.currentIndex]) ? (n.addClass("done").removeClass("error"), e.triggerHandler("finished", [t.currentIndex])) : n.addClass("error")
        }

        function l(e) {
            var t = e.data("eventNamespace");
            return null == t && (t = "." + g(e), e.data("eventNamespace", t)), t
        }

        function u(e, t) {
            var n = g(e);
            return e.find("#" + n + Y + t)
        }

        function c(e, t) {
            var n = g(e);
            return e.find("#" + n + V + t)
        }

        function d(e, t) {
            var n = g(e);
            return e.find("#" + n + K + t)
        }

        function h(e) {
            return e.data("options")
        }

        function p(e) {
            return e.data("state")
        }

        function f(e) {
            return e.data("steps")
        }

        function m(e, t) {
            var n = f(e);
            return (0 > t || t >= n.length) && H(X), n[t]
        }

        function g(e) {
            var t = e.data("uid");
            return null == t && (null == (t = e._id()) && (t = "steps-uid-".concat(B), e._id(t)), B++, e.data("uid", t)), t
        }

        function v(e, n) {
            if (U("enumType", e), U("keyOrValue", n), "string" == typeof n) {
                var i = e[n];
                return i === t && H("The enum key '{0}' does not exist.", n), i
            }
            if ("number" == typeof n) {
                for (var r in e)
                    if (e[r] === n) return n;
                H("Invalid enum value '{0}'.", n)
            } else H("Invalid key or value type.")
        }

        function y(e, t, n) {
            return T(e, t, n, w(n, 1))
        }

        function b(e, t, n) {
            return T(e, t, n, a(n, 1))
        }

        function _(e, t, n, i) {
            if ((0 > i || i >= n.stepCount) && H(X), !(t.forceMoveForward && i < n.currentIndex)) {
                var r = n.currentIndex;
                return e.triggerHandler("stepChanging", [n.currentIndex, i]) ? (n.currentIndex = i, Q(e, t, n), j(e, t, n, r), F(e, t, n), E(e, t, n), R(e, t, n, i, r, function () {
                    e.triggerHandler("stepChanged", [i, r])
                })) : e.find(".steps li").eq(r).addClass("error"), !0
            }
        }

        function w(e, t) {
            return e.currentIndex + t
        }

        function k(t) {
            var n = e.extend(!0, {}, ne, t);
            return this.each(function () {
                var t = e(this),
                    r = {
                        currentIndex: n.startIndex,
                        currentStep: null,
                        stepCount: 0,
                        transitionElement: null
                    };
                t.data("options", n), t.data("state", r), t.data("steps", []), i(t, n, r), M(t, n, r), N(t, n), n.autoFocus && 0 === B && u(t, n.startIndex).focus(), t.triggerHandler("init", [n.startIndex])
            })
        }

        function C(t, n, i, r, a) {
            (0 > r || r > i.stepCount) && H(X), x(t, r, a = e.extend({}, te, a)), i.currentIndex !== i.stepCount && i.currentIndex >= r && (i.currentIndex++, Q(t, n, i)), i.stepCount++;
            var o = t.find(".content"),
                s = e("<{0}>{1}</{0}>".format(n.headerTag, a.title)),
                l = e("<{0}></{0}>".format(n.bodyTag));
            return (null == a.contentMode || a.contentMode === J.html) && l.html(a.content), 0 === r ? o.prepend(l).prepend(s) : c(t, r - 1).after(l).after(s), L(t, i, l, r), q(t, n, i, s, r), A(t, n, i, r), r === i.currentIndex && j(t, n, i), F(t, n, i), t
        }

        function x(e, t, n) {
            f(e).splice(t, 0, n)
        }

        function D(t) {
            var n = e(this),
                i = h(n),
                r = p(n);
            if (i.suppressPaginationOnFocus && n.find(":focus").is(":input")) return t.preventDefault(), !1;
            var a = {
                left: 37,
                right: 39
            };
            t.keyCode === a.left ? (t.preventDefault(), b(n, i, r)) : t.keyCode === a.right && (t.preventDefault(), y(n, i, r))
        }

        function E(t, n, i) {
            if (i.stepCount > 0) {
                var r = i.currentIndex,
                    a = m(t, r);
                if (!n.enableContentCache || !a.contentLoaded) switch (v(J, a.contentMode)) {
                    case J.iframe:
                        t.find(".content > .body").eq(i.currentIndex).empty().html('<iframe src="' + a.contentUrl + '" frameborder="0" scrolling="no" />').data("loaded", "1");
                        break;
                    case J.async:
                        var o = c(t, r)._aria("busy", "true").empty().append(P(n.loadingTemplate, {
                            text: n.labels.loading
                        }));
                        e.ajax({
                            url: a.contentUrl,
                            cache: !1
                        }).done(function (e) {
                            o.empty().html(e)._aria("busy", "false").data("loaded", "1"), t.triggerHandler("contentLoaded", [r])
                        })
                }
            }
        }

        function T(e, t, n, i) {
            var r = n.currentIndex;
            if (i >= 0 && i < n.stepCount && !(t.forceMoveForward && i < n.currentIndex)) {
                var a = u(e, i),
                    o = a.parent(),
                    s = o.hasClass("disabled");
                return o._enableAria(), a.click(), r !== n.currentIndex || !s || (o._enableAria(!1), !1)
            }
            return !1
        }

        function S(t) {
            t.preventDefault();
            var n = e(this),
                i = n.parent().parent().parent().parent(),
                a = h(i),
                o = p(i),
                l = n.attr("href");
            switch (l.substring(l.lastIndexOf("#") + 1)) {
                case "cancel":
                    r(i);
                    break;
                case "finish":
                    s(i, o);
                    break;
                case "next":
                    y(i, a, o);
                    break;
                case "previous":
                    b(i, a, o)
            }
        }

        function F(e, t, n) {
            if (t.enablePagination) {
                var i = e.find(".actions a[href$='#finish']").parent(),
                    r = e.find(".actions a[href$='#next']").parent();
                if (!t.forceMoveForward) e.find(".actions a[href$='#previous']").parent()._enableAria(n.currentIndex > 0);
                t.enableFinishButton && t.showFinishButtonAlways ? (i._enableAria(n.stepCount > 0), r._enableAria(n.stepCount > 1 && n.stepCount > n.currentIndex + 1)) : (i._showAria(t.enableFinishButton && n.stepCount === n.currentIndex + 1), r._showAria(0 === n.stepCount || n.stepCount > n.currentIndex + 1)._enableAria(n.stepCount > n.currentIndex + 1 || !t.enableFinishButton))
            }
        }

        function j(t, n, i, r) {
            var a = u(t, i.currentIndex),
                o = e('<span class="current-info audible">' + n.labels.current + " </span>"),
                s = t.find(".content > .title");
            if (null != r) {
                var l = u(t, r);
                l.parent().addClass("done").removeClass("error")._selectAria(!1), s.eq(r).removeClass("current").next(".body").removeClass("current"), o = l.find(".current-info"), a.focus()
            }
            a.prepend(o).parent()._selectAria().removeClass("done")._enableAria(), s.eq(i.currentIndex).addClass("current").next(".body").addClass("current")
        }

        function A(e, t, n, i) {
            for (var r = g(e), a = i; a < n.stepCount; a++) {
                var o = r + Y + a,
                    s = r + V + a,
                    l = r + K + a,
                    u = e.find(".title").eq(a)._id(l);
                e.find(".steps a").eq(a)._id(o)._aria("controls", s).attr("href", "#" + l).html(P(t.titleTemplate, {
                    index: a + 1,
                    title: u.html()
                })), e.find(".body").eq(a)._id(s)._aria("labelledby", l)
            }
        }

        function N(e, t) {
            var n = l(e);
            e.bind("canceled" + n, t.onCanceled), e.bind("contentLoaded" + n, t.onContentLoaded), e.bind("finishing" + n, t.onFinishing), e.bind("finished" + n, t.onFinished), e.bind("init" + n, t.onInit), e.bind("stepChanging" + n, t.onStepChanging), e.bind("stepChanged" + n, t.onStepChanged), t.enableKeyNavigation && e.bind("keyup" + n, D), e.find(".actions a").bind("click" + n, S)
        }

        function I(e, t, n, i) {
            return !(0 > i || i >= n.stepCount || n.currentIndex === i) && ($(e, i), n.currentIndex > i && (n.currentIndex--, Q(e, t, n)), n.stepCount--, d(e, i).remove(), c(e, i).remove(), u(e, i).parent().remove(), 0 === i && e.find(".steps li").first().addClass("first"), i === n.stepCount && e.find(".steps li").eq(i).addClass("last"), A(e, t, n, i), F(e, t, n), !0)
        }

        function $(e, t) {
            f(e).splice(t, 1)
        }

        function M(t, n, i) {
            var r = '<{0} class="{1}">{2}</{0}>',
                a = v(Z, n.stepsOrientation) === Z.vertical ? " vertical" : "",
                o = e(r.format(n.contentContainerTag, "content " + n.clearFixCssClass, t.html())),
                s = e(r.format(n.stepsContainerTag, "steps " + n.clearFixCssClass, '<ul role="tablist"></ul>')),
                l = o.children(n.headerTag),
                u = o.children(n.bodyTag);
            t.attr("role", "application").empty().append(s).append(o).addClass(n.cssClass + " " + n.clearFixCssClass + a), u.each(function (n) {
                L(t, i, e(this), n)
            }), l.each(function (r) {
                q(t, n, i, e(this), r)
            }), j(t, n, i), O(t, n, i)
        }

        function L(e, t, n, i) {
            var r = g(e),
                a = r + V + i,
                o = r + K + i;
            n._id(a).attr("role", "tabpanel")._aria("labelledby", o).addClass("body")._showAria(t.currentIndex === i)
        }

        function O(e, t, n) {
            if (t.enablePagination) {
                var i = '<{0} class="actions {1}"><ul role="menu" aria-label="{2}">{3}</ul></{0}>',
                    r = '<li><a href="#{0}" role="menuitem">{1}</a></li>',
                    a = "";
                t.forceMoveForward || (a += r.format("previous", t.labels.previous)), a += r.format("next", t.labels.next), t.enableFinishButton && (a += r.format("finish", t.labels.finish)), t.enableCancelButton && (a += r.format("cancel", t.labels.cancel)), e.append(i.format(t.actionContainerTag, t.clearFixCssClass, t.labels.pagination, a)), F(e, t, n), E(e, t, n)
            }
        }

        function P(e, n) {
            for (var i = e.match(/#([a-z]*)#/gi), r = 0; r < i.length; r++) {
                var a = i[r],
                    o = a.substring(1, a.length - 1);
                n[o] === t && H("The key '{0}' does not exist in the substitute collection!", o), e = e.replace(a, n[o])
            }
            return e
        }

        function q(t, n, i, r, a) {
            var o = g(t),
                s = o + Y + a,
                u = o + V + a,
                c = o + K + a,
                d = t.find(".steps > ul"),
                h = P(n.titleTemplate, {
                    index: a + 1,
                    title: r.html()
                }),
                p = e('<li role="tab"><a id="' + s + '" href="#' + c + '" aria-controls="' + u + '">' + h + "</a></li>");
            p._enableAria(n.enableAllSteps || i.currentIndex > a), i.currentIndex > a && p.addClass("done"), r._id(c).attr("tabindex", "-1").addClass("title"), 0 === a ? d.prepend(p) : d.find("li").eq(a - 1).after(p), 0 === a && d.find("li").removeClass("first").eq(a).addClass("first"), a === i.stepCount - 1 && d.find("li").removeClass("last").eq(a).addClass("last"), p.children("a").bind("click" + l(t), z)
        }

        function Q(t, n, i) {
            n.saveState && e.cookie && e.cookie(W + g(t), i.currentIndex)
        }

        function R(t, n, i, r, a, o) {
            var s = t.find(".content > .body"),
                l = v(ee, n.transitionEffect),
                u = n.transitionEffectSpeed,
                c = s.eq(r),
                d = s.eq(a);
            switch (l) {
                case ee.fade:
                case ee.slide:
                    var h = l === ee.fade ? "fadeOut" : "slideUp",
                        f = l === ee.fade ? "fadeIn" : "slideDown";
                    i.transitionElement = c, d[h](u, function () {
                        var t = p(e(this)._showAria(!1).parent().parent());
                        t.transitionElement && (t.transitionElement[f](u, function () {
                            e(this)._showAria()
                        }).promise().done(o), t.transitionElement = null)
                    });
                    break;
                case ee.slideLeft:
                    var m = d.outerWidth(!0),
                        g = r > a ? -m : m,
                        y = r > a ? m : -m;
                    e.when(d.animate({
                        left: g
                    }, u, function () {
                        e(this)._showAria(!1)
                    }), c.css("left", y + "px")._showAria().animate({
                        left: 0
                    }, u)).done(o);
                    break;
                default:
                    e.when(d._showAria(!1), c._showAria()).done(o)
            }
        }

        function z(t) {
            t.preventDefault();
            var n = e(this),
                i = n.parent().parent().parent().parent(),
                r = h(i),
                a = p(i),
                o = a.currentIndex;
            if (n.parent().is(":not(.disabled):not(.current)")) {
                var s = n.attr("href");
                _(i, r, a, parseInt(s.substring(s.lastIndexOf("-") + 1), 0))
            }
            return o === a.currentIndex ? (u(i, o).focus(), !1) : void 0
        }

        function H(e) {
            throw arguments.length > 1 && (e = e.format(Array.prototype.slice.call(arguments, 1))), new Error(e)
        }

        function U(e, t) {
            null == t && H("The argument '{0}' is null or undefined.", e)
        }
        e.fn.extend({
            _aria: function (e, t) {
                return this.attr("aria-" + e, t)
            },
            _removeAria: function (e) {
                return this.removeAttr("aria-" + e)
            },
            _enableAria: function (e) {
                return null == e || e ? this.removeClass("disabled")._aria("disabled", "false") : this.addClass("disabled")._aria("disabled", "true")
            },
            _showAria: function (e) {
                return null == e || e ? this.show()._aria("hidden", "false") : this.hide()._aria("hidden", "true")
            },
            _selectAria: function (e) {
                return null == e || e ? this.addClass("current")._aria("selected", "true") : this.removeClass("current")._aria("selected", "false")
            },
            _id: function (e) {
                return e ? this.attr("id", e) : this.attr("id")
            }
        }), String.prototype.format || (String.prototype.format = function () {
            for (var t = 1 === arguments.length && e.isArray(arguments[0]) ? arguments[0] : arguments, n = this, i = 0; i < t.length; i++) {
                var r = new RegExp("\\{" + i + "\\}", "gm");
                n = n.replace(r, t[i])
            }
            return n
        });
        var B = 0,
            W = "jQu3ry_5teps_St@te_",
            Y = "-t-",
            V = "-p-",
            K = "-h-",
            X = "Index out of range.",
            G = "One or more corresponding step {0} are missing.";
        e.fn.steps = function (t) {
            return e.fn.steps[t] ? e.fn.steps[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof t && t ? void e.error("Method " + t + " does not exist on jQuery.steps") : k.apply(this, arguments)
        }, e.fn.steps.add = function (e) {
            var t = p(this);
            return C(this, h(this), t, t.stepCount, e)
        }, e.fn.steps.destroy = function () {
            return o(this, h(this))
        }, e.fn.steps.finish = function () {
            s(this, p(this))
        }, e.fn.steps.getCurrentIndex = function () {
            return p(this).currentIndex
        }, e.fn.steps.getCurrentStep = function () {
            return m(this, p(this).currentIndex)
        }, e.fn.steps.getStep = function (e) {
            return m(this, e)
        }, e.fn.steps.insert = function (e, t) {
            return C(this, h(this), p(this), e, t)
        }, e.fn.steps.next = function () {
            return y(this, h(this), p(this))
        }, e.fn.steps.previous = function () {
            return b(this, h(this), p(this))
        }, e.fn.steps.remove = function (e) {
            return I(this, h(this), p(this), e)
        }, e.fn.steps.setStep = function () {
            throw new Error("Not yet implemented!")
        }, e.fn.steps.skip = function () {
            throw new Error("Not yet implemented!")
        };
        var J = e.fn.steps.contentMode = {
                html: 0,
                iframe: 1,
                async: 2
            },
            Z = e.fn.steps.stepsOrientation = {
                horizontal: 0,
                vertical: 1
            },
            ee = e.fn.steps.transitionEffect = {
                none: 0,
                fade: 1,
                slide: 2,
                slideLeft: 3
            },
            te = e.fn.steps.stepModel = {
                title: "",
                content: "",
                contentUrl: "",
                contentMode: J.html,
                contentLoaded: !1
            },
            ne = e.fn.steps.defaults = {
                headerTag: "h1",
                bodyTag: "div",
                contentContainerTag: "div",
                actionContainerTag: "div",
                stepsContainerTag: "div",
                cssClass: "wizard",
                clearFixCssClass: "clearfix",
                stepsOrientation: Z.horizontal,
                titleTemplate: '<span class="number">#index#.</span> #title#',
                loadingTemplate: '<span class="spinner"></span> #text#',
                autoFocus: !1,
                enableAllSteps: !1,
                enableKeyNavigation: !0,
                enablePagination: !0,
                suppressPaginationOnFocus: !0,
                enableContentCache: !0,
                enableCancelButton: !1,
                enableFinishButton: !0,
                preloadContent: !1,
                showFinishButtonAlways: !1,
                forceMoveForward: !1,
                saveState: !1,
                startIndex: 0,
                transitionEffect: ee.none,
                transitionEffectSpeed: 200,
                onStepChanging: function () {
                    return !0
                },
                onStepChanged: function () {},
                onCanceled: function () {},
                onFinishing: function () {
                    return !0
                },
                onFinished: function () {},
                onContentLoaded: function () {},
                onInit: function () {},
                labels: {
                    cancel: "Cancel",
                    current: "current step:",
                    pagination: "Pagination",
                    finish: "Finish",
                    next: "Next",
                    previous: "Previous",
                    loading: "Loading ..."
                }
            }
    }(jQuery),
    /*
     * jQuery throttle / debounce - v1.1 - 3/7/2010
     * http://benalman.com/projects/jquery-throttle-debounce-plugin/
     * 
     * Copyright (c) 2010 "Cowboy" Ben Alman
     * Dual licensed under the MIT and GPL licenses.
     * http://benalman.com/about/license/
     */
    function (e, t) {
        var n, i = e.jQuery || e.Cowboy || (e.Cowboy = {});
        i.throttle = n = function (e, n, r, a) {
            function o() {
                function i() {
                    l = +new Date, r.apply(u, d)
                }

                function o() {
                    s = t
                }
                var u = this,
                    c = +new Date - l,
                    d = arguments;
                a && !s && i(), s && clearTimeout(s), a === t && c > e ? i() : !0 !== n && (s = setTimeout(a ? o : i, a === t ? e - c : e))
            }
            var s, l = 0;
            return "boolean" != typeof n && (a = r, r = n, n = t), i.guid && (o.guid = r.guid = r.guid || i.guid++), o
        }, i.debounce = function (e, i, r) {
            return r === t ? n(e, i, !1) : n(e, r, !1 !== i)
        }
    }(this),
    function () {
        $(document).on("turbolinks:load", function () {
            return $(".spin-button-plus").click(function () {
                var e, t;
                if (t = $(this).parent().prev(), !((e = parseInt(t.val())) >= parseInt(t.attr("max")))) return t.val(e + 1)
            }), $(".spin-button-minus").click(function () {
                var e, t;
                if (t = $(this).parent().next(), !((e = parseInt(t.val())) <= parseInt(t.attr("min")))) return t.val(e - 1)
            })
        })
    }.call(this), jQuery(document).on("turbolinks:load", function () {
        "use strict";

        function e() {
            const e = $(".checkbox-step-1", s);
            return $(".custom-checkbox input, .custom-radio input", e).filter(":checked")
        }

        function t() {
            const t = e();
            0 !== t.filter("[data-step='drop-shadow']").length && $("#drop-shadow").removeClass("hidden fade"), 0 !== t.filter("[data-step='photo-retouching']").length && $("#photo-retouching").removeClass("hidden fade")
        }

        function n() {
            const t = e();
            return 0 !== t.length && (!(0 !== t.filter("[data-step='drop-shadow']").length && !i("drop-shadow")) && !(0 !== t.filter("[data-step='photo-retouching']").length && !i("photo-retouching")))
        }

        function i(e) {
            const t = $(`#${e}`);
            return 0 !== $(".custom-checkbox input, .custom-radio input", t).filter(":checked").length
        }

        function r(e) {
            return o(e = a(e))
        }

        function a(e) {
            return e.replace(/_/g, " ")
        }

        function o(e) {
            return e.charAt(0).toUpperCase() + e.substring(1)
        }
        var s = $(".section_signup__form");
        ! function () {
            var i, a;
            s.validate({
                errorPlacement: function (e, t) {
                    t.after(e)
                }
            });
            var l = !1;
            s.steps({
                headerTag: ".form-tab",
                bodyTag: ".form-step",
                transitionEffect: "slideLeft",
                transitionEffectSpeed: 300,
                titleTemplate: '<span class="number">#index#</span> <span class="title">#title#</span>',
                onInit: function () {
                    console.log("onInit"), i = $(".actions>ul>li>a", s), a = $(".actions>ul>li:nth-child(2)>a", s), $(".actions>ul>li:nth-child(3)>a", s), i.attr("disabled", "disabled"), $(".form-control", s).on("keyup", function (e) {
                        var t = $(this);
                        "email" === t.attr("name") ? s.valid() ? a.removeAttr("disabled") : a.attr("disabled", "disabled") : setTimeout(function () {
                            0 === t.closest(".form-step").find(".form-control:not(.valid)").length ? a.removeAttr("disabled") : a.attr("disabled", "disabled")
                        }, 100), 13 === e.keyCode && s.steps("next")
                    }), $("#email").attr("value").length > 0 && s.valid(), t(), $(".checkbox-step", s).each(function () {
                        var e = $(this),
                            t = $(".custom-checkbox input, .custom-radio input", e);
                        t.change(function () {
                            var e = s.find("#" + $(this).attr("data-step"));
                            e.length > 0 ? $(this).is(":checked") ? (e.removeClass("hidden"), a.attr("disabled", !0), setTimeout(function () {
                                e.removeClass("fade")
                            }, 50)) : (e.addClass("fade"), a.removeAttr("disabled"), setTimeout(function () {
                                e.addClass("hidden")
                            }, 300)) : $(this).is(":checked") ? a.removeAttr("disabled") : t.filter(":checked").length < 1 && a.attr("disabled", !0)
                        })
                    }), $("input[data-step='photo-retouching']").change(function () {
                        !this.checked && $("div#photo-retouching input").prop("checked", !1), 0 === e().length && a.attr("disabled", !0)
                    }), $("input[data-step='drop-shadow']").change(function () {
                        !this.checked && $("div#drop-shadow input").prop("checked", !1), 0 === e().length && a.attr("disabled", !0)
                    })
                },
                onStepChanging: function (e, t, i) {
                    var r = !1;
                    return s.validate().settings.ignore = ":disabled,:hidden", console.log("onStepChanging"), 0 === t && 1 === i && (s.valid() && $.ajax({
                        url: shopify_proxy_path + "/free_trial/new/eligibility_check/",
                        data: {
                            first_name: $('[name="first_name"]', s).val(),
                            last_name: $('[name="last_name"]', s).val(),
                            email: $('[name="email"]', s).val()
                        },
                        type: "POST",
                        async: !1,
                        dataType: "json"
                    }).always(function (t) {
                        if (200 == +t.status) r = !0, $("#entity_id").val(t.entity_id), $("#chmac").val(t.chmac), initUppy();
                        else if (400 == +t.status) {
                            if (t.responseText) {
                                var n = JSON.parse(t.responseText);
                                for (var i in n)
                                    for (var a = 0; a < n[i].length; a++) {
                                        var s = o(n[i][a]);
                                        $('<label class="error"/>').html(s).insertAfter($("#" + i)), $("#" + i).addClass("error")
                                    }
                            }
                        } else 404 == +t.status ? $('<label class="error"/>').html("Server is down (404)").insertAfter(e.currentTarget[2]) : 500 == +t.status && $('<label class="error"/>').html("Server is down (500)").insertAfter(e.currentTarget[2])
                    }), n() ? a.removeAttr("disabled") : a.attr("disabled", !0)), 1 === t && 0 === i && (a.removeAttr("disabled"), r = !0), 1 === t && 2 === i && s.valid() && $(".form-step-2", s).find(".checkbox-step:visible").each(function () {
                        r = $(".custom-control input:checked", this).length > 0
                    }), 2 === t && 1 === i && (a.removeAttr("disabled"), r = !0), 2 === t && 0 === i && (a.removeAttr("disabled"), r = !0), r
                },
                onFinishing: function () {
                    return console.log("onFinishing"), s.validate().settings.ignore = ":disabled", s.valid()
                },
                onFinished: $.throttle(1e3, function (e) {
                    if (console.log("onFinished"), !0 !== l) {
                        l = !0;
                        var t = [];
                        $(".custom-control", s).each(function () {
                            if ($("input", this).is(":checked")) {
                                var e = $("input", this).val();
                                e && t.push(e)
                            }
                        });
                        var n = [];
                        $(".uppy-Dashboard-files", s).find("div.uppy-Dashboard-Item.is-complete .uppy-Dashboard-Item-name").each(function () {
                            n.push($(this).text())
                        }), $.ajax({
                            url: shopify_proxy_path + "/free_trial",
                            data: {
                                first_name: $('[name="first_name"]', s).val(),
                                last_name: $('[name="last_name"]', s).val(),
                                email: $('[name="email"]', s).val(),
                                variant_ids: t,
                                files: n,
                                additional_comment: $('[name="additional_comment"]', s).val()
                            },
                            type: "POST",
                            async: !1,
                            dataType: "json"
                        }).always(function (t) {
                            if (console.log(t), 4 == +t.readyState)
                                if (201 == +t.status) document.location.href = t.redirect_to;
                                else if (400 == +t.status) {
                                if (l = !1, t.responseText) {
                                    var n = JSON.parse(t.responseText),
                                        i = "";
                                    for (var a in n)
                                        for (var s = 0; s < n[a].length; s++) {
                                            var u = r(a) + ": " + n[a][s],
                                                c = o(n[a][s]);
                                            i += u + "\n", $('<label class="error"/>').html(c).insertAfter($("#" + a)), $("#" + a).addClass("error")
                                        }
                                    alert(i)
                                }
                            } else 404 == +t.status ? (l = !1, $('<label class="error"/>').html("Server is down (404)").insertAfter(e.currentTarget[2])) : 500 == +t.status && (l = !1, $('<label class="error"/>').html("Server is down (500)").insertAfter(e.currentTarget[2]))
                        })
                    }
                }),
                labels: {
                    finish: "Submit",
                    next: "Next"
                }
            }), $('[data-toggle="tooltip"]').tooltip(), $(window).width() >= 768 && $('[data-toggle="popover"]').popover()
        }()
    }),
    function () {
        jQuery(document).on("turbolinks:load", function () {
            var e, t, n, i, r, a, o, s, l, u, c, d, h;
            return t = function (e) {
                    var t, n, i, r, a;
                    if (t = function () {
                            var e, t;
                            return e = document.createElement("a"), t = jQuery("#sampleDropzone").attr("data-sample-image-url"), e.setAttribute("href", t), e.setAttribute("class", "dz-remove"), e.setAttribute("target", "_blank"), e.innerHTML = "Download file", e
                        }, r = function () {
                            return jQuery.ajax({
                                url: jQuery("#sampleDropzone").attr("data-delete-url"),
                                type: "POST",
                                data: {
                                    sample_image_url: jQuery("#sampleDropzone").attr("data-sample-image-url")
                                },
                                success: function () {}
                            })
                        }, jQuery("#sampleDropzone").length) return (a = new Dropzone("#sampleDropzone", {
                        url: jQuery("#sampleDropzone").attr("data-upload-url"),
                        maxFiles: 1,
                        addRemoveLinks: !0,
                        timeout: 432e5,
                        maxFilesize: 256,
                        sending: function (e, t, n) {
                            return jQuery.each(JSON.parse(jQuery("#sampleDropzone").attr("data-fields")), function (e, t) {
                                return n.append(e, t)
                            })
                        },
                        success: function (t, n) {
                            var i, r;
                            if (r = jQuery.parseXML(n), i = jQuery(r).find("Location").text(), jQuery("#template_sample_image_url").val(i), jQuery("#sampleDropzone").attr("data-sample-image-url", i), "edit_tamplete" === e) return jQuery(".update_template_link").click()
                        }
                    })).on("complete", function (e) {
                        var n;
                        return n = t(e), e.previewTemplate.appendChild(n)
                    }), "0" !== jQuery("#sampleDropzone").attr("data-sample-image-size") && (i = {
                        name: jQuery("#sampleDropzone").attr("data-sample-image-name"),
                        size: jQuery("#sampleDropzone").attr("data-sample-image-size"),
                        url: jQuery("#sampleDropzone").attr("data-sample-image-url")
                    }, a.emit("addedfile", i), a.emit("complete", i), a.files.push(i), n = 1, a.options.maxFiles = a.options.maxFiles - n), a.on("removedfile", function (e) {
                        if (0 === this.files.length) return a.options.maxFiles = 1, jQuery("#template_sample_image_url").val(""), jQuery(".update_template_link").length && jQuery(".update_template_link").click(), r(e)
                    })
                }, o = function (e) {
                    return "true" === jQuery("#" + e + ' input[name="template[resize_image]"]:checked').val() ? s(e) : i(e)
                }, s = function (e) {
                    return jQuery("#" + e).find(".image-size-fields").removeClass("d-none"), jQuery("#" + e).find(".template_image_width, .template_image_height").attr("required", !0)
                }, i = function (e) {
                    return jQuery("#" + e).find(".image-size-fields").addClass("d-none"), jQuery("#" + e).find(".template_image_width, .template_image_height").removeAttr("required")
                }, jQuery(document).on("click", '#create_template_modal input[name="template[resize_image]"]', function () {
                    return o("create_template_modal")
                }), l = function (e) {
                    return jQuery("#" + e + " .loading").removeClass("d-none"), "select_template_modal" === e ? jQuery(".form_question_similar_order, .templates_data").addClass("d-none") : "create_template_modal" === e ? jQuery(".template_create_alert, .start_new_order_after_template_created, .create_template_form").addClass("d-none") : "edit_template_modal" === e ? (jQuery(".template_update_alert, .start_new_order_after_template_created, .edit_template_form, .go_back_to_templates_modal").addClass("d-none"), jQuery(".go_back_to_templates_modal").addClass("d-none")) : void 0
                }, r = function (e) {
                    return jQuery("#" + e + " .loading").addClass("d-none")
                }, c = function (e, t) {
                    return jQuery("#" + e + " .template_create_edit_form").html(t.body), "create_template_modal" === e ? (jQuery("#edit_template_modal .template_create_edit_form").empty(), jQuery("#" + e + " .create_template_form").removeClass("d-none")) : "edit_template_modal" === e ? (jQuery("#create_template_modal .template_create_edit_form").empty(), jQuery("#" + e + " .edit_template_form").attr("action", t.update_url), jQuery("#" + e + " .delete_template_link").attr("href", t.delete_url), jQuery("#" + e + " .edit_template_form").removeClass("d-none"), jQuery("#" + e + " .go_back_to_templates_modal").removeClass("d-none")) : void 0
                }, d = function () {
                    return jQuery(".create_template_form").addClass("d-none"), jQuery(".template_create_alert").removeClass("d-none alert-danger").addClass("alert-success").html("Template was successfully created."), jQuery(".start_new_order_after_template_created").removeClass("d-none")
                }, jQuery(".save_as_template_button").on("ajax:beforeSend", function () {
                    return l("create_template_modal")
                }), jQuery(".save_as_template_button").on("ajax:success", function (e, n) {
                    return r("create_template_modal"), c("create_template_modal", n), o("create_template_modal"), jQuery('[data-toggle="tooltip"]').tooltip(), t("create_tamplete")
                }), jQuery(".create_template_form").on("ajax:success", function (e, t) {
                    return "success" === t.data ? d() : jQuery(".template_create_alert").removeClass("d-none alert-success").addClass("alert-danger").html(t.data)
                }), jQuery(document).on("click", ".start_new_order_after_template_created", function () {
                    return jQuery("#create_template_modal").modal("hide"), jQuery(".new_order_link").click()
                }), u = function () {
                    return r("select_template_modal"), jQuery("#select_template_modal .templates_data").addClass("d-none"), jQuery("#select_template_modal .form_question_similar_order").removeClass("d-none")
                }, h = function (e) {
                    return r("select_template_modal"), jQuery("#select_template_modal .form_question_similar_order").addClass("d-none"), jQuery("#select_template_modal .templates_data").removeClass("d-none").html(e)
                }, a = function () {
                    return jQuery(".continue_link").removeClass("d-none")
                }, n = function () {
                    return jQuery(".continue_link").addClass("d-none")
                }, e = function () {
                    return jQuery('input[name="similar_order"]').prop("checked", !1), n()
                }, jQuery(".new_order_text_link").on("click", function () {
                    return jQuery(".new_order_link").click()
                }), jQuery(".new_order_link").on("ajax:beforeSend", function () {
                    return l("select_template_modal")
                }), jQuery(".new_order_link").on("ajax:success", function (e, t) {
                    return h(t.body)
                }), jQuery(document).on("click", ".select_template", function () {
                    var e;
                    return e = jQuery(this).attr("data-url"), jQuery("#similar_order_yes").attr("data-url", e), u()
                }), jQuery('input[name="similar_order"]').on("click", function () {
                    var e;
                    return e = jQuery('input[name="similar_order"]:checked').attr("data-url"), jQuery(".continue_link").attr("href", e), a()
                }), jQuery(".go_back_link").on("click", function () {
                    return h(), e()
                }), jQuery(document).on("click", ".template_name", function () {
                    var e;
                    return jQuery("#select_template_modal").modal("hide"), jQuery("#edit_template_modal").modal("show"), l("edit_template_modal"), e = jQuery(this).attr("data-url"), jQuery.ajax(e, {
                        type: "GET",
                        dataType: "json",
                        error: function () {
                            return alert("An unexpected error occured.")
                        },
                        success: function (e) {
                            return r("edit_template_modal"), c("edit_template_modal", e), o("edit_template_modal"), jQuery('[data-toggle="tooltip"]').tooltip(), t("edit_tamplete")
                        }
                    })
                }), jQuery(document).on("click", '#edit_template_modal input[name="template[resize_image]"]', function () {
                    return o("edit_template_modal")
                }), jQuery(document).on("click", ".go_back_to_templates_modal", function () {
                    return jQuery("#edit_template_modal").modal("hide"), jQuery(".new_order_link").click()
                }), jQuery(".edit_template_form").on("ajax:success", function (e, t) {
                    return "updated" === t.action ? "success" === t.data ? (jQuery(".template_update_alert").removeClass("d-none alert-danger").addClass("alert-success").html("Template successfully updated."), jQuery(".edit_template_form").addClass("d-none")) : (jQuery(".template_update_alert").removeClass("d-none alert-success").addClass("alert-danger").html(t.data), jQuery(this).closest(".modal").animate({
                        scrollTop: 0
                    }, "slow")) : "deleted" === t.action ? "success" === t.data ? (jQuery(".template_update_alert").removeClass("d-none alert-danger").addClass("alert-success").html("Template successfully deleted."), jQuery(".edit_template_form").addClass("d-none")) : (jQuery(".template_update_alert").removeClass("d-none alert-success").addClass("alert-danger").html(t.data), jQuery(this).closest(".modal").animate({
                        scrollTop: 0
                    }, "slow")) : void 0
                }), jQuery(".download_image_button").on("ajax:success", function (e, t) {
                    return "success" === t.status ? Turbolinks.visit(t.download_url) : alert(t.message)
                }), jQuery(".draft_order_delete").on("ajax:success", function (e, t) {
                    return "success" === t.status || alert(t.message), Turbolinks.visit()
                }), jQuery(".order_cancel").on("ajax:success", function (e, t) {
                    return "success" === t.status ? (alert(t.message), sleep(3e3), Turbolinks.visit(t.redirect_to)) : alert(t.message)
                }), jQuery("#order_reference").editable(), jQuery(document).on("click", ".save_as_template_button_on_modal", function () {
                    var e, n;
                    return jQuery("#select_template_modal").modal("hide"), jQuery("#create_template_modal").modal("show"), l("create_template_modal"), n = jQuery(this).attr("data-id"), e = jQuery(this).attr("data-url"), jQuery.ajax(e, {
                        type: "GET",
                        data: {
                            order_id: n
                        },
                        dataType: "json",
                        error: function () {
                            return alert("An unexpected error occured.")
                        },
                        success: function (e) {
                            return r("create_template_modal"), c("create_template_modal", e), o("create_template_modal"), jQuery('[data-toggle="tooltip"]').tooltip(), t("create_tamplete")
                        }
                    })
                }),
                function () {
                    var e, t, n, i, r, a, o, s, l, u, c;
                    if (c = [], -1 === (o = window.location.href.indexOf("?"))) return c;
                    for ((l = (a = window.location.href.slice(o + 1)).indexOf("#")) >= 0 && (a = a.slice(0, l)), n = 0, r = (t = a.split("&")).length; n < r; n++)(s = (e = t[n]).indexOf("=")) <= 0 || (i = decodeURIComponent(e.slice(0, s)), u = decodeURIComponent(e.slice(s + 1)), c[i] = u);
                    return c
                }().start_new_order !== undefined && jQuery(".new_order_link")[0] && jQuery(".new_order_link").click(), jQuery(document).on("change", "#template_return_file_format", function () {
                    var e;
                    if ("Others" === jQuery(this).val()) return null !== (e = prompt("How would you like us to return your images?")) ? (jQuery(this).append("<option value='" + e + "'>" + e + "</option>"), jQuery(this).val(e)) : jQuery(this).val("")
                }), $("#edit_template_modal").on("hidden.bs.modal", function () {
                    return $(".template_create_edit_form").html("")
                }), $("#create_template_modal").on("hidden.bs.modal", function () {
                    return $(".template_create_edit_form").html("")
                })
        })
    }.call(this),
    function () {
        jQuery(document).on("turbolinks:load", function () {
            var e, t, n, i, r, a, o, s, l, u, c, d, h, p, f, m, g, v, y, b, _, w, k, C, x, D, E, T, S, F;
            if (g = function () {
                    return "true" === jQuery('input[name="quotation[resize_image]"]:checked').val() ? v() : p()
                }, v = function () {
                    return jQuery("#image-size-fields").removeClass("d-none")
                }, p = function () {
                    return jQuery("#image-size-fields").addClass("d-none"), jQuery("#quotation_image_width, #quotation_image_height").removeAttr("required")
                }, y = function () {
                    return jQuery('input[name="drop-shadow"]').is(":checked") ? jQuery(".drop-shadow-section").removeClass("d-none") : (jQuery(".drop-shadow-section").addClass("d-none"), jQuery(".drop-shadow-section :input").prop("checked", !1))
                }, jQuery('input[name="drop-shadow"]').on("change", function () {
                    return y()
                }), b = function () {
                    return jQuery('input[name="photo-retouching"]').is(":checked") ? jQuery(".photo-retouching-section").removeClass("d-none") : (jQuery(".photo-retouching-section").addClass("d-none"), jQuery(".photo-retouching-section :input").prop("checked", !1))
                }, jQuery('input[name="photo-retouching"]').on("change", function () {
                    return b()
                }), jQuery('input[name="quotation[resize_image]"]').on("change", function () {
                    return g()
                }), (jQuery(".quote_preview_form").length || jQuery("form#new_quotation").length) && g(), jQuery("form#new_quotation").length && (y(), b()), jQuery("form#new_quotation").on("submit", function () {
                    return jQuery("input[name*='services']:checked").length ? jQuery("input[name*='drop-shadow']:checked").length && !jQuery(".drop-shadow-section").find("input[name*='services']:checked").length ? (alert("Please select the type of shadow you want."), !1) : jQuery("input[name*='photo-retouching']:checked").length && !jQuery(".photo-retouching-section").find("input[name*='services']:checked").length ? (alert("Please select at least one retouching type."), !1) : void 0 : (alert("Please select at least one service."), !1)
                }), function () {
                    var e;
                    return e = 0, jQuery(".default_turnaround_price").each(function () {
                        var t;
                        return t = jQuery(this).val(), e += parseFloat(t)
                    }), e
                }, l = function () {
                    var e;
                    return e = 0, jQuery(".line_item").each(function () {
                        var t, n;
                        return t = parseFloat(jQuery(this).find(".default_turnaround_price").val()), n = parseInt(jQuery(this).find(".variant_quantity").text()), e += t * n
                    }), e.toFixed(2)
                }, r = function () {
                    var e;
                    return e = l(), jQuery("input[name='trunaround']").each(function () {
                        var t, n, i;
                        return n = jQuery(this), i = n.parent(), t = parseInt(jQuery(this).val()), jQuery(turnarounds).each(function (r, a) {
                            return t === parseInt(a.handle) && parseInt(a.available_at_price) > 0 && e > parseFloat(a.available_at_price) ? (n.attr("disabled", !0), i.attr({
                                "data-toggle": "tooltip",
                                title: "Not available"
                            }), i.tooltip("enable"), !1) : (n.removeAttr("disabled"), i.tooltip("dispose"))
                        })
                    })
                }, e = function () {
                    if (jQuery("input[name='trunaround']:checked").is(":disabled")) return jQuery("input[name='trunaround']").each(function () {
                        if (jQuery(this).is(":enabled")) return jQuery(this).click(), !1
                    })
                }, u = function (e) {
                    var t;
                    return function () {
                        var n, i, r;
                        for (r = [], n = 0, i = products.length; n < i; n++)(t = products[n]).id === e && r.push(t);
                        return r
                    }()[0]
                }, h = function (e, t) {
                    var n, i;
                    return n = (e.handle + "_" + t + "H").toUpperCase(),
                        function () {
                            var t, r, a, o;
                            for (o = [], t = 0, r = (a = e.variants).length; t < r; t++)(i = a[t]).sku === n && o.push(i);
                            return o
                        }()[0]
                }, E = function (e) {
                    var t, n;
                    return n = jQuery("input:radio.turnaround:checked").val(), t = new Array, jQuery(".line_item").each(function () {
                        var i, r, a, o, s, l, c, d, p, f, m;
                        return d = parseInt(jQuery(this).find(".product_id").val()), parseInt(jQuery(this).find(".variant_id").val()), c = u(d), f = h(c, n), m = parseInt(jQuery(this).find(".variant_quantity").text()), (r = jQuery(this).find(".line_item_price")).html("$" + f.price + " " + shopCurrency), l = (m * f.price).toFixed(2), (a = jQuery(this).find(".line_item_total")).html("$" + l + " " + shopCurrency), a.attr("data-amount", l), (i = f.compare_at_price) < f.price && (i = f.price), s = (m * i).toFixed(2), (o = jQuery(this).find(".line_item_total_compare_at")).html("$" + s + " " + shopCurrency), o.attr("data-amount", s), f.price < f.compare_at_price ? jQuery(this).find(".line_item_total_compare_at_element").removeClass("d-none") : jQuery(this).find(".line_item_total_compare_at_element").addClass("d-none"), !1 === e && r.add(a).add(o).removeAttr("data-currency").removeAttr("data-currency-" + shopCurrency).removeAttr("data-currency-" + Currency.currentCurrency), jQuery(this).find(".variant_id").val(f.id), jQuery(this).find(".default_turnaround_price").val(h(c, "24").price), p = jQuery(this).find(".product_title").text(), t.push({
                            product_id: c.id,
                            variant_id: f.id,
                            title: p,
                            handle: c.handle,
                            sku: f.sku,
                            price: f.price,
                            quantity: String(m)
                        })
                    }), jQuery("#quotation_line_items").val(JSON.stringify(t))
                }, c = function () {
                    var e;
                    return e = 0, jQuery(".line_item").each(function () {
                        return e += parseFloat(jQuery(this).find(".line_item_total").attr("data-amount"))
                    }), e.toFixed(2)
                }, d = function () {
                    var e;
                    return e = 0, jQuery(".line_item").each(function () {
                        return e += parseFloat(jQuery(this).find(".line_item_total_compare_at").attr("data-amount"))
                    }), e.toFixed(2)
                }, function () {
                    return Currency.currentCurrency
                }, w = function () {
                    return Currency.convertAll(shopCurrency, Currency.currentCurrency)
                }, D = function () {
                    var e;
                    return "168" === (e = jQuery("input:radio.turnaround:checked").val()) && (e = "96+"), jQuery(".turnaround_time").text(e)
                }, S = function (t) {
                    var n;
                    return n = c(), isNaN(n) && (n = 0), jQuery(".subtotal_price").html("$" + n + " " + shopCurrency), !1 === t && jQuery(".subtotal_price").removeAttr("data-currency").removeAttr("data-currency-" + shopCurrency).removeAttr("data-currency-" + Currency.currentCurrency), jQuery("#quotation_total_price").val(n), F(t, n), r(), e()
                }, F = function (e, t) {
                    var n;
                    return n = d(), isNaN(n) && (n = 0), jQuery(".subtotal_compare_at").html("$" + n + " " + shopCurrency), jQuery(".total_savings_amount").html("$" + (n - t).toFixed(2) + " " + shopCurrency), !1 === e && jQuery(".subtotal_compare_at, .total_savings_amount").removeAttr("data-currency").removeAttr("data-currency-" + shopCurrency).removeAttr("data-currency-" + Currency.currentCurrency), jQuery(".subtotal_price").html() === jQuery(".subtotal_compare_at").html() ? jQuery(".subtotal_compare_at_element").addClass("d-none") : jQuery(".subtotal_compare_at_element").removeClass("d-none")
                }, T = function () {
                    if (jQuery(".line_item").length <= 1) return jQuery(".delete_service").hide()
                }, k = function () {
                    var e;
                    return e = jQuery("#quotation_quantity").val(), jQuery(".base_quantity").text(e)
                }, s = function () {
                    var e;
                    return e = [], jQuery(".line_item").each(function () {
                        var t, n;
                        return n = jQuery(this).find(".variant_id").val(), t = parseInt(jQuery(this).find(".variant_quantity").text()), e.push({
                            variant_id: n,
                            quantity: t
                        })
                    }), e.reverse()
                }, function () {
                    return jQuery.ajax("/cart.js", {
                        type: "GET",
                        dataType: "json",
                        error: function () {},
                        success: function (e) {
                            return e.item_count
                        }
                    })
                }, jQuery(".quote_preview_form").on("ajax:before", function () {
                    var e;
                    return e = !0, jQuery(".variant_quantity").each(function () {
                        var t;
                        if (parseInt(jQuery(this).text()) < 1) return t = jQuery(this).closest("div").find(".product_title").text(), alert("Please enter quantity for line item " + t), e = !1
                    }), e
                }), a = $("#quotation_file_format_id"), t = $("#quotation_background_option_id"), n = $("#quotation_custom_background_color"), i = $("#quotation_custom_background_image"), f = function () {
                    return $('input[name="quotation\\[layer_option\\]"]:checked').val()
                }, m = function () {
                    var e, t, r, a;
                    return r = $("#quotation_file_format_id option:selected").text(), e = $("#quotation_background_option_id option:selected").text(), a = f().humanize().capitalize(), t = r + ", " + e, "Custom background" === e && (n.val() ? t += ", Custom background color: " + n.val() : i.val() && (t += ", Custom background image: " + i.val())), t += ", " + a
                }, jQuery(".quote_preview_form").on("ajax:success", function (e, r) {
                    return jQuery.ajax("/cart.js", {
                        type: "GET",
                        dataType: "json",
                        success: function (o) {
                            var l, u, c;
                            return "ADD TO CART" === jQuery(".add_update_cart_button").val() && o.item_count > 0 && !1 === confirm("You can submit one order at a time. So adding these items will remove any items already exist in your cart.") ? e.preventDefault() : (u = r.redirect_url, clearCart(), c = {}, jQuery(s()).each(function (e, t) {
                                return c[t.variant_id] = t.quantity
                            }), (l = {
                                file_format_id: a.val(),
                                background_option_id: t.val(),
                                custom_background_color: n.val(),
                                custom_background_image: i.val(),
                                layer_option: f(),
                                return_file_format: m(),
                                set_margin: jQuery("#quotation_set_margin").is(":checked"),
                                resize_image: jQuery('input[name="quotation\\[resize_image\\]"]:checked').val(),
                                image_width: jQuery("#quotation_image_width").val(),
                                image_height: jQuery("#quotation_image_height").val(),
                                additional_comment: jQuery("#quotation_additional_comment").val(),
                                exchange_rate_gbp: Currency.rates.GBP,
                                source_url: window.location.href,
                                order_type: "service_purchase"
                            }).quotation_id = "undefined" != typeof quotation_id ? quotation_id : "", l.template_id = "undefined" != typeof template_id ? template_id : "", l.sample_image = "undefined" != typeof sample_image ? sample_image : "", jQuery.ajax({
                                type: "POST",
                                url: "/cart/update.js",
                                data: {
                                    updates: c,
                                    attributes: l
                                },
                                dataType: "json",
                                success: function (e) {
                                    if (e.item_count > 0) return location.href = u
                                }
                            }))
                        }
                    })
                }), jQuery(".quote_preview_form").length && (E(!0), S(!0), jQuery("input[name=trunaround]").on("change", function () {
                    return E(!1), S(!1), w(), D()
                }), jQuery("#quotation_quantity").on("change", function () {
                    return k(), E(!1), S(!1), w()
                }), jQuery(".delete_service").on("click", function (e) {
                    return confirm("Please confirm you want to remove this service.") && (jQuery(this).parent().parent().parent().remove(), T(), E(!1), S(!1), w()), e.preventDefault()
                }), jQuery(".custom_quantity").on("click", function (e) {
                    var t;
                    return null !== (t = prompt("Enter quantity", jQuery(this).find("span").text())) && (jQuery(this).find("span").text(t), E(!1), S(!1), w()), e.preventDefault()
                })), x = function (e) {
                    return jQuery("label.custom-control-label:contains(" + e.items[0].variant_title + ")").siblings("input[type=radio]").click()
                }, o = function (e) {
                    var t;
                    return t = "", jQuery(e.items).each(function (e, n) {
                        if ("Additional copy" !== n.product_title && "Color variants" !== n.product_title && "Ghost mannequin" !== n.product_title) return t = n.quantity
                    }), t
                }, C = function (e) {
                    return jQuery("#quotation_quantity").val(o(e)), jQuery(".line_item").each(function () {
                        var t, n, i;
                        return n = parseInt(jQuery(this).find(".product_id").val()), null != (i = function () {
                            var i, r, a, o;
                            for (o = [], i = 0, r = (a = e.items).length; i < r; i++)(t = a[i]).product_id === n && o.push(t);
                            return o
                        }()[0]) ? jQuery(this).find(".variant_quantity").text(i.quantity) : jQuery(this).remove()
                    })
                }, _ = function (e) {
                    var t;
                    return "true" === (t = e.attributes).resize_image ? (jQuery("#quotation_resize_image_true").click(), jQuery("#quotation_image_width").val(t.image_width), jQuery("#quotation_image_height").val(t.image_height)) : (jQuery("#quotation_resize_image_false").click(), jQuery("#quotation_image_width").val(""), jQuery("#quotation_image_height").val("")), "true" === t.set_margin ? jQuery("#quotation_set_margin").prop("checked", !0) : jQuery("#quotation_set_margin").prop("checked", !1), jQuery("#quotation_additional_comment").val(t.additional_comment)
                }, jQuery("form.edit_cart").length) return jQuery.get("/cart.js", function (e) {
                if (e.items[0]) return x(e), C(e), E(!0), S(!0), jQuery(".line_item_total, .subtotal_price").removeAttr("data-currency").removeAttr("data-currency-" + shopCurrency).removeAttr("data-currency-" + Currency.currentCurrency), w(), _(e)
            }, "json")
        })
    }.call(this),
    function () {
        $(document).on("turbolinks:load", function () {
            var e, t, n, i, r, a, o, s, l, u, c, d, h, p, f, m, g, v, y, b;
            return o = function (e) {
                    var t;
                    return function () {
                        var n, i, r;
                        for (r = [], n = 0, i = products.length; n < i; n++)(t = products[n]).handle === e && r.push(t);
                        return r
                    }()[0]
                }, y = function (e, t) {
                    var n;
                    return function () {
                        var i, r, a, o;
                        for (o = [], i = 0, r = (a = e.variants).length; i < r; i++)(n = a[i]).sku === t && o.push(n);
                        return o
                    }()[0]
                }, b = function (e, t) {
                    return (e + "_" + t + "H").toUpperCase()
                }, l = function () {
                    return $("input:radio.turnaround:checked").val()
                }, t = function (e, t) {
                    var n, i, r, a;
                    return r = b(e, t), i = o(e), a = y(i, r), (n = []).product_id = i.id, n.variant_id = a.id, n.title = i.title, n.handle = i.handle, n.sku = a.sku, n.price = a.price, n.images = i.images, n
                }, n = function (e) {
                    switch (e) {
                        case 0:
                            return 1;
                        case 1:
                            return 3;
                        case 2:
                            return 5
                    }
                }, i = function () {
                    return $(".card-complexity").each(function () {
                        var e, t;
                        return e = $(this).find("input.product").val(), t = o(e).images, $(this).find("div.thumbnail").each(function (e, i) {
                            var r, a, o;
                            return r = n(e), a = "<img src='" + t[r].src + "'>", o = "<div class='view-more-background'></div><div class='view-more-text small'>VIEW MORE</div>", $(i).hasClass("view-more") ? $(i).html(a + o) : $(i).html(a)
                        })
                    })
                }, s = function () {
                    return parseInt($("#quotation_quantity").val())
                }, d = function () {
                    var e, n, i, r;
                    return n = "", i = 0, r = 0, e = new Array, $("input.product:checked").each(function (a, o) {
                        var u, c, d, h, p;
                        return u = l(), h = t(o.value, u), p = s(), c = h.price * p, p > 1 ? (d = '<br>\n<small class="text-muted" data-amount="' + h.price + '">$' + h.price + " " + shopCurrency + '</small>\n<small class="text-muted"> each</small>', r += parseFloat(h.price)) : d = "", n += '<tr>\n  <td class="text-left">\n    ' + h.title + " x " + p + '\n  </td>\n  <td class="text-right" data-amount="' + c.toFixed(2) + '">\n    $' + c.toFixed(2) + " " + shopCurrency + " " + d + "\n  </td>\n</tr>", i += c, e.push({
                            product_id: h.product_id,
                            variant_id: h.variant_id,
                            title: h.title,
                            handle: h.handle,
                            sku: h.sku,
                            price: h.price,
                            quantity: p.toString()
                        })
                    }), $(".line_item_table").html(n), $(".subtotal").html("$" + i.toFixed(2) + " " + shopCurrency), $(".estimated-total-value").html("$" + i.toFixed(2) + " " + shopCurrency), $(".estimated-total-value").removeAttr("data-currency").removeAttr("data-currency-" + shopCurrency).removeAttr("data-currency-" + Currency.currentCurrency), r > 0 ? ($(".per_image_price").text(r.toFixed(2)), $(".per_image_price_block").removeAttr("hidden")) : $(".per_image_price_block").attr("hidden", !0), $("#quotation_line_items").val(JSON.stringify(e)), $("#quotation_total_price").val(i), c()
                }, f = function () {
                    return $("input.turnaround").each(function (e, n) {
                        var i, r;
                        return i = n.value, r = 0, $("input.product:checked").each(function (e, n) {
                            var a, o;
                            return o = s(), a = t(n.value, i).price * o, r += a
                        }), $(n).next().find(".turnaround_hour_price").text("$" + r.toFixed(2) + " " + shopCurrency)
                    })
                }, c = function () {
                    return Currency.convertAll(shopCurrency, Currency.currentCurrency)
                }, (r = function () {
                    return $(".card-complexity").each(function () {
                        var e, n, i;
                        return i = $(this).find("input.product").val(), e = l(), n = t(i, e), $(this).find(".complexity-amount").text("$" + n.price + " " + shopCurrency)
                    })
                })(), i(), h = function (e, t) {
                    if (t > e) return $(".nav-steps .nav-link").eq(e).addClass("done")
                }, u = function (e, t) {
                    switch (t) {
                        case 0:
                            return $(".btn-back").addClass("d-none"), $(".btn-next").text("ADD INFO").attr("type", "button");
                        case 1:
                            return $(".btn-back").removeClass("d-none"), $(".btn-next").text("UPLOAD IMAGES").attr("type", "button");
                        case 2:
                            return $(".btn-back").removeClass("d-none"), $(".btn-next").text("ADD CONTACT INFO").attr("type", "button");
                        case 3:
                            return $(".btn-back").removeClass("d-none"), $(".btn-next").text("SUBMIT QUOTE").attr("type", "submit")
                    }
                }, p = function () {
                    return window.scrollTo(0, 0)
                }, e = function () {
                    return $("input").removeClass("is-invalid")
                }, $(".new_quotation").length > 0 && ($(".nav-steps .nav-link").click(function () {
                    var e, t;
                    return t = $(".nav-steps .nav-link.active").index(), (e = $(this).index()) !== t && (!(e > t + 1) && (!!a(e, t) && $(".tab-content").trigger("changed", [t, e])))
                }), $(".tab-content").on("changed", function (e, t, n) {
                    return h(t, n), u(t, n), p()
                }), $(".btn-next").click(function () {
                    if ("submit" !== $(this).attr("type")) return $(".nav-steps .nav-link.active").next().click(), event.preventDefault()
                }), $(".btn-back").click(function () {
                    return $(".nav-steps .nav-link.active").prev().click()
                }), $(".sub-items").click(function () {
                    var e, t;
                    if ("radio" === (t = (e = $(this)).find("input")).attr("type") && e.closest(".accordion").find("input.product").prop("checked", !1), t.prop("checked", e.hasClass("collapsed")), !$(t).is(":checked")) return e.next(".sub-items-body").find("input").prop("checked", !1)
                }), $("input.product").change(function () {
                    return $(this).closest(".card-complexity-wrapper").find(".card-complexity").removeClass("active"), $(this).is(":checked") && $(this).closest(".card-complexity").addClass("active"), e()
                }), $("#quotation_resize_image").change(function () {
                    return $(this).is(":checked") ? $(".resize-image-information-wrapper").removeClass("d-none") : ($(".resize-image-information-wrapper").addClass("d-none"), $(".resize-image-information-wrapper").find("input").val(""))
                }), $("#quotation_image_width, #quotation_image_height").change(function () {
                    return e()
                }), $(".product, .turnaround, #quotation_quantity").change(function () {
                    return d()
                }), $(".spin-button-minus, .spin-button-plus").click(function () {
                    return d()
                }), $(".turnaround").change(function () {
                    return r()
                }), $(".product, #quotation_quantity").change(function () {
                    return f()
                }), $(".line-item-details").click(function () {
                    return $("#lineItemDetailsModal").modal()
                }), $(".thumbnail.view-more").click(function () {
                    var e, t, n;
                    return t = $(this).attr("data-modal-title"), n = $(this).closest(".card-complexity").find("input.product").val(), (e = $("#complexityModal")).find(".modal-title").text(t), e.attr("data-product-handle", n), e.modal()
                }), $("#complexityModal").on("shown.bs.modal", function () {
                    var e, t, n, i, r, a, s, l;
                    for (a = $(this).attr("data-product-handle"), (s = o(a).images).shift(), l = Math.floor(s.length / 2), n = 0, i = 0, t = "",
                        r = ""; n < l;) t += '<div class="carousel-item text-center ' + (e = 0 === n ? "active" : "") + '">\n  <figure class="figure mx-3">\n    <img src="' + s[i + 1].src + '" class="figure-img img-fluid rounded shadow" alt="Original image" width="366" height="366">\n    <figcaption class="figure-caption small mt-3">BEFORE</figcaption>\n  </figure>\n  <figure class="figure mx-3">\n    <img src="' + s[i].src + '" class="figure-img img-fluid rounded shadow" alt="Edited image" width="366" height="366">\n    <figcaption class="figure-caption small mt-3">AFTER</figcaption>\n  </figure>\n</div>', r += '<li data-target="#carouselComplexityIndicators" data-slide-to="' + n + '" class="' + e + '"></li>', i += 2, n++;
                    return $(this).find(".carousel-inner").html(t), $(this).find(".carousel-indicators").html(r)
                }), $("#complexityModal").on("hidden.bs.modal", function () {
                    return $(this).find(".carousel-inner").html("")
                }), $("#new_quotation_form").on("ajax:error", function (e, t) {
                    var n;
                    return n = t.responseJSON.join("\n"), alert("Oops, something is not right.\n\n" + n)
                })), a = function (e, t) {
                    return e < t || (0 === t ? g() : 1 === t ? m() : 2 === t ? v() : void 0)
                }, g = function () {
                    var e;
                    return e = !0, 0 === $("input.product:checked").length && ($("#serviceAccordion .card-header").first().click(), $(".product").first().focus().addClass("is-invalid"), e = !1), e
                }, m = function () {
                    var e, t, n;
                    return t = !0, $("#quotation_resize_image").is(":checked") && (n = $("#quotation_image_width"), e = $("#quotation_image_height"), "" === n.val() && "" === e.val() && (n.addClass("is-invalid").focus(), t = !1)), t
                }, v = function () {
                    var e;
                    return e = !0, 0 === parseInt($("#quotation_uploaded_files_count").val()) && (alert("Please upload sample image."), e = !1), e
                },
                function (e) {
                    return e.charAt(0).toUpperCase() + e.substring(1)
                }
        })
    }.call(this),
    function () {
        $(document).on("turbolinks:load", function () {
            var e, t, n, i, r, a;
            return $(".new_free_trial").length > 0 && ($(".nav-steps .nav-link").click(function () {
                var e, n;
                return n = $(".nav-link.active").index(), (e = $(this).index()) !== n && (!(e > n + 1) && (!!t(e, n) && $(".tab-content").trigger("changed", [n, e])))
            }), $(".tab-content").on("changed", function (e, t, n) {
                if (n > t) return $(".nav-steps .nav-link").eq(t).addClass("done")
            }), $(".btn-next").click(function () {
                return $(".nav-steps .nav-link.active").next().click()
            }), $(".btn-back").click(function () {
                return $(".nav-steps .nav-link.active").prev().click()
            }), $(".main-service-option, .sub-item").click(function () {
                var e, t;
                return (t = (e = $(this)).find("input")).prop("checked", !t.prop("checked")), $("#choose-services .variant_ids").removeClass("is-invalid"), $(t).is(":checked") ? (e.addClass("active"), e.next("div.sub-items").removeClass("d-none")) : (e.removeClass("active"), e.next("div.sub-items").addClass("d-none"), e.next("div.sub-items").find("input").prop("checked", !1))
            }), $("#new_free_trial_form").submit(function () {
                return a()
            })), t = function (e, t) {
                return e < t || (0 === t ? i() : 1 === t ? r() : void 0)
            }, i = function () {
                var e;
                return e = !1, $.ajax(eligibility_check_new_free_trial, {
                    type: "POST",
                    data: {
                        free_trial: {
                            first_name: $("#free_trial_first_name").val(),
                            last_name: $("#free_trial_last_name").val(),
                            email: $("#free_trial_email").val()
                        }
                    },
                    async: !1,
                    success: function (t) {
                        return $("input#entity_id").val(t.entity_id), $("input#chmac").val(t.chmac), $(".uppy-Dashboard").length > 0 && $("#uppy").empty(), initUppy(), n(null), $("#free_trial_first_name, #free_trial_last_name, #free_trial_email").removeClass("is-invalid"), e = !0
                    },
                    error: function (e) {
                        var t;
                        if (400 === e.status) return t = JSON.parse(e.responseText), n(t)
                    }
                }), e
            }, r = function () {
                var e, t, n, i;
                return e = !0, 0 === $("input.variant_ids:checked").length && ($(".variant_ids").first().focus().addClass("is-invalid"), e = !1), (n = $(".main-option-shadow")).is(":checked") && 0 === (i = n.closest(".main-service-option").next("div.sub-items")).find("input.variant_ids:checked").length && (i.find("input.variant_ids").first().focus().addClass("is-invalid"), e = !1), (t = $(".main-option-photo-retouching")).is(":checked") && 0 === (i = t.closest(".main-service-option").next("div.sub-items")).find("input.variant_ids:checked").length && (i.find("input.variant_ids").first().focus().addClass("is-invalid"), e = !1), e
            }, a = function () {
                var e;
                return e = !0, 0 === parseInt($("#uploaded_files_count").val()) && (alert("Please upload at least one image."), e = !1), e
            }, n = function (t) {
                var n, i, r, a;
                if ($("#contact-info input").removeClass("is-invalid"), $("#contact-info .invalid-feedback").text(""), t) {
                    for (n in r = [], t) a = t[n], $("#free_trial_" + n).addClass("is-invalid"), a.length ? (i = e(a.join(", ")), r.push($("#free_trial_" + n).next(".invalid-feedback").text(i))) : r.push(void 0);
                    return r
                }
            }, e = function (e) {
                return e.charAt(0).toUpperCase() + e.substring(1)
            }
        })
    }.call(this),
    function () {
        jQuery(document).on("turbolinks:load", function () {
            var e, t, n, i, r;
            return jQuery(".section_cart_page").length && (jQuery(".check_out_button").length && (jQuery(".payment_option").is(":checked") || jQuery(".check_out_button").attr("disabled", !0)), t = function () {
                    return jQuery(".check_out_button").attr("hidden", !0), jQuery("#check_out_dynamic_message").html("Please log in to submit order.<br><a href='/account/login?redirect_url=/a/portal/cart' class='btn btn-primary mt-3'>Log in</a>")
                }, (r = function () {
                    var e, n, i, r;
                    return "monthly_billing" === (n = jQuery("input[name='payment_option']:checked").val()) || "pay_later" === n ? customer ? (jQuery(".check_out_button").val("SUBMIT").attr("data-disable-with", "SUBMIT").removeAttr("hidden"), jQuery("#check_out_dynamic_message").text("")) : t() : "pay_with_credit" === n ? (r = parseFloat(jQuery("#wallet_balance").text().replace(",", ""))) < (i = parseFloat(jQuery("#total").val().replace(",", ""))) ? (e = (i - r).toFixed(2), customer ? (jQuery(".check_out_button").val("CHECK OUT").attr("data-disable-with", "CHECK OUT").removeAttr("hidden"), jQuery("#check_out_dynamic_message").html("We will deduct " + r.toFixed(2) + " Path credits from your account. We'll need the remaining balance of <span class='money'>" + (shopCurrencySymbol + e) + " " + shopCurrency + "</span> paid by credit card or PayPal, or you can purchase and redeem more Path credits.")) : t()) : (e = (r - i).toFixed(2), customer ? (jQuery(".check_out_button").val("SUBMIT").attr("data-disable-with", "SUBMIT").removeAttr("hidden"), jQuery("#check_out_dynamic_message").text(i.toFixed(2) + " Path credits will be deducted from your account to pay for this order. Your new Path credit balance will be " + e + ".")) : t()) : "pay_now" === n ? (jQuery(".check_out_button").val("CHECK OUT").attr("data-disable-with", "CHECK OUT").removeAttr("hidden"), jQuery("#check_out_dynamic_message").text("VAT and discounts calculated at checkout.")) : void 0
                })(), e = function (e) {
                    return e === shopCurrency ? jQuery(".currency_picker_info").addClass("d-none") : jQuery(".currency_picker_info").removeClass("d-none")
                }, jQuery(".currency-picker").on("change", function () {
                    return e(jQuery(this).val())
                }), i = function () {
                    return Currency.convertAll(shopCurrency, Currency.currentCurrency)
                }, jQuery(".cart_service_form").length && jQuery.ajax(jQuery("#customer_billing_info_url").val() + secure_url_params(), {
                    type: "POST",
                    dataType: "json",
                    data: {
                        quotation_id: jQuery("#quotation_id").val(),
                        template_id: jQuery("#template_id").val()
                    },
                    success: function (e) {
                        if (!0 === e.monthly_billing && jQuery("#monthly_billing_option").removeAttr("hidden"), e.wallet_balance > 0 && (jQuery("#wallet_balance").text(e.wallet_balance.toFixed(2)), jQuery("#pay_with_credit_radio").removeAttr("disabled")), !0 === e.pay_later) return jQuery("#pay_later_option").removeAttr("hidden")
                    }
                }), jQuery(".payment_option").on("change", function () {
                    return jQuery(".check_out_button").removeAttr("disabled"), r(), i(), e(Currency.currentCurrency)
                }), function () {
                    var e;
                    return e = 0, jQuery(".price").each(function () {
                        var t;
                        return t = jQuery(this).val(), e += parseFloat(t)
                    }), e
                }, jQuery(".cart_delete_button").tooltip(), jQuery(".cart_delete_button").on("click", function () {
                    if (confirm("Please confirm you want to delete all items from the cart.")) return clearCart(), Turbolinks.visit()
                }), jQuery(".delete_item").on("click", function (e) {
                    if (e.preventDefault(), confirm("Please confirm you want to delete the item from the cart.")) return jQuery.ajax(jQuery(this).attr("href"), {
                        type: "GET",
                        error: function () {
                            return alert("An unexpected error occured.")
                        },
                        success: function () {
                            return Turbolinks.visit()
                        }
                    })
                }), jQuery(".cart_credit_form").on("submit", function (e) {
                    if (jQuery(".line_item").length > 1) return alert("You can only checkout one item at a time."), e.preventDefault()
                }), jQuery(".cart_service_form").on("submit", function (e) {
                    var t, n;
                    if ("monthly_billing" === (n = jQuery("input[name='payment_option']:checked").val()) || "pay_later" === n || "pay_with_credit" === n) return t = jQuery(this).serialize(), jQuery.ajax(jQuery("#create_order_url").val() + secure_url_params(), {
                        type: "POST",
                        dataType: "json",
                        data: t,
                        success: function (e) {
                            return clearCart(), window.location.assign(e.redirect_url)
                        },
                        error: function (e) {
                            return 401 === e.status ? window.location.assign(e.responseJSON.redirect_url) : 422 === e.status ? alert(e.responseJSON.join("\n")) : alert("Status: " + e.status + "\n\nInternal server error")
                        }
                    }), e.preventDefault()
                }), function (e) {
                    return e.slice(0, -2)(NaN + e.slice(-2))
                }, function (e) {
                    var t, n, i, r;
                    for (i = null, r = [], n = location.search.substr(1).split("&"), t = 0; t < n.length;)(r = n[t].split("="))[0] === e && (i = decodeURIComponent(r[1])), t++;
                    return i
                }, jQuery(".learn_more_about_edit_credit").on("click", function (e) {
                    return e.preventDefault(), jQuery("#edit_credits_modal .loading").removeClass("d-none"), jQuery("#edit_credits_modal .edit_credits_content").addClass("d-none")
                }), jQuery(".learn_more_about_edit_credit").on("ajax:success", function (e, t) {
                    return jQuery("#edit_credits_modal .loading").addClass("d-none"), jQuery("#edit_credits_modal .edit_credits_content").removeClass("d-none"), jQuery("#edit_credits_modal .edit_credits_content").html(t.body), Currency.convertAll(shopCurrency, Currency.currentCurrency)
                })), jQuery("#edit-cart").length && ((n = jQuery("#edit-cart").prop("href").replace(/quotations\/template/, "cart/edit")).indexOf("hmac") > -1 ? jQuery("#edit-cart").prop("href", n + "&update=true") : jQuery("#edit-cart").prop("href", n + "?update=true")), localStorage.getItem("checkPayWithCredit") && jQuery("#pay_with_credit_radio").length && (jQuery("#pay_with_credit_radio").click(), localStorage.removeItem("checkPayWithCredit")),
                function () {
                    var e;
                    if (null != (e = JSON.parse(localStorage.getItem("cart")))) return clearCart(), jQuery.ajax("/cart/update.js", {
                        type: "POST",
                        data: {
                            attributes: e.attributes
                        },
                        dataType: "json",
                        async: !1,
                        success: function () {
                            return console.log("attributes added successfully")
                        }
                    }), jQuery.each(e.items, function (e, t) {
                        var n;
                        return n = {
                            id: t.id,
                            quantity: t.quantity
                        }, jQuery.ajax("/cart/add.js", {
                            type: "POST",
                            data: n,
                            dataType: "json",
                            async: !1,
                            success: function () {
                                return console.log("item successfully added.")
                            }
                        })
                    }), localStorage.removeItem("cart"), localStorage.setItem("checkPayWithCredit", !0), location.reload()
                }()
        })
    }.call(this),
    function () {
        jQuery(document).on("turbolinks:load", function () {
            return jQuery("#uninvoiced_orders").on("click", function () {
                return jQuery(this).is(":checked") ? jQuery(".uninvoiced_order_id").prop("checked", !0) : jQuery(".uninvoiced_order_id").prop("checked", !1)
            }), jQuery("#create_invoice_button").on("click", function () {
                var e, t;
                return t = [], jQuery(".uninvoiced_order_id:checked").each(function () {
                    return t.push(jQuery(this).val())
                }), 0 === t.length ? alert("Please select at least one order.") : (e = jQuery("#create_invoice_path").val(), jQuery.ajax(e, {
                    type: "POST",
                    dataType: "json",
                    data: {
                        order_ids: t
                    },
                    success: function (e) {
                        return "success" === e.status ? Turbolinks.visit(e.redirec_url) : console.log(e.message)
                    }
                }))
            }), jQuery(document).on("turbolinks:load", function () {
                if (/[?&]invoice_created=/.test(location.search)) return jQuery("html, body").animate({
                    scrollTop: jQuery("#orders_to_be_invoiced").offset().top - 90
                }, "2000")
            }), jQuery(document).on("submit", ".credit_buy_form", function () {
                var e;
                return e = jQuery(this), jQuery.ajax("/cart.js", {
                    type: "GET",
                    dataType: "json",
                    success: function (t) {
                        var n, i;
                        return 0 !== t.item_count && (localStorage.setItem("cart", JSON.stringify(t)), clearCart()), i = e.find("#variant_id").val(), n = 1, window.location.href = "/cart/" + i + ":" + n
                    }
                }), !1
            })
        })
    }.call(this),
    function () {
        jQuery(document).on("turbolinks:load", function () {
            return jQuery("#upload_status_form").on("ajax:success", function (e, t) {
                return jQuery("#upload_status_form").hasClass("skip_upload_step_clicked") && ("success" === t.status ? alert("Thank you! We'll get on with your order soon.") : alert(t.message)), jQuery(".upload_alert").find(".alert_message").text(t.message), "success" === t.status ? jQuery(".upload_alert").find(".alert").removeClass("d-none").addClass("alert-success").show() : jQuery(".upload_alert").find(".alert").removeClass("d-none").addClass("alert-danger").show()
            })
        })
    }.call(this),
    function () {
        jQuery(document).on("turbolinks:load", function () {
            var e;
            return jQuery("input[name='upload_options']").on("change", function () {
                var e;
                return e = jQuery("input[name='upload_options']:checked").val(), jQuery(".upload_option").addClass("d-none"), jQuery("#" + e + "_container").removeClass("d-none"), localStorage.setItem("upload_option", e)
            }), e = localStorage.getItem("upload_option"), jQuery("#upload_option_" + e).click()
        })
    }.call(this),
    function () {
        jQuery(document).on("turbolinks:load", function () {
            var e;
            return jQuery("input[name='download_options']").on("change", function () {
                var e;
                return e = jQuery("input[name='download_options']:checked").val(), jQuery(".download_option").addClass("d-none"), jQuery("#" + e + "_container").removeClass("d-none"), localStorage.setItem("download_option", e)
            }), e = localStorage.getItem("download_option"), jQuery("#download_option_" + e).click()
        })
    }.call(this),
    function () {
        $(document).on("turbolinks:load", function () {
            var e, t, n, i, r, a, o, s, l, u, c, d, h, p, f, m, g, v;
            if ((u = $("#files_container")).length) return l = function () {
                return {
                    type: type,
                    entity_id: entity_id,
                    order_id: order_name,
                    subpath: subpath,
                    chmac: chmac_for_files,
                    host: check_session_url
                }
            }, s = function () {
                return $.ajax({
                    url: file_user_url,
                    type: "GET",
                    async: !1,
                    data: l()
                }).responseJSON.files
            }, h = function (e) {
                return file_user_url + "/thumbnail/?type=" + type + "&entity_id=" + entity_id_url_encoded + "&order_id=" + order_name_url_encoded + "&subpath=" + subpath + "&chmac=" + chmac_url_encoded + "&filename=" + encodeURIComponent(e) + "&host=" + check_session_url
            }, d = function (e) {
                return '<img src="' + h(e) + '" class="card-img-top" alt="' + e + '" width="396">'
            }, r = function (e) {
                return file_user_url + "/image_download/?type=" + type + "&entity_id=" + entity_id_url_encoded + "&order_id=" + order_name_url_encoded + "&subpath=" + subpath + "&chmac=" + chmac_url_encoded + "&filename=" + encodeURIComponent(e) + "&host=" + check_session_url
            }, i = function (e) {
                return '<a href="' + r(e) + '" class="download-btn" title="Download"><i class="icon-download"></i></a>'
            }, a = function (e, t) {
                return '<div class="custom-control custom-checkbox image-checkbox">\n  <input type="checkbox" class="custom-control-input" id="image_checkbox_' + e + '" name="image_name" value="' + t + '">\n  <label class="custom-control-label" for="image_checkbox_' + e + '">\n    <span class="sr-only"></span>\n  </label>\n</div>'
            }, v = function (e) {
                return '<a class="zoom-button" href="#" data-filename="' + e + '" title="View large image"><i class="icon-resize-full-screen"></i></a>'
            }, m = function (e, t) {
                return t === e ? $("#all-image-checkbox").prop("checked", !0) : 0 === t ? $("#all-image-checkbox").prop("indeterminate", !1).prop("checked", !1) : $("#all-image-checkbox").prop("indeterminate", !0)
            }, p = function () {
                var e, t;
                return t = $("input[name=image_name]").length, e = $("input[name=image_name]:checked").length, $(".files_count").html(e + " of " + t + " selected."), m(t, e)
            }, f = function () {
                return $("input[name=image_name]:checked").length ? $(".files-delete").removeClass("disabled") : $(".files-delete").addClass("disabled")
            }, e = function () {
                return $(".card-selectable").removeClass("active"), $.each($("input[name=image_name]:checked"), function (e, t) {
                    return $(t).closest(".card").addClass("active")
                }), p(), f()
            }, $(document).on("click", ".card-selectable", function () {
                var t, n;
                return n = !(t = $(this).find("input[name=image_name]")).prop("checked"), t.prop("checked", n).change(), e()
            }), $("#all-image-checkbox").change(function () {
                var t;
                return t = $(this).prop("checked"), $("input[name=image_name]").prop("checked", t).change(), e()
            }), n = function (e) {
                return $.ajax({
                    url: file_user_url,
                    type: "DELETE",
                    data: Object.assign(l(), {
                        filenames: e
                    }),
                    async: !1
                })
            }, $(".files-delete").click(function (t) {
                var i, r;
                return i = $("input[name=image_name]:checked").length, confirm("Sure you want to delete " + i + " file(s)?") && (r = $("input[name=image_name]:checked").map(function () {
                    return $(this).val()
                }), n(r.get()), o(), e()), t.preventDefault()
            }), t = function () {
                return $(".dropdown-view > .dropdown-item.active").attr("id")
            }, c = function (e) {
                return "small-thumbnail" === e ? $(".col-item").removeClass("col-md-6").addClass("col-md-3") : $(".col-item").removeClass("col-md-3").addClass("col-md-6")
            }, g = function () {
                return "small-thumbnail" === t() ? "col-md-3" : "col-md-6"
            }, $(".dropdown-view > .dropdown-item").click(function (e) {
                return !$(this).hasClass("active") && ($(".dropdown-view > .dropdown-item").removeClass("active"), $(this).addClass("active"), c($(this).attr("id")), e.preventDefault())
            }), o = function () {
                var e, n;
                return n = '<div class="row card-deck ">', $(u).find(".files_wrapper").hide(), (e = s()).length ? $.each(e, function (e, t) {
                    return n += '<div class="col-item ' + g() + '">\n  <div class="card mx-0 mb-3 card-selectable">\n    ' + d(t) + "\n    " + a(e, t) + "\n    " + v(t) + '\n    <div class="card-body">\n      <div class="card-text">\n        <p class="text-center mb-0 file-name text-muted" title="' + t + '">' + t + '</p>\n        <div class="text-center">\n          ' + i(t) + "\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"
                }) : n += '<div class="col">\n  <div class="alert alert-warning p-3 text-center font-weight-bold">No images found.</div>\n</div>', n += "</div>", $(u).find(".files_wrapper").fadeIn("fast").html(n), c(t()), $(u).find(".upload_count").text(e.length)
            }, $(".files-refresh").click(function (e) {
                return o(), e.preventDefault()
            }), o()
        })
    }.call(this),
    function () {
        $(document).on("turbolinks:load", function () {
            var e, t, n, i, r, a, o, s, l, u, c, d, h;
            if ((a = $("#imagePreviewModal")).length) return $(document).on("click", ".zoom-button", function () {
                var e;
                return e = $(this).attr("data-filename"), i($(this).closest(".card"), e), a.modal(), !1
            }), d = function () {
                var e, t;
                if (t = c()) return e = u().find(".card"), i(e, t)
            }, l = function () {
                var e, t;
                if (t = s()) return e = o().find(".card"), i(e, t)
            }, $(document).keydown(function (e) {
                var t;
                if (a.hasClass("show")) {
                    if (37 === (t = e.keyCode)) return d();
                    if (39 === t) return l()
                }
            }), $(document).on("click", ".carousel-control-prev", function () {
                return d()
            }), $(document).on("click", ".carousel-control-next", function () {
                return l()
            }), t = function () {
                return $(".col-item > .card").removeClass("modal-shown")
            }, e = function (e) {
                return e.addClass("modal-shown")
            }, s = function () {
                var e;
                if ((e = o()).length) return e.find(".zoom-button").attr("data-filename")
            }, c = function () {
                var e;
                if ((e = u()).length) return e.find(".zoom-button").attr("data-filename")
            }, n = function () {
                return $(".modal-shown").closest(".col-item")
            }, o = function () {
                return n().next()
            }, u = function () {
                return n().prev()
            }, i = function (n, i) {
                return t(), e(n), a.find(".modal-footer").text(i), a.find(".modal-body").html(r(i))
            }, r = function (e) {
                return '<img src="' + h(e) + '" alt="' + e + '" class="w-100">'
            }, h = function (e) {
                return file_user_url + "/thumbnail/?chmac=" + chmac_url_encoded + "&entity_id=" + entity_id_url_encoded + "&filename=" + encodeURIComponent(e) + ".large&host=" + check_session_url + "&type=" + type + "&order_id=" + order_name_url_encoded + "&subpath=" + subpath
            }
        })
    }.call(this),
    function () {
        $(document).on("turbolinks:load", function () {
            var e, t, n, i, r, a, o, s, l, u, c, d, h, p, f, m, g, v;
            if (r = "Custom background", (g = function () {
                    return $("form.quote_preview_form").length || $(".quote_edit_page").length ? "quotation" : $("form.create_template_form").length ? "template" : void 0
                })()) return o = function () {
                return $("#file_format_id").val()
            }, t = function () {
                return $("#background_option_id").val()
            }, l = function () {
                return $("#layer_option").val()
            }, a = function () {
                return $("#" + g() + "_file_format_id")
            }, e = function () {
                return $("#" + g() + "_background_option_id")
            }, f = function () {
                return JSON.parse($("#" + g() + "_line_items").val()).map(function (e) {
                    return e.title
                })
            }, s = function (e) {
                var t;
                return t = "<option value=''>Select</option>", $.each(e, function (e, n) {
                    return t += "<option value='" + n.id + "'>" + n.name + "</option>"
                }), t
            }, h = function () {
                return waitForEl("#" + g() + "_line_items", function () {
                    return $.ajax(file_formats_path, {
                        data: {
                            product_titles: f()
                        },
                        success: function (e) {
                            var t;
                            return t = s(e), a().html(t).val(o()).change()
                        }
                    })
                })
            }, n = function (e) {
                var t;
                return t = "<option value=''>Select</option>", $.each(e, function (e, n) {
                    return t += "<option value='" + n.id + "'>" + n.name + "</option>"
                }), t
            }, c = function (i) {
                return i ? (e().html("<option>Loading..</option>"), $.ajax(background_options_path, {
                    data: {
                        file_format_id: i,
                        product_titles: f()
                    },
                    success: function (i) {
                        var r;
                        return r = n(i), e().html(r).val(t()).change()
                    }
                })) : e().html("").change()
            }, u = function (e) {
                var t;
                return t = "", $.each(e, function (n, i) {
                    var r;
                    return r = i === l() || 1 === e.length ? "checked" : "", t += '<div class="custom-control custom-radio">\n  <input type="radio" id="layer_option_' + n + '" name="' + g() + '[layer_option]" value="' + i + '" class="custom-control-input" ' + r + ' required>\n  <label class="custom-control-label" for="layer_option_' + n + '">' + i.humanize() + "</label>\n</div>"
                }), t
            }, p = function (e, t) {
                var n, i;
                return n = $("#layer_option_inputs"), i = $(".layer_options_container"), e && t ? $.ajax(shopify_proxy_path + "/layer_options/" + e + "/" + t, {
                    success: function (e) {
                        var t;
                        return t = u(e), n.html(t), i.removeClass("d-none")
                    }
                }) : (n.html(""), i.addClass("d-none"))
            }, d = function () {
                return $(".custom_background_container").removeClass("d-none"), $("#custom_background_color").prop("required", !0)
            }, m = function () {
                return $(".custom_background_container").addClass("d-none"), $("#custom_background_color").removeAttr("required"), $("input.custom_background_option").val("")
            }, i = function () {
                var e, t;
                return $(".custom_background").prop("checked", !1).change(), e = $("#" + g() + "_custom_background_color").val(), t = $("#" + g() + "_custom_background_image").val(), e ? $("#custom_background_color").click() : t ? $("#custom_background_image").click() : void 0
            }, v = function () {
                return $("#" + g() + "_file_format_id, #" + g() + "_background_option_id").removeAttr("required")
            }, $(document).on("change", "#" + g() + "_file_format_id", function () {
                return c($(this).val())
            }), $(document).on("change", "#" + g() + "_background_option_id", function () {
                var e;
                return e = $("#" + g() + "_background_option_id option:selected").text(), p(a().val(), $(this).val()), e === r ? d() : m(), i()
            }), $(document).on("change", ".custom_background", function () {
                var e, t, n;
                if ($(".background_color_container, .background_image_container").addClass("d-none"), $("input#" + g() + "_custom_background_color, input#" + g() + "_custom_background_image").removeAttr("required"), t = (e = $('input[name="custom_background"]:checked')).attr("id"), n = e.val(), e.length) return $(".background_" + n + "_container").removeClass("d-none"), $("input#" + g() + "_custom_background_" + n).prop("required", !0), $("input.custom_background_option:not(#" + g() + "_" + t + ")").val("").change()
            }), $(document).on("change", "input.color-picker", function () {
                var e;
                return e = $(this).val(), $("#" + g() + "_custom_background_color").val(e)
            }), $(document).on("change", "#" + g() + "_custom_background_color", function () {
                var e;
                return e = $(this).val(), $("input.color-picker").val(e)
            }), $("#file_formats_container").length && (h(), $(".quote_edit_page").length && v()), $("#create_template_modal").on("shown.bs.modal", function () {
                return h()
            }), $("#edit_template_modal").on("shown.bs.modal", function () {
                return h()
            })
        })
    }.call(this),
    function () {
        $(document).on("turbolinks:load", function () {
            if ($("#order_upload").length) return $("form#copy_quote_image_option_form").on("submit", function () {
                if ("upload" === $('input[name="copy_quote_image_option"]:checked').val()) return window.location.search += "&copy_quote_image_option=upload", !1
            }), $(document).on("ajaxSuccess", function (e, t, n) {
                if (n.url.endsWith("move_files_to_order")) return window.location.search += "&success=copied"
            })
        })
    }.call(this),
    function (e, t) {
        "function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? module.exports = t() : e.NProgress = t()
    }(this, function () {
        function e(e, t, n) {
            return e < t ? t : e > n ? n : e
        }

        function t(e) {
            return 100 * (-1 + e)
        }

        function n(e, n, i) {
            var r;
            return (r = "translate3d" === d.positionUsing ? {
                transform: "translate3d(" + t(e) + "%,0,0)"
            } : "translate" === d.positionUsing ? {
                transform: "translate(" + t(e) + "%,0)"
            } : {
                "margin-left": t(e) + "%"
            }).transition = "all " + n + "ms " + i, r
        }

        function i(e, t) {
            return ("string" == typeof e ? e : o(e)).indexOf(" " + t + " ") >= 0
        }

        function r(e, t) {
            var n = o(e),
                r = n + t;
            i(n, t) || (e.className = r.substring(1))
        }

        function a(e, t) {
            var n, r = o(e);
            i(e, t) && (n = r.replace(" " + t + " ", " "), e.className = n.substring(1, n.length - 1))
        }

        function o(e) {
            return (" " + (e.className || "") + " ").replace(/\s+/gi, " ")
        }

        function s(e) {
            e && e.parentNode && e.parentNode.removeChild(e)
        }
        var l, u, c = {
                version: "0.2.0"
            },
            d = c.settings = {
                minimum: .08,
                easing: "ease",
                positionUsing: "",
                speed: 200,
                trickle: !0,
                trickleRate: .02,
                trickleSpeed: 800,
                showSpinner: !0,
                barSelector: '[role="bar"]',
                spinnerSelector: '[role="spinner"]',
                parent: "body",
                template: '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
            };
        c.configure = function (e) {
            var t, n;
            for (t in e)(n = e[t]) !== undefined && e.hasOwnProperty(t) && (d[t] = n);
            return this
        }, c.status = null, c.set = function (t) {
            var i = c.isStarted();
            t = e(t, d.minimum, 1), c.status = 1 === t ? null : t;
            var r = c.render(!i),
                a = r.querySelector(d.barSelector),
                o = d.speed,
                s = d.easing;
            return r.offsetWidth, h(function (e) {
                "" === d.positionUsing && (d.positionUsing = c.getPositioningCSS()), p(a, n(t, o, s)), 1 === t ? (p(r, {
                    transition: "none",
                    opacity: 1
                }), r.offsetWidth, setTimeout(function () {
                    p(r, {
                        transition: "all " + o + "ms linear",
                        opacity: 0
                    }), setTimeout(function () {
                        c.remove(), e()
                    }, o)
                }, o)) : setTimeout(e, o)
            }), this
        }, c.isStarted = function () {
            return "number" == typeof c.status
        }, c.start = function () {
            c.status || c.set(0);
            var e = function () {
                setTimeout(function () {
                    c.status && (c.trickle(), e())
                }, d.trickleSpeed)
            };
            return d.trickle && e(), this
        }, c.done = function (e) {
            return e || c.status ? c.inc(.3 + .5 * Math.random()).set(1) : this
        }, c.inc = function (t) {
            var n = c.status;
            return n ? ("number" != typeof t && (t = (1 - n) * e(Math.random() * n, .1, .95)), n = e(n + t, 0, .994), c.set(n)) : c.start()
        }, c.trickle = function () {
            return c.inc(Math.random() * d.trickleRate)
        }, l = 0, u = 0, c.promise = function (e) {
            return e && "resolved" !== e.state() ? (0 === u && c.start(), l++, u++, e.always(function () {
                0 == --u ? (l = 0, c.done()) : c.set((l - u) / l)
            }), this) : this
        }, c.render = function (e) {
            if (c.isRendered()) return document.getElementById("nprogress");
            r(document.documentElement, "nprogress-busy");
            var n = document.createElement("div");
            n.id = "nprogress", n.innerHTML = d.template;
            var i, a = n.querySelector(d.barSelector),
                o = e ? "-100" : t(c.status || 0),
                l = document.querySelector(d.parent);
            return p(a, {
                transition: "all 0 linear",
                transform: "translate3d(" + o + "%,0,0)"
            }), d.showSpinner || (i = n.querySelector(d.spinnerSelector)) && s(i), l != document.body && r(l, "nprogress-custom-parent"), l.appendChild(n), n
        }, c.remove = function () {
            a(document.documentElement, "nprogress-busy"), a(document.querySelector(d.parent), "nprogress-custom-parent");
            var e = document.getElementById("nprogress");
            e && s(e)
        }, c.isRendered = function () {
            return !!document.getElementById("nprogress")
        }, c.getPositioningCSS = function () {
            var e = document.body.style,
                t = "WebkitTransform" in e ? "Webkit" : "MozTransform" in e ? "Moz" : "msTransform" in e ? "ms" : "OTransform" in e ? "O" : "";
            return t + "Perspective" in e ? "translate3d" : t + "Transform" in e ? "translate" : "margin"
        };
        var h = function () {
                function e() {
                    var n = t.shift();
                    n && n(e)
                }
                var t = [];
                return function (n) {
                    t.push(n), 1 == t.length && e()
                }
            }(),
            p = function () {
                function e(e) {
                    return e.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, function (e, t) {
                        return t.toUpperCase()
                    })
                }

                function t(e) {
                    var t = document.body.style;
                    if (e in t) return e;
                    for (var n, i = r.length, a = e.charAt(0).toUpperCase() + e.slice(1); i--;)
                        if ((n = r[i] + a) in t) return n;
                    return e
                }

                function n(n) {
                    return n = e(n), a[n] || (a[n] = t(n))
                }

                function i(e, t, i) {
                    t = n(t), e.style[t] = i
                }
                var r = ["Webkit", "O", "Moz", "ms"],
                    a = {};
                return function (e, t) {
                    var n, r, a = arguments;
                    if (2 == a.length)
                        for (n in t)(r = t[n]) !== undefined && t.hasOwnProperty(n) && i(e, n, r);
                    else i(e, a[1], a[2])
                }
            }();
        return c
    }), jQuery(function () {
        jQuery(document).on("page:fetch turbolinks:request-start", function () {
            NProgress.start()
        }), jQuery(document).on("page:receive turbolinks:request-end", function () {
            NProgress.set(.7)
        }), jQuery(document).on("page:change turbolinks:load", function () {
            NProgress.done()
        }), jQuery(document).on("page:restore turbolinks:request-end turbolinks:before-cache", function () {
            NProgress.remove()
        })
    }), jQuery(function () {
        jQuery(document).on("ajaxStart", function () {
            NProgress.start()
        }), jQuery(document).on("ajaxStop", function () {
            NProgress.done()
        })
    }),
    function (e) {
        "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery)
    }(function (e) {
        return e.ui = e.ui || {}, e.ui.version = "1.12.1"
    }),
    /*!
     * jQuery UI Keycode 1.12.1
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */
    function (e) {
        "function" == typeof define && define.amd ? define(["jquery", "./version"], e) : e(jQuery)
    }(function (e) {
        return e.ui.keyCode = {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }
    }),
    /*!
     * jQuery UI Datepicker 1.12.1
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */
    function (e) {
        "function" == typeof define && define.amd ? define(["jquery", "../version", "../keycode"], e) : e(jQuery)
    }(function (e) {
        function t(e) {
            for (var t, n; e.length && e[0] !== document;) {
                if (("absolute" === (t = e.css("position")) || "relative" === t || "fixed" === t) && (n = parseInt(e.css("zIndex"), 10), !isNaN(n) && 0 !== n)) return n;
                e = e.parent()
            }
            return 0
        }

        function n() {
            this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = {
                closeText: "Done",
                prevText: "Prev",
                nextText: "Next",
                currentText: "Today",
                monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
                weekHeader: "Wk",
                dateFormat: "mm/dd/yy",
                firstDay: 0,
                isRTL: !1,
                showMonthAfterYear: !1,
                yearSuffix: ""
            }, this._defaults = {
                showOn: "focus",
                showAnim: "fadeIn",
                showOptions: {},
                defaultDate: null,
                appendText: "",
                buttonText: "...",
                buttonImage: "",
                buttonImageOnly: !1,
                hideIfNoPrevNext: !1,
                navigationAsDateFormat: !1,
                gotoCurrent: !1,
                changeMonth: !1,
                changeYear: !1,
                yearRange: "c-10:c+10",
                showOtherMonths: !1,
                selectOtherMonths: !1,
                showWeek: !1,
                calculateWeek: this.iso8601Week,
                shortYearCutoff: "+10",
                minDate: null,
                maxDate: null,
                duration: "fast",
                beforeShowDay: null,
                beforeShow: null,
                onSelect: null,
                onChangeMonthYear: null,
                onClose: null,
                numberOfMonths: 1,
                showCurrentAtPos: 0,
                stepMonths: 1,
                stepBigMonths: 12,
                altField: "",
                altFormat: "",
                constrainInput: !0,
                showButtonPanel: !1,
                autoSize: !1,
                disabled: !1
            }, e.extend(this._defaults, this.regional[""]), this.regional.en = e.extend(!0, {}, this.regional[""]), this.regional["en-US"] = e.extend(!0, {}, this.regional.en), this.dpDiv = i(e("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
        }

        function i(t) {
            var n = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
            return t.on("mouseout", n, function () {
                e(this).removeClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && e(this).removeClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && e(this).removeClass("ui-datepicker-next-hover")
            }).on("mouseover", n, r)
        }

        function r() {
            e.datepicker._isDisabledDatepicker(o.inline ? o.dpDiv.parent()[0] : o.input[0]) || (e(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), e(this).addClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && e(this).addClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && e(this).addClass("ui-datepicker-next-hover"))
        }

        function a(t, n) {
            for (var i in e.extend(t, n), n) null == n[i] && (t[i] = n[i]);
            return t
        }
        var o;
        return e.extend(e.ui, {
            datepicker: {
                version: "1.12.1"
            }
        }), e.extend(n.prototype, {
            markerClassName: "hasDatepicker",
            maxRows: 4,
            _widgetDatepicker: function () {
                return this.dpDiv
            },
            setDefaults: function (e) {
                return a(this._defaults, e || {}), this
            },
            _attachDatepicker: function (t, n) {
                var i, r, a;
                r = "div" === (i = t.nodeName.toLowerCase()) || "span" === i, t.id || (this.uuid += 1, t.id = "dp" + this.uuid), (a = this._newInst(e(t), r)).settings = e.extend({}, n || {}), "input" === i ? this._connectDatepicker(t, a) : r && this._inlineDatepicker(t, a)
            },
            _newInst: function (t, n) {
                return {
                    id: t[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1"),
                    input: t,
                    selectedDay: 0,
                    selectedMonth: 0,
                    selectedYear: 0,
                    drawMonth: 0,
                    drawYear: 0,
                    inline: n,
                    dpDiv: n ? i(e("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv
                }
            },
            _connectDatepicker: function (t, n) {
                var i = e(t);
                n.append = e([]), n.trigger = e([]), i.hasClass(this.markerClassName) || (this._attachments(i, n), i.addClass(this.markerClassName).on("keydown", this._doKeyDown).on("keypress", this._doKeyPress).on("keyup", this._doKeyUp), this._autoSize(n), e.data(t, "datepicker", n), n.settings.disabled && this._disableDatepicker(t))
            },
            _attachments: function (t, n) {
                var i, r, a, o = this._get(n, "appendText"),
                    s = this._get(n, "isRTL");
                n.append && n.append.remove(), o && (n.append = e("<span class='" + this._appendClass + "'>" + o + "</span>"), t[s ? "before" : "after"](n.append)), t.off("focus", this._showDatepicker), n.trigger && n.trigger.remove(), "focus" !== (i = this._get(n, "showOn")) && "both" !== i || t.on("focus", this._showDatepicker), "button" !== i && "both" !== i || (r = this._get(n, "buttonText"), a = this._get(n, "buttonImage"), n.trigger = e(this._get(n, "buttonImageOnly") ? e("<img/>").addClass(this._triggerClass).attr({
                    src: a,
                    alt: r,
                    title: r
                }) : e("<button type='button'></button>").addClass(this._triggerClass).html(a ? e("<img/>").attr({
                    src: a,
                    alt: r,
                    title: r
                }) : r)), t[s ? "before" : "after"](n.trigger), n.trigger.on("click", function () {
                    return e.datepicker._datepickerShowing && e.datepicker._lastInput === t[0] ? e.datepicker._hideDatepicker() : e.datepicker._datepickerShowing && e.datepicker._lastInput !== t[0] ? (e.datepicker._hideDatepicker(), e.datepicker._showDatepicker(t[0])) : e.datepicker._showDatepicker(t[0]), !1
                }))
            },
            _autoSize: function (e) {
                if (this._get(e, "autoSize") && !e.inline) {
                    var t, n, i, r, a = new Date(2009, 11, 20),
                        o = this._get(e, "dateFormat");
                    o.match(/[DM]/) && (t = function (e) {
                        for (n = 0, i = 0, r = 0; r < e.length; r++) e[r].length > n && (n = e[r].length, i = r);
                        return i
                    }, a.setMonth(t(this._get(e, o.match(/MM/) ? "monthNames" : "monthNamesShort"))), a.setDate(t(this._get(e, o.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - a.getDay())), e.input.attr("size", this._formatDate(e, a).length)
                }
            },
            _inlineDatepicker: function (t, n) {
                var i = e(t);
                i.hasClass(this.markerClassName) || (i.addClass(this.markerClassName).append(n.dpDiv), e.data(t, "datepicker", n), this._setDate(n, this._getDefaultDate(n), !0), this._updateDatepicker(n), this._updateAlternate(n), n.settings.disabled && this._disableDatepicker(t), n.dpDiv.css("display", "block"))
            },
            _dialogDatepicker: function (t, n, i, r, o) {
                var s, l, u, c, d, h = this._dialogInst;
                return h || (this.uuid += 1, s = "dp" + this.uuid, this._dialogInput = e("<input type='text' id='" + s + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.on("keydown", this._doKeyDown), e("body").append(this._dialogInput), (h = this._dialogInst = this._newInst(this._dialogInput, !1)).settings = {}, e.data(this._dialogInput[0], "datepicker", h)), a(h.settings, r || {}), n = n && n.constructor === Date ? this._formatDate(h, n) : n, this._dialogInput.val(n), this._pos = o ? o.length ? o : [o.pageX, o.pageY] : null, this._pos || (l = document.documentElement.clientWidth, u = document.documentElement.clientHeight, c = document.documentElement.scrollLeft || document.body.scrollLeft, d = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [l / 2 - 100 + c, u / 2 - 150 + d]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), h.settings.onSelect = i, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), e.blockUI && e.blockUI(this.dpDiv), e.data(this._dialogInput[0], "datepicker", h), this
            },
            _destroyDatepicker: function (t) {
                var n, i = e(t),
                    r = e.data(t, "datepicker");
                i.hasClass(this.markerClassName) && (n = t.nodeName.toLowerCase(), e.removeData(t, "datepicker"), "input" === n ? (r.append.remove(), r.trigger.remove(), i.removeClass(this.markerClassName).off("focus", this._showDatepicker).off("keydown", this._doKeyDown).off("keypress", this._doKeyPress).off("keyup", this._doKeyUp)) : "div" !== n && "span" !== n || i.removeClass(this.markerClassName).empty(), o === r && (o = null))
            },
            _enableDatepicker: function (t) {
                var n, i, r = e(t),
                    a = e.data(t, "datepicker");
                r.hasClass(this.markerClassName) && ("input" === (n = t.nodeName.toLowerCase()) ? (t.disabled = !1, a.trigger.filter("button").each(function () {
                    this.disabled = !1
                }).end().filter("img").css({
                    opacity: "1.0",
                    cursor: ""
                })) : "div" !== n && "span" !== n || ((i = r.children("." + this._inlineClass)).children().removeClass("ui-state-disabled"), i.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), this._disabledInputs = e.map(this._disabledInputs, function (e) {
                    return e === t ? null : e
                }))
            },
            _disableDatepicker: function (t) {
                var n, i, r = e(t),
                    a = e.data(t, "datepicker");
                r.hasClass(this.markerClassName) && ("input" === (n = t.nodeName.toLowerCase()) ? (t.disabled = !0, a.trigger.filter("button").each(function () {
                    this.disabled = !0
                }).end().filter("img").css({
                    opacity: "0.5",
                    cursor: "default"
                })) : "div" !== n && "span" !== n || ((i = r.children("." + this._inlineClass)).children().addClass("ui-state-disabled"), i.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), this._disabledInputs = e.map(this._disabledInputs, function (e) {
                    return e === t ? null : e
                }), this._disabledInputs[this._disabledInputs.length] = t)
            },
            _isDisabledDatepicker: function (e) {
                if (!e) return !1;
                for (var t = 0; t < this._disabledInputs.length; t++)
                    if (this._disabledInputs[t] === e) return !0;
                return !1
            },
            _getInst: function (t) {
                try {
                    return e.data(t, "datepicker")
                } catch (n) {
                    throw "Missing instance data for this datepicker"
                }
            },
            _optionDatepicker: function (t, n, i) {
                var r, o, s, l, u = this._getInst(t);
                if (2 === arguments.length && "string" == typeof n) return "defaults" === n ? e.extend({}, e.datepicker._defaults) : u ? "all" === n ? e.extend({}, u.settings) : this._get(u, n) : null;
                r = n || {}, "string" == typeof n && ((r = {})[n] = i), u && (this._curInst === u && this._hideDatepicker(), o = this._getDateDatepicker(t, !0), s = this._getMinMaxDate(u, "min"), l = this._getMinMaxDate(u, "max"), a(u.settings, r), null !== s && r.dateFormat !== undefined && r.minDate === undefined && (u.settings.minDate = this._formatDate(u, s)), null !== l && r.dateFormat !== undefined && r.maxDate === undefined && (u.settings.maxDate = this._formatDate(u, l)), "disabled" in r && (r.disabled ? this._disableDatepicker(t) : this._enableDatepicker(t)), this._attachments(e(t), u), this._autoSize(u), this._setDate(u, o), this._updateAlternate(u), this._updateDatepicker(u))
            },
            _changeDatepicker: function (e, t, n) {
                this._optionDatepicker(e, t, n)
            },
            _refreshDatepicker: function (e) {
                var t = this._getInst(e);
                t && this._updateDatepicker(t)
            },
            _setDateDatepicker: function (e, t) {
                var n = this._getInst(e);
                n && (this._setDate(n, t), this._updateDatepicker(n), this._updateAlternate(n))
            },
            _getDateDatepicker: function (e, t) {
                var n = this._getInst(e);
                return n && !n.inline && this._setDateFromField(n, t), n ? this._getDate(n) : null
            },
            _doKeyDown: function (t) {
                var n, i, r, a = e.datepicker._getInst(t.target),
                    o = !0,
                    s = a.dpDiv.is(".ui-datepicker-rtl");
                if (a._keyEvent = !0, e.datepicker._datepickerShowing) switch (t.keyCode) {
                    case 9:
                        e.datepicker._hideDatepicker(), o = !1;
                        break;
                    case 13:
                        return (r = e("td." + e.datepicker._dayOverClass + ":not(." + e.datepicker._currentClass + ")", a.dpDiv))[0] && e.datepicker._selectDay(t.target, a.selectedMonth, a.selectedYear, r[0]), (n = e.datepicker._get(a, "onSelect")) ? (i = e.datepicker._formatDate(a), n.apply(a.input ? a.input[0] : null, [i, a])) : e.datepicker._hideDatepicker(), !1;
                    case 27:
                        e.datepicker._hideDatepicker();
                        break;
                    case 33:
                        e.datepicker._adjustDate(t.target, t.ctrlKey ? -e.datepicker._get(a, "stepBigMonths") : -e.datepicker._get(a, "stepMonths"), "M");
                        break;
                    case 34:
                        e.datepicker._adjustDate(t.target, t.ctrlKey ? +e.datepicker._get(a, "stepBigMonths") : +e.datepicker._get(a, "stepMonths"), "M");
                        break;
                    case 35:
                        (t.ctrlKey || t.metaKey) && e.datepicker._clearDate(t.target), o = t.ctrlKey || t.metaKey;
                        break;
                    case 36:
                        (t.ctrlKey || t.metaKey) && e.datepicker._gotoToday(t.target), o = t.ctrlKey || t.metaKey;
                        break;
                    case 37:
                        (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, s ? 1 : -1, "D"), o = t.ctrlKey || t.metaKey, t.originalEvent.altKey && e.datepicker._adjustDate(t.target, t.ctrlKey ? -e.datepicker._get(a, "stepBigMonths") : -e.datepicker._get(a, "stepMonths"), "M");
                        break;
                    case 38:
                        (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, -7, "D"), o = t.ctrlKey || t.metaKey;
                        break;
                    case 39:
                        (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, s ? -1 : 1, "D"), o = t.ctrlKey || t.metaKey, t.originalEvent.altKey && e.datepicker._adjustDate(t.target, t.ctrlKey ? +e.datepicker._get(a, "stepBigMonths") : +e.datepicker._get(a, "stepMonths"), "M");
                        break;
                    case 40:
                        (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, 7, "D"), o = t.ctrlKey || t.metaKey;
                        break;
                    default:
                        o = !1
                } else 36 === t.keyCode && t.ctrlKey ? e.datepicker._showDatepicker(this) : o = !1;
                o && (t.preventDefault(), t.stopPropagation())
            },
            _doKeyPress: function (t) {
                var n, i, r = e.datepicker._getInst(t.target);
                if (e.datepicker._get(r, "constrainInput")) return n = e.datepicker._possibleChars(e.datepicker._get(r, "dateFormat")), i = String.fromCharCode(null == t.charCode ? t.keyCode : t.charCode), t.ctrlKey || t.metaKey || i < " " || !n || n.indexOf(i) > -1
            },
            _doKeyUp: function (t) {
                var n = e.datepicker._getInst(t.target);
                if (n.input.val() !== n.lastVal) try {
                    e.datepicker.parseDate(e.datepicker._get(n, "dateFormat"), n.input ? n.input.val() : null, e.datepicker._getFormatConfig(n)) && (e.datepicker._setDateFromField(n), e.datepicker._updateAlternate(n), e.datepicker._updateDatepicker(n))
                } catch (i) {}
                return !0
            },
            _showDatepicker: function (n) {
                var i, r, o, s, l, u, c;
                ("input" !== (n = n.target || n).nodeName.toLowerCase() && (n = e("input", n.parentNode)[0]), e.datepicker._isDisabledDatepicker(n) || e.datepicker._lastInput === n) || (i = e.datepicker._getInst(n), e.datepicker._curInst && e.datepicker._curInst !== i && (e.datepicker._curInst.dpDiv.stop(!0, !0), i && e.datepicker._datepickerShowing && e.datepicker._hideDatepicker(e.datepicker._curInst.input[0])), !1 !== (o = (r = e.datepicker._get(i, "beforeShow")) ? r.apply(n, [n, i]) : {}) && (a(i.settings, o), i.lastVal = null, e.datepicker._lastInput = n, e.datepicker._setDateFromField(i), e.datepicker._inDialog && (n.value = ""), e.datepicker._pos || (e.datepicker._pos = e.datepicker._findPos(n), e.datepicker._pos[1] += n.offsetHeight), s = !1, e(n).parents().each(function () {
                    return !(s |= "fixed" === e(this).css("position"))
                }), l = {
                    left: e.datepicker._pos[0],
                    top: e.datepicker._pos[1]
                }, e.datepicker._pos = null, i.dpDiv.empty(), i.dpDiv.css({
                    position: "absolute",
                    display: "block",
                    top: "-1000px"
                }), e.datepicker._updateDatepicker(i), l = e.datepicker._checkOffset(i, l, s), i.dpDiv.css({
                    position: e.datepicker._inDialog && e.blockUI ? "static" : s ? "fixed" : "absolute",
                    display: "none",
                    left: l.left + "px",
                    top: l.top + "px"
                }), i.inline || (u = e.datepicker._get(i, "showAnim"), c = e.datepicker._get(i, "duration"), i.dpDiv.css("z-index", t(e(n)) + 1), e.datepicker._datepickerShowing = !0, e.effects && e.effects.effect[u] ? i.dpDiv.show(u, e.datepicker._get(i, "showOptions"), c) : i.dpDiv[u || "show"](u ? c : null), e.datepicker._shouldFocusInput(i) && i.input.trigger("focus"), e.datepicker._curInst = i)))
            },
            _updateDatepicker: function (t) {
                this.maxRows = 4, o = t, t.dpDiv.empty().append(this._generateHTML(t)), this._attachHandlers(t);
                var n, i = this._getNumberOfMonths(t),
                    a = i[1],
                    s = 17,
                    l = t.dpDiv.find("." + this._dayOverClass + " a");
                l.length > 0 && r.apply(l.get(0)), t.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), a > 1 && t.dpDiv.addClass("ui-datepicker-multi-" + a).css("width", s * a + "em"), t.dpDiv[(1 !== i[0] || 1 !== i[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), t.dpDiv[(this._get(t, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), t === e.datepicker._curInst && e.datepicker._datepickerShowing && e.datepicker._shouldFocusInput(t) && t.input.trigger("focus"), t.yearshtml && (n = t.yearshtml, setTimeout(function () {
                    n === t.yearshtml && t.yearshtml && t.dpDiv.find("select.ui-datepicker-year:first").replaceWith(t.yearshtml), n = t.yearshtml = null
                }, 0))
            },
            _shouldFocusInput: function (e) {
                return e.input && e.input.is(":visible") && !e.input.is(":disabled") && !e.input.is(":focus")
            },
            _checkOffset: function (t, n, i) {
                var r = t.dpDiv.outerWidth(),
                    a = t.dpDiv.outerHeight(),
                    o = t.input ? t.input.outerWidth() : 0,
                    s = t.input ? t.input.outerHeight() : 0,
                    l = document.documentElement.clientWidth + (i ? 0 : e(document).scrollLeft()),
                    u = document.documentElement.clientHeight + (i ? 0 : e(document).scrollTop());
                return n.left -= this._get(t, "isRTL") ? r - o : 0, n.left -= i && n.left === t.input.offset().left ? e(document).scrollLeft() : 0, n.top -= i && n.top === t.input.offset().top + s ? e(document).scrollTop() : 0, n.left -= Math.min(n.left, n.left + r > l && l > r ? Math.abs(n.left + r - l) : 0), n.top -= Math.min(n.top, n.top + a > u && u > a ? Math.abs(a + s) : 0), n
            },
            _findPos: function (t) {
                for (var n, i = this._getInst(t), r = this._get(i, "isRTL"); t && ("hidden" === t.type || 1 !== t.nodeType || e.expr.filters.hidden(t));) t = t[r ? "previousSibling" : "nextSibling"];
                return [(n = e(t).offset()).left, n.top]
            },
            _hideDatepicker: function (t) {
                var n, i, r, a, o = this._curInst;
                !o || t && o !== e.data(t, "datepicker") || this._datepickerShowing && (n = this._get(o, "showAnim"), i = this._get(o, "duration"), r = function () {
                    e.datepicker._tidyDialog(o)
                }, e.effects && (e.effects.effect[n] || e.effects[n]) ? o.dpDiv.hide(n, e.datepicker._get(o, "showOptions"), i, r) : o.dpDiv["slideDown" === n ? "slideUp" : "fadeIn" === n ? "fadeOut" : "hide"](n ? i : null, r), n || r(), this._datepickerShowing = !1, (a = this._get(o, "onClose")) && a.apply(o.input ? o.input[0] : null, [o.input ? o.input.val() : "", o]), this._lastInput = null, this._inDialog && (this._dialogInput.css({
                    position: "absolute",
                    left: "0",
                    top: "-100px"
                }), e.blockUI && (e.unblockUI(), e("body").append(this.dpDiv))), this._inDialog = !1)
            },
            _tidyDialog: function (e) {
                e.dpDiv.removeClass(this._dialogClass).off(".ui-datepicker-calendar")
            },
            _checkExternalClick: function (t) {
                if (e.datepicker._curInst) {
                    var n = e(t.target),
                        i = e.datepicker._getInst(n[0]);
                    (n[0].id === e.datepicker._mainDivId || 0 !== n.parents("#" + e.datepicker._mainDivId).length || n.hasClass(e.datepicker.markerClassName) || n.closest("." + e.datepicker._triggerClass).length || !e.datepicker._datepickerShowing || e.datepicker._inDialog && e.blockUI) && (!n.hasClass(e.datepicker.markerClassName) || e.datepicker._curInst === i) || e.datepicker._hideDatepicker()
                }
            },
            _adjustDate: function (t, n, i) {
                var r = e(t),
                    a = this._getInst(r[0]);
                this._isDisabledDatepicker(r[0]) || (this._adjustInstDate(a, n + ("M" === i ? this._get(a, "showCurrentAtPos") : 0), i), this._updateDatepicker(a))
            },
            _gotoToday: function (t) {
                var n, i = e(t),
                    r = this._getInst(i[0]);
                this._get(r, "gotoCurrent") && r.currentDay ? (r.selectedDay = r.currentDay, r.drawMonth = r.selectedMonth = r.currentMonth, r.drawYear = r.selectedYear = r.currentYear) : (n = new Date, r.selectedDay = n.getDate(), r.drawMonth = r.selectedMonth = n.getMonth(), r.drawYear = r.selectedYear = n.getFullYear()), this._notifyChange(r), this._adjustDate(i)
            },
            _selectMonthYear: function (t, n, i) {
                var r = e(t),
                    a = this._getInst(r[0]);
                a["selected" + ("M" === i ? "Month" : "Year")] = a["draw" + ("M" === i ? "Month" : "Year")] = parseInt(n.options[n.selectedIndex].value, 10), this._notifyChange(a), this._adjustDate(r)
            },
            _selectDay: function (t, n, i, r) {
                var a, o = e(t);
                e(r).hasClass(this._unselectableClass) || this._isDisabledDatepicker(o[0]) || ((a = this._getInst(o[0])).selectedDay = a.currentDay = e("a", r).html(), a.selectedMonth = a.currentMonth = n, a.selectedYear = a.currentYear = i, this._selectDate(t, this._formatDate(a, a.currentDay, a.currentMonth, a.currentYear)))
            },
            _clearDate: function (t) {
                var n = e(t);
                this._selectDate(n, "")
            },
            _selectDate: function (t, n) {
                var i, r = e(t),
                    a = this._getInst(r[0]);
                n = null != n ? n : this._formatDate(a), a.input && a.input.val(n), this._updateAlternate(a), (i = this._get(a, "onSelect")) ? i.apply(a.input ? a.input[0] : null, [n, a]) : a.input && a.input.trigger("change"), a.inline ? this._updateDatepicker(a) : (this._hideDatepicker(), this._lastInput = a.input[0], "object" != typeof a.input[0] && a.input.trigger("focus"), this._lastInput = null)
            },
            _updateAlternate: function (t) {
                var n, i, r, a = this._get(t, "altField");
                a && (n = this._get(t, "altFormat") || this._get(t, "dateFormat"), i = this._getDate(t), r = this.formatDate(n, i, this._getFormatConfig(t)), e(a).val(r))
            },
            noWeekends: function (e) {
                var t = e.getDay();
                return [t > 0 && t < 6, ""]
            },
            iso8601Week: function (e) {
                var t, n = new Date(e.getTime());
                return n.setDate(n.getDate() + 4 - (n.getDay() || 7)), t = n.getTime(), n.setMonth(0), n.setDate(1), Math.floor(Math.round((t - n) / 864e5) / 7) + 1
            },
            parseDate: function (t, n, i) {
                if (null == t || null == n) throw "Invalid arguments";
                if ("" === (n = "object" == typeof n ? n.toString() : n + "")) return null;
                var r, a, o, s, l = 0,
                    u = (i ? i.shortYearCutoff : null) || this._defaults.shortYearCutoff,
                    c = "string" != typeof u ? u : (new Date).getFullYear() % 100 + parseInt(u, 10),
                    d = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort,
                    h = (i ? i.dayNames : null) || this._defaults.dayNames,
                    p = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort,
                    f = (i ? i.monthNames : null) || this._defaults.monthNames,
                    m = -1,
                    g = -1,
                    v = -1,
                    y = -1,
                    b = !1,
                    _ = function (e) {
                        var n = r + 1 < t.length && t.charAt(r + 1) === e;
                        return n && r++, n
                    },
                    w = function (e) {
                        var t = _(e),
                            i = "@" === e ? 14 : "!" === e ? 20 : "y" === e && t ? 4 : "o" === e ? 3 : 2,
                            r = new RegExp("^\\d{" + ("y" === e ? i : 1) + "," + i + "}"),
                            a = n.substring(l).match(r);
                        if (!a) throw "Missing number at position " + l;
                        return l += a[0].length, parseInt(a[0], 10)
                    },
                    k = function (t, i, r) {
                        var a = -1,
                            o = e.map(_(t) ? r : i, function (e, t) {
                                return [
                                    [t, e]
                                ]
                            }).sort(function (e, t) {
                                return -(e[1].length - t[1].length)
                            });
                        if (e.each(o, function (e, t) {
                                var i = t[1];
                                if (n.substr(l, i.length).toLowerCase() === i.toLowerCase()) return a = t[0], l += i.length, !1
                            }), -1 !== a) return a + 1;
                        throw "Unknown name at position " + l
                    },
                    C = function () {
                        if (n.charAt(l) !== t.charAt(r)) throw "Unexpected literal at position " + l;
                        l++
                    };
                for (r = 0; r < t.length; r++)
                    if (b) "'" !== t.charAt(r) || _("'") ? C() : b = !1;
                    else switch (t.charAt(r)) {
                        case "d":
                            v = w("d");
                            break;
                        case "D":
                            k("D", d, h);
                            break;
                        case "o":
                            y = w("o");
                            break;
                        case "m":
                            g = w("m");
                            break;
                        case "M":
                            g = k("M", p, f);
                            break;
                        case "y":
                            m = w("y");
                            break;
                        case "@":
                            m = (s = new Date(w("@"))).getFullYear(), g = s.getMonth() + 1, v = s.getDate();
                            break;
                        case "!":
                            m = (s = new Date((w("!") - this._ticksTo1970) / 1e4)).getFullYear(), g = s.getMonth() + 1, v = s.getDate();
                            break;
                        case "'":
                            _("'") ? C() : b = !0;
                            break;
                        default:
                            C()
                    }
                if (l < n.length && (o = n.substr(l), !/^\s+/.test(o))) throw "Extra/unparsed characters found in date: " + o;
                if (-1 === m ? m = (new Date).getFullYear() : m < 100 && (m += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (m <= c ? 0 : -100)), y > -1)
                    for (g = 1, v = y;;) {
                        if (v <= (a = this._getDaysInMonth(m, g - 1))) break;
                        g++, v -= a
                    }
                if ((s = this._daylightSavingAdjust(new Date(m, g - 1, v))).getFullYear() !== m || s.getMonth() + 1 !== g || s.getDate() !== v) throw "Invalid date";
                return s
            },
            ATOM: "yy-mm-dd",
            COOKIE: "D, dd M yy",
            ISO_8601: "yy-mm-dd",
            RFC_822: "D, d M y",
            RFC_850: "DD, dd-M-y",
            RFC_1036: "D, d M y",
            RFC_1123: "D, d M yy",
            RFC_2822: "D, d M yy",
            RSS: "D, d M y",
            TICKS: "!",
            TIMESTAMP: "@",
            W3C: "yy-mm-dd",
            _ticksTo1970: 24 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)) * 60 * 60 * 1e7,
            formatDate: function (e, t, n) {
                if (!t) return "";
                var i, r = (n ? n.dayNamesShort : null) || this._defaults.dayNamesShort,
                    a = (n ? n.dayNames : null) || this._defaults.dayNames,
                    o = (n ? n.monthNamesShort : null) || this._defaults.monthNamesShort,
                    s = (n ? n.monthNames : null) || this._defaults.monthNames,
                    l = function (t) {
                        var n = i + 1 < e.length && e.charAt(i + 1) === t;
                        return n && i++, n
                    },
                    u = function (e, t, n) {
                        var i = "" + t;
                        if (l(e))
                            for (; i.length < n;) i = "0" + i;
                        return i
                    },
                    c = function (e, t, n, i) {
                        return l(e) ? i[t] : n[t]
                    },
                    d = "",
                    h = !1;
                if (t)
                    for (i = 0; i < e.length; i++)
                        if (h) "'" !== e.charAt(i) || l("'") ? d += e.charAt(i) : h = !1;
                        else switch (e.charAt(i)) {
                            case "d":
                                d += u("d", t.getDate(), 2);
                                break;
                            case "D":
                                d += c("D", t.getDay(), r, a);
                                break;
                            case "o":
                                d += u("o", Math.round((new Date(t.getFullYear(), t.getMonth(), t.getDate()).getTime() - new Date(t.getFullYear(), 0, 0).getTime()) / 864e5), 3);
                                break;
                            case "m":
                                d += u("m", t.getMonth() + 1, 2);
                                break;
                            case "M":
                                d += c("M", t.getMonth(), o, s);
                                break;
                            case "y":
                                d += l("y") ? t.getFullYear() : (t.getFullYear() % 100 < 10 ? "0" : "") + t.getFullYear() % 100;
                                break;
                            case "@":
                                d += t.getTime();
                                break;
                            case "!":
                                d += 1e4 * t.getTime() + this._ticksTo1970;
                                break;
                            case "'":
                                l("'") ? d += "'" : h = !0;
                                break;
                            default:
                                d += e.charAt(i)
                        }
                return d
            },
            _possibleChars: function (e) {
                var t, n = "",
                    i = !1,
                    r = function (n) {
                        var i = t + 1 < e.length && e.charAt(t + 1) === n;
                        return i && t++, i
                    };
                for (t = 0; t < e.length; t++)
                    if (i) "'" !== e.charAt(t) || r("'") ? n += e.charAt(t) : i = !1;
                    else switch (e.charAt(t)) {
                        case "d":
                        case "m":
                        case "y":
                        case "@":
                            n += "0123456789";
                            break;
                        case "D":
                        case "M":
                            return null;
                        case "'":
                            r("'") ? n += "'" : i = !0;
                            break;
                        default:
                            n += e.charAt(t)
                    }
                return n
            },
            _get: function (e, t) {
                return e.settings[t] !== undefined ? e.settings[t] : this._defaults[t]
            },
            _setDateFromField: function (e, t) {
                if (e.input.val() !== e.lastVal) {
                    var n = this._get(e, "dateFormat"),
                        i = e.lastVal = e.input ? e.input.val() : null,
                        r = this._getDefaultDate(e),
                        a = r,
                        o = this._getFormatConfig(e);
                    try {
                        a = this.parseDate(n, i, o) || r
                    } catch (event) {
                        i = t ? "" : i
                    }
                    e.selectedDay = a.getDate(), e.drawMonth = e.selectedMonth = a.getMonth(), e.drawYear = e.selectedYear = a.getFullYear(), e.currentDay = i ? a.getDate() : 0, e.currentMonth = i ? a.getMonth() : 0, e.currentYear = i ? a.getFullYear() : 0, this._adjustInstDate(e)
                }
            },
            _getDefaultDate: function (e) {
                return this._restrictMinMax(e, this._determineDate(e, this._get(e, "defaultDate"), new Date))
            },
            _determineDate: function (t, n, i) {
                var r = function (e) {
                        var t = new Date;
                        return t.setDate(t.getDate() + e), t
                    },
                    a = null == n || "" === n ? i : "string" == typeof n ? function (n) {
                        try {
                            return e.datepicker.parseDate(e.datepicker._get(t, "dateFormat"), n, e.datepicker._getFormatConfig(t))
                        } catch (u) {}
                        for (var i = (n.toLowerCase().match(/^c/) ? e.datepicker._getDate(t) : null) || new Date, r = i.getFullYear(), a = i.getMonth(), o = i.getDate(), s = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, l = s.exec(n); l;) {
                            switch (l[2] || "d") {
                                case "d":
                                case "D":
                                    o += parseInt(l[1], 10);
                                    break;
                                case "w":
                                case "W":
                                    o += 7 * parseInt(l[1], 10);
                                    break;
                                case "m":
                                case "M":
                                    a += parseInt(l[1], 10), o = Math.min(o, e.datepicker._getDaysInMonth(r, a));
                                    break;
                                case "y":
                                case "Y":
                                    r += parseInt(l[1], 10), o = Math.min(o, e.datepicker._getDaysInMonth(r, a))
                            }
                            l = s.exec(n)
                        }
                        return new Date(r, a, o)
                    }(n) : "number" == typeof n ? isNaN(n) ? i : r(n) : new Date(n.getTime());
                return (a = a && "Invalid Date" === a.toString() ? i : a) && (a.setHours(0), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0)), this._daylightSavingAdjust(a)
            },
            _daylightSavingAdjust: function (e) {
                return e ? (e.setHours(e.getHours() > 12 ? e.getHours() + 2 : 0), e) : null
            },
            _setDate: function (e, t, n) {
                var i = !t,
                    r = e.selectedMonth,
                    a = e.selectedYear,
                    o = this._restrictMinMax(e, this._determineDate(e, t, new Date));
                e.selectedDay = e.currentDay = o.getDate(), e.drawMonth = e.selectedMonth = e.currentMonth = o.getMonth(), e.drawYear = e.selectedYear = e.currentYear = o.getFullYear(), r === e.selectedMonth && a === e.selectedYear || n || this._notifyChange(e), this._adjustInstDate(e), e.input && e.input.val(i ? "" : this._formatDate(e))
            },
            _getDate: function (e) {
                return !e.currentYear || e.input && "" === e.input.val() ? null : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay))
            },
            _attachHandlers: function (t) {
                var n = this._get(t, "stepMonths"),
                    i = "#" + t.id.replace(/\\\\/g, "\\");
                t.dpDiv.find("[data-handler]").map(function () {
                    var t = {
                        prev: function () {
                            e.datepicker._adjustDate(i, -n, "M")
                        },
                        next: function () {
                            e.datepicker._adjustDate(i, +n, "M")
                        },
                        hide: function () {
                            e.datepicker._hideDatepicker()
                        },
                        today: function () {
                            e.datepicker._gotoToday(i)
                        },
                        selectDay: function () {
                            return e.datepicker._selectDay(i, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1
                        },
                        selectMonth: function () {
                            return e.datepicker._selectMonthYear(i, this, "M"), !1
                        },
                        selectYear: function () {
                            return e.datepicker._selectMonthYear(i, this, "Y"), !1
                        }
                    };
                    e(this).on(this.getAttribute("data-event"), t[this.getAttribute("data-handler")])
                })
            },
            _generateHTML: function (e) {
                var t, n, i, r, a, o, s, l, u, c, d, h, p, f, m, g, v, y, b, _, w, k, C, x, D, E, T, S, F, j, A, N, I, $, M, L, O, P, q, Q = new Date,
                    R = this._daylightSavingAdjust(new Date(Q.getFullYear(), Q.getMonth(), Q.getDate())),
                    z = this._get(e, "isRTL"),
                    H = this._get(e, "showButtonPanel"),
                    U = this._get(e, "hideIfNoPrevNext"),
                    B = this._get(e, "navigationAsDateFormat"),
                    W = this._getNumberOfMonths(e),
                    Y = this._get(e, "showCurrentAtPos"),
                    V = this._get(e, "stepMonths"),
                    K = 1 !== W[0] || 1 !== W[1],
                    X = this._daylightSavingAdjust(e.currentDay ? new Date(e.currentYear, e.currentMonth, e.currentDay) : new Date(9999, 9, 9)),
                    G = this._getMinMaxDate(e, "min"),
                    J = this._getMinMaxDate(e, "max"),
                    Z = e.drawMonth - Y,
                    ee = e.drawYear;
                if (Z < 0 && (Z += 12, ee--), J)
                    for (t = this._daylightSavingAdjust(new Date(J.getFullYear(), J.getMonth() - W[0] * W[1] + 1, J.getDate())), t = G && t < G ? G : t; this._daylightSavingAdjust(new Date(ee, Z, 1)) > t;) --Z < 0 && (Z = 11, ee--);
                for (e.drawMonth = Z, e.drawYear = ee, n = this._get(e, "prevText"), n = B ? this.formatDate(n, this._daylightSavingAdjust(new Date(ee, Z - V, 1)), this._getFormatConfig(e)) : n, i = this._canAdjustMonth(e, -1, ee, Z) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + n + "'><i class='icon-arrow-left'></i></a>" : U ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (z ? "e" : "w") + "'>" + n + "</span></a>", r = this._get(e, "nextText"), r = B ? this.formatDate(r, this._daylightSavingAdjust(new Date(ee, Z + V, 1)), this._getFormatConfig(e)) : r, a = this._canAdjustMonth(e, 1, ee, Z) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + r + "'><i class='icon-arrow-right'></i></a>" : U ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + r + "'><span class='ui-icon ui-icon-circle-triangle-" + (z ? "w" : "e") + "'>" + r + "</span></a>", o = this._get(e, "currentText"), s = this._get(e, "gotoCurrent") && e.currentDay ? X : R, o = B ? this.formatDate(o, s, this._getFormatConfig(e)) : o, l = e.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(e, "closeText") + "</button>", u = H ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (z ? l : "") + (this._isInRange(e, s) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + o + "</button>" : "") + (z ? "" : l) + "</div>" : "", c = parseInt(this._get(e, "firstDay"), 10), c = isNaN(c) ? 0 : c, d = this._get(e, "showWeek"), h = this._get(e, "dayNames"), p = this._get(e, "dayNamesMin"), f = this._get(e, "monthNames"), m = this._get(e, "monthNamesShort"), g = this._get(e, "beforeShowDay"), v = this._get(e, "showOtherMonths"), y = this._get(e, "selectOtherMonths"), b = this._getDefaultDate(e), _ = "", k = 0; k < W[0]; k++) {
                    for (C = "", this.maxRows = 4, x = 0; x < W[1]; x++) {
                        if (D = this._daylightSavingAdjust(new Date(ee, Z, e.selectedDay)), E = " ui-corner-all", T = "", K) {
                            if (T += "<div class='ui-datepicker-group", W[1] > 1) switch (x) {
                                case 0:
                                    T += " ui-datepicker-group-first", E = " ui-corner-" + (z ? "right" : "left");
                                    break;
                                case W[1] - 1:
                                    T += " ui-datepicker-group-last", E = " ui-corner-" + (z ? "left" : "right");
                                    break;
                                default:
                                    T += " ui-datepicker-group-middle", E = ""
                            }
                            T += "'>"
                        }
                        for (T += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + E + "'>" + (/all|left/.test(E) && 0 === k ? z ? a : i : "") + (/all|right/.test(E) && 0 === k ? z ? i : a : "") + this._generateMonthYearHeader(e, Z, ee, G, J, k > 0 || x > 0, f, m) + "</div><table class='ui-datepicker-calendar'><thead><tr>", S = d ? "<th class='ui-datepicker-week-col'>" + this._get(e, "weekHeader") + "</th>" : "", w = 0; w < 7; w++) S += "<th scope='col'" + ((w + c + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + "><span title='" + h[F = (w + c) % 7] + "'>" + p[F] + "</span></th>";
                        for (T += S + "</tr></thead><tbody>", j = this._getDaysInMonth(ee, Z), ee === e.selectedYear && Z === e.selectedMonth && (e.selectedDay = Math.min(e.selectedDay, j)), A = (this._getFirstDayOfMonth(ee, Z) - c + 7) % 7, N = Math.ceil((A + j) / 7), I = K && this.maxRows > N ? this.maxRows : N, this.maxRows = I, $ = this._daylightSavingAdjust(new Date(ee, Z, 1 - A)), M = 0; M < I; M++) {
                            for (T += "<tr>", L = d ? "<td class='ui-datepicker-week-col'>" + this._get(e, "calculateWeek")($) + "</td>" : "", w = 0; w < 7; w++) O = g ? g.apply(e.input ? e.input[0] : null, [$]) : [!0, ""], q = (P = $.getMonth() !== Z) && !y || !O[0] || G && $ < G || J && $ > J, L += "<td class='" + ((w + c + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (P ? " ui-datepicker-other-month" : "") + ($.getTime() === D.getTime() && Z === e.selectedMonth && e._keyEvent || b.getTime() === $.getTime() && b.getTime() === D.getTime() ? " " + this._dayOverClass : "") + (q ? " " + this._unselectableClass + " ui-state-disabled" : "") + (P && !v ? "" : " " + O[1] + ($.getTime() === X.getTime() ? " " + this._currentClass : "") + ($.getTime() === R.getTime() ? " ui-datepicker-today" : "")) + "'" + (P && !v || !O[2] ? "" : " title='" + O[2].replace(/'/g, "&#39;") + "'") + (q ? "" : " data-handler='selectDay' data-event='click' data-month='" + $.getMonth() + "' data-year='" + $.getFullYear() + "'") + ">" + (P && !v ? "&#xa0;" : q ? "<span class='ui-state-default'>" + $.getDate() + "</span>" : "<a class='ui-state-default" + ($.getTime() === R.getTime() ? " ui-state-highlight" : "") + ($.getTime() === X.getTime() ? " ui-state-active" : "") + (P ? " ui-priority-secondary" : "") + "' href='#'>" + $.getDate() + "</a>") + "</td>", $.setDate($.getDate() + 1), $ = this._daylightSavingAdjust($);
                            T += L + "</tr>"
                        }++Z > 11 && (Z = 0, ee++), C += T += "</tbody></table>" + (K ? "</div>" + (W[0] > 0 && x === W[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : "")
                    }
                    _ += C
                }
                return _ += u, e._keyEvent = !1, _
            },
            _generateMonthYearHeader: function (e, t, n, i, r, a, o, s) {
                var l, u, c, d, h, p, f, m, g = this._get(e, "changeMonth"),
                    v = this._get(e, "changeYear"),
                    y = this._get(e, "showMonthAfterYear"),
                    b = "<div class='ui-datepicker-title'>",
                    _ = "";
                if (a || !g) _ += "<span class='ui-datepicker-month'>" + o[t] + "</span>";
                else {
                    for (l = i && i.getFullYear() === n, u = r && r.getFullYear() === n, _ += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", c = 0; c < 12; c++)(!l || c >= i.getMonth()) && (!u || c <= r.getMonth()) && (_ += "<option value='" + c + "'" + (c === t ? " selected='selected'" : "") + ">" + s[c] + "</option>");
                    _ += "</select>"
                }
                if (y || (b += _ + (!a && g && v ? "" : "&#xa0;")), !e.yearshtml)
                    if (e.yearshtml = "", a || !v) b += "<span class='ui-datepicker-year'>" + n + "</span>";
                    else {
                        for (d = this._get(e, "yearRange").split(":"), h = (new Date).getFullYear(), f = (p = function (e) {
                                var t = e.match(/c[+\-].*/) ? n + parseInt(e.substring(1), 10) : e.match(/[+\-].*/) ? h + parseInt(e, 10) : parseInt(e, 10);
                                return isNaN(t) ? h : t
                            })(d[0]), m = Math.max(f, p(d[1] || "")), f = i ? Math.max(f, i.getFullYear()) : f, m = r ? Math.min(m, r.getFullYear()) : m,
                            e.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; f <= m; f++) e.yearshtml += "<option value='" + f + "'" + (f === n ? " selected='selected'" : "") + ">" + f + "</option>";
                        e.yearshtml += "</select>", b += e.yearshtml, e.yearshtml = null
                    } return b += this._get(e, "yearSuffix"), y && (b += (!a && g && v ? "" : "&#xa0;") + _), b += "</div>"
            },
            _adjustInstDate: function (e, t, n) {
                var i = e.selectedYear + ("Y" === n ? t : 0),
                    r = e.selectedMonth + ("M" === n ? t : 0),
                    a = Math.min(e.selectedDay, this._getDaysInMonth(i, r)) + ("D" === n ? t : 0),
                    o = this._restrictMinMax(e, this._daylightSavingAdjust(new Date(i, r, a)));
                e.selectedDay = o.getDate(), e.drawMonth = e.selectedMonth = o.getMonth(), e.drawYear = e.selectedYear = o.getFullYear(), "M" !== n && "Y" !== n || this._notifyChange(e)
            },
            _restrictMinMax: function (e, t) {
                var n = this._getMinMaxDate(e, "min"),
                    i = this._getMinMaxDate(e, "max"),
                    r = n && t < n ? n : t;
                return i && r > i ? i : r
            },
            _notifyChange: function (e) {
                var t = this._get(e, "onChangeMonthYear");
                t && t.apply(e.input ? e.input[0] : null, [e.selectedYear, e.selectedMonth + 1, e])
            },
            _getNumberOfMonths: function (e) {
                var t = this._get(e, "numberOfMonths");
                return null == t ? [1, 1] : "number" == typeof t ? [1, t] : t
            },
            _getMinMaxDate: function (e, t) {
                return this._determineDate(e, this._get(e, t + "Date"), null)
            },
            _getDaysInMonth: function (e, t) {
                return 32 - this._daylightSavingAdjust(new Date(e, t, 32)).getDate()
            },
            _getFirstDayOfMonth: function (e, t) {
                return new Date(e, t, 1).getDay()
            },
            _canAdjustMonth: function (e, t, n, i) {
                var r = this._getNumberOfMonths(e),
                    a = this._daylightSavingAdjust(new Date(n, i + (t < 0 ? t : r[0] * r[1]), 1));
                return t < 0 && a.setDate(this._getDaysInMonth(a.getFullYear(), a.getMonth())), this._isInRange(e, a)
            },
            _isInRange: function (e, t) {
                var n, i, r = this._getMinMaxDate(e, "min"),
                    a = this._getMinMaxDate(e, "max"),
                    o = null,
                    s = null,
                    l = this._get(e, "yearRange");
                return l && (n = l.split(":"), i = (new Date).getFullYear(), o = parseInt(n[0], 10), s = parseInt(n[1], 10), n[0].match(/[+\-].*/) && (o += i), n[1].match(/[+\-].*/) && (s += i)), (!r || t.getTime() >= r.getTime()) && (!a || t.getTime() <= a.getTime()) && (!o || t.getFullYear() >= o) && (!s || t.getFullYear() <= s)
            },
            _getFormatConfig: function (e) {
                var t = this._get(e, "shortYearCutoff");
                return {
                    shortYearCutoff: t = "string" != typeof t ? t : (new Date).getFullYear() % 100 + parseInt(t, 10),
                    dayNamesShort: this._get(e, "dayNamesShort"),
                    dayNames: this._get(e, "dayNames"),
                    monthNamesShort: this._get(e, "monthNamesShort"),
                    monthNames: this._get(e, "monthNames")
                }
            },
            _formatDate: function (e, t, n, i) {
                t || (e.currentDay = e.selectedDay, e.currentMonth = e.selectedMonth, e.currentYear = e.selectedYear);
                var r = t ? "object" == typeof t ? t : this._daylightSavingAdjust(new Date(i, n, t)) : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay));
                return this.formatDate(this._get(e, "dateFormat"), r, this._getFormatConfig(e))
            }
        }), e.fn.datepicker = function (t) {
            if (!this.length) return this;
            e.datepicker.initialized || (e(document).on("mousedown", e.datepicker._checkExternalClick), e.datepicker.initialized = !0), 0 === e("#" + e.datepicker._mainDivId).length && e("body").append(e.datepicker.dpDiv);
            var n = Array.prototype.slice.call(arguments, 1);
            return "string" != typeof t || "isDisabled" !== t && "getDate" !== t && "widget" !== t ? "option" === t && 2 === arguments.length && "string" == typeof arguments[1] ? e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [this[0]].concat(n)) : this.each(function () {
                "string" == typeof t ? e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [this].concat(n)) : e.datepicker._attachDatepicker(this, t)
            }) : e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [this[0]].concat(n))
        }, e.datepicker = new n, e.datepicker.initialized = !1, e.datepicker.uuid = (new Date).getTime(), e.datepicker.version = "1.12.1", e.datepicker
    }), NProgress.configure({
        ease: "ease",
        speed: 600
    }), jQuery.fn.editable.defaults.mode = "inline", jQuery.fn.editable.defaults.ajaxOptions = {
        type: "PUT"
    }, jQuery(document).on("turbolinks:load", function () {
        jQuery(".editable").editable(), jQuery('[data-toggle="tooltip"]').tooltip(), jQuery("body").tooltip({
            selector: '[data-toggle="tooltip"]'
        }), jQuery(".datepicker").datepicker({
            dateFormat: "dd-mm-yy",
            changeMonth: !0,
            changeYear: !0
        })
    });
var shopCurrencySymbol = "$",
    shopCurrency = "USD";
Dropzone.autoDiscover = !1;