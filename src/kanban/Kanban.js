import React, { useEffect, useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
// import uuid from "uuid/v4";
import styled from "styled-components";
// import { generateRandomFontColor, generateRandomHexColor } from "../task/DisplayTask";
import Avatar from "@material-ui/core/Avatar";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { TaskModalComp } from "../Sidebar/Mod";
import axios from "axios";
// import Header from "../../components/Header";



const headerlinks = [
  { name: "Tasks", link: "/tasks" },
  { name: "Kanban", link: "/kanban" },
  { name: "Activity", link: "/activity" },
  { name: "Calendar", link: "/calendar" },
  { name: "Files", link: "/file" },
];

const itemsFromBackend = [
  {
    id: "1",
    title: "E-mail after registration so that I can confirm my",
    avatarUrl: "",
    tag: "Development",
  },
  {
    id: "2",
    title: "2 E-mail after registration so that I can confirm my",
    avatarUrl: "",
    tag: "Development",
  },
  {
    id: "3",
    title: "3E-mail after registration so that I can confirm my",
    avatarUrl: "",
    tag: "Development",
  },
  {
    id: "4",
    title: "4E-mail after registration so that I can confirm my",
    avatarUrl:
      "https://res.cloudinary.com/projectmanagementgroupb/image/upload/v1634869516/vjjkzu5pxvy3n0sylgua.jpg",
    tag: "Development",
  },
];

const onDragEnd = (result, columns, setColumns) => {
  if (!result.destination) return;
  const { source, destination } = result;
  console.log(result, "result")
  if (source.droppableId !== destination.droppableId) {
    console.log(source, "source")
    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];
    const sourceItems = [...sourceColumn.items];
    console.log(sourceItems, "source items")
    const destItems = [...destColumn.items];
    const [removed] = sourceItems.splice(source.index, 1);
    console.log(removed, 'removed')
    destItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...sourceColumn,
        items: sourceItems,
      },
      [destination.droppableId]: {
        ...destColumn,
        items: destItems,
      },
    });
    console.log(destination, "destination")
    const token = localStorage.getItem("token");
    axios
      .request({
        url: `https://jaraaa.herokuapp.com/profile/${removed.id}`,
        method: "put",
        headers: { authorization: token },
        data: {status: destination.droppableId},
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data, "status updated");
      })
      .catch((err) => {
        console.log(err.response.data);
      });

  } else {
    const column = columns[source.droppableId];
    const copiedItems = [...column.items];
    const [removed] = copiedItems.splice(source.index, 1);
    copiedItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...column,
        items: copiedItems,
      },
    });
  }
};

function KanbanComp({collaborators, project}) {

  const [taskData, setTaskData] = useState([])

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .request({
        url: `https://jaraaa.herokuapp.com/tasks/${project}`,
        method: "get",
        headers: { authorization: token },
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data, "i am data haha");
        const data = res.data;
        setTaskData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  },[])

  console.log(taskData, "project tasks")

  const backlogTasks = taskData.filter(task => task.status === "backlog")
  const todoTasks = taskData.filter(task => task.status === "todo")
  const doneTasks = taskData.filter(task => task.status === "done")

  console.log(backlogTasks, "backlog")

  const columnsFromBackend = {
    ["backlog"]: {
      name: "Backlog",
      items: backlogTasks,
    },
    ["todo"]: {
      name: "To Do",
      items: todoTasks,
    },
    ["done"]: {
      name: "Done",
      items: doneTasks,
    },
  };

  console.log(columnsFromBackend, "columns from backend")

  console.log(collaborators, "in kanban")
  const [columns, setColumns] = useState(columnsFromBackend);
  const [taskModal, setTaskModal] = useState(false);
  const [closeModal, setCloseModal] = useState(false);

  useEffect(() => {
    setColumns(columnsFromBackend)
  }, [taskData])

  console.log(columns, "columns")
function addTaskModal() {
  setTaskModal(true);
}

