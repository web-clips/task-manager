import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

const initialTasks = [
  { id: "1", text: "Сделать API" },
  { id: "2", text: "Создать дизайн" },
  { id: "3", text: "Подключить базу данных" },
];

function DragExample() {
  const [tasks, setTasks] = useState(initialTasks);

  function handleDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(tasks);
    const [movedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, movedItem);

    setTasks(items);
  }

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="tasks">
        {(provided) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            style={{
              width: "300px",
              margin: "40px auto",
            }}
          >
            {tasks.map((task, index) => (
              <Draggable key={task.id} draggableId={task.id} index={index}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    style={{
                      padding: "15px",
                      marginBottom: "10px",
                      background: "#f4f4f4",
                      borderRadius: "8px",
                      border: "1px solid #ddd",
                      ...provided.draggableProps.style,
                    }}
                  >
                    {task.text}
                  </div>
                )}
              </Draggable>
            ))}

            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default DragExample;
