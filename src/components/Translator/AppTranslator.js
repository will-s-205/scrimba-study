// https://scrimba.com/learn/learnreact/notes-app-sync-notes-with-localstorage-co3c5495b8d7949e81b79988a
import './AppTranslator.scss';
import AppTranslatorButtonRow from './AppTranslatorButtonRow';
import AppTranslatorCreateNewButton from './AppTranslatorCreateNewButton';

export default function AppTranslator() {

    return (
        <div>
            <br></br>
            <h1>AppTranslator</h1>
            {/* <AppTranslatorButtonRow /> */}
            <AppTranslatorCreateNewButton />
        </div>
    )
}