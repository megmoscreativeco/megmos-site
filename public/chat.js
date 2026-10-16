// megmos.com chat assistant ("MABS Assistant").
// Sends the recent conversation to the MABS app (/api/v1/chat), which answers
// only from approved MABS information. The conversation is kept in this tab's
// sessionStorage (cleared when the tab closes) and is not stored on the server.
(function () {
  var root = document.getElementById("mabs-chat");
  if (!root) return;
  var T = JSON.parse(root.querySelector(".mc-i18n").textContent);
  var endpoint = root.dataset.endpoint;
  var locale = root.dataset.locale === "ar" ? "ar" : "en";
  var KEY = "mabs_chat_" + locale;
  var history = [];
  try { history = JSON.parse(sessionStorage.getItem(KEY) || "[]"); } catch (e) { history = []; }
  var busy = false;

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }
  function save() { try { sessionStorage.setItem(KEY, JSON.stringify(history.slice(-30))); } catch (e) { /* ignore */ } }

  // Turn plain text into safe DOM: line breaks, and links to megmos/mabs URLs and emails only.
  function renderText(target, text) {
    var LINK = /(https:\/\/(?:www\.)?(?:mabs\.)?megmos\.com[^\s)]*|[a-z0-9._%+-]+@megmos\.com)/gi;
    text.split("\n").forEach(function (line, i) {
      if (i) target.appendChild(document.createElement("br"));
      var last = 0, m;
      LINK.lastIndex = 0;
      while ((m = LINK.exec(line))) {
        if (m.index > last) target.appendChild(document.createTextNode(line.slice(last, m.index)));
        var raw = m[0].replace(/[.,;:!?]+$/, "");
        var a = el("a", null, raw);
        a.href = raw.indexOf("@") > 0 && raw.indexOf("http") !== 0 ? "mailto:" + raw : raw;
        a.dir = "ltr";
        if (a.href.indexOf("mabs.megmos.com") > -1) { a.target = "_blank"; a.rel = "noopener"; }
        target.appendChild(a);
        if (raw.length < m[0].length) target.appendChild(document.createTextNode(m[0].slice(raw.length)));
        last = m.index + m[0].length;
      }
      if (last < line.length) target.appendChild(document.createTextNode(line.slice(last)));
    });
  }

  // ---- UI ----
  var launcher = el("button", "mc-launcher");
  launcher.type = "button";
  launcher.setAttribute("aria-expanded", "false");
  launcher.setAttribute("aria-controls", "mc-panel");
  launcher.innerHTML = '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 5h16v11H9l-5 4z"/><path d="M8 9.5h8M8 12.5h5"/></svg>';
  launcher.appendChild(el("span", "mc-launcher-label", T.open));

  var panel = el("section", "mc-panel");
  panel.id = "mc-panel";
  panel.setAttribute("role", "dialog");
  panel.setAttribute("aria-modal", "false");
  panel.setAttribute("aria-labelledby", "mc-title");
  panel.hidden = true;

  var head = el("header", "mc-head");
  var titles = el("div");
  var h = el("h2", "mc-title", T.title); h.id = "mc-title";
  titles.appendChild(h);
  titles.appendChild(el("p", "mc-sub", T.subtitle));
  var actions = el("div", "mc-head-actions");
  var restart = el("button", "mc-restart", T.restart); restart.type = "button";
  var close = el("button", "mc-close"); close.type = "button"; close.setAttribute("aria-label", T.close);
  close.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg>';
  actions.appendChild(restart); actions.appendChild(close);
  head.appendChild(titles); head.appendChild(actions);

  var log = el("div", "mc-log");
  log.setAttribute("role", "log");
  log.setAttribute("aria-live", "polite");

  var chips = el("div", "mc-chips");
  T.suggestions.forEach(function (s) {
    var c = el("button", "mc-chip", s); c.type = "button";
    c.addEventListener("click", function () { ask(s); });
    chips.appendChild(c);
  });

  var form = el("form", "mc-form");
  var input = el("textarea", "mc-input");
  input.rows = 1; input.maxLength = 1000; input.placeholder = T.placeholder;
  input.setAttribute("aria-label", T.placeholder);
  var send = el("button", "mc-send"); send.type = "submit"; send.setAttribute("aria-label", T.send);
  send.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 12h15"/><path d="m13 6 6 6-6 6"/></svg>';
  form.appendChild(input); form.appendChild(send);

  var foot = el("p", "mc-note");
  foot.appendChild(document.createTextNode(T.note + " "));
  var pl = el("a", null, T.privacy); pl.href = root.dataset.privacy;
  var cl = el("a", null, T.contact); cl.href = root.dataset.contact;
  foot.appendChild(pl); foot.appendChild(document.createTextNode(" · ")); foot.appendChild(cl);

  panel.appendChild(head); panel.appendChild(log); panel.appendChild(chips); panel.appendChild(form); panel.appendChild(foot);
  root.appendChild(panel); root.appendChild(launcher);

  function bubble(role, text, extraCls) {
    var b = el("div", "mc-msg mc-" + role + (extraCls ? " " + extraCls : ""));
    b.setAttribute("dir", "auto");
    renderText(b, text);
    log.appendChild(b);
    log.scrollTop = log.scrollHeight;
    return b;
  }
  function renderAll() {
    log.innerHTML = "";
    bubble("assistant", T.intro);
    history.forEach(function (m) { bubble(m.role, m.content); });
    chips.hidden = history.length > 0;
  }

  function setOpen(open) {
    panel.hidden = !open;
    launcher.setAttribute("aria-expanded", String(open));
    root.classList.toggle("is-open", open);
    if (open) { renderAll(); setTimeout(function () { input.focus(); }, 30); }
    else launcher.focus();
  }
  launcher.addEventListener("click", function () { setOpen(panel.hidden); });
  close.addEventListener("click", function () { setOpen(false); });
  restart.addEventListener("click", function () { history = []; save(); renderAll(); input.focus(); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape" && !panel.hidden) setOpen(false); });

  function autosize() { input.style.height = "auto"; input.style.height = Math.min(input.scrollHeight, 120) + "px"; }
  input.addEventListener("input", autosize);
  input.addEventListener("keydown", function (e) {
    if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); form.requestSubmit ? form.requestSubmit() : form.dispatchEvent(new Event("submit")); }
  });
  form.addEventListener("submit", function (e) { e.preventDefault(); ask(input.value); });

  function ask(text) {
    text = (text || "").trim();
    if (!text || busy) return;
    busy = true; send.disabled = true; chips.hidden = true;
    input.value = ""; autosize();
    history.push({ role: "user", content: text.slice(0, 1000) });
    save();
    bubble("user", text);
    var wait = bubble("assistant", T.thinking, "mc-wait");
    fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ locale: locale, messages: history.slice(-12) }),
    })
      .then(function (res) {
        return res.json().catch(function () { return {}; }).then(function (body) { return { ok: res.ok, status: res.status, body: body }; });
      })
      .then(function (r) {
        wait.remove();
        var reply = r.ok && r.body && r.body.data && r.body.data.reply;
        if (reply) {
          history.push({ role: "assistant", content: String(reply).slice(0, 1200) });
          save();
          bubble("assistant", String(reply));
        } else {
          history.pop(); save();
          bubble("assistant", r.status === 429 ? T.rate : T.error, "mc-error");
          input.value = text; autosize();
        }
      })
      .catch(function () {
        wait.remove(); history.pop(); save();
        bubble("assistant", T.error, "mc-error");
        input.value = text; autosize();
      })
      .then(function () { busy = false; send.disabled = false; input.focus(); });
  }
})();
