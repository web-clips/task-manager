import { Plus } from "lucide-react"

const AddTask = () => {
    return (
        <>
            <div className="header__addtask">
                <button>
                    <Plus size={14}/>
                    Add Task
                </button>
            </div>
        </>
    )
}

export default AddTask;