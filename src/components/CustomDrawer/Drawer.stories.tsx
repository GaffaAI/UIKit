import { useState } from "react";
import { CustomDrawer } from "./Drawer";

export default {
  title: "Components/Drawer",
  component: CustomDrawer,
};

export const Default = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        className="px-4 py-2 bg-blue-600 text-white rounded"
        onClick={() => setOpen(true)}
      >
        Open Drawer
      </button>
      <CustomDrawer isOpen={open} onClose={() => setOpen(false)}>
        <div className="p-6">
          <h2 className="text-xl font-bold mb-2">Drawer Content</h2>
          <p>This is a sample drawer. Click outside to close.</p>
          <button
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
            onClick={() => setOpen(false)}
          >
            Close
          </button>
        </div>
      </CustomDrawer>
    </div>
  );
};
