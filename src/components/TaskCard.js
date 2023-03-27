import { useRouter } from "next/navigation";
import { useTasks} from '@/context/TaskContext';
import { toast } from "react-hot-toast";

export const TaskCard = ({task}) => {
    const router = useRouter();
      const {deleteTasks} = useTasks();

    return(
        <div
          className="bg-gray-700 hover:bg-slate-600 cursor-pointer px-20 py-5 m-2"
          onClick={() => router.push(`/edit/${task.id}`)}
        >
          <div className="flex justify-between">
            <h1>{task.title}</h1>
            <button
            className="bg-red-700 hover:bg-red-600 px-3 py-1 inline-flex items-center"
            onClick={(e) => {
              e.stopPropagation();
              const accept = window.confirm("Are you sure ?");
              if(accept) {
                deleteTasks(task.id);
                toast.success('task deleted successfully');
              }
            }}
            >
              Delete
            </button>
          </div>
          <p className="text-gray-300">{task.description}</p>
          <span className="text-gray-400 text-xs">{task.id}</span>
        </div>
    );
};