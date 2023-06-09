import { ImplementArticle } from "@src/components/core/interfaces";

const headersConfig = () => {
    return new Headers({
        'Content-Type': 'application/json',
    })
}

const url: string = 'https://dev.codeleap.co.uk/careers/';

export const listArticles = async (limit: number) => {
    const data = await fetch(url + `?limit=${limit}`, {
        method: 'get',
        headers: headersConfig()
    });

    return data.json();

}

export const storeArticle = async (formData: ImplementArticle) => {
    const data = await fetch(url, {
        method: 'post',
        headers: headersConfig(),
        body: JSON.stringify(formData)
    });

    return data.json();
}

export const editArticle = async (formData: ImplementArticle, articleId: number) => {
    const data = await fetch(`${url}${articleId}/`, {
        method: 'put',
        headers: headersConfig(),
        body: JSON.stringify(formData)
    });

    return data.json();
}

export const deleteArticle = async (articleId: number) => {
    const data = await fetch(`${url}${articleId}/`, {
        method: 'delete',
        headers: headersConfig()
    });

    return data.json();
};


