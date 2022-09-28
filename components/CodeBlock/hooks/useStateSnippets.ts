import { snippets } from 'data/snippets';
import { useState, useEffect } from 'react';

import { ItemType, RequestData, RequestType } from '../types';

export type StateSnippetProps = {
    type: any;
    item: any;
}

export type StateSnippetTypes = {
    language: string;
    codeSnippet: string;
    updateSnippet: any;
}

const useStateSnippet = ({ type, item }: StateSnippetProps): StateSnippetTypes => {
    const [codeSnippet, setCodeSnippet] = useState<string>("");
    const [language, setLanguage] = useState<string>("jsx");

    const updateSnippet = (snippet, lang) => {
        setCodeSnippet(snippet);
        setLanguage(lang);
    }

    useEffect(() => {
        if (type === 'tab') {
            updateSnippet(snippets[(item as ItemType).snippet[0]], (item as ItemType).lang[0]);
        }
        if (type === 'request') {
            const { requestData } = item as RequestData;
            updateSnippet(snippets[(requestData as RequestType).snippet[0]], (requestData as RequestType).lang[0])
        }
        if (type === 'response') {
            updateSnippet(snippets[(item as ItemType).snippet[0]], 'json');
        }
    }, []);

    return { language, codeSnippet, updateSnippet };
}

export default useStateSnippet;