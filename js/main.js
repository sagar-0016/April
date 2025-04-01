//waiting gif
//check on firebase if the value is zero, if zero update to  and simultaneously fetch the photo
//oops
//did you see that
//bye go to work

//if the value is not zero
//ask, do you wan to see it?
//really
//then answer these questions
//hmmm
//let me think
//no

//okay, just one more time
//let me request for the file through your email

//april fool
//jake padhiye aap

aprilFoolImg = "Ap/3ohzdHLZXi2kIew2vm.webp"
momosKhayengi = "Ap/ChatGPT Image Mar 31, 2025, 09_37_19 PM.png"
aalRightShowisOver = "Ap/giphy (1).gif"
showisoverBacktoWork = "Ap/giphy (2).gif"
bunnyOops = "Ap/giphy (3).gif"
keyboardBanging = "Ap/giphy (4).gif"
Byeee = "Ap/giphy (5).gif"
didYouSeeThat = "Ap/giphy (6).gif"
illDoitMyself = "Ap/giphy (6).gif"
waitWhatwasThat = "Ap/YMwRxPhWq5SoIBPvMY.webp"
laughingMinions = "Ap/ZqlvCTNHpqrio.webp"
virtualHug = "Ap/xT9DPldJHzZKtOnEn6.webp"
champ = "nothing"
stat = true

async function getDownloadURL() {
    loc = "PXL_20250331_210748966.MV.jpg"
    url = ""
    await storage.child(loc).getDownloadURL().then(
        (uurl) => {
            url = uurl
            champ = uurl
        });

}

async function updateRead() {
    const docRef = db.collection('chmpCheck').doc('check');

    await docRef.set({
        check: true
    });
}

async function check() {
    async function read() {
        const snapshot = await db.collection('chmpCheck').get();
        snapshot.forEach((doc) => {
            stat = doc.data().check
            console.log(doc.data().check)
            console.log(stat)
            if (!stat) {
                console.log("url fetch")
                getDownloadURL()
            } else {
                champ = "no"
            }
            updateRead()
        });
    }

    if (2 > 1) {
        read()
    }

}

window.onload = () => {
    check()

}

goAndStudy = document.createElement("div")
goAndStudy.innerHTML = "KHELAA KHATTAMMM!"
goAndStudy.className = "text"

imageshow = document.createElement("img")
imageshow.src = virtualHug
imageshow.className = "imageD"
imageshow.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});

mainBox = document.getElementById("main-box")
mainBox.appendChild(imageshow)

async function theShow() {
    await setTimeout(() => {
        imageshow.src = bunnyOops
        setTimeout(() => {
            imageshow.src = didYouSeeThat
            setTimeout(() => {
                imageshow.src = showisoverBacktoWork
            }, 4000)
        }, 2000)
    }, 2000)

}



function showOver2() {
    imageshow.remove()
    mainBox.appendChild(goAndStudy)
    setTimeout(() => {
        goAndStudy.innerHTML = "JAAKE PADHIYEE!"; setTimeout(() => {
            alert("Are Aise Dil Chhota Mat Kijiye, Rukiye!");
            setTimeout(() => {
                window.location.href = "./KiskeSaath.webm";
            }, 3000)
        }, 4000)
    }, 3000)
}

function showOver1() {

}

initialCheckInterval = setInterval(function () {
    if (champ != "nothing") {
        setTimeout(() => {
            if (champ != "no") {
                imageshow.src = champ
                theShow()
            } else {
                // if (localStorage.getItem("champ")) { showOver2() }
                // else { showOver1(); localStorage.setItem("champ", "1") }
                setTimeout(() => {
                    imageshow.src = aprilFoolImg
                    setTimeout(() => {
                        imageshow.src = laughingMinions
                        setTimeout(() => {
                            imageshow.src = momosKhayengi
                            setTimeout(() => {
                                imageshow.src = Byeee
                                setTimeout(() => {
                                    alert(`Momo Khaiye, Mst rahiye!
                                        Byeeeee`)
                                }, 600)
                                setTimeout(() => {
                                    showOver2()
                                }, 1000)
                            }, 1000)
                        }, 3000)
                    }, 2000)
                }, 2000)
            }
        }, 2000)
        clearInterval(initialCheckInterval)
    }
}, 100);


