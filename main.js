

const funkcja = () => {
    let number = 0;
    const funkcja2 = () => {
        console.log(number);
        document.body.textContent = `${number} sekund`;
        number++;
        setTimeout(funkcja2, 1000);
    }

     funkcja2()
}

funkcja ();