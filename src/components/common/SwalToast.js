import Swal from "sweetalert2";

// Factory function for common toast properties
const createToast = (icon, title) =>
  Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    icon,
    title,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

export const ShowSuccessSwalToast = (message) => {
  createToast("success", message).fire();
};

export const ShowErrorSwalToast = (message) => {
  createToast("error", message).fire();
};

export const ShowWarningSwalToast = (message) => {
  createToast("warning", message).fire();
};
