$(document).ready(function() {
  "use strict";

  var textStr = "";
  var total = false;

  function evil(fn) {
    return new Function("return " + fn)();
  }

  function percent(line) {
    var newLine = line.replace(/[\%\+\-\*\/]\d+%/ig, "");
    var percentNumber = line.match(/[\%\+\-\*\÷\×\/]\d+%/ig).join().slice(1, -1);
    var percentNumberResult = evil(newLine) / 100 * percentNumber;
    var percentSumbol = line.match(/[\%\+\-\*\/]\d+%/ig).join().slice(0, 1);

    return evil(newLine) + percentSumbol + percentNumberResult;
  }


  // NOMER
  $("#satu").click(function() {
    if (total) {
      textStr = "";
      textStr += 1;
      total = false;
      $("#screen-value").text(function() {
        return 1;
      });
    } else {
      textStr += 1;
      $("#screen-value").append(function() {
        return 1;
      });
    }
  });
  $("#dua").click(function() {
    if (total) {
      textStr = "";
      textStr += 2;
      total = false;
      $("#screen-value").text(function() {
        return 2;
      });
    } else {
      textStr += 2;
      $("#screen-value").append(function() {
        return 2;
      });
    }
  });
  $("#tiga").click(function() {
    if (total) {
      textStr = "";
      textStr += 3;
      total = false;
      $("#screen-value").text(function() {
        return 3;
      });
    } else {
      textStr += 3;
      $("#screen-value").append(function() {
        return 3;
      });
    }
  });
  $("#empat").click(function() {
    if (total) {
      textStr = "";
      textStr += 4;
      total = false;
      $("#screen-value").text(function() {
        return 4;
      });
    } else {
      textStr += 4;
      $("#screen-value").append(function() {
        return 4;
      });
    }
  });
  $("#lima").click(function() {
    if (total) {
      textStr = "";
      textStr += 5;
      total = false;
      $("#screen-value").text(function() {
        return 5;
      });
    } else {
      textStr += 5;
      $("#screen-value").append(function() {
        return 5;
      });
    }
  });
  $("#enam").click(function() {
    if (total) {
      textStr = "";
      textStr += 6;
      total = false;
      $("#screen-value").text(function() {
        return 6;
      });
    } else {
      textStr += 6;
      $("#screen-value").append(function() {
        return 6;
      });
    }
  });
  $("#tujuh").click(function() {
    if (total) {
      textStr = "";
      textStr += 7;
      total = false;
      $("#screen-value").text(function() {
        return 7;
      });
    } else {
      textStr += 7;
      $("#screen-value").append(function() {
        return 7;
      });
    }
  });
  $("#delapan").click(function() {
    if (total) {
      textStr = "";
      textStr += 8;
      total = false;
      $("#screen-value").text(function() {
        return 8;
      });
    } else {
      textStr += 8;
      $("#screen-value").append(function() {
        return 8;
      });
    }
  });
  $("#sembilan").click(function() {
    if (total) {
      textStr = "";
      textStr += 9;
      total = false;
      $("#screen-value").text(function() {
        return 9;
      });
    } else {
      textStr += 9;
      $("#screen-value").append(function() {
        return 9;
      });
    }
  });
  $("#nol").click(function() {
    if (total) {
      textStr = "";
      textStr += 0;
      total = false;
      $("#screen-value").text(function() {
        return 0;
      });
    } else {
      textStr += 0;
      $("#screen-value").append(function() {
        return 0;
      });
    }
  });
  $("#koma").click(function() {
    if (total) {
      textStr = "";
      textStr += ".";
      $("#screen-value").text(function() {
        return ".";
      });
    } else {
      textStr += ".";
      $("#screen-value").append(function() {
        return ".";
      });
    }
  });

  /* OPERATIONS */
  $("#tambah").click(function() {
    total = false;
    textStr += "+";
    $("#screen-value").append(function() {
      return "+";
    });
  });
  $("#kurang").click(function() {
    total = false;
    textStr += "-";
    $("#screen-value").append(function() {
      return "-";
    });
  });
  $("#kali").click(function() {
    total = false;
    textStr += "*";
    $("#screen-value").append(function() {
      return "&#215;";
    });
  });
  $("#bagi").click(function() {
    total = false;
    textStr += "/";
    $("#screen-value").append(function() {
      return "&#247;";
    });
  });
  $("#persen").click(function() {
    total = false;
    textStr += "%";
    $("#screen-value").append(function() {
      return "%";
    });
  });

  /* EQUAL */
  $("#samadengan").click(function() {
    $("#screen-value").text(function() {
      total = true;
      return evil(textStr);
    });
  });


  /* CLEARS */
  $("#allClear").click(function() {
    total = false;
    textStr = "";
    $("#screen-value").empty();
  });

  $("#clearEntry").click(function() {
    $("#screen-value").text(function() {
      if ($("#screen-value").text() === textStr) {
        textStr = textStr.slice(0, -1);
        return textStr;
      }
      return textStr;
    });
  });
});
  