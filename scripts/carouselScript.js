// use export here on everything that needs to be sent
$(function(){
    let previous = 0;
    let focus = 1;
    let next = 2;
    $("#1").attr("src", imageSRC[previous])
    $("#2").attr("src", imageSRC[focus])
    $("#3").attr("src", imageSRC[next])
    $("#description").text(descriptions[focus])

    $("#right-arrow").on("click", function(){
        previous++
        focus++
        next++
        if(previous == imageSRC.length){
            previous = 0
        }
        if(focus == imageSRC.length){
            focus = 0
        }
        if(next == imageSRC.length){
            next = 0
        }
        $("#1").attr("src", imageSRC[previous])
        $("#2").attr("src", imageSRC[focus])
        $("#3").attr("src", imageSRC[next])
        $("#description").text(descriptions[focus])
    })
    $("#left-arrow").on("click", function(){
        previous--
        focus--
        next--
        if(previous < 0){
            previous = imageSRC.length - 1
        }
        if(focus < 0){
            focus = imageSRC.length - 1
        }
        if(next < 0){
            next = imageSRC.length - 1
        }
        $("#1").attr("src", imageSRC[previous])
        $("#2").attr("src", imageSRC[focus])
        $("#3").attr("src", imageSRC[next])
        $("#description").text(descriptions[focus])
    })
})