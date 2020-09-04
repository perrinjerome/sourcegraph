import React from 'react'
import { EnterpriseHomePanels } from './EnterpriseHomePanels'
import { storiesOf } from '@storybook/react'
import { WebStory } from '../../components/WebStory'

const { add } = storiesOf('web/search/panels/EnterpriseHomePanels', module).addParameters({
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/sPRyyv3nt5h0284nqEuAXE/12192-Sourcegraph-server-page-v1?node-id=255%3A3',
    },
    chromatic: { viewports: [480, 1200] },
})

add('Panels', () => <WebStory>{() => <EnterpriseHomePanels authenticatedUser={null} />}</WebStory>)
