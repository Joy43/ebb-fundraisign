document.getElementById('copyButton').addEventListener('click', function() {
    var addressText = document.getElementById('address').innerText;
    navigator.clipboard.writeText(addressText)
      .then(function() {
        console.log('Address copied to clipboard');
        swal("Success!", "Send EGLD to this Address", "success");
      })
      .catch(function(err) {
        console.error('Failed to copy address: ', err);
        swal("Error!", "Failed to copy address", "error");
      });
  });
  