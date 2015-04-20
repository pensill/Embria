var buttonContainer = '<div class="registration__answer">' +
                        '<button id="button_yes" class="button button--green">Yes</button>' +
                        '<span>or<span>' +
                        '<button class="button button--red">No</button>' +
                      '</div>';

$(document).ready(function() {

  $.getJSON('../js/registration.json', function(info){

    step = '<div class="registration">' +
               '<h2 class="registration__title">' + info.title.step_1 + '</h2>' +
               '<div class="registration_warning">' + info.warning.step_1 + '</div>' +
               '<div class="registration__info">' + info.info.step_1 + '</div>' +
               '<div class="line"></div>' +
               '<div class="registration__question">' + info.questions.step_1 + '</div>' +
               buttonContainer +
           '</div>';
    $('#registration-form').html(step);

    $('#button_yes').bind('click', function(){
        step = '<div class="registration">' +
                   '<h2 class="registration__title">' + info.title.step_2 + '</h2>' +
                   '<div class="registration_warning">' + info.warning.step_2 + '</div>' +
                   '<div class="registration__info">' + info.info.step_2 + '</div>' +
                   '<div class="line line--small-margin"></div>' +
                   '<div class="registration__question">' + info.questions.step_2 + '</div>' +
                   buttonContainer +
               '</div>';
        $('#registration-form').html(step);

        $('#button_yes').bind('click', function(){
            step = '<div class="registration registration--profressbar">' +
                       '<div class="registration__info--third-step">' + info.info.step_3 + '</div>' +
                       '<div class="progressbar__progress"></div>' +
                   '</div>'
            $('#registration-form').html(step);

            setTimeout(function(){
                step =  '<div class="registration registration--fourth-step">' +
                            '<h2 class="registration__title">' + info.title.step_4 + '</h2>' +
                            '<div class="registration__info registration__info--fourth-step">' + info.info.step_4 + '</div>' +
                            '<div class="registration_warning registration_warning__fourth-step">' + info.warning.step_4 + '</div>' +
                            '<div class="line"></div>' +
                            '<button class="button button--green button--continue">Continue</button>' +
                        '</div>';
                $('#registration-form').html(step)},3000); //setTimeout

        }); // click button_sex_yes
    }); // click button_age_yes
  }); //getJSON
}); // ready
