
        const slide = document.querySelectorAll(".slideshow");
        const circ = document.querySelectorAll(".circle")
        const leftarrow = document.getElementById("left-arrow");
        const rightarrow = document.getElementById("right-arrow");

        document.addEventListener("keyup", function(e) {
                
           
                        if (e.keyCode == 37) {
                            console.log("hi")
                            prevslide();
                            slidechange()
                            timerreset();
                            circleupdate()
                        }
                         else if (e.keyCode == 39){

                             console.log("tu bhi")
                             nextslide();
                             slidechange
                             timerreset();
                             circleupdate()
                            }
            })
                         

        





        var currentslide = 0;

        var timer = setInterval(slideshow, 5000);
        slideshow();

        leftarrow.addEventListener("click", () => {
            prevslide();
            timerreset();
            circleupdate()
        })

        rightarrow.addEventListener("click", () => {
            nextslide();
            timerreset();
            circleupdate()

        })


        function prevslide() {
            if (currentslide == 0) {
                currentslide = slide.length - 1;

            }
            else {
                currentslide--;
            }
            slidechange();
        }




        function nextslide() {
            if (currentslide == slide.length - 1) {
                currentslide = 0;
            }
            else {
                currentslide++;
            }
            slidechange();
        }

        function slidechange() {
            for (let i = 0; i < slide.length; i++) {
                slide[i].classList.remove('visibility');

            }
            slide[currentslide].classList.add('visibility');
        }

        function circleupdate() {
            for (let i = 0; i < slide.length; i++) {

                circ[i].classList.remove('dot')
            }
            circ[currentslide].classList.add('dot')
        }

        function timerreset() {
            clearInterval(timer);
            timer = setInterval(slideshow, 5000);

        }

        function slideshow() {
            nextslide();
            timerreset();
            circleupdate()
        }



        function circleIndex(n) {
            currentslide = n;

            nextslide()
            circleupdate()
        }
