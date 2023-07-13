document.addEventListener("DOMContentLoaded", function () {
  const storyTitleInput = document.getElementById("story-title");
  const authorNameInput = document.getElementById("author-name");
  const storyContentInput = document.getElementById("story-content");
  const imageUrlInput = document.getElementById("image-url");
  const form = document.getElementById("myForm");

  const previewStoryTitle = document.getElementById("preview-story-title");
  const previewAuthorName = document.getElementById("preview-author-name");
  const previewStoryContent = document.getElementById("preview-story-content");
  const previewImage = document.getElementById("preview-image");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    displayData();
  });

  function displayData() {
    previewStoryTitle.textContent = storyTitleInput.value;
    previewAuthorName.textContent = authorNameInput.value;
    previewStoryContent.textContent = storyContentInput.value;
    previewImage.src = imageUrlInput.value;
  }
});
