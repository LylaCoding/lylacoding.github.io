$(document).ready(function() {
    $(".enlargeable-photo").click(function() {
      var imageUrl = $(this).attr("src");
      var modalContent = '<img src="' + imageUrl + '" alt="Enlarged Photo">';
  
      // Create a modal or lightbox element
      var modal = $('<div id="photo-modal">' + modalContent + '</div>');
  
      // Add the modal to the page
      $("body").append(modal);
  
      // Close the modal when clicked
      modal.click(function() {
        modal.remove();
      });
    });
  });
  