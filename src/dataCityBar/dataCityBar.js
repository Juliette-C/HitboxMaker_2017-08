import "./dataCityBar.css";

// display html content of data bar
export function displayDataBar() {
    const $dataBar = document.getElementById('dataBar');
    
    $dataBar.innerHTML += `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi maximus sollicitudin ex, vel tempor tellus viverra hendrerit. Sed quis risus vel libero placerat dignissim nec at lacus. Morbi elementum quam eget est dignissim, quis ornare erat dignissim. In id ligula semper, hendrerit ex at, accumsan lorem. In gravida leo nunc, ac molestie erat viverra sit amet.</p>`;
}