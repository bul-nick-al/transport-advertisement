export const callRest = (url: string) => {
    return fetch(url)
        .then(function(response: any) {
            return response.json();
        })
        .then(function(data: any) {
            return data;
        });
};
