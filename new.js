$(document).ready(function () {
  var divElement = $('.customControl div');
  var placeholderText = 'Enter the name';
  var placeholderStyle = {
    color: 'gray',
    fontStyle: 'italic',
    lineHeight: '21px',
    padding: '0px',
  };
  function setPlaceholder() {
    divElement
      .text(placeholderText)
      .addClass('placeholder-text')
      .css(placeholderStyle);
  }
  divElement.text().trim() === '' && setPlaceholder();
  divElement.on('focus', function () {
    if (divElement.hasClass('placeholder-text')) {
      divElement
        .text('')
        .removeClass('placeholder-text')
        .css({ color: '', fontStyle: '', lineHeight: '', padding: '' });
    }
  });
  divElement.on('blur', function () {
    divElement.text().trim() === '' && setPlaceholder();
  });
  var txtSearchInput = $('#popupgenerator #txtSearch');
  var placeholderText = 'Enter the name';
  txtSearchInput.attr('placeholder', placeholderText);
});

$(document).ready(function () {
  function setAutoHeight() {
    $('#popupgenerator').css('height', 'auto');
    $('.pplContainer').css('height', 'auto');
  }
  $('.browseUser').on('click', function () {
    setAutoHeight();
  });
});

//****************************************** */
function placeHolderAutoHeight() {
  var divElement = $('.customControl div');
  var placeholderText = 'Enter the name';
  var placeholderStyle = {
    color: 'gray',
    fontStyle: 'italic',
    lineHeight: '21px',
    padding: '0px',
  };

  function setPlaceholder() {
    divElement
      .text(placeholderText)
      .addClass('placeholder-text')
      .css(placeholderStyle);
  }

  divElement.text().trim() === '' && setPlaceholder();

  divElement.on('focus', function () {
    if (divElement.hasClass('placeholder-text')) {
      divElement
        .text('')
        .removeClass('placeholder-text')
        .css({ color: '', fontStyle: '', lineHeight: '', padding: '' });
    }
  });

  divElement.on('blur', function () {
    divElement.text().trim() === '' && setPlaceholder();
  });

  var txtSearchInput = $('#popupgenerator #txtSearch');
  txtSearchInput.attr('placeholder', placeholderText);

  $('#popupgenerator').css('height', 'auto');

  $('.pplContainer').css('height', 'auto');
}

/******************************************** */
