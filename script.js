document.getElementById('dreamForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const dreamDetails = document.getElementById('dreamDetails').value;
    const dreamType = document.getElementById('dreamType').value;

    const exampleAnalysis = {
        falling: "Falling dreams typically indicate insecurities, instabilities, and anxieties. You may feel overwhelmed and out of control in some situation in your waking life.",
        chasing: "Chasing dreams often reflect feelings of anxiety or fear. You might be avoiding a situation or person, or you feel you're unable to reach a goal.",
        movie: "Dreams that resemble movies can suggest you are an imaginative person. This might reflect your desire for excitement or an escape from routine life.",
        memory: "Memory dreams often indicate that you are processing past experiences. This could be your mind's way of dealing with unresolved issues or emotions."
    };

    const analysisResult = exampleAnalysis[dreamType] || "Dream analysis not available for this type.";

    document.getElementById('analysisResult').innerText = `Analysis of your ${dreamType} dream: ${analysisResult}`;
});

document.getElementById('scheduleConsultation').addEventListener('click', function() {
    alert('Consultation scheduled with a professional dream analyzer.');
});

document.getElementById('setupVR').addEventListener('click', function() {
    alert('VR experience setup for your dream.');
});
