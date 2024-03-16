function toggleStyleSheet()
{
    const href = document.getElementById("style").getAttribute('href');

    if (href == 'brightStyle.css')
    {
        document.getElementById("style").setAttribute('href', 'darkStyle.css')
        localStorage.setItem('href','darkStyle.css')
    }
    else
    {
        document.getElementById("style").setAttribute('href', 'brightStyle.css')
        localStorage.setItem('href','brightStyle.css')
    }
}

window.onload = function(){

    const value = localStorage.getItem('href')

    if (value === null)
    {
        document.getElementById("style").setAttribute('href', 'brightStyle.css')
    }
    else
    {
        document.getElementById("style").setAttribute('href', localStorage.getItem('href'))
    }
}


