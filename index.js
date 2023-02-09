document.getElementById('loc').addEventListener('mousedown', mouseEvent, true)

function mouseEvent(e){

    document.getElementById('out').innerHTML = `X-Coordinate ${e.pageX} - Y-Coordinate ${e.pageY}`
   
}