import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_inappwebview/flutter_inappwebview.dart';
import 'package:xor/main.dart';
import 'package:xor/utils/color.dart';

class IStatubar {
  Color color;
  Brightness brightness;

  IStatubar._({
    required this.color,
    required this.brightness,
  });

  factory IStatubar.fromJson(Map<String, dynamic> json) {
    return IStatubar._(
      color: json['color'] == 'transparent'
          ? Colors.transparent
          : HexColor.build(json['color']),
      brightness:
          json['brightness'] == 'dark' ? Brightness.dark : Brightness.light,
    );
  }
}

void setStatusBar(InAppWebViewController controller) {
  double setter(params) {
    var statusbarParams = IStatubar.fromJson(params);
    SystemChrome.setSystemUIOverlayStyle(
      SystemUiOverlayStyle(
        statusBarColor: statusbarParams.color,
        statusBarIconBrightness: statusbarParams.brightness,
      ),
    );

    return MediaQuery.of(NavigationService.navigatorKey.currentContext!)
        .viewPadding
        .top;
  }

  controller.addJavaScriptHandler(
    handlerName: 'set-statusbar',
    callback: (args) => setter(args[0]),
  );
}

void setNavigationBar(InAppWebViewController controller) {
  void setter(params) {
    var statusbarParams = IStatubar.fromJson(params);
    SystemChrome.setSystemUIOverlayStyle(
      SystemUiOverlayStyle(
        systemNavigationBarColor: statusbarParams.color,
        systemNavigationBarIconBrightness: statusbarParams.brightness,
      ),
    );

    // return MediaQuery.of(context).viewPadding.top;
  }

  controller.addJavaScriptHandler(
    handlerName: 'set-navigationbar',
    callback: (args) => setter(args[0]),
  );
}
