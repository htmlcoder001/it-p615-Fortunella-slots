var intr,
  time = 600;
function start_timer() {
  intr = setInterval(tick, 1e3);
}
function tick() {
  time -= 1;
  var e = Math.floor(time / 60),
    o = time - 60 * e;
  0 == e && 0 == o && clearInterval(intr),
    (o = o >= 10 ? o : "0" + o),
    (e = e >= 10 ? e : "0" + e),
    $("#min").html(e),
    $("#sec").html(o);
}

$("a[href^='#']").click(function () {
  if ($(this).attr("href") == '#no-scroll') return false;
  var e = $(this).attr("href");
  return $("html, body").animate({ scrollTop: $(e).offset().top + "px" }), !1;
});