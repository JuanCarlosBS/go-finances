import React from 'react';
import { Feather } from '@expo/vector-icons'

import {
    Container,
    Header,
    UserWrapper,
    UserInfo,
    Photo,
    User,
    UserGreeting,
    UserName,
    Icon,
    HighlightCards
} from './styles';
import { HighlightCard } from '../../components/HighlightCart';

export function Dashboard() {
    return (
        <Container>
            <Header>
                <UserWrapper>
                    <UserInfo>
                        <Photo source={{ uri: 'https://avatars.githubusercontent.com/u/60041640?v=4' }} />
                        <User>
                            <UserGreeting>Olá,</UserGreeting>
                            <UserName>Juan</UserName>
                        </User>
                    </UserInfo>
                    <Icon name="power" />
                </UserWrapper>
            </Header>
            <HighlightCards

            >
                <HighlightCard />
                <HighlightCard />
                <HighlightCard />
                <HighlightCard />
            </HighlightCards>

        </Container>

    )
}