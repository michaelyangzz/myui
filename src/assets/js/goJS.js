var goJS = {
  isNeedCloseNavList: function () {
    var mysider = $("#sidebar");
    if (mysider.hasClass("display"))
      return true;
    return false;
  },
  CloseNavList: function () {
    var mysider = $("#sidebar");
    if (mysider.hasClass("display"))
      mysider.removeClass("display");
  }
}
