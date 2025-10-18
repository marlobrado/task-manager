import Sidebar from './components/Sidebar';
import Tasks from './components/Tasks';
import './index.css';

const App = () => {
    const teste = 'teste';
    console.log(teste);
    return (
        <div className="flex gap-9">
            <Sidebar />

            <Tasks />
        </div>
    );
};

export default App;
