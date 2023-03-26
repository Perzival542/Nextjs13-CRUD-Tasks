import { useRouter } from "next/navigation";
import { useTasks} from '@/context/TaskContext';

export const TaskCard = ({task}) => {
    const router = useRouter();
      const {deleteTasks} = useTasks();

    return(
        <div style={{background: "#202020", color: "white"}}
          onClick={() => router.push(`/edit/${task.id}`)}
        >
          <h1>{task.title}</h1>
          <button 
          onClick={(e) => {
            e.stopPropagation();
            const accept = window.confirm("Are you sure ?");
            if(accept) deleteTasks(task.id);
          }}
          >Eliminar</button>
          <p>{task.description}</p>
        </div>
    );
};