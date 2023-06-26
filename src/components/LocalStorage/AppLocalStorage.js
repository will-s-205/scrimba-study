import './AppLocalStorage.scss';
import LocalStorageCreateRecord from './LocalStorageCreateRecord'
import LocalStorageRemoveRecord from './LocalStorageRemoveRecord';
import LocalStorageUtil from './LocalStorageUtil';

// https://scrimba.com/learn/learnreact/notes-app-sync-notes-with-localstorage-co3c5495b8d7949e81b79988a
export default function App() {

  return (
    <div>
      <h1>localStorage</h1>
      <LocalStorageUtil />
      <LocalStorageCreateRecord />
      <LocalStorageRemoveRecord />
    </div>
  )
}