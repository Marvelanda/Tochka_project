const bookingForm = document.getElementById('booking_form');
console.log(bookingForm);

bookingForm.addEventListener('submit', async (evt) => {
  evt.preventDefault();

  const formData = new FormData(bookingForm);
  const parseData = Object.fromEntries(formData);
  const url = bookingForm.action;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(parseData),
  });

  const data = await response.json();
  console.log(data);

  bookingForm.innerHTML = `<p>${data.message1}</p>
                            <p>${data.message2}</p>`;
  bookingForm.style.background = 'white';
  bookingForm.classList.add('answer-form');
});
