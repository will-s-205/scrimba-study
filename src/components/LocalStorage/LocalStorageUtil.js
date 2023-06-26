
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
    // CONSOLE FUNCTIONS ///////////////////////////////////////////////////////////

    return (
        <div className="buttonRow">
            <button onClick={clearLocalStorage}>clearLocalStorage</button>
            <button onClick={localStorageContent}>localStorageContent</button>
            <button onClick={localStorageContentSize}>localStorageContentSize</button>
            <button onClick={cleanConsole}>cleanConsole</button>
        </div>
    )
}