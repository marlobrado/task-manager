import Header from './components/Header';
import Tasks from './components/Tasks';
import './index.css';

const App = () => {
    const teste = 'teste';
    console.log(teste);
    return (
        <>
            <Header>Olá</Header>
            <Tasks />
        </>
    );
};

export default App;
