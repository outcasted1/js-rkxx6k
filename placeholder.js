$(document).ready(function () {
  $('.customControl div').attr('placeholder', 'This is a placeholder.');
});
$('.CAFDialogbox ');
$('#popupgenerator #txtSearch');
$(document).ready(function () {
  var element = $('.customControl div');
  element.addClass('customPicker');
});
/*
 .customPicker {
  border: 1px solid #ccc;
  padding: 5px;
  min-height: 30px;
  outline: none;
  font-size: 14px;
  color: #333;
}

.customPicker:empty:before {
  content: attr(data-placeholder);
  color: #999;
  font-style: italic;
}
*/

$(document).ready(function () {
  $('.customPicker').each(function () {
    if ($(this).text().trim() === '') {
      $(this).text($(this).data('placeholder'));
    }
  });
  $('.customPicker').click(function () {
    if ($(this).text().trim() === $(this).data('placeholder')) {
      $(this).text('');
    }
  });
});

$(document).ready(function () {
  var divElement = $('.customControl div');
  var placeholderText = 'Vanakkam Da Mapla';
  debugger;

  if (divElement.text().trim() === '') {
    divElement.text(placeholderText).addClass('placeholder-text');
  }
  divElement.on('focus', function () {
    if (divElement.hasClass('placeholder-text')) {
      divElement.text('').removeClass('placeholder-text');
    }
  });
  divElement.on('blur', function () {
    if (divElement.text().trim() === '') {
      divElement.text(placeholderText).addClass('placeholder-text');
    }
  });
});

$(document).ready(function () {
  var divElement = $('.customControl div');
  var placeholderText = 'Vanakkam Da Mapla';
  var placeholderStyle = {
    color: 'gray',
    fontStyle: 'italic',
  };

  if (divElement.text().trim() === '') {
    divElement.text(placeholderText).addClass('placeholder-text');
    divElement.css(placeholderStyle);
  }

  divElement.on('focus', function () {
    if (divElement.hasClass('placeholder-text')) {
      divElement.text('').removeClass('placeholder-text');
      divElement.css('color', '');
      divElement.css('font-style', '');
    }
  });

  divElement.on('blur', function () {
    if (divElement.text().trim() === '') {
      divElement.text(placeholderText).addClass('placeholder-text');
      divElement.css(placeholderStyle);
    }
  });
});

$(document).ready(function () {
  var divElement = $('.customControl div');
  var placeholderText = 'Enter the name';

  var placeholderStyle = {
    color: 'gray',
    fontStyle: 'italic',
    lineHeight: '21px',
    padding: '-1px 0px',
  };

  if (divElement.text().trim() === '') {
    divElement.text(placeholderText).addClass('placeholder-text');
    divElement.css(placeholderStyle);
  }
  divElement.on('focus', function () {
    if (divElement.hasClass('placeholder-text')) {
      divElement.text('').removeClass('placeholder-text');
      divElement.css('color', '');
      divElement.css('font-style', '');
      divElement.css('line-height', '');
      divElement.css('padding', '');
    }
  });

  divElement.on('blur', function () {
    if (divElement.text().trim() === '') {
      divElement.text(placeholderText).addClass('placeholder-text');
      divElement.css(placeholderStyle);
    }
  });
});

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

  $('.browseUser').on('click', function () {
    var divElement = $('#popupgenerator #txtSearch');

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
  });
});


$(document).ready(function() {  
  var elementToModify = $("#UserList");   
  elementToModify.css({
    "height": "min-content",
    "top": "60px",
    "position": "relative" 
  });
});
