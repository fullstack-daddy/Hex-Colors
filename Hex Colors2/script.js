body = document.getElementById('grad1');
btn = document.getElementById('u').addEventListener('click', random);

function random(e) {
    e.preventDefault();
    random2();
    // Generate Random Numbers for linear gradient
    function random2(min, max) {
    let r1 = Math.floor(Math.random() * (226 - 0) + 0);
    let g1 = Math.floor(Math.random() * (226 - 0) + 0);
    let b1 = Math.floor(Math.random() * (226 - 0) + 0);

    let r2 = Math.floor(Math.random() * (226 - 0) + 0);
    let g2 = Math.floor(Math.random() * (226 - 0) + 0);
    let b2 = Math.floor(Math.random() * (226 - 0) + 0);

    let r3 = Math.floor(Math.random() * (226 - 0) + 0);
    let g3 = Math.floor(Math.random() * (226 - 0) + 0);
    let b3 = Math.floor(Math.random() * (226 - 0) + 0);
    
    // Set rgb values for linear gradient
    body.style.backgroundImage = "linear-gradient(to right,"+"rgb("+r1+","+g1+","+b1+")"+","+"rgb("+r2+","+g2+","+b2+")"+","+"rgb("+r3+","+g3+","+b3+")"+")";
    
    // Display linear gradient rgb values
    h4.innerHTML= 'The rgb values are: ('+"rgb("+r1+","+g1+","+b1+")"+","+"rgb("+r2+","+g2+","+b2+")"+","+"rgb("+r3+","+g3+","+b3+")"+")";
    }
}
