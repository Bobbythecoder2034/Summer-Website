$("#result-box").hide()
    $("#submit-button").on('click', function(){
        let email = ""
        let name = ""
        let subject = ""
        let content = ""

        email = $("#email").val()
        $("#email").val("")
        name = $("#name").val()
        $("#name").val("")
        subject = $("#subject").val()
        $("#subject").val("")
        content = $("#content").val()
        $("#content").val("")
        
        $("#form-box").hide()

        console.log(email)
        console.log(name)
        console.log(subject)
        console.log(content)

        $("#email-sum").text(email)
        $("#name-sum").text(name)
        $("#subject-sum").text(subject)
        $("#content-sum").text(content)
        $("#result-box").show()
    })