import * as React from 'react';
import {
    Wrapper,
    TitleDesc,
    DescBlock,
    DeskTitle,
    DescGroup,
    DescPane,
    DescTextBody,
    ContentBlock,
} from './styled';

import { one, two, three, four, five } from '../../assets';

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
                                    <img src={one} alt={'Заметно сразу'} />
                                </div>
                                <DescTextBody>
                                    <DeskTitle>Заметно сразу</DeskTitle>
                                    Делает рынок открытым, что исключает наценки
                                    медиабаинговых агентств, что приводит к
                                    значительной экономии рекламных бюджетов
                                </DescTextBody>
                            </DescPane>
                            <DescPane>
                                <div>
                                    <img src={two} />
                                </div>
                                <DescTextBody>
                                    <DeskTitle>
                                        Опыт, проверенный многими
                                    </DeskTitle>
                                    Сервис экономит время, теперь нет
                                    необходимости рассылать десятки запросов
                                    подрядчикам, все актуальные предложения
                                    расположены на сайте
                                </DescTextBody>
                            </DescPane>
                            <DescPane>
                                <div>
                                    <img src={three} />
                                </div>
                                <DescTextBody>
                                    <DeskTitle>Эффективная реклама</DeskTitle>
                                    Сервис бесплатный и не взимает платы с
                                    рекламодателей
                                </DescTextBody>
                            </DescPane>
                            <DescPane>
                                <div>
                                    <img src={four} />
                                </div>
                                <DescTextBody>
                                    <DeskTitle>Видят все</DeskTitle>
                                    Сервис учитывает все скидки, которые
                                    предусмотрены рекламоносителями
                                </DescTextBody>
                            </DescPane>
                            <DescPane>
                                <div>
                                    <img src={five} />
                                </div>
                                <DescTextBody>
                                    <DeskTitle>Легко запомнить</DeskTitle>
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
