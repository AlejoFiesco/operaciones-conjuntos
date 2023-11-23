import './App.css';
import Set from './components/set/Set';
import SetContainer from './components/sets-container/Set-container';
import useController from './hooks/useController';

function App() {

  const {set1ref, set2ref, resultSetRef, operations} = useController();

  return (
    <div className="App">
      <SetContainer operations={operations} set1ref={set1ref} set2ref={set2ref}/>
      <div className='result centered-content'>
        <Set reference={resultSetRef} simbol={'C'} editable={false} large />
      </div>
    </div>
  );
}

export default App;
