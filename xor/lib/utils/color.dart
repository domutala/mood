import 'dart:ffi';

import 'package:flutter/animation.dart';

extension HexColor on Color {
  static Color build(dynamic color) {
    if (color is List<dynamic>) {
      return fromRGBO(color);
    } else {
      return fromHex(color);
    }
  }

  /// String is in the format "aabbcc" or "ffaabbcc" with an optional leading "#".
  static Color fromHex(String hexString) {
    final buffer = StringBuffer();
    if (hexString.length == 6 || hexString.length == 7) buffer.write('ff');
    buffer.write(hexString.replaceFirst('#', ''));
    return Color(int.parse(buffer.toString(), radix: 16));
  }

  static Color fromRGBO(List<dynamic> rgba) {
    var color = Color.fromRGBO(rgba[0], rgba[1], rgba[2], 1);
    if (rgba.length >= 4) color.withOpacity(rgba[3].toDouble());
    return color;
  }

  /// Prefixes a hash sign if [leadingHashSign] is set to `true` (default is `true`).
  String toHex({bool leadingHashSign = true}) => '${leadingHashSign ? '#' : ''}'
      '${alpha.toRadixString(16).padLeft(2, '0')}'
      '${red.toRadixString(16).padLeft(2, '0')}'
      '${green.toRadixString(16).padLeft(2, '0')}'
      '${blue.toRadixString(16).padLeft(2, '0')}';
}