function handleCloseModal() {
  setTaskModal(false)
}
  return (
    <>
      {/* <Header signOut="signOut" header="PROJECT PRIMUS" headerlinks={headerlinks} /> */}
      <KanbanSection>
        <DragDropContext
          onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
        >
          {Object.entries(columns).map(([columnId, column], index) => {
            return (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center"
                }}
                key={columnId}
              >
                <Kanbans>
                  <Droppable droppableId={columnId} key={columnId}>
                    {(provided, snapshot) => {
                      return (
                        <KanbanColumn
                          {...provided.droppableProps}
                          ref={provided.innerRef}
                          style={{
                            background: snapshot.isDraggingOver
                              ? "#F7F6F3"
                              : "white",
                            borderRadius: "10px",
                            width: 250,
                            minHeight: 400,
                          }}
                        >
                          <KanbanHeaderContainer>
                            <KanbanHeader>{column.name} </KanbanHeader>
                            <AddTaskDiv  onClick={addTaskModal} className="addBackLog">+Add Task</AddTaskDiv>
                          </KanbanHeaderContainer>
                          {column.items.map((item, index) => {
                            return (
                              <Draggable
                                key={item.id}
                                draggableId={item.id}
                                index={index}
                              >
                                {(provided, snapshot) => {
                                  return (
                                    <KanbanCard
                                      ref={provided.innerRef}
                                      {...provided.draggableProps}
                                      {...provided.dragHandleProps}
                                      style={{
                                        userSelect: "none",

                                        backgroundColor: snapshot.isDragging
                                          ? "#CEF9C6"
                                          : "#F7F6F3",
                                        overflowY: "scroll",

                                        ...provided.draggableProps.style,
                                      }}
                                    >
                                      <h5
                                        style={{
                                          display: "inline-block",
                                          marginLeft: "5px",
                                          lineHeight: "24px",
                                          marginBottom: "7px",
                                        }}
                                      >
                                        {item.title}
                                      </h5>
                                      <div
                                        style={{
                                          display: "flex",
                                          marginLeft: "5px",
                                          justifyContent: "flex-start",
                                          alignItems: "center",
                                        }}
                                      >
                                        <div>
                                          {item.AssignedUserAvatar ? (
                                            <Avatar src={item.AssignedUserAvatar} />
                                          ) : (
                                            <AccountCircleIcon />
                                          )}
                                          {/* <AccountCircleIcon/> */}
                                        </div>
                                        <TagContainer>{item.AssaignedUserName}</TagContainer>
                                      </div>
                                    </KanbanCard>
                                  );
                                }}
                              </Draggable>
                            );
                          })}
                          {provided.placeholder}
                        </KanbanColumn>
                      );
                    }}
                  </Droppable>
                </Kanbans>
              </div>
            );
          })}
        </DragDropContext>
      </KanbanSection>
      {taskModal && (
     <TaskModalComp
      taskModal={taskModal} setTaskModal={setTaskModal}
      closeModal={handleCloseModal}
      collaborators = {collaborators}
      project = {project}
     />
   )}
    </>
  );
}

export default KanbanComp;

const KanbanSection = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  width: 80vw;
`;
const Kanbans = styled.div`
  margin: 10px;
`;

const KanbanHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`;
const KanbanHeader = styled.div`
  font-weight: bold;
  font-size: 18px;
  line-height: 38px;
  color: #131313;
`;
const AddTaskDiv = styled.div`
  background-color: #cef9c6;
  border-radius: 20px;
  font-weight: bold;
  font-size: 14px;
  line-height: 21px;
  cursor: pointer;
  width: 100px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const KanbanColumn = styled.div`
  background-color: white;
  padding: 30px;
  height: fit-content;
  margin-top: 5px;
  margin-bottom: 10px;
  overflow-y: auto;
`;
const KanbanCard = styled.div`
  margin: 20px 0;
  padding: 8px 10px;
  border-radius: 20px;
`;
const TaskCardGroupContainer = styled.div`
  background-color: white;
  margin-bottom: 20px;
`;
const TaskCardGroupHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const TaskCardGroupBody = styled.div`
  display: flex;
  flex-direction: column;
`;

const TaskCardCheckBox = styled.input`
  display: inline-block;
  border: 1px solid #000000;
  margin-top: 10px;
`;
const TagContainer = styled.div`
  font-weight: bold;
  line-height: 20px;
  font-family: Heebo;
  padding: 4px 10px;
  line-spacing: 30px;
  font-size: 10px;
  border-radius: 20px;
  margin-left: 10px;
  text-transform: uppercase;
  font-weight: bold;
  background-color: #f5f0ff;
  color: #764ced;
`;
