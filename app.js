document.addEventListener('DOMContentLoaded', () => {
    //surfer is circle
    let circle = document.querySelector(".circle");
    const quit = document.querySelector('.quit')
    const title = document.querySelector('.title')
    const desc = document.querySelector('.desc')
    const rules = document.querySelector('.rules')
    const canvasDisplay = document.querySelector('.canvasDisplay')



    /// START
    let isGameOver = false
    circle.style.top = "400px"
    circle.style.left = "20px"
    let circleLeft = 20
    let circleTop = 400
    document.querySelector('.circle').style.display = 'none';
    document.querySelector('.npcStatic').style.display = 'none';
    document.querySelector('.npcStaticSecond').style.display = 'none';



    //start buttons
    document.getElementById("startButton").addEventListener('click', function () {

        title.innerText = ''
        desc.innerText = ''
        rules.innerText = ''
        startGame()
        location.reload();

    });

    document.getElementById("startButton").style.visibility = "hidden";

    document.getElementById("startGameButton").addEventListener('click', function () {
        generateGame()
        gameId = setInterval(generateGame, 6000)
        title.innerText = ''
        desc.innerText = ''
        rules.innerText = ''
        quit.innerText = ''
        document.querySelector('.circle').style.display = 'block';
        document.querySelector('.npcStatic').style.display = 'block';
        document.querySelector('.npcStaticSecond').style.display = 'block';
        document.querySelector('img').style.display = 'none';
    })

    document.getElementById("startGameButton").addEventListener('click', hideshow, false);

    function hideshow() {
        document.getElementById('startGameButton').style.display = 'block';
        this.style.display = 'none'
    }


    ////SURFER (is circle)
    function startGame() {
        circle.style.top = circleTop + 'px'
        circle.style.left = circleLeft + 'px'
    }

    //move surfer
    document.onkeydown = (e) => {
        console.log(e)
        e.preventDefault();
        if (e.key == 'ArrowRight' && circleLeft < 750) {
            circleLeft += 6;
            circle.style.left = circleLeft + 'px'
            circle.style.backgroundImage = "url('surferRight.png')";
            circle.style.height = "40px";
            circle.style.width = "110px";
        }
        if (e.key == 'ArrowLeft' && circleLeft > 0) {
            circleLeft -= 6;
            circle.style.left = circleLeft + 'px'
            circle.style.height = "40px";
            circle.style.width = "110px";
            circle.style.backgroundImage = "url('surferLeft.png')";
        }
        if (e.key == 'ArrowDown' && circleTop < 550) {
            circleTop += 6;
            circle.style.top = circleTop + 'px'
            circle.style.height = "110px";
            circle.style.width = "40px";
            circle.style.backgroundImage = "url('surferDown.png')";
        }
        if (e.key == 'ArrowUp' && circleTop > 30) {
            circleTop -= 6;
            circle.style.top = circleTop + 'px'
            circle.style.backgroundImage = "url('surfer.png')";
            circle.style.height = "110px";
            circle.style.width = "40px";

        }
        if (e.key == 'q') {
            gameOver()
        }
    }

    ///GAME
    function generateGame() {
        //non-characther player(npc)
        let npcTop = Math.floor(Math.random() * (300 - 40) + 40)
        let npcLeft = 0
        const npc = document.createElement('div')
        if (!isGameOver) npc.classList.add('npc')
        canvasDisplay.appendChild(npc)
        npc.style.top = npcTop + 'px'
        npc.style.left = npcLeft + 'px'
        npc.style.zIndex = "0";

        //wave
        let waveTop = 30
        let waveLeft = Math.floor(Math.random() * 600)
        const wave = document.createElement('div')
        if (!isGameOver) wave.classList.add('wave')
        canvasDisplay.appendChild(wave)
        wave.style.top = waveTop + 'px'
        wave.style.left = waveLeft + 'px'

        //npc middle
        let npcMiddleTop = Math.floor(Math.random() * (300 - 40) + 40)
        let npcMiddleLeft = 0
        const npcMiddle = document.createElement('div')
        if (!isGameOver) npcMiddle.classList.add('npcMiddle')
        canvasDisplay.appendChild(npcMiddle)
        npcMiddle.style.top = npcMiddleTop + 'px'
        npcMiddle.style.left = npcMiddleLeft + 'px'
        console.log('npcmiddle is', npcMiddleTop)
        npcMiddle.style.zIndex = "0";

        // when surfer catches wave
        let surferOnWaveTop = 30
        let surferOnWaveLeft = 30
        const surferOnWave = document.createElement('div')
        canvasDisplay.appendChild(surferOnWave)
        surferOnWave.style.top = surferOnWaveTop + 'px'
        surferOnWave.style.left = surferOnWaveLeft + 'px'
        surferOnWave.style.zIndex = "1";

        //when npc catches wave
        let nftOnWaveTop = 30
        let nftOnWaveLeft = 30
        const nftOnWave = document.createElement('div')
        canvasDisplay.appendChild(nftOnWave)
        nftOnWave.style.top = nftOnWaveTop + 'px'
        nftOnWave.style.left = nftOnWaveLeft + 'px'

        let npcLatOnWaveTop = 30
        let npcLatOnWaveLeft = 30
        const npcLatOnWave = document.createElement('div')
        canvasDisplay.appendChild(npcLatOnWave)
        npcLatOnWave.style.top = npcLatOnWaveTop + 'px'
        npcLatOnWave.style.left = npcLatOnWaveLeft + 'px'

        let npcMiddleOnWaveTop = 30
        let npcMiddleOnWaveLeft = 30
        const npcMiddleOnWave = document.createElement('div')
        canvasDisplay.appendChild(npcMiddleOnWave)
        npcMiddleOnWave.style.top = npcMiddleOnWaveTop + 'px'
        npcMiddleOnWave.style.left = npcMiddleOnWaveLeft + 'px'


        let npcStaticOnWaveTop = 30
        let npcStaticOnWaveLeft = 30
        const npcStaticOnWave = document.createElement('div')
        canvasDisplay.appendChild(npcStaticOnWave)
        npcStaticOnWave.style.top = npcStaticOnWaveTop + 'px'
        npcStaticOnWave.style.left = npcStaticOnWaveLeft + 'px'

        //npc other direction
        let npcRewerseTop = Math.floor(Math.random() * (300 - 40) + 40)
        let npcRewerseLeft = 800
        const npcRewerse = document.createElement('div')
        if (!isGameOver) npcRewerse.classList.add('npcRewerse')
        canvasDisplay.appendChild(npcRewerse)
        npcRewerse.style.top = npcRewerseTop + 'px'
        npcRewerse.style.left = npcRewerseLeft + 'px'
        console.log('npcRewerse is', npcRewerseTop)
        npcRewerse.style.zIndex = "0";

        //npcLat
        let npcLatTop = Math.floor(Math.random() * (300 - 40) + 40)
        let npcLatLeft = 800
        const npcLat = document.createElement('div')
        if (!isGameOver) npcLat.classList.add('npcLat')
        canvasDisplay.appendChild(npcLat)
        npcLat.style.top = npcLatTop + 'px'
        npcLat.style.left = npcLatLeft + 'px'
        console.log('npcLat is', npcLatTop)
        npcLat.style.zIndex = "0";



        let waveIsTaken = false
        let waveBeginning = waveLeft - 40;
        let waveEnd = waveLeft + 250;

        function moveNpc() {
            let timerIdNpc;
            npcLeft += 1
            npc.style.left = npcLeft + 'px'

            ///npc disappears
            if (npcLeft === 800) {
                clearInterval(timerIdNpc)
                canvasDisplay.removeChild(npc)
            }
        }
        timerIdNpc = setInterval(moveNpc, 7)


        function moveNpcMiddle() {
            let timerIdNpcMiddle;
            npcMiddleLeft += 1
            npcMiddle.style.left = npcMiddleLeft + 'px'

            ///npcMiddle change direction
            if (npcMiddleLeft === 800) {
                clearInterval(timerIdNpcMiddle)
                canvasDisplay.removeChild(npcMiddle)
            }
        }
        timerIdNpcMiddle = setInterval(moveNpcMiddle, 10)



        function moveNpcRewerse() {
            let timerIdNpcRewerse;
            npcRewerseLeft -= 1
            npcRewerse.style.left = npcRewerseLeft + 'px'

            ///npcStatic disappears
            if (npcRewerseLeft === -40) {
                clearInterval(timerIdNpcRewerse)
                canvasDisplay.removeChild(npcRewerse)
            }
        }
        timerIdNpcRewerse = setInterval(moveNpcRewerse, 7)

        function moveNpcLat() {
            let timerIdNpcLat;
            npcLatLeft -= 1
            npcLat.style.left = npcLatLeft + 'px'

            ///npcStatic disappears
            if (npcLatLeft === -40) {
                clearInterval(timerIdNpcLat)
                canvasDisplay.removeChild(npcLat)
            }
        }
        timerIdNpcLat = setInterval(moveNpcLat, 5)




        ///catch waves
        function moveWave() {
            let timerId;
            waveTop += 1
            wave.style.top = waveTop + 'px'

            ///wave disappears
            if (waveTop === 570) {
                clearInterval(timerId)
                canvasDisplay.removeChild(wave)
            }

            // surfer catches waves
            if (circleTop === waveTop && circleLeft > waveLeft && circleLeft < waveLeft + 250 && waveIsTaken == false) {
                document.querySelector('.circle').style.visibility = 'hidden';
                wave.classList.remove('wave')
                circle.classList.remove('circle')
                wave.classList.add('surferOnWave')
                title.innerText = 'You catched a wave!'
                console.log('surfer catched wave')
                waveIsTaken = true
                setTimeout(() => { gameOver() }, 5000);

            }


            if (npcTop <= waveTop + 30 && npcTop >= waveTop + 30 && npcLeft > waveBeginning && npcLeft < waveEnd && waveIsTaken == false) {
                console.log('npc took wave')
                document.querySelector('.npc').style.visibility = 'hidden';
                wave.classList.remove('wave')
                npc.classList.remove('npc')
                wave.classList.add('nftOnWave')
                waveIsTaken = true
            }

            //npcRewerse catches waves
            if (npcRewerseTop <= waveTop + 30 && npcRewerseTop >= waveTop + 30 && npcRewerseLeft > waveLeft - 20 && npcRewerseLeft < waveLeft + 250 && waveIsTaken == false) {
                console.log('npcRewerse took wave')
                document.querySelector('.npcRewerse').style.visibility = 'hidden';
                wave.classList.remove('wave')
                npcRewerse.classList.remove('npcRewerse')
                wave.classList.add('nftOnWave')
                waveIsTaken = true
            }

            //npcMiddle catches waves
            if (npcMiddleTop <= waveTop + 30 && npcMiddleTop >= waveTop + 30 && npcMiddleLeft > waveLeft - 20 && npcMiddleLeft < waveLeft + 250 && waveIsTaken == false) {
                console.log('npcMiddle took wave')
                document.querySelector('.npcMiddle').style.visibility = 'hidden';
                wave.classList.remove('wave')
                npcMiddle.classList.remove('npcMiddle')
                wave.classList.add('npcMiddleOnWave')
                waveIsTaken = true
            }

            // npcLat catches wave
            if (npcLatTop <= waveTop + 30 && npcLatTop >= waveTop + 30 && npcLatLeft > waveLeft - 20 && npcLatLeft < waveLeft + 250 && waveIsTaken == false) {
                console.log('npcLat took wave')
                document.querySelector('.npcLat').style.visibility = 'hidden';
                wave.classList.remove('wave')
                npcLat.classList.remove('npcLat')
                wave.classList.add('npcLatOnWave')
                waveIsTaken = true
            }

            // npcStatic catches waves
            if (npcStatic.y_position === waveTop && npcStatic.x_position > waveLeft && npcStatic.x_position < waveLeft + 250 && waveIsTaken == false) {
                document.querySelector('.npcStatic').style.visibility = 'hidden';
                wave.classList.remove('wave')
                npcStaticRef.remove();
                npcStaticRef.classList.remove('npcStatic');
                wave.classList.add('npcStaticOnWave')
                console.log('npc Static caught wave')
                waveIsTaken = true

            }
            // npcStatic Second catches waves
            if (npcStaticSecond.y_position === waveTop && npcStaticSecond.x_position > waveLeft && npcStaticSecond.x_position < waveLeft + 250 && waveIsTaken == false) {
                document.querySelector('.npcStaticSecond').style.visibility = 'hidden';
                wave.classList.remove('wave')
                npcStaticSecondRef.remove();
                npcStaticSecondRef.classList.remove('npcStaticSecond');
                wave.classList.add('npcStaticOnWave')
                console.log('npc Static Second caught wave')
                waveIsTaken = true

            }

        }
        timerId = setInterval(moveWave, 20)
    }
    let gameId;

    ///npc player static
    let npcStatic = {
        x_position: 250,
        y_position: Math.floor(Math.random() * (300 - 30 + 1) + 30),
    }

    let npcStaticRef = document.querySelector(".npcStatic");

    npcStaticRef.style.left = npcStatic.x_position + 'px'
    npcStaticRef.style.top = npcStatic.y_position + 'px'
    npcStaticRef.style.width = npcStatic.width + 'px'
    npcStaticRef.style.height = npcStatic.height + 'px'

    ///npc player static second
    let npcStaticSecond = {
        x_position: 450,
        y_position: Math.floor(Math.random() * (300 - 30 + 1) + 30),
    }

    let npcStaticSecondRef = document.querySelector(".npcStaticSecond");

    npcStaticSecondRef.style.left = npcStaticSecond.x_position + 'px'
    npcStaticSecondRef.style.top = npcStaticSecond.y_position + 'px'
    npcStaticSecondRef.style.width = npcStaticSecond.width + 'px'
    npcStaticSecondRef.style.height = npcStaticSecond.height + 'px'


    ///GAME OVER AND RESTART
    function gameOver() {
        clearInterval(timerId)
        clearInterval(timerIdNpc)
        clearInterval(timerIdNpcRewerse)
        clearInterval(timerIdNpcMiddle)
        clearInterval(timerIdNpcLat)
        clearInterval(gameId)
        isGameOver = true
        title.innerText = 'Game Over'
        console.log('game is now over')
        document.onkeydown = null
        return startOver();
    }

    function startOver() {
        circleLeft = 0
        circleTop = 0
        document.getElementById("startButton").style.visibility = "visible";
    }
});








