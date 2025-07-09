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
      status: "In-process",
      submitter: "",
      url: "",
      assigned: "",
      priority: "Low",
      dueDate: "30-01-2025",
      value: "2,800,000",
    },
    {
      id: 5,
      job: "Prepare financial report for Q4",
      status: "Complete",
      submitter: "",
      url: "",
      assigned: "",
      priority: "",
      dueDate: "10-01-2025",
      value: "",
    },
    {
      id: 6,
      job: "",
      status: "Complete",
      submitter: "",
      url: "www.jessicabrown.com",
      assigned: "",
      priority: "",
      dueDate: "25-01-2025",
      value: "",
    },
    {
      id: 7,
      job: "",
      status: "Blocked",
      submitter: "",
      url: "",
      assigned: "",
      priority: "",
      dueDate: "",
      value: "",
    },
    ...Array.from({ length: 17 }, (_, i) => ({
      id: i + 8,
      job: "",
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
                  className="w-full px-1 border rounded"
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
    <div className="p-4 bg-white">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className=" pr-1 pl-2 gap-1 text-left w-[256px] bg-[#EEEEEE]">Job Request</th>
            <th className="border p-2 text-left">Status</th>
            <th className="border p-2 text-left">Submitter</th>
            <th className="border p-2 text-left">URL</th>
            <th className="border p-2 text-left bg-[#E8F0E9]">Assigned</th>
            <th className="border p-2 text-left bg-[#EAE3FC]">Priority</th>
            <th className="border p-2 text-left bg-[#EAE3FC]">Due Date</th>
            <th className="border p-2 text-left bg-[#FFE9E0]">Ext. Value</th>
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