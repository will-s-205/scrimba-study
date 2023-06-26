
export default function LocalStorageUtil() {

    // CONSOLE FUNCTIONS ///////////////////////////////////////////////////////////
    function clearLocalStorage(event) {
        event.preventDefault()
        localStorage.clear()
        console.log("localStorage cleared")
    }

    function localStorageContent(event) {
        event.preventDefault();
        console.log(localStorage)
    }

    function localStorageContentSize(event) {
        event.preventDefault();
        console.log(localStorage.length)
    }

    function cleanConsole(event) {
        event.preventDefault();
        console.clear()
    }

    // https://developer.mozilla.org/en-US/docs/Web/API/Storage/key
    // iterates over the local storage keys:
    function forEachKey() {
        for (let i = 0; i < localStorage.length; i++) {
            console.log(localStorage.key(i));
        }
    }
    
    // https://developer.mozilla.org/en-US/docs/Web/API/Storage/key
    // iterates over the local storage keys and gets the value set for each key:
    function getItemsValues() {
        for (let i = 0; i < localStorage.length; i++) {
            console.log(localStorage.getItem(localStorage.key(i)));
        }
    }

    // CONSOLE FUNCTIONS ///////////////////////////////////////////////////////////
    
    return (
        <div className="buttonRow">
            <button onClick={clearLocalStorage}>clearLocalStorage</button>
            <button onClick={localStorageContent}>localStorageContent</button>
            <button onClick={localStorageContentSize}>localStorageContentSize</button>
            <button onClick={cleanConsole}>cleanConsole</button>
            <button onClick={forEachKey}>forEachKey</button>
            <button onClick={getItemsValues}>getItemsValues</button>
        </div>
    )
}