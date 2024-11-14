document.addEventListener('DOMContentLoaded', function() {
    const button = document.createElement('button');
    button.innerText = 'Click Me';
    button.onclick = function() {
        alert('Button Clicked!');
    };
    document.querySelector('.content').appendChild(button);
});
