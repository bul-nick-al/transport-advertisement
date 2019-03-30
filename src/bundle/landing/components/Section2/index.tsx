import * as React from 'react';
import {
    Wrapper,
    TitleDesc,
    DescBlock,
    DeskTitle,
    DescGroup,
    DescPane,
    DescTextBody,
    ContentBlock
} from './styled';

import { adv1, adv2, adv3, adv4 } from '../../assets';

export class SecondSection extends React.PureComponent {
    render() {
        return (
            <Wrapper>
                <ContentBlock>
                    <DescBlock>
                        <TitleDesc>Почему реклама на транспорте?</TitleDesc>
                        <DescGroup>
                            <DescPane>
                                <div>
                                    <img src={adv1}/>
                                </div>
                                {/*<DeskTitle>Заметно сразу</DeskTitle>*/}
                                <DescTextBody>
                                    Делает рынок открытым, что исключает наценки медиабаинговых
                                    агентств, что приводит к значительной экономии рекламных
                                    бюджетов
                                </DescTextBody>
                            </DescPane>
                            <DescPane>
                                <div>
                                    <img src={adv2}/>
                                </div>
                                <DescTextBody>
                                    Сервис экономит время, теперь нет необходимости рассылать
                                    десятки запросов подрядчикам, все актуальные предложения
                                    расположены на сайте
                                </DescTextBody>
                            </DescPane>
                            <DescPane>
                                <div>
                                    <img src={adv3}/>
                                </div>
                                <DescTextBody>
                                    Сервис бесплатный и не взимает платы с рекламодателей
                                </DescTextBody>
                            </DescPane>
                            <DescPane>
                                <div>
                                    <img src={adv4}/>
                                </div>
                                <DescTextBody>
                                    Сервис учитывает все скидки, которые предусмотрены
                                    рекламоносителями
                                </DescTextBody>
                            </DescPane>
                        </DescGroup>
                    </DescBlock>
                </ContentBlock>
            </Wrapper>
        );
    }
}
