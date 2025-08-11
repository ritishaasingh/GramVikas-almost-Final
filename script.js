document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('complaintForm');
  const successMessage = document.getElementById('successMessage');
  const gpsField = document.getElementById('gps');
  const detectBtn = document.getElementById('detectBtn');
  const locationInput = document.getElementById('location');

  // Detect location via GPS
  detectBtn.addEventListener('click', () => {
    if ('geolocation' in navigator) {
      gpsField.placeholder = "Detecting...";
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude.toFixed(6);
          const lon = position.coords.longitude.toFixed(6);
          gpsField.value = `${lat}, ${lon}`;
        },
        (error) => {
          gpsField.value = 'Location fetch failed';
          console.error('GPS error:', error);
        }
      );
    } else {
      gpsField.value = 'Geolocation not supported';
    }
  });

  // Form submission
  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const manualLocation = locationInput.value.trim();
    const gpsLocation = gpsField.value.trim();

    if (!manualLocation && !gpsLocation) {
      alert("Please type your area or detect it via GPS.");
      return;
    }

    const formData = new FormData(form);
    console.log("Complaint Submitted:");
    for (let [key, value] of formData.entries()) {
      console.log(`${key}:`, value);
    }

    successMessage.style.display = 'block';
    form.reset();
    gpsField.value = '';
  });
});
