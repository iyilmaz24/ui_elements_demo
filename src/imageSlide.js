/* eslint-disable import/prefer-default-export */
/* eslint-disable arrow-body-style */


function SlideBrain() 
{
    this.index = 0;
    this.image1 = 0;
    this.image2 = 1;
    this.image3 = 2;

    const forward = () => {
        this.index += 1;
        this.image1 = this.index % 8;
        this.image2 = (this.index + 1) % 8;
        this.image3 = (this.index + 2) % 8;
    };

    const backward = () => {
    // if this.index is greater than zero: subtract one, otherwise set it equal to zero
        this.index = this.index > 0 ? this.index - 1 : 0;
        this.image1 = this.index % 8;
        this.image2 = (this.index + 1) % 8;
        this.image3 = (this.index + 2) % 8;
    };

    const returnIndices = () => {

        return [this.image1, this.image2, this.image3]
    };


    return {forward, backward, returnIndices};

};


const enableSlideControl = () => {

    const slideController = new SlideBrain();

    const display0 = document.getElementById("sliderImg1");
    const display1 = document.getElementById("sliderImg2");
    const display2 = document.getElementById("sliderImg3");
    
    const sliderBack = document.getElementById("slider-back");
    const sliderForward = document.getElementById("slider-forward");

    
    sliderBack.addEventListener("click", () => {
        slideController.backward();
        const indicies = slideController.returnIndices();
        display0.classList = `image${indicies[0]} displayBoxes`;
        display1.classList = `image${indicies[1]} displayBoxes`;
        display2.classList = `image${indicies[2]} displayBoxes`;
    });

    sliderForward.addEventListener("click", () => {
        slideController.forward();
        const indicies = slideController.returnIndices();
        display0.classList = `image${indicies[0]} displayBoxes`;
        display1.classList = `image${indicies[1]} displayBoxes`;
        display2.classList = `image${indicies[2]} displayBoxes`;
    });

}

export { enableSlideControl };
