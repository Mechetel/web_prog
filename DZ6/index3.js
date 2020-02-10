function screen_properties() {
    var Scr_Str =
      "(" +
      screen.width +
      "*" +
      screen.height +
      ") pixels, " +
      screen.pixelDepth +
      " pixelDepth, " +
      screen.colorDepth +
      " colorDepth. ";
    return Scr_Str;
  }
  
  console.log(screen_properties());
  