import 'dart:developer';

import 'package:flutter/material.dart';
import 'package:flutter_inappwebview/flutter_inappwebview.dart';
import 'package:xor/functions/statusbar.dart';

class InApp extends StatefulWidget {
  const InApp({super.key});

  @override
  State<InApp> createState() => _InAppState();
}

class _InAppState extends State<InApp> {
  final GlobalKey webViewKey = GlobalKey();
  InAppWebViewController? webViewController;
  InAppWebViewSettings settings = InAppWebViewSettings(
    useShouldOverrideUrlLoading: true,
    mediaPlaybackRequiresUserGesture: false,
    allowsInlineMediaPlayback: true,
    iframeAllow: "camera; microphone",
    iframeAllowFullscreen: true,
    verticalScrollBarEnabled: false,
  );
  String url = "";

  @override
  void initState() {
    super.initState();
  }

  Future<bool> _onBackPressed() async {
    if (webViewController == null) return true;

    webViewController?.evaluateJavascript(
      source: """window.dispatchEvent(new CustomEvent("is-modal-open"));""",
    );

    return false;
  }

  void goback() async {
    if (await webViewController?.canGoBack() == true) {
      await webViewController?.goBack();
    } else {
      Navigator.of(context).pop();
    }
  }

  @override
  Widget build(BuildContext context) {
    return WillPopScope(
      onWillPop: _onBackPressed,
      child: Scaffold(
        body: InAppWebView(
          initialUrlRequest: URLRequest(url: WebUri("http://192.168.1.4:5173")),
          key: webViewKey,
          initialSettings: settings,
          onWebViewCreated: (controller) async {
            setStatusBar(controller);
            setNavigationBar(controller);

            controller.addJavaScriptHandler(
              handlerName: 'go-back',
              callback: (args) => goback(),
            );

            webViewController = controller;
          },
          onConsoleMessage: (controller, consoleMessage) {
            log(consoleMessage.message);
          },
        ),
      ),
    );
  }
}
