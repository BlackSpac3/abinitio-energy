"use client";

import { AppContext } from "@/context/AppContextProvider";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";
import { useContext, useEffect, useCallback } from "react";

const EmpDetailModal = () => {
  const { empModal, setEmpModal } = useContext(AppContext);

  const close = useCallback(() => {
    const dialog = document.getElementById("employee-detail-modal");
    setEmpModal(null);
    setTimeout(() => {
      dialog.close();
    }, 100);
  }, []);

  useEffect(() => {
    const dialog = document.getElementById("employee-detail-modal");

    const clickHandler = (e) => {
      if (e.target === dialog) {
        close();
      }
    };

    const keydownHandler = (e) => {
      if (e.keyCode === 27) {
        e.preventDefault();
        close();
      }
    };

    dialog.addEventListener("keydown", keydownHandler);
    dialog.addEventListener("click", clickHandler);

    return () => {
      dialog.removeEventListener("keydown", keydownHandler);
      dialog.removeEventListener("click", clickHandler);
    };
  }, [close]);

  return (
    <dialog
      id="employee-detail-modal"
      className="overflow-hidden overflow-y-auto rounded-lg bg-transparent outline-none"
    >
      <AnimatePresence>
        {empModal && (
          <motion.div
            initial={{ scaleY: 0 }}
            exit={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            className="relative flex h-fit w-full max-w-[480px] flex-col gap-5 overflow-hidden rounded-lg bg-white p-7 outline-none"
          >
            <div
              onClick={close}
              className="group absolute right-5 top-5 cursor-pointer rounded-md p-1 opacity-40 transition-all hover:bg-gray-50 hover:opacity-100"
            >
              <X className="size-5 transition-all group-active:scale-50" />
            </div>
            <div className="flex items-center gap-5">
              <Image
                src={empModal ? empModal.img : null}
                alt={empModal?.name}
                className="h-[80px] min-h-[80px] w-[80px] min-w-[80px] select-none rounded-full object-cover object-top"
              />
              <div>
                <p className="">{empModal?.name}</p>
                <p className="font-medium text-primary">{empModal.role}</p>
              </div>
            </div>

            <hr />
            <div>
              <motion.p
                initial={{ opacity: 0, y: 100 }}
                exit={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="overflow-hidden text-sm text-gray-400"
              >
                {empModal?.desc}
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </dialog>
  );
};
export default EmpDetailModal;
