function showSection(sectionId) {
    document.getElementById('options-section').classList.add('d-none');
    document.getElementById('upload-section').classList.add('d-none');
    document.getElementById('update-section').classList.add('d-none');
    document.getElementById(sectionId).classList.remove('d-none');
}

function goBack() {
    document.getElementById('options-section').classList.remove('d-none');
    document.getElementById('upload-section').classList.add('d-none');
    document.getElementById('update-section').classList.add('d-none');
}

function updateWordCount(textarea, counterId) {
    const words = textarea.value.trim().split(/\s+/).filter(word => word.length > 0);
    document.getElementById(counterId).innerText = words.length + " / 200 words";
    if (words.length > 200) {
        textarea.value = words.slice(0, 200).join(" ");
    }
}

function updateMapPreview(url, iframeId) {
    let iframe = document.getElementById(iframeId);
    if (url.includes("google.com/maps")) {
        iframe.src = url.replace("/maps/", "/maps/embed/");
    } else {
        iframe.src = "";
    }
}

function updateProgressBar(input) {
    let value = parseInt(input.value) || 0;
  
    if (value < 0) value = 0;
    if (value > 100) value = 100;
  
    input.value = value;
  
    const bar = document.getElementById('progress-bar');
    bar.style.width = value + '%';
    bar.textContent = value + '%';
  
    // Optional: change bar color based on progress
    if (value < 50) {
      bar.classList.remove('bg-warning', 'bg-success');
      bar.classList.add('bg-danger');
    } else if (value < 80) {
      bar.classList.remove('bg-danger', 'bg-success');
      bar.classList.add('bg-warning');
    } else {
      bar.classList.remove('bg-danger', 'bg-warning');
      bar.classList.add('bg-success');
    }
  }

function autoFillProject(projectId) {
    if (projectId === "1") {
        document.getElementById('update-title').value = "Bridge Construction";
        document.getElementById('update-description').value = "Construction of a new bridge over the river.";
        document.getElementById('update-map-url').value = "https://www.google.com/maps/place/Golden+Gate+Bridge";
        updateMapPreview("https://www.google.com/maps/place/Golden+Gate+Bridge", "update-map-preview");
    } else if (projectId === "2") {
        document.getElementById('update-title').value = "School Renovation";
        document.getElementById('update-description').value = "Renovation of government high school.";
        document.getElementById('update-map-url').value = "https://www.google.com/maps/place/Stanford+University";
        updateMapPreview("https://www.google.com/maps/place/Stanford+University", "update-map-preview");
    } else {
        document.getElementById('update-title').value = "";
        document.getElementById('update-description').value = "";
        document.getElementById('update-map-url').value = "";
        updateMapPreview("", "update-map-preview");
    }
}