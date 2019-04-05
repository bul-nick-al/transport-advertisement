import * as React from 'react';
import {
    SlideImg,
    SliderWrapper,
    SliderDescription,
    SliderHeader,
    SlideContainer,
    Togl,
} from './styled';

interface SliderProps {
    slides: Array<object>;
}

export default class Slider extends React.Component<any, any> {
    slideData: any;
    countImg: number;
    currentIndex: number = 0;
    sliderState: any = ['leftSlide', 'centerSlide', 'rightSlide'];
    currentTittle: string = '';
    currentDescription: string = '';
    togl: any;
    fromRight: boolean;
    constructor(props: any) {
        super(props);
        this.countImg = this.props.slides.length;
        this.init();
    }

    init() {
        this.currentTittle = this.props.slides[0].title;
        this.currentDescription = this.props.slides[0].desc;
        this.slideData = this.props.slides.map((value, index) => {
            let slide = {
                index: index,
                src: value.source,
                title: value.title,
                desc: value.desc,
                state:
                    index === this.currentIndex
                        ? 'centerSlide'
                        : index === 1
                        ? 'rightSlide'
                        : index === this.countImg - 1
                        ? 'leftSlide'
                        : this.countImg > 3 && index === this.countImg - 2
                        ? 'lefthidden'
                        : null,
            };
            return slide;
        });
    }
    setSlide(i: number) {
        this.fromRight = this.currentIndex > i;
        if (this.currentIndex === this.props.slides.length - 1 && i === 0) {
            this.fromRight = false;
        } else if (
            this.currentIndex === 0 &&
            i === this.props.slides.length - 1
        ) {
            this.fromRight = true;
        }
        // if (i === 0 ) {
        //   this.fromRight = false;
        // }
        this.currentIndex = i;
        this.currentTittle = this.props.slides[i].title;
        this.currentDescription = this.props.slides[i].desc;
        let rightIndex = i === this.countImg - 1 ? 0 : i + 1;
        let leftIndex = i === 0 ? this.countImg - 1 : i - 1;
        let lefthiddenIndex =
            i === 0 ? this.countImg - 2 : i === 1 ? this.countImg - 1 : i - 2;
        this.slideData = this.props.slides.map((value, index) => {
            let slide = {
                index: index,
                src: value.source,
                title: value.title,
                desc: value.desc,
                state:
                    index === this.currentIndex
                        ? 'centerSlide z3' +
                          (this.fromRight ? ' fromLeft' : ' fromRight')
                        : index === rightIndex
                        ? 'rightSlide' + (this.fromRight ? ' z2' : ' z1')
                        : index === leftIndex
                        ? 'leftSlide' + (this.fromRight ? ' z1' : ' z2')
                        : this.countImg > 3 && index === lefthiddenIndex
                        ? 'lefthidden'
                        : null,
            };
            return slide;
        });
        this.setState({ changed: true });
    }
    render() {
        let Component = this.slideData.map((value, index) => {
            if (value.state) {
                return (
                    <div
                        key={index}
                        className={`slideForm ${value.state}`}
                        onClick={() => this.setSlide(index)}
                    >
                        <img src={value.src} />
                    </div>
                );
            }
        });
        this.togl = this.props.slides.map((value, index) => {
            return (
                <Togl
                    key={index}
                    active={index === this.currentIndex}
                    onClick={() => this.setSlide(index)}
                >
                    <hr />
                </Togl>
            );
        });

        return (
            <SliderWrapper {...this.props}>
                <SliderHeader>{this.currentTittle}</SliderHeader>
                <SlideContainer>{Component}</SlideContainer>
                <SliderDescription>{this.currentDescription}</SliderDescription>
                <div>{this.togl}</div>
            </SliderWrapper>
        );
    }
}
