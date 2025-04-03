document.getElementById('story-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from reloading the page

    // Get the values from the form fields
    const name = document.getElementById('name').value;
    const story = document.getElementById('story').value;

    if (name && story) {
        // Create a new story element
        const newStory = document.createElement('div');
        newStory.classList.add('story');
        
        // Add name and story content
        newStory.innerHTML = `<h3>${name}</h3><p>${story}</p>`;
        
        // Append the new story to the stories list
        document.getElementById('stories-list').appendChild(newStory);

        // Clear the form fields
        document.getElementById('name').value = '';
        document.getElementById('story').value = '';
    } else {
        alert("Please fill out both fields before submitting your story.");
    }
});
