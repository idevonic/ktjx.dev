const form = document.getElementById('contactForm');
const statusMsg = document.getElementById('formStatus');
const thankYouPopup = document.getElementById('thankYouPopup');
const popupCountdown = document.getElementById('popupCountdown');
const popupOkBtn = document.getElementById('popupOkBtn');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  const endpoint = form.getAttribute('action');

  statusMsg.textContent = "Sending...";
  statusMsg.classList.remove("error");
  form.querySelector("button").disabled = true;

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      body: formData,
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      statusMsg.textContent = "Thanks! I'll be in touch soon.";
      form.reset();
      showThankYouPopup();
    } else {
      throw new Error("Network response was not ok");
    }
  } catch (error) {
    statusMsg.textContent = "Oops! Message failed to send.";
    statusMsg.classList.add("error");
  }

  form.querySelector("button").disabled = false;
});

function showThankYouPopup() {
  thankYouPopup.style.display = 'flex';
  let countdown = 5;
  popupCountdown.textContent = `Closing in ${countdown} seconds...`;

  const interval = setInterval(() => {
    countdown--;
    if (countdown > 0) {
      popupCountdown.textContent = `Closing in ${countdown} seconds...`;
    } else {
      clearInterval(interval);
      hideThankYouPopup();
    }
  }, 1000);

  popupOkBtn.onclick = () => {
    clearInterval(interval);
    hideThankYouPopup();
  };
}

function hideThankYouPopup() {
  thankYouPopup.style.display = 'none';
}
