export const TaskCard = ({task}) => {
    return(
        <div>
          <h1>{task.id}{task.title}</h1>
          <p>{task.description}</p>
        </div>
    )
}