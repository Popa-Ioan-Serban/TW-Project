var slide_index = 0
var slides_collection
var points
show()
var time

function show() {
    var i
    slides_collection = document.getElementsByClassName("slide")
    points = document.getElementsByClassName("point")
    for (i = 0; i < slides_collection.length; i++) {
       slides_collection[i].style.display = "none"
    }
    slide_index++
    if (slide_index > slides_collection.length) {
        slide_index = 1
    }    
    for (i = 0; i < points.length; i++) {
        points[i].className = points[i].className.replace(" active", "")
    }
    slides_collection[slide_index-1].style.display = "block"
    points[slide_index-1].className += " active"
    time = setTimeout(show, 2000)
}

function goToSlide(index) {
    if (index > slides_collection.length)
        index = index % slides_collection.length;
    for (i = 0; i < slides_collection.length; i++)
       slides_collection[i].style.display = "none"
    for (i = 0; i < points.length; i++)
        points[i].className = points[i].className.replace(" active", "")
    slides_collection[index-1].style.display = "block"
    points[index-1].className += " active"
    slide_index = index
}

function pause() {
    window.clearTimeout(time)
}

function resume() {
    window.clearTimeout(time)
    time = window.setTimeout(show, 2000)
}