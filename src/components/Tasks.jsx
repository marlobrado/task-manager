import Button from './Button';
import AddIcon from '../assets/icons/add.svg?react';
import TrashIcon from '../assets/icons/trash.svg?react';

const Tasks = () => {
    return (
        <div className="w-full px-9 py-16">
            <div className="flex justify-between">
                <div>
                    <span className="text-xs font-semibold text-[#00AD85]">
                        Minhas Tarefas
                    </span>
                    <h1 className="text-xl font-semibold">
                        Minhas Tarefas
                    </h1>
                </div>
                <div className="flex items-center gap-3">
                    <Button>
                        Nova Tarefa <TrashIcon />
                    </Button>
                    <Button variant="primary">
                        Limpar Tarefa <AddIcon />
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Tasks;
