
function machine_ider(){
    document.getElementById("machine_name").innerHTML = "Machine #32";
    document.getElementById("bal").innerHTML = "Bal: $9.00";
}


function pauseTimer() {
  isPaused=true;
  countDown(id);
  stopTimer()
}

function countDown(time){
var timeLabel = document.getElementById("time");
var counter = time * 60;
var minutes = time - 1; 
var newElement = document.createElement("p");
var id;
var isPaused=false;

machine_ider();

timeLabel.parentNode.replaceChild(newElement, timeLabel);

if(!isPaused)
  counter = time * 60;
  

id = setInterval(function() {
    
    if(counter < 0) {
        newElement.parentNode.replaceChild(timeLabel, newElement);
        stopTimer();
        isPaused=false;
    } else {
        counter--;
        var seconds = counter;
        var str_min;
        var str_sec;
        
        if((seconds)%60 == 0){
          minutes--;
        }

        if(minutes < 10){
           str_min = "0" + minutes.toString();
        }
        else{
          str_min = minutes.toString();
        }

        if((seconds%60) < 10){
          str_sec = "0" + (seconds%60).toString();
        }
        else{
          str_sec = (seconds%60).toString();
        }

        newElement.innerHTML = "<h1>Time remaining </br> " + str_min + " : " + str_sec + "</h1>";
    }
}, 1000);

}

function stopTimer() {
  clearInterval(id);
}

function resumeTimer() {
  isPaused=true;
  countDown(id);
}

// NAV BAR
(function($) {

  $.fn.menumaker = function(options) {
      
      var cssmenu = $(this), settings = $.extend({
        title: "Menu",
        format: "dropdown",
        breakpoint: 768,
        sticky: false
      }, options);

      return this.each(function() {
        cssmenu.find('li ul').parent().addClass('has-sub');
        if (settings.format != 'select') {
          cssmenu.prepend('<div id="menu-button">' + settings.title + '</div>');
          $(this).find("#menu-button").on('click', function(){
            $(this).toggleClass('menu-opened');
            var mainmenu = $(this).next('ul');
            if (mainmenu.hasClass('open')) { 
              mainmenu.hide().removeClass('open');
            }
            else {
              mainmenu.show().addClass('open');
              if (settings.format === "dropdown") {
                mainmenu.find('ul').show();
              }
            }
          });

          multiTg = function() {
            cssmenu.find(".has-sub").prepend('<span class="submenu-button"></span>');
            cssmenu.find('.submenu-button').on('click', function() {
              $(this).toggleClass('submenu-opened');
              if ($(this).siblings('ul').hasClass('open')) {
                $(this).siblings('ul').removeClass('open').hide();
              }
              else {
                $(this).siblings('ul').addClass('open').show();
              }
            });
          };

          if (settings.format === 'multitoggle') multiTg();
          else cssmenu.addClass('dropdown');
        }

        else if (settings.format === 'select')
        {
          cssmenu.append('<select style="width: 100%"/>').addClass('select-list');
          var selectList = cssmenu.find('select');
          selectList.append('<option>' + settings.title + '</option>', {
                                                         "selected": "selected",
                                                         "value": ""});
          cssmenu.find('a').each(function() {
            var element = $(this), indentation = "";
            for (i = 1; i < element.parents('ul').length; i++)
            {
              indentation += '-';
            }
            selectList.append('<option value="' + $(this).attr('href') + '">' + indentation + element.text() + '</option');
          });
          selectList.on('change', function() {
            window.location = $(this).find("option:selected").val();
          });
        }

        if (settings.sticky === true) cssmenu.css('position', 'fixed');

        resizeFix = function() {
          if ($(window).width() > settings.breakpoint) {
            cssmenu.find('ul').show();
            cssmenu.removeClass('small-screen');
            if (settings.format === 'select') {
              cssmenu.find('select').hide();
            }
            else {
              cssmenu.find("#menu-button").removeClass("menu-opened");
            }
          }

          if ($(window).width() <= settings.breakpoint && !cssmenu.hasClass("small-screen")) {
            cssmenu.find('ul').hide().removeClass('open');
            cssmenu.addClass('small-screen');
            if (settings.format === 'select') {
              cssmenu.find('select').show();
            }
          }
        };
        resizeFix();
        return $(window).on('resize', resizeFix);

      });
  };
})(jQuery);

(function($){
$(document).ready(function(){

$(document).ready(function() {
  $("#cssmenu").menumaker({
    title: "Menu",
    format: "dropdown"
  });

  $("#cssmenu a").each(function() {
    var linkTitle = $(this).text();
    $(this).attr('data-title', linkTitle);
  });
});

});
})(jQuery);
