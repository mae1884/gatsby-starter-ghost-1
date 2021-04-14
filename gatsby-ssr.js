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
    />
  ]);
  setPostBodyComponents([
    
  ]);
};
