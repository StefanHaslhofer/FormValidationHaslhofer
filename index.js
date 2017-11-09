$(document).ready(function () {
    $("#otherMediaChannel").hide();
    $("#emailMandatory").hide();
    $("#btn").prop("disabled", true);
    $("input#firstName").keyup(function () {
        $("#firstNameMandatory").hide();
    });
    $("input#lastName").keyup(function () {
        $("#lastNameMandatory").hide();
    });
    $(document).on('change', function () {
        if ($('#newsletter').prop('checked') && !$('#email').val()) {
            $("#emailMandatory").show();
            $("#btn").prop("disabled", true);
        }
        else {
            $("#emailMandatory").hide();
        }
        if ($('#mediaChannelSelect option:selected').text() == "Other") {
            $("#otherMediaChannel").show();
        }
        if ($('#firstNameMandatory').is(":hidden") && $('#lastNameMandatory').is(":hidden") && $('#emailMandatory').is(":hidden")) {
            $("#btn").prop("disabled", false);
        }
    });
});
