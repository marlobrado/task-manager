import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Tasks from './components/Tasks';
import './index.css';

const App = () => {
    const teste = 'teste';
    console.log(teste);
    return (
        <>
            <Sidebar />
            <Header>Olá</Header>
            <Tasks />
        </>
    );
};

export default App;
