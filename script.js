body = document.getElementById('body');
h4 = document.getElementById('h4');
u = document.getElementById('u');
u.addEventListener('click', random);

// Main Function
     function random(e) {
        e.preventDefault();
        random2();
        // Generate ramdom numbers as RGB values
        function random2(min, max) {
            let r = Math.floor(Math.random() * (226 - 0) + 0);
            let g = Math.floor(Math.random() * (226 - 0) + 0);
            let b = Math.floor(Math.random() * (226 - 0) + 0);
    
        // Generate random numbers for opacity
            let y= Math.random() * (0.9 - 0.2) + 0.2;
            let o = y.toFixed(1);
        // Display the RGBA value
            body.style.backgroundColor = "rgba("+r+","+g+","+b+","+o+")";
            h4.innerHTML= 'The RGBA value is: ('+r+', '+g+', '+b+','+o+')';
        }
     }
