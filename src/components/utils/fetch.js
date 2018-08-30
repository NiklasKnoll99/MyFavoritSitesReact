export default (url, onJsonLoad) => {
    chayns.showWaitCursor();
    fetch(url).then((response) => {
        if (response.ok)
            return response.json();
    }).then((json) => {
        chayns.hideWaitCursor();
        onJsonLoad(json.Data);
    });
}