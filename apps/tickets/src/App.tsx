import { type SanityConfig } from '@sanity/sdk';
import { SanityApp } from '@sanity/sdk-react';
import { Flex, Spinner } from '@sanity/ui';
import { SanityUI } from './SanityUI';
import { Events } from './Events';

function App() {
    // apps can access many different projects or other sources of data
    const sanityConfigs: SanityConfig[] = [
        {
            projectId: 'hst5fbfk',
            dataset: 'production',
        },
    ];

    function Loading() {
        return (
            <Flex justify="center" align="center" width="100vw" height="fill">
                <Spinner />
            </Flex>
        );
    }

    return (
        <SanityUI>
            <SanityApp config={sanityConfigs} fallback={<Loading />}>
                <Events />
            </SanityApp>
        </SanityUI>
    );
}

export default App;
