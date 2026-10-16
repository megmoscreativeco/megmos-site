// megmos.com/contact form: client-side checks, then POST to the MABS app
// (/api/v1/contact), which validates again, saves and emails the team.
// Success is shown only after the server confirms.
(function () {
  var form = document.querySelector("form.cf");
  if (!form) return;
  var M = JSON.parse(form.querySelector(".cf-i18n").textContent);
  var startedAt = Date.now();
  var status = form.querySelector(".cf-status");
  var submit = form.querySelector(".cf-submit");
  var success = document.querySelector(".cf-success");
  var msg = form.querySelector("#cf-message");
  var count = form.querySelector("#cf-message-count");
  var sending = false;
  var EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  document.querySelectorAll("[data-focus-form]").forEach(function (a) {
    a.addEventListener("click", function (e) {
      e.preventDefault();
      document.getElementById("contact-form").scrollIntoView({ behavior: "smooth", block: "start" });
      setTimeout(function () { form.querySelector("#cf-name").focus({ preventScroll: true }); }, 400);
    });
  });

  function updateCount() { count.textContent = M.counter.replace("{n}", String(msg.value.length)); }
  msg.addEventListener("input", updateCount);
  updateCount();

  function setError(name, text) {
    var input = form.querySelector('[name="' + name + '"]');
    var err = form.querySelector("#cf-" + name + "-error");
    if (!input || !err) return;
    if (text) {
      err.textContent = text; err.hidden = false;
      input.setAttribute("aria-invalid", "true");
      var ids = (input.getAttribute("aria-describedby") || "").split(" ").filter(Boolean);
      if (ids.indexOf(err.id) < 0) ids.push(err.id);
      input.setAttribute("aria-describedby", ids.join(" "));
    } else {
      err.textContent = ""; err.hidden = true;
      input.removeAttribute("aria-invalid");
    }
  }

  function validate() {
    var v = function (n) { return (form.elements[n].value || "").trim(); };
    var errors = {};
    if (!v("name")) errors.name = M.required;
    if (!v("email")) errors.email = M.required; else if (!EMAIL.test(v("email"))) errors.email = M.email;
    if (!v("subject")) errors.subject = M.required;
    if (!v("message")) errors.message = M.required; else if (v("message").length < 10) errors.message = M.messageShort;
    if (v("message").length > 5000) errors.message = M.tooLong;
    ["name", "email", "subject", "message"].forEach(function (n) { setError(n, errors[n]); });
    return errors;
  }

  ["name", "email", "subject", "message"].forEach(function (n) {
    form.elements[n].addEventListener("blur", function (e) {
      // Skip when focus moves to the submit button: re-validating here would
      // shift the layout and could make the click miss the button.
      if (e.relatedTarget === submit) return;
      if (form.elements[n].getAttribute("aria-invalid")) validate();
    });
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (sending) return;
    status.textContent = ""; status.classList.remove("is-error");
    var errors = validate();
    var first = Object.keys(errors)[0];
    if (first) {
      status.textContent = M.summary; status.classList.add("is-error");
      form.elements[first].focus();
      return;
    }
    sending = true;
    submit.disabled = true; submit.textContent = M.sending; form.setAttribute("aria-busy", "true");
    var payload = {
      name: form.elements.name.value.trim(),
      email: form.elements.email.value.trim(),
      company: form.elements.company.value.trim(),
      inquiryType: form.elements.inquiryType.value,
      subject: form.elements.subject.value.trim(),
      message: form.elements.message.value.trim(),
      locale: form.dataset.locale === "ar" ? "ar" : "en",
      website: form.elements.website.value,
      startedAt: startedAt,
    };
    fetch(form.dataset.endpoint, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) })
      .then(function (res) {
        if (res.ok) {
          form.hidden = true; success.hidden = false; success.focus();
          return;
        }
        status.textContent = res.status === 429 ? M.rate : M.send;
        status.classList.add("is-error");
      })
      .catch(function () { status.textContent = M.send; status.classList.add("is-error"); })
      .then(function () {
        sending = false; submit.disabled = false; submit.textContent = M.submit; form.removeAttribute("aria-busy");
      });
  });

  document.querySelector(".cf-again").addEventListener("click", function () {
    form.reset(); updateCount(); startedAt = Date.now();
    success.hidden = true; form.hidden = false; form.elements.name.focus();
  });
})();
