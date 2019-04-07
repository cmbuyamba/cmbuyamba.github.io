window.onload = function () {
    let textarea = document.getElementById("textarea");
    let checkbox = document.getElementById("checkbox");
    btn.onclick = function () {
        setInterval(function () {
            let size = parseInt(textarea.style.fontSize);
            size += 2;
            textarea.style.fontSize = size + 'pt';
        }, 500);
    };

    checkbox.onchange = function () {
        if (checkbox.checked) {
            textarea.style.fontWeight = 'bold';
            textarea.style.textDecoration = 'underline';
            textarea.style.color = 'green';
            document.body.style.backgroundImage = "url('http://www.cs.washington.edu/education/courses/190m/CurrentQtr/labs/6/hundred-dollar-bill.jpg')";
        } else {
            textarea.style.fontWeight = 'normal';
            textarea.style.textDecoration = 'none';
            textarea.style.color = 'black';
            document.body.style.backgroundImage = '';
        }
    };

    btn2.onclick = function () {
        //let value = textarea.value;

    };

    btn3.onclick = function () {
        let value = textarea.value;
        let array = value.split(' ');

        array.map(function (elem) {
            if (elem.length >= 5) {
                return 'Malkovich';
            }
        });

        textarea.value = array.reduce(function (acc, elem) {
            return acc + ' ' + elem;
        });
    }
};