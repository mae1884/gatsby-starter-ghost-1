/* eslint-disable import/prefer-default-export */
import React from 'react';

export const onRenderBody = ({ setPostBodyComponents, setHeadComponents }) => {
  setHeadComponents([
    <link
        key="algolia-style"
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@algolia/algoliasearch-netlify-frontend@1/dist/algoliasearchNetlify.css"
    />,
    <script
        key="algolia-library"
        type="text/javascript"
        src="https://cdn.jsdelivr.net/npm/@algolia/algoliasearch-netlify-frontend@1/dist/algoliasearchNetlify.js"
    />,
    <script
        key="algolia-script"
        type="text/javascript"
        dangerouslySetInnerHTML={{
            __html: "algoliasearchNetlify({\
                appId: 'LKEU65MSS7',\
                apiKey: '<YOUR_ALGOLIA_SEARCH_API_KEY>',\
                siteId: 'edd374d0-3941-4997-8ee1-216ae36e084c',\
                branch: 'master',\
                selector: 'div#search-box',\
            });"
        }}
    />
  ]);
  setPostBodyComponents([
    
  ]);
};
