import * as React from 'react';
import {
    Wrapper,
    StyledSlider,
    TitleDesc,
    DescBlock,
    DescGroup,
    DescPane,
    DescTextBody,
    ContentBlock,
} from './styled';

import { adv1, adv2, adv3, adv4 } from '../../assets';

const slides = [
    {
        // source: slide1,
        title: 'Реклама в лифтах',
        desc: 'Выберите наилучшее предложение',
    },
    {
        // source: slide2,
        title: 'Итоговый медиаплан',
        desc: 'Оцените стоимость всей рекламной компании',
    },
    {
        // source: slide3,
        title: 'Карта покрытия рекламой',
        desc: 'Выберите район покрытия рекламой для вашей целевой аудитории',
    },
    {
        // source: slide4,
        title: 'Итоговый медиаплан2',
        desc: 'Оцените стоимость всей рекламной компании2',
    },
];

export class FourthSection extends React.PureComponent {
    render() {
        return (
            <Wrapper>
                <ContentBlock>
                    <DescBlock>
                        <TitleDesc>
                            ЧТО ДАЕТ MEDIAPULT РЕКЛАМОДАТЕЛЯМ?
                        </TitleDesc>
                        <DescGroup>
                            <DescPane>
                                <div>
                                    <img src={adv1} />
                                </div>
                                <DescTextBody>
                                    Делает рынок открытым, что исключает наценки
                                    медиабаинговых агентств, что приводит к
                                    значительной экономии рекламных бюджетов
                                </DescTextBody>
                            </DescPane>
                            <DescPane>
                                <div>
                                    <img src={adv2} />
                                </div>
                                <DescTextBody>
                                    Сервис экономит время, теперь нет
                                    необходимости рассылать десятки запросов
                                    подрядчикам, все актуальные предложения
                                    расположены на сайте
                                </DescTextBody>
                            </DescPane>
                            <DescPane>
                                <div>
                                    <img src={adv3} />
                                </div>
                                <DescTextBody>
                                    Сервис бесплатный и не взимает платы с
                                    рекламодателей
                                </DescTextBody>
                            </DescPane>
                            <DescPane>
                                <div>
                                    <img src={adv4} />
                                </div>
                                <DescTextBody>
                                    Сервис учитывает все скидки, которые
                                    предусмотрены рекламоносителями
                                </DescTextBody>
                            </DescPane>
                        </DescGroup>
                    </DescBlock>
                </ContentBlock>
            </Wrapper>
        );
    }
}
