import { useState, useMemo } from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  type ColumnDef,
} from "@tanstack/react-table";

const Table = () => {
  const [data, setData] = useState([
    {
      id: 1,
      job: "Launch social media campaign for pro...",
      submitted :"3-1-2024",
      status: "In-process",
      submitter: "Aisha Patel",
      url: "www.aishapatel.com",
      assigned: "Sophie Choudhury",
      priority: "High",
      dueDate: "30-01-2024",
      value: "8,800,000",
    },
    {
      id: 2,
      job: "Update press kit for company redesign",
      submitted :"30-1-2024",
      status: "Need to start",
      submitter: "Irfan Khan",
      url: "www.irfankhanportfolio.com",
      assigned: "Tejas Pandey",
      priority: "High",
      dueDate: "30-10-2024",
      value: "3,500,000",
    },
    {
      id: 3,
      job: "Finalize user testing feedback for app...",
      submitted :"30-1-2024",
      status: "In-process",
      submitter: "Mark Johnson",
      url: "www.markjohnsondesigns.com",
      assigned: "Rachel Lee",
      priority: "Low",
      dueDate: "15-01-2025",
      value: "5,800,000",
    },
    {
      id: 4,
      job: "Design new features for the website",
      submitted :"30-1-2024",
      status: "In-process",
      submitter: "Emily Green",
      url: "www.emilygreenart.com",
      assigned: "Tom Wright",
      priority: "Low",
      dueDate: "30-01-2025",
      value: "2,800,000",
    },
    {
      id: 5,
      job: "Prepare financial report for Q4",
      submitted :"30-1-2024",
      status: "Complete",
      submitter: "Jessica Brown",
      url: "www.jessicabrowncreative.com",
      assigned: "Kevin Smith",
      priority: "Low",
      dueDate: "10-01-2025",
      value: "2,800,000",
    },
   
    ...Array.from({ length: 17 }, (_, i) => ({
      id: i + 8,
      job: "",
      submitted :"",
      status: "",
      submitter: "",
      url: "",
      assigned: "",
      priority: "",
      dueDate: "",
      value: "",
    })),
  ]);

  const [editingCell, setEditingCell] = useState<{rowId: number, columnId: string} | null>(null);
  const [editValue, setEditValue] = useState("");

  const handleCellClick = (rowId: number, columnId: string, value: string) => {
    setEditingCell({ rowId, columnId });
    setEditValue(value);
  };

  const handleCellChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setEditValue(e.target.value);
  };

  const handleCellBlur = () => {
    if (editingCell) {
      const { rowId, columnId } = editingCell;
      setData(data.map(row => 
        row.id === rowId ? { ...row, [columnId]: editValue } : row
      ));
      setEditingCell(null);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleCellBlur();
    }
  };

  const columns = useMemo<ColumnDef<any, any>[]>(
    () => [
      
      {
        header: "Job Request",
        accessorKey: "job",
        cell: (info) => {
          const isEditing = editingCell?.rowId === info.row.original.id && 
                           editingCell?.columnId === "job";
          
          return (
            <div className="flex items-center">
              <span className="mr-2">{info.row.index + 1}.</span>
              {isEditing ? (
                <input
                  type="text"
                  value={editValue}
                  onChange={handleCellChange}
                  onBlur={handleCellBlur}
                  onKeyDown={handleKeyDown}
                  autoFocus
                  className="w-[256px] p-2 border rounded"
                />
              ) : (
                <div 
                  onClick={() => handleCellClick(info.row.original.id, "job", info.getValue())}
                  className={`min-h-[24px] w-full cursor-pointer ${info.getValue() ? "" : ""}`}
                >
                  {info.getValue()}
                </div>
              )}
            </div>
          );
        },
      },

      

           {
        header: "Submitted",
        accessorKey: "submitted",
        cell: (info) => {
          const isEditing = editingCell?.rowId === info.row.original.id && 
                           editingCell?.columnId === "submitted";
          
          return isEditing ? (
            <input
              type="date"
              value={editValue}
              onChange={handleCellChange}
              onBlur={handleCellBlur}
              onKeyDown={handleKeyDown}
              autoFocus
              className="w-full px-1 border rounded"
            />
          ) : (
            <div 
              onClick={() => handleCellClick(info.row.original.id, "submitted", info.getValue())}
              className="min-h-[24px] w-full cursor-pointer"
            >
              {info.getValue()}
            </div>
          );
        },
      },
      

      {
        header: "Status",
        accessorKey: "status",
        cell: (info) => {
          const status = info.getValue();
          let bgColor = "";
          let textColor = "";
          
          if (status === "In-process") {
            bgColor = "bg-yellow-200";
            textColor = "text-yellow-800";
          } else if (status === "Need to start") {
            bgColor = "bg-green-200";
            textColor = "text-green-800";
          } else if (status === "Complete") {
            bgColor = "bg-green-300";
            textColor = "text-green-900";
          } else if (status === "Blocked") {
            bgColor = "bg-red-200";
            textColor = "text-red-800";
          }

          const isEditing = editingCell?.rowId === info.row.original.id && 
                           editingCell?.columnId === "status";
          
          return (
            <div 
              className={`px-2 py-1 rounded-full text-xs min-w-[100px] ${bgColor} ${textColor} ${isEditing ? '' : 'cursor-pointer'}`}
              onClick={() => !isEditing && handleCellClick(info.row.original.id, "status", info.getValue())}
            >
              {isEditing ? (
                <select
                  value={editValue}
                  onChange={handleCellChange}
                  onBlur={handleCellBlur}
                  onKeyDown={handleKeyDown}
                  autoFocus
                  className="w-full bg-transparent outline-none"
                >
                  <option value="">Select</option>
                  <option value="In-process">In-process</option>
                  <option value="Need to start">Need to start</option>
                  <option value="Complete">Complete</option>
                  <option value="Blocked">Blocked</option>
                </select>
              ) : (
                status
              )}
            </div>
          );
        },
      },
      {
        header: "Submitter",
        accessorKey: "submitter",
        cell: (info) => {
          const isEditing = editingCell?.rowId === info.row.original.id && 
                           editingCell?.columnId === "submitter";
          
          return isEditing ? (
            <input
              type="text"
              value={editValue}
              onChange={handleCellChange}
              onBlur={handleCellBlur}
              onKeyDown={handleKeyDown}
              autoFocus
              className="w-full px-1 border rounded"
            />
          ) : (
            <div 
              onClick={() => handleCellClick(info.row.original.id, "submitter", info.getValue())}
              className="min-h-[24px] w-full cursor-pointer"
            >
              {info.getValue()}
            </div>
          );
        },
      },
      {
        header: "URL",
        accessorKey: "url",
        cell: (info) => {
          const url = info.getValue();
          const isEditing = editingCell?.rowId === info.row.original.id && 
                           editingCell?.columnId === "url";
          
          if (isEditing) {
            return (
              <input
                type="text"
                value={editValue}
                onChange={handleCellChange}
                onBlur={handleCellBlur}
                onKeyDown={handleKeyDown}
                autoFocus
                className="w-full px-1 border rounded"
              />
            );
          }
          
          return url ? (
            <a
              href={`https://${url}`}
              className="text-blue-600 underline cursor-pointer"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                e.stopPropagation();
                if (!url) {
                  e.preventDefault();
                  handleCellClick(info.row.original.id, "url", url);
                }
              }}
            >
              {url}
            </a>
          ) : (
            <div 
              onClick={() => handleCellClick(info.row.original.id, "url", url)}
              className="min-h-[24px] w-full cursor-pointer"
            ></div>
          );
        },
      },
      {
        header: "Assigned",
        accessorKey: "assigned",
        cell: (info) => {
          const isEditing = editingCell?.rowId === info.row.original.id && 
                           editingCell?.columnId === "assigned";
          
          return isEditing ? (
            <input
              type="text"
              value={editValue}
              onChange={handleCellChange}
              onBlur={handleCellBlur}
              onKeyDown={handleKeyDown}
              autoFocus
              className="w-full px-1 border rounded"
            />
          ) : (
            <div 
              onClick={() => handleCellClick(info.row.original.id, "assigned", info.getValue())}
              className="min-h-[24px] w-full cursor-pointer"
            >
              {info.getValue()}
            </div>
          );
        },
      },
      {
        header: "Priority",
        accessorKey: "priority",
        cell: (info) => {
          const priority = info.getValue();
          let color = "";
          
          if (priority === "High") {
            color = "text-red-600";
          } else if (priority === "Low") {
            color = "text-blue-600";
          }

          const isEditing = editingCell?.rowId === info.row.original.id && 
                           editingCell?.columnId === "priority";
          
          return (
            <div 
              className={`font-semibold min-h-[24px] ${color} ${isEditing ? '' : 'cursor-pointer'}`}
              onClick={() => !isEditing && handleCellClick(info.row.original.id, "priority", info.getValue())}
            >
              {isEditing ? (
                <select
                  value={editValue}
                  onChange={handleCellChange}
                  onBlur={handleCellBlur}
                  onKeyDown={handleKeyDown}
                  autoFocus
                  className="w-full outline-none"
                >
                  <option value="">Select</option>
                  <option value="High">High</option>
                  <option value="Medium">Medium</option>
                  <option value="Low">Low</option>
                </select>
              ) : (
                priority
              )}
            </div>
          );
        },
      },
      {
        header: "Due Date",
        accessorKey: "dueDate",
        cell: (info) => {
          const isEditing = editingCell?.rowId === info.row.original.id && 
                           editingCell?.columnId === "dueDate";
          
          return isEditing ? (
            <input
              type="date"
              value={editValue}
              onChange={handleCellChange}
              onBlur={handleCellBlur}
              onKeyDown={handleKeyDown}
              autoFocus
              className="w-full px-1 border rounded"
            />
          ) : (
            <div 
              onClick={() => handleCellClick(info.row.original.id, "dueDate", info.getValue())}
              className="min-h-[24px] w-full cursor-pointer"
            >
              {info.getValue()}
            </div>
          );
        },
      },
      {
        header: "Ext. Value",
        accessorKey: "value",
        cell:  (info) => {
          const isEditing = editingCell?.rowId === info.row.original.id && 
                           editingCell?.columnId === "value";
          
          return isEditing ? (
            <input
              type="text"
              value={editValue}
              onChange={handleCellChange}
              onBlur={handleCellBlur}
              onKeyDown={handleKeyDown}
              autoFocus
              className="w-full px-1 border rounded"
            />
          ) : (
            <div 
              onClick={() => handleCellClick(info.row.original.id, "value", info.getValue())}
              className="min-h-[24px] w-full cursor-pointer"
            >
              {info.getValue()}
            </div>
          );
        },
      },
    ],
    [editingCell, editValue]
  );

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
   <div className=" bg-white w-[1440px] overflow-x-auto">
  <table className="w-full border-separate border-spacing-0 text-xs">
    <thead>
      <tr className="text-gray-600 font-medium">
        <th className="bg-[#EEEEEE] text-left pr-1 pl-2 gap-1 w-[256px] border-r">
          <div className="flex flex-row items-center w-[220]px  gap-1">
            <img src="/briefcase.png" alt="briefcase" className="w-4 h-4" />
            <span className="
            w-[200px] h-4">Job Request</span>
              <img src="/dropdown.png" alt="dropdown" className="w-3 h-3 ml-auto" /> 
          
          </div>

           
        </th>
         
          <th className="bg-[#EEEEEE] text-left px-3 py-2 w-[124px] border-r">
          <div className="flex items-center gap-1">
            <img src="/calender.png" alt="briefcase" className="w-4 h-4" />
            <span>Submitted</span>
            <img src="/dropdown.png" alt="dropdown" className="w-3 h-3 ml-auto" />
          </div>
        </th>

       

        <th className="bg-[#F5F5F5] text-left px-3 py-2 border-r">
          <div className="flex items-center gap-1">
            <img src="/calender.png" alt="calendar" className="w-4 h-4" />
            <span>Status</span>
            <img src="/dropdown.png" alt="dropdown" className="w-3 h-3 ml-auto" />
          </div>
        </th>
        <th className="bg-[#F5F5F5] text-left px-3 py-2 border-r">
          <div className="flex items-center gap-1">
            <img src="/person.png" alt="status" className="w-3 h-4 text-[#AFAFAF]" />
            <span>Submitter</span>
            <img src="/dropdown.png" alt="dropdown" className="w-3 h-3 ml-auto" />
          </div>
        </th>
       <th className="bg-[#F5F5F5] text-left px-3 py-2 border-r">
          <div className="flex items-center gap-1">
            <img src="/globe.png" alt="url" className="w-4 h-4" />
            <span>URL</span>
            <img src="/dropdown.png" alt="dropdown" className="w-3 h-3 ml-auto" />
          </div>
        </th>
        <th className="bg-[#F5F5F5] text-left px-3 py-2 border-r">
          <div className="flex items-center gap-1">
            <span>Assigned</span>
            <img src="/dropdown.png" alt="dropdown" className="w-3 h-3 ml-auto" />
          </div>
        </th>
        <th className="bg-[#E8F0E9] text-left px-3 py-2 border-r">Priority</th>
        <th className="bg-[#EAE3FC] text-left px-3 py-2 border-r">Due Date</th>
        <th className="bg-[#FFE9E0] text-left px-3 py-2">Est. Value</th>
      </tr>
    </thead>
    <tbody>
       {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="border-b hover:bg-gray-50">
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="border p-2">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
    </tbody>
  </table>
    <div className="mt-4 flex justify-between">
        <div className="text-sm">
        </div>
      </div>
</div>

       
  );
};

export default Table;